FROM node:18
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 1001
CMD [ "npm" ,"run","dev" ]