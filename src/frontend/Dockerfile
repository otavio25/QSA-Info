FROM node:latest
LABEL application="QSA Information"
LABEL component="frontend"
WORKDIR /frontend
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm start