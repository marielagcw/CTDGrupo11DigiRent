-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: db_prod
-- ------------------------------------------------------
-- Server version	8.0.25

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
  `id_caracteristica` int NOT NULL,
  `esta_disponible` bit(1) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_caracteristica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id_categoria` int NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Casas de alquiler temporario cerca de ciudades','Casas en alquiler','https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870'),(2,'Departamentos de alquiler temporario en la ciudad que elijas','Departamentos en alquiler','https://images.unsplash.com/photo-1580785692949-7b5b7fd83d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'),(3,'Cabañas de madera en la naturaleza','Cabañas ','https://images.unsplash.com/photo-1601918774946-25832a4be0d6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYSVDMyVCMWFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'),(4,'Casas playeras con salida al mar','Casas de playa','https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzYSUyMGRlJTIwcGxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ciudades` (
  `id_ciudad` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `provincia` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_ciudad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,'San Cristobal','Santa Fe','Argentina'),(2,'Huerta Grande','Córdoba','Argentina'),(3,'La Plata','Buenos Aires','Argentina'),(4,'Campana','Buenos Aires','Argentina'),(5,'Goya','Corrientes','Argentina'),(6,'Wheelwright','Santa Fe','Argentina'),(7,'Mar del Plata','Buenos Aires','Argentina');
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `elementos_politicas`
--

DROP TABLE IF EXISTS `elementos_politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `elementos_politicas` (
  `id_elementos_politica` int NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `id_politica` int DEFAULT NULL,
  PRIMARY KEY (`id_elementos_politica`),
  KEY `FKqba126onvam8xo6b01qqmymx2` (`id_politica`),
  CONSTRAINT `FKqba126onvam8xo6b01qqmymx2` FOREIGN KEY (`id_politica`) REFERENCES `politicas` (`id_politica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `elementos_politicas`
--

LOCK TABLES `elementos_politicas` WRITE;
/*!40000 ALTER TABLE `elementos_politicas` DISABLE KEYS */;
INSERT INTO `elementos_politicas` VALUES (1,'Check-out: 10:00 hs',1),(2,'No se permiten fiestas',1),(3,'No fumar',1),(4,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus',2),(5,'Detector de humo',2),(6,'Depósito de seguridad',2),(7,'Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',3),(8,'No se realizan devoluciones en efectivo',3);
/*!40000 ALTER TABLE `elementos_politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagenes`
--

DROP TABLE IF EXISTS `imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagenes` (
  `id_imagen` int NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `id_producto` int DEFAULT NULL,
  PRIMARY KEY (`id_imagen`),
  KEY `FKl8w4sgu3xurgmoch7xpf2bby5` (`id_producto`),
  CONSTRAINT `FKl8w4sgu3xurgmoch7xpf2bby5` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `politicas`
--

DROP TABLE IF EXISTS `politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `politicas` (
  `id_politica` int NOT NULL,
  `titulo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_politica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `politicas`
--

LOCK TABLES `politicas` WRITE;
/*!40000 ALTER TABLE `politicas` DISABLE KEYS */;
INSERT INTO `politicas` VALUES (1,'Normas de la casa'),(2,'Salud y seguridad'),(3,'Política de cancelación');
/*!40000 ALTER TABLE `politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id_producto` int NOT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `nombre_producto` varchar(255) DEFAULT NULL,
  `titulo_descripcion` varchar(255) DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `id_ciudad` int DEFAULT NULL,
  PRIMARY KEY (`id_producto`),
  KEY `FKdtoa37luoxhhvbicrfiu5ygbj` (`id_categoria`),
  KEY `FKnr082ggkrw05am64taurp2rpe` (`id_ciudad`),
  CONSTRAINT `FKdtoa37luoxhhvbicrfiu5ygbj` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id_categoria`),
  CONSTRAINT `FKnr082ggkrw05am64taurp2rpe` FOREIGN KEY (`id_ciudad`) REFERENCES `ciudades` (`id_ciudad`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Casa de 3 dormitorios en un campo de 30 Hs. 3 dormitorios, cocina completa, 2 baños, quincho con parrilla, pileta','Casa de campo ','Casa de campo familiar',1,1),(2,'Departamento amueblado para estudiante. Monoambiente con cocina y baño. ','Departamento de estudiante','Departamento de 1 ambiente',2,3),(3,'Cabaña para descanso. 1 dormitorio. Cocina equipada. Parrilla exterior. Cerca del río. ','Cabaña junto al río','Veni a disfrutar',3,5),(4,'Casa a una cuadra del mar. 2 dormitorios, 2 baños, cocina con todos los accesorios, parrilla y pileta','Casa cerca del mar','Aprovechá la playa',4,7);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_has_caracteristicas`
--

DROP TABLE IF EXISTS `productos_has_caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_has_caracteristicas` (
  `id_producto` int NOT NULL,
  `id_caracteristica` int NOT NULL,
  PRIMARY KEY (`id_producto`,`id_caracteristica`),
  KEY `FKkqlec0s87nk1wqo5vqx8a46pi` (`id_caracteristica`),
  CONSTRAINT `FKdv6j5gor8myfl1j60qcff0t9h` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`),
  CONSTRAINT `FKkqlec0s87nk1wqo5vqx8a46pi` FOREIGN KEY (`id_caracteristica`) REFERENCES `caracteristicas` (`id_caracteristica`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_has_caracteristicas`
--

LOCK TABLES `productos_has_caracteristicas` WRITE;
/*!40000 ALTER TABLE `productos_has_caracteristicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_has_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_has_politicas`
--

DROP TABLE IF EXISTS `productos_has_politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_has_politicas` (
  `id_producto` int NOT NULL,
  `id_politica` int NOT NULL,
  PRIMARY KEY (`id_producto`,`id_politica`),
  KEY `FK2qxierqxoiy9qubcw7ofr158f` (`id_politica`),
  CONSTRAINT `FK2qxierqxoiy9qubcw7ofr158f` FOREIGN KEY (`id_politica`) REFERENCES `politicas` (`id_politica`),
  CONSTRAINT `FKsufkbc8oe1ci9nwmojm1i9wow` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_has_politicas`
--

LOCK TABLES `productos_has_politicas` WRITE;
/*!40000 ALTER TABLE `productos_has_politicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_has_politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secuencia_caracteristicas`
--

DROP TABLE IF EXISTS `secuencia_caracteristicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencia_caracteristicas` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secuencia_caracteristicas`
--

LOCK TABLES `secuencia_caracteristicas` WRITE;
/*!40000 ALTER TABLE `secuencia_caracteristicas` DISABLE KEYS */;
INSERT INTO `secuencia_caracteristicas` VALUES (1);
/*!40000 ALTER TABLE `secuencia_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secuencia_categorias`
--

DROP TABLE IF EXISTS `secuencia_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencia_categorias` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secuencia_categorias`
--

LOCK TABLES `secuencia_categorias` WRITE;
/*!40000 ALTER TABLE `secuencia_categorias` DISABLE KEYS */;
INSERT INTO `secuencia_categorias` VALUES (1);
/*!40000 ALTER TABLE `secuencia_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secuencia_ciudades`
--

DROP TABLE IF EXISTS `secuencia_ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencia_ciudades` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secuencia_ciudades`
--

LOCK TABLES `secuencia_ciudades` WRITE;
/*!40000 ALTER TABLE `secuencia_ciudades` DISABLE KEYS */;
INSERT INTO `secuencia_ciudades` VALUES (1);
/*!40000 ALTER TABLE `secuencia_ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secuencia_e_politicas`
--

DROP TABLE IF EXISTS `secuencia_e_politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencia_e_politicas` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secuencia_e_politicas`
--

LOCK TABLES `secuencia_e_politicas` WRITE;
/*!40000 ALTER TABLE `secuencia_e_politicas` DISABLE KEYS */;
INSERT INTO `secuencia_e_politicas` VALUES (1);
/*!40000 ALTER TABLE `secuencia_e_politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secuencia_imagenes`
--

DROP TABLE IF EXISTS `secuencia_imagenes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencia_imagenes` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secuencia_imagenes`
--

LOCK TABLES `secuencia_imagenes` WRITE;
/*!40000 ALTER TABLE `secuencia_imagenes` DISABLE KEYS */;
INSERT INTO `secuencia_imagenes` VALUES (1);
/*!40000 ALTER TABLE `secuencia_imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `secuencia_politicas`
--

DROP TABLE IF EXISTS `secuencia_politicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `secuencia_politicas` (
  `next_val` bigint DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `secuencia_politicas`
--

LOCK TABLES `secuencia_politicas` WRITE;
/*!40000 ALTER TABLE `secuencia_politicas` DISABLE KEYS */;
INSERT INTO `secuencia_politicas` VALUES (1);
/*!40000 ALTER TABLE `secuencia_politicas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-09 14:03:03
