const Vue = require('vue')

const info = new Vue({
  el: '#app',
  data: {
    routes: [
      { route: '/', return: '' },
      { route: '/buildings', return: '' },
      { route: '/buildings/:building', return: '' },
      { route: '/buildings/:building/:room', return: '' },
      { route: '/devices', return: '' },
      { route: '/devices/:device', return: '' },
    ],
  },
  template: `
    <div id='app'>
      <div class='info'>
        <div class='routes'>
          <h1>Adapter App API</h1>
          <h2>Available Routes</h2>
          <p v-for="route in routes">
            {{ route.route }}
          </p>
        </div>
      </div>
      <div class='resp'>
      
      </div>
    </div>
  `,
})
