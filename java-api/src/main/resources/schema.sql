--DROP TABLE IF EXISTS dogs;
--
--CREATE TABLE dogs (
--    dog_id INT NOT NULL,
--    name VARCHAR(250) NOT NULL,
--    age INT NOT NULL
--);

DROP TABLE IF EXISTS BOOKS;

CREATE TABLE BOOKS
AS SELECT BOOK_NAME, ISIN, BOND_HOLDER, ISSUER_NAME, BOND_MATURITY_DATE
FROM FULLDATA;

SELECT * FROM BOOKS;

