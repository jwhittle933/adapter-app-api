<template>
  <div id="app">
    <div class="info">
      <div class="routes">
        <h1>Adapter App API</h1>
        <h2>Available Routes</h2>
        <p v-for="route in routes" :key="route.route">{{ route.route }}</p>
      </div>
    </div>
    <div class="resp"></div>
  </div>
</template>

<script>
const returnBase = ''

export default {
  name: 'App',
  data() {
    return {
      testField: 'test',
      routes: [
        { route: '/', return: '' },
        { route: '/buildings', return: '' },
        { route: '/buildings/:building', return: '' },
        { route: '/buildings/:building/:room', return: '' },
        { route: '/devices', return: '' },
        { route: '/devices/:device', return: '' },
      ],
      activeRoute: '',
    }
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
  justify-content: space-between;
}
.routes {
  margin-left: 3vw;
  /* margin-top: 3vh; */
  max-width: 20vw;
}
.resp {
  width: 50vw;
}
</style>
