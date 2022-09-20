Run this in MySQL to set up current database set up 

CREATE SCHEMA `nextstepnz` ;

CREATE TABLE `nextstepnz`.`logindetails` (
  `idloginDetails` INT NOT NULL AUTO_INCREMENT,
  `userName` TEXT(255) NOT NULL,
  `password` TEXT(255) NOT NULL,
  PRIMARY KEY (`idloginDetails`));

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';