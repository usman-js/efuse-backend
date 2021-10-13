# Ef-- WebService (Node | Express | Mongo | Redis)

This is a simple assignment project that i worked on and following technologies are being used in this project
* Node.js with Express Framework and there is another backend with nestjs implementation with
* MongoDb
* Docker and Docker-compose 
## Installation

You are required to install the following pieces of software on your machine where you want to run this web service for testing 
* Docker (CLI Support)
* Docker-compose (CLI Support)


***
#### Step 1: Navigate to the project directory by cmd or bash

```bash
cd efuse-backend
``` 
***
***
#### Step 2: Now you are at the root of your project folder 
The root of the project folder contains a docker-compose.yaml file which will help us make 2 containers that are
 
* server_container (For Our Express App)
* mongodb_container (For Our Database)

##### Run The Following commands

```bash
1. docker-compose build
# This command will download the images for Redis and MongoDB from docker hub and build image for our Express app and install all dependencies

2. docker-compose up -d
# This Command will basically run the images in that we made by previous build command "-d" flag will make it run in the background 
```

***



## Usage ( Postman Collection )


#### Note :
* You can get the postman collection from the root of the folder. You just need to import this file "Postman Collection" in your postman to test the Apis.

 
* There are Apis that require params like postId or userId postman collection have these variables named already you just need to add the values to these params from postman's params tab. these values you can get from other Apis like create user API will return you userId and create post will return you post id later these ids could be used in other Apis to update or show specific. 


## Improvments:
There are some improvements we can do to optimize this web services which are the following
* Currently, in this app we are not using any User Authentication Process so to connect posts with users we are using a global variable and this global variable is accessed later on while creating posts so we could get the current user. now this will lead to memory leak and generally using a global variable is not a good approach if we need to improve this we can add the functionality of user authentication but that was beyond the scope of this assignment.
* We can use Redis to cache get requests.



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
Your Name
