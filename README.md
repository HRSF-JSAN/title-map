# Title-Map Components

Title and Map components for FoodiGo

[![CircleCI](https://circleci.com/gh/FoodiGo/title-map.svg?style=svg)](https://circleci.com/gh/FoodiGo/title-map)

## INSTALLATION


### Dependencies
- postgres ('brew install postgres')
  * Here's a good article on installing postgres:    https://gist.github.com/sgnl/609557ebacd3378f3b72
- node + npm ('brew install node')('brew install npm')

### Setup
1. install project dependencies by running `npm install`
2. create postgress database by running `npm run createDB`
   Edit the .env file with your username and remove the config portion at the beginning so the filename is '.env'
5. Seed the database by running `npm run seedDB`
6. Start the server and webpack by running `npm start` and `npm run dev`
7. Navigate to `localhost:3001`
