(function(t){function e(e){for(var i,o,r=e[0],c=e[1],u=e[2],l=0,h=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&h.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);m&&m(e);while(h.length)h.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var i={},a={app:0},s=[];function o(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8380cc99"}[t]+".js"}function r(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,i){n=a[t]=[e,i]}));e.push(n[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,r.nc&&c.setAttribute("nonce",r.nc),c.src=o(t);var u=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(l);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",u.name="ChunkLoadError",u.type=i,u.request=s,n[1](u)}a[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},r.m=t,r.c=i,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"12f1":function(t,e,n){"use strict";n("8ca1")},"22d7":function(t,e,n){"use strict";n("be87")},"38be":function(t,e,n){t.exports=n.p+"img/bomb.51a41616.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o=(n("034f"),n("2877")),r={},c=Object(o["a"])(r,a,s,!1,null,null,null),u=c.exports,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("info",{attrs:{bomb:t.bomb,state:t.game_status},on:{reset:t.reset,changeDiff:t.initStage}}),n("game-stage",{key:t.i,attrs:{bomb:t.bomb,mapWidth:t.mapWidth,mapHeight:t.mapHeight,state:t.game_status},on:{start:function(e){t.game_status=e},bombCount:t.bombCount,gameover:t.gameOver,gameclear:t.gameClear}})],1)},h=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("bomb-count",{attrs:{bomb:t.bomb}}),n("button",{on:{click:t.reset}},[t._v("Reset")]),n("timer",{attrs:{state:t.state}}),n("div",{staticClass:"difficulty"},[n("select",{attrs:{required:""},on:{change:t.changediff}},[n("option",{attrs:{value:"normal",selected:""}},[t._v("normal")]),n("option",{attrs:{value:"easy"}},[t._v("easy")]),n("option",{attrs:{value:"hard"}},[t._v("hard")]),n("option",{attrs:{value:"expert"}},[t._v("expert")])])])],1)},f=[],d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bomb-count"},[i("img",{attrs:{src:n("38be"),alt:"bomb"}}),i("p",[t._v(t._s(t.bomb))])])},b=[],g={name:"BombCount",props:["bomb"]},v=g,_=(n("b629"),Object(o["a"])(v,d,b,!1,null,"3c1f392a",null)),O=_.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timer"},[i("img",{attrs:{src:n("e0f8"),alt:"clock"}}),i("p",[t._v(t._s(t.min)+":"+t._s(t.sec))])])},w=[],C=(n("fb6a"),{name:"Timer",props:["state"],data:function(){return{min:"00",sec:"00",timerObj:null}},watch:{state:function(){0==this.state?(this.timerStop(),this.timerInit()):1==this.state?this.timerStart():3==this.state&&this.timerStop()}},computed:{displaySecond:function(){return this.sec<10?"0"+this.displaySecond:this.sec},displayMinute:function(){return this.min<10?"0"+this.displayMinute:this.min}},methods:{count:function(){this.sec>=59?(this.sec=0,this.min++):this.sec++,this.min=("0"+this.min).slice(-2),this.sec=("0"+this.sec).slice(-2)},timerInit:function(){this.min="00",this.sec="00"},timerStart:function(){var t=this;this.timerObj=setInterval((function(){t.count()}),1e3)},timerStop:function(){clearInterval(this.timerObj)}}}),x=C,S=(n("d046"),Object(o["a"])(x,y,w,!1,null,"b636a268",null)),j=S.exports,$={name:"Info",components:{BombCount:O,Timer:j},props:["bomb","state"],methods:{reset:function(){this.$emit("reset")},changediff:function(t){this.$emit("changeDiff",t.target.value)}}},k=$,W=(n("12f1"),Object(o["a"])(k,p,f,!1,null,"179ab552",null)),H=W.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-stage"},[t._l(t.map,(function(e,i){return n("div",{key:i,staticClass:"panels"},t._l(e,(function(e,a){return n("panel",{key:a,attrs:{panel:e,isopen:t.isOpen[i][a]},nativeOn:{contextmenu:function(e){return e.preventDefault(),t.flag(i,a)},"~click":function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])||"button"in e&&0!==e.button?null:t.open(i,a)}}})})),1)})),n("modal",{directives:[{name:"show",rawName:"v-show",value:t.modalOpen,expression:"modalOpen"}],attrs:{modalState:t.modalState},on:{modalDelete:function(e){t.modalState=e}}})],2)},M=[],E=(n("d81d"),n("a434"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"panel",class:t.panelcss})]),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.open,expression:"!open"}],staticClass:"panel unopen",class:t.flag})],1)}),P=[],T={name:"Panel",props:["panel","isopen"],computed:{open:function(){return 0!=this.isopen&&-1!=this.isopen},flag:function(){return-1==this.isopen?"flag":null},panelcss:function(){return this.panel<0?"bomb":0==this.panel?"zero":1==this.panel?"one":2==this.panel?"two":3==this.panel?"three":4==this.panel?"four":5==this.panel?"five":6==this.panel?"six":7==this.panel?"seven":"eight"}}},B=T,G=(n("98d8"),Object(o["a"])(B,E,P,!1,null,"834e5056",null)),I=G.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"modal-wrapper"},[i("a",{staticClass:"modal-overlay",attrs:{href:"#!"}}),i("div",{staticClass:"modal-window"},[i("div",{staticClass:"modal-content"},[i("p",[t._v(t._s(t.message))])]),i("img",{staticClass:"modal-close",attrs:{src:n("ed0c"),alt:""},on:{click:t.modalDelete}})])])},L=[],N={name:"Modal",props:["modalState"],computed:{message:function(){return"gameover"==this.modalState?"Game Over...":"gameclear"==this.modalState?"Game Clear!!":""}},methods:{modalDelete:function(){this.$emit("modalDelete","")}}},q=N,J=(n("22d7"),Object(o["a"])(q,A,L,!1,null,null,null)),z=J.exports;function R(t,e,n,i,a,s){return t=U(t,e,n,i,a,s),t=F(t,e,n,i),t}function U(t,e,n,i,a,s){for(var o=0;o<i;o++){var r=1;while(1==r){var c=Math.floor(Math.random()*e),u=Math.floor(Math.random()*n);0===t[c][u]&&u!==s&&c!==a&&(t[c][u]=-10,r=0)}}return t}function F(t,e,n,i){for(var a=0;a<e;a++)for(var s=0;s<n;s++)if(t[a][s]<0&&(t=K(t,a,s,e,n),i--,i<=0))return t}function K(t,e,n,i,a){return e-1>=0&&n-1>=0&&t[e-1][n-1]++,e-1>=0&&t[e-1][n]++,e-1>=0&&n+1<a&&t[e-1][n+1]++,n-1>=0&&t[e][n-1]++,n+1<a&&t[e][n+1]++,e+1<i&&n-1>=0&&t[e+1][n-1]++,e+1<i&&t[e+1][n]++,e+1<i&&n+1<a&&t[e+1][n+1]++,t}var Q=R;function V(t,e){for(var n=new Array(t),i=0;i<t;i++)n[i]=new Array(e);for(var a=0;a<t;a++)for(var s=0;s<e;s++)n[a][s]=0;return n}var X=V,Y={name:"GameStage",components:{Panel:I,Modal:z},props:["bomb","mapWidth","mapHeight","state"],data:function(){return{map:[],isOpen:[],openCount:0,modalState:"",maxBomb:this.bomb}},watch:{mapWidth:{handler:function(){this.map=[],this.map=X(this.mapHeight,this.mapWidth),this.isOpen=[],this.isOpen=X(this.mapHeight,this.mapWidth),this.maxBomb=this.bomb},immediate:!0},state:{handler:function(){0==this.state&&(this.map=[],this.map=X(this.mapHeight,this.mapWidth),this.isOpen=[],this.isOpen=X(this.mapHeight,this.mapWidth),this.$forceUpdate(),this.openCount=0)},immediate:!0}},computed:{modalOpen:function(){return"gameover"==this.modalState||"gameclear"==this.modalState}},methods:{open:function(t,e){0==this.state&&(this.$emit("start",1),this.map=Q(this.map,this.mapHeight,this.mapWidth,this.maxBomb,t,e)),this.map[t][e]<0&&(this.isOpen[t].splice(e,1,1),this.game_over()),this.open_neighbor(t,e),this.openCount==this.mapWidth*this.mapHeight-this.maxBomb&&this.game_clear()},flag:function(t,e){-1==this.isOpen[t][e]?(this.isOpen[t].splice(e,1,0),this.$emit("bombCount",1)):0==this.isOpen[t][e]&&(this.isOpen[t].splice(e,1,-1),this.$emit("bombCount",-1))},open_neighbor:function(t,e){t<0||e<0||t>=this.mapHeight||e>=this.mapWidth||1!=this.isOpen[t][e]&&(this.map[t][e]<0||(this.isOpen[t].splice(e,1,1),this.openCount++,0==this.map[t][e]&&(this.open_neighbor(t-1,e-1),this.open_neighbor(t-1,e),this.open_neighbor(t-1,e+1),this.open_neighbor(t,e-1),this.open_neighbor(t,e+1),this.open_neighbor(t+1,e-1),this.open_neighbor(t+1,e),this.open_neighbor(t+1,e+1))))},game_over:function(){this.modalState="gameover",this.$emit("gameover",3)},game_clear:function(){this.modalState="gameclear",this.$emit("gameclear",3)}}},Z=Y,tt=(n("a8a5"),Object(o["a"])(Z,D,M,!1,null,"6fdeaf9e",null)),et=tt.exports,nt={name:"Game",components:{Info:H,GameStage:et},data:function(){return{game_status:0,i:0,selectDiff:"normal",bomb:10,mapWidth:9,mapHeight:9}},methods:{reset:function(){this.game_status=0,this.initStage(this.selectDiff),console.log(this.game_status,this.selectDiff),this.i++},bombCount:function(t){this.bomb+=t},initStage:function(t){this.selectDiff=t,"easy"==this.selectDiff?(this.bomb=5,this.mapWidth=7,this.mapHeight=7):"hard"==this.selectDiff?(this.bomb=15,this.mapWidth=12,this.mapHeight=10):"expert"==this.selectDiff?(this.bomb=20,this.mapWidth=15,this.mapHeight=10):(this.bomb=10,this.mapWidth=9,this.mapHeight=9)},gameOver:function(t){this.game_status=t},gameClear:function(t){this.game_status=t}}},it=nt,at=(n("f68c"),Object(o["a"])(it,m,h,!1,null,"3ccc54ac",null)),st=at.exports;i["a"].use(l["a"]);var ot=[{path:"/",name:"Game",component:st},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],rt=new l["a"]({routes:ot}),ct=rt,ut=n("2f62");i["a"].use(ut["a"]);var lt=new ut["a"].Store({state:{},mutations:{},actions:{},modules:{}});i["a"].config.productionTip=!1,new i["a"]({router:ct,store:lt,render:function(t){return t(u)}}).$mount("#app")},"6c6f":function(t,e,n){},"85ec":function(t,e,n){},"8ca1":function(t,e,n){},"98d8":function(t,e,n){"use strict";n("b475")},a8a5:function(t,e,n){"use strict";n("cd5e")},add6:function(t,e,n){},b475:function(t,e,n){},b629:function(t,e,n){"use strict";n("6c6f")},be87:function(t,e,n){},cd5e:function(t,e,n){},d046:function(t,e,n){"use strict";n("add6")},e0f8:function(t,e,n){t.exports=n.p+"img/clock.d042b258.svg"},e2c8:function(t,e,n){},ed0c:function(t,e,n){t.exports=n.p+"img/batu.5928f8f1.svg"},f68c:function(t,e,n){"use strict";n("e2c8")}});
//# sourceMappingURL=app.b716bc9a.js.map