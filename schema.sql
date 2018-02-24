-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Restaurant'
-- 
-- ---
create database restaurantYelp;

create type dollarSigns as ENUM ('$', '$$', '$$$', '$$$$');

CREATE TABLE Restaurant (
  id INTEGER PRIMARY KEY DEFAULT 101,
  title VARCHAR(100),
  price dollarSigns,
  numStars INTEGER
);

-- ---
-- Table 'Address'
-- 
-- ---
		
CREATE TABLE Address (
  id INTEGER PRIMARY KEY,
  address VARCHAR(250),
  image VARCHAR(100),
  phoneNumber VARCHAR(120),
  id_Restaurant INTEGER,
  FOREIGN KEY (id_Restaurant) REFERENCES Restaurant (id)
);

-- ---
-- Table 'Association Table'
-- 
-- ---

CREATE TABLE Types (
  id INTEGER PRIMARY KEY,
  type VARCHAR(100)
);
		
CREATE TABLE Restaurant_Types (
  id INTEGER NULL PRIMARY KEY,
  id_Types INTEGER,
  id_Restaurant INTEGER,
  FOREIGN KEY (id_Types) REFERENCES Types (id),
  FOREIGN KEY (id_Restaurant) REFERENCES Restaurant (id)
);

-- ---
-- Table 'Types'
-- 
-- ---

-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE Address ADD FOREIGN KEY (id_Restaurant) REFERENCES Restaurant (id);
-- ALTER TABLE Restaurant_Types ADD FOREIGN KEY (id_Types) REFERENCES Types (id);
-- ALTER TABLE Restaurant_Types ADD FOREIGN KEY (id_Restaurant) REFERENCES Restaurant (id);

-- ---
-- Test Data
-- ---

-- INSERT INTO `Restaurant` (`id`,`title`,`price`,`numStars`) VALUES
-- ('','','','');
-- INSERT INTO `Address` (`id`,`address`,`image`,`phoneNumber`,`id_Restaurant`) VALUES
-- ('','','','','');
-- INSERT INTO `Association Table` (`id`,`id_Types`,`id_Restaurant`) VALUES
-- ('','','');
-- INSERT INTO `Types` (`id`,`Pizza`,`American`,`Chinese`,`Italian`,`Mexican`,`Indian`,`French`,`Brunch`) VALUES
-- ('','','','','','','','','');