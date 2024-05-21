-- MySQL Workbench Forward Engineering

DROP DATABASE IF EXISTS `aa_demo`;
CREATE DATABASE IF NOT EXISTS `aa_demo` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

DROP USER IF EXISTS 'main'@'%';
CREATE USER 'main'@'%' IDENTIFIED BY 'password';
ALTER USER 'main'@'%' IDENTIFIED WITH mysql_native_password BY 'password';

DROP USER IF EXISTS 'main'@'localhost';
CREATE USER 'main'@'localhost' IDENTIFIED BY 'password';
ALTER USER 'main'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT SELECT, INSERT, UPDATE, DELETE ON `aa_demo`.* TO 'main'@'%';
GRANT SELECT, INSERT, UPDATE, DELETE ON `aa_demo`.* TO 'main'@'localhost';
FLUSH PRIVILEGES;

SET character_set_connection='utf8';
SET collation_connection='utf8_unicode_ci';
SET collation_server='utf8_unicode_ci';
SET character_set_server='utf8';

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

USE `aa_demo`;

-- -----------------------------------------------------
-- Table `persons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `persons` (
  `person_id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(20) NULL,
  `last_name` VARCHAR(20) NULL,
  `email_address` VARCHAR(50) NULL,
  PRIMARY KEY (`person_id`))
ENGINE = InnoDB;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

INSERT INTO persons
  (first_name, last_name, email_address)
VALUES
  ('Walt', 'Whitman', 'whitman@poets.net'),
  ('Emily', 'Dickenson', 'dickenson@poets.net');
