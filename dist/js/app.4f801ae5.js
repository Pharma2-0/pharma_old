(function(t){function e(e){for(var n,c,i=e[0],u=e[1],s=e[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,c=1;c<r.length;c++){var u=r[c];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function c(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"bb12a33e"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(t);var s=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[t._v(" Pharma 2.0 ")]),r("v-list-item-subtitle",[t._v(" The New Pharma Tech ")])],1)],1),r("v-divider"),r("v-list",{attrs:{shaped:""}},[r("v-list-item-group",{attrs:{color:"primary"}},t._l(t.items,(function(e,n){return r("v-list-item",{key:n,attrs:{to:e.link,link:""}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1),r("v-app-bar",{attrs:{app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),r("v-toolbar-title",[t._v("Application")])],1),r("v-main",[r("router-view")],1)],1)},o=[],c={data:function(){return{drawer:null,items:[{title:"Home",icon:"mdi-home",link:"/"},{title:"Scan",icon:"mdi-qrcode-scan",link:"/scan"},{title:"Catalogue",icon:"mdi-pill",link:"/catalogue"}]}}},i=c,u=r("2877"),s=r("6544"),l=r.n(s),p=r("7496"),d=r("40dc"),f=r("5bc1"),v=r("ce7e"),m=r("132d"),b=r("8860"),h=r("da13"),g=r("5d23"),w=r("1baa"),y=r("34c3"),_=r("f6c4"),x=r("f774"),V=r("2a7f"),j=Object(u["a"])(i,a,o,!1,null,null,null),C=j.exports;l()(j,{VApp:p["a"],VAppBar:d["a"],VAppBarNavIcon:f["a"],VDivider:v["a"],VIcon:m["a"],VList:b["a"],VListItem:h["a"],VListItemContent:g["a"],VListItemGroup:w["a"],VListItemIcon:y["a"],VListItemSubtitle:g["b"],VListItemTitle:g["c"],VMain:_["a"],VNavigationDrawer:x["a"],VToolbarTitle:V["a"]});r("d3b7"),r("3ca3"),r("ddb0");var O=r("8c4f"),k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[t._v("Home")])},P=[],T={name:"Home"},S=T,I=Object(u["a"])(S,k,P,!1,null,null,null),L=I.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("qrcode-stream",{on:{decode:t.decode}})},E=[],A=r("bb6f"),$={components:{QrcodeStream:A["QrcodeStream"]},methods:{decode:function(t){this.$router.push("/product/"+t)}}},B=$,M=Object(u["a"])(B,R,E,!1,null,null,null),Q=M.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{staticClass:"pa-4 mx-auto",attrs:{sm:"10"}},[r("v-card",{staticClass:"pa-3"},[r("v-card-actions",{staticClass:"pb-0"},[r("v-row",{staticClass:"mt-1 mx-1"},[r("v-col",{attrs:{sm:"2"}},[r("v-btn",{attrs:{small:"",outlined:"",color:"primary"}},[t._v(" "+t._s(t.product.lote)+" ")])],1),r("v-col",{staticClass:"d-flex justify-end",attrs:{sm:"10"}},[r("v-btn",{attrs:{color:"success"}},[t._v("Edit")]),r("v-btn",{attrs:{color:"red"}},[t._v("Delete")])],1)],1)],1),r("v-card-subtitle",{staticClass:"headline"},[r("h3",[t._v(t._s(t.product.product))])]),r("v-card-text",{staticClass:"grey--text"},[r("p",[t._v(t._s(t.product.description))]),r("p",[t._v(t._s(t.product.labo))])])],1)],1)],1)],1)},D=[],H=r("1da1"),N=(r("96cf"),r("d722")),J={name:"Product",data:function(){return{product:{}}},created:function(){var t=this;return Object(H["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N["a"].getProductByQRCode(t.$route.params.id);case 2:r=e.sent,t.product=r;case 4:case"end":return e.stop()}}),e)})))()}},G=J,z=r("8336"),F=r("b0af"),K=r("99d9"),U=r("62ad"),W=r("a523"),X=r("0fd9"),Y=Object(u["a"])(G,q,D,!1,null,null,null),Z=Y.exports;l()(Y,{VBtn:z["a"],VCard:F["a"],VCardActions:K["a"],VCardSubtitle:K["b"],VCardText:K["c"],VCol:U["a"],VContainer:W["a"],VRow:X["a"]}),n["a"].use(O["a"]);var tt=[{path:"/",name:"home",component:L},{path:"/scan",name:"scan",component:Q},{path:"/product/:id",name:"product",component:Z},{path:"/catalogue",name:"catalogue",component:function(){return r.e("about").then(r.bind(null,"afe0"))}}],et=new O["a"]({mode:"history",base:"/",routes:tt}),rt=et,nt=r("f309");n["a"].use(nt["a"]);var at=new nt["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:rt,vuetify:at,render:function(t){return t(C)}}).$mount("#app")},d722:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("1da1"),a=r("d4ec"),o=r("bee2"),c=(r("96cf"),r("bc3a")),i=r.n(c),u="/api/post",s=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,null,[{key:"getAllProducts",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get(u);case 2:return e=t.sent,console.log(e.data),t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getProductByQRCode",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,i.a.get("".concat(u,"/").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()}]),t}()}});
//# sourceMappingURL=app.4f801ae5.js.map