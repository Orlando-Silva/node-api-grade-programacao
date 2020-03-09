CREATE DATABASE `programa`

CREATE TABLE `programacao`.`programa` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(256) NOT NULL,
  `description` VARCHAR(512) NULL,
  `startTime` BIGINT(12) NOT NULL,
  `endTime` BIGINT(12) NOT NULL,
  `durationInMinutes` BIGINT(24) NOT NULL,
  `isLive` TINYINT NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `mediaId` VARCHAR(128) NOT NULL,
  PRIMARY KEY (`Id`),
  UNIQUE INDEX `Id_UNIQUE` (`Id` ASC) VISIBLE
);
