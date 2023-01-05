CREATE SCHEMA zapas_schema;
USE zapas_schema;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
first_name VARCHAR(50),
last_name VARCHAR(50),
email VARCHAR(128),
password VARCHAR(128),
rol INT
);

INSERT INTO users
VALUES(1,"AdminFirstName","AdminLastName","admin@gmail.com","12345678",1);

SELECT * FROM users

