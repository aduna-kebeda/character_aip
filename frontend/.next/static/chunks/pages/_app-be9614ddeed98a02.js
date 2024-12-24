(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{2505:(e,t,r)=>{e.exports=r(8015)},5592:(e,t,r)=>{"use strict";var n=r(9516),i=r(7522),o=r(3948),s=r(9106),a=r(9615),u=r(2012),c=r(4202),l=r(7763);e.exports=function(e){return new Promise(function(t,r){var d=e.data,f=e.headers,p=e.responseType;n.isFormData(d)&&delete f["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var A=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";f.Authorization="Basic "+btoa(A+":"+m)}var g=a(e.baseURL,e.url);function v(){if(h){var n="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null;i(t,r,{data:p&&"text"!==p&&"json"!==p?h.response:h.responseText,status:h.status,statusText:h.statusText,headers:n,config:e,request:h}),h=null}}if(h.open(e.method.toUpperCase(),s(g,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,"onloadend"in h?h.onloadend=v:h.onreadystatechange=function(){h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))&&setTimeout(v)},h.onabort=function(){h&&(r(l("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){r(l("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(l(t,e,e.transitional&&e.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var x=(e.withCredentials||c(g))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;x&&(f[e.xsrfHeaderName]=x)}"setRequestHeader"in h&&n.forEach(f,function(e,t){void 0===d&&"content-type"===t.toLowerCase()?delete f[t]:h.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),p&&"json"!==p&&(h.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){h&&(h.abort(),r(e),h=null)}),d||(d=null),h.send(d)})}},8015:(e,t,r)=>{"use strict";var n=r(9516),i=r(9012),o=r(5155),s=r(5343);function a(e){var t=new o(e),r=i(o.prototype.request,t);return n.extend(r,o.prototype,t),n.extend(r,t),r}var u=a(r(6987));u.Axios=o,u.create=function(e){return a(s(u.defaults,e))},u.Cancel=r(1928),u.CancelToken=r(3191),u.isCancel=r(3864),u.all=function(e){return Promise.all(e)},u.spread=r(7980),u.isAxiosError=r(5019),e.exports=u,e.exports.default=u},1928:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},3191:(e,t,r)=>{"use strict";var n=r(1928);function i(e){if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});var t,r=this;e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.source=function(){var e;return{token:new i(function(t){e=t}),cancel:e}},e.exports=i},3864:e=>{"use strict";e.exports=function(e){return!!(e&&e.__CANCEL__)}},5155:(e,t,r)=>{"use strict";var n=r(9516),i=r(9106),o=r(3471),s=r(4490),a=r(5343),u=r(4841),c=u.validators;function l(e){this.defaults=e,this.interceptors={request:new o,response:new o}}l.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t,r=e.transitional;void 0!==r&&u.assertOptions(r,{silentJSONParsing:c.transitional(c.boolean,"1.0.0"),forcedJSONParsing:c.transitional(c.boolean,"1.0.0"),clarifyTimeoutError:c.transitional(c.boolean,"1.0.0")},!1);var n=[],i=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(i=i&&t.synchronous,n.unshift(t.fulfilled,t.rejected))});var o=[];if(this.interceptors.response.forEach(function(e){o.push(e.fulfilled,e.rejected)}),!i){var l=[s,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(o),t=Promise.resolve(e);l.length;)t=t.then(l.shift(),l.shift());return t}for(var d=e;n.length;){var f=n.shift(),p=n.shift();try{d=f(d)}catch(e){p(e);break}}try{t=s(d)}catch(e){return Promise.reject(e)}for(;o.length;)t=t.then(o.shift(),o.shift());return t},l.prototype.getUri=function(e){return i((e=a(this.defaults,e)).url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],function(e){l.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}}),n.forEach(["post","put","patch"],function(e){l.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}}),e.exports=l},3471:(e,t,r)=>{"use strict";var n=r(9516);function i(){this.handlers=[]}i.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},i.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=i},9615:(e,t,r)=>{"use strict";var n=r(9137),i=r(4680);e.exports=function(e,t){return e&&!n(t)?i(e,t):t}},7763:(e,t,r)=>{"use strict";var n=r(5449);e.exports=function(e,t,r,i,o){return n(Error(e),t,r,i,o)}},4490:(e,t,r)=>{"use strict";var n=r(9516),i=r(2881),o=r(3864),s=r(6987);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=i.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return a(e),t.data=i.call(e,t.data,t.headers,e.transformResponse),t},function(t){return!o(t)&&(a(e),t&&t.response&&(t.response.data=i.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},5449:e=>{"use strict";e.exports=function(e,t,r,n,i){return e.config=t,r&&(e.code=r),e.request=n,e.response=i,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},5343:(e,t,r)=>{"use strict";var n=r(9516);e.exports=function(e,t){t=t||{};var r={},i=["url","method","data"],o=["headers","auth","proxy","params"],s=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function u(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function c(i){n.isUndefined(t[i])?n.isUndefined(e[i])||(r[i]=u(void 0,e[i])):r[i]=u(e[i],t[i])}n.forEach(i,function(e){n.isUndefined(t[e])||(r[e]=u(void 0,t[e]))}),n.forEach(o,c),n.forEach(s,function(i){n.isUndefined(t[i])?n.isUndefined(e[i])||(r[i]=u(void 0,e[i])):r[i]=u(void 0,t[i])}),n.forEach(a,function(n){n in t?r[n]=u(e[n],t[n]):n in e&&(r[n]=u(void 0,e[n]))});var l=i.concat(o).concat(s).concat(a),d=Object.keys(e).concat(Object.keys(t)).filter(function(e){return -1===l.indexOf(e)});return n.forEach(d,c),r}},7522:(e,t,r)=>{"use strict";var n=r(7763);e.exports=function(e,t,r){var i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}},2881:(e,t,r)=>{"use strict";var n=r(9516),i=r(6987);e.exports=function(e,t,r){var o=this||i;return n.forEach(r,function(r){e=r.call(o,e,t)}),e}},6987:(e,t,r)=>{"use strict";var n=r(7836),i=r(9516),o=r(7018),s=r(5449),a={"Content-Type":"application/x-www-form-urlencoded"};function u(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:function(){var e;return"undefined"!=typeof XMLHttpRequest?e=r(5592):void 0!==n&&"[object process]"===Object.prototype.toString.call(n)&&(e=r(5592)),e}(),transformRequest:[function(e,t){return(o(t,"Accept"),o(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(u(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)||t&&"application/json"===t["Content-Type"]?(u(t,"application/json"),function(e,t,r){if(i.isString(e))try{return(0,JSON.parse)(e),i.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional,r=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,o=!r&&"json"===this.responseType;if(o||n&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw s(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},i.forEach(["delete","get","head"],function(e){c.headers[e]={}}),i.forEach(["post","put","patch"],function(e){c.headers[e]=i.merge(a)}),e.exports=c},9012:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},9106:(e,t,r)=>{"use strict";var n=r(9516);function i(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;if(r)o=r(t);else if(n.isURLSearchParams(t))o=t.toString();else{var o,s=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(i(t)+"="+i(e))}))}),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},4680:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},3948:(e,t,r)=>{"use strict";var n=r(9516);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,i,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},9137:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},5019:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},4202:(e,t,r)=>{"use strict";var n=r(9516);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=i(window.location.href),function(t){var r=n.isString(t)?i(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},7018:(e,t,r)=>{"use strict";var n=r(9516);e.exports=function(e,t){n.forEach(e,function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])})}},2012:(e,t,r)=>{"use strict";var n=r(9516),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,o,s={};return e&&n.forEach(e.split("\n"),function(e){o=e.indexOf(":"),t=n.trim(e.substr(0,o)).toLowerCase(),r=n.trim(e.substr(o+1)),t&&!(s[t]&&i.indexOf(t)>=0)&&("set-cookie"===t?s[t]=(s[t]?s[t]:[]).concat([r]):s[t]=s[t]?s[t]+", "+r:r)}),s}},7980:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},4841:(e,t,r)=>{"use strict";var n=r(4198),i={};["object","boolean","number","function","string","symbol"].forEach(function(e,t){i[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});var o={},s=n.version.split(".");function a(e,t){for(var r=t?t.split("."):s,n=e.split("."),i=0;i<3;i++){if(r[i]>n[i])return!0;if(r[i]<n[i])break}return!1}i.transitional=function(e,t,r){var i=t&&a(t);function s(e,t){return"[Axios v"+n.version+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,a){if(!1===e)throw Error(s(n," has been removed in "+t));return i&&!o[n]&&(o[n]=!0,console.warn(s(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,a)}},e.exports={isOlderVersion:a,assertOptions:function(e,t,r){if("object"!=typeof e)throw TypeError("options must be an object");for(var n=Object.keys(e),i=n.length;i-- >0;){var o=n[i],s=t[o];if(s){var a=e[o],u=void 0===a||s(a,o,e);if(!0!==u)throw TypeError("option "+o+" must be "+u);continue}if(!0!==r)throw Error("Unknown option "+o)}},validators:i}},9516:(e,t,r)=>{"use strict";var n=r(9012),i=Object.prototype.toString;function o(e){return"[object Array]"===i.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==i.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e){if("object"!=typeof e&&(e=[e]),o(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):o(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)l(arguments[n],r);return t},extend:function(e,t,r){return l(t,function(t,i){r&&"function"==typeof t?e[i]=n(t,r):e[i]=t}),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},8424:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(680)}])},6526:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return b}});let n=r(7677),i=r(544),o=r(4848),s=i._(r(6540)),a=n._(r(961)),u=n._(r(6085)),c=r(7282),l=r(2105),d=r(9641);r(7679);let f=r(7644),p=n._(r(5472)),h=r(1903),A={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,n,i,o,s){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function g(e){return s.use?{fetchPriority:e}:{fetchpriority:e}}let v=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:u,decoding:c,className:l,style:d,fetchPriority:f,placeholder:p,loading:A,unoptimized:v,fill:x,onLoadRef:b,onLoadingCompleteRef:y,setBlurComplete:w,setShowAltText:j,sizesInput:E,onLoad:S,onError:C,...O}=e,_=(0,s.useCallback)(e=>{e&&(C&&(e.src=e.src),e.complete&&m(e,p,b,y,w,v,E))},[r,p,b,y,w,C,v,E]),k=(0,h.useMergedRef)(t,_);return(0,o.jsx)("img",{...O,...g(f),loading:A,width:u,height:a,decoding:c,"data-nimg":x?"fill":"1",className:l,style:d,sizes:i,srcSet:n,src:r,ref:k,onLoad:e=>{m(e.currentTarget,p,b,y,w,v,E)},onError:e=>{j(!0),"empty"!==p&&w(!0),C&&C(e)}})});function x(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(u.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let b=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(f.RouterContext),n=(0,s.useContext)(d.ImageConfigContext),i=(0,s.useMemo)(()=>{let e=A||n||l.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:u}=e,h=(0,s.useRef)(a);(0,s.useEffect)(()=>{h.current=a},[a]);let m=(0,s.useRef)(u);(0,s.useEffect)(()=>{m.current=u},[u]);let[g,b]=(0,s.useState)(!1),[y,w]=(0,s.useState)(!1),{props:j,meta:E}=(0,c.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:g,showAltText:y});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(v,{...j,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:h,onLoadingCompleteRef:m,setBlurComplete:b,setShowAltText:w,sizesInput:e.sizes,ref:t}),E.priority?(0,o.jsx)(x,{isAppRouter:!r,imgAttributes:j}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return i}});let n=r(6540);function i(e,t){let r=(0,n.useRef)(()=>{}),i=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),i.current()):(r.current=o(e,n),i.current=o(t,n))}:e||t,[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6825:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(7677)._(r(6540)).default.createContext({})},8721:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},7282:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(7679);let n=r(9197),i=r(2105);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,u,c,{src:l,sizes:d,unoptimized:f=!1,priority:p=!1,loading:h,className:A,quality:m,width:g,height:v,fill:x=!1,style:b,overrideSrc:y,onLoad:w,onLoadingComplete:j,placeholder:E="empty",blurDataURL:S,fetchPriority:C,decoding:O="async",layout:_,objectFit:k,objectPosition:N,lazyBoundary:R,lazyRoot:P,...M}=e,{imgConf:U,showAltText:B,blurComplete:T,defaultLoader:I}=t,z=U||i.imageConfigDefault;if("allSizes"in z)a=z;else{let e=[...z.deviceSizes,...z.imageSizes].sort((e,t)=>e-t),t=z.deviceSizes.sort((e,t)=>e-t);a={...z,allSizes:e,deviceSizes:t}}if(void 0===I)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=M.loader||I;delete M.loader,delete M.srcSet;let D="__next_img_default"in L;if(D){if("custom"===a.loader)throw Error('Image with src "'+l+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(_){"fill"===_&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[_];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[_];t&&!d&&(d=t)}let F="",V=s(g),H=s(v);if((r=l)&&"object"==typeof r&&(o(r)||void 0!==r.src)){let e=o(l)?l.default:l;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(u=e.blurWidth,c=e.blurHeight,S=S||e.blurDataURL,F=e.src,!x){if(V||H){if(V&&!H){let t=V/e.width;H=Math.round(e.height*t)}else if(!V&&H){let t=H/e.height;V=Math.round(e.width*t)}}else V=e.width,H=e.height}}let J=!p&&("lazy"===h||void 0===h);(!(l="string"==typeof l?l:F)||l.startsWith("data:")||l.startsWith("blob:"))&&(f=!0,J=!1),a.unoptimized&&(f=!0),D&&!a.dangerouslyAllowSVG&&l.split("?",1)[0].endsWith(".svg")&&(f=!0);let W=s(m),G=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:N}:{},B?{}:{color:"transparent"},b),K=T||"empty"===E?null:"blur"===E?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:V,heightInt:H,blurWidth:u,blurHeight:c,blurDataURL:S||"",objectFit:G.objectFit})+'")':'url("'+E+'")',q=K?{backgroundSize:G.objectFit||"cover",backgroundPosition:G.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:K}:{},X=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:s,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:u,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,s),l=u.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:u.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===c?e:n+1)+c).join(", "),src:a({config:t,src:r,quality:o,width:u[l]})}}({config:a,src:l,unoptimized:f,width:V,quality:W,sizes:d,loader:L});return{props:{...M,loading:J?"lazy":h,fetchPriority:C,width:V,height:H,decoding:O,className:A,style:{...G,...q},sizes:X.sizes,srcSet:X.srcSet,src:y||X.src},meta:{unoptimized:f,priority:p,placeholder:E,fill:x}}}},6085:(e,t,r)=>{"use strict";var n=r(7836);Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return m},defaultHead:function(){return f}});let i=r(7677),o=r(544),s=r(4848),a=o._(r(6540)),u=i._(r(5076)),c=r(6825),l=r(1215),d=r(8721);function f(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(7679);let h=["name","httpEquiv","charSet","itemProp"];function A(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,s=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){s=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=h.length;e<t;e++){let t=h[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!s)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let i=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:i})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(c.AmpStateContext),n=(0,a.useContext)(l.HeadManagerContext);return(0,s.jsx)(u.default,{reduceComponentsToState:A,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9197:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:s}=e,a=n?40*n:t,u=i?40*i:r,c=a&&u?"viewBox='0 0 "+a+" "+u+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},2364:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return u},getImageProps:function(){return a}});let n=r(7677),i=r(7282),o=r(6526),s=n._(r(5472));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let u=o.Image},5472:(e,t)=>{"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},5076:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=r(6540),i=n.useLayoutEffect,o=n.useEffect;function s(e){let{headManager:t,reduceComponentsToState:r}=e;function s(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}return i(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),i(()=>(t&&(t._pendingUpdate=s),()=>{t&&(t._pendingUpdate=s)})),o(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},7679:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5812:(e,t,r)=>{"use strict";r.d(t,{A:()=>c,h:()=>u});var n=r(4848),i=r(6540),o=r(6715),s=r(8144);let a=(0,i.createContext)(void 0),u=()=>{let e=(0,i.useContext)(a);if(!e)throw Error("useAuth must be used within an AuthProvider");return e},c=e=>{let{children:t}=e,[r,u]=(0,i.useState)(!1),[c,l]=(0,i.useState)(null),d=(0,o.useRouter)(),f=async(e,t)=>{try{let r=await (0,s.iD)(e,t);l(r.access_token),u(!0),d.push("/")}catch(e){console.error("Login failed:",e)}};return(0,n.jsx)(a.Provider,{value:{isAuthenticated:r,token:c,login:f,logout:()=>{l(null),u(!1),d.push("/login")}},children:t})}},7027:(e,t,r)=>{"use strict";r.d(t,{A:()=>s,o:()=>o});var n=r(4848),i=r(6540);let o=(0,i.createContext)(void 0),s=e=>{let{children:t}=e,[r,s]=(0,i.useState)([]),[a,u]=(0,i.useState)(""),[c,l]=(0,i.useState)(!1),d=async e=>{};return(0,n.jsx)(o.Provider,{value:{onSent:d,prevPrompt:r,setRecentPrompt:u,newChat:()=>{},setContextLoading:l,contextLoading:c},children:t})}},680:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>v});var n=r(4848);r(885);var i=r(7027),o=r(5812),s=r(6540),a=r(6715),u=r(9965),c=r.n(u);let l={src:"/_next/static/media/menu_icon.96e46ded.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAADFBMVEUAAABMaXEAAAAAAACI9KeKAAAABHRSTlNXABIR9w0BoAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABxJREFUeJxjYIQCBiYGMGBCMJghDGYEA1MNTDsABngALTW9plMAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},d={src:"/_next/static/media/plus_icon.88ce1069.png",height:60,width:42,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAFVBMVEVMaXF8fHyNjY2BgYF/f39/f399fX3KZgIlAAAAB3RSTlMAeAlTVCSmw1XG3gAAAAlwSFlzAAALEQAACxEBf2RfkQAAACdJREFUeJw9iskJAAAIw1Kv/UcWQe0rIQUymbkDRgSGVCWdbfvncAMJFABJQ5LeRgAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},f={src:"/_next/static/media/question_icon.ee432ac9.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAAAAAAAAAAAAAAABMaXEAAAAAAAAAAAAAAAAAAAByAZdbAAAACnRSTlM+eIotAHEBNkAPHl5vzAAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJw1y7ERwDAMw0BQpCx7/4VzKlI/wAkSOaTLrg5U1CnQvFu2ELkKWrKX0jWz8b9/G6MAxgSgJ8YAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/history_icon.191f7fbb.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUhISEpKSkpKSkpKSkpKSkoKCgnJycrKysoKCgrKys/HrBlAAAACXRSTlMCG2+uWE05KYWxmOB5AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAM0lEQVR4nDWLQQ7AMAzCDAnt9v8PT5naC7IsA6hbwHrKrkDelaYEwsZNzK4B/XYmJ773DxbTAJOVnQ+OAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},h={src:"/_next/static/media/setting_icon.39392ecb.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEUAAABMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAABpbZmrAAAACXRSTlNWACSXxQ1khrBzRMjiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALUlEQVR4nEWLyQkAMAzD5Nz7T1z6aPoxAslIgjuymikTFg0dRjrueH5YtfG7HxkIALEzg4uwAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8},A={src:"/_next/static/media/message_icon.29db5d43.png",height:60,width:60,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEU+Pj4/Pz87Ozs9PT0+Pj49PT09PT07Ozs6OjqR5J7VAAAACXRSTlMBVhsiZnlGPS9tgPDEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALElEQVR4nFWLOQ4AIAyAoIf9/4+Ni0YmBoDLqAbQkbEECshP2rHWqdvI97IBC/MAVAzrQcAAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},m=()=>{let[e,t]=(0,s.useState)(!1),[r,o]=(0,s.useState)(!1),u=(0,s.useContext)(i.o),m=(0,a.useRouter)();if(!u)throw Error("Context must be used within a ContextProvider");let{onSent:g,prevPrompt:v,setRecentPrompt:x,newChat:b}=u,y=async e=>{x(e),await g(e),o(!1)};return(0,n.jsxs)("div",{className:"flex min-h-screen",children:[(0,n.jsx)("div",{className:"fixed inset-y-0 left-0 z-30 bg-white p-6 transition-transform duration-300 ease-in-out transform ".concat(r?"translate-x-0":"-translate-x-full"," md:relative md:translate-x-0"),children:(0,n.jsxs)("div",{className:"flex flex-col justify-between min-h-screen",children:[(0,n.jsxs)("div",{className:"top",children:[(0,n.jsx)(c(),{onClick:()=>t(e=>!e),className:"w-5 ml-2 cursor-pointer hidden md:block",src:l,alt:"Menu"}),(0,n.jsxs)("div",{onClick:()=>{b(),m.push("/selectCharacter"),o(!1)},className:"mt-12 flex items-center p-3 rounded-full bg-gray-200 cursor-pointer text-gray-600 gap-2",children:[(0,n.jsx)(c(),{src:d,alt:"New Chat",className:"w-5"}),e?(0,n.jsx)("p",{children:"New Chat"}):null]}),e&&(0,n.jsxs)("div",{className:"recent flex flex-col animate-fadeIn",children:[(0,n.jsx)("p",{className:"mt-8 mb-5",children:"Recent"}),v.map((e,t)=>(0,n.jsxs)("div",{onClick:()=>y(e),className:"flex items-start gap-2 p-3 pr-10 rounded-full cursor-pointer text-gray-800 hover:bg-gray-300",children:[(0,n.jsx)(c(),{src:A,alt:"Message",className:"w-5"}),(0,n.jsxs)("p",{children:[e.slice(0,20),"..."]})]},t))]})]}),(0,n.jsxs)("div",{className:"bottom flex flex-col",children:[(0,n.jsxs)("div",{className:"flex items-center gap-2 p-3 cursor-pointer",onClick:()=>o(!1),children:[(0,n.jsx)(c(),{src:f,alt:"Help",className:"w-5"}),e?(0,n.jsx)("p",{children:"Help"}):null]}),(0,n.jsxs)("div",{className:"flex items-center gap-2 p-3 cursor-pointer",onClick:()=>o(!1),children:[(0,n.jsx)(c(),{src:p,alt:"Activity",className:"w-5"}),e?(0,n.jsx)("p",{children:"Activity"}):null]}),(0,n.jsxs)("div",{className:"flex items-center gap-2 p-3 cursor-pointer",onClick:()=>o(!1),children:[(0,n.jsx)(c(),{src:h,alt:"Setting",className:"w-5"}),e?(0,n.jsx)("p",{children:"Setting"}):null]})]})]})}),(0,n.jsx)("div",{className:"flex-1 flex flex-col overflow-auto",children:(0,n.jsx)("div",{className:"md:hidden bg-white p-4 flex items-center",children:(0,n.jsx)("button",{onClick:()=>{o(!r)},className:"text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600",children:(0,n.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})})]})},g=e=>{let{children:t}=e;return(0,n.jsxs)("div",{className:"flex min-h-screen w-[100%] bg-gray-100",children:[(0,n.jsx)("div",{className:"fixed top-0 left-0 h-full  bg-white shadow-lg z-10",children:(0,n.jsx)(m,{})}),(0,n.jsx)("div",{className:"flex-1 w-[90%] flex flex-col  justify-center items-center",children:(0,n.jsx)("main",{className:"flex-1 w-[90%] overflow-auto",children:(0,n.jsx)("div",{className:"p-4",children:t})})})]})},v=function(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(i.A,{children:["  ",(0,n.jsxs)(o.A,{children:["  ",(0,n.jsx)(g,{children:(0,n.jsx)(t,{...r})})]})]})}},8144:(e,t,r)=>{"use strict";r.d(t,{_z:()=>a,iD:()=>u,vo:()=>s});var n=r(2505),i=r.n(n);let o="http://127.0.0.1:8000",s=async()=>(await i().get("".concat(o,"/api/characters"))).data,a=async(e,t)=>{try{return(await i().post("".concat(o,"/api/chat"),{message:e,character:t})).data.reply}catch(e){throw console.error("Error sending message:",e),e}},u=async(e,t)=>{try{return(await i().post("".concat(o,"/token"),{username:e,password:t})).data}catch(e){throw console.error("Error logging in:",e),e}}},885:()=>{},9965:(e,t,r)=>{e.exports=r(2364)},6715:(e,t,r)=>{e.exports=r(8440)},4198:e=>{"use strict";e.exports=JSON.parse('{"name":"axios","version":"0.21.4","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://axios-http.com","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.14.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(8424),t(8440))),_N_E=e.O()}]);