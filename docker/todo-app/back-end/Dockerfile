FROM node:14-alpine
WORKDIR /docker/todo-app/back-end
EXPOSE 3001
COPY package.json ./
COPY . .
ADD /node_modules.tar.gz .
ENTRYPOINT [ "npm", "start" ]
#RUN npm run build


# FROM node:14-alpine
# WORKDIR ./docker/todo-app/back-end
# EXPOSE 3001
# COPY package*.json ./
# ADD /node_modules.tar.gz .
# RUN npm install
# COPY . .
# #RUN npm run build
# RUN npm start


#FROM nginx:1.16.0-alpine AS prod
#COPY --from=build /app/build /usr/share/nginx/html
#EXPOSE 80