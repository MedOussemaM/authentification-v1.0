# Authentication

In this project we are creating an  app withauthentification systeme using NodeJs expressjs MongoDB and JWT ;
connecting with Gaming news API ( based on Express.js and Request ) fetching game data.


## Deployment

 To run this project  :

```bash
  npm install
```
```bash
  npm start
```

## Dependencies

-  express
-  bcrypt
-  dotenv
-  mongoose
-  request
-  nodemon

## Roadmap

- Create server

- Add auth-router

- connect with database

- Create user with POST '/register' :

     - check if email is unique
   
     - hash pasword

     - insert user into database

- Login user with POST '/LOGIN' :    

     - check if email in database.

     - Compare password with hashed password in database. 

 - connect with an Gaming news api and fetch a data(news of the game: title url and source)

 - Add GamingNews-router



## Authors

- https://github.com/MedoussemaM
- https://www.facebook.com/mhj.muhammad/