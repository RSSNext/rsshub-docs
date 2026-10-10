---
sidebar: auto
---

# Deployment

If you want a ready-to-use option, try [Folo](https://folo.is/), an AI RSS reader built for modern feed workflows. The project is also open source on [GitHub](https://github.com/RSSNext/Folo).

RSSHub provides a painless deployment process if you are equipped with basic programming knowledge, you may open an [issue](https://github.com/DIYgod/RSSHub/issues/new/choose) if you believe you have encountered a problem not listed [here](https://github.com/DIYgod/RSSHub/issues), the community will try to sort it out asap.

The deployment may involve the followings:

1.  Command line interface
2.  [Git](https://git-scm.com/)
3.  [Node.js](https://nodejs.org/)
4.  [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/zh-Hans/docs/install)

Deploy for public access may require:

1.  [Nginx](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
2.  [Docker](https://www.docker.com/get-started) or [docker-compose](https://docs.docker.com/compose/install/)
3.  [Redis](https://redis.io/download)
4.  [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
5.  [Google App Engine](https://cloud.google.com/appengine/)
6.  [Fly.io](https://fly.io/)
7.  [Zeabur](https://zeabur.com)
8.  [Sealos](https://sealos.io)

## Deploy to Hostinger

Deploy RSSHub with a single click on Hostinger – pre-configured and ready to run

[![Deploy on Hostinger](https://assets.hostinger.com/vps/deploy.svg)](https://www.hostg.xyz/aff_c?offer_id=48&aff_id=244128&url_id=6824)

## Docker Image

The following two registries are supported:

- Docker Hub: [`diygod/rsshub`](https://hub.docker.com/r/diygod/rsshub)

- GitHub: [`ghcr.io/diygod/rsshub`](https://github.com/DIYgod/RSSHub/pkgs/container/rsshub)

Supported architectures include:

- `linux/amd64`

- `linux/arm64`

~~- `linux/arm/v7`~~ (Dropped support since `2025-04-22`)

There are several tags available:

| Tag | Description | Puppeteer Supported | Example |
| --- | --- | --- | --- |
| `latest` | Latest version  | No  | `latest` |
| `chromium-bundled`  | Latest version with Chromium bundled in  | Yes | `chromium-bundled`|
| `{YYYY-MM-DD}`   | Daily build; may be updated by later builds that day | No     | `2021-06-18` |
| `chromium-bundled-{YYYY-MM-DD}` | Daily build with Chromium; may be updated that day | Yes | `chromium-bundled-2021-06-18` |
| `{commit hash}` | Specific commit | No | `e7c233b1df982fae10684a11c9df57892e96940a` |
| `chromium-bundled-{commit hash}` | Specific commit with Chromium bundled in | Yes | `chromium-bundled-e7c233b1df982fae10684a11c9df57892e96940a` |

After publishing both multi-platform image variants, the release workflow creates a [GitHub source release](https://github.com/DIYgod/RSSHub/releases) tagged `vYYYY.MM.DD-<7-character-SHA>`, using the UTC release date. Its release notes list the full source commit and corresponding image tags. To pin a Docker deployment to that release, use the full 40-character commit SHA, or `chromium-bundled-<full-SHA>`, as the image tag. For example, `ghcr.io/diygod/rsshub:<full-SHA>`. Daily tags can change after another build on the same day.

While supporting puppeteer may consume more resources, it also supports a wider range of routes.

## Docker Compose Deployment (Recommended)

### Install

Download [docker-compose.yml](https://github.com/DIYgod/RSSHub/blob/master/docker-compose.yml)

```bash
$ wget https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml
```

Check if any configuration needs to be changed

```bash
$ vi docker-compose.yml  # or your favorite editor
```

Launch

```bash
$ docker-compose up -d
```

Open `http://{Server IP}:1200` in your browser, enjoy it! ✅

### Update

**Automatic Update**

Use [watchtower](https://github.com/containrrr/watchtower)

**Manual Update**

Update image

```bash
$ docker-compose pull
```

Restart container

```bash
$ docker-compose up -d
```

### Configuration

Edit `environment` in [docker-compose.yml](https://github.com/DIYgod/RSSHub/blob/master/docker-compose.yml)

### Browserless V2 {#browserless-v2}

The current Compose file uses [Browserless V2](https://docs.browserless.io/enterprise/open-source) with the `ghcr.io/browserless/chromium` image. These entries connect RSSHub to the browser service over CDP:

```yaml
services:
    rsshub:
        environment:
            PLAYWRIGHT_CDP_ENDPOINT: 'ws://browserless:3000?token=${BROWSERLESS_TOKEN:-rsshub}'
    browserless:
        image: ghcr.io/browserless/chromium
        environment:
            TOKEN: '${BROWSERLESS_TOKEN:-rsshub}'
        healthcheck:
            test: ['CMD-SHELL', 'curl -f "http://localhost:3000/pressure?token=$$TOKEN"']
```

Set `BROWSERLESS_TOKEN` in the Compose `.env` file so that the endpoint's `token` and Browserless's `TOKEN` match. The checked-in file uses `rsshub` when the variable is unset. Keep the existing Redis, ports, dependencies, and RSSHub and Redis health checks when merging this excerpt. Update the Browserless health check to include its token as shown above. `$$TOKEN` passes `$TOKEN` to the container shell for expansion instead of having Compose expand it on the host.

An image update does not replace a Compose file you already downloaded. To migrate an existing deployment, manually update the Browserless image, replace its old WebSocket setting with `PLAYWRIGHT_CDP_ENDPOINT`, add the matching `TOKEN`, and update the Browserless health check. Then pull the images and recreate the services with `docker-compose pull` and `docker-compose up -d`.

`PLAYWRIGHT_CDP_ENDPOINT` uses the Chrome DevTools Protocol. `PLAYWRIGHT_WS_ENDPOINT` is for a [native Playwright server endpoint](https://playwright.dev/docs/api/class-browsertype#browser-type-connect), which uses a different protocol and must match the client's Playwright version. Use the CDP setting for the Browserless service shown above.

## Docker Deployment

:::warning

This deployment method does not include browserless and redis dependencies. If needed, please switch to the Docker Compose deployment method or deploy external dependencies yourself.

:::

### Install

Execute the following command to pull RSSHub's docker image.

No puppeteer dependency

```bash
$ docker run -d --name rsshub -p 1200:1200 diygod/rsshub
```

With puppeteer dependency

```bash
$ docker run -d --name rsshub -p 1200:1200 diygod/rsshub:chromium-bundled
```

Open `http://{Server IP}:1200` in your browser, enjoy it! ✅

### Update

**Automatic Update**

Use [watchtower](https://github.com/containrrr/watchtower)

**Manual Update**

Remove the old container

```bash
$ docker stop rsshub
$ docker rm rsshub
```

Then repeat the installation steps

### Configuration

The simplest way to configure RSSHub container is via system environment variables.

For example, adding `-e CACHE_EXPIRE=3600` will set the cache time to 1 hour.

```bash
$ docker run -d --name rsshub -p 1200:1200 -e CACHE_EXPIRE=3600 -e GITHUB_ACCESS_TOKEN=example diygod/rsshub
```

This deployment method does not include puppeteer (unless using `diygod/rsshub:chromium-bundled` instead) and Redis dependencies. Use the Docker Compose deployment method or deploy external dependencies yourself if you need it.

To configure more options please refer to [Configuration](#deployment-docker-compose-deployment-recommended-configuration).

<span id="private-routes"></span>

### Private Routes {#private-routes}

Node.js and Docker deployments can load private routes from a directory of standalone `.mjs` modules without changing RSSHub's built-in routes. Each filename defines a namespace; existing namespaces and reserved service paths cannot be replaced.

Create `routes-user/personal.mjs` beside your Compose file. Export `namespace` and a `routes` array, with each handler returning RSSHub's `Data` structure:

```js
export const namespace = { name: 'Personal', url: 'example.com' };

export const routes = [
    {
        path: '/news',
        name: 'News',
        maintainers: [],
        handler: async () => ({
            title: 'Personal news',
            link: 'https://example.com/',
            item: [
                {
                    title: 'Example item',
                    link: 'https://example.com/#item-1',
                    description: '<p>Replace this item with content from your own source.</p>',
                },
            ],
        }),
    },
];
```

This registers `/personal/news`. Replace the example item with your source's articles, giving each item a stable, unique `link`. Include `pubDate` when the source provides a publication time; omit it when the time is unknown.

Merge the following into the existing RSSHub service to mount the modules read-only and point `USER_ROUTES_PATH` to their container path:

```yaml
services:
    rsshub:
        environment:
            USER_ROUTES_PATH: /app/routes-user
            ACCESS_KEY: '${ACCESS_KEY:?Set ACCESS_KEY in the Compose .env file}'
        volumes:
            - ./routes-user:/app/routes-user:ro
```

Set `ACCESS_KEY` in the Compose `.env` file and use the documented `key` or `code` parameters to authenticate subscriptions. Follow the [access control configuration](/deploy/config#configuration-access-control-configurations), including its authenticated health check configuration.

For a manual Node.js deployment, set `USER_ROUTES_PATH` to the directory's absolute path on the host. Restart RSSHub after adding or editing modules. Standalone modules use JavaScript and cannot use TypeScript or RSSHub's `@/` import aliases. Runtime directory loading is available on Node.js and Docker; Workers need routes included at build time.

## Manual Deployment

The most direct way to deploy `RSSHub`, you can follow the steps below to deploy`RSSHub` on your computer, server or anywhere.

### Install

Execute the following commands to download the source code

```bash
$ git clone https://github.com/DIYgod/RSSHub.git
$ cd RSSHub
```

Execute the following commands to install dependencies

```bash
pnpm i
```

### Build

```bash
pnpm build
```

### Launch

Under `RSSHub`'s root directory, execute the following commands to launch

::: code-group

```bash [pnpm]
pnpm start
```

```bash [pm2]
pm2 start dist/index.mjs --name rsshub
```

:::

Open `http://{Server IP}:1200` in your browser, enjoy it! ✅

### Configuration

:::tip

On arm/arm64, this deployment method does not include puppeteer dependencies. To enable puppeteer, install Chromium from your distribution repositories first, then set `CHROMIUM_EXECUTABLE_PATH` to its executable path.

Debian:

```bash
$ apt install chromium
$ echo >> .env
$ echo 'CHROMIUM_EXECUTABLE_PATH=chromium' >> .env
```

Ubuntu/Raspbian:

```bash
$ apt install chromium-browser
$ echo >> .env
$ echo 'CHROMIUM_EXECUTABLE_PATH=chromium-browser' >> .env
```

:::

RSSHub can be configured by setting environment variables.

Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of `NAME=VALUE`. For example:

```shell
CACHE_TYPE=redis
CACHE_EXPIRE=600
```

Please notice that it will not override already existed environment variables, more rules please refer to [dotenv](https://github.com/motdotla/dotenv)

This deployment method does not include Redis dependencies. Use the Docker Compose deployment method or deploy external dependencies yourself if you need it.

To configure more options please refer to [Configuration](#deployment-docker-compose-deployment-recommended-configuration).

### Update

Under `RSSHub`'s directory, execute the following commands to pull the latest source code for `RSSHub`

```bash
$ git pull
```

Then repeat the installation steps.

### A tip for Nix users

To install nodejs, yarn and jieba (to build documentation) you can use the following `nix-shell` configuration script.

```nix
let
    pkgs = import <nixpkgs> {};
    node = pkgs.nodejs-12_x;
in pkgs.stdenv.mkDerivation {
    name = "nodejs-yarn-jieba";
    buildInputs = [node pkgs.yarn pkgs.pythonPackages.jieba];
}
```

## Kubernetes(Helm) Deployment

RSSHub can be installed in Kubernetes using the Helm Chart from [RSSHub Helm Chart](https://github.com/NaturalSelectionLabs/helm-charts/tree/main/charts/rsshub)

Ensure that the following requirements are met:

-   Kubernetes 1.16+
-   Helm version 3.9+ is [installed](https://helm.sh/docs/intro/install/)

### Install

Add NaturalSelection Labs chart repository to Helm:

```bash
helm repo add nsl https://naturalselectionlabs.github.io/helm-charts
```

You can update the chart repository by running:

```bash
helm repo update
```

And install it with the `helm` command line:

```bash
helm install my-release nsl/rsshub
```

### Update

To upgrade the my-release RSSHub deployment:

```bash
helm upgade my-release nsl/rsshub
```

### Uninstall

To uninstall/delete the my-release RSSHub deployment:

```bash
helm delete my-release
```

### Installing with custom values

::: code-group

```bash [Using Helm CLI]
helm install my-release nsl/rsshub \
  --set="image.tag=2023-12-04" \
  --set="replicaCount=2"
```

```yaml [With a custom values file]
# File custom-values.yml
## Install with "helm install my-release nsl/rsshub -f ./custom-values.yml
image:
  tag: "2023-12-04"
replicaCount: 2
```

:::

### Install with HA mode

::: code-group

```yaml [HA mode without autoscaling]
replicaCount: 3

puppeteer:
  replicaCount: 2
```

```yaml [HA mode with autoscaling]
autoscaling:
  enabled: true
  minReplicas: 3

puppeteer:
  autoscaling:
    enabled: true
    minReplicas: 2
```

:::

### Install with external Redis

```yaml
redis:
  # -- Disable internal redis
  enabled: false
env:
  # -- other env --
  REDIS_URL: redis://external-redis:6379/
```

To configure more values please refer to [RSSHub Helm Chart](https://github.com/NaturalSelectionLabs/helm-charts/tree/main/charts/rsshub).

## Ansible Deployment

This Ansible playbook includes RSSHub, Redis, browserless (uses Docker) and Caddy 2

Currently only support Ubuntu 20.04

Requires sudo privilege and virtualization capability (Docker will be automatically installed)

### Install

```bash
sudo apt update
sudo apt install ansible
git clone https://github.com/DIYgod/RSSHub.git ~/RSSHub
cd ~/RSSHub/scripts/ansible
sudo ansible-playbook rsshub.yaml
# When prompt to enter a domain name, enter the domain name that this machine/VM will use
# For example, if your users use https://rsshub.example.com to access your RSSHub instance, enter rsshub.example.com (remove the https://)
```

### Update

```bash
cd ~/RSSHub/scripts/ansible
sudo ansible-playbook rsshub.yaml
# When prompt to enter a domain name, enter the domain name that this machine/VM will use
# For example, if your users use https://rsshub.example.com to access your RSSHub instance, enter rsshub.example.com (remove the https://)
```

## Deploy to Vercel

### Instant deploy (without automatic update)

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/DIYgod/RSSHub)

### Automatic deploy upon update

1.  [Fork RSSHub](https://github.com/DIYgod/RSSHub/fork) to your GitHub account.
2.  Deploy your fork to Vercel: Login Vercel with your GitHub account, create and deploy [new Vercel project](https://vercel.com/new/) with your RSSHub repository.
3.  Install [Pull](https://github.com/apps/pull) app to keep your fork synchronized with RSSHub.

::: tip
If you encounter an `ERR_REQUIRE_ESM` error during deployment, you need to enable experimental Node.js require() of ES Module support. Add the environment variable `NODE_OPTIONS=--experimental-require-module` in your Vercel project settings. See [Vercel's documentation](https://vercel.com/docs/functions/runtimes/node-js/advanced-node-configuration#experimental-node.js-require-of-es-module) for more details.
:::

## Deploy to Cloudflare Workers

RSSHub can be deployed to Cloudflare Workers with one click.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/DIYgod/RSSHub)

Playwright is supported via [Cloudflare Browser Run](https://developers.cloudflare.com/browser-run/playwright/), and caching is supported via [Cloudflare Workers KV](https://developers.cloudflare.com/kv/).

### Browser Session Reuse {#browser-session-reuse}

When `PLAYWRIGHT_WS_ENDPOINT` is unset, RSSHub uses the `BROWSER` binding for browser requests. On this path, the repository's `wrangler.toml` configures a `BrowserSession` Durable Object to coordinate a shared Browser Run session across requests and Worker isolates. Each request uses a separate browser context. Cleanup closes that context and disconnects its Playwright client; the acquired session remains available for reuse, with a 60-second idle timeout. Expired sessions are replaced when a later request reconnects. A configured `PLAYWRIGHT_WS_ENDPOINT` takes precedence and uses the remote server instead. See Cloudflare's [Playwright session reuse](https://developers.cloudflare.com/browser-run/playwright/#session-reuse) documentation.

Retain these entries when maintaining your own Wrangler configuration:

```toml
compatibility_date = "2026-09-01"
compatibility_flags = ["global_fetch_strictly_public"]

[browser]
binding = "BROWSER"

[[durable_objects.bindings]]
name = "BROWSER_SESSIONS"
class_name = "BrowserSession"

[[migrations]]
tag = "browser-session-v1"
new_sqlite_classes = ["BrowserSession"]
```

The Worker entry point must also export `BrowserSession`; RSSHub's `lib/worker.ts` already does this:

```ts
export { BrowserSession } from './utils/browser-session.worker';
```

For an existing Worker using migrations, retain its previous migration entries and append the new class migration with a unique tag if `BrowserSession` has not already been created. Keep `BROWSER`, `BROWSER_SESSIONS`, the class export and the migration in sync when updating a custom configuration. The example follows the repository's migration format; consult [Durable Object class migrations](https://developers.cloudflare.com/durable-objects/reference/durable-object-class-migrations-legacy/) if your deployment uses a different lifecycle configuration.

Without `BROWSER_SESSIONS`, each browser request using the `BROWSER` binding launches a Browser Run session. Session reuse can reduce repeated launches; it does not guarantee lower charges. Check your account's usage and current [Browser Run pricing](https://developers.cloudflare.com/browser-run/platform/pricing/) after deployment.

## Deploy to Zeabur

1.  [Sign up for Zeabur](https://dash.zeabur.com)
2.  Create a new project.
3.  Create a new service in the project, select deploying from the **marketplace**.
4.  Add a domain name, if you use a custom domain name, you can refer to [Zeabur's domain name binding document](https://docs.zeabur.com/deploy/domain-binding).

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/X46PTP)

## Deploy to Heroku

### Instant deploy (without automatic update)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2FDIYgod%2FRSSHub)

### Automatic deploy upon update

1.  [Fork RSSHub](https://github.com/DIYgod/RSSHub/fork) to your GitHub account.
2.  Deploy your fork to Heroku: `https://heroku.com/deploy?template=URL`, where `URL` is your fork address (_e.g._ `https://github.com/USERNAME/RSSHub`).
3.  Configure `automatic deploy` in Heroku app to follow the changes to your fork.
4.  Install [Pull](https://github.com/apps/pull) app to keep your fork synchronized with RSSHub.

## Deploy to Fly.io

### Method 1: Fork

1.  [Fork RSSHub](https://github.com/DIYgod/RSSHub/fork) to your GitHub account;
2.  Clone the source code from your fork

    ```bash
    $ git clone https://github.com/<your username>/RSSHub.git
    $ cd RSSHub
    ```

3.  [Sign up for Fly.io](https://fly.io/app/sign-up) and install the [flyctl CLI](https://fly.io/docs/hands-on/install-flyctl/);
4.  Run `fly launch` and choose a unique name and region to deploy;
5.  Use `fly secrets set KEY=VALUE` to [configure some modules](config#configuration-route-specific-configurations);
6.  [Set up automatic deployment via GitHub Actions](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/);
7.  (Optional) Use `fly certs add your domain` to configure a custom domain, and follow the instructions to configure the related domain resolution at your DNS service provider (you can check the domain configuration status on the Dashboard Certificate page).

Upgrade: On the homepage of your Forked repository, click "Sync fork - Update Branch" to manually update to the latest official master branch, or install the [Pull](https://github.com/apps/pull) GitHub app to keep your fork synchronized with upstream.

### Method 2: Maintain fly.toml by yourself

1.  [Sign up for Fly.io](https://fly.io/app/sign-up) and install the [flyctl CLI](https://fly.io/docs/hands-on/install-flyctl/);
2.  Create a new empty directory locally, run `fly launch` in it, and choose a unique name and instance region;
3.  Edit the generated fly.toml file, add

   ```toml
   [build]
   image = "diygod/rsshub:latest"
   ```

   Depending on the actual situation, you may want to use other image tags, please read the relevant content of [Docker Image](#deployment-docker-image);
4.  Modify the `[env]` section in fly.toml or use `fly secrets set KEY=VALUE` to [configure some modules](config#configuration-route-specific-configurations);
5.  Execute `fly deploy` to start the application;
6.  (Optional) Use `fly certs add your domain` to configure a custom domain, and follow the instructions to configure the related domain resolution at your DNS service provider (you can check the domain configuration status on the Dashboard Certificate page).

Upgrade: Enter the directory where you saved the `fly.toml` file and execute `fly deploy` to trigger the steps of pulling the latest image and starting the upgraded application.

### Configure built-in Upstash Redis as cache

Run in the `RSSHub` folder

```bash
$ flyctl redis create
```

to create a new Redis database. Choose the same region as when you created the RSSHub app above, and it is recommended to enable [eviction](https://redis.io/docs/reference/eviction/). After creation, a string in the form of `redis://default:<password>@<domain>.upstash.io` will be printed.

Due to [a bug in a dependency](https://github.com/luin/ioredis/issues/1576), you currently need to append the `family=6` parameter to the URL provided by Fly.io, i.e., use `redis://default:<password>@<domain>.upstash.io/?family=6` as the connection URL.

Then configure the `[env]` section in fly.toml or run

```bash
$ fly secrets set CACHE_TYPE=redis REDIS_URL='<the connection URL>'
```

and execute `fly deploy` (if use the second install method) to trigger a redeployment to complete the configuration.

## Deploy to Railway

Automatic updates are included.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/QxW__f?referralCode=9wT3hc)

For a GitHub source deployment, use the repository root as the service's Root Directory. The repository's `railway.json` explicitly selects the Dockerfile builder and the root `Dockerfile`, which installs dependencies with the project's Corepack-managed pnpm version. Leave custom build and start commands unset so Railway uses the Dockerfile and its startup command. RSSHub reads Railway's `PORT` environment variable.

If an existing template deployment reports `yarn@pnpm@...` or a global Yarn version error, check that the build log is using `Dockerfile`, update the deployed source, and remove legacy Yarn/Nixpacks build-command overrides. You can also set `RAILWAY_DOCKERFILE_PATH=Dockerfile` in the service variables. See Railway's [Dockerfile guide](https://docs.railway.com/builds/dockerfiles) and [configuration reference](https://docs.railway.com/config-as-code/reference). A local Docker build alone does not verify the Railway service's builder settings or deployed runtime.

## Deploy to Google App Engine(GAE)

### Before You Begin

Follow the [official guide](https://cloud.google.com/appengine/docs/flexible/nodejs/quickstart) for completing your GCP account settings, creating a new Node project, adding billing information (required), installing git and initializing gcloud([link](https://cloud.google.com/sdk/gcloud/)). Node.js is not required if you don't plan to debug RSSHub locally.

Please note, GAE free tier doesn't support Flexible Environment, please check the pricing plan prior to deployment.

Node.js standard environment is still under beta, unknown or unexpected errors might be encountered during the deployment.

Execute `git clone https://github.com/DIYgod/RSSHub.git` to pull the latest code

### app.yaml Settings

#### Deploy to Flexible Environment

Under RSSHub's root directory, create a file `app.yaml` with the following content:

```yaml
# [START app_yaml]
runtime: custom
env: flex

# This sample incurs costs to run on the App Engine flexible environment.
# The settings below are to reduce costs during testing and are not appropriate
# for production use. For more information, see:
# https://cloud.google.com/appengine/docs/flexible/nodejs/configuring-your-app-with-app-yaml
manual_scaling:
    instances: 1
# app engine resources, adjust to suit your needs, the required disk space is 10 GB
resources:
    cpu: 1
    memory_gb: 0.5
    disk_size_gb: 10
network:
    forwarded_ports:
        - 80:1200
        - 443:1200
# environment variables section, refer to Settings
env_variables:
    CACHE_EXPIRE: '300'
# [END app_yaml]
```

#### Deploy to standard environment

Under RSSHub's root directory, create a file `app.yaml` with the following content:

```yaml
# [START app_yaml]
runtime: nodejs8

network:
    forwarded_ports:
        - 80:1200
        - 443:1200
# environment variables section, refer to Settings
env_variables:
    CACHE_EXPIRE: '300'
# [END app_yaml]
```

### Install

Under RSSHub's root directory, execute the following commands to launch RSSHub

```bash
gcloud app deploy
```

For changing the deployment project id or version id, please refer to `Deploying a service` section [here](https://cloud.google.com/appengine/docs/flexible/nodejs/testing-and-deploying-your-app).

You can access your `Google App Engine URL` to check the deployment status

## Deploy to Sealos

The Sealos template deploys RSSHub with Redis caching, Browserless, persistent Redis storage, and an HTTPS endpoint.

[![Deploy on Sealos](https://sealos.io/Deploy-on-Sealos.svg)](https://sealos.io/products/app-store/rsshub)

## Deploy to PikaPods

Run RSSHub from just $1/month. Includes automatic updates and $5 free starting credit.

[![Run on PikaPods](https://www.pikapods.com/static/run-button.svg)](https://www.pikapods.com/pods?run=rsshub)

## Deploy to Pethost

[Pethost](https://pethost.dev) runs RSSHub from the [docker-compose.yml](https://github.com/DIYgod/RSSHub/blob/master/docker-compose.yml) above, with Redis and Browserless, and serves it over HTTPS.

1.  Download `docker-compose.yml` and remove the `ports` entry of the `rsshub` service: Pethost serves port 1200 through its own HTTPS proxy.
2.  Install the [Pethost CLI](https://pethost.dev/docs/cli/) and run `pethost deploy` in the folder that has the file.
3.  Give RSSHub its address with the command the deploy prints: `pethost domain add rsshub.<your-account>.pethost.app rsshub:1200`.

See the [Pethost guide](https://pethost.dev/blog/self-host-rsshub/) for configuration and updates.

## Play with Docker

If you would like to test routes or avoid IP limits, etc., you may build your own RSSHub for free by clicking the button below.

[![Try in PWD](https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png)](https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml)

:::warning

-   [DockerHub](https://hub.docker.com) account required
-   [Play with Docker](https://labs.play-with-docker.com/) instance will last for 4 hours at most. It should only be used for testing purpose
-   If deploy success but port cannot be auto-deteced，please click the `open port` button on the top and type `1200`
-   Sometimes PWD won't work as expected. If you encounter blank screen after `Start`, or some error during initialization, please retry

:::
