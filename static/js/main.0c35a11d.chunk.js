(this["webpackJsonpmicrosoft-theme-part-2"]=this["webpackJsonpmicrosoft-theme-part-2"]||[]).push([[2],{103:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=(n(61),n(22)),c=n.n(o),i=n(17),u=n(30),s=n(13),l=n(23),d=(n(84),n(54)),f=n.n(d),p=n(16),h=n(55),b=n(31),m=n(38),v=n(32),g={products:[],productOfTheWeek:{}},y=n(50),E=n(26),w=n(12),T={authenticated:!1},O=n(51),j=Object(p.c)({products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRODUCTS":return{products:t.payload.products,productOfTheWeek:t.payload.productOfTheWeek};default:return e}},filters:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a:return[].concat(Object(m.a)(e),[t.payload]);case v.b:return e.filter((function(e){return e!==t.payload}));default:return e}},sortBy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.a:return t.payload;default:return e}},cartProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a:return t.payload;case b.b:return e.filter((function(e){return e.id!==t.payload.id}));default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w.a:return Object(E.a)(Object(E.a)({},e),{},{authenticated:!0});case w.b:return{authenticated:!1};default:return e}},query:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O.a:return t.payload;default:return e}}}),A=[h.a],k=Object(p.d)(j,p.a.apply(void 0,A)),R=n(37),P=Object(i.b)((function(e){return{authenticated:e.user.authenticated}}))((function(e){var t=e.component,n=e.authenticated,a=Object(R.a)(e,["component","authenticated"]);return r.a.createElement(s.b,Object.assign({component:function(e){return n?r.a.createElement(s.a,{path:"/"}):r.a.createElement(t,e)}},a))})),_=n(108),S=(n(57),n(102),Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,212))}))),U=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,219))})),C=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,216))})),I=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,217))})),D=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,220))})),W=Object(a.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,221))}));var z=Object(i.b)((function(e){return{authenticated:e.user.authenticated}}),{fetchProducts:function(){return function(e){f.a.get("https://api.jsonbin.io/b/5f543ba04d8ce4111389a45f").then((function(t){e({type:"FETCH_PRODUCTS",payload:t.data})})).catch((function(e){return console.log(e)}))}}})((function(e){var t=e.fetchProducts;return e.authenticated,l.a.onAuthStateChanged((function(e){e&&k.dispatch({type:w.a})})),Object(a.useEffect)((function(){t()}),[]),r.a.createElement(u.a,null,r.a.createElement(a.Suspense,{fallback:r.a.createElement(_.a,{variant:"primary",as:"span",className:"app-spinner",animation:"border",role:"status"})},r.a.createElement(s.d,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(s.b,{exact:!0,path:"/",component:S}),r.a.createElement(s.b,{path:"/categories",component:U}),r.a.createElement(s.b,{path:"/products",component:C}),r.a.createElement(P,{path:"/sign_in",component:D}),r.a.createElement(P,{path:"/sign_up",component:W}),r.a.createElement(s.b,{path:"/week_product",component:I})))))})),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(i.a,{store:k},r.a.createElement(z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Microsoft",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/Microsoft","/service-worker.js");M?(!function(e,t){fetch(e).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="SET_AUTHENTICATED",r="SET_UNAUTHENTICATED"},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(20),r=n.n(a);r.a.initializeApp({apiKey:"AIzaSyAlXMUqcMzMLuqY7-G913cvmVXKo1BmylE",authDomain:"fir-2758c.firebaseapp.com",databaseURL:"https://fir-2758c.firebaseio.com",projectId:"fir-2758c",storageBucket:"fir-2758c.appspot.com",messagingSenderId:"647234610225",appId:"1:647234610225:web:b96515c87b1a1b77b5e110",measurementId:"G-MKBT9RSETV"});var o=r.a.auth();r.a.database(),r.a.storage()},31:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="ADD_TO_CART",r="REMOVE_FROM_CART"},32:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="ADD_FILTER",r="REMOVE_FILTER"},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="UPDATE_SORTBY"},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="UPDATE_QUERY"},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));var a=n(23),r=(n(58),n(12)),o=function(e){var t=e.user.uid;return localStorage.setItem("FBIdToken",t),{type:r.a}},c=function(e){return function(e){a.a.currentUser.delete().then((function(){e({type:r.b})})).catch((function(e){return console.log(e.message)}))}}},58:function(e,t,n){"use strict"},59:function(e,t,n){e.exports=n(103)},84:function(e,t,n){}},[[59,3,4]]]);
//# sourceMappingURL=main.0c35a11d.chunk.js.map