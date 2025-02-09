FROM node:20-alpine

# zshのインストール
RUN apk update && apk add --no-cache zsh git

# Yarnのインストール（既存のファイルを削除してからインストール）
RUN rm -f /usr/local/bin/yarnpkg /usr/local/bin/yarn && npm install -g yarn

# （必要に応じて）デフォルトシェルをzshに設定
SHELL ["/bin/zsh", "-c"]
