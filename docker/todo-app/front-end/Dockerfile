FROM node:14-alpine
WORKDIR /docker/todo-app/front-end
EXPOSE 3000
COPY package*.json ./
ENTRYPOINT [ "npm" ]
CMD ['install']
COPY . .
#RUN npm run build
CMD ['start']
