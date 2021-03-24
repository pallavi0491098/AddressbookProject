CREATE SCHEMA addressbook;
CREATE USER user1
PASSWORD 'password123';
-- this password is for local
GRANT ALL ON SCHEMA addressbook TO user1;
