!function(r){var e={};function o(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=r,o.c=e,o.d=function(r,e,t){o.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:t})},o.r=function(r){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},o.t=function(r,e){if(1&e&&(r=o(r)),8&e)return r;if(4&e&&"object"==typeof r&&r&&r.__esModule)return r;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var n in r)o.d(t,n,function(e){return r[e]}.bind(null,n));return t},o.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return o.d(e,"a",e),e},o.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},o.p="",o(o.s=1)}([function(r,e){r.exports=({fparams:r,resolve:e},o)=>r.reduce((r,t)=>r+(Array.isArray(t)?e(t,o):t),0)},function(r,e,o){r.exports=o(2)},function(r,e,o){const t=o(3);var n;const a=(r,e)=>{e||(e={});const[o,...a]=r,s=t.find(r=>r.token===o);if(s){const{f:r}=s;return r({fparams:a,resolve:n},e)}throw Error("Undefined function found.")};n=a,r.exports={resolve:a}},function(r,e,o){r.exports=[{token:"+",f:o(0)},{token:"-",f:o(4)},{token:"abs",f:o(5)},{token:"*",f:o(6)},{token:"/",f:o(7)},{token:"mod",f:o(8)},{token:"avg",f:o(9)},{token:"map",f:o(10)},{token:"arg",f:o(11)},{token:"concat",f:o(12)},{token:"and",f:o(13)},{token:"or",f:o(14)},{token:"not",f:o(15)},{token:"==",f:o(16)}]},function(r,e){r.exports=({fparams:r,resolve:e},o)=>{const t=r.map(r=>Array.isArray(r)?e(r,o):r),[n,...a]=t;return a.reduce((r,e)=>r-e,n)}},function(r,e){r.exports=({fparams:r,resolve:e},o)=>{const t=Array.isArray(r[0])?e(r[0],o):r[0];return t<0?-1*t:t}},function(r,e){r.exports=({fparams:r,resolve:e},o)=>r.reduce((r,t)=>r*(Array.isArray(t)?e(t,o):t),1)},function(r,e){r.exports=({fparams:r,resolve:e},o)=>{const t=r.map(r=>Array.isArray(r)?e(r,o):r),[n,...a]=t;return a.reduce((r,e)=>r/e,n)}},function(r,e){r.exports=({fparams:r,resolve:e},o)=>(Array.isArray(r[0])?e(r[0],o):r[0])%(Array.isArray(r[1])?e(r[1],o):r[1])},function(r,e,o){const t=o(0);r.exports=({fparams:r,resolve:e},o)=>t({fparams:r,resolve:e},o)/r.length},function(r,e){r.exports=({fparams:r,resolve:e},o)=>{const[t,n,...a]=r;return a.map(r=>{o[t]=r;const a=e(n,o);return delete o[t],a})}},function(r,e){r.exports=({fparams:r,resolve:e},o)=>o[Array.isArray(r[0])?e(r[0],o):r[0]]},function(r,e){r.exports=({fparams:r,resolve:e},o)=>r.reduce((r,t)=>r+(Array.isArray(t)?e(t,o):t),"")},function(r,e){r.exports=({fparams:r,resolve:e},o)=>r.every(r=>Array.isArray(r)?e(r,o):r)},function(r,e){r.exports=({fparams:r,resolve:e},o)=>r.some(r=>Array.isArray(r)?e(r,o):r)},function(r,e){r.exports=({fparams:r,resolve:e},o)=>!(Array.isArray(r[0])?e(r[0],o):r[0])},function(r,e){r.exports=({fparams:r,resolve:e},o)=>(Array.isArray(r[0])?e(r[0],o):r[0])===(Array.isArray(r[1])?e(r[1],o):r[1])}]);