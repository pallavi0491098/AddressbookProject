PRE-REQUISITES

Node.js
Postgresql
Docker, Docker compose
Postman
 Local DB Setup

To setup a local DB for the application to connect to:

cd into the root of the addressbook project.
docker-compose -f ./docker/local-db/docker-compose-dev-postgres.yml up -d
docker exec -it postgres-db bash -c 'psql -d address book’
copy and paste the sql command in ‘local_day0.sql’ to setup the schema
Copy and paste each migration script into the psql terminal to create the tables
To connect to this DB again:

docker start postgres-db
docker exec -it postgres-db bash -c 'psql -d opm' 
 Some additional commands:

CREATE DATABASE addressbook;

CREATE SCHEMA addressbook;

CREATE USER user1

PASSWORD 'password123';

-- this password is for local

GRANT ALL ON SCHEMA addressbook TO user1;

GRANT ALL PRIVILEGES ON TABLE addressbook.books TO user1;
