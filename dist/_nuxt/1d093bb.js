(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{549:function(t,e,n){"use strict";n(6),n(10),n(16),n(17);var r=n(3),c=(n(29),n(11),n(27),n(50),n(400),n(18),n(35),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(38),n(32),n(9),n(64),n(399),n(1)),o=n(84),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],j=O.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=O.reduce((function(t,e){return t["offset"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),v=O.reduce((function(t,e){return t["order"+Object(l.r)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(j),offset:Object.keys(y),order:Object.keys(v)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var h=new Map;e.a=c.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},j),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},v),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,c=e.children,l=(e.parent,"");for(var f in n)l+=String(n[f]);var d=h.get(l);return d||function(){var t,e;for(e in d=[],m)m[e].forEach((function(t){var r=n[t],c=w(e,t,r);c&&d.push(c)}));var c=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!c||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),h.set(l,d)}(),t(n.tag,Object(o.a)(data,{class:d}),c)}})},550:function(t,e,n){"use strict";n(6),n(10),n(16),n(17);var r=n(3),c=(n(32),n(39),n(25),n(11),n(27),n(50),n(400),n(18),n(35),n(401),n(402),n(403),n(404),n(405),n(406),n(407),n(408),n(409),n(410),n(411),n(412),n(413),n(38),n(9),n(399),n(1)),o=n(84),l=n(2);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var O=["sm","md","lg","xl"],j=["start","end","center"];function y(t,e){return O.reduce((function(n,r){return n[t+Object(l.r)(r)]=e(),n}),{})}var v=function(t){return[].concat(j,["baseline","stretch"]).includes(t)},m=y("align",(function(){return{type:String,default:null,validator:v}})),w=function(t){return[].concat(j,["space-between","space-around"]).includes(t)},h=y("justify",(function(){return{type:String,default:null,validator:w}})),P=function(t){return[].concat(j,["space-between","space-around","stretch"]).includes(t)},S=y("alignContent",(function(){return{type:String,default:null,validator:P}})),C={align:Object.keys(m),justify:Object.keys(h),alignContent:Object.keys(S)},D={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=D[t];if(null!=n){if(e){var c=e.replace(t,"");r+="-".concat(c)}return(r+="-".concat(n)).toLowerCase()}}var E=new Map;e.a=c.a.extend({name:"v-row",functional:!0,props:d(d(d({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:v}},m),{},{justify:{type:String,default:null,validator:w}},h),{},{alignContent:{type:String,default:null,validator:P}},S),render:function(t,e){var n=e.props,data=e.data,c=e.children,l="";for(var f in n)l+=String(n[f]);var d=E.get(l);return d||function(){var t,e;for(e in d=[],C)C[e].forEach((function(t){var r=n[t],c=k(e,t,r);c&&d.push(c)}));d.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),E.set(l,d)}(),t(n.tag,Object(o.a)(data,{staticClass:"row",class:d}),c)}})},572:function(t,e,n){"use strict";n.r(e);var r=n(3),c=(n(18),n(35),n(38),n(11),n(6),n(10),n(16),n(9),n(17),n(79));function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={components:{Breadcrumbs:function(){return n.e(14).then(n.bind(null,569))}},watch:{$route:{deep:!0,immediate:!0,handler:function(t){var path="/example";t.path===path&&this.setCrumbs([{title:"Example Page",path:path}])}}},data:function(){return{crumbs:null}},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.b)(["setCrumbs"])),computed:{},mounted:function(){this.setCrumbs([{title:"Example Page",path:"/example"}])}},f=n(92),d=n(122),O=n.n(d),j=n(549),y=n(550),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("Breadcrumbs"),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("NuxtChild")],1)],1)}),[],!1,null,null,null);e.default=component.exports;O()(component,{VCol:j.a,VRow:y.a})}}]);