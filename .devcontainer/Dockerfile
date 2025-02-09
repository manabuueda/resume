FROM node:20-alpine

# 必要なパッケージのインストール
RUN apk update && apk add --no-cache zsh git openssh chromium nss

# Yarnのインストール（既存のファイルを削除してからインストール）
RUN rm -f /usr/local/bin/yarnpkg /usr/local/bin/yarn && npm install -g yarn

# puppeteerのインストール
RUN npm install -g puppeteer

# puppeteerがChromeを見つけられるように環境変数を設定
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# （必要に応じて）デフォルトシェルをzshに設定
SHELL ["/bin/zsh", "-c"]
