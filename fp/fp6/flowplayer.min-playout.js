!function(e){function t(e,t,n,r){for(var i,a=n.slice(),l=o(t,e),s=0,c=a.length;c>s&&(handler=a[s],"object"==typeof handler&&"function"==typeof handler.handleEvent?handler.handleEvent(l):handler.call(e,l),!l.stoppedImmediatePropagation);s++);return i=!l.stoppedPropagation,r&&i&&e.parentNode?e.parentNode.dispatchEvent(l):!l.defaultPrevented}function n(e,t){return{configurable:!0,get:e,set:t}}function r(e,t,r){var o=y(t||e,r)
h(e,"textContent",n(function(){return o.get.call(this)},function(e){o.set.call(this,e)}))}function o(e,t){return e.currentTarget=t,e.eventPhase=e.target===e.currentTarget?2:3,e}function i(e,t){for(var n=e.length;n--&&e[n]!==t;);return n}function a(){if("BR"===this.tagName)return"\n"
for(var e=this.firstChild,t=[];e;)8!==e.nodeType&&7!==e.nodeType&&t.push(e.textContent),e=e.nextSibling
return t.join("")}function l(e){!f&&k.test(document.readyState)&&(f=!f,document.detachEvent(d,l),e=document.createEvent("Event"),e.initEvent(p,!0,!0),document.dispatchEvent(e))}function s(e){for(var t;t=this.lastChild;)this.removeChild(t)
null!=e&&this.appendChild(document.createTextNode(e))}function c(t,n){return n||(n=e.event),n.target||(n.target=n.srcElement||n.fromElement||document),n.timeStamp||(n.timeStamp=(new Date).getTime()),n}if(!document.createEvent){var u=!0,f=!1,d="onreadystatechange",p="DOMContentLoaded",m="__IE8__"+Math.random(),v=e.Object,h=v.defineProperty||function(e,t,n){e[t]=n.value},g=v.defineProperties||function(t,n){for(var r in n)if(b.call(n,r))try{h(t,r,n[r])}catch(o){e.console&&console.log(r+" failed on object:",t,o.message)}},y=v.getOwnPropertyDescriptor,b=v.prototype.hasOwnProperty,w=e.Element.prototype,x=e.Text.prototype,E=/^[a-z]+$/,k=/loaded|complete/,T={},S=document.createElement("div")
r(e.HTMLCommentElement.prototype,w,"nodeValue"),r(e.HTMLScriptElement.prototype,null,"text"),r(x,null,"nodeValue"),r(e.HTMLTitleElement.prototype,null,"text"),h(e.HTMLStyleElement.prototype,"textContent",function(e){return n(function(){return e.get.call(this.styleSheet)},function(t){e.set.call(this.styleSheet,t)})}(y(e.CSSStyleSheet.prototype,"cssText"))),g(w,{textContent:{get:a,set:s},firstElementChild:{get:function(){for(var e=this.childNodes||[],t=0,n=e.length;n>t;t++)if(1==e[t].nodeType)return e[t]}},lastElementChild:{get:function(){for(var e=this.childNodes||[],t=e.length;t--;)if(1==e[t].nodeType)return e[t]}},previousElementSibling:{get:function(){for(var e=this.previousSibling;e&&1!=e.nodeType;)e=e.previousSibling
return e}},nextElementSibling:{get:function(){for(var e=this.nextSibling;e&&1!=e.nodeType;)e=e.nextSibling
return e}},childElementCount:{get:function(){for(var e=0,t=this.childNodes||[],n=t.length;n--;e+=1==t[n].nodeType);return e}},addEventListener:{value:function(e,n,r){var o,a=this,l="on"+e,s=a[m]||h(a,m,{value:{}})[m],u=s[l]||(s[l]={}),f=u.h||(u.h=[])
if(!b.call(u,"w")){if(u.w=function(e){return e[m]||t(a,c(a,e),f,!1)},!b.call(T,l))if(E.test(e))try{o=document.createEventObject(),o[m]=!0,9!=a.nodeType&&null==a.parentNode&&S.appendChild(a),a.fireEvent(l,o),T[l]=!0}catch(o){for(T[l]=!1;S.hasChildNodes();)S.removeChild(S.firstChild)}else T[l]=!1;(u.n=T[l])&&a.attachEvent(l,u.w)}i(f,n)<0&&f[r?"unshift":"push"](n)}},dispatchEvent:{value:function(e){var n,r=this,o="on"+e.type,i=r[m],a=i&&i[o],l=!!a
return e.target||(e.target=r),l?a.n?r.fireEvent(o,e):t(r,e,a.h,!0):(n=r.parentNode)?n.dispatchEvent(e):!0,!e.defaultPrevented}},removeEventListener:{value:function(e,t,n){var r=this,o="on"+e,a=r[m],l=a&&a[o],s=l&&l.h,c=s?i(s,t):-1
c>-1&&s.splice(c,1)}}}),g(x,{addEventListener:{value:w.addEventListener},dispatchEvent:{value:w.dispatchEvent},removeEventListener:{value:w.removeEventListener}}),g(e.XMLHttpRequest.prototype,{addEventListener:{value:function(e,t,n){var r=this,o="on"+e,a=r[m]||h(r,m,{value:{}})[m],l=a[o]||(a[o]={}),s=l.h||(l.h=[])
i(s,t)<0&&(r[o]||(r[o]=function(){var t=document.createEvent("Event")
t.initEvent(e,!0,!0),r.dispatchEvent(t)}),s[n?"unshift":"push"](t))}},dispatchEvent:{value:function(e){var n=this,r="on"+e.type,o=n[m],i=o&&o[r],a=!!i
return a&&(i.n?n.fireEvent(r,e):t(n,e,i.h,!0))}},removeEventListener:{value:w.removeEventListener}}),g(e.Event.prototype,{bubbles:{value:!0,writable:!0},cancelable:{value:!0,writable:!0},preventDefault:{value:function(){this.cancelable&&(this.defaultPrevented=!0,this.returnValue=!1)}},stopPropagation:{value:function(){this.stoppedPropagation=!0,this.cancelBubble=!0}},stopImmediatePropagation:{value:function(){this.stoppedImmediatePropagation=!0,this.stopPropagation()}},initEvent:{value:function(e,t,n){this.type=e,this.bubbles=!!t,this.cancelable=!!n,this.bubbles||this.stopPropagation()}}}),g(e.HTMLDocument.prototype,{textContent:{get:function(){return 11===this.nodeType?a.call(this):null},set:function(e){11===this.nodeType&&s.call(this,e)}},addEventListener:{value:function(t,n,r){var o=this
w.addEventListener.call(o,t,n,r),u&&t===p&&!k.test(o.readyState)&&(u=!1,o.attachEvent(d,l),e==top&&function i(e){try{o.documentElement.doScroll("left"),l()}catch(t){setTimeout(i,50)}}())}},dispatchEvent:{value:w.dispatchEvent},removeEventListener:{value:w.removeEventListener},createEvent:{value:function(e){var t
if("Event"!==e)throw Error("unsupported "+e)
return t=document.createEventObject(),t.timeStamp=(new Date).getTime(),t}}}),g(e.Window.prototype,{getComputedStyle:{value:function(){function e(e){this._=e}function t(){}var n=/^(?:[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/,r=/^(top|right|bottom|left)$/,o=/\-([a-z])/g,i=function(e,t){return t.toUpperCase()}
return e.prototype.getPropertyValue=function(e){var t,a,l,s=this._,c=s.style,u=s.currentStyle,f=s.runtimeStyle
return e=("float"===e?"style-float":e).replace(o,i),t=u?u[e]:c[e],n.test(t)&&!r.test(e)&&(a=c.left,l=f&&f.left,l&&(f.left=u.left),c.left="fontSize"===e?"1em":t,t=c.pixelLeft+"px",c.left=a,l&&(f.left=l)),null==t?t:t+""||"auto"},t.prototype.getPropertyValue=function(){return null},function(n,r){return r?new t(n):new e(n)}}()},addEventListener:{value:function(n,r,o){var a,l=e,s="on"+n
l[s]||(l[s]=function(e){return t(l,c(l,e),a,!1)}),a=l[s][m]||(l[s][m]=[]),i(a,r)<0&&a[o?"unshift":"push"](r)}},dispatchEvent:{value:function(t){var n=e["on"+t.type]
return n?n.call(e,t)!==!1&&!t.defaultPrevented:!0}},removeEventListener:{value:function(t,n,r){var o="on"+t,a=(e[o]||v)[m],l=a?i(a,n):-1
l>-1&&a.splice(l,1)}}})}}(this),!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e()
else if("function"==typeof define&&define.amd)define([],e)
else{var t
"undefined"!=typeof window?t=window:"undefined"!=typeof global?t=global:"undefined"!=typeof self&&(t=self),t.flowplayer=e()}}(function(){var e
return function t(e,n,r){function o(a,l){if(!n[a]){if(!e[a]){var s="function"==typeof require&&require
if(!l&&s)return s(a,!0)
if(i)return i(a,!0)
var c=Error("Cannot find module '"+a+"'")
throw c.code="MODULE_NOT_FOUND",c}var u=n[a]={exports:{}}
e[a][0].call(u.exports,function(t){var n=e[a][1][t]
return o(n?n:t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a])
return o}({1:[function(e,t,n){"use strict"
var r=t.exports={},o=e("class-list"),i=window.jQuery,a=e("punycode"),l=e("computed-style")
r.noop=function(){},r.identity=function(e){return e},r.removeNode=function(e){e&&e.parentNode&&e.parentNode.removeChild(e)},r.find=function(e,t){return i?i(e,t).toArray():(t=t||document,Array.prototype.map.call(t.querySelectorAll(e),function(e){return e}))},r.text=function(e,t){e["innerText"in e?"innerText":"textContent"]=t},r.findDirect=function(e,t){return r.find(e,t).filter(function(e){return e.parentNode===t})},r.hasClass=function(e,t){return o(e).contains(t)},r.isSameDomain=function(e){var t=window.location,n=r.createElement("a",{href:e})
return t.hostname===n.hostname&&t.protocol===n.protocol&&t.port===n.port},r.css=function(e,t,n){return"object"==typeof t?Object.keys(t).forEach(function(n){r.css(e,n,t[n])}):void 0!==n?""===n?e?e.style.removeProperty(t):void 0:e?e.style.setProperty(t,n):void 0:e?l(e,t):void 0},r.createElement=function(e,t,n){try{var o=document.createElement(e)
for(var a in t)t.hasOwnProperty(a)&&("css"===a?r.css(o,t[a]):r.attr(o,a,t[a]))
return o.innerHTML=n||"",o}catch(l){if(!i)throw l
return i("<"+e+">"+n+"</"+e+">").attr(t)[0]}},r.toggleClass=function(e,t,n){if(e){var r=o(e)
void 0===n?r.toggle(t):n?r.add(t):n||r.remove(t)}},r.addClass=function(e,t){return r.toggleClass(e,t,!0)},r.removeClass=function(e,t){return r.toggleClass(e,t,!1)},r.append=function(e,t){return e.appendChild(t),e},r.appendTo=function(e,t){return r.append(t,e),e},r.prepend=function(e,t){e.insertBefore(t,e.firstChild)},r.insertAfter=function(e,t,n){t==r.lastChild(e)&&e.appendChild(n)
var o=Array.prototype.indexOf.call(e.children,t)
e.insertBefore(n,e.children[o+1])},r.html=function(e,t){e=e.length?e:[e],e.forEach(function(e){e.innerHTML=t})},r.attr=function(e,t,n){if("class"===t&&(t="className"),r.hasOwnOrPrototypeProperty(e,t))try{e[t]=n}catch(o){if(!i)throw o
i(e).attr(t,n)}else n===!1?e.removeAttribute(t):e.setAttribute(t,n)
return e},r.prop=function(e,t,n){return void 0===n?e&&e[t]:void(e[t]=n)},r.offset=function(e){var t=e.getBoundingClientRect()
return e.offsetWidth/e.offsetHeight>e.clientWidth/e.clientHeight&&(t={left:100*t.left,right:100*t.right,top:100*t.top,bottom:100*t.bottom,width:100*t.width,height:100*t.height}),t},r.width=function(e,t){if(t)return e.style.width=(""+t).replace(/px$/,"")+"px"
var n=r.offset(e).width
return void 0===n?e.offsetWidth:n},r.height=function(e,t){if(t)return e.style.height=(""+t).replace(/px$/,"")+"px"
var n=r.offset(e).height
return void 0===n?e.offsetHeight:n},r.lastChild=function(e){return e.children[e.children.length-1]},r.hasParent=function(e,t){for(var n=e.parentElement;n;){if(r.matches(n,t))return!0
n=n.parentElement}return!1},r.createAbsoluteUrl=function(e){return r.createElement("a",{href:e}).href},r.xhrGet=function(e,t,n){var r=new XMLHttpRequest
r.onreadystatechange=function(){return 4===this.readyState?this.status>=400?n():void t(this.responseText):void 0},r.open("get",e,!0),r.send()},r.pick=function(e,t){var n={}
return t.forEach(function(t){e.hasOwnProperty(t)&&(n[t]=e[t])}),n},r.hostname=function(e){return a.toUnicode(e||window.location.hostname)},r.browser={webkit:"WebkitAppearance"in document.documentElement.style},r.getPrototype=function(e){return Object.getPrototypeOf?Object.getPrototypeOf(e):e.__proto__},r.hasOwnOrPrototypeProperty=function(e,t){for(var n=e;n;){if(Object.prototype.hasOwnProperty.call(n,t))return!0
n=r.getPrototype(n)}return!1},r.matches=function(e,t){var n=Element.prototype,r=n.matches||n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector||function(e){for(var t=this,n=(t.document||t.ownerDocument).querySelectorAll(e),r=0;n[r]&&n[r]!==t;)r++
return n[r]?!0:!1}
return r.call(e,t)},function(e){function t(e){return e.replace(/-[a-z]/g,function(e){return e[1].toUpperCase()})}void 0!==e.setAttribute&&(e.setProperty=function(e,n){return this.setAttribute(t(e),n+"")},e.getPropertyValue=function(e){return this.getAttribute(t(e))||null},e.removeProperty=function(e){var n=this.getPropertyValue(e)
return this.removeAttribute(t(e)),n})}(window.CSSStyleDeclaration.prototype)},{"class-list":21,"computed-style":23,punycode:29}],2:[function(e,t,n){"use strict"
var r=e("../common")
t.exports=function(e,t,n,o){n=n||"opaque"
var i="obj"+(""+Math.random()).slice(2,15),a='<object class="fp-engine" id="'+i+'" name="'+i+'" ',l=navigator.userAgent.indexOf("MSIE")>-1
a+=l?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">':' data="'+e+'" type="application/x-shockwave-flash">'
var s={width:"100%",height:"100%",allowscriptaccess:"always",wmode:n,quality:"high",flashvars:"",movie:e+(l?"?"+i:""),name:i}
"transparent"!==n&&(s.bgcolor=o||"#333333"),Object.keys(t).forEach(function(e){s.flashvars+=e+"="+t[e]+"&"}),Object.keys(s).forEach(function(e){a+='<param name="'+e+'" value="'+s[e]+'"/>'}),a+="</object>"
var c=r.createElement("div",{},a)
return r.find("object",c)},window.attachEvent&&window.attachEvent("onbeforeunload",function(){window.__flash_savedUnloadHandler=window.__flash_unloadHandler=function(){}})},{"../common":1}],3:[function(e,t,n){"use strict"
function r(e){return/^https?:/.test(e)}var o,i=e("../flowplayer"),a=e("../common"),l=e("./embed"),s=e("extend-object"),c=e("bean")
o=function(e,t){function n(e){function t(e){return("0"+parseInt(e).toString(16)).slice(-2)}return(e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))?"#"+t(e[1])+t(e[2])+t(e[3]):void 0}function u(e){if(7===e.length)return e
var t=e.split("").slice(1)
return"#"+t.map(function(e){return e+e}).join("")}function f(e){return/application\/x-mpegurl/i.test(e.type)}var d,p,m,v=e.conf,h=(e.video,window,{engineName:o.engineName,pick:function(t){var n=s({},function(){if(i.support.flashVideo){for(var n,r,o=0;o<t.length;o++)if(r=t[o],/mp4|flv|flash/i.test(r.type)&&(n=r),e.conf.swfHls&&/mpegurl/i.test(r.type)&&(n=r),n&&!/mp4/i.test(n.type))return n
return n}}())
if(n)return!n.src||r(n.src)||e.conf.rtmp||n.rtmp||(n.src=a.createAbsoluteUrl(n.src)),n},load:function(o){function g(e){return e.replace(/&amp;/g,"%26").replace(/&/g,"%26").replace(/=/g,"%3D")}d=o
var y=a.findDirect("video",t)[0]||a.find(".fp-player > video",t)[0],b=o.src,w=r(b),x=function(){a.removeNode(y)},E=function(e){return e.some(function(e){return!!y.canPlayType(e.type)})}
i.support.video&&a.prop(y,"autoplay")&&E(o.sources)?c.one(y,"timeupdate",x):x()
var k=o.rtmp||v.rtmp
if(w||k||(b=a.createAbsoluteUrl(b)),m&&f(o)&&m.data!==v.swfHls&&h.unload(),m){["live","preload","loop"].forEach(function(e){o.hasOwnProperty(e)&&m.__set(e,o[e])}),Object.keys(o.flashls||{}).forEach(function(e){m.__set("hls_"+e,o.flashls[e])})
var T=!1
if(!w&&k)m.__set("rtmp",k.url||k)
else{var S=m.__get("rtmp")
T=!!S,m.__set("rtmp",null)}m.__play(b,T||o.rtmp&&o.rtmp!==v.rtmp)}else{p="fpCallback"+(""+Math.random()).slice(3,15),b=g(b)
var C={hostname:v.embedded?a.hostname(v.hostname):a.hostname(location.hostname),url:b,callback:p}
t.getAttribute("data-origin")&&(C.origin=t.getAttribute("data-origin")),["proxy","key","autoplay","preload","subscribe","live","loop","debug","splash","poster","rtmpt"].forEach(function(e){v.hasOwnProperty(e)&&(C[e]=v[e]),o.hasOwnProperty(e)&&(C[e]=o[e]),(v.rtmp||{}).hasOwnProperty(e)&&(C[e]=(v.rtmp||{})[e]),(o.rtmp||{}).hasOwnProperty(e)&&(C[e]=(o.rtmp||{})[e])}),v.rtmp&&(C.rtmp=v.rtmp.url||v.rtmp),o.rtmp&&(C.rtmp=o.rtmp.url||o.rtmp),Object.keys(o.flashls||{}).forEach(function(e){var t=o.flashls[e]
C["hls_"+e]=t}),void 0!==v.bufferTime&&(C.bufferTime=v.bufferTime),w&&delete C.rtmp,C.rtmp&&(C.rtmp=g(C.rtmp))
var j,O=v.bgcolor||a.css(t,"background-color")||""
0===O.indexOf("rgb")?j=n(O):0===O.indexOf("#")&&(j=u(O)),C.initialVolume=e.volumeLevel
var N=f(o)?v.swfHls:v.swf
m=l(N,C,v.wmode,j)[0]
var P=a.find(".fp-player",t)[0]
a.prepend(P,m),setTimeout(function(){try{if(!m.PercentLoaded())return e.trigger("error",[e,{code:7,url:v.swf}])}catch(t){}},5e3),setTimeout(function(){void 0===m.PercentLoaded&&e.trigger("flashdisabled",[e])},1e3),e.off("resume.flashhack").on("resume.flashhack",function(){var t=setTimeout(function(){e.playing&&e.trigger("flashdisabled",[e])},1e3)
e.one("progress",function(){clearTimeout(t)})}),m.pollInterval=setInterval(function(){if(m){var t=m.__status?m.__status():null
t&&(e.playing&&t.time&&t.time!==e.video.time&&e.trigger("progress",[e,t.time]),o.buffer=t.buffer/o.bytes*o.duration,e.trigger("buffer",[e,o.buffer]),!o.buffered&&t.time>0&&(o.buffered=!0,e.trigger("buffered",[e])))}},250),window[p]=function(n,r){var o=d
v.debug&&(0===n.indexOf("debug")&&r&&r.length?console.log.apply(console,["-- "+n].concat(r)):console.log("--",n,r))
var i={type:n}
switch(n){case"ready":r=s(o,r)
break
case"click":i.flash=!0
break
case"keydown":i.which=r
break
case"seek":o.time=r
break
case"status":e.trigger("progress",[e,r.time]),r.buffer<o.bytes&&!o.buffered?(o.buffer=r.buffer/o.bytes*o.duration,e.trigger("buffer",o.buffer)):o.buffered||(o.buffered=!0,e.trigger("buffered"))}"click"===n||"keydown"===n?(i.target=t,c.fire(t,n,[i])):"buffered"!=n&&"unload"!==n?setTimeout(function(){e.trigger(i,[e,r])},1):"unload"===n&&e.trigger(i,[e,r])}}},speed:a.noop,unload:function(){m&&m.__unload&&m.__unload()
try{p&&window[p]&&delete window[p]}catch(n){}a.find("object",t).forEach(a.removeNode),m=0,e.off(".flashengine"),clearInterval(m.pollInterval)}})
return["pause","resume","seek","volume"].forEach(function(t){h[t]=function(n){try{e.ready&&(void 0===n?m["__"+t]():m["__"+t](n))}catch(r){if(void 0===m["__"+t])return e.trigger("flashdisabled",[e])
throw r}}}),h},o.engineName="flash",o.canPlay=function(e,t){return i.support.flashVideo&&/video\/(mp4|flash|flv)/i.test(e)||i.support.flashVideo&&t.swfHls&&/mpegurl/i.test(e)},i.engines.push(o)},{"../common":1,"../flowplayer":18,"./embed":2,bean:20,"extend-object":25}],4:[function(e,t,n){"use strict"
function r(e,t){return t=t||100,Math.round(e*t)/t}function o(e){return/mpegurl/i.test(e)?"application/x-mpegurl":e}function i(e){return/^(video|application)/i.test(e)||(e=o(e)),!!m.canPlayType(e).replace("no","")}function a(e,t){var n=e.filter(function(e){return e.type===t})
return n.length?n[0]:null}var l,s,c=e("../flowplayer"),u=e("bean"),f=e("class-list"),d=e("extend-object"),p=e("../common"),m=document.createElement("video"),v={ended:"finish",pause:"pause",play:"resume",progress:"buffer",timeupdate:"progress",volumechange:"volume",ratechange:"speed",seeked:"seek",loadeddata:"ready",error:"error",dataunavailable:"error",webkitendfullscreen:!c.support.inlineVideo&&"unload"},h=function(e,t,n,r){if(void 0===t&&(t=!0),void 0===n&&(n="none"),void 0===r&&(r=!0),r&&l)return l.type=o(e.type),l.src=e.src,p.find("track",l).forEach(p.removeNode),l.removeAttribute("crossorigin"),l
var i=document.createElement("video")
return i.src=e.src,i.type=o(e.type),i.className="fp-engine",i.autoplay=t?"autoplay":!1,i.preload=n,i.setAttribute("x-webkit-airplay","allow"),r&&(l=i),i}
s=function(e,t){function n(n,o,a){var l=t.getAttribute("data-flowplayer-instance-id")
if(n.listeners&&n.listeners.hasOwnProperty(l))return void(n.listeners[l]=a);(n.listeners||(n.listeners={}))[l]=a,u.on(o,"error",function(t){try{i(t.target.getAttribute("type"))&&e.trigger("error",[e,{code:4,video:d(a,{src:n.src,url:n.src})}])}catch(r){}}),e.on("shutdown",function(){u.off(o)})
var s={}
return Object.keys(v).forEach(function(o){var i=v[o]
if(i){var c=function(s){if(a=n.listeners[l],s.target&&f(s.target).contains("fp-engine")&&(w.debug&&!/progress/.test(i)&&console.log(o,"->",i,s),(e.ready||/ready|error/.test(i))&&i&&p.find("video",t).length)){var c
if("unload"===i)return void e.unload()
var u=function(){e.trigger(i,[e,c])}
switch(i){case"ready":c=d(a,{duration:n.duration,width:n.videoWidth,height:n.videoHeight,url:n.currentSrc,src:n.currentSrc})
try{c.seekable=!e.live&&/mpegurl/i.test(a?a.type||"":"")&&n.duration||n.seekable&&n.seekable.end(null)}catch(v){}if(m=m||setInterval(function(){try{c.buffer=n.buffered.end(null)}catch(t){}c.buffer&&(r(c.buffer,1e3)<r(c.duration,1e3)&&!c.buffered?e.trigger("buffer",s):c.buffered||(c.buffered=!0,e.trigger("buffer",s).trigger("buffered",s),clearInterval(m),m=0))},250),!e.live&&!c.duration&&!b.hlsDuration&&"loadeddata"===o){var h=function(){c.duration=n.duration
try{c.seekable=n.seekable&&n.seekable.end(null)}catch(e){}u(),n.removeEventListener("durationchange",h),f(t).remove("is-live")}
n.addEventListener("durationchange",h)
var g=function(){e.ready||n.duration||(c.duration=0,f(t).add("is-live"),u()),n.removeEventListener("timeupdate",g)}
return void n.addEventListener("timeupdate",g)}break
case"progress":case"seek":e.video.duration
if(n.currentTime>0||e.live)c=Math.max(n.currentTime,0)
else if("progress"==i)return
break
case"speed":c=r(n.playbackRate)
break
case"volume":c=r(n.volume)
break
case"error":try{c=(s.srcElement||s.originalTarget).error,c.video=d(a,{src:n.src,url:n.src})}catch(y){return}}u()}}
t.addEventListener(o,c,!0),s[o]||(s[o]=[]),s[o].push(c)}}),s}var o,m,g,y=p.findDirect("video",t)[0]||p.find(".fp-player > video",t)[0],b=c.support,w=(p.find("track",y)[0],e.conf)
return o={engineName:s.engineName,pick:function(e){var t=function(){if(b.video){if(w.videoTypePreference){var t=a(e,w.videoTypePreference)
if(t)return t}for(var n=0;n<e.length;n++)if(i(e[n].type))return e[n]}}()
if(t)return"string"==typeof t.src&&(t.src=p.createAbsoluteUrl(t.src)),t},load:function(r){var i=!1,a=p.find(".fp-player",t)[0],l=!1
w.splash&&!y?(y=h(r),p.prepend(a,y),i=!0):y?(f(y).add("fp-engine"),p.find("source,track",y).forEach(p.removeNode),e.conf.nativesubtitles||p.attr(y,"crossorigin",!1),l=y.src===r.src):(y=h(r,!!r.autoplay||!!w.autoplay,w.clip.preload||"metadata",!1),p.prepend(a,y),i=!0),b.inlineVideo||p.css(y,{position:"absolute",top:"-9999em"}),u.off(y,"timeupdate",p.noop),u.on(y,"timeupdate",p.noop),p.prop(y,"loop",!(!r.loop&&!w.loop)),void 0!==g&&(y.volume=g),(e.video.src&&r.src!=e.video.src||r.index)&&p.attr(y,"autoplay","autoplay"),y.src=r.src,y.type=r.type,o._listeners=n(y,p.find("source",y).concat(y),r),("none"!=w.clip.preload&&"mpegurl"!=r.type||!b.zeropreload||!b.dataload)&&y.load(),(i||l)&&y.load(),y.paused&&(r.autoplay||w.autoplay)&&y.play()},pause:function(){y.pause()},resume:function(){y.play()},speed:function(e){y.playbackRate=e},seek:function(t){try{var n=e.paused
y.currentTime=t,n&&y.pause()}catch(r){}},volume:function(e){g=e,y&&(y.volume=e)},unload:function(){p.find("video.fp-engine",t).forEach(p.removeNode),b.cachedVideoTag||(l=null),m=clearInterval(m)
var e=t.getAttribute("data-flowplayer-instance-id")
delete y.listeners[e],y=0,o._listeners&&Object.keys(o._listeners).forEach(function(e){o._listeners[e].forEach(function(n){t.removeEventListener(e,n,!0)})})}}},s.canPlay=function(e){return c.support.video&&i(e)},s.engineName="html5",c.engines.push(s)},{"../common":1,"../flowplayer":18,bean:20,"class-list":21,"extend-object":25}],5:[function(e,t,n){"use strict"
var r=e("../flowplayer"),o=e("./resolve").TYPE_RE,i=e("scriptjs"),a=e("bean")
r(function(e,t){var n,r=e.conf.analytics,l=0,s=0
if(r){"undefined"==typeof _gat&&i("//google-analytics.com/ga.js")
var c=function(){var e=_gat._getTracker(r)
return e._setAllowLinker(!0),e},u=function(r,i,a){if(a=a||e.video,l&&"undefined"!=typeof _gat){var s=c()
s._trackEvent("Video / Seconds played",e.engine.engineName+"/"+a.type,a.title||t.getAttribute("title")||a.src.split("/").slice(-1)[0].replace(o,""),Math.round(l/1e3)),l=0,n&&(clearTimeout(n),n=null)}}
e.bind("load unload",u).bind("progress",function(){e.seeking||(l+=s?+new Date-s:0,s=+new Date),n||(n=setTimeout(function(){n=null
var e=c()
e._trackEvent("Flowplayer heartbeat","Heartbeat","",0,!0)},6e5))}).bind("pause",function(){s=0}),e.bind("shutdown",function(){a.off(window,"unload",u)}),a.on(window,"unload",u)}})},{"../flowplayer":18,"./resolve":13,bean:20,scriptjs:28}],6:[function(e,t,n){"use strict"
var r=e("../flowplayer"),o=e("class-list"),i=e("../common"),a=e("bean")
r(function(e,t){function n(e){t.className=t.className.replace(l," "),e>=0&&o(t).add("cue"+e)}function r(t){var n=t&&!isNaN(t.time)?t.time:t
return 0>n&&(n=e.video.duration+n),.125*Math.round(n/.125)}var l=/ ?cue\d+ ?/,s=!1,c={},u=-.125,f=function(t){var r=e.cuepoints.indexOf(t)
isNaN(t)||(t={time:t}),t.index=r,n(r),e.trigger("cuepoint",[e,t])}
e.on("progress",function(e,t,n){if(!s)for(var o=r(n);o>u;)u+=.125,c[u]&&c[u].forEach(f)}).on("unload",n).on("beforeseek",function(e){setTimeout(function(){e.defaultPrevented||(s=!0)})}).on("seek",function(e,t,o){n(),u=r(o||0)-.125,s=!1,!o&&c[0]&&c[0].forEach(f)}).on("ready",function(t,n,r){u=-.125
var o=r.cuepoints||e.conf.cuepoints||[]
e.setCuepoints(o)}).on("finish",function(){u=-.125}),e.conf.generate_cuepoints&&e.bind("load",function(){i.find(".fp-cuepoint",t).forEach(i.removeNode)}),e.setCuepoints=function(t){return e.cuepoints=[],c={},t.forEach(e.addCuepoint),e},e.addCuepoint=function(n){e.cuepoints||(e.cuepoints=[])
var o=r(n)
if(c[o]||(c[o]=[]),c[o].push(n),e.cuepoints.push(n),e.conf.generate_cuepoints&&n.visible!==!1){var l=e.video.duration,s=i.find(".fp-timeline",t)[0]
i.css(s,"overflow","visible")
var u=n.time||n
0>u&&(u=l+u)
var f=i.createElement("a",{className:"fp-cuepoint fp-cuepoint"+(e.cuepoints.length-1)})
i.css(f,"left",u/l*100+"%"),s.appendChild(f),a.on(f,"mousedown",function(t){t.preventDefault(),t.stopPropagation(),e.seek(u)})}return e},e.removeCuepoint=function(t){var n=e.cuepoints.indexOf(t),o=r(t)
if(-1!==n){e.cuepoints=e.cuepoints.slice(0,n).concat(e.cuepoints.slice(n+1))
var i=c[o].indexOf(t)
if(-1!==i)return c[o]=c[o].slice(0,i).concat(c[o].slice(i+1)),e}}})},{"../common":1,"../flowplayer":18,bean:20,"class-list":21}],7:[function(e,t,n){"use strict"
var r=e("../flowplayer"),o=e("bean"),i=e("../common"),a=(e("is-object"),e("extend-object")),l=e("class-list")
r(function(e,t){if(e.conf.embed!==!1){var n=(e.conf,i.find(".fp-ui",t)[0]),r=i.createElement("a",{"class":"fp-embed",title:"Copy to your site"}),l=i.createElement("div",{"class":"fp-embed-code"},"<label>Paste this HTML code on your site to embed.</label><textarea></textarea>"),c=i.find("textarea",l)[0]
n.appendChild(r),n.appendChild(l),e.embedCode=function(){var n=e.conf.embed||{},r=e.video
if(n.iframe){var o=(e.conf.embed.iframe,n.width||r.width||i.width(t)),l=n.height||r.height||i.height(t)
return'<iframe src="'+e.conf.embed.iframe+'" allowfullscreen style="width:'+o+";height:"+l+';border:none;"></iframe>'}var s=["ratio","rtmp","live","bufferTime","origin","analytics","key","subscribe","swf","swfHls","embed","adaptiveRatio","logo"]
n.playlist&&s.push("playlist")
var c=i.pick(e.conf,s)
c.logo&&(c.logo=i.createElement("img",{src:c.logo}).src),n.playlist&&e.conf.playlist.length||(c.clip=a({},e.conf.clip,i.pick(e.video,["sources"])))
var u='var w=window,d=document,e;w._fpes||(w._fpes=[],w.addEventListener("load",function(){var s=d.createElement("script");s.src="//embed.flowplayer.org/6.0.5/embed.min.js",d.body.appendChild(s)})),e=[].slice.call(d.getElementsByTagName("script"),-1)[0].parentNode,w._fpes.push({e:e,l:"$library",c:$conf});\n'.replace("$conf",JSON.stringify(c)).replace("$library",n.library||"")
return'<a href="$href">Watch video!\n<script>$script</script></a>'.replace("$href",e.conf.origin||window.location.href).replace("$script",u)},s(t,".fp-embed","is-embedding"),o.on(t,"click",".fp-embed-code textarea",function(){c.select()}),o.on(t,"click",".fp-embed",function(){c.textContent=e.embedCode().replace(/(\r\n|\n|\r)/gm,""),c.focus(),c.select()})}})
var s=function(e,t,n){function r(){a.remove(n),o.off(document,".st")}var a=l(e)
o.on(e,"click",t||"a",function(e){e.preventDefault(),a.toggle(n),a.contains(n)&&(o.on(document,"keydown.st",function(e){27==e.which&&r()}),o.on(document,"click.st",function(e){i.hasParent(e.target,"."+n)||r()}))})}},{"../common":1,"../flowplayer":18,bean:20,"class-list":21,"extend-object":25,"is-object":27}],8:[function(e,t,n){"use strict"
t.exports=function(e,t){t||(t=document.createElement("div"))
var n={},r={},o=function(e,o,i){var a=e.split(".")[0],l=function(s){i&&(t.removeEventListener(a,l),n[e].splice(n[e].indexOf(l),1))
var c=[s].concat(r[s.timeStamp+s.type]||[])
o&&o.apply(void 0,c)}
t.addEventListener(a,l),n[e]||(n[e]=[]),n[e].push(l)}
e.on=e.bind=function(t,n){var r=t.split(" ")
return r.forEach(function(e){o(e,n)}),e},e.one=function(t,n){var r=t.split(" ")
return r.forEach(function(e){o(e,n,!0)}),e}
var i=function(e,t){return 0===t.filter(function(t){return-1===e.indexOf(t)}).length}
e.off=e.unbind=function(r){var o=r.split(" ")
return o.forEach(function(e){var r=e.split(".").slice(1),o=e.split(".")[0]
Object.keys(n).filter(function(e){var t=e.split(".").slice(1)
return(!o||0===e.indexOf(o))&&i(t,r)}).forEach(function(e){var r=n[e],o=e.split(".")[0]
r.forEach(function(e){t.removeEventListener(o,e),r.splice(r.indexOf(e),1)})})}),e},e.trigger=function(n,o,i){if(n){o=(o||[]).length?o||[]:[o]
var a,l=document.createEvent("Event")
return a=n.type||n,l.initEvent(a,!1,!0),Object.defineProperty&&(l.preventDefault=function(){Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}),r[l.timeStamp+l.type]=o,t.dispatchEvent(l),i?l:e}}},t.exports.EVENTS=["beforeseek","disable","error","finish","fullscreen","fullscreen-exit","load","mute","pause","progress","ready","resume","seek","speed","stop","unload","volume","boot","shutdown"]},{}],9:[function(e,t,n){"use strict"
var r,o=e("../flowplayer"),i=e("bean"),a=e("class-list"),l=(e("extend-object"),e("../common")),s=(o.support.browser.mozilla?"moz":"webkit","fullscreen"),c="fullscreen-exit",u=o.support.fullscreen,f=("function"==typeof document.exitFullscreen,navigator.userAgent.toLowerCase()),d=/(safari)[ \/]([\w.]+)/.exec(f)&&!/(chrome)[ \/]([\w.]+)/.exec(f)
i.on(document,"fullscreenchange.ffscr webkitfullscreenchange.ffscr mozfullscreenchange.ffscr MSFullscreenChange.ffscr",function(e){var t=document.webkitCurrentFullScreenElement||document.mozFullScreenElement||document.fullscreenElement||document.msFullscreenElement||e.target
if(r||t.parentNode&&t.parentNode.getAttribute("data-flowplayer-instance-id")){var n=r||o(t.parentNode)
t&&!r?r=n.trigger(s,[t]):(r.trigger(c,[r]),r=null)}}),o(function(e,t){var n=l.createElement("div",{className:"fp-player"})
if(Array.prototype.map.call(t.children,l.identity).forEach(function(e){l.matches(e,".fp-ratio,script")||n.appendChild(e)}),t.appendChild(n),e.conf.fullscreen){var o,i,f=window,p=a(t)
e.isFullscreen=!1,e.fullscreen=function(t){return e.disabled?void 0:(void 0===t&&(t=!e.isFullscreen),t&&(o=f.scrollY,i=f.scrollX),u?t?["requestFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].forEach(function(e){return"function"==typeof n[e]?(n[e](Element.ALLOW_KEYBOARD_INPUT),!d||document.webkitCurrentFullScreenElement||document.mozFullScreenElement||n[e](),!1):void 0}):["exitFullscreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].forEach(function(e){return"function"==typeof document[e]?(document[e](),!1):void 0}):e.trigger(t?s:c,[e]),e)}
var m
e.on("mousedown.fs",function(){+new Date-m<150&&e.ready&&e.fullscreen(),m=+new Date}),e.on(s,function(n){p.add("is-fullscreen"),u||l.css(t,"position","fixed"),e.isFullscreen=!0}).on(c,function(n){var r
u||"html5"!==e.engine||(r=t.css("opacity")||"",l.css(t,"opacity",0)),u||l.css(t,"position",""),p.remove("is-fullscreen"),u||"html5"!==e.engine||setTimeout(function(){t.css("opacity",r)}),e.isFullscreen=!1,f.scrollTo(i,o)}).on("unload",function(){e.isFullscreen&&e.fullscreen()}),e.on("shutdown",function(){r=null})}})},{"../common":1,"../flowplayer":18,bean:20,"class-list":21,"extend-object":25}],10:[function(e,t,n){"use strict"
var r,o,i=e("../flowplayer"),a=e("bean"),l="is-help",s=e("../common"),c=e("class-list")
a.on(document,"keydown.fp",function(e){var t=r,n=e.ctrlKey||e.metaKey||e.altKey,i=e.which,a=t&&t.conf,s=o&&c(o)
if(t&&a.keyboard&&!t.disabled){if(-1!=[63,187,191].indexOf(i))return s.toggle(l),!1
if(27==i&&s.contains(l))return s.toggle(l),!1
if(!n&&t.ready){if(e.preventDefault(),e.shiftKey)return void(39==i?t.speed(!0):37==i&&t.speed(!1))
if(58>i&&i>47)return t.seekTo(i-48)
switch(i){case 38:case 75:t.volume(t.volumeLevel+.15)
break
case 40:case 74:t.volume(t.volumeLevel-.15)
break
case 39:case 76:t.seeking=!0,t.seek(!0)
break
case 37:case 72:t.seeking=!0,t.seek(!1)
break
case 190:t.seekTo()
break
case 32:t.toggle()
break
case 70:a.fullscreen&&t.fullscreen()
break
case 77:t.mute()
break
case 81:t.unload()}}}}),i(function(e,t){if(e.conf.keyboard){a.on(t,"mouseenter mouseleave",function(n){r=e.disabled||"mouseover"!=n.type?0:e,r&&(o=t)})
var n=i.support.video&&"flash"!==e.conf.engine&&document.createElement("video").playbackRate?"<p><em>shift</em> + <em>&#8592;</em><em>&#8594;</em>slower / faster</p>":""
if(t.appendChild(s.createElement("div",{className:"fp-help"},'         <a class="fp-close"></a>         <div class="fp-help-section fp-help-basics">            <p><em>space</em>play / pause</p>            <p><em>q</em>unload | stop</p>            <p><em>f</em>fullscreen</p>'+n+'         </div>         <div class="fp-help-section">            <p><em>&#8593;</em><em>&#8595;</em>volume</p>            <p><em>m</em>mute</p>         </div>         <div class="fp-help-section">            <p><em>&#8592;</em><em>&#8594;</em>seek</p>            <p><em>&nbsp;. </em>seek to previous            </p><p><em>1</em><em>2</em>&hellip; <em>6</em> seek to 10%, 20% &hellip; 60% </p>         </div>   ')),e.conf.tooltip){var u=s.find(".fp-ui",t)[0]
u.setAttribute("title","Hit ? for help"),a.one(t,"mouseout.tip",".fp-ui",function(){u.removeAttribute("title")})}a.on(t,"click",".fp-close",function(){c(t).toggle(l)}),e.bind("shutdown",function(){o==t&&(o=null)})}})},{"../common":1,"../flowplayer":18,bean:20,"class-list":21}],11:[function(e,t,n){"use strict"
var r=e("../flowplayer"),o=/IEMobile/.test(window.navigator.userAgent),i=e("class-list"),a=e("../common"),l=e("bean"),s=e("./ui").format,c=window.navigator.userAgent;(r.support.touch||o)&&r(function(e,t){var n=/Android/.test(c)&&!/Firefox/.test(c)&&!/Opera/.test(c),u=/Silk/.test(c),f=n?parseFloat(/Android\ (\d\.\d)/.exec(c)[1],10):0,d=i(t)
if(n&&!o){if(!/Chrome/.test(c)&&4>f){var p=e.load
e.load=function(t,n){var r=p.apply(e,arguments)
return e.trigger("ready",[e,e.video]),r}}var m,v=0,h=function(e){m=setInterval(function(){e.video.time=++v,e.trigger("progress",[e,v])},1e3)}
e.bind("ready pause unload",function(){m&&(clearInterval(m),m=null)}),e.bind("ready",function(){v=0}),e.bind("resume",function(t,n){return n.live?v?h(n):void e.one("progress",function(e,t,n){0===n&&h(t)}):void 0})}r.support.volume||(d.add("no-volume"),d.add("no-mute")),d.add("is-touch"),e.sliders&&e.sliders.timeline&&e.sliders.timeline.disableAnimation(),(!r.support.inlineVideo||e.conf.native_fullscreen)&&(e.conf.nativesubtitles=!0)
var g=!1
l.on(t,"touchmove",function(){g=!0}),l.on(t,"touchend click",function(t){return g?void(g=!1):e.playing&&!d.contains("is-mouseover")?(d.add("is-mouseover"),d.remove("is-mouseout"),t.preventDefault(),void t.stopPropagation()):void(e.playing||e.splash||!d.contains("is-mouseout")||d.contains("is-mouseover")||setTimeout(function(){e.playing||e.splash||e.resume()},400))}),e.conf.native_fullscreen&&"function"==typeof document.createElement("video").webkitEnterFullScreen&&(e.fullscreen=function(){var e=a.find("video.fp-engine",t)[0]
e.webkitEnterFullScreen(),l.one(e,"webkitendfullscreen",function(){a.prop(e,"controls",!0),a.prop(e,"controls",!1)})}),(n||u)&&e.bind("ready",function(){var n=a.find("video.fp-engine",t)[0]
l.one(n,"canplay",function(){n.play()}),n.play(),e.bind("progress.dur",function(){var r=n.duration
1!==r&&(e.video.duration=r,a.find(".fp-duration",t)[0].innerHTML=s(r),e.unbind("progress.dur"))})})})},{"../common":1,"../flowplayer":18,"./ui":17,bean:20,"class-list":21}],12:[function(e,t,n){"use strict"
var r=e("../flowplayer"),o=e("extend-object"),i=e("bean"),a=e("class-list"),l=e("../common"),s=e("./resolve"),c=new s,u=window.jQuery,f=/^#/
r(function(e,t){function n(){return l.find(v.query,r())}function r(){return f.test(v.query)?void 0:t}function d(){return l.find(v.query+"."+h,r())}function p(){var n=l.find(".fp-playlist",t)[0]
if(!n){n=l.createElement("div",{className:"fp-playlist"})
var r=l.find(".fp-next,.fp-prev",t)
r.length?r[0].parentElement.insertBefore(n,r[0]):l.insertAfter(t,l.find("video",t)[0],n)}n.innerHTML="",e.conf.playlist[0].length&&(e.conf.playlist=e.conf.playlist.map(function(e){if("string"==typeof e){var t=e.split(s.TYPE_RE)[1]
return{sources:[{type:"m3u8"===t.toLowerCase()?"application/x-mpegurl":"video/"+t,src:e}]}}return{sources:e.map(function(e){var t={}
return Object.keys(e).forEach(function(n){t.type=/mpegurl/i.test(n)?"application/x-mpegurl":"video/"+n,t.src=e[n]}),t})}})),e.conf.playlist.forEach(function(e,t){var r=e.sources[0].src
n.appendChild(l.createElement("a",{href:r,"data-index":t}))})}function m(t){return void 0!==t.index?t.index:void 0!==e.video.index?e.video.index:e.conf.startIndex||0}var v=o({active:"is-active",advance:!0,query:".fp-playlist a"},e.conf),h=v.active,g=a(t)
e.play=function(t){if(void 0===t)return e.resume()
if("number"==typeof t&&!e.conf.playlist[t])return e
if("number"!=typeof t)return e.load.apply(null,arguments)
var n=o({index:t},e.conf.playlist[t])
return t===e.video.index?e.load(n,function(){e.resume()}):(e.off("resume.fromfirst"),e.load(n,function(){e.video.index=t}),e)},e.next=function(t){t&&t.preventDefault()
var n=e.video.index
return-1!=n&&(n=n===e.conf.playlist.length-1?0:n+1,e.play(n)),e},e.prev=function(t){t&&t.preventDefault()
var n=e.video.index
return-1!=n&&(n=0===n?e.conf.playlist.length-1:n-1,e.play(n)),e},e.setPlaylist=function(t){return e.conf.playlist=t,delete e.video.index,p(),e},e.addPlaylistItem=function(t){return e.setPlaylist(e.conf.playlist.concat([t]))},e.removePlaylistItem=function(t){var n=e.conf.playlist
return e.setPlaylist(n.slice(0,t).concat(n.slice(t+1)))},i.on(t,"click",".fp-next",e.next),i.on(t,"click",".fp-prev",e.prev),v.advance&&e.off("finish.pl").on("finish.pl",function(e,t){if(t.video.loop)return t.seek(0,function(){t.resume()})
var n=t.video.index>=0?t.video.index+1:void 0
n<t.conf.playlist.length||v.loop?(n=n===t.conf.playlist.length?0:n,g.remove("is-finished"),setTimeout(function(){t.play(n)})):t.conf.playlist.length>1&&t.one("resume.fromfirst",function(){return t.play(0),!1})})
var y=!1
e.conf.playlist.length&&(y=!0,p(),e.conf.clip&&e.conf.clip.sources.length||(e.conf.clip=e.conf.playlist[e.conf.startIndex||0])),n().length&&!y&&(e.conf.playlist=[],delete e.conf.startIndex,n().forEach(function(t){var n=t.href
t.setAttribute("data-index",e.conf.playlist.length)
var r=c.resolve(n,e.conf.clip.sources)
u&&o(r,u(t).data()),e.conf.playlist.push(r)})),i.on(f.test(v.query)?document:t,"click",v.query,function(t){t.preventDefault()
var n=t.currentTarget,r=+n.getAttribute("data-index");-1!=r&&e.play(r)}),e.on("load",function(n,o,i){if(e.conf.playlist.length){var s=d()[0],c=s&&s.getAttribute("data-index"),u=i.index=m(i),f=l.find(v.query+'[data-index="'+u+'"]',r())[0],p=u==e.conf.playlist.length-1
s&&a(s).remove(h),f&&a(f).add(h),g.remove("video"+c),g.add("video"+u),l.toggleClass(t,"last-video",p),i.index=o.video.index=u,i.is_last=o.video.is_last=p}}).on("unload.pl",function(){e.conf.playlist.length&&(d().forEach(function(e){a(e).toggle(h)}),e.conf.playlist.forEach(function(e,t){g.remove("video"+t)}))}),e.conf.playlist.length&&(e.conf.loop=!1)})},{"../common":1,"../flowplayer":18,"./resolve":13,bean:20,"class-list":21,"extend-object":25}],13:[function(e,t,n){"use strict"
function r(e){var t=e.attr("src"),n=e.attr("type")||"",r=t.split(i)[1]
return n=n.toLowerCase(),a(e.data(),{src:t,suffix:r||n,type:n||r})}function o(e){return/mpegurl/i.test(e)?"application/x-mpegurl":"video/"+e}var i=/\.(\w{3,4})(\?.*)?$/i,a=e("extend-object")
t.exports=function(){var e=this
e.sourcesFromVideoTag=function(e,t){var n=[]
return t("source",e).each(function(){n.push(r(t(this)))}),!n.length&&e.length&&n.push(r(e)),n},e.resolve=function(e,t){return e?("string"==typeof e&&(e={src:e,sources:[]},e.sources=(t||[]).map(function(t){var n=t.src.split(i)[1]
return{type:t.type,src:e.src.replace(i,"."+n+"$2")}})),e instanceof Array&&(e={sources:e.map(function(e){return e.type&&e.src?e:Object.keys(e).reduce(function(t,n){return a(t,{type:o(n),src:e[n]})},{})})}),e):{sources:t}}},t.exports.TYPE_RE=i},{"extend-object":25}],14:[function(e,t,n){"use strict"
var r=e("class-list"),o=e("bean"),i=e("../common"),a=function(e,t){var n
return function(){n||(e.apply(this,arguments),n=1,setTimeout(function(){n=0},t))}},l=function(e,t){var n,l,s,c,u,f,d,p,m=(/iPad/.test(navigator.userAgent)&&!/CriOS/.test(navigator.userAgent),i.lastChild(e)),v=r(e),h=r(m),g=!1,y=function(){l=i.offset(e),s=i.width(e),c=i.height(e),f=u?c:s,p=E(d)},b=function(t){n||t==k.value||d&&!(d>t)||(o.fire(e,"slide",[t]),k.value=t)},w=function(e){var n=e.pageX||e.clientX
!n&&e.originalEvent&&e.originalEvent.touches&&e.originalEvent.touches.length&&(n=e.originalEvent.touches[0].pageX)
var r=u?e.pageY-l.top:n-l.left
r=Math.max(0,Math.min(p||f,r))
var o=r/f
return u&&(o=1-o),t&&(o=1-o),x(o,0,!0)},x=function(e,t){void 0===t&&(t=0),e>1&&(e=1)
var n=Math.round(1e3*e)/10+"%"
return(!d||d>=e)&&(h.remove("animated"),g?h.remove("animated"):(h.add("animated"),i.css(m,"transition-duration",(t||0)+"ms")),i.css(m,"width",n)),e},E=function(e){return Math.max(0,Math.min(f,u?(1-e)*c:e*s))},k={max:function(e){d=e},disable:function(e){n=e},slide:function(e,t,n){y(),n&&b(e),x(e,t)},disableAnimation:function(t,n){g=t!==!1,i.toggleClass(e,"no-animation",!!n)}}
return y(),o.on(e,"mousedown.sld touchstart",function(e){if(e.preventDefault(),!n){var t=a(b,100)
y(),k.dragging=!0,v.add("is-dragging"),b(w(e)),o.on(document,"mousemove.sld touchmove.sld",function(e){e.preventDefault(),t(w(e))}),o.one(document,"mouseup touchend",function(){k.dragging=!1,v.remove("is-dragging"),o.off(document,"mousemove.sld touchmove.sld")})}}),k}
t.exports=l},{"../common":1,bean:20,"class-list":21}],15:[function(e,t,n){"use strict"
var r=e("../flowplayer"),o=e("../common"),i=e("bean"),a=e("class-list")
r.defaults.subtitleParser=function(e){function t(e){var t=e.split(":")
return 2==t.length&&t.unshift(0),60*t[0]*60+60*t[1]+parseFloat(t[2].replace(",","."))}for(var n,r,o,i=/^(([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3}) --\> (([0-9]{2}:){1,2}[0-9]{2}[,.][0-9]{3})(.*)/,a=[],l=0,s=e.split("\n"),c=s.length,u={};c>l;l++)if(r=i.exec(s[l])){for(n=s[l-1],o="<p>"+s[++l]+"</p><br/>";"string"==typeof s[++l]&&s[l].trim()&&l<s.length;)o+="<p>"+s[l]+"</p><br/>"
u={title:n,startTime:t(r[1]),endTime:t(r[3]),text:o},a.push(u)}return a},r(function(e,t){var n,l,s,c,u=a(t),f=function(){c=o.createElement("a",{className:"fp-menu"})
var n=o.createElement("ul",{className:"fp-dropdown fp-dropup"})
return n.appendChild(o.createElement("li",{"data-subtitle-index":-1},"No subtitles")),(e.video.subtitles||[]).forEach(function(e,t){var r=e.srclang||"en",i=e.label||"Default ("+r+")",a=o.createElement("li",{"data-subtitle-index":t},i)
n.appendChild(a)}),c.appendChild(n),o.find(".fp-controls",t)[0].appendChild(c),c}
i.on(t,"click",".fp-menu",function(e){a(c).toggle("dropdown-open")}),i.on(t,"click",".fp-menu li[data-subtitle-index]",function(t){var n=t.target.getAttribute("data-subtitle-index")
return"-1"===n?e.disableSubtitles():void e.loadSubtitles(n)})
var d=function(){var e=o.find(".fp-player",t)[0]
s=o.find(".fp-subtitle",t)[0],s=s||o.appendTo(o.createElement("div",{"class":"fp-subtitle"}),e),Array.prototype.forEach.call(s.children,o.removeNode),n=a(s),o.find(".fp-menu",t).forEach(o.removeNode),f()}
e.on("ready",function(n,i,a){var l=i.conf
if(r.support.subtitles&&l.nativesubtitles&&"html5"==i.engine.engineName){var s=function(e){var n=o.find("video",t)[0].textTracks
n.length&&(n[0].mode=e)}
if(!a.subtitles||!a.subtitles.length)return
var c=o.find("video.fp-engine",t)[0]
return a.subtitles.some(function(e){return!o.isSameDomain(e.src)})&&o.attr(c,"crossorigin","anonymous"),c.textTracks.addEventListener("addtrack",function(){s("disabled"),s("showing")}),void a.subtitles.forEach(function(e){c.appendChild(o.createElement("track",{kind:"subtitles",srclang:e.srclang||"en",label:e.label||"en",src:e.src,"default":e["default"]}))})}if(i.subtitles=[],d(),u.remove("has-menu"),e.disableSubtitles(),a.subtitles&&a.subtitles.length){u.add("has-menu")
var f=a.subtitles.filter(function(e){return e["default"]})[0]
f&&i.loadSubtitles(a.subtitles.indexOf(f))}}),e.bind("cuepoint",function(e,t,r){r.subtitle?(l=r.index,o.html(s,r.subtitle.text),n.add("fp-active")):r.subtitleEnd&&(n.remove("fp-active"),l=r.index)}),e.bind("seek",function(t,r,o){l&&e.cuepoints[l]&&e.cuepoints[l].time>o&&(n.remove("fp-active"),l=null),(e.cuepoints||[]).forEach(function(t){var n=t.subtitle
n&&l!=t.index?o>=t.time&&(!n.endTime||o<=n.endTime)&&e.trigger("cuepoint",[e,t]):t.subtitleEnd&&o>=t.time&&t.index==l+1&&e.trigger("cuepoint",[e,t])})})
var p=function(e){o.toggleClass(o.find("li.active",t)[0],"active"),o.toggleClass(o.find('li[data-subtitle-index="'+e+'"]',t)[0],"active")}
e.disableSubtitles=function(){return e.subtitles=[],(e.cuepoints||[]).forEach(function(t){(t.subtitle||t.subtitleEnd)&&e.removeCuepoint(t)}),s&&Array.prototype.forEach.call(s.children,o.removeNode),p(-1),e},e.loadSubtitles=function(t){e.disableSubtitles()
var n=e.video.subtitles[t],r=n.src
return r?(p(t),o.xhrGet(r,function(t){var n=e.conf.subtitleParser(t)
n.forEach(function(t){var n={time:t.startTime,subtitle:t,visible:!1}
e.subtitles.push(t),e.addCuepoint(n),e.addCuepoint({time:t.endTime,subtitleEnd:t.title,visible:!1}),0!==t.startTime||e.video.time||e.trigger("cuepoint",[e,n])})},function(){return e.trigger("error",{code:8,url:r}),!1}),e):void 0}})},{"../common":1,"../flowplayer":18,bean:20,"class-list":21}],16:[function(e,t,n){"use strict"
var r=e("../flowplayer"),o=e("extend-object")
!function(){var e=function(e){var t=/Version\/(\d\.\d)/.exec(e)
return t&&t.length>1?parseFloat(t[1],10):0},t=function(){var e=document.createElement("video")
return e.loop=!0,e.autoplay=!0,e.preload=!0,e},n={},i=navigator.userAgent.toLowerCase(),a=/(chrome)[ \/]([\w.]+)/.exec(i)||/(safari)[ \/]([\w.]+)/.exec(i)||/(webkit)[ \/]([\w.]+)/.exec(i)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(i)||/(msie) ([\w.]+)/.exec(i)||i.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(i)||[]
a[1]&&(n[a[1]]=!0,n.version=a[2]||"0")
var l=t(),s=navigator.userAgent,c=n.msie||/Trident\/7/.test(s),u=/iPad|MeeGo/.test(s)&&!/CriOS/.test(s),f=/iPad/.test(s)&&/CriOS/.test(s),d=/iP(hone|od)/i.test(s)&&!/iPad/.test(s)&&!/IEMobile/i.test(s),p=/Android/.test(s)&&!/Firefox/.test(s),m=/Android/.test(s)&&/Firefox/.test(s),v=/Silk/.test(s),h=/IEMobile/.test(s),g=h?parseFloat(/Windows\ Phone\ (\d+\.\d+)/.exec(s)[1],10):0,y=h?parseFloat(/IEMobile\/(\d+\.\d+)/.exec(s)[1],10):0,b=(u?e(s):0,p?parseFloat(/Android\ (\d\.\d)/.exec(s)[1],10):0),w=o(r.support,{browser:n,subtitles:!!l.addTextTrack,fullscreen:"function"==typeof document.webkitCancelFullScreen&&!/Mac OS X 10_5.+Version\/5\.0\.\d Safari/.test(s)||document.mozFullScreenEnabled||"function"==typeof document.exitFullscreen||"function"==typeof document.msExitFullscreen,inlineBlock:!(c&&n.version<8),touch:"ontouchstart"in window,dataload:!u&&!d&&!h,zeropreload:!c&&!p,volume:!(u||p||d||v||f),cachedVideoTag:!(u||d||f||h),firstframe:!(d||u||p||v||f||h||m),inlineVideo:!d&&(!h||g>=8.1&&y>=11)&&(!p||b>=3),hlsDuration:!p&&(!n.safari||u||d||f),seekable:!u&&!f})
try{var x=navigator.plugins["Shockwave Flash"],E=c?new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version"):x.description
c||x[0].enabledPlugin?(E=E.split(/\D+/),E.length&&!E[0]&&(E=E.slice(1)),w.flashVideo=E[0]>9||9==E[0]&&E[3]>=115):w.flashVideo=!1}catch(k){}try{w.video=!!l.canPlayType,w.video&&l.canPlayType("video/mp4")}catch(T){w.video=!1}w.animation=function(){for(var e=["","Webkit","Moz","O","ms","Khtml"],t=document.createElement("p"),n=0;n<e.length;n++)if(void 0!==t.style[e[n]+"AnimationName"])return!0}()}()},{"../flowplayer":18,"extend-object":25}],17:[function(e,t,n){"use strict"
function r(e){return e=parseInt(e,10),e>=10?e:"0"+e}function o(e){e=e||0
var t=Math.floor(e/3600),n=Math.floor(e/60)
return e-=60*n,t>=1?(n-=60*t,t+":"+r(n)+":"+r(e)):r(n)+":"+r(e)}var i=e("../flowplayer"),a=e("../common"),l=e("class-list"),s=e("bean"),c=e("./slider")
i(function(e,t){function n(e){return a.find(".fp-"+e,t)[0]}function r(e){a.css(w,"padding-top",100*e+"%"),p.inlineBlock||a.height(a.find("object",t)[0],a.height(t))}function u(e){e?(m.add("is-mouseover"),m.remove("is-mouseout")):(m.add("is-mouseout"),m.remove("is-mouseover"))}var f,d=e.conf,p=i.support,m=l(t)
a.find(".fp-ratio,.fp-ui",t).forEach(a.removeNode),m.add("flowplayer"),t.appendChild(a.createElement("div",{className:"fp-ratio"}))
var v=a.createElement("div",{className:"fp-ui"},'         <div class="waiting"><em></em><em></em><em></em></div>         <a class="fullscreen"></a>         <a class="unload"></a>         <p class="speed"></p>         <div class="controls">            <a class="play"></a>            <div class="timeline">               <div class="buffer"></div>               <div class="progress"></div>            </div>            <div class="timeline-tooltip fp-tooltip"></div>            <div class="volume">               <a class="mute"></a>               <div class="volumeslider">                  <div class="volumelevel"></div>               </div>            </div>         </div>         <div class="time">            <em class="elapsed">00:00</em>            <em class="remaining"></em>            <em class="duration">00:00</em>         </div>         <div class="message"><h2></h2><p></p></div>'.replace(/class="/g,'class="fp-'))
t.appendChild(v)
var h=(n("progress"),n("buffer")),g=n("elapsed"),y=n("remaining"),b=n("waiting"),w=n("ratio"),x=n("speed"),E=l(x),k=n("duration"),T=n("controls"),S=n("timeline-tooltip"),C=a.css(w,"padding-top"),j=n("timeline"),O=c(j,e.rtl),N=(n("volume"),n("fullscreen")),P=n("volumeslider"),A=c(P,e.rtl),_=m.contains("fixed-controls")||m.contains("no-toggle")
O.disableAnimation(m.contains("is-touch")),e.sliders=e.sliders||{},e.sliders.timeline=O,e.sliders.volume=A,p.animation||a.html(b,"<p>loading &hellip;</p>"),d.ratio&&r(d.ratio)
try{d.fullscreen||a.removeNode(N)}catch(D){a.removeNode(N)}e.on("ready",function(e,n,i){var l=n.video.duration
O.disable(n.disabled||!l),d.adaptiveRatio&&!isNaN(i.height/i.width)&&r(i.height/i.width,!0),a.html([k,y],o(l)),a.toggleClass(t,"is-long",l>=3600),A.slide(n.volumeLevel),"flash"===n.engine.engineName?O.disableAnimation(!0,!0):O.disableAnimation(!1),a.find(".fp-title",v).forEach(a.removeNode),i.title&&a.prepend(v,a.createElement("div",{className:"fp-title"},i.title))}).on("unload",function(){C||d.splash||a.css(w,"paddingTop",""),O.slide(0)}).on("buffer",function(){var t=e.video,n=t.buffer/t.duration
!t.seekable&&p.seekable&&O.max(n),1>n?a.css(h,"width",100*n+"%"):a.css(h,"width","100%")}).on("speed",function(e,t,n){a.text(x,n+"x"),E.add("fp-hilite"),setTimeout(function(){E.remove("fp-hilite")},1e3)}).on("buffered",function(){a.css(h,"width","100%"),O.max(1)}).on("progress",function(){var t=e.video.time,n=e.video.duration
O.dragging||O.slide(t/n,e.seeking?0:250),a.html(g,o(t)),a.html(y,"-"+o(n-t))}).on("finish resume seek",function(e){a.toggleClass(t,"is-finished","finish"==e.type)}).on("stop",function(){a.html(g,o(0)),O.slide(0,100)}).on("finish",function(){a.html(g,o(e.video.duration)),O.slide(1,100),m.remove("is-seeking")}).on("beforeseek",function(){}).on("volume",function(){A.slide(e.volumeLevel)}).on("disable",function(){var n=e.disabled
O.disable(n),A.disable(n),a.toggleClass(t,"is-disabled",e.disabled)}).on("mute",function(e,n,r){a.toggleClass(t,"is-muted",r)}).on("error",function(e,n,r){if(a.removeClass(t,"is-loading"),a.removeClass(t,"is-seeking"),a.addClass(t,"is-error"),r){r.message=d.errors[r.code],n.error=!0
var o=a.find(".fp-message",t)[0]
r.video||n.video
a.find("h2",o)[0].innerHTML=r.message,n.off("mouseenter click"),m.remove("is-mouseover")}}),s.on(t,"mouseenter mouseleave",function(n){if(!_){var r,o="mouseover"==n.type
if(u(o),o){var i=function(){u(!0),r=new Date}
e.on("pause.x volume.x",i),s.on(t,"mousemove.x",i),f=setInterval(function(){new Date-r>d.mouseoutTimeout&&(u(!1),r=new Date)},100)}else s.off(t,"mousemove.x"),e.off("pause.x volume.x"),clearInterval(f)}}),s.on(t,"mouseleave",function(){(O.dragging||A.dragging)&&(m.add("is-mouseover"),m.remove("is-mouseout"))}),s.on(t,"click.player",function(t){if(!e.disabled){var n=l(t.target)
return n.contains("fp-ui")||n.contains("fp-engine")||t.flash?(t.preventDefault&&t.preventDefault(),e.toggle()):void 0}}),s.on(t,"mousemove",".fp-timeline",function(t){var n=t.pageX||t.clientX,r=n-a.offset(j).left,i=r/a.width(j),l=i*e.video.duration
0>i||(a.html(S,o(l)),a.css(S,"left",n-a.offset(T).left-a.width(S)/2+"px"))}),s.on(t,"contextmenu",function(e){var n=a.offset(a.find(".fp-player",t)[0]),r=window,o=e.clientX-(n.left+r.scrollX),i=e.clientY-(n.top+r.scrollY)
if(!m.contains("is-flash-disabled")){var l=a.find(".fp-context-menu",t)[0]
l&&(e.preventDefault(),a.css(l,{left:o+"px",top:i+"px",display:"block"}),s.on(t,"click",".fp-context-menu",function(e){e.stopPropagation()}),s.on(document,"click.outsidemenu",function(e){a.css(l,"display","none"),s.off(document,"click.outsidemenu")}))}}),e.on("flashdisabled",function(){m.add("is-flash-disabled"),e.one("ready progress",function(){m.remove("is-flash-disabled"),a.find(".fp-flash-disabled",t).forEach(a.removeNode)}),t.appendChild(a.createElement("div",{className:"fp-flash-disabled"},"Adobe Flash is disabled for this page, click player area to enable"))}),d.poster&&a.css(t,"background-image","url("+d.poster+")")
var M=a.css(t,"background-color"),I="none"!=a.css(t,"background-image")||M&&"rgba(0, 0, 0, 0)"!=M&&"transparent"!=M
I&&!d.splash&&(d.poster||(d.poster=!0),e.on("ready stop",function(){m.add("is-poster"),e.poster=!0,e.one("progress",function(){m.remove("is-poster"),e.poster=!1})})),"string"==typeof d.splash&&a.css(t,"background-image","url('"+d.splash+"')"),!I&&e.forcedSplash&&a.css(t,"background-color","#555"),s.on(t,"click",".fp-toggle, .fp-play",function(){e.disabled||e.toggle()}),s.on(t,"click",".fp-mute",function(){e.mute()}),s.on(t,"click",".fp-fullscreen",function(){e.fullscreen()}),s.on(t,"click",".fp-unload",function(){e.unload()}),s.on(j,"slide",function(t){e.seeking=!0,e.seek(t*e.video.duration)}),s.on(P,"slide",function(t){e.volume(t)})
var L=n("time")
s.on(t,"click",".fp-time",function(){l(L).toggle("is-inverted")}),u(_),e.on("shutdown",function(){s.off(j),s.off(P)})}),t.exports.format=o},{"../common":1,"../flowplayer":18,"./slider":14,bean:20,"class-list":21}],18:[function(e,t,n){"use strict"
function r(e,t,n){t&&t.embed&&(t.embed=o({},y.defaults.embed,t.embed))
var r,d,m=e,v=a(m),h=o({},y.defaults,y.conf,t),g={},x=new w
v.add("is-loading")
try{g=p?window.localStorage:g}catch(E){}var k=m.currentStyle&&"rtl"===m.currentStyle.direction||window.getComputedStyle&&null!==window.getComputedStyle(m,null)&&"rtl"===window.getComputedStyle(m,null).getPropertyValue("direction")
k&&v.add("is-rtl")
var T={conf:h,currentSpeed:1,volumeLevel:h.muted?0:void 0===h.volume?1*g.volume:h.volume,video:{},disabled:!1,finished:!1,loading:!1,muted:"true"==g.muted||h.muted,paused:!1,playing:!1,ready:!1,splash:!1,rtl:k,load:function(e,t){if(!T.error&&!T.loading){T.video={},T.finished=!1,e=e||h.clip,e=o({},x.resolve(e,h.clip.sources)),(T.playing||T.engine)&&(e.autoplay=!0)
var n=S(e)
if(!n)return T.trigger("error",[T,{code:y.support.flashVideo?5:10}])
if(!n.engineName)throw Error("engineName property of factory should be exposed")
if(T.engine&&n.engineName===T.engine.engineName||(T.ready=!1,T.engine&&(T.engine.unload(),T.conf.autoplay=!0),d=T.engine=n(T,m),T.one("ready",function(){d.volume(T.volumeLevel)})),o(e,d.pick(e.sources.filter(function(e){return e.engine?e.engine===d.engineName:!0}))),e.src){var r=T.trigger("load",[T,e,d],!0)
r.defaultPrevented?T.loading=!1:(d.load(e),i(e)&&(t=e),t&&T.one("ready",t))}return T}},pause:function(e){return!T.ready||T.seeking||T.loading||(d.pause(),T.one("pause",e)),T},resume:function(){return T.ready&&T.paused&&(d.resume(),T.finished&&(T.trigger("resume",[T]),T.finished=!1)),T},toggle:function(){return T.ready?T.paused?T.resume():T.pause():T.load()},seek:function(e,t){if(T.ready&&!T.live){if("boolean"==typeof e){var n=.1*T.video.duration
e=T.video.time+(e?n:-n)}e=r=Math.min(Math.max(e,0),T.video.duration-.1).toFixed(1)
var o=T.trigger("beforeseek",[T,e],!0)
o.defaultPrevented?(T.seeking=!1,s.toggleClass(m,"is-seeking",T.seeking)):(d.seek(e),i(t)&&T.one("seek",t))}return T},seekTo:function(e,t){var n=void 0===e?r:.1*T.video.duration*e
return T.seek(n,t)},mute:function(e,t){return void 0===e&&(e=!T.muted),t||(g.muted=T.muted=e,g.volume=isNaN(g.volume)?h.volume:g.volume),T.volume(e?0:g.volume,!0),T.trigger("mute",[T,e]),T},volume:function(e,t){return T.ready&&(e=Math.min(Math.max(e,0),1),t||(g.volume=e),d.volume(e)),T},speed:function(e,t){return T.ready&&("boolean"==typeof e&&(e=h.speeds[h.speeds.indexOf(T.currentSpeed)+(e?1:-1)]||T.currentSpeed),d.speed(e),t&&m.one("speed",t)),T},stop:function(){return T.ready&&(T.pause(),T.seek(0,function(){T.trigger("stop",[T])})),T},unload:function(){return v.contains("is-embedding")||(h.splash?(T.trigger("unload",[T]),d&&(d.unload(),T.engine=d=0)):T.stop()),T},shutdown:function(){T.unload(),T.trigger("shutdown",[T]),l.off(m),delete u[m.getAttribute("data-flowplayer-instance-id")],m.removeAttribute("data-flowplayer-instance-id")},disable:function(e){return void 0===e&&(e=!T.disabled),e!=T.disabled&&(T.disabled=e,T.trigger("disable",e)),T}}
T.conf=o(T.conf,h),c(T)
var S=function(e){var t,n=y.engines
if(h.engine){var r=n.filter(function(e){return e.engineName===h.engine})[0]
if(r&&e.sources.some(function(e){return e.engine&&e.engine!==r.engineName?!1:r.canPlay(e.type,T.conf)}))return r}return h.enginePreference&&(n=y.engines.filter(function(e){return h.enginePreference.indexOf(e.engineName)>-1}).sort(function(e,t){return h.enginePreference.indexOf(e.engineName)-h.enginePreference.indexOf(t.engineName)})),e.sources.some(function(e){var r=n.filter(function(t){return e.engine&&e.engine!==t.engineName?!1:t.canPlay(e.type,T.conf)}).shift()
return r&&(t=r),!!r}),t}
return m.getAttribute("data-flowplayer-instance-id")||(m.setAttribute("data-flowplayer-instance-id",b++),T.on("boot",function(){(h.splash||v.contains("is-splash")||!y.support.firstframe)&&(T.forcedSplash=!h.splash&&!v.contains("is-splash"),T.splash=h.autoplay=!0,h.splash||(h.splash=!0),v.add("is-splash")),h.splash&&s.find("video",m).forEach(s.removeNode),(h.live||v.contains("is-live"))&&(T.live=h.live=!0,v.add("is-live")),f.forEach(function(e){e(T,m)}),u.push(T),h.splash?T.unload():T.load(),h.disabled&&T.disable(),T.one("ready",n)}).on("load",function(e,t,n){h.splash&&s.find(".flowplayer.is-ready,.flowplayer.is-loading").forEach(function(e){var t=e.getAttribute("data-flowplayer-instance-id")
if(t!==m.getAttribute("data-flowplayer-instance-id")){var n=u[+t]
n&&n.conf.splash&&n.unload()}}),v.add("is-loading"),t.loading=!0,void 0!==n.live&&(s.toggleClass(m,"is-live",n.live),t.live=n.live)}).on("ready",function(e,t,n){n.time=0,t.video=n,v.remove("is-loading"),t.loading=!1,t.muted?t.mute(!0,!0):t.volume(t.volumeLevel)
var r=t.conf.hlsFix&&/mpegurl/i.exec(n.type)
s.toggleClass(m,"hls-fix",!!r)}).on("unload",function(e){v.remove("is-loading"),T.loading=!1}).on("ready unload",function(e){var t="ready"==e.type
s.toggleClass(m,"is-splash",!t),s.toggleClass(m,"is-ready",t),T.ready=t,T.splash=!t}).on("progress",function(e,t,n){t.video.time=n}).on("speed",function(e,t,n){t.currentSpeed=n}).on("volume",function(e,t,n){t.volumeLevel=Math.round(100*n)/100,t.muted?n&&t.mute(!1):g.volume=n}).on("beforeseek seek",function(e){T.seeking="beforeseek"==e.type,s.toggleClass(m,"is-seeking",T.seeking)}).on("ready pause resume unload finish stop",function(e,t,n){T.paused=/pause|finish|unload|stop/.test(e.type),T.paused=T.paused||"ready"===e.type&&!h.autoplay&&!T.playing,T.playing=!T.paused,s.toggleClass(m,"is-paused",T.paused),s.toggleClass(m,"is-playing",T.playing),T.load.ed||T.pause()}).on("finish",function(e){T.finished=!0}).on("error",function(){})),T.trigger("boot",[T,m]),T}var o=e("extend-object"),i=e("is-function"),a=e("class-list"),l=e("bean"),s=e("./common"),c=e("./ext/events"),u=[],f=[],d=(window.navigator.userAgent,window.onbeforeunload)
window.onbeforeunload=function(e){return u.forEach(function(e){e.conf.splash?e.unload():e.bind("error",function(){s.find(".flowplayer.is-error .fp-message").forEach(s.removeNode)})}),d?d(e):void 0}
var p=!1
try{"object"==typeof window.localStorage&&(window.localStorage.flowplayerTestStorage="test",p=!0)}catch(m){}var v=/Safari/.exec(navigator.userAgent)&&!/Chrome/.exec(navigator.userAgent),h=/(\d+\.\d+) Safari/.exec(navigator.userAgent),g=h?+h[1]:100,y=t.exports=function(e,t,n){if(i(e))return f.push(e)
if("number"==typeof e||void 0===e)return u[e||0]
if(e.nodeType){if(null!==e.getAttribute("data-flowplayer-instance-id"))return u[e.getAttribute("data-flowplayer-instance-id")]
if(!t)return
return r(e,t,n)}if(e.jquery)return y(e[0],t,n)
if("string"==typeof e){var o=s.find(e)[0]
return o&&y(o,t,n)}}
o(y,{version:"6.0.5",engines:[],conf:{},set:function(e,t){"string"==typeof e?y.conf[e]=t:o(y.conf,e)},support:{},defaults:{debug:p?!!localStorage.flowplayerDebug:!1,disabled:!1,fullscreen:window==window.top,keyboard:!0,ratio:9/16,adaptiveRatio:!1,rtmp:0,proxy:"best",splash:!1,live:!1,swf:"//releases.flowplayer.org/6.0.5/commercial/flowplayer.swf",swfHls:"//releases.flowplayer.org/6.0.5/commercial/flowplayerhls.swf",speeds:[.25,.5,1,1.5,2],tooltip:!0,mouseoutTimeout:5e3,volume:p?"true"==localStorage.muted?0:isNaN(localStorage.volume)?1:localStorage.volume||1:1,errors:["","Video loading aborted","Network error","Video not properly encoded","Updating playlist, refresh in 20sec...","Unsupported video","Skin not found","SWF file not found","Subtitles not found","Invalid RTMP URL","Unsupported video format. Try installing Adobe Flash."],errorUrls:["","","","","","","","","","","http://get.adobe.com/flashplayer/"],playlist:[],hlsFix:v&&8>g},bean:l,common:s,extend:o})
var b=0,w=e("./ext/resolve")
if(void 0!==window.jQuery){var x=window.jQuery
x(function(){"function"==typeof x.fn.flowplayer&&x('.flowplayer:has(video,script[type="application/json"])').flowplayer()})
var E=function(e){if(!e.length)return{}
var t=e.data()||{},n={}
return x.each(["autoplay","loop","preload","poster"],function(r,o){var i=e.attr(o)
void 0!==i&&-1!==["autoplay","poster"].indexOf(o)?n[o]=i?i:!0:void 0!==i&&(t[o]=i?i:!0)}),t.subtitles=e.find("track").map(function(){var e=x(this)
return{src:e.attr("src"),kind:e.attr("kind"),label:e.attr("label"),srclang:e.attr("srclang"),"default":e.prop("default")}}).get(),t.sources=(new w).sourcesFromVideoTag(e,x),o(n,{clip:t})}
x.fn.flowplayer=function(e,t){return this.each(function(){"string"==typeof e&&(e={swf:e}),i(e)&&(t=e,e={})
var n=x(this),o=n.find('script[type="application/json"]'),a=o.length?JSON.parse(o.text()):E(n.find("video")),l=x.extend({},e||{},a,n.data()),s=r(this,l,t)
c.EVENTS.forEach(function(e){s.on(e+".jquery",function(e){n.trigger.call(n,e.type,e.detail&&e.detail.args)})}),n.data("flowplayer",s)})}}},{"./common":1,"./ext/events":8,"./ext/resolve":13,bean:20,"class-list":21,"extend-object":25,"is-function":26}],19:[function(e,t,n){e("es5-shim")
var r=t.exports=e("./flowplayer")
e("./ext/support"),e("./engine/embed"),e("./engine/html5"),e("./engine/flash"),e("./ext/ui"),e("./ext/keyboard"),e("./ext/playlist"),e("./ext/cuepoint"),e("./ext/subtitle"),e("./ext/analytics"),e("./ext/embed"),e("./ext/fullscreen"),e("./ext/mobile"),r(function(e,t){function n(e){var t=document.createElement("a")
return t.href=e,c.hostname(t.hostname)}function o(e){var t="ab.ca,ac.ac,ac.at,ac.be,ac.cn,ac.il,ac.in,ac.jp,ac.kr,ac.sg,ac.th,ac.uk,ad.jp,adm.br,adv.br,ah.cn,am.br,arq.br,art.br,arts.ro,asn.au,asso.fr,asso.mc,bc.ca,bio.br,biz.pl,biz.tr,bj.cn,br.com,cn.com,cng.br,cnt.br,co.ac,co.at,co.de,co.gl,co.hk,co.id,co.il,co.in,co.jp,co.kr,co.mg,co.ms,co.nz,co.th,co.uk,co.ve,co.vi,co.za,com.ag,com.ai,com.ar,com.au,com.br,com.cn,com.co,com.cy,com.de,com.do,com.ec,com.es,com.fj,com.fr,com.gl,com.gt,com.hk,com.hr,com.hu,com.kg,com.ki,com.lc,com.mg,com.mm,com.ms,com.mt,com.mu,com.mx,com.my,com.na,com.nf,com.ng,com.ni,com.pa,com.ph,com.pl,com.pt,com.qa,com.ro,com.ru,com.sb,com.sc,com.sg,com.sv,com.tr,com.tw,com.ua,com.uy,com.ve,com.vn,cp.tz,cq.cn,de.com,de.org,ecn.br,ed.jp,edu.au,edu.cn,edu.hk,edu.mm,edu.my,edu.pl,edu.pt,edu.qa,edu.sg,edu.tr,edu.tw,eng.br,ernet.in,esp.br,etc.br,eti.br,eu.com,eu.int,eu.lv,firm.in,firm.ro,fm.br,fot.br,fst.br,g12.br,gb.com,gb.net,gd.cn,gen.in,go.jp,go.kr,go.th,gov.au,gov.az,gov.br,gov.cn,gov.il,gov.in,gov.mm,gov.my,gov.qa,gov.sg,gov.tr,gov.tw,gov.uk,gr.jp,gs.cn,gv.ac,gv.at,gx.cn,gz.cn,he.cn,hi.cn,hk.cn,hl.cn,hu.com,id.au,idv.tw,in.ua,ind.br,ind.in,inf.br,info.pl,info.ro,info.tr,info.ve,iwi.nz,jl.cn,jor.br,js.cn,jus.br,k12.il,k12.tr,kr.com,lel.br,lg.jp,ln.cn,ltd.uk,maori.nz,mb.ca,me.uk,med.br,mi.th,mil.br,mil.uk,mo.cn,mod.uk,muni.il,nb.ca,ne.jp,ne.kr,net.ag,net.ai,net.au,net.br,net.cn,net.do,net.gl,net.hk,net.il,net.in,net.kg,net.ki,net.lc,net.mg,net.mm,net.mu,net.ni,net.nz,net.pl,net.ru,net.sb,net.sc,net.sg,net.th,net.tr,net.tw,net.uk,net.ve,nf.ca,nhs.uk,nm.cn,nm.kr,no.com,nom.br,nom.ni,nom.ro,ns.ca,nt.ca,nt.ro,ntr.br,nx.cn,odo.br,off.ai,on.ca,or.ac,or.at,or.jp,or.kr,or.th,org.ag,org.ai,org.au,org.br,org.cn,org.do,org.es,org.gl,org.hk,org.in,org.kg,org.ki,org.lc,org.mg,org.mm,org.ms,org.nf,org.ni,org.nz,org.pl,org.ro,org.ru,org.sb,org.sc,org.sg,org.tr,org.tw,org.uk,org.ve,pe.ca,plc.uk,police.uk,ppg.br,presse.fr,pro.br,psc.br,psi.br,qc.ca,qc.com,qh.cn,rec.br,rec.ro,res.in,sa.com,sc.cn,sch.uk,se.com,se.net,sh.cn,sk.ca,slg.br,sn.cn,store.ro,tj.cn,tm.fr,tm.mc,tm.ro,tmp.br,tur.br,tv.br,tv.tr,tw.cn,uk.com,uk.net,us.com,uy.com,vet.br,waw.pl,web.ve,www.ro,xj.cn,xz.cn,yk.ca,yn.cn,zj.cn,zlg.br".split(",")
e=e.toLowerCase()
var n=e.split("."),r=n.length
if(2>r||/^\d+$/.test(n[r-1]))return e
var o=n.slice(-2).join(".")
return r>=3&&t.indexOf(o)>=0?n.slice(-3).join("."):o}function i(e,t){t=o(t)
for(var n=0,r=t.length-1;r>=0;r--)n+=9369279644*t.charCodeAt(r)
for(n=(""+n).substring(0,7),r=0;r<e.length;r++)if(n===e[r].substring(1,8))return 1}var a=function(e,t){var n=e.className.split(" ");-1===n.indexOf(t)&&(e.className+=" "+t)},l=function(e){return"none"!==window.getComputedStyle(e).display},s=e.conf,c=r.common,u=c.createElement,f=s.swf.indexOf("flowplayer.org")&&s.e&&t.getAttribute("data-origin"),d=f?n(f):c.hostname(),p=(document,s.key)
"file:"==location.protocol&&(d="localhost"),e.load.ed=1,s.hostname=d,s.origin=f||location.href,f&&a(t,"is-embedded"),"string"==typeof p&&(p=p.split(/,\s*/))
var m=function(e,n){var r=u("a",{href:n,className:"fp-brand"})
r.innerHTML=e,c.find(".fp-controls",t)[0].appendChild(r)}
if(p&&"function"==typeof i&&i(p,d)){if(s.logo){var v=c.find(".fp-player",t)[0],h=u("a",{className:"fp-logo"})
f&&(h.href=f),s.embed&&s.embed.popup&&(h.target="_blank")
var g=u("img",{src:s.logo})
h.appendChild(g),(v||t).appendChild(h)}s.brand&&f||s.brand&&s.brand.showOnOrigin?m(s.brand.text||s.brand,f||location.href):c.addClass(t,"no-brand")}else{m("flowplayer","http://flowplayer.org")
var h=u("a",{href:"http://flowplayer.org"})
t.appendChild(h)
var y=u("div",{className:"fp-context-menu"},'<ul><li class="copyright">&copy; 2015</li><li><a href="http://flowplayer.org">About Flowplayer</a></li><li><a href="http://flowplayer.org/license">GPL based license</a></li></ul>'),b=window.location.href.indexOf("localhost"),v=c.find(".fp-player",t)[0]
7!==b&&(v||t).appendChild(y),e.on("pause resume finish unload ready",function(e,n){c.removeClass(t,"no-brand")
var r=-1
if(n.video.src)for(var o=[["org","flowplayer","drive"],["org","flowplayer","my"],["org","flowplayer","cdn"]],i=0;i<o.length&&(r=n.video.src.indexOf("://"+o[i].reverse().join(".")),-1===r);i++);if((4===r||5===r)&&c.addClass(t,"no-brand"),/pause|resume/.test(e.type)&&"flash"!=n.engine.engineName&&4!=r&&5!=r){var a={display:"block",position:"absolute",left:"16px",bottom:"46px",zIndex:99999,width:"100px",height:"20px",backgroundImage:"url("+[".png","logo","/",".net",".cloudfront","d32wqyuo10o653","//"].reverse().join("")+")"}
for(var s in a)a.hasOwnProperty(s)&&(h.style[s]=a[s])
n.load.ed=l(h)&&(7===b||y.parentNode==t||y.parentNode==v)&&!c.hasClass(t,"no-brand"),n.load.ed||n.pause()}else h.style.display="none"})}})},{"./engine/embed":2,"./engine/flash":3,"./engine/html5":4,"./ext/analytics":5,"./ext/cuepoint":6,"./ext/embed":7,"./ext/fullscreen":9,"./ext/keyboard":10,"./ext/mobile":11,"./ext/playlist":12,"./ext/subtitle":15,"./ext/support":16,"./ext/ui":17,"./flowplayer":18,"es5-shim":24}],20:[function(t,n,r){!function(t,r,o){void 0!==n&&n.exports?n.exports=o():"function"==typeof e&&e.amd?e(o):r[t]=o()}("bean",this,function(e,t){e=e||"bean",t=t||this
var n,r=window,o=t[e],i=/[^\.]*(?=\..*)\.|.*/,a=/\..*/,l="addEventListener",s="removeEventListener",c=document||{},u=c.documentElement||{},f=u[l],d=f?l:"attachEvent",p={},m=Array.prototype.slice,v=function(e,t){return e.split(t||" ")},h=function(e){return"string"==typeof e},g=function(e){return"function"==typeof e},y="click dblclick mouseup mousedown contextmenu mousewheel mousemultiwheel DOMMouseScroll mouseover mouseout mousemove selectstart selectend keydown keypress keyup orientationchange focus blur change reset select submit load unload beforeunload resize move DOMContentLoaded readystatechange message error abort scroll ",b="show input invalid touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend textinput readystatechange pageshow pagehide popstate hashchange offline online afterprint beforeprint dragstart dragenter dragover dragleave drag drop dragend loadstart progress suspend emptied stalled loadmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate play pause ratechange volumechange cuechange checking noupdate downloading cached updateready obsolete ",w=function(e,t,n){for(n=0;n<t.length;n++)t[n]&&(e[t[n]]=1)
return e}({},v(y+(f?b:""))),x=function(){var e="compareDocumentPosition"in u?function(e,t){return t.compareDocumentPosition&&16===(16&t.compareDocumentPosition(e))}:"contains"in u?function(e,t){return t=9===t.nodeType||t===window?u:t,t!==e&&t.contains(e)}:function(e,t){for(;e=e.parentNode;)if(e===t)return 1
return 0},t=function(t){var n=t.relatedTarget
return n?n!==this&&"xul"!==n.prefix&&!/document/.test(""+this)&&!e(n,this):null==n}
return{mouseenter:{base:"mouseover",condition:t},mouseleave:{base:"mouseout",condition:t},mousewheel:{base:/Firefox/.test(navigator.userAgent)?"DOMMouseScroll":"mousewheel"}}}(),E=function(){var e=v("altKey attrChange attrName bubbles cancelable ctrlKey currentTarget detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey srcElement target timeStamp type view which propertyName"),t=e.concat(v("button buttons clientX clientY dataTransfer fromElement offsetX offsetY pageX pageY screenX screenY toElement")),n=t.concat(v("wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ axis")),o=e.concat(v("char charCode key keyCode keyIdentifier keyLocation location")),i=e.concat(v("data")),a=e.concat(v("touches targetTouches changedTouches scale rotation")),l=e.concat(v("data origin source")),s=e.concat(v("state")),f=/over|out/,d=[{reg:/key/i,fix:function(e,t){return t.keyCode=e.keyCode||e.which,o}},{reg:/click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,fix:function(e,n,r){return n.rightClick=3===e.which||2===e.button,n.pos={x:0,y:0},e.pageX||e.pageY?(n.clientX=e.pageX,n.clientY=e.pageY):(e.clientX||e.clientY)&&(n.clientX=e.clientX+c.body.scrollLeft+u.scrollLeft,n.clientY=e.clientY+c.body.scrollTop+u.scrollTop),f.test(r)&&(n.relatedTarget=e.relatedTarget||e[("mouseover"==r?"from":"to")+"Element"]),t}},{reg:/mouse.*(wheel|scroll)/i,fix:function(){return n}},{reg:/^text/i,fix:function(){return i}},{reg:/^touch|^gesture/i,fix:function(){return a}},{reg:/^message$/i,fix:function(){return l}},{reg:/^popstate$/i,fix:function(){return s}},{reg:/.*/,fix:function(){return e}}],p={},m=function(e,t,n){if(arguments.length&&(e=e||((t.ownerDocument||t.document||t).parentWindow||r).event,this.originalEvent=e,this.isNative=n,this.isBean=!0,e)){var o,i,a,l,s,c=e.type,u=e.target||e.srcElement
if(this.target=u&&3===u.nodeType?u.parentNode:u,n){if(s=p[c],!s)for(o=0,i=d.length;i>o;o++)if(d[o].reg.test(c)){p[c]=s=d[o].fix
break}for(l=s(e,this,c),o=l.length;o--;)!((a=l[o])in this)&&a in e&&(this[a]=e[a])}}}
return m.prototype.preventDefault=function(){this.originalEvent.preventDefault?this.originalEvent.preventDefault():this.originalEvent.returnValue=!1},m.prototype.stopPropagation=function(){this.originalEvent.stopPropagation?this.originalEvent.stopPropagation():this.originalEvent.cancelBubble=!0},m.prototype.stop=function(){this.preventDefault(),this.stopPropagation(),this.stopped=!0},m.prototype.stopImmediatePropagation=function(){this.originalEvent.stopImmediatePropagation&&this.originalEvent.stopImmediatePropagation(),this.isImmediatePropagationStopped=function(){return!0}},m.prototype.isImmediatePropagationStopped=function(){return this.originalEvent.isImmediatePropagationStopped&&this.originalEvent.isImmediatePropagationStopped()},m.prototype.clone=function(e){var t=new m(this,this.element,this.isNative)
return t.currentTarget=e,t},m}(),k=function(e,t){return f||t||e!==c&&e!==r?e:u},T=function(){var e=function(e,t,n,r){var o=function(n,o){return t.apply(e,r?m.call(o,n?0:1).concat(r):o)},i=function(n,r){return t.__beanDel?t.__beanDel.ft(n.target,e):r},a=n?function(e){var t=i(e,this)
return n.apply(t,arguments)?(e&&(e.currentTarget=t),o(e,arguments)):void 0}:function(e){return t.__beanDel&&(e=e.clone(i(e))),o(e,arguments)}
return a.__beanDel=t.__beanDel,a},t=function(t,n,r,o,i,a,l){var s,c=x[n]
"unload"==n&&(r=N(P,t,n,r,o)),c&&(c.condition&&(r=e(t,r,c.condition,a)),n=c.base||n),this.isNative=s=w[n]&&!!t[d],this.customType=!f&&!s&&n,this.element=t,this.type=n,this.original=o,this.namespaces=i,this.eventType=f||s?n:"propertychange",this.target=k(t,s),this[d]=!!this.target[d],this.root=l,this.handler=e(t,r,null,a)}
return t.prototype.inNamespaces=function(e){var t,n,r=0
if(!e)return!0
if(!this.namespaces)return!1
for(t=e.length;t--;)for(n=this.namespaces.length;n--;)e[t]==this.namespaces[n]&&r++
return e.length===r},t.prototype.matches=function(e,t,n){return!(this.element!==e||t&&this.original!==t||n&&this.handler!==n)},t}(),S=function(){var e={},t=function(n,r,o,i,a,l){var s=a?"r":"$"
if(r&&"*"!=r){var c,u=0,f=e[s+r],d="*"==n
if(!f)return
for(c=f.length;c>u;u++)if((d||f[u].matches(n,o,i))&&!l(f[u],f,u,r))return}else for(var p in e)p.charAt(0)==s&&t(n,p.substr(1),o,i,a,l)},n=function(t,n,r,o){var i,a=e[(o?"r":"$")+n]
if(a)for(i=a.length;i--;)if(!a[i].root&&a[i].matches(t,r,null))return!0
return!1},r=function(e,n,r,o){var i=[]
return t(e,n,r,null,o,function(e){return i.push(e)}),i},o=function(t){var n=!t.root&&!this.has(t.element,t.type,null,!1),r=(t.root?"r":"$")+t.type
return(e[r]||(e[r]=[])).push(t),n},i=function(n){t(n.element,n.type,null,n.handler,n.root,function(t,n,r){return n.splice(r,1),t.removed=!0,0===n.length&&delete e[(t.root?"r":"$")+t.type],!1})},a=function(){var t,n=[]
for(t in e)"$"==t.charAt(0)&&(n=n.concat(e[t]))
return n}
return{has:n,get:r,put:o,del:i,entries:a}}(),C=function(e){n=arguments.length?e:c.querySelectorAll?function(e,t){return t.querySelectorAll(e)}:function(){throw Error("Bean: No selector engine installed")}},j=function(e,t){if(f||!t||!e||e.propertyName=="_on"+t){var n=S.get(this,t||e.type,null,!1),r=n.length,o=0
for(e=new E(e,this,!0),t&&(e.type=t);r>o&&!e.isImmediatePropagationStopped();o++)n[o].removed||n[o].handler.call(this,e)}},O=f?function(e,t,n){e[n?l:s](t,j,!1)}:function(e,t,n,r){var o
n?(S.put(o=new T(e,r||t,function(t){j.call(e,t,r)},j,null,null,!0)),r&&null==e["_on"+r]&&(e["_on"+r]=0),o.target.attachEvent("on"+o.eventType,o.handler)):(o=S.get(e,r||t,j,!0)[0],o&&(o.target.detachEvent("on"+o.eventType,o.handler),S.del(o)))},N=function(e,t,n,r,o){return function(){r.apply(this,arguments),e(t,n,o)}},P=function(e,t,n,r){var o,i,l=t&&t.replace(a,""),s=S.get(e,l,null,!1),c={}
for(o=0,i=s.length;i>o;o++)n&&s[o].original!==n||!s[o].inNamespaces(r)||(S.del(s[o]),!c[s[o].eventType]&&s[o][d]&&(c[s[o].eventType]={t:s[o].eventType,c:s[o].type}))
for(o in c)S.has(e,c[o].t,null,!1)||O(e,c[o].t,!1,c[o].c)},A=function(e,t){var r=function(t,r){for(var o,i=h(e)?n(e,r):e;t&&t!==r;t=t.parentNode)for(o=i.length;o--;)if(i[o]===t)return t},o=function(e){var n=r(e.target,this)
n&&t.apply(n,arguments)}
return o.__beanDel={ft:r,selector:e},o},_=f?function(e,t,n){var o=c.createEvent(e?"HTMLEvents":"UIEvents")
o[e?"initEvent":"initUIEvent"](t,!0,!0,r,1),n.dispatchEvent(o)}:function(e,t,n){n=k(n,e),e?n.fireEvent("on"+t,c.createEventObject()):n["_on"+t]++},D=function(e,t,n){var r,o,l,s,c=h(t)
if(c&&t.indexOf(" ")>0){for(t=v(t),s=t.length;s--;)D(e,t[s],n)
return e}if(o=c&&t.replace(a,""),o&&x[o]&&(o=x[o].base),!t||c)(l=c&&t.replace(i,""))&&(l=v(l,".")),P(e,o,n,l)
else if(g(t))P(e,null,t)
else for(r in t)t.hasOwnProperty(r)&&D(e,r,t[r])
return e},M=function(e,t,r,o){var l,s,c,u,f,h,y
{if(void 0!==r||"object"!=typeof t){for(g(r)?(f=m.call(arguments,3),o=l=r):(l=o,f=m.call(arguments,4),o=A(r,l,n)),c=v(t),this===p&&(o=N(D,e,t,o,l)),u=c.length;u--;)y=S.put(h=new T(e,c[u].replace(a,""),o,l,v(c[u].replace(i,""),"."),f,!1)),h[d]&&y&&O(e,h.eventType,!0,h.customType)
return e}for(s in t)t.hasOwnProperty(s)&&M.call(this,e,s,t[s])}},I=function(e,t,n,r){return M.apply(null,h(n)?[e,n,t,r].concat(arguments.length>3?m.call(arguments,5):[]):m.call(arguments))},L=function(){return M.apply(p,arguments)},F=function(e,t,n){var r,o,l,s,c,u=v(t)
for(r=u.length;r--;)if(t=u[r].replace(a,""),(s=u[r].replace(i,""))&&(s=v(s,".")),s||n||!e[d])for(c=S.get(e,t,null,!1),n=[!1].concat(n),o=0,l=c.length;l>o;o++)c[o].inNamespaces(s)&&c[o].handler.apply(e,n)
else _(w[t],t,e)
return e},z=function(e,t,n){for(var r,o,i=S.get(t,n,null,!1),a=i.length,l=0;a>l;l++)i[l].original&&(r=[e,i[l].type],(o=i[l].handler.__beanDel)&&r.push(o.selector),r.push(i[l].original),M.apply(null,r))
return e},R={on:M,add:I,one:L,off:D,remove:D,clone:z,fire:F,Event:E,setSelectorEngine:C,noConflict:function(){return t[e]=o,this}}
if(r.attachEvent){var q=function(){var e,t=S.entries()
for(e in t)t[e].type&&"unload"!==t[e].type&&D(t[e].element,t[e].type)
r.detachEvent("onunload",q),r.CollectGarbage&&r.CollectGarbage()}
r.attachEvent("onunload",q)}return C(),R})},{}],21:[function(e,t,n){function r(e){function t(e){var t=u()
a(t,e)>-1||(t.push(e),f(t))}function n(e){var t=u(),n=a(t,e);-1!==n&&(t.splice(n,1),f(t))}function r(e){return a(u(),e)>-1}function l(e){return r(e)?(n(e),!1):(t(e),!0)}function s(){return e.className}function c(e){var t=u()
return t[e]||null}function u(){var t=e.className
return o(t.split(" "),i)}function f(t){var n=t.length
e.className=t.join(" "),p.length=n
for(var r=0;r<t.length;r++)p[r]=t[r]
delete t[n]}var d=e.classList
if(d)return d
var p={add:t,remove:n,contains:r,toggle:l,toString:s,length:0,item:c}
return p}function o(e,t){for(var n=[],r=0;r<e.length;r++)t(e[r])&&n.push(e[r])
return n}function i(e){return!!e}var a=e("indexof")
t.exports=r},{indexof:22}],22:[function(e,t,n){var r=[].indexOf
t.exports=function(e,t){if(r)return e.indexOf(t)
for(var n=0;n<e.length;++n)if(e[n]===t)return n
return-1}},{}],23:[function(e,t,n){function r(e,t,n,r){return n=window.getComputedStyle,r=n?n(e):e.currentStyle,r?r[t.replace(/-(\w)/gi,function(e,t){return t.toUpperCase()})]:void 0}t.exports=r},{}],24:[function(t,n,r){!function(t,o){"use strict"
"function"==typeof e&&e.amd?e(o):"object"==typeof r?n.exports=o():t.returnExports=o()}(this,function(){var e,t=Array.prototype,n=Object.prototype,r=Function.prototype,o=String.prototype,i=Number.prototype,a=t.slice,l=t.splice,s=t.push,c=t.unshift,u=t.concat,f=r.call,d=n.toString,p=Array.isArray||function(e){return"[object Array]"===d.call(e)},m="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,v=Function.prototype.toString,h=function(e){try{return v.call(e),!0}catch(t){return!1}},g="[object Function]",y="[object GeneratorFunction]"
e=function(e){if("function"!=typeof e)return!1
if(m)return h(e)
var t=d.call(e)
return t===g||t===y}
var b,w=RegExp.prototype.exec,x=function(e){try{return w.call(e),!0}catch(t){return!1}},E="[object RegExp]"
b=function(e){return"object"!=typeof e?!1:m?x(e):d.call(e)===E}
var k,T=String.prototype.valueOf,S=function(e){try{return T.call(e),!0}catch(t){return!1}},C="[object String]"
k=function(e){return"string"==typeof e?!0:"object"!=typeof e?!1:m?S(e):d.call(e)===C}
var j=function(t){var n=d.call(t),r="[object Arguments]"===n
return r||(r=!p(t)&&null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&e(t.callee)),r},O=function(e){var t,n=Object.defineProperty&&function(){try{var e={}
Object.defineProperty(e,"x",{enumerable:!1,value:e})
for(var t in e)return!1
return e.x===e}catch(n){return!1}}()
return t=n?function(e,t,n,r){!r&&t in e||Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:!0,value:n})}:function(e,t,n,r){!r&&t in e||(e[t]=n)},function(n,r,o){for(var i in r)e.call(r,i)&&t(n,i,r[i],o)}}(n.hasOwnProperty),N=function(e){var t=typeof e
return null===e||"object"!==t&&"function"!==t},P={ToInteger:function(e){var t=+e
return t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t},ToPrimitive:function(t){var n,r,o
if(N(t))return t
if(r=t.valueOf,e(r)&&(n=r.call(t),N(n)))return n
if(o=t.toString,e(o)&&(n=o.call(t),N(n)))return n
throw new TypeError},ToObject:function(e){if(null==e)throw new TypeError("can't convert "+e+" to object")
return Object(e)},ToUint32:function(e){return e>>>0}},A=function(){}
O(r,{bind:function(t){var n=this
if(!e(n))throw new TypeError("Function.prototype.bind called on incompatible "+n)
for(var r,o=a.call(arguments,1),i=function(){if(this instanceof r){var e=n.apply(this,u.call(o,a.call(arguments)))
return Object(e)===e?e:this}return n.apply(t,u.call(o,a.call(arguments)))},l=Math.max(0,n.length-o.length),s=[],c=0;l>c;c++)s.push("$"+c)
return r=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this, arguments); }")(i),n.prototype&&(A.prototype=n.prototype,r.prototype=new A,A.prototype=null),r}})
var _=f.bind(n.hasOwnProperty),D=function(){var e=[1,2],t=e.splice()
return 2===e.length&&p(t)&&0===t.length}()
O(t,{splice:function(e,t){return 0===arguments.length?[]:l.apply(this,arguments)}},!D)
var M=function(){var e={}
return t.splice.call(e,0,0,1),1===e.length}()
O(t,{splice:function(e,t){if(0===arguments.length)return[]
var n=arguments
return this.length=Math.max(P.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof t&&(n=a.call(arguments),n.length<2?n.push(this.length-e):n[1]=P.ToInteger(t)),l.apply(this,n)}},!M)
var I=1!==[].unshift(0)
O(t,{unshift:function(){return c.apply(this,arguments),this.length}},I),O(Array,{isArray:p})
var L=Object("a"),F="a"!==L[0]||!(0 in L),z=function(e){var t=!0,n=!0
return e&&(e.call("foo",function(e,n,r){"object"!=typeof r&&(t=!1)}),e.call([1],function(){"use strict"
n="string"==typeof this},"x")),!!e&&t&&n}
O(t,{forEach:function(t){var n,r=P.ToObject(this),o=F&&k(this)?this.split(""):r,i=-1,a=o.length>>>0
if(arguments.length>1&&(n=arguments[1]),!e(t))throw new TypeError("Array.prototype.forEach callback must be a function")
for(;++i<a;)i in o&&(void 0!==n?t.call(n,o[i],i,r):t(o[i],i,r))}},!z(t.forEach)),O(t,{map:function(t){var n,r=P.ToObject(this),o=F&&k(this)?this.split(""):r,i=o.length>>>0,a=Array(i)
if(arguments.length>1&&(n=arguments[1]),!e(t))throw new TypeError("Array.prototype.map callback must be a function")
for(var l=0;i>l;l++)l in o&&(void 0!==n?a[l]=t.call(n,o[l],l,r):a[l]=t(o[l],l,r))
return a}},!z(t.map)),O(t,{filter:function(t){var n,r,o=P.ToObject(this),i=F&&k(this)?this.split(""):o,a=i.length>>>0,l=[]
if(arguments.length>1&&(r=arguments[1]),!e(t))throw new TypeError("Array.prototype.filter callback must be a function")
for(var s=0;a>s;s++)s in i&&(n=i[s],(void 0===r?t(n,s,o):t.call(r,n,s,o))&&l.push(n))
return l}},!z(t.filter)),O(t,{every:function(t){var n,r=P.ToObject(this),o=F&&k(this)?this.split(""):r,i=o.length>>>0
if(arguments.length>1&&(n=arguments[1]),!e(t))throw new TypeError("Array.prototype.every callback must be a function")
for(var a=0;i>a;a++)if(a in o&&!(void 0===n?t(o[a],a,r):t.call(n,o[a],a,r)))return!1
return!0}},!z(t.every)),O(t,{some:function(t){var n,r=P.ToObject(this),o=F&&k(this)?this.split(""):r,i=o.length>>>0
if(arguments.length>1&&(n=arguments[1]),!e(t))throw new TypeError("Array.prototype.some callback must be a function")
for(var a=0;i>a;a++)if(a in o&&(void 0===n?t(o[a],a,r):t.call(n,o[a],a,r)))return!0
return!1}},!z(t.some))
var R=!1
t.reduce&&(R="object"==typeof t.reduce.call("es5",function(e,t,n,r){return r})),O(t,{reduce:function(t){var n=P.ToObject(this),r=F&&k(this)?this.split(""):n,o=r.length>>>0
if(!e(t))throw new TypeError("Array.prototype.reduce callback must be a function")
if(0===o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value")
var i,a=0
if(arguments.length>=2)i=arguments[1]
else for(;;){if(a in r){i=r[a++]
break}if(++a>=o)throw new TypeError("reduce of empty array with no initial value")}for(;o>a;a++)a in r&&(i=t(i,r[a],a,n))
return i}},!R)
var q=!1
t.reduceRight&&(q="object"==typeof t.reduceRight.call("es5",function(e,t,n,r){return r})),O(t,{reduceRight:function(t){var n=P.ToObject(this),r=F&&k(this)?this.split(""):n,o=r.length>>>0
if(!e(t))throw new TypeError("Array.prototype.reduceRight callback must be a function")
if(0===o&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value")
var i,a=o-1
if(arguments.length>=2)i=arguments[1]
else for(;;){if(a in r){i=r[a--]
break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>a)return i
do a in r&&(i=t(i,r[a],a,n))
while(a--)
return i}},!q)
var V=Array.prototype.indexOf&&-1!==[0,1].indexOf(1,2)
O(t,{indexOf:function(e){var t=F&&k(this)?this.split(""):P.ToObject(this),n=t.length>>>0
if(0===n)return-1
var r=0
for(arguments.length>1&&(r=P.ToInteger(arguments[1])),r=r>=0?r:Math.max(0,n+r);n>r;r++)if(r in t&&t[r]===e)return r
return-1}},V)
var H=Array.prototype.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3)
O(t,{lastIndexOf:function(e){var t=F&&k(this)?this.split(""):P.ToObject(this),n=t.length>>>0
if(0===n)return-1
var r=n-1
for(arguments.length>1&&(r=Math.min(r,P.ToInteger(arguments[1]))),r=r>=0?r:n-Math.abs(r);r>=0;r--)if(r in t&&e===t[r])return r
return-1}},H)
var U=!{toString:null}.propertyIsEnumerable("toString"),$=function(){}.propertyIsEnumerable("prototype"),X=!_("x","0"),Y=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],B=Y.length
O(Object,{keys:function(t){var n=e(t),r=j(t),o=null!==t&&"object"==typeof t,i=o&&k(t)
if(!o&&!n&&!r)throw new TypeError("Object.keys called on a non-object")
var a=[],l=$&&n
if(i&&X||r)for(var s=0;s<t.length;++s)a.push(s+"")
if(!r)for(var c in t)l&&"prototype"===c||!_(t,c)||a.push(c+"")
if(U)for(var u=t.constructor,f=u&&u.prototype===t,d=0;B>d;d++){var p=Y[d]
f&&"constructor"===p||!_(t,p)||a.push(p)}return a}})
var W=Object.keys&&function(){return 2===Object.keys(arguments).length}(1,2),K=Object.keys
O(Object,{keys:function(e){return K(j(e)?t.slice.call(e):e)}},!W)
var G=-621987552e5,Z="-000001",J=Date.prototype.toISOString&&-1===new Date(G).toISOString().indexOf(Z)
O(Date.prototype,{toISOString:function(){var e,t,n,r,o
if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.")
for(r=this.getUTCFullYear(),o=this.getUTCMonth(),r+=Math.floor(o/12),o=(o%12+12)%12,e=[o+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=(0>r?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(r>=0&&9999>=r?-4:-6),t=e.length;t--;)n=e[t],10>n&&(e[t]="0"+n)
return r+"-"+e.slice(0,2).join("-")+"T"+e.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}},J)
var Q=function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(G).toJSON().indexOf(Z)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(e){return!1}}()
Q||(Date.prototype.toJSON=function(t){var n=Object(this),r=P.ToPrimitive(n)
if("number"==typeof r&&!isFinite(r))return null
var o=n.toISOString
if(!e(o))throw new TypeError("toISOString property is not callable")
return o.call(n)})
var ee=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),te=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z")),ne=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));(!Date.parse||ne||te||!ee)&&(Date=function(e){var t=function(n,r,o,i,a,l,s){var c,u=arguments.length
return c=this instanceof e?1===u&&n+""===n?new e(t.parse(n)):u>=7?new e(n,r,o,i,a,l,s):u>=6?new e(n,r,o,i,a,l):u>=5?new e(n,r,o,i,a):u>=4?new e(n,r,o,i):u>=3?new e(n,r,o):u>=2?new e(n,r):u>=1?new e(n):new e:e.apply(this,arguments),O(c,{constructor:t},!0),c},n=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),r=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(e,t){var n=t>1?1:0
return r[t]+Math.floor((e-1969+n)/4)-Math.floor((e-1901+n)/100)+Math.floor((e-1601+n)/400)+365*(e-1970)},i=function(t){return+new e(1970,0,1,0,0,0,t)}
for(var a in e)_(e,a)&&(t[a]=e[a])
return O(t,{now:e.now,UTC:e.UTC},!0),t.prototype=e.prototype,O(t.prototype,{constructor:t},!0),t.parse=function(t){var r=n.exec(t)
if(r){var a,l=+r[1],s=+(r[2]||1)-1,c=+(r[3]||1)-1,u=+(r[4]||0),f=+(r[5]||0),d=+(r[6]||0),p=Math.floor(1e3*+(r[7]||0)),m=!(!r[4]||r[8]),v="-"===r[9]?1:-1,h=+(r[10]||0),g=+(r[11]||0)
return(f>0||d>0||p>0?24:25)>u&&60>f&&60>d&&1e3>p&&s>-1&&12>s&&24>h&&60>g&&c>-1&&c<o(l,s+1)-o(l,s)&&(a=60*(24*(o(l,s)+c)+u+h*v),a=1e3*(60*(a+f+g*v)+d)+p,m&&(a=i(a)),a>=-864e13&&864e13>=a)?a:NaN}return e.parse.apply(this,arguments)},t}(Date)),Date.now||(Date.now=function(){return(new Date).getTime()})
var re=i.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),oe={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(e,t){for(var n=-1,r=t;++n<oe.size;)r+=e*oe.data[n],oe.data[n]=r%oe.base,r=Math.floor(r/oe.base)},divide:function(e){for(var t=oe.size,n=0;--t>=0;)n+=oe.data[t],oe.data[t]=Math.floor(n/e),n=n%e*oe.base},numToString:function(){for(var e=oe.size,t="";--e>=0;)if(""!==t||0===e||0!==oe.data[e]){var n=oe.data[e]+""
""===t?t=n:t+="0000000".slice(0,7-n.length)+n}return t},pow:function he(e,t,n){return 0===t?n:t%2===1?he(e,t-1,n*e):he(e*e,t/2,n)},log:function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096
for(;n>=2;)t+=1,n/=2
return t}}
O(i,{toFixed:function(e){var t,n,r,o,i,a,l,s
if(t=+e,t=t!==t?0:Math.floor(t),0>t||t>20)throw new RangeError("Number.toFixed called with invalid number of decimals")
if(n=+this,n!==n)return"NaN"
if(-1e21>=n||n>=1e21)return n+""
if(r="",0>n&&(r="-",n=-n),o="0",n>1e-21)if(i=oe.log(n*oe.pow(2,69,1))-69,a=0>i?n*oe.pow(2,-i,1):n/oe.pow(2,i,1),a*=4503599627370496,i=52-i,i>0){for(oe.multiply(0,a),l=t;l>=7;)oe.multiply(1e7,0),l-=7
for(oe.multiply(oe.pow(10,l,1),0),l=i-1;l>=23;)oe.divide(1<<23),l-=23
oe.divide(1<<l),oe.multiply(1,1),oe.divide(2),o=oe.numToString()}else oe.multiply(0,a),oe.multiply(1<<-i,0),o=oe.numToString()+"0.00000000000000000000".slice(2,2+t)
return t>0?(s=o.length,o=t>=s?r+"0.0000000000000000000".slice(0,t-s+2)+o:r+o.slice(0,s-t)+"."+o.slice(s-t)):o=r+o,o}},re)
var ie=o.split
2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var e=void 0===/()??/.exec("")[1]
o.split=function(t,n){var r=this
if(void 0===t&&0===n)return[]
if(!b(t))return ie.call(this,t,n)
var o,i,a,l,c=[],u=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.extended?"x":"")+(t.sticky?"y":""),f=0,d=RegExp(t.source,u+"g")
r+="",e||(o=RegExp("^"+d.source+"$(?!\\s)",u))
var p=void 0===n?-1>>>0:P.ToUint32(n)
for(i=d.exec(r);i&&(a=i.index+i[0].length,!(a>f&&(c.push(r.slice(f,i.index)),!e&&i.length>1&&i[0].replace(o,function(){for(var e=1;e<arguments.length-2;e++)void 0===arguments[e]&&(i[e]=void 0)}),i.length>1&&i.index<r.length&&s.apply(c,i.slice(1)),l=i[0].length,f=a,c.length>=p)));)d.lastIndex===i.index&&d.lastIndex++,i=d.exec(r)
return f===r.length?(l||!d.test(""))&&c.push(""):c.push(r.slice(f)),c.length>p?c.slice(0,p):c}}():"0".split(void 0,0).length&&(o.split=function(e,t){return void 0===e&&0===t?[]:ie.call(this,e,t)})
var ae=o.replace,le=function(){var e=[]
return"x".replace(/x(.)?/g,function(t,n){e.push(n)}),1===e.length&&void 0===e[0]}()
le||(o.replace=function(t,n){var r=e(n),o=b(t)&&/\)[*?]/.test(t.source)
if(r&&o){var i=function(e){var r=arguments.length,o=t.lastIndex
t.lastIndex=0
var i=t.exec(e)||[]
return t.lastIndex=o,i.push(arguments[r-2],arguments[r-1]),n.apply(this,i)}
return ae.call(this,t,i)}return ae.call(this,t,n)})
var se=o.substr,ce="".substr&&"b"!=="0b".substr(-1)
O(o,{substr:function(e,t){var n=e
return 0>e&&(n=Math.max(this.length+e,0)),se.call(this,n,t)}},ce)
var ue="	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",fe="​",de="["+ue+"]",pe=RegExp("^"+de+de+"*"),me=RegExp(de+de+"*$"),ve=o.trim&&(ue.trim()||!fe.trim())
O(o,{trim:function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object")
return(this+"").replace(pe,"").replace(me,"")}},ve),(8!==parseInt(ue+"08")||22!==parseInt(ue+"0x16"))&&(parseInt=function(e){var t=/^0[xX]/
return function(n,r){var o=(n+"").trim(),i=+r||(t.test(o)?16:10)
return e(o,i)}}(parseInt))})},{}],25:[function(e,t,n){var r=[],o=r.forEach,i=r.slice
t.exports=function(e){return o.call(i.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e}},{}],26:[function(e,t,n){function r(e){var t=o.call(e)
return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}t.exports=r
var o=Object.prototype.toString},{}],27:[function(e,t,n){"use strict"
t.exports=function(e){return"object"==typeof e&&null!==e}},{}],28:[function(t,n,r){!function(t,r){void 0!==n&&n.exports?n.exports=r():"function"==typeof e&&e.amd?e(r):this[t]=r()}("$script",function(){function e(e,t){for(var n=0,r=e.length;r>n;++n)if(!t(e[n]))return s
return 1}function t(t,n){e(t,function(e){return!n(e)})}function n(i,a,l){function s(e){return e.call?e():d[e]}function u(){if(!--y){d[g]=1,h&&h()
for(var n in m)e(n.split("|"),s)&&!t(m[n],s)&&(m[n]=[])}}i=i[c]?i:[i]
var f=a&&a.call,h=f?a:l,g=f?i.join(""):a,y=i.length
return setTimeout(function(){t(i,function e(t,n){return null===t?u():(t=n||-1!==t.indexOf(".js")||/^https?:\/\//.test(t)||!o?t:o+t+".js",v[t]?(g&&(p[g]=1),2==v[t]?u():setTimeout(function(){e(t,!0)},0)):(v[t]=1,g&&(p[g]=1),void r(t,u)))})},0),n}function r(e,t){var n,r=a.createElement("script")
r.onload=r.onerror=r[f]=function(){r[u]&&!/^c|loade/.test(r[u])||n||(r.onload=r[f]=null,n=1,v[e]=2,t())},r.async=1,r.src=i?e+(-1===e.indexOf("?")?"?":"&")+i:e,l.insertBefore(r,l.lastChild)}var o,i,a=document,l=a.getElementsByTagName("head")[0],s=!1,c="push",u="readyState",f="onreadystatechange",d={},p={},m={},v={}
return n.get=r,n.order=function(e,t,r){!function o(i){i=e.shift(),e.length?n(i,o):n(i,t,r)}()},n.path=function(e){o=e},n.urlArgs=function(e){i=e},n.ready=function(r,o,i){r=r[c]?r:[r]
var a=[]
return!t(r,function(e){d[e]||a[c](e)})&&e(r,function(e){return d[e]})?o():!function(e){m[e]=m[e]||[],m[e][c](o),i&&i(a)}(r.join("|")),n},n.done=function(e){n([null],e)},n})},{}],29:[function(t,n,r){(function(t){!function(o){function i(e){throw RangeError(M[e])}function a(e,t){for(var n=e.length;n--;)e[n]=t(e[n])
return e}function l(e,t){return a(e.split(D),t).join(".")}function s(e){for(var t,n,r=[],o=0,i=e.length;i>o;)t=e.charCodeAt(o++),t>=55296&&56319>=t&&i>o?(n=e.charCodeAt(o++),56320==(64512&n)?r.push(((1023&t)<<10)+(1023&n)+65536):(r.push(t),o--)):r.push(t)
return r}function c(e){return a(e,function(e){var t=""
return e>65535&&(e-=65536,t+=F(e>>>10&1023|55296),e=56320|1023&e),t+=F(e)}).join("")}function u(e){return 10>e-48?e-22:26>e-65?e-65:26>e-97?e-97:k}function f(e,t){return e+22+75*(26>e)-((0!=t)<<5)}function d(e,t,n){var r=0
for(e=n?L(e/j):e>>1,e+=L(e/t);e>I*S>>1;r+=k)e=L(e/I)
return L(r+(I+1)*e/(e+C))}function p(e){var t,n,r,o,a,l,s,f,p,m,v=[],h=e.length,g=0,y=N,b=O
for(n=e.lastIndexOf(P),0>n&&(n=0),r=0;n>r;++r)e.charCodeAt(r)>=128&&i("not-basic"),v.push(e.charCodeAt(r))
for(o=n>0?n+1:0;h>o;){for(a=g,l=1,s=k;o>=h&&i("invalid-input"),f=u(e.charCodeAt(o++)),(f>=k||f>L((E-g)/l))&&i("overflow"),g+=f*l,p=b>=s?T:s>=b+S?S:s-b,!(p>f);s+=k)m=k-p,l>L(E/m)&&i("overflow"),l*=m
t=v.length+1,b=d(g-a,t,0==a),L(g/t)>E-y&&i("overflow"),y+=L(g/t),g%=t,v.splice(g++,0,y)}return c(v)}function m(e){var t,n,r,o,a,l,c,u,p,m,v,h,g,y,b,w=[]
for(e=s(e),h=e.length,t=N,n=0,a=O,l=0;h>l;++l)v=e[l],128>v&&w.push(F(v))
for(r=o=w.length,o&&w.push(P);h>r;){for(c=E,l=0;h>l;++l)v=e[l],v>=t&&c>v&&(c=v)
for(g=r+1,c-t>L((E-n)/g)&&i("overflow"),n+=(c-t)*g,t=c,l=0;h>l;++l)if(v=e[l],t>v&&++n>E&&i("overflow"),v==t){for(u=n,p=k;m=a>=p?T:p>=a+S?S:p-a,!(m>u);p+=k)b=u-m,y=k-m,w.push(F(f(m+b%y,0))),u=L(b/y)
w.push(F(f(u,0))),a=d(n,g,r==o),n=0,++r}++n,++t}return w.join("")}function v(e){return l(e,function(e){return A.test(e)?p(e.slice(4).toLowerCase()):e})}function h(e){return l(e,function(e){return _.test(e)?"xn--"+m(e):e})}var g="object"==typeof r&&r,y="object"==typeof n&&n&&n.exports==g&&n,b="object"==typeof t&&t;(b.global===b||b.window===b)&&(o=b)
var w,x,E=2147483647,k=36,T=1,S=26,C=38,j=700,O=72,N=128,P="-",A=/^xn--/,_=/[^ -~]/,D=/\x2E|\u3002|\uFF0E|\uFF61/g,M={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},I=k-T,L=Math.floor,F=String.fromCharCode
if(w={version:"1.2.4",ucs2:{decode:s,encode:c},decode:p,encode:m,toASCII:h,toUnicode:v},"function"==typeof e&&"object"==typeof e.amd&&e.amd)e("punycode",function(){return w})
else if(g&&!g.nodeType)if(y)y.exports=w
else for(x in w)w.hasOwnProperty(x)&&(g[x]=w[x])
else o.punycode=w}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[19])(19)})

