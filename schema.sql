
  create database restaurantyelp;
  \connect restaurantyelp;

    CREATE TYPE dollarsigns AS ENUM ('$', '$$', '$$$', '$$$$', '$$$$$', '$$$$$$');
  CREATE TABLE Restaurant (
    id INTEGER PRIMARY KEY,
    title VARCHAR(100),
    numStars INTEGER,
      price dollarsigns
  );
		
  CREATE TABLE Address (
    id INTEGER PRIMARY KEY,
    address VARCHAR(250),
    image VARCHAR(100),
    phoneNumber VARCHAR(120),
    id_Restaurant INTEGER REFERENCES Restaurant
  );

  CREATE TABLE Types (
    id INTEGER PRIMARY KEY,
    type text
  );
		
  CREATE TABLE Restaurant_Types (
    id_Types INTEGER REFERENCES Types,
    id_Restaurant INTEGER REFERENCES Restaurant ON DELETE CASCADE,
    PRIMARY KEY(id_Types, id_Restaurant)
  );

