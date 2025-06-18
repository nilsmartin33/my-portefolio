FROM node:lts-alpine3.20 AS base

FROM base AS partial
WORKDIR /app
ADD . .
RUN npx turbo prune --scope=portefolio --out-dir ../out
RUN cp -r patches ../out

FROM partial AS deps
WORKDIR /out
RUN yarn install --frozen-lockfile --production=false

FROM base AS build
WORKDIR /app
COPY --from=deps /out/node_modules /app/node_modules
COPY --from=deps /out/apps/portefolio /app/apps/portefolio
COPY --from=deps /out/packages /app/packages
WORKDIR /app/apps/portefolio
RUN ["yarn", "build:ci"]

FROM nginx:1.27.5-alpine3.21
WORKDIR /app
COPY --from=build /app/apps/portefolio/dist /var/www/html
COPY --from=build /app/apps/portefolio/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]