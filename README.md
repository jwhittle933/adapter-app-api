<h1 align="center">
  <br>
  <img src="https://picsum.photos/800/400/">
  <br>
  	API Endpoints
  <br>
</h1>
<h3 align="center">For use with Adapter-App by <i>Jeremy Osborn</i></h3>

<p align="center">
  <a href="http://jonathanwhittledev.com" target="_blank">Jonathan Whittle</a> •
  <a href="#scripts">Scripts</a> •
  <a href="#configurationi">Configuration</a> •
  <a href="#base-endpoints">Base Enpoints</a> •
  <a href="#scoped-endpoints">Scoped Enpoints</a> •
  <a href="#environments">Environments</a> •
  <a href="#production">Production</a> •
  <a href="https://github.com/jwhittle933/adapter-app-api/archive/master.zip">Download</a> •
  <a href="https://github.com/jwosborn/Adapter-app">AdapterApp</a> •
</p>

<hr>

## Scripts

```bash
# Clone Repo and Install Dependencies
$ git clone https://github.com/jwhittle933/adapter-app-api.git && cd adapter-app-api && yarn install

```

```bash
# Stars cli helper for setting environment variables. Starts server on completion.
$ yarn scriptstart
```

```bash
# Starts API endpoints on port 4000, or user defined port. Navigate to localhost:4000/api
$ yarn start
```

```bash
# Runs testing suite
$ yarn test
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
# Runs createTable.js. This module creates tables in MySQL database. Can be used to migrate to remote or local database
$ yarn migrate
```

```bash
# Runs migration.js. Populates the previously created tables with necessary data
$ yarn migrate
```

```bash
# Runs testQuery.js. For testing the connection to the db.
$ yarn testdb
```

## Base Endpoints

### Base

`/`
Redirects to `/api`, where you can fild all of this information again.

### Healthcheck

`/healthcheck`
Returns a friendly message from Adele. Test route to ensure the api is responding.

## Scoped Routes

The following routes are scoped to the `/api` base path, i.e., in order to hit `/buildings`, in your request, the uri must include the base, `/api/buildings`

### All Buildings

`/buildings`
This path returns an Array of building names.

```json
["norton", "cooke", "library", "carver", "rankin"]
```

### Individual Building

`/buildings/:building`
This path returns an Array of Objects with data for a single building, selected from the list above.

```json
[
  {
    "building": "carver",
    "roomNumber": 108,
    "hasHDMI": false,
    "hasVGA": true
  },
  {
    "building": "carver",
    "roomNumber": 135,
    "hasHDMI": false,
    "hasVGA": true
  },
  {
    "building": "carver",
    "roomNumber": "Ingram",
    "hasHDMI": false,
    "hasVGA": true
  }
]
```

### Rooms in a Building

`/buildings/:building/rooms`
This path returns an Array of rooms for a specific building.

```json
[108, 135, "Ingram"]
```

### Room Info

`/buildings/:building/:room`
This path returns an Array with a single object containing the data for a single room.

```json
[
  {
    "building": "carver",
    "roomNumber": 108,
    "hasHDMI": false,
    "hasVGA": true
  }
]
```

### Devices

`/devices`
This path reuturns an Array of Objects with the devices and there relevant properties

```json
[
  {
    "_id": "macbook-air-2011-2014",
    "name": "Macbook Air 2011-2014",
    "hasHDMI": false,
    "hasVGA": false,
    "adapterHDMI": "Thunderbolt-HDMI",
    "adapterVGA": "Thunderbolt-VGA",
    "linkHDMI": "https://www.amazon.com/s?k=thunderbolt+to+HDMI+adapter&ref=nb_sb_noss_2",
    "linkVGA": "https://www.amazon.com/s?k=thunderbolt+to+vga+adapter&ref=nb_sb_noss_2"
  },
  {
    "_id": "macbook-pro-2011-2014",
    "name": "Macbook/Macbook Pro 2011-2014",
    "hasHDMI": true,
    "hasVGA": false,
    "adapterHDMI": "Thunderbolt-HDMI",
    "adapterVGA": "Thunderbolt-VGA",
    "linkHDMI": "https://www.amazon.com/s?k=thunderbolt+to+HDMI+adapter&ref=nb_sb_noss_2",
    "linkVGA": "https://www.amazon.com/s?k=thunderbolt+to+vga+adapter&ref=nb_sb_noss_2"
  }
]
```

### Single Device

`/devices/:device`
This path sends back an Array with a single Object of device data

```json
[
  {
    "_id": "macbook-air-2011-2014",
    "name": "Macbook Air 2011-2014",
    "hasHDMI": false,
    "hasVGA": false,
    "adapterHDMI": "Thunderbolt-HDMI",
    "adapterVGA": "Thunderbolt-VGA",
    "linkHDMI": "https://www.amazon.com/s?k=thunderbolt+to+HDMI+adapter&ref=nb_sb_noss_2",
    "linkVGA": "https://www.amazon.com/s?k=thunderbolt+to+vga+adapter&ref=nb_sb_noss_2"
  }
]
```

## Configuration

The routes are found

## Environments

In order to use a database (in dev or in prod), a `.env` file must be present in your code base. In this file, you must set DB_HOST, DB_USER, DB_PASSWORD, and DATABASE variables. As well, a SECRET variable must be set in order authenticate any api reqests that come through.

_Please keep your `.env` file private by adding it to `.gitignore`._

`echo .env >> .gitignore`

## Production
