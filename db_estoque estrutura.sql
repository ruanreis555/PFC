-- MySQL Script generated by MySQL Workbench
-- Fri Nov 29 23:05:57 2019
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema estoque_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema estoque_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `estoque_db` DEFAULT CHARACTER SET utf8 ;
USE `estoque_db` ;

-- -----------------------------------------------------
-- Table `estoque_db`.`object_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estoque_db`.`object_type` (
  `type_id` INT NOT NULL AUTO_INCREMENT,
  `type_name` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`type_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `estoque_db`.`object`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estoque_db`.`object` (
  `object_id` INT NOT NULL AUTO_INCREMENT,
  `object_name` VARCHAR(255) NOT NULL,
  `object_qtd` INT NULL,
  `type_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`object_id`),
  INDEX `fk_object_object_type_idx` (`type_id` ASC),
  CONSTRAINT `fk_object_object_type`
    FOREIGN KEY (`type_id`)
    REFERENCES `estoque_db`.`object_type` (`type_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `estoque_db`.`registry_entry`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estoque_db`.`registry_entry` (
  `entry_id` INT NOT NULL AUTO_INCREMENT,
  `entry_qtd` INT NOT NULL,
  `object_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`entry_id`),
  INDEX `fk_registry_entry_object1_idx` (`object_id` ASC),
  CONSTRAINT `fk_registry_entry_object1`
    FOREIGN KEY (`object_id`)
    REFERENCES `estoque_db`.`object` (`object_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `estoque_db`.`registry_exit`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `estoque_db`.`registry_exit` (
  `exit_id` INT NOT NULL AUTO_INCREMENT,
  `exit_qtd` INT NOT NULL,
  `object_id` INT NOT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`exit_id`),
  INDEX `fk_registry_exit_object1_idx` (`object_id` ASC),
  CONSTRAINT `fk_registry_exit_object1`
    FOREIGN KEY (`object_id`)
    REFERENCES `estoque_db`.`object` (`object_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
