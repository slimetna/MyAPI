# Birdwear

## Name

Birdwear

## Description

Birdwear is an independent streetwear brand. Freshly arrived on the market, this brand for young people between 16-25 years old works by "drop", periodic arrivals in limited edition, which makes each piece unique, and rare.

## Examples

drop of 150 sweaters of a collection that will be released only once in a decade (or forever). This collection could also include for example 200 t-shirts, 30 caps, socks and collectives. A 'light' collection could be created, a low price collection, which will not be released in limited edition.

## Installation:

Even though our manually created migrate function is fully functional, we preferred to work with sequelize-cli. Nevertheless, both ways work.

1 - Run `npm install`. <br />
2 - Rename **.env.example** file to **.env** and add a random string to `ACCESS_TOKEN_SECRET=`. <br />

### Installation with the Migrate function:

1 - Launch MariaDB or MySQL and create a new database. <br />
2 - Go to config/config.json, in the "development" class, modify the "database" parameter with the name of the database that was created upstream. <br />
3 - Modify the "password" parameter with the password to connect to the MySQL/MariaDB "root", if there is none, you must set the value to null (in case of bug, try with ""). <br />
4 - Change the "dialect" parameter to "mysql" or "mariadb" depending on the database manager installed on the machine. <br />
5 - Run migrate.js. <br />

### Installation with sequelize-cli :

1 - For the project to work properly, you must make sure you have sequelize-cli installed. <br />
2 - Launch MariaDB or MySQL and create a new database. <br />
3 - Go to config/config.json, in the "development" class, modify the "database" parameter with the name of the database that was created upstream. <br />
4 - Modify the parameter "password" with the password to connect to the "root" of MySQL/MariaDB, if there is none, it is necessary to put the value on null (in case of bug, try with ""). <br />
5 - Change the "dialect" parameter to "mysql" or "mariadb" depending on the database manager installed on the machine. <br />
6 - Run the "sequelize db:migrate" command, making sure you are in the directory that includes our entire project. <br />
