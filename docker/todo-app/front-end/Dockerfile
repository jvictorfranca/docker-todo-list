FROM node:14-alpine
WORKDIR /docker/todo-app/front-end
EXPOSE 3000
COPY package.json ./
COPY . .
ADD /node_modules.tar.gz .

ENTRYPOINT [ "npm" , "start"]

#RUN npm run build
