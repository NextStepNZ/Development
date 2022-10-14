-- SELECT ALL QUERIES -----------------------------------------------

-- @block 
SELECT * FROM logindetails

-- @block
SELECT * FROM userprofiles

-- @block
SELECT * FROM `groups`

-- @block
SELECT * FROM quizzes

-- @block
SELECT * FROM questions

-- @block
SELECT * FROM token

-- @block 
SELECT * FROM results

-- @block
DELETE FROM logindetails;
DELETE FROM userprofiles;
DELETE FROM `groups`;
DELETE FROM quizzes;
DELETE FROM questions;
DELETE FROM token;

DROP TABLE logindetails;
DROP TABLE userprofiles;
DROP TABLE `groups`;
DROP TABLE quizzes;
DROP TABLE questions;
DROP TABLE token;

-- Creating Tables and Data -----------------------------------------

-- @block 
CREATE SCHEMA `nextstepnz` ;

-- @block
ALTER USER 'root' IDENTIFIED WITH mysql_native_password BY 'password';

-- ===============================================================================================================
-- Run this Block for a FRESH RESET of the DB -----------------------

-- @block
DELETE FROM logindetails;
DELETE FROM userprofiles;
DELETE FROM `groups`;
DELETE FROM quizzes;
DELETE FROM questions;
DELETE FROM token;
DELETE FROM results;

-- @block
DROP TABLE logindetails;
DROP TABLE userprofiles;
DROP TABLE `groups`;
DROP TABLE quizzes;
DROP TABLE questions;
DROP TABLE token;
DROP TABLE results;


-- @block
CREATE TABLE `nextstepnz`.`logindetails` (
  `idloginDetails` INT NOT NULL AUTO_INCREMENT,
  `userName` TEXT(255) NOT NULL,
  `password` TEXT(255) NOT NULL,
  PRIMARY KEY (`idloginDetails`));

-- @block
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

-- @block
CREATE TABLE `nextstepnz`.`groups` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `OwnerID` INT NOT NULL,
  `Name` TEXT(255) NOT NULL,
  `AssignedQuizes` TEXT(255) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- @block
CREATE TABLE `nextstepnz`.`quizzes` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` TEXT(255) NOT NULL,
`time_seconds` INT NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- @block
CREATE TABLE `nextstepnz`.`questions` (
  `id` INT NOT NULL AUTO_INCREMENT,
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

-- @block
CREATE TABLE `nextstepnz`.`token` (
  `id` INT NOT NULL,
  `UserID` INT NOT NULL,
  `Token` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- @block
CREATE TABLE `nextstepnz`.`results` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `StudentID` INT NOT NULL,
  `QuizID` INT NOT NULL,
  `DateTime` DATETIME NOT NULL,
  `Result` TEXT(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- @block
ALTER TABLE userprofiles AUTO_INCREMENT = 100;
ALTER TABLE `groups` AUTO_INCREMENT = 100;
ALTER TABLE quizzes AUTO_INCREMENT = 100;
ALTER TABLE questions AUTO_INCREMENT = 100;
ALTER TABLE token AUTO_INCREMENT = 100;
ALTER TABLE results AUTO_INCREMENT = 100;

-- @block
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password    ) VALUES ( "Dev","Salman","A","Dev1@gmail.com","SalmanA","Pa$sword1." );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password    ) VALUES ( "Dev","Corban","M","Dev2@gmail.com","CorbanM","Pa$sword1." );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password    ) VALUES ( "Dev","Henri","Q","Dev3@gmail.com","HenriQ","Pa$sword1." );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password    ) VALUES ( "Dev","Chris","C","Dev4@gmail.com","ChrisC","Pa$sword1." );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Teacher","AlphaMath","SmartMan","Teacher1@gmail.com","ManTeacher","Teacher1","100" );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Teacher","BravoMath","SmartWomen","Teacher2@gmail.com","WomenTeacher","Teacher2","101" );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Teacher","CharlieEnglish","SmartPerson","Teacher3@gmail.com","PersonTeacher","Teacher3","102" );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Student","Student","One","Student1@gmail.com","Student1","password1","100,102" );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Student","Student","Two","Student2@gmail.com","Student2","password2","100,102" );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Student","Student","Three","Student3@gmail.com","Student3","password3","101,102" );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Student","Student","Four","Student4@gmail.com","Student4","password4","101,102" );
INSERT INTO userprofiles ( Type,FirstName,LastName,Email,Username,Password,GroupID    ) VALUES ( "Student","Student","Five","Student5@gmail.com","Student5","password5","101,102" );
INSERT INTO quizzes ( name, time_seconds ) VALUES ( "Maths Easy",    120 );
INSERT INTO quizzes ( name ) VALUES ( "Maths Medium"   );
INSERT INTO quizzes ( name ) VALUES ( "Maths Hard"    );
INSERT INTO quizzes ( name, time_seconds ) VALUES ( "English Normal", 180);
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 100,"MultiChoice","Answer the following, 1 + 1 = ?","2","1","3","4","5","6" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 100,"MultiChoice","Answer the following, 1 + 2 = ?","3","2","1","4","5","6" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 100,"MultiChoice","Answer the following, 1 + 3 = ?","4","3","1","2","5","6" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 100,"MultiChoice","Answer the following, 1 + 4 = ?","5","4","3","1","2","6" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 101,"MultiChoice","Answer the following, 2 + 4 = ?","6","5","4","1","2","3" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 101,"MultiChoice","Answer the following, 2 + 5 = ?","7","6","5","4","1","3" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 102,"MultiChoice","Answer the following, 10 * 2 = ?" ,"20","10","30","40","50","60" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 102,"MultiChoice","Answer the following, 10 * 3 = ?" ,"30","20","10","40","50","60" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 102,"MultiChoice","Answer the following, 10 * 4 = ?" ,"40","30","10","50","60","20" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 103,"MultiChoice","Is this word spelt correctly? | Wondrful |","No","Yes",NULL,NULL,NULL,NULL );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 103,"MultiChoice","What are the five vowels?","A, E, I, O, U","W, A, R, F, W","T, D, Q, D, G","H, C, S, H, A","K, V, X, O, A","D, G, V, Q, F" );
INSERT INTO questions ( QuizID,Type,Question,Answer,WrrAnswer1,WrrAnswer2,WrrAnswer3,WrrAnswer4,WrrAnswer5    ) VALUES ( 103,"MultiChoice","What colour is an apple?","Red","Yellow",NULL,NULL,NULL,NULL );
INSERT INTO `groups` ( OwnerID,Name,AssignedQuizes ) VALUES ( 104,"Math101","100,101" );
INSERT INTO `groups` ( OwnerID,Name,AssignedQuizes ) VALUES ( 105,"Math102","102" );
INSERT INTO `groups` ( OwnerID,Name,AssignedQuizes ) VALUES ( 106,"English101","103" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 107,100,"2022-09-10 08:15:00", "2" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 107,103,"2022-09-10 09:15:00", "5" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 107,103,"2022-09-11 10:15:00", "6" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 107,100,"2022-09-11 11:15:00", "7" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 108,100,"2022-09-15 12:15:00", "8" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 108,101,"2022-09-18 13:15:00", "9" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 109,102,"2022-09-16 14:15:00", "10" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 110,102,"2022-09-15 15:15:00", "11" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 110,103,"2022-09-27 16:15:00", "12" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 111,102,"2022-09-29 17:15:00", "13" );
INSERT INTO results ( StudentID,QuizID,DateTime,Result ) VALUES ( 111,103,"2022-09-24 18:15:00", "15" );

-- ===============================================================================================================