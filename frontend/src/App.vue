<template>
  <div class="info">
    <div class="routes">
      <h1>Adapter App API</h1>
      <h2>Available Routes</h2>
      <p v-for="route in routes" :key="route.route" @click="setActive(route)">{{ route.route }}</p>
    </div>
    <div class="resp" v-if="infoMenu">
      <textarea name="return" rows="20" cols="80" v-model="returnVal"></textarea>
    </div>
  </div>
</template>

<script>
const returnBase = `['norton', 'cooke', 'library', 'carver', 'rankin']`
const returnBuildings = `[
  {
    building: 'carver',
    roomNumber: 108,
    hasHDMI: false,
    hasVGA: true,
  },
  {
    building: 'carver',
    roomNumber: 135,
    hasHDMI: false,
    hasVGA: true,
  },
  {
    building: 'carver',
    roomNumber: 'Ingram',
    hasHDMI: false,
    hasVGA: true,
  },
]`

const returnRoom = `[
  {
    building: 'carver',
    roomNumber: 108,
    hasHDMI: false,
    hasVGA: true,
  },
]`

const returnDevices = `[
  {
    id: 'macbook-air-2011-2014',
    name: 'Macbook Air 2011-2014',
    hasHDMI: false,
    hasVGA: false,
    adapterHDMI: 'Thunderbolt-HDMI',
    adapterVGA: 'Thunderbolt-VGA',
    linkHDMI: '...link...',
    linkVGA: '...link...',
  },
  {
    id: 'macbook-pro-2011-2014',
    name: 'Macbook/Macbook Pro 2011-2014',
    hasHDMI: true,
    hasVGA: false,
    adapterHDMI: 'Thunderbolt-HDMI',
    adapterVGA: 'Thunderbolt-VGA',
    linkHDMI: '...link...',
    linkVGA: '...link...',
  },
]`

const returnDevice = `[
  {
    id: 'macbook-air-2011-2014',
    name: 'Macbook Air 2011-2014',
    hasHDMI: false,
    hasVGA: false,
    adapterHDMI: 'Thunderbolt-HDMI',
    adapterVGA: 'Thunderbolt-VGA',
    linkHDMI: '...link...',
    linkVGA: '...link...',
  },
]`

export default {
  name: 'App',
  data() {
    return {
      routes: [
        { route: '/', return: 'The server redirects to this endpoint.' },
        { route: '/buildings', return: returnBase },
        { route: '/buildings/:building', return: returnBuildings },
        { route: '/buildings/:building/:room', return: returnRoom },
        { route: '/devices', return: returnDevices },
        { route: '/devices/:device', return: returnDevice },
      ],
      infoMenu: false,
      activeRoute: '',
      returnVal: '',
    }
  },
  methods: {
    setActive(route) {
      this.infoMenu = true
      this.activeRoute = route.route
      this.returnVal = route.return
    },
  },
}
</script>

<style>
body {
  padding: 50px;
  font: 14px 'Lucida Grande', Helvetica, Arial, sans-serif;
}

a {
  color: #00b7ff;
  text-decoration: none;
}

textarea {
  height: 60vh;
  border-radius: 10px;
  outline: none;
  background-color: #2b3a42;
  color: #eff2e2;
  padding: 1vw;
  font-family: monospace;
  font-size: 1em;
}

p {
  font-family: monospace;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 0.5vw;
  background-color: #2b3a42;
  color: #eff2e2;
}
p:hover {
  box-shadow: 2px 5px 3px 0px #ccc;
  cursor: pointer;
}
.info {
  display: flex;
  justify-content: space-around;
}
.routes {
  margin-left: 3vw;
  max-width: 20vw;
}
.resp {
  width: 50vw;
  margin-top: 12vh;
}
</style>
