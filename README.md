<h1 align="center">
  API Endpoints
  <br>
</h1>
<h3 align="center">For use with Adapter-App by <i>Jeremy Osborn</i></h3>

<p align="center">
  <a href="http://jonathanwhittledev.com" target="_blank">Jonathan Whittle</a> •
  <a href="https://adapter-api.herokuapp.com/api/">Interface</a> •
  <a href="#scripts">Scripts</a> •
  <a href="#configurationi">Configuration</a> •
  <a href="#endpoints">Base Enpoints</a> •
  <a href="https://github.com/jwhittle933/adapter-app-api/archive/master.zip">Download</a> •
  <a href="https://sbts-adapter-app.herokuapp.com/">AdapterApp</a> •
</p>

[![Build Status](https://travis-ci.com/jwhittle933/adapter-app-api.svg?branch=master)](https://travis-ci.com/jwhittle933/adapter-app-api)
[![Greenkeeper badge](https://badges.greenkeeper.io/jwhittle933/adapter-app-api.svg)](https://greenkeeper.io/)
[![GitHub version](https://badge.fury.io/gh/jwhittle933%2Fadapter-app-api.svg)](https://badge.fury.io/gh/jwhittle933%2Fadapter-app-api)
[![Dependency Status](https://david-dm.org/jwhittle933/adapter-app-api.svg)](https://david-dm.org/jwhittle933/adapter-app-api)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Pending Pull-Requests](http://githubbadges.herokuapp.com/jwhittle933/adapter-app-api/pulls.svg?style=flat)](https://github.com/jwhittle933/adapter-app-api/pulls)
[![Open Issues](http://githubbadges.herokuapp.com/jwhittle933/adapter-app-api/issues.svg?style=flat)](https://github.com/jwhittle933/adapter-app-api/issues)
[![star this repo](http://githubbadges.com/star.svg?user=jwhittle933&repo=adapter-app-api&style=flat)](https://github.com/jwhittle933/adapter-app-api)

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
# Creates bundle for frontend
$ yarn buildf
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
# This module creates tables in MySQL database.
# Can be used to migrate to remote or local database
$ yarn migrate
```

```bash
# Populates the previously created tables with necessary data
$ yarn seed
```

```bash
# Runs testQuery.js. For testing the connection to the db.
$ yarn testdb
```

## Endpoints

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
    "id": "macbook-air-2011-2014",
    "name": "Macbook Air 2011-2014",
    "hasHDMI": false,
    "hasVGA": false,
    "adapterHDMI": "Thunderbolt-HDMI",
    "adapterVGA": "Thunderbolt-VGA",
    "linkHDMI": "https://www.amazon.com/s?k=thunderbolt+to+HDMI+adapter&ref=nb_sb_noss_2",
    "linkVGA": "https://www.amazon.com/s?k=thunderbolt+to+vga+adapter&ref=nb_sb_noss_2"
  },
  {
    "id": "macbook-pro-2011-2014",
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
    "id": "macbook-air-2011-2014",
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

This application relies on a MySQL database, locally and remotely. The app at `/bin/www` calls `require('dotenv').config()`, which searches the repo for a `.env` file:

```bash
LOCAL=true
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=[your password here]
DATABASE=adapterapi
```

`LOCAL` sets `process.env.LOCAL` to true so that the app can run in dev mode and access your local server. Make sure this file is ignored in `.gitignore` so that it doesn't get pushed to prod. When `/DataLayer/connection.js` reads the env locally, it'll find the `LOCAL` variable and access the local database. In prod, this variable will not exist and the application will grab the remote database (which you need to configure).
