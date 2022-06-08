-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema db_prod
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema db_prod
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `db_prod` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `db_prod` ;

-- -----------------------------------------------------
-- Table `db_prod`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`categorias` (
  `id_categoria` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(200) NULL DEFAULT NULL,
  `url` TINYTEXT NULL,
  PRIMARY KEY (`id_categoria`))
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `db_prod`.`hibernate_sequence`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`hibernate_sequence` (
  `next_val` BIGINT NULL DEFAULT NULL)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_prod`.`ciudades`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`ciudades` (
  `id_ciudad` INT NOT NULL,
  `nombre` VARCHAR(50) NULL,
  `provincia` VARCHAR(20) NULL,
  `pais` VARCHAR(30) NULL,
  PRIMARY KEY (`id_ciudad`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_prod`.`productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`productos` (
  `id_producto` INT NOT NULL,
  `titulo` VARCHAR(45) NULL,
  `descripcion` TINYTEXT NULL,
  `categorias_id_categoria` INT NOT NULL,
  `ciudades_id_ciudad` INT NOT NULL,
  PRIMARY KEY (`id_producto`, `categorias_id_categoria`, `ciudades_id_ciudad`),
  INDEX `fk_productos_categorias1_idx` (`categorias_id_categoria` ASC) VISIBLE,
  INDEX `fk_productos_ciudades1_idx` (`ciudades_id_ciudad` ASC) VISIBLE,
  CONSTRAINT `fk_productos_categorias1`
    FOREIGN KEY (`categorias_id_categoria`)
    REFERENCES `db_prod`.`categorias` (`id_categoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_ciudades1`
    FOREIGN KEY (`ciudades_id_ciudad`)
    REFERENCES `db_prod`.`ciudades` (`id_ciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_prod`.`imagenes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`imagenes` (
  `id_imagen` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `url` TINYTEXT NULL DEFAULT NULL,
  `productos_id_producto` INT NOT NULL,
  PRIMARY KEY (`id_imagen`, `productos_id_producto`),
  INDEX `fk_imagenes_productos1_idx` (`productos_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_imagenes_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `db_prod`.`productos` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `db_prod`.`politicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`politicas` (
  `id_politicaDeProducto` INT NOT NULL,
  `titulo` VARCHAR(45) NULL,
  PRIMARY KEY (`id_politicaDeProducto`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_prod`.`caracteristicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`caracteristicas` (
  `id_caracteristica` INT NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `estaDisponible` TINYINT NULL,
  PRIMARY KEY (`id_caracteristica`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_prod`.`productos_has_caracteristicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`productos_has_caracteristicas` (
  `productos_id_producto` INT NOT NULL,
  `caracteristicas_id_caracteristica` INT NOT NULL,
  PRIMARY KEY (`productos_id_producto`, `caracteristicas_id_caracteristica`),
  INDEX `fk_productos_has_caracteristicas_caracteristicas1_idx` (`caracteristicas_id_caracteristica` ASC) VISIBLE,
  INDEX `fk_productos_has_caracteristicas_productos1_idx` (`productos_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_productos_has_caracteristicas_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `db_prod`.`productos` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_has_caracteristicas_caracteristicas1`
    FOREIGN KEY (`caracteristicas_id_caracteristica`)
    REFERENCES `db_prod`.`caracteristicas` (`id_caracteristica`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_prod`.`productos_has_politicas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`productos_has_politicas` (
  `productos_id_producto` INT NOT NULL,
  `politicasDeLosProductos_id_politicaDeProducto` INT NOT NULL,
  PRIMARY KEY (`productos_id_producto`, `politicasDeLosProductos_id_politicaDeProducto`),
  INDEX `fk_productos_has_politicasDeLosProductos_politicasDeLosProd_idx` (`politicasDeLosProductos_id_politicaDeProducto` ASC) VISIBLE,
  INDEX `fk_productos_has_politicasDeLosProductos_productos1_idx` (`productos_id_producto` ASC) VISIBLE,
  CONSTRAINT `fk_productos_has_politicasDeLosProductos_productos1`
    FOREIGN KEY (`productos_id_producto`)
    REFERENCES `db_prod`.`productos` (`id_producto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_productos_has_politicasDeLosProductos_politicasDeLosProduc1`
    FOREIGN KEY (`politicasDeLosProductos_id_politicaDeProducto`)
    REFERENCES `db_prod`.`politicas` (`id_politicaDeProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `db_prod`.`elementosPolitica`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `db_prod`.`elementosPolitica` (
  `id_elementosPolitica` INT NOT NULL,
  `nombre` VARCHAR(250) NULL,
  `politicas_id_politicaDeProducto` INT NOT NULL,
  PRIMARY KEY (`id_elementosPolitica`, `politicas_id_politicaDeProducto`),
  INDEX `fk_elementosPolitica_politicas1_idx` (`politicas_id_politicaDeProducto` ASC) VISIBLE,
  CONSTRAINT `fk_elementosPolitica_politicas1`
    FOREIGN KEY (`politicas_id_politicaDeProducto`)
    REFERENCES `db_prod`.`politicas` (`id_politicaDeProducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
