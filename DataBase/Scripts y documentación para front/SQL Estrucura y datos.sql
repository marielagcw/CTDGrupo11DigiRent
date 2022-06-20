-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: db_g11_digirent
-- ------------------------------------------------------
-- Server version	8.0.26
CREATE DATABASE IF NOT exists db_g11_digirent;
use db_g11_digirent;
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `caracteristicas`
--

DROP TABLE IF EXISTS `caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `caracteristicas` (
  `id_caracteristica` int NOT NULL AUTO_INCREMENT,
  `esta_disponible` bit(1) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_caracteristica`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
INSERT INTO `caracteristicas` VALUES 
(1,_binary '','Cocina'),
(2,_binary '','Televisor'),
(3,_binary '\0','Aire Acondicionado'),
(4,_binary '','Apto p/ Mascotas'),
(5,_binary '','Estacionamiento gratuito'),
(6,_binary '\0','Pileta'),
(7,_binary '','Wifi');
/*!40000 ALTER TABLE `caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES
 (1,'Casas de alquiler temporario cerca de ciudades','Casas en alquiler','https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870'),
 (2,'Departamentos de alquiler temporario en la ciudad que elijas','Departamentos en alquiler','https://images.unsplash.com/photo-1580785692949-7b5b7fd83d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'),
 (3,'Cabañas de madera en la naturaleza','Cabañas','https://images.unsplash.com/photo-1601918774946-25832a4be0d6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYSVDMyVCMWFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'),
 (4,'Casas playeras con salida al mar','Casas de playa','https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzYSUyMGRlJTIwcGxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudades` (
  `id_ciudad` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_ciudad`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES 
(1,'San Cristobal','Argentina','Santa Fe'),
(2,'Huerta Grande','Argentina','Córdoba'),
(3,'La Plata','Argentina','Buenos Aires'),
(4,'Campana','Argentina','Buenos Aires'),
(5,'Goya','Argentina','Corrientes'),
(6,'Wheelwright','Argentina','Santa Fe');
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementos_politicas`
--

DROP TABLE IF EXISTS `elementos_politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementos_politicas` (
  `id_elementos_politica` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) DEFAULT NULL,
  `politicas_id_politica` int NOT NULL,
  PRIMARY KEY (`id_elementos_politica`,`politicas_id_politica`),
  KEY `fk_elementos_politicas_politicas_idx` (`politicas_id_politica`),
  CONSTRAINT `fk_elementos_politicas_politicas` FOREIGN KEY (`politicas_id_politica`) REFERENCES `politicas` (`id_politica`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elementos_politicas`
--

LOCK TABLES `elementos_politicas` WRITE;
/*!40000 ALTER TABLE `elementos_politicas` DISABLE KEYS */;
INSERT INTO `elementos_politicas` VALUES 
(1,'Check-out: 10:00',1),
(2,'No se permiten fiestas',1),
(3,'No fumar',1),
(4,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus',2),
(5,'Detector de humo',2),
(6,'Depósito de seguridad',2),
(7,'Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',3),
(8,'No se devuelve dinero por cancelaciones',3);
/*!40000 ALTER TABLE `elementos_politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id_imagen` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `productos_id_producto` int NOT NULL,
  PRIMARY KEY (`id_imagen`,`productos_id_producto`),
  KEY `fk_imagenes_productos_idx` (`productos_id_producto`),
  CONSTRAINT `fk_imagenes_productos` FOREIGN KEY (`productos_id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'Casa1','https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',1),
(2,'Casa2','https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',1),
(3,'Casa3','https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',1),
(4,'Casa4','https://images.unsplash.com/photo-1604769319166-010643ace337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',1),
(5,'Casa5','https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',1),
(6,'Playa 1','https://images.unsplash.com/photo-1605549339992-83721992836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80',2),
(7,'Playa 2','https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',2),
(8,'Playa 3','https://images.unsplash.com/photo-1620221730414-5e976c63c2da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',2),
(9,'Playa 4','https://images.unsplash.com/photo-1623867483196-59106249d45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',2),
(10,'Playa 5','https://images.unsplash.com/photo-1577372970039-2ac351969c87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',2),
(11,'Depto1','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80',3),
(12,'Depto2','https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',3),
(13,'Depto3','https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',3),
(14,'Depto4','https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',3),
(15,'Depto5','https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',3),
(16,'Cabaña1','https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',4),
(17,'Cabaña2','https://images.unsplash.com/photo-1554332208-9dfebcc48334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',4),
(18,'Cabaña3','https://images.unsplash.com/photo-1631756964162-25c8c07579b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',4),
(19,'Cabaña4','https://images.unsplash.com/photo-1568659585069-facb248c4935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',4),
(20,'Cabaña5','https://images.unsplash.com/photo-1539298781177-895e382e795c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',4),
(21,'Casa1','https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',5),
(22,'Casa2','https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',5),
(23,'Casa3','https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',5),
(24,'Casa4','https://images.unsplash.com/photo-1604769319166-010643ace337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',5),
(25,'Casa5','https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',5),
(26,'Playa 1','https://images.unsplash.com/photo-1605549339992-83721992836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80',6),
(27,'Playa 2','https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',6),
(28,'Playa 3','https://images.unsplash.com/photo-1620221730414-5e976c63c2da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',6),
(29,'Playa 4','https://images.unsplash.com/photo-1623867483196-59106249d45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',6),
(30,'Playa 5','https://images.unsplash.com/photo-1577372970039-2ac351969c87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',6),
(31,'Depto1','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80',7),
(32,'Depto2','https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',7),
(33,'Depto3','https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',7),
(34,'Depto4','https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',7),
(35,'Depto5','https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',7),
(36,'Cabaña1','https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',8),
(37,'Cabaña2','https://images.unsplash.com/photo-1554332208-9dfebcc48334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',8),
(38,'Cabaña3','https://images.unsplash.com/photo-1631756964162-25c8c07579b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',8),
(39,'Cabaña4','https://images.unsplash.com/photo-1568659585069-facb248c4935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',8),
(40,'Cabaña5','https://images.unsplash.com/photo-1539298781177-895e382e795c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',8),
(41,'Casa1','https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',9),
(42,'Casa2','https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',9),
(43,'Casa3','https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',9),
(44,'Casa4','https://images.unsplash.com/photo-1604769319166-010643ace337?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',9),
(45,'Casa5','https://images.unsplash.com/photo-1574643156929-51fa098b0394?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',9),
(46,'Playa 1','https://images.unsplash.com/photo-1605549339992-83721992836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80',10),
(47,'Playa 2','https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',10),
(48,'Playa 3','https://images.unsplash.com/photo-1620221730414-5e976c63c2da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',10),
(49,'Playa 4','https://images.unsplash.com/photo-1623867483196-59106249d45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',10),
(50,'Playa 5','https://images.unsplash.com/photo-1577372970039-2ac351969c87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',10),
(51,'Depto1','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=780&q=80',11),
(52,'Depto2','https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',11),
(53,'Depto3','https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',11),
(54,'Depto4','https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',11),
(55,'Depto5','https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',11),
(56,'Cabaña1','https://images.unsplash.com/photo-1631630259742-c0f0b17c6c10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',12),
(57,'Cabaña2','https://images.unsplash.com/photo-1554332208-9dfebcc48334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',12),
(58,'Cabaña3','https://images.unsplash.com/photo-1631756964162-25c8c07579b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',12),
(59,'Cabaña4','https://images.unsplash.com/photo-1568659585069-facb248c4935?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',12),
(60,'Cabaña5','https://images.unsplash.com/photo-1539298781177-895e382e795c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',12);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `politicas`
--

DROP TABLE IF EXISTS `politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `politicas` (
  `id_politica` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_politica`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `politicas`
--

LOCK TABLES `politicas` WRITE;
/*!40000 ALTER TABLE `politicas` DISABLE KEYS */;
INSERT INTO `politicas` VALUES 
(1,'Normas de la casa'),
(2,'Salud y seguridad'),
(3,'Política de cancelación');
/*!40000 ALTER TABLE `politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `titulo_descripcion` varchar(255) DEFAULT NULL,
  `categorias_id_categoria` int NOT NULL,
  `ciudades_id_ciudad` int NOT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `fk_productos_categorias_idx` (`categorias_id_categoria`),
  KEY `fk_productos_ciudades_idx` (`ciudades_id_ciudad`),
  CONSTRAINT `fk_productos_categorias` FOREIGN KEY (`categorias_id_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `fk_productos_ciudades` FOREIGN KEY (`ciudades_id_ciudad`) REFERENCES `ciudades` (`id_ciudad`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES 
(1,'Hermosa casa en barrio tranquilo para disfrutar unos días de descanso lejos de la ciudad','Hostal del lago','Casa de descanso',1,1),
(2,'Excelente casa para disfrutar con amigos. Pileta con barra para tragos y parrilla. Lejos de la ciudad para pasar buenos momentos. 4 habitaciones, cocina amplia, comedor y living en planta baja, dormitorios en planta alta.','Filulay´s Home','Casa amplia',1,6),
(3,'A pocos metros del centro, ubicado en un lugar estratégico. Incluye estacionamiento dentro del mismo edificio y servicio de lavandería.','Friyay','Departamento con vista a la ciudad',2,4),
(4,'Departamento en planta baja, con patio y a pocos metros del río.','Imperial','Departamento interno',2,3),
(5,'Excelente vista al lago en medio de la montaña, un lugar único para descansar y disfrutar la naturaleza.','Sweet Home','Cabaña con vista al lago',3,2),
(6,'Confortable y cálida cabaña con hogar a leña y un paisaje soñado para liberarse de las preocupaciones.','Aires de montaña','Cabaña en la montaña',3,2),
(7,'Pequeña casa muy cerca del mar, especialmente diseñada para disfrutar del atardecer. Bicicletas disponibles para recorrer la ciudad.','La vida es Hoy','Casa con vista al mar',4,5),
(8,'Moderna casa en la playa, amplia, ideal para varias personas. A pocos metros de bares y lugares de encuentro para disfrutar las vacaciones de verano.','Si te he visto','Casa en la playa',4,5),
(9,'Hermosa casa en barrio tranquilo para disfrutar unos días de descanso lejos de la ciudad','Hostal del lago','Casa de descanso',1,1),
(10,'Excelente casa para disfrutar con amigos. Pileta con barra para tragos y parrilla. Lejos de la ciudad para pasar buenos momentos. 4 habitaciones, cocina amplia, comedor y living en planta baja, dormitorios en planta alta.','Filulay´s Home','Casa amplia',1,6),
(11,'A pocos metros del centro, ubicado en un lugar estratégico. Incluye estacionamiento dentro del mismo edificio y servicio de lavandería.','Friyay','Departamento con vista a la ciudad',2,4),
(12,'Departamento en planta baja, con patio y a pocos metros del río.','Imperial','Departamento interno',2,3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_has_caracteristicas`
--

DROP TABLE IF EXISTS `productos_has_caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_has_caracteristicas` (
  `caracteristicas_id_caracteristica` int NOT NULL,
  `productos_id_producto` int NOT NULL,
  PRIMARY KEY (`caracteristicas_id_caracteristica`,`productos_id_producto`),
  KEY `fk_productos_has_caracteristicas_caracteristicas_idx` (`caracteristicas_id_caracteristica`),
  KEY `fk_productos_has_caracteristicas_productos_idx` (`productos_id_producto`),
  CONSTRAINT `fk_productos_has_caracteristicas_caracteristicas` FOREIGN KEY (`caracteristicas_id_caracteristica`) REFERENCES `caracteristicas` (`id_caracteristica`),
  CONSTRAINT `fk_productos_has_caracteristicas_productos` FOREIGN KEY (`productos_id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_has_caracteristicas`
--

LOCK TABLES `productos_has_caracteristicas` WRITE;
/*!40000 ALTER TABLE `productos_has_caracteristicas` DISABLE KEYS */;
INSERT INTO `productos_has_caracteristicas` VALUES 
(1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),
(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),
(3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(3,11),(3,12),
(4,1),(4,2),(4,3),(4,4),(4,5),(4,6),(4,7),(4,8),(4,9),(4,10),(4,11),(4,12),
(5,1),(5,2),(5,3),(5,4),(5,5),(5,6),(5,7),(5,8),(5,9),(5,10),(5,11),(5,12),
(6,1),(6,2),(6,3),(6,4),(6,5),(6,6),(6,7),(6,8),(6,9),(6,10),(6,11),(6,12),
(7,1),(7,2),(7,3),(7,4),(7,5),(7,6),(7,7),(7,8),(7,9),(7,10),(7,11),(7,12),
(8,1),(8,2),(8,3),(8,4),(8,5),(8,6),(8,7),(8,8),(8,9),(8,10),(8,11),(8,12),
(9,1),(9,2),(9,3),(9,4),(9,5),(9,6),(9,7),(9,8),(9,9),(9,10),(9,11),(9,12),
(10,1),(10,2),(10,3),(10,4),(10,5),(10,6),(10,7),(10,8),(10,9),(10,10),(10,11),(10,12),
(11,1),(11,2),(11,3),(11,4),(11,5),(11,6),(11,7),(11,8),(11,9),(11,10),(11,11),(11,12)
;
/*!40000 ALTER TABLE `productos_has_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_has_politicas`
--

DROP TABLE IF EXISTS `productos_has_politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_has_politicas` (
  `politicas_id_politica` int NOT NULL,
  `productos_id_producto` int NOT NULL,
  PRIMARY KEY (`politicas_id_politica`,`productos_id_producto`),
  KEY `fk_productos_has_politicas_politicas_idx` (`politicas_id_politica`),
  KEY `fk_productos_has_politicas_productos_idx` (`productos_id_producto`),
  CONSTRAINT `fk_productos_has_politicas_politicas` FOREIGN KEY (`politicas_id_politica`) REFERENCES `politicas` (`id_politica`),
  CONSTRAINT `fk_productos_has_politicas_productos` FOREIGN KEY (`productos_id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_has_politicas`
--

LOCK TABLES `productos_has_politicas` WRITE;
/*!40000 ALTER TABLE `productos_has_politicas` DISABLE KEYS */;
INSERT INTO `productos_has_politicas` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,6),(1,7),(1,8),(1,9),(1,10),(1,11),(1,12),(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),(3,1),(3,2),(3,3),(3,4),(3,5),(3,6),(3,7),(3,8),(3,9),(3,10),(3,11),(3,12);
/*!40000 ALTER TABLE `productos_has_politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reservas`
--

DROP TABLE IF EXISTS `reservas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservas` (
  `id_reserva` int NOT NULL AUTO_INCREMENT,
  `fecha_final` date DEFAULT NULL,
  `fecha_inicial` date DEFAULT NULL,
  `hora_inicio` time DEFAULT NULL,
  `usuarios_id_usuarios` int NOT NULL,
  `productos_id_producto` int NOT NULL,
  PRIMARY KEY (`id_reserva`),
  KEY `fk_reservas_usuarios_idx` (`usuarios_id_usuarios`),
  KEY `fk_reservas_productos_idx` (`productos_id_producto`),
  CONSTRAINT `fk_reservas_productos` FOREIGN KEY (`productos_id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `fk_reservas_usuarios` FOREIGN KEY (`usuarios_id_usuarios`) REFERENCES `usuarios` (`id_usuarios`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id_roles` int NOT NULL AUTO_INCREMENT,
  `nombre_roles` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES 
(1,'Administrador'),
(2,'Usuario_Público'),
(3,'Usuario_Privado');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuarios` int NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(255) DEFAULT NULL,
  `apellido_usuario` varchar(255) DEFAULT NULL,
  `email_usuario` varchar(255) DEFAULT NULL,
  `contrasena_usuario` varchar(255) DEFAULT NULL,
  `ciudad_usuario` varchar(255) DEFAULT NULL,
  `roles_id_roles` int NOT NULL,
  PRIMARY KEY (`id_usuarios`),
  KEY `fk_usuarios_roles_idx` (`roles_id_roles`),
  CONSTRAINT `fk_usuarios_roles` FOREIGN KEY (`roles_id_roles`) REFERENCES `roles` (`id_roles`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES 
(1,'Gustavo','Lobos','gjlobos141@gmail.com','123456','Campana',1),
(2,'Natali','Correa','ncorrea@gmail.com','111111','Corrientes',2),
(3,'Mariela','Gcw','marigcw@gmail.com','999999','Wheelright',3);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-18 23:33:54
