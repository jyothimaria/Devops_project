FROM node:14

WORKDIR /Devops_project

COPY package*.json ./
COPY database.js ./

COPY . .

EXPOSE 1010

CMD ["npm", "start"]
