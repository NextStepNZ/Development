-- @block 
SELECT * FROM logindetails


-- @block
DELETE FROM logindetails

-- @block 

CREATE SCHEMA `nextstepnz` ;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE `nextstepnz`.`logindetails` (
  `idloginDetails` INT NOT NULL AUTO_INCREMENT,
  `userName` TEXT(255) NOT NULL,
  `password` TEXT(255) NOT NULL,
  PRIMARY KEY (`idloginDetails`));
  
