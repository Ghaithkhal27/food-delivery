-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema delivery
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema delivery
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `delivery` DEFAULT CHARACTER SET utf8 ;
USE `delivery` ;

-- -----------------------------------------------------
-- Table `delivery`.`restaurants`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delivery`.`restaurants` (
  `idrestaurants` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `location` VARCHAR(45) NOT NULL,
  `imageUrl` TEXT NOT NULL,
  PRIMARY KEY (`idrestaurants`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `delivery`.`menu`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `delivery`.`menu` (
  `idmenu` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `ingredient` VARCHAR(255) NOT NULL,
  `imageurl`TEXT(255) NOT NULL,
  `price` VARCHAR(45) NOT NULL,
  `restaurant-id` INT NOT NULL,
  PRIMARY KEY (`idmenu`),
  INDEX `fk_menu_restaurants_idx` (`restaurant-id` ASC) VISIBLE,
  CONSTRAINT `fk_menu_restaurants`
    FOREIGN KEY (`restaurant-id`)
    REFERENCES `delivery`.`restaurants` (`idrestaurants`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
