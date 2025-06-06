FROM registry.cn-beijing.aliyuncs.com/daodao-bot/node:22 AS builder
WORKDIR /build
COPY . .
ENV NODE_OPTIONS="--max-old-space-size=8182"
RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm
RUN pnpm config set registry https://registry.npmmirror.com
RUN pnpm install
RUN pnpm run crack
RUN pnpm run generate

FROM registry.cn-beijing.aliyuncs.com/daodao-bot/nginx:1.27.4
VOLUME /tmp
COPY --from=builder /build/.output/public /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
