FROM mjgargani/puppeteer:trybe1.0
WORKDIR /docker/todo-app/tests
EXPOSE 3001
COPY package.json ./
COPY . .
ADD /node_modules.tar.gz .
ENTRYPOINT [ "npm", "test" ]