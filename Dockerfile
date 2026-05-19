FROM node:24.15.0-slim AS build

WORKDIR /opt/umd-mirador
COPY . /opt/umd-mirador/

RUN npm install
RUN npm run build

FROM nginx:1.30.0

COPY --from=build /opt/umd-mirador/dist /usr/share/nginx/html/
