# Title-Map Components

Title and Map components for FoodiGo

[![CircleCI](https://circleci.com/gh/FoodiGo/title-map.svg?style=svg)](https://circleci.com/gh/FoodiGo/title-map)

## INSTALLATION


### Dependencies
- postgres ('brew install postgres')
- node + npm ('brew install node')('brew install npm')

### Setup
1. Ensure you have the correct user and password on your local machine for postgress. 
  * host is set to local and user is set to root by default
  * edit this command and run in terminal if you need to use a different host/user configuration `psql --host localhost -U root -f schema.sql postgres`
2. Create the DB by running `npm run createDB`
3. Seed the database by running `npm run seedDB`
4. Start the server and webpack by running `npm start` and `npm run dev`
5. Navigate to `localhost:3001`
