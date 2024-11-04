---
sidebar: auto
---

# 部署

部署 RSSHub 需要基本的计算机编程常识，如果您在部署过程中遇到无法解决的问题请到 [issues](https://github.com/DIYgod/RSSHub/issues) 寻找类似的问题或 [向我们提问](https://github.com/DIYgod/RSSHub/issues/new/choose)，我们会尽快给您答复。

部署涉及到以下基本编程常识：

1.  命令行操作
2.  [Git](https://git-scm.com/)
3.  [Node.js](https://nodejs.org/)
4.  [npm](https://www.npmjs.com/get-npm) 或 [yarn](https://yarnpkg.com/zh-Hans/docs/install)

部署到可外网访问则可能涉及到：

1.  [Nginx](https://www.nginx.com/resources/wiki/start/topics/tutorials/install/)
2.  [Docker](https://www.docker.com/get-started) 或 [docker-compose](https://docs.docker.com/compose/install/)
3.  [Redis](https://redis.io/download)
4.  [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
5.  [Google App Engine](https://cloud.google.com/appengine/)
6.  [Fly.io](https://fly.io/)
7.  [Zeabur](https://zeabur.com)
8.  [Sealos](https://sealos.io)

## Docker 镜像

支持两种注册表：

- Docker Hub: [`diygod/rsshub`](https://hub.docker.com/r/diygod/rsshub)
- GitHub: [`ghcr.io/diygod/rsshub`](https://github.com/DIYgod/RSSHub/pkgs/container/rsshub)

支持以下架构：

- `linux/amd64`
- `linux/arm/v7`
- `linux/arm64`

有以下几种 tags：

| Tag | 描述 | 支持 puppeteer | 举例 |
| --- | --- | --- | --- |
| `latest` | 最新 | No | `latest` |
| `chromium-bundled` | 最新 | Yes | `chromium-bundled` |
| `{YYYY-MM-DD}` | 特定日期 | No | `2021-06-18` |
| `chromium-bundled-{YYYY-MM-DD}` | 特定日期 | Yes | `chromium-bundled-2021-06-18` |
| `{commit hash}` | 特定提交  | No | `e7c233b1df982fae10684a11c9df57892e96940a` |

支持 puppeteer 会占用更多资源，但支持更多路由

## Docker Compose 部署（推荐）

### 安装

下载 [docker-compose.yml](https://github.com/DIYgod/RSSHub/blob/master/docker-compose.yml)

```bash
$ wget https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml
```

检查有无需要修改的配置

```bash
$ vi docker-compose.yml  # 也可以是你喜欢的编辑器
```

启动

```bash
$ docker-compose up -d
```

在浏览器中打开 `http://{Server IP}:1200`，enjoy it! ✅

### 更新

**自动更新**

使用 [watchtower](https://github.com/containrrr/watchtower)

**手动更新**

更新镜像

```bash
$ docker-compose pull
```

重启容器

```bash
$ docker-compose up -d
```

### 添加配置

修改 [docker-compose.yml](https://github.com/DIYgod/RSSHub/blob/master/docker-compose.yml) 中的 `environment` 进行配置

## Docker 部署

:::warning

该部署方式不包括 browserless 和 redis 依赖，如有需要请改用 Docker Compose 部署方式或自行部署外部依赖

:::

### 安装

无 puppeteer 依赖

```bash
$ docker run -d --name rsshub -p 1200:1200 diygod/rsshub
```

有 puppeteer 依赖

```bash
$ docker run -d --name rsshub -p 1200:1200 diygod/rsshub:chromium-bundled
```

在浏览器中打开 `http://{Server IP}:1200`，enjoy it! ✅

### 更新

**自动更新**

使用 [watchtower](https://github.com/containrrr/watchtower)

**手动更新**

删除旧容器

```bash
$ docker stop rsshub
$ docker rm rsshub
```

然后重复安装步骤

### 添加配置

配置运行在 docker 中的 RSSHub，最便利的方法是使用 docker 环境变量

以设置缓存时间为 1 小时举例，只需要在运行时增加参数：`-e CACHE_EXPIRE=3600`

```bash
$ docker run -d --name rsshub -p 1200:1200 -e CACHE_EXPIRE=3600 -e GITHUB_ACCESS_TOKEN=example diygod/rsshub
```

## 手动部署

部署 `RSSHub` 最直接的方式，您可以按照以下步骤将 `RSSHub` 部署在您的电脑、服务器或者其他任何地方

### 安装

首先是下载 `RSSHub` 的源码

```bash
$ git clone https://github.com/DIYgod/RSSHub.git
$ cd RSSHub
```

下载完成后，需要安装依赖

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

### 编译

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

### 启动

然后在 `RSSHub` 文件夹中运行下面的命令就可以启动

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

在浏览器中打开 `http://{Server IP}:1200`，enjoy it! ✅

### 添加配置

:::tip

在 arm/arm64 上，此部署方式不包含 puppeteer 依赖。要启用 puppeteer，你需要先从发行版安装 Chromium，然后设置 `CHROMIUM_EXECUTABLE_PATH` 为其可执行路径。

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

可以通过设置环境变量来配置 RSSHub

在项目根目录新建一个 `.env` 文件，每行以 `NAME=VALUE` 格式添加环境变量，例如

```shell
CACHE_TYPE=redis
CACHE_EXPIRE=600
```

注意它不会覆盖已有的环境变量，更多规则请参考 [dotenv](https://github.com/motdotla/dotenv)

该部署方式不包括 redis 依赖，如有需要请改用 Docker Compose 部署方式或自行部署外部依赖

### 更新

在 `RSSHub` 文件夹中运行下面的命令就从 github 仓库拉取最新版本

```bash
$ git pull
```

然后重复安装步骤。

### Nix 用户提示

通过 `nix-shell` 配置简化安装 nodejs, yarn 和 jieba：

```nix
let
    pkgs = import <nixpkgs> {};
    node = pkgs.nodejs-12_x;
in pkgs.stdenv.mkDerivation {
    name = "nodejs-yarn-jieba";
    buildInputs = [node pkgs.yarn pkgs.pythonPackages.jieba];
}
```

## Kubernetes(Helm) 部署

RSSHub 可以使用来自 [RSSHub Helm Chart](https://github.com/NaturalSelectionLabs/helm-charts/tree/main/charts/rsshub) 的 Helm Chart 在 Kubernetes 中安装

确保满足以下要求：

-   Kubernetes 1.16+
-   已经 [安装](https://helm.sh/docs/intro/install/) Helm 版本 3.9+

### 安装

将 NaturalSelection Labs Chart 仓库添加到 Helm：

```bash
helm repo add nsl https://naturalselectionlabs.github.io/helm-charts
```

你可以通过运行以下命令更新 Chart 仓库：

```bash
helm repo update
```

然后使用 `helm` 命令行安装：

```bash
helm install my-release nsl/rsshub
```

### 更新

要升级 my-release RSSHub 部署：

```bash
helm upgade my-release nsl/rsshub
```

### 移除

如要删除 my-release RSSHub 部署：

```bash
helm delete my-release
```

### 使用自定义配置安装

::: code-group

```bash [使用 Helm CLI]
helm install my-release nsl/rsshub \
  --set="image.tag=2023-12-04" \
  --set="replicaCount=2"
```

```yaml [使用自定义配置文件]
# custom-values.yml 文件
## 使用 "helm install my-release nsl/rsshub -f ./custom-values.yml" 安装
image:
  tag: "2023-12-04"
replicaCount: 2
```

:::

### 使用 HA 模式安装

::: code-group

```yaml [不使用自动扩缩的 HA 模式]
replicaCount: 3

puppeteer:
  replicaCount: 2
```

```yaml [使用自动扩缩的 HA 模式]
autoscaling:
  enabled: true
  minReplicas: 3

puppeteer:
  autoscaling:
    enabled: true
    minReplicas: 2
```

:::

### 使用外部 Redis 安装

```yaml
redis:
  # -- 禁用内部 redis
  enabled: false
env:
  # -- 其他环境变量 --
  REDIS_URL: redis://external-redis:6379/
```

要配置更多值，请参阅 [RSSHub Helm Chart](https://github.com/NaturalSelectionLabs/helm-charts/tree/main/charts/rsshub)。

## Ansible 部署

这个 Ansible playbook 包括了 RSSHub, Redis, browserless （依赖 Docker） 以及 Caddy 2

目前只支持 Ubuntu 20.04

需要 sudo 权限和虚拟化能力（Docker 将会被自动安装）

### 安装

```bash
sudo apt update
sudo apt install ansible
git clone https://github.com/DIYgod/RSSHub.git ~/RSSHub
cd ~/RSSHub/scripts/ansible
sudo ansible-playbook rsshub.yaml
# 当提示输入 domain name 的时候，输入该主机所使用的域名
# 举例：如果您的 RSSHub 用户使用 https://rsshub.example.com 访问您的 RSSHub 实例，输入 rsshub.example.com（去掉 https://）
```

### 更新

```bash
cd ~/RSSHub/scripts/ansible
sudo ansible-playbook rsshub.yaml
# 当提示输入 domain name 的时候，输入该主机所使用的域名
# 举例：如果您的 RSSHub 用户使用 https://rsshub.example.com 访问您的 RSSHub 实例，输入 rsshub.example.com（去掉 https://）
```

## 部署到 Railway

包含自动更新。

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/QxW\_\_f?referralCode=9wT3hc)

## 部署到 Heroku

### 一键部署（无自动更新）

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2FDIYgod%2FRSSHub)

### 自动更新部署

1.  将 RSSHub [分叉（fork）](https://github.com/DIYgod/RSSHub/fork) 到自己的账户下。
2.  把自己的分叉部署到 Heroku：`https://heroku.com/deploy?template=URL`，其中 `URL` 改为分叉地址 （例如 `https://github.com/USERNAME/RSSHub`）。
3.  检查 Heroku 设置，随代码库更新自动部署。
4.  安装 [Pull](https://github.com/apps/pull) 应用，定期将 RSSHub 改动自动同步至你的分叉。

## 部署到 Zeabur

1.  前往 [Zeabur 完成注册](https://dash.zeabur.com)
2.  创建一个新项目
3.  在项目中选择创建新服务，选择从**服务市场**部署。
4.  添加域名，若使用自定义域名，可参见 [Zeabur 的域名绑定文档](https://docs.zeabur.com/zh-CN/deploy/domain-binding)。

[![Deploy on Zeabur](https://zeabur.com/button.svg)](https://zeabur.com/templates/X46PTP)

## 部署到 Vercel <Badge type="danger" text="🚧 修复中" />

### 一键部署（无自动更新）

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/DIYgod/RSSHub)

### 自动更新部署

1.  将 RSSHub [分叉（fork）](https://github.com/DIYgod/RSSHub/fork) 到自己的账户下
2.  去 Vercel 部署一个新项目：使用 GitHub 账户登录 Vercel，进入 [项目创建页面](https://vercel.com/new/) 选择导入 RSSHub 仓库进行部署
3.  安装 [Pull](https://github.com/apps/pull) 应用，定期将 RSSHub 改动自动同步至你的仓库

## 部署到 Fly.io

### 方案一：Fork

1.  将 RSSHub [Fork](https://github.com/DIYgod/RSSHub/fork) 到自己的账户下；

2.  下载分叉的源码

    ```bash
    $ git clone https://github.com/<your username>/RSSHub.git
    $ cd RSSHub
    ```

3.  前往 [Fly.io 完成注册](https://fly.io/app/sign-up)，并安装 [flyctl CLI](https://fly.io/docs/hands-on/install-flyctl/)；

4.  运行 `fly launch`, 并选择一个唯一的名称和实例地区；

5.  使用 `fly secrets set KEY=VALUE` [对部分模块进行配置](config#route-specific-configurations)；

6.  [配置通过 GitHub Actions 自动部署](https://fly.io/docs/app-guides/continuous-deployment-with-github-actions/)；

7.  （可选）利用 `fly certs add 你的域名` 来配置自定义域名，并根据指引在你的 DNS 服务商配置相关域名解析（你可在 Dashboard Certificate 页面查看域名的配置状态）。

更新：在你 Fork 出来的仓库首页点击「Sync fork - Update Branch」来手动更新至官方最新的 master 分支，或安装 [Pull](https://github.com/apps/pull) 应用来定期自动同步。

### 方案二：自行维护 fly.toml

1.  前往 [Fly.io 完成注册](https://fly.io/app/sign-up)，并安装 [flyctl CLI](https://fly.io/docs/hands-on/install-flyctl/)；
2.  自行在本地新建一个空目录，在其中运行 `fly launch`, 并选择一个唯一的名称和实例地区；
3.  编辑生成的 fly.toml 文件，新增

    ```toml
    [build]
    image = "diygod/rsshub:latest"
    ```

    根据实际情况，你可能希望使用其他镜像标签，请阅读 [Docker 镜像](#docker-jing-xiang) 的有关内容；
4.  修改 fly.toml 中的 `[env]` 段或使用`fly secrets set KEY=VALUE` [对部分模块进行配置](config#route-specific-configurations)；
5.  执行 `fly deploy` 启动应用；
6.  （可选）利用 `fly certs add 你的域名` 来配置自定义域名，并根据指引在你的 DNS 服务商配置相关域名解析（你可在 Dashboard Certificate 页面查看域名的配置状态）。

更新：进入你存储了 `fly.toml` 文件的目录，执行 `fly deploy` 即可触发拉取最新镜像、启动应用的步骤。

### 配置内置的 Upstash Redis 缓存

在 `RSSHub` 文件夹下运行

```bash
$ fly redis create
```

来创建一个新的 Redis 数据库，地域选择与你上面创建 RSSHub app 时相同的地域，建议选择开启 [eviction](https://redis.io/docs/reference/eviction/)。创建完成后会输出类似于 `redis://default:<password>@<domain>.upstash.io` 的字符串。

因目前 [上游依赖的一个 bug](https://github.com/luin/ioredis/issues/1576)，你暂时需要在 Fly.io 给你的连接 URL 后追加 `family=6` 的参数，即使用 `redis://default:<password>@<domain>.upstash.io/?family=6` 作为连接 URL。

再配置 fly.toml 中的 `[env]` 段或运行

```bash
$ fly secrets set CACHE_TYPE=redis REDIS_URL='<刚才的连接 URL>'
```

并执行 `fly deploy` 触发重新部署来完成配置。

## 部署到 Sealos

包含自动更新

[![Deploy to Sealos](https://raw.githubusercontent.com/labring-actions/templates/main/Deploy-on-Sealos.svg)](https://template.cloud.sealos.io/deploy?templateName=rsshub)

## 部署到 PikaPods

每月只需 1 美元即可运行 RSSHub。包括自动更新和 5 美元的免费起始额度。

[![Run on PikaPods](https://www.pikapods.com/static/run-button.svg)](https://www.pikapods.com/pods?run=rsshub)

## 部署到 Google App Engine

### 准备

[Before you begin](https://cloud.google.com/appengine/docs/flexible/nodejs/quickstart)

按照这里的引导完成 GCP 账号设置，创建 GCP 项目，创建 App Engine 项目，开通付费功能（必须），安装 git 与 gcloud 工具。并完成 gcloud 工具的初始化，初始化具体方式 [请查看这个链接](https://cloud.google.com/sdk/gcloud/?hl=zh-CN)。如果你不打算在本地调试本项目，可以不安装 Node.js 环境。

请注意，GAE 免费用量不支持 Flexible Environment，部署到 Flexible Environment 前请确认收费标准。

Node.JS 的 standard environment 仍在测试中，您可能会在部署或使用中遇到某些不可预期的问题。

运行 `git clone https://github.com/DIYgod/RSSHub.git` 拉取本项目的最新版本。

### app.yaml 配置

#### 部署到 Flexible Environment

在 RSSHub 项目根目录下建立一个 app.yaml 文件，内容示例如下：

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
# 以下是 app engine 资源配置，可以自行修改，硬盘最低为 10G
resources:
    cpu: 1
    memory_gb: 0.5
    disk_size_gb: 10
network:
    forwarded_ports:
        - 80:1200
        - 443:1200
# 以下是环境配置示例，具体可配置项见本文档配置章节
env_variables:
    CACHE_EXPIRE: '300'
# [END app_yaml]
```

#### 部署到 standard environment

在 RSSHub 项目根目录下建立一个 app.yaml 文件，内容示例如下：

```yaml
# [START app_yaml]
runtime: nodejs8

network:
    forwarded_ports:
        - 80:1200
        - 443:1200
# 以下是环境配置示例，具体可配置项见本文档配置章节
env_variables:
    CACHE_EXPIRE: '300'
# [END app_yaml]
```

### 安装

在 RSSHub 项目根目录下运行

```bash
gcloud app deploy
```

进行项目部署，如果您需要变更 app.yaml 文件名称或者变更部署的项目 ID 或者指定版本号等，请参考 [Deploying a service](https://cloud.google.com/appengine/docs/flexible/nodejs/testing-and-deploying-your-app#deploying_a_service\_2)。

部署完成后可访问您的 Google App Engine URL 查看部署情况。

## Play with Docker

如果想要测试因为反爬规则导致无法访问的路由，您可以点击下方按钮拉起一套免费，临时，专属于您的 RSSHub

[![Try in PWD](https://raw.githubusercontent.com/play-with-docker/stacks/master/assets/images/button.png)](https://labs.play-with-docker.com/?stack=https://raw.githubusercontent.com/DIYgod/RSSHub/master/docker-compose.yml)

:::warning

-   需要 [DockerHub](https://hub.docker.com) 账号
-   [Play with Docker](https://labs.play-with-docker.com/) 一次仅能使用 4 小时，不能作为持久化解决方案，应当用于测试 / 验证路由规则
-   如果部署完成后不能看到自动识别的端口，请手动点击顶部按钮`open port`并输入`1200`
-   有的时候 PWD 会抽风，如果遇到点击`Start`后空白页面，或者拉起失败，请重试

:::
