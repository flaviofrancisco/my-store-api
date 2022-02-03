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

## Using a MongoDB linux image
You need to create a volume first.

```
docker volume create --name=mongodata
```

Than run the following command, please define a user name and password replacing the values of mongoadmin and secret for production environment.  

```
docker run --name some-mongo -v mongodata:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=example -d mongo
```
For more information in how to use a MongoDB image please check it [here](https://hub.docker.com/_/mongo).


## Sources:
[Koa JS CRUD Backend Implementation](https://github.com/daniloab/koa-crud-backend)
[The Ultimate Guide to setting up Node.js with TypeScript and Express](https://ultimatecourses.com/blog/setup-typescript-nodejs-express)
[TypeScript Node Starter](https://github.com/microsoft/TypeScript-Node-Starter)

