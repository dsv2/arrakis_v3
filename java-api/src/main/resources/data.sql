INSERT INTO users (username, password)
VALUES
('divya', 'password123'),
('lily', 'password321'),
('minahil', 'password098');

DROP TABLE full_data IF EXISTS;
CREATE TABLE  full_data  AS SELECT * FROM CSVREAD('C:\Users\Admin\Downloads\db-bonds-data.csv');

INSERT INTO BOOK(NAME)
SELECT BOOK_NAME FROM full_data;