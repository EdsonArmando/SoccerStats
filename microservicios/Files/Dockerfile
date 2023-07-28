FROM node:latest

WORKDIR /src/app
COPY Files/package*.json /src/app/
ENV PORT=3005

RUN npm install

COPY Files/ Files/

EXPOSE 3005:3005
CMD ["node", "Files/src/index.js"]
