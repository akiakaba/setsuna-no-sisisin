(function(t){function e(e){for(var s,a,o=e[0],c=e[1],u=e[2],h=0,f=[];h<o.length;h++)a=o[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],s=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(s=!1)}s&&(r.splice(e--,1),t=a(a.s=n[0]))}return t}var s={},i={app:0},r=[];function a(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=s,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(n,s,function(e){return t[e]}.bind(null,s));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="setsunano-sisisin/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"1ae8":function(t,e,n){"use strict";n("4041")},4041:function(t,e,n){},"5bcd":function(t,e,n){},"6a27":function(t,e,n){"use strict";n("5bcd")},"85ec":function(t,e,n){},8641:function(t,e,n){"use strict";n("aca9")},aca9:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{shakin:t.shakesView},attrs:{id:"app"}},[n("div",{staticClass:"visual-area"},["initial"===t.state?n("div",{staticClass:"title-area"},[n("img",{staticClass:"title",attrs:{src:"setsuna_title.png"}})]):t._e(),"finish"===t.state?n("Finish"):[n("div",{directives:[{name:"show",rawName:"v-show",value:!!(t.currentStage+1),expression:"!!(currentStage + 1)"}]},[t._v("Stage: "+t._s(t.currentStage+1))]),n("ReadyGo",{staticClass:"ready-go",attrs:{state:t.readyGo}}),n("Character",{staticClass:"character-area",attrs:{state:t.characterState,left:"sisisin.jpg",right:t.currentOpponent&&t.currentOpponent.image}}),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showResult,expression:"showResult"}],staticClass:"result"},[t._v(t._s(t.result))])]],2),n("div",{staticClass:"control-area"},[n("button",{directives:[{name:"show",rawName:"v-show",value:t.showStart,expression:"showStart"}],on:{click:t.next}},[t._v("Click to start")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.showNext,expression:"showNext"}],on:{click:t.next}},[t._v("Click to next")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.showReturnTitle,expression:"showReturnTitle"}],on:{click:t.next}},[t._v(" Click to return to the title ")]),n("button",{directives:[{name:"show",rawName:"v-show",value:t.showStrike,expression:"showStrike"}],on:{click:t.strike}},[t._v("Strike!")])]),t._m(0),n("input",{ref:"keyBindInput",staticClass:"keyBindInput",attrs:{type:"text"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.keydown(e)},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"space",32,e.key,[" ","Spacebar"])?null:t.keyup(e)}}})])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"description"},[t._v(" Click the button or push "),n("code",{staticClass:"keyname"},[t._v("space")]),t._v(" key ASAP. ")])}],a=(n("caad"),n("2315"),[{name:"green-sisisin",time:600,image:"green_sisisin.jpg"},{name:"undead-sisisin",time:350,image:"undead_sisisin.png"},{name:"gold-sisisin",time:240,image:"gold_sisisin.jpg"}]),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"message"},[t._v(t._s(t.message))])},c=[],u=s["a"].extend({name:"ReadyGo",computed:{message:function(){switch(this.$props.state){case"none":return"";case"ready":return"Ready?";case"go":return"Go!!!";default:throw Error}}},props:["state"]}),l=u,h=(n("6a27"),n("2877")),f=Object(h["a"])(l,o,c,!1,null,"78114a1b",null),d=f.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"message"},[t._v("Congratulations!")]),n("div",{staticClass:"description"},[t._v("You have punished all bad-sisisins.")])])}],m=s["a"].extend({name:"Finish"}),g=m,y=(n("8641"),Object(h["a"])(g,p,v,!1,null,"25fd22cc",null)),w=y.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.shows?n("div",[n("img",{staticClass:"character left",class:t.leftClass,attrs:{src:this.left}}),n("img",{staticClass:"character right",class:t.rightClass,attrs:{src:this.right}})]):t._e()},_=[],b=s["a"].extend({name:"Character",computed:{shows:function(){return"none"!==this.state},leftClass:function(){return{"left-win":"left-win"===this.state}},rightClass:function(){return{"right-win":"right-win"===this.state}}},props:["state","left","right"]}),x=b,S=(n("1ae8"),Object(h["a"])(x,k,_,!1,null,"493d060b",null)),C=S.exports,O=s["a"].extend({name:"App",data:function(){return{state:"initial",result:"",readyGo:"none",keyready:!0,currentStage:-1,timer:{begin:0,opponentHandle:0}}},computed:{showStart:function(){return["initial","defeat"].includes(this.state)},showNext:function(){return"victory"===this.state},showReturnTitle:function(){return"finish"===this.state},showResult:function(){return["victory","defeat"].includes(this.state)},showMessage:function(){return"finish"===this.state},hasNextStage:function(){return a.length>this.currentStage+1},showStrike:function(){return["ready","contest"].includes(this.state)},shakesView:function(){return"defeat"===this.state},currentOpponent:function(){return a[this.currentStage]},characterState:function(){switch(this.state){case"ready":case"contest":return"init";case"victory":return"left-win";case"defeat":return"right-win";default:return"none"}}},methods:{next:function(){var t=this;if(this.$refs.keyBindInput.focus(),"defeat"===this.state)this.currentStage=-1,this.state="initial",this.readyGo="none";else if("finish"===this.state)this.currentStage=-1,this.state="initial",this.readyGo="none";else if(this.hasNextStage){this.currentStage++,this.state="ready",this.readyGo="ready";var e=5e3*Math.random()+2e3,n=function(){t.state="contest",t.readyGo="go",t.timer.begin=(new Date).getTime(),t.timer.opponentHandle=setTimeout((function(){t.stricken()}),t.currentOpponent.time)};setTimeout(n,e)}else this.state="finish"},strike:function(){if("contest"===this.state){this.state="victory";var t=(new Date).getTime()-this.timer.begin;clearTimeout(this.timer.opponentHandle),this.result="WIN: ".concat(t," ms")}},stricken:function(){if("contest"===this.state){this.state="defeat";var t=(new Date).getTime()-this.timer.begin;this.result="LOSE: ".concat(t," ms")}},keydown:function(){this.keyready&&(this.keyready=!1,this.strike())},keyup:function(){this.keyready=!0}},components:{ReadyGo:d,Finish:w,Character:C}}),j=O,N=(n("034f"),Object(h["a"])(j,i,r,!1,null,null,null)),T=N.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(T)}}).$mount("#app")}});
//# sourceMappingURL=app.52a1d3b5.js.map