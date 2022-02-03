# my-store-api
eCommerce API built with JavaScript (Express/ Node)

# Project Settings

## .env
This file should contains the environment variables used on our application and this file should be created on the root of the project.
Since this file has sensitive information do not share it with anyone.

.env file example

PORT=5000  
NODE_ENV=development  
MAIL_PASSWORD=123456  
DEBUG=app:*  
MONGODB_CONN=mongodb://root:example@localhost:27017  

## Using a Docker MongoDB linux image
You need to create a volume first.

```
docker-compose -f stack.yml up
```

For more information in how to use a MongoDB image please check it [here](https://hub.docker.com/_/mongo).

## Build and run the projec:  

Once everything is set up just run the following commands  

```
$ npm install  
$ npm run serve-debug  
```

## Sources:
[Koa JS CRUD Backend Implementation](https://github.com/daniloab/koa-crud-backend)  
[The Ultimate Guide to setting up Node.js with TypeScript and Express](https://ultimatecourses.com/blog/setup-typescript-nodejs-express)  
[TypeScript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter)  

