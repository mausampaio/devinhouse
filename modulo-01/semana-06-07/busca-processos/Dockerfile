FROM node:alpine as build

ENV HOME=/app
ENV PUBLIC_URL=/
ENV REACT_APP_BACKEND="http://localhost:3002"
WORKDIR $HOME

COPY package.json ./
RUN npm install --only=prod --silent

COPY . /app
RUN npm run build

# production environment

# nginx state for serving content
FROM nginx:alpine

# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]