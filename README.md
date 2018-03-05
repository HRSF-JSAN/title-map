# Title-Map Components

Title and Map components for FoodiGo

[![CircleCI](https://circleci.com/gh/FoodiGo/title-map.svg?style=svg)](https://circleci.com/gh/FoodiGo/title-map)

## INSTALLATION


### Dependencies
- postgres ('brew install postgres')
- node + npm ('brew install node')('brew install npm')

### Setup
1. install dependencies by running `npm install`
2. Ensure you have the correct user and password on your local machine for postgress. 
   * host is set to local and user is set to root by default
   * edit this command and run in terminal if you need to use a different host/user configuration `psql --host localhost -U root -f schema.sql postgres`
<<<<<<< HEAD
3. Here's a good article on installing postgres: https://gist.github.com/sgnl/609557ebacd3378f3b72
4. Create the DB by running `npm run createDB`
5. Seed the database by running `npm run seedDB`
6. Start the server and webpack by running `npm start` and `npm run dev`
7. Navigate to `localhost:3001`
=======
3. Create the DB by running `npm run createDB`
4. Seed the database by running `npm run seedDB`
5. Start the server and webpack by running `npm start` and `npm run dev`
6. Navigate to `localhost:3001`
>>>>>>> 592476a66871a5e9c55f40b0d84f07006f36a6db
