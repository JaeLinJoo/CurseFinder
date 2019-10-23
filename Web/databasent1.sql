-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: db_data
-- ------------------------------------------------------
-- Server version	5.7.21-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE=`+00:00` */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE=`NO_AUTO_VALUE_ON_ZERO` */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ingredient`
--
CREATE DATABASE db_kfc;
use db_kfc;


DROP TABLE IF EXISTS `CurseWord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CurseWord` (
  `Word` varchar(15) NOT NULL,
  `Class` int(1) NOT NULL,
  PRIMARY KEY (`Word`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `CurseWord` VALUES ('씨발',1),('병신',1),('개새끼',1),('미친년',1),('미친놈',1);
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;



DROP TABLE IF EXISTS `IdPwd`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `IdPwd` (
  `Id` varchar(15) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;



/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `IdPwd` VALUES ('DBAdmin'),('DBUser'),('DBMain'),('LevenAdmin'),('LevenUser'),('LevenMain');
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;

--
-- Dumping data for table `ingredient`
--

--
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `Cured`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cured` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sentid` varchar(20) NOT NULL ,
  `curedsent` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `Cured` VALUES (0,'DB','히발 말이 안되는 거 아니냐?'),(1,'DB','오늘 날씨가 굉장히 좋은 것 같아요!^^'),(2,'DB','비오는 날에는 막걸리에 파전이죠~'),(3,'DB','근데 그래서 논문은 어떻게 제출하는 거냐고 ㅡㅡ'),(4,'DB','붕신 그것도 모르냐 ㅋㅋㅋ'),(5,'Leven','욕이 없는 인터넷은 존재하지 않습니다'),(6,'Leven','아니 그래서 논문 어떻게 적냐고!!!'),(7,'Leven','맥주 마시고 싶다 ㅠㅠ'),(8,'Leven','졸립고 배고프지만 끝낸건 없다'),(9,'Leven','논문 어떻게 적냐니까!!!');
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;

--
-- Table structure for table `msg`
--

DROP TABLE IF EXISTS `Cursed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cursed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sentid` varchar(20) NOT NULL ,
  `detecsent` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


/*!40000 ALTER TABLE `ingredient` DISABLE KEYS */;
INSERT INTO `Cursed` VALUES (0,'DB','씨발 말귀를 못 알아듣나'),(1,'DB','말귀를 못 알아듣나보네 미친놈'),(2,'DB','개새끼들이 말귀를 못 알아듣나'),(3,'DB','병신인가 말귀를 못 알아듣나'),(4,'DB','말귀를 못 알아듣나보네 미친년'),(5,'Leven','히발 말귀를 못 알아듣나'),(6,'Leven','말귀를 못 알아듣나보네 미틴놈'),(7,'Leven','개새키들이 말귀를 못 알아듣나'),(8,'Leven','벙신인가 말귀를 못 알아듣나'),(9,'Leven','말귀를 못 알아듣나보네 미틴년');
/*!40000 ALTER TABLE `ingredient` ENABLE KEYS */;

--
-- Dumping data for table `msg`
--




/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-02  0:21:22
