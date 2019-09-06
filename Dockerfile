FROM node:alpine
WORKDIR /app
COPY ./package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
# EXPOSE only needed when nginx is not being used
EXPOSE 4000
RUN yarn build
CMD ["yarn", "start"]