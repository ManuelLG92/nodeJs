FROM node:18 as base

WORKDIR /home/node/app

COPY package.json ./

COPY . .

RUN yarn

RUN yarn build

FROM base as production

ENV NODE_PATH=./dist

RUN yarn build