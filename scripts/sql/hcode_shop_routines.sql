CREATE DATABASE  IF NOT EXISTS `hcode_shop` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `hcode_shop`;
-- MySQL dump 10.13  Distrib 5.7.9, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hcode_shop
-- ------------------------------------------------------
-- Server version	5.6.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping events for database 'hcode_shop'
--

--
-- Dumping routines for database 'hcode_shop'
--
/*!50003 DROP PROCEDURE IF EXISTS `sp_carrinhosprodutos_add` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_carrinhosprodutos_add`(
pid_car INT,
pid_prod INT
)
BEGIN
	
	INSERT INTO tb_carrinhosprodutos (id_car, id_prod)
    VALUES(pid_car, pid_prod);
    
    CALL sp_carrinhosprodutos_list(pid_car);
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_carrinhosprodutos_list` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_carrinhosprodutos_list`(
pid_car INT
)
BEGIN

	SELECT 
	a.id_prod,
	a.id_car,
	b.nome_prod_longo,
	b.nome_prod_curto,
	b.preco,
	b.peso,
	b.largura_centimetro,
	b.altura_centimetro,
	b.comprimento_centimetro,
	b.foto_principal,
	COUNT(*) AS qtd_car,
    SUM(preco) AS total
	FROM tb_carrinhosprodutos a
	INNER JOIN tb_produtos b USING(id_prod)
	WHERE id_car = pid_car
	GROUP BY
	a.id_prod,
	a.id_car,
	b.nome_prod_longo,
	b.nome_prod_curto,
	b.preco,
	b.peso,
	b.largura_centimetro,
	b.altura_centimetro,
	b.comprimento_centimetro,
	b.foto_principal;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_carrinhosprodutos_rem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_carrinhosprodutos_rem`(
pid_car INT,
pid_prod INT
)
BEGIN
	
	DELETE FROM tb_carrinhosprodutos
    WHERE id_car = pid_car AND id_prod = pid_prod
    LIMIT 1;
    
    CALL sp_carrinhosprodutos_list(pid_car);
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_carrinhosprodutostodos_rem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_carrinhosprodutostodos_rem`(
pid_car INT,
pid_prod INT
)
BEGIN
    
    DELETE FROM tb_carrinhosprodutos
    WHERE id_car = pid_car AND id_prod = pid_prod;
    
    CALL sp_carrinhosprodutos_list(pid_car);
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `sp_carrinhos_get` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_carrinhos_get`(
psession_car VARCHAR(256)
)
BEGIN
	
    DECLARE pqtd INT;
	DECLARE pid_car INT;
    DECLARE ptotal_car DECIMAL(10,2);
    
	SELECT id_car INTO pid_car
    FROM tb_carrinhos
    WHERE session_car = psession_car;
    
    IF NOT pid_car > 0 OR pid_car IS NULL THEN
    
		INSERT INTO tb_carrinhos (session_car, data_car)
        VALUES(psession_car, NOW());
        
        SET pid_car = LAST_INSERT_ID();
    
    END IF;
    
    SELECT 
    COUNT(*), SUM(b.preco) INTO pqtd, ptotal_car
    FROM tb_carrinhosprodutos a
    INNER JOIN tb_produtos b USING(id_prod)
    WHERE id_car = pid_car;
    
	SELECT 
    a.id_car,
    a.frete_car,
    a.cep_car,
    a.data_car,
    a.session_car,
    pqtd AS qtd_prod,
    ptotal_car AS subtotal_car,
    IFNULL(ptotal_car,0)+IFNULL(frete_car, 0) AS total_car
    FROM tb_carrinhos a
    WHERE a.id_car = pid_car
    GROUP BY
    a.id_car,
    a.frete_car,
    a.cep_car,
    a.data_car,
    a.session_car;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-25 11:40:46
