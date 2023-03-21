FROM node:latest
LABEL application="QSA Information"
LABEL component="backend"
WORKDIR /backend
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3333
CMD npm start