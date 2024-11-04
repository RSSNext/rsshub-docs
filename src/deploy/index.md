---
sidebar: auto
---

# Deployment

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

## Docker Image

The following two registries are supported:

- Docker Hub: [`diygod/rsshub`](https://hub.docker.com/r/diygod/rsshub)

- GitHub: [`ghcr.io/diygod/rsshub`](https://github.com/DIYgod/RSSHub/pkgs/container/rsshub)

Supported architectures include:

- `linux/amd64`

- `linux/arm/v7`

- `linux/arm64`

There are several tags available:

| Tag | Description | Puppeteer Supported | Example |
| --- | --- | --- | --- |
| `latest` | Latest version  | No  | `latest` |
| `chromium-bundled`  | Latest version with Chromium bundled in  | Yes | `chromium-bundled`|
| `{YYYY-MM-DD}`   | Specific date of the release    | No     | `2021-06-18` |
| `chromium-bundled-{YYYY-MM-DD}` | Specific date of the release with Chromium bundled in | Yes | `chromium-bundled-2021-06-18` |
| `{commit hash}` | Specific commit | No | `e7c233b1df982fae10684a11c9df57892e96940a` |

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

To configure more options please refer to [Configuration](#configuration).

## Manual Deployment

The most direct way to deploy `RSSHub`, you can follow the steps below to deploy`RSSHub` on your computer, server or anywhere.

### Install

Execute the following commands to download the source code

```bash
$ git clone https://github.com/DIYgod/RSSHub.git
$ cd RSSHub
```

Execute the following commands to install dependencies

::: code-group

```bash [pnpm]
pnpm i
```

```bash [yarn]
yarn i
```

```bash [npm]
npm install
```

:::

### Build

::: code-group

```bash [pnpm]
pnpm build
```

```bash [yarn]
yarn build
```

```bash [npm]
npm run build
```

:::

### Launch

Under `RSSHub`'s root directory, execute the following commands to launch

::: code-group

```bash [pnpm]
pnpm start
```

```bash [yarn]
yarn start
```

```bash [npm]
npm run start
```

```bash [pm2]
pm2 start lib/index.ts --name rsshub
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

To configure more options please refer to [Configuration](#configuration).

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

## Deploy to Railway

Automatic updates are included.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/QxW__f?referralCode=9wT3hc)

## Deploy to Heroku

### Instant deploy (without automatic update)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2FDIYgod%2FRSSHub)

### Automatic deploy upon update

1.  [Fork RSSHub](https://github.com/DIYgod/RSSHub/fork) to your GitHub account.
2.  Deploy your fork to Heroku: `https://heroku.com/deploy?template=URL`, where `URL` is your fork address (_e.g._ `https://github.com/USERNAME/RSSHub`).
3.  Configure `automatic deploy` in Heroku app to follow the changes to your fork.
4.  Install [Pull](https://github.com/apps/pull) app to keep your fork synchronized with RSSHub.

## Deploy to Zeabur

1.  [Sign up for Zeabur](https://dash.zeabur.com)
2.  Create a new project.
3.  Create a new service in the project, select deploying from the **marketplace**.
4.  Add a domain name, if you use a custom domain name, you can refer to [Zeabur's domain name binding document](https://docs.zeabur.com/deploy/domain-binding).

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/X46PTP)

## Deploy to Vercel <Badge type="danger" text="🚧 Under repair" />

### Instant deploy (without automatic update)

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/DIYgod/RSSHub)

### Automatic deploy upon update

1.  [Fork RSSHub](https://github.com/DIYgod/RSSHub/fork) to your GitHub account.
2.  Deploy your fork to Vercel: Login Vercel with your GitHub account, create and deploy [new Vercel project](https://vercel.com/new/) with your RSSHub repository.
3.  Install [Pull](https://github.com/apps/pull) app to keep your fork synchronized with RSSHub.

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
5.  Use `fly secrets set KEY=VALUE` to [configure some modules](config#route-specific-configurations);
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

   Depending on the actual situation, you may want to use other image tags, please read the relevant content of [Docker Image](#docker-image);
4.  Modify the `[env]` section in fly.toml or use `fly secrets set KEY=VALUE` to [configure some modules](config#route-specific-configurations);
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

## Deploy to Sealos(use Redis as cache)

Automatic updates are included.

[![Deploy to Sealos](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://template.cloud.sealos.io/deploy?templateName=rsshub)

## Deploy to PikaPods

Run RSSHub from just $1/month. Includes automatic updates and $5 free starting credit.

[![Run on PikaPods](https://www.pikapods.com/static/run-button.svg)](https://www.pikapods.com/pods?run=rsshub)

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

## Play with Docker

If you would like to test routes or avoid IP limits, etc., you may build your own RSSHub for free by clicking the button below.

[![Try in PWD](https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png)](https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml)

:::warning

-   [DockerHub](https://hub.docker.com) account required
-   [Play with Docker](https://labs.play-with-docker.com/) instance will last for 4 hours at most. It should only be used for testing purpose
-   If deploy success but port cannot be auto-deteced，please click the `open port` button on the top and type `1200`
-   Sometimes PWD won't work as expected. If you encounter blank screen after `Start`, or some error during initialization, please retry

:::
