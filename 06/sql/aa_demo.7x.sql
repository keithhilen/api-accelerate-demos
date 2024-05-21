-- MySQL Workbench Forward Engineering

DROP DATABASE IF EXISTS `aa_demo`;
CREATE SCHEMA IF NOT EXISTS `aa_demo` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;

GRANT SELECT, INSERT, UPDATE, DELETE ON `aa_demo`.* TO 'main'@'%' IDENTIFIED BY 'password';
GRANT SELECT, INSERT, UPDATE, DELETE ON `aa_demo`.* TO 'main'@'localhost' IDENTIFIED BY 'password';
GRANT EXECUTE ON `aa_demo`.* TO 'main'@'%' IDENTIFIED BY 'password';
GRANT EXECUTE ON `aa_demo`.* TO 'main'@'localhost' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;

USE `aa_demo`;

SET character_set_connection='utf8';
SET collation_connection='utf8_unicode_ci';
SET collation_server='utf8_unicode_ci';
SET character_set_server='utf8';

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

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
