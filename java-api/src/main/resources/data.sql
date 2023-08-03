INSERT INTO users (username, password)
VALUES
('divya', 'password123'),
('lily', 'password321'),
('minahil', 'password098');

DROP TABLE full_data IF EXISTS;
CREATE TABLE  full_data  AS SELECT * FROM CSVREAD('C:\Users\Admin\Downloads\db-bonds-data.csv');

INSERT INTO BOOK(NAME)
SELECT BOOK_NAME FROM full_data;

INSERT INTO counterparty(NAME)
select bond_holder from full_data;

INSERT INTO security(ISIN, CUSIP, ISSUER_NAME, MATURITY_DATE, COUPON, TYPE, FACE_VALUE, CURRENCY, STATUS)
select ISIN, CUSIP, ISSUER_NAME, PARSEDATETIME(BOND_MATURITY_DATE,'dd/MM/yyyy'), COUPON_PERCENT, TYPE, FACE_VALUE, TRADE_CURRENCY, TRADE_STATUS  FROM full_data;

