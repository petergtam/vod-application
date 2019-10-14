FROM node:alpine

WORKDIR /app

COPY .eslintrc /app

COPY .babelrc /app

COPY .prettierrc /app

COPY . /app

RUN npm install

EXPOSE 8080

CMD ["npm","start"]