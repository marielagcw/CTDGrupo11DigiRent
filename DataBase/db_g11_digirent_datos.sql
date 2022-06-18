-- MySQL dump 10.13  Distrib 8.0.25, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: db_g11_digirent
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
-- Dumping data for table `caracteristicas`
--

LOCK TABLES `caracteristicas` WRITE;
/*!40000 ALTER TABLE `caracteristicas` DISABLE KEYS */;
INSERT INTO `caracteristicas` VALUES (1,_binary '','Cocina'),(2,_binary '','Televisor'),(3,_binary '\0','Aire Acondicionado'),(4,_binary '','Apto p/ Mascotas'),(5,_binary '','Estacionamiento gratuito'),(6,_binary '\0','Pileta'),(7,_binary '','Wifi');
/*!40000 ALTER TABLE `caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Casas de alquiler temporario cerca de ciudades','Casas en alquiler','https://images.unsplash.com/photo-1572120360610-d971b9d7767c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870'),(2,'Departamentos de alquiler temporario en la ciudad que elijas','Departamentos en alquiler','https://images.unsplash.com/photo-1580785692949-7b5b7fd83d25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80'),(3,'Cabañas de madera en la naturaleza','Cabañas','https://images.unsplash.com/photo-1601918774946-25832a4be0d6?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiYSVDMyVCMWFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500'),(4,'Casas playeras con salida al mar','Casas de playa','https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzYSUyMGRlJTIwcGxheWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,'San Cristobal','Santa Fe','Argentina'),(2,'Huerta Grande','Córdoba','Argentina'),(3,'La Plata','Buenos Aires','Argentina'),(4,'Campana','Buenos Aires','Argentina'),(5,'Goya','Corrientes','Argentina'),(6,'Wheelwright','Santa Fe','Argentina');
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `elementos_politicas`
--

LOCK TABLES `elementos_politicas` WRITE;
/*!40000 ALTER TABLE `elementos_politicas` DISABLE KEYS */;
INSERT INTO `elementos_politicas` VALUES (1,'Check-out: 10:00',1),(2,'No se permiten fiestas',1),(3,'No fumar',1),(4,'Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus',2),(5,'Detector de humo',2),(6,'Depósito de seguridad',2),(7,'Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía',3),(8,'No se devuelve dinero por cancelaciones',3);
/*!40000 ALTER TABLE `elementos_politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `imagenes`
--

LOCK TABLES `imagenes` WRITE;
/*!40000 ALTER TABLE `imagenes` DISABLE KEYS */;
INSERT INTO `imagenes` VALUES (1,'Hostal1','https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',1),(2,'Hostal2','https://images.unsplash.com/photo-1603072388139-565853396b38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',1),(3,'Hostal3','https://images.unsplash.com/photo-1565629196891-2ddb37c9e9fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',1),(4,'Hostal4','https://images.unsplash.com/photo-1504615755583-2916b52192a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',1),(5,'Hostal5','https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',1),(6,'Playa 1','https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',2),(7,'Playa 2','https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',2),(8,'Playa 3','https://images.unsplash.com/photo-1605549339992-83721992836e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80',2),(9,'Playa 4','https://images.unsplash.com/photo-1598924957326-0446ac30341e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',2),(10,'Playa 5','https://images.unsplash.com/photo-1598974555373-a50f47de2cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80',2);
/*!40000 ALTER TABLE `imagenes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `politicas`
--

LOCK TABLES `politicas` WRITE;
/*!40000 ALTER TABLE `politicas` DISABLE KEYS */;
INSERT INTO `politicas` VALUES (1,'Normas de la casa'),(2,'Salud y seguridad'),(3,'Política de cancelación');
/*!40000 ALTER TABLE `politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Hostal del lago','Hostal del lago',4,7),(2,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Aires de mar','Cabaña en la Playa',3,2),(3,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Cabaña en la montaña','Cabaña en la montaña',1,3),(4,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','CityHouse','Casa en la ciudad',2,2),(5,'Lorem ipsum','Hostal','Hostal',4,1),(6,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Cabaña Montaña','Cabaña Montaña',1,2),(7,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Cabaña Cerro','Cabaña Cerro',1,2),(8,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Cabaña Cordillera','Cabaña Cordillera',1,7),(9,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Casa Ciudad','Casa en la ciudad',2,3),(10,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Casa Ciudad','Casa en la ciudad',2,4),(11,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Casa Pueblo','Casa en el pueblo',2,6),(12,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Casa Pueblo','Casa en el pueblo',2,1),(13,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Casa río','Casa río',3,5),(14,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Casa río','Casa río',3,5),(15,'Has closed eyes but still sees you stand with legs in litter box, but poop outside and steal mom\'s crouton while she is in the bathroom.','Casa río','Casa río',3,5);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos_has_caracteristicas`
--

LOCK TABLES `productos_has_caracteristicas` WRITE;
/*!40000 ALTER TABLE `productos_has_caracteristicas` DISABLE KEYS */;
INSERT INTO `productos_has_caracteristicas` VALUES (1,1),(1,2),(1,3),(2,1),(3,1),(4,2),(6,1),(6,2),(6,3),(7,1),(7,2),(7,3),(8,1),(8,2),(8,3),(9,1),(9,2),(9,3),(10,1),(10,2),(10,3),(11,1),(11,2),(11,3),(12,1),(12,2),(12,3),(13,1),(13,2),(13,3),(14,1),(14,2),(14,3),(15,1),(15,2),(15,3);
/*!40000 ALTER TABLE `productos_has_caracteristicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `productos_has_politicas`
--

LOCK TABLES `productos_has_politicas` WRITE;
/*!40000 ALTER TABLE `productos_has_politicas` DISABLE KEYS */;
INSERT INTO `productos_has_politicas` VALUES (1,1),(1,2),(2,1),(3,1),(4,2),(6,1),(6,2),(7,1),(7,2),(8,1),(8,2),(9,1),(9,2),(10,1),(10,2),(11,1),(11,2),(12,1),(12,2),(13,1),(13,2),(14,1),(14,2),(15,1),(15,2);
/*!40000 ALTER TABLE `productos_has_politicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `reservas`
--

LOCK TABLES `reservas` WRITE;
/*!40000 ALTER TABLE `reservas` DISABLE KEYS */;
/*!40000 ALTER TABLE `reservas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Administrador'),(2,'Usuario_Público'),(3,'Usuario_Privado');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Gustavo','Lobos','gjlobos141@gmail.com','123456','Campana',1),(2,'Natali','Correa','ncorrea@gmail.com','111111','Corrientes',2),(3,'Mariela','Gcw','marigcw@gmail.com','999999','Wheelright',3);
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

-- Dump completed on 2022-06-17 14:07:18
