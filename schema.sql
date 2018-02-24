-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Restaurant'
-- 
-- ---

DROP TABLE IF EXISTS `Restaurant`;
		
CREATE TABLE `Restaurant` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `price` ENUM NULL DEFAULT NULL,
  `numStars` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Address'
-- 
-- ---

DROP TABLE IF EXISTS `Address`;
		
CREATE TABLE `Address` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `address` VARCHAR(250) NULL DEFAULT NULL,
  `image` VARCHAR(100) NULL DEFAULT NULL,
  `phoneNumber` VARCHAR(120) NULL DEFAULT NULL,
  `id_Restaurant` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Association Table'
-- 
-- ---

DROP TABLE IF EXISTS `Restaurant_Types`;
		
CREATE TABLE `Restaurant_Types` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `id_Types` INTEGER NULL DEFAULT NULL,
  `id_Restaurant` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Types'
-- 
-- ---

DROP TABLE IF EXISTS `Types`;
		
CREATE TABLE `Types` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `type` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Address` ADD FOREIGN KEY (id_Restaurant) REFERENCES `Restaurant` (`id`);
ALTER TABLE `Association Table` ADD FOREIGN KEY (id_Types) REFERENCES `Types` (`id`);
ALTER TABLE `Association Table` ADD FOREIGN KEY (id_Restaurant) REFERENCES `Restaurant` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Restaurant` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Address` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Association Table` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Types` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

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