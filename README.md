## Pre Install
- Install npm
- Install sequelize
```sh
$ npm install -g sequelize-cli
```
- You have install mysql with shootsimulator.db

## Install
- Clone this repository
```sh
$ git clone https://github.com/daengagiel17/shootsimulator.git
```
or
```sh
$ git clone git@github.com:daengagiel17/shootsimulator.git
```
or you can download it and extract the zip file.
- Move to directory shootsimulator
```sh
$ cd shootsimulator
```
- Run this command to install npm modul
```sh
$ npm install
```
- Migrate database 
```sh
$ sequelize db:migrate
```
- Fill database with data dummy 
```sh
$ sequelize db:seed:all
```
- And run the application
```sh
$ npm start
```

## Component 
- Using sequalize to migrate and seed database