(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{843:function(t,o,r){var content=r(854);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("daf12896",content,!0,{sourceMap:!1})},853:function(t,o,r){"use strict";r(843)},854:function(t,o,r){var e=r(18)((function(i){return i[1]}));e.push([t.i,"h1[data-v-73c7b9ec]{font-size:20px}.not-found[data-v-73c7b9ec]{margin-top:50px;text-align:center}",""]),e.locals={},t.exports=e},881:function(t,o,r){"use strict";r.r(o);var e=r(786),n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(r(853),r(100)),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o(e.a,{attrs:{dark:""}},[404===t.error.statusCode?o("h1",{staticClass:"not-found"},[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"73c7b9ec",null);o.default=component.exports}}]);