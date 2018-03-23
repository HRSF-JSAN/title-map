
  drop database if exists restaurantyelp;
  create database restaurantyelp;
  \connect restaurantyelp;

    CREATE TYPE dollarsigns AS ENUM ('$', '$$', '$$$', '$$$$', '$$$$$', '$$$$$$');
    
  CREATE TABLE Restaurant (
    id INTEGER,
    title VARCHAR(100),
    numStars INTEGER,
    price dollarsigns
  );
		
  CREATE TABLE Address (
    id SERIAL,
    address VARCHAR(250),
    image VARCHAR(100),
    phoneNumber VARCHAR(120),
    id_Restaurant INTEGER
  );

  CREATE TABLE Types (
    id SERIAL,
    type text
  );
		
  CREATE TABLE Restaurant_Types (
    id_Types INTEGER,
    id_Restaurant INTEGER
  );

  CREATE VIEW restaurantTypeView AS 
      select title, type, id_restaurant from restaurant
      inner join Restaurant_Types on restaurant.id = Restaurant_Types.id_Restaurant
      inner join Types on Restaurant_Types.id_Types = Types.id;

  CREATE VIEW restaurantAddressView AS
      select title, address, id_restaurant from restaurant
      inner join address on restaurant.id = address.id_restaurant;

  CREATE VIEW allInfo AS 
      select restaurant.id, title, numstars, price, address, image, phonenumber, type from restaurant
      inner join address on restaurant.id = address.id_restaurant
      inner join Restaurant_Types on restaurant.id = Restaurant_Types.id_Restaurant
      inner join Types on Restaurant_Types.id_Types = Types.id;