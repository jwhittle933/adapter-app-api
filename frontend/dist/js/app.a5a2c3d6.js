/* eslint-disable */ ;(function(n) {
  function e(e) {
    for (
      var t, u, i = e[0], l = e[1], s = e[2], d = 0, f = [];
      d < i.length;
      d++
    )
      (u = i[d]), o[u] && f.push(o[u][0]), (o[u] = 0)
    for (t in l) Object.prototype.hasOwnProperty.call(l, t) && (n[t] = l[t])
    c && c(e)
    while (f.length) f.shift()()
    return a.push.apply(a, s || []), r()
  }
  function r() {
    for (var n, e = 0; e < a.length; e++) {
      for (var r = a[e], t = !0, i = 1; i < r.length; i++) {
        var l = r[i]
        0 !== o[l] && (t = !1)
      }
      t && (a.splice(e--, 1), (n = u((u.s = r[0]))))
    }
    return n
  }
  var t = {},
    o = { app: 0 },
    a = []
  function u(e) {
    if (t[e]) return t[e].exports
    var r = (t[e] = { i: e, l: !1, exports: {} })
    return n[e].call(r.exports, r, r.exports, u), (r.l = !0), r.exports
  }
  ;(u.m = n),
    (u.c = t),
    (u.d = function(n, e, r) {
      u.o(n, e) || Object.defineProperty(n, e, { enumerable: !0, get: r })
    }),
    (u.r = function(n) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 })
    }),
    (u.t = function(n, e) {
      if ((1 & e && (n = u(n)), 8 & e)) return n
      if (4 & e && 'object' === typeof n && n && n.__esModule) return n
      var r = Object.create(null)
      if (
        (u.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: n }),
        2 & e && 'string' != typeof n)
      )
        for (var t in n)
          u.d(
            r,
            t,
            function(e) {
              return n[e]
            }.bind(null, t),
          )
      return r
    }),
    (u.n = function(n) {
      var e =
        n && n.__esModule
          ? function() {
              return n['default']
            }
          : function() {
              return n
            }
      return u.d(e, 'a', e), e
    }),
    (u.o = function(n, e) {
      return Object.prototype.hasOwnProperty.call(n, e)
    }),
    (u.p = '/')
  var i = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    l = i.push.bind(i)
  ;(i.push = e), (i = i.slice())
  for (var s = 0; s < i.length; s++) e(i[s])
  var c = l
  a.push([0, 'chunk-vendors']), r()
})({
  0: function(n, e, r) {
    n.exports = r('56d7')
  },
  2437: function(n, e, r) {
    'use strict'
    var t = r('f405'),
      o = r.n(t)
    o.a
  },
  '56d7': function(n, e, r) {
    'use strict'
    r.r(e)
    r('cadf'), r('551c'), r('f751'), r('097d')
    var t = r('2b0e'),
      o = function() {
        var n = this,
          e = n.$createElement,
          r = n._self._c || e
        return r('div', { staticClass: 'info' }, [
          r(
            'div',
            { staticClass: 'routes' },
            [
              r('h1', [n._v('Adapter App API')]),
              r('h2', [n._v('Available Routes')]),
              n._l(n.routes, function(e) {
                return r(
                  'p',
                  {
                    key: e.route,
                    on: {
                      click: function(r) {
                        return n.setActive(e)
                      },
                    },
                  },
                  [n._v(n._s(e.route))],
                )
              }),
            ],
            2,
          ),
          r('div', { staticClass: 'resp' }, [
            r('textarea', {
              directives: [
                {
                  name: 'model',
                  rawName: 'v-model',
                  value: n.returnVal,
                  expression: 'returnVal',
                },
              ],
              attrs: { name: 'return', rows: '20', cols: '80' },
              domProps: { value: n.returnVal },
              on: {
                input: function(e) {
                  e.target.composing || (n.returnVal = e.target.value)
                },
              },
            }),
          ]),
        ])
      },
      a = [],
      u = "['norton', 'cooke', 'library', 'carver', 'rankin']",
      i =
        "[\n  ...\n  {\n    building: 'carver',\n    roomNumber: 108,\n    hasHDMI: false,\n    hasVGA: true,\n  },\n  {\n    building: 'carver',\n    roomNumber: 135,\n    hasHDMI: false,\n    hasVGA: true,\n  },\n  {\n    building: 'carver',\n    roomNumber: 'Ingram',\n    hasHDMI: false,\n    hasVGA: true,\n  },\n  ...\n]",
      l =
        "[\n  {\n    building: 'carver',\n    roomNumber: 108,\n    hasHDMI: false,\n    hasVGA: true,\n  },\n]",
      s =
        "[\n  ...\n  {\n    id: 'macbook-air-2011-2014',\n    name: 'Macbook Air 2011-2014',\n    hasHDMI: false,\n    hasVGA: false,\n    adapterHDMI: 'Thunderbolt-HDMI',\n    adapterVGA: 'Thunderbolt-VGA',\n    linkHDMI: '...link...',\n    linkVGA: '...link...',\n  },\n  {\n    id: 'macbook-pro-2011-2014',\n    name: 'Macbook/Macbook Pro 2011-2014',\n    hasHDMI: true,\n    hasVGA: false,\n    adapterHDMI: 'Thunderbolt-HDMI',\n    adapterVGA: 'Thunderbolt-VGA',\n    linkHDMI: '...link...',\n    linkVGA: '...link...',\n  },\n  ...\n]",
      c =
        "[\n  {\n    id: 'macbook-air-2011-2014',\n    name: 'Macbook Air 2011-2014',\n    hasHDMI: false,\n    hasVGA: false,\n    adapterHDMI: 'Thunderbolt-HDMI',\n    adapterVGA: 'Thunderbolt-VGA',\n    linkHDMI: '...link...',\n    linkVGA: '...link...',\n  },\n]",
      d = {
        name: 'App',
        data: function() {
          return {
            routes: [
              { route: '/', return: 'The server redirects to this endpoint.' },
              { route: '/buildings', return: u },
              { route: '/buildings/:building', return: i },
              { route: '/buildings/:building/:room', return: l },
              { route: '/devices', return: s },
              { route: '/devices/:device', return: c },
            ],
            activeRoute: '',
            returnVal: '',
          }
        },
        methods: {
          setActive: function(n) {
            ;(this.activeRoute = n.route), (this.returnVal = n.return)
          },
        },
      },
      f = d,
      p = (r('2437'), r('2877')),
      b = Object(p['a'])(f, o, a, !1, null, '960885ba', null),
      v = b.exports
    ;(t['a'].config.productionTip = !1),
      new t['a']({
        render: function(n) {
          return n(v)
        },
      }).$mount('#app')
  },
  f405: function(n, e, r) {},
})
//# sourceMappingURL=app.a5a2c3d6.js.map
