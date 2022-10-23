FROM node:16.14-alpine

WORKDIR /app-frontend

EXPOSE 3000

COPY . .

RUN ["npm", "install"]

ENTRYPOINT ["npm", "start"]
