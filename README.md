<h1 align="center">
  <br>
  <img src="https://picsum.photos/500/400/?blur">
  <br>
  	API Endpoints
  <br>
</h1>
<h3 align="center">For use with Adapter-App by <i>Jeremy Osborn</i></h3>

<p align="center">
  <a href="http://jonathanwhittledev.com" target="_blank">Jonathan Whittle</a> •
  <a href="#scripts">Scripts</a> •
  <a href="https://github.com/jwhittle933/adapter-app-api/archive/master.zip">Download</a> •
  <a href="https://github.com/jwosborn/Adapter-app">AdapterApp</a> •
</p>

## Scripts
```bash
# Clone Repo and Install Dependencies
$ git clone https://github.com/jwhittle933/adapter-app-api.git && cd adapter-app-api && yarn install

```
 
```bash
# Starts API endpoints on port 4000, or user defined port. Navigate to localhost:4000/api
$ yarn start 
```

```bash
# Starts API with nodemon
$ yarn watch 
```

```bash
# Lints relevant .js files. Defined in .eslintrc.js
$ yarn lint 
```

```bash
# Fix lint errors
$ yarn lint-fix 
```

```bash
# PrettierJS 
$ yarn pretty 
```

```bash
# Runs createTable.js. This module creates tables in MySQL database. User created .env is required. 
$ yarn initdb 
```

```bash
# Runs migration.js. Populates the previously created tables with necessary data
$ yarn migrate 
```

```bash
# Runs testQuery.js. For testing the connection to the db. 
$ yarn testdb 
```




