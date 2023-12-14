/*! For license information please see 9975.78297865.js.LICENSE.txt */
(self.webpackChunkkratix_docs=self.webpackChunkkratix_docs||[]).push([[9975],{1262:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});r(7294);var n=r(2389),o=r(5893);function u(e){let{children:t,fallback:r}=e;return(0,n.Z)()?(0,o.jsx)(o.Fragment,{children:t?.()}):r??null}},6010:(e,t,r)=>{"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:()=>o});const o=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},2705:(e,t,r)=>{var n=r(5639).Symbol;e.exports=n},9932:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},4239:(e,t,r)=>{var n=r(2705),o=r(9607),u=r(2333),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):u(e)}},531:(e,t,r)=>{var n=r(2705),o=r(9932),u=r(1469),i=r(3448),c=n?n.prototype:void 0,l=c?c.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(u(t))return o(t,e)+"";if(i(t))return l?l.call(t):"";var r=t+"";return"0"==r&&1/t==-Infinity?"-0":r}},1957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9607:(e,t,r)=>{var n=r(2705),o=Object.prototype,u=o.hasOwnProperty,i=o.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=u.call(e,c),r=e[c];try{e[c]=void 0;var n=!0}catch(l){}var o=i.call(e);return n&&(t?e[c]=r:delete e[c]),o}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:(e,t,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,u=n||o||Function("return this")();e.exports=u},1469:e=>{var t=Array.isArray;e.exports=t},7005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},3448:(e,t,r)=>{var n=r(4239),o=r(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},9833:(e,t,r)=>{var n=r(531);e.exports=function(e){return null==e?"":n(e)}},3955:(e,t,r)=>{var n=r(9833),o=0;e.exports=function(e){var t=++o;return n(e)+t}},7418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var u,i,c=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),l=1;l<arguments.length;l++){for(var f in u=Object(arguments[l]))r.call(u,f)&&(c[f]=u[f]);if(t){i=t(u);for(var a=0;a<i.length;a++)n.call(u,i[a])&&(c[i[a]]=u[i[a]])}}return c}},5968:(e,t,r)=>{"use strict";t.Z=void 0;var n,o=(n=r(4805))&&n.__esModule?n:{default:n};function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t,r){for(var n=e,o=r,u=1e-4,i=u;i<=1;i+=u){var c=(1-i)*(1-i)*e+2*(1-i)*i*t+i*i*r;c<n&&(n=c),c>o&&(o=c)}return[Math.round(n),Math.round(o)]}class l extends o.default.PureComponent{componentWillUnmount(){this.timer&&clearTimeout(this.timer)}render(){const{fromSelector:e="body",toSelector:t=e,fromOffsetX:r=0,fromOffsetY:n=0,toOffsetX:l=0,toOffsetY:f=0,middleX:a=0,middleY:s=0,width:p=8,color:y="black",hideIfFoundSelector:d,debugLine:h=!1,dynamicUpdate:b=!1,zIndex:v=0}=this.props,m=document.querySelector(e),g=document.querySelector(t);if(this.timer&&clearTimeout(this.timer),!b&&m&&g||(this.timer=setTimeout((()=>{this.forceUpdate()}),200)),!m||!g)return null;if(d&&document.querySelector(d))return null;let O;O=m.getBoundingClientRect();const j=O.left+O.width/2+r,S=O.top+O.height/2-n+window.scrollY;O=g.getBoundingClientRect();const x=O.left+O.width/2+l,w=O.top+O.height/2-f+window.scrollY;var k={p0x:j,p0y:S,p1x:(j+x)/2+a,p1y:(S+w)/2-s,p2x:x,p2y:w,size:30,lineWidth:p,strokeStyle:y};!function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}}({},this.props.style);return o.default.createElement("canvas",{ref:e=>{const t=e;if(t){var r=c(k.p0x,k.p1x,k.p2x),n=c(k.p0y,k.p1y,k.p2y),o=k.size-k.lineWidth,u=r[0]-o,i=r[1]+o,l=n[0]-o,f=n[1]+o,a=k.p0x-u,s=k.p0y-l,p=k.p1x-u,y=k.p1y-l,d=k.p2x-u,b=k.p2y-l;t.style.position="absolute",t.style.pointerEvents="none",t.style.top=l+"px",t.style.left=u+"px",t.width=i-u,t.height=f-l,v&&(t.style.zIndex=v);var m=t.getContext("2d");h&&(m.arc(a,s,10,0,2*Math.PI),m.stroke(),m.arc(p,y,10,0,2*Math.PI),m.stroke(),m.arc(d,b,10,0,2*Math.PI),m.stroke()),m.strokeStyle=k.strokeStyle,m.lineWidth=k.lineWidth,m.lineJoin="round",m.lineCap="round",m.beginPath(),m.moveTo(a,s),m.quadraticCurveTo(p,y,d,b),m.stroke();var g=Math.atan2(b-y,d-p);m.translate(d,b),m.rotate(g+1),m.beginPath(),m.moveTo(0,k.size),m.lineTo(0,0),m.stroke(),m.rotate(-2),m.lineTo(0,-k.size),m.stroke(),m.rotate(1-g),m.translate(-d,-b)}}})}}var f=l;t.Z=f},2233:(e,t,r)=>{"use strict";var n=r(7418),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,f=o?Symbol.for("react.profiler"):60114,a=o?Symbol.for("react.provider"):60109,s=o?Symbol.for("react.context"):60110,p=o?Symbol.for("react.forward_ref"):60112,y=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var d=o?Symbol.for("react.memo"):60115,h=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var b="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function j(){}function S(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}O.prototype.isReactComponent={},O.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var x=S.prototype=new j;x.constructor=S,n(x,O.prototype),x.isPureReactComponent=!0;var w={current:null},k={current:null},P=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var n,o={},i=null,c=null;if(null!=t)for(n in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)P.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var f=Array(l),a=0;a<l;a++)f[a]=arguments[a+2];o.children=f}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:u,type:e,key:i,ref:c,props:o,_owner:k.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var $=/\/+/g,R=[];function I(e,t,r,n){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function T(e,t,r,n){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case u:case i:c=!0}}if(c)return r(n,e,""===t?"."+q(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var f=t+q(o=e[l],l);c+=T(o,f,r,n)}else if(null===e||"object"!=typeof e?f=null:f="function"==typeof(f=b&&e[b]||e["@@iterator"])?f:null,"function"==typeof f)for(e=f.call(e),l=0;!(o=e.next()).done;)c+=T(o=o.value,f=t+q(o,l++),r,n);else if("object"===o)throw r=""+e,Error(v(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}function M(e,t,r){return null==e?0:T(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function U(e,t){e.func.call(e.context,t,e.count++)}function z(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace($,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,o){var u="";null!=r&&(u=(""+r).replace($,"$&/")+"/"),M(e,z,t=I(t,u,n,o)),A(t)}function F(){var e=w.current;if(null===e)throw Error(v(321));return e}var L={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;M(e,U,t=I(null,null,t,r)),A(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!E(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:O,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:p,render:e}},lazy:function(e){return{$$typeof:h,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return F().useCallback(e,t)},useContext:function(e,t){return F().useContext(e,t)},useEffect:function(e,t){return F().useEffect(e,t)},useImperativeHandle:function(e,t,r){return F().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return F().useLayoutEffect(e,t)},useMemo:function(e,t){return F().useMemo(e,t)},useReducer:function(e,t,r){return F().useReducer(e,t,r)},useRef:function(e){return F().useRef(e)},useState:function(e){return F().useState(e)},Fragment:c,Profiler:f,StrictMode:l,Suspense:y,createElement:C,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=k.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(a in t)P.call(t,a)&&!_.hasOwnProperty(a)&&(o[a]=void 0===t[a]&&void 0!==f?f[a]:t[a])}var a=arguments.length-2;if(1===a)o.children=r;else if(1<a){f=Array(a);for(var s=0;s<a;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:u,type:e.type,key:i,ref:c,props:o,_owner:l}},createFactory:function(e){var t=C.bind(null,e);return t.type=e,t},isValidElement:E,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:w,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n}},N={default:L},W=N&&L||N;e.exports=W.default||W},4805:(e,t,r)=>{"use strict";e.exports=r(2233)}}]);