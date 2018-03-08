require('dotenv').config()
psql --host restaurantyelp.cinj1vjfcxcl.us-west-1.rds.amazonaws.com -U michaeldurfey -p 5432 -f schema.sql postgres