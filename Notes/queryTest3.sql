CREATE DATABASE test4;

CREATE TABLE test4.Customer (
`ID` INT AUTO_INCREMENT PRIMARY KEY,
`FIRST_NAME` varchar(50) NOT NULL,
`LAST_NAME` varchar(50) NOT NULL,
`GENDER` varchar(20),
`BIRTHDATE` date,
`isVIP` bool,
`CREATED_DATE` date NOT NULL,
`UPDATED_DATE` date
);

INSERT INTO test3.customer(FIRST_NAME,LAST_NAME,GENDER,CREATED_DATE,isVIP) VALUES ('Hiral','Mashru','Female','2021-04-14',1);

INSERT INTO test3.customer(FIRST_NAME,LAST_NAME,GENDER,CREATED_DATE,isVIP) VALUES ('Harsh','Mashru','Male','2021-04-14',0);

INSERT INTO test3.customer(FIRST_NAME,LAST_NAME,GENDER,CREATED_DATE) VALUES ('Heer','Mashru','Female','2021-04-14');

SELECT * FROM test3.customer WHERE isVIP = 1;

SELECT * FROM test3.customer WHERE isVIP = 0;




