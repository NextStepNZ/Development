-- @block 
SELECT * FROM logindetails

-- @block
SELECT * FROM userprofiles

-- @block
DELETE FROM userprofiles

-- @block
DELETE FROM logindetails
DELETE FROM userprofiles
DELETE FROM groups
DELETE FROM quizzes
DELETE FROM questions
DELETE FROM token

-- @block 

CREATE SCHEMA `nextstepnz` ;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

CREATE TABLE `nextstepnz`.`logindetails` (
  `idloginDetails` INT NOT NULL AUTO_INCREMENT,
  `userName` TEXT(255) NOT NULL,
  `password` TEXT(255) NOT NULL,
  PRIMARY KEY (`idloginDetails`));
  
CREATE TABLE `nextstepnz`.`userprofiles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Type` TEXT(255) NOT NULL,
  `FirstName` TEXT(255) NOT NULL,
  `LastName` TEXT(255) NOT NULL,
  `Email` TEXT(255) NOT NULL,
  `Username` TEXT(255) NOT NULL,
  `Password` TEXT(255) NOT NULL,
  `GroupID` TEXT(255) NULL,
  PRIMARY KEY (`id`));

  CREATE TABLE `nextstepnz`.`groups` (
  `idgroups` INT NOT NULL,
  `OwnerID` INT NOT NULL,
  `Name` TEXT(255) NOT NULL,
  `AssignedQuizes` TEXT(255) NULL,
  PRIMARY KEY (`idgroups`),
  UNIQUE INDEX `idgroups_UNIQUE` (`idgroups` ASC) VISIBLE);

  CREATE TABLE `nextstepnz`.`quizzes` (
  `id` INT NOT NULL,
  `name` TEXT(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

CREATE TABLE `nextstepnz`.`questions` (
  `id` INT NOT NULL,
  `QuizID` INT NOT NULL,
  `Type` TEXT(255) NOT NULL,
  `Question` TEXT(255) NOT NULL,
  `Answer` TEXT(255) NOT NULL,
  `WrrAnswer1` TEXT(255) NOT NULL,
  `WrrAnswer2` TEXT(255) NULL,
  `WrrAnswer3` TEXT(255) NULL,
  `WrrAnswer4` TEXT(255) NULL,
  `WrrAnswer5` TEXT(255) NULL,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  PRIMARY KEY (`id`));

CREATE TABLE `nextstepnz`.`token` (
  `id` INT NOT NULL,
  `UserID` INT NOT NULL,
  `Token` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
