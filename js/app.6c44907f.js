(function(t){function e(e){for(var n,s,o=e[0],u=e[1],i=e[2],h=0,b=[];h<o.length;h++)s=o[h],c[s]&&b.push(c[s][0]),c[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(b.length)b.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var u=r[o];0!==c[u]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},c={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/synesthesiapp/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var i=0;i<o.length;i++)e(o[i]);var l=u;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("64a9"),c=r.n(n);c.a},"233b":function(t,e,r){},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Synesthesiapp")],1)},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"synesthesiapp"},[t.type?r("div",[t.type?r("mechanical-orange",t._b({},"mechanical-orange",t.dataSet,!1)):t._e()],1):r("div",[r("h1",[t._v("Synesthesiapp")]),r("h2",[t._v("1 - Passive Drill")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h1",[t._v("In development...")]),r("h2",[t._v("2 - E-DMTS")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("3 - L-DMTS")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("4 - Early Span")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("5 - Late Span")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("6 - Advanced Span")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("7 - Colors to Characters speed test")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("8 - Characters to Colors speed test")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("9 - Easy reading / calculations")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("10 - Advanced reading / calculations")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("11 - Matching (Syn N' Back)")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("12 - Backward Span")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("13 - Span task")]),r("button",{on:{click:t.setNumbers}},[t._v("Numbers")]),r("button",{on:{click:t.setLetters}},[t._v("Letters")]),r("h2",[t._v("14 - Reading generator")]),r("button",{on:{click:t.setLetters}},[t._v("Start")]),r("h2",[t._v("14 - Basic algebrae generator ")]),r("button",{on:{click:t.setNumbers}},[t._v("Start")])])])},o=[],u=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mechanical-orange",style:t.containerStyle},["character"===t.currentStep?r("div",{staticClass:"character",style:t.characterStyle},[t._v("\n    "+t._s(t.currentCharacter)+"\n  ")]):t._e(),r("div",{staticClass:"navigation"},[t.started?t._e():r("button",{on:{click:t.start}},[t._v("Start")]),t.started?r("button",{on:{click:t.stop}},[t._v("Stop")]):t._e(),t.started?r("button",{on:{click:t.reset}},[t._v("Reset")]):t._e(),r("label",{staticClass:"random-button",attrs:{for:"random"}},[r("span",{attrs:{for:"random"}},[t._v("Random?")]),r("input",{attrs:{type:"checkbox",id:"random"},on:{change:function(e){t.random=!t.random}}})])])])},i=[],l=r("2ef0"),h=r.n(l),b={name:"mechanical-orange",props:["data"],data:function(){return{characters:this.data,random:!1,started:!1,currentStep:"character",steps:["character","color"],currentIndex:-1,currentShownCount:0,maxShownCount:0,interval:null}},methods:{start:function(){var t=this;this.started=!0,this.random?this.characters=h.a.shuffle(this.data):this.characters=this.data;var e=function(){t.currentStep="character",t.currentShownCount>=t.maxShownCount?(t.currentIndex+=1,t.currentShownCount=0,t.maxShownCount=h.a.random(3,10)):t.currentShownCount+=1,t.currentIndex>=t.data.length&&t.reset(),setTimeout(function(){return t.currentStep="color"},1e3)};e(),this.interval=setInterval(e,1500)},stop:function(){this.started=!1,this.currentStep="character",clearInterval(this.interval)},reset:function(){this.stop(),this.currentIndex=0,this.start()}},computed:{currentColor:function(){if(this.currentIndex>=0)return this.characters[this.currentIndex].color},currentCharacter:function(){if(this.currentIndex>=0)return this.characters[this.currentIndex].character},characterStyle:function(){return{color:this.currentColor}},containerStyle:function(){return"character"===this.currentStep?{}:{backgroundColor:this.currentColor}}}},p=b,d=(r("8110"),r("2877")),v=Object(d["a"])(p,u,i,!1,null,"226bea8c",null),f=v.exports,m={name:"Synesthesiapp",methods:{setNumbers:function(){this.type="numbers"},setLetters:function(){this.type="letters"}},data:function(){return{type:null,datasets:{numbers:[{character:0,color:"rgb(255, 255, 255)"},{character:1,color:"rgb(255, 220, 0)"},{character:2,color:"rgb(0, 129, 255)"},{character:3,color:"rgb(149, 255, 0)"},{character:4,color:"rgb(12, 66, 130)"},{character:5,color:"rgb(102, 25, 192)"},{character:6,color:"rgb(138, 94, 17)"},{character:7,color:"rgb(255, 97, 194)"},{character:8,color:"rgb(255, 172, 30)"},{character:9,color:"rgb(110, 10, 10)"}],letters:[]}}},components:{MechanicalOrange:f},computed:{dataSet:function(){return"numbers"===this.type?{data:this.datasets.numbers}:"letters"===this.type?{data:this.datasets.letters}:{data:[]}}}},_=m,S=Object(d["a"])(_,s,o,!1,null,"2c5d3c40",null),k=S.exports,g={name:"app",components:{Synesthesiapp:k}},y=g,L=(r("034f"),Object(d["a"])(y,c,a,!1,null,null,null)),N=L.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(N)}}).$mount("#app")},"64a9":function(t,e,r){},8110:function(t,e,r){"use strict";var n=r("233b"),c=r.n(n);c.a}});
//# sourceMappingURL=app.6c44907f.js.map