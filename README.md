# my-store-api
eCommerce API built with JavaScript (Express/ Node)

# Project Settings

## .env
This file should contains the environment variables used on our application and this file should be created on the root of the project.
Since this file has sensitive information do not share it with anyone.

SERVER_PORT=  
NODE_ENV=development  
MAIL_PASSWORD=  
DEBUG=app:*  

## Using a MongoDB linux image
You need to create a volume first.

```
docker volume create --name=mongodata
```

Than run the following command, please define a user name and password replacing the values of mongoadmin and secret for production environment.
```
docker run --name some-mongo -v mongodata:/data/db -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -d mongo
```
For more information in how to use a MongoDB image please check it [here](https://hub.docker.com/_/mongo).
