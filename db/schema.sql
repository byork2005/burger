CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN DEFAULT false,
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);

/* Need to set default value for createdAt field within mySQL Workbench. See PDF.
May need to set devoured Boolean to a default of No, or 0. Watch Cat Video
to see how they set up the 0 and 1 boolean. 

The table is set up so that it should be compatible with what Heroku db server requires */