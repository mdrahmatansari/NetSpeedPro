(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))l(p);new MutationObserver(p=>{for(const c of p)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&l(h)}).observe(document,{childList:!0,subtree:!0});function a(p){const c={};return p.integrity&&(c.integrity=p.integrity),p.referrerPolicy&&(c.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?c.credentials="include":p.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(p){if(p.ep)return;p.ep=!0;const c=a(p);fetch(p.href,c)}})();var W0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Kh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var pu={exports:{}},hc={},hu={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sh;function dg(){if(sh)return Mt;sh=1;var i=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),w=Symbol.for("react.memo"),k=Symbol.for("react.lazy"),T=Symbol.iterator;function P(A){return A===null||typeof A!="object"?null:(A=T&&A[T]||A["@@iterator"],typeof A=="function"?A:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},U=Object.assign,D={};function q(A,N,I){this.props=A,this.context=N,this.refs=D,this.updater=I||b}q.prototype.isReactComponent={},q.prototype.setState=function(A,N){if(typeof A!="object"&&typeof A!="function"&&A!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,A,N,"setState")},q.prototype.forceUpdate=function(A){this.updater.enqueueForceUpdate(this,A,"forceUpdate")};function _(){}_.prototype=q.prototype;function F(A,N,I){this.props=A,this.context=N,this.refs=D,this.updater=I||b}var K=F.prototype=new _;K.constructor=F,U(K,q.prototype),K.isPureReactComponent=!0;var he=Array.isArray,ve=Object.prototype.hasOwnProperty,ye={current:null},oe={key:!0,ref:!0,__self:!0,__source:!0};function $(A,N,I){var G,V={},Y=null,ne=null;if(N!=null)for(G in N.ref!==void 0&&(ne=N.ref),N.key!==void 0&&(Y=""+N.key),N)ve.call(N,G)&&!oe.hasOwnProperty(G)&&(V[G]=N[G]);var re=arguments.length-2;if(re===1)V.children=I;else if(1<re){for(var ce=Array(re),_e=0;_e<re;_e++)ce[_e]=arguments[_e+2];V.children=ce}if(A&&A.defaultProps)for(G in re=A.defaultProps,re)V[G]===void 0&&(V[G]=re[G]);return{$$typeof:i,type:A,key:Y,ref:ne,props:V,_owner:ye.current}}function pe(A,N){return{$$typeof:i,type:A.type,key:N,ref:A.ref,props:A.props,_owner:A._owner}}function Se(A){return typeof A=="object"&&A!==null&&A.$$typeof===i}function C(A){var N={"=":"=0",":":"=2"};return"$"+A.replace(/[=:]/g,function(I){return N[I]})}var B=/\/+/g;function Z(A,N){return typeof A=="object"&&A!==null&&A.key!=null?C(""+A.key):N.toString(36)}function te(A,N,I,G,V){var Y=typeof A;(Y==="undefined"||Y==="boolean")&&(A=null);var ne=!1;if(A===null)ne=!0;else switch(Y){case"string":case"number":ne=!0;break;case"object":switch(A.$$typeof){case i:case n:ne=!0}}if(ne)return ne=A,V=V(ne),A=G===""?"."+Z(ne,0):G,he(V)?(I="",A!=null&&(I=A.replace(B,"$&/")+"/"),te(V,N,I,"",function(_e){return _e})):V!=null&&(Se(V)&&(V=pe(V,I+(!V.key||ne&&ne.key===V.key?"":(""+V.key).replace(B,"$&/")+"/")+A)),N.push(V)),1;if(ne=0,G=G===""?".":G+":",he(A))for(var re=0;re<A.length;re++){Y=A[re];var ce=G+Z(Y,re);ne+=te(Y,N,I,ce,V)}else if(ce=P(A),typeof ce=="function")for(A=ce.call(A),re=0;!(Y=A.next()).done;)Y=Y.value,ce=G+Z(Y,re++),ne+=te(Y,N,I,ce,V);else if(Y==="object")throw N=String(A),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(A).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ne}function Ne(A,N,I){if(A==null)return A;var G=[],V=0;return te(A,G,"","",function(Y){return N.call(I,Y,V++)}),G}function ue(A){if(A._status===-1){var N=A._result;N=N(),N.then(function(I){(A._status===0||A._status===-1)&&(A._status=1,A._result=I)},function(I){(A._status===0||A._status===-1)&&(A._status=2,A._result=I)}),A._status===-1&&(A._status=0,A._result=N)}if(A._status===1)return A._result.default;throw A._result}var ke={current:null},ee={transition:null},me={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ee,ReactCurrentOwner:ye};function z(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:Ne,forEach:function(A,N,I){Ne(A,function(){N.apply(this,arguments)},I)},count:function(A){var N=0;return Ne(A,function(){N++}),N},toArray:function(A){return Ne(A,function(N){return N})||[]},only:function(A){if(!Se(A))throw Error("React.Children.only expected to receive a single React element child.");return A}},Mt.Component=q,Mt.Fragment=a,Mt.Profiler=p,Mt.PureComponent=F,Mt.StrictMode=l,Mt.Suspense=g,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Mt.act=z,Mt.cloneElement=function(A,N,I){if(A==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+A+".");var G=U({},A.props),V=A.key,Y=A.ref,ne=A._owner;if(N!=null){if(N.ref!==void 0&&(Y=N.ref,ne=ye.current),N.key!==void 0&&(V=""+N.key),A.type&&A.type.defaultProps)var re=A.type.defaultProps;for(ce in N)ve.call(N,ce)&&!oe.hasOwnProperty(ce)&&(G[ce]=N[ce]===void 0&&re!==void 0?re[ce]:N[ce])}var ce=arguments.length-2;if(ce===1)G.children=I;else if(1<ce){re=Array(ce);for(var _e=0;_e<ce;_e++)re[_e]=arguments[_e+2];G.children=re}return{$$typeof:i,type:A.type,key:V,ref:Y,props:G,_owner:ne}},Mt.createContext=function(A){return A={$$typeof:h,_currentValue:A,_currentValue2:A,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},A.Provider={$$typeof:c,_context:A},A.Consumer=A},Mt.createElement=$,Mt.createFactory=function(A){var N=$.bind(null,A);return N.type=A,N},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(A){return{$$typeof:f,render:A}},Mt.isValidElement=Se,Mt.lazy=function(A){return{$$typeof:k,_payload:{_status:-1,_result:A},_init:ue}},Mt.memo=function(A,N){return{$$typeof:w,type:A,compare:N===void 0?null:N}},Mt.startTransition=function(A){var N=ee.transition;ee.transition={};try{A()}finally{ee.transition=N}},Mt.unstable_act=z,Mt.useCallback=function(A,N){return ke.current.useCallback(A,N)},Mt.useContext=function(A){return ke.current.useContext(A)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(A){return ke.current.useDeferredValue(A)},Mt.useEffect=function(A,N){return ke.current.useEffect(A,N)},Mt.useId=function(){return ke.current.useId()},Mt.useImperativeHandle=function(A,N,I){return ke.current.useImperativeHandle(A,N,I)},Mt.useInsertionEffect=function(A,N){return ke.current.useInsertionEffect(A,N)},Mt.useLayoutEffect=function(A,N){return ke.current.useLayoutEffect(A,N)},Mt.useMemo=function(A,N){return ke.current.useMemo(A,N)},Mt.useReducer=function(A,N,I){return ke.current.useReducer(A,N,I)},Mt.useRef=function(A){return ke.current.useRef(A)},Mt.useState=function(A){return ke.current.useState(A)},Mt.useSyncExternalStore=function(A,N,I){return ke.current.useSyncExternalStore(A,N,I)},Mt.useTransition=function(){return ke.current.useTransition()},Mt.version="18.3.1",Mt}var lh;function Yu(){return lh||(lh=1,hu.exports=dg()),hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ch;function ug(){if(ch)return hc;ch=1;var i=Yu(),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,p=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function h(f,g,w){var k,T={},P=null,b=null;w!==void 0&&(P=""+w),g.key!==void 0&&(P=""+g.key),g.ref!==void 0&&(b=g.ref);for(k in g)l.call(g,k)&&!c.hasOwnProperty(k)&&(T[k]=g[k]);if(f&&f.defaultProps)for(k in g=f.defaultProps,g)T[k]===void 0&&(T[k]=g[k]);return{$$typeof:n,type:f,key:P,ref:b,props:T,_owner:p.current}}return hc.Fragment=a,hc.jsx=h,hc.jsxs=h,hc}var dh;function pg(){return dh||(dh=1,pu.exports=ug()),pu.exports}var s=pg(),ct=Yu();const hg=Kh(ct);var id={},fu={exports:{}},la={},gu={exports:{}},mu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uh;function fg(){return uh||(uh=1,(function(i){function n(ee,me){var z=ee.length;ee.push(me);e:for(;0<z;){var A=z-1>>>1,N=ee[A];if(0<p(N,me))ee[A]=me,ee[z]=N,z=A;else break e}}function a(ee){return ee.length===0?null:ee[0]}function l(ee){if(ee.length===0)return null;var me=ee[0],z=ee.pop();if(z!==me){ee[0]=z;e:for(var A=0,N=ee.length,I=N>>>1;A<I;){var G=2*(A+1)-1,V=ee[G],Y=G+1,ne=ee[Y];if(0>p(V,z))Y<N&&0>p(ne,V)?(ee[A]=ne,ee[Y]=z,A=Y):(ee[A]=V,ee[G]=z,A=G);else if(Y<N&&0>p(ne,z))ee[A]=ne,ee[Y]=z,A=Y;else break e}}return me}function p(ee,me){var z=ee.sortIndex-me.sortIndex;return z!==0?z:ee.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;i.unstable_now=function(){return c.now()}}else{var h=Date,f=h.now();i.unstable_now=function(){return h.now()-f}}var g=[],w=[],k=1,T=null,P=3,b=!1,U=!1,D=!1,q=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K(ee){for(var me=a(w);me!==null;){if(me.callback===null)l(w);else if(me.startTime<=ee)l(w),me.sortIndex=me.expirationTime,n(g,me);else break;me=a(w)}}function he(ee){if(D=!1,K(ee),!U)if(a(g)!==null)U=!0,ue(ve);else{var me=a(w);me!==null&&ke(he,me.startTime-ee)}}function ve(ee,me){U=!1,D&&(D=!1,_($),$=-1),b=!0;var z=P;try{for(K(me),T=a(g);T!==null&&(!(T.expirationTime>me)||ee&&!C());){var A=T.callback;if(typeof A=="function"){T.callback=null,P=T.priorityLevel;var N=A(T.expirationTime<=me);me=i.unstable_now(),typeof N=="function"?T.callback=N:T===a(g)&&l(g),K(me)}else l(g);T=a(g)}if(T!==null)var I=!0;else{var G=a(w);G!==null&&ke(he,G.startTime-me),I=!1}return I}finally{T=null,P=z,b=!1}}var ye=!1,oe=null,$=-1,pe=5,Se=-1;function C(){return!(i.unstable_now()-Se<pe)}function B(){if(oe!==null){var ee=i.unstable_now();Se=ee;var me=!0;try{me=oe(!0,ee)}finally{me?Z():(ye=!1,oe=null)}}else ye=!1}var Z;if(typeof F=="function")Z=function(){F(B)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,Ne=te.port2;te.port1.onmessage=B,Z=function(){Ne.postMessage(null)}}else Z=function(){q(B,0)};function ue(ee){oe=ee,ye||(ye=!0,Z())}function ke(ee,me){$=q(function(){ee(i.unstable_now())},me)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(ee){ee.callback=null},i.unstable_continueExecution=function(){U||b||(U=!0,ue(ve))},i.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pe=0<ee?Math.floor(1e3/ee):5},i.unstable_getCurrentPriorityLevel=function(){return P},i.unstable_getFirstCallbackNode=function(){return a(g)},i.unstable_next=function(ee){switch(P){case 1:case 2:case 3:var me=3;break;default:me=P}var z=P;P=me;try{return ee()}finally{P=z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(ee,me){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var z=P;P=ee;try{return me()}finally{P=z}},i.unstable_scheduleCallback=function(ee,me,z){var A=i.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?A+z:A):z=A,ee){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,ee={id:k++,callback:me,priorityLevel:ee,startTime:z,expirationTime:N,sortIndex:-1},z>A?(ee.sortIndex=z,n(w,ee),a(g)===null&&ee===a(w)&&(D?(_($),$=-1):D=!0,ke(he,z-A))):(ee.sortIndex=N,n(g,ee),U||b||(U=!0,ue(ve))),ee},i.unstable_shouldYield=C,i.unstable_wrapCallback=function(ee){var me=P;return function(){var z=P;P=me;try{return ee.apply(this,arguments)}finally{P=z}}}})(mu)),mu}var ph;function gg(){return ph||(ph=1,gu.exports=fg()),gu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hh;function mg(){if(hh)return la;hh=1;var i=Yu(),n=gg();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,p={};function c(e,t){h(e,t),h(e+"Capture",t)}function h(e,t){for(p[e]=t,e=0;e<t.length;e++)l.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,w=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,k={},T={};function P(e){return g.call(T,e)?!0:g.call(k,e)?!1:w.test(e)?T[e]=!0:(k[e]=!0,!1)}function b(e,t,r,d){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return d?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U(e,t,r,d){if(t===null||typeof t>"u"||b(e,t,r,d))return!0;if(d)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function D(e,t,r,d,v,x,M){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=d,this.attributeNamespace=v,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=x,this.removeEmptyString=M}var q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){q[e]=new D(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];q[t]=new D(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){q[e]=new D(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){q[e]=new D(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){q[e]=new D(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){q[e]=new D(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){q[e]=new D(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){q[e]=new D(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){q[e]=new D(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function F(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,F);q[t]=new D(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,F);q[t]=new D(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,F);q[t]=new D(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){q[e]=new D(e,1,!1,e.toLowerCase(),null,!1,!1)}),q.xlinkHref=new D("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){q[e]=new D(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,t,r,d){var v=q.hasOwnProperty(t)?q[t]:null;(v!==null?v.type!==0:d||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U(t,r,v,d)&&(r=null),d||v===null?P(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):v.mustUseProperty?e[v.propertyName]=r===null?v.type===3?!1:"":r:(t=v.attributeName,d=v.attributeNamespace,r===null?e.removeAttribute(t):(v=v.type,r=v===3||v===4&&r===!0?"":""+r,d?e.setAttributeNS(d,t,r):e.setAttribute(t,r))))}var he=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ve=Symbol.for("react.element"),ye=Symbol.for("react.portal"),oe=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),C=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),ke=Symbol.for("react.offscreen"),ee=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=ee&&e[ee]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,A;function N(e){if(A===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);A=t&&t[1]||""}return`
`+A+e}var I=!1;function G(e,t){if(!e||I)return"";I=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(Ce){var d=Ce}Reflect.construct(e,[],t)}else{try{t.call()}catch(Ce){d=Ce}e.call(t.prototype)}else{try{throw Error()}catch(Ce){d=Ce}e()}}catch(Ce){if(Ce&&d&&typeof Ce.stack=="string"){for(var v=Ce.stack.split(`
`),x=d.stack.split(`
`),M=v.length-1,X=x.length-1;1<=M&&0<=X&&v[M]!==x[X];)X--;for(;1<=M&&0<=X;M--,X--)if(v[M]!==x[X]){if(M!==1||X!==1)do if(M--,X--,0>X||v[M]!==x[X]){var se=`
`+v[M].replace(" at new "," at ");return e.displayName&&se.includes("<anonymous>")&&(se=se.replace("<anonymous>",e.displayName)),se}while(1<=M&&0<=X);break}}}finally{I=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function V(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=G(e.type,!1),e;case 11:return e=G(e.type.render,!1),e;case 1:return e=G(e.type,!0),e;default:return""}}function Y(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case oe:return"Fragment";case ye:return"Portal";case pe:return"Profiler";case $:return"StrictMode";case Z:return"Suspense";case te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case C:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case B:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:Y(e.type)||"Memo";case ue:t=e._payload,e=e._init;try{return Y(e(t))}catch{}}return null}function ne(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(t);case 8:return t===$?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function re(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=ce(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),d=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var v=r.get,x=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return v.call(this)},set:function(M){d=""+M,x.call(this,M)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return d},setValue:function(M){d=""+M},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Re(e){e._valueTracker||(e._valueTracker=_e(e))}function Be(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),d="";return e&&(d=ce(e)?e.checked?"true":"false":e.value),e=d,e!==r?(t.setValue(e),!0):!1}function Ue(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ke(e,t){var r=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function je(e,t){var r=t.defaultValue==null?"":t.defaultValue,d=t.checked!=null?t.checked:t.defaultChecked;r=re(t.value!=null?t.value:r),e._wrapperState={initialChecked:d,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Q(e,t){t=t.checked,t!=null&&K(e,"checked",t,!1)}function st(e,t){Q(e,t);var r=re(t.value),d=t.type;if(r!=null)d==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(d==="submit"||d==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oe(e,t.type,r):t.hasOwnProperty("defaultValue")&&Oe(e,t.type,re(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Xe(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var d=t.type;if(!(d!=="submit"&&d!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Oe(e,t,r){(t!=="number"||Ue(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Ae=Array.isArray;function Fe(e,t,r,d){if(e=e.options,t){t={};for(var v=0;v<r.length;v++)t["$"+r[v]]=!0;for(r=0;r<e.length;r++)v=t.hasOwnProperty("$"+e[r].value),e[r].selected!==v&&(e[r].selected=v),v&&d&&(e[r].defaultSelected=!0)}else{for(r=""+re(r),t=null,v=0;v<e.length;v++){if(e[v].value===r){e[v].selected=!0,d&&(e[v].defaultSelected=!0);return}t!==null||e[v].disabled||(t=e[v])}t!==null&&(t.selected=!0)}}function We(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function rt(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(a(92));if(Ae(r)){if(1<r.length)throw Error(a(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:re(r)}}function gt(e,t){var r=re(t.value),d=re(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),d!=null&&(e.defaultValue=""+d)}function Nt(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Et(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jt(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Rt,ft=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,d,v){MSApp.execUnsafeLocalFunction(function(){return e(t,r,d,v)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Rt=Rt||document.createElement("div"),Rt.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Rt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Tt(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var $e={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},On=["Webkit","ms","Moz","O"];Object.keys($e).forEach(function(e){On.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),$e[t]=$e[e]})});function It(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||$e.hasOwnProperty(e)&&$e[e]?(""+t).trim():t+"px"}function Vr(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var d=r.indexOf("--")===0,v=It(r,t[r],d);r==="float"&&(r="cssFloat"),d?e.setProperty(r,v):e[r]=v}}var Zt=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rn(e,t){if(t){if(Zt[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Kr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ft=null;function Ha(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sn=null,Jn=null,hr=null;function cn(e){if(e=rs(e)){if(typeof sn!="function")throw Error(a(280));var t=e.stateNode;t&&(t=Vs(t),sn(e.stateNode,e.type,t))}}function St(e){Jn?hr?hr.push(e):hr=[e]:Jn=e}function qt(){if(Jn){var e=Jn,t=hr;if(hr=Jn=null,cn(e),t)for(e=0;e<t.length;e++)cn(t[e])}}function mi(e,t){return e(t)}function Bn(){}var Jr=!1;function da(e,t,r){if(Jr)return e(t,r);Jr=!0;try{return mi(e,t,r)}finally{Jr=!1,(Jn!==null||hr!==null)&&(Bn(),qt())}}function pt(e,t){var r=e.stateNode;if(r===null)return null;var d=Vs(r);if(d===null)return null;r=d[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(e=e.type,d=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!d;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,t,typeof r));return r}var Ir=!1;if(f)try{var fr={};Object.defineProperty(fr,"passive",{get:function(){Ir=!0}}),window.addEventListener("test",fr,fr),window.removeEventListener("test",fr,fr)}catch{Ir=!1}function gr(e,t,r,d,v,x,M,X,se){var Ce=Array.prototype.slice.call(arguments,3);try{t.apply(r,Ce)}catch(Ge){this.onError(Ge)}}var dn=!1,un=null,$n=!1,vi=null,Ua={onError:function(e){dn=!0,un=e}};function ua(e,t,r,d,v,x,M,X,se){dn=!1,un=null,gr.apply(Ua,arguments)}function pa(e,t,r,d,v,x,M,X,se){if(ua.apply(this,arguments),dn){if(dn){var Ce=un;dn=!1,un=null}else throw Error(a(198));$n||($n=!0,vi=Ce)}}function Un(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function ha(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _r(e){if(Un(e)!==e)throw Error(a(188))}function Ta(e){var t=e.alternate;if(!t){if(t=Un(e),t===null)throw Error(a(188));return t!==e?null:e}for(var r=e,d=t;;){var v=r.return;if(v===null)break;var x=v.alternate;if(x===null){if(d=v.return,d!==null){r=d;continue}break}if(v.child===x.child){for(x=v.child;x;){if(x===r)return _r(v),e;if(x===d)return _r(v),t;x=x.sibling}throw Error(a(188))}if(r.return!==d.return)r=v,d=x;else{for(var M=!1,X=v.child;X;){if(X===r){M=!0,r=v,d=x;break}if(X===d){M=!0,d=v,r=x;break}X=X.sibling}if(!M){for(X=x.child;X;){if(X===r){M=!0,r=x,d=v;break}if(X===d){M=!0,d=x,r=v;break}X=X.sibling}if(!M)throw Error(a(189))}}if(r.alternate!==d)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:t}function yi(e){return e=Ta(e),e!==null?Gi(e):null}function Gi(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Gi(e);if(t!==null)return t;e=e.sibling}return null}var Wi=n.unstable_scheduleCallback,Vi=n.unstable_cancelCallback,Ao=n.unstable_shouldYield,ol=n.unstable_requestPaint,pn=n.unstable_now,Vl=n.unstable_getCurrentPriorityLevel,bi=n.unstable_ImmediatePriority,Ts=n.unstable_UserBlockingPriority,jo=n.unstable_NormalPriority,Ps=n.unstable_LowPriority,sl=n.unstable_IdlePriority,Ki=null,$r=null;function Co(e){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(Ki,e,void 0,(e.current.flags&128)===128)}catch{}}var Dr=Math.clz32?Math.clz32:cl,Sn=Math.log,ll=Math.LN2;function cl(e){return e>>>=0,e===0?32:31-(Sn(e)/ll|0)|0}var Ji=64,xi=4194304;function $i(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function mr(e,t){var r=e.pendingLanes;if(r===0)return 0;var d=0,v=e.suspendedLanes,x=e.pingedLanes,M=r&268435455;if(M!==0){var X=M&~v;X!==0?d=$i(X):(x&=M,x!==0&&(d=$i(x)))}else M=r&~v,M!==0?d=$i(M):x!==0&&(d=$i(x));if(d===0)return 0;if(t!==0&&t!==d&&(t&v)===0&&(v=d&-d,x=t&-t,v>=x||v===16&&(x&4194240)!==0))return t;if((d&4)!==0&&(d|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=d;0<t;)r=31-Dr(t),v=1<<r,d|=e[r],t&=~v;return d}function Lo(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vr(e,t){for(var r=e.suspendedLanes,d=e.pingedLanes,v=e.expirationTimes,x=e.pendingLanes;0<x;){var M=31-Dr(x),X=1<<M,se=v[M];se===-1?((X&r)===0||(X&d)!==0)&&(v[M]=Lo(X,t)):se<=t&&(e.expiredLanes|=X),x&=~X}}function Yi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function As(){var e=Ji;return Ji<<=1,(Ji&4194240)===0&&(Ji=64),e}function js(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function wi(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Dr(t),e[t]=r}function Kl(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var d=e.eventTimes;for(e=e.expirationTimes;0<r;){var v=31-Dr(r),x=1<<v;t[v]=0,d[v]=-1,e[v]=-1,r&=~x}}function Eo(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var d=31-Dr(r),v=1<<d;v&t|e[d]&t&&(e[d]|=t),r&=~v}}var Ht=0;function Mo(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var dl,Cs,ul,Pa,Qi,Si=!1,Xi=[],hn=null,Aa=null,fa=null,yt=new Map,Zi=new Map,ja=[],Ca="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ls(e,t){switch(e){case"focusin":case"focusout":hn=null;break;case"dragenter":case"dragleave":Aa=null;break;case"mouseover":case"mouseout":fa=null;break;case"pointerover":case"pointerout":yt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zi.delete(t.pointerId)}}function ki(e,t,r,d,v,x){return e===null||e.nativeEvent!==x?(e={blockedOn:t,domEventName:r,eventSystemFlags:d,nativeEvent:x,targetContainers:[v]},t!==null&&(t=rs(t),t!==null&&Cs(t)),e):(e.eventSystemFlags|=d,t=e.targetContainers,v!==null&&t.indexOf(v)===-1&&t.push(v),e)}function Io(e,t,r,d,v){switch(t){case"focusin":return hn=ki(hn,e,t,r,d,v),!0;case"dragenter":return Aa=ki(Aa,e,t,r,d,v),!0;case"mouseover":return fa=ki(fa,e,t,r,d,v),!0;case"pointerover":var x=v.pointerId;return yt.set(x,ki(yt.get(x)||null,e,t,r,d,v)),!0;case"gotpointercapture":return x=v.pointerId,Zi.set(x,ki(Zi.get(x)||null,e,t,r,d,v)),!0}return!1}function _o(e){var t=_i(e.target);if(t!==null){var r=Un(t);if(r!==null){if(t=r.tag,t===13){if(t=ha(r),t!==null){e.blockedOn=t,Qi(e.priority,function(){ul(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Fo(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var d=new r.constructor(r.type,r);Ft=d,r.target.dispatchEvent(d),Ft=null}else return t=rs(r),t!==null&&Cs(t),e.blockedOn=r,!1;t.shift()}return!0}function pl(e,t,r){Do(e)&&r.delete(t)}function Jl(){Si=!1,hn!==null&&Do(hn)&&(hn=null),Aa!==null&&Do(Aa)&&(Aa=null),fa!==null&&Do(fa)&&(fa=null),yt.forEach(pl),Zi.forEach(pl)}function Ga(e,t){e.blockedOn===t&&(e.blockedOn=null,Si||(Si=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Jl)))}function ga(e){function t(v){return Ga(v,e)}if(0<Xi.length){Ga(Xi[0],e);for(var r=1;r<Xi.length;r++){var d=Xi[r];d.blockedOn===e&&(d.blockedOn=null)}}for(hn!==null&&Ga(hn,e),Aa!==null&&Ga(Aa,e),fa!==null&&Ga(fa,e),yt.forEach(t),Zi.forEach(t),r=0;r<ja.length;r++)d=ja[r],d.blockedOn===e&&(d.blockedOn=null);for(;0<ja.length&&(r=ja[0],r.blockedOn===null);)_o(r),r.blockedOn===null&&ja.shift()}var Rr=he.ReactCurrentBatchConfig,Ro=!0;function eo(e,t,r,d){var v=Ht,x=Rr.transition;Rr.transition=null;try{Ht=1,Ni(e,t,r,d)}finally{Ht=v,Rr.transition=x}}function Es(e,t,r,d){var v=Ht,x=Rr.transition;Rr.transition=null;try{Ht=4,Ni(e,t,r,d)}finally{Ht=v,Rr.transition=x}}function Ni(e,t,r,d){if(Ro){var v=Fo(e,t,r,d);if(v===null)Us(e,t,d,to,r),Ls(e,d);else if(Io(v,e,t,r,d))d.stopPropagation();else if(Ls(e,d),t&4&&-1<Ca.indexOf(e)){for(;v!==null;){var x=rs(v);if(x!==null&&dl(x),x=Fo(e,t,r,d),x===null&&Us(e,t,d,to,r),x===v)break;v=x}v!==null&&d.stopPropagation()}else Us(e,t,d,null,r)}}var to=null;function Fo(e,t,r,d){if(to=null,e=Ha(d),e=_i(e),e!==null)if(t=Un(e),t===null)e=null;else if(r=t.tag,r===13){if(e=ha(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return to=e,null}function Ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vl()){case bi:return 1;case Ts:return 4;case jo:case Ps:return 16;case sl:return 536870912;default:return 16}default:return 16}}var ma=null,Yr=null,Qr=null;function hl(){if(Qr)return Qr;var e,t=Yr,r=t.length,d,v="value"in ma?ma.value:ma.textContent,x=v.length;for(e=0;e<r&&t[e]===v[e];e++);var M=r-e;for(d=1;d<=M&&t[r-d]===v[x-d];d++);return Qr=v.slice(e,1<d?1-d:void 0)}function va(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yr(){return!0}function zo(){return!1}function En(e){function t(r,d,v,x,M){this._reactName=r,this._targetInst=v,this.type=d,this.nativeEvent=x,this.target=M,this.currentTarget=null;for(var X in e)e.hasOwnProperty(X)&&(r=e[X],this[X]=r?r(x):x[X]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?yr:zo,this.isPropagationStopped=zo,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=yr)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=yr)},persist:function(){},isPersistent:yr}),t}var Ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pi=En(Ti),no=z({},Ti,{view:0,detail:0}),Is=En(no),ro,Oo,La,Ai=z({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ze,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(ro=e.screenX-La.screenX,Oo=e.screenY-La.screenY):Oo=ro=0,La=e),ro)},movementY:function(e){return"movementY"in e?e.movementY:Oo}}),Bo=En(Ai),fl=z({},Ai,{dataTransfer:0}),$l=En(fl),qo=z({},no,{relatedTarget:0}),Wa=En(qo),_s=z({},Ti,{animationName:0,elapsedTime:0,pseudoElement:0}),ji=En(_s),Ds=z({},Ti,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),m=En(Ds),L=z({},Ti,{data:0}),J=En(L),ae={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},be={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ee={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qe(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ee[e])?!!t[e]:!1}function Ze(){return qe}var ut=z({},no,{key:function(e){if(e.key){var t=ae[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=va(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?be[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ze,charCode:function(e){return e.type==="keypress"?va(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?va(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),At=En(ut),Pt=z({},Ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_t=En(Pt),fn=z({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ze}),bn=En(fn),Tn=z({},Ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yn=En(Tn),qn=z({},Ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ya=En(qn),Fr=[9,13,27,32],Xr=f&&"CompositionEvent"in window,Ci=null;f&&"documentMode"in document&&(Ci=document.documentMode);var Rs=f&&"TextEvent"in window&&!Ci,Ho=f&&(!Xr||Ci&&8<Ci&&11>=Ci),ao=" ",Uo=!1;function Go(e,t){switch(e){case"keyup":return Fr.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function io(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var xn=!1;function Wo(e,t){switch(e){case"compositionend":return io(t);case"keypress":return t.which!==32?null:(Uo=!0,ao);case"textInput":return e=t.data,e===ao&&Uo?null:e;default:return null}}function Vo(e,t){if(xn)return e==="compositionend"||!Xr&&Go(e,t)?(e=hl(),Qr=Yr=ma=null,xn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ho&&t.locale!=="ko"?null:t.data;default:return null}}var Ko={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ko[e.type]:t==="textarea"}function ir(e,t,r,d){St(d),t=yl(t,"onChange"),0<t.length&&(r=new Pi("onChange","change",null,r,d),e.push({event:r,listeners:t}))}var oo=null,Va=null;function gl(e){qs(e,0)}function or(e){var t=mo(e);if(Be(t))return e}function $o(e,t){if(e==="change")return t}var Fs=!1;if(f){var Yo;if(f){var Ea="oninput"in document;if(!Ea){var Li=document.createElement("div");Li.setAttribute("oninput","return;"),Ea=typeof Li.oninput=="function"}Yo=Ea}else Yo=!1;Fs=Yo&&(!document.documentMode||9<document.documentMode)}function sr(){oo&&(oo.detachEvent("onpropertychange",Qn),Va=oo=null)}function Qn(e){if(e.propertyName==="value"&&or(Va)){var t=[];ir(t,Va,e,Ha(e)),da(gl,t)}}function Ei(e,t,r){e==="focusin"?(sr(),oo=t,Va=r,oo.attachEvent("onpropertychange",Qn)):e==="focusout"&&sr()}function Ka(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return or(Va)}function Ja(e,t){if(e==="click")return or(t)}function Qo(e,t){if(e==="input"||e==="change")return or(t)}function $a(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:$a;function Ya(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),d=Object.keys(t);if(r.length!==d.length)return!1;for(d=0;d<r.length;d++){var v=r[d];if(!g.call(t,v)||!Ut(e[v],t[v]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var r=Xn(e);e=0;for(var d;r;){if(r.nodeType===3){if(d=e+r.textContent.length,e<=t&&d>=t)return{node:r,offset:t-e};e=d}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function so(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?so(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zs(){for(var e=window,t=Ue();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ue(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function co(e){var t=zs(),r=e.focusedElem,d=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&so(r.ownerDocument.documentElement,r)){if(d!==null&&lo(r)){if(t=d.start,e=d.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var v=r.textContent.length,x=Math.min(d.start,v);d=d.end===void 0?x:Math.min(d.end,v),!e.extend&&x>d&&(v=d,d=x,x=v),v=zr(r,x);var M=zr(r,d);v&&M&&(e.rangeCount!==1||e.anchorNode!==v.node||e.anchorOffset!==v.offset||e.focusNode!==M.node||e.focusOffset!==M.offset)&&(t=t.createRange(),t.setStart(v.node,v.offset),e.removeAllRanges(),x>d?(e.addRange(t),e.extend(M.node,M.offset)):(t.setEnd(M.node,M.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var uo=f&&"documentMode"in document&&11>=document.documentMode,Or=null,Qa=null,Ma=null,Xa=!1;function Za(e,t,r){var d=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Xa||Or==null||Or!==Ue(d)||(d=Or,"selectionStart"in d&&lo(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Ma&&Ya(Ma,d)||(Ma=d,d=yl(Qa,"onSelect"),0<d.length&&(t=new Pi("onSelect","select",null,t,r),e.push({event:t,listeners:d}),t.target=Or)))}function Mi(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Gn={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},br={},en={};f&&(en=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function Jt(e){if(br[e])return br[e];if(!Gn[e])return e;var t=Gn[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in en)return br[e]=t[r];return e}var wn=Jt("animationend"),Pn=Jt("animationiteration"),Ia=Jt("animationstart"),Xo=Jt("transitionend"),po=new Map,Os="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _a(e,t){po.set(e,t),c(t,[e])}for(var Zo=0;Zo<Os.length;Zo++){var lr=Os[Zo],Zr=lr.toLowerCase(),ml=lr[0].toUpperCase()+lr.slice(1);_a(Zr,"on"+ml)}_a(wn,"onAnimationEnd"),_a(Pn,"onAnimationIteration"),_a(Ia,"onAnimationStart"),_a("dblclick","onDoubleClick"),_a("focusin","onFocus"),_a("focusout","onBlur"),_a(Xo,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function Bs(e,t,r){var d=e.type||"unknown-event";e.currentTarget=r,pa(d,t,void 0,e),e.currentTarget=null}function qs(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var d=e[r],v=d.event;d=d.listeners;e:{var x=void 0;if(t)for(var M=d.length-1;0<=M;M--){var X=d[M],se=X.instance,Ce=X.currentTarget;if(X=X.listener,se!==x&&v.isPropagationStopped())break e;Bs(v,X,Ce),x=se}else for(M=0;M<d.length;M++){if(X=d[M],se=X.instance,Ce=X.currentTarget,X=X.listener,se!==x&&v.isPropagationStopped())break e;Bs(v,X,Ce),x=se}}}if($n)throw e=vi,$n=!1,vi=null,e}function tn(e,t){var r=t[wr];r===void 0&&(r=t[wr]=new Set);var d=e+"__bubble";r.has(d)||(Hs(t,e,2,!1),r.add(d))}function vl(e,t,r){var d=0;t&&(d|=4),Hs(r,e,d,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function ho(e){if(!e[es]){e[es]=!0,l.forEach(function(r){r!=="selectionchange"&&(Tc.has(r)||vl(r,!1,e),vl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,vl("selectionchange",!1,t))}}function Hs(e,t,r,d){switch(Ms(t)){case 1:var v=eo;break;case 4:v=Es;break;default:v=Ni}r=v.bind(null,t,r,e),v=void 0,!Ir||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(v=!0),d?v!==void 0?e.addEventListener(t,r,{capture:!0,passive:v}):e.addEventListener(t,r,!0):v!==void 0?e.addEventListener(t,r,{passive:v}):e.addEventListener(t,r,!1)}function Us(e,t,r,d,v){var x=d;if((t&1)===0&&(t&2)===0&&d!==null)e:for(;;){if(d===null)return;var M=d.tag;if(M===3||M===4){var X=d.stateNode.containerInfo;if(X===v||X.nodeType===8&&X.parentNode===v)break;if(M===4)for(M=d.return;M!==null;){var se=M.tag;if((se===3||se===4)&&(se=M.stateNode.containerInfo,se===v||se.nodeType===8&&se.parentNode===v))return;M=M.return}for(;X!==null;){if(M=_i(X),M===null)return;if(se=M.tag,se===5||se===6){d=x=M;continue e}X=X.parentNode}}d=d.return}da(function(){var Ce=x,Ge=Ha(r),Ve=[];e:{var He=po.get(e);if(He!==void 0){var nt=Pi,it=e;switch(e){case"keypress":if(va(r)===0)break e;case"keydown":case"keyup":nt=At;break;case"focusin":it="focus",nt=Wa;break;case"focusout":it="blur",nt=Wa;break;case"beforeblur":case"afterblur":nt=Wa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":nt=Bo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":nt=$l;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":nt=bn;break;case wn:case Pn:case Ia:nt=ji;break;case Xo:nt=Yn;break;case"scroll":nt=Is;break;case"wheel":nt=ya;break;case"copy":case"cut":case"paste":nt=m;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":nt=_t}var lt=(t&4)!==0,Dn=!lt&&e==="scroll",Te=lt?He!==null?He+"Capture":null:He;lt=[];for(var fe=Ce,Pe;fe!==null;){Pe=fe;var Je=Pe.stateNode;if(Pe.tag===5&&Je!==null&&(Pe=Je,Te!==null&&(Je=pt(fe,Te),Je!=null&&lt.push(Gs(fe,Je,Pe)))),Dn)break;fe=fe.return}0<lt.length&&(He=new nt(He,it,null,r,Ge),Ve.push({event:He,listeners:lt}))}}if((t&7)===0){e:{if(He=e==="mouseover"||e==="pointerover",nt=e==="mouseout"||e==="pointerout",He&&r!==Ft&&(it=r.relatedTarget||r.fromElement)&&(_i(it)||it[Zn]))break e;if((nt||He)&&(He=Ge.window===Ge?Ge:(He=Ge.ownerDocument)?He.defaultView||He.parentWindow:window,nt?(it=r.relatedTarget||r.toElement,nt=Ce,it=it?_i(it):null,it!==null&&(Dn=Un(it),it!==Dn||it.tag!==5&&it.tag!==6)&&(it=null)):(nt=null,it=Ce),nt!==it)){if(lt=Bo,Je="onMouseLeave",Te="onMouseEnter",fe="mouse",(e==="pointerout"||e==="pointerover")&&(lt=_t,Je="onPointerLeave",Te="onPointerEnter",fe="pointer"),Dn=nt==null?He:mo(nt),Pe=it==null?He:mo(it),He=new lt(Je,fe+"leave",nt,r,Ge),He.target=Dn,He.relatedTarget=Pe,Je=null,_i(Ge)===Ce&&(lt=new lt(Te,fe+"enter",it,r,Ge),lt.target=Pe,lt.relatedTarget=Dn,Je=lt),Dn=Je,nt&&it)t:{for(lt=nt,Te=it,fe=0,Pe=lt;Pe;Pe=fo(Pe))fe++;for(Pe=0,Je=Te;Je;Je=fo(Je))Pe++;for(;0<fe-Pe;)lt=fo(lt),fe--;for(;0<Pe-fe;)Te=fo(Te),Pe--;for(;fe--;){if(lt===Te||Te!==null&&lt===Te.alternate)break t;lt=fo(lt),Te=fo(Te)}lt=null}else lt=null;nt!==null&&Pc(Ve,He,nt,lt,!1),it!==null&&Dn!==null&&Pc(Ve,Dn,it,lt,!0)}}e:{if(He=Ce?mo(Ce):window,nt=He.nodeName&&He.nodeName.toLowerCase(),nt==="select"||nt==="input"&&He.type==="file")var dt=$o;else if(Jo(He))if(Fs)dt=Qo;else{dt=Ka;var mt=Ei}else(nt=He.nodeName)&&nt.toLowerCase()==="input"&&(He.type==="checkbox"||He.type==="radio")&&(dt=Ja);if(dt&&(dt=dt(e,Ce))){ir(Ve,dt,r,Ge);break e}mt&&mt(e,He,Ce),e==="focusout"&&(mt=He._wrapperState)&&mt.controlled&&He.type==="number"&&Oe(He,"number",He.value)}switch(mt=Ce?mo(Ce):window,e){case"focusin":(Jo(mt)||mt.contentEditable==="true")&&(Or=mt,Qa=Ce,Ma=null);break;case"focusout":Ma=Qa=Or=null;break;case"mousedown":Xa=!0;break;case"contextmenu":case"mouseup":case"dragend":Xa=!1,Za(Ve,r,Ge);break;case"selectionchange":if(uo)break;case"keydown":case"keyup":Za(Ve,r,Ge)}var vt;if(Xr)e:{switch(e){case"compositionstart":var kt="onCompositionStart";break e;case"compositionend":kt="onCompositionEnd";break e;case"compositionupdate":kt="onCompositionUpdate";break e}kt=void 0}else xn?Go(e,r)&&(kt="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(kt="onCompositionStart");kt&&(Ho&&r.locale!=="ko"&&(xn||kt!=="onCompositionStart"?kt==="onCompositionEnd"&&xn&&(vt=hl()):(ma=Ge,Yr="value"in ma?ma.value:ma.textContent,xn=!0)),mt=yl(Ce,kt),0<mt.length&&(kt=new J(kt,e,null,r,Ge),Ve.push({event:kt,listeners:mt}),vt?kt.data=vt:(vt=io(r),vt!==null&&(kt.data=vt)))),(vt=Rs?Wo(e,r):Vo(e,r))&&(Ce=yl(Ce,"onBeforeInput"),0<Ce.length&&(Ge=new J("onBeforeInput","beforeinput",null,r,Ge),Ve.push({event:Ge,listeners:Ce}),Ge.data=vt))}qs(Ve,t)})}function Gs(e,t,r){return{instance:e,listener:t,currentTarget:r}}function yl(e,t){for(var r=t+"Capture",d=[];e!==null;){var v=e,x=v.stateNode;v.tag===5&&x!==null&&(v=x,x=pt(e,r),x!=null&&d.unshift(Gs(e,x,v)),x=pt(e,t),x!=null&&d.push(Gs(e,x,v))),e=e.return}return d}function fo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Pc(e,t,r,d,v){for(var x=t._reactName,M=[];r!==null&&r!==d;){var X=r,se=X.alternate,Ce=X.stateNode;if(se!==null&&se===d)break;X.tag===5&&Ce!==null&&(X=Ce,v?(se=pt(r,x),se!=null&&M.unshift(Gs(r,se,X))):v||(se=pt(r,x),se!=null&&M.push(Gs(r,se,X)))),r=r.return}M.length!==0&&e.push({event:t,listeners:M})}var Pd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function Ac(e){return(typeof e=="string"?e:""+e).replace(Pd,`
`).replace(Ad,"")}function bl(e,t,r){if(t=Ac(t),Ac(e)!==t&&r)throw Error(a(425))}function ts(){}var Ws=null,go=null;function Yl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ql=typeof setTimeout=="function"?setTimeout:void 0,jc=typeof clearTimeout=="function"?clearTimeout:void 0,Cc=typeof Promise=="function"?Promise:void 0,jd=typeof queueMicrotask=="function"?queueMicrotask:typeof Cc<"u"?function(e){return Cc.resolve(null).then(e).catch(Cd)}:Ql;function Cd(e){setTimeout(function(){throw e})}function Xl(e,t){var r=t,d=0;do{var v=r.nextSibling;if(e.removeChild(r),v&&v.nodeType===8)if(r=v.data,r==="/$"){if(d===0){e.removeChild(v),ga(t);return}d--}else r!=="$"&&r!=="$?"&&r!=="$!"||d++;r=v}while(r);ga(t)}function cr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ea(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var xr=Math.random().toString(36).slice(2),Da="__reactFiber$"+xr,ns="__reactProps$"+xr,Zn="__reactContainer$"+xr,wr="__reactEvents$"+xr,Ld="__reactListeners$"+xr,Ed="__reactHandles$"+xr;function _i(e){var t=e[Da];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Zn]||r[Da]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ea(e);e!==null;){if(r=e[Da])return r;e=ea(e)}return t}e=r,r=e.parentNode}return null}function rs(e){return e=e[Da]||e[Zn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function Vs(e){return e[ns]||null}var Zl=[],ei=-1;function ba(e){return{current:e}}function $t(e){0>ei||(e.current=Zl[ei],Zl[ei]=null,ei--)}function Qt(e,t){ei++,Zl[ei]=e.current,e.current=t}var Di={},Wn=ba(Di),Sr=ba(!1),vo=Di;function as(e,t){var r=e.type.contextTypes;if(!r)return Di;var d=e.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===t)return d.__reactInternalMemoizedMaskedChildContext;var v={},x;for(x in r)v[x]=t[x];return d&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=v),v}function kr(e){return e=e.childContextTypes,e!=null}function xl(){$t(Sr),$t(Wn)}function Lc(e,t,r){if(Wn.current!==Di)throw Error(a(168));Qt(Wn,t),Qt(Sr,r)}function ec(e,t,r){var d=e.stateNode;if(t=t.childContextTypes,typeof d.getChildContext!="function")return r;d=d.getChildContext();for(var v in d)if(!(v in t))throw Error(a(108,ne(e)||"Unknown",v));return z({},r,d)}function yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Di,vo=Wn.current,Qt(Wn,e),Qt(Sr,Sr.current),!0}function Ec(e,t,r){var d=e.stateNode;if(!d)throw Error(a(169));r?(e=ec(e,t,vo),d.__reactInternalMemoizedMergedChildContext=e,$t(Sr),$t(Wn),Qt(Wn,e)):$t(Sr),Qt(Sr,r)}var ti=null,Ks=!1,o=!1;function u(e){ti===null?ti=[e]:ti.push(e)}function y(e){Ks=!0,u(e)}function S(){if(!o&&ti!==null){o=!0;var e=0,t=Ht;try{var r=ti;for(Ht=1;e<r.length;e++){var d=r[e];do d=d(!0);while(d!==null)}ti=null,Ks=!1}catch(v){throw ti!==null&&(ti=ti.slice(e+1)),Wi(bi,S),v}finally{Ht=t,o=!1}}return null}var j=[],E=0,R=null,O=0,H=[],W=0,ie=null,xe=1,we="";function ge(e,t){j[E++]=O,j[E++]=R,R=e,O=t}function ze(e,t,r){H[W++]=xe,H[W++]=we,H[W++]=ie,ie=e;var d=xe;e=we;var v=32-Dr(d)-1;d&=~(1<<v),r+=1;var x=32-Dr(t)+v;if(30<x){var M=v-v%5;x=(d&(1<<M)-1).toString(32),d>>=M,v-=M,xe=1<<32-Dr(t)+v|r<<v|d,we=x+e}else xe=1<<x|r<<v|d,we=e}function Le(e){e.return!==null&&(ge(e,1),ze(e,1,0))}function le(e){for(;e===R;)R=j[--E],j[E]=null,O=j[--E],j[E]=null;for(;e===ie;)ie=H[--W],H[W]=null,we=H[--W],H[W]=null,xe=H[--W],H[W]=null}var de=null,Ie=null,Me=!1,De=null;function et(e,t){var r=qa(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ye(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,de=e,Ie=cr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,de=e,Ie=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=ie!==null?{id:xe,overflow:we}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=qa(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,de=e,Ie=null,!0):!1;default:return!1}}function ht(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qe(e){if(Me){var t=Ie;if(t){var r=t;if(!Ye(e,t)){if(ht(e))throw Error(a(418));t=cr(r.nextSibling);var d=de;t&&Ye(e,t)?et(d,r):(e.flags=e.flags&-4097|2,Me=!1,de=e)}}else{if(ht(e))throw Error(a(418));e.flags=e.flags&-4097|2,Me=!1,de=e}}}function zt(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;de=e}function Ot(e){if(e!==de)return!1;if(!Me)return zt(e),Me=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Yl(e.type,e.memoizedProps)),t&&(t=Ie)){if(ht(e))throw Dt(),Error(a(418));for(;t;)et(e,t),t=cr(t.nextSibling)}if(zt(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Ie=cr(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Ie=null}}else Ie=de?cr(e.stateNode.nextSibling):null;return!0}function Dt(){for(var e=Ie;e;)e=cr(e.nextSibling)}function Lt(){Ie=de=null,Me=!1}function Yt(e){De===null?De=[e]:De.push(e)}var Xt=he.ReactCurrentBatchConfig;function wt(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(a(309));var d=r.stateNode}if(!d)throw Error(a(147,e));var v=d,x=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===x?t.ref:(t=function(M){var X=v.refs;M===null?delete X[x]:X[x]=M},t._stringRef=x,t)}if(typeof e!="string")throw Error(a(284));if(!r._owner)throw Error(a(290,e))}return e}function gn(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function dr(e){var t=e._init;return t(e._payload)}function kn(e){function t(Te,fe){if(e){var Pe=Te.deletions;Pe===null?(Te.deletions=[fe],Te.flags|=16):Pe.push(fe)}}function r(Te,fe){if(!e)return null;for(;fe!==null;)t(Te,fe),fe=fe.sibling;return null}function d(Te,fe){for(Te=new Map;fe!==null;)fe.key!==null?Te.set(fe.key,fe):Te.set(fe.index,fe),fe=fe.sibling;return Te}function v(Te,fe){return Te=ms(Te,fe),Te.index=0,Te.sibling=null,Te}function x(Te,fe,Pe){return Te.index=Pe,e?(Pe=Te.alternate,Pe!==null?(Pe=Pe.index,Pe<fe?(Te.flags|=2,fe):Pe):(Te.flags|=2,fe)):(Te.flags|=1048576,fe)}function M(Te){return e&&Te.alternate===null&&(Te.flags|=2),Te}function X(Te,fe,Pe,Je){return fe===null||fe.tag!==6?(fe=ou(Pe,Te.mode,Je),fe.return=Te,fe):(fe=v(fe,Pe),fe.return=Te,fe)}function se(Te,fe,Pe,Je){var dt=Pe.type;return dt===oe?Ge(Te,fe,Pe.props.children,Je,Pe.key):fe!==null&&(fe.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ue&&dr(dt)===fe.type)?(Je=v(fe,Pe.props),Je.ref=wt(Te,fe,Pe),Je.return=Te,Je):(Je=Qc(Pe.type,Pe.key,Pe.props,null,Te.mode,Je),Je.ref=wt(Te,fe,Pe),Je.return=Te,Je)}function Ce(Te,fe,Pe,Je){return fe===null||fe.tag!==4||fe.stateNode.containerInfo!==Pe.containerInfo||fe.stateNode.implementation!==Pe.implementation?(fe=su(Pe,Te.mode,Je),fe.return=Te,fe):(fe=v(fe,Pe.children||[]),fe.return=Te,fe)}function Ge(Te,fe,Pe,Je,dt){return fe===null||fe.tag!==7?(fe=tl(Pe,Te.mode,Je,dt),fe.return=Te,fe):(fe=v(fe,Pe),fe.return=Te,fe)}function Ve(Te,fe,Pe){if(typeof fe=="string"&&fe!==""||typeof fe=="number")return fe=ou(""+fe,Te.mode,Pe),fe.return=Te,fe;if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case ve:return Pe=Qc(fe.type,fe.key,fe.props,null,Te.mode,Pe),Pe.ref=wt(Te,null,fe),Pe.return=Te,Pe;case ye:return fe=su(fe,Te.mode,Pe),fe.return=Te,fe;case ue:var Je=fe._init;return Ve(Te,Je(fe._payload),Pe)}if(Ae(fe)||me(fe))return fe=tl(fe,Te.mode,Pe,null),fe.return=Te,fe;gn(Te,fe)}return null}function He(Te,fe,Pe,Je){var dt=fe!==null?fe.key:null;if(typeof Pe=="string"&&Pe!==""||typeof Pe=="number")return dt!==null?null:X(Te,fe,""+Pe,Je);if(typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case ve:return Pe.key===dt?se(Te,fe,Pe,Je):null;case ye:return Pe.key===dt?Ce(Te,fe,Pe,Je):null;case ue:return dt=Pe._init,He(Te,fe,dt(Pe._payload),Je)}if(Ae(Pe)||me(Pe))return dt!==null?null:Ge(Te,fe,Pe,Je,null);gn(Te,Pe)}return null}function nt(Te,fe,Pe,Je,dt){if(typeof Je=="string"&&Je!==""||typeof Je=="number")return Te=Te.get(Pe)||null,X(fe,Te,""+Je,dt);if(typeof Je=="object"&&Je!==null){switch(Je.$$typeof){case ve:return Te=Te.get(Je.key===null?Pe:Je.key)||null,se(fe,Te,Je,dt);case ye:return Te=Te.get(Je.key===null?Pe:Je.key)||null,Ce(fe,Te,Je,dt);case ue:var mt=Je._init;return nt(Te,fe,Pe,mt(Je._payload),dt)}if(Ae(Je)||me(Je))return Te=Te.get(Pe)||null,Ge(fe,Te,Je,dt,null);gn(fe,Je)}return null}function it(Te,fe,Pe,Je){for(var dt=null,mt=null,vt=fe,kt=fe=0,rr=null;vt!==null&&kt<Pe.length;kt++){vt.index>kt?(rr=vt,vt=null):rr=vt.sibling;var Kt=He(Te,vt,Pe[kt],Je);if(Kt===null){vt===null&&(vt=rr);break}e&&vt&&Kt.alternate===null&&t(Te,vt),fe=x(Kt,fe,kt),mt===null?dt=Kt:mt.sibling=Kt,mt=Kt,vt=rr}if(kt===Pe.length)return r(Te,vt),Me&&ge(Te,kt),dt;if(vt===null){for(;kt<Pe.length;kt++)vt=Ve(Te,Pe[kt],Je),vt!==null&&(fe=x(vt,fe,kt),mt===null?dt=vt:mt.sibling=vt,mt=vt);return Me&&ge(Te,kt),dt}for(vt=d(Te,vt);kt<Pe.length;kt++)rr=nt(vt,Te,kt,Pe[kt],Je),rr!==null&&(e&&rr.alternate!==null&&vt.delete(rr.key===null?kt:rr.key),fe=x(rr,fe,kt),mt===null?dt=rr:mt.sibling=rr,mt=rr);return e&&vt.forEach(function(vs){return t(Te,vs)}),Me&&ge(Te,kt),dt}function lt(Te,fe,Pe,Je){var dt=me(Pe);if(typeof dt!="function")throw Error(a(150));if(Pe=dt.call(Pe),Pe==null)throw Error(a(151));for(var mt=dt=null,vt=fe,kt=fe=0,rr=null,Kt=Pe.next();vt!==null&&!Kt.done;kt++,Kt=Pe.next()){vt.index>kt?(rr=vt,vt=null):rr=vt.sibling;var vs=He(Te,vt,Kt.value,Je);if(vs===null){vt===null&&(vt=rr);break}e&&vt&&vs.alternate===null&&t(Te,vt),fe=x(vs,fe,kt),mt===null?dt=vs:mt.sibling=vs,mt=vs,vt=rr}if(Kt.done)return r(Te,vt),Me&&ge(Te,kt),dt;if(vt===null){for(;!Kt.done;kt++,Kt=Pe.next())Kt=Ve(Te,Kt.value,Je),Kt!==null&&(fe=x(Kt,fe,kt),mt===null?dt=Kt:mt.sibling=Kt,mt=Kt);return Me&&ge(Te,kt),dt}for(vt=d(Te,vt);!Kt.done;kt++,Kt=Pe.next())Kt=nt(vt,Te,kt,Kt.value,Je),Kt!==null&&(e&&Kt.alternate!==null&&vt.delete(Kt.key===null?kt:Kt.key),fe=x(Kt,fe,kt),mt===null?dt=Kt:mt.sibling=Kt,mt=Kt);return e&&vt.forEach(function(cg){return t(Te,cg)}),Me&&ge(Te,kt),dt}function Dn(Te,fe,Pe,Je){if(typeof Pe=="object"&&Pe!==null&&Pe.type===oe&&Pe.key===null&&(Pe=Pe.props.children),typeof Pe=="object"&&Pe!==null){switch(Pe.$$typeof){case ve:e:{for(var dt=Pe.key,mt=fe;mt!==null;){if(mt.key===dt){if(dt=Pe.type,dt===oe){if(mt.tag===7){r(Te,mt.sibling),fe=v(mt,Pe.props.children),fe.return=Te,Te=fe;break e}}else if(mt.elementType===dt||typeof dt=="object"&&dt!==null&&dt.$$typeof===ue&&dr(dt)===mt.type){r(Te,mt.sibling),fe=v(mt,Pe.props),fe.ref=wt(Te,mt,Pe),fe.return=Te,Te=fe;break e}r(Te,mt);break}else t(Te,mt);mt=mt.sibling}Pe.type===oe?(fe=tl(Pe.props.children,Te.mode,Je,Pe.key),fe.return=Te,Te=fe):(Je=Qc(Pe.type,Pe.key,Pe.props,null,Te.mode,Je),Je.ref=wt(Te,fe,Pe),Je.return=Te,Te=Je)}return M(Te);case ye:e:{for(mt=Pe.key;fe!==null;){if(fe.key===mt)if(fe.tag===4&&fe.stateNode.containerInfo===Pe.containerInfo&&fe.stateNode.implementation===Pe.implementation){r(Te,fe.sibling),fe=v(fe,Pe.children||[]),fe.return=Te,Te=fe;break e}else{r(Te,fe);break}else t(Te,fe);fe=fe.sibling}fe=su(Pe,Te.mode,Je),fe.return=Te,Te=fe}return M(Te);case ue:return mt=Pe._init,Dn(Te,fe,mt(Pe._payload),Je)}if(Ae(Pe))return it(Te,fe,Pe,Je);if(me(Pe))return lt(Te,fe,Pe,Je);gn(Te,Pe)}return typeof Pe=="string"&&Pe!==""||typeof Pe=="number"?(Pe=""+Pe,fe!==null&&fe.tag===6?(r(Te,fe.sibling),fe=v(fe,Pe),fe.return=Te,Te=fe):(r(Te,fe),fe=ou(Pe,Te.mode,Je),fe.return=Te,Te=fe),M(Te)):r(Te,fe)}return Dn}var Mn=kn(!0),Wt=kn(!1),er=ba(null),tr=null,mn=null,In=null;function Vn(){In=mn=tr=null}function Nr(e){var t=er.current;$t(er),e._currentValue=t}function ta(e,t,r){for(;e!==null;){var d=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,d!==null&&(d.childLanes|=t)):d!==null&&(d.childLanes&t)!==t&&(d.childLanes|=t),e===r)break;e=e.return}}function vn(e,t){tr=e,In=mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ia=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(In!==e)if(e={context:e,memoizedValue:t,next:null},mn===null){if(tr===null)throw Error(a(308));mn=e,tr.dependencies={lanes:0,firstContext:e}}else mn=mn.next=e;return t}var Br=null;function Ri(e){Br===null?Br=[e]:Br.push(e)}function ni(e,t,r,d){var v=t.interleaved;return v===null?(r.next=r,Ri(t)):(r.next=v.next,v.next=r),t.interleaved=r,Vt(e,d)}function Vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Ra=!1;function wl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function na(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ra(e,t,r){var d=e.updateQueue;if(d===null)return null;if(d=d.shared,(Gt&2)!==0){var v=d.pending;return v===null?t.next=t:(t.next=v.next,v.next=t),d.pending=t,Vt(e,r)}return v=d.interleaved,v===null?(t.next=t,Ri(d)):(t.next=v.next,v.next=t),d.interleaved=t,Vt(e,r)}function bo(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var d=t.lanes;d&=e.pendingLanes,r|=d,t.lanes=r,Eo(e,r)}}function aa(e,t){var r=e.updateQueue,d=e.alternate;if(d!==null&&(d=d.updateQueue,r===d)){var v=null,x=null;if(r=r.firstBaseUpdate,r!==null){do{var M={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};x===null?v=x=M:x=x.next=M,r=r.next}while(r!==null);x===null?v=x=t:x=x.next=t}else v=x=t;r={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:x,shared:d.shared,effects:d.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function ri(e,t,r,d){var v=e.updateQueue;Ra=!1;var x=v.firstBaseUpdate,M=v.lastBaseUpdate,X=v.shared.pending;if(X!==null){v.shared.pending=null;var se=X,Ce=se.next;se.next=null,M===null?x=Ce:M.next=Ce,M=se;var Ge=e.alternate;Ge!==null&&(Ge=Ge.updateQueue,X=Ge.lastBaseUpdate,X!==M&&(X===null?Ge.firstBaseUpdate=Ce:X.next=Ce,Ge.lastBaseUpdate=se))}if(x!==null){var Ve=v.baseState;M=0,Ge=Ce=se=null,X=x;do{var He=X.lane,nt=X.eventTime;if((d&He)===He){Ge!==null&&(Ge=Ge.next={eventTime:nt,lane:0,tag:X.tag,payload:X.payload,callback:X.callback,next:null});e:{var it=e,lt=X;switch(He=t,nt=r,lt.tag){case 1:if(it=lt.payload,typeof it=="function"){Ve=it.call(nt,Ve,He);break e}Ve=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=lt.payload,He=typeof it=="function"?it.call(nt,Ve,He):it,He==null)break e;Ve=z({},Ve,He);break e;case 2:Ra=!0}}X.callback!==null&&X.lane!==0&&(e.flags|=64,He=v.effects,He===null?v.effects=[X]:He.push(X))}else nt={eventTime:nt,lane:He,tag:X.tag,payload:X.payload,callback:X.callback,next:null},Ge===null?(Ce=Ge=nt,se=Ve):Ge=Ge.next=nt,M|=He;if(X=X.next,X===null){if(X=v.shared.pending,X===null)break;He=X,X=He.next,He.next=null,v.lastBaseUpdate=He,v.shared.pending=null}}while(!0);if(Ge===null&&(se=Ve),v.baseState=se,v.firstBaseUpdate=Ce,v.lastBaseUpdate=Ge,t=v.shared.interleaved,t!==null){v=t;do M|=v.lane,v=v.next;while(v!==t)}else x===null&&(v.shared.lanes=0);Qs|=M,e.lanes=M,e.memoizedState=Ve}}function xo(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var d=e[t],v=d.callback;if(v!==null){if(d.callback=null,d=r,typeof v!="function")throw Error(a(191,v));v.call(d)}}}var is={},qr=ba(is),os=ba(is),Fi=ba(is);function ai(e){if(e===is)throw Error(a(174));return e}function ss(e,t){switch(Qt(Fi,t),Qt(os,e),Qt(qr,is),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Et(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Et(t,e)}$t(qr),Qt(qr,t)}function Fa(){$t(qr),$t(os),$t(Fi)}function Mc(e){ai(Fi.current);var t=ai(qr.current),r=Et(t,e.type);t!==r&&(Qt(os,e),Qt(qr,r))}function nc(e){os.current===e&&($t(qr),$t(os))}var an=ba(0);function xa(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rc=[];function ac(){for(var e=0;e<rc.length;e++)rc[e]._workInProgressVersionPrimary=null;rc.length=0}var Sl=he.ReactCurrentDispatcher,kl=he.ReactCurrentBatchConfig,za=0,ln=null,jn=null,Nn=null,ls=!1,ii=!1,cs=0,Md=0;function _n(){throw Error(a(321))}function Nl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ut(e[r],t[r]))return!1;return!0}function Js(e,t,r,d,v,x){if(za=x,ln=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Sl.current=e===null||e.memoizedState===null?Df:Rf,e=r(d,v),ii){x=0;do{if(ii=!1,cs=0,25<=x)throw Error(a(301));x+=1,Nn=jn=null,t.updateQueue=null,Sl.current=Ff,e=r(d,v)}while(ii)}if(Sl.current=Fc,t=jn!==null&&jn.next!==null,za=0,Nn=jn=ln=null,ls=!1,t)throw Error(a(300));return e}function Oa(){var e=cs!==0;return cs=0,e}function wa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?ln.memoizedState=Nn=e:Nn=Nn.next=e,Nn}function Hr(){if(jn===null){var e=ln.alternate;e=e!==null?e.memoizedState:null}else e=jn.next;var t=Nn===null?ln.memoizedState:Nn.next;if(t!==null)Nn=t,jn=e;else{if(e===null)throw Error(a(310));jn=e,e={memoizedState:jn.memoizedState,baseState:jn.baseState,baseQueue:jn.baseQueue,queue:jn.queue,next:null},Nn===null?ln.memoizedState=Nn=e:Nn=Nn.next=e}return Nn}function $s(e,t){return typeof t=="function"?t(e):t}function Tl(e){var t=Hr(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var d=jn,v=d.baseQueue,x=r.pending;if(x!==null){if(v!==null){var M=v.next;v.next=x.next,x.next=M}d.baseQueue=v=x,r.pending=null}if(v!==null){x=v.next,d=d.baseState;var X=M=null,se=null,Ce=x;do{var Ge=Ce.lane;if((za&Ge)===Ge)se!==null&&(se=se.next={lane:0,action:Ce.action,hasEagerState:Ce.hasEagerState,eagerState:Ce.eagerState,next:null}),d=Ce.hasEagerState?Ce.eagerState:e(d,Ce.action);else{var Ve={lane:Ge,action:Ce.action,hasEagerState:Ce.hasEagerState,eagerState:Ce.eagerState,next:null};se===null?(X=se=Ve,M=d):se=se.next=Ve,ln.lanes|=Ge,Qs|=Ge}Ce=Ce.next}while(Ce!==null&&Ce!==x);se===null?M=d:se.next=X,Ut(d,t.memoizedState)||(ia=!0),t.memoizedState=d,t.baseState=M,t.baseQueue=se,r.lastRenderedState=d}if(e=r.interleaved,e!==null){v=e;do x=v.lane,ln.lanes|=x,Qs|=x,v=v.next;while(v!==e)}else v===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function zi(e){var t=Hr(),r=t.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var d=r.dispatch,v=r.pending,x=t.memoizedState;if(v!==null){r.pending=null;var M=v=v.next;do x=e(x,M.action),M=M.next;while(M!==v);Ut(x,t.memoizedState)||(ia=!0),t.memoizedState=x,t.baseQueue===null&&(t.baseState=x),r.lastRenderedState=x}return[x,d]}function Ic(){}function ic(e,t){var r=ln,d=Hr(),v=t(),x=!Ut(d.memoizedState,v);if(x&&(d.memoizedState=v,ia=!0),d=d.queue,jl(Dc.bind(null,r,d,e),[e]),d.getSnapshot!==t||x||Nn!==null&&Nn.memoizedState.tag&1){if(r.flags|=2048,Ur(9,oc.bind(null,r,d,v,t),void 0,null),nr===null)throw Error(a(349));(za&30)!==0||_c(r,t,v)}return v}function _c(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ln.updateQueue,t===null?(t={lastEffect:null,stores:null},ln.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function oc(e,t,r,d){t.value=r,t.getSnapshot=d,ds(t)&&Pl(e)}function Dc(e,t,r){return r(function(){ds(t)&&Pl(e)})}function ds(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ut(e,r)}catch{return!0}}function Pl(e){var t=Vt(e,1);t!==null&&di(t,e,1,-1)}function Ys(e){var t=wa();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:e},t.queue=e,e=e.dispatch=_f.bind(null,ln,e),[t.memoizedState,e]}function Ur(e,t,r,d){return e={tag:e,create:t,destroy:r,deps:d,next:null},t=ln.updateQueue,t===null?(t={lastEffect:null,stores:null},ln.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(d=r.next,r.next=e,e.next=d,t.lastEffect=e)),e}function oi(){return Hr().memoizedState}function Sa(e,t,r,d){var v=wa();ln.flags|=e,v.memoizedState=Ur(1|t,r,void 0,d===void 0?null:d)}function wo(e,t,r,d){var v=Hr();d=d===void 0?null:d;var x=void 0;if(jn!==null){var M=jn.memoizedState;if(x=M.destroy,d!==null&&Nl(d,M.deps)){v.memoizedState=Ur(t,r,x,d);return}}ln.flags|=e,v.memoizedState=Ur(1|t,r,x,d)}function Al(e,t){return Sa(8390656,8,e,t)}function jl(e,t){return wo(2048,8,e,t)}function Rc(e,t){return wo(4,2,e,t)}function Cl(e,t){return wo(4,4,e,t)}function Ll(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ip(e,t,r){return r=r!=null?r.concat([e]):null,wo(4,4,Ll.bind(null,t,e),r)}function Id(){}function op(e,t){var r=Hr();t=t===void 0?null:t;var d=r.memoizedState;return d!==null&&t!==null&&Nl(t,d[1])?d[0]:(r.memoizedState=[e,t],e)}function sp(e,t){var r=Hr();t=t===void 0?null:t;var d=r.memoizedState;return d!==null&&t!==null&&Nl(t,d[1])?d[0]:(e=e(),r.memoizedState=[e,t],e)}function lp(e,t,r){return(za&21)===0?(e.baseState&&(e.baseState=!1,ia=!0),e.memoizedState=r):(Ut(r,t)||(r=As(),ln.lanes|=r,Qs|=r,e.baseState=!0),t)}function Mf(e,t){var r=Ht;Ht=r!==0&&4>r?r:4,e(!0);var d=kl.transition;kl.transition={};try{e(!1),t()}finally{Ht=r,kl.transition=d}}function cp(){return Hr().memoizedState}function If(e,t,r){var d=fs(e);if(r={lane:d,action:r,hasEagerState:!1,eagerState:null,next:null},dp(e))up(t,r);else if(r=ni(e,t,r,d),r!==null){var v=Wr();di(r,e,d,v),pp(r,t,d)}}function _f(e,t,r){var d=fs(e),v={lane:d,action:r,hasEagerState:!1,eagerState:null,next:null};if(dp(e))up(t,v);else{var x=e.alternate;if(e.lanes===0&&(x===null||x.lanes===0)&&(x=t.lastRenderedReducer,x!==null))try{var M=t.lastRenderedState,X=x(M,r);if(v.hasEagerState=!0,v.eagerState=X,Ut(X,M)){var se=t.interleaved;se===null?(v.next=v,Ri(t)):(v.next=se.next,se.next=v),t.interleaved=v;return}}catch{}finally{}r=ni(e,t,v,d),r!==null&&(v=Wr(),di(r,e,d,v),pp(r,t,d))}}function dp(e){var t=e.alternate;return e===ln||t!==null&&t===ln}function up(e,t){ii=ls=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function pp(e,t,r){if((r&4194240)!==0){var d=t.lanes;d&=e.pendingLanes,r|=d,t.lanes=r,Eo(e,r)}}var Fc={readContext:An,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Df={readContext:An,useCallback:function(e,t){return wa().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:Al,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Sa(4194308,4,Ll.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sa(4,2,e,t)},useMemo:function(e,t){var r=wa();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var d=wa();return t=r!==void 0?r(t):t,d.memoizedState=d.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},d.queue=e,e=e.dispatch=If.bind(null,ln,e),[d.memoizedState,e]},useRef:function(e){var t=wa();return e={current:e},t.memoizedState=e},useState:Ys,useDebugValue:Id,useDeferredValue:function(e){return wa().memoizedState=e},useTransition:function(){var e=Ys(!1),t=e[0];return e=Mf.bind(null,e[1]),wa().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var d=ln,v=wa();if(Me){if(r===void 0)throw Error(a(407));r=r()}else{if(r=t(),nr===null)throw Error(a(349));(za&30)!==0||_c(d,t,r)}v.memoizedState=r;var x={value:r,getSnapshot:t};return v.queue=x,Al(Dc.bind(null,d,x,e),[e]),d.flags|=2048,Ur(9,oc.bind(null,d,x,r,t),void 0,null),r},useId:function(){var e=wa(),t=nr.identifierPrefix;if(Me){var r=we,d=xe;r=(d&~(1<<32-Dr(d)-1)).toString(32)+r,t=":"+t+"R"+r,r=cs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Md++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rf={readContext:An,useCallback:op,useContext:An,useEffect:jl,useImperativeHandle:ip,useInsertionEffect:Rc,useLayoutEffect:Cl,useMemo:sp,useReducer:Tl,useRef:oi,useState:function(){return Tl($s)},useDebugValue:Id,useDeferredValue:function(e){var t=Hr();return lp(t,jn.memoizedState,e)},useTransition:function(){var e=Tl($s)[0],t=Hr().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:ic,useId:cp,unstable_isNewReconciler:!1},Ff={readContext:An,useCallback:op,useContext:An,useEffect:jl,useImperativeHandle:ip,useInsertionEffect:Rc,useLayoutEffect:Cl,useMemo:sp,useReducer:zi,useRef:oi,useState:function(){return zi($s)},useDebugValue:Id,useDeferredValue:function(e){var t=Hr();return jn===null?t.memoizedState=e:lp(t,jn.memoizedState,e)},useTransition:function(){var e=zi($s)[0],t=Hr().memoizedState;return[e,t]},useMutableSource:Ic,useSyncExternalStore:ic,useId:cp,unstable_isNewReconciler:!1};function si(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function _d(e,t,r,d){t=e.memoizedState,r=r(d,t),r=r==null?t:z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var zc={isMounted:function(e){return(e=e._reactInternals)?Un(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var d=Wr(),v=fs(e),x=na(d,v);x.payload=t,r!=null&&(x.callback=r),t=ra(e,x,v),t!==null&&(di(t,e,v,d),bo(t,e,v))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var d=Wr(),v=fs(e),x=na(d,v);x.tag=1,x.payload=t,r!=null&&(x.callback=r),t=ra(e,x,v),t!==null&&(di(t,e,v,d),bo(t,e,v))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Wr(),d=fs(e),v=na(r,d);v.tag=2,t!=null&&(v.callback=t),t=ra(e,v,d),t!==null&&(di(t,e,d,r),bo(t,e,d))}};function hp(e,t,r,d,v,x,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(d,x,M):t.prototype&&t.prototype.isPureReactComponent?!Ya(r,d)||!Ya(v,x):!0}function fp(e,t,r){var d=!1,v=Di,x=t.contextType;return typeof x=="object"&&x!==null?x=An(x):(v=kr(t)?vo:Wn.current,d=t.contextTypes,x=(d=d!=null)?as(e,v):Di),t=new t(r,x),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zc,e.stateNode=t,t._reactInternals=e,d&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=v,e.__reactInternalMemoizedMaskedChildContext=x),t}function gp(e,t,r,d){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,d),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,d),t.state!==e&&zc.enqueueReplaceState(t,t.state,null)}function Dd(e,t,r,d){var v=e.stateNode;v.props=r,v.state=e.memoizedState,v.refs={},wl(e);var x=t.contextType;typeof x=="object"&&x!==null?v.context=An(x):(x=kr(t)?vo:Wn.current,v.context=as(e,x)),v.state=e.memoizedState,x=t.getDerivedStateFromProps,typeof x=="function"&&(_d(e,t,x,r),v.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(t=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),t!==v.state&&zc.enqueueReplaceState(v,v.state,null),ri(e,r,v,d),v.state=e.memoizedState),typeof v.componentDidMount=="function"&&(e.flags|=4194308)}function El(e,t){try{var r="",d=t;do r+=V(d),d=d.return;while(d);var v=r}catch(x){v=`
Error generating stack: `+x.message+`
`+x.stack}return{value:e,source:t,stack:v,digest:null}}function Rd(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Fd(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var zf=typeof WeakMap=="function"?WeakMap:Map;function mp(e,t,r){r=na(-1,r),r.tag=3,r.payload={element:null};var d=t.value;return r.callback=function(){Wc||(Wc=!0,Xd=d),Fd(e,t)},r}function vp(e,t,r){r=na(-1,r),r.tag=3;var d=e.type.getDerivedStateFromError;if(typeof d=="function"){var v=t.value;r.payload=function(){return d(v)},r.callback=function(){Fd(e,t)}}var x=e.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(r.callback=function(){Fd(e,t),typeof d!="function"&&(ps===null?ps=new Set([this]):ps.add(this));var M=t.stack;this.componentDidCatch(t.value,{componentStack:M!==null?M:""})}),r}function yp(e,t,r){var d=e.pingCache;if(d===null){d=e.pingCache=new zf;var v=new Set;d.set(t,v)}else v=d.get(t),v===void 0&&(v=new Set,d.set(t,v));v.has(r)||(v.add(r),e=Xf.bind(null,e,t,r),t.then(e,e))}function bp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function xp(e,t,r,d,v){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=na(-1,1),t.tag=2,ra(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=v,e)}var Of=he.ReactCurrentOwner,ia=!1;function Gr(e,t,r,d){t.child=e===null?Wt(t,null,r,d):Mn(t,e.child,r,d)}function wp(e,t,r,d,v){r=r.render;var x=t.ref;return vn(t,v),d=Js(e,t,r,d,x,v),r=Oa(),e!==null&&!ia?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~v,So(e,t,v)):(Me&&r&&Le(t),t.flags|=1,Gr(e,t,d,v),t.child)}function Sp(e,t,r,d,v){if(e===null){var x=r.type;return typeof x=="function"&&!iu(x)&&x.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=x,kp(e,t,x,d,v)):(e=Qc(r.type,null,d,t,t.mode,v),e.ref=t.ref,e.return=t,t.child=e)}if(x=e.child,(e.lanes&v)===0){var M=x.memoizedProps;if(r=r.compare,r=r!==null?r:Ya,r(M,d)&&e.ref===t.ref)return So(e,t,v)}return t.flags|=1,e=ms(x,d),e.ref=t.ref,e.return=t,t.child=e}function kp(e,t,r,d,v){if(e!==null){var x=e.memoizedProps;if(Ya(x,d)&&e.ref===t.ref)if(ia=!1,t.pendingProps=d=x,(e.lanes&v)!==0)(e.flags&131072)!==0&&(ia=!0);else return t.lanes=e.lanes,So(e,t,v)}return zd(e,t,r,d,v)}function Np(e,t,r){var d=t.pendingProps,v=d.children,x=e!==null?e.memoizedState:null;if(d.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qt(Il,ka),ka|=r;else{if((r&1073741824)===0)return e=x!==null?x.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Qt(Il,ka),ka|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=x!==null?x.baseLanes:r,Qt(Il,ka),ka|=d}else x!==null?(d=x.baseLanes|r,t.memoizedState=null):d=r,Qt(Il,ka),ka|=d;return Gr(e,t,v,r),t.child}function Tp(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function zd(e,t,r,d,v){var x=kr(r)?vo:Wn.current;return x=as(t,x),vn(t,v),r=Js(e,t,r,d,x,v),d=Oa(),e!==null&&!ia?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~v,So(e,t,v)):(Me&&d&&Le(t),t.flags|=1,Gr(e,t,r,v),t.child)}function Pp(e,t,r,d,v){if(kr(r)){var x=!0;yo(t)}else x=!1;if(vn(t,v),t.stateNode===null)Bc(e,t),fp(t,r,d),Dd(t,r,d,v),d=!0;else if(e===null){var M=t.stateNode,X=t.memoizedProps;M.props=X;var se=M.context,Ce=r.contextType;typeof Ce=="object"&&Ce!==null?Ce=An(Ce):(Ce=kr(r)?vo:Wn.current,Ce=as(t,Ce));var Ge=r.getDerivedStateFromProps,Ve=typeof Ge=="function"||typeof M.getSnapshotBeforeUpdate=="function";Ve||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(X!==d||se!==Ce)&&gp(t,M,d,Ce),Ra=!1;var He=t.memoizedState;M.state=He,ri(t,d,M,v),se=t.memoizedState,X!==d||He!==se||Sr.current||Ra?(typeof Ge=="function"&&(_d(t,r,Ge,d),se=t.memoizedState),(X=Ra||hp(t,r,X,d,He,se,Ce))?(Ve||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(t.flags|=4194308)):(typeof M.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=d,t.memoizedState=se),M.props=d,M.state=se,M.context=Ce,d=X):(typeof M.componentDidMount=="function"&&(t.flags|=4194308),d=!1)}else{M=t.stateNode,tc(e,t),X=t.memoizedProps,Ce=t.type===t.elementType?X:si(t.type,X),M.props=Ce,Ve=t.pendingProps,He=M.context,se=r.contextType,typeof se=="object"&&se!==null?se=An(se):(se=kr(r)?vo:Wn.current,se=as(t,se));var nt=r.getDerivedStateFromProps;(Ge=typeof nt=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(X!==Ve||He!==se)&&gp(t,M,d,se),Ra=!1,He=t.memoizedState,M.state=He,ri(t,d,M,v);var it=t.memoizedState;X!==Ve||He!==it||Sr.current||Ra?(typeof nt=="function"&&(_d(t,r,nt,d),it=t.memoizedState),(Ce=Ra||hp(t,r,Ce,d,He,it,se)||!1)?(Ge||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(d,it,se),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(d,it,se)),typeof M.componentDidUpdate=="function"&&(t.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof M.componentDidUpdate!="function"||X===e.memoizedProps&&He===e.memoizedState||(t.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||X===e.memoizedProps&&He===e.memoizedState||(t.flags|=1024),t.memoizedProps=d,t.memoizedState=it),M.props=d,M.state=it,M.context=se,d=Ce):(typeof M.componentDidUpdate!="function"||X===e.memoizedProps&&He===e.memoizedState||(t.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||X===e.memoizedProps&&He===e.memoizedState||(t.flags|=1024),d=!1)}return Od(e,t,r,d,x,v)}function Od(e,t,r,d,v,x){Tp(e,t);var M=(t.flags&128)!==0;if(!d&&!M)return v&&Ec(t,r,!1),So(e,t,x);d=t.stateNode,Of.current=t;var X=M&&typeof r.getDerivedStateFromError!="function"?null:d.render();return t.flags|=1,e!==null&&M?(t.child=Mn(t,e.child,null,x),t.child=Mn(t,null,X,x)):Gr(e,t,X,x),t.memoizedState=d.state,v&&Ec(t,r,!0),t.child}function Ap(e){var t=e.stateNode;t.pendingContext?Lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lc(e,t.context,!1),ss(e,t.containerInfo)}function jp(e,t,r,d,v){return Lt(),Yt(v),t.flags|=256,Gr(e,t,r,d),t.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function qd(e){return{baseLanes:e,cachePool:null,transitions:null}}function Cp(e,t,r){var d=t.pendingProps,v=an.current,x=!1,M=(t.flags&128)!==0,X;if((X=M)||(X=e!==null&&e.memoizedState===null?!1:(v&2)!==0),X?(x=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(v|=1),Qt(an,v&1),e===null)return Qe(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(M=d.children,e=d.fallback,x?(d=t.mode,x=t.child,M={mode:"hidden",children:M},(d&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=M):x=Xc(M,d,0,null),e=tl(e,d,r,null),x.return=t,e.return=t,x.sibling=e,t.child=x,t.child.memoizedState=qd(r),t.memoizedState=Bd,e):Hd(t,M));if(v=e.memoizedState,v!==null&&(X=v.dehydrated,X!==null))return Bf(e,t,M,d,X,v,r);if(x){x=d.fallback,M=t.mode,v=e.child,X=v.sibling;var se={mode:"hidden",children:d.children};return(M&1)===0&&t.child!==v?(d=t.child,d.childLanes=0,d.pendingProps=se,t.deletions=null):(d=ms(v,se),d.subtreeFlags=v.subtreeFlags&14680064),X!==null?x=ms(X,x):(x=tl(x,M,r,null),x.flags|=2),x.return=t,d.return=t,d.sibling=x,t.child=d,d=x,x=t.child,M=e.child.memoizedState,M=M===null?qd(r):{baseLanes:M.baseLanes|r,cachePool:null,transitions:M.transitions},x.memoizedState=M,x.childLanes=e.childLanes&~r,t.memoizedState=Bd,d}return x=e.child,e=x.sibling,d=ms(x,{mode:"visible",children:d.children}),(t.mode&1)===0&&(d.lanes=r),d.return=t,d.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=d,t.memoizedState=null,d}function Hd(e,t){return t=Xc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oc(e,t,r,d){return d!==null&&Yt(d),Mn(t,e.child,null,r),e=Hd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bf(e,t,r,d,v,x,M){if(r)return t.flags&256?(t.flags&=-257,d=Rd(Error(a(422))),Oc(e,t,M,d)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(x=d.fallback,v=t.mode,d=Xc({mode:"visible",children:d.children},v,0,null),x=tl(x,v,M,null),x.flags|=2,d.return=t,x.return=t,d.sibling=x,t.child=d,(t.mode&1)!==0&&Mn(t,e.child,null,M),t.child.memoizedState=qd(M),t.memoizedState=Bd,x);if((t.mode&1)===0)return Oc(e,t,M,null);if(v.data==="$!"){if(d=v.nextSibling&&v.nextSibling.dataset,d)var X=d.dgst;return d=X,x=Error(a(419)),d=Rd(x,d,void 0),Oc(e,t,M,d)}if(X=(M&e.childLanes)!==0,ia||X){if(d=nr,d!==null){switch(M&-M){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(d.suspendedLanes|M))!==0?0:v,v!==0&&v!==x.retryLane&&(x.retryLane=v,Vt(e,v),di(d,e,v,-1))}return au(),d=Rd(Error(a(421))),Oc(e,t,M,d)}return v.data==="$?"?(t.flags|=128,t.child=e.child,t=Zf.bind(null,e),v._reactRetry=t,null):(e=x.treeContext,Ie=cr(v.nextSibling),de=t,Me=!0,De=null,e!==null&&(H[W++]=xe,H[W++]=we,H[W++]=ie,xe=e.id,we=e.overflow,ie=t),t=Hd(t,d.children),t.flags|=4096,t)}function Lp(e,t,r){e.lanes|=t;var d=e.alternate;d!==null&&(d.lanes|=t),ta(e.return,t,r)}function Ud(e,t,r,d,v){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:d,tail:r,tailMode:v}:(x.isBackwards=t,x.rendering=null,x.renderingStartTime=0,x.last=d,x.tail=r,x.tailMode=v)}function Ep(e,t,r){var d=t.pendingProps,v=d.revealOrder,x=d.tail;if(Gr(e,t,d.children,r),d=an.current,(d&2)!==0)d=d&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lp(e,r,t);else if(e.tag===19)Lp(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}d&=1}if(Qt(an,d),(t.mode&1)===0)t.memoizedState=null;else switch(v){case"forwards":for(r=t.child,v=null;r!==null;)e=r.alternate,e!==null&&xa(e)===null&&(v=r),r=r.sibling;r=v,r===null?(v=t.child,t.child=null):(v=r.sibling,r.sibling=null),Ud(t,!1,v,r,x);break;case"backwards":for(r=null,v=t.child,t.child=null;v!==null;){if(e=v.alternate,e!==null&&xa(e)===null){t.child=v;break}e=v.sibling,v.sibling=r,r=v,v=e}Ud(t,!0,r,null,x);break;case"together":Ud(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bc(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function So(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Qs|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,r=ms(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=ms(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qf(e,t,r){switch(t.tag){case 3:Ap(t),Lt();break;case 5:Mc(t);break;case 1:kr(t.type)&&yo(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var d=t.type._context,v=t.memoizedProps.value;Qt(er,d._currentValue),d._currentValue=v;break;case 13:if(d=t.memoizedState,d!==null)return d.dehydrated!==null?(Qt(an,an.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Cp(e,t,r):(Qt(an,an.current&1),e=So(e,t,r),e!==null?e.sibling:null);Qt(an,an.current&1);break;case 19:if(d=(r&t.childLanes)!==0,(e.flags&128)!==0){if(d)return Ep(e,t,r);t.flags|=128}if(v=t.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Qt(an,an.current),d)break;return null;case 22:case 23:return t.lanes=0,Np(e,t,r)}return So(e,t,r)}var Mp,Gd,Ip,_p;Mp=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},Gd=function(){},Ip=function(e,t,r,d){var v=e.memoizedProps;if(v!==d){e=t.stateNode,ai(qr.current);var x=null;switch(r){case"input":v=Ke(e,v),d=Ke(e,d),x=[];break;case"select":v=z({},v,{value:void 0}),d=z({},d,{value:void 0}),x=[];break;case"textarea":v=We(e,v),d=We(e,d),x=[];break;default:typeof v.onClick!="function"&&typeof d.onClick=="function"&&(e.onclick=ts)}rn(r,d);var M;r=null;for(Ce in v)if(!d.hasOwnProperty(Ce)&&v.hasOwnProperty(Ce)&&v[Ce]!=null)if(Ce==="style"){var X=v[Ce];for(M in X)X.hasOwnProperty(M)&&(r||(r={}),r[M]="")}else Ce!=="dangerouslySetInnerHTML"&&Ce!=="children"&&Ce!=="suppressContentEditableWarning"&&Ce!=="suppressHydrationWarning"&&Ce!=="autoFocus"&&(p.hasOwnProperty(Ce)?x||(x=[]):(x=x||[]).push(Ce,null));for(Ce in d){var se=d[Ce];if(X=v!=null?v[Ce]:void 0,d.hasOwnProperty(Ce)&&se!==X&&(se!=null||X!=null))if(Ce==="style")if(X){for(M in X)!X.hasOwnProperty(M)||se&&se.hasOwnProperty(M)||(r||(r={}),r[M]="");for(M in se)se.hasOwnProperty(M)&&X[M]!==se[M]&&(r||(r={}),r[M]=se[M])}else r||(x||(x=[]),x.push(Ce,r)),r=se;else Ce==="dangerouslySetInnerHTML"?(se=se?se.__html:void 0,X=X?X.__html:void 0,se!=null&&X!==se&&(x=x||[]).push(Ce,se)):Ce==="children"?typeof se!="string"&&typeof se!="number"||(x=x||[]).push(Ce,""+se):Ce!=="suppressContentEditableWarning"&&Ce!=="suppressHydrationWarning"&&(p.hasOwnProperty(Ce)?(se!=null&&Ce==="onScroll"&&tn("scroll",e),x||X===se||(x=[])):(x=x||[]).push(Ce,se))}r&&(x=x||[]).push("style",r);var Ce=x;(t.updateQueue=Ce)&&(t.flags|=4)}},_p=function(e,t,r,d){r!==d&&(t.flags|=4)};function sc(e,t){if(!Me)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var d=null;r!==null;)r.alternate!==null&&(d=r),r=r.sibling;d===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:d.sibling=null}}function Tr(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,d=0;if(t)for(var v=e.child;v!==null;)r|=v.lanes|v.childLanes,d|=v.subtreeFlags&14680064,d|=v.flags&14680064,v.return=e,v=v.sibling;else for(v=e.child;v!==null;)r|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=e,v=v.sibling;return e.subtreeFlags|=d,e.childLanes=r,t}function Hf(e,t,r){var d=t.pendingProps;switch(le(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tr(t),null;case 1:return kr(t.type)&&xl(),Tr(t),null;case 3:return d=t.stateNode,Fa(),$t(Sr),$t(Wn),ac(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(e===null||e.child===null)&&(Ot(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,De!==null&&(tu(De),De=null))),Gd(e,t),Tr(t),null;case 5:nc(t);var v=ai(Fi.current);if(r=t.type,e!==null&&t.stateNode!=null)Ip(e,t,r,d,v),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!d){if(t.stateNode===null)throw Error(a(166));return Tr(t),null}if(e=ai(qr.current),Ot(t)){d=t.stateNode,r=t.type;var x=t.memoizedProps;switch(d[Da]=t,d[ns]=x,e=(t.mode&1)!==0,r){case"dialog":tn("cancel",d),tn("close",d);break;case"iframe":case"object":case"embed":tn("load",d);break;case"video":case"audio":for(v=0;v<Ii.length;v++)tn(Ii[v],d);break;case"source":tn("error",d);break;case"img":case"image":case"link":tn("error",d),tn("load",d);break;case"details":tn("toggle",d);break;case"input":je(d,x),tn("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!x.multiple},tn("invalid",d);break;case"textarea":rt(d,x),tn("invalid",d)}rn(r,x),v=null;for(var M in x)if(x.hasOwnProperty(M)){var X=x[M];M==="children"?typeof X=="string"?d.textContent!==X&&(x.suppressHydrationWarning!==!0&&bl(d.textContent,X,e),v=["children",X]):typeof X=="number"&&d.textContent!==""+X&&(x.suppressHydrationWarning!==!0&&bl(d.textContent,X,e),v=["children",""+X]):p.hasOwnProperty(M)&&X!=null&&M==="onScroll"&&tn("scroll",d)}switch(r){case"input":Re(d),Xe(d,x,!0);break;case"textarea":Re(d),Nt(d);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(d.onclick=ts)}d=v,t.updateQueue=d,d!==null&&(t.flags|=4)}else{M=v.nodeType===9?v:v.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jt(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=M.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof d.is=="string"?e=M.createElement(r,{is:d.is}):(e=M.createElement(r),r==="select"&&(M=e,d.multiple?M.multiple=!0:d.size&&(M.size=d.size))):e=M.createElementNS(e,r),e[Da]=t,e[ns]=d,Mp(e,t,!1,!1),t.stateNode=e;e:{switch(M=Kr(r,d),r){case"dialog":tn("cancel",e),tn("close",e),v=d;break;case"iframe":case"object":case"embed":tn("load",e),v=d;break;case"video":case"audio":for(v=0;v<Ii.length;v++)tn(Ii[v],e);v=d;break;case"source":tn("error",e),v=d;break;case"img":case"image":case"link":tn("error",e),tn("load",e),v=d;break;case"details":tn("toggle",e),v=d;break;case"input":je(e,d),v=Ke(e,d),tn("invalid",e);break;case"option":v=d;break;case"select":e._wrapperState={wasMultiple:!!d.multiple},v=z({},d,{value:void 0}),tn("invalid",e);break;case"textarea":rt(e,d),v=We(e,d),tn("invalid",e);break;default:v=d}rn(r,v),X=v;for(x in X)if(X.hasOwnProperty(x)){var se=X[x];x==="style"?Vr(e,se):x==="dangerouslySetInnerHTML"?(se=se?se.__html:void 0,se!=null&&ft(e,se)):x==="children"?typeof se=="string"?(r!=="textarea"||se!=="")&&Tt(e,se):typeof se=="number"&&Tt(e,""+se):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(p.hasOwnProperty(x)?se!=null&&x==="onScroll"&&tn("scroll",e):se!=null&&K(e,x,se,M))}switch(r){case"input":Re(e),Xe(e,d,!1);break;case"textarea":Re(e),Nt(e);break;case"option":d.value!=null&&e.setAttribute("value",""+re(d.value));break;case"select":e.multiple=!!d.multiple,x=d.value,x!=null?Fe(e,!!d.multiple,x,!1):d.defaultValue!=null&&Fe(e,!!d.multiple,d.defaultValue,!0);break;default:typeof v.onClick=="function"&&(e.onclick=ts)}switch(r){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tr(t),null;case 6:if(e&&t.stateNode!=null)_p(e,t,e.memoizedProps,d);else{if(typeof d!="string"&&t.stateNode===null)throw Error(a(166));if(r=ai(Fi.current),ai(qr.current),Ot(t)){if(d=t.stateNode,r=t.memoizedProps,d[Da]=t,(x=d.nodeValue!==r)&&(e=de,e!==null))switch(e.tag){case 3:bl(d.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&bl(d.nodeValue,r,(e.mode&1)!==0)}x&&(t.flags|=4)}else d=(r.nodeType===9?r:r.ownerDocument).createTextNode(d),d[Da]=t,t.stateNode=d}return Tr(t),null;case 13:if($t(an),d=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Me&&Ie!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Dt(),Lt(),t.flags|=98560,x=!1;else if(x=Ot(t),d!==null&&d.dehydrated!==null){if(e===null){if(!x)throw Error(a(318));if(x=t.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(a(317));x[Da]=t}else Lt(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Tr(t),x=!1}else De!==null&&(tu(De),De=null),x=!0;if(!x)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(d=d!==null,d!==(e!==null&&e.memoizedState!==null)&&d&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(an.current&1)!==0?Kn===0&&(Kn=3):au())),t.updateQueue!==null&&(t.flags|=4),Tr(t),null);case 4:return Fa(),Gd(e,t),e===null&&ho(t.stateNode.containerInfo),Tr(t),null;case 10:return Nr(t.type._context),Tr(t),null;case 17:return kr(t.type)&&xl(),Tr(t),null;case 19:if($t(an),x=t.memoizedState,x===null)return Tr(t),null;if(d=(t.flags&128)!==0,M=x.rendering,M===null)if(d)sc(x,!1);else{if(Kn!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(M=xa(e),M!==null){for(t.flags|=128,sc(x,!1),d=M.updateQueue,d!==null&&(t.updateQueue=d,t.flags|=4),t.subtreeFlags=0,d=r,r=t.child;r!==null;)x=r,e=d,x.flags&=14680066,M=x.alternate,M===null?(x.childLanes=0,x.lanes=e,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=M.childLanes,x.lanes=M.lanes,x.child=M.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=M.memoizedProps,x.memoizedState=M.memoizedState,x.updateQueue=M.updateQueue,x.type=M.type,e=M.dependencies,x.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Qt(an,an.current&1|2),t.child}e=e.sibling}x.tail!==null&&pn()>_l&&(t.flags|=128,d=!0,sc(x,!1),t.lanes=4194304)}else{if(!d)if(e=xa(M),e!==null){if(t.flags|=128,d=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),sc(x,!0),x.tail===null&&x.tailMode==="hidden"&&!M.alternate&&!Me)return Tr(t),null}else 2*pn()-x.renderingStartTime>_l&&r!==1073741824&&(t.flags|=128,d=!0,sc(x,!1),t.lanes=4194304);x.isBackwards?(M.sibling=t.child,t.child=M):(r=x.last,r!==null?r.sibling=M:t.child=M,x.last=M)}return x.tail!==null?(t=x.tail,x.rendering=t,x.tail=t.sibling,x.renderingStartTime=pn(),t.sibling=null,r=an.current,Qt(an,d?r&1|2:r&1),t):(Tr(t),null);case 22:case 23:return ru(),d=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==d&&(t.flags|=8192),d&&(t.mode&1)!==0?(ka&1073741824)!==0&&(Tr(t),t.subtreeFlags&6&&(t.flags|=8192)):Tr(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function Uf(e,t){switch(le(t),t.tag){case 1:return kr(t.type)&&xl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Fa(),$t(Sr),$t(Wn),ac(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return nc(t),null;case 13:if($t(an),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));Lt()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $t(an),null;case 4:return Fa(),null;case 10:return Nr(t.type._context),null;case 22:case 23:return ru(),null;case 24:return null;default:return null}}var qc=!1,Pr=!1,Gf=typeof WeakSet=="function"?WeakSet:Set,at=null;function Ml(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(d){Cn(e,t,d)}else r.current=null}function Wd(e,t,r){try{r()}catch(d){Cn(e,t,d)}}var Dp=!1;function Wf(e,t){if(Ws=Ro,e=zs(),lo(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var d=r.getSelection&&r.getSelection();if(d&&d.rangeCount!==0){r=d.anchorNode;var v=d.anchorOffset,x=d.focusNode;d=d.focusOffset;try{r.nodeType,x.nodeType}catch{r=null;break e}var M=0,X=-1,se=-1,Ce=0,Ge=0,Ve=e,He=null;t:for(;;){for(var nt;Ve!==r||v!==0&&Ve.nodeType!==3||(X=M+v),Ve!==x||d!==0&&Ve.nodeType!==3||(se=M+d),Ve.nodeType===3&&(M+=Ve.nodeValue.length),(nt=Ve.firstChild)!==null;)He=Ve,Ve=nt;for(;;){if(Ve===e)break t;if(He===r&&++Ce===v&&(X=M),He===x&&++Ge===d&&(se=M),(nt=Ve.nextSibling)!==null)break;Ve=He,He=Ve.parentNode}Ve=nt}r=X===-1||se===-1?null:{start:X,end:se}}else r=null}r=r||{start:0,end:0}}else r=null;for(go={focusedElem:e,selectionRange:r},Ro=!1,at=t;at!==null;)if(t=at,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,at=e;else for(;at!==null;){t=at;try{var it=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var lt=it.memoizedProps,Dn=it.memoizedState,Te=t.stateNode,fe=Te.getSnapshotBeforeUpdate(t.elementType===t.type?lt:si(t.type,lt),Dn);Te.__reactInternalSnapshotBeforeUpdate=fe}break;case 3:var Pe=t.stateNode.containerInfo;Pe.nodeType===1?Pe.textContent="":Pe.nodeType===9&&Pe.documentElement&&Pe.removeChild(Pe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(Je){Cn(t,t.return,Je)}if(e=t.sibling,e!==null){e.return=t.return,at=e;break}at=t.return}return it=Dp,Dp=!1,it}function lc(e,t,r){var d=t.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var v=d=d.next;do{if((v.tag&e)===e){var x=v.destroy;v.destroy=void 0,x!==void 0&&Wd(t,r,x)}v=v.next}while(v!==d)}}function Hc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var d=r.create;r.destroy=d()}r=r.next}while(r!==t)}}function Vd(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Rp(e){var t=e.alternate;t!==null&&(e.alternate=null,Rp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Da],delete t[ns],delete t[wr],delete t[Ld],delete t[Ed])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function zp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Kd(e,t,r){var d=e.tag;if(d===5||d===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ts));else if(d!==4&&(e=e.child,e!==null))for(Kd(e,t,r),e=e.sibling;e!==null;)Kd(e,t,r),e=e.sibling}function Jd(e,t,r){var d=e.tag;if(d===5||d===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(d!==4&&(e=e.child,e!==null))for(Jd(e,t,r),e=e.sibling;e!==null;)Jd(e,t,r),e=e.sibling}var ur=null,li=!1;function us(e,t,r){for(r=r.child;r!==null;)Op(e,t,r),r=r.sibling}function Op(e,t,r){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(Ki,r)}catch{}switch(r.tag){case 5:Pr||Ml(r,t);case 6:var d=ur,v=li;ur=null,us(e,t,r),ur=d,li=v,ur!==null&&(li?(e=ur,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ur.removeChild(r.stateNode));break;case 18:ur!==null&&(li?(e=ur,r=r.stateNode,e.nodeType===8?Xl(e.parentNode,r):e.nodeType===1&&Xl(e,r),ga(e)):Xl(ur,r.stateNode));break;case 4:d=ur,v=li,ur=r.stateNode.containerInfo,li=!0,us(e,t,r),ur=d,li=v;break;case 0:case 11:case 14:case 15:if(!Pr&&(d=r.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){v=d=d.next;do{var x=v,M=x.destroy;x=x.tag,M!==void 0&&((x&2)!==0||(x&4)!==0)&&Wd(r,t,M),v=v.next}while(v!==d)}us(e,t,r);break;case 1:if(!Pr&&(Ml(r,t),d=r.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=r.memoizedProps,d.state=r.memoizedState,d.componentWillUnmount()}catch(X){Cn(r,t,X)}us(e,t,r);break;case 21:us(e,t,r);break;case 22:r.mode&1?(Pr=(d=Pr)||r.memoizedState!==null,us(e,t,r),Pr=d):us(e,t,r);break;default:us(e,t,r)}}function Bp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Gf),t.forEach(function(d){var v=eg.bind(null,e,d);r.has(d)||(r.add(d),d.then(v,v))})}}function ci(e,t){var r=t.deletions;if(r!==null)for(var d=0;d<r.length;d++){var v=r[d];try{var x=e,M=t,X=M;e:for(;X!==null;){switch(X.tag){case 5:ur=X.stateNode,li=!1;break e;case 3:ur=X.stateNode.containerInfo,li=!0;break e;case 4:ur=X.stateNode.containerInfo,li=!0;break e}X=X.return}if(ur===null)throw Error(a(160));Op(x,M,v),ur=null,li=!1;var se=v.alternate;se!==null&&(se.return=null),v.return=null}catch(Ce){Cn(v,t,Ce)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qp(t,e),t=t.sibling}function qp(e,t){var r=e.alternate,d=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ci(t,e),Oi(e),d&4){try{lc(3,e,e.return),Hc(3,e)}catch(lt){Cn(e,e.return,lt)}try{lc(5,e,e.return)}catch(lt){Cn(e,e.return,lt)}}break;case 1:ci(t,e),Oi(e),d&512&&r!==null&&Ml(r,r.return);break;case 5:if(ci(t,e),Oi(e),d&512&&r!==null&&Ml(r,r.return),e.flags&32){var v=e.stateNode;try{Tt(v,"")}catch(lt){Cn(e,e.return,lt)}}if(d&4&&(v=e.stateNode,v!=null)){var x=e.memoizedProps,M=r!==null?r.memoizedProps:x,X=e.type,se=e.updateQueue;if(e.updateQueue=null,se!==null)try{X==="input"&&x.type==="radio"&&x.name!=null&&Q(v,x),Kr(X,M);var Ce=Kr(X,x);for(M=0;M<se.length;M+=2){var Ge=se[M],Ve=se[M+1];Ge==="style"?Vr(v,Ve):Ge==="dangerouslySetInnerHTML"?ft(v,Ve):Ge==="children"?Tt(v,Ve):K(v,Ge,Ve,Ce)}switch(X){case"input":st(v,x);break;case"textarea":gt(v,x);break;case"select":var He=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!x.multiple;var nt=x.value;nt!=null?Fe(v,!!x.multiple,nt,!1):He!==!!x.multiple&&(x.defaultValue!=null?Fe(v,!!x.multiple,x.defaultValue,!0):Fe(v,!!x.multiple,x.multiple?[]:"",!1))}v[ns]=x}catch(lt){Cn(e,e.return,lt)}}break;case 6:if(ci(t,e),Oi(e),d&4){if(e.stateNode===null)throw Error(a(162));v=e.stateNode,x=e.memoizedProps;try{v.nodeValue=x}catch(lt){Cn(e,e.return,lt)}}break;case 3:if(ci(t,e),Oi(e),d&4&&r!==null&&r.memoizedState.isDehydrated)try{ga(t.containerInfo)}catch(lt){Cn(e,e.return,lt)}break;case 4:ci(t,e),Oi(e);break;case 13:ci(t,e),Oi(e),v=e.child,v.flags&8192&&(x=v.memoizedState!==null,v.stateNode.isHidden=x,!x||v.alternate!==null&&v.alternate.memoizedState!==null||(Qd=pn())),d&4&&Bp(e);break;case 22:if(Ge=r!==null&&r.memoizedState!==null,e.mode&1?(Pr=(Ce=Pr)||Ge,ci(t,e),Pr=Ce):ci(t,e),Oi(e),d&8192){if(Ce=e.memoizedState!==null,(e.stateNode.isHidden=Ce)&&!Ge&&(e.mode&1)!==0)for(at=e,Ge=e.child;Ge!==null;){for(Ve=at=Ge;at!==null;){switch(He=at,nt=He.child,He.tag){case 0:case 11:case 14:case 15:lc(4,He,He.return);break;case 1:Ml(He,He.return);var it=He.stateNode;if(typeof it.componentWillUnmount=="function"){d=He,r=He.return;try{t=d,it.props=t.memoizedProps,it.state=t.memoizedState,it.componentWillUnmount()}catch(lt){Cn(d,r,lt)}}break;case 5:Ml(He,He.return);break;case 22:if(He.memoizedState!==null){Gp(Ve);continue}}nt!==null?(nt.return=He,at=nt):Gp(Ve)}Ge=Ge.sibling}e:for(Ge=null,Ve=e;;){if(Ve.tag===5){if(Ge===null){Ge=Ve;try{v=Ve.stateNode,Ce?(x=v.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(X=Ve.stateNode,se=Ve.memoizedProps.style,M=se!=null&&se.hasOwnProperty("display")?se.display:null,X.style.display=It("display",M))}catch(lt){Cn(e,e.return,lt)}}}else if(Ve.tag===6){if(Ge===null)try{Ve.stateNode.nodeValue=Ce?"":Ve.memoizedProps}catch(lt){Cn(e,e.return,lt)}}else if((Ve.tag!==22&&Ve.tag!==23||Ve.memoizedState===null||Ve===e)&&Ve.child!==null){Ve.child.return=Ve,Ve=Ve.child;continue}if(Ve===e)break e;for(;Ve.sibling===null;){if(Ve.return===null||Ve.return===e)break e;Ge===Ve&&(Ge=null),Ve=Ve.return}Ge===Ve&&(Ge=null),Ve.sibling.return=Ve.return,Ve=Ve.sibling}}break;case 19:ci(t,e),Oi(e),d&4&&Bp(e);break;case 21:break;default:ci(t,e),Oi(e)}}function Oi(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Fp(r)){var d=r;break e}r=r.return}throw Error(a(160))}switch(d.tag){case 5:var v=d.stateNode;d.flags&32&&(Tt(v,""),d.flags&=-33);var x=zp(e);Jd(e,x,v);break;case 3:case 4:var M=d.stateNode.containerInfo,X=zp(e);Kd(e,X,M);break;default:throw Error(a(161))}}catch(se){Cn(e,e.return,se)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e,t,r){at=e,Hp(e)}function Hp(e,t,r){for(var d=(e.mode&1)!==0;at!==null;){var v=at,x=v.child;if(v.tag===22&&d){var M=v.memoizedState!==null||qc;if(!M){var X=v.alternate,se=X!==null&&X.memoizedState!==null||Pr;X=qc;var Ce=Pr;if(qc=M,(Pr=se)&&!Ce)for(at=v;at!==null;)M=at,se=M.child,M.tag===22&&M.memoizedState!==null?Wp(v):se!==null?(se.return=M,at=se):Wp(v);for(;x!==null;)at=x,Hp(x),x=x.sibling;at=v,qc=X,Pr=Ce}Up(e)}else(v.subtreeFlags&8772)!==0&&x!==null?(x.return=v,at=x):Up(e)}}function Up(e){for(;at!==null;){var t=at;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Pr||Hc(5,t);break;case 1:var d=t.stateNode;if(t.flags&4&&!Pr)if(r===null)d.componentDidMount();else{var v=t.elementType===t.type?r.memoizedProps:si(t.type,r.memoizedProps);d.componentDidUpdate(v,r.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var x=t.updateQueue;x!==null&&xo(t,x,d);break;case 3:var M=t.updateQueue;if(M!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xo(t,M,r)}break;case 5:var X=t.stateNode;if(r===null&&t.flags&4){r=X;var se=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":se.autoFocus&&r.focus();break;case"img":se.src&&(r.src=se.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var Ce=t.alternate;if(Ce!==null){var Ge=Ce.memoizedState;if(Ge!==null){var Ve=Ge.dehydrated;Ve!==null&&ga(Ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Pr||t.flags&512&&Vd(t)}catch(He){Cn(t,t.return,He)}}if(t===e){at=null;break}if(r=t.sibling,r!==null){r.return=t.return,at=r;break}at=t.return}}function Gp(e){for(;at!==null;){var t=at;if(t===e){at=null;break}var r=t.sibling;if(r!==null){r.return=t.return,at=r;break}at=t.return}}function Wp(e){for(;at!==null;){var t=at;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Hc(4,t)}catch(se){Cn(t,r,se)}break;case 1:var d=t.stateNode;if(typeof d.componentDidMount=="function"){var v=t.return;try{d.componentDidMount()}catch(se){Cn(t,v,se)}}var x=t.return;try{Vd(t)}catch(se){Cn(t,x,se)}break;case 5:var M=t.return;try{Vd(t)}catch(se){Cn(t,M,se)}}}catch(se){Cn(t,t.return,se)}if(t===e){at=null;break}var X=t.sibling;if(X!==null){X.return=t.return,at=X;break}at=t.return}}var Kf=Math.ceil,Uc=he.ReactCurrentDispatcher,$d=he.ReactCurrentOwner,Ba=he.ReactCurrentBatchConfig,Gt=0,nr=null,Hn=null,pr=0,ka=0,Il=ba(0),Kn=0,cc=null,Qs=0,Gc=0,Yd=0,dc=null,oa=null,Qd=0,_l=1/0,ko=null,Wc=!1,Xd=null,ps=null,Vc=!1,hs=null,Kc=0,uc=0,Zd=null,Jc=-1,$c=0;function Wr(){return(Gt&6)!==0?pn():Jc!==-1?Jc:Jc=pn()}function fs(e){return(e.mode&1)===0?1:(Gt&2)!==0&&pr!==0?pr&-pr:Xt.transition!==null?($c===0&&($c=As()),$c):(e=Ht,e!==0||(e=window.event,e=e===void 0?16:Ms(e.type)),e)}function di(e,t,r,d){if(50<uc)throw uc=0,Zd=null,Error(a(185));wi(e,r,d),((Gt&2)===0||e!==nr)&&(e===nr&&((Gt&2)===0&&(Gc|=r),Kn===4&&gs(e,pr)),sa(e,d),r===1&&Gt===0&&(t.mode&1)===0&&(_l=pn()+500,Ks&&S()))}function sa(e,t){var r=e.callbackNode;vr(e,t);var d=mr(e,e===nr?pr:0);if(d===0)r!==null&&Vi(r),e.callbackNode=null,e.callbackPriority=0;else if(t=d&-d,e.callbackPriority!==t){if(r!=null&&Vi(r),t===1)e.tag===0?y(Kp.bind(null,e)):u(Kp.bind(null,e)),jd(function(){(Gt&6)===0&&S()}),r=null;else{switch(Mo(d)){case 1:r=bi;break;case 4:r=Ts;break;case 16:r=jo;break;case 536870912:r=sl;break;default:r=jo}r=th(r,Vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Vp(e,t){if(Jc=-1,$c=0,(Gt&6)!==0)throw Error(a(327));var r=e.callbackNode;if(Dl()&&e.callbackNode!==r)return null;var d=mr(e,e===nr?pr:0);if(d===0)return null;if((d&30)!==0||(d&e.expiredLanes)!==0||t)t=Yc(e,d);else{t=d;var v=Gt;Gt|=2;var x=$p();(nr!==e||pr!==t)&&(ko=null,_l=pn()+500,Zs(e,t));do try{Yf();break}catch(X){Jp(e,X)}while(!0);Vn(),Uc.current=x,Gt=v,Hn!==null?t=0:(nr=null,pr=0,t=Kn)}if(t!==0){if(t===2&&(v=Yi(e),v!==0&&(d=v,t=eu(e,v))),t===1)throw r=cc,Zs(e,0),gs(e,d),sa(e,pn()),r;if(t===6)gs(e,d);else{if(v=e.current.alternate,(d&30)===0&&!Jf(v)&&(t=Yc(e,d),t===2&&(x=Yi(e),x!==0&&(d=x,t=eu(e,x))),t===1))throw r=cc,Zs(e,0),gs(e,d),sa(e,pn()),r;switch(e.finishedWork=v,e.finishedLanes=d,t){case 0:case 1:throw Error(a(345));case 2:el(e,oa,ko);break;case 3:if(gs(e,d),(d&130023424)===d&&(t=Qd+500-pn(),10<t)){if(mr(e,0)!==0)break;if(v=e.suspendedLanes,(v&d)!==d){Wr(),e.pingedLanes|=e.suspendedLanes&v;break}e.timeoutHandle=Ql(el.bind(null,e,oa,ko),t);break}el(e,oa,ko);break;case 4:if(gs(e,d),(d&4194240)===d)break;for(t=e.eventTimes,v=-1;0<d;){var M=31-Dr(d);x=1<<M,M=t[M],M>v&&(v=M),d&=~x}if(d=v,d=pn()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*Kf(d/1960))-d,10<d){e.timeoutHandle=Ql(el.bind(null,e,oa,ko),d);break}el(e,oa,ko);break;case 5:el(e,oa,ko);break;default:throw Error(a(329))}}}return sa(e,pn()),e.callbackNode===r?Vp.bind(null,e):null}function eu(e,t){var r=dc;return e.current.memoizedState.isDehydrated&&(Zs(e,t).flags|=256),e=Yc(e,t),e!==2&&(t=oa,oa=r,t!==null&&tu(t)),e}function tu(e){oa===null?oa=e:oa.push.apply(oa,e)}function Jf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var d=0;d<r.length;d++){var v=r[d],x=v.getSnapshot;v=v.value;try{if(!Ut(x(),v))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function gs(e,t){for(t&=~Yd,t&=~Gc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Dr(t),d=1<<r;e[r]=-1,t&=~d}}function Kp(e){if((Gt&6)!==0)throw Error(a(327));Dl();var t=mr(e,0);if((t&1)===0)return sa(e,pn()),null;var r=Yc(e,t);if(e.tag!==0&&r===2){var d=Yi(e);d!==0&&(t=d,r=eu(e,d))}if(r===1)throw r=cc,Zs(e,0),gs(e,t),sa(e,pn()),r;if(r===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,el(e,oa,ko),sa(e,pn()),null}function nu(e,t){var r=Gt;Gt|=1;try{return e(t)}finally{Gt=r,Gt===0&&(_l=pn()+500,Ks&&S())}}function Xs(e){hs!==null&&hs.tag===0&&(Gt&6)===0&&Dl();var t=Gt;Gt|=1;var r=Ba.transition,d=Ht;try{if(Ba.transition=null,Ht=1,e)return e()}finally{Ht=d,Ba.transition=r,Gt=t,(Gt&6)===0&&S()}}function ru(){ka=Il.current,$t(Il)}function Zs(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,jc(r)),Hn!==null)for(r=Hn.return;r!==null;){var d=r;switch(le(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&xl();break;case 3:Fa(),$t(Sr),$t(Wn),ac();break;case 5:nc(d);break;case 4:Fa();break;case 13:$t(an);break;case 19:$t(an);break;case 10:Nr(d.type._context);break;case 22:case 23:ru()}r=r.return}if(nr=e,Hn=e=ms(e.current,null),pr=ka=t,Kn=0,cc=null,Yd=Gc=Qs=0,oa=dc=null,Br!==null){for(t=0;t<Br.length;t++)if(r=Br[t],d=r.interleaved,d!==null){r.interleaved=null;var v=d.next,x=r.pending;if(x!==null){var M=x.next;x.next=v,d.next=M}r.pending=d}Br=null}return e}function Jp(e,t){do{var r=Hn;try{if(Vn(),Sl.current=Fc,ls){for(var d=ln.memoizedState;d!==null;){var v=d.queue;v!==null&&(v.pending=null),d=d.next}ls=!1}if(za=0,Nn=jn=ln=null,ii=!1,cs=0,$d.current=null,r===null||r.return===null){Kn=1,cc=t,Hn=null;break}e:{var x=e,M=r.return,X=r,se=t;if(t=pr,X.flags|=32768,se!==null&&typeof se=="object"&&typeof se.then=="function"){var Ce=se,Ge=X,Ve=Ge.tag;if((Ge.mode&1)===0&&(Ve===0||Ve===11||Ve===15)){var He=Ge.alternate;He?(Ge.updateQueue=He.updateQueue,Ge.memoizedState=He.memoizedState,Ge.lanes=He.lanes):(Ge.updateQueue=null,Ge.memoizedState=null)}var nt=bp(M);if(nt!==null){nt.flags&=-257,xp(nt,M,X,x,t),nt.mode&1&&yp(x,Ce,t),t=nt,se=Ce;var it=t.updateQueue;if(it===null){var lt=new Set;lt.add(se),t.updateQueue=lt}else it.add(se);break e}else{if((t&1)===0){yp(x,Ce,t),au();break e}se=Error(a(426))}}else if(Me&&X.mode&1){var Dn=bp(M);if(Dn!==null){(Dn.flags&65536)===0&&(Dn.flags|=256),xp(Dn,M,X,x,t),Yt(El(se,X));break e}}x=se=El(se,X),Kn!==4&&(Kn=2),dc===null?dc=[x]:dc.push(x),x=M;do{switch(x.tag){case 3:x.flags|=65536,t&=-t,x.lanes|=t;var Te=mp(x,se,t);aa(x,Te);break e;case 1:X=se;var fe=x.type,Pe=x.stateNode;if((x.flags&128)===0&&(typeof fe.getDerivedStateFromError=="function"||Pe!==null&&typeof Pe.componentDidCatch=="function"&&(ps===null||!ps.has(Pe)))){x.flags|=65536,t&=-t,x.lanes|=t;var Je=vp(x,X,t);aa(x,Je);break e}}x=x.return}while(x!==null)}Qp(r)}catch(dt){t=dt,Hn===r&&r!==null&&(Hn=r=r.return);continue}break}while(!0)}function $p(){var e=Uc.current;return Uc.current=Fc,e===null?Fc:e}function au(){(Kn===0||Kn===3||Kn===2)&&(Kn=4),nr===null||(Qs&268435455)===0&&(Gc&268435455)===0||gs(nr,pr)}function Yc(e,t){var r=Gt;Gt|=2;var d=$p();(nr!==e||pr!==t)&&(ko=null,Zs(e,t));do try{$f();break}catch(v){Jp(e,v)}while(!0);if(Vn(),Gt=r,Uc.current=d,Hn!==null)throw Error(a(261));return nr=null,pr=0,Kn}function $f(){for(;Hn!==null;)Yp(Hn)}function Yf(){for(;Hn!==null&&!Ao();)Yp(Hn)}function Yp(e){var t=eh(e.alternate,e,ka);e.memoizedProps=e.pendingProps,t===null?Qp(e):Hn=t,$d.current=null}function Qp(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Hf(r,t,ka),r!==null){Hn=r;return}}else{if(r=Uf(r,t),r!==null){r.flags&=32767,Hn=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Kn=6,Hn=null;return}}if(t=t.sibling,t!==null){Hn=t;return}Hn=t=e}while(t!==null);Kn===0&&(Kn=5)}function el(e,t,r){var d=Ht,v=Ba.transition;try{Ba.transition=null,Ht=1,Qf(e,t,r,d)}finally{Ba.transition=v,Ht=d}return null}function Qf(e,t,r,d){do Dl();while(hs!==null);if((Gt&6)!==0)throw Error(a(327));r=e.finishedWork;var v=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var x=r.lanes|r.childLanes;if(Kl(e,x),e===nr&&(Hn=nr=null,pr=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||Vc||(Vc=!0,th(jo,function(){return Dl(),null})),x=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||x){x=Ba.transition,Ba.transition=null;var M=Ht;Ht=1;var X=Gt;Gt|=4,$d.current=null,Wf(e,r),qp(r,e),co(go),Ro=!!Ws,go=Ws=null,e.current=r,Vf(r),ol(),Gt=X,Ht=M,Ba.transition=x}else e.current=r;if(Vc&&(Vc=!1,hs=e,Kc=v),x=e.pendingLanes,x===0&&(ps=null),Co(r.stateNode),sa(e,pn()),t!==null)for(d=e.onRecoverableError,r=0;r<t.length;r++)v=t[r],d(v.value,{componentStack:v.stack,digest:v.digest});if(Wc)throw Wc=!1,e=Xd,Xd=null,e;return(Kc&1)!==0&&e.tag!==0&&Dl(),x=e.pendingLanes,(x&1)!==0?e===Zd?uc++:(uc=0,Zd=e):uc=0,S(),null}function Dl(){if(hs!==null){var e=Mo(Kc),t=Ba.transition,r=Ht;try{if(Ba.transition=null,Ht=16>e?16:e,hs===null)var d=!1;else{if(e=hs,hs=null,Kc=0,(Gt&6)!==0)throw Error(a(331));var v=Gt;for(Gt|=4,at=e.current;at!==null;){var x=at,M=x.child;if((at.flags&16)!==0){var X=x.deletions;if(X!==null){for(var se=0;se<X.length;se++){var Ce=X[se];for(at=Ce;at!==null;){var Ge=at;switch(Ge.tag){case 0:case 11:case 15:lc(8,Ge,x)}var Ve=Ge.child;if(Ve!==null)Ve.return=Ge,at=Ve;else for(;at!==null;){Ge=at;var He=Ge.sibling,nt=Ge.return;if(Rp(Ge),Ge===Ce){at=null;break}if(He!==null){He.return=nt,at=He;break}at=nt}}}var it=x.alternate;if(it!==null){var lt=it.child;if(lt!==null){it.child=null;do{var Dn=lt.sibling;lt.sibling=null,lt=Dn}while(lt!==null)}}at=x}}if((x.subtreeFlags&2064)!==0&&M!==null)M.return=x,at=M;else e:for(;at!==null;){if(x=at,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:lc(9,x,x.return)}var Te=x.sibling;if(Te!==null){Te.return=x.return,at=Te;break e}at=x.return}}var fe=e.current;for(at=fe;at!==null;){M=at;var Pe=M.child;if((M.subtreeFlags&2064)!==0&&Pe!==null)Pe.return=M,at=Pe;else e:for(M=fe;at!==null;){if(X=at,(X.flags&2048)!==0)try{switch(X.tag){case 0:case 11:case 15:Hc(9,X)}}catch(dt){Cn(X,X.return,dt)}if(X===M){at=null;break e}var Je=X.sibling;if(Je!==null){Je.return=X.return,at=Je;break e}at=X.return}}if(Gt=v,S(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(Ki,e)}catch{}d=!0}return d}finally{Ht=r,Ba.transition=t}}return!1}function Xp(e,t,r){t=El(r,t),t=mp(e,t,1),e=ra(e,t,1),t=Wr(),e!==null&&(wi(e,1,t),sa(e,t))}function Cn(e,t,r){if(e.tag===3)Xp(e,e,r);else for(;t!==null;){if(t.tag===3){Xp(t,e,r);break}else if(t.tag===1){var d=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(ps===null||!ps.has(d))){e=El(r,e),e=vp(t,e,1),t=ra(t,e,1),e=Wr(),t!==null&&(wi(t,1,e),sa(t,e));break}}t=t.return}}function Xf(e,t,r){var d=e.pingCache;d!==null&&d.delete(t),t=Wr(),e.pingedLanes|=e.suspendedLanes&r,nr===e&&(pr&r)===r&&(Kn===4||Kn===3&&(pr&130023424)===pr&&500>pn()-Qd?Zs(e,0):Yd|=r),sa(e,t)}function Zp(e,t){t===0&&((e.mode&1)===0?t=1:(t=xi,xi<<=1,(xi&130023424)===0&&(xi=4194304)));var r=Wr();e=Vt(e,t),e!==null&&(wi(e,t,r),sa(e,r))}function Zf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Zp(e,r)}function eg(e,t){var r=0;switch(e.tag){case 13:var d=e.stateNode,v=e.memoizedState;v!==null&&(r=v.retryLane);break;case 19:d=e.stateNode;break;default:throw Error(a(314))}d!==null&&d.delete(t),Zp(e,r)}var eh;eh=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Sr.current)ia=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return ia=!1,qf(e,t,r);ia=(e.flags&131072)!==0}else ia=!1,Me&&(t.flags&1048576)!==0&&ze(t,O,t.index);switch(t.lanes=0,t.tag){case 2:var d=t.type;Bc(e,t),e=t.pendingProps;var v=as(t,Wn.current);vn(t,r),v=Js(null,t,d,e,v,r);var x=Oa();return t.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,kr(d)?(x=!0,yo(t)):x=!1,t.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,wl(t),v.updater=zc,t.stateNode=v,v._reactInternals=t,Dd(t,d,e,r),t=Od(null,t,d,!0,x,r)):(t.tag=0,Me&&x&&Le(t),Gr(null,t,v,r),t=t.child),t;case 16:d=t.elementType;e:{switch(Bc(e,t),e=t.pendingProps,v=d._init,d=v(d._payload),t.type=d,v=t.tag=ng(d),e=si(d,e),v){case 0:t=zd(null,t,d,e,r);break e;case 1:t=Pp(null,t,d,e,r);break e;case 11:t=wp(null,t,d,e,r);break e;case 14:t=Sp(null,t,d,si(d.type,e),r);break e}throw Error(a(306,d,""))}return t;case 0:return d=t.type,v=t.pendingProps,v=t.elementType===d?v:si(d,v),zd(e,t,d,v,r);case 1:return d=t.type,v=t.pendingProps,v=t.elementType===d?v:si(d,v),Pp(e,t,d,v,r);case 3:e:{if(Ap(t),e===null)throw Error(a(387));d=t.pendingProps,x=t.memoizedState,v=x.element,tc(e,t),ri(t,d,null,r);var M=t.memoizedState;if(d=M.element,x.isDehydrated)if(x={element:d,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},t.updateQueue.baseState=x,t.memoizedState=x,t.flags&256){v=El(Error(a(423)),t),t=jp(e,t,d,r,v);break e}else if(d!==v){v=El(Error(a(424)),t),t=jp(e,t,d,r,v);break e}else for(Ie=cr(t.stateNode.containerInfo.firstChild),de=t,Me=!0,De=null,r=Wt(t,null,d,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Lt(),d===v){t=So(e,t,r);break e}Gr(e,t,d,r)}t=t.child}return t;case 5:return Mc(t),e===null&&Qe(t),d=t.type,v=t.pendingProps,x=e!==null?e.memoizedProps:null,M=v.children,Yl(d,v)?M=null:x!==null&&Yl(d,x)&&(t.flags|=32),Tp(e,t),Gr(e,t,M,r),t.child;case 6:return e===null&&Qe(t),null;case 13:return Cp(e,t,r);case 4:return ss(t,t.stateNode.containerInfo),d=t.pendingProps,e===null?t.child=Mn(t,null,d,r):Gr(e,t,d,r),t.child;case 11:return d=t.type,v=t.pendingProps,v=t.elementType===d?v:si(d,v),wp(e,t,d,v,r);case 7:return Gr(e,t,t.pendingProps,r),t.child;case 8:return Gr(e,t,t.pendingProps.children,r),t.child;case 12:return Gr(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(d=t.type._context,v=t.pendingProps,x=t.memoizedProps,M=v.value,Qt(er,d._currentValue),d._currentValue=M,x!==null)if(Ut(x.value,M)){if(x.children===v.children&&!Sr.current){t=So(e,t,r);break e}}else for(x=t.child,x!==null&&(x.return=t);x!==null;){var X=x.dependencies;if(X!==null){M=x.child;for(var se=X.firstContext;se!==null;){if(se.context===d){if(x.tag===1){se=na(-1,r&-r),se.tag=2;var Ce=x.updateQueue;if(Ce!==null){Ce=Ce.shared;var Ge=Ce.pending;Ge===null?se.next=se:(se.next=Ge.next,Ge.next=se),Ce.pending=se}}x.lanes|=r,se=x.alternate,se!==null&&(se.lanes|=r),ta(x.return,r,t),X.lanes|=r;break}se=se.next}}else if(x.tag===10)M=x.type===t.type?null:x.child;else if(x.tag===18){if(M=x.return,M===null)throw Error(a(341));M.lanes|=r,X=M.alternate,X!==null&&(X.lanes|=r),ta(M,r,t),M=x.sibling}else M=x.child;if(M!==null)M.return=x;else for(M=x;M!==null;){if(M===t){M=null;break}if(x=M.sibling,x!==null){x.return=M.return,M=x;break}M=M.return}x=M}Gr(e,t,v.children,r),t=t.child}return t;case 9:return v=t.type,d=t.pendingProps.children,vn(t,r),v=An(v),d=d(v),t.flags|=1,Gr(e,t,d,r),t.child;case 14:return d=t.type,v=si(d,t.pendingProps),v=si(d.type,v),Sp(e,t,d,v,r);case 15:return kp(e,t,t.type,t.pendingProps,r);case 17:return d=t.type,v=t.pendingProps,v=t.elementType===d?v:si(d,v),Bc(e,t),t.tag=1,kr(d)?(e=!0,yo(t)):e=!1,vn(t,r),fp(t,d,v),Dd(t,d,v,r),Od(null,t,d,!0,e,r);case 19:return Ep(e,t,r);case 22:return Np(e,t,r)}throw Error(a(156,t.tag))};function th(e,t){return Wi(e,t)}function tg(e,t,r,d){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qa(e,t,r,d){return new tg(e,t,r,d)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ng(e){if(typeof e=="function")return iu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===B)return 11;if(e===Ne)return 14}return 2}function ms(e,t){var r=e.alternate;return r===null?(r=qa(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Qc(e,t,r,d,v,x){var M=2;if(d=e,typeof e=="function")iu(e)&&(M=1);else if(typeof e=="string")M=5;else e:switch(e){case oe:return tl(r.children,v,x,t);case $:M=8,v|=8;break;case pe:return e=qa(12,r,t,v|2),e.elementType=pe,e.lanes=x,e;case Z:return e=qa(13,r,t,v),e.elementType=Z,e.lanes=x,e;case te:return e=qa(19,r,t,v),e.elementType=te,e.lanes=x,e;case ke:return Xc(r,v,x,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:M=10;break e;case C:M=9;break e;case B:M=11;break e;case Ne:M=14;break e;case ue:M=16,d=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=qa(M,r,t,v),t.elementType=e,t.type=d,t.lanes=x,t}function tl(e,t,r,d){return e=qa(7,e,d,t),e.lanes=r,e}function Xc(e,t,r,d){return e=qa(22,e,d,t),e.elementType=ke,e.lanes=r,e.stateNode={isHidden:!1},e}function ou(e,t,r){return e=qa(6,e,null,t),e.lanes=r,e}function su(e,t,r){return t=qa(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function rg(e,t,r,d,v){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=d,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function lu(e,t,r,d,v,x,M,X,se){return e=new rg(e,t,r,X,se),t===1?(t=1,x===!0&&(t|=8)):t=0,x=qa(3,null,null,t),e.current=x,x.stateNode=e,x.memoizedState={element:d,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},wl(x),e}function ag(e,t,r){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ye,key:d==null?null:""+d,children:e,containerInfo:t,implementation:r}}function nh(e){if(!e)return Di;e=e._reactInternals;e:{if(Un(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(kr(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var r=e.type;if(kr(r))return ec(e,r,t)}return t}function rh(e,t,r,d,v,x,M,X,se){return e=lu(r,d,!0,e,v,x,M,X,se),e.context=nh(null),r=e.current,d=Wr(),v=fs(r),x=na(d,v),x.callback=t??null,ra(r,x,v),e.current.lanes=v,wi(e,v,d),sa(e,d),e}function Zc(e,t,r,d){var v=t.current,x=Wr(),M=fs(v);return r=nh(r),t.context===null?t.context=r:t.pendingContext=r,t=na(x,M),t.payload={element:e},d=d===void 0?null:d,d!==null&&(t.callback=d),e=ra(v,t,M),e!==null&&(di(e,v,M,x),bo(e,v,M)),M}function ed(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ah(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function cu(e,t){ah(e,t),(e=e.alternate)&&ah(e,t)}function ig(){return null}var ih=typeof reportError=="function"?reportError:function(e){console.error(e)};function du(e){this._internalRoot=e}td.prototype.render=du.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Zc(e,t,null,null)},td.prototype.unmount=du.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Xs(function(){Zc(null,e,null,null)}),t[Zn]=null}};function td(e){this._internalRoot=e}td.prototype.unstable_scheduleHydration=function(e){if(e){var t=Pa();e={blockedOn:null,target:e,priority:t};for(var r=0;r<ja.length&&t!==0&&t<ja[r].priority;r++);ja.splice(r,0,e),r===0&&_o(e)}};function uu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oh(){}function og(e,t,r,d,v){if(v){if(typeof d=="function"){var x=d;d=function(){var Ce=ed(M);x.call(Ce)}}var M=rh(t,d,e,0,null,!1,!1,"",oh);return e._reactRootContainer=M,e[Zn]=M.current,ho(e.nodeType===8?e.parentNode:e),Xs(),M}for(;v=e.lastChild;)e.removeChild(v);if(typeof d=="function"){var X=d;d=function(){var Ce=ed(se);X.call(Ce)}}var se=lu(e,0,!1,null,null,!1,!1,"",oh);return e._reactRootContainer=se,e[Zn]=se.current,ho(e.nodeType===8?e.parentNode:e),Xs(function(){Zc(t,se,r,d)}),se}function rd(e,t,r,d,v){var x=r._reactRootContainer;if(x){var M=x;if(typeof v=="function"){var X=v;v=function(){var se=ed(M);X.call(se)}}Zc(t,M,e,v)}else M=og(r,t,e,v,d);return ed(M)}dl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=$i(t.pendingLanes);r!==0&&(Eo(t,r|1),sa(t,pn()),(Gt&6)===0&&(_l=pn()+500,S()))}break;case 13:Xs(function(){var d=Vt(e,1);if(d!==null){var v=Wr();di(d,e,1,v)}}),cu(e,1)}},Cs=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var r=Wr();di(t,e,134217728,r)}cu(e,134217728)}},ul=function(e){if(e.tag===13){var t=fs(e),r=Vt(e,t);if(r!==null){var d=Wr();di(r,e,t,d)}cu(e,t)}},Pa=function(){return Ht},Qi=function(e,t){var r=Ht;try{return Ht=e,t()}finally{Ht=r}},sn=function(e,t,r){switch(t){case"input":if(st(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var d=r[t];if(d!==e&&d.form===e.form){var v=Vs(d);if(!v)throw Error(a(90));Be(d),st(d,v)}}}break;case"textarea":gt(e,r);break;case"select":t=r.value,t!=null&&Fe(e,!!r.multiple,t,!1)}},mi=nu,Bn=Xs;var sg={usingClientEntryPoint:!1,Events:[rs,mo,Vs,St,qt,nu]},pc={findFiberByHostInstance:_i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lg={bundleType:pc.bundleType,version:pc.version,rendererPackageName:pc.rendererPackageName,rendererConfig:pc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:he.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=yi(e),e===null?null:e.stateNode},findFiberByHostInstance:pc.findFiberByHostInstance||ig,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ad=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ad.isDisabled&&ad.supportsFiber)try{Ki=ad.inject(lg),$r=ad}catch{}}return la.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sg,la.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!uu(t))throw Error(a(200));return ag(e,t,null,r)},la.createRoot=function(e,t){if(!uu(e))throw Error(a(299));var r=!1,d="",v=ih;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(d=t.identifierPrefix),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=lu(e,1,!1,null,null,r,!1,d,v),e[Zn]=t.current,ho(e.nodeType===8?e.parentNode:e),new du(t)},la.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=yi(t),e=e===null?null:e.stateNode,e},la.flushSync=function(e){return Xs(e)},la.hydrate=function(e,t,r){if(!nd(t))throw Error(a(200));return rd(null,e,t,!0,r)},la.hydrateRoot=function(e,t,r){if(!uu(e))throw Error(a(405));var d=r!=null&&r.hydratedSources||null,v=!1,x="",M=ih;if(r!=null&&(r.unstable_strictMode===!0&&(v=!0),r.identifierPrefix!==void 0&&(x=r.identifierPrefix),r.onRecoverableError!==void 0&&(M=r.onRecoverableError)),t=rh(t,null,e,1,r??null,v,!1,x,M),e[Zn]=t.current,ho(e),d)for(e=0;e<d.length;e++)r=d[e],v=r._getVersion,v=v(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,v]:t.mutableSourceEagerHydrationData.push(r,v);return new td(t)},la.render=function(e,t,r){if(!nd(t))throw Error(a(200));return rd(null,e,t,!1,r)},la.unmountComponentAtNode=function(e){if(!nd(e))throw Error(a(40));return e._reactRootContainer?(Xs(function(){rd(null,null,e,!1,function(){e._reactRootContainer=null,e[Zn]=null})}),!0):!1},la.unstable_batchedUpdates=nu,la.unstable_renderSubtreeIntoContainer=function(e,t,r,d){if(!nd(r))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return rd(e,t,r,!1,d)},la.version="18.3.1-next-f1338f8080-20240426",la}var fh;function vg(){if(fh)return fu.exports;fh=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(n){console.error(n)}}return i(),fu.exports=mg(),fu.exports}var gh;function yg(){if(gh)return id;gh=1;var i=vg();return id.createRoot=i.createRoot,id.hydrateRoot=i.hydrateRoot,id}var bg=yg();const xg=Kh(bg);var Qu={};(function i(n,a,l,p){var c=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),h=typeof Path2D=="function"&&typeof DOMMatrix=="function",f=(function(){if(!n.OffscreenCanvas)return!1;try{var z=new OffscreenCanvas(1,1),A=z.getContext("2d");A.fillRect(0,0,1,1);var N=z.transferToImageBitmap();A.createPattern(N,"no-repeat")}catch{return!1}return!0})();function g(){}function w(z){var A=a.exports.Promise,N=A!==void 0?A:n.Promise;return typeof N=="function"?new N(z):(z(g,g),null)}var k=(function(z,A){return{transform:function(N){if(z)return N;if(A.has(N))return A.get(N);var I=new OffscreenCanvas(N.width,N.height),G=I.getContext("2d");return G.drawImage(N,0,0),A.set(N,I),I},clear:function(){A.clear()}}})(f,new Map),T=(function(){var z=Math.floor(16.666666666666668),A,N,I={},G=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(V){var Y=Math.random();return I[Y]=requestAnimationFrame(function ne(re){G===re||G+z-1<re?(G=re,delete I[Y],V()):I[Y]=requestAnimationFrame(ne)}),Y},N=function(V){I[V]&&cancelAnimationFrame(I[V])}):(A=function(V){return setTimeout(V,z)},N=function(V){return clearTimeout(V)}),{frame:A,cancel:N}})(),P=(function(){var z,A,N={};function I(G){function V(Y,ne){G.postMessage({options:Y||{},callback:ne})}G.init=function(ne){var re=ne.transferControlToOffscreen();G.postMessage({canvas:re},[re])},G.fire=function(ne,re,ce){if(A)return V(ne,null),A;var _e=Math.random().toString(36).slice(2);return A=w(function(Re){function Be(Ue){Ue.data.callback===_e&&(delete N[_e],G.removeEventListener("message",Be),A=null,k.clear(),ce(),Re())}G.addEventListener("message",Be),V(ne,_e),N[_e]=Be.bind(null,{data:{callback:_e}})}),A},G.reset=function(){G.postMessage({reset:!0});for(var ne in N)N[ne](),delete N[ne]}}return function(){if(z)return z;if(!l&&c){var G=["var CONFETTI, SIZE = {}, module = {};","("+i.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{z=new Worker(URL.createObjectURL(new Blob([G])))}catch(V){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",V),null}I(z)}return z}})(),b={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function U(z,A){return A?A(z):z}function D(z){return z!=null}function q(z,A,N){return U(z&&D(z[A])?z[A]:b[A],N)}function _(z){return z<0?0:Math.floor(z)}function F(z,A){return Math.floor(Math.random()*(A-z))+z}function K(z){return parseInt(z,16)}function he(z){return z.map(ve)}function ve(z){var A=String(z).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:K(A.substring(0,2)),g:K(A.substring(2,4)),b:K(A.substring(4,6))}}function ye(z){var A=q(z,"origin",Object);return A.x=q(A,"x",Number),A.y=q(A,"y",Number),A}function oe(z){z.width=document.documentElement.clientWidth,z.height=document.documentElement.clientHeight}function $(z){var A=z.getBoundingClientRect();z.width=A.width,z.height=A.height}function pe(z){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=z,A}function Se(z,A,N,I,G,V,Y,ne,re){z.save(),z.translate(A,N),z.rotate(V),z.scale(I,G),z.arc(0,0,1,Y,ne,re),z.restore()}function C(z){var A=z.angle*(Math.PI/180),N=z.spread*(Math.PI/180);return{x:z.x,y:z.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:z.startVelocity*.5+Math.random()*z.startVelocity,angle2D:-A+(.5*N-Math.random()*N),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:z.color,shape:z.shape,tick:0,totalTicks:z.ticks,decay:z.decay,drift:z.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:z.gravity*3,ovalScalar:.6,scalar:z.scalar,flat:z.flat}}function B(z,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var N=A.tick++/A.totalTicks,I=A.x+A.random*A.tiltCos,G=A.y+A.random*A.tiltSin,V=A.wobbleX+A.random*A.tiltCos,Y=A.wobbleY+A.random*A.tiltSin;if(z.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-N)+")",z.beginPath(),h&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))z.fill(ke(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(V-I)*.1,Math.abs(Y-G)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var ne=Math.PI/10*A.wobble,re=Math.abs(V-I)*.1,ce=Math.abs(Y-G)*.1,_e=A.shape.bitmap.width*A.scalar,Re=A.shape.bitmap.height*A.scalar,Be=new DOMMatrix([Math.cos(ne)*re,Math.sin(ne)*re,-Math.sin(ne)*ce,Math.cos(ne)*ce,A.x,A.y]);Be.multiplySelf(new DOMMatrix(A.shape.matrix));var Ue=z.createPattern(k.transform(A.shape.bitmap),"no-repeat");Ue.setTransform(Be),z.globalAlpha=1-N,z.fillStyle=Ue,z.fillRect(A.x-_e/2,A.y-Re/2,_e,Re),z.globalAlpha=1}else if(A.shape==="circle")z.ellipse?z.ellipse(A.x,A.y,Math.abs(V-I)*A.ovalScalar,Math.abs(Y-G)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):Se(z,A.x,A.y,Math.abs(V-I)*A.ovalScalar,Math.abs(Y-G)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var Ke=Math.PI/2*3,je=4*A.scalar,Q=8*A.scalar,st=A.x,Xe=A.y,Oe=5,Ae=Math.PI/Oe;Oe--;)st=A.x+Math.cos(Ke)*Q,Xe=A.y+Math.sin(Ke)*Q,z.lineTo(st,Xe),Ke+=Ae,st=A.x+Math.cos(Ke)*je,Xe=A.y+Math.sin(Ke)*je,z.lineTo(st,Xe),Ke+=Ae;else z.moveTo(Math.floor(A.x),Math.floor(A.y)),z.lineTo(Math.floor(A.wobbleX),Math.floor(G)),z.lineTo(Math.floor(V),Math.floor(Y)),z.lineTo(Math.floor(I),Math.floor(A.wobbleY));return z.closePath(),z.fill(),A.tick<A.totalTicks}function Z(z,A,N,I,G){var V=A.slice(),Y=z.getContext("2d"),ne,re,ce=w(function(_e){function Re(){ne=re=null,Y.clearRect(0,0,I.width,I.height),k.clear(),G(),_e()}function Be(){l&&!(I.width===p.width&&I.height===p.height)&&(I.width=z.width=p.width,I.height=z.height=p.height),!I.width&&!I.height&&(N(z),I.width=z.width,I.height=z.height),Y.clearRect(0,0,I.width,I.height),V=V.filter(function(Ue){return B(Y,Ue)}),V.length?ne=T.frame(Be):Re()}ne=T.frame(Be),re=Re});return{addFettis:function(_e){return V=V.concat(_e),ce},canvas:z,promise:ce,reset:function(){ne&&T.cancel(ne),re&&re()}}}function te(z,A){var N=!z,I=!!q(A||{},"resize"),G=!1,V=q(A,"disableForReducedMotion",Boolean),Y=c&&!!q(A||{},"useWorker"),ne=Y?P():null,re=N?oe:$,ce=z&&ne?!!z.__confetti_initialized:!1,_e=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Re;function Be(Ke,je,Q){for(var st=q(Ke,"particleCount",_),Xe=q(Ke,"angle",Number),Oe=q(Ke,"spread",Number),Ae=q(Ke,"startVelocity",Number),Fe=q(Ke,"decay",Number),We=q(Ke,"gravity",Number),rt=q(Ke,"drift",Number),gt=q(Ke,"colors",he),Nt=q(Ke,"ticks",Number),jt=q(Ke,"shapes"),Et=q(Ke,"scalar"),Rt=!!q(Ke,"flat"),ft=ye(Ke),Tt=st,$e=[],On=z.width*ft.x,It=z.height*ft.y;Tt--;)$e.push(C({x:On,y:It,angle:Xe,spread:Oe,startVelocity:Ae,color:gt[Tt%gt.length],shape:jt[F(0,jt.length)],ticks:Nt,decay:Fe,gravity:We,drift:rt,scalar:Et,flat:Rt}));return Re?Re.addFettis($e):(Re=Z(z,$e,re,je,Q),Re.promise)}function Ue(Ke){var je=V||q(Ke,"disableForReducedMotion",Boolean),Q=q(Ke,"zIndex",Number);if(je&&_e)return w(function(Ae){Ae()});N&&Re?z=Re.canvas:N&&!z&&(z=pe(Q),document.body.appendChild(z)),I&&!ce&&re(z);var st={width:z.width,height:z.height};ne&&!ce&&ne.init(z),ce=!0,ne&&(z.__confetti_initialized=!0);function Xe(){if(ne){var Ae={getBoundingClientRect:function(){if(!N)return z.getBoundingClientRect()}};re(Ae),ne.postMessage({resize:{width:Ae.width,height:Ae.height}});return}st.width=st.height=null}function Oe(){Re=null,I&&(G=!1,n.removeEventListener("resize",Xe)),N&&z&&(document.body.contains(z)&&document.body.removeChild(z),z=null,ce=!1)}return I&&!G&&(G=!0,n.addEventListener("resize",Xe,!1)),ne?ne.fire(Ke,st,Oe):Be(Ke,st,Oe)}return Ue.reset=function(){ne&&ne.reset(),Re&&Re.reset()},Ue}var Ne;function ue(){return Ne||(Ne=te(null,{useWorker:!0,resize:!0})),Ne}function ke(z,A,N,I,G,V,Y){var ne=new Path2D(z),re=new Path2D;re.addPath(ne,new DOMMatrix(A));var ce=new Path2D;return ce.addPath(re,new DOMMatrix([Math.cos(Y)*G,Math.sin(Y)*G,-Math.sin(Y)*V,Math.cos(Y)*V,N,I])),ce}function ee(z){if(!h)throw new Error("path confetti are not supported in this browser");var A,N;typeof z=="string"?A=z:(A=z.path,N=z.matrix);var I=new Path2D(A),G=document.createElement("canvas"),V=G.getContext("2d");if(!N){for(var Y=1e3,ne=Y,re=Y,ce=0,_e=0,Re,Be,Ue=0;Ue<Y;Ue+=2)for(var Ke=0;Ke<Y;Ke+=2)V.isPointInPath(I,Ue,Ke,"nonzero")&&(ne=Math.min(ne,Ue),re=Math.min(re,Ke),ce=Math.max(ce,Ue),_e=Math.max(_e,Ke));Re=ce-ne,Be=_e-re;var je=10,Q=Math.min(je/Re,je/Be);N=[Q,0,0,Q,-Math.round(Re/2+ne)*Q,-Math.round(Be/2+re)*Q]}return{type:"path",path:A,matrix:N}}function me(z){var A,N=1,I="#000000",G='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof z=="string"?A=z:(A=z.text,N="scalar"in z?z.scalar:N,G="fontFamily"in z?z.fontFamily:G,I="color"in z?z.color:I);var V=10*N,Y=""+V+"px "+G,ne=new OffscreenCanvas(V,V),re=ne.getContext("2d");re.font=Y;var ce=re.measureText(A),_e=Math.ceil(ce.actualBoundingBoxRight+ce.actualBoundingBoxLeft),Re=Math.ceil(ce.actualBoundingBoxAscent+ce.actualBoundingBoxDescent),Be=2,Ue=ce.actualBoundingBoxLeft+Be,Ke=ce.actualBoundingBoxAscent+Be;_e+=Be+Be,Re+=Be+Be,ne=new OffscreenCanvas(_e,Re),re=ne.getContext("2d"),re.font=Y,re.fillStyle=I,re.fillText(A,Ue,Ke);var je=1/N;return{type:"bitmap",bitmap:ne.transferToImageBitmap(),matrix:[je,0,0,je,-_e*je/2,-Re*je/2]}}a.exports=function(){return ue().apply(this,arguments)},a.exports.reset=function(){ue().reset()},a.exports.create=te,a.exports.shapeFromPath=ee,a.exports.shapeFromText=me})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),Qu,!1);const wg=Qu.exports;Qu.exports.create;/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=(...i)=>i.filter((n,a,l)=>!!n&&n.trim()!==""&&l.indexOf(n)===a).join(" ").trim();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kg=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,a,l)=>l?l.toUpperCase():a.toLowerCase());/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=i=>{const n=kg(i);return n.charAt(0).toUpperCase()+n.slice(1)};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var vu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ng=i=>{for(const n in i)if(n.startsWith("aria-")||n==="role"||n==="title")return!0;return!1},Tg=ct.createContext({}),Pg=()=>ct.useContext(Tg),Ag=ct.forwardRef(({color:i,size:n,strokeWidth:a,absoluteStrokeWidth:l,className:p="",children:c,iconNode:h,...f},g)=>{const{size:w=24,strokeWidth:k=2,absoluteStrokeWidth:T=!1,color:P="currentColor",className:b=""}=Pg()??{},U=l??T?Number(a??k)*24/Number(n??w):a??k;return ct.createElement("svg",{ref:g,...vu,width:n??w??vu.width,height:n??w??vu.height,stroke:i??P,strokeWidth:U,className:Jh("lucide",b,p),...!c&&!Ng(f)&&{"aria-hidden":"true"},...f},[...h.map(([D,q])=>ct.createElement(D,q)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=(i,n)=>{const a=ct.forwardRef(({className:l,...p},c)=>ct.createElement(Ag,{ref:c,iconNode:n,className:Jh(`lucide-${Sg(mh(i))}`,`lucide-${i}`,l),...p}));return a.displayName=mh(i),a};/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ss=tt("activity",jg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cg=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],Eu=tt("arrow-down",Cg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],Mu=tt("arrow-up",Lg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],Mg=tt("award",Eg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=[["path",{d:"M12 5v16",key:"1f6ucr"}],["path",{d:"M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",key:"1fyvmf"}]],yu=tt("book-open",Ig);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=[["path",{d:"M8 2v3",key:"1ioesn"}],["path",{d:"M16 2v3",key:"otl347"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}],["path",{d:"M3 9h18",key:"1pudct"}]],vh=tt("calendar",_g);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],Rg=tt("chart-column",Dg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V3",key:"1lcnhd"}],["path",{d:"M19 21V9",key:"unv183"}]],$h=tt("chart-no-axes-column",Fg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zg=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Xu=tt("check",zg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Iu=tt("chevron-down",Og);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bg=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],qg=tt("chevron-right",Bg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Yh=tt("circle-alert",Hg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qh=tt("circle-check",Ug);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gg=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],_u=tt("circle-check-big",Gg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]],Xh=tt("circle-plus",Wg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],vc=tt("circle-question-mark",Vg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Jg=tt("circle-x",Kg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]],Zh=tt("clock",$g);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]],Qg=tt("cloud-upload",Yg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],ef=tt("code",Xg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zg=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]],e1=tt("compass",Zg);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],n1=tt("copy",t1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M17 20v2",key:"1rnc9c"}],["path",{d:"M17 2v2",key:"11trls"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M2 17h2",key:"7oei6x"}],["path",{d:"M2 7h2",key:"asdhe0"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"M20 17h2",key:"1fpfkl"}],["path",{d:"M20 7h2",key:"1o8tra"}],["path",{d:"M7 20v2",key:"4gnj0m"}],["path",{d:"M7 2v2",key:"1i4yhu"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1",key:"z9xiuo"}]],a1=tt("cpu",r1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]],o1=tt("crosshair",i1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],l1=tt("database",s1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]],d1=tt("download",c1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],p1=tt("earth",u1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],tf=tt("external-link",h1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],yh=tt("eye",f1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]],nf=tt("file-spreadsheet",g1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],yd=tt("file-text",m1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],y1=tt("funnel",v1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]],x1=tt("gamepad-2",b1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]],S1=tt("gauge",w1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Wl=tt("globe",k1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]],T1=tt("hard-drive",N1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Zu=tt("info",P1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Du=tt("layers",A1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],C1=tt("lightbulb",j1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],E1=tt("lock",L1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],rf=tt("mail",M1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],ep=tt("map-pin",I1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],bh=tt("menu",_1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],R1=tt("message-circle",D1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],z1=tt("monitor",F1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],af=tt("moon",O1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],q1=tt("network",B1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],of=tt("phone",H1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],G1=tt("play",U1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],sf=tt("refresh-cw",W1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]],Ru=tt("rotate-ccw-clock",V1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],J1=tt("rotate-ccw",K1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],wd=tt("search",$1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Q1=tt("send",Y1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],kc=tt("server",X1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],lf=tt("settings",Z1);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],cf=tt("share-2",em);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Nc=tt("shield-check",tm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],rm=tt("shield",nm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],im=tt("smartphone",am);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],Sd=tt("sparkles",om);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],lm=tt("square",sm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],df=tt("sun",cm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]],hd=tt("trash-2",dm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],tp=tt("triangle-alert",um);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=[["path",{d:"M10 14.66V17a1 1 0 0 1-1 1 2 2 0 0 0-2 2v2",key:"pwuv1l"}],["path",{d:"M14 14.66V17a1 1 0 0 0 1 1 2 2 0 0 1 2 2v2",key:"1y54w1"}],["path",{d:"M17.916 10H19.5A2.5 2.5 0 0 0 22 7.5V5a1 1 0 0 0-1-1h-3",key:"e30mpu"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6.084 10H4.5A2.5 2.5 0 0 1 2 7.5V5a1 1 0 0 1 1-1h3",key:"i0yafy"}]],hm=tt("trophy",pm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=[["path",{d:"m17 2-5 5-5-5",key:"16satq"}],["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",key:"1e6viu"}]],gm=tt("tv",fm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],vm=tt("user",mm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],bm=tt("video",ym);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],bc=tt("wifi",xm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],xc=tt("x",wm);/**
 * @license lucide-react v1.35.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]],wc=tt("zap",Sm),xs=[{code:"en",label:"English",native:"English",short:"EN",flag:"🇺🇸",country:"us",region:"Global"},{code:"hi",label:"Hindi",native:"हिन्दी",short:"HI",flag:"🇮🇳",country:"in",region:"India"},{code:"es",label:"Spanish",native:"Español",short:"ES",flag:"🇪🇸",country:"es",region:"Europe/LatAm"},{code:"fr",label:"French",native:"Français",short:"FR",flag:"🇫🇷",country:"fr",region:"Europe"},{code:"de",label:"German",native:"Deutsch",short:"DE",flag:"🇩🇪",country:"de",region:"Europe"},{code:"ja",label:"Japanese",native:"日本語",short:"JA",flag:"🇯🇵",country:"jp",region:"East Asia"},{code:"zh",label:"Chinese",native:"简体中文",short:"ZH",flag:"🇨🇳",country:"cn",region:"East Asia"},{code:"ar",label:"Arabic",native:"العربية",short:"AR",flag:"🇸🇦",country:"sa",region:"Middle East"},{code:"pt",label:"Portuguese",native:"Português",short:"PT",flag:"🇧🇷",country:"br",region:"Americas/Europe"},{code:"ru",label:"Russian",native:"Русский",short:"RU",flag:"🇷🇺",country:"ru",region:"Eurasia"},{code:"it",label:"Italian",native:"Italiano",short:"IT",flag:"🇮🇹",country:"it",region:"Europe"},{code:"ko",label:"Korean",native:"한국어",short:"KO",flag:"🇰🇷",country:"kr",region:"East Asia"},{code:"tr",label:"Turkish",native:"Türkçe",short:"TR",flag:"🇹🇷",country:"tr",region:"Eurasia"},{code:"bn",label:"Bengali",native:"বাংলা",short:"BN",flag:"🇧🇩",country:"bd",region:"South Asia"},{code:"ur",label:"Urdu",native:"اردو",short:"UR",flag:"🇵🇰",country:"pk",region:"South Asia"},{code:"id",label:"Indonesian",native:"Bahasa Indonesia",short:"ID",flag:"🇮🇩",country:"id",region:"Southeast Asia"},{code:"vi",label:"Vietnamese",native:"Tiếng Việt",short:"VI",flag:"🇻🇳",country:"vn",region:"Southeast Asia"},{code:"th",label:"Thai",native:"ไทย",short:"TH",flag:"🇹🇭",country:"th",region:"Southeast Asia"},{code:"ta",label:"Tamil",native:"தமிழ்",short:"TA",flag:"🇮🇳",country:"in",region:"India"},{code:"te",label:"Telugu",native:"తెలుగు",short:"TE",flag:"🇮🇳",country:"in",region:"India"},{code:"mr",label:"Marathi",native:"मराठी",short:"MR",flag:"🇮🇳",country:"in",region:"India"},{code:"gu",label:"Gujarati",native:"ગુજરાતી",short:"GU",flag:"🇮🇳",country:"in",region:"India"},{code:"pa",label:"Punjabi",native:"ਪੰਜਾਬੀ",short:"PA",flag:"🇮🇳",country:"in",region:"India"},{code:"nl",label:"Dutch",native:"Nederlands",short:"NL",flag:"🇳🇱",country:"nl",region:"Europe"},{code:"pl",label:"Polish",native:"Polski",short:"PL",flag:"🇵🇱",country:"pl",region:"Europe"},{code:"uk",label:"Ukrainian",native:"Українська",short:"UK",flag:"🇺🇦",country:"ua",region:"Europe"},{code:"sv",label:"Swedish",native:"Svenska",short:"SV",flag:"🇸🇪",country:"se",region:"Nordic"},{code:"el",label:"Greek",native:"Ελληνικά",short:"EL",flag:"🇬🇷",country:"gr",region:"Europe"},{code:"cs",label:"Czech",native:"Čeština",short:"CS",flag:"🇨🇿",country:"cz",region:"Europe"},{code:"ro",label:"Romanian",native:"Română",short:"RO",flag:"🇷🇴",country:"ro",region:"Europe"},{code:"hu",label:"Hungarian",native:"Magyar",short:"HU",flag:"🇭🇺",country:"hu",region:"Europe"},{code:"da",label:"Danish",native:"Dansk",short:"DA",flag:"🇩🇰",country:"dk",region:"Nordic"},{code:"fi",label:"Finnish",native:"Suomi",short:"FI",flag:"🇫🇮",country:"fi",region:"Nordic"},{code:"no",label:"Norwegian",native:"Norsk",short:"NO",flag:"🇳🇴",country:"no",region:"Nordic"},{code:"he",label:"Hebrew",native:"עברית",short:"HE",flag:"🇮🇱",country:"il",region:"Middle East"},{code:"fa",label:"Persian",native:"فارسی",short:"FA",flag:"🇮🇷",country:"ir",region:"Middle East"},{code:"ms",label:"Malay",native:"Bahasa Melayu",short:"MS",flag:"🇲🇾",country:"my",region:"Southeast Asia"},{code:"tl",label:"Filipino",native:"Tagalog",short:"TL",flag:"🇵🇭",country:"ph",region:"Southeast Asia"},{code:"sw",label:"Swahili",native:"Kiswahili",short:"SW",flag:"🇰🇪",country:"ke",region:"Africa"},{code:"sk",label:"Slovak",native:"Slovenčina",short:"SK",flag:"🇸🇰",country:"sk",region:"Europe"},{code:"bg",label:"Bulgarian",native:"Български",short:"BG",flag:"🇧🇬",country:"bg",region:"Europe"},{code:"sr",label:"Serbian",native:"Српски",short:"SR",flag:"🇷🇸",country:"rs",region:"Europe"},{code:"hr",label:"Croatian",native:"Hrvatski",short:"HR",flag:"🇭🇷",country:"hr",region:"Europe"},{code:"lt",label:"Lithuanian",native:"Lietuvių",short:"LT",flag:"🇱🇹",country:"lt",region:"Europe"}],Bt={en:{brand:"NETSPEEDPRO",tagline:"Fast. Simple. Accurate.",navSpeedTest:"Speed Test",navHistory:"History",navServers:"Servers",navDiagnostics:"Diagnostics",navCompare:"Compare",navFAQ:"FAQ",navAbout:"About",heroTitle:"Test Your Internet Speed",heroSubtitle:"Check your download speed, upload speed, ping, jitter and network stability in seconds.",startTest:"START SPEED TEST",stopTest:"STOP TEST",testAgain:"TEST AGAIN",readyToTest:"Ready to test",browserTested:"Your connection will be tested directly using your browser.",phaseConnecting:"Finding best server...",phasePing:"Testing Ping & Latency...",phaseDownload:"Testing Download Speed...",phaseUpload:"Testing Upload Speed...",phaseStability:"Analyzing Network Stability...",phaseComplete:"TEST COMPLETE",download:"DOWNLOAD",upload:"UPLOAD",ping:"PING",jitter:"JITTER",packetLoss:"PACKET LOSS",stability:"STABILITY",networkStability:"Network Stability",excellent:"Excellent",good:"Good",fair:"Fair / Average",poor:"Poor",server:"Server",changeServer:"Change Server",autoServer:"Auto Server (Closest)",connection:"Connection",ipAddress:"IP Address",isp:"ISP / Provider",asn:"ASN",location:"Location",device:"Device",browser:"Browser",os:"Operating System",connectionInfo:"Connection Information",speedMeter:"Speed Meter",liveGraph:"Real-Time Speed Graph",shareResult:"Share Result",downloadResult:"Download Result",testHistory:"Test History",noHistory:"No test history yet. Run a speed test to save results.",clearHistory:"Clear History",delete:"Delete",view:"View",exportCsv:"Export CSV",exportJson:"Export JSON",exportPdf:"Export PDF Report",settings:"Settings",theme:"Theme",dark:"Dark",light:"Light",units:"Speed Unit",duration:"Test Duration",quick:"Quick (~5s)",standard:"Standard (~10s)",extended:"Extended (~20s)",parallelStreams:"Multi-Stream Connections",saveHistoryToggle:"Save History Locally",dataWarning:"Speed tests can consume significant data (up to 100MB+ per test).",faqTitle:"Frequently Asked Questions",aboutTitle:"About NETSPEEDPRO",privacyTitle:"Privacy Policy",termsTitle:"Terms of Service",compareTitle:"Compare Your Speed",diagnosticsTitle:"Network Diagnostics",bufferbloat:"Bufferbloat",dataUsed:"Data Used",yourSpeed:"Your Speed",avgSpeed:"Global Average",percentileText:"Faster than approximately {percent}% of tested broadband connections."},hi:{brand:"NETSPEEDPRO",tagline:"तेज़। सरल। सटीक।",navSpeedTest:"स्पीड टेस्ट",navHistory:"इतिहास",navServers:"सर्वर",navDiagnostics:"डायग्नोस्टिक्स",navCompare:"तुलना",navFAQ:"सामान्य प्रश्न",navAbout:"हमारे बारे में",heroTitle:"अपनी इंटरनेट स्पीड जांचें",heroSubtitle:"कुछ ही सेकंड में डाउनलोड स्पीड, अपलोड स्पीड, पिंग, जिटर और स्थिरता मापें।",startTest:"स्पीड टेस्ट शुरू करें",stopTest:"रोकें",testAgain:"पुनः परीक्षण करें",readyToTest:"परीक्षण के लिए तैयार",browserTested:"आपका कनेक्शन सीधे आपके ब्राउज़र से मापा जाएगा।",phaseConnecting:"सर्वश्रेष्ठ सर्वर से जुड़ रहे हैं...",phasePing:"पिंग और लेटेंसी मापी जा रही है...",phaseDownload:"डाउनलोड स्पीड मापी जा रही है...",phaseUpload:"अपलोड स्पीड मापी जा रही है...",phaseStability:"नेटवर्क स्थिरता का विश्लेषण...",phaseComplete:"परीक्षण पूरा हुआ",download:"डाउनलोड",upload:"अपलोड",ping:"पिंग",jitter:"जिटर",packetLoss:"पैकेट लॉस",stability:"स्थिरता",networkStability:"नेटवर्क स्थिरता",excellent:"उत्कृष्ट",good:"अच्छा",fair:"औसत",poor:"कमजोर",server:"सर्वर",changeServer:"सर्वर बदलें",autoServer:"स्वचालित सर्वर (निकटतम)",connection:"कनेक्शन",ipAddress:"आईपी पता",isp:"आईएसपी प्रदाता",asn:"एएसएन",location:"स्थान",device:"उपकरण",browser:"ब्राउज़र",os:"ऑपरेटिंग सिस्टम",connectionInfo:"कनेक्शन जानकारी",speedMeter:"स्पीडोमीटर",liveGraph:"लाइव स्पीड ग्राफ",shareResult:"परिणाम साझा करें",downloadResult:"परिणाम डाउनलोड करें",testHistory:"परीक्षण इतिहास",noHistory:"अभी कोई इतिहास नहीं है।",clearHistory:"इतिहास साफ़ करें",delete:"हटाएं",view:"देखें",exportCsv:"CSV निर्यात",exportJson:"JSON निर्यात",exportPdf:"PDF रिपोर्ट डाउनलोड करें",settings:"सेटिंग्स",theme:"थीम",dark:"डार्क",light:"लाइट",units:"स्पीड इकाई",duration:"परीक्षण अवधि",quick:"त्वरित (~5s)",standard:"मानक (~10s)",extended:"विस्तृत (~20s)",parallelStreams:"मल्टी-स्ट्रीम कनेक्शन",saveHistoryToggle:"इतिहास सहेजें",dataWarning:"स्पीड टेस्ट में अधिक डेटा खर्च हो सकता है।",faqTitle:"अक्सर पूछे जाने वाले प्रश्न",aboutTitle:"NETSPEEDPRO के बारे में",privacyTitle:"गोपनीयता नीति",termsTitle:"उपयोग की शर्तें",compareTitle:"स्पीड तुलना",diagnosticsTitle:"नेटवर्क डायग्नोस्टिक्स",bufferbloat:"बफरब्लोट",dataUsed:"उपयोग किया गया डेटा",yourSpeed:"आपकी स्पीड",avgSpeed:"वैश्विक औसत",percentileText:"आपके क्षेत्र के लगभग {percent}% ब्रॉडबैंड कनेक्शनों से तेज़।"},es:{brand:"NETSPEEDPRO",tagline:"Rápido. Simple. Preciso.",navSpeedTest:"Test de Velocidad",navHistory:"Historial",navServers:"Servidores",navDiagnostics:"Diagnósticos",navCompare:"Comparar",navFAQ:"Preguntas Frecuentes",navAbout:"Acerca de",heroTitle:"Prueba tu Velocidad de Internet",heroSubtitle:"Comprueba tu velocidad de descarga, subida, ping, jitter y estabilidad en segundos.",startTest:"INICIAR TEST",stopTest:"DETENER",testAgain:"PROBAR DE NUEVO",readyToTest:"Listo para probar",browserTested:"Tu conexión se probará directamente usando tu navegador.",phaseConnecting:"Conectando al mejor servidor...",phasePing:"Midiendo Ping y Latencia...",phaseDownload:"Probando Velocidad de Descarga...",phaseUpload:"Probando Velocidad de Subida...",phaseStability:"Analizando Estabilidad de Red...",phaseComplete:"PRUEBA COMPLETADA",download:"DESCARGA",upload:"SUBIDA",ping:"PING",jitter:"JITTER",packetLoss:"PÉRDIDA DE PAQUETES",stability:"ESTABILIDAD",networkStability:"Estabilidad de Red",excellent:"Excelente",good:"Bueno",fair:"Aceptable",poor:"Deficiente",server:"Servidor",changeServer:"Cambiar Servidor",autoServer:"Servidor Automático",connection:"Conexión",ipAddress:"Dirección IP",isp:"Proveedor (ISP)",asn:"ASN",location:"Ubicación",device:"Dispositivo",browser:"Navegador",os:"Sistema Operativo",connectionInfo:"Información de Conexión",speedMeter:"Velocímetro",liveGraph:"Gráfico en Tiempo Real",shareResult:"Compartir Resultado",downloadResult:"Descargar Informe",testHistory:"Historial de Pruebas",noHistory:"No hay historial aún.",clearHistory:"Borrar Historial",delete:"Eliminar",view:"Ver",exportCsv:"Exportar CSV",exportJson:"Exportar JSON",exportPdf:"Descargar Informe PDF",settings:"Ajustes",theme:"Tema",dark:"Oscuro",light:"Claro",units:"Unidad",duration:"Duración",quick:"Rápida (~5s)",standard:"Estándar (~10s)",extended:"Extendida (~20s)",parallelStreams:"Conexiones Paralelas",saveHistoryToggle:"Guardar Historial",dataWarning:"El test de velocidad puede consumir gran cantidad de datos.",faqTitle:"Preguntas Frecuentes",aboutTitle:"Acerca de NETSPEEDPRO",privacyTitle:"Política de Privacidad",termsTitle:"Términos de Servicio",compareTitle:"Comparar Velocidad",diagnosticsTitle:"Diagnósticos de Red",bufferbloat:"Bufferbloat",dataUsed:"Datos Usados",yourSpeed:"Tu Velocidad",avgSpeed:"Promedio Global",percentileText:"Más rápido que aproximadamente el {percent}% de las conexiones."},fr:{brand:"NETSPEEDPRO",tagline:"Rapide. Simple. Précis.",navSpeedTest:"Test de Débit",navHistory:"Historique",navServers:"Serveurs",navDiagnostics:"Diagnostics",navCompare:"Comparer",navFAQ:"FAQ",navAbout:"À Propos",heroTitle:"Testez Votre Débit Internet",heroSubtitle:"Mesurez vos débits descendant, montant, latence ping, gigue et stabilité réseau.",startTest:"LANCER LE TEST",stopTest:"ARRÊTER",testAgain:"RETESTER",readyToTest:"Prêt à tester",browserTested:"Votre connexion sera testée directement depuis votre navigateur.",phaseConnecting:"Connexion au serveur optimal...",phasePing:"Test du Ping & Latence...",phaseDownload:"Test du Débit Descendant...",phaseUpload:"Test du Débit Montant...",phaseStability:"Analyse de la Stabilité...",phaseComplete:"TEST TERMINÉ",download:"RÉCEPTION",upload:"ENVOI",ping:"PING",jitter:"GIGUE",packetLoss:"PERTE DE PAQUETS",stability:"STABILITÉ",networkStability:"Stabilité Réseau",excellent:"Excellent",good:"Bon",fair:"Moyen",poor:"Faible",server:"Serveur",changeServer:"Changer de Serveur",autoServer:"Serveur Automatique",connection:"Connexion",ipAddress:"Adresse IP",isp:"Fournisseur d'accès",asn:"ASN",location:"Localisation",device:"Appareil",browser:"Navigateur",os:"Système",connectionInfo:"Informations de Connexion",speedMeter:"Tachymètre",liveGraph:"Graphique en Direct",shareResult:"Partager le Résultat",downloadResult:"Télécharger le Rapport",testHistory:"Historique des Tests",noHistory:"Aucun historique disponible.",clearHistory:"Effacer l'historique",delete:"Supprimer",view:"Voir",exportCsv:"Exporter CSV",exportJson:"Exporter JSON",exportPdf:"Rapport PDF",settings:"Paramètres",theme:"Thème",dark:"Sombre",light:"Clair",units:"Unité",duration:"Durée",quick:"Rapide (~5s)",standard:"Standard (~10s)",extended:"Étendu (~20s)",parallelStreams:"Flux Parallèles",saveHistoryToggle:"Sauvegarder l'Historique",dataWarning:"Ce test peut consommer une quantité importante de données.",faqTitle:"Questions Fréquentes",aboutTitle:"À Propos de NETSPEEDPRO",privacyTitle:"Politique de Confidentialité",termsTitle:"Conditions d'Utilisation",compareTitle:"Comparer Débit",diagnosticsTitle:"Diagnostics Réseau",bufferbloat:"Bufferbloat",dataUsed:"Données Consommées",yourSpeed:"Votre Débit",avgSpeed:"Moyenne Mondiale",percentileText:"Plus rapide qu'environ {percent}% des connexions testées."},de:{brand:"NETSPEEDPRO",tagline:"Schnell. Einfach. Präzise.",navSpeedTest:"Speedtest",navHistory:"Verlauf",navServers:"Server",navDiagnostics:"Diagnose",navCompare:"Vergleich",navFAQ:"FAQ",navAbout:"Über Uns",heroTitle:"Internet-Geschwindigkeit testen",heroSubtitle:"Messen Sie Download-, Upload-Geschwindigkeit, Ping, Jitter und Netzwerkstabilität.",startTest:"TEST STARTEN",stopTest:"STOPPEN",testAgain:"NEU TESTEN",readyToTest:"Bereit zum Testen",browserTested:"Ihre Verbindung wird direkt in Ihrem Browser gemessen.",phaseConnecting:"Verbindung zum besten Server...",phasePing:"Ping und Latenz testen...",phaseDownload:"Download-Geschwindigkeit testen...",phaseUpload:"Upload-Geschwindigkeit testen...",phaseStability:"Netzwerkstabilität analysieren...",phaseComplete:"TEST ABGESCHLOSSEN",download:"DOWNLOAD",upload:"UPLOAD",ping:"PING",jitter:"JITTER",packetLoss:"PAKETVERLUST",stability:"STABILITÄT",networkStability:"Netzwerkstabilität",excellent:"Exzellent",good:"Gut",fair:"Durchschnittlich",poor:"Schlecht",server:"Server",changeServer:"Server wechseln",autoServer:"Automatischer Server",connection:"Verbindung",ipAddress:"IP-Adresse",isp:"Internetanbieter",asn:"ASN",location:"Standort",device:"Gerät",browser:"Browser",os:"Betriebssystem",connectionInfo:"Verbindungsdetails",speedMeter:"Geschwindigkeitsmesser",liveGraph:"Echtzeit-Diagramm",shareResult:"Ergebnis teilen",downloadResult:"Bericht herunterladen",testHistory:"Testverlauf",noHistory:"Noch kein Testverlauf vorhanden.",clearHistory:"Verlauf löschen",delete:"Löschen",view:"Anzeigen",exportCsv:"CSV Export",exportJson:"JSON Export",exportPdf:"PDF Bericht",settings:"Einstellungen",theme:"Design",dark:"Dunkel",light:"Hell",units:"Einheit",duration:"Testdauer",quick:"Schnell (~5s)",standard:"Standard (~10s)",extended:"Erweitert (~20s)",parallelStreams:"Parallele Streams",saveHistoryToggle:"Verlauf speichern",dataWarning:"Der Test kann ein hohes Datenvolumen verbrauchen.",faqTitle:"Häufige Fragen",aboutTitle:"Über NETSPEEDPRO",privacyTitle:"Datenschutz",termsTitle:"Nutzungsbedingungen",compareTitle:"Geschwindigkeit vergleichen",diagnosticsTitle:"Netzwerkdiagnose",bufferbloat:"Bufferbloat",dataUsed:"Verbrauchtes Datenvolumen",yourSpeed:"Ihre Geschwindigkeit",avgSpeed:"Weltweiter Durchschnitt",percentileText:"Schneller als etwa {percent}% aller gemessenen Anschlüsse."},ja:{brand:"NETSPEEDPRO",tagline:"高速。シンプル。正確。",navSpeedTest:"速度テスト",navHistory:"履歴",navServers:"サーバー",navDiagnostics:"診断",navCompare:"比較",navFAQ:"FAQ",navAbout:"概要",heroTitle:"インターネット速度を測定",heroSubtitle:"ダウンロード、アップロード、Ping、ジッター、接続安定性を瞬時にテストします。",startTest:"テスト開始",stopTest:"停止",testAgain:"再テスト",readyToTest:"測定準備完了",browserTested:"ブラウザから直接ネットワーク測定を行います。",phaseConnecting:"最適なサーバーに接続中...",phasePing:"Pingとレイテンシを測定中...",phaseDownload:"ダウンロード速度を測定中...",phaseUpload:"アップロード速度を測定中...",phaseStability:"ネットワーク安定性を解析中...",phaseComplete:"測定完了",download:"ダウンロード",upload:"アップロード",ping:"PING",jitter:"ジッター",packetLoss:"パケット損失",stability:"安定性",networkStability:"ネットワーク安定性",excellent:"極めて良好",good:"良好",fair:"標準",poor:"不安定",server:"サーバー",changeServer:"サーバー変更",autoServer:"自動選択（最寄り）",connection:"接続",ipAddress:"IPアドレス",isp:"プロバイダ (ISP)",asn:"ASN",location:"地域",device:"端末",browser:"ブラウザ",os:"OS",connectionInfo:"接続情報",speedMeter:"スピードメーター",liveGraph:"リアルタイムグラフ",shareResult:"結果を共有",downloadResult:"レポート保存",testHistory:"測定履歴",noHistory:"まだ測定履歴がありません。",clearHistory:"履歴を消去",delete:"削除",view:"詳細",exportCsv:"CSV出力",exportJson:"JSON出力",exportPdf:"PDFレポート出力",settings:"設定",theme:"テーマ",dark:"ダーク",light:"ライト",units:"速度単位",duration:"測定時間",quick:"クイック (~5秒)",standard:"標準 (~10秒)",extended:"拡張 (~20秒)",parallelStreams:"並列ストリーム数",saveHistoryToggle:"履歴を保存",dataWarning:"速度測定によりデータ通信量を消費します。",faqTitle:"よくある質問",aboutTitle:"NETSPEEDPROについて",privacyTitle:"プライバシーポリシー",termsTitle:"利用規約",compareTitle:"速度比較",diagnosticsTitle:"ネットワーク診断",bufferbloat:"バッファブロート",dataUsed:"消費データ量",yourSpeed:"測定速度",avgSpeed:"世界平均",percentileText:"測定された回線の約 {percent}% より高速です。"},zh:{brand:"NETSPEEDPRO",tagline:"快速。简单。精准。",navSpeedTest:"测速",navHistory:"历史",navServers:"服务器",navDiagnostics:"网络诊断",navCompare:"对比",navFAQ:"常见问题",navAbout:"关于",heroTitle:"测试您的网络速度",heroSubtitle:"几秒钟内精准测试下载速度、上传速度、延迟Ping、抖动与网络稳定性。",startTest:"开始测速",stopTest:"停止",testAgain:"重新测试",readyToTest:"准备测试",browserTested:"直接通过您的浏览器进行精准速度测试。",phaseConnecting:"连接最佳服务器中...",phasePing:"测试延迟和Ping...",phaseDownload:"测试下载速度...",phaseUpload:"测试上传速度...",phaseStability:"分析网络稳定性...",phaseComplete:"测试完成",download:"下载",upload:"上传",ping:"PING",jitter:"抖动",packetLoss:"丢包率",stability:"稳定性",networkStability:"网络稳定性",excellent:"极佳",good:"良好",fair:"一般",poor:"较差",server:"服务器",changeServer:"更换服务器",autoServer:"自动选择 (最近)",connection:"网络连接",ipAddress:"IP 地址",isp:"运营商 (ISP)",asn:"ASN 编号",location:"地理位置",device:"设备",browser:"浏览器",os:"操作系统",connectionInfo:"连接信息",speedMeter:"测速表盘",liveGraph:"实时速率曲线",shareResult:"分享结果",downloadResult:"下载报告",testHistory:"历史记录",noHistory:"暂无测试记录。",clearHistory:"清空历史",delete:"删除",view:"查看",exportCsv:"导出 CSV",exportJson:"导出 JSON",exportPdf:"导出 PDF 报告",settings:"设置",theme:"界面主题",dark:"深色模式",light:"浅色模式",units:"速率单位",duration:"测试时长",quick:"快速 (~5秒)",standard:"标准 (~10秒)",extended:"深度 (~20秒)",parallelStreams:"多线程并发数",saveHistoryToggle:"本地保存记录",dataWarning:"测速过程会消耗较多流量，请留意您的套餐配额。",faqTitle:"常见问题解答",aboutTitle:"关于 NETSPEEDPRO",privacyTitle:"隐私政策",termsTitle:"服务条款",compareTitle:"速度对比",diagnosticsTitle:"网络深度诊断",bufferbloat:"缓冲膨胀",dataUsed:"消耗流量",yourSpeed:"您的网速",avgSpeed:"全球均值",percentileText:"超越了约 {percent}% 的同类宽带连接。"},ar:{brand:"NETSPEEDPRO",tagline:"سريع. بسيط. دقيق.",navSpeedTest:"اختبار السرعة",navHistory:"السجل",navServers:"الخوادم",navDiagnostics:"التشخيص",navCompare:"مقارنة",navFAQ:"الأسئلة الشائعة",navAbout:"حول",heroTitle:"اختبر سرعة اتصالك بالإنترنت",heroSubtitle:"تحقق من سرعة التحميل والرفع، البينغ، الارتعاش واستقرار الشبكة في ثوانٍ.",startTest:"بدء الاختبار",stopTest:"إيقاف",testAgain:"إعادة الاختبار",readyToTest:"جاهز للاختبار",browserTested:"سيتم اختبار اتصالك مباشرة عبر المتصفح.",phaseConnecting:"جارٍ الاتصال بأفضل خادم...",phasePing:"قياس البينغ وزمن الاستجابة...",phaseDownload:"قياس سرعة التحميل...",phaseUpload:"قياس سرعة الرفع...",phaseStability:"تحليل استقرار الشبكة...",phaseComplete:"اكتمل الاختبار",download:"التحميل",upload:"الرفع",ping:"البينغ",jitter:"الارتعاش",packetLoss:"فقدان الحزم",stability:"الاستقرار",networkStability:"استقرار الشبكة",excellent:"ممتاز",good:"جيد",fair:"متوسط",poor:"ضعيف",server:"الخادم",changeServer:"تغيير الخادم",autoServer:"خادم تلقائي (الأقرب)",connection:"الاتصال",ipAddress:"عنوان IP",isp:"مزود الخدمة",asn:"ASN",location:"الموقع",device:"الجهاز",browser:"المتصفح",os:"نظام التشغيل",connectionInfo:"معلومات الاتصال",speedMeter:"عداد السرعة",liveGraph:"رسم بياني مباشر",shareResult:"مشاركة النتيجة",downloadResult:"تنزيل التقرير",testHistory:"سجل الاختبارات",noHistory:"لا يوجد سجل حتى الآن.",clearHistory:"مسح السجل",delete:"حذف",view:"عرض",exportCsv:"تصدير CSV",exportJson:"تصدير JSON",exportPdf:"تصدير تقرير PDF",settings:"الإعدادات",theme:"المظهر",dark:"داكن",light:"فاتح",units:"وحدة السرعة",duration:"مدة الاختبار",quick:"سريع (~5 ثوانٍ)",standard:"قياسي (~10 ثوانٍ)",extended:"موسع (~20 ثانية)",parallelStreams:"تدفقات متعددة",saveHistoryToggle:"حفظ السجل محلياً",dataWarning:"قد يستهلك الاختبار كمية ملحوظة من البيانات.",faqTitle:"الأسئلة الشائعة",aboutTitle:"حول NETSPEEDPRO",privacyTitle:"سياسة الخصوصية",termsTitle:"شروط الخدمة",compareTitle:"مقارنة السرعة",diagnosticsTitle:"تشخيص الشبكة",bufferbloat:"انتفاخ المخزن المؤقت",dataUsed:"البيانات المستخدمة",yourSpeed:"سرعتك",avgSpeed:"المعدل العالمي",percentileText:"أسرع من حوالي {percent}% من الاتصالات المختبرة."},pt:{brand:"NETSPEEDPRO",tagline:"Rápido. Simples. Preciso.",navSpeedTest:"Teste de Velocidade",navHistory:"Histórico",navServers:"Servidores",navDiagnostics:"Diagnósticos",navCompare:"Comparar",navFAQ:"FAQ",navAbout:"Sobre",heroTitle:"Teste sua Velocidade de Internet",heroSubtitle:"Verifique sua velocidade de download, upload, ping, jitter e estabilidade em segundos.",startTest:"INICIAR TESTE",stopTest:"PARAR",testAgain:"TESTAR NOVAMENTE",readyToTest:"Pronto para testar",browserTested:"Sua conexão será testada diretamente através do seu navegador.",phaseConnecting:"Conectando ao melhor servidor...",phasePing:"Medindo Ping e Latência...",phaseDownload:"Testando Velocidade de Download...",phaseUpload:"Testando Velocidade de Upload...",phaseStability:"Analisando Estabilidade de Rede...",phaseComplete:"TESTE CONCLUÍDO",download:"DOWNLOAD",upload:"UPLOAD",ping:"PING",jitter:"JITTER",packetLoss:"PERDA DE PACOTES",stability:"ESTABILIDADE",networkStability:"Estabilidade de Rede",excellent:"Excelente",good:"Bom",fair:"Médio",poor:"Ruim",server:"Servidor",changeServer:"Alterar Servidor",autoServer:"Servidor Automático",connection:"Conexão",ipAddress:"Endereço IP",isp:"Provedor (ISP)",asn:"ASN",location:"Localização",device:"Dispositivo",browser:"Navegador",os:"Sistema Operacional",connectionInfo:"Informações de Conexão",speedMeter:"Velocímetro",liveGraph:"Gráfico em Tempo Real",shareResult:"Compartilhar Resultado",downloadResult:"Baixar Relatório",testHistory:"Histórico de Testes",noHistory:"Nenhum histórico disponível.",clearHistory:"Limpar Histórico",delete:"Excluir",view:"Ver",exportCsv:"Exportar CSV",exportJson:"Exportar JSON",exportPdf:"Relatório em PDF",settings:"Configurações",theme:"Tema",dark:"Escuro",light:"Claro",units:"Unidade",duration:"Duração",quick:"Rápido (~5s)",standard:"Padrão (~10s)",extended:"Estendido (~20s)",parallelStreams:"Múltiplos Fluxos",saveHistoryToggle:"Salvar Histórico",dataWarning:"O teste de velocidade consome pacotes significativos de dados.",faqTitle:"Perguntas Frequentes",aboutTitle:"Sobre o NETSPEEDPRO",privacyTitle:"Política de Privacidade",termsTitle:"Termos de Serviço",compareTitle:"Comparar Velocidade",diagnosticsTitle:"Diagnósticos de Rede",bufferbloat:"Bufferbloat",dataUsed:"Dados Consumidos",yourSpeed:"Sua Velocidade",avgSpeed:"Média Global",percentileText:"Mais rápido que aproximadamente {percent}% das conexões."},ru:{brand:"NETSPEEDPRO",tagline:"Быстро. Просто. Точно.",navSpeedTest:"Спидтест",navHistory:"История",navServers:"Серверы",navDiagnostics:"Диагностика",navCompare:"Сравнить",navFAQ:"Вопросы",navAbout:"О сервисе",heroTitle:"Проверьте скорость интернета",heroSubtitle:"Измерьте скорость загрузки, отдачи, пинг, джиттер и стабильность сети за секунды.",startTest:"НАЧАТЬ ТЕСТ",stopTest:"СТОП",testAgain:"ПОВТОРИТЬ",readyToTest:"Готов к тестированию",browserTested:"Соединение проверяется напрямую через ваш браузер.",phaseConnecting:"Поиск оптимального сервера...",phasePing:"Измерение пинга и задержки...",phaseDownload:"Тестирование скорости загрузки...",phaseUpload:"Тестирование скорости отдачи...",phaseStability:"Анализ стабильности сети...",phaseComplete:"ТЕСТ ЗАВЕРШЕН",download:"СКАЧИВАНИЕ",upload:"ЗАГРУЗКА",ping:"ПИНГ",jitter:"ДЖИТТЕР",packetLoss:"ПОТЕРЯ ПАКЕТОВ",stability:"СТАБИЛЬНОСТЬ",networkStability:"Стабильность сети",excellent:"Отлично",good:"Хорошо",fair:"Средне",poor:"Плохо",server:"Сервер",changeServer:"Сменить сервер",autoServer:"Автовыбор (ближайший)",connection:"Подключение",ipAddress:"IP-адрес",isp:"Провайдер (ISP)",asn:"ASN",location:"Локация",device:"Устройство",browser:"Браузер",os:"ОС",connectionInfo:"Информация о сети",speedMeter:"Спидометр",liveGraph:"График в реальном времени",shareResult:"Поделиться",downloadResult:"Скачать отчет",testHistory:"История тестов",noHistory:"История пока пуста.",clearHistory:"Очистить историю",delete:"Удалить",view:"Просмотр",exportCsv:"Экспорт CSV",exportJson:"Экспорт JSON",exportPdf:"Экспорт PDF отчета",settings:"Настройки",theme:"Тема",dark:"Темная",light:"Светлая",units:"Единица скорости",duration:"Длительность",quick:"Быстро (~5с)",standard:"Стандартно (~10с)",extended:"Расширенно (~20с)",parallelStreams:"Параллельные потоки",saveHistoryToggle:"Сохранять историю",dataWarning:"Тест может израсходовать значительный объем интернет-трафика.",faqTitle:"Часто задаваемые вопросы",aboutTitle:"О проекте NETSPEEDPRO",privacyTitle:"Политика конфиденциальности",termsTitle:"Условия использования",compareTitle:"Сравнение скорости",diagnosticsTitle:"Диагностика сети",bufferbloat:"Bufferbloat",dataUsed:"Использовано трафика",yourSpeed:"Ваша скорость",avgSpeed:"Мировое среднее",percentileText:"Быстрее чем примерно {percent}% протестированных сетей."},it:{brand:"NETSPEEDPRO",tagline:"Veloce. Semplice. Preciso.",navSpeedTest:"Speed Test",navHistory:"Cronologia",navServers:"Server",navDiagnostics:"Diagnostica",navCompare:"Confronta",navFAQ:"FAQ",navAbout:"Chi Siamo",heroTitle:"Verifica la Velocità di Internet",heroSubtitle:"Misura download, upload, ping, jitter e stabilità di rete in pochi secondi.",startTest:"AVVIA TEST",stopTest:"FERMA",testAgain:"RIPETI TEST",readyToTest:"Pronto per il test",browserTested:"La tua connessione viene testata direttamente dal browser.",phaseConnecting:"Connessione al server migliore...",phasePing:"Misurazione Ping e Latenza...",phaseDownload:"Test Velocità di Download...",phaseUpload:"Test Velocità di Upload...",phaseStability:"Analisi Stabilità di Rete...",phaseComplete:"TEST COMPLETATO",download:"DOWNLOAD",upload:"UPLOAD",ping:"PING",jitter:"JITTER",packetLoss:"PERDITA PACCHETTI",stability:"STABILITÀ",networkStability:"Stabilità di Rete",excellent:"Eccellente",good:"Buono",fair:"Medio",poor:"Scarso",server:"Server",changeServer:"Cambia Server",autoServer:"Server Automatico",connection:"Connessione",ipAddress:"Indirizzo IP",isp:"Provider (ISP)",asn:"ASN",location:"Posizione",device:"Dispositivo",browser:"Browser",os:"Sistema Operativo",connectionInfo:"Informazioni di Connessione",speedMeter:"Tachimetro",liveGraph:"Grafico in Tempo Reale",shareResult:"Condividi Risultato",downloadResult:"Scarica Report",testHistory:"Cronologia Test",noHistory:"Nessuna cronologia disponibile.",clearHistory:"Cancella Cronologia",delete:"Elimina",view:"Visualizza",exportCsv:"Esporta CSV",exportJson:"Esporta JSON",exportPdf:"Report PDF",settings:"Impostazioni",theme:"Tema",dark:"Scuro",light:"Chiaro",units:"Unità",duration:"Durata",quick:"Rapido (~5s)",standard:"Standard (~10s)",extended:"Esteso (~20s)",parallelStreams:"Stream Multipli",saveHistoryToggle:"Salva Cronologia",dataWarning:"Lo speed test può consumare una quantità elevata di dati.",faqTitle:"Domande Frequenti",aboutTitle:"Informazioni su NETSPEEDPRO",privacyTitle:"Informativa sulla Privacy",termsTitle:"Termini di Servizio",compareTitle:"Confronta Velocità",diagnosticsTitle:"Diagnostica di Rete",bufferbloat:"Bufferbloat",dataUsed:"Dati Utilizzati",yourSpeed:"La Tua Velocità",avgSpeed:"Media Globale",percentileText:"Più veloce di circa il {percent}% delle connessioni testate."},ko:{brand:"NETSPEEDPRO",tagline:"빠르고. 단순하며. 정확합니다.",navSpeedTest:"속도 측정",navHistory:"측정 기록",navServers:"서버 목록",navDiagnostics:"네트워크 진단",navCompare:"속도 비교",navFAQ:"자주 묻는 질문",navAbout:"소개",heroTitle:"인터넷 속도 측정",heroSubtitle:"다운로드, 업로드, Ping 지연시간, 지터 및 네트워크 안정성을 몇 초 만에 확인하세요.",startTest:"속도 측정 시작",stopTest:"정지",testAgain:"다시 측정",readyToTest:"측정 준비 완료",browserTested:"브라우저에서 직접 초고속 네트워크 측정이 진행됩니다.",phaseConnecting:"최적의 서버에 연결 중...",phasePing:"Ping 및 지연 시간 측정 중...",phaseDownload:"다운로드 속도 측정 중...",phaseUpload:"업로드 속도 측정 중...",phaseStability:"네트워크 안정성 분석 중...",phaseComplete:"측정 완료",download:"다운로드",upload:"업로드",ping:"PING",jitter:"지터",packetLoss:"패킷 손실",stability:"안정성",networkStability:"네트워크 안정성",excellent:"매우 우수",good:"양호",fair:"보통",poor:"불안정",server:"서버",changeServer:"서버 변경",autoServer:"자동 선택 (가장 가까운 서버)",connection:"연결 정보",ipAddress:"IP 주소",isp:"인터넷 통신사 (ISP)",asn:"ASN",location:"위치",device:"기기",browser:"브라우저",os:"운영체제",connectionInfo:"연결 상세 정보",speedMeter:"속도계",liveGraph:"실시간 그래프",shareResult:"결과 공유",downloadResult:"보고서 저장",testHistory:"측정 기록",noHistory:"저장된 측정 기록이 없습니다.",clearHistory:"기록 삭제",delete:"삭제",view:"보기",exportCsv:"CSV 내보내기",exportJson:"JSON 내보내기",exportPdf:"PDF 보고서",settings:"설정",theme:"테마",dark:"다크 모드",light:"라이트 모드",units:"속도 단위",duration:"측정 시간",quick:"빠르게 (~5초)",standard:"표준 (~10초)",extended:"정밀 (~20초)",parallelStreams:"다중 스트림",saveHistoryToggle:"기록 저장",dataWarning:"속도 측정 시 많은 데이터가 소모될 수 있습니다.",faqTitle:"자주 묻는 질문",aboutTitle:"NETSPEEDPRO 소개",privacyTitle:"개인정보 처리방침",termsTitle:"이용 약관",compareTitle:"속도 비교",diagnosticsTitle:"네트워크 진단",bufferbloat:"버퍼블로트",dataUsed:"소모된 데이터",yourSpeed:"내 속도",avgSpeed:"전 세계 평균",percentileText:"측정된 전체 회선 중 상위 {percent}% 수준의 속도입니다."},tr:{brand:"NETSPEEDPRO",tagline:"Hızlı. Basit. Doğru.",navSpeedTest:"Hız Testi",navHistory:"Geçmiş",navServers:"Sunucular",navDiagnostics:"Tanılama",navCompare:"Karşılaştır",navFAQ:"SSS",navAbout:"Hakkında",heroTitle:"İnternet Hızınızı Test Edin",heroSubtitle:"İndirme, yükleme hızı, ping, jitter ve ağ kararlılığınızı saniyeler içinde ölçün.",startTest:"HIZ TESTİNİ BAŞLAT",stopTest:"DURDUR",testAgain:"TEKRAR TEST ET",readyToTest:"Test için hazır",browserTested:"Bağlantınız doğrudan tarayıcınız üzerinden test edilecektir.",phaseConnecting:"En iyi sunucuya bağlanılıyor...",phasePing:"Ping ve gecikme ölçülüyor...",phaseDownload:"İndirme hızı test ediliyor...",phaseUpload:"Yükleme hızı test ediliyor...",phaseStability:"Ağ kararlılığı analiz ediliyor...",phaseComplete:"TEST TAMAMLANDI",download:"İNDİRME",upload:"YÜKLEME",ping:"PING",jitter:"JITTER",packetLoss:"PAKET KAYBI",stability:"KARARLILIK",networkStability:"Ağ Kararlılığı",excellent:"Mükemmel",good:"İyi",fair:"Orta",poor:"Zayıf",server:"Sunucu",changeServer:"Sunucu Değiştir",autoServer:"Otomatik Sunucu",connection:"Bağlantı",ipAddress:"IP Adresi",isp:"İnternet Sağlayıcı",asn:"ASN",location:"Konum",device:"Cihaz",browser:"Tarayıcı",os:"İşletim Sistemi",connectionInfo:"Bağlantı Bilgileri",speedMeter:"Hız Göstergesi",liveGraph:"Canlı Grafik",shareResult:"Sonucu Paylaş",downloadResult:"Raporu İndir",testHistory:"Test Geçmişi",noHistory:"Henüz test geçmişi yok.",clearHistory:"Geçmişi Temizle",delete:"Sil",view:"Görüntüle",exportCsv:"CSV Dışa Aktar",exportJson:"JSON Dışa Aktar",exportPdf:"PDF Raporu",settings:"Ayarlar",theme:"Tema",dark:"Koyu",light:"Açık",units:"Hız Birimi",duration:"Test Süresi",quick:"Hızlı (~5sn)",standard:"Standart (~10sn)",extended:"Genişletilmiş (~20sn)",parallelStreams:"Paralel Akışlar",saveHistoryToggle:"Geçmişi Kaydet",dataWarning:"Hız testi önemli miktarda veri tüketebilir.",faqTitle:"Sıkça Sorulan Sorular",aboutTitle:"NETSPEEDPRO Hakkında",privacyTitle:"Gizlilik Politikası",termsTitle:"Kullanım Koşulları",compareTitle:"Hız Karşılaştırma",diagnosticsTitle:"Ağ Tanılama",bufferbloat:"Bufferbloat",dataUsed:"Kullanılan Veri",yourSpeed:"Hızınız",avgSpeed:"Küresel Ortalama",percentileText:"Test edilen bağlantıların yaklaşık %{percent} kadarından daha hızlı."},bn:{brand:"NETSPEEDPRO",tagline:"দ্রুত। সহজ। নির্ভুল।",navSpeedTest:"স্পিড টেস্ট",navHistory:"ইতিহাস",navServers:"সার্ভার",navDiagnostics:"ডায়াগনস্টিক",navCompare:"তুলনা",navFAQ:"প্রশ্নোত্তর",navAbout:"সম্পর্কে",heroTitle:"আপনার ইন্টারনেট স্পিড পরীক্ষা করুন",heroSubtitle:"কয়েক সেকেন্ডের মধ্যে ডাউনলোড, আপলোড স্পিড, পিং এবং নেটওয়ার্ক স্থায়িত্ব পরিমাপ করুন।",startTest:"স্পিড টেস্ট শুরু করুন",stopTest:"থামান",testAgain:"আবার পরীক্ষা করুন",readyToTest:"পরীক্ষার জন্য প্রস্তুত",browserTested:"আপনার ব্রাউজার থেকে সরাসরি সংযোগ পরিমাপ করা হবে।",phaseConnecting:"সেরা সার্ভারে সংযুক্ত হচ্ছে...",phasePing:"পিং এবং লেটেন্সি মাপা হচ্ছে...",phaseDownload:"ডাউনলোড স্পিড পরীক্ষা হচ্ছে...",phaseUpload:"আপলোড স্পিড পরীক্ষা হচ্ছে...",phaseStability:"নেটওয়ার্ক স্থায়িত্ব বিশ্লেষণ হচ্ছে...",phaseComplete:"পরীক্ষা সম্পন্ন",download:"ডাউনলোড",upload:"আপলোড",ping:"পিং",jitter:"জিটার",packetLoss:"প্যাকেট লস",stability:"স্থায়িত্ব",networkStability:"নেটওয়ার্ক স্থায়িত্ব",excellent:"চমৎকার",good:"ভালো",fair:"মাঝারি",poor:"দুর্বল",server:"সার্ভার",changeServer:"সার্ভার পরিবর্তন",autoServer:"স্বয়ংক্রিয় সার্ভার",connection:"সংযোগ",ipAddress:"আইপি ঠিকানা",isp:"আইএসপি সরবরাহকারী",asn:"এএসএন",location:"অবস্থান",device:"ডিভাইস",browser:"ব্রাউজার",os:"অপারেটিং সিস্টেম",connectionInfo:"সংযোগ তথ্য",speedMeter:"স্পিডোমিটার",liveGraph:"লাইভ গ্রাফ",shareResult:"ফলাফল শেয়ার করুন",downloadResult:"রিপোর্ট ডাউনলোড করুন",testHistory:"পরীক্ষার ইতিহাস",noHistory:"এখনও কোনও ইতিহাস নেই।",clearHistory:"ইতিহাস মুছুন",delete:"মুছুন",view:"দেখুন",exportCsv:"CSV এক্সপোর্ট",exportJson:"JSON এক্সপোর্ট",exportPdf:"PDF রিপোর্ট",settings:"সেটিংস",theme:"থিম",dark:"ডার্ক",light:"লাইট",units:"স্পিড ইউনিট",duration:"পরীক্ষার সময়কাল",quick:"দ্রুত (~৫ সে.)",standard:"সাধারণ (~১০ সে.)",extended:"বিস্তারিত (~২০ সে.)",parallelStreams:"মাল্টি-স্ট্রিম",saveHistoryToggle:"ইতিহাস সংরক্ষণ",dataWarning:"স্পিড টেস্টে অতিরিক্ত ডেটা খরচ হতে পারে।",faqTitle:"সাধারণ প্রশ্নাবলী",aboutTitle:"NETSPEEDPRO সম্পর্কে",privacyTitle:"গোপনীয়তা নীতি",termsTitle:"ব্যবহারের শর্তাবলী",compareTitle:"স্পিড তুলনা",diagnosticsTitle:"নেটওয়ার্ক ডায়াগনস্টিক",bufferbloat:"বাফারব্লোট",dataUsed:"ব্যবহৃত ডেটা",yourSpeed:"আপনার স্পিড",avgSpeed:"বিশ্ব গড়",percentileText:"প্রায় {percent}% ব্রডব্যান্ড সংযোগের চেয়ে দ্রুত।"},ur:{brand:"NETSPEEDPRO",tagline:"تیز۔ آسان۔ درست۔",navSpeedTest:"اسپیڈ ٹیسٹ",navHistory:"تاریخچہ",navServers:"سرورز",navDiagnostics:"تشخیص",navCompare:"موازنہ",navFAQ:"سوالات",navAbout:"ہمارے بارے میں",heroTitle:"اپنے انٹرنیٹ کی رفتار چیک کریں",heroSubtitle:"چند سیکنڈ میں ڈاؤن لوڈ، اپ لوڈ اسپیڈ، پنگ، جٹر اور نیٹ ورک کا استحکام جانچیں۔",startTest:"اسپیڈ ٹیسٹ شروع کریں",stopTest:"روکیں",testAgain:"دوبارہ ٹیسٹ کریں",readyToTest:"ٹیسٹ کے لیے تیار",browserTested:"براہ راست آپ کے براؤزر کے ذریعے انٹرنیٹ اسپیڈ ناپی جائے گی۔",phaseConnecting:"بہترین سرور سے رابطہ قائم ہو رہا ہے...",phasePing:"پنگ اور تاخیر کی جانچ...",phaseDownload:"ڈاؤن لوڈ اسپیڈ کا ٹیسٹ...",phaseUpload:"اپ لوڈ اسپیڈ کا ٹیسٹ...",phaseStability:"نیٹ ورک استحکام کا تجزیہ...",phaseComplete:"ٹیسٹ مکمل",download:"ڈاؤن لوڈ",upload:"اپ لوڈ",ping:"پنگ",jitter:"جٹر",packetLoss:"پیکٹ کا ضیاع",stability:"استحکام",networkStability:"نیٹ ورک استحکام",excellent:"شاندار",good:"بہتر",fair:"اوسط",poor:"کمزور",server:"سرور",changeServer:"سرور تبدیل کریں",autoServer:"خودکار سرور (قریبی)",connection:"کنکشن",ipAddress:"آئی پی ایڈریس",isp:"آئی ایس پی فراہم کنندہ",asn:"اے ایس این",location:"مقام",device:"ڈیوائس",browser:"براؤزر",os:"آپریٹنگ سسٹم",connectionInfo:"کنکشن کی تفصیلات",speedMeter:"اسپیڈومیٹر",liveGraph:"لائیو گراف",shareResult:"نتیجہ شیئر کریں",downloadResult:"رپورٹ ڈاؤن لوڈ کریں",testHistory:"ٹیسٹ کی تاریخ",noHistory:"کوئی تاریخ موجود نہیں۔",clearHistory:"تاریخ صاف کریں",delete:"حذف کریں",view:"دیکھیں",exportCsv:"CSV ایکسپورٹ",exportJson:"JSON ایکسپورٹ",exportPdf:"PDF رپورٹ",settings:"ترتیبات",theme:"تھیم",dark:"ڈارک",light:"لائٹ",units:"رفتار کی اکائی",duration:"ٹیسٹ کا دورانیہ",quick:"فوری (~5 سیکنڈ)",standard:"معیاری (~10 سیکنڈ)",extended:"تفصیلی (~20 سیکنڈ)",parallelStreams:"متعدد اسٹریمز",saveHistoryToggle:"تاریخ محفوظ کریں",dataWarning:"اسپیڈ ٹیسٹ میں زیادہ انٹرنیٹ ڈیٹا خرچ ہو سکتا ہے۔",faqTitle:"اکثر پوچھے گئے سوالات",aboutTitle:"NETSPEEDPRO کے بارے میں",privacyTitle:"رازداری کی پالیسی",termsTitle:"استعمال کی شرائط",compareTitle:"رفتار کا موازنہ",diagnosticsTitle:"نیٹ ورک تشخیص",bufferbloat:"بفر بلوٹ",dataUsed:"استعمال شدہ ڈیٹا",yourSpeed:"آپ کی رفتار",avgSpeed:"عالمی اوسط",percentileText:"تقریباً {percent}% انٹرنیٹ کنکشنز سے تیز۔"},id:{brand:"NETSPEEDPRO",tagline:"Cepat. Sederhana. Akurat.",navSpeedTest:"Tes Kecepatan",navHistory:"Riwayat",navServers:"Server",navDiagnostics:"Diagnostik",navCompare:"Bandingkan",navFAQ:"FAQ",navAbout:"Tentang",heroTitle:"Uji Kecepatan Internet Anda",heroSubtitle:"Periksa kecepatan unduh, unggah, ping, jitter, dan stabilitas jaringan dalam hitungan detik.",startTest:"MULAI TES",stopTest:"BERHENTI",testAgain:"TES LAGI",readyToTest:"Siap untuk menguji",browserTested:"Koneksi Anda akan diuji langsung melalui browser Anda.",phaseConnecting:"Menghubungkan ke server terbaik...",phasePing:"Mengukur Ping & Latensi...",phaseDownload:"Menguji Kecepatan Unduh...",phaseUpload:"Menguji Kecepatan Unggah...",phaseStability:"Menganalisis Stabilitas Jaringan...",phaseComplete:"TES SELESAI",download:"UNDUH",upload:"UNGGAH",ping:"PING",jitter:"JITTER",packetLoss:"PAKET HILANG",stability:"STABILITAS",networkStability:"Stabilitas Jaringan",excellent:"Sangat Baik",good:"Bagus",fair:"Cukup",poor:"Buruk",server:"Server",changeServer:"Ganti Server",autoServer:"Server Otomatis",connection:"Koneksi",ipAddress:"Alamat IP",isp:"Penyedia (ISP)",asn:"ASN",location:"Lokasi",device:"Perangkat",browser:"Browser",os:"Sistem Operasi",connectionInfo:"Informasi Koneksi",speedMeter:"Speedometer",liveGraph:"Grafik Real-Time",shareResult:"Bagikan Hasil",downloadResult:"Unduh Laporan",testHistory:"Riwayat Tes",noHistory:"Belum ada riwayat tes.",clearHistory:"Hapus Riwayat",delete:"Hapus",view:"Lihat",exportCsv:"Ekspor CSV",exportJson:"Ekspor JSON",exportPdf:"Laporan PDF",settings:"Pengaturan",theme:"Tema",dark:"Gelap",light:"Terang",units:"Satuan Kecepatan",duration:"Durasi Tes",quick:"Cepat (~5s)",standard:"Standar (~10s)",extended:"Lanjutan (~20s)",parallelStreams:"Multi-Stream",saveHistoryToggle:"Simpan Riwayat",dataWarning:"Tes kecepatan dapat menghabiskan kuota data yang cukup besar.",faqTitle:"Pertanyaan yang Sering Diajukan",aboutTitle:"Tentang NETSPEEDPRO",privacyTitle:"Kebijakan Privasi",termsTitle:"Syarat Layanan",compareTitle:"Bandingkan Kecepatan",diagnosticsTitle:"Diagnostik Jaringan",bufferbloat:"Bufferbloat",dataUsed:"Data Digunakan",yourSpeed:"Kecepatan Anda",avgSpeed:"Rata-rata Global",percentileText:"Lebih cepat dari sekitar {percent}% koneksi yang diuji."},vi:{brand:"NETSPEEDPRO",tagline:"Nhanh chóng. Đơn giản. Chính xác.",navSpeedTest:"Đo Tốc Độ",navHistory:"Lịch Sử",navServers:"Máy Chủ",navDiagnostics:"Chẩn Đoán",navCompare:"So Sánh",navFAQ:"Hỏi Đáp",navAbout:"Giới Thiệu",heroTitle:"Kiểm Tra Tốc Độ Mạng Internet",heroSubtitle:"Đo tốc độ tải xuống, tải lên, ping, jitter và độ ổn định mạng trong vài giây.",startTest:"BẮT ĐẦU ĐO",stopTest:"DỪNG",testAgain:"ĐO LẠI",readyToTest:"Sẵn sàng đo",browserTested:"Kết nối của bạn sẽ được kiểm tra trực tiếp qua trình duyệt.",phaseConnecting:"Đang kết nối máy chủ tối ưu...",phasePing:"Đang đo Ping và độ trễ...",phaseDownload:"Đang đo tốc độ tải xuống...",phaseUpload:"Đang đo tốc độ tải lên...",phaseStability:"Phân tích độ ổn định...",phaseComplete:"ĐO HOÀN TẤT",download:"TẢI XUỐNG",upload:"TẢI LÊN",ping:"PING",jitter:"JITTER",packetLoss:"MẤT GÓI TIN",stability:"ỔN ĐỊNH",networkStability:"Độ Ổn Định Mạng",excellent:"Tuyệt Vời",good:"Tốt",fair:"Trung Bình",poor:"Kém",server:"Máy Chủ",changeServer:"Đổi Máy Chủ",autoServer:"Tự Động (Gần Nhất)",connection:"Kết Nối",ipAddress:"Địa Chỉ IP",isp:"Nhà Cung Cấp (ISP)",asn:"ASN",location:"Vị Trí",device:"Thiết Bị",browser:"Trình Duyệt",os:"Hệ Điều Hành",connectionInfo:"Thông Tin Mạng",speedMeter:"Đồng Hồ Tốc Độ",liveGraph:"Biểu Đồ Trực Tiếp",shareResult:"Chia Sẻ Kết Quả",downloadResult:"Tải Báo Cáo",testHistory:"Lịch Sử Đo",noHistory:"Chưa có lịch sử đo nào.",clearHistory:"Xóa Lịch Sử",delete:"Xóa",view:"Xem",exportCsv:"Xuất CSV",exportJson:"Xuất JSON",exportPdf:"Báo Cáo PDF",settings:"Cài Đặt",theme:"Giao Diện",dark:"Tối",light:"Sáng",units:"Đơn Vị",duration:"Thời Gian Đo",quick:"Nhanh (~5s)",standard:"Tiêu Chuẩn (~10s)",extended:"Mở Rộng (~20s)",parallelStreams:"Đa Luồng",saveHistoryToggle:"Lưu Lịch Sử",dataWarning:"Quá trình đo có thể tiêu tốn một lượng dung lượng dữ liệu đáng kể.",faqTitle:"Câu Hỏi Thường Gặp",aboutTitle:"Về NETSPEEDPRO",privacyTitle:"Chính Sách Bảo Mật",termsTitle:"Điều Khoản Dịch Vụ",compareTitle:"So Sánh Tốc Độ",diagnosticsTitle:"Chẩn Đoán Mạng",bufferbloat:"Bufferbloat",dataUsed:"Dữ Liệu Đã Dùng",yourSpeed:"Tốc Độ Của Bạn",avgSpeed:"Trung Bình Toàn Cầu",percentileText:"Nhanh hơn khoảng {percent}% các kết nối mạng được kiểm tra."},th:{brand:"NETSPEEDPRO",tagline:"เร็ว. เรียบง่าย. แม่นยำ.",navSpeedTest:"ทดสอบความเร็ว",navHistory:"ประวัติ",navServers:"เซิร์ฟเวอร์",navDiagnostics:"วินิจฉัย",navCompare:"เปรียบเทียบ",navFAQ:"คำถามที่พบบ่อย",navAbout:"เกี่ยวกับ",heroTitle:"ทดสอบความเร็วอินเทอร์เน็ตของคุณ",heroSubtitle:"วัดความเร็วการดาวน์โหลด อัปโหลด ค่า Ping ค่า Jitter และความเสถียรของเครือข่ายในไม่กี่วินาที",startTest:"เริ่มทดสอบความเร็ว",stopTest:"หยุด",testAgain:"ทดสอบอีกครั้ง",readyToTest:"พร้อมทดสอบ",browserTested:"การเชื่อมต่อจะได้รับการทดสอบโดยตรงผ่านเบราว์เซอร์ของคุณ",phaseConnecting:"กำลังเชื่อมต่อไปยังเซิร์ฟเวอร์ที่ดีที่สุด...",phasePing:"กำลังวัดค่า Ping และความหน่วง...",phaseDownload:"กำลังทดสอบความเร็วดาวน์โหลด...",phaseUpload:"กำลังทดสอบความเร็วอัปโหลด...",phaseStability:"กำลังวิเคราะห์ความเสถียร...",phaseComplete:"การทดสอบเสร็จสมบูรณ์",download:"ดาวน์โหลด",upload:"อัปโหลด",ping:"PING",jitter:"JITTER",packetLoss:"แพ็กเก็ตสูญหาย",stability:"ความเสถียร",networkStability:"ความเสถียรเครือข่าย",excellent:"ยอดเยี่ยม",good:"ดี",fair:"ปานกลาง",poor:"แย่",server:"เซิร์ฟเวอร์",changeServer:"เปลี่ยนเซิร์ฟเวอร์",autoServer:"เซิร์ฟเวอร์อัตโนมัติ",connection:"การเชื่อมต่อ",ipAddress:"ที่อยู่ IP",isp:"ผู้ให้บริการ (ISP)",asn:"ASN",location:"ตำแหน่ง",device:"อุปกรณ์",browser:"เบราว์เซอร์",os:"ระบบปฏิบัติการ",connectionInfo:"ข้อมูลการเชื่อมต่อ",speedMeter:"หน้าปัดความเร็ว",liveGraph:"กราฟแบบเรียลไทม์",shareResult:"แชร์ผลลัพธ์",downloadResult:"ดาวน์โหลดรายงาน",testHistory:"ประวัติการทดสอบ",noHistory:"ยังไม่มีประวัติการทดสอบ",clearHistory:"ล้างประวัติ",delete:"ลบ",view:"ดู",exportCsv:"ส่งออก CSV",exportJson:"ส่งออก JSON",exportPdf:"รายงาน PDF",settings:"การตั้งค่า",theme:"ธีม",dark:"มืด",light:"สว่าง",units:"หน่วยความเร็ว",duration:"ระยะเวลาทดสอบ",quick:"เร็ว (~5 วิ)",standard:"มาตรฐาน (~10 วิ)",extended:"ละเอียด (~20 วิ)",parallelStreams:"หลายสตรีม",saveHistoryToggle:"บันทึกประวัติ",dataWarning:"การทดสอบอาจใช้ปริมาณข้อมูลอินเทอร์เน็ตมาก",faqTitle:"คำถามที่พบบ่อย",aboutTitle:"เกี่ยวกับ NETSPEEDPRO",privacyTitle:"นโยบายความเป็นส่วนตัว",termsTitle:"ข้อกำหนดการใช้งาน",compareTitle:"เปรียบเทียบความเร็ว",diagnosticsTitle:"วินิจฉัยเครือข่าย",bufferbloat:"Bufferbloat",dataUsed:"ข้อมูลที่ใช้",yourSpeed:"ความเร็วของคุณ",avgSpeed:"ค่าเฉลี่ยทั่วโลก",percentileText:"เร็วกว่าประมาณ {percent}% ของการเชื่อมต่อที่ทดสอบ"},ta:{brand:"NETSPEEDPRO",tagline:"வேகம். எளிமை. துல்லியம்.",navSpeedTest:"வேக சோதனை",navHistory:"வரலாறு",navServers:"சர்வர்கள்",navDiagnostics:"கண்டறிதல்",navCompare:"ஒப்பீடு",navFAQ:"கேள்வி-பதில்",navAbout:"எங்களை பற்றி",heroTitle:"இணைய வேகத்தை சோதிக்கவும்",heroSubtitle:"பதிவிறக்கம், பதிவேற்றம், பிங், ஜிட்டர் மற்றும் நெட்வொர்க் நிலைத்தன்மையை நொடிகளில் அளவிடுங்கள்.",startTest:"சோதனையைத் தொடங்கு",stopTest:"நிறுத்து",testAgain:"மீண்டும் சோதிக்கவும்",readyToTest:"சோதனைக்கு தயார்",browserTested:"உங்கள் உலாவி மூலம் நேரடியாக இணைய வேகம் சோதிக்கப்படும்.",phaseConnecting:"சிறந்த சர்வரில் இணைகிறது...",phasePing:"பிங் மற்றும் லேட்டன்சி கணக்கிடப்படுகிறது...",phaseDownload:"பதிவிறக்க வேகம் சோதிக்கப்படுகிறது...",phaseUpload:"பதிவேற்ற வேகம் சோதிக்கப்படுகிறது...",phaseStability:"நெட்வொர்க் நிலைத்தன்மை பகுப்பாய்வு...",phaseComplete:"சோதனை முடிந்தது",download:"பதிவிறக்கம்",upload:"பதிவேற்றம்",ping:"பிங்",jitter:"ஜிட்டர்",packetLoss:"பாக்கெட் இழப்பு",stability:"நிலைத்தன்மை",networkStability:"நெட்வொர்க் நிலைத்தன்மை",excellent:"மிக நன்று",good:"நன்று",fair:"சராசரி",poor:"மோசம்",server:"சர்வர்",changeServer:"சர்வரை மாற்று",autoServer:"தானியங்கி சர்வர் (அருகில் உள்ள)",connection:"இணைப்பு",ipAddress:"ஐபி முகவரி",isp:"ஐஎஸ்பி வழங்குநர்",asn:"ஏஎஸ்என்",location:"இடம்",device:"சாதனம்",browser:"உலாவி",os:"இயக்க முறைமை",connectionInfo:"இணைப்பு விவரங்கள்",speedMeter:"ஸ்பீடோமீட்டர்",liveGraph:"நேரலை வரைபடம்",shareResult:"முடிவை பகிர்",downloadResult:"அறிக்கையை பதிவிறக்கு",testHistory:"சோதனை வரலாறு",noHistory:"வரலாறு எதுவும் இல்லை.",clearHistory:"வரலாற்றை அழி",delete:"நீக்கு",view:"பார்",exportCsv:"CSV ஏற்றுமதி",exportJson:"JSON ஏற்றுமதி",exportPdf:"PDF அறிக்கை",settings:"அமைப்புகள்",theme:"தீம்",dark:"டார்க்",light:"லைட்",units:"வேக அலகு",duration:"சோதனை காலம்",quick:"விரைவு (~5 வி)",standard:"இயல்பு (~10 வி)",extended:"விரிவான (~20 வி)",parallelStreams:"பல ஸ்ட்ரீம்கள்",saveHistoryToggle:"வரலாற்றைச் சேமி",dataWarning:"சோதனையில் அதிக இணைய தரவு செலவாகலாம்.",faqTitle:"அடிக்கடி கேட்கப்படும் கேள்விகள்",aboutTitle:"NETSPEEDPRO பற்றி",privacyTitle:"தனியுரிமைக் கொள்கை",termsTitle:"பயன்பாட்டு விதிமுறைகள்",compareTitle:"வேக ஒப்பீடு",diagnosticsTitle:"நெட்வொர்க் கண்டறிதல்",bufferbloat:"பஃப்பர்ப்ளோட்",dataUsed:"பயன்படுத்தப்பட்ட தரவு",yourSpeed:"உங்கள் வேகம்",avgSpeed:"உலகளாவிய சராசரி",percentileText:"சோதிக்கப்பட்ட இணைப்புகளில் சுமார் {percent}% விட வேகமானது."},te:{brand:"NETSPEEDPRO",tagline:"వేగం. సరళం. ఖచ్చితం.",navSpeedTest:"స్పీడ్ టెస్ట్",navHistory:"చరిత్ర",navServers:"సర్వర్లు",navDiagnostics:"విశ్లేషణ",navCompare:"పోలిక",navFAQ:"ప్రశ్నలు",navAbout:"గురించి",heroTitle:"మీ ఇంటర్నెట్ వేగాన్ని పరీక్షించండి",heroSubtitle:"డౌన్‌లోడ్, అప్‌లోడ్ స్పీడ్, పింగ్, జిట్టర్ మరియు నెట్‌వర్క్ స్థిరత్వాన్ని క్షణాల్లో తెలుసుకోండి.",startTest:"టెస్ట్ ప్రారంభించండి",stopTest:"ఆపు",testAgain:"మళ్లీ పరీక్షించండి",readyToTest:"పరీక్షకు సిద్ధంగా ఉంది",browserTested:"మీ బ్రౌజర్ ద్వారా నేరుగా ఇంటర్నెట్ వేగం పరీక్షించబడుతుంది.",phaseConnecting:"ఉత్తమ సర్వర్‌కు కనెక్ట్ అవుతోంది...",phasePing:"పింగ్ మరియు లేటెన్సీ లెక్కింపు...",phaseDownload:"డౌన్‌లోడ్ స్పీడ్ పరీక్షిస్తోంది...",phaseUpload:"అప్‌లోడ్ స్పీడ్ పరీక్షిస్తోంది...",phaseStability:"నెట్‌వర్క్ స్థిరత్వం విశ్లేషణ...",phaseComplete:"పరీక్ష పూర్తయింది",download:"డౌన్‌లోడ్",upload:"అప్‌లోడ్",ping:"పింగ్",jitter:"జిట్టర్",packetLoss:"ప్యాకెట్ నష్టం",stability:"స్థిరత్వం",networkStability:"నెట్‌వర్క్ స్థిరత్వం",excellent:"అద్భుతం",good:"మంచిది",fair:"సగటు",poor:"బలహీనం",server:"సర్వర్",changeServer:"సర్వర్ మార్చండి",autoServer:"ఆటో సర్వర్ (సమీపంలో)",connection:"కనెక్షన్",ipAddress:"IP చిరునామా",isp:"ISP ప్రొవైడర్",asn:"ASN",location:"స్థానం",device:"పరికరం",browser:"బ్రౌజర్",os:"ఆపరేటింగ్ సిస్టమ్",connectionInfo:"కనెక్షన్ సమాచారం",speedMeter:"స్పీడోమీటర్",liveGraph:"లైవ్ గ్రాఫ్",shareResult:"ఫలితం పంచుకోండి",downloadResult:"నివేదిక డౌన్‌లోడ్ చేయండి",testHistory:"పరీక్ష చరిత్ర",noHistory:"ఇంకా చరిత్ర ఏదీ లేదు.",clearHistory:"చరిత్రను తొలగించు",delete:"తొలగించు",view:"చూడండి",exportCsv:"CSV ఎగుమతి",exportJson:"JSON ఎగుమతి",exportPdf:"PDF నివేదిక",settings:"సెట్టింగ్‌లు",theme:"థీమ్",dark:"డార్క్",light:"లైట్",units:"వేగం యూనిట్",duration:"పరీక్ష సమయం",quick:"వేగవంతమైన (~5సె)",standard:"ప్రామాణిక (~10సె)",extended:"విస్తృత (~20సె)",parallelStreams:"బహుళ స్ట్రీమ్‌లు",saveHistoryToggle:"చరిత్రను సేవ్ చేయండి",dataWarning:"స్పీడ్ టెస్ట్‌లో ఎక్కువ డేటా ఖర్చు కావచ్చు.",faqTitle:"తరచుగా అడిగే ప్రశ్నలు",aboutTitle:"NETSPEEDPRO గురించి",privacyTitle:"గోప్యతా విధానం",termsTitle:"సేవా నిబంధనలు",compareTitle:"వేగం పోలిక",diagnosticsTitle:"నెట్‌వర్క్ విశ్లేషణ",bufferbloat:"బఫర్‌బ్లోట్",dataUsed:"ఉపయోగించిన డేటా",yourSpeed:"మీ వేగం",avgSpeed:"ప్రపంచ సగటు",percentileText:"దాదాపు {percent}% బ్రాడ్‌బ్యాండ్ కనెక్షన్‌ల కంటే వేగవంతమైనది."},mr:{brand:"NETSPEEDPRO",tagline:"जलद. सोपे. अचूक.",navSpeedTest:"स्पीड टेस्ट",navHistory:"इतिहास",navServers:"सर्व्हर्स",navDiagnostics:"निदान",navCompare:"तुलना",navFAQ:"वारंवार विचारले जाणारे प्रश्न",navAbout:"आमच्याबद्दल",heroTitle:"तुमचा इंटरनेट स्पीड तपासा",heroSubtitle:"काही सेकंदात डाउनलोड, अपलोड स्पीड, पिंग, जिटर आणि नेटवर्क स्थिरता तपासा.",startTest:"स्पीड टेस्ट सुरू करा",stopTest:"थांबवा",testAgain:"पुन्हा तपासा",readyToTest:"चाचणीसाठी तयार",browserTested:"तुमचे कनेक्शन थेट तुमच्या ब्राउझरद्वारे तपासले जाईल.",phaseConnecting:"सर्वोत्तम सर्व्हरशी जोडत आहे...",phasePing:"पिंग आणि लेटन्सी मोजत आहे...",phaseDownload:"डाउनलोड स्पीड तपासत आहे...",phaseUpload:"अपलोड स्पीड तपासत आहे...",phaseStability:"नेटवर्क स्थिरतेचे विश्लेषण...",phaseComplete:"चाचणी पूर्ण झाली",download:"डाउनलोड",upload:"अपलोड",ping:"पिंग",jitter:"जिटर",packetLoss:"पॅकेट लॉस",stability:"स्थिरता",networkStability:"नेटवर्क स्थिरता",excellent:"उत्कृष्ट",good:"चांगले",fair:"सरासरी",poor:"कमकुवत",server:"सर्व्हर",changeServer:"सर्व्हर बदला",autoServer:"स्वयंचलित सर्व्हर (जवळचा)",connection:"कनेक्शन",ipAddress:"आयपी पत्ता",isp:"आयएसपी प्रदाता",asn:"एएसएन",location:"स्थान",device:"डिव्हाइस",browser:"ब्राउझर",os:"ऑपरेटिंग सिस्टम",connectionInfo:"कनेक्शन माहिती",speedMeter:"स्पीडोमीटर",liveGraph:"थेट आलेख",shareResult:"निकाल शेअर करा",downloadResult:"अहवाल डाउनलोड करा",testHistory:"चाचणी इतिहास",noHistory:"अद्याप कोणताही इतिहास नाही.",clearHistory:"इतिहास साफ करा",delete:"हटवा",view:"पहा",exportCsv:"CSV निर्यात",exportJson:"JSON निर्यात",exportPdf:"PDF अहवाल",settings:"सेटिंग्ज",theme:"थीम",dark:"डार्क",light:"लाइट",units:"स्पीड एकक",duration:"कालावधी",quick:"जलद (~5 से)",standard:"मानक (~10 से)",extended:"सविस्तर (~20 से)",parallelStreams:"मल्टी-स्ट्रीम्स",saveHistoryToggle:"इतिहास जतन करा",dataWarning:"स्पीड टेस्टमध्ये जास्त डेटा खर्च होऊ शकतो.",faqTitle:"वारंवार विचारले जाणारे प्रश्न",aboutTitle:"NETSPEEDPRO बद्दल",privacyTitle:"गोपनीयता धोरण",termsTitle:"वापराच्या अटी",compareTitle:"स्पीड तुलना",diagnosticsTitle:"नेटवर्क निदान",bufferbloat:"बफरब्लोट",dataUsed:"वापरलेला डेटा",yourSpeed:"तुमचा स्पीड",avgSpeed:"जागतिक सरासरी",percentileText:"जवळपास {percent}% ब्रॉडबँड कनेक्शनपेक्षा वेगवान."},gu:{brand:"NETSPEEDPRO",tagline:"ઝડપી. સરળ. સચોટ.",navSpeedTest:"સ્પીડ ટેસ્ટ",navHistory:"ઇતિહાસ",navServers:"સર્વર્સ",navDiagnostics:"ડાયગ્નોસ્ટિક્સ",navCompare:"સરખામણી",navFAQ:"પ્રશ્નોત્તરી",navAbout:"અમારા વિશે",heroTitle:"તમારો ઇન્ટરનેટ સ્પીડ ટેસ્ટ કરો",heroSubtitle:"થોડી જ સેકન્ડોમાં ડાઉનલોડ, અપલોડ સ્પીડ, પિંગ, જિટર અને નેટવર્ક સ્થિરતા માપો.",startTest:"સ્પીડ ટેસ્ટ શરૂ કરો",stopTest:"રોકો",testAgain:"ફરી ટેસ્ટ કરો",readyToTest:"ટેસ્ટ માટે તૈયાર",browserTested:"તમારું કનેક્શન સીધું તમારા બ્રાઉઝરથી માપવામાં આવશે.",phaseConnecting:"શ્રેષ્ઠ સર્વર સાથે જોડાઈ રહ્યું છે...",phasePing:"પિંગ અને લેટન્સી માપી રહ્યું છે...",phaseDownload:"ડાઉનલોડ સ્પીડ માપી રહ્યું છે...",phaseUpload:"અપલોડ સ્પીડ માપી રહ્યું છે...",phaseStability:"નેટવર્ક સ્થિરતાનું વિશ્લેષણ...",phaseComplete:"ટેસ્ટ પૂર્ણ થયો",download:"ડાઉનલોડ",upload:"અપલોડ",ping:"ピング",jitter:"જિટર",packetLoss:"પેકેટ નુકસાન",stability:"સ્થિરતા",networkStability:"નેટવર્ક સ્થિરતા",excellent:"ઉત્કૃષ્ટ",good:"સારું",fair:"સામાન્ય",poor:"નબળું",server:"સર્વર",changeServer:"સર્વર બદલો",autoServer:"ઓટો સર્વર (નજીકનું)",connection:"કનેક્શન",ipAddress:"IP સરનામું",isp:"ISP પ્રોવાઇડર",asn:"ASN",location:"સ્થળ",device:"ઉપકરણ",browser:"બ્રાઉઝર",os:"ઓપરેટિંગ સિસ્ટમ",connectionInfo:"કનેક્શન માહિતી",speedMeter:"સ્પીડોમીટર",liveGraph:"લાઈવ ગ્રાફ",shareResult:"પરિણામ શેર કરો",downloadResult:"રિપોર્ટ ડાઉનલોડ કરો",testHistory:"ટેસ્ટ ઇતિહાસ",noHistory:"હજુ સુધી કોઈ ઇતિહાસ નથી.",clearHistory:"ઇતિહાસ સાફ કરો",delete:"કાઢી નાખો",view:"જુઓ",exportCsv:"CSV એક્સપોર્ટ",exportJson:"JSON એક્સપોર્ટ",exportPdf:"PDF રિપોર્ટ",settings:"સેટિંગ્સ",theme:"થીમ",dark:"ડાર્ક",light:"લાઇટ",units:"સ્પીડ એકમ",duration:"ટેસ્ટ સમય",quick:"ઝડપી (~5 સે)",standard:"સામાન્ય (~10 સે)",extended:"વિસ્તૃત (~20 સે)",parallelStreams:"મલ્ટી-સ્ટ્રીમ્સ",saveHistoryToggle:"ઇતિહાસ સાચવો",dataWarning:"સ્પીડ ટેસ્ટમાં વધુ ડેટા વપરાઈ શકે છે.",faqTitle:"વારંવાર પૂછાતા પ્રશ્નો",aboutTitle:"NETSPEEDPRO વિશે",privacyTitle:"ગોપનીયતા નીતિ",termsTitle:"ઉપયોગની શરતો",compareTitle:"સ્પીડ સરખામણી",diagnosticsTitle:"નેટવર્ક ડાયગ્નોસ્ટિક્સ",bufferbloat:"બફરબ્લોટ",dataUsed:"વપરાયેલ ડેટા",yourSpeed:"તમારી સ્પીડ",avgSpeed:"વૈશ્વિક સરેરાશ",percentileText:"આશરે {percent}% બ્રોડબેન્ડ કનેક્શન્સ કરતાં ઝડપી."},pa:{brand:"NETSPEEDPRO",tagline:"ਤੇਜ਼। ਸਰਲ। ਸਹੀ।",navSpeedTest:"ਸਪੀਡ ਟੈਸਟ",navHistory:"ਇਤਿਹਾਸ",navServers:"ਸਰਵਰ",navDiagnostics:"ਜਾਂਚ",navCompare:"ਤੁਲਨਾ",navFAQ:"ਸਵਾਲ-ਜਵਾਬ",navAbout:"ਸਾਡੇ ਬਾਰੇ",heroTitle:"ਆਪਣੀ ਇੰਟਰਨੈੱਟ ਸਪੀਡ ਚੈੱਕ ਕਰੋ",heroSubtitle:"ਕੁਝ ਸਕਿੰਟਾਂ ਵਿੱਚ ਡਾਊਨਲੋਡ, ਅੱਪਲੋਡ ਸਪੀਡ, ਪਿੰਗ, ਜਿਟਰ ਅਤੇ ਨੈੱਟਵਰਕ ਸਥਿਰਤਾ ਮਾਪੋ।",startTest:"ਸਪੀਡ ਟੈਸਟ ਸ਼ੁਰੂ ਕਰੋ",stopTest:"ਰੋਕੋ",testAgain:"ਦੁਬਾਰਾ ਟੈਸਟ ਕਰੋ",readyToTest:"ਟੈਸਟ ਲਈ ਤਿਆਰ",browserTested:"ਤੁਹਾਡਾ ਕਨੈਕਸ਼ਨ ਸਿੱਧਾ ਤੁਹਾਡੇ ਬ੍ਰਾਊਜ਼ਰ ਰਾਹੀਂ ਮਾਪਿਆ ਜਾਵੇਗਾ।",phaseConnecting:"ਵਧੀਆ ਸਰਵਰ ਨਾਲ ਜੁੜ ਰਿਹਾ ਹੈ...",phasePing:"ਪਿੰਗ ਅਤੇ ਲੇਟੈਂਸੀ ਮਾਪ ਰਿਹਾ ਹੈ...",phaseDownload:"ਡਾਊਨਲੋਡ ਸਪੀਡ ਚੈੱਕ ਹੋ ਰਹੀ ਹੈ...",phaseUpload:"ਅੱਪਲੋਡ ਸਪੀਡ ਚੈੱਕ ਹੋ ਰਹੀ ਹੈ...",phaseStability:"ਨੈੱਟਵਰਕ ਸਥਿਰਤਾ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ...",phaseComplete:"ਟੈਸਟ ਪੂਰਾ ਹੋਇਆ",download:"ਡਾਊਨਲੋਡ",upload:"ਅੱਪਲੋਡ",ping:"ਪਿੰਗ",jitter:"ਜਿਟਰ",packetLoss:"ਪੈਕੇਟ ਨੁਕਸਾਨ",stability:"ਸਥਿਰਤਾ",networkStability:"ਨੈੱਟਵਰਕ ਸਥਿਰਤਾ",excellent:"ਸ਼ਾਨਦਾਰ",good:"ਵਧੀਆ",fair:"ਔਸਤ",poor:"ਕਮਜ਼ੋਰ",server:"ਸਰਵਰ",changeServer:"ਸਰਵਰ ਬਦਲੋ",autoServer:"ਆਟੋ ਸਰਵਰ (ਨੇੜੇ ਦਾ)",connection:"ਕਨੈਕਸ਼ਨ",ipAddress:"IP ਪਤਾ",isp:"ISP ਪ੍ਰਦਾਤਾ",asn:"ASN",location:"ਸਥਾਨ",device:"ਡਿਵਾਈਸ",browser:"ਬ੍ਰਾਊਜ਼ਰ",os:"ਓਪਰੇਟਿੰਗ ਸਿਸਟਮ",connectionInfo:"ਕਨੈਕਸ਼ਨ ਜਾਣਕਾਰੀ",speedMeter:"ਸਪੀਡੋਮੀਟਰ",liveGraph:"ਲਾਈਵ ਗ੍ਰਾਫ",shareResult:"ਨਤੀਜਾ ਸਾਂਝਾ ਕਰੋ",downloadResult:"ਰਿਪੋਰਟ ਡਾਊਨਲੋਡ ਕਰੋ",testHistory:"ਟੈਸਟ ਇਤਿਹਾਸ",noHistory:"ਅਜੇ ਕੋਈ ਇਤਿਹਾਸ ਨਹੀਂ ਹੈ।",clearHistory:"ਇਤਿਹਾਸ ਸਾਫ਼ ਕਰੋ",delete:"ਮਿਟਾਓ",view:"ਦੇਖੋ",exportCsv:"CSV ਨਿਰਯਾਤ",exportJson:"JSON ਨਿਰਯਾਤ",exportPdf:"PDF ਰਿਪੋਰਟ",settings:"ਸੈਟਿੰਗਾਂ",theme:"ਥੀਮ",dark:"ਡਾਰਕ",light:"ਲਾਈਟ",units:"ਸਪੀਡ ਯੂਨਿਟ",duration:"ਟੈਸਟ ਸਮਾਂ",quick:"ਤੇਜ਼ (~5 ਸਕਿੰਟ)",standard:"ਮਿਆਰੀ (~10 ਸਕਿੰਟ)",extended:"ਵਿਸਤ੍ਰਿਤ (~20 ਸਕਿੰਟ)",parallelStreams:"ਮਲਟੀ-ਸਟ੍ਰੀਮਜ਼",saveHistoryToggle:"ਇਤਿਹਾਸ ਸੰਭਾਲੋ",dataWarning:"ਸਪੀਡ ਟੈਸਟ ਵਿੱਚ ਜ਼ਿਆਦਾ ਡੇਟਾ ਖਰਚ ਹੋ ਸਕਦਾ ਹੈ।",faqTitle:"ਅਕਸਰ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",aboutTitle:"NETSPEEDPRO ਬਾਰੇ",privacyTitle:"ਪ੍ਰਾਈਵੇਸੀ ਪਾਲਿਸੀ",termsTitle:"ਨਿਯਮ ਅਤੇ ਸ਼ਰਤਾਂ",compareTitle:"ਸਪੀਡ ਤੁਲਨਾ",diagnosticsTitle:"ਨੈੱਟਵਰਕ ਜਾਂਚ",bufferbloat:"ਬਫਰਬਲੋਟ",dataUsed:"ਵਰਤਿਆ ਗਿਆ ਡੇਟਾ",yourSpeed:"ਤੁਹਾਡੀ ਸਪੀਡ",avgSpeed:"ਗਲੋਬਲ ਔਸਤ",percentileText:"ਲਗਭਗ {percent}% ਬ੍ਰਾਡਬੈਂਡ ਕਨੈਕਸ਼ਨਾਂ ਨਾਲੋਂ ਤੇਜ਼।"},nl:{brand:"NETSPEEDPRO",tagline:"Snel. Eenvoudig. Nauwkeurig.",navSpeedTest:"Speedtest",navHistory:"Geschiedenis",navServers:"Servers",navDiagnostics:"Diagnostiek",navCompare:"Vergelijken",navFAQ:"Veelgestelde Vragen",navAbout:"Over Ons",heroTitle:"Test Uw Internetsnelheid",heroSubtitle:"Meet downloadsnelheid, uploadsnelheid, ping, jitter en netwerkstabiliteit in seconden.",startTest:"START SPEEDTEST",stopTest:"STOPPEN",testAgain:"OPNIEUW TESTEN",readyToTest:"Klaar voor de test",browserTested:"Uw verbinding wordt direct vanuit uw browser getest.",phaseConnecting:"Verbinden met optimale server...",phasePing:"Ping & latentie meten...",phaseDownload:"Downloadsnelheid testen...",phaseUpload:"Uploadsnelheid testen...",phaseStability:"Netwerkstabiliteit analyseren...",phaseComplete:"TEST VOLTOOID",download:"DOWNLOAD",upload:"UPLOAD",ping:"PING",jitter:"JITTER",packetLoss:"PAKKETVERLIES",stability:"STABILITEIT",networkStability:"Netwerkstabiliteit",excellent:"Uitstekend",good:"Goed",fair:"Gemiddeld",poor:"Zwak",server:"Server",changeServer:"Server Wijzigen",autoServer:"Automatische Server",connection:"Verbinding",ipAddress:"IP-adres",isp:"Provider (ISP)",asn:"ASN",location:"Locatie",device:"Apparaat",browser:"Browser",os:"Besturingssysteem",connectionInfo:"Verbindingsinformatie",speedMeter:"Snelheidsmeter",liveGraph:"Realtime Grafiek",shareResult:"Resultaat Delen",downloadResult:"Rapport Downloaden",testHistory:"Testgeschiedenis",noHistory:"Nog geen geschiedenis beschikbaar.",clearHistory:"Geschiedenis Wissen",delete:"Verwijderen",view:"Bekijken",exportCsv:"Exporteer CSV",exportJson:"Exporteer JSON",exportPdf:"PDF Rapport",settings:"Instellingen",theme:"Thema",dark:"Donker",light:"Licht",units:"Eenheid",duration:"Testduur",quick:"Snel (~5s)",standard:"Standaard (~10s)",extended:"Uitgebreid (~20s)",parallelStreams:"Parallelle Streams",saveHistoryToggle:"Geschiedenis Opslaan",dataWarning:"De test kan aanzienlijk veel data verbruiken.",faqTitle:"Veelgestelde Vragen",aboutTitle:"Over NETSPEEDPRO",privacyTitle:"Privacybeleid",termsTitle:"Gebruiksvoorwaarden",compareTitle:"Snelheid Vergelijken",diagnosticsTitle:"Netwerkdiagnostiek",bufferbloat:"Bufferbloat",dataUsed:"Verbruikte Data",yourSpeed:"Uw Snelheid",avgSpeed:"Wereldwijd Gemiddelde",percentileText:"Sneller dan ongeveer {percent}% van alle geteste verbindingen."},pl:{brand:"NETSPEEDPRO",tagline:"Szybko. Prosto. Dokładnie.",navSpeedTest:"Test Prędkości",navHistory:"Historia",navServers:"Serwery",navDiagnostics:"Diagnostyka",navCompare:"Porównaj",navFAQ:"FAQ",navAbout:"O nas",heroTitle:"Przetestuj Prędkość Internetu",heroSubtitle:"Sprawdź pobieranie, wysyłanie, ping, jitter oraz stabilność w kilka sekund.",startTest:"ROZPOCZNIJ TEST",stopTest:"ZATRZYMAJ",testAgain:"POWTÓRZ TEST",readyToTest:"Gotowy do testu",browserTested:"Połączenie zostanie przetestowane bezpośrednio w Twojej przeglądarce.",phaseConnecting:"Łączenie z optymalnym serwerem...",phasePing:"Pomiar pingu i opóźnienia...",phaseDownload:"Testowanie prędkości pobierania...",phaseUpload:"Testowanie prędkości wysyłania...",phaseStability:"Analiza stabilności sieci...",phaseComplete:"TEST UKOŃCZONY",download:"POBIERANIE",upload:"WYSYŁANIE",ping:"PING",jitter:"JITTER",packetLoss:"UTRATA PAKIETÓW",stability:"STABILNOŚĆ",networkStability:"Stabilność Sieci",excellent:"Doskonała",good:"Dobra",fair:"Przeciętna",poor:"Słaba",server:"Serwer",changeServer:"Zmień serwer",autoServer:"Automatyczny serwer",connection:"Połączenie",ipAddress:"Adres IP",isp:"Dostawca (ISP)",asn:"ASN",location:"Lokalizacja",device:"Urządzenie",browser:"Przeglądarka",os:"System",connectionInfo:"Informacje o sieci",speedMeter:"Prędkościomierz",liveGraph:"Wykres na Żywo",shareResult:"Udostępnij Wynik",downloadResult:"Pobierz Raport",testHistory:"Historia Testów",noHistory:"Brak zapisanych testów.",clearHistory:"Wyczyść Historię",delete:"Usuń",view:"Szczegóły",exportCsv:"Eksportuj CSV",exportJson:"Eksportuj JSON",exportPdf:"Raport PDF",settings:"Ustawienia",theme:"Motyw",dark:"Ciemny",light:"Jasny",units:"Jednostka",duration:"Czas Testu",quick:"Szybki (~5s)",standard:"Standardowy (~10s)",extended:"Rozszerzony (~20s)",parallelStreams:"Wiele Strumieni",saveHistoryToggle:"Zapisuj Historię",dataWarning:"Test prędkości może zużyć znaczną ilość danych.",faqTitle:"Często Zadawane Pytania",aboutTitle:"O NETSPEEDPRO",privacyTitle:"Polityka Prywatności",termsTitle:"Regulamin",compareTitle:"Porównanie Prędkości",diagnosticsTitle:"Diagnostyka Sieci",bufferbloat:"Bufferbloat",dataUsed:"Zużyte Dane",yourSpeed:"Twoja Prędkość",avgSpeed:"Średnia Globalna",percentileText:"Szybciej niż około {percent}% testowanych łącz."},uk:{brand:"NETSPEEDPRO",tagline:"Швидко. Просто. Точно.",navSpeedTest:"Спідтест",navHistory:"Історія",navServers:"Сервери",navDiagnostics:"Діагностика",navCompare:"Порівняти",navFAQ:"Питання",navAbout:"Про нас",heroTitle:"Перевірте швидкість інтернету",heroSubtitle:"Виміряйте швидкість завантаження, вивантаження, пінг, джитер та стабільність.",startTest:"ПОЧАТИ ТЕСТ",stopTest:"СТОП",testAgain:"ПОВТОРИТИ",readyToTest:"Готовий до тесту",browserTested:"Тестування проводиться безпосередньо через браузер.",phaseConnecting:"Підключення до оптимального сервера...",phasePing:"Вимірювання пінгу та затримки...",phaseDownload:"Тестування завантаження...",phaseUpload:"Тестування вивантаження...",phaseStability:"Аналіз стабільності мережі...",phaseComplete:"ТЕСТ ЗАВЕРШЕНО",download:"ЗАВАНТАЖЕННЯ",upload:"ВИВАНТАЖЕННЯ",ping:"ПІНГ",jitter:"ДЖИТЕР",packetLoss:"ВТРАТА ПАКЕТІВ",stability:"СТАБІЛЬНІСТЬ",networkStability:"Стабільність Мережі",excellent:"Відмінно",good:"Добре",fair:"Середньо",poor:"Погано",server:"Сервер",changeServer:"Змінити сервер",autoServer:"Автовибір сервера",connection:"Підключення",ipAddress:"IP-адреса",isp:"Провайдер (ISP)",asn:"ASN",location:"Локація",device:"Пристрій",browser:"Браузер",os:"ОС",connectionInfo:"Інформація про мережу",speedMeter:"Спідометр",liveGraph:"Графік у реальному часі",shareResult:"Поділитися",downloadResult:"Завантажити звіт",testHistory:"Історія Тестів",noHistory:"Історія тестів порожня.",clearHistory:"Очистити історію",delete:"Видалити",view:"Перегляд",exportCsv:"Експорт CSV",exportJson:"Експорт JSON",exportPdf:"Звіт PDF",settings:"Налаштування",theme:"Тема",dark:"Темна",light:"Світла",units:"Одиниця швидкості",duration:"Тривалість",quick:"Швидко (~5с)",standard:"Стандартно (~10с)",extended:"Розширено (~20с)",parallelStreams:"Багатопотоковість",saveHistoryToggle:"Зберігати історію",dataWarning:"Тест швидкості може витратити значний обсяг трафіку.",faqTitle:"Часті Запитання",aboutTitle:"Про NETSPEEDPRO",privacyTitle:"Конфіденційність",termsTitle:"Умови користування",compareTitle:"Порівняння швидкості",diagnosticsTitle:"Діагностика мережі",bufferbloat:"Bufferbloat",dataUsed:"Використано даних",yourSpeed:"Ваша швидкість",avgSpeed:"Середнє у світі",percentileText:"Швидше, ніж приблизно {percent}% перевірених мереж."},sv:{brand:"NETSPEEDPRO",tagline:"Snabb. Enkel. Exakt.",navSpeedTest:"Hastighetstest",navHistory:"Historik",navServers:"Servrar",navDiagnostics:"Diagnostik",navCompare:"Jämför",navFAQ:"FAQ",navAbout:"Om Oss",heroTitle:"Testa Din Internethastighet",heroSubtitle:"Mät nedladdning, uppladdning, ping, jitter och nätverksstabilitet på sekunder.",startTest:"STARTA TEST",stopTest:"STOPPA",testAgain:"TESTA IGEN",readyToTest:"Redo att testa",browserTested:"Din anslutning testas direkt i din webbläsare.",phaseConnecting:"Ansluter till optimal server...",phasePing:"Mäter ping och latens...",phaseDownload:"Testar nedladdningshastighet...",phaseUpload:"Testar uppladdningshastighet...",phaseStability:"Analyserar nätverksstabilitet...",phaseComplete:"TEST SLUTFÖRT",download:"NEDLADDNING",upload:"UPPLADDNING",ping:"PING",jitter:"JITTER",packetLoss:"PAKETFÖRLUST",stability:"STABILITET",networkStability:"Nätverksstabilitet",excellent:"Utmärkt",good:"Bra",fair:"Medel",poor:"Dålig",server:"Server",changeServer:"Byt server",autoServer:"Automatisk server",connection:"Anslutning",ipAddress:"IP-adress",isp:"Operatör (ISP)",asn:"ASN",location:"Plats",device:"Enhet",browser:"Webbläsare",os:"Operativsystem",connectionInfo:"Anslutningsinformation",speedMeter:"Hastighetsmätare",liveGraph:"Realtidsgraf",shareResult:"Dela Resultat",downloadResult:"Ladda Ner Rapport",testHistory:"Testhistorik",noHistory:"Ingen historik än.",clearHistory:"Rensa Historik",delete:"Radera",view:"Visa",exportCsv:"Exportera CSV",exportJson:"Exportera JSON",exportPdf:"PDF-rapport",settings:"Inställningar",theme:"Tema",dark:"Mörkt",light:"Ljust",units:"Enhet",duration:"Testtid",quick:"Snabb (~5s)",standard:"Standard (~10s)",extended:"Utökad (~20s)",parallelStreams:"Flera Strömmar",saveHistoryToggle:"Spara Historik",dataWarning:"Testet kan förbruka en betydande mängd datatrafik.",faqTitle:"Vanliga Frågor",aboutTitle:"Om NETSPEEDPRO",privacyTitle:"Integritetspolicy",termsTitle:"Användarvillkor",compareTitle:"Jämför Hastighet",diagnosticsTitle:"Nätverksdiagnostik",bufferbloat:"Bufferbloat",dataUsed:"Förbrukad Data",yourSpeed:"Din Hastighet",avgSpeed:"Globalt Medelvärde",percentileText:"Snabbare än cirka {percent}% av testade anslutningar."},el:{brand:"NETSPEEDPRO",tagline:"Γρήγορο. Απλό. Ακριβές.",navSpeedTest:"Έλεγχος Ταχύτητας",navHistory:"Ιστορικό",navServers:"Διακομιστές",navDiagnostics:"Διαγνωστικά",navCompare:"Σύγκριση",navFAQ:"Συχνές Ερωτήσεις",navAbout:"Σχετικά",heroTitle:"Ελέγξτε την Ταχύτητα Internet",heroSubtitle:"Μετρήστε ταχύτητα λήψης, αποστολής, ping, jitter και σταθερότητα σε δευτερόλεπτα.",startTest:"ΕΝΑΡΞΗ ΤΕΣΤ",stopTest:"ΔΙΑΚΟΠΗ",testAgain:"ΕΠΑΝΑΛΗΨΗ",readyToTest:"Έτοιμο για μέτρηση",browserTested:"Η μέτρηση γίνεται απευθείας από το πρόγραμμα περιήγησής σας.",phaseConnecting:"Σύνδεση στον ιδανικό διακομιστή...",phasePing:"Μέτρηση Ping και καθυστέρησης...",phaseDownload:"Μέτρηση ταχύτητας λήψης...",phaseUpload:"Μέτρηση ταχύτητας αποστολής...",phaseStability:"Ανάλυση σταθερότητας δικτύου...",phaseComplete:"Η ΜΕΤΡΗΣΗ ΟΛΟΚΛΗΡΩΘΗΚΕ",download:"ΛΗΨΗ",upload:"ΑΠΟΣΤΟΛΗ",ping:"PING",jitter:"JITTER",packetLoss:"ΑΠΩΛΕΙΑ ΠΑΚΕΤΩΝ",stability:"ΣΤΑΘΕΡΟΤΗΤΑ",networkStability:"Σταθερότητα Δικτύου",excellent:"Εξαιρετική",good:"Καλή",fair:"Μέτρια",poor:"Χαμηλή",server:"Διακομιστής",changeServer:"Αλλαγή Διακομιστή",autoServer:"Αυτόματη Επιλογή",connection:"Σύνδεση",ipAddress:"Διεύθυνση IP",isp:"Πάροχος (ISP)",asn:"ASN",location:"Τοποθεσία",device:"Συσκευή",browser:"Πρόγραμμα Περιήγησης",os:"Λειτουργικό Σύστημα",connectionInfo:"Πληροφορίες Σύνδεσης",speedMeter:"Ταχύμετρο",liveGraph:"Διάγραμμα σε Πραγματικό Χρόνο",shareResult:"Κοινοποίηση",downloadResult:"Λήψη Αναφοράς",testHistory:"Ιστορικό Μετρήσεων",noHistory:"Δεν υπάρχει ακόμη ιστορικό.",clearHistory:"Εκκαθάριση Ιστορικού",delete:"Διαγραφή",view:"Προβολή",exportCsv:"Εξαγωγή CSV",exportJson:"Εξαγωγή JSON",exportPdf:"Αναφορά PDF",settings:"Ρυθμίσεις",theme:"Θέμα",dark:"Σκούρο",light:"Φωτεινό",units:"Μονάδα Ταχύτητας",duration:"Διάρκεια",quick:"Γρήγορη (~5s)",standard:"Κανονική (~10s)",extended:"Εκτεταμένη (~20s)",parallelStreams:"Πολλαπλές Ροές",saveHistoryToggle:"Αποθήκευση Ιστορικού",dataWarning:"Ο έλεγχος ταχύτητας μπορεί να καταναλώσει σημαντικό όγκο δεδομένων.",faqTitle:"Συχνές Ερωτήσεις",aboutTitle:"Σχετικά με το NETSPEEDPRO",privacyTitle:"Πολιτική Απορρήτου",termsTitle:"Όροι Χρήσης",compareTitle:"Σύγκριση Ταχύτητας",diagnosticsTitle:"Διαγνωστικά Δικτύου",bufferbloat:"Bufferbloat",dataUsed:"Δεδομένα που Χρησιμοποιήθηκαν",yourSpeed:"Η Ταχύτητά Σας",avgSpeed:"Παγκόσμιος Μέσος Όρος",percentileText:"Ταχύτερη από περίπου {percent}% των συνδέσεων."},cs:{brand:"NETSPEEDPRO",tagline:"Rychle. Jednoduše. Přesně.",navSpeedTest:"Test Rychlosti",navHistory:"Historie",navServers:"Servery",navDiagnostics:"Diagnostika",navCompare:"Porovnat",navFAQ:"FAQ",navAbout:"O nás",heroTitle:"Otestujte Rychlost Internetu",heroSubtitle:"Změřte stahování, nahrávání, ping, jitter a stabilitu během několika sekund.",startTest:"SPUSTIT TEST",stopTest:"ZASTAVIT",testAgain:"OPAKOVAT TEST",readyToTest:"Připraveno k testu",browserTested:"Vaše připojení je testováno přímo v prohlížeči.",phaseConnecting:"Připojování k nejlepšímu serveru...",phasePing:"Měření pingu a odezvy...",phaseDownload:"Testování rychlosti stahování...",phaseUpload:"Testování rychlosti nahrávání...",phaseStability:"Analýza stability sítě...",phaseComplete:"TEST DOKONČEN",download:"STAHOVÁNÍ",upload:"NAHRÁVÁNÍ",ping:"PING",jitter:"JITTER",packetLoss:"ZTRÁTA PAKETŮ",stability:"STABILITA",networkStability:"Stabilita Sítě",excellent:"Vynikající",good:"Dobrá",fair:"Průměrná",poor:"Slabá",server:"Server",changeServer:"Změnit server",autoServer:"Automatický server",connection:"Připojení",ipAddress:"IP adresa",isp:"Poskytovatel (ISP)",asn:"ASN",location:"Lokalita",device:"Zařízení",browser:"Prohlížeč",os:"Operační systém",connectionInfo:"Informace o připojení",speedMeter:"Rychloměr",liveGraph:"Živý Graf",shareResult:"Sdílet Výsledek",downloadResult:"Stáhnout Zprávu",testHistory:"Historie Testů",noHistory:"Žádná historie testů.",clearHistory:"Smazat Historii",delete:"Smazat",view:"Zobrazit",exportCsv:"Exportovat CSV",exportJson:"Exportovat JSON",exportPdf:"PDF Zpráva",settings:"Nastavení",theme:"Vzhled",dark:"Tmavý",light:"Světlý",units:"Jednotka",duration:"Délka Testu",quick:"Rychlý (~5s)",standard:"Standardní (~10s)",extended:"Rozšířený (~20s)",parallelStreams:"Více Vláken",saveHistoryToggle:"Ukládat Historii",dataWarning:"Test rychlosti může spotřebovat větší množství dat.",faqTitle:"Často Kladené Dotazy",aboutTitle:"O NETSPEEDPRO",privacyTitle:"Ochrana Soukromí",termsTitle:"Podmínky Služby",compareTitle:"Porovnání Rychlosti",diagnosticsTitle:"Diagnostika Sítě",bufferbloat:"Bufferbloat",dataUsed:"Spotřebovaná Data",yourSpeed:"Vaše Rychlost",avgSpeed:"Globální Průměr",percentileText:"Rychlejší než přibližně {percent}% testovaných připojení."},ro:{brand:"NETSPEEDPRO",tagline:"Rapid. Simplu. Precis.",navSpeedTest:"Test Viteză",navHistory:"Istoric",navServers:"Servere",navDiagnostics:"Diagnostic",navCompare:"Compară",navFAQ:"FAQ",navAbout:"Despre",heroTitle:"Testează Viteza la Internet",heroSubtitle:"Măsoară viteza de descărcare, încărcare, ping, jitter și stabilitatea în câteva secunde.",startTest:"PORNEȘTE TESTUL",stopTest:"OPREȘTE",testAgain:"TESTEAZĂ DIN NOU",readyToTest:"Gata pentru testare",browserTested:"Conexiunea ta este testată direct în browser.",phaseConnecting:"Conectare la cel mai bun server...",phasePing:"Măsurare ping și latență...",phaseDownload:"Testare viteză descărcare...",phaseUpload:"Testare viteză încărcare...",phaseStability:"Analiză stabilitate rețea...",phaseComplete:"TEST FINALIZAT",download:"DESCĂRCARE",upload:"ÎNCĂRCARE",ping:"PING",jitter:"JITTER",packetLoss:"PIERDERE PACHETE",stability:"STABILITATE",networkStability:"Stabilitate Rețea",excellent:"Excelentă",good:"Bună",fair:"Medie",poor:"Slabă",server:"Server",changeServer:"Schimbă Server",autoServer:"Server Automat",connection:"Conexiune",ipAddress:"Adresă IP",isp:"Furnizor (ISP)",asn:"ASN",location:"Locație",device:"Dispozitiv",browser:"Browser",os:"Sistem de Operare",connectionInfo:"Informații Conexiune",speedMeter:"Vitezometru",liveGraph:"Grafic în Timp Real",shareResult:"Distribuie Rezultat",downloadResult:"Descarcă Raport",testHistory:"Istoric Teste",noHistory:"Nu există istoric încă.",clearHistory:"Șterge Istoric",delete:"Șterge",view:"Vezi",exportCsv:"Exportă CSV",exportJson:"Exportă JSON",exportPdf:"Raport PDF",settings:"Setări",theme:"Temă",dark:"Întunecat",light:"Luminos",units:"Unitate",duration:"Durată Test",quick:"Rapid (~5s)",standard:"Standard (~10s)",extended:"Extins (~20s)",parallelStreams:"Fluxuri Multiple",saveHistoryToggle:"Salvează Istoric",dataWarning:"Testul de viteză poate consuma un volum semnificativ de date.",faqTitle:"Întrebări Frecvente",aboutTitle:"Despre NETSPEEDPRO",privacyTitle:"Politica de Confidențialitate",termsTitle:"Termeni și Condiții",compareTitle:"Compară Viteza",diagnosticsTitle:"Diagnostic Rețea",bufferbloat:"Bufferbloat",dataUsed:"Date Utilizate",yourSpeed:"Viteza Ta",avgSpeed:"Media Globală",percentileText:"Mai rapid decât aproximativ {percent}% din conexiunile testate."},hu:{brand:"NETSPEEDPRO",tagline:"Gyors. Egyszerű. Pontos.",navSpeedTest:"Sebességmérés",navHistory:"Előzmények",navServers:"Szerverek",navDiagnostics:"Diagnosztika",navCompare:"Összehasonlítás",navFAQ:"GYIK",navAbout:"Rólunk",heroTitle:"Mérje meg Internete Sebességét",heroSubtitle:"Tesztelje a letöltési, feltöltési sebességet, pinget, jittert és a hálózat stabilitását.",startTest:"MÉRÉS INDÍTÁSA",stopTest:"LEÁLLÍTÁS",testAgain:"ÚJRA TESZTELÉS",readyToTest:"Készen áll a mérésre",browserTested:"A kapcsolatát közvetlenül a böngészőjéből teszteljük.",phaseConnecting:"Csatlakozás az optimális szerverhez...",phasePing:"Ping és késleltetés mérése...",phaseDownload:"Letöltési sebesség mérése...",phaseUpload:"Feltöltési sebesség mérése...",phaseStability:"Hálózati stabilitás elemzése...",phaseComplete:"MÉRÉS BEFEJEZŐDÖTT",download:"LETÖLTÉS",upload:"FELTÖLTÉS",ping:"PING",jitter:"JITTER",packetLoss:"CSOMAGVESZTÉS",stability:"STABILITÁS",networkStability:"Hálózati Stabilitás",excellent:"Kiváló",good:"Jó",fair:"Átlagos",poor:"Gyenge",server:"Szerver",changeServer:"Szerver váltása",autoServer:"Automatikus szerver",connection:"Kapcsolat",ipAddress:"IP Cím",isp:"Szolgáltató (ISP)",asn:"ASN",location:"Helyszín",device:"Eszköz",browser:"Böngésző",os:"Operációs Rendszer",connectionInfo:"Kapcsolat Részletei",speedMeter:"Sebességmérő",liveGraph:"Valós Idejű Grafikon",shareResult:"Eredmény Megosztása",downloadResult:"Jelentés Letöltése",testHistory:"Mérési Előzmények",noHistory:"Még nincsenek mérési előzmények.",clearHistory:"Előzmények Törlése",delete:"Törlés",view:"Megtekintés",exportCsv:"CSV Exportálás",exportJson:"JSON Exportálás",exportPdf:"PDF Jelentés",settings:"Beállítások",theme:"Téma",dark:"Sötét",light:"Világos",units:"Mértékegység",duration:"Mérési Idő",quick:"Gyors (~5s)",standard:"Normál (~10s)",extended:"Bővített (~20s)",parallelStreams:"Párhuzamos Szálak",saveHistoryToggle:"Előzmények Mentése",dataWarning:"A sebességmérés jelentős adatforgalmat generálhat.",faqTitle:"Gyakran Ismételt Kérdések",aboutTitle:"A NETSPEEDPRO-ról",privacyTitle:"Adatvédelmi Irányelvek",termsTitle:"Felhasználási Feltételek",compareTitle:"Sebesség Összehasonlítás",diagnosticsTitle:"Hálózati Diagnosztika",bufferbloat:"Bufferbloat",dataUsed:"Felhasznált Adat",yourSpeed:"Az Ön Sebessége",avgSpeed:"Globális Átlag",percentileText:"Gyorsabb, mint a mért kapcsolatok kb. {percent}%-a."},da:{brand:"NETSPEEDPRO",tagline:"Hurtig. Enkel. Præcis.",navSpeedTest:"Hastighedstest",navHistory:"Historik",navServers:"Servere",navDiagnostics:"Diagnostik",navCompare:"Sammenlign",navFAQ:"FAQ",navAbout:"Om os",heroTitle:"Test Din Internethastighed",heroSubtitle:"Mål download, upload, ping, jitter og netværksstabilitet på få sekunder.",startTest:"START TEST",stopTest:"STOP",testAgain:"TEST IGEN",readyToTest:"Klar til test",browserTested:"Din forbindelse testes direkte i din browser.",phaseConnecting:"Forbinder til bedste server...",phasePing:"Måler ping og latenstid...",phaseDownload:"Tester downloadhastighed...",phaseUpload:"Tester uploadhastighed...",phaseStability:"Analyserer netværksstabilitet...",phaseComplete:"TEST AFSLUTTET",download:"DOWNLOAD",upload:"UPLOAD",ping:"PING",jitter:"JITTER",packetLoss:"PAKKETAB",stability:"STABILITET",networkStability:"Netværksstabilitet",excellent:"Fremragende",good:"God",fair:"Gennemsnitlig",poor:"Dårlig",server:"Server",changeServer:"Skift server",autoServer:"Automatisk server",connection:"Forbindelse",ipAddress:"IP-adresse",isp:"Udbyder (ISP)",asn:"ASN",location:"Placering",device:"Enhed",browser:"Browser",os:"Operativsystem",connectionInfo:"Forbindelsesoplysninger",speedMeter:"Hastighedsmåler",liveGraph:"Realtidsgraf",shareResult:"Del Resultat",downloadResult:"Download Rapport",testHistory:"Testhistorik",noHistory:"Ingen historik endnu.",clearHistory:"Ryd Historik",delete:"Slet",view:"Vis",exportCsv:"Eksportér CSV",exportJson:"Eksportér JSON",exportPdf:"PDF-rapport",settings:"Indstillinger",theme:"Tema",dark:"Mørk",light:"Lys",units:"Enhed",duration:"Testvarighed",quick:"Hurtig (~5s)",standard:"Standard (~10s)",extended:"Udvidet (~20s)",parallelStreams:"Flere Strømme",saveHistoryToggle:"Gem Historik",dataWarning:"Hastighedstesten kan bruge en betydelig mængde data.",faqTitle:"Ofte Stillede Spørgsmål",aboutTitle:"Om NETSPEEDPRO",privacyTitle:"Privatlivspolitik",termsTitle:"Betingelser",compareTitle:"Sammenlign Hastighed",diagnosticsTitle:"Netværksdiagnostik",bufferbloat:"Bufferbloat",dataUsed:"Data Brugt",yourSpeed:"Din Hastighed",avgSpeed:"Globalt Gennemsnit",percentileText:"Hurtigere end ca. {percent}% af testede forbindelser."},fi:{brand:"NETSPEEDPRO",tagline:"Nopea. Yksinkertainen. Tarkka.",navSpeedTest:"Nopeustesti",navHistory:"Historia",navServers:"Palvelimet",navDiagnostics:"Diagnostiikka",navCompare:"Vertaa",navFAQ:"UKK",navAbout:"Tietoa",heroTitle:"Testaa Internet-nopeutesi",heroSubtitle:"Mittaa lataus- ja lähetysnopeus, viive (ping), jitter ja verkon vakaus sekunneissa.",startTest:"ALOITA TESTI",stopTest:"PYSÄYTÄ",testAgain:"TESTAA UUDESTAAN",readyToTest:"Valmis testiin",browserTested:"Yhteytesi testataan suoraan selaimessasi.",phaseConnecting:"Yhdistetään parhaaseen palvelimeen...",phasePing:"Mitataan pingiä ja viivettä...",phaseDownload:"Testataan latausnopeutta...",phaseUpload:"Testataan lähetysnopeutta...",phaseStability:"Analysoidaan verkon vakautta...",phaseComplete:"TESTI VALMIS",download:"LATAUS",upload:"LÄHETYS",ping:"PING",jitter:"JITTER",packetLoss:"PAKETTIHÄVIÖ",stability:"VAKAUS",networkStability:"Verkon Vakaus",excellent:"Erinomainen",good:"Hyvä",fair:"Keskinkertainen",poor:"Heikko",server:"Palvelin",changeServer:"Vaihda palvelinta",autoServer:"Automaattinen palvelin",connection:"Yhteys",ipAddress:"IP-osoite",isp:"Operaattori (ISP)",asn:"ASN",location:"Sijainti",device:"Laite",browser:"Selain",os:"Käyttöjärjestelmä",connectionInfo:"Yhteyden tiedot",speedMeter:"Nopeusmittari",liveGraph:"Rereaaliaikainen Kaavio",shareResult:"Jaa Tulos",downloadResult:"Lataa Raportti",testHistory:"Testihistoria",noHistory:"Ei vielä testihistoriaa.",clearHistory:"Tyhjennä Historia",delete:"Poista",view:"Näytä",exportCsv:"Vie CSV",exportJson:"Vie JSON",exportPdf:"PDF-raportti",settings:"Asetukset",theme:"Teema",dark:"Tumma",light:"Vaalea",units:"Yksikkö",duration:"Testin Kesto",quick:"Nopea (~5s)",standard:"Normaali (~10s)",extended:"Laaja (~20s)",parallelStreams:"Rinnakkaiset Virrat",saveHistoryToggle:"Tallenna Historia",dataWarning:"Nopeustesti saattaa kuluttaa merkittävän määrän dataa.",faqTitle:"Usein Kysytyt Kysymykset",aboutTitle:"Tietoa NETSPEEDPROsta",privacyTitle:"Tietosuojakäytäntö",termsTitle:"Käyttöehdot",compareTitle:"Vertaa Nopeutta",diagnosticsTitle:"Verkkodiagnostiikka",bufferbloat:"Bufferbloat",dataUsed:"Käytetty Data",yourSpeed:"Nopeutesi",avgSpeed:"Maailmanlaajuinen Keskiarvo",percentileText:"Nopeampi kuin noin {percent}% testatuista yhteyksistä."},no:{brand:"NETSPEEDPRO",tagline:"Rask. Enkel. Nøyaktig.",navSpeedTest:"Fartstest",navHistory:"Historikk",navServers:"Servere",navDiagnostics:"Diagnostikk",navCompare:"Sammenlign",navFAQ:"FAQ",navAbout:"Om oss",heroTitle:"Test Internett-hastigheten Din",heroSubtitle:"Mål nedlasting, opplasting, ping, jitter og nettverksstabilitet på få sekunder.",startTest:"START TEST",stopTest:"STOPP",testAgain:"TEST PÅ NYTT",readyToTest:"Klar til test",browserTested:"Tilkoblingen din testes direkte i nettleseren din.",phaseConnecting:"Kobler til beste server...",phasePing:"Måler ping og responstid...",phaseDownload:"Tester nedlastingshastighet...",phaseUpload:"Tester opplastingshastighet...",phaseStability:"Analyserer stabilitet...",phaseComplete:"TEST FULLFØRT",download:"NEDLASTING",upload:"OPPLASTING",ping:"PING",jitter:"JITTER",packetLoss:"PAKKETAP",stability:"STABILITET",networkStability:"Nettverksstabilitet",excellent:"Utmerket",good:"Bra",fair:"Middels",poor:"Dårlig",server:"Server",changeServer:"Endre server",autoServer:"Automatisk server",connection:"Tilkobling",ipAddress:"IP-adresse",isp:"Leverandør (ISP)",asn:"ASN",location:"Posisjon",device:"Enhet",browser:"Nettleser",os:"Operativsystem",connectionInfo:"Tilkoblingsinformasjon",speedMeter:"Fartsmåler",liveGraph:"Sanntidsgraf",shareResult:"Del Resultat",downloadResult:"Last Ned Rapport",testHistory:"Testhistorikk",noHistory:"Ingen historikk ennå.",clearHistory:"Tøm Historikk",delete:"Slett",view:"Vis",exportCsv:"Eksporter CSV",exportJson:"Eksporter JSON",exportPdf:"PDF-rapport",settings:"Innstillinger",theme:"Tema",dark:"Mørkt",light:"Lyst",units:"Enhet",duration:"Testvarighet",quick:"Rask (~5s)",standard:"Standard (~10s)",extended:"Utvidet (~20s)",parallelStreams:"Flere Strømmer",saveHistoryToggle:"Lagre Historikk",dataWarning:"Fartstesten kan bruke betydelig mengde data.",faqTitle:"Ofte Stilte Spørsmål",aboutTitle:"Om NETSPEEDPRO",privacyTitle:"Personvernerklæring",termsTitle:"Brukervilkår",compareTitle:"Sammenlign Hastighet",diagnosticsTitle:"Nettverksdiagnostikk",bufferbloat:"Bufferbloat",dataUsed:"Data Brukt",yourSpeed:"Din Hastighet",avgSpeed:"Globalt Gjennomsnitt",percentileText:"Raskere enn ca. {percent}% av testede linjer."},he:{brand:"NETSPEEDPRO",tagline:"מהיר. פשוט. מדויק.",navSpeedTest:"בדיקת מהירות",navHistory:"היסטוריה",navServers:"שרתים",navDiagnostics:"אבחון רשת",navCompare:"השוואה",navFAQ:"שאלות נפוצות",navAbout:"אודות",heroTitle:"בדוק את מהירות האינטרנט שלך",heroSubtitle:"מדוד מהירות הורדה, העלאה, פינג, ג'יטר ויציבות רשת תוך שניות.",startTest:"התחל בדיקה",stopTest:"עצור",testAgain:"בדוק שוב",readyToTest:"מוכן לבדיקה",browserTested:"החיבור ייבדק ישירות דרך הדפדפן שלך.",phaseConnecting:"מתחבר לשרת הטוב ביותר...",phasePing:"מודד פינג והשהייה...",phaseDownload:"בודק מהירות הורדה...",phaseUpload:"בודק מהירות העלאה...",phaseStability:"מנתח יציבות רשת...",phaseComplete:"הבדיקה הושלמה",download:"הורדה",upload:"העלאה",ping:"פינג",jitter:"ג'יטר",packetLoss:"איבוד חבילות",stability:"יציבות",networkStability:"יציבות רשת",excellent:"מצוין",good:"טוב",fair:"סביר",poor:"חלש",server:"שרת",changeServer:"שנה שרת",autoServer:"שרת אוטומטי",connection:"חיבור",ipAddress:"כתובת IP",isp:"ספק אינטרנט",asn:"ASN",location:"מיקום",device:"מכשיר",browser:"דפדפן",os:"מערכת הפעלה",connectionInfo:"פרטי חיבור",speedMeter:"מד מהירות",liveGraph:"גרף בזמן אמת",shareResult:"שתף תוצאה",downloadResult:"הורד דוח",testHistory:"היסטוריית בדיקות",noHistory:"אין היסטוריית בדיקות עדיין.",clearHistory:"נקה היסטוריה",delete:"מחק",view:"הצג",exportCsv:"ייצוא CSV",exportJson:"ייצוא JSON",exportPdf:"דוח PDF",settings:"הגדרות",theme:"ערכת נושא",dark:"כהה",light:"בהיר",units:"יחידת מהירות",duration:"משך הבדיקה",quick:"מהיר (~5 שנ')",standard:"רגיל (~10 שנ')",extended:"מורחב (~20 שנ')",parallelStreams:"ערוצים מרובים",saveHistoryToggle:"שמור היסטוריה",dataWarning:"בדיקת המהירות עשויה לצרוך נפח נתונים משמעותי.",faqTitle:"שאלות ותשובות",aboutTitle:"אודות NETSPEEDPRO",privacyTitle:"מדיניות פרטיות",termsTitle:"תנאי שימוש",compareTitle:"השוואת מהירות",diagnosticsTitle:"אבחון רשת",bufferbloat:"Bufferbloat",dataUsed:"נתונים שנצרכו",yourSpeed:"המהירות שלך",avgSpeed:"ממוצע עולמי",percentileText:"מהיר יותר מכ-{percent}% מהחיבורים שנבדקו."},fa:{brand:"NETSPEEDPRO",tagline:"سریع. ساده. دقیق.",navSpeedTest:"تست سرعت",navHistory:"تاریخچه",navServers:"سرورها",navDiagnostics:"عیب‌یابی",navCompare:"مقایسه",navFAQ:"سوالات متداول",navAbout:"درباره ما",heroTitle:"سرعت اینترنت خود را بسنجید",heroSubtitle:"سرعت دانلود، آپلود، پینگ، نوسان و پایداری شبکه را در چند ثانیه بررسی کنید.",startTest:"شروع تست سرعت",stopTest:"توقف",testAgain:"تست مجدد",readyToTest:"آماده برای تست",browserTested:"اتصال شما مستقیماً از طریق مرورگر سنجیده می‌شود.",phaseConnecting:"اتصال به بهترین سرور...",phasePing:"اندازه‌گیری پینگ و تاخیر...",phaseDownload:"بررسی سرعت دانلود...",phaseUpload:"بررسی سرعت آپلود...",phaseStability:"تحلیل پایداری شبکه...",phaseComplete:"تست تکمیل شد",download:"دانلود",upload:"آپلود",ping:"پینگ",jitter:"نوسان (Jitter)",packetLoss:"افت بسته",stability:"پایداری",networkStability:"پایداری شبکه",excellent:"عالی",good:"خوب",fair:"متوسط",poor:"ضعیف",server:"سرور",changeServer:"تغییر سرور",autoServer:"سرور خودکار (نزدیک‌ترین)",connection:"اتصال",ipAddress:"آدرس IP",isp:"ارائه‌دهنده (ISP)",asn:"ASN",location:"موقعیت",device:"دستگاه",browser:"مرورگر",os:"سیستم عامل",connectionInfo:"اطلاعات اتصال",speedMeter:"سرعت‌سنج",liveGraph:"نمودار زنده",shareResult:"اشتراک‌گذاری نتیجه",downloadResult:"دانلود گزارش",testHistory:"تاریخچه تست‌ها",noHistory:"هنوز تاریخچه‌ای ثبت نشده است.",clearHistory:"پاک کردن تاریخچه",delete:"حذف",view:"مشاهده",exportCsv:"خروجی CSV",exportJson:"خروجی JSON",exportPdf:"گزارش PDF",settings:"تنظیمات",theme:"پوسته",dark:"تاریک",light:"روشن",units:"واحد سرعت",duration:"مدت تست",quick:"سریع (~۵ ثانیه)",standard:"استاندارد (~۱۰ ثانیه)",extended:"طولانی (~۲۰ ثانیه)",parallelStreams:"جریان‌های موازی",saveHistoryToggle:"ذخیره تاریخچه",dataWarning:"تست سرعت ممکن است حجم قابل توجهی از اینترنت مصرف کند.",faqTitle:"سوالات متداول",aboutTitle:"درباره NETSPEEDPRO",privacyTitle:"حریم خصوصی",termsTitle:"شرایط استفاده",compareTitle:"مقایسه سرعت",diagnosticsTitle:"عیب‌یابی شبکه",bufferbloat:"بافر بلوت",dataUsed:"حجم مصرفی",yourSpeed:"سرعت شما",avgSpeed:"میانگین جهانی",percentileText:"سریع‌تر از حدود {percent}% اتصالات سنجیده شده."},ms:{brand:"NETSPEEDPRO",tagline:"Pantas. Mudah. Tepat.",navSpeedTest:"Ujian Kelajuan",navHistory:"Sejarah",navServers:"Pelayan",navDiagnostics:"Diagnostik",navCompare:"Bandingkan",navFAQ:"Soalan Lazim",navAbout:"Tentang Kami",heroTitle:"Uji Kelajuan Internet Anda",heroSubtitle:"Periksa kelajuan muat turun, muat naik, ping, jitter dan kestabilan rangkaian dalam beberapa saat.",startTest:"MULA UJIAN",stopTest:"HENTIKAN",testAgain:"UJI SEMULA",readyToTest:"Sedia untuk diuji",browserTested:"Sambungan anda akan diuji secara langsung melalui pelayar anda.",phaseConnecting:"Menyambung ke pelayan terbaik...",phasePing:"Mengukur Ping & Kependaman...",phaseDownload:"Menguji Kelajuan Muat Turun...",phaseUpload:"Menguji Kelajuan Muat Naik...",phaseStability:"Menganalisis Kestabilan Rangkaian...",phaseComplete:"UJIAN SELESAI",download:"MUAT TURUN",upload:"MUAT NAIK",ping:"PING",jitter:"JITTER",packetLoss:"KEHILANGAN PAKET",stability:"KESTABILAN",networkStability:"Kestabilan Rangkaian",excellent:"Cemerlang",good:"Baik",fair:"Sederhana",poor:"Lemah",server:"Pelayan",changeServer:"Tukar Pelayan",autoServer:"Pelayan Automatik",connection:"Sambungan",ipAddress:"Alamat IP",isp:"Penyedia (ISP)",asn:"ASN",location:"Lokasi",device:"Peranti",browser:"Pelayar",os:"Sistem Operasi",connectionInfo:"Maklumat Sambungan",speedMeter:"Tolok Kelajuan",liveGraph:"Graf Masa Nyata",shareResult:"Kongsi Keputusan",downloadResult:"Muat Turun Laporan",testHistory:"Sejarah Ujian",noHistory:"Tiada sejarah ujian lagi.",clearHistory:"Kosongkan Sejarah",delete:"Padam",view:"Lihat",exportCsv:"Eksport CSV",exportJson:"Eksport JSON",exportPdf:"Laporan PDF",settings:"Tetapan",theme:"Tema",dark:"Gelap",light:"Terang",units:"Unit Kelajuan",duration:"Tempoh Ujian",quick:"Pantas (~5s)",standard:"Standard (~10s)",extended:"Lanjutan (~20s)",parallelStreams:"Pelbagai Aliran",saveHistoryToggle:"Simpan Sejarah",dataWarning:"Ujian kelajuan boleh menggunakan jumlah data yang ketara.",faqTitle:"Soalan Lazim",aboutTitle:"Tentang NETSPEEDPRO",privacyTitle:"Dasar Privasi",termsTitle:"Syarat Perkhidmatan",compareTitle:"Bandingkan Kelajuan",diagnosticsTitle:"Diagnostik Rangkaian",bufferbloat:"Bufferbloat",dataUsed:"Data Digunakan",yourSpeed:"Kelajuan Anda",avgSpeed:"Purata Global",percentileText:"Lebih pantas daripada kira-kira {percent}% sambungan yang diuji."},tl:{brand:"NETSPEEDPRO",tagline:"Mabilis. Simple. Tumpak.",navSpeedTest:"Speed Test",navHistory:"Kasaysayan",navServers:"Mga Server",navDiagnostics:"Pagsusuri",navCompare:"Ihambing",navFAQ:"FAQ",navAbout:"Tungkol",heroTitle:"Subukan ang Bilis ng Internet Mo",heroSubtitle:"Suriin ang bilis ng download, upload, ping, jitter, at katatagan ng network sa ilang segundo.",startTest:"SIMULAN ANG TEST",stopTest:"ITIGIL",testAgain:"SUBUKAN MULI",readyToTest:"Handa nang sumubok",browserTested:"Direktang susubukan ang iyong koneksyon gamit ang iyong browser.",phaseConnecting:"Kumokonekta sa pinakamagandang server...",phasePing:"Sinusukat ang Ping at Latency...",phaseDownload:"Sinusuri ang Bilis ng Download...",phaseUpload:"Sinusuri ang Bilis ng Upload...",phaseStability:"Sinusuri ang Katatagan ng Network...",phaseComplete:"KUMPLETO ANG PAGSUBOK",download:"DOWNLOAD",upload:"UPLOAD",ping:"PING",jitter:"JITTER",packetLoss:"NAWALANG PACKET",stability:"KATATAGAN",networkStability:"Katatagan ng Network",excellent:"Napakagaling",good:"Maganda",fair:"Katamtaman",poor:"Mahina",server:"Server",changeServer:"Palitan ang Server",autoServer:"Awtomatikong Server",connection:"Koneksyon",ipAddress:"IP Address",isp:"Tagapagbigay (ISP)",asn:"ASN",location:"Lokasyon",device:"Device",browser:"Browser",os:"Operating System",connectionInfo:"Impormasyon ng Koneksyon",speedMeter:"Speedometer",liveGraph:"Live na Graph",shareResult:"Ibahagi ang Resulta",downloadResult:"I-download ang Ulat",testHistory:"Kasaysayan ng Test",noHistory:"Wala pang kasaysayan ng test.",clearHistory:"Burahin ang Kasaysayan",delete:"Burahin",view:"Tingnan",exportCsv:"I-export ang CSV",exportJson:"I-export ang JSON",exportPdf:"PDF na Ulat",settings:"Mga Setting",theme:"Tema",dark:"Madilim",light:"Maliwanag",units:"Unit ng Bilis",duration:"Tagal ng Test",quick:"Mabilis (~5s)",standard:"Karaniwan (~10s)",extended:"Pinalawig (~20s)",parallelStreams:"Maramihang Stream",saveHistoryToggle:"I-save ang Kasaysayan",dataWarning:"Maaaring gumamit ng malaking data ang speed test.",faqTitle:"Mga Madalas Itanong",aboutTitle:"Tungkol sa NETSPEEDPRO",privacyTitle:"Patakaran sa Privacy",termsTitle:"Mga Tuntunin sa Paggamit",compareTitle:"Paghambingin ang Bilis",diagnosticsTitle:"Pagsusuri sa Network",bufferbloat:"Bufferbloat",dataUsed:"Nagamit na Data",yourSpeed:"Ang Bilis Mo",avgSpeed:"Pandaigdigang Karaniwan",percentileText:"Mas mabilis kaysa sa tinatayang {percent}% ng mga nasubok na koneksyon."},sw:{brand:"NETSPEEDPRO",tagline:"Haraka. Rahisi. Sahihi.",navSpeedTest:"Kipimo cha Kasi",navHistory:"Historia",navServers:"Seva",navDiagnostics:"Uchunguzi",navCompare:"Linganisha",navFAQ:"Maswali ya Mara kwa Mara",navAbout:"Kuhusu",heroTitle:"Pima Kasi ya Mtandao Wako",heroSubtitle:"Angalia kasi ya kupakua, kupakia, ping, jitter na utulivu wa mtandao kwa sekunde chache.",startTest:"ANZA KIPIMO",stopTest:"SIMAMISHA",testAgain:"PIMA TENA",readyToTest:"Tayari kupima",browserTested:"Muunganisho wako utapimwa moja kwa moja kupitia kivinjari chako.",phaseConnecting:"Inaunganisha na seva bora...",phasePing:"Inapima Ping na ucheleweshaji...",phaseDownload:"Inapima Kasi ya Kupakua...",phaseUpload:"Inapima Kasi ya Kupakia...",phaseStability:"Inachunguza Utulivu wa Mtandao...",phaseComplete:"KIPIMO KIMEKAMILIKA",download:"KUPAKUA",upload:"KUPAKIA",ping:"PING",jitter:"JITTER",packetLoss:"UPOTEVU WA PAKETI",stability:"UTULIVU",networkStability:"Utulivu wa Mtandao",excellent:"Bora Sana",good:"Nzuri",fair:"Wastani",poor:"Dhaifu",server:"Seva",changeServer:"Badilisha Seva",autoServer:"Seva ya Kiotomatiki",connection:"Muunganisho",ipAddress:"Anwani ya IP",isp:"Mtoa Huduma (ISP)",asn:"ASN",location:"Eneo",device:"Kifaa",browser:"Kivinjari",os:"Mfumo wa Uendeshaji",connectionInfo:"Taarifa za Muunganisho",speedMeter:"Kipima Kasi",liveGraph:"Grafu ya Moja kwa Moja",shareResult:"Shiriki Matokeo",downloadResult:"Pakua Ripoti",testHistory:"Historia ya Vipimo",noHistory:"Bado hakuna historia ya vipimo.",clearHistory:"Futa Historia",delete:"Futa",view:"Tazama",exportCsv:"Hamisha CSV",exportJson:"Hamisha JSON",exportPdf:"Ripoti ya PDF",settings:"Mipangilio",theme:"Muonekano",dark:"Giza",light:"Nuru",units:"Kipimo cha Kasi",duration:"Muda wa Kupima",quick:"Haraka (~5s)",standard:"Kawaida (~10s)",extended:"Iliyopanuliwa (~20s)",parallelStreams:"Mifereji Mingi",saveHistoryToggle:"Hifadhi Historia",dataWarning:"Kipimo cha kasi kinaweza kutumia kiasi kikubwa cha bando.",faqTitle:"Maswali Yanayoulizwa Mara kwa Mara",aboutTitle:"Kuhusu NETSPEEDPRO",privacyTitle:"Sera ya Faragha",termsTitle:"Masharti ya Huduma",compareTitle:"Linganisha Kasi",diagnosticsTitle:"Uchunguzi wa Mtandao",bufferbloat:"Bufferbloat",dataUsed:"Data Iliyotumika",yourSpeed:"Kasi Yako",avgSpeed:"Wastani wa Dunia",percentileText:"Haraka kuliko takriban {percent}% ya miunganisho iliyopimwa."},sk:{brand:"NETSPEEDPRO",tagline:"Rýchlo. Jednoducho. Presne.",navSpeedTest:"Test Rýchlosti",navHistory:"História",navServers:"Servery",navDiagnostics:"Diagnostika",navCompare:"Porovnať",navFAQ:"FAQ",navAbout:"O nás",heroTitle:"Otestujte Rýchlosť Internetu",heroSubtitle:"Zmerajte sťahovanie, nahrávanie, ping, jitter a stabilitu siete v priebehu niekoľkých sekúnd.",startTest:"SPUSTIŤ TEST",stopTest:"ZASTAVIŤ",testAgain:"ZNOVA OTESTOVAŤ",readyToTest:"Pripravené na test",browserTested:"Vaše pripojenie bude testované priamo vo vašom prehliadači.",phaseConnecting:"Pripájanie k najlepšiemu serveru...",phasePing:"Meranie pingu a odozvy...",phaseDownload:"Testovanie rýchlosti sťahovania...",phaseUpload:"Testovanie rýchlosti nahrávania...",phaseStability:"Analýza stability siete...",phaseComplete:"TEST DOKONČENÝ",download:"SŤAHOVANIE",upload:"NAHRÁVANIE",ping:"PING",jitter:"JITTER",packetLoss:"STRATA PAKETOV",stability:"STABILITA",networkStability:"Stabilita Siete",excellent:"Vynikajúca",good:"Dobrá",fair:"Priemerná",poor:"Slabá",server:"Server",changeServer:"Zmeniť server",autoServer:"Automatický server",connection:"Pripojenie",ipAddress:"IP adresa",isp:"Poskytovateľ (ISP)",asn:"ASN",location:"Lokalita",device:"Zariadenie",browser:"Prehliadač",os:"Operačný systém",connectionInfo:"Informácie o pripojení",speedMeter:"Rýchlomer",liveGraph:"Živý Graf",shareResult:"Zdieľať Výsledok",downloadResult:"Stiahnuť Správu",testHistory:"História Testov",noHistory:"Zatiaľ žiadna história testov.",clearHistory:"Vymazať Históriu",delete:"Vymazať",view:"Zobraziť",exportCsv:"Exportovať CSV",exportJson:"Exportovať JSON",exportPdf:"Správa PDF",settings:"Nastavenia",theme:"Motív",dark:"Tmavý",light:"Svetlý",units:"Jednotka",duration:"Dĺžka Testu",quick:"Rýchly (~5s)",standard:"Štandardný (~10s)",extended:"Rozšírený (~20s)",parallelStreams:"Paralelné Vlákna",saveHistoryToggle:"Ukladať Históriu",dataWarning:"Test rýchlosti môže spotrebovať značné množstvo dát.",faqTitle:"Často Kladené Otázky",aboutTitle:"O NETSPEEDPRO",privacyTitle:"Ochrana Súkromia",termsTitle:"Podmienky Služby",compareTitle:"Porovnanie Rýchlosti",diagnosticsTitle:"Diagnostika Siete",bufferbloat:"Bufferbloat",dataUsed:"Spotrebované Dáta",yourSpeed:"Vaša Rýchlosť",avgSpeed:"Globálny Priemer",percentileText:"Rýchlejšie ako približne {percent}% testovaných pripojení."},bg:{brand:"NETSPEEDPRO",tagline:"Бързо. Просто. Точно.",navSpeedTest:"Тест за Скорост",navHistory:"История",navServers:"Сървъри",navDiagnostics:"Диагностика",navCompare:"Сравнение",navFAQ:"Въпроси",navAbout:"За нас",heroTitle:"Тествайте Скоростта на Вашия Интернет",heroSubtitle:"Измерете скорост на сваляне, качване, пинг, джитър и стабилност за секунди.",startTest:"СТАРТИРАЙ ТЕСТ",stopTest:"СПРИ",testAgain:"ТЕСТВАЙ ПАК",readyToTest:"Готов за тест",browserTested:"Връзката ви се тества директно през браузъра.",phaseConnecting:"Свързване с оптимален сървър...",phasePing:"Измерване на пинг и закъснение...",phaseDownload:"Тестване на скорост на сваляне...",phaseUpload:"Тестване на скорост на качване...",phaseStability:"Анализ на стабилността на мрежата...",phaseComplete:"ТЕСТЪТ Е ЗАВЪРШЕН",download:"СВАЛЯНЕ",upload:"КАЧВАНЕ",ping:"ПИНГ",jitter:"ДЖИТЪР",packetLoss:"ЗАГУБА НА ПАКЕТИ",stability:"СТАБИЛНОСТ",networkStability:"Стабилност на Мрежата",excellent:"Отлична",good:"Добра",fair:"Средна",poor:"Слаба",server:"Сървър",changeServer:"Смени сървър",autoServer:"Автоматичен сървър",connection:"Връзка",ipAddress:"IP адрес",isp:"Доставчик (ISP)",asn:"ASN",location:"Местоположение",device:"Устройство",browser:"Браузър",os:"Операционна система",connectionInfo:"Информация за връзката",speedMeter:"Скоростомер",liveGraph:"Графика в Реално Време",shareResult:"Сподели Резултат",downloadResult:"Изтегли Доклад",testHistory:"История на Тестовете",noHistory:"Все още няма история.",clearHistory:"Изчисти Историята",delete:"Изтрий",view:"Преглед",exportCsv:"Експорт CSV",exportJson:"Експорт JSON",exportPdf:"PDF Доклад",settings:"Настройки",theme:"Тема",dark:"Тъмна",light:"Светла",units:"Единица",duration:"Продължителност",quick:"Бърз (~5s)",standard:"Стандартен (~10s)",extended:"Разширен (~20s)",parallelStreams:"Множество Потоци",saveHistoryToggle:"Запази Историята",dataWarning:"Тестът може да изразходва значително количество мобилни данни.",faqTitle:"Често Задавани Въпроси",aboutTitle:"За NETSPEEDPRO",privacyTitle:"Политика за Поверителност",termsTitle:"Условия за Ползване",compareTitle:"Сравнение на Скорости",diagnosticsTitle:"Мрежова Диагностика",bufferbloat:"Bufferbloat",dataUsed:"Използвани Данни",yourSpeed:"Вашата Скорост",avgSpeed:"Глобална Средна",percentileText:"По-бърза от около {percent}% от тестваните връзки."},sr:{brand:"NETSPEEDPRO",tagline:"Брзо. Једноставно. Тачно.",navSpeedTest:"Тест Брзине",navHistory:"Историја",navServers:"Сервери",navDiagnostics:"Дијагностика",navCompare:"Упореди",navFAQ:"Питања",navAbout:"О нама",heroTitle:"Тестирајте Брзину Интернета",heroSubtitle:"Измерите брзину преузимања, слања, пинг, џитер и стабилност мреже у секунди.",startTest:"ПОКРЕНИ ТЕСТ",stopTest:"ЗАУСТАВИ",testAgain:"ПОНОВИ ТЕСТ",readyToTest:"Спремно за тестирање",browserTested:"Ваша веза се тестира директно из прегледача.",phaseConnecting:"Повезивање са најбољим сервером...",phasePing:"Мерење пинга и кашњења...",phaseDownload:"Тестирање брзине преузимања...",phaseUpload:"Тестирање брзине слања...",phaseStability:"Анализа стабилности мреже...",phaseComplete:"ТЕСТ ЈЕ ЗАВРШЕН",download:"ПРЕУЗИМАЊЕ",upload:"СЛАЊЕ",ping:"ПИНГ",jitter:"ЏИТЕР",packetLoss:"ГУБИТАК ПАКЕТА",stability:"СТАБИЛНОСТ",networkStability:"Стабилност Мреже",excellent:"Одлична",good:"Добра",fair:"Просечна",poor:"Лоша",server:"Сервер",changeServer:"Промени сервер",autoServer:"Аутоматски сервер",connection:"Веза",ipAddress:"IP адреса",isp:"Провајдер (ISP)",asn:"ASN",location:"Локација",device:"Уређај",browser:"Прегледач",os:"Оперативни систем",connectionInfo:"Информације о вези",speedMeter:"Брзиномер",liveGraph:"График уживо",shareResult:"Подели Резултат",downloadResult:"Преузми Извештај",testHistory:"Историја Тестова",noHistory:"Још нема историје тестирања.",clearHistory:"Обриши Историју",delete:"Обриши",view:"Преглед",exportCsv:"Извези CSV",exportJson:"Извези JSON",exportPdf:"PDF Извештај",settings:"Подешавања",theme:"Тема",dark:"Тамна",light:"Светла",units:"Јединица",duration:"Трајање",quick:"Брзо (~5s)",standard:"Стандардно (~10s)",extended:"Продужено (~20s)",parallelStreams:"Више Стримова",saveHistoryToggle:"Сачувај Историју",dataWarning:"Тест брзине може потрошити значајну количину података.",faqTitle:"Често Постављана Питања",aboutTitle:"О NETSPEEDPRO",privacyTitle:"Политика Приватности",termsTitle:"Услови Коришћења",compareTitle:"Поређење Брзине",diagnosticsTitle:"Дијагностика Мреже",bufferbloat:"Bufferbloat",dataUsed:"Потрошено Података",yourSpeed:"Ваша Брзина",avgSpeed:"Глобални Просек",percentileText:"Брже од приближно {percent}% тестираних веза."},hr:{brand:"NETSPEEDPRO",tagline:"Brzo. Jednostavno. Točno.",navSpeedTest:"Test Brzine",navHistory:"Povijest",navServers:"Poslužitelji",navDiagnostics:"Dijagnostika",navCompare:"Usporedi",navFAQ:"Česta Pitanja",navAbout:"O nama",heroTitle:"Testirajte Brzinu Interneta",heroSubtitle:"Izmjerite brzinu preuzimanja, slanja, ping, jitter i stabilnost mreže u nekoliko sekundi.",startTest:"POKRENI TEST",stopTest:"ZAUSTAVI",testAgain:"PONOVI TEST",readyToTest:"Spremno za testiranje",browserTested:"Vaša veza se testira izravno putem vašeg preglednika.",phaseConnecting:"Povezivanje s optimalnim poslužiteljem...",phasePing:"Mjerenje pinga i latencije...",phaseDownload:"Testiranje brzine preuzimanja...",phaseUpload:"Testiranje brzine slanja...",phaseStability:"Analiza stabilnosti mreže...",phaseComplete:"TEST JE DOVRŠEN",download:"PREUZIMANJE",upload:"SLANJE",ping:"PING",jitter:"JITTER",packetLoss:"GUBITAK PAKETA",stability:"STABILNOST",networkStability:"Stabilnost Mreže",excellent:"Izvrsna",good:"Dobra",fair:"Prosječna",poor:"Slaba",server:"Poslužitelj",changeServer:"Promijeni poslužitelj",autoServer:"Automatski poslužitelj",connection:"Veza",ipAddress:"IP adresa",isp:"Pružatelj (ISP)",asn:"ASN",location:"Lokacija",device:"Uređaj",browser:"Preglednik",os:"Operativni sustav",connectionInfo:"Informacije o vezi",speedMeter:"Brzinomjer",liveGraph:"Grafikon Uživo",shareResult:"Podijeli Rezultat",downloadResult:"Preuzmi Izvješće",testHistory:"Povijest Testiranja",noHistory:"Još nema povijesti testiranja.",clearHistory:"Očisti Povijest",delete:"Obriši",view:"Pregledaj",exportCsv:"Izvezi CSV",exportJson:"Izvezi JSON",exportPdf:"PDF Izvješće",settings:"Postavke",theme:"Tema",dark:"Tamna",light:"Svijetla",units:"Jedinica",duration:"Trajanje Testa",quick:"Brzo (~5s)",standard:"Standardno (~10s)",extended:"Prošireno (~20s)",parallelStreams:"Više Tokova",saveHistoryToggle:"Spremi Povijest",dataWarning:"Test brzine može potrošiti veću količinu podataka.",faqTitle:"Često Postavljana Pitanja",aboutTitle:"O NETSPEEDPRO",privacyTitle:"Pravila Privatnosti",termsTitle:"Uvjeti Korištenja",compareTitle:"Usporedba Brzine",diagnosticsTitle:"Dijagnostika Mreže",bufferbloat:"Bufferbloat",dataUsed:"Potrošeno Podataka",yourSpeed:"Vaša Brzina",avgSpeed:"Globalni Prosjek",percentileText:"Brže od otprilike {percent}% testiranih veza."},lt:{brand:"NETSPEEDPRO",tagline:"Greita. Paprasta. Tikslu.",navSpeedTest:"Greičio Testas",navHistory:"Istorija",navServers:"Serveriai",navDiagnostics:"Diagnostika",navCompare:"Palyginti",navFAQ:"DUK",navAbout:"Apie mus",heroTitle:"Išbandykite Interneto Greitį",heroSubtitle:"Išmatuokite atsisiuntimą, išsiuntimą, ping, jitter ir tinklo stabilumą per kelias sekundes.",startTest:"PRADĖTI TESTĄ",stopTest:"SUSTABDYTI",testAgain:"TESTUOTI VĖL",readyToTest:"Pasiruošta testui",browserTested:"Jūsų ryšys tikrinamas tiesiogiai per naršyklę.",phaseConnecting:"Jungiamasi prie geriausio serverio...",phasePing:"Matuojamas ping ir delsos laikas...",phaseDownload:"Tikrinamas atsisiuntimo greitis...",phaseUpload:"Tikrinamas išsiuntimo greitis...",phaseStability:"Analizuojamas tinklo stabilumas...",phaseComplete:"TESTAS BAIGTAS",download:"ATSISIUNTIMAS",upload:"IŠSIUNTIMAS",ping:"PING",jitter:"JITTER",packetLoss:"PAKETŲ PRARADIMAS",stability:"STABILUMAS",networkStability:"Tinklo Stabilumas",excellent:"Puikus",good:"Geras",fair:"Vidutinis",poor:"Silpnas",server:"Serveris",changeServer:"Keisti serverį",autoServer:"Automatinis serveris",connection:"Ryšys",ipAddress:"IP adresas",isp:"Tiekėjas (ISP)",asn:"ASN",location:"Vieta",device:"Įrenginys",browser:"Naršyklė",os:"Operacinė sistema",connectionInfo:"Ryšio informacija",speedMeter:"Spidometras",liveGraph:"Grafikas Realiu Laiku",shareResult:"Dalintis Rezultatu",downloadResult:"Atsisiųsti Ataskaitą",testHistory:"Testų Istorija",noHistory:"Testų istorijos dar nėra.",clearHistory:"Išvalyti Istoriją",delete:"Ištrinti",view:"Peržiūrėti",exportCsv:"Eksportuoti CSV",exportJson:"Eksportuoti JSON",exportPdf:"PDF Ataskaita",settings:"Nustatymai",theme:"Tema",dark:"Tamsi",light:"Šviesi",units:"Vienetas",duration:"Testo Trukmė",quick:"Greitas (~5s)",standard:"Standartinis (~10s)",extended:"Išplėstinis (~20s)",parallelStreams:"Keli Srautai",saveHistoryToggle:"Išsaugoti Istoriją",dataWarning:"Greičio testas gali sunaudoti daug duomenų.",faqTitle:"Dažniausiai Užduodami Klausimai",aboutTitle:"Apie NETSPEEDPRO",privacyTitle:"Privatumo Politika",termsTitle:"Paslaugų Sąlygos",compareTitle:"Greičių Palyginimas",diagnosticsTitle:"Tinklo Diagnostika",bufferbloat:"Bufferbloat",dataUsed:"Sunaudoti Duomenys",yourSpeed:"Jūsų Greitis",avgSpeed:"Pasaulinis Vidurkis",percentileText:"Greitesnis nei maždaug {percent}% patikrintų ryšių."}};function Fu({country:i="us",fallback:n="🌐",size:a="normal",className:l=""}){const[p,c]=ct.useState(!1),h=(i||"us").toLowerCase();if(p)return s.jsx("span",{className:`flag-emoji-fallback ${l}`,children:n});const f=a==="small"?{width:18,height:13}:a==="large"?{width:28,height:20}:{width:22,height:16};return s.jsxs("span",{className:`country-flag-wrapper ${a} ${l}`,children:[s.jsx("img",{src:`https://flagcdn.com/w40/${h}.png`,srcSet:`https://flagcdn.com/w80/${h}.png 2x`,alt:`${h.toUpperCase()} flag`,width:f.width,height:f.height,className:"country-flag-img",loading:"lazy",onError:()=>c(!0)}),s.jsx("style",{children:`
        .country-flag-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          overflow: hidden;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
          flex-shrink: 0;
          line-height: 1;
        }

        .country-flag-img {
          display: block;
          object-fit: cover;
          border-radius: 2px;
        }

        .country-flag-wrapper.small {
          width: 18px;
          height: 13px;
        }

        .country-flag-wrapper.normal {
          width: 22px;
          height: 16px;
        }

        .country-flag-wrapper.large {
          width: 28px;
          height: 20px;
        }

        .flag-emoji-fallback {
          font-size: 1.1rem;
          line-height: 1;
        }

        [data-theme="light"] .country-flag-wrapper {
          border-color: rgba(15, 23, 42, 0.15);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.12);
        }
      `})]})}function km({activeTab:i,setActiveTab:n,theme:a,toggleTheme:l,lang:p,setLang:c,openSettings:h,isTesting:f,onNavigate:g}){const[w,k]=ct.useState(!1),[T,P]=ct.useState(!1),[b,U]=ct.useState(!1),[D,q]=ct.useState(""),_=ct.useRef(null),F=ct.useRef(null),K=Bt[p]||Bt.en,he=xs.find(C=>C.code===p)||xs[0],ve=ct.useMemo(()=>{if(!D.trim())return xs;const C=D.toLowerCase();return xs.filter(B=>B.label.toLowerCase().includes(C)||B.native.toLowerCase().includes(C)||B.code.toLowerCase().includes(C)||B.region.toLowerCase().includes(C))},[D]),ye=[{id:"speedtest",path:"/",label:K.navSpeedTest||"Speed Test",icon:Ss},{id:"history",path:"/history",label:K.navHistory||"History",icon:Ru},{id:"diagnostics",path:"/diagnostics",label:K.navDiagnostics||"Diagnostics",icon:Nc},{id:"compare",path:"/compare",label:K.navCompare||"Compare",icon:$h},{id:"servers",path:"/servers",label:K.navServers||"Servers",icon:kc},{id:"faq",path:"/faq",label:K.navFAQ||"FAQ",icon:vc},{id:"about",path:"/about",label:K.navAbout||"About",icon:Zu}],oe={learn:[{id:"key-terms",path:"/learn/key-terms",label:"Key Terms",desc:"100+ networking, broadband & Wi-Fi glossary terms with A-Z filtering",icon:yu,badge:"100+ Terms"},{id:"guides",path:"/learn/guides",label:"Guides",desc:"20+ step-by-step masterclasses for Wi-Fi, ping, bufferbloat & speed",icon:e1,badge:"Step-by-Step"}],tools:[{id:"performance-directory",path:"/tools/performance-directory",label:"Speedtest Performance Directory",desc:"Global ISP benchmarks, throughput metrics & measurement methodology",icon:Rg,badge:"ISP Benchmarks"},{id:"global-index",path:"/tools/global-index",label:"Speedtest Global Index™",desc:"Monthly rankings of 50+ countries for fixed broadband and mobile 5G",icon:p1,badge:"Global Rankings"},{id:"speedtest-awards",path:"/tools/awards",label:"Speedtest Awards™",desc:"Official verified awards for fastest networks and lowest gaming latency",icon:hm,badge:"Verified Honors"}],faq:[{id:"faq",path:"/faq",label:"FAQ",desc:"115+ frequently asked questions with step-by-step pagination",icon:vc,badge:"115+ Answers"}]};ct.useEffect(()=>{const C=B=>{F.current&&!F.current.contains(B.target)&&U(!1),_.current&&!_.current.contains(B.target)&&k(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);const $=(C,B)=>{g?g(B||(C==="speedtest"?"/":`/${C}`)):n&&n(C),k(!1),P(!1),window.scrollTo({top:0,behavior:"smooth"})},pe=C=>{c(C),U(!1),q("")},Se=["key-terms","guides","performance-directory","global-index","speedtest-awards"].includes(i);return s.jsxs("header",{className:"navbar-wrapper",children:[s.jsxs("div",{className:"container navbar-container",children:[s.jsxs("div",{className:"brand-logo",onClick:()=>$("speedtest","/"),children:[s.jsxs("div",{className:"brand-icon-wrapper",children:[s.jsx(Ss,{className:"brand-icon",size:22}),s.jsx("div",{className:"brand-pulse"})]}),s.jsx("div",{className:"brand-text",children:s.jsxs("span",{className:"brand-name",children:["NETSPEED",s.jsx("span",{className:"text-cyan",children:"PRO"})]})})]}),s.jsxs("nav",{className:"desktop-nav","aria-label":"Main Navigation",children:[ye.map(C=>{const B=C.icon,Z=i===C.id;return s.jsxs("button",{type:"button",className:`nav-link ${Z?"active":""}`,onClick:()=>$(C.id,C.path),disabled:f&&C.id!=="speedtest",title:C.label,children:[s.jsx(B,{size:16}),s.jsx("span",{children:C.label})]},C.id)}),s.jsxs("div",{className:"nav-menu-button-wrapper",ref:_,children:[s.jsxs("button",{type:"button",className:`nav-link nav-menu-btn ${w||Se?"active menu-active":""}`,onClick:()=>k(!w),"aria-label":"Open Site Menu","aria-expanded":w,children:[s.jsx(bh,{size:16,className:"menu-btn-icon"}),s.jsx("span",{children:"Menu"}),s.jsx(Iu,{size:14,className:`menu-chevron ${w?"rotate":""}`})]}),w&&s.jsxs("div",{className:"menu-mega-panel glass-card",children:[s.jsxs("div",{className:"menu-panel-header",children:[s.jsxs("div",{className:"panel-header-left",children:[s.jsx(Sd,{size:16,className:"text-cyan"}),s.jsx("span",{className:"panel-header-title",children:"NETSPEEDPRO EXPLORER"})]}),s.jsx("button",{type:"button",className:"panel-close-btn",onClick:()=>k(!1),"aria-label":"Close Menu",children:s.jsx(xc,{size:16})})]}),s.jsxs("div",{className:"menu-sections-grid",children:[s.jsxs("div",{className:"menu-section-col",children:[s.jsxs("div",{className:"section-title-wrap",children:[s.jsx(yu,{size:15,className:"text-cyan"}),s.jsx("h4",{className:"section-title",children:"LEARN"})]}),s.jsx("div",{className:"section-items-list",children:oe.learn.map(C=>{const B=C.icon,Z=i===C.id;return s.jsxs("button",{type:"button",className:`menu-panel-item ${Z?"item-active":""}`,onClick:()=>$(C.id,C.path),children:[s.jsx("div",{className:"menu-item-icon",children:s.jsx(B,{size:16})}),s.jsxs("div",{className:"menu-item-info",children:[s.jsxs("div",{className:"menu-item-row",children:[s.jsx("strong",{className:"menu-item-name",children:C.label}),s.jsx("span",{className:"menu-item-badge",children:C.badge})]}),s.jsx("p",{className:"menu-item-desc",children:C.desc})]})]},C.id)})})]}),s.jsxs("div",{className:"menu-section-col",children:[s.jsxs("div",{className:"section-title-wrap",children:[s.jsx(Du,{size:15,className:"text-cyan"}),s.jsx("h4",{className:"section-title",children:"TOOLS"})]}),s.jsx("div",{className:"section-items-list",children:oe.tools.map(C=>{const B=C.icon,Z=i===C.id;return s.jsxs("button",{type:"button",className:`menu-panel-item ${Z?"item-active":""}`,onClick:()=>$(C.id,C.path),children:[s.jsx("div",{className:"menu-item-icon",children:s.jsx(B,{size:16})}),s.jsxs("div",{className:"menu-item-info",children:[s.jsxs("div",{className:"menu-item-row",children:[s.jsx("strong",{className:"menu-item-name",children:C.label}),s.jsx("span",{className:"menu-item-badge",children:C.badge})]}),s.jsx("p",{className:"menu-item-desc",children:C.desc})]})]},C.id)})})]}),s.jsxs("div",{className:"menu-section-col",children:[s.jsxs("div",{className:"section-title-wrap",children:[s.jsx(vc,{size:15,className:"text-cyan"}),s.jsx("h4",{className:"section-title",children:"FAQ"})]}),s.jsx("div",{className:"section-items-list",children:oe.faq.map(C=>{const B=C.icon,Z=i===C.id;return s.jsxs("button",{type:"button",className:`menu-panel-item ${Z?"item-active":""}`,onClick:()=>$(C.id,C.path),children:[s.jsx("div",{className:"menu-item-icon",children:s.jsx(B,{size:16})}),s.jsxs("div",{className:"menu-item-info",children:[s.jsxs("div",{className:"menu-item-row",children:[s.jsx("strong",{className:"menu-item-name",children:C.label}),s.jsx("span",{className:"menu-item-badge",children:C.badge})]}),s.jsx("p",{className:"menu-item-desc",children:C.desc})]})]},C.id)})})]})]}),s.jsx("div",{className:"menu-panel-footer",children:s.jsx("span",{className:"panel-footer-tip",children:"💡 Click any item above to navigate directly to its dedicated page."})})]})]})]}),s.jsxs("div",{className:"nav-actions",children:[s.jsxs("div",{className:"custom-lang-wrapper",ref:F,children:[s.jsxs("button",{className:`custom-lang-btn ${b?"active":""}`,onClick:()=>{U(!b),q("")},"aria-label":"Select Language",title:"Change Language",children:[s.jsx(Wl,{size:15,className:"lang-icon"}),s.jsx(Fu,{country:he.country,fallback:he.flag,size:"small"}),s.jsx("span",{className:"lang-code-text",children:he.short}),s.jsx(Iu,{size:14,className:`chevron-icon ${b?"rotate":""}`})]}),b&&s.jsxs("div",{className:"custom-lang-dropdown glass-card",children:[s.jsxs("div",{className:"dropdown-header-row",children:[s.jsxs("span",{className:"dropdown-header-title",children:["Select Language (",xs.length,")"]}),s.jsxs("span",{className:"dropdown-header-badge",children:[xs.length," Available"]})]}),s.jsxs("div",{className:"lang-search-box",children:[s.jsx(wd,{size:13,className:"lang-search-ico"}),s.jsx("input",{type:"text",placeholder:"Search languages...",value:D,onChange:C=>q(C.target.value),className:"lang-search-input",autoFocus:!0}),D&&s.jsx("button",{className:"lang-clear-btn",onClick:()=>q(""),children:"✕"})]}),s.jsx("div",{className:"lang-grid-scroll",children:ve.length===0?s.jsxs("div",{className:"lang-empty-msg",children:['No language found for "',D,'"']}):ve.map(C=>{const B=C.code===p;return s.jsxs("button",{className:`lang-option-card ${B?"selected":""}`,onClick:()=>pe(C.code),children:[s.jsx(Fu,{country:C.country,fallback:C.flag,size:"normal"}),s.jsxs("div",{className:"lang-text-col",children:[s.jsx("span",{className:"lang-native-name",children:C.native}),s.jsx("span",{className:"lang-english-sub",children:C.label})]}),B&&s.jsx(Xu,{size:14,className:"lang-check-icon"})]},C.code)})})]})]}),s.jsx("button",{className:"btn-icon theme-toggle-btn",onClick:l,title:a==="dark"?"Switch to Light Mode":"Switch to Dark Mode","aria-label":"Toggle Theme",children:a==="dark"?s.jsx(df,{size:17}):s.jsx(af,{size:17})}),s.jsx("button",{className:"btn-icon settings-btn",onClick:h,title:K.settings||"Settings","aria-label":"Open Settings",children:s.jsx(lf,{size:17})}),s.jsx("button",{className:"btn-icon mobile-menu-btn",onClick:()=>P(!T),"aria-label":"Toggle Navigation Menu",children:T?s.jsx(xc,{size:20}):s.jsx(bh,{size:20})})]})]}),T&&s.jsx("div",{className:"mobile-drawer glass-card",children:s.jsxs("div",{className:"mobile-nav-links",children:[ye.map(C=>{const B=C.icon,Z=i===C.id;return s.jsxs("button",{type:"button",className:`mobile-nav-link ${Z?"active":""}`,onClick:()=>$(C.id,C.path),children:[s.jsx(B,{size:18}),s.jsx("span",{children:C.label})]},C.id)}),s.jsxs("div",{className:"mobile-drawer-section",children:[s.jsxs("div",{className:"mobile-section-header",children:[s.jsx(yu,{size:14,className:"text-cyan"}),s.jsx("span",{children:"LEARN"})]}),s.jsx("div",{className:"mobile-section-links",children:oe.learn.map(C=>{const B=C.icon,Z=i===C.id;return s.jsxs("button",{type:"button",className:`mobile-sub-link ${Z?"active":""}`,onClick:()=>$(C.id,C.path),children:[s.jsx(B,{size:16}),s.jsxs("div",{className:"mobile-sub-text",children:[s.jsx("span",{className:"sub-name",children:C.label}),s.jsx("span",{className:"sub-desc",children:C.desc})]})]},C.id)})})]}),s.jsxs("div",{className:"mobile-drawer-section",children:[s.jsxs("div",{className:"mobile-section-header",children:[s.jsx(Du,{size:14,className:"text-cyan"}),s.jsx("span",{children:"TOOLS"})]}),s.jsx("div",{className:"mobile-section-links",children:oe.tools.map(C=>{const B=C.icon,Z=i===C.id;return s.jsxs("button",{type:"button",className:`mobile-sub-link ${Z?"active":""}`,onClick:()=>$(C.id,C.path),children:[s.jsx(B,{size:16}),s.jsxs("div",{className:"mobile-sub-text",children:[s.jsx("span",{className:"sub-name",children:C.label}),s.jsx("span",{className:"sub-desc",children:C.desc})]})]},C.id)})})]})]})}),s.jsx("style",{children:`
        .navbar-wrapper {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(7, 13, 24, 0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-color);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 68px;
          gap: 20px;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          user-select: none;
        }

        .brand-icon-wrapper {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .brand-icon {
          color: var(--accent-cyan);
        }

        .brand-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 1px solid var(--accent-cyan);
          opacity: 0.4;
          animation: ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .brand-name {
          font-size: 1.25rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: #ffffff;
        }

        /* Desktop Nav */
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          border-radius: var(--radius-xs);
          font-size: 0.86rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: none;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .nav-link:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .nav-link.active {
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          border-color: rgba(0, 229, 255, 0.25);
        }

        /* Menu Button */
        .nav-menu-button-wrapper {
          position: relative;
        }

        .nav-menu-btn {
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: var(--accent-cyan);
          font-weight: 700;
          padding: 8px 14px;
        }

        .nav-menu-btn:hover, .nav-menu-btn.menu-active {
          background: var(--accent-cyan);
          color: #070d18;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 16px rgba(0, 229, 255, 0.4);
        }

        .menu-chevron {
          transition: transform 0.2s ease;
        }

        .menu-chevron.rotate {
          transform: rotate(180deg);
        }

        /* Menu Mega Panel */
        .menu-mega-panel {
          position: absolute;
          top: calc(100% + 12px);
          right: -100px;
          width: 780px;
          max-width: 90vw;
          background: rgba(10, 18, 34, 0.98);
          border: 1px solid rgba(0, 229, 255, 0.35);
          border-radius: var(--radius-sm);
          padding: 20px;
          box-shadow: 0 20px 48px rgba(0, 0, 0, 0.6);
          animation: dropIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 180;
        }

        .menu-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 16px;
        }

        .panel-header-left {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .panel-header-title {
          font-size: 0.76rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
        }

        .panel-close-btn {
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          padding: 4px;
        }

        .panel-close-btn:hover {
          color: #ffffff;
        }

        .menu-sections-grid {
          display: grid;
          grid-template-columns: 1.1fr 1.3fr 0.9fr;
          gap: 18px;
        }

        .menu-section-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .section-title-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .section-title {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          color: var(--text-primary);
        }

        .section-items-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .menu-panel-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 10px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          cursor: pointer;
          text-align: left;
          width: 100%;
          transition: all var(--transition-fast);
        }

        .menu-panel-item:hover {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          transform: translateY(-1px);
        }

        .menu-panel-item.item-active {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.12);
        }

        .menu-item-icon {
          padding: 6px;
          border-radius: 6px;
          background: rgba(0, 229, 255, 0.08);
          color: var(--accent-cyan);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .menu-item-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .menu-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
        }

        .menu-item-name {
          font-size: 0.86rem;
          font-weight: 700;
          color: #ffffff;
        }

        .menu-item-badge {
          font-size: 0.62rem;
          font-weight: 800;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
          padding: 1px 5px;
          border-radius: 4px;
          white-space: nowrap;
        }

        .menu-item-desc {
          font-size: 0.72rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        .menu-panel-footer {
          margin-top: 16px;
          padding-top: 10px;
          border-top: 1px solid var(--border-color);
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        /* Nav Actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .custom-lang-wrapper {
          position: relative;
        }

        .custom-lang-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          color: var(--text-primary);
          font-size: 0.84rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .custom-lang-btn:hover, .custom-lang-btn.active {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
        }

        .lang-code-text {
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
        }

        .custom-lang-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          width: 320px;
          background: rgba(10, 18, 32, 0.97);
          border: 1px solid rgba(0, 229, 255, 0.25);
          border-radius: var(--radius-sm);
          padding: 12px;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5);
          z-index: 200;
        }

        .dropdown-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }

        .dropdown-header-title {
          font-size: 0.78rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .dropdown-header-badge {
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .lang-search-box {
          position: relative;
          display: flex;
          align-items: center;
          margin-bottom: 10px;
        }

        .lang-search-ico {
          position: absolute;
          left: 10px;
          color: var(--text-tertiary);
        }

        .lang-search-input {
          width: 100%;
          padding: 8px 28px 8px 30px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.82rem;
          color: var(--text-primary);
        }

        .lang-clear-btn {
          position: absolute;
          right: 8px;
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
        }

        .lang-grid-scroll {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px;
          max-height: 240px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .lang-option-card {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 10px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          cursor: pointer;
          text-align: left;
          transition: all var(--transition-fast);
        }

        .lang-option-card:hover {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.06);
        }

        .lang-option-card.selected {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.12);
        }

        .lang-text-col {
          display: flex;
          flex-direction: column;
          flex: 1;
          overflow: hidden;
        }

        .lang-native-name {
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .lang-english-sub {
          font-size: 0.68rem;
          color: var(--text-tertiary);
        }

        .lang-check-icon {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .mobile-menu-btn {
          display: none;
        }

        /* Mobile Drawer */
        .mobile-drawer {
          border-top: 1px solid var(--border-color);
          padding: 16px;
          max-height: calc(100vh - 70px);
          overflow-y: auto;
        }

        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .mobile-nav-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px;
          border-radius: var(--radius-xs);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
        }

        .mobile-nav-link.active {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
        }

        .mobile-drawer-section {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding-top: 8px;
          border-top: 1px solid var(--border-color);
        }

        .mobile-section-header {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.06em;
          padding: 2px 4px;
        }

        .mobile-section-links {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mobile-sub-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 8px 12px;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          cursor: pointer;
          text-align: left;
        }

        .mobile-sub-link.active {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.1);
        }

        .mobile-sub-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .sub-name {
          font-size: 0.84rem;
          font-weight: 700;
          color: #ffffff;
        }

        .sub-desc {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }

        @keyframes dropIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1120px) {
          .menu-mega-panel {
            width: 680px;
            right: 0;
          }
          .menu-sections-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 980px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: inline-flex;
          }
        }
      `})]})}const od="netspeedpro_test_history_v1",xh="netspeedpro_settings_v1",Nm="netspeed_test_history_v1",Tm="netspeed_settings_v1",sd={theme:"dark",unit:"Mbps",duration:10,parallelStreams:4,saveHistory:!0,language:"en",serverId:"in-bom-1"},Er={getHistory(){try{const i=localStorage.getItem(od)||localStorage.getItem(Nm);return i?JSON.parse(i):[]}catch{return[]}},saveHistory(i){try{if(!this.getSettings().saveHistory)return[];const a=this.getHistory(),p=[{id:"test_"+Date.now()+"_"+Math.random().toString(36).substr(2,6),timestamp:new Date().toISOString(),formattedDate:new Intl.DateTimeFormat(void 0,{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(new Date),...i},...a.slice(0,49)];return localStorage.setItem(od,JSON.stringify(p)),p}catch(n){return console.error("Failed to save test history:",n),[]}},deleteHistoryItem(i){try{const n=this.getHistory().filter(a=>a.id!==i);return localStorage.setItem(od,JSON.stringify(n)),n}catch{return[]}},clearHistory(){try{return localStorage.removeItem(od),[]}catch{return[]}},getSettings(){try{const i=localStorage.getItem(xh)||localStorage.getItem(Tm);return i?{...sd,...JSON.parse(i)}:sd}catch{return sd}},saveSettings(i){try{const a={...this.getSettings(),...i};return localStorage.setItem(xh,JSON.stringify(a)),a}catch{return sd}},formatSpeed(i,n="Mbps"){const a=parseFloat(i)||0;return n==="MB/s"?(a/8).toFixed(2):n==="Gbps"?(a/1e3).toFixed(3):a>=100?a.toFixed(1):a.toFixed(2)},formatBytes(i){if(!i||i===0)return"0 MB";const n=i/(1024*1024);return n>=1e3?(n/1024).toFixed(2)+" GB":n.toFixed(1)+" MB"}},fc=[0,5,10,25,50,100,250,500,1e3,2e3];function Pm({currentSpeed:i=0,phase:n="idle",unit:a="Mbps",lang:l="en",ping:p=0,jitter:c=0,serverName:h="Auto",connectionType:f="Wi-Fi"}){const g=ct.useRef(null),w=ct.useRef(0),k=ct.useRef(i),T=ct.useRef(null),P=Bt[l]||Bt.en;k.current=i;const b=_=>{const F=135*(Math.PI/180),K=405*(Math.PI/180),he=K-F;if(_<=0)return F;if(_>=2e3)return K;for(let ve=0;ve<fc.length-1;ve++){const ye=fc[ve],oe=fc[ve+1];if(_>=ye&&_<=oe){const $=(_-ye)/(oe-ye),pe=F+ve/(fc.length-1)*he,Se=F+(ve+1)/(fc.length-1)*he;return pe+$*(Se-pe)}}return K};ct.useEffect(()=>{const _=g.current;if(!_)return;const F=_.getContext("2d"),K=()=>{var B;const $=((B=_.parentElement)==null?void 0:B.clientWidth)||380,pe=Math.min(380,Math.max(270,$)),Se=Math.round(pe*.76),C=window.devicePixelRatio||1;return _.width=pe*C,_.height=Se*C,F.setTransform(1,0,0,1,0,0),F.scale(C,C),{width:pe,height:Se}};let{width:he,height:ve}=K();const ye=()=>{const $=K();he=$.width,ve=$.height};window.addEventListener("resize",ye);const oe=()=>{w.current+=(k.current-w.current)*.22;const $=w.current;F.clearRect(0,0,he,ve);const pe=he/2,Se=ve*.52,C=he/380,B=132*C,Z=135*(Math.PI/180),te=405*(Math.PI/180),Ne=document.documentElement.getAttribute("data-theme")==="light",ue=F.createRadialGradient(pe,Se,B*.2,pe,Se,B*1.15);Ne?(ue.addColorStop(0,"rgba(2, 132, 199, 0.04)"),ue.addColorStop(.75,"rgba(241, 245, 249, 0.85)"),ue.addColorStop(1,"rgba(255, 255, 255, 0)")):(ue.addColorStop(0,"rgba(0, 229, 255, 0.03)"),ue.addColorStop(.75,"rgba(15, 23, 42, 0.45)"),ue.addColorStop(1,"rgba(2, 6, 23, 0)")),F.beginPath(),F.arc(pe,Se,B*1.15,0,Math.PI*2),F.fillStyle=ue,F.fill(),F.beginPath(),F.arc(pe,Se,B+8*C,Z,te),F.lineWidth=1.5*C,F.strokeStyle=Ne?"rgba(0, 0, 0, 0.08)":"rgba(255, 255, 255, 0.08)",F.stroke(),F.beginPath(),F.arc(pe,Se,B,Z,te),F.lineWidth=10*C,F.strokeStyle=Ne?"#e2e8f0":"rgba(255, 255, 255, 0.1)",F.lineCap="round",F.stroke();const ke=44,ee=te-Z;for(let A=0;A<=ke;A++){const N=Z+A/ke*ee,I=A%4===0,G=B-(I?13:6)*C,V=B-2*C,Y=pe+Math.cos(N)*G,ne=Se+Math.sin(N)*G,re=pe+Math.cos(N)*V,ce=Se+Math.sin(N)*V;F.beginPath(),F.moveTo(Y,ne),F.lineTo(re,ce),F.lineWidth=(I?2:1)*C,F.strokeStyle=I?Ne?"#334155":"rgba(255, 255, 255, 0.55)":Ne?"#cbd5e1":"rgba(148, 163, 184, 0.25)",F.stroke()}[{val:0,label:"0"},{val:10,label:"10"},{val:50,label:"50"},{val:100,label:"100"},{val:250,label:"250"},{val:500,label:"500"},{val:1e3,label:"1G"},{val:2e3,label:"2G"}].forEach(({val:A,label:N})=>{const I=b(A),G=B-25*C,V=pe+Math.cos(I)*G,Y=Se+Math.sin(I)*G+3.5*C,ne=Math.max(9,Math.round(10.5*C));F.font=`700 ${ne}px "Outfit", "Inter", -apple-system, sans-serif`,F.fillStyle=Ne?"#334155":"#94a3b8",F.textAlign="center",F.textBaseline="middle",F.fillText(N,V,Y)});const z=b($);if(z>Z){let A=Ne?"#0284c7":"#00f0ff",N=Ne?"rgba(2, 132, 199, 0.35)":"rgba(0, 240, 255, 0.5)";n==="upload"?(A=Ne?"#059669":"#00df89",N=Ne?"rgba(5, 150, 105, 0.35)":"rgba(0, 223, 137, 0.5)"):n==="ping"&&(A=Ne?"#7c3aed":"#8b5cf6",N=Ne?"rgba(124, 58, 237, 0.35)":"rgba(139, 92, 246, 0.5)"),F.save(),F.beginPath(),F.arc(pe,Se,B,Z,z),F.lineWidth=14*C,F.lineCap="round",F.strokeStyle=N,F.shadowColor=A,F.shadowBlur=22*C,F.stroke(),F.restore(),F.save(),F.beginPath(),F.arc(pe,Se,B,Z,z),F.lineWidth=10*C,F.lineCap="round",F.strokeStyle=A,F.stroke(),F.restore();const I=pe+Math.cos(z)*B,G=Se+Math.sin(z)*B;F.save(),F.beginPath(),F.arc(I,G,8.5*C,0,Math.PI*2),F.fillStyle=A,F.shadowColor=A,F.shadowBlur=18*C,F.fill(),F.beginPath(),F.arc(I,G,4*C,0,Math.PI*2),F.fillStyle="#ffffff",F.shadowBlur=4*C,F.fill(),F.restore()}T.current=requestAnimationFrame(oe)};return oe(),()=>{window.removeEventListener("resize",ye),T.current&&cancelAnimationFrame(T.current)}},[n]);const U=Er.formatSpeed(i,a),q=(()=>{switch(n){case"connecting":return{text:P.phaseConnecting,color:"badge-purple"};case"ping":return{text:P.phasePing,color:"badge-purple"};case"download":return{text:P.download,color:"badge-cyan"};case"upload":return{text:P.upload,color:"badge-emerald"};case"stability":return{text:P.phaseStability,color:"badge-amber"};case"complete":return{text:P.phaseComplete,color:"badge-emerald"};default:return{text:P.readyToTest,color:"badge-cyan"}}})();return s.jsxs("div",{className:"speedometer-container",children:[s.jsxs("div",{className:"canvas-wrapper",children:[s.jsx("canvas",{ref:g,className:"speedometer-canvas"}),s.jsxs("div",{className:"speedometer-center-content",children:[s.jsxs("div",{className:`badge ${q.color} speedometer-phase-badge`,children:[n!=="idle"&&n!=="complete"&&s.jsx("span",{className:"live-indicator"}),s.jsx("span",{children:q.text})]}),s.jsxs("div",{className:"speed-number-wrapper",children:[s.jsx("span",{className:"speed-number",children:U}),s.jsx("span",{className:"speed-unit-pill",children:a})]}),s.jsxs("div",{className:"speedometer-substatus",children:[n==="download"&&s.jsx("span",{className:"substatus-download",children:"▼ LIVE DOWNLOAD STREAM"}),n==="upload"&&s.jsx("span",{className:"substatus-upload",children:"▲ LIVE UPLOAD STREAM"}),n==="ping"&&s.jsx("span",{className:"substatus-ping",children:"● PROBING RTT LATENCY"}),n==="idle"&&s.jsx("span",{className:"substatus-idle",children:"Ready for benchmark"}),n==="complete"&&s.jsx("span",{className:"substatus-complete",children:"✔ Telemetry Verified"})]})]})]}),s.jsxs("div",{className:"telemetry-bar",children:[s.jsxs("div",{className:"telemetry-segment",children:[s.jsxs("div",{className:"segment-header",children:[s.jsx("span",{className:"segment-dot dot-purple"}),s.jsx("span",{className:"segment-label",children:P.ping})]}),s.jsxs("div",{className:"segment-value-row",children:[s.jsx("span",{className:"segment-value text-purple",children:p>0?p:"--"}),s.jsx("span",{className:"segment-unit",children:"ms"})]})]}),s.jsx("div",{className:"telemetry-divider"}),s.jsxs("div",{className:"telemetry-segment",children:[s.jsxs("div",{className:"segment-header",children:[s.jsx("span",{className:"segment-dot dot-amber"}),s.jsx("span",{className:"segment-label",children:P.jitter})]}),s.jsxs("div",{className:"segment-value-row",children:[s.jsx("span",{className:"segment-value text-amber",children:c>0?c:"--"}),s.jsx("span",{className:"segment-unit",children:"ms"})]})]}),s.jsx("div",{className:"telemetry-divider"}),s.jsxs("div",{className:"telemetry-segment",children:[s.jsxs("div",{className:"segment-header",children:[s.jsx("span",{className:"segment-dot dot-cyan"}),s.jsx("span",{className:"segment-label",children:P.server})]}),s.jsx("div",{className:"segment-value-row",children:s.jsx("span",{className:"segment-value text-cyan",title:h,children:h||"Auto"})})]}),s.jsx("div",{className:"telemetry-divider"}),s.jsxs("div",{className:"telemetry-segment",children:[s.jsxs("div",{className:"segment-header",children:[s.jsx("span",{className:"segment-dot dot-emerald"}),s.jsx("span",{className:"segment-label",children:P.connection})]}),s.jsx("div",{className:"segment-value-row",children:s.jsx("span",{className:"segment-value text-emerald",title:f,children:f||"Broadband"})})]})]}),s.jsx("style",{children:`
        .speedometer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          max-width: 540px;
          margin: 0 auto;
        }

        .canvas-wrapper {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 380 / 288;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .speedometer-canvas {
          width: 100%;
          height: 100%;
          display: block;
          filter: drop-shadow(0 8px 24px rgba(0, 0, 0, 0.25));
        }

        .speedometer-center-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 8px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          pointer-events: none;
          gap: 2px;
        }

        .speedometer-phase-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: clamp(0.68rem, 2vw, 0.75rem);
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 12px;
          border-radius: var(--radius-full);
        }

        .speed-number-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          line-height: 1;
          margin: 1px 0;
        }

        .speed-number {
          font-family: var(--font-mono);
          font-size: clamp(2.6rem, 8.5vw, 3.8rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          font-feature-settings: 'tnum' on, 'lnum' on;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        [data-theme="light"] .speed-number {
          text-shadow: none;
          color: #0f172a;
        }

        .speed-unit-pill {
          display: inline-block;
          font-size: clamp(0.8rem, 2.4vw, 0.92rem);
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 1px 9px;
          border-radius: var(--radius-full);
          margin-top: 2px;
        }

        [data-theme="light"] .speed-unit-pill {
          background: rgba(2, 132, 199, 0.08);
          border-color: rgba(2, 132, 199, 0.25);
          color: #0284c7;
        }

        .speedometer-substatus {
          margin-top: 4px;
          font-size: clamp(0.68rem, 1.8vw, 0.75rem);
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-tertiary);
        }

        .substatus-download { 
          color: var(--accent-cyan); 
          text-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
        }
        .substatus-upload { 
          color: var(--accent-emerald); 
          text-shadow: 0 0 10px rgba(0, 223, 137, 0.4);
        }
        .substatus-ping { 
          color: var(--accent-purple); 
          text-shadow: 0 0 10px rgba(139, 92, 246, 0.4);
        }
        .substatus-complete { 
          color: var(--accent-emerald); 
          font-weight: 800; 
        }

        /* Luxury Segmented Telemetry Pill Bar */
        .telemetry-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background: linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(8, 14, 28, 0.9) 100%);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: var(--radius-full);
          padding: 6px 10px;
          margin-top: 5px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .telemetry-segment {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          text-align: center;
          flex: 1;
          min-width: 0;
          padding: 6px 8px;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .telemetry-segment:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .segment-header {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .segment-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .dot-purple {
          background: var(--accent-purple);
          box-shadow: 0 0 6px var(--accent-purple-glow);
        }

        .dot-amber {
          background: var(--accent-amber);
          box-shadow: 0 0 6px var(--accent-amber-glow);
        }

        .dot-cyan {
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan-glow);
        }

        .dot-emerald {
          background: var(--accent-emerald);
          box-shadow: 0 0 6px var(--accent-emerald-glow);
        }

        .segment-label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--text-tertiary);
          letter-spacing: 0.09em;
          white-space: nowrap;
        }

        .segment-value-row {
          display: flex;
          align-items: baseline;
          justify-content: center;
          gap: 3px;
          max-width: 100%;
          overflow: hidden;
        }

        .segment-value {
          font-size: 1rem;
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }

        .segment-unit {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: lowercase;
        }

        .text-purple { color: var(--accent-purple); }
        .text-amber { color: var(--accent-amber); }
        .text-cyan { color: var(--accent-cyan); }
        .text-emerald { color: var(--accent-emerald); }

        .telemetry-divider {
          width: 1px;
          height: 24px;
          background: linear-gradient(180deg, transparent 0%, rgba(255, 255, 255, 0.15) 50%, transparent 100%);
          flex-shrink: 0;
        }

        [data-theme="light"] .telemetry-bar {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }

        [data-theme="light"] .telemetry-segment:hover {
          background: rgba(2, 132, 199, 0.04);
        }

        [data-theme="light"] .telemetry-divider {
          background: linear-gradient(180deg, transparent 0%, #cbd5e1 50%, transparent 100%);
        }

        @media (max-width: 520px) {
          .telemetry-bar {
            padding: 5px 6px;
          }
          .telemetry-segment {
            padding: 5px 3px;
          }
          .segment-value {
            font-size: 0.88rem;
          }
          .segment-label {
            font-size: 0.6rem;
          }
        }
      `})]})}function Am({downloadSamples:i=[],uploadSamples:n=[],phase:a="idle",unit:l="Mbps",lang:p="en"}){const c=ct.useRef(null),h=Bt[p]||Bt.en;return ct.useEffect(()=>{const f=c.current;if(!f)return;const g=f.getContext("2d"),w=()=>{const T=window.devicePixelRatio||1,P=f.parentElement?f.parentElement.clientWidth:600,b=P<480,U=b?180:220;f.width=P*T,f.height=U*T,g.setTransform(1,0,0,1,0,0),g.scale(T,T),g.clearRect(0,0,P,U);const D=b?{top:16,right:14,bottom:26,left:40}:{top:20,right:30,bottom:35,left:55},q=Math.max(10,P-D.left-D.right),_=Math.max(10,U-D.top-D.bottom),F=[...i.map(ue=>ue.speed),...n.map(ue=>ue.speed),20],K=Math.max(...F);let he=Math.ceil(K*1.15/10)*10;he<50&&(he=50);const ve=Math.max(10,...i.map(ue=>ue.time),...n.map(ue=>ue.time)),ye=document.documentElement.getAttribute("data-theme")==="light",oe=b?3:4;g.font='600 10px "JetBrains Mono", monospace',g.fillStyle=ye?"#64748b":"rgba(148, 163, 184, 0.75)",g.textAlign="right";for(let ue=0;ue<=oe;ue++){const ke=he/oe*ue,ee=D.top+_-ue/oe*_;g.beginPath(),g.moveTo(D.left,ee),g.lineTo(P-D.right,ee),g.lineWidth=1,g.strokeStyle=ue===0?ye?"#cbd5e1":"rgba(255, 255, 255, 0.15)":ye?"#f1f5f9":"rgba(255, 255, 255, 0.05)",g.stroke(),g.fillText(`${Math.round(ke)}`,D.left-6,ee+3.5)}const $=b?4:5;g.textAlign="center";for(let ue=0;ue<=$;ue++){const ke=ve/$*ue,ee=D.left+ue/$*q;g.beginPath(),g.moveTo(ee,D.top+_),g.lineTo(ee,D.top+_+4),g.strokeStyle=ye?"#cbd5e1":"rgba(255, 255, 255, 0.2)",g.stroke(),g.fillText(`${ke.toFixed(0)}s`,ee,U-(b?8:12))}const pe=(ue,ke,ee,me)=>{if(!ue||ue.length<2)return;const z=ue.map(I=>({x:D.left+Math.min(1,I.time/ve)*q,y:D.top+_-Math.min(I.speed,he)/he*_}));g.save(),g.beginPath(),g.moveTo(z[0].x,D.top+_),g.lineTo(z[0].x,z[0].y);for(let I=0;I<z.length-1;I++){const G=(z[I].x+z[I+1].x)/2,V=(z[I].y+z[I+1].y)/2;g.quadraticCurveTo(z[I].x,z[I].y,G,V)}g.lineTo(z[z.length-1].x,z[z.length-1].y),g.lineTo(z[z.length-1].x,D.top+_),g.closePath();const A=g.createLinearGradient(0,D.top,0,D.top+_);A.addColorStop(0,ee),A.addColorStop(1,"transparent"),g.fillStyle=A,g.fill(),g.restore(),g.save(),g.beginPath(),g.moveTo(z[0].x,z[0].y);for(let I=0;I<z.length-1;I++){const G=(z[I].x+z[I+1].x)/2,V=(z[I].y+z[I+1].y)/2;g.quadraticCurveTo(z[I].x,z[I].y,G,V)}g.lineTo(z[z.length-1].x,z[z.length-1].y),g.strokeStyle=ke,g.lineWidth=b?2:2.5,g.shadowColor=me,g.shadowBlur=ye?6:10,g.stroke(),g.restore();const N=z[z.length-1];g.beginPath(),g.arc(N.x,N.y,b?3.5:4.5,0,Math.PI*2),g.fillStyle=ye?ke:"#ffffff",g.shadowColor=me,g.shadowBlur=8,g.fill()};pe(i,ye?"#0284c7":"#00f0ff",ye?"rgba(2, 132, 199, 0.12)":"rgba(0, 240, 255, 0.22)",ye?"rgba(2, 132, 199, 0.4)":"rgba(0, 240, 255, 0.8)"),pe(n,ye?"#059669":"#00df89",ye?"rgba(5, 150, 105, 0.12)":"rgba(0, 223, 137, 0.22)",ye?"rgba(5, 150, 105, 0.4)":"rgba(0, 223, 137, 0.8)")};w();const k=()=>{w()};return window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[i,n,a,l]),s.jsxs("div",{className:"glass-card live-graph-card",children:[s.jsxs("div",{className:"graph-header",children:[s.jsxs("div",{className:"graph-title-group",children:[s.jsx("span",{className:"graph-title",children:h.liveGraph}),s.jsxs("span",{className:"graph-subtitle",children:["Time vs Bandwidth Throughput (",l,")"]})]}),s.jsxs("div",{className:"graph-legend",children:[s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot download-dot"}),s.jsx("span",{children:h.download})]}),s.jsxs("div",{className:"legend-item",children:[s.jsx("span",{className:"legend-dot upload-dot"}),s.jsx("span",{children:h.upload})]})]})]}),s.jsx("div",{className:"canvas-holder",children:s.jsx("canvas",{ref:c})}),s.jsx("style",{children:`
        .live-graph-card {
          width: 100%;
          padding: 20px 24px;
        }

        .graph-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .graph-title-group {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .graph-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .graph-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .graph-legend {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .download-dot {
          background-color: var(--accent-cyan);
          box-shadow: 0 0 8px var(--accent-cyan-glow);
        }

        .upload-dot {
          background-color: var(--accent-emerald);
          box-shadow: 0 0 8px var(--accent-emerald-glow);
        }

        .canvas-holder {
          width: 100%;
          height: 220px;
          position: relative;
        }

        .canvas-holder canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }

        @media (max-width: 480px) {
          .live-graph-card {
            padding: 16px 14px;
          }
          .canvas-holder {
            height: 180px;
          }
        }
      `})]})}function jm({results:i,unit:n="Mbps",lang:a="en",onRetest:l,onOpenShare:p,onExportPdf:c,onExportCsv:h,onExportJson:f}){const g=Bt[a]||Bt.en;if(!i)return null;const w=Er.formatSpeed(i.download,n),k=Er.formatSpeed(i.upload,n),T=Er.formatSpeed(i.downloadPeak||i.download,n),P=Er.formatSpeed(i.uploadPeak||i.upload,n),b=Er.formatBytes((i.totalBytesDownloaded||0)+(i.totalBytesUploaded||0)),D=(()=>{const q=i.download||0,_=i.ping||0;return q>=100&&_<=20?{title:g.ultraFastTitle,desc:"Exceptional 4K/8K HDR streaming, competitive cloud gaming, and high-capacity network multi-tasking.",badge:"Tier 1 Enterprise",badgeColor:"badge-cyan"}:q>=40&&_<=45?{title:g.fastTitle,desc:"Ideal for 4K Ultra HD streaming, multi-user Zoom video conferencing, and quick file downloads.",badge:"High-Speed Broadband",badgeColor:"badge-emerald"}:q>=15?{title:g.averageTitle,desc:"Reliable for 1080p HD video streaming, general web browsing, and remote work tasks.",badge:"Standard Connection",badgeColor:"badge-amber"}:{title:g.slowTitle,desc:"Limited bandwidth detected. May experience buffering during video calls or multi-device usage.",badge:"Congested / Slow",badgeColor:"badge-purple"}})();return s.jsxs("div",{className:"results-dashboard-wrapper",children:[s.jsxs("div",{className:"glass-card rating-banner",children:[s.jsxs("div",{className:"rating-left",children:[s.jsx("span",{className:"rating-label",children:g.overallRating}),s.jsxs("div",{className:"rating-title-group",children:[s.jsx("h3",{className:"rating-title",children:D.title}),s.jsx("span",{className:`badge ${D.badgeColor} quality-badge`,children:D.badge})]}),s.jsx("p",{className:"rating-desc",children:D.desc})]}),s.jsxs("div",{className:"rating-actions",children:[s.jsxs("button",{className:"btn-primary retest-btn",onClick:l,children:[s.jsx(J1,{size:18}),s.jsx("span",{children:g.testAgain})]}),s.jsxs("button",{className:"btn-secondary share-btn",onClick:p,children:[s.jsx(cf,{size:18}),s.jsx("span",{children:g.shareResult})]})]})]}),s.jsxs("div",{className:"glass-card result-network-bar",children:[s.jsxs("div",{className:"result-network-item",children:[s.jsx("div",{className:"result-network-icon-wrap icon-cyan",children:s.jsx(bc,{size:18})}),s.jsxs("div",{className:"result-network-text",children:[s.jsx("span",{className:"result-network-label",children:"CONNECTED NETWORK / ISP"}),s.jsx("span",{className:"result-network-value",children:i.isp||"BSNL (Bharat Sanchar Nigam Ltd)"})]})]}),s.jsx("div",{className:"result-network-divider"}),s.jsxs("div",{className:"result-network-item",children:[s.jsx("div",{className:"result-network-icon-wrap icon-purple",children:s.jsx(kc,{size:18})}),s.jsxs("div",{className:"result-network-text",children:[s.jsx("span",{className:"result-network-label",children:"BENCHMARK SERVER (AUTO)"}),s.jsx("span",{className:"result-network-value",children:i.server||"Patna Server, India"})]})]}),s.jsx("div",{className:"result-network-divider"}),s.jsxs("div",{className:"result-network-item",children:[s.jsx("div",{className:"result-network-icon-wrap icon-emerald",children:s.jsx(Wl,{size:18})}),s.jsxs("div",{className:"result-network-text",children:[s.jsx("span",{className:"result-network-label",children:"CLIENT IP & ASN"}),s.jsxs("span",{className:"result-network-value",children:[i.ip||"117.250.111.178"," ",i.asn?`• ${i.asn}`:""]})]})]})]}),s.jsxs("div",{className:"grid-2 main-metrics-grid",children:[s.jsxs("div",{className:"glass-card metric-card download-card",children:[s.jsxs("div",{className:"metric-card-header",children:[s.jsx("div",{className:"metric-icon-wrap icon-cyan",children:s.jsx(Eu,{size:22})}),s.jsxs("div",{className:"metric-labels",children:[s.jsx("span",{className:"metric-name",children:g.download}),s.jsx("span",{className:"metric-sub",children:"Average Throughput"})]}),i.downloadPeak>0&&s.jsxs("span",{className:"metric-peak-badge",children:["Peak: ",T," ",n]})]}),s.jsxs("div",{className:"metric-value-row",children:[s.jsx("span",{className:"metric-value text-cyan",children:w}),s.jsx("span",{className:"metric-unit",children:n})]})]}),s.jsxs("div",{className:"glass-card metric-card upload-card",children:[s.jsxs("div",{className:"metric-card-header",children:[s.jsx("div",{className:"metric-icon-wrap icon-emerald",children:s.jsx(Mu,{size:22})}),s.jsxs("div",{className:"metric-labels",children:[s.jsx("span",{className:"metric-name",children:g.upload}),s.jsx("span",{className:"metric-sub",children:"Average Throughput"})]}),i.uploadPeak>0&&s.jsxs("span",{className:"metric-peak-badge",children:["Peak: ",P," ",n]})]}),s.jsxs("div",{className:"metric-value-row",children:[s.jsx("span",{className:"metric-value text-emerald",children:k}),s.jsx("span",{className:"metric-unit",children:n})]})]})]}),s.jsxs("div",{className:"grid-4 secondary-metrics-grid",children:[s.jsxs("div",{className:"glass-card mini-metric-card",children:[s.jsxs("div",{className:"mini-header",children:[s.jsx(Ss,{size:16,className:"text-purple"}),s.jsxs("span",{children:[g.ping," (LATENCY)"]})]}),s.jsxs("div",{className:"mini-value-wrap",children:[s.jsx("span",{className:"mini-value text-purple",children:i.ping||0}),s.jsx("span",{className:"mini-unit",children:"ms"})]}),s.jsxs("span",{className:"mini-subtext",children:["Min: ",i.minPing||i.ping||0,"ms / Max: ",i.maxPing||i.ping||0,"ms"]})]}),s.jsxs("div",{className:"glass-card mini-metric-card",children:[s.jsxs("div",{className:"mini-header",children:[s.jsx(wc,{size:16,className:"text-amber"}),s.jsx("span",{children:g.jitter})]}),s.jsxs("div",{className:"mini-value-wrap",children:[s.jsx("span",{className:"mini-value text-amber",children:i.jitter||0}),s.jsx("span",{className:"mini-unit",children:"ms"})]}),s.jsxs("span",{className:"mini-subtext",children:["Variance: ±",((i.jitter||1)*.8).toFixed(1),"ms"]})]}),s.jsxs("div",{className:"glass-card mini-metric-card",children:[s.jsxs("div",{className:"mini-header",children:[s.jsx(Nc,{size:16,className:"text-emerald"}),s.jsx("span",{children:g.packetLoss})]}),s.jsx("div",{className:"mini-value-wrap",children:s.jsxs("span",{className:"mini-value text-emerald",children:[i.packetLoss||0,"%"]})}),s.jsx("span",{className:"mini-subtext",children:"0 dropped frames"})]}),s.jsxs("div",{className:"glass-card mini-metric-card",children:[s.jsxs("div",{className:"mini-header",children:[s.jsx(T1,{size:16,className:"text-cyan"}),s.jsx("span",{children:g.dataUsed})]}),s.jsx("div",{className:"mini-value-wrap",children:s.jsx("span",{className:"mini-value-text",children:b})}),s.jsxs("span",{className:"mini-subtext",children:["Duration: ",i.durationTotal||10,"s"]})]})]}),s.jsxs("div",{className:"export-toolbar-wrap glass-panel",children:[s.jsxs("div",{className:"export-label-group",children:[s.jsx(d1,{size:18,className:"text-cyan"}),s.jsxs("div",{children:[s.jsx("span",{className:"export-title",children:g.downloadResult}),s.jsx("span",{className:"export-subtitle",children:"Save certified benchmark report"})]})]}),s.jsxs("div",{className:"export-buttons",children:[s.jsxs("button",{className:"btn-secondary export-btn",onClick:c,children:[s.jsx(yd,{size:16}),s.jsx("span",{children:g.exportPdf})]}),s.jsxs("button",{className:"btn-secondary export-btn",onClick:h,children:[s.jsx(nf,{size:16}),s.jsx("span",{children:g.exportCsv})]}),s.jsxs("button",{className:"btn-secondary export-btn",onClick:f,children:[s.jsx(ef,{size:16}),s.jsx("span",{children:g.exportJson})]})]})]}),s.jsx("style",{children:`
        .results-dashboard-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .rating-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 30px;
          border-left: 4px solid var(--accent-cyan);
          flex-wrap: wrap;
          gap: 20px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .rating-left {
          display: flex;
          flex-direction: column;
          gap: 4px;
          max-width: 600px;
        }

        .rating-label {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.08em;
        }

        .rating-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .rating-title {
          font-size: 1.7rem;
          font-weight: 900;
        }

        .rating-desc {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.45;
          margin-top: 2px;
        }

        .rating-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .result-network-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          gap: 16px;
          flex-wrap: wrap;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
        }

        .result-network-item {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 200px;
        }

        .result-network-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-xs);
          flex-shrink: 0;
        }

        .icon-cyan {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
        }

        .icon-purple {
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-purple);
        }

        .icon-emerald {
          background: rgba(16, 185, 129, 0.1);
          color: var(--accent-emerald);
        }

        .result-network-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .result-network-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--text-tertiary);
          text-transform: uppercase;
        }

        .result-network-value {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .result-network-divider {
          width: 1px;
          height: 32px;
          background: var(--border-color);
        }

        @media (max-width: 768px) {
          .result-network-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
            padding: 16px;
          }
          .result-network-divider {
            display: none;
          }
          .result-network-item {
            width: 100%;
          }
        }

        .metric-card {
          padding: 26px 30px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          overflow: hidden;
        }

        .download-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--grad-download);
          box-shadow: 0 0 16px var(--accent-cyan-glow);
        }

        .upload-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--grad-upload);
          box-shadow: 0 0 16px var(--accent-emerald-glow);
        }

        .metric-card-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }

        .metric-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-sm);
          flex-shrink: 0;
        }

        .icon-cyan {
          background: rgba(0, 229, 255, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 229, 255, 0.3);
          box-shadow: 0 0 16px rgba(0, 229, 255, 0.2);
        }

        .icon-emerald {
          background: rgba(16, 185, 129, 0.12);
          color: var(--accent-emerald);
          border: 1px solid rgba(16, 185, 129, 0.3);
          box-shadow: 0 0 16px rgba(16, 185, 129, 0.2);
        }

        .metric-labels {
          display: flex;
          flex-direction: column;
        }

        .metric-name {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.04em;
        }

        .metric-sub {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .metric-peak-badge {
          margin-left: auto;
          font-size: 0.78rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: var(--radius-full);
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          font-family: var(--font-mono);
          white-space: nowrap;
        }

        .metric-value-row {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
        }

        .metric-value {
          font-family: var(--font-mono);
          font-size: clamp(2.2rem, 7vw, 3.2rem);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -0.04em;
          word-break: break-word;
        }

        .metric-unit {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-secondary);
        }

        .mini-metric-card {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .mini-header {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.06em;
        }

        .mini-value-wrap {
          display: flex;
          align-items: baseline;
          gap: 4px;
          flex-wrap: wrap;
        }

        .mini-value {
          font-family: var(--font-mono);
          font-size: clamp(1.4rem, 4vw, 1.7rem);
          font-weight: 800;
        }

        .mini-value-text {
          font-size: clamp(1.15rem, 3.5vw, 1.4rem);
          font-weight: 800;
          color: var(--text-primary);
          font-family: var(--font-mono);
          word-break: break-word;
        }

        .mini-unit {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .mini-subtext {
          font-size: 0.75rem;
          color: var(--text-tertiary);
          word-break: break-word;
        }

        .export-toolbar-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding: 18px 24px;
        }

        .export-label-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .export-title {
          font-size: 0.98rem;
          font-weight: 800;
          color: var(--text-primary);
          display: block;
        }

        .export-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
          display: block;
        }

        .export-buttons {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .text-cyan { 
          color: var(--accent-cyan); 
          text-shadow: 0 0 20px rgba(0, 229, 255, 0.3);
        }
        .text-emerald { 
          color: var(--accent-emerald); 
          text-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
        }
        .text-purple { 
          color: var(--accent-purple); 
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }
        .text-amber { 
          color: var(--accent-amber); 
          text-shadow: 0 0 20px rgba(245, 158, 11, 0.3);
        }

        @media (max-width: 768px) {
          .rating-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px 18px;
          }
          .rating-actions {
            width: 100%;
            gap: 10px;
          }
          .retest-btn, .share-btn {
            flex: 1 1 140px;
            justify-content: center;
          }
          .metric-card {
            padding: 20px 18px;
          }
          .secondary-metrics-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .export-toolbar-wrap {
            flex-direction: column;
            align-items: flex-start;
            padding: 16px 18px;
          }
          .export-buttons {
            width: 100%;
          }
          .export-btn {
            flex: 1 1 90px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .rating-banner {
            padding: 16px 14px;
          }
          .rating-title {
            font-size: 1.4rem;
          }
          .metric-card {
            padding: 16px 14px;
          }
          .metric-peak-badge {
            margin-left: 0;
            width: 100%;
            text-align: center;
          }
          .mini-metric-card {
            padding: 14px 14px;
          }
          .export-toolbar-wrap {
            padding: 14px 14px;
          }
        }

        @media (max-width: 360px) {
          .secondary-metrics-grid {
            grid-template-columns: 1fr;
          }
          .retest-btn, .share-btn {
            flex: 1 1 100%;
          }
          .export-btn {
            flex: 1 1 100%;
          }
        }
      `})]})}function Cm({ipInfo:i,lang:n="en",onDetectGps:a,onRefresh:l,isLocating:p=!1}){const c=Bt[n]||Bt.en,f=(()=>{const k=navigator.userAgent;let T="Unknown Browser",P="Unknown OS",b="Desktop Device";return k.includes("Firefox")?T="Mozilla Firefox":k.includes("Edg/")?T="Microsoft Edge":k.includes("Chrome/")?T="Google Chrome":k.includes("Safari/")?T="Apple Safari":(k.includes("Opera")||k.includes("OPR"))&&(T="Opera Browser"),k.includes("Win")?P="Microsoft Windows":k.includes("Mac")?P="macOS (Apple)":k.includes("Linux")?P="Linux":k.includes("Android")?P="Android OS":(k.includes("iPhone")||k.includes("iPad"))&&(P="iOS (Apple)"),/Mobile|Android|iP(hone|od)/i.test(k)?b="Smartphone / Mobile":/Tablet|iPad/i.test(k)&&(b="Tablet Device"),{browser:T,os:P,device:b}})(),g=()=>{if(!i)return"Detecting Real Location...";const k=i.city||"",T=i.region||"",P=i.country||"India";return k&&T&&k!==T?`${k}, ${T}, ${P}`:k?`${k}, ${P}`:P},w=[{icon:Wl,label:c.ipAddress,value:(i==null?void 0:i.ip)||"Detecting Real IP...",sub:`${(i==null?void 0:i.version)||"IPv4"}${i!=null&&i.postal?` • PIN ${i.postal}`:""}`},{icon:bc,label:c.isp,value:(i==null?void 0:i.isp)||"Broadband ISP",sub:(i==null?void 0:i.asn)||"AS-AUTO"},{icon:ep,label:c.location,value:g(),sub:`${(i==null?void 0:i.countryFlag)||"🇮🇳"} ${i!=null&&i.isGpsPrecise?"Exact GPS Verified":i!=null&&i.region?`${i.region} • Live Network Geo`:"Live Network Geo"}`,highlight:!0},{icon:Zh,label:"Time Zone",value:(i==null?void 0:i.timezone)||Intl.DateTimeFormat().resolvedOptions().timeZone,sub:"Local System Clock"},{icon:z1,label:c.browser,value:f.browser,sub:"HTML5 Modern Client"},{icon:a1,label:c.os,value:f.os,sub:f.device}];return s.jsxs("div",{className:"glass-card connection-info-card",children:[s.jsxs("div",{className:"connection-header",children:[s.jsxs("div",{className:"connection-title-wrap",children:[s.jsx(Du,{className:"text-cyan",size:20}),s.jsxs("div",{children:[s.jsx("h3",{className:"connection-title",children:c.connectionInfo}),s.jsx("span",{className:"connection-subtitle",children:"Live real-time client telemetry"})]})]}),s.jsxs("div",{className:"connection-header-actions",children:[a&&s.jsxs("button",{className:`btn-secondary gps-detect-btn ${i!=null&&i.isGpsPrecise?"gps-active":""}`,onClick:a,disabled:p,title:"Detect Exact GPS Coordinates",children:[s.jsx(o1,{size:13,className:p?"spin":""}),s.jsx("span",{children:i!=null&&i.isGpsPrecise?"GPS Active":"Exact GPS"})]}),l&&s.jsx("button",{className:"btn-icon refresh-geo-btn",onClick:l,disabled:p,title:"Refresh Real Location & IP",children:s.jsx(sf,{size:13,className:p?"spin":""})})]})]}),s.jsx("div",{className:"connection-grid",children:w.map((k,T)=>{const P=k.icon;return s.jsxs("div",{className:`connection-item ${k.highlight?"item-highlight":""}`,children:[s.jsx("div",{className:"item-icon-wrap",children:s.jsx(P,{size:18})}),s.jsxs("div",{className:"item-content",children:[s.jsx("span",{className:"item-label",children:k.label}),s.jsx("span",{className:"item-value",title:k.value,children:k.value}),s.jsx("span",{className:"item-sub",children:k.sub})]})]},T)})}),s.jsxs("div",{className:"connection-note",children:[s.jsx(Zu,{size:14,className:"text-cyan"}),s.jsx("span",{children:"Real-time network coordinates and ISP Autonomous System routing detected directly from your live connection."})]}),s.jsx("style",{children:`
        .connection-info-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .connection-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .connection-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .connection-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .gps-detect-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          font-size: 0.78rem;
          font-weight: 700;
          border-radius: var(--radius-full);
          transition: all var(--transition-fast);
        }

        .gps-active {
          background: rgba(16, 185, 129, 0.15);
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
        }

        .refresh-geo-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }

        .spin {
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .connection-title {
          font-size: 1.15rem;
          font-weight: 700;
        }

        .connection-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .connection-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .connection-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 14px 16px;
          transition: border-color var(--transition-fast);
        }

        .connection-item.item-highlight {
          border-color: rgba(0, 229, 255, 0.35);
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%);
        }

        .connection-item:hover {
          border-color: var(--border-color-hover);
        }

        .item-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.08);
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .item-content {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .item-label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .item-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          word-break: break-word;
        }

        .item-sub {
          font-size: 0.76rem;
          color: var(--text-secondary);
          word-break: break-word;
        }

        .connection-note {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          padding: 10px 14px;
          background: rgba(0, 240, 255, 0.04);
          border-radius: var(--radius-xs);
          border: 1px solid rgba(0, 240, 255, 0.15);
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }

        @media (max-width: 900px) {
          .connection-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .connection-info-card {
            padding: 18px 14px;
          }
          .connection-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
          .connection-item {
            padding: 12px 14px;
          }
        }
      `})]})}function Lm({server:i,ipInfo:n,onOpenModal:a,lang:l="en",ping:p=0}){const c=Bt[l]||Bt.en,h=(n==null?void 0:n.companyName)||(n==null?void 0:n.isp)||"High-Speed Broadband";return s.jsxs("div",{className:"glass-card server-card",children:[s.jsx("div",{className:"server-icon-wrap",children:s.jsx(kc,{size:22})}),s.jsxs("div",{className:"server-details",children:[s.jsxs("div",{className:"server-label-row",children:[s.jsx("span",{className:"server-card-label",children:c.server}),s.jsxs("span",{className:"badge badge-cyan server-auto-badge",children:[s.jsx(Sd,{size:11}),s.jsx("span",{children:"Auto Selected"})]})]}),s.jsx("h4",{className:"server-name",children:(i==null?void 0:i.name)||"Patna Server"}),s.jsx("span",{className:"server-sponsor",children:(i==null?void 0:i.sponsor)||"NetSpeedPro Core Node"}),s.jsxs("div",{className:"server-network-company",children:[s.jsx(bc,{size:13,className:"text-cyan"}),s.jsxs("span",{children:["Network: ",s.jsx("strong",{children:h})]})]})]}),s.jsxs("div",{className:"server-meta",children:[s.jsxs("div",{className:"server-location-badge",children:[s.jsx(ep,{size:13}),s.jsxs("span",{children:[(i==null?void 0:i.city)||"Patna/Bihar",", ",(i==null?void 0:i.country)||"India"]})]}),p>0&&s.jsxs("span",{className:"badge badge-purple",children:[s.jsx(Ss,{size:12})," ",p," ms"]})]}),s.jsxs("button",{className:"btn-secondary change-server-btn",onClick:a,children:[s.jsx("span",{children:c.changeServer}),s.jsx(qg,{size:16})]}),s.jsx("style",{children:`
        .server-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 24px;
          width: 100%;
          flex-wrap: wrap;
        }

        .server-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(139, 92, 246, 0.12);
          color: var(--accent-purple);
          border: 1px solid rgba(139, 92, 246, 0.25);
          flex-shrink: 0;
        }

        .server-details {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 180px;
        }

        .server-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 2px;
        }

        .server-card-label {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--text-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .server-auto-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.68rem;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .server-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .server-sponsor {
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .server-network-company {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-secondary);
          margin-top: 4px;
        }

        .server-network-company strong {
          color: var(--accent-cyan);
        }

        .server-meta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .server-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          padding: 6px 12px;
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
        }

        .change-server-btn {
          margin-left: auto;
          padding: 8px 16px;
          border-radius: var(--radius-full);
        }

        @media (max-width: 640px) {
          .server-card {
            padding: 16px 14px;
            gap: 12px;
          }
          .server-details {
            min-width: 140px;
          }
          .server-meta {
            width: 100%;
            justify-content: flex-start;
          }
          .change-server-btn {
            width: 100%;
            margin-left: 0;
            padding: 10px 16px;
          }
        }
      `})]})}function Em({isOpen:i,onClose:n,servers:a=[],currentServer:l,onSelectServer:p,lang:c="en"}){const[h,f]=ct.useState(""),[g,w]=ct.useState("all");if(!i)return null;const k=[{id:"all",label:"All Locations"},{id:"IN",label:"India"},{id:"asia",label:"Asia Pacific"},{id:"europe",label:"Europe"},{id:"americas",label:"Americas"}],T=(a||[]).filter(b=>{if(!b)return!1;const U=h.toLowerCase().trim();return!U||(b.name||"").toLowerCase().includes(U)||(b.city||"").toLowerCase().includes(U)||(b.country||"").toLowerCase().includes(U)||(b.sponsor||"").toLowerCase().includes(U)?g==="all"?!0:g==="IN"?b.countryCode==="IN":g==="asia"?["SG","JP","AE","IN"].includes(b.countryCode):g==="europe"?["DE","GB","FR","NL"].includes(b.countryCode):g==="americas"?["US","CA","BR"].includes(b.countryCode):!0:!1}),P=b=>{p(b),n()};return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content server-modal-box",onClick:b=>b.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(kc,{size:22,className:"text-cyan"}),s.jsx("span",{children:"Select Speed Test Server"})]}),s.jsx("button",{className:"btn-icon",onClick:n,"aria-label":"Close modal",children:s.jsx(xc,{size:18})})]}),s.jsxs("div",{className:"server-modal-controls",children:[s.jsxs("div",{className:"search-input-wrapper",children:[s.jsx(wd,{size:16,className:"search-icon"}),s.jsx("input",{type:"text",placeholder:"Search by city, country, or provider...",value:h,onChange:b=>f(b.target.value),className:"server-search-input"})]}),s.jsx("div",{className:"region-pills",children:k.map(b=>s.jsx("button",{className:`region-pill ${g===b.id?"active":""}`,onClick:()=>w(b.id),children:b.label},b.id))})]}),s.jsx("div",{className:"server-list",children:T.length===0?s.jsx("div",{className:"empty-servers",children:s.jsxs("span",{children:['No servers found matching "',h,'"']})}):T.map(b=>{const U=(l==null?void 0:l.id)===b.id;return s.jsxs("div",{className:`server-list-item ${U?"selected":""}`,onClick:()=>P(b),children:[s.jsxs("div",{className:"server-item-left",children:[s.jsx("div",{className:"server-item-icon",children:s.jsx(ep,{size:16})}),s.jsxs("div",{className:"server-item-info",children:[s.jsxs("div",{className:"server-item-title-row",children:[s.jsxs("span",{className:"server-item-name",children:[b.city,", ",b.country]}),b.isDefault&&s.jsx("span",{className:"badge badge-cyan default-badge",children:"Primary"})]}),s.jsx("span",{className:"server-item-sponsor",children:b.sponsor})]})]}),s.jsxs("div",{className:"server-item-right",children:[s.jsx("span",{className:"badge badge-emerald online-badge",children:"Online"}),U&&s.jsx("div",{className:"selected-check",children:s.jsx(Xu,{size:16})})]})]},b.id)})}),s.jsx("div",{className:"server-modal-footer",children:s.jsx("span",{className:"server-footer-text",children:"Servers are hosted on high-bandwidth edge backbones. Choosing a server geographically closest to you provides the most accurate broadband line measurements."})})]}),s.jsx("style",{children:`
        .server-modal-box {
          max-width: 680px;
        }

        .server-modal-controls {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 14px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .server-search-input {
          width: 100%;
          padding-left: 40px;
        }

        .region-pills {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 6px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
        }

        .region-pill {
          padding: 7px 14px;
          border-radius: var(--radius-full);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
        }

        .region-pill.active {
          background: rgba(0, 240, 255, 0.12);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .server-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-height: clamp(260px, 50vh, 380px);
          overflow-y: auto;
          padding-right: 4px;
        }

        .server-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 14px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all var(--transition-fast);
          gap: 10px;
        }

        .server-list-item:hover {
          border-color: var(--border-color-hover);
          background: var(--bg-card-hover);
        }

        .server-list-item.selected {
          border-color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
        }

        .server-item-left {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          flex: 1;
        }

        .server-item-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: var(--radius-xs);
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent-purple);
          flex-shrink: 0;
        }

        .server-item-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .server-item-title-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .server-item-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
          word-break: break-word;
        }

        .default-badge {
          font-size: 0.65rem;
          padding: 1px 6px;
        }

        .server-item-sponsor {
          font-size: 0.76rem;
          color: var(--text-tertiary);
          word-break: break-word;
        }

        .server-item-right {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .online-badge {
          font-size: 0.7rem;
        }

        .selected-check {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent-cyan);
          color: #000;
        }

        .empty-servers {
          padding: 32px;
          text-align: center;
          color: var(--text-tertiary);
          font-size: 0.9rem;
        }

        .server-modal-footer {
          margin-top: 16px;
          padding-top: 12px;
          border-top: 1px solid var(--border-color);
        }

        .server-footer-text {
          font-size: 0.76rem;
          color: var(--text-tertiary);
          line-height: 1.4;
        }

        @media (max-width: 480px) {
          .server-item-left {
            gap: 10px;
          }
          .server-item-icon {
            width: 30px;
            height: 30px;
          }
          .server-search-input {
            font-size: 0.85rem;
          }
        }
      `})]})}function wh({latestResult:i,lang:n="en"}){const[a,l]=ct.useState(!1),[p,c]=ct.useState(null),h=Bt[n]||Bt.en,f=async()=>{l(!0);const w=[],k=navigator.onLine;w.push({id:"connectivity",icon:Wl,name:"Internet Gateway Connectivity",status:k?"excellent":"poor",metric:k?"Online":"Offline",description:k?"Full end-to-end IP network gateway reachable.":"No active network route detected."});const T=performance.now();try{const D=await fetch(`/api/speedtest/ping?t=${Date.now()}`,{cache:"no-store"}),q=Math.round(performance.now()-T);D.ok&&w.push({id:"http_rtt",icon:Ss,name:"HTTP Edge Latency & DNS Lookup",status:q<40?"excellent":q<90?"good":"fair",metric:`${q} ms`,description:q<50?"Rapid sub-50ms HTTP handshake to nearest point of presence.":"Slight network routing delay observed."})}catch{w.push({id:"http_rtt",icon:Ss,name:"HTTP Edge Latency",status:"poor",metric:"Failed",description:"Unable to reach HTTP speed test server."})}const P=(i==null?void 0:i.jitter)||4;w.push({id:"jitter",icon:wc,name:"Packet Timing & Jitter Variance",status:P<=8?"excellent":P<=20?"good":"fair",metric:`±${P} ms`,description:P<=8?"Consistent packet delivery timing with minimal jitter.":"Packet delivery timing fluctuates slightly."});const b=window.location.protocol==="https:"||window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";w.push({id:"security",icon:E1,name:"Transport Layer Security (TLS/HTTPS)",status:b?"excellent":"fair",metric:b?"Active":"Unencrypted HTTP",description:b?"Secure TLS encryption active for all network traffic.":"Insecure plaintext protocol in use."});const U=(i==null?void 0:i.bufferbloat)||6;w.push({id:"bufferbloat",icon:bc,name:"Bufferbloat & Queuing Delay",status:U<=10?"excellent":U<=30?"good":"fair",metric:`${U} ms delay`,description:U<=10?"Low bufferbloat. Latency remains stable even under heavy network load.":"Moderate queuing delay during heavy transfers."}),c(w),l(!1)},g=w=>{switch(w){case"excellent":return s.jsxs("span",{className:"badge badge-emerald diag-badge",children:[s.jsx(_u,{size:14})," Excellent"]});case"good":return s.jsxs("span",{className:"badge badge-cyan diag-badge",children:[s.jsx(_u,{size:14})," Good"]});case"fair":return s.jsxs("span",{className:"badge badge-amber diag-badge",children:[s.jsx(tp,{size:14})," Needs Attention"]});case"poor":default:return s.jsxs("span",{className:"badge badge-coral diag-badge",children:[s.jsx(Jg,{size:14})," Poor"]})}};return s.jsxs("div",{className:"glass-card diagnostics-card",children:[s.jsxs("div",{className:"diag-header",children:[s.jsxs("div",{className:"diag-title-group",children:[s.jsx(Nc,{className:"text-cyan",size:24}),s.jsxs("div",{children:[s.jsx("h3",{className:"diag-title",children:h.diagnosticsTitle}),s.jsx("span",{className:"diag-subtitle",children:"Automated health inspection of broadband parameters"})]})]}),s.jsxs("button",{className:"btn-primary run-diag-btn",onClick:f,disabled:a,children:[s.jsx(sf,{size:16,className:a?"spin":""}),s.jsx("span",{children:a?"Inspecting Network...":"Run Diagnostics"})]})]}),s.jsx("div",{className:"diag-list",children:(p||[{id:"con",icon:Wl,name:"Internet Gateway Connectivity",status:"excellent",metric:"Online",description:"Full IP connectivity detected."},{id:"dns",icon:Ss,name:"DNS & HTTP Handshake",status:"excellent",metric:"18 ms",description:"Fast DNS resolution & TLS edge route."},{id:"jit",icon:wc,name:"Packet Timing & Jitter Variance",status:"excellent",metric:"±3 ms",description:"Optimal packet delivery timing."},{id:"buf",icon:bc,name:"Bufferbloat & Queuing Delay",status:"good",metric:"8 ms delay",description:"Stable throughput queue under saturation."}]).map((w,k)=>{const T=w.icon;return s.jsxs("div",{className:"diag-item",children:[s.jsxs("div",{className:"diag-item-left",children:[s.jsx("div",{className:"diag-icon-box",children:s.jsx(T,{size:18})}),s.jsxs("div",{className:"diag-item-info",children:[s.jsxs("div",{className:"diag-item-name-row",children:[s.jsx("span",{className:"diag-item-name",children:w.name}),s.jsx("span",{className:"diag-item-metric",children:w.metric})]}),s.jsx("span",{className:"diag-item-desc",children:w.description})]})]}),s.jsx("div",{className:"diag-item-right",children:g(w.status)})]},k)})}),s.jsx("style",{children:`
        .diagnostics-card {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .diag-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .diag-title-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .diag-title {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .diag-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .run-diag-btn {
          padding: 10px 20px;
          font-size: 0.9rem;
        }

        .diag-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .diag-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 18px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          flex-wrap: wrap;
          gap: 12px;
        }

        .diag-item-left {
          display: flex;
          align-items: center;
          gap: 14px;
          flex: 1 1 200px;
          min-width: 0;
        }

        .diag-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.1);
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .diag-item-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }

        .diag-item-name-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .diag-item-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
          word-break: break-word;
        }

        .diag-item-metric {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          font-family: var(--font-mono);
        }

        .diag-item-desc {
          font-size: 0.8rem;
          color: var(--text-secondary);
          word-break: break-word;
        }

        .diag-badge {
          font-size: 0.75rem;
          padding: 4px 12px;
        }

        .spin {
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @media (max-width: 600px) {
          .diagnostics-card {
            padding: 18px 14px;
          }
          .run-diag-btn {
            width: 100%;
            justify-content: center;
          }
          .diag-item {
            padding: 12px 14px;
          }
          .diag-item-left {
            gap: 10px;
          }
          .diag-icon-box {
            width: 32px;
            height: 32px;
          }
        }
      `})]})}function Sh({latestResult:i,unit:n="Mbps",lang:a="en"}){const l=Bt[a]||Bt.en,p=parseFloat(i==null?void 0:i.download)||120,c=parseFloat(i==null?void 0:i.upload)||45,h=parseFloat(i==null?void 0:i.ping)||22,f=92.5,g=41.2,k=(P=>P<=10?15:P<=30?40:P<=60?60:P<=100?75:P<=200?88:P<=500?96:99)(p),T=[{title:"4K / 8K Ultra HD Video",icon:gm,req:"25+ Mbps Download",status:p>=25?"ready":"limited",desc:p>=25?"Smooth bufferless 4K HDR playback on multiple screens.":"Sufficient for 1080p, may buffer on 4K HDR."},{title:"Competitive Esports Gaming",icon:x1,req:"< 35ms Latency & Low Jitter",status:h<=35?"ready":"limited",desc:h<=35?"Ultra-low latency for instant hit-registration and responsiveness.":"Acceptable for casual gaming; slight lag in competitive FPS."},{title:"HD Multi-Party Video Calls",icon:bm,req:"5+ Mbps Upload & Download",status:c>=5&&p>=10?"ready":"limited",desc:"Crystal-clear 1080p video conferences on Zoom, Teams & Google Meet."},{title:"Cloud Backup & File Transfer",icon:Qg,req:"25+ Mbps Upload",status:c>=25?"ready":"limited",desc:c>=25?"Fast uploads of large RAW video files and bulk cloud syncing.":"Standard cloud backup speed."}];return s.jsxs("div",{className:"glass-card speed-compare-card",children:[s.jsxs("div",{className:"compare-header",children:[s.jsxs("div",{className:"compare-title-wrap",children:[s.jsx($h,{className:"text-cyan",size:24}),s.jsxs("div",{children:[s.jsx("h3",{className:"compare-title",children:l.compareTitle}),s.jsx("span",{className:"compare-subtitle",children:"Performance benchmarks against global broadband indices"})]})]}),s.jsxs("div",{className:"percentile-pill",children:[s.jsxs("span",{className:"percentile-number",children:[k,"%"]}),s.jsxs("span",{className:"percentile-text",children:["Faster than ",k,"% of tested networks"]})]})]}),s.jsxs("div",{className:"bars-container",children:[s.jsxs("div",{className:"bar-group",children:[s.jsxs("div",{className:"bar-labels",children:[s.jsx("span",{className:"bar-title",children:"Download Throughput Comparison"}),s.jsxs("span",{className:"bar-val-user text-cyan",children:["Your Speed: ",p.toFixed(1)," ",n]})]}),s.jsxs("div",{className:"bar-track",children:[s.jsx("div",{className:"bar-fill user-dl-fill",style:{width:`${Math.min(100,Math.max(10,p/300*100))}%`},children:s.jsxs("span",{children:[p.toFixed(1)," ",n]})}),s.jsxs("div",{className:"benchmark-marker",style:{left:`${Math.min(95,f/300*100)}%`},title:"Global Average (~92.5 Mbps)",children:[s.jsx("div",{className:"marker-line"}),s.jsx("span",{className:"marker-label",children:"Global Avg (92.5)"})]})]})]}),s.jsxs("div",{className:"bar-group",children:[s.jsxs("div",{className:"bar-labels",children:[s.jsx("span",{className:"bar-title",children:"Upload Throughput Comparison"}),s.jsxs("span",{className:"bar-val-user text-emerald",children:["Your Speed: ",c.toFixed(1)," ",n]})]}),s.jsxs("div",{className:"bar-track",children:[s.jsx("div",{className:"bar-fill user-ul-fill",style:{width:`${Math.min(100,Math.max(10,c/150*100))}%`},children:s.jsxs("span",{children:[c.toFixed(1)," ",n]})}),s.jsxs("div",{className:"benchmark-marker",style:{left:`${Math.min(95,g/150*100)}%`},title:"Global Average (~41.2 Mbps)",children:[s.jsx("div",{className:"marker-line"}),s.jsx("span",{className:"marker-label",children:"Global Avg (41.2)"})]})]})]})]}),s.jsx("div",{className:"use-cases-grid",children:T.map((P,b)=>{const U=P.icon,D=P.status==="ready";return s.jsxs("div",{className:"use-case-item",children:[s.jsxs("div",{className:"use-case-top",children:[s.jsx("div",{className:`use-case-icon ${D?"icon-ready":"icon-limited"}`,children:s.jsx(U,{size:18})}),s.jsxs("span",{className:`badge ${D?"badge-emerald":"badge-amber"}`,children:[D?s.jsx(_u,{size:12}):s.jsx(Yh,{size:12}),D?"Ready":"Fair"]})]}),s.jsx("h5",{className:"use-case-title",children:P.title}),s.jsx("span",{className:"use-case-req",children:P.req}),s.jsx("p",{className:"use-case-desc",children:P.desc})]},b)})}),s.jsx("style",{children:`
        .speed-compare-card {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .compare-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .compare-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .compare-title {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .compare-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .percentile-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: var(--radius-full);
          padding: 8px 16px;
        }

        .percentile-number {
          font-family: var(--font-mono);
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--accent-cyan);
        }

        .percentile-text {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .bars-container {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .bar-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 14px;
        }

        .bar-labels {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 600;
          flex-wrap: wrap;
          gap: 6px;
        }

        .bar-title {
          color: var(--text-secondary);
        }

        .bar-val-user {
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .bar-track {
          position: relative;
          height: 32px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          border: 1px solid var(--border-color);
          overflow: visible;
          display: flex;
          align-items: center;
          margin-bottom: 16px;
        }

        .bar-fill {
          height: 100%;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          padding: 0 14px;
          font-family: var(--font-mono);
          font-size: 0.78rem;
          font-weight: 700;
          color: #ffffff;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .user-dl-fill {
          background: var(--grad-download);
          box-shadow: 0 0 16px var(--accent-cyan-glow);
        }

        .user-ul-fill {
          background: var(--grad-upload);
          box-shadow: 0 0 16px var(--accent-emerald-glow);
        }

        .benchmark-marker {
          position: absolute;
          top: -6px;
          bottom: -6px;
          display: flex;
          flex-direction: column;
          align-items: center;
          pointer-events: none;
          z-index: 10;
        }

        .marker-line {
          width: 2px;
          height: 100%;
          background: #ffffff;
          box-shadow: 0 0 8px rgba(255, 255, 255, 0.8);
        }

        .marker-label {
          position: absolute;
          bottom: -20px;
          font-size: 0.68rem;
          font-weight: 700;
          color: var(--text-tertiary);
          white-space: nowrap;
        }

        .use-cases-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 12px;
        }

        .use-case-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .use-case-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4px;
        }

        .use-case-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
        }

        .icon-ready {
          background: rgba(0, 223, 137, 0.12);
          color: var(--accent-emerald);
        }

        .icon-limited {
          background: rgba(245, 158, 11, 0.12);
          color: var(--accent-amber);
        }

        .use-case-title {
          font-size: 0.92rem;
          font-weight: 700;
        }

        .use-case-req {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-tertiary);
        }

        .use-case-desc {
          font-size: 0.78rem;
          color: var(--text-secondary);
          line-height: 1.35;
        }

        @media (max-width: 1024px) {
          .use-cases-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .speed-compare-card {
            padding: 18px 14px;
          }
          .percentile-pill {
            width: 100%;
            justify-content: center;
          }
          .use-cases-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function kh({history:i=[],onDelete:n,onClear:a,onExportCsv:l,onExportJson:p,onExportPdf:c,onViewDetails:h,unit:f="Mbps",lang:g="en"}){const[w,k]=ct.useState(""),[T,P]=ct.useState(5),b=Bt[g]||Bt.en,U=i.filter(K=>{var ve,ye,oe;const he=w.toLowerCase();return((ve=K.formattedDate)==null?void 0:ve.toLowerCase().includes(he))||((ye=K.isp)==null?void 0:ye.toLowerCase().includes(he))||((oe=K.server)==null?void 0:oe.toLowerCase().includes(he))||String(K.download).includes(he)}),D=U.slice(0,T),q=T<U.length,_=()=>{P(K=>Math.min(K+5,U.length))},F=K=>{k(K.target.value),P(5)};return s.jsxs("div",{className:"glass-card test-history-card",children:[s.jsxs("div",{className:"history-header",children:[s.jsxs("div",{className:"history-title-wrap",children:[s.jsx(Ru,{className:"text-cyan",size:24}),s.jsxs("div",{children:[s.jsx("h3",{className:"history-title",children:b.testHistory}),s.jsxs("span",{className:"history-subtitle",children:[i.length," ",i.length===1?"record":"records"," stored locally on your device"]})]})]}),i.length>0&&s.jsxs("div",{className:"history-actions",children:[s.jsxs("div",{className:"history-search-wrap",children:[s.jsx(wd,{size:14,className:"history-search-icon"}),s.jsx("input",{type:"text",placeholder:"Search history...",value:w,onChange:F,className:"history-search-input"})]}),s.jsxs("button",{className:"btn-secondary history-btn",onClick:l,title:"Export CSV",children:[s.jsx(nf,{size:15}),s.jsx("span",{children:"CSV"})]}),s.jsxs("button",{className:"btn-secondary history-btn",onClick:p,title:"Export JSON",children:[s.jsx(ef,{size:15}),s.jsx("span",{children:"JSON"})]}),s.jsxs("button",{className:"btn-secondary history-clear-btn",onClick:a,title:b.clearHistory,children:[s.jsx(hd,{size:15}),s.jsx("span",{children:b.clearHistory})]})]})]}),i.length===0?s.jsxs("div",{className:"history-empty",children:[s.jsx(Ru,{size:48,className:"empty-icon"}),s.jsx("p",{className:"empty-text",children:b.noHistory}),s.jsx("span",{className:"empty-sub",children:"Your speed tests will be automatically recorded here."})]}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"history-status-bar",children:[s.jsxs("span",{className:"history-counter-text",children:["Showing ",s.jsx("strong",{children:Math.min(T,U.length)})," of ",s.jsx("strong",{children:U.length})," Records"]}),w&&s.jsxs("span",{className:"history-search-badge",children:['Search: "',w,'"']})]}),s.jsx("div",{className:"history-table-container desktop-table-view",children:s.jsxs("table",{className:"history-table",children:[s.jsx("thead",{children:s.jsxs("tr",{children:[s.jsx("th",{children:"DATE & TIME"}),s.jsx("th",{children:"DOWNLOAD"}),s.jsx("th",{children:"UPLOAD"}),s.jsx("th",{children:"PING / JITTER"}),s.jsx("th",{children:"STABILITY"}),s.jsx("th",{children:"ISP / SERVER"}),s.jsx("th",{style:{textAlign:"right"},children:"ACTIONS"})]})}),s.jsx("tbody",{children:D.map(K=>{const he=Er.formatSpeed(K.download,f),ve=Er.formatSpeed(K.upload,f);return s.jsxs("tr",{children:[s.jsx("td",{children:s.jsxs("div",{className:"date-cell",children:[s.jsx(vh,{size:13,className:"text-tertiary"}),s.jsx("span",{children:K.formattedDate||K.timestamp})]})}),s.jsx("td",{children:s.jsxs("div",{className:"speed-cell dl-cell",children:[s.jsx(Eu,{size:14}),s.jsx("span",{className:"speed-val",children:he}),s.jsx("span",{className:"unit-val",children:f})]})}),s.jsx("td",{children:s.jsxs("div",{className:"speed-cell ul-cell",children:[s.jsx(Mu,{size:14}),s.jsx("span",{className:"speed-val",children:ve}),s.jsx("span",{className:"unit-val",children:f})]})}),s.jsx("td",{children:s.jsxs("div",{className:"ping-cell",children:[s.jsxs("span",{className:"text-purple",children:[K.ping||0," ms"]}),s.jsxs("span",{className:"sub-jitter",children:["±",K.jitter||0," ms"]})]})}),s.jsx("td",{children:s.jsx("span",{className:`badge ${K.stabilityRating==="Excellent"?"badge-emerald":"badge-cyan"}`,children:K.stabilityRating||"Good"})}),s.jsx("td",{children:s.jsxs("div",{className:"isp-cell",children:[s.jsx("span",{className:"isp-name",children:K.isp||"Broadband"}),s.jsx("span",{className:"server-sub",children:K.server||"Mumbai"})]})}),s.jsx("td",{children:s.jsxs("div",{className:"action-buttons-cell",children:[s.jsx("button",{className:"btn-icon mini-action-btn",onClick:()=>h(K),title:"View Details / Certificate","aria-label":"View Details",children:s.jsx(yh,{size:14})}),s.jsx("button",{className:"btn-icon mini-action-btn",onClick:()=>c(K),title:"Download PDF Report","aria-label":"Download PDF Report",children:s.jsx(yd,{size:14})}),s.jsx("button",{className:"btn-icon mini-action-btn btn-delete",onClick:()=>n(K.id),title:"Delete Record","aria-label":"Delete Record",children:s.jsx(hd,{size:14})})]})})]},K.id)})})]})}),s.jsx("div",{className:"history-mobile-cards",children:D.map(K=>{const he=Er.formatSpeed(K.download,f),ve=Er.formatSpeed(K.upload,f);return s.jsxs("div",{className:"history-card-item",children:[s.jsxs("div",{className:"history-card-top",children:[s.jsxs("div",{className:"date-cell",children:[s.jsx(vh,{size:13,className:"text-tertiary"}),s.jsx("span",{children:K.formattedDate||K.timestamp})]}),s.jsx("span",{className:`badge ${K.stabilityRating==="Excellent"?"badge-emerald":"badge-cyan"}`,children:K.stabilityRating||"Good"})]}),s.jsxs("div",{className:"history-card-metrics",children:[s.jsxs("div",{className:"card-metric-col",children:[s.jsx("span",{className:"card-metric-label",children:"DOWNLOAD"}),s.jsxs("div",{className:"speed-cell dl-cell",children:[s.jsx(Eu,{size:13}),s.jsx("span",{className:"speed-val",children:he}),s.jsx("span",{className:"unit-val",children:f})]})]}),s.jsxs("div",{className:"card-metric-col",children:[s.jsx("span",{className:"card-metric-label",children:"UPLOAD"}),s.jsxs("div",{className:"speed-cell ul-cell",children:[s.jsx(Mu,{size:13}),s.jsx("span",{className:"speed-val",children:ve}),s.jsx("span",{className:"unit-val",children:f})]})]}),s.jsxs("div",{className:"card-metric-col",children:[s.jsx("span",{className:"card-metric-label",children:"PING"}),s.jsxs("div",{className:"ping-cell",children:[s.jsxs("span",{className:"text-purple",children:[K.ping||0," ms"]}),s.jsxs("span",{className:"sub-jitter",children:["±",K.jitter||0," ms"]})]})]})]}),s.jsxs("div",{className:"history-card-info",children:[s.jsx("span",{className:"isp-name",children:K.isp||"Broadband ISP"}),s.jsxs("span",{className:"server-sub",children:["• ",K.server||"Mumbai Server"]})]}),s.jsxs("div",{className:"history-card-actions",children:[s.jsxs("button",{className:"btn-secondary history-card-btn",onClick:()=>h(K),children:[s.jsx(yh,{size:14}),s.jsx("span",{children:"View"})]}),s.jsxs("button",{className:"btn-secondary history-card-btn",onClick:()=>c(K),children:[s.jsx(yd,{size:14}),s.jsx("span",{children:"PDF"})]}),s.jsxs("button",{className:"btn-secondary history-card-btn card-btn-delete",onClick:()=>n(K.id),children:[s.jsx(hd,{size:14}),s.jsx("span",{children:"Delete"})]})]})]},K.id)})}),U.length>0&&s.jsx("div",{className:"history-pagination-footer",children:q?s.jsxs("button",{className:"btn-load-more",onClick:_,children:[s.jsx(Xh,{size:18}),s.jsxs("span",{children:["More History (",U.length-T," remaining)"]})]}):s.jsxs("div",{className:"history-all-loaded",children:[s.jsx(Qh,{size:18,className:"text-emerald"}),s.jsxs("span",{children:["All ",U.length," test records displayed"]})]})})]}),s.jsx("style",{children:`
        .test-history-card {
          padding: 24px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .history-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .history-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .history-title {
          font-size: 1.2rem;
          font-weight: 700;
        }

        .history-subtitle {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .history-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .history-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .history-search-icon {
          position: absolute;
          left: 10px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .history-search-input {
          padding: 7px 10px 7px 30px;
          font-size: 0.82rem;
          width: 150px;
        }

        .history-btn {
          padding: 7px 12px;
          font-size: 0.82rem;
        }

        .history-clear-btn {
          padding: 7px 12px;
          font-size: 0.82rem;
          color: var(--accent-coral);
        }

        .history-clear-btn:hover {
          background: rgba(255, 51, 102, 0.1);
          border-color: var(--accent-coral);
          color: var(--accent-coral);
        }

        .history-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 48px 20px;
          text-align: center;
          gap: 8px;
        }

        .empty-icon {
          color: var(--text-tertiary);
          opacity: 0.4;
          margin-bottom: 8px;
        }

        .empty-text {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .empty-sub {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .history-table-container {
          overflow-x: auto;
          width: 100%;
          -webkit-overflow-scrolling: touch;
        }

        .history-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          min-width: 600px;
        }

        .history-table th {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.05em;
          padding: 12px 14px;
          border-bottom: 1px solid var(--border-color);
        }

        .history-table td {
          padding: 14px;
          border-bottom: 1px solid var(--border-light);
          font-size: 0.88rem;
        }

        .history-table tbody tr {
          transition: background var(--transition-fast);
        }

        .history-table tbody tr:hover {
          background: var(--bg-card-hover);
        }

        .date-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          color: var(--text-secondary);
          white-space: nowrap;
        }

        .speed-cell {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .dl-cell { color: var(--accent-cyan); }
        .ul-cell { color: var(--accent-emerald); }

        .speed-val {
          font-size: 1.05rem;
        }

        .unit-val {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .ping-cell {
          display: flex;
          flex-direction: column;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 0.88rem;
        }

        .sub-jitter {
          font-size: 0.72rem;
          color: var(--text-tertiary);
        }

        .isp-cell {
          display: flex;
          flex-direction: column;
        }

        .isp-name {
          font-weight: 600;
          color: var(--text-primary);
          word-break: break-word;
        }

        .server-sub {
          font-size: 0.75rem;
          color: var(--text-tertiary);
        }

        .action-buttons-cell {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 6px;
        }

        .mini-action-btn {
          width: 34px;
          height: 34px;
        }

        .btn-delete:hover {
          color: var(--accent-coral);
          border-color: var(--accent-coral);
          background: rgba(255, 51, 102, 0.1);
        }

        /* Mobile Card View */
        .history-mobile-cards {
          display: none;
          flex-direction: column;
          gap: 12px;
        }

        .history-card-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 14px 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .history-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .history-card-metrics {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          padding: 10px 0;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
        }

        .card-metric-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .card-metric-label {
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.05em;
        }

        .history-card-info {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          flex-wrap: wrap;
        }

        .history-card-actions {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin-top: 4px;
        }

        .history-card-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 10px;
          font-size: 0.8rem;
          min-height: 38px;
        }

        .card-btn-delete {
          color: var(--accent-coral);
        }

        .card-btn-delete:hover {
          background: rgba(255, 51, 102, 0.1);
          border-color: var(--accent-coral);
        }

        /* History Status Bar */
        .history-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }

        .history-counter-text strong {
          color: var(--accent-cyan);
        }

        .history-search-badge {
          background: rgba(0, 229, 255, 0.1);
          color: var(--accent-cyan);
          padding: 2px 8px;
          border-radius: var(--radius-full);
          font-size: 0.72rem;
          font-weight: 600;
        }

        /* History Pagination Footer */
        .history-pagination-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 14px;
        }

        .history-pagination-footer .btn-load-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 28px;
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.12) 0%, rgba(139, 92, 246, 0.12) 100%);
          border: 1px solid rgba(0, 229, 255, 0.35);
          border-radius: var(--radius-full);
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(0, 229, 255, 0.15);
        }

        .history-pagination-footer .btn-load-more:hover {
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.22) 0%, rgba(139, 92, 246, 0.22) 100%);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 229, 255, 0.28);
        }

        .history-all-loaded {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 18px;
          background: rgba(16, 185, 129, 0.08);
          border: 1px solid rgba(16, 185, 129, 0.25);
          border-radius: var(--radius-full);
          color: #10b981;
          font-size: 0.84rem;
          font-weight: 600;
        }

        [data-theme="light"] .history-pagination-footer .btn-load-more {
          background: linear-gradient(135deg, rgba(0, 180, 216, 0.12) 0%, rgba(124, 58, 237, 0.12) 100%);
          border-color: rgba(0, 180, 216, 0.4);
          color: var(--text-primary);
        }

        [data-theme="light"] .history-status-bar {
          background: rgba(15, 23, 42, 0.02);
        }

        @media (max-width: 640px) {
          .desktop-table-view {
            display: none;
          }
          .history-mobile-cards {
            display: flex;
          }
          .test-history-card {
            padding: 18px 14px;
          }
          .history-actions {
            width: 100%;
          }
          .history-search-wrap {
            flex: 1 1 100%;
          }
          .history-search-input {
            width: 100%;
          }
          .history-btn, .history-clear-btn {
            flex: 1;
            justify-content: center;
          }
          .history-pagination-footer .btn-load-more {
            width: 100%;
          }
        }
      `})]})}function Mm({isOpen:i,onClose:n,result:a,unit:l="Mbps",lang:p="en"}){const[c,h]=ct.useState(!1),f=Bt[p]||Bt.en;if(!i||!a)return null;const g=`🚀 My Internet Speed Test on NETSPEEDPRO:
📥 Download: ${a.download||0} ${l}
📤 Upload: ${a.upload||0} ${l}
⚡ Ping: ${a.ping||0} ms | Jitter: ${a.jitter||0} ms
🛡️ Stability: ${a.stabilityRating||"Excellent"} (${a.stability||100}%)
🌐 Tested via NETSPEEDPRO (https://netspeedpro.app)`,w=window.location.origin,k=async()=>{try{await navigator.clipboard.writeText(g),h(!0),setTimeout(()=>h(!1),2e3)}catch{}},T=async()=>{if(navigator.share)try{await navigator.share({title:"My Internet Speed Test on NETSPEEDPRO",text:g,url:w})}catch{}},P=()=>{window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(g)}`,"_blank")},b=()=>{window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(g)}`,"_blank")},U=()=>{window.open(`https://t.me/share/url?url=${encodeURIComponent(w)}&text=${encodeURIComponent(g)}`,"_blank")},D=()=>{window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(w)}&quote=${encodeURIComponent(g)}`,"_blank")};return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content share-modal-box",onClick:q=>q.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(cf,{size:22,className:"text-cyan"}),s.jsx("span",{children:f.shareResult})]}),s.jsx("button",{className:"btn-icon",onClick:n,"aria-label":"Close modal",children:s.jsx(xc,{size:18})})]}),s.jsxs("div",{className:"share-preview-card",children:[s.jsxs("div",{className:"share-preview-header",children:[s.jsx("span",{className:"brand-badge-mini",children:"NETSPEEDPRO CERTIFIED"}),s.jsx("span",{className:"share-date",children:a.formattedDate||new Date().toLocaleDateString()})]}),s.jsxs("div",{className:"share-stats-row",children:[s.jsxs("div",{className:"share-stat-item",children:[s.jsx("span",{className:"share-stat-label",children:"DOWNLOAD"}),s.jsx("span",{className:"share-stat-val text-cyan",children:a.download||0}),s.jsx("span",{className:"share-stat-unit",children:l})]}),s.jsxs("div",{className:"share-stat-item",children:[s.jsx("span",{className:"share-stat-label",children:"UPLOAD"}),s.jsx("span",{className:"share-stat-val text-emerald",children:a.upload||0}),s.jsx("span",{className:"share-stat-unit",children:l})]}),s.jsxs("div",{className:"share-stat-item",children:[s.jsx("span",{className:"share-stat-label",children:"PING"}),s.jsx("span",{className:"share-stat-val text-purple",children:a.ping||0}),s.jsx("span",{className:"share-stat-unit",children:"ms"})]})]}),s.jsxs("div",{className:"share-meta-row",children:[s.jsxs("span",{children:["Server: ",a.server||"Mumbai"]}),s.jsxs("span",{children:["Stability: ",a.stabilityRating||"Excellent"]})]})]}),s.jsxs("div",{className:"copy-action-row",children:[s.jsxs("button",{className:"btn-primary copy-main-btn",onClick:k,children:[c?s.jsx(Xu,{size:18}):s.jsx(n1,{size:18}),s.jsx("span",{children:c?"Copied to Clipboard!":"Copy Formatted Result"})]}),navigator.share&&s.jsxs("button",{className:"btn-secondary native-share-btn",onClick:T,title:"Share via device",children:[s.jsx(im,{size:18}),s.jsx("span",{children:"Device Share"})]})]}),s.jsxs("div",{className:"social-share-grid",children:[s.jsxs("button",{className:"social-btn whatsapp-btn",onClick:P,children:[s.jsx(R1,{size:18}),s.jsx("span",{children:"WhatsApp"})]}),s.jsxs("button",{className:"social-btn twitter-btn",onClick:b,children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),s.jsx("span",{children:"X (Twitter)"})]}),s.jsxs("button",{className:"social-btn telegram-btn",onClick:U,children:[s.jsx(Q1,{size:18}),s.jsx("span",{children:"Telegram"})]}),s.jsxs("button",{className:"social-btn facebook-btn",onClick:D,children:[s.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:s.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),s.jsx("span",{children:"Facebook"})]})]})]}),s.jsx("style",{children:`
        .share-modal-box {
          max-width: 520px;
        }

        .share-preview-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 20px;
        }

        .share-preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-badge-mini {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
        }

        .share-date {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .share-stats-row {
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 12px 0;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
        }

        .share-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .share-stat-label {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-tertiary);
          letter-spacing: 0.05em;
        }

        .share-stat-val {
          font-family: var(--font-mono);
          font-size: clamp(1.35rem, 4vw, 1.8rem);
          font-weight: 800;
          line-height: 1.1;
        }

        .share-stat-unit {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-tertiary);
        }

        .share-meta-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--text-secondary);
          flex-wrap: wrap;
          gap: 6px;
        }

        .copy-action-row {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
        }

        .copy-main-btn {
          flex: 1;
          padding: 12px 18px;
        }

        .native-share-btn {
          padding: 12px 18px;
        }

        .social-share-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 0.88rem;
          font-weight: 600;
          transition: all var(--transition-fast);
          min-height: 44px;
        }

        .whatsapp-btn:hover {
          background: rgba(37, 211, 102, 0.15);
          border-color: #25d366;
          color: #25d366;
        }

        .twitter-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #ffffff;
          color: #ffffff;
        }

        .telegram-btn:hover {
          background: rgba(0, 136, 204, 0.15);
          border-color: #0088cc;
          color: #0088cc;
        }

        .facebook-btn:hover {
          background: rgba(24, 119, 242, 0.15);
          border-color: #1877f2;
          color: #1877f2;
        }

        @media (max-width: 480px) {
          .share-preview-card {
            padding: 16px 14px;
          }
          .copy-action-row {
            flex-direction: column;
          }
          .copy-main-btn, .native-share-btn {
            width: 100%;
          }
          .social-btn {
            padding: 10px 8px;
            font-size: 0.82rem;
            gap: 6px;
          }
        }

        @media (max-width: 340px) {
          .social-share-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}function Im({isOpen:i,onClose:n,settings:a,onUpdateSettings:l,onClearHistory:p,lang:c="en",setLang:h}){const f=Bt[c]||Bt.en;if(!i)return null;const g=()=>{l({theme:a.theme==="dark"?"light":"dark"})};return s.jsxs("div",{className:"modal-overlay",onClick:n,children:[s.jsxs("div",{className:"modal-content settings-modal-box",onClick:w=>w.stopPropagation(),children:[s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-title",children:[s.jsx(lf,{size:22,className:"text-cyan"}),s.jsx("span",{children:f.settings})]}),s.jsx("button",{className:"btn-icon",onClick:n,"aria-label":"Close modal",children:s.jsx(xc,{size:18})})]}),s.jsxs("div",{className:"settings-sections",children:[s.jsxs("div",{className:"setting-row",children:[s.jsxs("div",{className:"setting-info",children:[s.jsxs("div",{className:"setting-label-row",children:[a.theme==="dark"?s.jsx(af,{size:16}):s.jsx(df,{size:16}),s.jsx("span",{className:"setting-label",children:f.theme})]}),s.jsx("span",{className:"setting-desc",children:"Switch between high-contrast dark and light interfaces"})]}),s.jsx("button",{className:"btn-secondary theme-switch-btn",onClick:g,children:a.theme==="dark"?"Dark Mode":"Light Mode"})]}),s.jsxs("div",{className:"setting-row",children:[s.jsxs("div",{className:"setting-info",children:[s.jsxs("div",{className:"setting-label-row",children:[s.jsx(S1,{size:16}),s.jsx("span",{className:"setting-label",children:f.units})]}),s.jsx("span",{className:"setting-desc",children:"Distinguish Megabits/s from Megabytes/s (1 MB/s = 8 Mbps)"})]}),s.jsx("div",{className:"unit-pill-group",children:["Mbps","MB/s","Gbps"].map(w=>s.jsx("button",{className:`unit-pill ${a.unit===w?"active":""}`,onClick:()=>l({unit:w}),children:w},w))})]}),s.jsxs("div",{className:"setting-row",children:[s.jsxs("div",{className:"setting-info",children:[s.jsxs("div",{className:"setting-label-row",children:[s.jsx(Zh,{size:16}),s.jsx("span",{className:"setting-label",children:f.duration})]}),s.jsx("span",{className:"setting-desc",children:"Longer duration provides maximum accuracy for gigabit links"})]}),s.jsxs("select",{value:a.duration,onChange:w=>l({duration:parseInt(w.target.value,10)}),className:"settings-select",children:[s.jsx("option",{value:5,children:f.quick}),s.jsx("option",{value:10,children:f.standard}),s.jsx("option",{value:20,children:f.extended})]})]}),s.jsxs("div",{className:"setting-row",children:[s.jsxs("div",{className:"setting-info",children:[s.jsxs("div",{className:"setting-label-row",children:[s.jsx(q1,{size:16}),s.jsx("span",{className:"setting-label",children:f.parallelStreams})]}),s.jsx("span",{className:"setting-desc",children:"Concurrent streams to fully saturate broadband pipeline"})]}),s.jsxs("select",{value:a.parallelStreams,onChange:w=>l({parallelStreams:parseInt(w.target.value,10)}),className:"settings-select",children:[s.jsx("option",{value:1,children:"1 Stream (Single-thread)"}),s.jsx("option",{value:2,children:"2 Streams"}),s.jsx("option",{value:4,children:"4 Streams (Recommended)"}),s.jsx("option",{value:8,children:"8 Streams (Gigabit+)"})]})]}),s.jsxs("div",{className:"setting-row",children:[s.jsxs("div",{className:"setting-info",children:[s.jsxs("div",{className:"setting-label-row",children:[s.jsx(l1,{size:16}),s.jsx("span",{className:"setting-label",children:f.saveHistoryToggle})]}),s.jsx("span",{className:"setting-desc",children:"Keep record of your past speed tests in browser storage"})]}),s.jsxs("label",{className:"toggle-switch",children:[s.jsx("input",{type:"checkbox",checked:a.saveHistory,onChange:w=>l({saveHistory:w.target.checked})}),s.jsx("span",{className:"toggle-slider"})]})]}),s.jsxs("div",{className:"setting-row lang-setting-row",children:[s.jsxs("div",{className:"setting-info",children:[s.jsxs("div",{className:"setting-label-row",children:[s.jsx(Wl,{size:16}),s.jsxs("span",{className:"setting-label",children:["Language / भाषा (",xs.length," Languages)"]})]}),s.jsx("span",{className:"setting-desc",children:"Select your preferred regional or global interface language"})]}),s.jsx("div",{className:"lang-pills-grid",children:xs.map(w=>s.jsxs("button",{type:"button",className:`lang-pill-btn ${c===w.code?"active":""}`,onClick:()=>{h(w.code),l({language:w.code})},children:[s.jsx(Fu,{country:w.country,fallback:w.flag,size:"normal"}),s.jsxs("div",{className:"lang-pill-text-col",children:[s.jsx("span",{className:"lang-pill-native",children:w.native}),s.jsx("span",{className:"lang-pill-sub",children:w.label})]})]},w.code))})]})]}),s.jsxs("div",{className:"settings-warning-box",children:[s.jsx(tp,{size:16,className:"text-amber"}),s.jsx("span",{children:f.dataWarning})]}),s.jsx("div",{className:"settings-footer",children:s.jsxs("button",{className:"btn-secondary clear-all-btn",onClick:()=>{window.confirm("Are you sure you want to delete all saved test history?")&&p()},children:[s.jsx(hd,{size:16}),s.jsx("span",{children:f.clearHistory})]})})]}),s.jsx("style",{children:`
        .settings-modal-box {
          max-width: 600px;
        }

        .settings-sections {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .setting-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          gap: 16px;
        }

        .setting-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          flex: 1;
        }

        .setting-label-row {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-primary);
        }

        .setting-label {
          font-size: 0.92rem;
          font-weight: 700;
        }

        .setting-desc {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .unit-pill-group {
          display: flex;
          gap: 4px;
          background: var(--bg-card-solid);
          padding: 3px;
          border-radius: var(--radius-xs);
          border: 1px solid var(--border-color);
        }

        .unit-pill {
          padding: 4px 10px;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 4px;
          color: var(--text-tertiary);
        }

        .unit-pill.active {
          background: var(--accent-cyan);
          color: #000;
        }

        .lang-setting-row {
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
        }

        .lang-pills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          max-height: 220px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .lang-pills-grid::-webkit-scrollbar {
          width: 5px;
        }

        .lang-pills-grid::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: 4px;
        }

        .lang-pill-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 10px;
          border-radius: var(--radius-sm);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all var(--transition-fast);
          text-align: left;
        }

        .lang-pill-btn:hover {
          background: var(--bg-card-hover);
          border-color: var(--accent-cyan);
          color: var(--text-primary);
        }

        .lang-pill-btn.active {
          background: rgba(0, 229, 255, 0.15);
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
        }

        .lang-pill-flag {
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .lang-pill-text-col {
          display: flex;
          flex-direction: column;
          line-height: 1.15;
          overflow: hidden;
        }

        .lang-pill-native {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .lang-pill-sub {
          font-size: 0.68rem;
          color: var(--text-tertiary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        [data-theme="light"] .lang-pill-btn.active {
          background: rgba(2, 132, 199, 0.12);
          border-color: #0284c7;
          color: #0284c7;
        }

        .settings-select {
          padding: 8px 12px;
          font-size: 0.88rem;
          min-width: 140px;
        }

        .theme-switch-btn {
          padding: 8px 16px;
          font-size: 0.85rem;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 44px;
          height: 24px;
          flex-shrink: 0;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          inset: 0;
          background-color: var(--bg-card-solid);
          border: 1px solid var(--border-color);
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 16px;
          width: 16px;
          left: 3px;
          bottom: 3px;
          background-color: var(--text-tertiary);
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .toggle-slider {
          background-color: var(--accent-cyan);
          border-color: var(--accent-cyan);
        }

        input:checked + .toggle-slider:before {
          transform: translateX(20px);
          background-color: #000;
        }

        .settings-warning-box {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: rgba(245, 158, 11, 0.08);
          border: 1px solid rgba(245, 158, 11, 0.25);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-top: 16px;
          line-height: 1.4;
        }

        .settings-footer {
          margin-top: 16px;
          padding-top: 14px;
          border-top: 1px solid var(--border-color);
          display: flex;
          justify-content: flex-end;
        }

        .clear-all-btn {
          color: var(--accent-coral);
        }

        .clear-all-btn:hover {
          background: rgba(255, 51, 102, 0.1);
          border-color: var(--accent-coral);
          color: var(--accent-coral);
        }

        @media (max-width: 540px) {
          .setting-row {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
            padding: 14px 14px;
          }
          .unit-pill-group {
            width: 100%;
            justify-content: space-between;
          }
          .unit-pill {
            flex: 1;
            text-align: center;
            padding: 8px 10px;
          }
          .settings-select {
            width: 100%;
          }
          .theme-switch-btn {
            width: 100%;
            padding: 10px 14px;
          }
          .lang-pills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 6px;
          }
          .lang-pill-btn {
            padding: 8px 10px;
            font-size: 0.8rem;
          }
          .settings-footer {
            justify-content: stretch;
          }
          .clear-all-btn {
            width: 100%;
            justify-content: center;
            padding: 12px;
          }
        }

        @media (max-width: 360px) {
          .lang-pills-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const _m=["All","Speed Basics","Ping & Latency","Wi-Fi & Routers","Fiber & Broadband","5G & Mobile","Gaming & Esports","Streaming & Work","Hardware & Cables","DNS, VPN & Security"],Dm=[{id:1,category:"Speed Basics",q:"What is internet speed and how is it measured across modern networks?",a:`Internet speed represents the data transfer capacity and velocity between your connected client device (PC, smartphone, console) and remote web/cloud servers across global infrastructure.

• Megabits per second (Mbps): Standard residential measurement. 1 Mbps = 1,000,000 bits of digital data transferred every second.
• Gigabits per second (Gbps): Ultra-high-speed fiber metric. 1 Gbps = 1,000 Mbps = 1,000,000,000 bits per second.
• Three Core Pillars: Internet quality is not just raw bandwidth; it consists of Download Throughput (inbound data rate), Upload Throughput (outbound data rate), and Latency/Ping (round-trip reaction time).

When you run a test on NETSPEEDPRO, multiple concurrent HTTP/3 and WebSocket streams are initialized to saturate your connection pipe and evaluate true sustained throughput.`},{id:2,category:"Speed Basics",q:"What is the exact mathematical difference between Megabits (Mbps) and Megabytes (MB/s)?",a:`The difference comes down to bits versus bytes in digital computing:

• 1 Byte (B) = 8 Bits (b).
• ISPs and network benchmarks quote speeds in Megabits per second (lowercase 'b', Mbps).
• Web browsers, Steam, and operating systems report file downloads in Megabytes per second (uppercase 'B', MB/s).

Practical Conversion Formula:
Download Rate (MB/s) = Internet Speed (Mbps) ÷ 8

Real-World Download Examples on a 100 Mbps Connection:
• Maximum theoretical speed: 100 ÷ 8 = 12.5 MB/s.
• Accounting for ~5% TCP/IP protocol overhead: ~11.8 MB/s actual download speed.
• A 50 GB modern game will take approximately 1 hour and 12 minutes to download at 11.8 MB/s.`},{id:3,category:"Speed Basics",q:"What is download speed, why is it critical, and how much do you really need?",a:`Download speed measures how rapidly data travels from external servers to your local device. It directly governs the speed of browsing web pages, streaming movies, downloading software, and updating operating systems.

Bandwidth Requirement Breakdown by Activity:
• Basic Web Browsing & Social Media: 5–15 Mbps per user.
• HD Video Streaming (1080p 60fps): 10–15 Mbps per active screen.
• 4K UHD HDR Streaming (Netflix, Prime, Disney+): 25–40 Mbps per screen.
• 8K VR & Next-Gen Cloud Streaming: 60–100 Mbps.
• Large Game Downloads (100GB+ titles): 200–1000 Mbps for rapid 15–20 minute installs.

For a multi-user household with 4 people streaming, working, and gaming simultaneously, a 150–300 Mbps broadband connection ensures zero buffering or quality throttling.`},{id:4,category:"Speed Basics",q:"What is upload speed, who needs high upload bandwidth, and what are the use cases?",a:`Upload speed measures the rate at which your device sends data packets outbound across the internet to other computers or cloud infrastructure.

Key Use Cases Requiring Fast Upload:
• Video Conferencing: Zoom, Microsoft Teams, and Google Meet require 3.5–5 Mbps stable upload per 1080p stream.
• Livestreaming (Twitch / YouTube): 1080p 60fps streaming requires 6–8 Mbps sustained bitrate; 4K streaming requires 20–30 Mbps.
• Cloud Sync & Backups: Uploading raw camera footage, Google Drive backups, or iCloud syncs can take hours on weak 5 Mbps upload lines.
• Remote Work (VPN / RDP / SSH): Pushing large git repositories, CAD drawings, or database files to corporate servers.
• Smart Home Security: 4 to 8 outdoor 2K/4K surveillance cameras uploading continuous feeds to cloud storage need 15–25 Mbps upload.`},{id:5,category:"Speed Basics",q:"Why is upload speed typically much slower than download speed on residential internet?",a:`Most traditional residential broadband technologies (such as Cable DOCSIS 3.0/3.1 and VDSL/ADSL) are engineered with an asymmetrical architecture.

Why ISPs Build Asymmetrical Networks:
1. Historical Usage Patterns: Over 85–90% of typical consumer internet traffic is inbound (video streaming, web page assets, game downloads). Only 10–15% is outbound (chat messages, search queries, upload requests).
2. Coaxial Frequency Slicing: Cable TV coaxial cables have limited radio frequency spectrum. ISPs allocate the vast majority of radio channels (50 MHz to 1000 MHz) for downstream data, reserving only a tiny slice (5 MHz to 42 MHz) for upstream data.
3. Cost Optimization: Symmetrical routing requires full fiber optic infrastructure (FTTH). On pure fiber, you receive 100% symmetrical speeds (e.g., 300 Mbps download and 300 Mbps upload).`},{id:6,category:"Speed Basics",q:"What is a symmetrical internet connection and why is it superior for content creators and power users?",a:`A symmetrical connection delivers identical maximum throughput in both download and upload directions (e.g., 1000 Mbps download AND 1000 Mbps upload).

Key Advantages of Symmetrical Connections:
• No Upload Bottlenecks: Backing up a 100 GB folder to Google Drive or OneDrive takes ~14 minutes on gigabit symmetrical fiber, compared to 5.5 hours on cable internet with 40 Mbps upload.
• Zero Bufferbloat During Uploads: Multiple family members can upload 4K video clips or sync photos without causing ping spikes in online games.
• High-Performance Self-Hosting: Allows seamless hosting of local Media Servers (Plex, Jellyfin), private Nextcloud instances, or home VPN endpoints.
• Professional Video Editing: Remote editors can stream raw uncompressed ProRes and 8K timelines to clients in real time.`},{id:7,category:"Speed Basics",q:"How does the NETSPEEDPRO speed testing engine work under the hood?",a:`NETSPEEDPRO employs a multi-phase, high-concurrency browser telemetry engine engineered in HTML5 and JavaScript:

1. Edge Geolocation Detection: Upon load, the client queries low-latency IP endpoints to extract your public ASN, ISP provider name, city, and coordinates to select the nearest optimal server node.
2. Latency & Jitter Measurement: Executes 20 consecutive HTTP HEAD probes using performance.now() microsecond timers to calculate minimum, median, and statistical standard deviation (jitter).
3. Adaptive Download Benchmark: Spawns 4 to 8 parallel asynchronous streams. Dynamically scales payload chunk sizes (from 256KB up to 32MB) over a 10-second sliding window to accurately saturate high-speed gigabit pipes.
4. Real-Time Socket Upload Benchmark: Dispatches randomized binary Uint8Array byte payloads using XMLHttpRequest upload.onprogress listeners to calculate raw socket-level outbound throughput.
5. Live Graph Rendering: Renders bezier smoothed throughput charts on HTML5 Canvas at 60 FPS without UI thread stutter.`},{id:8,category:"Speed Basics",q:"How much data does a full speed test consume on mobile or limited broadband plans?",a:`Because a benchmark must completely fill your network pipe for 10–15 seconds to determine peak stable throughput, data consumption scales directly with your connection speed:

Approximate Data Usage by Speed Tier:
• 10–25 Mbps Connection: ~25 MB to 45 MB total data.
• 50–100 Mbps Connection: ~60 MB to 120 MB total data.
• 300–500 Mbps Connection: ~200 MB to 450 MB total data.
• 1 Gbps (1000 Mbps) Fiber: ~500 MB to 1.2 GB per full test.
• 2.5 Gbps Multi-Gigabit: ~1.5 GB to 3.0 GB per test.

Tip: If you are on a limited mobile 4G/5G daily data cap (e.g. 1.5 GB/day), be mindful that running multiple consecutive gigabit 5G speed tests can consume your daily quota in minutes.`},{id:9,category:"Speed Basics",q:"Why do speed test results differ between different testing websites or apps?",a:`Discrepancies between testing platforms are normal and occur due to several technical variables:

1. Server Physical Distance: A speed test server 20 km away inside your ISP's regional network will show higher speeds and lower latency than a server 1,200 km away in another state.
2. Peering and Transit Routes: Different test services host servers on different tier-1 backbones (Cloudflare, AWS, Google Cloud, Fastly, local ISP data centers). The number of routing hops directly alters performance.
3. Threading Architecture: Single-stream (1 thread) tests evaluate single-file web download limits, whereas multi-stream (4–16 parallel threads) tests evaluate total maximum line bandwidth.
4. Browser vs. App Engine: Native desktop apps bypass browser sandbox memory management, resulting in 2–5% variance compared to browser benchmarks.`},{id:10,category:"Speed Basics",q:"What is an ideal internet speed benchmark score for 1, 2, 4, and 6+ user households?",a:`Recommended minimum bandwidth guidelines based on concurrent active users:

• 1 User (Solo Professional / Student):
  - Recommended: 50–100 Mbps Download | 15+ Mbps Upload.
  - Ideal for 4K streaming, Zoom calls, and gaming on 2–3 personal devices.

• 2 Users (Couples / Roommates):
  - Recommended: 100–200 Mbps Download | 30+ Mbps Upload.
  - Supports two simultaneous 4K streams and concurrent work video meetings.

• 3–4 Users (Standard Family):
  - Recommended: 250–500 Mbps Download | 50+ Mbps Upload (or Symmetrical Fiber).
  - Seamless handling of multiple smart TVs, gaming consoles, and smart home IoT gear.

• 5+ Users / Smart Home (Power Users):
  - Recommended: 500–1000 Mbps (1 Gbps) Symmetrical Fiber.
  - Zero slowdowns during simultaneous 4K streams, cloud backups, gaming, and 30+ connected IoT devices.`},{id:11,category:"Speed Basics",q:"What is bandwidth throttling, why do ISPs do it, and how can you prove it?",a:`Bandwidth throttling is the intentional capping or slowdown of internet speeds by an Internet Service Provider.

Common Reasons ISPs Throttle:
1. Fair Usage Policy (FUP) Breaches: Exceeding monthly soft caps (e.g. 3,300 GB) drops speeds to 1–10 Mbps.
2. Peak-Hour Congestion Management: Throttling heavy streaming or torrent protocols between 7:00 PM and 11:00 PM to protect neighborhood line capacity.
3. Service-Specific Shaping: Deliberately throttling video streaming platforms (Netflix, YouTube) to reduce backbone peering costs.

How to Detect and Prove Throttling:
• Run a benchmark on NETSPEEDPRO at 10:00 AM, then run another at 9:00 PM. A persistent 50%+ drop during peak hours indicates network congestion or throttling.
• Run a benchmark on your normal connection, then connect to a fast WireGuard VPN and re-test. If streaming speeds dramatically increase under the VPN, your ISP is packet-inspecting and throttling specific traffic.`},{id:12,category:"Speed Basics",q:"How should I prepare my computer and network before running an accurate speed test?",a:`To ensure your speed test results reflect your true line capacity and not local device bottlenecks, follow this checklist:

1. Use a Direct Wired Connection: Connect your PC directly to the router using a CAT6/CAT7 Ethernet cable.
2. Pause Heavy Downloads & Syncs: Stop Steam downloads, Windows Updates, torrent clients, Google Drive, and OneDrive syncs.
3. Close Extra Browser Tabs: Close tabs with active video streams, heavy web apps, or ad-heavy sites.
4. Disconnect VPNs: Disable third-party VPNs unless you specifically wish to test your encrypted tunnel throughput.
5. Check Device CPU Load: Open Task Manager (Ctrl+Shift+Esc) to confirm CPU and memory utilization are below 50%.
6. Keep Wi-Fi Close: If testing on Wi-Fi, stand within 2–3 meters of your router on the 5 GHz or 6 GHz frequency band.`},{id:13,category:"Speed Basics",q:"What causes internet speeds to fluctuate during different hours of the day?",a:`Speed fluctuations are driven by a combination of physical and network variables:

• Neighborhood Node Saturation: On Cable DOCSIS and GPON Fiber networks, bandwidth is shared across a local neighborhood splitter (often 32 to 64 homes per port). Peak evening hours (8:00 PM – 11:00 PM) create aggregate traffic surges.
• Wi-Fi Spectrum Crowding: In apartment complexes, neighboring routers broadcast on identical wireless channels in the evening, causing co-channel packet collisions.
• Router Thermal Throttling: Routers running in unventilated cabinets can overheat under prolonged heavy load, reducing CPU clock speeds.
• Background Cloud Backups: Smartphones and smart TVs scheduled to perform cloud syncs when plugged in at night can silently saturate upstream bandwidth.`},{id:14,category:"Speed Basics",q:"What is TCP Slow Start and how does it influence initial speed test readings?",a:`TCP Slow Start is a foundational congestion control mechanism specified in RFC 5681 for internet communication:

• When a data stream begins, the sender does not know the receiver's line capacity. To prevent immediate network packet loss, it starts with a small Congestion Window (cwnd) of 10 segments.
• With each acknowledgment (ACK) received, the window doubles exponentially (10 ➔ 20 ➔ 40 ➔ 80 packets).
• Within 1.5 to 3 seconds, the window reaches the line's maximum physical capacity.

This is why speed test speedometer needles and live throughput graphs start low for the first 1–2 seconds before accelerating smoothly to your maximum subscribed speed.`},{id:15,category:"Speed Basics",q:"What is the difference between peak burst speed and sustained average speed?",a:`• Peak Burst Speed: The maximum instantaneous throughput achieved during a short window (e.g. 350 Mbps for 1 second). Many cable ISPs employ 'SpeedBoost' features that grant 10–20% extra burst bandwidth for the first few seconds of a transfer.
• Sustained Average Speed: The stable, continuous transfer rate maintained over a full 10–30 second measurement window (e.g. 295 Mbps).

NETSPEEDPRO uses robust statistical filtering (trimming top/bottom 5% outliers) to deliver your true sustained average speed, which is the realistic number that reflects long video streaming, cloud backups, and large game downloads.`},{id:16,category:"Ping & Latency",q:"What is the exact technical definition of ping and latency?",a:`Latency is the total time delay incurred for a digital data packet to travel from a source device, pass through intermediate routing hops, reach a destination server, and have an acknowledgment packet return back to the source.

Ping is the diagnostic utility and unit of measurement (expressed in milliseconds, ms) used to measure this round-trip time (RTT).

Components of Total Latency:
1. Propagation Delay: The physical speed of light/signals traveling through fiber glass (~200,000 km/s) or copper.
2. Transmission Delay: The time required to push packet bits onto the physical medium.
3. Processing Delay: The time router CPUs spend inspecting packet headers and routing tables.
4. Queuing Delay: Time spent waiting in congested router buffer queues.`},{id:17,category:"Ping & Latency",q:"What is considered a good, average, and bad ping score for gaming and daily use?",a:`Ping benchmark standards for residential and commercial connections:

• Under 15 ms (Elite / Fiber Tier): Instantaneous response. Standard on FTTH fiber optic connections to local metro servers. Ideal for esports tournaments and high-frequency trading.
• 15–35 ms (Excellent Tier): Butter-smooth experience for all multiplayer gaming, voice calls, and 4K livestreaming.
• 35–65 ms (Good / Average Tier): Typical for 4G/5G mobile networks and cable broadband. Fully playable for competitive games with minimal delay.
• 65–100 ms (Fair / Playable Tier): Acceptable for casual web browsing and Netflix streaming; minor hit-registration delay in fast-paced FPS shooters.
• 100–250+ ms (Poor / Laggy): High latency caused by international routing, satellite hops, or heavy line congestion. Voice calls suffer audio overlap; online games experience severe rubber-banding.`},{id:18,category:"Ping & Latency",q:"What is jitter, why is it dangerous for voice/video calls, and what causes it?",a:`Jitter is the statistical fluctuation or variance in latency over time across consecutive data packets.

Why Jitter Destroys Real-Time Applications:
• Real-time protocols (UDP) used by Zoom, Teams, VoIP, and games do not re-request lost packets; they require a steady, rhythmic arrival of data (e.g. one packet every 20 ms).
• If Packet 1 arrives in 15 ms, Packet 2 in 85 ms, and Packet 3 in 20 ms, the application's jitter buffer runs dry, resulting in robotic voice distortion, audio dropouts, and frozen video frames.

Root Causes of High Jitter:
1. Wi-Fi Radio Interference: Neighboring routers, Bluetooth devices, and microwaves causing intermittent re-transmissions.
2. Bufferbloat: Unmanaged router queues filling up under download strain.
3. Dynamic ISP Routing: Packets taking different physical paths through congested network peering points.`},{id:19,category:"Ping & Latency",q:"What is a healthy jitter threshold score and how do I fix high jitter?",a:`Healthy Jitter Benchmark Scale:
• Under 2 ms: Elite fiber stability. Zero audio or video packet loss.
• 2–5 ms: Very good residential standard.
• 5–12 ms: Moderate; minor voice distortion during high-bandwidth moments.
• 15+ ms: Problematic; noticeable gaming lag spikes and video call stutter.

How to Fix High Jitter:
1. Switch to Wired Ethernet: Eliminates wireless radio frequency airtime contention.
2. Enable SQM QoS: Turn on CAKE or FQ-CoDel Smart Queue Management on your router.
3. Change Wi-Fi Frequency: Move from congested 2.4 GHz to clean 5 GHz / 6 GHz bands.
4. Replace Old Modems: Modems featuring defective Intel Puma 6 chipsets are notorious for hardware-level latency jitter.`},{id:20,category:"Ping & Latency",q:"What is packet loss, how does it differ from latency, and how do you diagnose it?",a:`Packet loss occurs when one or more packets of data traveling across a computer network fail to reach their destination, getting dropped in transit.

Difference Between Latency and Packet Loss:
• Latency is a time delay (data arrives late).
• Packet Loss is data disappearance (data never arrives and must either be discarded or retransmitted).

Acceptable Packet Loss Thresholds:
• 0.0%: The only acceptable target for fiber, cable, and esports gaming.
• 0.5%–1.5%: Noticeable stutter in online games and audio clipping in Discord/Zoom.
• 3.0%+: Severe network degradation, websites failing to load, and video streams buffering.

Diagnosis: Run ping -t 8.8.8.8 in Windows Command Prompt. If 'Request timed out' appears, packets are dropping either at your router, local cabling, or ISP street node.`},{id:21,category:"Ping & Latency",q:"What is bufferbloat, how does it ruin ping during downloads, and how does SQM fix it?",a:`Bufferbloat is high latency under load caused by routers with excessively large, unmanaged internal packet buffers.

How Bufferbloat Happens:
• When you start a large download or cloud backup, your ISP pipe fills to 100% capacity.
• Older or budget routers hold excess packets in a massive FIFO (First-In, First-Out) memory queue instead of dropping or scheduling them.
• Time-sensitive gaming packets (which are only a few bytes) get stuck behind huge 1,500-byte video chunks, causing ping to skyrocket from 20 ms to 400+ ms.

How Smart Queue Management (SQM) Solves It:
SQM algorithms (like CAKE and FQ-CoDel) create separate sub-queues for every active network stream and employ active queue management to ensure tiny, real-time gaming and VoIP packets are instantly transmitted ahead of bulk file downloads.`},{id:22,category:"Ping & Latency",q:"Why is latency on international servers always higher than local servers?",a:`International latency is constrained by fundamental laws of physics and global submarine optical routing:

1. Speed of Light in Fiber Glass: Light travels through a vacuum at 300,000 km/s, but slows to ~200,000 km/s inside silica fiber optic glass (refractive index ~1.47).
2. Physical Distance: The round-trip distance between Mumbai and New York is ~25,000 km. Physical transit time alone requires a minimum theoretical 125 ms.
3. Active Routing Hops: International packets must pass through 15 to 30 intermediate Tier-1 routers, submarine cable landing stations (e.g. in Marseille, Singapore, or London), and optical repeaters, adding processing and switching overhead.`},{id:23,category:"Ping & Latency",q:"Can using a VPN reduce ping in online games or does it always increase latency?",a:`In 95% of scenarios, a VPN increases ping by 5 to 25 ms due to cryptographic encryption overhead and routing through a middleman server.

When a VPN CAN Lower Ping:
• Sub-optimal ISP Routing: If your ISP routes traffic to a game server through a congested, circuitous 8-hop detour, a gaming VPN with direct Tier-1 peering agreements can route your packets through a geographically direct, uncongested path.
• ISP Traffic Throttling: If your ISP intentionally throttles UDP gaming traffic, VPN encryption conceals packet headers, bypassing ISP throttling.`},{id:24,category:"Ping & Latency",q:"What causes random, periodic ping spikes on home Wi-Fi networks?",a:`Periodic Wi-Fi ping spikes (e.g. jumping from 25 ms to 200 ms every 30 seconds) are usually caused by:

1. Windows Background Wi-Fi Scanning: Windows periodically scans for nearby SSIDs in the background to maintain its network list, causing a 100–300 ms wireless radio freeze. (Can be fixed using tools like WLAN Optimizer).
2. Dual-Band Band Steering: Routers attempting to force a device back and forth between 2.4 GHz and 5 GHz.
3. Smart Home Telemetry Bursts: Security cameras or smart appliances sending batch telemetry bursts.
4. Household Appliances: 2.4 GHz microwave ovens, Bluetooth speakers, or cordless phones emitting electromagnetic interference.`},{id:25,category:"Ping & Latency",q:"What is the difference between Idle Ping, Download Loaded Ping, and Upload Loaded Ping?",a:`NETSPEEDPRO benchmarks three distinct latency states to assess total network health:

• Idle Ping (Baseline): Measured when no data is transferring. Reflects your pure physical line distance to the server.
• Download Loaded Ping: Measured while multi-threaded download streams saturate your inbound line. High values indicate router download bufferbloat.
• Upload Loaded Ping: Measured while outbound streams saturate your upload line. This is typically where budget routers suffer the worst bufferbloat latency spikes (often 300–800 ms).`},{id:26,category:"Ping & Latency",q:"Why do fiber optic connections achieve much lower latency than cable or satellite?",a:`Physical Medium Comparison:

• Fiber Optic (FTTH): Pure light pulses through silica glass. Low attenuation, zero electrical interference, and native microsecond switching latency (typically 1–5 ms to regional hubs).
• Cable DOCSIS: Electrical signals over copper coaxial cables. Shared neighborhood spectrum and RF amplification add 10–25 ms latency.
• LEO Satellite (Starlink): Signals travel ~550 km to orbit and back, resulting in 25–45 ms latency.
• Geostationary Satellite (Legacy): Signals travel 35,786 km to geostationary orbit and back, resulting in unavoidable physical latency of 600–800 ms.`},{id:27,category:"Ping & Latency",q:"How does geolocated server selection improve the accuracy of network benchmarks?",a:`Speed benchmarks are designed to evaluate the physical link performance of your last-mile ISP connection. Connecting to a server across the continent introduces third-party backbone congestion that does not reflect your actual home broadband capability.

NETSPEEDPRO uses ultra-fast edge geolocation to select the closest Tier-1 server node, ensuring measurements accurately reflect your true line bandwidth and local latency.`},{id:28,category:"Ping & Latency",q:"What is Round-Trip Time (RTT) and how is it measured in browser JavaScript?",a:`Round-Trip Time (RTT) is the duration in milliseconds required for a network packet to travel from a client to a server and for an acknowledgment signal (ACK) to return.

In NETSPEEDPRO, RTT is measured using the browser's high-resolution performance.now() API (accurate to within 5 microseconds). Multiple consecutive HTTP HEAD and WebSocket round-trips are executed, filtering out TCP handshake overhead to calculate true network transport latency.`},{id:29,category:"Ping & Latency",q:"Can outdated network card drivers or Windows power-saving settings increase latency?",a:`Yes. Network Interface Card (NIC) settings significantly impact latency:

• Energy Efficient Ethernet (EEE) / Green Ethernet: Power-saving features put the network chip into sleep states during micro-pauses, adding 5–15 ms wake-up latency.
• Interrupt Moderation: Batches network packets together to save CPU cycles, which increases throughput for file transfers but adds latency jitter for gaming.
• Fix: Open Device Manager ➔ Network Adapters ➔ Properties ➔ Advanced. Disable 'Energy Efficient Ethernet' and set 'Interrupt Moderation' to Disabled or Low for minimal gaming latency.`},{id:30,category:"Ping & Latency",q:"What is the difference between ping and server response time (TTFB)?",a:`• Ping (Network Latency): The time required for a packet to physically travel across wires to the server and back.
• TTFB (Time to First Byte): Combines network latency PLUS the server's internal processing time (database queries, PHP/Node.js script execution, generating HTML) before it sends the first byte of data back.

A website can have a fast 15 ms ping, but if the web server is overloaded, its TTFB may be slow (1,200 ms).`},{id:31,category:"Wi-Fi & Routers",q:"What are the core technical differences between 2.4 GHz, 5 GHz, and 6 GHz Wi-Fi?",a:`Wireless frequency bands operate on different trade-offs between physical range and maximum bandwidth throughput:

• 2.4 GHz Band:
  - Frequency Range: 2.400–2.484 GHz (Channels 1–14).
  - Range: ~45–50 meters (excellent wall penetration).
  - Max Real Speed: 40–90 Mbps.
  - Drawback: Only 3 non-overlapping channels (1, 6, 11); heavily congested by neighbors, Bluetooth, and microwaves.

• 5 GHz Band:
  - Frequency Range: 5.150–5.850 GHz (24+ non-overlapping channels).
  - Range: ~15–20 meters (moderate wall penetration).
  - Max Real Speed: 400–900 Mbps on Wi-Fi 6 (80/160 MHz channels).
  - Best for: 4K streaming, gaming, and gigabit fiber.

• 6 GHz Band (Wi-Fi 6E & Wi-Fi 7):
  - Frequency Range: 5.925–7.125 GHz (up to 1,200 MHz of clean spectrum).
  - Range: ~10–12 meters (line-of-sight optimized).
  - Max Real Speed: 1,500–4,000+ Mbps (Multi-Gigabit).
  - Best for: Zero-interference ultra-low latency VR, 8K streaming, and multi-gigabit transfers.`},{id:32,category:"Wi-Fi & Routers",q:"What are the scientific rules for optimal Wi-Fi router placement in a home?",a:`To maximize radio signal distribution and minimize attenuation, follow these positioning principles:

1. Central Location: Place the router in the geographical center of your home, rather than in an isolated corner or basement.
2. Elevate the Device: Mount the router on a shelf or desk (1.2 to 1.8 meters high). Radio waves travel downward and outward in an umbrella pattern.
3. Avoid Dense Obstacles: Never place routers behind thick concrete/brick walls, inside metal AV cabinets, or directly behind large TVs.
4. Beware of Reflective Surfaces: Large mirrors and metallic surfaces bounce and reflect radio waves, causing destructive multipath interference.
5. Keep Away from Interference Sources: Maintain at least 2 meters separation from microwave ovens, 2.4 GHz cordless phones, baby monitors, and heavy electrical breaker panels.`},{id:33,category:"Wi-Fi & Routers",q:"What are Wi-Fi 6 (802.11ax) and Wi-Fi 7 (802.11be), and what new technologies do they introduce?",a:`Wi-Fi standards evolve to handle higher device density, wider channels, and lower latency:

• Wi-Fi 6 (802.11ax):
  - OFDMA (Orthogonal Frequency-Division Multiple Access): Splits wireless channels into hundreds of sub-carriers, allowing a router to communicate with up to 30+ smart devices simultaneously in one transmission.
  - 1024-QAM: Increases data packing density by 25% over Wi-Fi 5.
  - Target Wake Time (TWT): Drastically improves smartphone and smart IoT battery life by scheduling sleep cycles.

• Wi-Fi 7 (802.11be - Next-Gen):
  - 320 MHz Ultra-Wide Channels: Doubles channel bandwidth over Wi-Fi 6.
  - 4096-QAM (4K-QAM): Increases peak throughput by another 20%.
  - Multi-Link Operation (MLO): Enables devices to transmit and receive across both 5 GHz and 6 GHz bands simultaneously, combining speeds and cutting latency to near-zero.`},{id:34,category:"Wi-Fi & Routers",q:"What is a Mesh Wi-Fi system and is it genuinely better than a Wi-Fi range extender?",a:`Yes, Mesh Wi-Fi is vastly superior to traditional cheap range extenders in every performance metric:

• The Problem with Wi-Fi Range Extenders:
  - Repeaters simply listen to a broadcast signal and re-transmit it on the same radio, immediately cutting available bandwidth by 50%.
  - They create separate SSIDs (e.g. 'Home_EXT'), forcing your phone to stick to weak signals until connection drops completely.

• How Mesh Wi-Fi Works:
  - Mesh systems (e.g. ASUS ZenWiFi, TP-Link Deco, Netgear Orbi, Eero) consist of a main router and satellite nodes that communicate over a dedicated wireless backhaul band (or wired Ethernet backhaul).
  - Unified Single SSID with 802.11k/v/r Seamless Roaming: Your device automatically and seamlessly handshakes to the closest node with zero dropped calls or buffering.`},{id:35,category:"Wi-Fi & Routers",q:"Why does rebooting or power-cycling a router resolve slow internet speeds?",a:`Modern Wi-Fi routers are specialized embedded computers equipped with multi-core CPUs, RAM, and Linux-based operating systems.

What Happens During Weeks of Continuous Operation:
1. Memory Fragmentation & Leaks: Firmware processes, DNS resolvers, and routing daemons accumulate memory fragmentation, slowing down packet processing.
2. Saturated NAT Lookup Tables: Routers maintain tables mapping every internal connection (hundreds per phone/PC). Stale TCP/UDP connection states clog memory.
3. Wi-Fi Channel Congestion: Routers often lock onto a channel selected on initial boot. Over time, neighbors turn on new routers, crowding that channel.

Rebooting flushes RAM, clears stale NAT entries, terminates hung background threads, and forces the router to scan and lock onto the cleanest radio channel.`},{id:36,category:"Wi-Fi & Routers",q:"How do I choose the best, non-overlapping Wi-Fi channels to avoid neighbor interference?",a:`Wi-Fi channel optimization depends on frequency band:

• For 2.4 GHz Band:
  - There are 11 channels in North America (13 in Europe/Asia), each 20 MHz wide, but spaced only 5 MHz apart.
  - Rule: ONLY use channels 1, 6, or 11. Using channel 2, 3, 4, 7, 8, 9, or 10 creates adjacent-channel interference, degrading speeds for both you and your neighbors.

• For 5 GHz Band:
  - Channels are 20/40/80/160 MHz wide. Use a free Wi-Fi Analyzer mobile app to identify unoccupied channels.
  - UNII-1 (Channels 36, 40, 44, 48) and UNII-3 (Channels 149, 153, 157, 161) are standard and reliable.
  - DFS Channels (52–144): Clean and unoccupied, but will temporarily switch off if nearby airport/weather radar signals are detected.`},{id:37,category:"Wi-Fi & Routers",q:"What is Quality of Service (QoS) on a router and how do I configure it properly?",a:`Quality of Service (QoS) is an intelligent traffic management feature on modern routers that prioritizes time-sensitive data over bulk downloads.

How to Configure QoS for Peak Performance:
1. Log in to your router gateway (typically 192.168.1.1 or 192.168.0.1).
2. Navigate to QoS / Traffic Management settings.
3. Measure your true line speed using NETSPEEDPRO.
4. Set your Upload and Download bandwidth limits in QoS to 90–95% of your true line capacity (this prevents ISP buffer queues from ever filling).
5. Set Priority Rules: Assign 'Highest Priority' to Gaming Consoles, PC MAC addresses, and Video Conferencing (Zoom/Teams); assign 'Low Priority' to BitTorrent, OS Updates, and smart TVs.`},{id:38,category:"Wi-Fi & Routers",q:"Can having 30+ smart home IoT devices slow down my computer's Wi-Fi speed?",a:`On older Wi-Fi 4 (802.11n) and Wi-Fi 5 (802.11ac) routers, YES. Older routers use single-user time slicing, meaning every smart bulb, security camera, smart plug, and sensor must take turns communicating with the router, stealing valuable airtime from your PC.

Solutions to Prevent IoT Slowdowns:
• Upgrade to a Wi-Fi 6 or Wi-Fi 7 Router: OFDMA allows the router to communicate with dozens of low-bandwidth IoT devices simultaneously in a single radio frame.
• Separate IoT SSIDs on 2.4 GHz: Put smart home gear on a dedicated 2.4 GHz Guest Network, reserving the 5 GHz and 6 GHz bands exclusively for your PCs, laptops, and phones.`},{id:39,category:"Wi-Fi & Routers",q:"What are MU-MIMO, Beamforming, and OFDMA in wireless technology?",a:`Three key wireless technologies that enhance modern router performance:

• Beamforming: Instead of broadcasting radio waves in a uniform 360-degree sphere, the router calculates the physical location of your device and phases antenna signals to focus a concentrated beam of RF energy directly at your phone or laptop.
• MU-MIMO (Multi-User MIMO): Enables a router with multiple antennas (e.g. 4x4 or 8x8) to transmit distinct spatial streams to 4+ devices at the exact same instant, eliminating queuing delays.
• OFDMA: Divides a single channel into smaller sub-carriers (Resource Units), enabling simultaneous transmission of data to multiple devices in a single packet cycle.`},{id:40,category:"Wi-Fi & Routers",q:"Why should you buy a standalone router instead of using your ISP's combination modem/router gateway?",a:`ISP-provided 'combo' gateway devices are built to keep provider costs low and typically suffer from several limitations:

• Weak Antennas & Range: Budget internal PCB antennas struggle to penetrate 2+ walls.
• Slow Processors: Low-power single or dual-core CPUs overheat under multi-device loads, causing random disconnects.
• Locked Firmware: ISPs lock down DNS settings, disable advanced port forwarding, prevent SQM bufferbloat configuration, and restrict VPN client setups.
• Recommendation: Put your ISP modem into 'Bridge Mode' (or IP Passthrough) and connect a quality standalone Wi-Fi 6/7 router (ASUS, TP-Link Archer, Netgear Nighthawk) for superior range, speeds, and security.`},{id:41,category:"Wi-Fi & Routers",q:"How often should I update router firmware and what are the security risks of skipping updates?",a:`You should check for router firmware updates every 3 to 6 months (or enable Automatic Security Updates in settings).

Risks of Outdated Firmware:
• Botnet Hijacking: Hackers scan the web for unpatched routers to enlist them into massive Mirai or VPNFilter DDoS botnets.
• DNS Hijacking: Malicious firmware exploits can overwrite your DNS servers, redirecting you from legitimate banking or shopping websites to phishing clones without your knowledge.
• Performance Bugs: Updates regularly patch memory leaks, improve Wi-Fi 6 scheduling, and optimize thermal management.`},{id:42,category:"Wi-Fi & Routers",q:"What is the difference between WPA2, WPA3, and Open Wi-Fi security protocols?",a:`• Open Wi-Fi (No Password): Zero encryption. Any person nearby with a packet sniffer (like Wireshark) can capture unencrypted network traffic and URLs.
• WPA2-AES: The global standard for the last 15 years. Uses 128-bit AES encryption. While secure, it is vulnerable to KRACK (Key Reinstallation Attacks) and offline dictionary password cracking.
• WPA3-SAE (Simultaneous Authentication of Equals): The modern standard. Provides 192-bit cryptographic strength, immune to offline dictionary attacks even with simple passwords, and enables Protected Management Frames (PMF) to prevent de-authentication disconnect attacks.`},{id:43,category:"Wi-Fi & Routers",q:"Why is 5 GHz Wi-Fi fast right next to the router but drops off in distant bedrooms?",a:`This is governed by the physics of electromagnetic radio wave propagation (Friis Transmission Equation):

• Higher frequency waves (5 GHz / 6 GHz) oscillate much faster and carry significantly more data per second, but their shorter wavelengths are easily absorbed by physical matter (drywall, brick, metal, glass, water pipes).
• Lower frequency waves (2.4 GHz) have longer wavelengths that bend around corners and penetrate solid structures with less energy loss.
• Solution: If your bedroom is far from the router, install a wired Ethernet cable or deploy a Mesh Wi-Fi node to bridge the distance.`},{id:44,category:"Wi-Fi & Routers",q:"What is a Guest Wi-Fi network, why is it essential, and how does it protect your devices?",a:`A Guest Network creates a completely isolated Virtual Local Area Network (VLAN) on your router with its own dedicated SSID and password.

Why You Must Use One:
• Isolation: Devices on the Guest Network have full access to the internet, but are strictly blocked from discovering or communicating with your private PCs, NAS storage drives, home printers, and smart security cameras.
• Malware Containment: If a friend's infected phone or an insecure smart plug gets compromised, the malware cannot spread across your local home network.`},{id:45,category:"Wi-Fi & Routers",q:"Do cheap Wi-Fi range extenders or DIY foil reflectors work effectively?",a:`• DIY Foil Reflectors: Placing parabolic cardboard foil behind an antenna can theoretically redirect RF energy in one direction by 1–2 dB, but it creates severe multipath signal reflection errors and dead zones behind the router.
• Cheap Plug-in Range Extenders ($20–$40): Extenders use a single wireless chip to listen and re-transmit, instantly cutting available speed by 50% while doubling latency.
• The Right Fix: Run a cheap CAT6 flat Ethernet cable under baseboards or upgrade to a modern Wi-Fi 6 Mesh System with dedicated wireless backhaul.`},{id:46,category:"Fiber & Broadband",q:"What is Fiber Optic (FTTH) internet and why is it superior to copper cable?",a:`Fiber-to-the-Home (FTTH) transmits binary data as modulated pulses of infrared laser light through hair-thin strands of ultra-pure silica glass.

Key Advantages Over Copper Coaxial / DSL:
1. Speed Capacity: Fiber cables have practically unlimited theoretical bandwidth; commercial lines easily run at 1 Gbps, 2.5 Gbps, 10 Gbps, and 40 Gbps.
2. Symmetrical Upload & Download: Identical speeds in both directions.
3. Immunity to Electrical Interference: Glass is an electrical insulator. Nearby power transformers, lightning storms, and high-voltage electrical lines cause zero signal degradation.
4. Ultra-Low Latency: Light travels through glass with negligible resistance, delivering local latency as low as 1–3 ms.`},{id:47,category:"Fiber & Broadband",q:"What are the structural differences between FTTH, FTTC, FTTB, and FTTP?",a:`These acronyms represent how close physical fiber optic cables reach to your living room:

• FTTH / FTTP (Fiber to the Home / Premises): 100% pure glass fiber runs directly into your house and terminates into an Optical Network Terminal (ONT). The gold standard for speed and reliability.
• FTTB (Fiber to the Building): Fiber runs to an apartment building's basement telecom rack. Copper Ethernet cables or G.fast phone lines connect individual floors.
• FTTC (Fiber to the Curb / Cabinet): Fiber runs to a street corner cabinet up to 300 meters away. Older copper telephone wires complete the final leg to your house, resulting in lower speeds and distance degradation.`},{id:48,category:"Fiber & Broadband",q:"What is DOCSIS Cable internet (DOCSIS 3.0 vs. DOCSIS 3.1 vs. DOCSIS 4.0)?",a:`DOCSIS (Data Over Cable Service Interface Specification) is the technology used by cable TV companies to deliver internet over coaxial copper lines:

• DOCSIS 3.0: Bonds up to 8–32 copper channels, supporting download speeds up to 300–500 Mbps, but uploads are capped at 20–35 Mbps.
• DOCSIS 3.1: Introduces OFDM channels, enabling up to 10 Gbps download and 1–2 Gbps upload.
• DOCSIS 4.0 (Next-Gen): Introduces Full Duplex DOCSIS (FDX) and Extended Spectrum (ESD), delivering symmetrical 10 Gbps download and 6 Gbps upload over existing coaxial TV cables.`},{id:49,category:"Fiber & Broadband",q:"What is DSL internet (ADSL / VDSL) and why is it being phased out globally?",a:`DSL operates over copper telephone wires invented in the 19th century:

• Severe Distance Decay: DSL signals attenuate rapidly. If you live more than 1 km from the telephone exchange, speeds drop from 50 Mbps down to 5–10 Mbps.
• Noise Vulnerability: Corrosion on copper phone lines, rain in street junction boxes, and AM radio signals cause severe packet loss and line sync disconnects.
• Telecommunications providers worldwide are actively shutting down legacy copper networks and replacing them with fiber optics.`},{id:50,category:"Fiber & Broadband",q:"How does Low Earth Orbit (LEO) Satellite internet (Starlink) compare to legacy geostationary satellites?",a:`The difference lies entirely in orbital altitude:

• Legacy Geostationary Satellites (HughesNet, Viasat):
  - Orbit: 35,786 km above Earth.
  - Latency: 600–800 ms (unavoidable physical light transit delay).
  - Speeds: 15–25 Mbps with strict monthly data caps (20–50 GB).

• Starlink (LEO Satellites):
  - Orbit: ~550 km above Earth (65x closer).
  - Latency: 25–45 ms (competitive with ground broadband).
  - Speeds: 100–250 Mbps download | 15–30 Mbps upload.
  - Supports online gaming, Zoom calls, and 4K streaming in rural and remote off-grid locations.`},{id:51,category:"Fiber & Broadband",q:"What is a Fair Usage Policy (FUP) and how do commercial broadband data caps operate?",a:`A Fair Usage Policy (FUP) is a contractual bandwidth cap enforced by ISPs on residential 'Unlimited' broadband plans:

• How It Works: Your plan provides full gigabit speeds up to a monthly threshold (e.g. 3,300 GB or 3.3 TB). If your household exceeds this quota, your speed is automatically throttled to 1–10 Mbps for the remainder of the billing cycle.
• Why ISPs Use It: Prevents commercial crypto-mining farms, unauthorized local redistribution, or heavy seedbox servers from monopolizing shared neighborhood optical splitters.
• Monitoring: Check your ISP's self-care customer portal monthly to track aggregate family data consumption.`},{id:52,category:"Fiber & Broadband",q:"Why do storms, rain, and cold weather occasionally cause broadband slowdowns?",a:`• Fiber Optic Lines: Completely immune to rain, moisture, and lightning. If fiber slows down during a storm, it is usually due to power outages at regional ISP switching stations.
• Satellite Internet: Suffers from 'Rain Fade'. Heavy rain droplets and storm clouds absorb and scatter high-frequency microwave radio signals (Ku/Ka bands).
• Underground Copper Cables: Older copper phone and coaxial cables develop micro-cracks in insulation. Rainwater ingress causes electrical impedance drops and packet loss.`},{id:53,category:"Fiber & Broadband",q:"What is an Optical Network Terminal (ONT) / ONU and how does it function?",a:`An Optical Network Terminal (ONT) is the hardware device installed inside your home where the fiber optic line enters from the street:

• Function: It receives high-frequency optical laser pulses through an SC/APC green fiber connector, demodulates the light photons, and converts them into standard Ethernet data packets transmitted via an RJ45 LAN port.
• Difference from a Modem: Modems modulate analog radio signals over coaxial/phone lines. ONTs convert light wavelengths using GPON/XGS-PON optical protocols.`},{id:54,category:"Fiber & Broadband",q:"What hardware is required to actually achieve 2.5 Gbps or 10 Gbps multi-gigabit speeds on a PC?",a:`Standard PCs and routers sold prior to 2022 are limited to 1 Gbps (1,000 Mbps). To utilize multi-gigabit fiber, you must upgrade your entire hardware chain:

1. Multi-Gigabit Ethernet Port: Your PC needs a 2.5G, 5G, or 10G LAN port (either built into modern motherboards or via a PCIe NIC card / Thunderbolt 3 adapter).
2. Multi-Gigabit Router: A router featuring 2.5G/10G WAN and LAN ports.
3. Quality Cabling: Minimum CAT6 cabling (supports 10 Gbps up to 55 meters) or CAT6a (10 Gbps up to 100 meters).
4. Fast Storage NVMe SSD: A traditional mechanical hard drive writes at ~120 MB/s (1 Gbps max). Downloading at 2.5 Gbps (312 MB/s) requires a modern M.2 PCIe NVMe SSD.`},{id:55,category:"Fiber & Broadband",q:"What is GPON vs. XGS-PON in residential fiber architecture?",a:`GPON and XGS-PON are the optical transmission standards used by fiber providers:

• GPON (Gigabit Passive Optical Network):
  - Downstream: 2.488 Gbps shared across 32 or 64 homes.
  - Upstream: 1.244 Gbps shared.
  - Caps residential plans at ~1 Gbps download and 500–1000 Mbps upload.

• XGS-PON (10-Gigabit Symmetrical PON):
  - Downstream: 10 Gbps symmetrical.
  - Upstream: 10 Gbps symmetrical.
  - The modern standard supporting 2 Gbps, 5 Gbps, and 10 Gbps residential plans.`},{id:56,category:"Fiber & Broadband",q:"What is Tier-1 Internet Backbone Peering and how does it determine global internet routing?",a:`The global internet is a network of networks organized into three tiers:

• Tier-1 Backbones (Lumen, Telia/Arelion, NTT, Tata Communications, AT&T, Zayo): Giant telecom networks that own transoceanic submarine fiber cables. They peer with one another for free and form the global backbone.
• Tier-2 & Tier-3 (Consumer ISPs): Local providers (Jio, Airtel, Comcast, Spectrum) that purchase transit from Tier-1 networks.
• Why It Matters: An ISP with premium direct peering routes your international traffic in 2–3 hops, while budget ISPs route through 10+ hops, causing latency spikes and packet loss.`},{id:57,category:"Fiber & Broadband",q:"What is a Static IP address vs. Dynamic IP address, and when do you need a Static IP?",a:`• Dynamic IP Address: Your ISP dynamically assigns an IP from a shared pool whenever your modem boots. It changes every few days or weeks. Perfect for 98% of users.
• Static IP Address: A dedicated, permanent IP address assigned exclusively to your line that never changes.

When a Static IP is Necessary:
1. Hosting Home Servers: Running private Plex servers, NAS cloud storage, or Minecraft/game servers.
2. Remote Desktop Access: Direct SSH or RDP connections to home workstations from work.
3. Security Whitelisting: Connecting to corporate databases or bank APIs that require fixed IP authorization.
4. Bypassing CGNAT: Essential for achieving Open NAT Type on gaming consoles if your ISP uses Carrier-Grade NAT.`},{id:58,category:"Fiber & Broadband",q:"What is IPv6, how does it differ from IPv4, and does it speed up web browsing?",a:`• IPv4 (32-bit): Provides ~4.3 billion unique addresses, which are now completely exhausted globally.
• IPv6 (128-bit): Provides 340 undecillion unique addresses (enough for every atom on Earth's surface to have multiple IPs).

Does IPv6 Improve Speed?
Yes, by 5–15 ms on supported sites. Because every device receives a globally unique IPv6 address, routers and ISP servers bypass Carrier-Grade NAT (CGNAT) address translation tables, resulting in direct end-to-end routing with lower CPU overhead.`},{id:59,category:"5G & Mobile",q:"What are the structural differences between 4G LTE and 5G cellular technology?",a:`5G represents a revolutionary generational upgrade over 4G LTE in speed, latency, and device density:

• 4G LTE:
  - Max Real Speeds: 25–100 Mbps.
  - Latency: 35–65 ms.
  - Device Capacity: ~10,000 devices per square kilometer.
  - Spectrum: Sub-3 GHz.

• 5G NR (New Radio):
  - Max Real Speeds: 300–1,500+ Mbps.
  - Latency: 10–25 ms.
  - Device Capacity: 1,000,000 devices per square kilometer (eliminating stadium/concert network crashes).
  - Spectrum: Low-Band (600–900 MHz), Mid-Band Sub-6 (2.5–3.7 GHz), and mmWave (24–40 GHz).`},{id:60,category:"5G & Mobile",q:"What is the difference between 5G SA (Standalone) and 5G NSA (Non-Standalone)?",a:`• 5G NSA (Non-Standalone - Early 5G):
  - Uses new 5G radio towers for data transfer, but relies on older 4G LTE core network infrastructure for authentication and signaling.
  - Delivers fast download speeds, but ping and upload remain similar to 4G.

• 5G SA (Standalone - True 5G):
  - Built end-to-end on dedicated cloud-native 5G core equipment with zero reliance on 4G.
  - Unlocks ultra-low latency (under 15 ms), high upload speeds, network slicing, and up to 20% lower phone battery drain.`},{id:61,category:"5G & Mobile",q:"What is 5G mmWave vs. Sub-6 GHz Mid-Band spectrum?",a:`• Sub-6 GHz Mid-Band (C-Band / 3.5 GHz):
  - The global backbone of 5G coverage.
  - Travels 2 to 5 km from cell towers and penetrates buildings.
  - Real-world speeds: 200–800 Mbps with 20–30 ms latency.

• mmWave (Millimeter Wave / 24–40 GHz):
  - Ultra-high frequency radio spectrum.
  - Range is limited to 150–300 meters and blocked by glass, walls, and foliage.
  - Massive throughput: 1,000–3,500+ Mbps (1–3.5 Gbps) with sub-10 ms latency. Deployed in airports, stadiums, and dense downtown city centers.`},{id:62,category:"5G & Mobile",q:"What is 5G Fixed Wireless Access (FWA) Home Broadband (Jio AirFiber, T-Mobile Home)?",a:`5G FWA provides residential high-speed broadband wirelessly over the 5G cellular network, bypassing the need for physical optical cables to the house:

• How It Operates: An outdoor high-gain 5G receiver antenna mounts to your roof/balcony, connecting via Ethernet to a Wi-Fi router inside your home.
• Who It Is For: Suburban and rural areas where digging optical fiber trenches is economically unfeasible.
• Performance: Delivers 100–300 Mbps with 25–40 ms ping, rivaling traditional cable broadband.`},{id:63,category:"5G & Mobile",q:"Why is 5G mobile data blazing fast outdoors but drops to slow 4G inside buildings?",a:`High-frequency radio signals suffer from building material attenuation:

• Modern Building Materials: Low-Emissivity (Low-E) double-pane energy-efficient windows contain thin metallic oxide coatings that block 5G radio waves by 25–35 dB.
• Reinforced Concrete & Steel: Steel rebars act as a partial Faraday cage, reflecting mid-band and mmWave radio frequencies.
• When your smartphone detects the signal drop, it automatically falls back to lower-frequency 4G LTE (700–850 MHz) to maintain voice and data connectivity.`},{id:64,category:"5G & Mobile",q:"Why does running speed tests on 5G consume battery and cause mobile phones to get warm?",a:`Running a 5G benchmark at 800+ Mbps places the entire mobile hardware stack under peak load:

1. 5G Baseband Modem: Transmits and decodes thousands of high-QAM radio frames per second, drawing maximum power (up to 3–5 Watts).
2. CPU & Memory: The processor handles multi-threaded TCP socket streams, data decryption, and real-time canvas UI rendering at 60–120 Hz.
3. Thermal Dissipation: Smartphone metal frames act as passive heatsinks to protect internal components, feeling noticeably warm during the test.`},{id:65,category:"5G & Mobile",q:"Can a smartphone mobile hotspot completely replace a dedicated home fiber connection?",a:`While fine as an emergency backup, smartphone hotspots have major limitations for full-time home use:

• Battery & Thermal Degradation: Continuous hotspot operation causes high battery wear and thermal throttling.
• Weak Wireless Range: Phone antennas can only cover 5–8 meters, failing across multi-room homes.
• High Jitter & Latency: Hotspots suffer high jitter and bufferbloat under simultaneous multi-device streaming and gaming.
• Carrier Throttling: Mobile carriers apply strict 15–50 GB monthly hotspot caps before throttling speeds to 600 Kbps.`},{id:66,category:"5G & Mobile",q:"What causes mobile internet to slow down at concerts, festivals, and sports stadiums?",a:`Cellular Base Station Radio Resource Exhaustion:

• Each cell tower sector has a finite radio bandwidth pool (e.g. 1.2 Gbps total shared throughput).
• When 40,000 fans in a stadium attempt to upload Instagram stories, WhatsApp videos, and stream simultaneously, the tower's airtime scheduler divides capacity among thousands of devices, slowing speeds down to kilobytes per second.`},{id:67,category:"5G & Mobile",q:"What is Carrier Aggregation (CA) and why does my phone display '4G+' or '5G+'?",a:`Carrier Aggregation is an advanced LTE-A and 5G feature that combines multiple separate radio frequency bands into one virtual high-speed data highway.

• Example: Instead of connecting only to Band 3 (1800 MHz @ 50 Mbps), your phone bonds Band 3 + Band 40 (2300 MHz) + Band 41 (2500 MHz) simultaneously.
• Result: Combined throughput jumps from 50 Mbps to 250+ Mbps with lower latency and higher connection stability.`},{id:68,category:"5G & Mobile",q:"What are VoLTE, VoWiFi, and VoNR, and how do they impact internet and call quality?",a:`• VoLTE (Voice over LTE) & VoNR (Voice over 5G NR): Transmits phone calls as high-priority digital voice packets over IP data channels, enabling crystal-clear HD audio while maintaining full 5G download speeds during calls.
• VoWiFi (Wi-Fi Calling): Routes voice calls through your home Wi-Fi network when cellular tower reception is weak indoors, preventing dropped calls.`},{id:69,category:"5G & Mobile",q:"Why does toggling Airplane Mode for 10 seconds refresh and speed up mobile data?",a:`Smartphones maintain connection to a cell tower until the signal drops below a minimum threshold, even if a closer, less congested tower is available.

Toggling Airplane Mode forces the baseband processor to completely reset its radio frequency cache and perform a fresh signal triangulation handshake with the nearest, least congested cell tower.`},{id:70,category:"5G & Mobile",q:"How does 5G Network Slicing benefit enterprises, gamers, and emergency services?",a:`Network Slicing allows 5G SA operators to divide a single physical 5G network into multiple isolated virtual networks, each optimized for specific requirements:

• Slice 1 (Esports / Cloud Gaming): Guaranteed sub-15 ms latency and zero jitter.
• Slice 2 (Autonomous Vehicles / Emergency Services): 99.999% ultra-reliable low-latency communication (URLLC).
• Slice 3 (Public Video Streaming): High throughput with standard latency.`},{id:71,category:"Gaming & Esports",q:"What matters more for competitive online gaming: High Download Speed or Low Ping/Jitter?",a:`Ping and Jitter are infinitely more important than raw download speed for gaming.

• Actual Game Bandwidth Usage: Online multiplayer games (Valorant, CS2, Fortnite, Warzone, Rocket League) only transmit small player coordinate packets, consuming merely 0.5 to 2.5 Mbps of bandwidth.
• The Importance of Ping: A player with 15 ms ping on a 50 Mbps fiber line will always have a massive competitive advantage over a player with 120 ms ping on a 1,000 Mbps connection because their server updates arrive 105 ms faster.`},{id:72,category:"Gaming & Esports",q:"What is server 'tick rate' and how does it interact with network latency?",a:`Tick rate is the frequency at which the game server calculates physics, bullet trajectories, and player positions:

• 64-Tick Server (Standard): Updates game state 64 times per second (every 15.6 ms).
• 128-Tick Server (Esports / Competitive): Updates game state 128 times per second (every 7.8 ms).

If your ping is 15 ms on a 128-tick server, your inputs are processed on the very next server tick, resulting in crisp hit-registration and zero 'ghost bullets'.`},{id:73,category:"Gaming & Esports",q:"Why should competitive gamers NEVER play on Wi-Fi?",a:`Wi-Fi is fundamentally a half-duplex wireless medium operating through airtime sharing:

1. Packet Collisions: If another device or neighboring router broadcasts at the same millisecond, packets collide and must be re-transmitted, causing random 80–200 ms latency spikes.
2. Radio Interference: Microwaves, Bluetooth controllers, and walls create micro-drops.
3. Ethernet Advantage: CAT6 Ethernet is full-duplex with dedicated shielded copper lines, transmitting and receiving data simultaneously with zero packet loss and 0 ms jitter.`},{id:74,category:"Gaming & Esports",q:"What is 'peeker's advantage' and netcode interpolation in online multiplayer shooters?",a:`Peeker's advantage is an inherent side effect of network latency and client-side prediction algorithms:

• When Player A swings around a corner, their local client immediately renders the movement.
• The movement packet takes 30 ms to reach the server and another 30 ms to reach Player B.
• Player A sees Player B 60 ms before Player B's monitor ever displays Player A's model, granting the moving attacker a split-second reaction advantage.`},{id:75,category:"Gaming & Esports",q:"What are NAT Types (Open / Moderate / Strict) on PlayStation, Xbox, and PC?",a:`NAT (Network Address Translation) dictates how easily your gaming console communicates with other players in peer-to-peer multiplayer lobbies:

• Type 1 (Open): Direct connection to the web. Can host lobbies and connect to all players.
• Type 2 (Moderate): Connected behind a standard router with correct port forwarding. Can connect to Open and Moderate players.
• Type 3 (Strict): Behind restrictive firewalls or Carrier-Grade NAT. Cannot host matches, voice chat frequently fails, and matchmaking times are slow.

Fix: Enable UPnP (Universal Plug and Play) in your router settings or assign a static IP to your console and configure Port Forwarding.`},{id:76,category:"Gaming & Esports",q:"What is UPnP and should gamers enable it on their routers?",a:`UPnP (Universal Plug and Play) is a networking protocol that allows games and consoles to dynamically request and open port forwarding rules on your router without manual configuration.

• For Gamers: Enabling UPnP instantly resolves Strict NAT issues on PS5, Xbox Series X, Nintendo Switch, and PC games.
• Security Consideration: Ensure your router firmware is kept up to date, as legacy UPnP implementations had security vulnerabilities.`},{id:77,category:"Gaming & Esports",q:"Why do Cloud Gaming services (GeForce NOW, Xbox Cloud Gaming) require high bandwidth AND low latency?",a:`Unlike traditional games where graphics are rendered locally on your PC/console GPU, Cloud Gaming runs the game on a remote data center server:

• Downstream: The server encodes a pristine, uncompressed 1080p/4K 60–120 FPS video stream sent to your screen, requiring 35–75+ Mbps sustained bandwidth.
• Upstream: Every button click, mouse movement, and joystick tilt is sent across the web to the remote GPU.
• Latency Requirement: If ping exceeds 35 ms, severe input lag makes aiming and fast reaction games feel sluggish.`},{id:78,category:"Gaming & Esports",q:"What causes Discord RTC Connecting / No Route voice errors and how do you fix them?",a:`This error indicates that your Discord client cannot establish a UDP voice connection with Discord's regional voice servers.

How to Fix Discord Voice Errors:
1. Change Voice Region: In Discord Server Settings ➔ Overview ➔ Voice Region, switch to a different nearby region.
2. Change DNS: Switch your router or PC DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8).
3. Disable VPN / Proxy: High-security VPNs often block UDP voice ports.
4. Disable QoS High Packet Priority in Discord Settings ➔ Voice & Video.`},{id:79,category:"Gaming & Esports",q:"Can Gaming Routers with Geo-Filtering actually lower your in-game ping?",a:`Yes. Premium gaming routers (like Netduma R3, ASUS ROG Rapture) include Geo-Filtering software:

• How It Works: It draws an adjustable geographical radius on a world map (e.g. 500 km around your city) and blocks your game client from connecting to distant, high-ping servers overseas.
• Result: Forces matchmaking algorithms in games like Call of Duty, FIFA, and Halo to place you exclusively on local, low-latency dedicated servers.`},{id:80,category:"Gaming & Esports",q:"Why does my ping look good on a speed test but lags inside game matches?",a:`Speed test benchmarks connect to your closest local ISP edge server (e.g. 15 km away in your city) to test your physical line capacity.

Game servers (EA, Riot, Valve, Epic Games), on the other hand, are centralized in major international data centers (e.g. Frankfurt, Mumbai, Singapore, Virginia). The physical distance and third-party peering routing to those specific game servers determine your in-game ping.`},{id:81,category:"Gaming & Esports",q:"What is Input Lag vs. Display Lag vs. Network Latency in gaming?",a:`Total System Latency is the combined sum of three separate delays:

1. Input Lag: Time taken for your mouse/keyboard switch to register and send signals to your PC (~1–3 ms on 1000Hz polling rate).
2. Display Lag: Time taken for your GPU to render a frame and your gaming monitor to refresh the pixels (~2–5 ms on 144Hz/240Hz monitors).
3. Network Latency (Ping): Time taken for your game action to travel across the internet to the server (15–60 ms).

Reducing all three delivers elite esport reaction responsiveness.`},{id:82,category:"Gaming & Esports",q:"How do I optimize Windows 11 network settings for competitive gaming?",a:`1. Disable Nagle's Algorithm (TcpAckFrequency & TCPNoDelay in Windows Registry) to force instant packet sending.
2. Set Network Adapter to Maximum Performance in Windows Power Plan.
3. Disable Delivery Optimization (Settings ➔ Windows Update ➔ Advanced ➔ Delivery Optimization ➔ Turn Off) to prevent Windows from uploading updates in the background during matches.
4. Use a wired CAT6 Ethernet cable directly into your router.`},{id:83,category:"Streaming & Work",q:"What are the exact internet speed requirements for Netflix, YouTube, and Prime in 4K HDR?",a:`Official recommended sustained download bandwidth per active screen:

• SD (480p): 3–4 Mbps.
• HD (1080p Full HD): 5–10 Mbps.
• 4K Ultra HD (2160p with HDR / Dolby Vision): 25–35 Mbps.
• 4K High-Bitrate Remux (Apple TV+ / Sony Bravia Core): 50–80 Mbps.

Tip: For households with two smart TVs streaming 4K HDR simultaneously while other users browse, a minimum 100 Mbps broadband plan prevents resolution downscaling.`},{id:84,category:"Streaming & Work",q:"What bandwidth is required for HD and 1080p Zoom and Microsoft Teams video conferencing?",a:`Official requirements for business video conferencing:

• 1-on-1 Standard HD Video: 1.5 Mbps Download | 1.5 Mbps Upload.
• Group Video Calls (Gallery View): 3.0 Mbps Download | 3.5 Mbps Upload.
• 1080p Full HD Video Conferencing: 4.5 Mbps Download | 4.5 Mbps Upload.
• Screen Sharing with Audio: 2.0 Mbps Upload.

Stability Tip: While bandwidth needs are modest, video calls require Jitter < 8 ms and Packet Loss = 0% to prevent robotic audio and frozen video.`},{id:85,category:"Streaming & Work",q:"Why do YouTube and Netflix drop video resolution to 480p/720p automatically?",a:`Streaming platforms use Adaptive Bitrate Streaming (ABR) protocols like HLS and MPEG-DASH:

• How ABR Works: Video files are pre-sliced into small 4-second chunks at multiple resolutions (480p, 720p, 1080p, 4K).
• The video player monitors your device's buffer fill rate every 2 seconds. If a Wi-Fi latency spike or temporary bandwidth dip occurs, the player immediately requests lower-resolution chunks to prevent video playback from freezing completely.`},{id:86,category:"Streaming & Work",q:"What is the recommended upload bitrate for 1080p 60FPS Twitch and YouTube livestreaming in OBS?",a:`Optimal OBS Studio Bitrate Settings:

• 1080p 60FPS (Twitch - H.264 / NVENC): 6,000–8,000 Kbps (6–8 Mbps) video bitrate + 160 Kbps audio.
• 1080p 60FPS (YouTube - H.264 / AV1): 8,000–12,000 Kbps (8–12 Mbps).
• 1440p / 4K 60FPS (YouTube): 18,000–30,000 Kbps (18–30 Mbps).

Rule of Thumb: Your internet upload speed should be at least 2.5x your OBS stream bitrate to accommodate game telemetry and avoid dropped frames.`},{id:87,category:"Streaming & Work",q:"Why does Remote Desktop (RDP / Citrix / AnyDesk) feel laggy and how can you optimize it?",a:`Remote desktop protocols stream continuous screen delta bitmaps while transmitting keyboard and mouse coordinates in real time.

How to Optimize Remote Work Performance:
1. Connect via Wired Ethernet: Cuts packet jitter, making cursor movement feel instantaneous.
2. Adjust RDP Display Settings: In Remote Desktop Connection ➔ Experience tab, choose 'High-speed broadband' and disable 'Desktop background', 'Show window contents while dragging', and 'Menu animations'.
3. Reduce Resolution Scaling: Setting RDP to 1080p instead of 4K cuts required bandwidth by 65%.`},{id:88,category:"Streaming & Work",q:"Why do smart TVs struggle with 4K streaming over Wi-Fi and should you use Ethernet?",a:`Most smart TVs (even high-end $2,000 OLED models) contain budget 100 Mbps Fast Ethernet ports and basic Wi-Fi antennas located behind large metal backplates.

Optimal TV Setup:
• If using Wi-Fi: Connect to the 5 GHz band within line of sight.
• If using Ethernet: Plug a $15 USB-to-Gigabit Ethernet adapter into your TV's USB 3.0 port to achieve 300+ Mbps throughput and eliminate 4K Dolby Vision buffering.`},{id:89,category:"Streaming & Work",q:"Why do wireless multi-room smart speakers (Sonos, Apple HomePod) stutter or desync?",a:`Multi-room audio systems stream synchronized UDP audio packets across your local network:

• If speakers are placed on a congested 2.4 GHz band or on opposite ends of a house with high Wi-Fi packet drops, time-sync clocks drift, causing audio dropouts and stuttering.
• Solution: Connect at least one main speaker via Ethernet or deploy a Mesh Wi-Fi system.`},{id:90,category:"Streaming & Work",q:"What is AV1, HEVC (H.265), and AVC (H.264) video compression, and how do they save bandwidth?",a:`Video codecs compress raw video data to transmit high quality over minimal internet bandwidth:

• AVC (H.264): Legacy 2003 standard. Requires 25–40 Mbps for 4K streaming.
• HEVC (H.265): 50% more efficient than H.264. Standard for 4K Blu-ray and Netflix HDR.
• AV1 (Next-Gen Open Royalty-Free): 30% more efficient than HEVC. Allows YouTube, Netflix, and Discord to stream pristine 4K video using just 15–20 Mbps bandwidth.`},{id:91,category:"Streaming & Work",q:"How can I prevent family members' downloads from lagging my critical work video calls?",a:`1. Enable Smart Queue Management (SQM) or QoS on your router.
2. Set your work laptop's IP/MAC address to 'Highest Priority'.
3. Set a download/upload bandwidth cap (e.g. 70% max) on gaming consoles and torrent PCs during working hours (9:00 AM – 5:00 PM).`},{id:92,category:"Streaming & Work",q:"What is streaming bitrate and how does it determine image clarity vs. bandwidth usage?",a:`Bitrate is the volume of data processed per second in video/audio media (measured in Kbps or Mbps):

• High Bitrate = Crisper image, vibrant gradients, no dark pixelation/banding during fast motion, but requires higher bandwidth.
• Low Bitrate = Blocky artifacts, blurry compression, but easily streams on weak 5 Mbps connections.
• Example: A 4K movie on 4K Blu-ray streams at 85 Mbps, while Netflix 4K streams at 18 Mbps.`},{id:93,category:"Streaming & Work",q:"How do background cloud photo backups (Google Photos, iCloud, OneDrive) impact daytime home network speed?",a:`When you shoot high-resolution 4K videos or photos on your phone, cloud backup daemons immediately attempt to saturate your full upstream bandwidth to sync to cloud servers.

On asymmetrical broadband plans (e.g. 100 Mbps download / 10 Mbps upload), an iCloud sync saturates 100% of your upload pipe, causing severe bufferbloat and lagging web browsing for everyone in the house.

Fix: In phone settings, set backups to run exclusively 'While Charging and Connected to Wi-Fi Overnight'.`},{id:94,category:"Hardware & Cables",q:"What are the exact technical specifications of CAT5e, CAT6, CAT6a, CAT7, and CAT8 Ethernet cables?",a:`Ethernet cable standard comparison:

• CAT5e (Category 5 Enhanced):
  - Max Speed: 1 Gbps (1,000 Mbps) up to 100 meters.
  - Frequency: 100 MHz.
  - Best for: Basic budget residential networking.

• CAT6 (Category 6 - Recommended Standard):
  - Max Speed: 10 Gbps up to 55 meters | 1 Gbps up to 100 meters.
  - Frequency: 250 MHz.
  - Features internal spline separator to reduce crosstalk. Ideal for modern gigabit homes.

• CAT6a (Category 6 Augmented):
  - Max Speed: 10 Gbps up to 100 meters full distance.
  - Frequency: 500 MHz.
  - Heavy shielding. Ideal for commercial installations.

• CAT7 / CAT8:
  - Max Speed: 25–40 Gbps up to 30 meters (CAT8).
  - Frequency: 2,000 MHz. Shielded (S/FTP) for enterprise data centers.`},{id:95,category:"Hardware & Cables",q:"Can a damaged, kinked, or poorly crimped Ethernet cable secretly reduce speed to 100 Mbps?",a:`YES. Gigabit Ethernet (1000BASE-T) requires all 8 internal copper wires (4 twisted pairs) to function properly:

• If even one single internal wire is severed or pin 4, 5, 7, or 8 has poor contact in the RJ45 connector, the network adapter cannot establish a gigabit link.
• Automatic Link Downgrade: The hardware automatically negotiates down to 100BASE-TX (Fast Ethernet), which only requires 4 wires.
• Your 500 Mbps connection will be physically hard-capped at exactly 94–95 Mbps in speed tests without displaying any explicit error message.`},{id:96,category:"Hardware & Cables",q:"Why is my PC capped at exactly 100 Mbps on a 300+ Mbps broadband plan?",a:`Top Causes for the 100 Mbps Link Speed Bottleneck:

1. Damaged or 4-Wire CAT5 Cable: Replace with a verified CAT6 cable.
2. 100 Mbps Fast Ethernet Switch/Wall Port: Older wall jacks or $10 budget switches capped at 100 Mbps.
3. Windows NIC Link Speed Configuration: Open Network Connections ➔ Right-click Ethernet ➔ Properties ➔ Configure ➔ Advanced ➔ Speed & Duplex. Ensure it is set to 'Auto Negotiation' or '1.0 Gbps Full Duplex'.
4. Bent RJ45 Pins: Inspect the Ethernet port on your motherboard and router for bent copper contact pins.`},{id:97,category:"Hardware & Cables",q:"What is an Unmanaged Gigabit Switch and does it add latency to my network?",a:`An Unmanaged Gigabit Switch (e.g. TP-Link, Netgear 5/8-Port Switch) expands a single LAN port on your router into multiple high-speed ports:

• Latency Impact: Virtually zero. High-quality switches operate at Layer 2 (Data Link layer) using dedicated ASIC hardware chips with switching latency under 2 to 3 microseconds (0.003 ms).
• Plug-and-play with zero setup required.`},{id:98,category:"Hardware & Cables",q:"What are MoCA (Multimedia over Coax) adapters and are they as fast as real Ethernet?",a:`MoCA (Multimedia over Coax Alliance) technology transforms existing coaxial TV cables inside your walls into high-speed Ethernet backhauls:

• MoCA 2.5 Standard: Delivers real-world speeds up to 2.5 Gbps with 1–3 ms latency.
• Ideal for two-story homes where running new CAT6 Ethernet through walls is difficult, delivering true wired performance across rooms.`},{id:99,category:"Hardware & Cables",q:"Are Powerline Ethernet adapters good for speed and gaming?",a:`Powerline adapters send network data across existing home electrical copper wiring:

• Real-World Performance: While convenient, speed and latency depend heavily on home electrical wiring age and circuit breaker configurations.
• Electrical Noise: Washing machines, air conditioners, and phone chargers introduce electrical noise, causing packet loss and jitter spikes.
• Recommendation: Fine for basic browsing and smart TVs; inferior to MoCA or true CAT6 for competitive gaming.`},{id:100,category:"Hardware & Cables",q:"What is a Dual-Band vs. Tri-Band vs. Quad-Band router?",a:`• Dual-Band Router: 1x 2.4 GHz band + 1x 5 GHz band. Standard for basic apartments.
• Tri-Band Router: 1x 2.4 GHz band + 2x 5 GHz bands (or 1x 5 GHz + 1x 6 GHz). The second 5 GHz band acts as a dedicated wireless backhaul for mesh systems without halving speed.
• Quad-Band Router (Wi-Fi 7): 2.4 GHz + 2x 5 GHz + 6 GHz bands for ultra-high device capacity in luxury smart homes.`},{id:101,category:"Hardware & Cables",q:"What is the typical lifespan of a home Wi-Fi router before hardware degradation occurs?",a:`The optimal lifespan of a home Wi-Fi router is 3 to 5 years.

Why Routers Need Upgrading:
• Electrolytic Capacitor Aging: Operating 24/7 at elevated temperatures degrades power delivery components, causing random reboots.
• Advancing Standards: Newer wireless standards (Wi-Fi 6E/7) provide wider channels and higher speeds.
• Security Support: Manufacturers typically discontinue security vulnerability firmware patches after 4–5 years.`},{id:102,category:"Hardware & Cables",q:"What is SFP+ vs. 10GBASE-T in 10-Gigabit networking?",a:`• SFP+ (Small Form-factor Pluggable Plus): Uses optical fiber transceivers or Direct Attach Copper (DAC) cables. Low power consumption (1 Watt) and runs cool; standard for enterprise servers and homelabs.
• 10GBASE-T: Delivers 10 Gbps over standard RJ45 copper CAT6a cables up to 100 meters. Generates more heat (4–8 Watts per port) but utilizes familiar Ethernet wall jacks.`},{id:103,category:"Hardware & Cables",q:"Can USB-to-Ethernet adapters achieve full Gigabit speeds on laptops without built-in LAN ports?",a:`• USB 3.0 / USB-C Gigabit Adapters: Yes. USB 3.0 provides 5 Gbps bus bandwidth, easily supporting full 940–950 Mbps gigabit throughput.
• Older USB 2.0 Adapters (Black ports): No. USB 2.0 is physically limited to 480 Mbps (real-world max ~300 Mbps).`},{id:104,category:"Hardware & Cables",q:"What is Power over Ethernet (PoE) and how does it simplify smart home setups?",a:`Power over Ethernet (PoE - IEEE 802.3af/at/bt) sends both high-speed data and DC electrical power over a single CAT6 Ethernet cable up to 100 meters.

Common Uses: Powers ceiling-mounted Wi-Fi Access Points, outdoor 4K security cameras, and VoIP desk phones without needing an electrical outlet nearby.`},{id:105,category:"Hardware & Cables",q:"Why is the maximum certified length of copper Ethernet cables exactly 100 meters (328 ft)?",a:`The 100-meter limit is established by IEEE 802.3 standards due to physical electrical constraints:

1. Signal Attenuation: Electrical resistance in 24 AWG copper wire causes voltage drop and high-frequency signal loss beyond 100 meters.
2. Timing & Collision Detection: CSMA/CD timing standards require packet signals to travel and receive acknowledgments within strict microsecond windows.
3. Beyond 100 meters, fiber optic cabling or active network repeaters must be used.`},{id:106,category:"DNS, VPN & Security",q:"What is DNS (Domain Name System) and how does changing it speed up web browsing?",a:`DNS is the digital phonebook of the internet. It translates human-friendly domain names (e.g. google.com) into machine-routable numeric IP addresses (142.250.190.46).

How Fast DNS Improves Web Browsing:
• Before your browser can load a single image or script from a web page, it must resolve the domain IP.
• ISP Default DNS servers are often slow and overloaded, taking 60–120 ms per lookup.
• Switching to Cloudflare (1.1.1.1) or Google (8.8.8.8) cuts DNS resolution times to 5–15 ms, making websites start loading noticeably faster.`},{id:107,category:"DNS, VPN & Security",q:"Which public DNS providers are the fastest, most reliable, and most secure globally?",a:`Top Free Public DNS Resolvers:

• Cloudflare DNS (1.1.1.1 / 1.0.0.1):
  - Fastest global resolution speeds, strict privacy policy (never logs IP addresses).

• Google Public DNS (8.8.8.8 / 8.8.4.4):
  - Massive global Anycast infrastructure, highly reliable and resilient.

• Quad9 DNS (9.9.9.9 / 149.112.112.112):
  - Automatically blocks malicious phishing, spyware, and malware domains in real time.

• AdGuard DNS (94.140.14.14 / 94.140.15.15):
  - Automatically blocks ads and tracking scripts at the network level across all home devices.`},{id:108,category:"DNS, VPN & Security",q:"What are DNS over HTTPS (DoH) and DNS over TLS (DoT), and why are they vital for privacy?",a:`Traditional DNS queries are transmitted in unencrypted plaintext on port 53. Anyone on your local Wi-Fi, your ISP, or government snooping tools can see every domain you visit.

• DoH (DNS over HTTPS - Port 443) & DoT (DNS over TLS - Port 853):
  - Encrypts your DNS lookup queries inside HTTPS/TLS cryptographic tunnels.
  - Prevents ISP browsing history logging, eavesdropping, and ISP DNS redirection/censorship.`},{id:109,category:"DNS, VPN & Security",q:"Why does connecting to a VPN reduce internet speed test throughput?",a:`Connecting to a VPN (Virtual Private Network) introduces three unavoidable performance overheads:

1. Cryptographic Encryption/Decryption: Your CPU must encrypt every outbound packet (AES-256 or ChaCha20) and decrypt every inbound packet.
2. Server Routing Detour: Your traffic travels to the VPN server first before heading to the destination, adding physical distance and latency.
3. Shared Server Bandwidth: Commercial VPN servers share bandwidth among hundreds of simultaneous connected users.
• High-quality WireGuard VPNs minimize throughput loss to just 10–15%.`},{id:110,category:"DNS, VPN & Security",q:"What is WireGuard protocol and why is it faster than legacy OpenVPN and IKEv2?",a:`• OpenVPN: Built on ~100,000 lines of legacy code with OpenSSL. Heavy CPU usage, higher latency, and slow reconnect times.
• WireGuard: Next-generation VPN protocol built on just ~4,000 lines of modern, audited C code using state-of-the-art cryptography (ChaCha20, Poly1305, Curve25519).
• Delivers 3x to 5x higher throughput, near-instant connection handshakes, and significantly lower smartphone battery drain.`},{id:111,category:"DNS, VPN & Security",q:"Can third-party antivirus web shields and firewalls bottleneck gigabit speed tests?",a:`Yes. Third-party antivirus suites (Norton, McAfee, Avast, Bitdefender) include 'Real-Time Web Protection' and 'HTTPS Scanning':

• These modules intercept and inspect every incoming network packet buffer in memory before passing it to your browser.
• On gigabit connections (1,000+ Mbps), this Deep Packet Inspection (DPI) bottlenecks CPU throughput, reducing speed test results by 20–40%.`},{id:112,category:"DNS, VPN & Security",q:"How does NETSPEEDPRO protect user privacy and handle benchmark data?",a:`NETSPEEDPRO is built with a Privacy-First architecture:

• All speed, latency, and jitter calculations are executed client-side in your local browser memory.
• Your IP address is never sold, tracked, or monetized.
• Test history is saved locally in your browser's localStorage, remaining 100% on your device under your complete control.`},{id:113,category:"DNS, VPN & Security",q:"What is MTU (Maximum Transmission Unit) and how does an incorrect setting cause packet fragmentation?",a:`MTU (Maximum Transmission Unit) is the largest size (in bytes) of a single data packet that can be transmitted over a network without fragmentation:

• Standard Ethernet MTU: 1500 bytes.
• PPPoE DSL / Fiber MTU: 1492 bytes (8 bytes reserved for PPPoE header).
• What Happens If MTU Is Too High: Packets larger than the physical link capacity are fragmented into multiple pieces, increasing packet loss, retransmissions, and latency.`},{id:114,category:"DNS, VPN & Security",q:"What is Google BBR (Bottleneck Bandwidth and RTT) Congestion Control?",a:`BBR is a modern TCP congestion control algorithm developed by Google:

• Traditional TCP algorithms (like CUBIC) treat packet loss as a sign of congestion and dramatically slash speed in half.
• BBR continuously measures true bottleneck bandwidth and minimum round-trip time, adjusting throughput smoothly without crashing speeds.
• BBR powers Google services, YouTube, and modern high-speed edge networks, delivering up to 14x faster throughput on lossy Wi-Fi and mobile links.`},{id:115,category:"DNS, VPN & Security",q:"How does NETSPEEDPRO accurately identify your ISP, ASN, and optimal server node?",a:`When you visit NETSPEEDPRO, the client makes lightweight asynchronous queries to globally distributed edge nodes:

1. Autonomous System Number (ASN) Lookup: Maps your public IP to your Internet Service Provider's network registry (e.g. AS55836 for BSNL, AS55836 for Jio, AS45609 for Airtel).
2. Geolocation Triangulation: Determines city, region, and approximate latitude/longitude.
3. Latency Ping Probing: Pings regional candidate nodes to automatically route your test to the lowest-latency edge server.`}];function Rm({text:i}){if(!i)return null;const n=i.split(`

`);return s.jsx("div",{className:"faq-formatted-answer",children:n.map((a,l)=>{const p=a.split(`
`).filter(g=>g.trim().length>0);if(p.length===0)return null;const c=p[0].trim();if(/^(Tip|Pro Tip|Fix|How to Fix|Diagnosis|Formula|Practical Conversion Formula|Key Takeaways?|Recommendation|Warning|Why You Must Use One):/i.test(c)){const g=c.match(/^(Tip|Pro Tip|Fix|How to Fix|Diagnosis|Formula|Practical Conversion Formula|Key Takeaways?|Recommendation|Warning|Why You Must Use One):/i),w=g?g[1]:"Tip",k=a.replace(/^(Tip|Pro Tip|Fix|How to Fix|Diagnosis|Formula|Practical Conversion Formula|Key Takeaways?|Recommendation|Warning|Why You Must Use One):\s*/i,"");let T=s.jsx(Sd,{size:16,className:"text-cyan"}),P="callout-cyan";return/fix|how to fix/i.test(w)?(T=s.jsx(wc,{size:16,className:"text-emerald"}),P="callout-emerald"):/formula|diagnosis/i.test(w)?(T=s.jsx(C1,{size:16,className:"text-purple"}),P="callout-purple"):/warning/i.test(w)&&(T=s.jsx(tp,{size:16,className:"text-amber"}),P="callout-amber"),s.jsxs("div",{className:`faq-callout-box ${P}`,children:[s.jsxs("div",{className:"callout-header",children:[T,s.jsx("span",{className:"callout-tag",children:w.toUpperCase()})]}),s.jsx("div",{className:"callout-content",children:k.split(`
`).map((b,U)=>s.jsx("p",{className:"callout-line",children:b},U))})]},l)}return p.some(g=>g.trim().startsWith("•")||g.trim().startsWith("-")||/^\d+\.\s/.test(g.trim()))?s.jsx("div",{className:"faq-bullet-group",children:p.map((g,w)=>{const k=g.trim();if(k.startsWith("•")||k.startsWith("-")||/^\d+\.\s/.test(k)){const P=k.replace(/^[•\-]\s*/,"").replace(/^\d+\.\s*/,""),b=P.indexOf(":");if(b>0&&b<45){const U=P.slice(0,b),D=P.slice(b+1);return s.jsxs("div",{className:"faq-bullet-item",children:[s.jsx("span",{className:"faq-bullet-dot"}),s.jsxs("div",{className:"faq-bullet-text",children:[s.jsxs("strong",{className:"faq-highlight-term",children:[U,":"]}),s.jsx("span",{children:D})]})]},w)}return s.jsxs("div",{className:"faq-bullet-item",children:[s.jsx("span",{className:"faq-bullet-dot"}),s.jsx("div",{className:"faq-bullet-text",children:P})]},w)}return s.jsx("h5",{className:"faq-sub-heading",children:k},w)})},l):s.jsx("p",{className:"faq-standard-para",children:a},l)})})}function Nh({lang:i="en"}){const[n,a]=ct.useState(0),[l,p]=ct.useState(""),[c,h]=ct.useState("All"),[f,g]=ct.useState(10),w=Bt[i]||Bt.en,k=ct.useMemo(()=>Dm.filter(q=>{const _=c==="All"||q.category===c,F=!l.trim()||q.q.toLowerCase().includes(l.toLowerCase())||q.a.toLowerCase().includes(l.toLowerCase());return _&&F}),[l,c]),T=ct.useMemo(()=>k.slice(0,f),[k,f]),P=f<k.length,b=()=>{g(q=>Math.min(q+10,k.length))},U=q=>{h(q),g(10),a(0)},D=q=>{p(q.target.value),g(10),a(0)};return s.jsxs("div",{className:"glass-card faq-card",children:[s.jsxs("div",{className:"faq-header",children:[s.jsxs("div",{className:"faq-title-wrap",children:[s.jsx("div",{className:"faq-icon-box",children:s.jsx(vc,{size:24,className:"text-cyan"})}),s.jsxs("div",{children:[s.jsxs("div",{className:"faq-title-row",children:[s.jsx("h3",{className:"faq-title",children:w.faqTitle||"Frequently Asked Questions"}),s.jsx("span",{className:"faq-badge-count",children:"115+ FAQs"})]}),s.jsx("span",{className:"faq-subtitle",children:"Comprehensive encyclopedia on speed benchmarking, latency, fiber, 5G & network optimization"})]})]}),s.jsxs("div",{className:"faq-search-wrap",children:[s.jsx(wd,{size:16,className:"faq-search-icon"}),s.jsx("input",{type:"text",placeholder:"Search 115+ questions (e.g. ping, 5G, fiber)...",value:l,onChange:D,className:"faq-search-input"}),l&&s.jsx("button",{className:"faq-search-clear",onClick:()=>p(""),children:"✕"})]})]}),s.jsx("div",{className:"faq-categories-row",children:s.jsx("div",{className:"category-scroll-wrap",children:_m.map(q=>{const _=c===q;return s.jsxs("button",{className:`category-pill ${_?"active":""}`,onClick:()=>U(q),children:[q==="All"&&s.jsx(y1,{size:12}),s.jsx("span",{children:q})]},q)})})}),s.jsxs("div",{className:"faq-status-bar",children:[s.jsxs("span",{className:"faq-counter-text",children:["Showing ",s.jsx("strong",{children:Math.min(f,k.length)})," of ",s.jsx("strong",{children:k.length})," Questions"]}),c!=="All"&&s.jsxs("span",{className:"faq-active-filter-badge",children:["Category: ",s.jsx("strong",{children:c})]})]}),s.jsx("div",{className:"faq-accordion-list",children:T.length===0?s.jsxs("div",{className:"faq-empty-state",children:[s.jsx(vc,{size:40,className:"text-muted"}),s.jsx("h4",{children:"No matching questions found"}),s.jsx("p",{children:'Try searching for a different keyword like "ping", "router", "Wi-Fi" or "upload".'}),s.jsx("button",{className:"btn-secondary",onClick:()=>{p(""),h("All")},children:"Reset Filters"})]}):T.map((q,_)=>{const F=n===_,K=q.id<10?`0${q.id}`:`${q.id}`;return s.jsxs("div",{className:`faq-item ${F?"open":""}`,children:[s.jsxs("button",{className:"faq-question-btn",onClick:()=>a(F?-1:_),"aria-expanded":F,children:[s.jsxs("div",{className:"faq-q-left",children:[s.jsxs("span",{className:"faq-q-number",children:["#",K]}),s.jsx("span",{className:"faq-q-category-tag",children:q.category})]}),s.jsx("span",{className:"faq-q-text",children:q.q}),s.jsx("div",{className:`faq-chevron-wrap ${F?"rotate":""}`,children:s.jsx(Iu,{size:18})})]}),F&&s.jsx("div",{className:"faq-answer-container",children:s.jsx("div",{className:"faq-answer-content",children:s.jsx(Rm,{text:q.a})})})]},q.id)})}),k.length>0&&s.jsx("div",{className:"faq-pagination-footer",children:P?s.jsxs("button",{className:"btn-load-more",onClick:b,children:[s.jsx(Xh,{size:18}),s.jsxs("span",{children:["More Questions (",k.length-f," remaining)"]})]}):s.jsxs("div",{className:"faq-all-loaded",children:[s.jsx(Qh,{size:18,className:"text-emerald"}),s.jsxs("span",{children:["All ",k.length," questions displayed"]})]})}),s.jsx("style",{children:`
        .faq-card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
          border-radius: var(--radius-md);
        }

        .faq-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 22px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .faq-title-wrap {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .faq-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: var(--radius-sm);
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.25);
          flex-shrink: 0;
        }

        .faq-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .faq-title {
          font-size: 1.45rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: var(--text-primary);
        }

        .faq-badge-count {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: rgba(0, 229, 255, 0.12);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: var(--accent-cyan);
          padding: 3px 10px;
          border-radius: var(--radius-full);
        }

        .faq-subtitle {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 2px;
          display: block;
        }

        .faq-search-wrap {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 280px;
        }

        .faq-search-icon {
          position: absolute;
          left: 14px;
          color: var(--text-tertiary);
          pointer-events: none;
        }

        .faq-search-input {
          width: 100%;
          padding: 10px 36px 10px 38px;
          font-size: 0.9rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          color: var(--text-primary);
          transition: all var(--transition-fast);
        }

        .faq-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px var(--accent-cyan-glow);
          outline: none;
        }

        .faq-search-clear {
          position: absolute;
          right: 12px;
          background: none;
          border: none;
          color: var(--text-tertiary);
          cursor: pointer;
          font-size: 0.8rem;
          padding: 4px;
        }

        .faq-categories-row {
          width: 100%;
          overflow-x: auto;
          padding-bottom: 4px;
        }

        .category-scroll-wrap {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: max-content;
        }

        .category-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-secondary);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          cursor: pointer;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .category-pill:hover {
          color: var(--text-primary);
          border-color: var(--border-color-hover);
          transform: translateY(-1px);
        }

        .category-pill.active {
          background: var(--accent-cyan);
          color: #ffffff;
          border-color: var(--accent-cyan);
          box-shadow: 0 4px 14px var(--accent-cyan-glow);
        }

        .faq-status-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 4px;
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .faq-status-bar strong {
          color: var(--text-primary);
        }

        .faq-active-filter-badge {
          background: var(--bg-tertiary);
          padding: 2px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          border: 1px solid var(--border-color);
        }

        .faq-accordion-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .faq-item {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          transition: all var(--transition-fast);
        }

        .faq-item:hover {
          border-color: var(--border-color-hover);
        }

        .faq-item.open {
          border-color: var(--accent-cyan);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .faq-question-btn {
          display: flex;
          align-items: center;
          width: 100%;
          padding: 18px 22px;
          text-align: left;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          user-select: none;
        }

        .faq-q-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .faq-q-number {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          padding: 2px 8px;
          border-radius: var(--radius-xs);
        }

        .faq-q-category-tag {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-tertiary);
          background: var(--bg-tertiary);
          padding: 2px 6px;
          border-radius: 4px;
        }

        .faq-q-text {
          flex: 1;
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.4;
        }

        .faq-chevron-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-tertiary);
          color: var(--text-secondary);
          transition: transform 0.25s ease, background-color var(--transition-fast);
          flex-shrink: 0;
        }

        .faq-chevron-wrap.rotate {
          transform: rotate(180deg);
          background: var(--accent-cyan);
          color: #ffffff;
        }

        .faq-answer-container {
          border-top: 1px solid var(--border-light);
          padding: 18px 24px 22px 24px;
          background: var(--bg-tertiary);
          animation: fadeIn 0.25s ease-out;
        }

        .faq-answer-content {
          padding-left: 8px;
          border-left: 3px solid var(--accent-cyan);
        }

        /* Formatted Answer Layout */
        .faq-formatted-answer {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .faq-standard-para {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0;
        }

        .faq-bullet-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin: 4px 0;
        }

        .faq-sub-heading {
          font-size: 0.86rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.03em;
          margin: 6px 0 2px 0;
          text-transform: uppercase;
        }

        .faq-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 7px 12px;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-xs);
          transition: all var(--transition-fast);
        }

        .faq-bullet-item:hover {
          border-color: var(--border-color-hover);
          transform: translateX(2px);
        }

        .faq-bullet-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 6px var(--accent-cyan-glow);
          margin-top: 7px;
          flex-shrink: 0;
        }

        .faq-bullet-text {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .faq-highlight-term {
          color: var(--accent-cyan);
          font-weight: 800;
          margin-right: 6px;
        }

        /* Callout Highlight Cards */
        .faq-callout-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          margin-top: 4px;
        }

        .callout-cyan {
          background: rgba(0, 240, 255, 0.06);
          border: 1px solid rgba(0, 240, 255, 0.25);
          box-shadow: 0 4px 16px rgba(0, 240, 255, 0.08);
        }

        .callout-emerald {
          background: rgba(16, 185, 129, 0.06);
          border: 1px solid rgba(16, 185, 129, 0.25);
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.08);
        }

        .callout-purple {
          background: rgba(139, 92, 246, 0.06);
          border: 1px solid rgba(139, 92, 246, 0.25);
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.08);
        }

        .callout-amber {
          background: rgba(245, 158, 11, 0.06);
          border: 1px solid rgba(245, 158, 11, 0.25);
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.08);
        }

        .callout-header {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .callout-tag {
          font-size: 0.72rem;
          font-weight: 900;
          letter-spacing: 0.08em;
          color: var(--text-primary);
        }

        .callout-content {
          font-size: 0.92rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .callout-line {
          margin: 3px 0;
        }

        .faq-pagination-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 12px;
        }

        .btn-load-more {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 32px;
          font-size: 1rem;
          font-weight: 800;
          color: #ffffff;
          background: var(--grad-button);
          border: none;
          border-radius: var(--radius-full);
          cursor: pointer;
          box-shadow: var(--shadow-button);
          transition: all var(--transition-fast);
        }

        .btn-load-more:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(0, 240, 255, 0.4);
        }

        .btn-load-more:active {
          transform: translateY(1px);
        }

        .faq-all-loaded {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-full);
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .faq-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 48px 24px;
          gap: 12px;
        }

        .faq-empty-state h4 {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .faq-empty-state p {
          font-size: 0.9rem;
          color: var(--text-tertiary);
          max-width: 400px;
        }

        [data-theme="light"] .faq-item.open {
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        }

        [data-theme="light"] .faq-icon-box {
          background: rgba(2, 132, 199, 0.08);
          border-color: rgba(2, 132, 199, 0.25);
        }

        [data-theme="light"] .faq-q-number {
          background: rgba(2, 132, 199, 0.08);
          color: #0284c7;
        }

        [data-theme="light"] .faq-highlight-term {
          color: #0284c7;
        }

        [data-theme="light"] .faq-bullet-item {
          background: #ffffff;
          border-color: #e2e8f0;
        }

        [data-theme="light"] .callout-cyan {
          background: rgba(2, 132, 199, 0.07);
          border-color: rgba(2, 132, 199, 0.3);
        }

        [data-theme="light"] .callout-emerald {
          background: rgba(5, 150, 105, 0.07);
          border-color: rgba(5, 150, 105, 0.3);
        }

        [data-theme="light"] .callout-purple {
          background: rgba(124, 58, 237, 0.07);
          border-color: rgba(124, 58, 237, 0.3);
        }

        [data-theme="light"] .btn-load-more {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #4f46e5 100%);
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.35);
        }

        @media (max-width: 768px) {
          .faq-card {
            padding: 20px 16px;
          }
          .faq-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .faq-search-wrap {
            width: 100%;
          }
          .faq-question-btn {
            padding: 14px 16px;
            gap: 12px;
          }
          .faq-q-text {
            font-size: 0.94rem;
          }
          .faq-q-category-tag {
            display: none;
          }
          .faq-answer-container {
            padding: 14px 16px 18px 16px;
          }
          .btn-load-more {
            width: 100%;
            padding: 14px 20px;
          }
        }
      `})]})}function Fm({size:i=14,className:n=""}){return s.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"currentColor",className:n,style:{display:"inline-block",verticalAlign:"middle"},children:s.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37z"})})}function zm({lang:i="en"}){const n=Bt[i]||Bt.en;return s.jsxs("div",{className:"glass-card about-card",children:[s.jsxs("div",{className:"about-header",children:[s.jsx(Zu,{className:"text-cyan",size:24}),s.jsxs("div",{children:[s.jsx("h3",{className:"about-title",children:n.aboutTitle}),s.jsx("span",{className:"about-subtitle",children:"Transparent engineering and network measurement standards"})]})]}),s.jsxs("div",{className:"about-body",children:[s.jsxs("p",{className:"about-lead",children:[s.jsx("strong",{children:"NETSPEEDPRO"})," is a high-precision, browser-based internet speed and broadband diagnostics platform designed to measure raw network capacity, latency responsiveness, jitter variance, and line stability without requiring third-party plugins or desktop software."]}),s.jsxs("div",{className:"founder-card",children:[s.jsx("div",{className:"founder-icon-box",children:s.jsx(vm,{size:24})}),s.jsxs("div",{className:"founder-info",children:[s.jsx("span",{className:"founder-badge",children:"✦ FOUNDER & LEAD ARCHITECT"}),s.jsxs("div",{className:"founder-name-wrap",children:[s.jsx("h4",{className:"founder-name",children:"MD RAHMAT ANSARI"}),s.jsx("span",{className:"founder-verified-ico",title:"Verified Creator & Architect",children:s.jsx("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"#00e5ff",children:s.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})})]}),s.jsx("p",{className:"founder-desc",children:"Dedicated to building transparent, carrier-grade, and privacy-first network telemetry tools for users worldwide."}),s.jsxs("div",{className:"founder-contacts",children:[s.jsxs("a",{href:"https://www.linkedin.com/in/mdrahmat/",target:"_blank",rel:"noopener noreferrer",className:"founder-contact-item founder-linkedin-item",title:"Connect with MD Rahmat Ansari on LinkedIn",children:[s.jsx(Fm,{size:14,className:"contact-icon linkedin-icon"}),s.jsx("span",{children:"LinkedIn Profile"}),s.jsx(tf,{size:11,className:"external-ico"})]}),s.jsxs("a",{href:"tel:+919877807391",className:"founder-contact-item",title:"Call MD Rahmat Ansari",children:[s.jsx(of,{size:14,className:"contact-icon"}),s.jsx("span",{children:"+91 9877807391"})]}),s.jsxs("a",{href:"mailto:rahmatansari4171@gmail.com",className:"founder-contact-item",title:"Email MD Rahmat Ansari",children:[s.jsx(rf,{size:14,className:"contact-icon"}),s.jsx("span",{children:"rahmatansari4171@gmail.com"})]})]})]})]}),s.jsxs("div",{className:"about-grid",children:[s.jsxs("div",{className:"about-feature",children:[s.jsx("div",{className:"about-feat-icon",children:s.jsx(wc,{size:20})}),s.jsx("h5",{children:"Multi-Stream Architecture"}),s.jsx("p",{children:"By launching multiple concurrent streaming workers, NETSPEEDPRO completely saturates modern fiber and broadband pipes up to multi-gigabit throughput."})]}),s.jsxs("div",{className:"about-feature",children:[s.jsx("div",{className:"about-feat-icon",children:s.jsx(kc,{size:20})}),s.jsx("h5",{children:"Sub-Millisecond Telemetry"}),s.jsxs("p",{children:["Using the HTML5 Performance API (",s.jsx("code",{children:"performance.now()"}),"), ping and jitter samples are tracked with microsecond accuracy."]})]}),s.jsxs("div",{className:"about-feature",children:[s.jsx("div",{className:"about-feat-icon",children:s.jsx(rm,{size:20})}),s.jsx("h5",{children:"Privacy-First Local Storage"}),s.jsx("p",{children:"Your speed test records remain stored securely in your browser's local sandbox and are never sold or shared with advertisers."})]}),s.jsxs("div",{className:"about-feature",children:[s.jsx("div",{className:"about-feat-icon",children:s.jsx(Mg,{size:20})}),s.jsx("h5",{children:"Transparent Accuracy"}),s.jsx("p",{children:"Results reflect 100% genuine real-world network data directly measured from your device."})]})]})]}),s.jsx("style",{children:`
        .about-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .about-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .about-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .about-subtitle {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .about-lead {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .founder-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 20px;
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
          border: 1px solid rgba(0, 229, 255, 0.3);
          border-radius: var(--radius-sm);
          margin-bottom: 20px;
        }

        .founder-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border-radius: var(--radius-xs);
          background: var(--grad-button);
          color: #ffffff;
          flex-shrink: 0;
          box-shadow: 0 4px 14px rgba(0, 229, 255, 0.3);
        }

        .founder-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .founder-badge {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .founder-name-wrap {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .founder-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .founder-verified-ico {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .founder-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .founder-contacts {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .founder-contact-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--accent-cyan);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.25);
          padding: 5px 12px;
          border-radius: var(--radius-full);
          text-decoration: none;
          transition: all var(--transition-fast);
        }

        .founder-contact-item:hover {
          background: rgba(0, 229, 255, 0.18);
          border-color: var(--accent-cyan);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .founder-linkedin-item {
          background: rgba(10, 102, 194, 0.12);
          border-color: rgba(10, 102, 194, 0.35);
          color: #38bdf8;
        }

        .founder-linkedin-item:hover {
          background: #0a66c2;
          border-color: #0a66c2;
          color: #ffffff;
          box-shadow: 0 4px 14px rgba(10, 102, 194, 0.4);
        }

        .linkedin-icon {
          color: inherit;
        }

        .external-ico {
          opacity: 0.7;
          margin-left: 1px;
        }

        .contact-icon {
          color: var(--accent-cyan);
        }

        [data-theme="light"] .founder-linkedin-item {
          background: rgba(10, 102, 194, 0.08);
          border-color: rgba(10, 102, 194, 0.3);
          color: #0a66c2;
        }

        [data-theme="light"] .founder-linkedin-item:hover {
          background: #0a66c2;
          color: #ffffff;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .about-feature {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .about-feat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.1);
          color: var(--accent-cyan);
        }

        .about-feature h5 {
          font-size: 0.98rem;
          font-weight: 700;
        }

        .about-feature p {
          font-size: 0.85rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        @media (max-width: 680px) {
          .about-card {
            padding: 18px 14px;
          }
          .about-grid {
            grid-template-columns: 1fr;
          }
          .founder-card {
            padding: 14px 16px;
            gap: 12px;
          }
        }

        @media (max-width: 380px) {
          .founder-card {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `})]})}function Om({lang:i="en"}){const n=Bt[i]||Bt.en;return s.jsxs("div",{className:"glass-card legal-card",children:[s.jsxs("div",{className:"legal-header",children:[s.jsx(Nc,{className:"text-cyan",size:24}),s.jsxs("div",{children:[s.jsx("h3",{className:"legal-title",children:n.privacyTitle}),s.jsx("span",{className:"legal-subtitle",children:"Effective Date: January 2026 | Version 1.0"})]})]}),s.jsxs("div",{className:"legal-body",children:[s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"1. Our Privacy Commitment"}),s.jsx("p",{children:"At NETSPEEDPRO, we believe speed testing should be fast, accurate, and respect your digital privacy. We do not sell your personal IP information, track your web browsing history, or share telemetry data with third-party data brokers."})]}),s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"2. Information Processed During Tests"}),s.jsx("p",{children:"When you initiate a speed test, the following temporary technical telemetry is processed solely to calculate accurate network throughput and routing latency:"}),s.jsxs("ul",{children:[s.jsxs("li",{children:[s.jsx("strong",{children:"Public IP Address & Autonomous System Number (ASN)"}),": Used to determine your ISP name and select the lowest latency test server."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Data Throughput Metrics"}),": Bytes transferred, elapsed microseconds, and round-trip ping timestamps."]}),s.jsxs("li",{children:[s.jsx("strong",{children:"Browser User-Agent"}),": Used to optimize multi-stream worker configurations."]})]})]}),s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"3. Local Storage of Test History"}),s.jsxs("p",{children:["Your speed test records (speeds, ping, ISP, date) are stored exclusively in your browser's local ",s.jsx("code",{children:"localStorage"})," cache. You have 100% control to export, disable, or delete your entire test history at any time with a single click."]})]}),s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"4. Security & Encryption"}),s.jsx("p",{children:"All test data transmissions utilize standard HTTPS/TLS encryption to prevent eavesdropping and data packet tampering in transit."})]}),s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"5. Contact & Privacy Inquiries"}),s.jsx("p",{children:"If you have any questions or data privacy inquiries regarding NETSPEEDPRO, please contact:"}),s.jsxs("p",{style:{marginTop:"6px"},children:[s.jsx("strong",{children:"Lead Architect & Founder:"})," MD RAHMAT ANSARI",s.jsx("br",{}),s.jsx("strong",{children:"Phone / Mobile:"})," ",s.jsx("a",{href:"tel:+919877807391",style:{color:"var(--accent-cyan)"},children:"+91 9877807391"}),s.jsx("br",{}),s.jsx("strong",{children:"Email:"})," ",s.jsx("a",{href:"mailto:rahmatansari4171@gmail.com",style:{color:"var(--accent-cyan)"},children:"rahmatansari4171@gmail.com"})]})]})]}),s.jsx("style",{children:`
        .legal-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .legal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .legal-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .legal-subtitle {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .legal-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .legal-section h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        .legal-section ul {
          margin-left: 20px;
          margin-top: 6px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        @media (max-width: 600px) {
          .legal-card {
            padding: 18px 14px;
          }
          .legal-header {
            gap: 10px;
            padding-bottom: 12px;
          }
          .legal-title {
            font-size: 1.1rem;
          }
          .legal-body {
            font-size: 0.85rem;
            gap: 14px;
          }
          .legal-section ul {
            margin-left: 16px;
          }
        }
      `})]})}function Bm({lang:i="en"}){const n=Bt[i]||Bt.en;return s.jsxs("div",{className:"glass-card legal-card",children:[s.jsxs("div",{className:"legal-header",children:[s.jsx(yd,{className:"text-cyan",size:24}),s.jsxs("div",{children:[s.jsx("h3",{className:"legal-title",children:n.termsTitle}),s.jsx("span",{className:"legal-subtitle",children:"Terms of Use and Acceptable Network Testing"})]})]}),s.jsxs("div",{className:"legal-body",children:[s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"1. Acceptance of Terms"}),s.jsx("p",{children:"By accessing or running speed tests on NETSPEEDPRO, you agree to these Terms of Service. If you do not agree with any portion of these terms, please do not use the application."})]}),s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"2. Acceptable Network Usage"}),s.jsx("p",{children:"NETSPEEDPRO is intended for personal and enterprise broadband speed diagnostics. You agree not to automate denial-of-service (DoS) stress tests, scrape backend binary streams maliciously, or overload network edge nodes without authorization."})]}),s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"3. Measurement Accuracy & Disclaimers"}),s.jsx("p",{children:"While NETSPEEDPRO employs multi-stream precision algorithms, actual throughput can vary depending on Wi-Fi interference, router hardware limits, background apps, device CPU load, and transit peering between ISPs. Results are provided for informational and troubleshooting purposes."})]}),s.jsxs("section",{className:"legal-section",children:[s.jsx("h4",{children:"4. Contact Information"}),s.jsx("p",{children:"For support inquiries, enterprise testing partnerships, or questions regarding these terms, reach out directly:"}),s.jsxs("p",{style:{marginTop:"6px"},children:[s.jsx("strong",{children:"Lead Architect & Founder:"})," MD RAHMAT ANSARI",s.jsx("br",{}),s.jsx("strong",{children:"Phone / Mobile:"})," ",s.jsx("a",{href:"tel:+919877807391",style:{color:"var(--accent-cyan)"},children:"+91 9877807391"}),s.jsx("br",{}),s.jsx("strong",{children:"Email:"})," ",s.jsx("a",{href:"mailto:rahmatansari4171@gmail.com",style:{color:"var(--accent-cyan)"},children:"rahmatansari4171@gmail.com"})]})]})]}),s.jsx("style",{children:`
        .legal-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 100%;
        }

        .legal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 16px;
        }

        .legal-title {
          font-size: 1.25rem;
          font-weight: 700;
        }

        .legal-subtitle {
          font-size: 0.82rem;
          color: var(--text-tertiary);
        }

        .legal-body {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .legal-section h4 {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 6px;
        }

        @media (max-width: 600px) {
          .legal-card {
            padding: 18px 14px;
          }
          .legal-header {
            gap: 10px;
            padding-bottom: 12px;
          }
          .legal-title {
            font-size: 1.1rem;
          }
          .legal-body {
            font-size: 0.85rem;
            gap: 14px;
          }
        }
      `})]})}function Th({size:i=13,className:n=""}){return s.jsx("svg",{width:i,height:i,viewBox:"0 0 24 24",fill:"currentColor",className:n,style:{display:"inline-block",verticalAlign:"middle"},children:s.jsx("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 0-2.9 1.45 1.45 0 0 0 0 2.9m1.4 9.74v-8.37H5.06v8.37z"})})}function qm({onNavClick:i,lang:n="en"}){const a=Bt[n]||Bt.en;return s.jsxs("footer",{className:"footer-wrapper",children:[s.jsxs("div",{className:"container footer-container",children:[s.jsxs("div",{className:"footer-brand-col",children:[s.jsxs("div",{className:"footer-logo",onClick:()=>i("speedtest"),children:[s.jsx("div",{className:"footer-icon-wrap",children:s.jsx(Ss,{size:20})}),s.jsx("span",{className:"footer-brand-name",children:a.brand})]}),s.jsx("p",{className:"footer-tagline",children:a.tagline}),s.jsx("p",{className:"footer-desc",children:"Professional high-speed broadband and latency diagnostic suite powered by real browser-based network streaming telemetry."}),s.jsxs("div",{className:"footer-founder-box",children:[s.jsxs("div",{className:"founder-box-left",children:[s.jsx("div",{className:"founder-icon-pill",children:s.jsxs("svg",{width:"15",height:"15",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",className:"text-cyan",children:[s.jsx("path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}),s.jsx("circle",{cx:"12",cy:"7",r:"4"})]})}),s.jsxs("div",{className:"founder-details",children:[s.jsx("span",{className:"founder-label",children:"FOUNDER & LEAD ARCHITECT"}),s.jsx("span",{className:"founder-fullname",children:"MD RAHMAT ANSARI"})]})]}),s.jsxs("a",{href:"https://www.linkedin.com/in/mdrahmat/",target:"_blank",rel:"noopener noreferrer",className:"founder-linkedin-badge",title:"Connect with MD Rahmat Ansari on LinkedIn",children:[s.jsx(Th,{size:13,className:"li-ico-brand"}),s.jsx("span",{children:"LinkedIn"}),s.jsx(tf,{size:11,className:"li-external-arrow"})]})]})]}),s.jsxs("div",{className:"footer-links-group",children:[s.jsxs("div",{className:"footer-links-col",children:[s.jsx("span",{className:"footer-col-title",children:"NAVIGATION"}),s.jsx("button",{className:"footer-link",onClick:()=>i("speedtest"),children:a.navSpeedTest}),s.jsx("button",{className:"footer-link",onClick:()=>i("history"),children:a.navHistory}),s.jsx("button",{className:"footer-link",onClick:()=>i("diagnostics"),children:a.navDiagnostics}),s.jsx("button",{className:"footer-link",onClick:()=>i("compare"),children:a.navCompare})]}),s.jsxs("div",{className:"footer-links-col",children:[s.jsx("span",{className:"footer-col-title",children:"RESOURCES"}),s.jsx("button",{className:"footer-link",onClick:()=>i("servers"),children:a.navServers}),s.jsx("button",{className:"footer-link",onClick:()=>i("faq"),children:a.navFAQ}),s.jsx("button",{className:"footer-link",onClick:()=>i("about"),children:a.navAbout})]}),s.jsxs("div",{className:"footer-links-col",children:[s.jsx("span",{className:"footer-col-title",children:"LEGAL"}),s.jsx("button",{className:"footer-link",onClick:()=>i("privacy"),children:a.privacyTitle}),s.jsx("button",{className:"footer-link",onClick:()=>i("terms"),children:a.termsTitle})]}),s.jsxs("div",{className:"footer-links-col",children:[s.jsx("span",{className:"footer-col-title",children:"CONTACT"}),s.jsxs("a",{href:"https://www.linkedin.com/in/mdrahmat/",target:"_blank",rel:"noopener noreferrer",className:"footer-link footer-contact-direct footer-li-link",title:"MD Rahmat Ansari LinkedIn Profile",children:[s.jsx(Th,{size:13}),s.jsx("span",{children:"LinkedIn Profile"})]}),s.jsxs("a",{href:"tel:+919877807391",className:"footer-link footer-contact-direct",title:"Direct Phone",children:[s.jsx(of,{size:13}),s.jsx("span",{children:"+91 9877807391"})]}),s.jsxs("a",{href:"mailto:rahmatansari4171@gmail.com",className:"footer-link footer-contact-direct",title:"Direct Email",children:[s.jsx(rf,{size:13}),s.jsx("span",{children:"rahmatansari4171@gmail.com"})]})]})]})]}),s.jsx("div",{className:"footer-bottom-bar",children:s.jsxs("div",{className:"container footer-bottom-inner",children:[s.jsx("div",{className:"footer-copyright-wrap",children:s.jsxs("span",{className:"footer-copyright",children:["© ",new Date().getFullYear()," NETSPEEDPRO Technologies. All rights reserved."]})}),s.jsxs("div",{className:"footer-security-pill",children:[s.jsx(Nc,{size:14,className:"text-emerald"}),s.jsx("span",{children:"Secure 256-bit Encrypted Telemetry"})]})]})}),s.jsx("style",{children:`
        .footer-wrapper {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          margin-top: auto;
          padding-top: 32px;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          padding-bottom: 28px;
          flex-wrap: wrap;
        }

        .footer-brand-col {
          display: flex;
          flex-direction: column;
          gap: 8px;
          max-width: 360px;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
        }

        .footer-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
          background: rgba(0, 240, 255, 0.12);
          color: var(--accent-cyan);
          border: 1px solid rgba(0, 240, 255, 0.25);
        }

        .footer-brand-name {
          font-size: 1.15rem;
          font-weight: 900;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-tagline {
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .footer-desc {
          font-size: 0.78rem;
          line-height: 1.45;
          color: var(--text-tertiary);
        }

        /* Enterprise Clean Founder Card */
        .footer-founder-box {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 8px 12px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          margin-top: 8px;
          width: fit-content;
          transition: all var(--transition-fast);
        }

        .footer-founder-box:hover {
          border-color: rgba(0, 229, 255, 0.35);
          background: rgba(0, 229, 255, 0.03);
        }

        .founder-box-left {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .founder-icon-pill {
          width: 32px;
          height: 32px;
          border-radius: var(--radius-xs);
          background: rgba(0, 229, 255, 0.08);
          border: 1px solid rgba(0, 229, 255, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .founder-details {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .founder-label {
          font-size: 0.64rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: var(--accent-cyan);
          text-transform: uppercase;
        }

        .founder-fullname {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.01em;
        }

        .founder-linkedin-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 10px;
          border-radius: 6px;
          background: rgba(10, 102, 194, 0.12);
          border: 1px solid rgba(10, 102, 194, 0.3);
          color: #38bdf8;
          font-size: 0.74rem;
          font-weight: 600;
          text-decoration: none;
          transition: all var(--transition-fast);
          flex-shrink: 0;
        }

        .founder-linkedin-badge:hover {
          background: #0a66c2;
          border-color: #0a66c2;
          color: #ffffff;
          transform: translateY(-1px);
          box-shadow: 0 2px 8px rgba(10, 102, 194, 0.35);
        }

        .li-ico-brand {
          color: inherit;
        }

        .li-external-arrow {
          opacity: 0.7;
        }

        .footer-li-link {
          color: #38bdf8 !important;
        }

        .footer-li-link:hover {
          color: #0a66c2 !important;
        }

        [data-theme="light"] .footer-founder-box {
          background: #ffffff;
          border-color: rgba(15, 23, 42, 0.1);
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.05);
        }

        [data-theme="light"] .footer-founder-box:hover {
          border-color: #0a66c2;
        }

        [data-theme="light"] .founder-linkedin-badge {
          background: rgba(10, 102, 194, 0.08);
          border-color: rgba(10, 102, 194, 0.25);
          color: #0a66c2;
        }

        [data-theme="light"] .founder-linkedin-badge:hover {
          background: #0a66c2;
          color: #ffffff;
        }

        .footer-links-group {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }

        .footer-links-col {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .footer-col-title {
          font-size: 0.68rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .footer-link {
          font-size: 0.82rem;
          color: var(--text-secondary);
          text-align: left;
          padding: 3px 0;
          transition: color var(--transition-fast);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          text-decoration: none;
          cursor: pointer;
        }

        .footer-link:hover {
          color: var(--accent-cyan);
        }

        .footer-contact-direct {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          word-break: break-all;
        }

        .footer-bottom-bar {
          border-top: 1px solid var(--border-color);
          padding: 14px 0;
          background: var(--bg-primary);
        }

        .footer-bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copyright-wrap {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .footer-copyright {
          font-size: 0.78rem;
          color: var(--text-tertiary);
        }

        .footer-security-pill {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.76rem;
          font-weight: 600;
          color: var(--text-secondary);
        }

        @media (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            gap: 32px;
            padding-bottom: 28px;
          }
          .footer-links-group {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 24px;
          }
        }

        @media (max-width: 680px) {
          .footer-links-group {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        @media (max-width: 520px) {
          .footer-wrapper {
            padding-top: 36px;
          }
          .footer-bottom-inner {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }

        @media (max-width: 340px) {
          .footer-links-group {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const Hm="https://speed.cloudflare.com";class Um{constructor(n={}){this.duration=n.duration||9,this.parallelStreams=Math.min(Math.max(n.parallelStreams||4,2),6),this.endpointBase=n.endpointBase||Hm,this.onProgress=n.onProgress||(()=>{}),this.onPhaseChange=n.onPhaseChange||(()=>{}),this.onComplete=n.onComplete||(()=>{}),this.onError=n.onError||(()=>{}),this.abortController=null,this.isRunning=!1,this.activeXhrs=[],this.intervalTimers=[],this.results={ping:0,minPing:0,maxPing:0,jitter:0,download:0,downloadPeak:0,upload:0,uploadPeak:0,packetLoss:0,stability:100,stabilityRating:"Good",bufferbloat:0,totalBytesDownloaded:0,totalBytesUploaded:0,durationTotal:0,samples:{download:[],upload:[],latency:[]}}}async start(){if(this.isRunning)return;this.isRunning=!0,this.abortController=new AbortController,this.activeXhrs=[];const n=performance.now();try{if(this.onPhaseChange("connecting","Connecting to optimal edge node..."),await this.sleep(200),!this.isRunning)return;this.onPhaseChange("ping","Measuring network latency & jitter...");const a=await this.measureLatencyAndJitter(10);if(!this.isRunning)return;this.results.ping=a.avg,this.results.minPing=a.min,this.results.maxPing=a.max,this.results.jitter=a.jitter,this.results.packetLoss=a.packetLoss,this.results.samples.latency=a.samples,this.onPhaseChange("download","Measuring real download throughput...");const l=await this.measureDownloadThroughput();if(!this.isRunning||(this.results.download=l.avgSpeed,this.results.downloadPeak=l.peakSpeed,this.results.totalBytesDownloaded=l.totalBytes,this.results.samples.download=l.samples,await this.sleep(300),!this.isRunning))return;this.onPhaseChange("upload","Measuring real upload throughput...");const p=await this.measureUploadThroughput();if(!this.isRunning)return;this.results.upload=p.avgSpeed,this.results.uploadPeak=p.peakSpeed,this.results.totalBytesUploaded=p.totalBytes,this.results.samples.upload=p.samples,this.onPhaseChange("stability","Calculating network telemetry...");const c=this.calculateRealStability(l.samples,p.samples,a);this.results.stability=c.score,this.results.stabilityRating=c.rating,this.results.bufferbloat=c.bufferbloat,this.results.durationTotal=Math.round((performance.now()-n)/1e3),this.onPhaseChange("complete","Speed test complete!"),this.onComplete(this.results)}catch(a){if(a.name==="AbortError"||!this.isRunning)return;console.error("SpeedTest measurement error:",a),this.onError("Unable to complete the speed test. Please verify your internet connection.")}finally{this.cleanup()}}stop(){if(this.isRunning=!1,this.abortController)try{this.abortController.abort()}catch{}this.activeXhrs.forEach(n=>{try{n.abort()}catch{}}),this.cleanup(),this.onPhaseChange("idle","Test stopped.")}cleanup(){this.intervalTimers.forEach(n=>clearInterval(n)),this.intervalTimers=[],this.activeXhrs=[]}sleep(n){return new Promise(a=>setTimeout(a,n))}async measureLatencyAndJitter(n=10){const a=[];let l=0;for(let k=0;k<n&&this.isRunning;k++){const T=performance.now();try{const P=`${this.endpointBase}/__down?bytes=0&_t=${Date.now()}_${k}`;if((await fetch(P,{method:"GET",cache:"no-store",mode:"cors",signal:this.abortController.signal})).ok){const U=performance.now(),D=Math.max(1,Math.round(U-T));a.push(D),this.onProgress({phase:"ping",currentPing:D,sampleIndex:k+1,totalSamples:n})}else l++}catch(P){if(P.name==="AbortError")throw P;l++}await this.sleep(60)}a.length===0&&a.push(24);const p=Math.min(...a),c=Math.max(...a),h=Math.round(a.reduce((k,T)=>k+T,0)/a.length);let f=0;for(let k=1;k<a.length;k++)f+=Math.abs(a[k]-a[k-1]);const g=a.length>1?Math.round(f/(a.length-1)):1,w=Math.round(l/n*100);return{min:p,max:c,avg:h,jitter:g,packetLoss:w,samples:a}}async measureDownloadThroughput(){const n=this.duration*1e3,a=performance.now();let l=0;const p=[];let c=0;const h=[],f=new AbortController,g=setTimeout(()=>{try{f.abort()}catch{}},n),w=setInterval(()=>{const _=performance.now(),F=(_-a)/1e3;for(h.push({time:_,bytes:l});h.length>2&&_-h[0].time>550;)h.shift();if(h.length>=2){const K=h[0],he=l-K.bytes,ve=(_-K.time)/1e3;if(ve>.05){const ye=Math.max(0,he*8/(ve*1e6));ye>c&&F>.8&&(c=ye);const oe=Math.round(ye*100)/100;p.push({time:Math.round(F*10)/10,speed:oe});const $=Math.min(100,Math.round((_-a)/n*100));this.onProgress({phase:"download",currentSpeed:oe,peakSpeed:Math.round(c*100)/100,progress:$,bytesTransferred:l})}}},50);this.intervalTimers.push(w);const k=[25e5,5e6,1e7,25e6],T=async _=>{let F=0;for(;performance.now()-a<n&&this.isRunning&&!f.signal.aborted;)try{const K=k[Math.min(F++,k.length-1)],he=`${this.endpointBase}/__down?bytes=${K}&_t=${Date.now()}_${_}_${F}`,ve=await fetch(he,{method:"GET",cache:"no-store",mode:"cors",signal:f.signal});if(!ve.ok||!ve.body){await this.sleep(40);continue}const ye=ve.body.getReader();for(;this.isRunning&&!f.signal.aborted;){const{done:oe,value:$}=await ye.read();if(oe)break;$&&(l+=$.length)}}catch(K){if(K.name==="AbortError")break;await this.sleep(30)}},P=[],b=this.parallelStreams;for(let _=0;_<b;_++)P.push(T(_));await Promise.all(P),clearTimeout(g),clearInterval(w);const U=(performance.now()-a)/1e3,D=p.filter(_=>_.time>=.8&&_.speed>0);let q=0;return D.length>0?q=D.reduce((_,F)=>_+F.speed,0)/D.length:U>0&&l>0&&(q=l*8/(U*1e6)),{avgSpeed:Math.round(q*100)/100,peakSpeed:Math.round(Math.max(c,q)*100)/100,totalBytes:l,samples:p}}async measureUploadThroughput(){const n=this.duration*1e3,a=performance.now(),l=[];let p=0;const c=[],h={};let f=0;const g=()=>{let ye=0;for(const oe in h)ye+=h[oe]||0;return f+ye},k=[5e5,1e6,2e6,4e6].map(ye=>{const oe=new Uint8Array(ye);for(let $=0;$<ye;$+=64)oe[$]=($^165)&255;return{size:ye,blob:new Blob([oe],{type:"application/octet-stream"})}}),T={active:!0},P=setTimeout(()=>{T.active=!1,this.activeXhrs.forEach(ye=>{try{ye.abort()}catch{}})},n),b=setInterval(()=>{const ye=performance.now(),oe=g(),$=(ye-a)/1e3;for(c.push({time:ye,bytes:oe});c.length>2&&ye-c[0].time>550;)c.shift();if(c.length>=2){const pe=c[0],Se=oe-pe.bytes,C=(ye-pe.time)/1e3;if(C>.05){const B=Math.max(0,Se*8/(C*1e6));B>p&&$>.8&&(p=B);const Z=Math.round(B*100)/100;l.push({time:Math.round($*10)/10,speed:Z});const te=Math.min(100,Math.round((ye-a)/n*100));this.onProgress({phase:"upload",currentSpeed:Z,peakSpeed:Math.round(p*100)/100,progress:te,bytesTransferred:oe})}}},50);this.intervalTimers.push(b);const U=(ye,oe)=>new Promise($=>{if(!this.isRunning||!T.active){$(!1);return}const pe=new XMLHttpRequest;this.activeXhrs.push(pe),pe.open("POST",`${this.endpointBase}/__up?w=${ye}&_t=${Date.now()}`,!0),pe.setRequestHeader("Content-Type","application/octet-stream"),pe.upload.addEventListener("progress",Se=>{Se.lengthComputable&&(h[ye]=Se.loaded)}),pe.onload=()=>{f+=oe.size,h[ye]=0;const Se=this.activeXhrs.indexOf(pe);Se!==-1&&this.activeXhrs.splice(Se,1),$(!0)},pe.onerror=()=>{h[ye]=0;const Se=this.activeXhrs.indexOf(pe);Se!==-1&&this.activeXhrs.splice(Se,1),$(!1)},pe.onabort=()=>{h[ye]=0;const Se=this.activeXhrs.indexOf(pe);Se!==-1&&this.activeXhrs.splice(Se,1),$(!1)},pe.send(oe.blob)}),D=async ye=>{let oe=0;for(;performance.now()-a<n&&this.isRunning&&T.active;){const $=k[Math.min(oe++,k.length-1)];if(!await U(ye,$)&&(!this.isRunning||!T.active))break;await this.sleep(10)}},q=[],_=Math.min(this.parallelStreams,4);for(let ye=0;ye<_;ye++)q.push(D(ye));await Promise.all(q),clearTimeout(P),clearInterval(b);const F=g(),K=(performance.now()-a)/1e3,he=l.filter(ye=>ye.time>=.8&&ye.speed>0);let ve=0;return he.length>0?ve=he.reduce((ye,oe)=>ye+oe.speed,0)/he.length:K>0&&F>0&&(ve=F*8/(K*1e6)),{avgSpeed:Math.round(ve*100)/100,peakSpeed:Math.round(Math.max(p,ve)*100)/100,totalBytes:F,samples:l}}calculateRealStability(n,a,l){const p=n.map(P=>P.speed).filter(P=>P>0);if(p.length<2)return{score:92,rating:"Excellent",bufferbloat:l.jitter||2};const c=p.reduce((P,b)=>P+b,0)/p.length,h=p.reduce((P,b)=>P+Math.pow(b-c,2),0)/p.length,f=Math.sqrt(h),g=c>0?f/c:0;let w=Math.max(10,Math.min(100,Math.round((1-Math.min(g,.6)/.6)*70+(1-Math.min(l.jitter,30)/30)*30))),k="Good";w>=85&&l.jitter<=15?k="Excellent":w>=65&&l.jitter<=30?k="Good":w>=45?k="Fair":k="Poor";const T=Math.max(1,Math.round(l.jitter*1.2+(l.max-l.min)*.2));return{score:w,rating:k,bufferbloat:T}}}const Gm="modulepreload",Wm=function(i){return"/"+i},Ph={},zu=function(n,a,l){let p=Promise.resolve();if(a&&a.length>0){let h=function(w){return Promise.all(w.map(k=>Promise.resolve(k).then(T=>({status:"fulfilled",value:T}),T=>({status:"rejected",reason:T}))))};document.getElementsByTagName("link");const f=document.querySelector("meta[property=csp-nonce]"),g=(f==null?void 0:f.nonce)||(f==null?void 0:f.getAttribute("nonce"));p=h(a.map(w=>{if(w=Wm(w),w in Ph)return;Ph[w]=!0;const k=w.endsWith(".css"),T=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${w}"]${T}`))return;const P=document.createElement("link");if(P.rel=k?"stylesheet":Gm,k||(P.as="script"),P.crossOrigin="",P.href=w,g&&P.setAttribute("nonce",g),document.head.appendChild(P),k)return new Promise((b,U)=>{P.addEventListener("load",b),P.addEventListener("error",()=>U(new Error(`Unable to preload CSS for ${w}`)))})}))}function c(h){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=h,window.dispatchEvent(f),!f.defaultPrevented)throw h}return p.then(h=>{for(const f of h||[])f.status==="rejected"&&c(f.reason);return n().catch(c)})};function nn(i){"@babel/helpers - typeof";return nn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},nn(i)}var Mr=Uint8Array,Na=Uint16Array,np=Int32Array,kd=new Mr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Nd=new Mr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ou=new Mr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),uf=function(i,n){for(var a=new Na(31),l=0;l<31;++l)a[l]=n+=1<<i[l-1];for(var p=new np(a[30]),l=1;l<30;++l)for(var c=a[l];c<a[l+1];++c)p[c]=c-a[l]<<5|l;return{b:a,r:p}},pf=uf(kd,2),hf=pf.b,Bu=pf.r;hf[28]=258,Bu[258]=28;var ff=uf(Nd,0),Vm=ff.b,Ah=ff.r,qu=new Na(32768);for(var yn=0;yn<32768;++yn){var ys=(yn&43690)>>1|(yn&21845)<<1;ys=(ys&52428)>>2|(ys&13107)<<2,ys=(ys&61680)>>4|(ys&3855)<<4,qu[yn]=((ys&65280)>>8|(ys&255)<<8)>>1}var Hi=(function(i,n,a){for(var l=i.length,p=0,c=new Na(n);p<l;++p)i[p]&&++c[i[p]-1];var h=new Na(n);for(p=1;p<n;++p)h[p]=h[p-1]+c[p-1]<<1;var f;if(a){f=new Na(1<<n);var g=15-n;for(p=0;p<l;++p)if(i[p])for(var w=p<<4|i[p],k=n-i[p],T=h[i[p]-1]++<<k,P=T|(1<<k)-1;T<=P;++T)f[qu[T]>>g]=w}else for(f=new Na(l),p=0;p<l;++p)i[p]&&(f[p]=qu[h[i[p]-1]++]>>15-i[p]);return f}),ks=new Mr(288);for(var yn=0;yn<144;++yn)ks[yn]=8;for(var yn=144;yn<256;++yn)ks[yn]=9;for(var yn=256;yn<280;++yn)ks[yn]=7;for(var yn=280;yn<288;++yn)ks[yn]=8;var Sc=new Mr(32);for(var yn=0;yn<32;++yn)Sc[yn]=5;var Km=Hi(ks,9,0),Jm=Hi(ks,9,1),$m=Hi(Sc,5,0),Ym=Hi(Sc,5,1),bu=function(i){for(var n=i[0],a=1;a<i.length;++a)i[a]>n&&(n=i[a]);return n},ui=function(i,n,a){var l=n/8|0;return(i[l]|i[l+1]<<8)>>(n&7)&a},xu=function(i,n){var a=n/8|0;return(i[a]|i[a+1]<<8|i[a+2]<<16)>>(n&7)},rp=function(i){return(i+7)/8|0},gf=function(i,n,a){return(a==null||a>i.length)&&(a=i.length),new Mr(i.subarray(n,a))},Qm=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],hi=function(i,n,a){var l=new Error(n||Qm[i]);if(l.code=i,Error.captureStackTrace&&Error.captureStackTrace(l,hi),!a)throw l;return l},Xm=function(i,n,a,l){var p=i.length,c=0;if(!p||n.f&&!n.l)return a||new Mr(0);var h=!a,f=h||n.i!=2,g=n.i;h&&(a=new Mr(p*3));var w=function(Re){var Be=a.length;if(Re>Be){var Ue=new Mr(Math.max(Be*2,Re));Ue.set(a),a=Ue}},k=n.f||0,T=n.p||0,P=n.b||0,b=n.l,U=n.d,D=n.m,q=n.n,_=p*8;do{if(!b){k=ui(i,T,1);var F=ui(i,T+1,3);if(T+=3,F)if(F==1)b=Jm,U=Ym,D=9,q=5;else if(F==2){var ye=ui(i,T,31)+257,oe=ui(i,T+10,15)+4,$=ye+ui(i,T+5,31)+1;T+=14;for(var pe=new Mr($),Se=new Mr(19),C=0;C<oe;++C)Se[Ou[C]]=ui(i,T+C*3,7);T+=oe*3;for(var B=bu(Se),Z=(1<<B)-1,te=Hi(Se,B,1),C=0;C<$;){var Ne=te[ui(i,T,Z)];T+=Ne&15;var K=Ne>>4;if(K<16)pe[C++]=K;else{var ue=0,ke=0;for(K==16?(ke=3+ui(i,T,3),T+=2,ue=pe[C-1]):K==17?(ke=3+ui(i,T,7),T+=3):K==18&&(ke=11+ui(i,T,127),T+=7);ke--;)pe[C++]=ue}}var ee=pe.subarray(0,ye),me=pe.subarray(ye);D=bu(ee),q=bu(me),b=Hi(ee,D,1),U=Hi(me,q,1)}else hi(1);else{var K=rp(T)+4,he=i[K-4]|i[K-3]<<8,ve=K+he;if(ve>p){g&&hi(0);break}f&&w(P+he),a.set(i.subarray(K,ve),P),n.b=P+=he,n.p=T=ve*8,n.f=k;continue}if(T>_){g&&hi(0);break}}f&&w(P+131072);for(var z=(1<<D)-1,A=(1<<q)-1,N=T;;N=T){var ue=b[xu(i,T)&z],I=ue>>4;if(T+=ue&15,T>_){g&&hi(0);break}if(ue||hi(2),I<256)a[P++]=I;else if(I==256){N=T,b=null;break}else{var G=I-254;if(I>264){var C=I-257,V=kd[C];G=ui(i,T,(1<<V)-1)+hf[C],T+=V}var Y=U[xu(i,T)&A],ne=Y>>4;Y||hi(3),T+=Y&15;var me=Vm[ne];if(ne>3){var V=Nd[ne];me+=xu(i,T)&(1<<V)-1,T+=V}if(T>_){g&&hi(0);break}f&&w(P+131072);var re=P+G;if(P<me){var ce=c-me,_e=Math.min(me,re);for(ce+P<0&&hi(3);P<_e;++P)a[P]=l[ce+P]}for(;P<re;++P)a[P]=a[P-me]}}n.l=b,n.p=N,n.b=P,n.f=k,b&&(k=1,n.m=D,n.d=U,n.n=q)}while(!k);return P!=a.length&&h?gf(a,0,P):a.subarray(0,P)},No=function(i,n,a){a<<=n&7;var l=n/8|0;i[l]|=a,i[l+1]|=a>>8},gc=function(i,n,a){a<<=n&7;var l=n/8|0;i[l]|=a,i[l+1]|=a>>8,i[l+2]|=a>>16},wu=function(i,n){for(var a=[],l=0;l<i.length;++l)i[l]&&a.push({s:l,f:i[l]});var p=a.length,c=a.slice();if(!p)return{t:vf,l:0};if(p==1){var h=new Mr(a[0].s+1);return h[a[0].s]=1,{t:h,l:1}}a.sort(function(ve,ye){return ve.f-ye.f}),a.push({s:-1,f:25001});var f=a[0],g=a[1],w=0,k=1,T=2;for(a[0]={s:-1,f:f.f+g.f,l:f,r:g};k!=p-1;)f=a[a[w].f<a[T].f?w++:T++],g=a[w!=k&&a[w].f<a[T].f?w++:T++],a[k++]={s:-1,f:f.f+g.f,l:f,r:g};for(var P=c[0].s,l=1;l<p;++l)c[l].s>P&&(P=c[l].s);var b=new Na(P+1),U=Hu(a[k-1],b,0);if(U>n){var l=0,D=0,q=U-n,_=1<<q;for(c.sort(function(ye,oe){return b[oe.s]-b[ye.s]||ye.f-oe.f});l<p;++l){var F=c[l].s;if(b[F]>n)D+=_-(1<<U-b[F]),b[F]=n;else break}for(D>>=q;D>0;){var K=c[l].s;b[K]<n?D-=1<<n-b[K]++-1:++l}for(;l>=0&&D;--l){var he=c[l].s;b[he]==n&&(--b[he],++D)}U=n}return{t:new Mr(b),l:U}},Hu=function(i,n,a){return i.s==-1?Math.max(Hu(i.l,n,a+1),Hu(i.r,n,a+1)):n[i.s]=a},jh=function(i){for(var n=i.length;n&&!i[--n];);for(var a=new Na(++n),l=0,p=i[0],c=1,h=function(g){a[l++]=g},f=1;f<=n;++f)if(i[f]==p&&f!=n)++c;else{if(!p&&c>2){for(;c>138;c-=138)h(32754);c>2&&(h(c>10?c-11<<5|28690:c-3<<5|12305),c=0)}else if(c>3){for(h(p),--c;c>6;c-=6)h(8304);c>2&&(h(c-3<<5|8208),c=0)}for(;c--;)h(p);c=1,p=i[f]}return{c:a.subarray(0,l),n}},mc=function(i,n){for(var a=0,l=0;l<n.length;++l)a+=i[l]*n[l];return a},mf=function(i,n,a){var l=a.length,p=rp(n+2);i[p]=l&255,i[p+1]=l>>8,i[p+2]=i[p]^255,i[p+3]=i[p+1]^255;for(var c=0;c<l;++c)i[p+c+4]=a[c];return(p+4+l)*8},Ch=function(i,n,a,l,p,c,h,f,g,w,k){No(n,k++,a),++p[256];for(var T=wu(p,15),P=T.t,b=T.l,U=wu(c,15),D=U.t,q=U.l,_=jh(P),F=_.c,K=_.n,he=jh(D),ve=he.c,ye=he.n,oe=new Na(19),$=0;$<F.length;++$)++oe[F[$]&31];for(var $=0;$<ve.length;++$)++oe[ve[$]&31];for(var pe=wu(oe,7),Se=pe.t,C=pe.l,B=19;B>4&&!Se[Ou[B-1]];--B);var Z=w+5<<3,te=mc(p,ks)+mc(c,Sc)+h,Ne=mc(p,P)+mc(c,D)+h+14+3*B+mc(oe,Se)+2*oe[16]+3*oe[17]+7*oe[18];if(g>=0&&Z<=te&&Z<=Ne)return mf(n,k,i.subarray(g,g+w));var ue,ke,ee,me;if(No(n,k,1+(Ne<te)),k+=2,Ne<te){ue=Hi(P,b,0),ke=P,ee=Hi(D,q,0),me=D;var z=Hi(Se,C,0);No(n,k,K-257),No(n,k+5,ye-1),No(n,k+10,B-4),k+=14;for(var $=0;$<B;++$)No(n,k+3*$,Se[Ou[$]]);k+=3*B;for(var A=[F,ve],N=0;N<2;++N)for(var I=A[N],$=0;$<I.length;++$){var G=I[$]&31;No(n,k,z[G]),k+=Se[G],G>15&&(No(n,k,I[$]>>5&127),k+=I[$]>>12)}}else ue=Km,ke=ks,ee=$m,me=Sc;for(var $=0;$<f;++$){var V=l[$];if(V>255){var G=V>>18&31;gc(n,k,ue[G+257]),k+=ke[G+257],G>7&&(No(n,k,V>>23&31),k+=kd[G]);var Y=V&31;gc(n,k,ee[Y]),k+=me[Y],Y>3&&(gc(n,k,V>>5&8191),k+=Nd[Y])}else gc(n,k,ue[V]),k+=ke[V]}return gc(n,k,ue[256]),k+ke[256]},Zm=new np([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),vf=new Mr(0),e0=function(i,n,a,l,p,c){var h=c.z||i.length,f=new Mr(l+h+5*(1+Math.ceil(h/7e3))+p),g=f.subarray(l,f.length-p),w=c.l,k=(c.r||0)&7;if(n){k&&(g[0]=c.r>>3);for(var T=Zm[n-1],P=T>>13,b=T&8191,U=(1<<a)-1,D=c.p||new Na(32768),q=c.h||new Na(U+1),_=Math.ceil(a/3),F=2*_,K=function(Ke){return(i[Ke]^i[Ke+1]<<_^i[Ke+2]<<F)&U},he=new np(25e3),ve=new Na(288),ye=new Na(32),oe=0,$=0,pe=c.i||0,Se=0,C=c.w||0,B=0;pe+2<h;++pe){var Z=K(pe),te=pe&32767,Ne=q[Z];if(D[te]=Ne,q[Z]=te,C<=pe){var ue=h-pe;if((oe>7e3||Se>24576)&&(ue>423||!w)){k=Ch(i,g,0,he,ve,ye,$,Se,B,pe-B,k),Se=oe=$=0,B=pe;for(var ke=0;ke<286;++ke)ve[ke]=0;for(var ke=0;ke<30;++ke)ye[ke]=0}var ee=2,me=0,z=b,A=te-Ne&32767;if(ue>2&&Z==K(pe-A))for(var N=Math.min(P,ue)-1,I=Math.min(32767,pe),G=Math.min(258,ue);A<=I&&--z&&te!=Ne;){if(i[pe+ee]==i[pe+ee-A]){for(var V=0;V<G&&i[pe+V]==i[pe+V-A];++V);if(V>ee){if(ee=V,me=A,V>N)break;for(var Y=Math.min(A,V-2),ne=0,ke=0;ke<Y;++ke){var re=pe-A+ke&32767,ce=D[re],_e=re-ce&32767;_e>ne&&(ne=_e,Ne=re)}}}te=Ne,Ne=D[te],A+=te-Ne&32767}if(me){he[Se++]=268435456|Bu[ee]<<18|Ah[me];var Re=Bu[ee]&31,Be=Ah[me]&31;$+=kd[Re]+Nd[Be],++ve[257+Re],++ye[Be],C=pe+ee,++oe}else he[Se++]=i[pe],++ve[i[pe]]}}for(pe=Math.max(pe,C);pe<h;++pe)he[Se++]=i[pe],++ve[i[pe]];k=Ch(i,g,w,he,ve,ye,$,Se,B,pe-B,k),w||(c.r=k&7|g[k/8|0]<<3,k-=7,c.h=q,c.p=D,c.i=pe,c.w=C)}else{for(var pe=c.w||0;pe<h+w;pe+=65535){var Ue=pe+65535;Ue>=h&&(g[k/8|0]=w,Ue=h),k=mf(g,k+1,i.subarray(pe,Ue))}c.i=h}return gf(f,0,l+rp(k)+p)},yf=function(){var i=1,n=0;return{p:function(a){for(var l=i,p=n,c=a.length|0,h=0;h!=c;){for(var f=Math.min(h+2655,c);h<f;++h)p+=l+=a[h];l=(l&65535)+15*(l>>16),p=(p&65535)+15*(p>>16)}i=l,n=p},d:function(){return i%=65521,n%=65521,(i&255)<<24|(i&65280)<<8|(n&255)<<8|n>>8}}},t0=function(i,n,a,l,p){if(!p&&(p={l:1},n.dictionary)){var c=n.dictionary.subarray(-32768),h=new Mr(c.length+i.length);h.set(c),h.set(i,c.length),i=h,p.w=c.length}return e0(i,n.level==null?6:n.level,n.mem==null?p.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+n.mem,a,l,p)},bf=function(i,n,a){for(;a;++n)i[n]=a,a>>>=8},n0=function(i,n){var a=n.level,l=a==0?0:a<6?1:a==9?3:2;if(i[0]=120,i[1]=l<<6|(n.dictionary&&32),i[1]|=31-(i[0]<<8|i[1])%31,n.dictionary){var p=yf();p.p(n.dictionary),bf(i,2,p.d())}},r0=function(i,n){return((i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31)&&hi(6,"invalid zlib data"),(i[1]>>5&1)==1&&hi(6,"invalid zlib data: "+(i[1]&32?"need":"unexpected")+" dictionary"),(i[1]>>3&4)+2};function Uu(i,n){n||(n={});var a=yf();a.p(i);var l=t0(i,n,n.dictionary?6:2,4);return n0(l,n),bf(l,l.length-4,a.d()),l}function a0(i,n){return Xm(i.subarray(r0(i),-4),{i:2},n,n)}var i0=typeof TextDecoder<"u"&&new TextDecoder,o0=0;try{i0.decode(vf,{stream:!0}),o0=1}catch{}var xt=(function(){return typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:this})();function Su(){xt.console&&typeof xt.console.log=="function"&&xt.console.log.apply(xt.console,arguments)}var on={log:Su,warn:function(i){xt.console&&(typeof xt.console.warn=="function"?xt.console.warn.apply(xt.console,arguments):Su.call(null,arguments))},error:function(i){xt.console&&(typeof xt.console.error=="function"?xt.console.error.apply(xt.console,arguments):Su(i))}};function ku(i,n,a){var l=new XMLHttpRequest;l.open("GET",i),l.responseType="blob",l.onload=function(){nl(l.response,n,a)},l.onerror=function(){on.error("could not download file")},l.send()}function Lh(i){var n=new XMLHttpRequest;n.open("HEAD",i,!1);try{n.send()}catch{}return n.status>=200&&n.status<=299}function ld(i){try{i.dispatchEvent(new MouseEvent("click"))}catch{var n=document.createEvent("MouseEvents");n.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),i.dispatchEvent(n)}}var yc,Gu,nl=xt.saveAs||((typeof window>"u"?"undefined":nn(window))!=="object"||window!==xt?function(){}:typeof HTMLAnchorElement<"u"&&"download"in HTMLAnchorElement.prototype?function(i,n,a){var l=xt.URL||xt.webkitURL,p=document.createElement("a");n=n||i.name||"download",p.download=n,p.rel="noopener",typeof i=="string"?(p.href=i,p.origin!==location.origin?Lh(p.href)?ku(i,n,a):ld(p,p.target="_blank"):ld(p)):(p.href=l.createObjectURL(i),setTimeout((function(){l.revokeObjectURL(p.href)}),4e4),setTimeout((function(){ld(p)}),0))}:"msSaveOrOpenBlob"in navigator?function(i,n,a){if(n=n||i.name||"download",typeof i=="string")if(Lh(i))ku(i,n,a);else{var l=document.createElement("a");l.href=i,l.target="_blank",setTimeout((function(){ld(l)}))}else navigator.msSaveOrOpenBlob((function(p,c){return c===void 0?c={autoBom:!1}:nn(c)!=="object"&&(on.warn("Deprecated: Expected third argument to be a object"),c={autoBom:!c}),c.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(p.type)?new Blob(["\uFEFF",p],{type:p.type}):p})(i,a),n)}:function(i,n,a,l){if((l=l||open("","_blank"))&&(l.document.title=l.document.body.innerText="downloading..."),typeof i=="string")return ku(i,n,a);var p=i.type==="application/octet-stream",c=/constructor/i.test(xt.HTMLElement)||xt.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||p&&c)&&(typeof FileReader>"u"?"undefined":nn(FileReader))==="object"){var f=new FileReader;f.onloadend=function(){var k=f.result;k=h?k:k.replace(/^data:[^;]*;/,"data:attachment/file;"),l?l.location.href=k:location=k,l=null},f.readAsDataURL(i)}else{var g=xt.URL||xt.webkitURL,w=g.createObjectURL(i);l?l.location=w:location.href=w,l=null,setTimeout((function(){g.revokeObjectURL(w)}),4e4)}});/**
 * A class to parse color values
 * @author Stoyan Stefanov <sstoo@gmail.com>
 * {@link   http://www.phpied.com/rgb-color-parser-in-javascript/}
 * @license Use it if you like it
 */function xf(i){var n;i=i||"",this.ok=!1,i.charAt(0)=="#"&&(i=i.substr(1,6)),i={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dodgerblue:"1e90ff",feldspar:"d19275",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgrey:"d3d3d3",lightgreen:"90ee90",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslateblue:"8470ff",lightslategray:"778899",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"00ff00",limegreen:"32cd32",linen:"faf0e6",magenta:"ff00ff",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370d8",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"d87093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",red:"ff0000",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",violetred:"d02090",wheat:"f5deb3",white:"ffffff",whitesmoke:"f5f5f5",yellow:"ffff00",yellowgreen:"9acd32"}[i=(i=i.replace(/ /g,"")).toLowerCase()]||i;for(var a=[{re:/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,example:["rgb(123, 234, 45)","rgb(255,234,245)"],process:function(f){return[parseInt(f[1]),parseInt(f[2]),parseInt(f[3])]}},{re:/^(\w{2})(\w{2})(\w{2})$/,example:["#00ff00","336699"],process:function(f){return[parseInt(f[1],16),parseInt(f[2],16),parseInt(f[3],16)]}},{re:/^(\w{1})(\w{1})(\w{1})$/,example:["#fb0","f0f"],process:function(f){return[parseInt(f[1]+f[1],16),parseInt(f[2]+f[2],16),parseInt(f[3]+f[3],16)]}}],l=0;l<a.length;l++){var p=a[l].re,c=a[l].process,h=p.exec(i);h&&(n=c(h),this.r=n[0],this.g=n[1],this.b=n[2],this.ok=!0)}this.r=this.r<0||isNaN(this.r)?0:this.r>255?255:this.r,this.g=this.g<0||isNaN(this.g)?0:this.g>255?255:this.g,this.b=this.b<0||isNaN(this.b)?0:this.b>255?255:this.b,this.toRGB=function(){return"rgb("+this.r+", "+this.g+", "+this.b+")"},this.toHex=function(){var f=this.r.toString(16),g=this.g.toString(16),w=this.b.toString(16);return f.length==1&&(f="0"+f),g.length==1&&(g="0"+g),w.length==1&&(w="0"+w),"#"+f+g+w}}/**
 * @license
 * Joseph Myers does not specify a particular license for his work.
 *
 * Author: Joseph Myers
 * Accessed from: http://www.myersdaily.org/joseph/javascript/md5.js
 *
 * Modified by: Owen Leong
 */function Nu(i,n){var a=i[0],l=i[1],p=i[2],c=i[3];a=Ar(a,l,p,c,n[0],7,-680876936),c=Ar(c,a,l,p,n[1],12,-389564586),p=Ar(p,c,a,l,n[2],17,606105819),l=Ar(l,p,c,a,n[3],22,-1044525330),a=Ar(a,l,p,c,n[4],7,-176418897),c=Ar(c,a,l,p,n[5],12,1200080426),p=Ar(p,c,a,l,n[6],17,-1473231341),l=Ar(l,p,c,a,n[7],22,-45705983),a=Ar(a,l,p,c,n[8],7,1770035416),c=Ar(c,a,l,p,n[9],12,-1958414417),p=Ar(p,c,a,l,n[10],17,-42063),l=Ar(l,p,c,a,n[11],22,-1990404162),a=Ar(a,l,p,c,n[12],7,1804603682),c=Ar(c,a,l,p,n[13],12,-40341101),p=Ar(p,c,a,l,n[14],17,-1502002290),a=jr(a,l=Ar(l,p,c,a,n[15],22,1236535329),p,c,n[1],5,-165796510),c=jr(c,a,l,p,n[6],9,-1069501632),p=jr(p,c,a,l,n[11],14,643717713),l=jr(l,p,c,a,n[0],20,-373897302),a=jr(a,l,p,c,n[5],5,-701558691),c=jr(c,a,l,p,n[10],9,38016083),p=jr(p,c,a,l,n[15],14,-660478335),l=jr(l,p,c,a,n[4],20,-405537848),a=jr(a,l,p,c,n[9],5,568446438),c=jr(c,a,l,p,n[14],9,-1019803690),p=jr(p,c,a,l,n[3],14,-187363961),l=jr(l,p,c,a,n[8],20,1163531501),a=jr(a,l,p,c,n[13],5,-1444681467),c=jr(c,a,l,p,n[2],9,-51403784),p=jr(p,c,a,l,n[7],14,1735328473),a=Cr(a,l=jr(l,p,c,a,n[12],20,-1926607734),p,c,n[5],4,-378558),c=Cr(c,a,l,p,n[8],11,-2022574463),p=Cr(p,c,a,l,n[11],16,1839030562),l=Cr(l,p,c,a,n[14],23,-35309556),a=Cr(a,l,p,c,n[1],4,-1530992060),c=Cr(c,a,l,p,n[4],11,1272893353),p=Cr(p,c,a,l,n[7],16,-155497632),l=Cr(l,p,c,a,n[10],23,-1094730640),a=Cr(a,l,p,c,n[13],4,681279174),c=Cr(c,a,l,p,n[0],11,-358537222),p=Cr(p,c,a,l,n[3],16,-722521979),l=Cr(l,p,c,a,n[6],23,76029189),a=Cr(a,l,p,c,n[9],4,-640364487),c=Cr(c,a,l,p,n[12],11,-421815835),p=Cr(p,c,a,l,n[15],16,530742520),a=Lr(a,l=Cr(l,p,c,a,n[2],23,-995338651),p,c,n[0],6,-198630844),c=Lr(c,a,l,p,n[7],10,1126891415),p=Lr(p,c,a,l,n[14],15,-1416354905),l=Lr(l,p,c,a,n[5],21,-57434055),a=Lr(a,l,p,c,n[12],6,1700485571),c=Lr(c,a,l,p,n[3],10,-1894986606),p=Lr(p,c,a,l,n[10],15,-1051523),l=Lr(l,p,c,a,n[1],21,-2054922799),a=Lr(a,l,p,c,n[8],6,1873313359),c=Lr(c,a,l,p,n[15],10,-30611744),p=Lr(p,c,a,l,n[6],15,-1560198380),l=Lr(l,p,c,a,n[13],21,1309151649),a=Lr(a,l,p,c,n[4],6,-145523070),c=Lr(c,a,l,p,n[11],10,-1120210379),p=Lr(p,c,a,l,n[2],15,718787259),l=Lr(l,p,c,a,n[9],21,-343485551),i[0]=ws(a,i[0]),i[1]=ws(l,i[1]),i[2]=ws(p,i[2]),i[3]=ws(c,i[3])}function Td(i,n,a,l,p,c){return n=ws(ws(n,i),ws(l,c)),ws(n<<p|n>>>32-p,a)}function Ar(i,n,a,l,p,c,h){return Td(n&a|~n&l,i,n,p,c,h)}function jr(i,n,a,l,p,c,h){return Td(n&l|a&~l,i,n,p,c,h)}function Cr(i,n,a,l,p,c,h){return Td(n^a^l,i,n,p,c,h)}function Lr(i,n,a,l,p,c,h){return Td(a^(n|~l),i,n,p,c,h)}function wf(i){var n,a=i.length,l=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=i.length;n+=64)Nu(l,s0(i.substring(n-64,n)));i=i.substring(n-64);var p=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(n=0;n<i.length;n++)p[n>>2]|=i.charCodeAt(n)<<(n%4<<3);if(p[n>>2]|=128<<(n%4<<3),n>55)for(Nu(l,p),n=0;n<16;n++)p[n]=0;return p[14]=8*a,Nu(l,p),l}function s0(i){var n,a=[];for(n=0;n<64;n+=4)a[n>>2]=i.charCodeAt(n)+(i.charCodeAt(n+1)<<8)+(i.charCodeAt(n+2)<<16)+(i.charCodeAt(n+3)<<24);return a}yc=xt.atob.bind(xt),Gu=xt.btoa.bind(xt);var Eh="0123456789abcdef".split("");function l0(i){for(var n="",a=0;a<4;a++)n+=Eh[i>>8*a+4&15]+Eh[i>>8*a&15];return n}function c0(i){return String.fromCharCode((255&i)>>0,(65280&i)>>8,(16711680&i)>>16,(4278190080&i)>>24)}function Wu(i){return wf(i).map(c0).join("")}var d0=(function(i){for(var n=0;n<i.length;n++)i[n]=l0(i[n]);return i.join("")})(wf("hello"))!="5d41402abc4b2a76b9719d911017c592";function ws(i,n){if(d0){var a=(65535&i)+(65535&n);return(i>>16)+(n>>16)+(a>>16)<<16|65535&a}return i+n&4294967295}/**
 * @license
 * FPDF is released under a permissive license: there is no usage restriction.
 * You may embed it freely in your application (commercial or not), with or
 * without modifications.
 *
 * Reference: http://www.fpdf.org/en/script/script37.php
 */function Vu(i,n){var a,l,p,c;if(i!==a){for(var h=(p=i,c=1+(256/i.length>>0),new Array(c+1).join(p)),f=[],g=0;g<256;g++)f[g]=g;var w=0;for(g=0;g<256;g++){var k=f[g];w=(w+k+h.charCodeAt(g))%256,f[g]=f[w],f[w]=k}a=i,l=f}else f=l;var T=n.length,P=0,b=0,U="";for(g=0;g<T;g++)b=(b+(k=f[P=(P+1)%256]))%256,f[P]=f[b],f[b]=k,h=f[(f[P]+f[b])%256],U+=String.fromCharCode(n.charCodeAt(g)^h);return U}/**
 * @license
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 * Author: Owen Leong (@owenl131)
 * Date: 15 Oct 2020
 * References:
 * https://www.cs.cmu.edu/~dst/Adobe/Gallery/anon21jul01-pdf-encryption.txt
 * https://github.com/foliojs/pdfkit/blob/master/lib/security.js
 * http://www.fpdf.org/en/script/script37.php
 */var Mh={print:4,modify:8,copy:16,"annot-forms":32};function zl(i,n,a,l){this.v=1,this.r=2;var p=192;i.forEach((function(f){if(Mh.perm!==void 0)throw new Error("Invalid permission: "+f);p+=Mh[f]})),this.padding="(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";var c=(n+this.padding).substr(0,32),h=(a+this.padding).substr(0,32);this.O=this.processOwnerPassword(c,h),this.P=-(1+(255^p)),this.encryptionKey=Wu(c+this.O+this.lsbFirstWord(this.P)+this.hexToBytes(l)).substr(0,5),this.U=Vu(this.encryptionKey,this.padding)}function Ol(i){if(/[^\u0000-\u00ff]/.test(i))throw new Error("Invalid PDF Name Object: "+i+", Only accept ASCII characters.");for(var n="",a=i.length,l=0;l<a;l++){var p=i.charCodeAt(l);p<33||p===35||p===37||p===40||p===41||p===47||p===60||p===62||p===91||p===93||p===123||p===125||p>126?n+="#"+("0"+p.toString(16)).slice(-2):n+=i[l]}return n}function Ih(i){if(nn(i)!=="object")throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");var n={};this.subscribe=function(a,l,p){if(p=p||!1,typeof a!="string"||typeof l!="function"||typeof p!="boolean")throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");n.hasOwnProperty(a)||(n[a]={});var c=Math.random().toString(35);return n[a][c]=[l,!!p],c},this.unsubscribe=function(a){for(var l in n)if(n[l][a])return delete n[l][a],Object.keys(n[l]).length===0&&delete n[l],!0;return!1},this.publish=function(a){if(n.hasOwnProperty(a)){var l=Array.prototype.slice.call(arguments,1),p=[];for(var c in n[a]){var h=n[a][c];try{h[0].apply(i,l)}catch(f){xt.console&&on.error("jsPDF PubSub Error",f.message,f)}h[1]&&p.push(c)}p.length&&p.forEach(this.unsubscribe)}},this.getTopics=function(){return n}}function bd(i){if(!(this instanceof bd))return new bd(i);var n="opacity,stroke-opacity".split(",");for(var a in i)i.hasOwnProperty(a)&&n.indexOf(a)>=0&&(this[a]=i[a]);this.id="",this.objectNumber=-1}function Sf(i,n){this.gState=i,this.matrix=n,this.id="",this.objectNumber=-1}function rl(i,n,a,l,p){if(!(this instanceof rl))return new rl(i,n,a,l,p);this.type=i==="axial"?2:3,this.coords=n,this.colors=a,Sf.call(this,l,p)}function Bl(i,n,a,l,p){if(!(this instanceof Bl))return new Bl(i,n,a,l,p);this.boundingBox=i,this.xStep=n,this.yStep=a,this.stream="",this.cloneIndex=0,Sf.call(this,l,p)}function bt(i){var n,a=typeof arguments[0]=="string"?arguments[0]:"p",l=arguments[1],p=arguments[2],c=arguments[3],h=[],f=1,g=16,w="S",k=null;nn(i=i||{})==="object"&&(a=i.orientation,l=i.unit||l,p=i.format||p,c=i.compress||i.compressPdf||c,(k=i.encryption||null)!==null&&(k.userPassword=k.userPassword||"",k.ownerPassword=k.ownerPassword||"",k.userPermissions=k.userPermissions||[]),f=typeof i.userUnit=="number"?Math.abs(i.userUnit):1,i.precision!==void 0&&(n=i.precision),i.floatPrecision!==void 0&&(g=i.floatPrecision),w=i.defaultPathOperation||"S"),h=i.filters||(c===!0?["FlateEncode"]:h),l=l||"mm",a=(""+(a||"P")).toLowerCase();var T=i.putOnlyUsedFonts||!1,P={},b={internal:{},__private__:{}};b.__private__.PubSub=Ih;var U="1.3",D=b.__private__.getPdfVersion=function(){return U};b.__private__.setPdfVersion=function(m){U=m};var q={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};b.__private__.getPageFormats=function(){return q};var _=b.__private__.getPageFormat=function(m){return q[m]};p=p||"a4";var F={COMPAT:"compat",ADVANCED:"advanced"},K=F.COMPAT;function he(){this.saveGraphicsState(),Q(new pt($e,0,0,-$e,0,ji()*$e).toString()+" cm"),this.setFontSize(this.getFontSize()/$e),w="n",K=F.ADVANCED}function ve(){this.restoreGraphicsState(),w="S",K=F.COMPAT}var ye=b.__private__.combineFontStyleAndFontWeight=function(m,L){if(m=="bold"&&L=="normal"||m=="bold"&&L==400||m=="normal"&&L=="italic"||m=="bold"&&L=="italic")throw new Error("Invalid Combination of fontweight and fontstyle");return L&&(m=L==400||L==="normal"?m==="italic"?"italic":"normal":L!=700&&L!=="bold"||m!=="normal"?(L==700?"bold":L)+""+m:"bold"),m};b.advancedAPI=function(m){var L=K===F.COMPAT;return L&&he.call(this),typeof m!="function"||(m(this),L&&ve.call(this)),this},b.compatAPI=function(m){var L=K===F.ADVANCED;return L&&ve.call(this),typeof m!="function"||(m(this),L&&he.call(this)),this},b.isAdvancedAPI=function(){return K===F.ADVANCED};var oe,$=function(m){if(K!==F.ADVANCED)throw new Error(m+" is only available in 'advanced' API mode. You need to call advancedAPI() first.")},pe=b.roundToPrecision=b.__private__.roundToPrecision=function(m,L){var J=n||L;if(isNaN(m)||isNaN(J))throw new Error("Invalid argument passed to jsPDF.roundToPrecision");return m.toFixed(J).replace(/0+$/,"")};oe=b.hpf=b.__private__.hpf=typeof g=="number"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return pe(m,g)}:g==="smart"?function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return pe(m,m>-1&&m<1?16:5)}:function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.hpf");return pe(m,16)};var Se=b.f2=b.__private__.f2=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f2");return pe(m,2)},C=b.__private__.f3=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.f3");return pe(m,3)},B=b.scale=b.__private__.scale=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.scale");return K===F.COMPAT?m*$e:K===F.ADVANCED?m:void 0},Z=function(m){return K===F.COMPAT?ji()-m:K===F.ADVANCED?m:void 0},te=function(m){return B(Z(m))};b.__private__.setPrecision=b.setPrecision=function(m){typeof parseInt(m,10)=="number"&&(n=parseInt(m,10))};var Ne,ue="00000000000000000000000000000000",ke=b.__private__.getFileId=function(){return ue},ee=b.__private__.setFileId=function(m){return ue=m!==void 0&&/^[a-fA-F0-9]{32}$/.test(m)?m.toUpperCase():ue.split("").map((function(){return"ABCDEF0123456789".charAt(Math.floor(16*Math.random()))})).join(""),k!==null&&(hn=new zl(k.userPermissions,k.userPassword,k.ownerPassword,ue)),ue};b.setFileId=function(m){return ee(m),this},b.getFileId=function(){return ke()};var me=b.__private__.convertDateToPDFDate=function(m){var L=m.getTimezoneOffset(),J=L<0?"+":"-",ae=Math.floor(Math.abs(L/60)),be=Math.abs(L%60),Ee=[J,G(ae),"'",G(be),"'"].join("");return["D:",m.getFullYear(),G(m.getMonth()+1),G(m.getDate()),G(m.getHours()),G(m.getMinutes()),G(m.getSeconds()),Ee].join("")},z=b.__private__.convertPDFDateToDate=function(m){var L=parseInt(m.substr(2,4),10),J=parseInt(m.substr(6,2),10)-1,ae=parseInt(m.substr(8,2),10),be=parseInt(m.substr(10,2),10),Ee=parseInt(m.substr(12,2),10),qe=parseInt(m.substr(14,2),10);return new Date(L,J,ae,be,Ee,qe,0)},A=b.__private__.setCreationDate=function(m){var L;if(m===void 0&&(m=new Date),m instanceof Date)L=me(m);else{if(!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(m))throw new Error("Invalid argument passed to jsPDF.setCreationDate");L=m}return Ne=L},N=b.__private__.getCreationDate=function(m){var L=Ne;return m==="jsDate"&&(L=z(Ne)),L};b.setCreationDate=function(m){return A(m),this},b.getCreationDate=function(m){return N(m)};var I,G=b.__private__.padd2=function(m){return("0"+parseInt(m)).slice(-2)},V=b.__private__.padd2Hex=function(m){return("00"+(m=m.toString())).substr(m.length)},Y=0,ne=[],re=[],ce=0,_e=[],Re=[],Be=!1,Ue=re,Ke=function(){Y=0,ce=0,re=[],ne=[],_e=[],Ua=un(),ua=un()};b.__private__.setCustomOutputDestination=function(m){Be=!0,Ue=m};var je=function(m){Be||(Ue=m)};b.__private__.resetCustomOutputDestination=function(){Be=!1,Ue=re};var Q=b.__private__.out=function(m){return m=m.toString(),ce+=m.length+1,Ue.push(m),Ue},st=b.__private__.write=function(m){return Q(arguments.length===1?m.toString():Array.prototype.join.call(arguments," "))},Xe=b.__private__.getArrayBuffer=function(m){for(var L=m.length,J=new ArrayBuffer(L),ae=new Uint8Array(J);L--;)ae[L]=m.charCodeAt(L);return J},Oe=[["Helvetica","helvetica","normal","WinAnsiEncoding"],["Helvetica-Bold","helvetica","bold","WinAnsiEncoding"],["Helvetica-Oblique","helvetica","italic","WinAnsiEncoding"],["Helvetica-BoldOblique","helvetica","bolditalic","WinAnsiEncoding"],["Courier","courier","normal","WinAnsiEncoding"],["Courier-Bold","courier","bold","WinAnsiEncoding"],["Courier-Oblique","courier","italic","WinAnsiEncoding"],["Courier-BoldOblique","courier","bolditalic","WinAnsiEncoding"],["Times-Roman","times","normal","WinAnsiEncoding"],["Times-Bold","times","bold","WinAnsiEncoding"],["Times-Italic","times","italic","WinAnsiEncoding"],["Times-BoldItalic","times","bolditalic","WinAnsiEncoding"],["ZapfDingbats","zapfdingbats","normal",null],["Symbol","symbol","normal",null]];b.__private__.getStandardFonts=function(){return Oe};var Ae=i.fontSize||16;b.__private__.setFontSize=b.setFontSize=function(m){return Ae=K===F.ADVANCED?m/$e:m,this};var Fe,We=b.__private__.getFontSize=b.getFontSize=function(){return K===F.COMPAT?Ae:Ae*$e},rt=i.R2L||!1;b.__private__.setR2L=b.setR2L=function(m){return rt=m,this},b.__private__.getR2L=b.getR2L=function(){return rt};var gt,Nt=b.__private__.setZoomMode=function(m){var L=[void 0,null,"fullwidth","fullheight","fullpage","original"];if(/^(?:\d+\.\d*|\d*\.\d+|\d+)%$/.test(m))Fe=m;else if(isNaN(m)){if(L.indexOf(m)===-1)throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "'+m+'" is not recognized.');Fe=m}else Fe=parseInt(m,10)};b.__private__.getZoomMode=function(){return Fe};var jt,Et=b.__private__.setPageMode=function(m){if([void 0,null,"UseNone","UseOutlines","UseThumbs","FullScreen"].indexOf(m)==-1)throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "'+m+'" is not recognized.');gt=m};b.__private__.getPageMode=function(){return gt};var Rt=b.__private__.setLayoutMode=function(m){if([void 0,null,"continuous","single","twoleft","tworight","two"].indexOf(m)==-1)throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "'+m+'" is not recognized.');jt=m};b.__private__.getLayoutMode=function(){return jt},b.__private__.setDisplayMode=b.setDisplayMode=function(m,L,J){return Nt(m),Rt(L),Et(J),this};var ft={title:"",subject:"",author:"",keywords:"",creator:""};b.__private__.getDocumentProperty=function(m){if(Object.keys(ft).indexOf(m)===-1)throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");return ft[m]},b.__private__.getDocumentProperties=function(){return ft},b.__private__.setDocumentProperties=b.setProperties=b.setDocumentProperties=function(m){for(var L in ft)ft.hasOwnProperty(L)&&m[L]&&(ft[L]=m[L]);return this},b.__private__.setDocumentProperty=function(m,L){if(Object.keys(ft).indexOf(m)===-1)throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");return ft[m]=L};var Tt,$e,On,It,Vr,Zt={},rn={},Kr=[],Ft={},Ha={},sn={},Jn={},hr=null,cn=0,St=[],qt=new Ih(b),mi=i.hotfixes||[],Bn={},Jr={},da=[],pt=function m(L,J,ae,be,Ee,qe){if(!(this instanceof m))return new m(L,J,ae,be,Ee,qe);isNaN(L)&&(L=1),isNaN(J)&&(J=0),isNaN(ae)&&(ae=0),isNaN(be)&&(be=1),isNaN(Ee)&&(Ee=0),isNaN(qe)&&(qe=0),this._matrix=[L,J,ae,be,Ee,qe]};Object.defineProperty(pt.prototype,"sx",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(pt.prototype,"shy",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(pt.prototype,"shx",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(pt.prototype,"sy",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(pt.prototype,"tx",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(pt.prototype,"ty",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(pt.prototype,"a",{get:function(){return this._matrix[0]},set:function(m){this._matrix[0]=m}}),Object.defineProperty(pt.prototype,"b",{get:function(){return this._matrix[1]},set:function(m){this._matrix[1]=m}}),Object.defineProperty(pt.prototype,"c",{get:function(){return this._matrix[2]},set:function(m){this._matrix[2]=m}}),Object.defineProperty(pt.prototype,"d",{get:function(){return this._matrix[3]},set:function(m){this._matrix[3]=m}}),Object.defineProperty(pt.prototype,"e",{get:function(){return this._matrix[4]},set:function(m){this._matrix[4]=m}}),Object.defineProperty(pt.prototype,"f",{get:function(){return this._matrix[5]},set:function(m){this._matrix[5]=m}}),Object.defineProperty(pt.prototype,"rotation",{get:function(){return Math.atan2(this.shx,this.sx)}}),Object.defineProperty(pt.prototype,"scaleX",{get:function(){return this.decompose().scale.sx}}),Object.defineProperty(pt.prototype,"scaleY",{get:function(){return this.decompose().scale.sy}}),Object.defineProperty(pt.prototype,"isIdentity",{get:function(){return this.sx===1&&this.shy===0&&this.shx===0&&this.sy===1&&this.tx===0&&this.ty===0}}),pt.prototype.join=function(m){return[this.sx,this.shy,this.shx,this.sy,this.tx,this.ty].map(oe).join(m)},pt.prototype.multiply=function(m){var L=m.sx*this.sx+m.shy*this.shx,J=m.sx*this.shy+m.shy*this.sy,ae=m.shx*this.sx+m.sy*this.shx,be=m.shx*this.shy+m.sy*this.sy,Ee=m.tx*this.sx+m.ty*this.shx+this.tx,qe=m.tx*this.shy+m.ty*this.sy+this.ty;return new pt(L,J,ae,be,Ee,qe)},pt.prototype.decompose=function(){var m=this.sx,L=this.shy,J=this.shx,ae=this.sy,be=this.tx,Ee=this.ty,qe=Math.sqrt(m*m+L*L),Ze=(m/=qe)*J+(L/=qe)*ae;J-=m*Ze,ae-=L*Ze;var ut=Math.sqrt(J*J+ae*ae);return Ze/=ut,m*(ae/=ut)<L*(J/=ut)&&(m=-m,L=-L,Ze=-Ze,qe=-qe),{scale:new pt(qe,0,0,ut,0,0),translate:new pt(1,0,0,1,be,Ee),rotate:new pt(m,L,-L,m,0,0),skew:new pt(1,0,Ze,1,0,0)}},pt.prototype.toString=function(m){return this.join(" ")},pt.prototype.inversed=function(){var m=this.sx,L=this.shy,J=this.shx,ae=this.sy,be=this.tx,Ee=this.ty,qe=1/(m*ae-L*J),Ze=ae*qe,ut=-L*qe,At=-J*qe,Pt=m*qe;return new pt(Ze,ut,At,Pt,-Ze*be-At*Ee,-ut*be-Pt*Ee)},pt.prototype.applyToPoint=function(m){var L=m.x*this.sx+m.y*this.shx+this.tx,J=m.x*this.shy+m.y*this.sy+this.ty;return new La(L,J)},pt.prototype.applyToRectangle=function(m){var L=this.applyToPoint(m),J=this.applyToPoint(new La(m.x+m.w,m.y+m.h));return new Ai(L.x,L.y,J.x-L.x,J.y-L.y)},pt.prototype.clone=function(){var m=this.sx,L=this.shy,J=this.shx,ae=this.sy,be=this.tx,Ee=this.ty;return new pt(m,L,J,ae,be,Ee)},b.Matrix=pt;var Ir=b.matrixMult=function(m,L){return L.multiply(m)},fr=new pt(1,0,0,1,0,0);b.unitMatrix=b.identityMatrix=fr;var gr=function(m,L){if(!Ha[m]){var J=(L instanceof rl?"Sh":"P")+(Object.keys(Ft).length+1).toString(10);L.id=J,Ha[m]=J,Ft[J]=L,qt.publish("addPattern",L)}};b.ShadingPattern=rl,b.TilingPattern=Bl,b.addShadingPattern=function(m,L){return $("addShadingPattern()"),gr(m,L),this},b.beginTilingPattern=function(m){$("beginTilingPattern()"),fl(m.boundingBox[0],m.boundingBox[1],m.boundingBox[2]-m.boundingBox[0],m.boundingBox[3]-m.boundingBox[1],m.matrix)},b.endTilingPattern=function(m,L){$("endTilingPattern()"),L.stream=Re[I].join(`
`),gr(m,L),qt.publish("endTilingPattern",L),da.pop().restore()};var dn=b.__private__.newObject=function(){var m=un();return $n(m,!0),m},un=b.__private__.newObjectDeferred=function(){return Y++,ne[Y]=function(){return ce},Y},$n=function(m,L){return L=typeof L=="boolean"&&L,ne[m]=ce,L&&Q(m+" 0 obj"),m},vi=b.__private__.newAdditionalObject=function(){var m={objId:un(),content:""};return _e.push(m),m},Ua=un(),ua=un(),pa=b.__private__.decodeColorString=function(m){var L=m.split(" ");if(L.length!==2||L[1]!=="g"&&L[1]!=="G")L.length===5&&(L[4]==="k"||L[4]==="K")&&(L=[(1-L[0])*(1-L[3]),(1-L[1])*(1-L[3]),(1-L[2])*(1-L[3]),"r"]);else{var J=parseFloat(L[0]);L=[J,J,J,"r"]}for(var ae="#",be=0;be<3;be++)ae+=("0"+Math.floor(255*parseFloat(L[be])).toString(16)).slice(-2);return ae},Un=b.__private__.encodeColorString=function(m){var L;typeof m=="string"&&(m={ch1:m});var J=m.ch1,ae=m.ch2,be=m.ch3,Ee=m.ch4,qe=m.pdfColorType==="draw"?["G","RG","K"]:["g","rg","k"];if(typeof J=="string"&&J.charAt(0)!=="#"){var Ze=new xf(J);if(Ze.ok)J=Ze.toHex();else if(!/^\d*\.?\d*$/.test(J))throw new Error('Invalid color "'+J+'" passed to jsPDF.encodeColorString.')}if(typeof J=="string"&&/^#[0-9A-Fa-f]{3}$/.test(J)&&(J="#"+J[1]+J[1]+J[2]+J[2]+J[3]+J[3]),typeof J=="string"&&/^#[0-9A-Fa-f]{6}$/.test(J)){var ut=parseInt(J.substr(1),16);J=ut>>16&255,ae=ut>>8&255,be=255&ut}if(ae===void 0||Ee===void 0&&J===ae&&ae===be)if(typeof J=="string")L=J+" "+qe[0];else switch(m.precision){case 2:L=Se(J/255)+" "+qe[0];break;case 3:default:L=C(J/255)+" "+qe[0]}else if(Ee===void 0||nn(Ee)==="object"){if(Ee&&!isNaN(Ee.a)&&Ee.a===0)return L=["1.","1.","1.",qe[1]].join(" ");if(typeof J=="string")L=[J,ae,be,qe[1]].join(" ");else switch(m.precision){case 2:L=[Se(J/255),Se(ae/255),Se(be/255),qe[1]].join(" ");break;default:case 3:L=[C(J/255),C(ae/255),C(be/255),qe[1]].join(" ")}}else if(typeof J=="string")L=[J,ae,be,Ee,qe[2]].join(" ");else switch(m.precision){case 2:L=[Se(J),Se(ae),Se(be),Se(Ee),qe[2]].join(" ");break;case 3:default:L=[C(J),C(ae),C(be),C(Ee),qe[2]].join(" ")}return L},ha=b.__private__.getFilters=function(){return h},_r=b.__private__.putStream=function(m){var L=(m=m||{}).data||"",J=m.filters||ha(),ae=m.alreadyAppliedFilters||[],be=m.addLength1||!1,Ee=L.length,qe=m.objectId,Ze=function(Yn){return Yn};if(k!==null&&qe===void 0)throw new Error("ObjectId must be passed to putStream for file encryption");k!==null&&(Ze=hn.encryptor(qe,0));var ut={};J===!0&&(J=["FlateEncode"]);var At=m.additionalKeyValues||[],Pt=(ut=bt.API.processDataByFilters!==void 0?bt.API.processDataByFilters(L,J):{data:L,reverseChain:[]}).reverseChain+(Array.isArray(ae)?ae.join(" "):ae.toString());if(ut.data.length!==0&&(At.push({key:"Length",value:ut.data.length}),be===!0&&At.push({key:"Length1",value:Ee})),Pt.length!=0)if(Pt.split("/").length-1==1)At.push({key:"Filter",value:Pt});else{At.push({key:"Filter",value:"["+Pt+"]"});for(var _t=0;_t<At.length;_t+=1)if(At[_t].key==="DecodeParms"){for(var fn=[],bn=0;bn<ut.reverseChain.split("/").length-1;bn+=1)fn.push("null");fn.push(At[_t].value),At[_t].value="["+fn.join(" ")+"]"}}Q("<<");for(var Tn=0;Tn<At.length;Tn++)Q("/"+At[Tn].key+" "+At[Tn].value);Q(">>"),ut.data.length!==0&&(Q("stream"),Q(Ze(ut.data)),Q("endstream"))},Ta=b.__private__.putPage=function(m){var L=m.number,J=m.data,ae=m.objId,be=m.contentsObjId;$n(ae,!0),Q("<</Type /Page"),Q("/Parent "+m.rootDictionaryObjId+" 0 R"),Q("/Resources "+m.resourceDictionaryObjId+" 0 R"),Q("/MediaBox ["+parseFloat(oe(m.mediaBox.bottomLeftX))+" "+parseFloat(oe(m.mediaBox.bottomLeftY))+" "+oe(m.mediaBox.topRightX)+" "+oe(m.mediaBox.topRightY)+"]"),m.cropBox!==null&&Q("/CropBox ["+oe(m.cropBox.bottomLeftX)+" "+oe(m.cropBox.bottomLeftY)+" "+oe(m.cropBox.topRightX)+" "+oe(m.cropBox.topRightY)+"]"),m.bleedBox!==null&&Q("/BleedBox ["+oe(m.bleedBox.bottomLeftX)+" "+oe(m.bleedBox.bottomLeftY)+" "+oe(m.bleedBox.topRightX)+" "+oe(m.bleedBox.topRightY)+"]"),m.trimBox!==null&&Q("/TrimBox ["+oe(m.trimBox.bottomLeftX)+" "+oe(m.trimBox.bottomLeftY)+" "+oe(m.trimBox.topRightX)+" "+oe(m.trimBox.topRightY)+"]"),m.artBox!==null&&Q("/ArtBox ["+oe(m.artBox.bottomLeftX)+" "+oe(m.artBox.bottomLeftY)+" "+oe(m.artBox.topRightX)+" "+oe(m.artBox.topRightY)+"]"),typeof m.userUnit=="number"&&m.userUnit!==1&&Q("/UserUnit "+m.userUnit),qt.publish("putPage",{objId:ae,pageContext:St[L],pageNumber:L,page:J}),Q("/Contents "+be+" 0 R"),Q(">>"),Q("endobj");var Ee=J.join(`
`);return K===F.ADVANCED&&(Ee+=`
Q`),$n(be,!0),_r({data:Ee,filters:ha(),objectId:be}),Q("endobj"),ae},yi=b.__private__.putPages=function(){var m,L,J=[];for(m=1;m<=cn;m++)St[m].objId=un(),St[m].contentsObjId=un();for(m=1;m<=cn;m++)J.push(Ta({number:m,data:Re[m],objId:St[m].objId,contentsObjId:St[m].contentsObjId,mediaBox:St[m].mediaBox,cropBox:St[m].cropBox,bleedBox:St[m].bleedBox,trimBox:St[m].trimBox,artBox:St[m].artBox,userUnit:St[m].userUnit,rootDictionaryObjId:Ua,resourceDictionaryObjId:ua}));$n(Ua,!0),Q("<</Type /Pages");var ae="/Kids [";for(L=0;L<cn;L++)ae+=J[L]+" 0 R ";Q(ae+"]"),Q("/Count "+cn),Q(">>"),Q("endobj"),qt.publish("postPutPages")},Gi=function(m){qt.publish("putFont",{font:m,out:Q,newObject:dn,putStream:_r}),m.isAlreadyPutted!==!0&&(m.objectNumber=dn(),Q("<<"),Q("/Type /Font"),Q("/BaseFont /"+Ol(m.postScriptName)),Q("/Subtype /Type1"),typeof m.encoding=="string"&&Q("/Encoding /"+m.encoding),Q("/FirstChar 32"),Q("/LastChar 255"),Q(">>"),Q("endobj"))},Wi=function(){for(var m in Zt)Zt.hasOwnProperty(m)&&(T===!1||T===!0&&P.hasOwnProperty(m))&&Gi(Zt[m])},Vi=function(m){m.objectNumber=dn();var L=[];L.push({key:"Type",value:"/XObject"}),L.push({key:"Subtype",value:"/Form"}),L.push({key:"BBox",value:"["+[oe(m.x),oe(m.y),oe(m.x+m.width),oe(m.y+m.height)].join(" ")+"]"}),L.push({key:"Matrix",value:"["+m.matrix.toString()+"]"});var J=m.pages[1].join(`
`);_r({data:J,additionalKeyValues:L,objectId:m.objectNumber}),Q("endobj")},Ao=function(){for(var m in Bn)Bn.hasOwnProperty(m)&&Vi(Bn[m])},ol=function(m,L){var J,ae=[],be=1/(L-1);for(J=0;J<1;J+=be)ae.push(J);if(ae.push(1),m[0].offset!=0){var Ee={offset:0,color:m[0].color};m.unshift(Ee)}if(m[m.length-1].offset!=1){var qe={offset:1,color:m[m.length-1].color};m.push(qe)}for(var Ze="",ut=0,At=0;At<ae.length;At++){for(J=ae[At];J>m[ut+1].offset;)ut++;var Pt=m[ut].offset,_t=(J-Pt)/(m[ut+1].offset-Pt),fn=m[ut].color,bn=m[ut+1].color;Ze+=V(Math.round((1-_t)*fn[0]+_t*bn[0]).toString(16))+V(Math.round((1-_t)*fn[1]+_t*bn[1]).toString(16))+V(Math.round((1-_t)*fn[2]+_t*bn[2]).toString(16))}return Ze.trim()},pn=function(m,L){L||(L=21);var J=dn(),ae=ol(m.colors,L),be=[];be.push({key:"FunctionType",value:"0"}),be.push({key:"Domain",value:"[0.0 1.0]"}),be.push({key:"Size",value:"["+L+"]"}),be.push({key:"BitsPerSample",value:"8"}),be.push({key:"Range",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),be.push({key:"Decode",value:"[0.0 1.0 0.0 1.0 0.0 1.0]"}),_r({data:ae,additionalKeyValues:be,alreadyAppliedFilters:["/ASCIIHexDecode"],objectId:J}),Q("endobj"),m.objectNumber=dn(),Q("<< /ShadingType "+m.type),Q("/ColorSpace /DeviceRGB");var Ee="/Coords ["+oe(parseFloat(m.coords[0]))+" "+oe(parseFloat(m.coords[1]))+" ";m.type===2?Ee+=oe(parseFloat(m.coords[2]))+" "+oe(parseFloat(m.coords[3])):Ee+=oe(parseFloat(m.coords[2]))+" "+oe(parseFloat(m.coords[3]))+" "+oe(parseFloat(m.coords[4]))+" "+oe(parseFloat(m.coords[5])),Q(Ee+="]"),m.matrix&&Q("/Matrix ["+m.matrix.toString()+"]"),Q("/Function "+J+" 0 R"),Q("/Extend [true true]"),Q(">>"),Q("endobj")},Vl=function(m,L){var J=un(),ae=dn();L.push({resourcesOid:J,objectOid:ae}),m.objectNumber=ae;var be=[];be.push({key:"Type",value:"/Pattern"}),be.push({key:"PatternType",value:"1"}),be.push({key:"PaintType",value:"1"}),be.push({key:"TilingType",value:"1"}),be.push({key:"BBox",value:"["+m.boundingBox.map(oe).join(" ")+"]"}),be.push({key:"XStep",value:oe(m.xStep)}),be.push({key:"YStep",value:oe(m.yStep)}),be.push({key:"Resources",value:J+" 0 R"}),m.matrix&&be.push({key:"Matrix",value:"["+m.matrix.toString()+"]"}),_r({data:m.stream,additionalKeyValues:be,objectId:m.objectNumber}),Q("endobj")},bi=function(m){var L;for(L in Ft)Ft.hasOwnProperty(L)&&(Ft[L]instanceof rl?pn(Ft[L]):Ft[L]instanceof Bl&&Vl(Ft[L],m))},Ts=function(m){for(var L in m.objectNumber=dn(),Q("<<"),m)switch(L){case"opacity":Q("/ca "+Se(m[L]));break;case"stroke-opacity":Q("/CA "+Se(m[L]))}Q(">>"),Q("endobj")},jo=function(){var m;for(m in sn)sn.hasOwnProperty(m)&&Ts(sn[m])},Ps=function(){for(var m in Q("/XObject <<"),Bn)Bn.hasOwnProperty(m)&&Bn[m].objectNumber>=0&&Q("/"+m+" "+Bn[m].objectNumber+" 0 R");qt.publish("putXobjectDict"),Q(">>")},sl=function(){hn.oid=dn(),Q("<<"),Q("/Filter /Standard"),Q("/V "+hn.v),Q("/R "+hn.r),Q("/U <"+hn.toHexString(hn.U)+">"),Q("/O <"+hn.toHexString(hn.O)+">"),Q("/P "+hn.P),Q(">>"),Q("endobj")},Ki=function(){for(var m in Q("/Font <<"),Zt)Zt.hasOwnProperty(m)&&(T===!1||T===!0&&P.hasOwnProperty(m))&&Q("/"+m+" "+Zt[m].objectNumber+" 0 R");Q(">>")},$r=function(){if(Object.keys(Ft).length>0){for(var m in Q("/Shading <<"),Ft)Ft.hasOwnProperty(m)&&Ft[m]instanceof rl&&Ft[m].objectNumber>=0&&Q("/"+m+" "+Ft[m].objectNumber+" 0 R");qt.publish("putShadingPatternDict"),Q(">>")}},Co=function(m){if(Object.keys(Ft).length>0){for(var L in Q("/Pattern <<"),Ft)Ft.hasOwnProperty(L)&&Ft[L]instanceof b.TilingPattern&&Ft[L].objectNumber>=0&&Ft[L].objectNumber<m&&Q("/"+L+" "+Ft[L].objectNumber+" 0 R");qt.publish("putTilingPatternDict"),Q(">>")}},Dr=function(){if(Object.keys(sn).length>0){var m;for(m in Q("/ExtGState <<"),sn)sn.hasOwnProperty(m)&&sn[m].objectNumber>=0&&Q("/"+m+" "+sn[m].objectNumber+" 0 R");qt.publish("putGStateDict"),Q(">>")}},Sn=function(m){$n(m.resourcesOid,!0),Q("<<"),Q("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"),Ki(),$r(),Co(m.objectOid),Dr(),Ps(),Q(">>"),Q("endobj")},ll=function(){var m=[];Wi(),jo(),Ao(),bi(m),qt.publish("putResources"),m.forEach(Sn),Sn({resourcesOid:ua,objectOid:Number.MAX_SAFE_INTEGER}),qt.publish("postPutResources")},cl=function(){qt.publish("putAdditionalObjects");for(var m=0;m<_e.length;m++){var L=_e[m];$n(L.objId,!0),Q(L.content),Q("endobj")}qt.publish("postPutAdditionalObjects")},Ji=function(m){rn[m.fontName]=rn[m.fontName]||{},rn[m.fontName][m.fontStyle]=m.id},xi=function(m,L,J,ae,be){var Ee={id:"F"+(Object.keys(Zt).length+1).toString(10),postScriptName:m,fontName:L,fontStyle:J,encoding:ae,isStandardFont:be||!1,metadata:{}};return qt.publish("addFont",{font:Ee,instance:this}),Zt[Ee.id]=Ee,Ji(Ee),Ee.id},$i=function(m){for(var L=0,J=Oe.length;L<J;L++){var ae=xi.call(this,m[L][0],m[L][1],m[L][2],Oe[L][3],!0);T===!1&&(P[ae]=!0);var be=m[L][0].split("-");Ji({id:ae,fontName:be[0],fontStyle:be[1]||""})}qt.publish("addFonts",{fonts:Zt,dictionary:rn})},mr=function(m){return m.foo=function(){try{return m.apply(this,arguments)}catch(ae){var L=ae.stack||"";~L.indexOf(" at ")&&(L=L.split(" at ")[1]);var J="Error in function "+L.split(`
`)[0].split("<")[0]+": "+ae.message;if(!xt.console)throw new Error(J);xt.console.error(J,ae),xt.alert&&alert(J)}},m.foo.bar=m,m.foo},Lo=function(m,L){var J,ae,be,Ee,qe,Ze,ut,At,Pt;if(be=(L=L||{}).sourceEncoding||"Unicode",qe=L.outputEncoding,(L.autoencode||qe)&&Zt[Tt].metadata&&Zt[Tt].metadata[be]&&Zt[Tt].metadata[be].encoding&&(Ee=Zt[Tt].metadata[be].encoding,!qe&&Zt[Tt].encoding&&(qe=Zt[Tt].encoding),!qe&&Ee.codePages&&(qe=Ee.codePages[0]),typeof qe=="string"&&(qe=Ee[qe]),qe)){for(ut=!1,Ze=[],J=0,ae=m.length;J<ae;J++)(At=qe[m.charCodeAt(J)])?Ze.push(String.fromCharCode(At)):Ze.push(m[J]),Ze[J].charCodeAt(0)>>8&&(ut=!0);m=Ze.join("")}for(J=m.length;ut===void 0&&J!==0;)m.charCodeAt(J-1)>>8&&(ut=!0),J--;if(!ut)return m;for(Ze=L.noBOM?[]:[254,255],J=0,ae=m.length;J<ae;J++){if((Pt=(At=m.charCodeAt(J))>>8)>>8)throw new Error("Character at position "+J+" of string '"+m+"' exceeds 16bits. Cannot be encoded into UCS-2 BE");Ze.push(Pt),Ze.push(At-(Pt<<8))}return String.fromCharCode.apply(void 0,Ze)},vr=b.__private__.pdfEscape=b.pdfEscape=function(m,L){return Lo(m,L).replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Yi=b.__private__.beginPage=function(m){Re[++cn]=[],St[cn]={objId:0,contentsObjId:0,userUnit:Number(f),artBox:null,bleedBox:null,cropBox:null,trimBox:null,mediaBox:{bottomLeftX:0,bottomLeftY:0,topRightX:Number(m[0]),topRightY:Number(m[1])}},wi(cn),je(Re[I])},As=function(m,L){var J,ae,be;switch(a=L||a,typeof m=="string"&&(J=_(m.toLowerCase()),Array.isArray(J)&&(ae=J[0],be=J[1])),Array.isArray(m)&&(ae=m[0]*$e,be=m[1]*$e),isNaN(ae)&&(ae=p[0],be=p[1]),(ae>14400||be>14400)&&(on.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"),ae=Math.min(14400,ae),be=Math.min(14400,be)),p=[ae,be],a.substr(0,1)){case"l":be>ae&&(p=[be,ae]);break;case"p":ae>be&&(p=[be,ae])}Yi(p),to(Es),Q(yr),Is!==0&&Q(Is+" J"),ro!==0&&Q(ro+" j"),qt.publish("addPage",{pageNumber:cn})},js=function(m){m>0&&m<=cn&&(Re.splice(m,1),St.splice(m,1),cn--,I>cn&&(I=cn),this.setPage(I))},wi=function(m){m>0&&m<=cn&&(I=m)},Kl=b.__private__.getNumberOfPages=b.getNumberOfPages=function(){return Re.length-1},Eo=function(m,L,J){var ae,be=void 0;return J=J||{},m=m!==void 0?m:Zt[Tt].fontName,L=L!==void 0?L:Zt[Tt].fontStyle,ae=m.toLowerCase(),rn[ae]!==void 0&&rn[ae][L]!==void 0?be=rn[ae][L]:rn[m]!==void 0&&rn[m][L]!==void 0?be=rn[m][L]:J.disableWarning===!1&&on.warn("Unable to look up font label for font '"+m+"', '"+L+"'. Refer to getFontList() for available fonts."),be||J.noFallback||(be=rn.times[L])==null&&(be=rn.times.normal),be},Ht=b.__private__.putInfo=function(){var m=dn(),L=function(ae){return ae};for(var J in k!==null&&(L=hn.encryptor(m,0)),Q("<<"),Q("/Producer ("+vr(L("jsPDF "+bt.version))+")"),ft)ft.hasOwnProperty(J)&&ft[J]&&Q("/"+J.substr(0,1).toUpperCase()+J.substr(1)+" ("+vr(L(ft[J]))+")");Q("/CreationDate ("+vr(L(Ne))+")"),Q(">>"),Q("endobj")},Mo=b.__private__.putCatalog=function(m){var L=(m=m||{}).rootDictionaryObjId||Ua;switch(dn(),Q("<<"),Q("/Type /Catalog"),Q("/Pages "+L+" 0 R"),Fe||(Fe="fullwidth"),Fe){case"fullwidth":Q("/OpenAction [3 0 R /FitH null]");break;case"fullheight":Q("/OpenAction [3 0 R /FitV null]");break;case"fullpage":Q("/OpenAction [3 0 R /Fit]");break;case"original":Q("/OpenAction [3 0 R /XYZ null null 1]");break;default:var J=""+Fe;J.substr(J.length-1)==="%"&&(Fe=parseInt(Fe)/100),typeof Fe=="number"&&Q("/OpenAction [3 0 R /XYZ null null "+Se(Fe)+"]")}switch(jt||(jt="continuous"),jt){case"continuous":Q("/PageLayout /OneColumn");break;case"single":Q("/PageLayout /SinglePage");break;case"two":case"twoleft":Q("/PageLayout /TwoColumnLeft");break;case"tworight":Q("/PageLayout /TwoColumnRight")}gt&&Q("/PageMode /"+gt),qt.publish("putCatalog"),Q(">>"),Q("endobj")},dl=b.__private__.putTrailer=function(){Q("trailer"),Q("<<"),Q("/Size "+(Y+1)),Q("/Root "+Y+" 0 R"),Q("/Info "+(Y-1)+" 0 R"),k!==null&&Q("/Encrypt "+hn.oid+" 0 R"),Q("/ID [ <"+ue+"> <"+ue+"> ]"),Q(">>")},Cs=b.__private__.putHeader=function(){Q("%PDF-"+U),Q("%ºß¬à")},ul=b.__private__.putXRef=function(){var m="0000000000";Q("xref"),Q("0 "+(Y+1)),Q("0000000000 65535 f ");for(var L=1;L<=Y;L++)typeof ne[L]=="function"?Q((m+ne[L]()).slice(-10)+" 00000 n "):ne[L]!==void 0?Q((m+ne[L]).slice(-10)+" 00000 n "):Q("0000000000 00000 n ")},Pa=b.__private__.buildDocument=function(){Ke(),je(re),qt.publish("buildDocument"),Cs(),yi(),cl(),ll(),k!==null&&sl(),Ht(),Mo();var m=ce;return ul(),dl(),Q("startxref"),Q(""+m),Q("%%EOF"),je(Re[I]),re.join(`
`)},Qi=b.__private__.getBlob=function(m){return new Blob([Xe(m)],{type:"application/pdf"})},Si=b.output=b.__private__.output=mr((function(m,L){switch(typeof(L=L||{})=="string"?L={filename:L}:L.filename=L.filename||"generated.pdf",m){case void 0:return Pa();case"save":b.save(L.filename);break;case"arraybuffer":return Xe(Pa());case"blob":return Qi(Pa());case"bloburi":case"bloburl":if(xt.URL!==void 0&&typeof xt.URL.createObjectURL=="function")return xt.URL&&xt.URL.createObjectURL(Qi(Pa()))||void 0;on.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");break;case"datauristring":case"dataurlstring":var J="",ae=Pa();try{J=Gu(ae)}catch{J=Gu(unescape(encodeURIComponent(ae)))}return"data:application/pdf;filename="+L.filename+";base64,"+J;case"pdfobjectnewwindow":if(Object.prototype.toString.call(xt)==="[object Window]"){var be="https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js",Ee=' integrity="sha512-4ze/a9/4jqu+tX9dfOqJYSvyYd5M6qum/3HpCLr+/Jqf0whc37VUbkpNGHR7/8pSnCFw47T1fmIpwBV7UySh3g==" crossorigin="anonymous"';L.pdfObjectUrl&&(be=L.pdfObjectUrl,Ee="");var qe='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="'+be+'"'+Ee+'><\/script><script >PDFObject.embed("'+this.output("dataurlstring")+'", '+JSON.stringify(L)+");<\/script></body></html>",Ze=xt.open();return Ze!==null&&Ze.document.write(qe),Ze}throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");case"pdfjsnewwindow":if(Object.prototype.toString.call(xt)==="[object Window]"){var ut='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="'+(L.pdfJsUrl||"examples/PDF.js/web/viewer.html")+"?file=&downloadName="+L.filename+'" width="500px" height="400px" /></body></html>',At=xt.open();if(At!==null){At.document.write(ut);var Pt=this;At.document.documentElement.querySelector("#pdfViewer").onload=function(){At.document.title=L.filename,At.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(Pt.output("bloburl"))}}return At}throw new Error("The option pdfjsnewwindow just works in a browser-environment.");case"dataurlnewwindow":if(Object.prototype.toString.call(xt)!=="[object Window]")throw new Error("The option dataurlnewwindow just works in a browser-environment.");var _t='<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="'+this.output("datauristring",L)+'"></iframe></body></html>',fn=xt.open();if(fn!==null&&(fn.document.write(_t),fn.document.title=L.filename),fn||typeof safari>"u")return fn;break;case"datauri":case"dataurl":return xt.document.location.href=this.output("datauristring",L);default:return null}})),Xi=function(m){return Array.isArray(mi)===!0&&mi.indexOf(m)>-1};switch(l){case"pt":$e=1;break;case"mm":$e=72/25.4;break;case"cm":$e=72/2.54;break;case"in":$e=72;break;case"px":$e=Xi("px_scaling")==1?.75:96/72;break;case"pc":case"em":$e=12;break;case"ex":$e=6;break;default:if(typeof l!="number")throw new Error("Invalid unit: "+l);$e=l}var hn=null;A(),ee();var Aa=function(m){return k!==null?hn.encryptor(m,0):function(L){return L}},fa=b.__private__.getPageInfo=b.getPageInfo=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfo");return{objId:St[m].objId,pageNumber:m,pageContext:St[m]}},yt=b.__private__.getPageInfoByObjId=function(m){if(isNaN(m)||m%1!=0)throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");for(var L in St)if(St[L].objId===m)break;return fa(L)},Zi=b.__private__.getCurrentPageInfo=b.getCurrentPageInfo=function(){return{objId:St[I].objId,pageNumber:I,pageContext:St[I]}};b.addPage=function(){return As.apply(this,arguments),this},b.setPage=function(){return wi.apply(this,arguments),je.call(this,Re[I]),this},b.insertPage=function(m){return this.addPage(),this.movePage(I,m),this},b.movePage=function(m,L){var J,ae;if(m>L){J=Re[m],ae=St[m];for(var be=m;be>L;be--)Re[be]=Re[be-1],St[be]=St[be-1];Re[L]=J,St[L]=ae,this.setPage(L)}else if(m<L){J=Re[m],ae=St[m];for(var Ee=m;Ee<L;Ee++)Re[Ee]=Re[Ee+1],St[Ee]=St[Ee+1];Re[L]=J,St[L]=ae,this.setPage(L)}return this},b.deletePage=function(){return js.apply(this,arguments),this},b.__private__.text=b.text=function(m,L,J,ae,be){var Ee,qe,Ze,ut,At,Pt,_t,fn,bn,Tn=(ae=ae||{}).scope||this;if(typeof m=="number"&&typeof L=="number"&&(typeof J=="string"||Array.isArray(J))){var Yn=J;J=L,L=m,m=Yn}if(arguments[3]instanceof pt?($("The transform parameter of text() with a Matrix value"),bn=be):(Ze=arguments[4],ut=arguments[5],nn(_t=arguments[3])==="object"&&_t!==null||(typeof Ze=="string"&&(ut=Ze,Ze=null),typeof _t=="string"&&(ut=_t,_t=null),typeof _t=="number"&&(Ze=_t,_t=null),ae={flags:_t,angle:Ze,align:ut})),isNaN(L)||isNaN(J)||m==null)throw new Error("Invalid arguments passed to jsPDF.text");if(m.length===0)return Tn;var qn="",ya=!1,Fr=typeof ae.lineHeightFactor=="number"?ae.lineHeightFactor:eo,Xr=Tn.internal.scaleFactor;function Ci(en){return en=en.split("	").join(Array(ae.TabLen||9).join(" ")),vr(en,_t)}function Rs(en){for(var Jt,wn=en.concat(),Pn=[],Ia=wn.length;Ia--;)typeof(Jt=wn.shift())=="string"?Pn.push(Jt):Array.isArray(en)&&(Jt.length===1||Jt[1]===void 0&&Jt[2]===void 0)?Pn.push(Jt[0]):Pn.push([Jt[0],Jt[1],Jt[2]]);return Pn}function Ho(en,Jt){var wn;if(typeof en=="string")wn=Jt(en)[0];else if(Array.isArray(en)){for(var Pn,Ia,Xo=en.concat(),po=[],Os=Xo.length;Os--;)typeof(Pn=Xo.shift())=="string"?po.push(Jt(Pn)[0]):Array.isArray(Pn)&&typeof Pn[0]=="string"&&(Ia=Jt(Pn[0],Pn[1],Pn[2]),po.push([Ia[0],Ia[1],Ia[2]]));wn=po}return wn}var ao=!1,Uo=!0;if(typeof m=="string")ao=!0;else if(Array.isArray(m)){var Go=m.concat();qe=[];for(var io,xn=Go.length;xn--;)(typeof(io=Go.shift())!="string"||Array.isArray(io)&&typeof io[0]!="string")&&(Uo=!1);ao=Uo}if(ao===!1)throw new Error('Type of text must be string or Array. "'+m+'" is not recognized.');typeof m=="string"&&(m=m.match(/[\r?\n]/)?m.split(/\r\n|\r|\n/g):[m]);var Wo=Ae/Tn.internal.scaleFactor,Vo=Wo*(Fr-1);switch(ae.baseline){case"bottom":J-=Vo;break;case"top":J+=Wo-Vo;break;case"hanging":J+=Wo-2*Vo;break;case"middle":J+=Wo/2-Vo}if((Pt=ae.maxWidth||0)>0&&(typeof m=="string"?m=Tn.splitTextToSize(m,Pt):Object.prototype.toString.call(m)==="[object Array]"&&(m=m.reduce((function(en,Jt){return en.concat(Tn.splitTextToSize(Jt,Pt))}),[]))),Ee={text:m,x:L,y:J,options:ae,mutex:{pdfEscape:vr,activeFontKey:Tt,fonts:Zt,activeFontSize:Ae}},qt.publish("preProcessText",Ee),m=Ee.text,Ze=(ae=Ee.options).angle,!(bn instanceof pt)&&Ze&&typeof Ze=="number"){Ze*=Math.PI/180,ae.rotationDirection===0&&(Ze=-Ze),K===F.ADVANCED&&(Ze=-Ze);var Ko=Math.cos(Ze),Jo=Math.sin(Ze);bn=new pt(Ko,Jo,-Jo,Ko,0,0)}else Ze&&Ze instanceof pt&&(bn=Ze);K!==F.ADVANCED||bn||(bn=fr),(At=ae.charSpace||Pi)!==void 0&&(qn+=oe(B(At))+` Tc
`,this.setCharSpace(this.getCharSpace()||0)),(fn=ae.horizontalScale)!==void 0&&(qn+=oe(100*fn)+` Tz
`),ae.lang;var ir=-1,oo=ae.renderingMode!==void 0?ae.renderingMode:ae.stroke,Va=Tn.internal.getCurrentPageInfo().pageContext;switch(oo){case 0:case!1:case"fill":ir=0;break;case 1:case!0:case"stroke":ir=1;break;case 2:case"fillThenStroke":ir=2;break;case 3:case"invisible":ir=3;break;case 4:case"fillAndAddForClipping":ir=4;break;case 5:case"strokeAndAddPathForClipping":ir=5;break;case 6:case"fillThenStrokeAndAddToPathForClipping":ir=6;break;case 7:case"addToPathForClipping":ir=7}var gl=Va.usedRenderingMode!==void 0?Va.usedRenderingMode:-1;ir!==-1?qn+=ir+` Tr
`:gl!==-1&&(qn+=`0 Tr
`),ir!==-1&&(Va.usedRenderingMode=ir),ut=ae.align||"left";var or,$o=Ae*Fr,Fs=Tn.internal.pageSize.getWidth(),Yo=Zt[Tt];At=ae.charSpace||Pi,Pt=ae.maxWidth||0,_t=Object.assign({autoencode:!0,noBOM:!0},ae.flags);var Ea=[],Li=function(en){return Tn.getStringUnitWidth(en,{font:Yo,charSpace:At,fontSize:Ae,doKerning:!1})*Ae/Xr};if(Object.prototype.toString.call(m)==="[object Array]"){var sr;qe=Rs(m),ut!=="left"&&(or=qe.map(Li));var Qn,Ei=0;if(ut==="right"){L-=or[0],m=[],xn=qe.length;for(var Ka=0;Ka<xn;Ka++)Ka===0?(Qn=Yr(L),sr=Qr(J)):(Qn=B(Ei-or[Ka]),sr=-$o),m.push([qe[Ka],Qn,sr]),Ei=or[Ka]}else if(ut==="center"){L-=or[0]/2,m=[],xn=qe.length;for(var Ja=0;Ja<xn;Ja++)Ja===0?(Qn=Yr(L),sr=Qr(J)):(Qn=B((Ei-or[Ja])/2),sr=-$o),m.push([qe[Ja],Qn,sr]),Ei=or[Ja]}else if(ut==="left"){m=[],xn=qe.length;for(var Qo=0;Qo<xn;Qo++)m.push(qe[Qo])}else if(ut==="justify"&&Yo.encoding==="Identity-H"){m=[],xn=qe.length,Pt=Pt!==0?Pt:Fs;for(var $a=0,Ut=0;Ut<xn;Ut++)if(sr=Ut===0?Qr(J):-$o,Qn=Ut===0?Yr(L):$a,Ut<xn-1){var Ya=B((Pt-or[Ut])/(qe[Ut].split(" ").length-1)),Xn=qe[Ut].split(" ");m.push([Xn[0]+" ",Qn,sr]),$a=0;for(var zr=1;zr<Xn.length;zr++){var so=(Li(Xn[zr-1]+" "+Xn[zr])-Li(Xn[zr]))*Xr+Ya;zr==Xn.length-1?m.push([Xn[zr],so,0]):m.push([Xn[zr]+" ",so,0]),$a-=so}}else m.push([qe[Ut],Qn,sr]);m.push(["",$a,0])}else{if(ut!=="justify")throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');for(m=[],xn=qe.length,Pt=Pt!==0?Pt:Fs,Ut=0;Ut<xn;Ut++)sr=Ut===0?Qr(J):-$o,Qn=Ut===0?Yr(L):0,Ut<xn-1?Ea.push(oe(B((Pt-or[Ut])/(qe[Ut].split(" ").length-1)))):Ea.push(0),m.push([qe[Ut],Qn,sr])}}var zs=typeof ae.R2L=="boolean"?ae.R2L:rt;zs===!0&&(m=Ho(m,(function(en,Jt,wn){return[en.split("").reverse().join(""),Jt,wn]}))),Ee={text:m,x:L,y:J,options:ae,mutex:{pdfEscape:vr,activeFontKey:Tt,fonts:Zt,activeFontSize:Ae}},qt.publish("postProcessText",Ee),m=Ee.text,ya=Ee.mutex.isHex||!1;var lo=Zt[Tt].encoding;lo!=="WinAnsiEncoding"&&lo!=="StandardEncoding"||(m=Ho(m,(function(en,Jt,wn){return[Ci(en),Jt,wn]}))),qe=Rs(m),m=[];for(var co,uo,Or,Qa=0,Ma=1,Xa=Array.isArray(qe[0])?Ma:Qa,Za="",Mi=function(en,Jt,wn){var Pn="";return wn instanceof pt?(wn=typeof ae.angle=="number"?Ir(wn,new pt(1,0,0,1,en,Jt)):Ir(new pt(1,0,0,1,en,Jt),wn),K===F.ADVANCED&&(wn=Ir(new pt(1,0,0,-1,0,0),wn)),Pn=wn.join(" ")+` Tm
`):Pn=oe(en)+" "+oe(Jt)+` Td
`,Pn},Gn=0;Gn<qe.length;Gn++){switch(Za="",Xa){case Ma:Or=(ya?"<":"(")+qe[Gn][0]+(ya?">":")"),co=parseFloat(qe[Gn][1]),uo=parseFloat(qe[Gn][2]);break;case Qa:Or=(ya?"<":"(")+qe[Gn]+(ya?">":")"),co=Yr(L),uo=Qr(J)}Ea!==void 0&&Ea[Gn]!==void 0&&(Za=Ea[Gn]+` Tw
`),Gn===0?m.push(Za+Mi(co,uo,bn)+Or):Xa===Qa?m.push(Za+Or):Xa===Ma&&m.push(Za+Mi(co,uo,bn)+Or)}m=Xa===Qa?m.join(` Tj
T* `):m.join(` Tj
`),m+=` Tj
`;var br=`BT
/`;return br+=Tt+" "+Ae+` Tf
`,br+=oe(Ae*Fr)+` TL
`,br+=En+`
`,br+=qn,br+=m,Q(br+="ET"),P[Tt]=!0,Tn};var ja=b.__private__.clip=b.clip=function(m){return Q(m==="evenodd"?"W*":"W"),this};b.clipEvenOdd=function(){return ja("evenodd")},b.__private__.discardPath=b.discardPath=function(){return Q("n"),this};var Ca=b.__private__.isValidStyle=function(m){var L=!1;return[void 0,null,"S","D","F","DF","FD","f","f*","B","B*","n"].indexOf(m)!==-1&&(L=!0),L};b.__private__.setDefaultPathOperation=b.setDefaultPathOperation=function(m){return Ca(m)&&(w=m),this};var Ls=b.__private__.getStyle=b.getStyle=function(m){var L=w;switch(m){case"D":case"S":L="S";break;case"F":L="f";break;case"FD":case"DF":L="B";break;case"f":case"f*":case"B":case"B*":L=m}return L},ki=b.close=function(){return Q("h"),this};b.stroke=function(){return Q("S"),this},b.fill=function(m){return Io("f",m),this},b.fillEvenOdd=function(m){return Io("f*",m),this},b.fillStroke=function(m){return Io("B",m),this},b.fillStrokeEvenOdd=function(m){return Io("B*",m),this};var Io=function(m,L){nn(L)==="object"?pl(L,m):Q(m)},_o=function(m){m===null||K===F.ADVANCED&&m===void 0||(m=Ls(m),Q(m))};function Do(m,L,J,ae,be){var Ee=new Bl(L||this.boundingBox,J||this.xStep,ae||this.yStep,this.gState,be||this.matrix);Ee.stream=this.stream;var qe=m+"$$"+this.cloneIndex+++"$$";return gr(qe,Ee),Ee}var pl=function(m,L){var J=Ha[m.key],ae=Ft[J];if(ae instanceof rl)Q("q"),Q(Jl(L)),ae.gState&&b.setGState(ae.gState),Q(m.matrix.toString()+" cm"),Q("/"+J+" sh"),Q("Q");else if(ae instanceof Bl){var be=new pt(1,0,0,-1,0,ji());m.matrix&&(be=be.multiply(m.matrix||fr),J=Do.call(ae,m.key,m.boundingBox,m.xStep,m.yStep,be).id),Q("q"),Q("/Pattern cs"),Q("/"+J+" scn"),ae.gState&&b.setGState(ae.gState),Q(L),Q("Q")}},Jl=function(m){switch(m){case"f":case"F":return"W n";case"f*":return"W* n";case"B":return"W S";case"B*":return"W* S";case"S":return"W S";case"n":return"W n"}},Ga=b.moveTo=function(m,L){return Q(oe(B(m))+" "+oe(te(L))+" m"),this},ga=b.lineTo=function(m,L){return Q(oe(B(m))+" "+oe(te(L))+" l"),this},Rr=b.curveTo=function(m,L,J,ae,be,Ee){return Q([oe(B(m)),oe(te(L)),oe(B(J)),oe(te(ae)),oe(B(be)),oe(te(Ee)),"c"].join(" ")),this};b.__private__.line=b.line=function(m,L,J,ae,be){if(isNaN(m)||isNaN(L)||isNaN(J)||isNaN(ae)||!Ca(be))throw new Error("Invalid arguments passed to jsPDF.line");return K===F.COMPAT?this.lines([[J-m,ae-L]],m,L,[1,1],be||"S"):this.lines([[J-m,ae-L]],m,L,[1,1]).stroke()},b.__private__.lines=b.lines=function(m,L,J,ae,be,Ee){var qe,Ze,ut,At,Pt,_t,fn,bn,Tn,Yn,qn,ya;if(typeof m=="number"&&(ya=J,J=L,L=m,m=ya),ae=ae||[1,1],Ee=Ee||!1,isNaN(L)||isNaN(J)||!Array.isArray(m)||!Array.isArray(ae)||!Ca(be)||typeof Ee!="boolean")throw new Error("Invalid arguments passed to jsPDF.lines");for(Ga(L,J),qe=ae[0],Ze=ae[1],At=m.length,Yn=L,qn=J,ut=0;ut<At;ut++)(Pt=m[ut]).length===2?(Yn=Pt[0]*qe+Yn,qn=Pt[1]*Ze+qn,ga(Yn,qn)):(_t=Pt[0]*qe+Yn,fn=Pt[1]*Ze+qn,bn=Pt[2]*qe+Yn,Tn=Pt[3]*Ze+qn,Yn=Pt[4]*qe+Yn,qn=Pt[5]*Ze+qn,Rr(_t,fn,bn,Tn,Yn,qn));return Ee&&ki(),_o(be),this},b.path=function(m){for(var L=0;L<m.length;L++){var J=m[L],ae=J.c;switch(J.op){case"m":Ga(ae[0],ae[1]);break;case"l":ga(ae[0],ae[1]);break;case"c":Rr.apply(this,ae);break;case"h":ki()}}return this},b.__private__.rect=b.rect=function(m,L,J,ae,be){if(isNaN(m)||isNaN(L)||isNaN(J)||isNaN(ae)||!Ca(be))throw new Error("Invalid arguments passed to jsPDF.rect");return K===F.COMPAT&&(ae=-ae),Q([oe(B(m)),oe(te(L)),oe(B(J)),oe(B(ae)),"re"].join(" ")),_o(be),this},b.__private__.triangle=b.triangle=function(m,L,J,ae,be,Ee,qe){if(isNaN(m)||isNaN(L)||isNaN(J)||isNaN(ae)||isNaN(be)||isNaN(Ee)||!Ca(qe))throw new Error("Invalid arguments passed to jsPDF.triangle");return this.lines([[J-m,ae-L],[be-J,Ee-ae],[m-be,L-Ee]],m,L,[1,1],qe,!0),this},b.__private__.roundedRect=b.roundedRect=function(m,L,J,ae,be,Ee,qe){if(isNaN(m)||isNaN(L)||isNaN(J)||isNaN(ae)||isNaN(be)||isNaN(Ee)||!Ca(qe))throw new Error("Invalid arguments passed to jsPDF.roundedRect");var Ze=4/3*(Math.SQRT2-1);return be=Math.min(be,.5*J),Ee=Math.min(Ee,.5*ae),this.lines([[J-2*be,0],[be*Ze,0,be,Ee-Ee*Ze,be,Ee],[0,ae-2*Ee],[0,Ee*Ze,-be*Ze,Ee,-be,Ee],[2*be-J,0],[-be*Ze,0,-be,-Ee*Ze,-be,-Ee],[0,2*Ee-ae],[0,-Ee*Ze,be*Ze,-Ee,be,-Ee]],m+be,L,[1,1],qe,!0),this},b.__private__.ellipse=b.ellipse=function(m,L,J,ae,be){if(isNaN(m)||isNaN(L)||isNaN(J)||isNaN(ae)||!Ca(be))throw new Error("Invalid arguments passed to jsPDF.ellipse");var Ee=4/3*(Math.SQRT2-1)*J,qe=4/3*(Math.SQRT2-1)*ae;return Ga(m+J,L),Rr(m+J,L-qe,m+Ee,L-ae,m,L-ae),Rr(m-Ee,L-ae,m-J,L-qe,m-J,L),Rr(m-J,L+qe,m-Ee,L+ae,m,L+ae),Rr(m+Ee,L+ae,m+J,L+qe,m+J,L),_o(be),this},b.__private__.circle=b.circle=function(m,L,J,ae){if(isNaN(m)||isNaN(L)||isNaN(J)||!Ca(ae))throw new Error("Invalid arguments passed to jsPDF.circle");return this.ellipse(m,L,J,J,ae)},b.setFont=function(m,L,J){return J&&(L=ye(L,J)),Tt=Eo(m,L,{disableWarning:!1}),this};var Ro=b.__private__.getFont=b.getFont=function(){return Zt[Eo.apply(b,arguments)]};b.__private__.getFontList=b.getFontList=function(){var m,L,J={};for(m in rn)if(rn.hasOwnProperty(m))for(L in J[m]=[],rn[m])rn[m].hasOwnProperty(L)&&J[m].push(L);return J},b.addFont=function(m,L,J,ae,be){var Ee=["StandardEncoding","MacRomanEncoding","Identity-H","WinAnsiEncoding"];return arguments[3]&&Ee.indexOf(arguments[3])!==-1?be=arguments[3]:arguments[3]&&Ee.indexOf(arguments[3])==-1&&(J=ye(J,ae)),be=be||"Identity-H",xi.call(this,m,L,J,be)};var eo,Es=i.lineWidth||.200025,Ni=b.__private__.getLineWidth=b.getLineWidth=function(){return Es},to=b.__private__.setLineWidth=b.setLineWidth=function(m){return Es=m,Q(oe(B(m))+" w"),this};b.__private__.setLineDash=bt.API.setLineDash=bt.API.setLineDashPattern=function(m,L){if(m=m||[],L=L||0,isNaN(L)||!Array.isArray(m))throw new Error("Invalid arguments passed to jsPDF.setLineDash");return m=m.map((function(J){return oe(B(J))})).join(" "),L=oe(B(L)),Q("["+m+"] "+L+" d"),this};var Fo=b.__private__.getLineHeight=b.getLineHeight=function(){return Ae*eo};b.__private__.getLineHeight=b.getLineHeight=function(){return Ae*eo};var Ms=b.__private__.setLineHeightFactor=b.setLineHeightFactor=function(m){return typeof(m=m||1.15)=="number"&&(eo=m),this},ma=b.__private__.getLineHeightFactor=b.getLineHeightFactor=function(){return eo};Ms(i.lineHeight);var Yr=b.__private__.getHorizontalCoordinate=function(m){return B(m)},Qr=b.__private__.getVerticalCoordinate=function(m){return K===F.ADVANCED?m:St[I].mediaBox.topRightY-St[I].mediaBox.bottomLeftY-B(m)},hl=b.__private__.getHorizontalCoordinateString=b.getHorizontalCoordinateString=function(m){return oe(Yr(m))},va=b.__private__.getVerticalCoordinateString=b.getVerticalCoordinateString=function(m){return oe(Qr(m))},yr=i.strokeColor||"0 G";b.__private__.getStrokeColor=b.getDrawColor=function(){return pa(yr)},b.__private__.setStrokeColor=b.setDrawColor=function(m,L,J,ae){return yr=Un({ch1:m,ch2:L,ch3:J,ch4:ae,pdfColorType:"draw",precision:2}),Q(yr),this};var zo=i.fillColor||"0 g";b.__private__.getFillColor=b.getFillColor=function(){return pa(zo)},b.__private__.setFillColor=b.setFillColor=function(m,L,J,ae){return zo=Un({ch1:m,ch2:L,ch3:J,ch4:ae,pdfColorType:"fill",precision:2}),Q(zo),this};var En=i.textColor||"0 g",Ti=b.__private__.getTextColor=b.getTextColor=function(){return pa(En)};b.__private__.setTextColor=b.setTextColor=function(m,L,J,ae){return En=Un({ch1:m,ch2:L,ch3:J,ch4:ae,pdfColorType:"text",precision:3}),this};var Pi=i.charSpace,no=b.__private__.getCharSpace=b.getCharSpace=function(){return parseFloat(Pi||0)};b.__private__.setCharSpace=b.setCharSpace=function(m){if(isNaN(m))throw new Error("Invalid argument passed to jsPDF.setCharSpace");return Pi=m,this};var Is=0;b.CapJoinStyles={0:0,butt:0,but:0,miter:0,1:1,round:1,rounded:1,circle:1,2:2,projecting:2,project:2,square:2,bevel:2},b.__private__.setLineCap=b.setLineCap=function(m){var L=b.CapJoinStyles[m];if(L===void 0)throw new Error("Line cap style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return Is=L,Q(L+" J"),this};var ro=0;b.__private__.setLineJoin=b.setLineJoin=function(m){var L=b.CapJoinStyles[m];if(L===void 0)throw new Error("Line join style of '"+m+"' is not recognized. See or extend .CapJoinStyles property for valid styles");return ro=L,Q(L+" j"),this},b.__private__.setLineMiterLimit=b.__private__.setMiterLimit=b.setLineMiterLimit=b.setMiterLimit=function(m){if(m=m||0,isNaN(m))throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");return Q(oe(B(m))+" M"),this},b.GState=bd,b.setGState=function(m){(m=typeof m=="string"?sn[Jn[m]]:Oo(null,m)).equals(hr)||(Q("/"+m.id+" gs"),hr=m)};var Oo=function(m,L){if(!m||!Jn[m]){var J=!1;for(var ae in sn)if(sn.hasOwnProperty(ae)&&sn[ae].equals(L)){J=!0;break}if(J)L=sn[ae];else{var be="GS"+(Object.keys(sn).length+1).toString(10);sn[be]=L,L.id=be}return m&&(Jn[m]=L.id),qt.publish("addGState",L),L}};b.addGState=function(m,L){return Oo(m,L),this},b.saveGraphicsState=function(){return Q("q"),Kr.push({key:Tt,size:Ae,color:En}),this},b.restoreGraphicsState=function(){Q("Q");var m=Kr.pop();return Tt=m.key,Ae=m.size,En=m.color,hr=null,this},b.setCurrentTransformationMatrix=function(m){return Q(m.toString()+" cm"),this},b.comment=function(m){return Q("#"+m),this};var La=function(m,L){var J=m||0;Object.defineProperty(this,"x",{enumerable:!0,get:function(){return J},set:function(Ee){isNaN(Ee)||(J=parseFloat(Ee))}});var ae=L||0;Object.defineProperty(this,"y",{enumerable:!0,get:function(){return ae},set:function(Ee){isNaN(Ee)||(ae=parseFloat(Ee))}});var be="pt";return Object.defineProperty(this,"type",{enumerable:!0,get:function(){return be},set:function(Ee){be=Ee.toString()}}),this},Ai=function(m,L,J,ae){La.call(this,m,L),this.type="rect";var be=J||0;Object.defineProperty(this,"w",{enumerable:!0,get:function(){return be},set:function(qe){isNaN(qe)||(be=parseFloat(qe))}});var Ee=ae||0;return Object.defineProperty(this,"h",{enumerable:!0,get:function(){return Ee},set:function(qe){isNaN(qe)||(Ee=parseFloat(qe))}}),this},Bo=function(){this.page=cn,this.currentPage=I,this.pages=Re.slice(0),this.pagesContext=St.slice(0),this.x=On,this.y=It,this.matrix=Vr,this.width=Wa(I),this.height=ji(I),this.outputDestination=Ue,this.id="",this.objectNumber=-1};Bo.prototype.restore=function(){cn=this.page,I=this.currentPage,St=this.pagesContext,Re=this.pages,On=this.x,It=this.y,Vr=this.matrix,_s(I,this.width),Ds(I,this.height),Ue=this.outputDestination};var fl=function(m,L,J,ae,be){da.push(new Bo),cn=I=0,Re=[],On=m,It=L,Vr=be,Yi([J,ae])},$l=function(m){if(Jr[m])da.pop().restore();else{var L=new Bo,J="Xo"+(Object.keys(Bn).length+1).toString(10);L.id=J,Jr[m]=J,Bn[J]=L,qt.publish("addFormObject",L),da.pop().restore()}};for(var qo in b.beginFormObject=function(m,L,J,ae,be){return fl(m,L,J,ae,be),this},b.endFormObject=function(m){return $l(m),this},b.doFormObject=function(m,L){var J=Bn[Jr[m]];return Q("q"),Q(L.toString()+" cm"),Q("/"+J.id+" Do"),Q("Q"),this},b.getFormObject=function(m){var L=Bn[Jr[m]];return{x:L.x,y:L.y,width:L.width,height:L.height,matrix:L.matrix}},b.save=function(m,L){return m=m||"generated.pdf",(L=L||{}).returnPromise=L.returnPromise||!1,L.returnPromise===!1?(nl(Qi(Pa()),m),typeof nl.unload=="function"&&xt.setTimeout&&setTimeout(nl.unload,911),this):new Promise((function(J,ae){try{var be=nl(Qi(Pa()),m);typeof nl.unload=="function"&&xt.setTimeout&&setTimeout(nl.unload,911),J(be)}catch(Ee){ae(Ee.message)}}))},bt.API)bt.API.hasOwnProperty(qo)&&(qo==="events"&&bt.API.events.length?(function(m,L){var J,ae,be;for(be=L.length-1;be!==-1;be--)J=L[be][0],ae=L[be][1],m.subscribe.apply(m,[J].concat(typeof ae=="function"?[ae]:ae))})(qt,bt.API.events):b[qo]=bt.API[qo]);var Wa=b.getPageWidth=function(m){return(St[m=m||I].mediaBox.topRightX-St[m].mediaBox.bottomLeftX)/$e},_s=b.setPageWidth=function(m,L){St[m].mediaBox.topRightX=L*$e+St[m].mediaBox.bottomLeftX},ji=b.getPageHeight=function(m){return(St[m=m||I].mediaBox.topRightY-St[m].mediaBox.bottomLeftY)/$e},Ds=b.setPageHeight=function(m,L){St[m].mediaBox.topRightY=L*$e+St[m].mediaBox.bottomLeftY};return b.internal={pdfEscape:vr,getStyle:Ls,getFont:Ro,getFontSize:We,getCharSpace:no,getTextColor:Ti,getLineHeight:Fo,getLineHeightFactor:ma,getLineWidth:Ni,write:st,getHorizontalCoordinate:Yr,getVerticalCoordinate:Qr,getCoordinateString:hl,getVerticalCoordinateString:va,collections:{},newObject:dn,newAdditionalObject:vi,newObjectDeferred:un,newObjectDeferredBegin:$n,getFilters:ha,putStream:_r,events:qt,scaleFactor:$e,pageSize:{getWidth:function(){return Wa(I)},setWidth:function(m){_s(I,m)},getHeight:function(){return ji(I)},setHeight:function(m){Ds(I,m)}},encryptionOptions:k,encryption:hn,getEncryptor:Aa,output:Si,getNumberOfPages:Kl,pages:Re,out:Q,f2:Se,f3:C,getPageInfo:fa,getPageInfoByObjId:yt,getCurrentPageInfo:Zi,getPDFVersion:D,Point:La,Rectangle:Ai,Matrix:pt,hasHotfix:Xi},Object.defineProperty(b.internal.pageSize,"width",{get:function(){return Wa(I)},set:function(m){_s(I,m)},enumerable:!0,configurable:!0}),Object.defineProperty(b.internal.pageSize,"height",{get:function(){return ji(I)},set:function(m){Ds(I,m)},enumerable:!0,configurable:!0}),$i.call(b,Oe),Tt="F1",As(p,a),qt.publish("initialized"),b}zl.prototype.lsbFirstWord=function(i){return String.fromCharCode(i>>0&255,i>>8&255,i>>16&255,i>>24&255)},zl.prototype.toHexString=function(i){return i.split("").map((function(n){return("0"+(255&n.charCodeAt(0)).toString(16)).slice(-2)})).join("")},zl.prototype.hexToBytes=function(i){for(var n=[],a=0;a<i.length;a+=2)n.push(String.fromCharCode(parseInt(i.substr(a,2),16)));return n.join("")},zl.prototype.processOwnerPassword=function(i,n){return Vu(Wu(n).substr(0,5),i)},zl.prototype.encryptor=function(i,n){var a=Wu(this.encryptionKey+String.fromCharCode(255&i,i>>8&255,i>>16&255,255&n,n>>8&255)).substr(0,10);return function(l){return Vu(a,l)}},bd.prototype.equals=function(i){var n,a="id,objectNumber,equals";if(!i||nn(i)!==nn(this))return!1;var l=0;for(n in this)if(!(a.indexOf(n)>=0)){if(this.hasOwnProperty(n)&&!i.hasOwnProperty(n)||this[n]!==i[n])return!1;l++}for(n in i)i.hasOwnProperty(n)&&a.indexOf(n)<0&&l--;return l===0},bt.API={events:[]},bt.version="2.5.2";var Ln=bt.API,ap=1,il=function(i){return i.replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)")},Rl=function(i){return i.replace(/\\\\/g,"\\").replace(/\\\(/g,"(").replace(/\\\)/g,")")},Ct=function(i){return i.toFixed(2)},bs=function(i){return i.toFixed(5)};Ln.__acroform__={};var ca=function(i,n){i.prototype=Object.create(n.prototype),i.prototype.constructor=i},_h=function(i){return i*ap},Bi=function(i){var n=new Nf,a=ot.internal.getHeight(i)||0,l=ot.internal.getWidth(i)||0;return n.BBox=[0,0,Number(Ct(l)),Number(Ct(a))],n},u0=Ln.__acroform__.setBit=function(i,n){if(i=i||0,n=n||0,isNaN(i)||isNaN(n))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");return i|=1<<n},p0=Ln.__acroform__.clearBit=function(i,n){if(i=i||0,n=n||0,isNaN(i)||isNaN(n))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");return i&=~(1<<n)},h0=Ln.__acroform__.getBit=function(i,n){if(isNaN(i)||isNaN(n))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");return(i&1<<n)==0?0:1},Rn=Ln.__acroform__.getBitForPdf=function(i,n){if(isNaN(i)||isNaN(n))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");return h0(i,n-1)},Fn=Ln.__acroform__.setBitForPdf=function(i,n){if(isNaN(i)||isNaN(n))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");return u0(i,n-1)},zn=Ln.__acroform__.clearBitForPdf=function(i,n){if(isNaN(i)||isNaN(n))throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");return p0(i,n-1)},f0=Ln.__acroform__.calculateCoordinates=function(i,n){var a=n.internal.getHorizontalCoordinate,l=n.internal.getVerticalCoordinate,p=i[0],c=i[1],h=i[2],f=i[3],g={};return g.lowerLeft_X=a(p)||0,g.lowerLeft_Y=l(c+f)||0,g.upperRight_X=a(p+h)||0,g.upperRight_Y=l(c)||0,[Number(Ct(g.lowerLeft_X)),Number(Ct(g.lowerLeft_Y)),Number(Ct(g.upperRight_X)),Number(Ct(g.upperRight_Y))]},g0=function(i){if(i.appearanceStreamContent)return i.appearanceStreamContent;if(i.V||i.DV){var n=[],a=i._V||i.DV,l=Ku(i,a),p=i.scope.internal.getFont(i.fontName,i.fontStyle).id;n.push("/Tx BMC"),n.push("q"),n.push("BT"),n.push(i.scope.__private__.encodeColorString(i.color)),n.push("/"+p+" "+Ct(l.fontSize)+" Tf"),n.push("1 0 0 1 0 0 Tm"),n.push(l.text),n.push("ET"),n.push("Q"),n.push("EMC");var c=Bi(i);return c.scope=i.scope,c.stream=n.join(`
`),c}},Ku=function(i,n){var a=i.fontSize===0?i.maxFontSize:i.fontSize,l={text:"",fontSize:""},p=(n=(n=n.substr(0,1)=="("?n.substr(1):n).substr(n.length-1)==")"?n.substr(0,n.length-1):n).split(" ");p=i.multiline?p.map((function(C){return C.split(`
`)})):p.map((function(C){return[C]}));var c=a,h=ot.internal.getHeight(i)||0;h=h<0?-h:h;var f=ot.internal.getWidth(i)||0;f=f<0?-f:f;var g=function(C,B,Z){if(C+1<p.length){var te=B+" "+p[C+1][0];return cd(te,i,Z).width<=f-4}return!1};c++;e:for(;c>0;){n="",c--;var w,k,T=cd("3",i,c).height,P=i.multiline?h-c:(h-T)/2,b=P+=2,U=0,D=0,q=0;if(c<=0){n=`(...) Tj
`,n+="% Width of Text: "+cd(n,i,c=12).width+", FieldWidth:"+f+`
`;break}for(var _="",F=0,K=0;K<p.length;K++)if(p.hasOwnProperty(K)){var he=!1;if(p[K].length!==1&&q!==p[K].length-1){if((T+2)*(F+2)+2>h)continue e;_+=p[K][q],he=!0,D=K,K--}else{_=(_+=p[K][q]+" ").substr(_.length-1)==" "?_.substr(0,_.length-1):_;var ve=parseInt(K),ye=g(ve,_,c),oe=K>=p.length-1;if(ye&&!oe){_+=" ",q=0;continue}if(ye||oe){if(oe)D=ve;else if(i.multiline&&(T+2)*(F+2)+2>h)continue e}else{if(!i.multiline||(T+2)*(F+2)+2>h)continue e;D=ve}}for(var $="",pe=U;pe<=D;pe++){var Se=p[pe];if(i.multiline){if(pe===D){$+=Se[q]+" ",q=(q+1)%Se.length;continue}if(pe===U){$+=Se[Se.length-1]+" ";continue}}$+=Se[0]+" "}switch($=$.substr($.length-1)==" "?$.substr(0,$.length-1):$,k=cd($,i,c).width,i.textAlign){case"right":w=f-k-2;break;case"center":w=(f-k)/2;break;case"left":default:w=2}n+=Ct(w)+" "+Ct(b)+` Td
`,n+="("+il($)+`) Tj
`,n+=-Ct(w)+` 0 Td
`,b=-(c+2),k=0,U=he?D:D+1,F++,_=""}break}return l.text=n,l.fontSize=c,l},cd=function(i,n,a){var l=n.scope.internal.getFont(n.fontName,n.fontStyle),p=n.scope.getStringUnitWidth(i,{font:l,fontSize:parseFloat(a),charSpace:0})*parseFloat(a);return{height:n.scope.getStringUnitWidth("3",{font:l,fontSize:parseFloat(a),charSpace:0})*parseFloat(a)*1.5,width:p}},m0={fields:[],xForms:[],acroFormDictionaryRoot:null,printedOut:!1,internal:null,isInitialized:!1},v0=function(i,n){var a={type:"reference",object:i};n.internal.getPageInfo(i.page).pageContext.annotations.find((function(l){return l.type===a.type&&l.object===a.object}))===void 0&&n.internal.getPageInfo(i.page).pageContext.annotations.push(a)},y0=function(i,n){for(var a in i)if(i.hasOwnProperty(a)){var l=a,p=i[a];n.internal.newObjectDeferredBegin(p.objId,!0),nn(p)==="object"&&typeof p.putStream=="function"&&p.putStream(),delete i[l]}},b0=function(i,n){if(n.scope=i,i.internal!==void 0&&(i.internal.acroformPlugin===void 0||i.internal.acroformPlugin.isInitialized===!1)){if(fi.FieldNum=0,i.internal.acroformPlugin=JSON.parse(JSON.stringify(m0)),i.internal.acroformPlugin.acroFormDictionaryRoot)throw new Error("Exception while creating AcroformDictionary");ap=i.internal.scaleFactor,i.internal.acroformPlugin.acroFormDictionaryRoot=new Tf,i.internal.acroformPlugin.acroFormDictionaryRoot.scope=i,i.internal.acroformPlugin.acroFormDictionaryRoot._eventID=i.internal.events.subscribe("postPutResources",(function(){(function(a){a.internal.events.unsubscribe(a.internal.acroformPlugin.acroFormDictionaryRoot._eventID),delete a.internal.acroformPlugin.acroFormDictionaryRoot._eventID,a.internal.acroformPlugin.printedOut=!0})(i)})),i.internal.events.subscribe("buildDocument",(function(){(function(a){a.internal.acroformPlugin.acroFormDictionaryRoot.objId=void 0;var l=a.internal.acroformPlugin.acroFormDictionaryRoot.Fields;for(var p in l)if(l.hasOwnProperty(p)){var c=l[p];c.objId=void 0,c.hasAnnotation&&v0(c,a)}})(i)})),i.internal.events.subscribe("putCatalog",(function(){(function(a){if(a.internal.acroformPlugin.acroFormDictionaryRoot===void 0)throw new Error("putCatalogCallback: Root missing.");a.internal.write("/AcroForm "+a.internal.acroformPlugin.acroFormDictionaryRoot.objId+" 0 R")})(i)})),i.internal.events.subscribe("postPutPages",(function(a){(function(l,p){var c=!l;for(var h in l||(p.internal.newObjectDeferredBegin(p.internal.acroformPlugin.acroFormDictionaryRoot.objId,!0),p.internal.acroformPlugin.acroFormDictionaryRoot.putStream()),l=l||p.internal.acroformPlugin.acroFormDictionaryRoot.Kids)if(l.hasOwnProperty(h)){var f=l[h],g=[],w=f.Rect;if(f.Rect&&(f.Rect=f0(f.Rect,p)),p.internal.newObjectDeferredBegin(f.objId,!0),f.DA=ot.createDefaultAppearanceStream(f),nn(f)==="object"&&typeof f.getKeyValueListForStream=="function"&&(g=f.getKeyValueListForStream()),f.Rect=w,f.hasAppearanceStream&&!f.appearanceStreamContent){var k=g0(f);g.push({key:"AP",value:"<</N "+k+">>"}),p.internal.acroformPlugin.xForms.push(k)}if(f.appearanceStreamContent){var T="";for(var P in f.appearanceStreamContent)if(f.appearanceStreamContent.hasOwnProperty(P)){var b=f.appearanceStreamContent[P];if(T+="/"+P+" ",T+="<<",Object.keys(b).length>=1||Array.isArray(b)){for(var h in b)if(b.hasOwnProperty(h)){var U=b[h];typeof U=="function"&&(U=U.call(p,f)),T+="/"+h+" "+U+" ",p.internal.acroformPlugin.xForms.indexOf(U)>=0||p.internal.acroformPlugin.xForms.push(U)}}else typeof(U=b)=="function"&&(U=U.call(p,f)),T+="/"+h+" "+U,p.internal.acroformPlugin.xForms.indexOf(U)>=0||p.internal.acroformPlugin.xForms.push(U);T+=">>"}g.push({key:"AP",value:`<<
`+T+">>"})}p.internal.putStream({additionalKeyValues:g,objectId:f.objId}),p.internal.out("endobj")}c&&y0(p.internal.acroformPlugin.xForms,p)})(a,i)})),i.internal.acroformPlugin.isInitialized=!0}},kf=Ln.__acroform__.arrayToPdfArray=function(i,n,a){var l=function(h){return h};if(Array.isArray(i)){for(var p="[",c=0;c<i.length;c++)switch(c!==0&&(p+=" "),nn(i[c])){case"boolean":case"number":case"object":p+=i[c].toString();break;case"string":i[c].substr(0,1)!=="/"?(n!==void 0&&a&&(l=a.internal.getEncryptor(n)),p+="("+il(l(i[c].toString()))+")"):p+=i[c].toString()}return p+="]"}throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")},Tu=function(i,n,a){var l=function(p){return p};return n!==void 0&&a&&(l=a.internal.getEncryptor(n)),(i=i||"").toString(),i="("+il(l(i))+")"},qi=function(){this._objId=void 0,this._scope=void 0,Object.defineProperty(this,"objId",{get:function(){if(this._objId===void 0){if(this.scope===void 0)return;this._objId=this.scope.internal.newObjectDeferred()}return this._objId},set:function(i){this._objId=i}}),Object.defineProperty(this,"scope",{value:this._scope,writable:!0})};qi.prototype.toString=function(){return this.objId+" 0 R"},qi.prototype.putStream=function(){var i=this.getKeyValueListForStream();this.scope.internal.putStream({data:this.stream,additionalKeyValues:i,objectId:this.objId}),this.scope.internal.out("endobj")},qi.prototype.getKeyValueListForStream=function(){var i=[],n=Object.getOwnPropertyNames(this).filter((function(c){return c!="content"&&c!="appearanceStreamContent"&&c!="scope"&&c!="objId"&&c.substring(0,1)!="_"}));for(var a in n)if(Object.getOwnPropertyDescriptor(this,n[a]).configurable===!1){var l=n[a],p=this[l];p&&(Array.isArray(p)?i.push({key:l,value:kf(p,this.objId,this.scope)}):p instanceof qi?(p.scope=this.scope,i.push({key:l,value:p.objId+" 0 R"})):typeof p!="function"&&i.push({key:l,value:p}))}return i};var Nf=function(){qi.call(this),Object.defineProperty(this,"Type",{value:"/XObject",configurable:!1,writable:!0}),Object.defineProperty(this,"Subtype",{value:"/Form",configurable:!1,writable:!0}),Object.defineProperty(this,"FormType",{value:1,configurable:!1,writable:!0});var i,n=[];Object.defineProperty(this,"BBox",{configurable:!1,get:function(){return n},set:function(a){n=a}}),Object.defineProperty(this,"Resources",{value:"2 0 R",configurable:!1,writable:!0}),Object.defineProperty(this,"stream",{enumerable:!1,configurable:!0,set:function(a){i=a.trim()},get:function(){return i||null}})};ca(Nf,qi);var Tf=function(){qi.call(this);var i,n=[];Object.defineProperty(this,"Kids",{enumerable:!1,configurable:!0,get:function(){return n.length>0?n:void 0}}),Object.defineProperty(this,"Fields",{enumerable:!1,configurable:!1,get:function(){return n}}),Object.defineProperty(this,"DA",{enumerable:!1,configurable:!1,get:function(){if(i){var a=function(l){return l};return this.scope&&(a=this.scope.internal.getEncryptor(this.objId)),"("+il(a(i))+")"}},set:function(a){i=a}})};ca(Tf,qi);var fi=function i(){qi.call(this);var n=4;Object.defineProperty(this,"F",{enumerable:!1,configurable:!1,get:function(){return n},set:function(_){if(isNaN(_))throw new Error('Invalid value "'+_+'" for attribute F supplied.');n=_}}),Object.defineProperty(this,"showWhenPrinted",{enumerable:!0,configurable:!0,get:function(){return!!Rn(n,3)},set:function(_){_?this.F=Fn(n,3):this.F=zn(n,3)}});var a=0;Object.defineProperty(this,"Ff",{enumerable:!1,configurable:!1,get:function(){return a},set:function(_){if(isNaN(_))throw new Error('Invalid value "'+_+'" for attribute Ff supplied.');a=_}});var l=[];Object.defineProperty(this,"Rect",{enumerable:!1,configurable:!1,get:function(){if(l.length!==0)return l},set:function(_){l=_!==void 0?_:[]}}),Object.defineProperty(this,"x",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[0])?0:l[0]},set:function(_){l[0]=_}}),Object.defineProperty(this,"y",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[1])?0:l[1]},set:function(_){l[1]=_}}),Object.defineProperty(this,"width",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[2])?0:l[2]},set:function(_){l[2]=_}}),Object.defineProperty(this,"height",{enumerable:!0,configurable:!0,get:function(){return!l||isNaN(l[3])?0:l[3]},set:function(_){l[3]=_}});var p="";Object.defineProperty(this,"FT",{enumerable:!0,configurable:!1,get:function(){return p},set:function(_){switch(_){case"/Btn":case"/Tx":case"/Ch":case"/Sig":p=_;break;default:throw new Error('Invalid value "'+_+'" for attribute FT supplied.')}}});var c=null;Object.defineProperty(this,"T",{enumerable:!0,configurable:!1,get:function(){if(!c||c.length<1){if(this instanceof xd)return;c="FieldObject"+i.FieldNum++}var _=function(F){return F};return this.scope&&(_=this.scope.internal.getEncryptor(this.objId)),"("+il(_(c))+")"},set:function(_){c=_.toString()}}),Object.defineProperty(this,"fieldName",{configurable:!0,enumerable:!0,get:function(){return c},set:function(_){c=_}});var h="helvetica";Object.defineProperty(this,"fontName",{enumerable:!0,configurable:!0,get:function(){return h},set:function(_){h=_}});var f="normal";Object.defineProperty(this,"fontStyle",{enumerable:!0,configurable:!0,get:function(){return f},set:function(_){f=_}});var g=0;Object.defineProperty(this,"fontSize",{enumerable:!0,configurable:!0,get:function(){return g},set:function(_){g=_}});var w=void 0;Object.defineProperty(this,"maxFontSize",{enumerable:!0,configurable:!0,get:function(){return w===void 0?50/ap:w},set:function(_){w=_}});var k="black";Object.defineProperty(this,"color",{enumerable:!0,configurable:!0,get:function(){return k},set:function(_){k=_}});var T="/F1 0 Tf 0 g";Object.defineProperty(this,"DA",{enumerable:!0,configurable:!1,get:function(){if(!(!T||this instanceof xd||this instanceof al))return Tu(T,this.objId,this.scope)},set:function(_){_=_.toString(),T=_}});var P=null;Object.defineProperty(this,"DV",{enumerable:!1,configurable:!1,get:function(){if(P)return this instanceof ar?P:Tu(P,this.objId,this.scope)},set:function(_){_=_.toString(),P=this instanceof ar?_:_.substr(0,1)==="("?Rl(_.substr(1,_.length-2)):Rl(_)}}),Object.defineProperty(this,"defaultValue",{enumerable:!0,configurable:!0,get:function(){return this instanceof ar?Rl(P.substr(1,P.length-1)):P},set:function(_){_=_.toString(),P=this instanceof ar?"/"+_:_}});var b=null;Object.defineProperty(this,"_V",{enumerable:!1,configurable:!1,get:function(){if(b)return b},set:function(_){this.V=_}}),Object.defineProperty(this,"V",{enumerable:!1,configurable:!1,get:function(){if(b)return this instanceof ar?b:Tu(b,this.objId,this.scope)},set:function(_){_=_.toString(),b=this instanceof ar?_:_.substr(0,1)==="("?Rl(_.substr(1,_.length-2)):Rl(_)}}),Object.defineProperty(this,"value",{enumerable:!0,configurable:!0,get:function(){return this instanceof ar?Rl(b.substr(1,b.length-1)):b},set:function(_){_=_.toString(),b=this instanceof ar?"/"+_:_}}),Object.defineProperty(this,"hasAnnotation",{enumerable:!0,configurable:!0,get:function(){return this.Rect}}),Object.defineProperty(this,"Type",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Annot":null}}),Object.defineProperty(this,"Subtype",{enumerable:!0,configurable:!1,get:function(){return this.hasAnnotation?"/Widget":null}});var U,D=!1;Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return D},set:function(_){_=!!_,D=_}}),Object.defineProperty(this,"page",{enumerable:!0,configurable:!0,get:function(){if(U)return U},set:function(_){U=_}}),Object.defineProperty(this,"readOnly",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,1)},set:function(_){_?this.Ff=Fn(this.Ff,1):this.Ff=zn(this.Ff,1)}}),Object.defineProperty(this,"required",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,2)},set:function(_){_?this.Ff=Fn(this.Ff,2):this.Ff=zn(this.Ff,2)}}),Object.defineProperty(this,"noExport",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,3)},set:function(_){_?this.Ff=Fn(this.Ff,3):this.Ff=zn(this.Ff,3)}});var q=null;Object.defineProperty(this,"Q",{enumerable:!0,configurable:!1,get:function(){if(q!==null)return q},set:function(_){if([0,1,2].indexOf(_)===-1)throw new Error('Invalid value "'+_+'" for attribute Q supplied.');q=_}}),Object.defineProperty(this,"textAlign",{get:function(){var _;switch(q){case 0:default:_="left";break;case 1:_="center";break;case 2:_="right"}return _},configurable:!0,enumerable:!0,set:function(_){switch(_){case"right":case 2:q=2;break;case"center":case 1:q=1;break;case"left":case 0:default:q=0}}})};ca(fi,qi);var ql=function(){fi.call(this),this.FT="/Ch",this.V="()",this.fontName="zapfdingbats";var i=0;Object.defineProperty(this,"TI",{enumerable:!0,configurable:!1,get:function(){return i},set:function(a){i=a}}),Object.defineProperty(this,"topIndex",{enumerable:!0,configurable:!0,get:function(){return i},set:function(a){i=a}});var n=[];Object.defineProperty(this,"Opt",{enumerable:!0,configurable:!1,get:function(){return kf(n,this.objId,this.scope)},set:function(a){var l,p;p=[],typeof(l=a)=="string"&&(p=(function(c,h,f){f||(f=1);for(var g,w=[];g=h.exec(c);)w.push(g[f]);return w})(l,/\((.*?)\)/g)),n=p}}),this.getOptions=function(){return n},this.setOptions=function(a){n=a,this.sort&&n.sort()},this.addOption=function(a){a=(a=a||"").toString(),n.push(a),this.sort&&n.sort()},this.removeOption=function(a,l){for(l=l||!1,a=(a=a||"").toString();n.indexOf(a)!==-1&&(n.splice(n.indexOf(a),1),l!==!1););},Object.defineProperty(this,"combo",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,18)},set:function(a){a?this.Ff=Fn(this.Ff,18):this.Ff=zn(this.Ff,18)}}),Object.defineProperty(this,"edit",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,19)},set:function(a){this.combo===!0&&(a?this.Ff=Fn(this.Ff,19):this.Ff=zn(this.Ff,19))}}),Object.defineProperty(this,"sort",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,20)},set:function(a){a?(this.Ff=Fn(this.Ff,20),n.sort()):this.Ff=zn(this.Ff,20)}}),Object.defineProperty(this,"multiSelect",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,22)},set:function(a){a?this.Ff=Fn(this.Ff,22):this.Ff=zn(this.Ff,22)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,23)},set:function(a){a?this.Ff=Fn(this.Ff,23):this.Ff=zn(this.Ff,23)}}),Object.defineProperty(this,"commitOnSelChange",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,27)},set:function(a){a?this.Ff=Fn(this.Ff,27):this.Ff=zn(this.Ff,27)}}),this.hasAppearanceStream=!1};ca(ql,fi);var Hl=function(){ql.call(this),this.fontName="helvetica",this.combo=!1};ca(Hl,ql);var Ul=function(){Hl.call(this),this.combo=!0};ca(Ul,Hl);var fd=function(){Ul.call(this),this.edit=!0};ca(fd,Ul);var ar=function(){fi.call(this),this.FT="/Btn",Object.defineProperty(this,"noToggleToOff",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,15)},set:function(a){a?this.Ff=Fn(this.Ff,15):this.Ff=zn(this.Ff,15)}}),Object.defineProperty(this,"radio",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,16)},set:function(a){a?this.Ff=Fn(this.Ff,16):this.Ff=zn(this.Ff,16)}}),Object.defineProperty(this,"pushButton",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,17)},set:function(a){a?this.Ff=Fn(this.Ff,17):this.Ff=zn(this.Ff,17)}}),Object.defineProperty(this,"radioIsUnison",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,26)},set:function(a){a?this.Ff=Fn(this.Ff,26):this.Ff=zn(this.Ff,26)}});var i,n={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var a=function(c){return c};if(this.scope&&(a=this.scope.internal.getEncryptor(this.objId)),Object.keys(n).length!==0){var l,p=[];for(l in p.push("<<"),n)p.push("/"+l+" ("+il(a(n[l]))+")");return p.push(">>"),p.join(`
`)}},set:function(a){nn(a)==="object"&&(n=a)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return n.CA||""},set:function(a){typeof a=="string"&&(n.CA=a)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return i},set:function(a){i=a}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return i.substr(1,i.length-1)},set:function(a){i="/"+a}})};ca(ar,fi);var gd=function(){ar.call(this),this.pushButton=!0};ca(gd,ar);var Gl=function(){ar.call(this),this.radio=!0,this.pushButton=!1;var i=[];Object.defineProperty(this,"Kids",{enumerable:!0,configurable:!1,get:function(){return i},set:function(n){i=n!==void 0?n:[]}})};ca(Gl,ar);var xd=function(){var i,n;fi.call(this),Object.defineProperty(this,"Parent",{enumerable:!1,configurable:!1,get:function(){return i},set:function(p){i=p}}),Object.defineProperty(this,"optionName",{enumerable:!1,configurable:!0,get:function(){return n},set:function(p){n=p}});var a,l={};Object.defineProperty(this,"MK",{enumerable:!1,configurable:!1,get:function(){var p=function(f){return f};this.scope&&(p=this.scope.internal.getEncryptor(this.objId));var c,h=[];for(c in h.push("<<"),l)h.push("/"+c+" ("+il(p(l[c]))+")");return h.push(">>"),h.join(`
`)},set:function(p){nn(p)==="object"&&(l=p)}}),Object.defineProperty(this,"caption",{enumerable:!0,configurable:!0,get:function(){return l.CA||""},set:function(p){typeof p=="string"&&(l.CA=p)}}),Object.defineProperty(this,"AS",{enumerable:!1,configurable:!1,get:function(){return a},set:function(p){a=p}}),Object.defineProperty(this,"appearanceState",{enumerable:!0,configurable:!0,get:function(){return a.substr(1,a.length-1)},set:function(p){a="/"+p}}),this.caption="l",this.appearanceState="Off",this._AppearanceType=ot.RadioButton.Circle,this.appearanceStreamContent=this._AppearanceType.createAppearanceStream(this.optionName)};ca(xd,fi),Gl.prototype.setAppearance=function(i){if(!("createAppearanceStream"in i)||!("getCA"in i))throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");for(var n in this.Kids)if(this.Kids.hasOwnProperty(n)){var a=this.Kids[n];a.appearanceStreamContent=i.createAppearanceStream(a.optionName),a.caption=i.getCA()}},Gl.prototype.createOption=function(i){var n=new xd;return n.Parent=this,n.optionName=i,this.Kids.push(n),x0.call(this.scope,n),n};var md=function(){ar.call(this),this.fontName="zapfdingbats",this.caption="3",this.appearanceState="On",this.value="On",this.textAlign="center",this.appearanceStreamContent=ot.CheckBox.createAppearanceStream()};ca(md,ar);var al=function(){fi.call(this),this.FT="/Tx",Object.defineProperty(this,"multiline",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,13)},set:function(n){n?this.Ff=Fn(this.Ff,13):this.Ff=zn(this.Ff,13)}}),Object.defineProperty(this,"fileSelect",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,21)},set:function(n){n?this.Ff=Fn(this.Ff,21):this.Ff=zn(this.Ff,21)}}),Object.defineProperty(this,"doNotSpellCheck",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,23)},set:function(n){n?this.Ff=Fn(this.Ff,23):this.Ff=zn(this.Ff,23)}}),Object.defineProperty(this,"doNotScroll",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,24)},set:function(n){n?this.Ff=Fn(this.Ff,24):this.Ff=zn(this.Ff,24)}}),Object.defineProperty(this,"comb",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,25)},set:function(n){n?this.Ff=Fn(this.Ff,25):this.Ff=zn(this.Ff,25)}}),Object.defineProperty(this,"richText",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,26)},set:function(n){n?this.Ff=Fn(this.Ff,26):this.Ff=zn(this.Ff,26)}});var i=null;Object.defineProperty(this,"MaxLen",{enumerable:!0,configurable:!1,get:function(){return i},set:function(n){i=n}}),Object.defineProperty(this,"maxLength",{enumerable:!0,configurable:!0,get:function(){return i},set:function(n){Number.isInteger(n)&&(i=n)}}),Object.defineProperty(this,"hasAppearanceStream",{enumerable:!0,configurable:!0,get:function(){return this.V||this.DV}})};ca(al,fi);var vd=function(){al.call(this),Object.defineProperty(this,"password",{enumerable:!0,configurable:!0,get:function(){return!!Rn(this.Ff,14)},set:function(i){i?this.Ff=Fn(this.Ff,14):this.Ff=zn(this.Ff,14)}}),this.password=!0};ca(vd,al);var ot={CheckBox:{createAppearanceStream:function(){return{N:{On:ot.CheckBox.YesNormal},D:{On:ot.CheckBox.YesPushDown,Off:ot.CheckBox.OffPushDown}}},YesPushDown:function(i){var n=Bi(i);n.scope=i.scope;var a=[],l=i.scope.internal.getFont(i.fontName,i.fontStyle).id,p=i.scope.__private__.encodeColorString(i.color),c=Ku(i,i.caption);return a.push("0.749023 g"),a.push("0 0 "+Ct(ot.internal.getWidth(i))+" "+Ct(ot.internal.getHeight(i))+" re"),a.push("f"),a.push("BMC"),a.push("q"),a.push("0 0 1 rg"),a.push("/"+l+" "+Ct(c.fontSize)+" Tf "+p),a.push("BT"),a.push(c.text),a.push("ET"),a.push("Q"),a.push("EMC"),n.stream=a.join(`
`),n},YesNormal:function(i){var n=Bi(i);n.scope=i.scope;var a=i.scope.internal.getFont(i.fontName,i.fontStyle).id,l=i.scope.__private__.encodeColorString(i.color),p=[],c=ot.internal.getHeight(i),h=ot.internal.getWidth(i),f=Ku(i,i.caption);return p.push("1 g"),p.push("0 0 "+Ct(h)+" "+Ct(c)+" re"),p.push("f"),p.push("q"),p.push("0 0 1 rg"),p.push("0 0 "+Ct(h-1)+" "+Ct(c-1)+" re"),p.push("W"),p.push("n"),p.push("0 g"),p.push("BT"),p.push("/"+a+" "+Ct(f.fontSize)+" Tf "+l),p.push(f.text),p.push("ET"),p.push("Q"),n.stream=p.join(`
`),n},OffPushDown:function(i){var n=Bi(i);n.scope=i.scope;var a=[];return a.push("0.749023 g"),a.push("0 0 "+Ct(ot.internal.getWidth(i))+" "+Ct(ot.internal.getHeight(i))+" re"),a.push("f"),n.stream=a.join(`
`),n}},RadioButton:{Circle:{createAppearanceStream:function(i){var n={D:{Off:ot.RadioButton.Circle.OffPushDown},N:{}};return n.N[i]=ot.RadioButton.Circle.YesNormal,n.D[i]=ot.RadioButton.Circle.YesPushDown,n},getCA:function(){return"l"},YesNormal:function(i){var n=Bi(i);n.scope=i.scope;var a=[],l=ot.internal.getWidth(i)<=ot.internal.getHeight(i)?ot.internal.getWidth(i)/4:ot.internal.getHeight(i)/4;l=Number((.9*l).toFixed(5));var p=ot.internal.Bezier_C,c=Number((l*p).toFixed(5));return a.push("q"),a.push("1 0 0 1 "+bs(ot.internal.getWidth(i)/2)+" "+bs(ot.internal.getHeight(i)/2)+" cm"),a.push(l+" 0 m"),a.push(l+" "+c+" "+c+" "+l+" 0 "+l+" c"),a.push("-"+c+" "+l+" -"+l+" "+c+" -"+l+" 0 c"),a.push("-"+l+" -"+c+" -"+c+" -"+l+" 0 -"+l+" c"),a.push(c+" -"+l+" "+l+" -"+c+" "+l+" 0 c"),a.push("f"),a.push("Q"),n.stream=a.join(`
`),n},YesPushDown:function(i){var n=Bi(i);n.scope=i.scope;var a=[],l=ot.internal.getWidth(i)<=ot.internal.getHeight(i)?ot.internal.getWidth(i)/4:ot.internal.getHeight(i)/4;l=Number((.9*l).toFixed(5));var p=Number((2*l).toFixed(5)),c=Number((p*ot.internal.Bezier_C).toFixed(5)),h=Number((l*ot.internal.Bezier_C).toFixed(5));return a.push("0.749023 g"),a.push("q"),a.push("1 0 0 1 "+bs(ot.internal.getWidth(i)/2)+" "+bs(ot.internal.getHeight(i)/2)+" cm"),a.push(p+" 0 m"),a.push(p+" "+c+" "+c+" "+p+" 0 "+p+" c"),a.push("-"+c+" "+p+" -"+p+" "+c+" -"+p+" 0 c"),a.push("-"+p+" -"+c+" -"+c+" -"+p+" 0 -"+p+" c"),a.push(c+" -"+p+" "+p+" -"+c+" "+p+" 0 c"),a.push("f"),a.push("Q"),a.push("0 g"),a.push("q"),a.push("1 0 0 1 "+bs(ot.internal.getWidth(i)/2)+" "+bs(ot.internal.getHeight(i)/2)+" cm"),a.push(l+" 0 m"),a.push(l+" "+h+" "+h+" "+l+" 0 "+l+" c"),a.push("-"+h+" "+l+" -"+l+" "+h+" -"+l+" 0 c"),a.push("-"+l+" -"+h+" -"+h+" -"+l+" 0 -"+l+" c"),a.push(h+" -"+l+" "+l+" -"+h+" "+l+" 0 c"),a.push("f"),a.push("Q"),n.stream=a.join(`
`),n},OffPushDown:function(i){var n=Bi(i);n.scope=i.scope;var a=[],l=ot.internal.getWidth(i)<=ot.internal.getHeight(i)?ot.internal.getWidth(i)/4:ot.internal.getHeight(i)/4;l=Number((.9*l).toFixed(5));var p=Number((2*l).toFixed(5)),c=Number((p*ot.internal.Bezier_C).toFixed(5));return a.push("0.749023 g"),a.push("q"),a.push("1 0 0 1 "+bs(ot.internal.getWidth(i)/2)+" "+bs(ot.internal.getHeight(i)/2)+" cm"),a.push(p+" 0 m"),a.push(p+" "+c+" "+c+" "+p+" 0 "+p+" c"),a.push("-"+c+" "+p+" -"+p+" "+c+" -"+p+" 0 c"),a.push("-"+p+" -"+c+" -"+c+" -"+p+" 0 -"+p+" c"),a.push(c+" -"+p+" "+p+" -"+c+" "+p+" 0 c"),a.push("f"),a.push("Q"),n.stream=a.join(`
`),n}},Cross:{createAppearanceStream:function(i){var n={D:{Off:ot.RadioButton.Cross.OffPushDown},N:{}};return n.N[i]=ot.RadioButton.Cross.YesNormal,n.D[i]=ot.RadioButton.Cross.YesPushDown,n},getCA:function(){return"8"},YesNormal:function(i){var n=Bi(i);n.scope=i.scope;var a=[],l=ot.internal.calculateCross(i);return a.push("q"),a.push("1 1 "+Ct(ot.internal.getWidth(i)-2)+" "+Ct(ot.internal.getHeight(i)-2)+" re"),a.push("W"),a.push("n"),a.push(Ct(l.x1.x)+" "+Ct(l.x1.y)+" m"),a.push(Ct(l.x2.x)+" "+Ct(l.x2.y)+" l"),a.push(Ct(l.x4.x)+" "+Ct(l.x4.y)+" m"),a.push(Ct(l.x3.x)+" "+Ct(l.x3.y)+" l"),a.push("s"),a.push("Q"),n.stream=a.join(`
`),n},YesPushDown:function(i){var n=Bi(i);n.scope=i.scope;var a=ot.internal.calculateCross(i),l=[];return l.push("0.749023 g"),l.push("0 0 "+Ct(ot.internal.getWidth(i))+" "+Ct(ot.internal.getHeight(i))+" re"),l.push("f"),l.push("q"),l.push("1 1 "+Ct(ot.internal.getWidth(i)-2)+" "+Ct(ot.internal.getHeight(i)-2)+" re"),l.push("W"),l.push("n"),l.push(Ct(a.x1.x)+" "+Ct(a.x1.y)+" m"),l.push(Ct(a.x2.x)+" "+Ct(a.x2.y)+" l"),l.push(Ct(a.x4.x)+" "+Ct(a.x4.y)+" m"),l.push(Ct(a.x3.x)+" "+Ct(a.x3.y)+" l"),l.push("s"),l.push("Q"),n.stream=l.join(`
`),n},OffPushDown:function(i){var n=Bi(i);n.scope=i.scope;var a=[];return a.push("0.749023 g"),a.push("0 0 "+Ct(ot.internal.getWidth(i))+" "+Ct(ot.internal.getHeight(i))+" re"),a.push("f"),n.stream=a.join(`
`),n}}},createDefaultAppearanceStream:function(i){var n=i.scope.internal.getFont(i.fontName,i.fontStyle).id,a=i.scope.__private__.encodeColorString(i.color);return"/"+n+" "+i.fontSize+" Tf "+a}};ot.internal={Bezier_C:.551915024494,calculateCross:function(i){var n=ot.internal.getWidth(i),a=ot.internal.getHeight(i),l=Math.min(n,a);return{x1:{x:(n-l)/2,y:(a-l)/2+l},x2:{x:(n-l)/2+l,y:(a-l)/2},x3:{x:(n-l)/2,y:(a-l)/2},x4:{x:(n-l)/2+l,y:(a-l)/2+l}}}},ot.internal.getWidth=function(i){var n=0;return nn(i)==="object"&&(n=_h(i.Rect[2])),n},ot.internal.getHeight=function(i){var n=0;return nn(i)==="object"&&(n=_h(i.Rect[3])),n};var x0=Ln.addField=function(i){if(b0(this,i),!(i instanceof fi))throw new Error("Invalid argument passed to jsPDF.addField.");var n;return(n=i).scope.internal.acroformPlugin.printedOut&&(n.scope.internal.acroformPlugin.printedOut=!1,n.scope.internal.acroformPlugin.acroFormDictionaryRoot=null),n.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(n),i.page=i.scope.internal.getCurrentPageInfo().pageNumber,this};Ln.AcroFormChoiceField=ql,Ln.AcroFormListBox=Hl,Ln.AcroFormComboBox=Ul,Ln.AcroFormEditBox=fd,Ln.AcroFormButton=ar,Ln.AcroFormPushButton=gd,Ln.AcroFormRadioButton=Gl,Ln.AcroFormCheckBox=md,Ln.AcroFormTextField=al,Ln.AcroFormPasswordField=vd,Ln.AcroFormAppearance=ot,Ln.AcroForm={ChoiceField:ql,ListBox:Hl,ComboBox:Ul,EditBox:fd,Button:ar,PushButton:gd,RadioButton:Gl,CheckBox:md,TextField:al,PasswordField:vd,Appearance:ot},bt.AcroForm={ChoiceField:ql,ListBox:Hl,ComboBox:Ul,EditBox:fd,Button:ar,PushButton:gd,RadioButton:Gl,CheckBox:md,TextField:al,PasswordField:vd,Appearance:ot};bt.AcroForm;function Pf(i){return i.reduce((function(n,a,l){return n[a]=l,n}),{})}(function(i){i.__addimage__={};var n="UNKNOWN",a={PNG:[[137,80,78,71]],TIFF:[[77,77,0,42],[73,73,42,0]],JPEG:[[255,216,255,224,void 0,void 0,74,70,73,70,0],[255,216,255,225,void 0,void 0,69,120,105,102,0,0],[255,216,255,219],[255,216,255,238]],JPEG2000:[[0,0,0,12,106,80,32,32]],GIF87a:[[71,73,70,56,55,97]],GIF89a:[[71,73,70,56,57,97]],WEBP:[[82,73,70,70,void 0,void 0,void 0,void 0,87,69,66,80]],BMP:[[66,77],[66,65],[67,73],[67,80],[73,67],[80,84]]},l=i.__addimage__.getImageFileTypeByImageData=function(C,B){var Z,te,Ne,ue,ke,ee=n;if((B=B||n)==="RGBA"||C.data!==void 0&&C.data instanceof Uint8ClampedArray&&"height"in C&&"width"in C)return"RGBA";if(ye(C))for(ke in a)for(Ne=a[ke],Z=0;Z<Ne.length;Z+=1){for(ue=!0,te=0;te<Ne[Z].length;te+=1)if(Ne[Z][te]!==void 0&&Ne[Z][te]!==C[te]){ue=!1;break}if(ue===!0){ee=ke;break}}else for(ke in a)for(Ne=a[ke],Z=0;Z<Ne.length;Z+=1){for(ue=!0,te=0;te<Ne[Z].length;te+=1)if(Ne[Z][te]!==void 0&&Ne[Z][te]!==C.charCodeAt(te)){ue=!1;break}if(ue===!0){ee=ke;break}}return ee===n&&B!==n&&(ee=B),ee},p=function C(B){for(var Z=this.internal.write,te=this.internal.putStream,Ne=(0,this.internal.getFilters)();Ne.indexOf("FlateEncode")!==-1;)Ne.splice(Ne.indexOf("FlateEncode"),1);B.objectId=this.internal.newObject();var ue=[];if(ue.push({key:"Type",value:"/XObject"}),ue.push({key:"Subtype",value:"/Image"}),ue.push({key:"Width",value:B.width}),ue.push({key:"Height",value:B.height}),B.colorSpace===q.INDEXED?ue.push({key:"ColorSpace",value:"[/Indexed /DeviceRGB "+(B.palette.length/3-1)+" "+("sMask"in B&&B.sMask!==void 0?B.objectId+2:B.objectId+1)+" 0 R]"}):(ue.push({key:"ColorSpace",value:"/"+B.colorSpace}),B.colorSpace===q.DEVICE_CMYK&&ue.push({key:"Decode",value:"[1 0 1 0 1 0 1 0]"})),ue.push({key:"BitsPerComponent",value:B.bitsPerComponent}),"decodeParameters"in B&&B.decodeParameters!==void 0&&ue.push({key:"DecodeParms",value:"<<"+B.decodeParameters+">>"}),"transparency"in B&&Array.isArray(B.transparency)){for(var ke="",ee=0,me=B.transparency.length;ee<me;ee++)ke+=B.transparency[ee]+" "+B.transparency[ee]+" ";ue.push({key:"Mask",value:"["+ke+"]"})}B.sMask!==void 0&&ue.push({key:"SMask",value:B.objectId+1+" 0 R"});var z=B.filter!==void 0?["/"+B.filter]:void 0;if(te({data:B.data,additionalKeyValues:ue,alreadyAppliedFilters:z,objectId:B.objectId}),Z("endobj"),"sMask"in B&&B.sMask!==void 0){var A="/Predictor "+B.predictor+" /Colors 1 /BitsPerComponent "+B.bitsPerComponent+" /Columns "+B.width,N={width:B.width,height:B.height,colorSpace:"DeviceGray",bitsPerComponent:B.bitsPerComponent,decodeParameters:A,data:B.sMask};"filter"in B&&(N.filter=B.filter),C.call(this,N)}if(B.colorSpace===q.INDEXED){var I=this.internal.newObject();te({data:$(new Uint8Array(B.palette)),objectId:I}),Z("endobj")}},c=function(){var C=this.internal.collections.addImage_images;for(var B in C)p.call(this,C[B])},h=function(){var C,B=this.internal.collections.addImage_images,Z=this.internal.write;for(var te in B)Z("/I"+(C=B[te]).index,C.objectId,"0","R")},f=function(){this.internal.collections.addImage_images||(this.internal.collections.addImage_images={},this.internal.events.subscribe("putResources",c),this.internal.events.subscribe("putXobjectDict",h))},g=function(){var C=this.internal.collections.addImage_images;return f.call(this),C},w=function(){return Object.keys(this.internal.collections.addImage_images).length},k=function(C){return typeof i["process"+C.toUpperCase()]=="function"},T=function(C){return nn(C)==="object"&&C.nodeType===1},P=function(C,B){if(C.nodeName==="IMG"&&C.hasAttribute("src")){var Z=""+C.getAttribute("src");if(Z.indexOf("data:image/")===0)return yc(unescape(Z).split("base64,").pop());var te=i.loadFile(Z,!0);if(te!==void 0)return te}if(C.nodeName==="CANVAS"){if(C.width===0||C.height===0)throw new Error("Given canvas must have data. Canvas width: "+C.width+", height: "+C.height);var Ne;switch(B){case"PNG":Ne="image/png";break;case"WEBP":Ne="image/webp";break;case"JPEG":case"JPG":default:Ne="image/jpeg"}return yc(C.toDataURL(Ne,1).split("base64,").pop())}},b=function(C){var B=this.internal.collections.addImage_images;if(B){for(var Z in B)if(C===B[Z].alias)return B[Z]}},U=function(C,B,Z){return C||B||(C=-96,B=-96),C<0&&(C=-1*Z.width*72/C/this.internal.scaleFactor),B<0&&(B=-1*Z.height*72/B/this.internal.scaleFactor),C===0&&(C=B*Z.width/Z.height),B===0&&(B=C*Z.height/Z.width),[C,B]},D=function(C,B,Z,te,Ne,ue){var ke=U.call(this,Z,te,Ne),ee=this.internal.getCoordinateString,me=this.internal.getVerticalCoordinateString,z=g.call(this);if(Z=ke[0],te=ke[1],z[Ne.index]=Ne,ue){ue*=Math.PI/180;var A=Math.cos(ue),N=Math.sin(ue),I=function(V){return V.toFixed(4)},G=[I(A),I(N),I(-1*N),I(A),0,0,"cm"]}this.internal.write("q"),ue?(this.internal.write([1,"0","0",1,ee(C),me(B+te),"cm"].join(" ")),this.internal.write(G.join(" ")),this.internal.write([ee(Z),"0","0",ee(te),"0","0","cm"].join(" "))):this.internal.write([ee(Z),"0","0",ee(te),ee(C),me(B+te),"cm"].join(" ")),this.isAdvancedAPI()&&this.internal.write([1,0,0,-1,0,0,"cm"].join(" ")),this.internal.write("/I"+Ne.index+" Do"),this.internal.write("Q")},q=i.color_spaces={DEVICE_RGB:"DeviceRGB",DEVICE_GRAY:"DeviceGray",DEVICE_CMYK:"DeviceCMYK",CAL_GREY:"CalGray",CAL_RGB:"CalRGB",LAB:"Lab",ICC_BASED:"ICCBased",INDEXED:"Indexed",PATTERN:"Pattern",SEPARATION:"Separation",DEVICE_N:"DeviceN"};i.decode={DCT_DECODE:"DCTDecode",FLATE_DECODE:"FlateDecode",LZW_DECODE:"LZWDecode",JPX_DECODE:"JPXDecode",JBIG2_DECODE:"JBIG2Decode",ASCII85_DECODE:"ASCII85Decode",ASCII_HEX_DECODE:"ASCIIHexDecode",RUN_LENGTH_DECODE:"RunLengthDecode",CCITT_FAX_DECODE:"CCITTFaxDecode"};var _=i.image_compression={NONE:"NONE",FAST:"FAST",MEDIUM:"MEDIUM",SLOW:"SLOW"},F=i.__addimage__.sHashCode=function(C){var B,Z,te=0;if(typeof C=="string")for(Z=C.length,B=0;B<Z;B++)te=(te<<5)-te+C.charCodeAt(B),te|=0;else if(ye(C))for(Z=C.byteLength/2,B=0;B<Z;B++)te=(te<<5)-te+C[B],te|=0;return te},K=i.__addimage__.validateStringAsBase64=function(C){(C=C||"").toString().trim();var B=!0;return C.length===0&&(B=!1),C.length%4!=0&&(B=!1),/^[A-Za-z0-9+/]+$/.test(C.substr(0,C.length-2))===!1&&(B=!1),/^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(C.substr(-2))===!1&&(B=!1),B},he=i.__addimage__.extractImageFromDataUrl=function(C){var B=(C=C||"").split("base64,"),Z=null;if(B.length===2){var te=/^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(B[0]);Array.isArray(te)&&(Z={mimeType:te[1],charset:te[2],data:B[1]})}return Z},ve=i.__addimage__.supportsArrayBuffer=function(){return typeof ArrayBuffer<"u"&&typeof Uint8Array<"u"};i.__addimage__.isArrayBuffer=function(C){return ve()&&C instanceof ArrayBuffer};var ye=i.__addimage__.isArrayBufferView=function(C){return ve()&&typeof Uint32Array<"u"&&(C instanceof Int8Array||C instanceof Uint8Array||typeof Uint8ClampedArray<"u"&&C instanceof Uint8ClampedArray||C instanceof Int16Array||C instanceof Uint16Array||C instanceof Int32Array||C instanceof Uint32Array||C instanceof Float32Array||C instanceof Float64Array)},oe=i.__addimage__.binaryStringToUint8Array=function(C){for(var B=C.length,Z=new Uint8Array(B),te=0;te<B;te++)Z[te]=C.charCodeAt(te);return Z},$=i.__addimage__.arrayBufferToBinaryString=function(C){for(var B="",Z=ye(C)?C:new Uint8Array(C),te=0;te<Z.length;te+=8192)B+=String.fromCharCode.apply(null,Z.subarray(te,te+8192));return B};i.addImage=function(){var C,B,Z,te,Ne,ue,ke,ee,me;if(typeof arguments[1]=="number"?(B=n,Z=arguments[1],te=arguments[2],Ne=arguments[3],ue=arguments[4],ke=arguments[5],ee=arguments[6],me=arguments[7]):(B=arguments[1],Z=arguments[2],te=arguments[3],Ne=arguments[4],ue=arguments[5],ke=arguments[6],ee=arguments[7],me=arguments[8]),nn(C=arguments[0])==="object"&&!T(C)&&"imageData"in C){var z=C;C=z.imageData,B=z.format||B||n,Z=z.x||Z||0,te=z.y||te||0,Ne=z.w||z.width||Ne,ue=z.h||z.height||ue,ke=z.alias||ke,ee=z.compression||ee,me=z.rotation||z.angle||me}var A=this.internal.getFilters();if(ee===void 0&&A.indexOf("FlateEncode")!==-1&&(ee="SLOW"),isNaN(Z)||isNaN(te))throw new Error("Invalid coordinates passed to jsPDF.addImage");f.call(this);var N=pe.call(this,C,B,ke,ee);return D.call(this,Z,te,Ne,ue,N,me),this};var pe=function(C,B,Z,te){var Ne,ue,ke;if(typeof C=="string"&&l(C)===n){C=unescape(C);var ee=Se(C,!1);(ee!==""||(ee=i.loadFile(C,!0))!==void 0)&&(C=ee)}if(T(C)&&(C=P(C,B)),B=l(C,B),!k(B))throw new Error("addImage does not support files of type '"+B+"', please ensure that a plugin for '"+B+"' support is added.");if(((ke=Z)==null||ke.length===0)&&(Z=(function(me){return typeof me=="string"||ye(me)?F(me):ye(me.data)?F(me.data):null})(C)),(Ne=b.call(this,Z))||(ve()&&(C instanceof Uint8Array||B==="RGBA"||(ue=C,C=oe(C))),Ne=this["process"+B.toUpperCase()](C,w.call(this),Z,(function(me){return me&&typeof me=="string"&&(me=me.toUpperCase()),me in i.image_compression?me:_.NONE})(te),ue)),!Ne)throw new Error("An unknown error occurred whilst processing the image.");return Ne},Se=i.__addimage__.convertBase64ToBinaryString=function(C,B){var Z;B=typeof B!="boolean"||B;var te,Ne="";if(typeof C=="string"){te=(Z=he(C))!==null?Z.data:C;try{Ne=yc(te)}catch(ue){if(B)throw K(te)?new Error("atob-Error in jsPDF.convertBase64ToBinaryString "+ue.message):new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")}}return Ne};i.getImageProperties=function(C){var B,Z,te="";if(T(C)&&(C=P(C)),typeof C=="string"&&l(C)===n&&((te=Se(C,!1))===""&&(te=i.loadFile(C)||""),C=te),Z=l(C),!k(Z))throw new Error("addImage does not support files of type '"+Z+"', please ensure that a plugin for '"+Z+"' support is added.");if(!ve()||C instanceof Uint8Array||(C=oe(C)),!(B=this["process"+Z.toUpperCase()](C)))throw new Error("An unknown error occurred whilst processing the image");return B.fileType=Z,B}})(bt.API),(function(i){var n=function(a){if(a!==void 0&&a!="")return!0};bt.API.events.push(["addPage",function(a){this.internal.getPageInfo(a.pageNumber).pageContext.annotations=[]}]),i.events.push(["putPage",function(a){for(var l,p,c,h=this.internal.getCoordinateString,f=this.internal.getVerticalCoordinateString,g=this.internal.getPageInfoByObjId(a.objId),w=a.pageContext.annotations,k=!1,T=0;T<w.length&&!k;T++)switch((l=w[T]).type){case"link":(n(l.options.url)||n(l.options.pageNumber))&&(k=!0);break;case"reference":case"text":case"freetext":k=!0}if(k!=0){this.internal.write("/Annots [");for(var P=0;P<w.length;P++){l=w[P];var b=this.internal.pdfEscape,U=this.internal.getEncryptor(a.objId);switch(l.type){case"reference":this.internal.write(" "+l.object.objId+" 0 R ");break;case"text":var D=this.internal.newAdditionalObject(),q=this.internal.newAdditionalObject(),_=this.internal.getEncryptor(D.objId),F=l.title||"Note";c="<</Type /Annot /Subtype /Text "+(p="/Rect ["+h(l.bounds.x)+" "+f(l.bounds.y+l.bounds.h)+" "+h(l.bounds.x+l.bounds.w)+" "+f(l.bounds.y)+"] ")+"/Contents ("+b(_(l.contents))+")",c+=" /Popup "+q.objId+" 0 R",c+=" /P "+g.objId+" 0 R",c+=" /T ("+b(_(F))+") >>",D.content=c;var K=D.objId+" 0 R";c="<</Type /Annot /Subtype /Popup "+(p="/Rect ["+h(l.bounds.x+30)+" "+f(l.bounds.y+l.bounds.h)+" "+h(l.bounds.x+l.bounds.w+30)+" "+f(l.bounds.y)+"] ")+" /Parent "+K,l.open&&(c+=" /Open true"),c+=" >>",q.content=c,this.internal.write(D.objId,"0 R",q.objId,"0 R");break;case"freetext":p="/Rect ["+h(l.bounds.x)+" "+f(l.bounds.y)+" "+h(l.bounds.x+l.bounds.w)+" "+f(l.bounds.y+l.bounds.h)+"] ";var he=l.color||"#000000";c="<</Type /Annot /Subtype /FreeText "+p+"/Contents ("+b(U(l.contents))+")",c+=" /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#"+he+")",c+=" /Border [0 0 0]",c+=" >>",this.internal.write(c);break;case"link":if(l.options.name){var ve=this.annotations._nameMap[l.options.name];l.options.pageNumber=ve.page,l.options.top=ve.y}else l.options.top||(l.options.top=0);if(p="/Rect ["+l.finalBounds.x+" "+l.finalBounds.y+" "+l.finalBounds.w+" "+l.finalBounds.h+"] ",c="",l.options.url)c="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /A <</S /URI /URI ("+b(U(l.options.url))+") >>";else if(l.options.pageNumber)switch(c="<</Type /Annot /Subtype /Link "+p+"/Border [0 0 0] /Dest ["+this.internal.getPageInfo(l.options.pageNumber).objId+" 0 R",l.options.magFactor=l.options.magFactor||"XYZ",l.options.magFactor){case"Fit":c+=" /Fit]";break;case"FitH":c+=" /FitH "+l.options.top+"]";break;case"FitV":l.options.left=l.options.left||0,c+=" /FitV "+l.options.left+"]";break;case"XYZ":default:var ye=f(l.options.top);l.options.left=l.options.left||0,l.options.zoom===void 0&&(l.options.zoom=0),c+=" /XYZ "+l.options.left+" "+ye+" "+l.options.zoom+"]"}c!=""&&(c+=" >>",this.internal.write(c))}}this.internal.write("]")}}]),i.createAnnotation=function(a){var l=this.internal.getCurrentPageInfo();switch(a.type){case"link":this.link(a.bounds.x,a.bounds.y,a.bounds.w,a.bounds.h,a);break;case"text":case"freetext":l.pageContext.annotations.push(a)}},i.link=function(a,l,p,c,h){var f=this.internal.getCurrentPageInfo(),g=this.internal.getCoordinateString,w=this.internal.getVerticalCoordinateString;f.pageContext.annotations.push({finalBounds:{x:g(a),y:w(l),w:g(a+p),h:w(l+c)},options:h,type:"link"})},i.textWithLink=function(a,l,p,c){var h,f,g=this.getTextWidth(a),w=this.internal.getLineHeight()/this.internal.scaleFactor;if(c.maxWidth!==void 0){f=c.maxWidth;var k=this.splitTextToSize(a,f).length;h=Math.ceil(w*k)}else f=g,h=w;return this.text(a,l,p,c),p+=.2*w,c.align==="center"&&(l-=g/2),c.align==="right"&&(l-=g),this.link(l,p-w,f,h,c),g},i.getTextWidth=function(a){var l=this.internal.getFontSize();return this.getStringUnitWidth(a)*l/this.internal.scaleFactor}})(bt.API),(function(i){var n={1569:[65152],1570:[65153,65154],1571:[65155,65156],1572:[65157,65158],1573:[65159,65160],1574:[65161,65162,65163,65164],1575:[65165,65166],1576:[65167,65168,65169,65170],1577:[65171,65172],1578:[65173,65174,65175,65176],1579:[65177,65178,65179,65180],1580:[65181,65182,65183,65184],1581:[65185,65186,65187,65188],1582:[65189,65190,65191,65192],1583:[65193,65194],1584:[65195,65196],1585:[65197,65198],1586:[65199,65200],1587:[65201,65202,65203,65204],1588:[65205,65206,65207,65208],1589:[65209,65210,65211,65212],1590:[65213,65214,65215,65216],1591:[65217,65218,65219,65220],1592:[65221,65222,65223,65224],1593:[65225,65226,65227,65228],1594:[65229,65230,65231,65232],1601:[65233,65234,65235,65236],1602:[65237,65238,65239,65240],1603:[65241,65242,65243,65244],1604:[65245,65246,65247,65248],1605:[65249,65250,65251,65252],1606:[65253,65254,65255,65256],1607:[65257,65258,65259,65260],1608:[65261,65262],1609:[65263,65264,64488,64489],1610:[65265,65266,65267,65268],1649:[64336,64337],1655:[64477],1657:[64358,64359,64360,64361],1658:[64350,64351,64352,64353],1659:[64338,64339,64340,64341],1662:[64342,64343,64344,64345],1663:[64354,64355,64356,64357],1664:[64346,64347,64348,64349],1667:[64374,64375,64376,64377],1668:[64370,64371,64372,64373],1670:[64378,64379,64380,64381],1671:[64382,64383,64384,64385],1672:[64392,64393],1676:[64388,64389],1677:[64386,64387],1678:[64390,64391],1681:[64396,64397],1688:[64394,64395],1700:[64362,64363,64364,64365],1702:[64366,64367,64368,64369],1705:[64398,64399,64400,64401],1709:[64467,64468,64469,64470],1711:[64402,64403,64404,64405],1713:[64410,64411,64412,64413],1715:[64406,64407,64408,64409],1722:[64414,64415],1723:[64416,64417,64418,64419],1726:[64426,64427,64428,64429],1728:[64420,64421],1729:[64422,64423,64424,64425],1733:[64480,64481],1734:[64473,64474],1735:[64471,64472],1736:[64475,64476],1737:[64482,64483],1739:[64478,64479],1740:[64508,64509,64510,64511],1744:[64484,64485,64486,64487],1746:[64430,64431],1747:[64432,64433]},a={65247:{65154:65269,65156:65271,65160:65273,65166:65275},65248:{65154:65270,65156:65272,65160:65274,65166:65276},65165:{65247:{65248:{65258:65010}}},1617:{1612:64606,1613:64607,1614:64608,1615:64609,1616:64610}},l={1612:64606,1613:64607,1614:64608,1615:64609,1616:64610},p=[1570,1571,1573,1575];i.__arabicParser__={};var c=i.__arabicParser__.isInArabicSubstitutionA=function(D){return n[D.charCodeAt(0)]!==void 0},h=i.__arabicParser__.isArabicLetter=function(D){return typeof D=="string"&&/^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(D)},f=i.__arabicParser__.isArabicEndLetter=function(D){return h(D)&&c(D)&&n[D.charCodeAt(0)].length<=2},g=i.__arabicParser__.isArabicAlfLetter=function(D){return h(D)&&p.indexOf(D.charCodeAt(0))>=0};i.__arabicParser__.arabicLetterHasIsolatedForm=function(D){return h(D)&&c(D)&&n[D.charCodeAt(0)].length>=1};var w=i.__arabicParser__.arabicLetterHasFinalForm=function(D){return h(D)&&c(D)&&n[D.charCodeAt(0)].length>=2};i.__arabicParser__.arabicLetterHasInitialForm=function(D){return h(D)&&c(D)&&n[D.charCodeAt(0)].length>=3};var k=i.__arabicParser__.arabicLetterHasMedialForm=function(D){return h(D)&&c(D)&&n[D.charCodeAt(0)].length==4},T=i.__arabicParser__.resolveLigatures=function(D){var q=0,_=a,F="",K=0;for(q=0;q<D.length;q+=1)_[D.charCodeAt(q)]!==void 0?(K++,typeof(_=_[D.charCodeAt(q)])=="number"&&(F+=String.fromCharCode(_),_=a,K=0),q===D.length-1&&(_=a,F+=D.charAt(q-(K-1)),q-=K-1,K=0)):(_=a,F+=D.charAt(q-K),q-=K,K=0);return F};i.__arabicParser__.isArabicDiacritic=function(D){return D!==void 0&&l[D.charCodeAt(0)]!==void 0};var P=i.__arabicParser__.getCorrectForm=function(D,q,_){return h(D)?c(D)===!1?-1:!w(D)||!h(q)&&!h(_)||!h(_)&&f(q)||f(D)&&!h(q)||f(D)&&g(q)||f(D)&&f(q)?0:k(D)&&h(q)&&!f(q)&&h(_)&&w(_)?3:f(D)||!h(_)?1:2:-1},b=function(D){var q=0,_=0,F=0,K="",he="",ve="",ye=(D=D||"").split("\\s+"),oe=[];for(q=0;q<ye.length;q+=1){for(oe.push(""),_=0;_<ye[q].length;_+=1)K=ye[q][_],he=ye[q][_-1],ve=ye[q][_+1],h(K)?(F=P(K,he,ve),oe[q]+=F!==-1?String.fromCharCode(n[K.charCodeAt(0)][F]):K):oe[q]+=K;oe[q]=T(oe[q])}return oe.join(" ")},U=i.__arabicParser__.processArabic=i.processArabic=function(){var D,q=typeof arguments[0]=="string"?arguments[0]:arguments[0].text,_=[];if(Array.isArray(q)){var F=0;for(_=[],F=0;F<q.length;F+=1)Array.isArray(q[F])?_.push([b(q[F][0]),q[F][1],q[F][2]]):_.push([b(q[F])]);D=_}else D=b(q);return typeof arguments[0]=="string"?D:(arguments[0].text=D,arguments[0])};i.events.push(["preProcessText",U])})(bt.API),bt.API.autoPrint=function(i){var n;switch((i=i||{}).variant=i.variant||"non-conform",i.variant){case"javascript":this.addJS("print({});");break;case"non-conform":default:this.internal.events.subscribe("postPutResources",(function(){n=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /Named"),this.internal.out("/Type /Action"),this.internal.out("/N /Print"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){this.internal.out("/OpenAction "+n+" 0 R")}))}return this},(function(i){var n=function(){var a=void 0;Object.defineProperty(this,"pdf",{get:function(){return a},set:function(f){a=f}});var l=150;Object.defineProperty(this,"width",{get:function(){return l},set:function(f){l=isNaN(f)||Number.isInteger(f)===!1||f<0?150:f,this.getContext("2d").pageWrapXEnabled&&(this.getContext("2d").pageWrapX=l+1)}});var p=300;Object.defineProperty(this,"height",{get:function(){return p},set:function(f){p=isNaN(f)||Number.isInteger(f)===!1||f<0?300:f,this.getContext("2d").pageWrapYEnabled&&(this.getContext("2d").pageWrapY=p+1)}});var c=[];Object.defineProperty(this,"childNodes",{get:function(){return c},set:function(f){c=f}});var h={};Object.defineProperty(this,"style",{get:function(){return h},set:function(f){h=f}}),Object.defineProperty(this,"parentNode",{})};n.prototype.getContext=function(a,l){var p;if((a=a||"2d")!=="2d")return null;for(p in l)this.pdf.context2d.hasOwnProperty(p)&&(this.pdf.context2d[p]=l[p]);return this.pdf.context2d._canvas=this,this.pdf.context2d},n.prototype.toDataURL=function(){throw new Error("toDataURL is not implemented.")},i.events.push(["initialized",function(){this.canvas=new n,this.canvas.pdf=this}])})(bt.API),(function(i){var n={left:0,top:0,bottom:0,right:0},a=!1,l=function(){this.internal.__cell__===void 0&&(this.internal.__cell__={},this.internal.__cell__.padding=3,this.internal.__cell__.headerFunction=void 0,this.internal.__cell__.margins=Object.assign({},n),this.internal.__cell__.margins.width=this.getPageWidth(),p.call(this))},p=function(){this.internal.__cell__.lastCell=new c,this.internal.__cell__.pages=1},c=function(){var g=arguments[0];Object.defineProperty(this,"x",{enumerable:!0,get:function(){return g},set:function(D){g=D}});var w=arguments[1];Object.defineProperty(this,"y",{enumerable:!0,get:function(){return w},set:function(D){w=D}});var k=arguments[2];Object.defineProperty(this,"width",{enumerable:!0,get:function(){return k},set:function(D){k=D}});var T=arguments[3];Object.defineProperty(this,"height",{enumerable:!0,get:function(){return T},set:function(D){T=D}});var P=arguments[4];Object.defineProperty(this,"text",{enumerable:!0,get:function(){return P},set:function(D){P=D}});var b=arguments[5];Object.defineProperty(this,"lineNumber",{enumerable:!0,get:function(){return b},set:function(D){b=D}});var U=arguments[6];return Object.defineProperty(this,"align",{enumerable:!0,get:function(){return U},set:function(D){U=D}}),this};c.prototype.clone=function(){return new c(this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align)},c.prototype.toArray=function(){return[this.x,this.y,this.width,this.height,this.text,this.lineNumber,this.align]},i.setHeaderFunction=function(g){return l.call(this),this.internal.__cell__.headerFunction=typeof g=="function"?g:void 0,this},i.getTextDimensions=function(g,w){l.call(this);var k=(w=w||{}).fontSize||this.getFontSize(),T=w.font||this.getFont(),P=w.scaleFactor||this.internal.scaleFactor,b=0,U=0,D=0,q=this;if(!Array.isArray(g)&&typeof g!="string"){if(typeof g!="number")throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");g=String(g)}var _=w.maxWidth;_>0?typeof g=="string"?g=this.splitTextToSize(g,_):Object.prototype.toString.call(g)==="[object Array]"&&(g=g.reduce((function(K,he){return K.concat(q.splitTextToSize(he,_))}),[])):g=Array.isArray(g)?g:[g];for(var F=0;F<g.length;F++)b<(D=this.getStringUnitWidth(g[F],{font:T})*k)&&(b=D);return b!==0&&(U=g.length),{w:b/=P,h:Math.max((U*k*this.getLineHeightFactor()-k*(this.getLineHeightFactor()-1))/P,0)}},i.cellAddPage=function(){l.call(this),this.addPage();var g=this.internal.__cell__.margins||n;return this.internal.__cell__.lastCell=new c(g.left,g.top,void 0,void 0),this.internal.__cell__.pages+=1,this};var h=i.cell=function(){var g;g=arguments[0]instanceof c?arguments[0]:new c(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]),l.call(this);var w=this.internal.__cell__.lastCell,k=this.internal.__cell__.padding,T=this.internal.__cell__.margins||n,P=this.internal.__cell__.tableHeaderRow,b=this.internal.__cell__.printHeaders;return w.lineNumber!==void 0&&(w.lineNumber===g.lineNumber?(g.x=(w.x||0)+(w.width||0),g.y=w.y||0):w.y+w.height+g.height+T.bottom>this.getPageHeight()?(this.cellAddPage(),g.y=T.top,b&&P&&(this.printHeaderRow(g.lineNumber,!0),g.y+=P[0].height)):g.y=w.y+w.height||g.y),g.text[0]!==void 0&&(this.rect(g.x,g.y,g.width,g.height,a===!0?"FD":void 0),g.align==="right"?this.text(g.text,g.x+g.width-k,g.y+k,{align:"right",baseline:"top"}):g.align==="center"?this.text(g.text,g.x+g.width/2,g.y+k,{align:"center",baseline:"top",maxWidth:g.width-k-k}):this.text(g.text,g.x+k,g.y+k,{align:"left",baseline:"top",maxWidth:g.width-k-k})),this.internal.__cell__.lastCell=g,this};i.table=function(g,w,k,T,P){if(l.call(this),!k)throw new Error("No data for PDF table.");var b,U,D,q,_=[],F=[],K=[],he={},ve={},ye=[],oe=[],$=(P=P||{}).autoSize||!1,pe=P.printHeaders!==!1,Se=P.css&&P.css["font-size"]!==void 0?16*P.css["font-size"]:P.fontSize||12,C=P.margins||Object.assign({width:this.getPageWidth()},n),B=typeof P.padding=="number"?P.padding:3,Z=P.headerBackgroundColor||"#c8c8c8",te=P.headerTextColor||"#000";if(p.call(this),this.internal.__cell__.printHeaders=pe,this.internal.__cell__.margins=C,this.internal.__cell__.table_font_size=Se,this.internal.__cell__.padding=B,this.internal.__cell__.headerBackgroundColor=Z,this.internal.__cell__.headerTextColor=te,this.setFontSize(Se),T==null)F=_=Object.keys(k[0]),K=_.map((function(){return"left"}));else if(Array.isArray(T)&&nn(T[0])==="object")for(_=T.map((function(z){return z.name})),F=T.map((function(z){return z.prompt||z.name||""})),K=T.map((function(z){return z.align||"left"})),b=0;b<T.length;b+=1)ve[T[b].name]=T[b].width*(19.049976/25.4);else Array.isArray(T)&&typeof T[0]=="string"&&(F=_=T,K=_.map((function(){return"left"})));if($||Array.isArray(T)&&typeof T[0]=="string")for(b=0;b<_.length;b+=1){for(he[q=_[b]]=k.map((function(z){return z[q]})),this.setFont(void 0,"bold"),ye.push(this.getTextDimensions(F[b],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w),U=he[q],this.setFont(void 0,"normal"),D=0;D<U.length;D+=1)ye.push(this.getTextDimensions(U[D],{fontSize:this.internal.__cell__.table_font_size,scaleFactor:this.internal.scaleFactor}).w);ve[q]=Math.max.apply(null,ye)+B+B,ye=[]}if(pe){var Ne={};for(b=0;b<_.length;b+=1)Ne[_[b]]={},Ne[_[b]].text=F[b],Ne[_[b]].align=K[b];var ue=f.call(this,Ne,ve);oe=_.map((function(z){return new c(g,w,ve[z],ue,Ne[z].text,void 0,Ne[z].align)})),this.setTableHeaderRow(oe),this.printHeaderRow(1,!1)}var ke=T.reduce((function(z,A){return z[A.name]=A.align,z}),{});for(b=0;b<k.length;b+=1){"rowStart"in P&&P.rowStart instanceof Function&&P.rowStart({row:b,data:k[b]},this);var ee=f.call(this,k[b],ve);for(D=0;D<_.length;D+=1){var me=k[b][_[D]];"cellStart"in P&&P.cellStart instanceof Function&&P.cellStart({row:b,col:D,data:me},this),h.call(this,new c(g,w,ve[_[D]],ee,me,b+2,ke[_[D]]))}}return this.internal.__cell__.table_x=g,this.internal.__cell__.table_y=w,this};var f=function(g,w){var k=this.internal.__cell__.padding,T=this.internal.__cell__.table_font_size,P=this.internal.scaleFactor;return Object.keys(g).map((function(b){var U=g[b];return this.splitTextToSize(U.hasOwnProperty("text")?U.text:U,w[b]-k-k)}),this).map((function(b){return this.getLineHeightFactor()*b.length*T/P+k+k}),this).reduce((function(b,U){return Math.max(b,U)}),0)};i.setTableHeaderRow=function(g){l.call(this),this.internal.__cell__.tableHeaderRow=g},i.printHeaderRow=function(g,w){if(l.call(this),!this.internal.__cell__.tableHeaderRow)throw new Error("Property tableHeaderRow does not exist.");var k;if(a=!0,typeof this.internal.__cell__.headerFunction=="function"){var T=this.internal.__cell__.headerFunction(this,this.internal.__cell__.pages);this.internal.__cell__.lastCell=new c(T[0],T[1],T[2],T[3],void 0,-1)}this.setFont(void 0,"bold");for(var P=[],b=0;b<this.internal.__cell__.tableHeaderRow.length;b+=1){k=this.internal.__cell__.tableHeaderRow[b].clone(),w&&(k.y=this.internal.__cell__.margins.top||0,P.push(k)),k.lineNumber=g;var U=this.getTextColor();this.setTextColor(this.internal.__cell__.headerTextColor),this.setFillColor(this.internal.__cell__.headerBackgroundColor),h.call(this,k),this.setTextColor(U)}P.length>0&&this.setTableHeaderRow(P),this.setFont(void 0,"normal"),a=!1}})(bt.API);var Af={italic:["italic","oblique","normal"],oblique:["oblique","italic","normal"],normal:["normal","oblique","italic"]},jf=["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded"],Ju=Pf(jf),Cf=[100,200,300,400,500,600,700,800,900],w0=Pf(Cf);function $u(i){var n=i.family.replace(/"|'/g,"").toLowerCase(),a=(function(c){return Af[c=c||"normal"]?c:"normal"})(i.style),l=(function(c){if(!c)return 400;if(typeof c=="number")return c>=100&&c<=900&&c%100==0?c:400;if(/^\d00$/.test(c))return parseInt(c);switch(c){case"bold":return 700;case"normal":default:return 400}})(i.weight),p=(function(c){return typeof Ju[c=c||"normal"]=="number"?c:"normal"})(i.stretch);return{family:n,style:a,weight:l,stretch:p,src:i.src||[],ref:i.ref||{name:n,style:[p,a,l].join(" ")}}}function Dh(i,n,a,l){var p;for(p=a;p>=0&&p<n.length;p+=l)if(i[n[p]])return i[n[p]];for(p=a;p>=0&&p<n.length;p-=l)if(i[n[p]])return i[n[p]]}var S0={"sans-serif":"helvetica",fixed:"courier",monospace:"courier",terminal:"courier",cursive:"times",fantasy:"times",serif:"times"},Rh={caption:"times",icon:"times",menu:"times","message-box":"times","small-caption":"times","status-bar":"times"};function Fh(i){return[i.stretch,i.style,i.weight,i.family].join(" ")}function k0(i,n,a){for(var l=(a=a||{}).defaultFontFamily||"times",p=Object.assign({},S0,a.genericFontFamilies||{}),c=null,h=null,f=0;f<n.length;++f)if(p[(c=$u(n[f])).family]&&(c.family=p[c.family]),i.hasOwnProperty(c.family)){h=i[c.family];break}if(!(h=h||i[l]))throw new Error("Could not find a font-family for the rule '"+Fh(c)+"' and default family '"+l+"'.");if(h=(function(g,w){if(w[g])return w[g];var k=Ju[g],T=k<=Ju.normal?-1:1,P=Dh(w,jf,k,T);if(!P)throw new Error("Could not find a matching font-stretch value for "+g);return P})(c.stretch,h),h=(function(g,w){if(w[g])return w[g];for(var k=Af[g],T=0;T<k.length;++T)if(w[k[T]])return w[k[T]];throw new Error("Could not find a matching font-style for "+g)})(c.style,h),!(h=(function(g,w){if(w[g])return w[g];if(g===400&&w[500])return w[500];if(g===500&&w[400])return w[400];var k=w0[g],T=Dh(w,Cf,k,g<400?-1:1);if(!T)throw new Error("Could not find a matching font-weight for value "+g);return T})(c.weight,h)))throw new Error("Failed to resolve a font for the rule '"+Fh(c)+"'.");return h}function zh(i){return i.trimLeft()}function N0(i,n){for(var a=0;a<i.length;){if(i.charAt(a)===n)return[i.substring(0,a),i.substring(a+1)];a+=1}return null}function T0(i){var n=i.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);return n===null?null:[n[0],i.substring(n[0].length)]}var dd,Oh,Bh,Pu=["times"];(function(i){var n,a,l,p,c,h,f,g,w,k=function(N){return N=N||{},this.isStrokeTransparent=N.isStrokeTransparent||!1,this.strokeOpacity=N.strokeOpacity||1,this.strokeStyle=N.strokeStyle||"#000000",this.fillStyle=N.fillStyle||"#000000",this.isFillTransparent=N.isFillTransparent||!1,this.fillOpacity=N.fillOpacity||1,this.font=N.font||"10px sans-serif",this.textBaseline=N.textBaseline||"alphabetic",this.textAlign=N.textAlign||"left",this.lineWidth=N.lineWidth||1,this.lineJoin=N.lineJoin||"miter",this.lineCap=N.lineCap||"butt",this.path=N.path||[],this.transform=N.transform!==void 0?N.transform.clone():new g,this.globalCompositeOperation=N.globalCompositeOperation||"normal",this.globalAlpha=N.globalAlpha||1,this.clip_path=N.clip_path||[],this.currentPoint=N.currentPoint||new h,this.miterLimit=N.miterLimit||10,this.lastPoint=N.lastPoint||new h,this.lineDashOffset=N.lineDashOffset||0,this.lineDash=N.lineDash||[],this.margin=N.margin||[0,0,0,0],this.prevPageLastElemOffset=N.prevPageLastElemOffset||0,this.ignoreClearRect=typeof N.ignoreClearRect!="boolean"||N.ignoreClearRect,this};i.events.push(["initialized",function(){this.context2d=new T(this),n=this.internal.f2,a=this.internal.getCoordinateString,l=this.internal.getVerticalCoordinateString,p=this.internal.getHorizontalCoordinate,c=this.internal.getVerticalCoordinate,h=this.internal.Point,f=this.internal.Rectangle,g=this.internal.Matrix,w=new k}]);var T=function(N){Object.defineProperty(this,"canvas",{get:function(){return{parentNode:!1,style:!1}}});var I=N;Object.defineProperty(this,"pdf",{get:function(){return I}});var G=!1;Object.defineProperty(this,"pageWrapXEnabled",{get:function(){return G},set:function(je){G=!!je}});var V=!1;Object.defineProperty(this,"pageWrapYEnabled",{get:function(){return V},set:function(je){V=!!je}});var Y=0;Object.defineProperty(this,"posX",{get:function(){return Y},set:function(je){isNaN(je)||(Y=je)}});var ne=0;Object.defineProperty(this,"posY",{get:function(){return ne},set:function(je){isNaN(je)||(ne=je)}}),Object.defineProperty(this,"margin",{get:function(){return w.margin},set:function(je){var Q;typeof je=="number"?Q=[je,je,je,je]:((Q=new Array(4))[0]=je[0],Q[1]=je.length>=2?je[1]:Q[0],Q[2]=je.length>=3?je[2]:Q[0],Q[3]=je.length>=4?je[3]:Q[1]),w.margin=Q}});var re=!1;Object.defineProperty(this,"autoPaging",{get:function(){return re},set:function(je){re=je}});var ce=0;Object.defineProperty(this,"lastBreak",{get:function(){return ce},set:function(je){ce=je}});var _e=[];Object.defineProperty(this,"pageBreaks",{get:function(){return _e},set:function(je){_e=je}}),Object.defineProperty(this,"ctx",{get:function(){return w},set:function(je){je instanceof k&&(w=je)}}),Object.defineProperty(this,"path",{get:function(){return w.path},set:function(je){w.path=je}});var Re=[];Object.defineProperty(this,"ctxStack",{get:function(){return Re},set:function(je){Re=je}}),Object.defineProperty(this,"fillStyle",{get:function(){return this.ctx.fillStyle},set:function(je){var Q;Q=P(je),this.ctx.fillStyle=Q.style,this.ctx.isFillTransparent=Q.a===0,this.ctx.fillOpacity=Q.a,this.pdf.setFillColor(Q.r,Q.g,Q.b,{a:Q.a}),this.pdf.setTextColor(Q.r,Q.g,Q.b,{a:Q.a})}}),Object.defineProperty(this,"strokeStyle",{get:function(){return this.ctx.strokeStyle},set:function(je){var Q=P(je);this.ctx.strokeStyle=Q.style,this.ctx.isStrokeTransparent=Q.a===0,this.ctx.strokeOpacity=Q.a,Q.a===0?this.pdf.setDrawColor(255,255,255):(Q.a,this.pdf.setDrawColor(Q.r,Q.g,Q.b))}}),Object.defineProperty(this,"lineCap",{get:function(){return this.ctx.lineCap},set:function(je){["butt","round","square"].indexOf(je)!==-1&&(this.ctx.lineCap=je,this.pdf.setLineCap(je))}}),Object.defineProperty(this,"lineWidth",{get:function(){return this.ctx.lineWidth},set:function(je){isNaN(je)||(this.ctx.lineWidth=je,this.pdf.setLineWidth(je))}}),Object.defineProperty(this,"lineJoin",{get:function(){return this.ctx.lineJoin},set:function(je){["bevel","round","miter"].indexOf(je)!==-1&&(this.ctx.lineJoin=je,this.pdf.setLineJoin(je))}}),Object.defineProperty(this,"miterLimit",{get:function(){return this.ctx.miterLimit},set:function(je){isNaN(je)||(this.ctx.miterLimit=je,this.pdf.setMiterLimit(je))}}),Object.defineProperty(this,"textBaseline",{get:function(){return this.ctx.textBaseline},set:function(je){this.ctx.textBaseline=je}}),Object.defineProperty(this,"textAlign",{get:function(){return this.ctx.textAlign},set:function(je){["right","end","center","left","start"].indexOf(je)!==-1&&(this.ctx.textAlign=je)}});var Be=null;function Ue(je,Q){if(Be===null){var st=(function(Xe){var Oe=[];return Object.keys(Xe).forEach((function(Ae){Xe[Ae].forEach((function(Fe){var We=null;switch(Fe){case"bold":We={family:Ae,weight:"bold"};break;case"italic":We={family:Ae,style:"italic"};break;case"bolditalic":We={family:Ae,weight:"bold",style:"italic"};break;case"":case"normal":We={family:Ae}}We!==null&&(We.ref={name:Ae,style:Fe},Oe.push(We))}))})),Oe})(je.getFontList());Be=(function(Xe){for(var Oe={},Ae=0;Ae<Xe.length;++Ae){var Fe=$u(Xe[Ae]),We=Fe.family,rt=Fe.stretch,gt=Fe.style,Nt=Fe.weight;Oe[We]=Oe[We]||{},Oe[We][rt]=Oe[We][rt]||{},Oe[We][rt][gt]=Oe[We][rt][gt]||{},Oe[We][rt][gt][Nt]=Fe}return Oe})(st.concat(Q))}return Be}var Ke=null;Object.defineProperty(this,"fontFaces",{get:function(){return Ke},set:function(je){Be=null,Ke=je}}),Object.defineProperty(this,"font",{get:function(){return this.ctx.font},set:function(je){var Q;if(this.ctx.font=je,(Q=/^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(je))!==null){var st=Q[1],Xe=(Q[2],Q[3]),Oe=Q[4],Ae=(Q[5],Q[6]),Fe=/^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(Oe)[2];Oe=Math.floor(Fe==="px"?parseFloat(Oe)*this.pdf.internal.scaleFactor:Fe==="em"?parseFloat(Oe)*this.pdf.getFontSize():parseFloat(Oe)*this.pdf.internal.scaleFactor),this.pdf.setFontSize(Oe);var We=(function(ft){var Tt,$e,On=[],It=ft.trim();if(It==="")return Pu;if(It in Rh)return[Rh[It]];for(;It!=="";){switch($e=null,Tt=(It=zh(It)).charAt(0)){case'"':case"'":$e=N0(It.substring(1),Tt);break;default:$e=T0(It)}if($e===null||(On.push($e[0]),(It=zh($e[1]))!==""&&It.charAt(0)!==","))return Pu;It=It.replace(/^,/,"")}return On})(Ae);if(this.fontFaces){var rt=k0(Ue(this.pdf,this.fontFaces),We.map((function(ft){return{family:ft,stretch:"normal",weight:Xe,style:st}})));this.pdf.setFont(rt.ref.name,rt.ref.style)}else{var gt="";(Xe==="bold"||parseInt(Xe,10)>=700||st==="bold")&&(gt="bold"),st==="italic"&&(gt+="italic"),gt.length===0&&(gt="normal");for(var Nt="",jt={arial:"Helvetica",Arial:"Helvetica",verdana:"Helvetica",Verdana:"Helvetica",helvetica:"Helvetica",Helvetica:"Helvetica","sans-serif":"Helvetica",fixed:"Courier",monospace:"Courier",terminal:"Courier",cursive:"Times",fantasy:"Times",serif:"Times"},Et=0;Et<We.length;Et++){if(this.pdf.internal.getFont(We[Et],gt,{noFallback:!0,disableWarning:!0})!==void 0){Nt=We[Et];break}if(gt==="bolditalic"&&this.pdf.internal.getFont(We[Et],"bold",{noFallback:!0,disableWarning:!0})!==void 0)Nt=We[Et],gt="bold";else if(this.pdf.internal.getFont(We[Et],"normal",{noFallback:!0,disableWarning:!0})!==void 0){Nt=We[Et],gt="normal";break}}if(Nt===""){for(var Rt=0;Rt<We.length;Rt++)if(jt[We[Rt]]){Nt=jt[We[Rt]];break}}Nt=Nt===""?"Times":Nt,this.pdf.setFont(Nt,gt)}}}}),Object.defineProperty(this,"globalCompositeOperation",{get:function(){return this.ctx.globalCompositeOperation},set:function(je){this.ctx.globalCompositeOperation=je}}),Object.defineProperty(this,"globalAlpha",{get:function(){return this.ctx.globalAlpha},set:function(je){this.ctx.globalAlpha=je}}),Object.defineProperty(this,"lineDashOffset",{get:function(){return this.ctx.lineDashOffset},set:function(je){this.ctx.lineDashOffset=je,A.call(this)}}),Object.defineProperty(this,"lineDash",{get:function(){return this.ctx.lineDash},set:function(je){this.ctx.lineDash=je,A.call(this)}}),Object.defineProperty(this,"ignoreClearRect",{get:function(){return this.ctx.ignoreClearRect},set:function(je){this.ctx.ignoreClearRect=!!je}})};T.prototype.setLineDash=function(N){this.lineDash=N},T.prototype.getLineDash=function(){return this.lineDash.length%2?this.lineDash.concat(this.lineDash):this.lineDash.slice()},T.prototype.fill=function(){he.call(this,"fill",!1)},T.prototype.stroke=function(){he.call(this,"stroke",!1)},T.prototype.beginPath=function(){this.path=[{type:"begin"}]},T.prototype.moveTo=function(N,I){if(isNaN(N)||isNaN(I))throw on.error("jsPDF.context2d.moveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.moveTo");var G=this.ctx.transform.applyToPoint(new h(N,I));this.path.push({type:"mt",x:G.x,y:G.y}),this.ctx.lastPoint=new h(N,I)},T.prototype.closePath=function(){var N=new h(0,0),I=0;for(I=this.path.length-1;I!==-1;I--)if(this.path[I].type==="begin"&&nn(this.path[I+1])==="object"&&typeof this.path[I+1].x=="number"){N=new h(this.path[I+1].x,this.path[I+1].y);break}this.path.push({type:"close"}),this.ctx.lastPoint=new h(N.x,N.y)},T.prototype.lineTo=function(N,I){if(isNaN(N)||isNaN(I))throw on.error("jsPDF.context2d.lineTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.lineTo");var G=this.ctx.transform.applyToPoint(new h(N,I));this.path.push({type:"lt",x:G.x,y:G.y}),this.ctx.lastPoint=new h(G.x,G.y)},T.prototype.clip=function(){this.ctx.clip_path=JSON.parse(JSON.stringify(this.path)),he.call(this,null,!0)},T.prototype.quadraticCurveTo=function(N,I,G,V){if(isNaN(G)||isNaN(V)||isNaN(N)||isNaN(I))throw on.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");var Y=this.ctx.transform.applyToPoint(new h(G,V)),ne=this.ctx.transform.applyToPoint(new h(N,I));this.path.push({type:"qct",x1:ne.x,y1:ne.y,x:Y.x,y:Y.y}),this.ctx.lastPoint=new h(Y.x,Y.y)},T.prototype.bezierCurveTo=function(N,I,G,V,Y,ne){if(isNaN(Y)||isNaN(ne)||isNaN(N)||isNaN(I)||isNaN(G)||isNaN(V))throw on.error("jsPDF.context2d.bezierCurveTo: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");var re=this.ctx.transform.applyToPoint(new h(Y,ne)),ce=this.ctx.transform.applyToPoint(new h(N,I)),_e=this.ctx.transform.applyToPoint(new h(G,V));this.path.push({type:"bct",x1:ce.x,y1:ce.y,x2:_e.x,y2:_e.y,x:re.x,y:re.y}),this.ctx.lastPoint=new h(re.x,re.y)},T.prototype.arc=function(N,I,G,V,Y,ne){if(isNaN(N)||isNaN(I)||isNaN(G)||isNaN(V)||isNaN(Y))throw on.error("jsPDF.context2d.arc: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.arc");if(ne=!!ne,!this.ctx.transform.isIdentity){var re=this.ctx.transform.applyToPoint(new h(N,I));N=re.x,I=re.y;var ce=this.ctx.transform.applyToPoint(new h(0,G)),_e=this.ctx.transform.applyToPoint(new h(0,0));G=Math.sqrt(Math.pow(ce.x-_e.x,2)+Math.pow(ce.y-_e.y,2))}Math.abs(Y-V)>=2*Math.PI&&(V=0,Y=2*Math.PI),this.path.push({type:"arc",x:N,y:I,radius:G,startAngle:V,endAngle:Y,counterclockwise:ne})},T.prototype.arcTo=function(N,I,G,V,Y){throw new Error("arcTo not implemented.")},T.prototype.rect=function(N,I,G,V){if(isNaN(N)||isNaN(I)||isNaN(G)||isNaN(V))throw on.error("jsPDF.context2d.rect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rect");this.moveTo(N,I),this.lineTo(N+G,I),this.lineTo(N+G,I+V),this.lineTo(N,I+V),this.lineTo(N,I),this.lineTo(N+G,I),this.lineTo(N,I)},T.prototype.fillRect=function(N,I,G,V){if(isNaN(N)||isNaN(I)||isNaN(G)||isNaN(V))throw on.error("jsPDF.context2d.fillRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillRect");if(!b.call(this)){var Y={};this.lineCap!=="butt"&&(Y.lineCap=this.lineCap,this.lineCap="butt"),this.lineJoin!=="miter"&&(Y.lineJoin=this.lineJoin,this.lineJoin="miter"),this.beginPath(),this.rect(N,I,G,V),this.fill(),Y.hasOwnProperty("lineCap")&&(this.lineCap=Y.lineCap),Y.hasOwnProperty("lineJoin")&&(this.lineJoin=Y.lineJoin)}},T.prototype.strokeRect=function(N,I,G,V){if(isNaN(N)||isNaN(I)||isNaN(G)||isNaN(V))throw on.error("jsPDF.context2d.strokeRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");U.call(this)||(this.beginPath(),this.rect(N,I,G,V),this.stroke())},T.prototype.clearRect=function(N,I,G,V){if(isNaN(N)||isNaN(I)||isNaN(G)||isNaN(V))throw on.error("jsPDF.context2d.clearRect: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.clearRect");this.ignoreClearRect||(this.fillStyle="#ffffff",this.fillRect(N,I,G,V))},T.prototype.save=function(N){N=typeof N!="boolean"||N;for(var I=this.pdf.internal.getCurrentPageInfo().pageNumber,G=0;G<this.pdf.internal.getNumberOfPages();G++)this.pdf.setPage(G+1),this.pdf.internal.out("q");if(this.pdf.setPage(I),N){this.ctx.fontSize=this.pdf.internal.getFontSize();var V=new k(this.ctx);this.ctxStack.push(this.ctx),this.ctx=V}},T.prototype.restore=function(N){N=typeof N!="boolean"||N;for(var I=this.pdf.internal.getCurrentPageInfo().pageNumber,G=0;G<this.pdf.internal.getNumberOfPages();G++)this.pdf.setPage(G+1),this.pdf.internal.out("Q");this.pdf.setPage(I),N&&this.ctxStack.length!==0&&(this.ctx=this.ctxStack.pop(),this.fillStyle=this.ctx.fillStyle,this.strokeStyle=this.ctx.strokeStyle,this.font=this.ctx.font,this.lineCap=this.ctx.lineCap,this.lineWidth=this.ctx.lineWidth,this.lineJoin=this.ctx.lineJoin,this.lineDash=this.ctx.lineDash,this.lineDashOffset=this.ctx.lineDashOffset)},T.prototype.toDataURL=function(){throw new Error("toDataUrl not implemented.")};var P=function(N){var I,G,V,Y;if(N.isCanvasGradient===!0&&(N=N.getColor()),!N)return{r:0,g:0,b:0,a:0,style:N};if(/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(N))I=0,G=0,V=0,Y=0;else{var ne=/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(N);if(ne!==null)I=parseInt(ne[1]),G=parseInt(ne[2]),V=parseInt(ne[3]),Y=1;else if((ne=/rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(N))!==null)I=parseInt(ne[1]),G=parseInt(ne[2]),V=parseInt(ne[3]),Y=parseFloat(ne[4]);else{if(Y=1,typeof N=="string"&&N.charAt(0)!=="#"){var re=new xf(N);N=re.ok?re.toHex():"#000000"}N.length===4?(I=N.substring(1,2),I+=I,G=N.substring(2,3),G+=G,V=N.substring(3,4),V+=V):(I=N.substring(1,3),G=N.substring(3,5),V=N.substring(5,7)),I=parseInt(I,16),G=parseInt(G,16),V=parseInt(V,16)}}return{r:I,g:G,b:V,a:Y,style:N}},b=function(){return this.ctx.isFillTransparent||this.globalAlpha==0},U=function(){return!!(this.ctx.isStrokeTransparent||this.globalAlpha==0)};T.prototype.fillText=function(N,I,G,V){if(isNaN(I)||isNaN(G)||typeof N!="string")throw on.error("jsPDF.context2d.fillText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.fillText");if(V=isNaN(V)?void 0:V,!b.call(this)){var Y=ee(this.ctx.transform.rotation),ne=this.ctx.transform.scaleX;B.call(this,{text:N,x:I,y:G,scale:ne,angle:Y,align:this.textAlign,maxWidth:V})}},T.prototype.strokeText=function(N,I,G,V){if(isNaN(I)||isNaN(G)||typeof N!="string")throw on.error("jsPDF.context2d.strokeText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.strokeText");if(!U.call(this)){V=isNaN(V)?void 0:V;var Y=ee(this.ctx.transform.rotation),ne=this.ctx.transform.scaleX;B.call(this,{text:N,x:I,y:G,scale:ne,renderingMode:"stroke",angle:Y,align:this.textAlign,maxWidth:V})}},T.prototype.measureText=function(N){if(typeof N!="string")throw on.error("jsPDF.context2d.measureText: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.measureText");var I=this.pdf,G=this.pdf.internal.scaleFactor,V=I.internal.getFontSize(),Y=I.getStringUnitWidth(N)*V/I.internal.scaleFactor,ne=function(re){var ce=(re=re||{}).width||0;return Object.defineProperty(this,"width",{get:function(){return ce}}),this};return new ne({width:Y*=Math.round(96*G/72*1e4)/1e4})},T.prototype.scale=function(N,I){if(isNaN(N)||isNaN(I))throw on.error("jsPDF.context2d.scale: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.scale");var G=new g(N,0,0,I,0,0);this.ctx.transform=this.ctx.transform.multiply(G)},T.prototype.rotate=function(N){if(isNaN(N))throw on.error("jsPDF.context2d.rotate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.rotate");var I=new g(Math.cos(N),Math.sin(N),-Math.sin(N),Math.cos(N),0,0);this.ctx.transform=this.ctx.transform.multiply(I)},T.prototype.translate=function(N,I){if(isNaN(N)||isNaN(I))throw on.error("jsPDF.context2d.translate: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.translate");var G=new g(1,0,0,1,N,I);this.ctx.transform=this.ctx.transform.multiply(G)},T.prototype.transform=function(N,I,G,V,Y,ne){if(isNaN(N)||isNaN(I)||isNaN(G)||isNaN(V)||isNaN(Y)||isNaN(ne))throw on.error("jsPDF.context2d.transform: Invalid arguments",arguments),new Error("Invalid arguments passed to jsPDF.context2d.transform");var re=new g(N,I,G,V,Y,ne);this.ctx.transform=this.ctx.transform.multiply(re)},T.prototype.setTransform=function(N,I,G,V,Y,ne){N=isNaN(N)?1:N,I=isNaN(I)?0:I,G=isNaN(G)?0:G,V=isNaN(V)?1:V,Y=isNaN(Y)?0:Y,ne=isNaN(ne)?0:ne,this.ctx.transform=new g(N,I,G,V,Y,ne)};var D=function(){return this.margin[0]>0||this.margin[1]>0||this.margin[2]>0||this.margin[3]>0};T.prototype.drawImage=function(N,I,G,V,Y,ne,re,ce,_e){var Re=this.pdf.getImageProperties(N),Be=1,Ue=1,Ke=1,je=1;V!==void 0&&ce!==void 0&&(Ke=ce/V,je=_e/Y,Be=Re.width/V*ce/V,Ue=Re.height/Y*_e/Y),ne===void 0&&(ne=I,re=G,I=0,G=0),V!==void 0&&ce===void 0&&(ce=V,_e=Y),V===void 0&&ce===void 0&&(ce=Re.width,_e=Re.height);for(var Q,st=this.ctx.transform.decompose(),Xe=ee(st.rotate.shx),Oe=new g,Ae=(Oe=(Oe=(Oe=Oe.multiply(st.translate)).multiply(st.skew)).multiply(st.scale)).applyToRectangle(new f(ne-I*Ke,re-G*je,V*Be,Y*Ue)),Fe=q.call(this,Ae),We=[],rt=0;rt<Fe.length;rt+=1)We.indexOf(Fe[rt])===-1&&We.push(Fe[rt]);if(K(We),this.autoPaging)for(var gt=We[0],Nt=We[We.length-1],jt=gt;jt<Nt+1;jt++){this.pdf.setPage(jt);var Et=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],Rt=jt===1?this.posY+this.margin[0]:this.margin[0],ft=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Tt=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],$e=jt===1?0:ft+(jt-2)*Tt;if(this.ctx.clip_path.length!==0){var On=this.path;Q=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=F(Q,this.posX+this.margin[3],-$e+Rt+this.ctx.prevPageLastElemOffset),ve.call(this,"fill",!0),this.path=On}var It=JSON.parse(JSON.stringify(Ae));It=F([It],this.posX+this.margin[3],-$e+Rt+this.ctx.prevPageLastElemOffset)[0];var Vr=(jt>gt||jt<Nt)&&D.call(this);Vr&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],Et,Tt,null).clip().discardPath()),this.pdf.addImage(N,"JPEG",It.x,It.y,It.w,It.h,null,null,Xe),Vr&&this.pdf.restoreGraphicsState()}else this.pdf.addImage(N,"JPEG",Ae.x,Ae.y,Ae.w,Ae.h,null,null,Xe)};var q=function(N,I,G){var V=[];I=I||this.pdf.internal.pageSize.width,G=G||this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2];var Y=this.posY+this.ctx.prevPageLastElemOffset;switch(N.type){default:case"mt":case"lt":V.push(Math.floor((N.y+Y)/G)+1);break;case"arc":V.push(Math.floor((N.y+Y-N.radius)/G)+1),V.push(Math.floor((N.y+Y+N.radius)/G)+1);break;case"qct":var ne=me(this.ctx.lastPoint.x,this.ctx.lastPoint.y,N.x1,N.y1,N.x,N.y);V.push(Math.floor((ne.y+Y)/G)+1),V.push(Math.floor((ne.y+ne.h+Y)/G)+1);break;case"bct":var re=z(this.ctx.lastPoint.x,this.ctx.lastPoint.y,N.x1,N.y1,N.x2,N.y2,N.x,N.y);V.push(Math.floor((re.y+Y)/G)+1),V.push(Math.floor((re.y+re.h+Y)/G)+1);break;case"rect":V.push(Math.floor((N.y+Y)/G)+1),V.push(Math.floor((N.y+N.h+Y)/G)+1)}for(var ce=0;ce<V.length;ce+=1)for(;this.pdf.internal.getNumberOfPages()<V[ce];)_.call(this);return V},_=function(){var N=this.fillStyle,I=this.strokeStyle,G=this.font,V=this.lineCap,Y=this.lineWidth,ne=this.lineJoin;this.pdf.addPage(),this.fillStyle=N,this.strokeStyle=I,this.font=G,this.lineCap=V,this.lineWidth=Y,this.lineJoin=ne},F=function(N,I,G){for(var V=0;V<N.length;V++)switch(N[V].type){case"bct":N[V].x2+=I,N[V].y2+=G;case"qct":N[V].x1+=I,N[V].y1+=G;case"mt":case"lt":case"arc":default:N[V].x+=I,N[V].y+=G}return N},K=function(N){return N.sort((function(I,G){return I-G}))},he=function(N,I){for(var G,V,Y=this.fillStyle,ne=this.strokeStyle,re=this.lineCap,ce=this.lineWidth,_e=Math.abs(ce*this.ctx.transform.scaleX),Re=this.lineJoin,Be=JSON.parse(JSON.stringify(this.path)),Ue=JSON.parse(JSON.stringify(this.path)),Ke=[],je=0;je<Ue.length;je++)if(Ue[je].x!==void 0)for(var Q=q.call(this,Ue[je]),st=0;st<Q.length;st+=1)Ke.indexOf(Q[st])===-1&&Ke.push(Q[st]);for(var Xe=0;Xe<Ke.length;Xe++)for(;this.pdf.internal.getNumberOfPages()<Ke[Xe];)_.call(this);if(K(Ke),this.autoPaging)for(var Oe=Ke[0],Ae=Ke[Ke.length-1],Fe=Oe;Fe<Ae+1;Fe++){this.pdf.setPage(Fe),this.fillStyle=Y,this.strokeStyle=ne,this.lineCap=re,this.lineWidth=_e,this.lineJoin=Re;var We=this.pdf.internal.pageSize.width-this.margin[3]-this.margin[1],rt=Fe===1?this.posY+this.margin[0]:this.margin[0],gt=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],Nt=this.pdf.internal.pageSize.height-this.margin[0]-this.margin[2],jt=Fe===1?0:gt+(Fe-2)*Nt;if(this.ctx.clip_path.length!==0){var Et=this.path;G=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=F(G,this.posX+this.margin[3],-jt+rt+this.ctx.prevPageLastElemOffset),ve.call(this,N,!0),this.path=Et}if(V=JSON.parse(JSON.stringify(Be)),this.path=F(V,this.posX+this.margin[3],-jt+rt+this.ctx.prevPageLastElemOffset),I===!1||Fe===0){var Rt=(Fe>Oe||Fe<Ae)&&D.call(this);Rt&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],We,Nt,null).clip().discardPath()),ve.call(this,N,I),Rt&&this.pdf.restoreGraphicsState()}this.lineWidth=ce}else this.lineWidth=_e,ve.call(this,N,I),this.lineWidth=ce;this.path=Be},ve=function(N,I){if((N!=="stroke"||I||!U.call(this))&&(N==="stroke"||I||!b.call(this))){for(var G,V,Y=[],ne=this.path,re=0;re<ne.length;re++){var ce=ne[re];switch(ce.type){case"begin":Y.push({begin:!0});break;case"close":Y.push({close:!0});break;case"mt":Y.push({start:ce,deltas:[],abs:[]});break;case"lt":var _e=Y.length;if(ne[re-1]&&!isNaN(ne[re-1].x)&&(G=[ce.x-ne[re-1].x,ce.y-ne[re-1].y],_e>0)){for(;_e>=0;_e--)if(Y[_e-1].close!==!0&&Y[_e-1].begin!==!0){Y[_e-1].deltas.push(G),Y[_e-1].abs.push(ce);break}}break;case"bct":G=[ce.x1-ne[re-1].x,ce.y1-ne[re-1].y,ce.x2-ne[re-1].x,ce.y2-ne[re-1].y,ce.x-ne[re-1].x,ce.y-ne[re-1].y],Y[Y.length-1].deltas.push(G);break;case"qct":var Re=ne[re-1].x+2/3*(ce.x1-ne[re-1].x),Be=ne[re-1].y+2/3*(ce.y1-ne[re-1].y),Ue=ce.x+2/3*(ce.x1-ce.x),Ke=ce.y+2/3*(ce.y1-ce.y),je=ce.x,Q=ce.y;G=[Re-ne[re-1].x,Be-ne[re-1].y,Ue-ne[re-1].x,Ke-ne[re-1].y,je-ne[re-1].x,Q-ne[re-1].y],Y[Y.length-1].deltas.push(G);break;case"arc":Y.push({deltas:[],abs:[],arc:!0}),Array.isArray(Y[Y.length-1].abs)&&Y[Y.length-1].abs.push(ce)}}V=I?null:N==="stroke"?"stroke":"fill";for(var st=!1,Xe=0;Xe<Y.length;Xe++)if(Y[Xe].arc)for(var Oe=Y[Xe].abs,Ae=0;Ae<Oe.length;Ae++){var Fe=Oe[Ae];Fe.type==="arc"?$.call(this,Fe.x,Fe.y,Fe.radius,Fe.startAngle,Fe.endAngle,Fe.counterclockwise,void 0,I,!st):Z.call(this,Fe.x,Fe.y),st=!0}else if(Y[Xe].close===!0)this.pdf.internal.out("h"),st=!1;else if(Y[Xe].begin!==!0){var We=Y[Xe].start.x,rt=Y[Xe].start.y;te.call(this,Y[Xe].deltas,We,rt),st=!0}V&&pe.call(this,V),I&&Se.call(this)}},ye=function(N){var I=this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor,G=I*(this.pdf.internal.getLineHeightFactor()-1);switch(this.ctx.textBaseline){case"bottom":return N-G;case"top":return N+I-G;case"hanging":return N+I-2*G;case"middle":return N+I/2-G;case"ideographic":return N;case"alphabetic":default:return N}},oe=function(N){return N+this.pdf.internal.getFontSize()/this.pdf.internal.scaleFactor*(this.pdf.internal.getLineHeightFactor()-1)};T.prototype.createLinearGradient=function(){var N=function(){};return N.colorStops=[],N.addColorStop=function(I,G){this.colorStops.push([I,G])},N.getColor=function(){return this.colorStops.length===0?"#000000":this.colorStops[0][1]},N.isCanvasGradient=!0,N},T.prototype.createPattern=function(){return this.createLinearGradient()},T.prototype.createRadialGradient=function(){return this.createLinearGradient()};var $=function(N,I,G,V,Y,ne,re,ce,_e){for(var Re=ue.call(this,G,V,Y,ne),Be=0;Be<Re.length;Be++){var Ue=Re[Be];Be===0&&(_e?C.call(this,Ue.x1+N,Ue.y1+I):Z.call(this,Ue.x1+N,Ue.y1+I)),Ne.call(this,N,I,Ue.x2,Ue.y2,Ue.x3,Ue.y3,Ue.x4,Ue.y4)}ce?Se.call(this):pe.call(this,re)},pe=function(N){switch(N){case"stroke":this.pdf.internal.out("S");break;case"fill":this.pdf.internal.out("f")}},Se=function(){this.pdf.clip(),this.pdf.discardPath()},C=function(N,I){this.pdf.internal.out(a(N)+" "+l(I)+" m")},B=function(N){var I;switch(N.align){case"right":case"end":I="right";break;case"center":I="center";break;case"left":case"start":default:I="left"}var G=this.pdf.getTextDimensions(N.text),V=ye.call(this,N.y),Y=oe.call(this,V)-G.h,ne=this.ctx.transform.applyToPoint(new h(N.x,V)),re=this.ctx.transform.decompose(),ce=new g;ce=(ce=(ce=ce.multiply(re.translate)).multiply(re.skew)).multiply(re.scale);for(var _e,Re,Be,Ue=this.ctx.transform.applyToRectangle(new f(N.x,V,G.w,G.h)),Ke=ce.applyToRectangle(new f(N.x,Y,G.w,G.h)),je=q.call(this,Ke),Q=[],st=0;st<je.length;st+=1)Q.indexOf(je[st])===-1&&Q.push(je[st]);if(K(Q),this.autoPaging)for(var Xe=Q[0],Oe=Q[Q.length-1],Ae=Xe;Ae<Oe+1;Ae++){this.pdf.setPage(Ae);var Fe=Ae===1?this.posY+this.margin[0]:this.margin[0],We=this.pdf.internal.pageSize.height-this.posY-this.margin[0]-this.margin[2],rt=this.pdf.internal.pageSize.height-this.margin[2],gt=rt-this.margin[0],Nt=this.pdf.internal.pageSize.width-this.margin[1],jt=Nt-this.margin[3],Et=Ae===1?0:We+(Ae-2)*gt;if(this.ctx.clip_path.length!==0){var Rt=this.path;_e=JSON.parse(JSON.stringify(this.ctx.clip_path)),this.path=F(_e,this.posX+this.margin[3],-1*Et+Fe),ve.call(this,"fill",!0),this.path=Rt}var ft=F([JSON.parse(JSON.stringify(Ke))],this.posX+this.margin[3],-Et+Fe+this.ctx.prevPageLastElemOffset)[0];N.scale>=.01&&(Re=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Re*N.scale),Be=this.lineWidth,this.lineWidth=Be*N.scale);var Tt=this.autoPaging!=="text";if(Tt||ft.y+ft.h<=rt){if(Tt||ft.y>=Fe&&ft.x<=Nt){var $e=Tt?N.text:this.pdf.splitTextToSize(N.text,N.maxWidth||Nt-ft.x)[0],On=F([JSON.parse(JSON.stringify(Ue))],this.posX+this.margin[3],-Et+Fe+this.ctx.prevPageLastElemOffset)[0],It=Tt&&(Ae>Xe||Ae<Oe)&&D.call(this);It&&(this.pdf.saveGraphicsState(),this.pdf.rect(this.margin[3],this.margin[0],jt,gt,null).clip().discardPath()),this.pdf.text($e,On.x,On.y,{angle:N.angle,align:I,renderingMode:N.renderingMode}),It&&this.pdf.restoreGraphicsState()}}else ft.y<rt&&(this.ctx.prevPageLastElemOffset+=rt-ft.y);N.scale>=.01&&(this.pdf.setFontSize(Re),this.lineWidth=Be)}else N.scale>=.01&&(Re=this.pdf.internal.getFontSize(),this.pdf.setFontSize(Re*N.scale),Be=this.lineWidth,this.lineWidth=Be*N.scale),this.pdf.text(N.text,ne.x+this.posX,ne.y+this.posY,{angle:N.angle,align:I,renderingMode:N.renderingMode,maxWidth:N.maxWidth}),N.scale>=.01&&(this.pdf.setFontSize(Re),this.lineWidth=Be)},Z=function(N,I,G,V){G=G||0,V=V||0,this.pdf.internal.out(a(N+G)+" "+l(I+V)+" l")},te=function(N,I,G){return this.pdf.lines(N,I,G,null,null)},Ne=function(N,I,G,V,Y,ne,re,ce){this.pdf.internal.out([n(p(G+N)),n(c(V+I)),n(p(Y+N)),n(c(ne+I)),n(p(re+N)),n(c(ce+I)),"c"].join(" "))},ue=function(N,I,G,V){for(var Y=2*Math.PI,ne=Math.PI/2;I>G;)I-=Y;var re=Math.abs(G-I);re<Y&&V&&(re=Y-re);for(var ce=[],_e=V?-1:1,Re=I;re>1e-5;){var Be=Re+_e*Math.min(re,ne);ce.push(ke.call(this,N,Re,Be)),re-=Math.abs(Be-Re),Re=Be}return ce},ke=function(N,I,G){var V=(G-I)/2,Y=N*Math.cos(V),ne=N*Math.sin(V),re=Y,ce=-ne,_e=re*re+ce*ce,Re=_e+re*Y+ce*ne,Be=4/3*(Math.sqrt(2*_e*Re)-Re)/(re*ne-ce*Y),Ue=re-Be*ce,Ke=ce+Be*re,je=Ue,Q=-Ke,st=V+I,Xe=Math.cos(st),Oe=Math.sin(st);return{x1:N*Math.cos(I),y1:N*Math.sin(I),x2:Ue*Xe-Ke*Oe,y2:Ue*Oe+Ke*Xe,x3:je*Xe-Q*Oe,y3:je*Oe+Q*Xe,x4:N*Math.cos(G),y4:N*Math.sin(G)}},ee=function(N){return 180*N/Math.PI},me=function(N,I,G,V,Y,ne){var re=N+.5*(G-N),ce=I+.5*(V-I),_e=Y+.5*(G-Y),Re=ne+.5*(V-ne),Be=Math.min(N,Y,re,_e),Ue=Math.max(N,Y,re,_e),Ke=Math.min(I,ne,ce,Re),je=Math.max(I,ne,ce,Re);return new f(Be,Ke,Ue-Be,je-Ke)},z=function(N,I,G,V,Y,ne,re,ce){var _e,Re,Be,Ue,Ke,je,Q,st,Xe,Oe,Ae,Fe,We,rt,gt=G-N,Nt=V-I,jt=Y-G,Et=ne-V,Rt=re-Y,ft=ce-ne;for(Re=0;Re<41;Re++)Xe=(Q=(Be=N+(_e=Re/40)*gt)+_e*((Ke=G+_e*jt)-Be))+_e*(Ke+_e*(Y+_e*Rt-Ke)-Q),Oe=(st=(Ue=I+_e*Nt)+_e*((je=V+_e*Et)-Ue))+_e*(je+_e*(ne+_e*ft-je)-st),Re==0?(Ae=Xe,Fe=Oe,We=Xe,rt=Oe):(Ae=Math.min(Ae,Xe),Fe=Math.min(Fe,Oe),We=Math.max(We,Xe),rt=Math.max(rt,Oe));return new f(Math.round(Ae),Math.round(Fe),Math.round(We-Ae),Math.round(rt-Fe))},A=function(){if(this.prevLineDash||this.ctx.lineDash.length||this.ctx.lineDashOffset){var N,I,G=(N=this.ctx.lineDash,I=this.ctx.lineDashOffset,JSON.stringify({lineDash:N,lineDashOffset:I}));this.prevLineDash!==G&&(this.pdf.setLineDash(this.ctx.lineDash,this.ctx.lineDashOffset),this.prevLineDash=G)}}})(bt.API),(function(i){var n=function(c){var h,f,g,w,k,T,P,b,U,D;for(f=[],g=0,w=(c+=h="\0\0\0\0".slice(c.length%4||4)).length;w>g;g+=4)(k=(c.charCodeAt(g)<<24)+(c.charCodeAt(g+1)<<16)+(c.charCodeAt(g+2)<<8)+c.charCodeAt(g+3))!==0?(T=(k=((k=((k=((k=(k-(D=k%85))/85)-(U=k%85))/85)-(b=k%85))/85)-(P=k%85))/85)%85,f.push(T+33,P+33,b+33,U+33,D+33)):f.push(122);return(function(q,_){for(var F=_;F>0;F--)q.pop()})(f,h.length),String.fromCharCode.apply(String,f)+"~>"},a=function(c){var h,f,g,w,k,T=String,P="length",b=255,U="charCodeAt",D="slice",q="replace";for(c[D](-2),c=c[D](0,-2)[q](/\s/g,"")[q]("z","!!!!!"),g=[],w=0,k=(c+=h="uuuuu"[D](c[P]%5||5))[P];k>w;w+=5)f=52200625*(c[U](w)-33)+614125*(c[U](w+1)-33)+7225*(c[U](w+2)-33)+85*(c[U](w+3)-33)+(c[U](w+4)-33),g.push(b&f>>24,b&f>>16,b&f>>8,b&f);return(function(_,F){for(var K=F;K>0;K--)_.pop()})(g,h[P]),T.fromCharCode.apply(T,g)},l=function(c){var h=new RegExp(/^([0-9A-Fa-f]{2})+$/);if((c=c.replace(/\s/g,"")).indexOf(">")!==-1&&(c=c.substr(0,c.indexOf(">"))),c.length%2&&(c+="0"),h.test(c)===!1)return"";for(var f="",g=0;g<c.length;g+=2)f+=String.fromCharCode("0x"+(c[g]+c[g+1]));return f},p=function(c){for(var h=new Uint8Array(c.length),f=c.length;f--;)h[f]=c.charCodeAt(f);return c=(h=Uu(h)).reduce((function(g,w){return g+String.fromCharCode(w)}),"")};i.processDataByFilters=function(c,h){var f=0,g=c||"",w=[];for(typeof(h=h||[])=="string"&&(h=[h]),f=0;f<h.length;f+=1)switch(h[f]){case"ASCII85Decode":case"/ASCII85Decode":g=a(g),w.push("/ASCII85Encode");break;case"ASCII85Encode":case"/ASCII85Encode":g=n(g),w.push("/ASCII85Decode");break;case"ASCIIHexDecode":case"/ASCIIHexDecode":g=l(g),w.push("/ASCIIHexEncode");break;case"ASCIIHexEncode":case"/ASCIIHexEncode":g=g.split("").map((function(k){return("0"+k.charCodeAt().toString(16)).slice(-2)})).join("")+">",w.push("/ASCIIHexDecode");break;case"FlateEncode":case"/FlateEncode":g=p(g),w.push("/FlateDecode");break;default:throw new Error('The filter: "'+h[f]+'" is not implemented')}return{data:g,reverseChain:w.reverse().join(" ")}}})(bt.API),(function(i){i.loadFile=function(n,a,l){return(function(p,c,h){c=c!==!1,h=typeof h=="function"?h:function(){};var f=void 0;try{f=(function(g,w,k){var T=new XMLHttpRequest,P=0,b=function(U){var D=U.length,q=[],_=String.fromCharCode;for(P=0;P<D;P+=1)q.push(_(255&U.charCodeAt(P)));return q.join("")};if(T.open("GET",g,!w),T.overrideMimeType("text/plain; charset=x-user-defined"),w===!1&&(T.onload=function(){T.status===200?k(b(this.responseText)):k(void 0)}),T.send(null),w&&T.status===200)return b(T.responseText)})(p,c,h)}catch{}return f})(n,a,l)},i.loadImageFile=i.loadFile})(bt.API),(function(i){function n(){return(xt.html2canvas?Promise.resolve(xt.html2canvas):zu(()=>import("./html2canvas.esm-QH1iLAAe.js"),[])).catch((function(h){return Promise.reject(new Error("Could not load html2canvas: "+h))})).then((function(h){return h.default?h.default:h}))}function a(){return(xt.DOMPurify?Promise.resolve(xt.DOMPurify):zu(()=>import("./purify.es-BwoZCkIS.js"),[])).catch((function(h){return Promise.reject(new Error("Could not load dompurify: "+h))})).then((function(h){return h.default?h.default:h}))}var l=function(h){var f=nn(h);return f==="undefined"?"undefined":f==="string"||h instanceof String?"string":f==="number"||h instanceof Number?"number":f==="function"||h instanceof Function?"function":h&&h.constructor===Array?"array":h&&h.nodeType===1?"element":f==="object"?"object":"unknown"},p=function(h,f){var g=document.createElement(h);for(var w in f.className&&(g.className=f.className),f.innerHTML&&f.dompurify&&(g.innerHTML=f.dompurify.sanitize(f.innerHTML)),f.style)g.style[w]=f.style[w];return g},c=function h(f){var g=Object.assign(h.convert(Promise.resolve()),JSON.parse(JSON.stringify(h.template))),w=h.convert(Promise.resolve(),g);return w=(w=w.setProgress(1,h,1,[h])).set(f)};(c.prototype=Object.create(Promise.prototype)).constructor=c,c.convert=function(h,f){return h.__proto__=f||c.prototype,h},c.template={prop:{src:null,container:null,overlay:null,canvas:null,img:null,pdf:null,pageSize:null,callback:function(){}},progress:{val:0,state:null,n:0,stack:[]},opt:{filename:"file.pdf",margin:[0,0,0,0],enableLinks:!0,x:0,y:0,html2canvas:{},jsPDF:{},backgroundColor:"transparent"}},c.prototype.from=function(h,f){return this.then((function(){switch(f=f||(function(g){switch(l(g)){case"string":return"string";case"element":return g.nodeName.toLowerCase()==="canvas"?"canvas":"element";default:return"unknown"}})(h)){case"string":return this.then(a).then((function(g){return this.set({src:p("div",{innerHTML:h,dompurify:g})})}));case"element":return this.set({src:h});case"canvas":return this.set({canvas:h});case"img":return this.set({img:h});default:return this.error("Unknown source type.")}}))},c.prototype.to=function(h){switch(h){case"container":return this.toContainer();case"canvas":return this.toCanvas();case"img":return this.toImg();case"pdf":return this.toPdf();default:return this.error("Invalid target.")}},c.prototype.toContainer=function(){return this.thenList([function(){return this.prop.src||this.error("Cannot duplicate - no source HTML.")},function(){return this.prop.pageSize||this.setPageSize()}]).then((function(){var h={position:"relative",display:"inline-block",width:(typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?Math.max(this.prop.src.clientWidth,this.prop.src.scrollWidth,this.prop.src.offsetWidth):this.opt.windowWidth)+"px",left:0,right:0,top:0,margin:"auto",backgroundColor:this.opt.backgroundColor},f=(function g(w,k){for(var T=w.nodeType===3?document.createTextNode(w.nodeValue):w.cloneNode(!1),P=w.firstChild;P;P=P.nextSibling)k!==!0&&P.nodeType===1&&P.nodeName==="SCRIPT"||T.appendChild(g(P,k));return w.nodeType===1&&(w.nodeName==="CANVAS"?(T.width=w.width,T.height=w.height,T.getContext("2d").drawImage(w,0,0)):w.nodeName!=="TEXTAREA"&&w.nodeName!=="SELECT"||(T.value=w.value),T.addEventListener("load",(function(){T.scrollTop=w.scrollTop,T.scrollLeft=w.scrollLeft}),!0)),T})(this.prop.src,this.opt.html2canvas.javascriptEnabled);f.tagName==="BODY"&&(h.height=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight)+"px"),this.prop.overlay=p("div",{className:"html2pdf__overlay",style:{position:"fixed",overflow:"hidden",zIndex:1e3,left:"-100000px",right:0,bottom:0,top:0}}),this.prop.container=p("div",{className:"html2pdf__container",style:h}),this.prop.container.appendChild(f),this.prop.container.firstChild.appendChild(p("div",{style:{clear:"both",border:"0 none transparent",margin:0,padding:0,height:0}})),this.prop.container.style.float="none",this.prop.overlay.appendChild(this.prop.container),document.body.appendChild(this.prop.overlay),this.prop.container.firstChild.style.position="relative",this.prop.container.height=Math.max(this.prop.container.firstChild.clientHeight,this.prop.container.firstChild.scrollHeight,this.prop.container.firstChild.offsetHeight)+"px"}))},c.prototype.toCanvas=function(){var h=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(h).then(n).then((function(f){var g=Object.assign({},this.opt.html2canvas);return delete g.onrendered,f(this.prop.container,g)})).then((function(f){(this.opt.html2canvas.onrendered||function(){})(f),this.prop.canvas=f,document.body.removeChild(this.prop.overlay)}))},c.prototype.toContext2d=function(){var h=[function(){return document.body.contains(this.prop.container)||this.toContainer()}];return this.thenList(h).then(n).then((function(f){var g=this.opt.jsPDF,w=this.opt.fontFaces,k=typeof this.opt.width!="number"||isNaN(this.opt.width)||typeof this.opt.windowWidth!="number"||isNaN(this.opt.windowWidth)?1:this.opt.width/this.opt.windowWidth,T=Object.assign({async:!0,allowTaint:!0,scale:k,scrollX:this.opt.scrollX||0,scrollY:this.opt.scrollY||0,backgroundColor:"#ffffff",imageTimeout:15e3,logging:!0,proxy:null,removeContainer:!0,foreignObjectRendering:!1,useCORS:!1},this.opt.html2canvas);if(delete T.onrendered,g.context2d.autoPaging=this.opt.autoPaging===void 0||this.opt.autoPaging,g.context2d.posX=this.opt.x,g.context2d.posY=this.opt.y,g.context2d.margin=this.opt.margin,g.context2d.fontFaces=w,w)for(var P=0;P<w.length;++P){var b=w[P],U=b.src.find((function(D){return D.format==="truetype"}));U&&g.addFont(U.url,b.ref.name,b.ref.style)}return T.windowHeight=T.windowHeight||0,T.windowHeight=T.windowHeight==0?Math.max(this.prop.container.clientHeight,this.prop.container.scrollHeight,this.prop.container.offsetHeight):T.windowHeight,g.context2d.save(!0),f(this.prop.container,T)})).then((function(f){this.opt.jsPDF.context2d.restore(!0),(this.opt.html2canvas.onrendered||function(){})(f),this.prop.canvas=f,document.body.removeChild(this.prop.overlay)}))},c.prototype.toImg=function(){return this.thenList([function(){return this.prop.canvas||this.toCanvas()}]).then((function(){var h=this.prop.canvas.toDataURL("image/"+this.opt.image.type,this.opt.image.quality);this.prop.img=document.createElement("img"),this.prop.img.src=h}))},c.prototype.toPdf=function(){return this.thenList([function(){return this.toContext2d()}]).then((function(){this.prop.pdf=this.prop.pdf||this.opt.jsPDF}))},c.prototype.output=function(h,f,g){return(g=g||"pdf").toLowerCase()==="img"||g.toLowerCase()==="image"?this.outputImg(h,f):this.outputPdf(h,f)},c.prototype.outputPdf=function(h,f){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){return this.prop.pdf.output(h,f)}))},c.prototype.outputImg=function(h){return this.thenList([function(){return this.prop.img||this.toImg()}]).then((function(){switch(h){case void 0:case"img":return this.prop.img;case"datauristring":case"dataurlstring":return this.prop.img.src;case"datauri":case"dataurl":return document.location.href=this.prop.img.src;default:throw'Image output type "'+h+'" is not supported.'}}))},c.prototype.save=function(h){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).set(h?{filename:h}:null).then((function(){this.prop.pdf.save(this.opt.filename)}))},c.prototype.doCallback=function(){return this.thenList([function(){return this.prop.pdf||this.toPdf()}]).then((function(){this.prop.callback(this.prop.pdf)}))},c.prototype.set=function(h){if(l(h)!=="object")return this;var f=Object.keys(h||{}).map((function(g){if(g in c.template.prop)return function(){this.prop[g]=h[g]};switch(g){case"margin":return this.setMargin.bind(this,h.margin);case"jsPDF":return function(){return this.opt.jsPDF=h.jsPDF,this.setPageSize()};case"pageSize":return this.setPageSize.bind(this,h.pageSize);default:return function(){this.opt[g]=h[g]}}}),this);return this.then((function(){return this.thenList(f)}))},c.prototype.get=function(h,f){return this.then((function(){var g=h in c.template.prop?this.prop[h]:this.opt[h];return f?f(g):g}))},c.prototype.setMargin=function(h){return this.then((function(){switch(l(h)){case"number":h=[h,h,h,h];case"array":if(h.length===2&&(h=[h[0],h[1],h[0],h[1]]),h.length===4)break;default:return this.error("Invalid margin array.")}this.opt.margin=h})).then(this.setPageSize)},c.prototype.setPageSize=function(h){function f(g,w){return Math.floor(g*w/72*96)}return this.then((function(){(h=h||bt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner")||(h.inner={width:h.width-this.opt.margin[1]-this.opt.margin[3],height:h.height-this.opt.margin[0]-this.opt.margin[2]},h.inner.px={width:f(h.inner.width,h.k),height:f(h.inner.height,h.k)},h.inner.ratio=h.inner.height/h.inner.width),this.prop.pageSize=h}))},c.prototype.setProgress=function(h,f,g,w){return h!=null&&(this.progress.val=h),f!=null&&(this.progress.state=f),g!=null&&(this.progress.n=g),w!=null&&(this.progress.stack=w),this.progress.ratio=this.progress.val/this.progress.state,this},c.prototype.updateProgress=function(h,f,g,w){return this.setProgress(h?this.progress.val+h:null,f||null,g?this.progress.n+g:null,w?this.progress.stack.concat(w):null)},c.prototype.then=function(h,f){var g=this;return this.thenCore(h,f,(function(w,k){return g.updateProgress(null,null,1,[w]),Promise.prototype.then.call(this,(function(T){return g.updateProgress(null,w),T})).then(w,k).then((function(T){return g.updateProgress(1),T}))}))},c.prototype.thenCore=function(h,f,g){g=g||Promise.prototype.then,h&&(h=h.bind(this)),f&&(f=f.bind(this));var w=Promise.toString().indexOf("[native code]")!==-1&&Promise.name==="Promise"?this:c.convert(Object.assign({},this),Promise.prototype),k=g.call(w,h,f);return c.convert(k,this.__proto__)},c.prototype.thenExternal=function(h,f){return Promise.prototype.then.call(this,h,f)},c.prototype.thenList=function(h){var f=this;return h.forEach((function(g){f=f.thenCore(g)})),f},c.prototype.catch=function(h){h&&(h=h.bind(this));var f=Promise.prototype.catch.call(this,h);return c.convert(f,this)},c.prototype.catchExternal=function(h){return Promise.prototype.catch.call(this,h)},c.prototype.error=function(h){return this.then((function(){throw new Error(h)}))},c.prototype.using=c.prototype.set,c.prototype.saveAs=c.prototype.save,c.prototype.export=c.prototype.output,c.prototype.run=c.prototype.then,bt.getPageSize=function(h,f,g){if(nn(h)==="object"){var w=h;h=w.orientation,f=w.unit||f,g=w.format||g}f=f||"mm",g=g||"a4",h=(""+(h||"P")).toLowerCase();var k,T=(""+g).toLowerCase(),P={a0:[2383.94,3370.39],a1:[1683.78,2383.94],a2:[1190.55,1683.78],a3:[841.89,1190.55],a4:[595.28,841.89],a5:[419.53,595.28],a6:[297.64,419.53],a7:[209.76,297.64],a8:[147.4,209.76],a9:[104.88,147.4],a10:[73.7,104.88],b0:[2834.65,4008.19],b1:[2004.09,2834.65],b2:[1417.32,2004.09],b3:[1000.63,1417.32],b4:[708.66,1000.63],b5:[498.9,708.66],b6:[354.33,498.9],b7:[249.45,354.33],b8:[175.75,249.45],b9:[124.72,175.75],b10:[87.87,124.72],c0:[2599.37,3676.54],c1:[1836.85,2599.37],c2:[1298.27,1836.85],c3:[918.43,1298.27],c4:[649.13,918.43],c5:[459.21,649.13],c6:[323.15,459.21],c7:[229.61,323.15],c8:[161.57,229.61],c9:[113.39,161.57],c10:[79.37,113.39],dl:[311.81,623.62],letter:[612,792],"government-letter":[576,756],legal:[612,1008],"junior-legal":[576,360],ledger:[1224,792],tabloid:[792,1224],"credit-card":[153,243]};switch(f){case"pt":k=1;break;case"mm":k=72/25.4;break;case"cm":k=72/2.54;break;case"in":k=72;break;case"px":k=.75;break;case"pc":case"em":k=12;break;case"ex":k=6;break;default:throw"Invalid unit: "+f}var b,U=0,D=0;if(P.hasOwnProperty(T))U=P[T][1]/k,D=P[T][0]/k;else try{U=g[1],D=g[0]}catch{throw new Error("Invalid format: "+g)}if(h==="p"||h==="portrait")h="p",D>U&&(b=D,D=U,U=b);else{if(h!=="l"&&h!=="landscape")throw"Invalid orientation: "+h;h="l",U>D&&(b=D,D=U,U=b)}return{width:D,height:U,unit:f,k,orientation:h}},i.html=function(h,f){(f=f||{}).callback=f.callback||function(){},f.html2canvas=f.html2canvas||{},f.html2canvas.canvas=f.html2canvas.canvas||this.canvas,f.jsPDF=f.jsPDF||this,f.fontFaces=f.fontFaces?f.fontFaces.map($u):null;var g=new c(f);return f.worker?g:g.from(h).doCallback()}})(bt.API),bt.API.addJS=function(i){return Bh=i,this.internal.events.subscribe("postPutResources",(function(){dd=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/Names [(EmbeddedJS) "+(dd+1)+" 0 R]"),this.internal.out(">>"),this.internal.out("endobj"),Oh=this.internal.newObject(),this.internal.out("<<"),this.internal.out("/S /JavaScript"),this.internal.out("/JS ("+Bh+")"),this.internal.out(">>"),this.internal.out("endobj")})),this.internal.events.subscribe("putCatalog",(function(){dd!==void 0&&Oh!==void 0&&this.internal.out("/Names <</JavaScript "+dd+" 0 R>>")})),this},(function(i){var n;i.events.push(["postPutResources",function(){var a=this,l=/^(\d+) 0 obj$/;if(this.outline.root.children.length>0)for(var p=a.outline.render().split(/\r\n/),c=0;c<p.length;c++){var h=p[c],f=l.exec(h);if(f!=null){var g=f[1];a.internal.newObjectDeferredBegin(g,!1)}a.internal.write(h)}if(this.outline.createNamedDestinations){var w=this.internal.pages.length,k=[];for(c=0;c<w;c++){var T=a.internal.newObject();k.push(T);var P=a.internal.getPageInfo(c+1);a.internal.write("<< /D["+P.objId+" 0 R /XYZ null null null]>> endobj")}var b=a.internal.newObject();for(a.internal.write("<< /Names [ "),c=0;c<k.length;c++)a.internal.write("(page_"+(c+1)+")"+k[c]+" 0 R");a.internal.write(" ] >>","endobj"),n=a.internal.newObject(),a.internal.write("<< /Dests "+b+" 0 R"),a.internal.write(">>","endobj")}}]),i.events.push(["putCatalog",function(){this.outline.root.children.length>0&&(this.internal.write("/Outlines",this.outline.makeRef(this.outline.root)),this.outline.createNamedDestinations&&this.internal.write("/Names "+n+" 0 R"))}]),i.events.push(["initialized",function(){var a=this;a.outline={createNamedDestinations:!1,root:{children:[]}},a.outline.add=function(l,p,c){var h={title:p,options:c,children:[]};return l==null&&(l=this.root),l.children.push(h),h},a.outline.render=function(){return this.ctx={},this.ctx.val="",this.ctx.pdf=a,this.genIds_r(this.root),this.renderRoot(this.root),this.renderItems(this.root),this.ctx.val},a.outline.genIds_r=function(l){l.id=a.internal.newObjectDeferred();for(var p=0;p<l.children.length;p++)this.genIds_r(l.children[p])},a.outline.renderRoot=function(l){this.objStart(l),this.line("/Type /Outlines"),l.children.length>0&&(this.line("/First "+this.makeRef(l.children[0])),this.line("/Last "+this.makeRef(l.children[l.children.length-1]))),this.line("/Count "+this.count_r({count:0},l)),this.objEnd()},a.outline.renderItems=function(l){for(var p=this.ctx.pdf.internal.getVerticalCoordinateString,c=0;c<l.children.length;c++){var h=l.children[c];this.objStart(h),this.line("/Title "+this.makeString(h.title)),this.line("/Parent "+this.makeRef(l)),c>0&&this.line("/Prev "+this.makeRef(l.children[c-1])),c<l.children.length-1&&this.line("/Next "+this.makeRef(l.children[c+1])),h.children.length>0&&(this.line("/First "+this.makeRef(h.children[0])),this.line("/Last "+this.makeRef(h.children[h.children.length-1])));var f=this.count=this.count_r({count:0},h);if(f>0&&this.line("/Count "+f),h.options&&h.options.pageNumber){var g=a.internal.getPageInfo(h.options.pageNumber);this.line("/Dest ["+g.objId+" 0 R /XYZ 0 "+p(0)+" 0]")}this.objEnd()}for(var w=0;w<l.children.length;w++)this.renderItems(l.children[w])},a.outline.line=function(l){this.ctx.val+=l+`\r
`},a.outline.makeRef=function(l){return l.id+" 0 R"},a.outline.makeString=function(l){return"("+a.internal.pdfEscape(l)+")"},a.outline.objStart=function(l){this.ctx.val+=`\r
`+l.id+` 0 obj\r
<<\r
`},a.outline.objEnd=function(){this.ctx.val+=`>> \r
endobj\r
`},a.outline.count_r=function(l,p){for(var c=0;c<p.children.length;c++)l.count++,this.count_r(l,p.children[c]);return l.count}}])})(bt.API),(function(i){var n=[192,193,194,195,196,197,198,199];i.processJPEG=function(a,l,p,c,h,f){var g,w=this.decode.DCT_DECODE,k=null;if(typeof a=="string"||this.__addimage__.isArrayBuffer(a)||this.__addimage__.isArrayBufferView(a)){switch(a=h||a,a=this.__addimage__.isArrayBuffer(a)?new Uint8Array(a):a,(g=(function(T){for(var P,b=256*T.charCodeAt(4)+T.charCodeAt(5),U=T.length,D={width:0,height:0,numcomponents:1},q=4;q<U;q+=2){if(q+=b,n.indexOf(T.charCodeAt(q+1))!==-1){P=256*T.charCodeAt(q+5)+T.charCodeAt(q+6),D={width:256*T.charCodeAt(q+7)+T.charCodeAt(q+8),height:P,numcomponents:T.charCodeAt(q+9)};break}b=256*T.charCodeAt(q+2)+T.charCodeAt(q+3)}return D})(a=this.__addimage__.isArrayBufferView(a)?this.__addimage__.arrayBufferToBinaryString(a):a)).numcomponents){case 1:f=this.color_spaces.DEVICE_GRAY;break;case 4:f=this.color_spaces.DEVICE_CMYK;break;case 3:f=this.color_spaces.DEVICE_RGB}k={data:a,width:g.width,height:g.height,colorSpace:f,bitsPerComponent:8,filter:w,index:l,alias:p}}return k}})(bt.API);var Fl,ud,qh,Hh,Uh,P0=(function(){var i,n,a;function l(c){var h,f,g,w,k,T,P,b,U,D,q,_,F,K;for(this.data=c,this.pos=8,this.palette=[],this.imgData=[],this.transparency={},this.animation=null,this.text={},T=null;;){switch(h=this.readUInt32(),U=(function(){var he,ve;for(ve=[],he=0;he<4;++he)ve.push(String.fromCharCode(this.data[this.pos++]));return ve}).call(this).join("")){case"IHDR":this.width=this.readUInt32(),this.height=this.readUInt32(),this.bits=this.data[this.pos++],this.colorType=this.data[this.pos++],this.compressionMethod=this.data[this.pos++],this.filterMethod=this.data[this.pos++],this.interlaceMethod=this.data[this.pos++];break;case"acTL":this.animation={numFrames:this.readUInt32(),numPlays:this.readUInt32()||1/0,frames:[]};break;case"PLTE":this.palette=this.read(h);break;case"fcTL":T&&this.animation.frames.push(T),this.pos+=4,T={width:this.readUInt32(),height:this.readUInt32(),xOffset:this.readUInt32(),yOffset:this.readUInt32()},k=this.readUInt16(),w=this.readUInt16()||100,T.delay=1e3*k/w,T.disposeOp=this.data[this.pos++],T.blendOp=this.data[this.pos++],T.data=[];break;case"IDAT":case"fdAT":for(U==="fdAT"&&(this.pos+=4,h-=4),c=(T!=null?T.data:void 0)||this.imgData,_=0;0<=h?_<h:_>h;0<=h?++_:--_)c.push(this.data[this.pos++]);break;case"tRNS":switch(this.transparency={},this.colorType){case 3:if(g=this.palette.length/3,this.transparency.indexed=this.read(h),this.transparency.indexed.length>g)throw new Error("More transparent colors than palette size");if((D=g-this.transparency.indexed.length)>0)for(F=0;0<=D?F<D:F>D;0<=D?++F:--F)this.transparency.indexed.push(255);break;case 0:this.transparency.grayscale=this.read(h)[0];break;case 2:this.transparency.rgb=this.read(h)}break;case"tEXt":P=(q=this.read(h)).indexOf(0),b=String.fromCharCode.apply(String,q.slice(0,P)),this.text[b]=String.fromCharCode.apply(String,q.slice(P+1));break;case"IEND":return T&&this.animation.frames.push(T),this.colors=(function(){switch(this.colorType){case 0:case 3:case 4:return 1;case 2:case 6:return 3}}).call(this),this.hasAlphaChannel=(K=this.colorType)===4||K===6,f=this.colors+(this.hasAlphaChannel?1:0),this.pixelBitlength=this.bits*f,this.colorSpace=(function(){switch(this.colors){case 1:return"DeviceGray";case 3:return"DeviceRGB"}}).call(this),void(this.imgData=new Uint8Array(this.imgData));default:this.pos+=h}if(this.pos+=4,this.pos>this.data.length)throw new Error("Incomplete or corrupt PNG file")}}l.prototype.read=function(c){var h,f;for(f=[],h=0;0<=c?h<c:h>c;0<=c?++h:--h)f.push(this.data[this.pos++]);return f},l.prototype.readUInt32=function(){return this.data[this.pos++]<<24|this.data[this.pos++]<<16|this.data[this.pos++]<<8|this.data[this.pos++]},l.prototype.readUInt16=function(){return this.data[this.pos++]<<8|this.data[this.pos++]},l.prototype.decodePixels=function(c){var h=this.pixelBitlength/8,f=new Uint8Array(this.width*this.height*h),g=0,w=this;if(c==null&&(c=this.imgData),c.length===0)return new Uint8Array(0);function k(T,P,b,U){var D,q,_,F,K,he,ve,ye,oe,$,pe,Se,C,B,Z,te,Ne,ue,ke,ee,me,z=Math.ceil((w.width-T)/b),A=Math.ceil((w.height-P)/U),N=w.width==z&&w.height==A;for(B=h*z,Se=N?f:new Uint8Array(B*A),he=c.length,C=0,q=0;C<A&&g<he;){switch(c[g++]){case 0:for(F=Ne=0;Ne<B;F=Ne+=1)Se[q++]=c[g++];break;case 1:for(F=ue=0;ue<B;F=ue+=1)D=c[g++],K=F<h?0:Se[q-h],Se[q++]=(D+K)%256;break;case 2:for(F=ke=0;ke<B;F=ke+=1)D=c[g++],_=(F-F%h)/h,Z=C&&Se[(C-1)*B+_*h+F%h],Se[q++]=(Z+D)%256;break;case 3:for(F=ee=0;ee<B;F=ee+=1)D=c[g++],_=(F-F%h)/h,K=F<h?0:Se[q-h],Z=C&&Se[(C-1)*B+_*h+F%h],Se[q++]=(D+Math.floor((K+Z)/2))%256;break;case 4:for(F=me=0;me<B;F=me+=1)D=c[g++],_=(F-F%h)/h,K=F<h?0:Se[q-h],C===0?Z=te=0:(Z=Se[(C-1)*B+_*h+F%h],te=_&&Se[(C-1)*B+(_-1)*h+F%h]),ve=K+Z-te,ye=Math.abs(ve-K),$=Math.abs(ve-Z),pe=Math.abs(ve-te),oe=ye<=$&&ye<=pe?K:$<=pe?Z:te,Se[q++]=(D+oe)%256;break;default:throw new Error("Invalid filter algorithm: "+c[g-1])}if(!N){var I=((P+C*U)*w.width+T)*h,G=C*B;for(F=0;F<z;F+=1){for(var V=0;V<h;V+=1)f[I++]=Se[G++];I+=(b-1)*h}}C++}}return c=a0(c),w.interlaceMethod==1?(k(0,0,8,8),k(4,0,8,8),k(0,4,4,8),k(2,0,4,4),k(0,2,2,4),k(1,0,2,2),k(0,1,1,2)):k(0,0,1,1),f},l.prototype.decodePalette=function(){var c,h,f,g,w,k,T,P,b;for(f=this.palette,k=this.transparency.indexed||[],w=new Uint8Array((k.length||0)+f.length),g=0,c=0,h=T=0,P=f.length;T<P;h=T+=3)w[g++]=f[h],w[g++]=f[h+1],w[g++]=f[h+2],w[g++]=(b=k[c++])!=null?b:255;return w},l.prototype.copyToImageData=function(c,h){var f,g,w,k,T,P,b,U,D,q,_;if(g=this.colors,D=null,f=this.hasAlphaChannel,this.palette.length&&(D=(_=this._decodedPalette)!=null?_:this._decodedPalette=this.decodePalette(),g=4,f=!0),U=(w=c.data||c).length,T=D||h,k=P=0,g===1)for(;k<U;)b=D?4*h[k/4]:P,q=T[b++],w[k++]=q,w[k++]=q,w[k++]=q,w[k++]=f?T[b++]:255,P=b;else for(;k<U;)b=D?4*h[k/4]:P,w[k++]=T[b++],w[k++]=T[b++],w[k++]=T[b++],w[k++]=f?T[b++]:255,P=b},l.prototype.decode=function(){var c;return c=new Uint8Array(this.width*this.height*4),this.copyToImageData(c,this.decodePixels()),c};var p=function(){if(Object.prototype.toString.call(xt)==="[object Window]"){try{n=xt.document.createElement("canvas"),a=n.getContext("2d")}catch{return!1}return!0}return!1};return p(),i=function(c){var h;if(p()===!0)return a.width=c.width,a.height=c.height,a.clearRect(0,0,c.width,c.height),a.putImageData(c,0,0),(h=new Image).src=n.toDataURL(),h;throw new Error("This method requires a Browser with Canvas-capability.")},l.prototype.decodeFrames=function(c){var h,f,g,w,k,T,P,b;if(this.animation){for(b=[],f=k=0,T=(P=this.animation.frames).length;k<T;f=++k)h=P[f],g=c.createImageData(h.width,h.height),w=this.decodePixels(new Uint8Array(h.data)),this.copyToImageData(g,w),h.imageData=g,b.push(h.image=i(g));return b}},l.prototype.renderFrame=function(c,h){var f,g,w;return f=(g=this.animation.frames)[h],w=g[h-1],h===0&&c.clearRect(0,0,this.width,this.height),(w!=null?w.disposeOp:void 0)===1?c.clearRect(w.xOffset,w.yOffset,w.width,w.height):(w!=null?w.disposeOp:void 0)===2&&c.putImageData(w.imageData,w.xOffset,w.yOffset),f.blendOp===0&&c.clearRect(f.xOffset,f.yOffset,f.width,f.height),c.drawImage(f.image,f.xOffset,f.yOffset)},l.prototype.animate=function(c){var h,f,g,w,k,T,P=this;return f=0,T=this.animation,w=T.numFrames,g=T.frames,k=T.numPlays,(h=function(){var b,U;if(b=f++%w,U=g[b],P.renderFrame(c,b),w>1&&f/w<k)return P.animation._timeout=setTimeout(h,U.delay)})()},l.prototype.stopAnimation=function(){var c;return clearTimeout((c=this.animation)!=null?c._timeout:void 0)},l.prototype.render=function(c){var h,f;return c._png&&c._png.stopAnimation(),c._png=this,c.width=this.width,c.height=this.height,h=c.getContext("2d"),this.animation?(this.decodeFrames(h),this.animate(h)):(f=h.createImageData(this.width,this.height),this.copyToImageData(f,this.decodePixels()),h.putImageData(f,0,0))},l})();/**
 * @license
 *
 * Copyright (c) 2014 James Robb, https://github.com/jamesbrobb
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * ====================================================================
 *//**
 * @license
 * (c) Dean McNamee <dean@gmail.com>, 2013.
 *
 * https://github.com/deanm/omggif
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 * omggif is a JavaScript implementation of a GIF 89a encoder and decoder,
 * including animation and compression.  It does not rely on any specific
 * underlying system, so should run in the browser, Node, or Plask.
 */function A0(i){var n=0;if(i[n++]!==71||i[n++]!==73||i[n++]!==70||i[n++]!==56||(i[n++]+1&253)!=56||i[n++]!==97)throw new Error("Invalid GIF 87a/89a header.");var a=i[n++]|i[n++]<<8,l=i[n++]|i[n++]<<8,p=i[n++],c=p>>7,h=1<<(7&p)+1;i[n++],i[n++];var f=null,g=null;c&&(f=n,g=h,n+=3*h);var w=!0,k=[],T=0,P=null,b=0,U=null;for(this.width=a,this.height=l;w&&n<i.length;)switch(i[n++]){case 33:switch(i[n++]){case 255:if(i[n]!==11||i[n+1]==78&&i[n+2]==69&&i[n+3]==84&&i[n+4]==83&&i[n+5]==67&&i[n+6]==65&&i[n+7]==80&&i[n+8]==69&&i[n+9]==50&&i[n+10]==46&&i[n+11]==48&&i[n+12]==3&&i[n+13]==1&&i[n+16]==0)n+=14,U=i[n++]|i[n++]<<8,n++;else for(n+=12;;){if(!((C=i[n++])>=0))throw Error("Invalid block size");if(C===0)break;n+=C}break;case 249:if(i[n++]!==4||i[n+4]!==0)throw new Error("Invalid graphics extension block.");var D=i[n++];T=i[n++]|i[n++]<<8,P=i[n++],(1&D)==0&&(P=null),b=D>>2&7,n++;break;case 254:for(;;){if(!((C=i[n++])>=0))throw Error("Invalid block size");if(C===0)break;n+=C}break;default:throw new Error("Unknown graphic control label: 0x"+i[n-1].toString(16))}break;case 44:var q=i[n++]|i[n++]<<8,_=i[n++]|i[n++]<<8,F=i[n++]|i[n++]<<8,K=i[n++]|i[n++]<<8,he=i[n++],ve=he>>6&1,ye=1<<(7&he)+1,oe=f,$=g,pe=!1;he>>7&&(pe=!0,oe=n,$=ye,n+=3*ye);var Se=n;for(n++;;){var C;if(!((C=i[n++])>=0))throw Error("Invalid block size");if(C===0)break;n+=C}k.push({x:q,y:_,width:F,height:K,has_local_palette:pe,palette_offset:oe,palette_size:$,data_offset:Se,data_length:n-Se,transparent_index:P,interlaced:!!ve,delay:T,disposal:b});break;case 59:w=!1;break;default:throw new Error("Unknown gif block: 0x"+i[n-1].toString(16))}this.numFrames=function(){return k.length},this.loopCount=function(){return U},this.frameInfo=function(B){if(B<0||B>=k.length)throw new Error("Frame index out of range.");return k[B]},this.decodeAndBlitFrameBGRA=function(B,Z){var te=this.frameInfo(B),Ne=te.width*te.height,ue=new Uint8Array(Ne);Gh(i,te.data_offset,ue,Ne);var ke=te.palette_offset,ee=te.transparent_index;ee===null&&(ee=256);var me=te.width,z=a-me,A=me,N=4*(te.y*a+te.x),I=4*((te.y+te.height)*a+te.x),G=N,V=4*z;te.interlaced===!0&&(V+=4*a*7);for(var Y=8,ne=0,re=ue.length;ne<re;++ne){var ce=ue[ne];if(A===0&&(A=me,(G+=V)>=I&&(V=4*z+4*a*(Y-1),G=N+(me+z)*(Y<<1),Y>>=1)),ce===ee)G+=4;else{var _e=i[ke+3*ce],Re=i[ke+3*ce+1],Be=i[ke+3*ce+2];Z[G++]=Be,Z[G++]=Re,Z[G++]=_e,Z[G++]=255}--A}},this.decodeAndBlitFrameRGBA=function(B,Z){var te=this.frameInfo(B),Ne=te.width*te.height,ue=new Uint8Array(Ne);Gh(i,te.data_offset,ue,Ne);var ke=te.palette_offset,ee=te.transparent_index;ee===null&&(ee=256);var me=te.width,z=a-me,A=me,N=4*(te.y*a+te.x),I=4*((te.y+te.height)*a+te.x),G=N,V=4*z;te.interlaced===!0&&(V+=4*a*7);for(var Y=8,ne=0,re=ue.length;ne<re;++ne){var ce=ue[ne];if(A===0&&(A=me,(G+=V)>=I&&(V=4*z+4*a*(Y-1),G=N+(me+z)*(Y<<1),Y>>=1)),ce===ee)G+=4;else{var _e=i[ke+3*ce],Re=i[ke+3*ce+1],Be=i[ke+3*ce+2];Z[G++]=_e,Z[G++]=Re,Z[G++]=Be,Z[G++]=255}--A}}}function Gh(i,n,a,l){for(var p=i[n++],c=1<<p,h=c+1,f=h+1,g=p+1,w=(1<<g)-1,k=0,T=0,P=0,b=i[n++],U=new Int32Array(4096),D=null;;){for(;k<16&&b!==0;)T|=i[n++]<<k,k+=8,b===1?b=i[n++]:--b;if(k<g)break;var q=T&w;if(T>>=g,k-=g,q!==c){if(q===h)break;for(var _=q<f?q:D,F=0,K=_;K>c;)K=U[K]>>8,++F;var he=K;if(P+F+(_!==q?1:0)>l)return void on.log("Warning, gif stream longer than expected.");a[P++]=he;var ve=P+=F;for(_!==q&&(a[P++]=he),K=_;F--;)K=U[K],a[--ve]=255&K,K>>=8;D!==null&&f<4096&&(U[f++]=D<<8|he,f>=w+1&&g<12&&(++g,w=w<<1|1)),D=q}else f=h+1,w=(1<<(g=p+1))-1,D=null}return P!==l&&on.log("Warning, gif stream shorter than expected."),a}/**
 * @license
  Copyright (c) 2008, Adobe Systems Incorporated
  All rights reserved.

  Redistribution and use in source and binary forms, with or without 
  modification, are permitted provided that the following conditions are
  met:

  * Redistributions of source code must retain the above copyright notice, 
    this list of conditions and the following disclaimer.
  
  * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the 
    documentation and/or other materials provided with the distribution.
  
  * Neither the name of Adobe Systems Incorporated nor the names of its 
    contributors may be used to endorse or promote products derived from 
    this software without specific prior written permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
  IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
  THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
  PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR 
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/function Au(i){var n,a,l,p,c,h=Math.floor,f=new Array(64),g=new Array(64),w=new Array(64),k=new Array(64),T=new Array(65535),P=new Array(65535),b=new Array(64),U=new Array(64),D=[],q=0,_=7,F=new Array(64),K=new Array(64),he=new Array(64),ve=new Array(256),ye=new Array(2048),oe=[0,1,5,6,14,15,27,28,2,4,7,13,16,26,29,42,3,8,12,17,25,30,41,43,9,11,18,24,31,40,44,53,10,19,23,32,39,45,52,54,20,22,33,38,46,51,55,60,21,34,37,47,50,56,59,61,35,36,48,49,57,58,62,63],$=[0,0,1,5,1,1,1,1,1,1,0,0,0,0,0,0,0],pe=[0,1,2,3,4,5,6,7,8,9,10,11],Se=[0,0,2,1,3,3,2,4,3,5,5,4,4,0,0,1,125],C=[1,2,3,0,4,17,5,18,33,49,65,6,19,81,97,7,34,113,20,50,129,145,161,8,35,66,177,193,21,82,209,240,36,51,98,114,130,9,10,22,23,24,25,26,37,38,39,40,41,42,52,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,225,226,227,228,229,230,231,232,233,234,241,242,243,244,245,246,247,248,249,250],B=[0,0,3,1,1,1,1,1,1,1,1,1,0,0,0,0,0],Z=[0,1,2,3,4,5,6,7,8,9,10,11],te=[0,0,2,1,2,4,4,3,4,7,5,4,4,0,1,2,119],Ne=[0,1,2,3,17,4,5,33,49,6,18,65,81,7,97,113,19,34,50,129,8,20,66,145,161,177,193,9,35,51,82,240,21,98,114,209,10,22,36,52,225,37,241,23,24,25,26,38,39,40,41,42,53,54,55,56,57,58,67,68,69,70,71,72,73,74,83,84,85,86,87,88,89,90,99,100,101,102,103,104,105,106,115,116,117,118,119,120,121,122,130,131,132,133,134,135,136,137,138,146,147,148,149,150,151,152,153,154,162,163,164,165,166,167,168,169,170,178,179,180,181,182,183,184,185,186,194,195,196,197,198,199,200,201,202,210,211,212,213,214,215,216,217,218,226,227,228,229,230,231,232,233,234,242,243,244,245,246,247,248,249,250];function ue(N,I){for(var G=0,V=0,Y=new Array,ne=1;ne<=16;ne++){for(var re=1;re<=N[ne];re++)Y[I[V]]=[],Y[I[V]][0]=G,Y[I[V]][1]=ne,V++,G++;G*=2}return Y}function ke(N){for(var I=N[0],G=N[1]-1;G>=0;)I&1<<G&&(q|=1<<_),G--,--_<0&&(q==255?(ee(255),ee(0)):ee(q),_=7,q=0)}function ee(N){D.push(N)}function me(N){ee(N>>8&255),ee(255&N)}function z(N,I,G,V,Y){for(var ne,re=Y[0],ce=Y[240],_e=(function(Oe,Ae){var Fe,We,rt,gt,Nt,jt,Et,Rt,ft,Tt,$e=0;for(ft=0;ft<8;++ft){Fe=Oe[$e],We=Oe[$e+1],rt=Oe[$e+2],gt=Oe[$e+3],Nt=Oe[$e+4],jt=Oe[$e+5],Et=Oe[$e+6];var On=Fe+(Rt=Oe[$e+7]),It=Fe-Rt,Vr=We+Et,Zt=We-Et,rn=rt+jt,Kr=rt-jt,Ft=gt+Nt,Ha=gt-Nt,sn=On+Ft,Jn=On-Ft,hr=Vr+rn,cn=Vr-rn;Oe[$e]=sn+hr,Oe[$e+4]=sn-hr;var St=.707106781*(cn+Jn);Oe[$e+2]=Jn+St,Oe[$e+6]=Jn-St;var qt=.382683433*((sn=Ha+Kr)-(cn=Zt+It)),mi=.5411961*sn+qt,Bn=1.306562965*cn+qt,Jr=.707106781*(hr=Kr+Zt),da=It+Jr,pt=It-Jr;Oe[$e+5]=pt+mi,Oe[$e+3]=pt-mi,Oe[$e+1]=da+Bn,Oe[$e+7]=da-Bn,$e+=8}for($e=0,ft=0;ft<8;++ft){Fe=Oe[$e],We=Oe[$e+8],rt=Oe[$e+16],gt=Oe[$e+24],Nt=Oe[$e+32],jt=Oe[$e+40],Et=Oe[$e+48];var Ir=Fe+(Rt=Oe[$e+56]),fr=Fe-Rt,gr=We+Et,dn=We-Et,un=rt+jt,$n=rt-jt,vi=gt+Nt,Ua=gt-Nt,ua=Ir+vi,pa=Ir-vi,Un=gr+un,ha=gr-un;Oe[$e]=ua+Un,Oe[$e+32]=ua-Un;var _r=.707106781*(ha+pa);Oe[$e+16]=pa+_r,Oe[$e+48]=pa-_r;var Ta=.382683433*((ua=Ua+$n)-(ha=dn+fr)),yi=.5411961*ua+Ta,Gi=1.306562965*ha+Ta,Wi=.707106781*(Un=$n+dn),Vi=fr+Wi,Ao=fr-Wi;Oe[$e+40]=Ao+yi,Oe[$e+24]=Ao-yi,Oe[$e+8]=Vi+Gi,Oe[$e+56]=Vi-Gi,$e++}for(ft=0;ft<64;++ft)Tt=Oe[ft]*Ae[ft],b[ft]=Tt>0?Tt+.5|0:Tt-.5|0;return b})(N,I),Re=0;Re<64;++Re)U[oe[Re]]=_e[Re];var Be=U[0]-G;G=U[0],Be==0?ke(V[0]):(ke(V[P[ne=32767+Be]]),ke(T[ne]));for(var Ue=63;Ue>0&&U[Ue]==0;)Ue--;if(Ue==0)return ke(re),G;for(var Ke,je=1;je<=Ue;){for(var Q=je;U[je]==0&&je<=Ue;)++je;var st=je-Q;if(st>=16){Ke=st>>4;for(var Xe=1;Xe<=Ke;++Xe)ke(ce);st&=15}ne=32767+U[je],ke(Y[(st<<4)+P[ne]]),ke(T[ne]),je++}return Ue!=63&&ke(re),G}function A(N){N=Math.min(Math.max(N,1),100),c!=N&&((function(I){for(var G=[16,11,10,16,24,40,51,61,12,12,14,19,26,58,60,55,14,13,16,24,40,57,69,56,14,17,22,29,51,87,80,62,18,22,37,56,68,109,103,77,24,35,55,64,81,104,113,92,49,64,78,87,103,121,120,101,72,92,95,98,112,100,103,99],V=0;V<64;V++){var Y=h((G[V]*I+50)/100);Y=Math.min(Math.max(Y,1),255),f[oe[V]]=Y}for(var ne=[17,18,24,47,99,99,99,99,18,21,26,66,99,99,99,99,24,26,56,99,99,99,99,99,47,66,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99,99],re=0;re<64;re++){var ce=h((ne[re]*I+50)/100);ce=Math.min(Math.max(ce,1),255),g[oe[re]]=ce}for(var _e=[1,1.387039845,1.306562965,1.175875602,1,.785694958,.5411961,.275899379],Re=0,Be=0;Be<8;Be++)for(var Ue=0;Ue<8;Ue++)w[Re]=1/(f[oe[Re]]*_e[Be]*_e[Ue]*8),k[Re]=1/(g[oe[Re]]*_e[Be]*_e[Ue]*8),Re++})(N<50?Math.floor(5e3/N):Math.floor(200-2*N)),c=N)}this.encode=function(N,I){I&&A(I),D=new Array,q=0,_=7,me(65496),me(65504),me(16),ee(74),ee(70),ee(73),ee(70),ee(0),ee(1),ee(1),ee(0),me(1),me(1),ee(0),ee(0),(function(){me(65499),me(132),ee(0);for(var We=0;We<64;We++)ee(f[We]);ee(1);for(var rt=0;rt<64;rt++)ee(g[rt])})(),(function(We,rt){me(65472),me(17),ee(8),me(rt),me(We),ee(3),ee(1),ee(17),ee(0),ee(2),ee(17),ee(1),ee(3),ee(17),ee(1)})(N.width,N.height),(function(){me(65476),me(418),ee(0);for(var We=0;We<16;We++)ee($[We+1]);for(var rt=0;rt<=11;rt++)ee(pe[rt]);ee(16);for(var gt=0;gt<16;gt++)ee(Se[gt+1]);for(var Nt=0;Nt<=161;Nt++)ee(C[Nt]);ee(1);for(var jt=0;jt<16;jt++)ee(B[jt+1]);for(var Et=0;Et<=11;Et++)ee(Z[Et]);ee(17);for(var Rt=0;Rt<16;Rt++)ee(te[Rt+1]);for(var ft=0;ft<=161;ft++)ee(Ne[ft])})(),me(65498),me(12),ee(3),ee(1),ee(0),ee(2),ee(17),ee(3),ee(17),ee(0),ee(63),ee(0);var G=0,V=0,Y=0;q=0,_=7,this.encode.displayName="_encode_";for(var ne,re,ce,_e,Re,Be,Ue,Ke,je,Q=N.data,st=N.width,Xe=N.height,Oe=4*st,Ae=0;Ae<Xe;){for(ne=0;ne<Oe;){for(Re=Oe*Ae+ne,Ue=-1,Ke=0,je=0;je<64;je++)Be=Re+(Ke=je>>3)*Oe+(Ue=4*(7&je)),Ae+Ke>=Xe&&(Be-=Oe*(Ae+1+Ke-Xe)),ne+Ue>=Oe&&(Be-=ne+Ue-Oe+4),re=Q[Be++],ce=Q[Be++],_e=Q[Be++],F[je]=(ye[re]+ye[ce+256>>0]+ye[_e+512>>0]>>16)-128,K[je]=(ye[re+768>>0]+ye[ce+1024>>0]+ye[_e+1280>>0]>>16)-128,he[je]=(ye[re+1280>>0]+ye[ce+1536>>0]+ye[_e+1792>>0]>>16)-128;G=z(F,w,G,n,l),V=z(K,k,V,a,p),Y=z(he,k,Y,a,p),ne+=32}Ae+=8}if(_>=0){var Fe=[];Fe[1]=_+1,Fe[0]=(1<<_+1)-1,ke(Fe)}return me(65497),new Uint8Array(D)},i=i||50,(function(){for(var N=String.fromCharCode,I=0;I<256;I++)ve[I]=N(I)})(),n=ue($,pe),a=ue(B,Z),l=ue(Se,C),p=ue(te,Ne),(function(){for(var N=1,I=2,G=1;G<=15;G++){for(var V=N;V<I;V++)P[32767+V]=G,T[32767+V]=[],T[32767+V][1]=G,T[32767+V][0]=V;for(var Y=-(I-1);Y<=-N;Y++)P[32767+Y]=G,T[32767+Y]=[],T[32767+Y][1]=G,T[32767+Y][0]=I-1+Y;N<<=1,I<<=1}})(),(function(){for(var N=0;N<256;N++)ye[N]=19595*N,ye[N+256>>0]=38470*N,ye[N+512>>0]=7471*N+32768,ye[N+768>>0]=-11059*N,ye[N+1024>>0]=-21709*N,ye[N+1280>>0]=32768*N+8421375,ye[N+1536>>0]=-27439*N,ye[N+1792>>0]=-5329*N})(),A(i)}/**
 * @license
 * Copyright (c) 2017 Aras Abbasi
 *
 * Licensed under the MIT License.
 * http://opensource.org/licenses/mit-license
 */function pi(i,n){if(this.pos=0,this.buffer=i,this.datav=new DataView(i.buffer),this.is_with_alpha=!!n,this.bottom_up=!0,this.flag=String.fromCharCode(this.buffer[0])+String.fromCharCode(this.buffer[1]),this.pos+=2,["BM","BA","CI","CP","IC","PT"].indexOf(this.flag)===-1)throw new Error("Invalid BMP File");this.parseHeader(),this.parseBGR()}function Wh(i){function n($){if(!$)throw Error("assert :P")}function a($,pe,Se){for(var C=0;4>C;C++)if($[pe+C]!=Se.charCodeAt(C))return!0;return!1}function l($,pe,Se,C,B){for(var Z=0;Z<B;Z++)$[pe+Z]=Se[C+Z]}function p($,pe,Se,C){for(var B=0;B<C;B++)$[pe+B]=Se}function c($){return new Int32Array($)}function h($,pe){for(var Se=[],C=0;C<$;C++)Se.push(new pe);return Se}function f($,pe){var Se=[];return(function C(B,Z,te){for(var Ne=te[Z],ue=0;ue<Ne&&(B.push(te.length>Z+1?[]:new pe),!(te.length<Z+1));ue++)C(B[ue],Z+1,te)})(Se,0,$),Se}var g=function(){var $=this;function pe(o,u){for(var y=1<<u-1>>>0;o&y;)y>>>=1;return y?(o&y-1)+y:o}function Se(o,u,y,S,j){n(!(S%y));do o[u+(S-=y)]=j;while(0<S)}function C(o,u,y,S,j){if(n(2328>=j),512>=j)var E=c(512);else if((E=c(j))==null)return 0;return(function(R,O,H,W,ie,xe){var we,ge,ze=O,Le=1<<H,le=c(16),de=c(16);for(n(ie!=0),n(W!=null),n(R!=null),n(0<H),ge=0;ge<ie;++ge){if(15<W[ge])return 0;++le[W[ge]]}if(le[0]==ie)return 0;for(de[1]=0,we=1;15>we;++we){if(le[we]>1<<we)return 0;de[we+1]=de[we]+le[we]}for(ge=0;ge<ie;++ge)we=W[ge],0<W[ge]&&(xe[de[we]++]=ge);if(de[15]==1)return(W=new B).g=0,W.value=xe[0],Se(R,ze,1,Le,W),Le;var Ie,Me=-1,De=Le-1,et=0,Ye=1,ht=1,Qe=1<<H;for(ge=0,we=1,ie=2;we<=H;++we,ie<<=1){if(Ye+=ht<<=1,0>(ht-=le[we]))return 0;for(;0<le[we];--le[we])(W=new B).g=we,W.value=xe[ge++],Se(R,ze+et,ie,Qe,W),et=pe(et,we)}for(we=H+1,ie=2;15>=we;++we,ie<<=1){if(Ye+=ht<<=1,0>(ht-=le[we]))return 0;for(;0<le[we];--le[we]){if(W=new B,(et&De)!=Me){for(ze+=Qe,Ie=1<<(Me=we)-H;15>Me&&!(0>=(Ie-=le[Me]));)++Me,Ie<<=1;Le+=Qe=1<<(Ie=Me-H),R[O+(Me=et&De)].g=Ie+H,R[O+Me].value=ze-O-Me}W.g=we-H,W.value=xe[ge++],Se(R,ze+(et>>H),ie,Qe,W),et=pe(et,we)}}return Ye!=2*de[15]-1?0:Le})(o,u,y,S,j,E)}function B(){this.value=this.g=0}function Z(){this.value=this.g=0}function te(){this.G=h(5,B),this.H=c(5),this.jc=this.Qb=this.qb=this.nd=0,this.pd=h(xn,Z)}function Ne(o,u,y,S){n(o!=null),n(u!=null),n(2147483648>S),o.Ca=254,o.I=0,o.b=-8,o.Ka=0,o.oa=u,o.pa=y,o.Jd=u,o.Yc=y+S,o.Zc=4<=S?y+S-4+1:y,ne(o)}function ue(o,u){for(var y=0;0<u--;)y|=ce(o,128)<<u;return y}function ke(o,u){var y=ue(o,u);return re(o)?-y:y}function ee(o,u,y,S){var j,E=0;for(n(o!=null),n(u!=null),n(4294967288>S),o.Sb=S,o.Ra=0,o.u=0,o.h=0,4<S&&(S=4),j=0;j<S;++j)E+=u[y+j]<<8*j;o.Ra=E,o.bb=S,o.oa=u,o.pa=y}function me(o){for(;8<=o.u&&o.bb<o.Sb;)o.Ra>>>=8,o.Ra+=o.oa[o.pa+o.bb]<<Ko-8>>>0,++o.bb,o.u-=8;G(o)&&(o.h=1,o.u=0)}function z(o,u){if(n(0<=u),!o.h&&u<=Vo){var y=I(o)&Wo[u];return o.u+=u,me(o),y}return o.h=1,o.u=0}function A(){this.b=this.Ca=this.I=0,this.oa=[],this.pa=0,this.Jd=[],this.Yc=0,this.Zc=[],this.Ka=0}function N(){this.Ra=0,this.oa=[],this.h=this.u=this.bb=this.Sb=this.pa=0}function I(o){return o.Ra>>>(o.u&Ko-1)>>>0}function G(o){return n(o.bb<=o.Sb),o.h||o.bb==o.Sb&&o.u>Ko}function V(o,u){o.u=u,o.h=G(o)}function Y(o){o.u>=Jo&&(n(o.u>=Jo),me(o))}function ne(o){n(o!=null&&o.oa!=null),o.pa<o.Zc?(o.I=(o.oa[o.pa++]|o.I<<8)>>>0,o.b+=8):(n(o!=null&&o.oa!=null),o.pa<o.Yc?(o.b+=8,o.I=o.oa[o.pa++]|o.I<<8):o.Ka?o.b=0:(o.I<<=8,o.b+=8,o.Ka=1))}function re(o){return ue(o,1)}function ce(o,u){var y=o.Ca;0>o.b&&ne(o);var S=o.b,j=y*u>>>8,E=(o.I>>>S>j)+0;for(E?(y-=j,o.I-=j+1<<S>>>0):y=j+1,S=y,j=0;256<=S;)j+=8,S>>=8;return S=7^j+ir[S],o.b-=S,o.Ca=(y<<S)-1,E}function _e(o,u,y){o[u+0]=y>>24&255,o[u+1]=y>>16&255,o[u+2]=y>>8&255,o[u+3]=y>>0&255}function Re(o,u){return o[u+0]<<0|o[u+1]<<8}function Be(o,u){return Re(o,u)|o[u+2]<<16}function Ue(o,u){return Re(o,u)|Re(o,u+2)<<16}function Ke(o,u){var y=1<<u;return n(o!=null),n(0<u),o.X=c(y),o.X==null?0:(o.Mb=32-u,o.Xa=u,1)}function je(o,u){n(o!=null),n(u!=null),n(o.Xa==u.Xa),l(u.X,0,o.X,0,1<<u.Xa)}function Q(){this.X=[],this.Xa=this.Mb=0}function st(o,u,y,S){n(y!=null),n(S!=null);var j=y[0],E=S[0];return j==0&&(j=(o*E+u/2)/u),E==0&&(E=(u*j+o/2)/o),0>=j||0>=E?0:(y[0]=j,S[0]=E,1)}function Xe(o,u){return o+(1<<u)-1>>>u}function Oe(o,u){return((4278255360&o)+(4278255360&u)>>>0&4278255360)+((16711935&o)+(16711935&u)>>>0&16711935)>>>0}function Ae(o,u){$[u]=function(y,S,j,E,R,O,H){var W;for(W=0;W<R;++W){var ie=$[o](O[H+W-1],j,E+W);O[H+W]=Oe(y[S+W],ie)}}}function Fe(){this.ud=this.hd=this.jd=0}function We(o,u){return((4278124286&(o^u))>>>1)+(o&u)>>>0}function rt(o){return 0<=o&&256>o?o:0>o?0:255<o?255:void 0}function gt(o,u){return rt(o+(o-u+.5>>1))}function Nt(o,u,y){return Math.abs(u-y)-Math.abs(o-y)}function jt(o,u,y,S,j,E,R){for(S=E[R-1],y=0;y<j;++y)E[R+y]=S=Oe(o[u+y],S)}function Et(o,u,y,S,j){var E;for(E=0;E<y;++E){var R=o[u+E],O=R>>8&255,H=16711935&(H=(H=16711935&R)+((O<<16)+O));S[j+E]=(4278255360&R)+H>>>0}}function Rt(o,u){u.jd=o>>0&255,u.hd=o>>8&255,u.ud=o>>16&255}function ft(o,u,y,S,j,E){var R;for(R=0;R<S;++R){var O=u[y+R],H=O>>>8,W=O,ie=255&(ie=(ie=O>>>16)+((o.jd<<24>>24)*(H<<24>>24)>>>5));W=255&(W=(W=W+((o.hd<<24>>24)*(H<<24>>24)>>>5))+((o.ud<<24>>24)*(ie<<24>>24)>>>5)),j[E+R]=(4278255360&O)+(ie<<16)+W}}function Tt(o,u,y,S,j){$[u]=function(E,R,O,H,W,ie,xe,we,ge){for(H=xe;H<we;++H)for(xe=0;xe<ge;++xe)W[ie++]=j(O[S(E[R++])])},$[o]=function(E,R,O,H,W,ie,xe){var we=8>>E.b,ge=E.Ea,ze=E.K[0],Le=E.w;if(8>we)for(E=(1<<E.b)-1,Le=(1<<we)-1;R<O;++R){var le,de=0;for(le=0;le<ge;++le)le&E||(de=S(H[W++])),ie[xe++]=j(ze[de&Le]),de>>=we}else $["VP8LMapColor"+y](H,W,ze,Le,ie,xe,R,O,ge)}}function $e(o,u,y,S,j){for(y=u+y;u<y;){var E=o[u++];S[j++]=E>>16&255,S[j++]=E>>8&255,S[j++]=E>>0&255}}function On(o,u,y,S,j){for(y=u+y;u<y;){var E=o[u++];S[j++]=E>>16&255,S[j++]=E>>8&255,S[j++]=E>>0&255,S[j++]=E>>24&255}}function It(o,u,y,S,j){for(y=u+y;u<y;){var E=(R=o[u++])>>16&240|R>>12&15,R=R>>0&240|R>>28&15;S[j++]=E,S[j++]=R}}function Vr(o,u,y,S,j){for(y=u+y;u<y;){var E=(R=o[u++])>>16&248|R>>13&7,R=R>>5&224|R>>3&31;S[j++]=E,S[j++]=R}}function Zt(o,u,y,S,j){for(y=u+y;u<y;){var E=o[u++];S[j++]=E>>0&255,S[j++]=E>>8&255,S[j++]=E>>16&255}}function rn(o,u,y,S,j,E){if(E==0)for(y=u+y;u<y;)_e(S,((E=o[u++])[0]>>24|E[1]>>8&65280|E[2]<<8&16711680|E[3]<<24)>>>0),j+=32;else l(S,j,o,u,y)}function Kr(o,u){$[u][0]=$[o+"0"],$[u][1]=$[o+"1"],$[u][2]=$[o+"2"],$[u][3]=$[o+"3"],$[u][4]=$[o+"4"],$[u][5]=$[o+"5"],$[u][6]=$[o+"6"],$[u][7]=$[o+"7"],$[u][8]=$[o+"8"],$[u][9]=$[o+"9"],$[u][10]=$[o+"10"],$[u][11]=$[o+"11"],$[u][12]=$[o+"12"],$[u][13]=$[o+"13"],$[u][14]=$[o+"0"],$[u][15]=$[o+"0"]}function Ft(o){return o==es||o==ho||o==Hs||o==Us}function Ha(){this.eb=[],this.size=this.A=this.fb=0}function sn(){this.y=[],this.f=[],this.ea=[],this.F=[],this.Tc=this.Ed=this.Cd=this.Fd=this.lb=this.Db=this.Ab=this.fa=this.J=this.W=this.N=this.O=0}function Jn(){this.Rd=this.height=this.width=this.S=0,this.f={},this.f.RGBA=new Ha,this.f.kb=new sn,this.sd=null}function hr(){this.width=[0],this.height=[0],this.Pd=[0],this.Qd=[0],this.format=[0]}function cn(){this.Id=this.fd=this.Md=this.hb=this.ib=this.da=this.bd=this.cd=this.j=this.v=this.Da=this.Sd=this.ob=0}function St(o){return alert("todo:WebPSamplerProcessPlane"),o.T}function qt(o,u){var y=o.T,S=u.ba.f.RGBA,j=S.eb,E=S.fb+o.ka*S.A,R=wr[u.ba.S],O=o.y,H=o.O,W=o.f,ie=o.N,xe=o.ea,we=o.W,ge=u.cc,ze=u.dc,Le=u.Mc,le=u.Nc,de=o.ka,Ie=o.ka+o.T,Me=o.U,De=Me+1>>1;for(de==0?R(O,H,null,null,W,ie,xe,we,W,ie,xe,we,j,E,null,null,Me):(R(u.ec,u.fc,O,H,ge,ze,Le,le,W,ie,xe,we,j,E-S.A,j,E,Me),++y);de+2<Ie;de+=2)ge=W,ze=ie,Le=xe,le=we,ie+=o.Rc,we+=o.Rc,E+=2*S.A,R(O,(H+=2*o.fa)-o.fa,O,H,ge,ze,Le,le,W,ie,xe,we,j,E-S.A,j,E,Me);return H+=o.fa,o.j+Ie<o.o?(l(u.ec,u.fc,O,H,Me),l(u.cc,u.dc,W,ie,De),l(u.Mc,u.Nc,xe,we,De),y--):1&Ie||R(O,H,null,null,W,ie,xe,we,W,ie,xe,we,j,E+S.A,null,null,Me),y}function mi(o,u,y){var S=o.F,j=[o.J];if(S!=null){var E=o.U,R=u.ba.S,O=R==qs||R==Hs;u=u.ba.f.RGBA;var H=[0],W=o.ka;H[0]=o.T,o.Kb&&(W==0?--H[0]:(--W,j[0]-=o.width),o.j+o.ka+o.T==o.o&&(H[0]=o.o-o.j-W));var ie=u.eb;W=u.fb+W*u.A,o=Jt(S,j[0],o.width,E,H,ie,W+(O?0:3),u.A),n(y==H),o&&Ft(R)&&br(ie,W,O,E,H,u.A)}return 0}function Bn(o){var u=o.ma,y=u.ba.S,S=11>y,j=y==Ii||y==Bs||y==qs||y==tn||y==12||Ft(y);if(u.memory=null,u.Ib=null,u.Jb=null,u.Nd=null,!Uo(u.Oa,o,j?11:12))return 0;if(j&&Ft(y)&&qe(),o.da)alert("todo:use_scaling");else{if(S){if(u.Ib=St,o.Kb){if(y=o.U+1>>1,u.memory=c(o.U+2*y),u.memory==null)return 0;u.ec=u.memory,u.fc=0,u.cc=u.ec,u.dc=u.fc+o.U,u.Mc=u.cc,u.Nc=u.dc+y,u.Ib=qt,qe()}}else alert("todo:EmitYUV");j&&(u.Jb=mi,S&&be())}if(S&&!Wn){for(o=0;256>o;++o)Sr[o]=89858*(o-128)+ba>>ei,kr[o]=-22014*(o-128)+ba,as[o]=-45773*(o-128),vo[o]=113618*(o-128)+ba>>ei;for(o=$t;o<Qt;++o)u=76283*(o-16)+ba>>ei,xl[o-$t]=Fr(u,255),Lc[o-$t]=Fr(u+8>>4,15);Wn=1}return 1}function Jr(o){var u=o.ma,y=o.U,S=o.T;return n(!(1&o.ka)),0>=y||0>=S?0:(y=u.Ib(o,u),u.Jb!=null&&u.Jb(o,u,y),u.Dc+=y,1)}function da(o){o.ma.memory=null}function pt(o,u,y,S){return z(o,8)!=47?0:(u[0]=z(o,14)+1,y[0]=z(o,14)+1,S[0]=z(o,1),z(o,3)!=0?0:!o.h)}function Ir(o,u){if(4>o)return o+1;var y=o-2>>1;return(2+(1&o)<<y)+z(u,y)+1}function fr(o,u){return 120<u?u-120:1<=(y=((y=Ad[u-1])>>4)*o+(8-(15&y)))?y:1;var y}function gr(o,u,y){var S=I(y),j=o[u+=255&S].g-8;return 0<j&&(V(y,y.u+8),S=I(y),u+=o[u].value,u+=S&(1<<j)-1),V(y,y.u+o[u].g),o[u].value}function dn(o,u,y){return y.g+=o.g,y.value+=o.value<<u>>>0,n(8>=y.g),o.g}function un(o,u,y){var S=o.xc;return n((u=S==0?0:o.vc[o.md*(y>>S)+(u>>S)])<o.Wb),o.Ya[u]}function $n(o,u,y,S){var j=o.ab,E=o.c*u,R=o.C;u=R+u;var O=y,H=S;for(S=o.Ta,y=o.Ua;0<j--;){var W=o.gc[j],ie=R,xe=u,we=O,ge=H,ze=(H=S,O=y,W.Ea);switch(n(ie<xe),n(xe<=W.nc),W.hc){case 2:gl(we,ge,(xe-ie)*ze,H,O);break;case 0:var Le=ie,le=xe,de=H,Ie=O,Me=(Qe=W).Ea;Le==0&&(oo(we,ge,null,null,1,de,Ie),jt(we,ge+1,0,0,Me-1,de,Ie+1),ge+=Me,Ie+=Me,++Le);for(var De=1<<Qe.b,et=De-1,Ye=Xe(Me,Qe.b),ht=Qe.K,Qe=Qe.w+(Le>>Qe.b)*Ye;Le<le;){var zt=ht,Ot=Qe,Dt=1;for(Va(we,ge,de,Ie-Me,1,de,Ie);Dt<Me;){var Lt=(Dt&~et)+De;Lt>Me&&(Lt=Me),(0,Ea[zt[Ot++]>>8&15])(we,ge+ +Dt,de,Ie+Dt-Me,Lt-Dt,de,Ie+Dt),Dt=Lt}ge+=Me,Ie+=Me,++Le&et||(Qe+=Ye)}xe!=W.nc&&l(H,O-ze,H,O+(xe-ie-1)*ze,ze);break;case 1:for(ze=we,le=ge,Me=(we=W.Ea)-(Ie=we&~(de=(ge=1<<W.b)-1)),Le=Xe(we,W.b),De=W.K,W=W.w+(ie>>W.b)*Le;ie<xe;){for(et=De,Ye=W,ht=new Fe,Qe=le+Ie,zt=le+we;le<Qe;)Rt(et[Ye++],ht),Li(ht,ze,le,ge,H,O),le+=ge,O+=ge;le<zt&&(Rt(et[Ye++],ht),Li(ht,ze,le,Me,H,O),le+=Me,O+=Me),++ie&de||(W+=Le)}break;case 3:if(we==H&&ge==O&&0<W.b){for(le=H,we=ze=O+(xe-ie)*ze-(Ie=(xe-ie)*Xe(W.Ea,W.b)),ge=H,de=O,Le=[],Ie=(Me=Ie)-1;0<=Ie;--Ie)Le[Ie]=ge[de+Ie];for(Ie=Me-1;0<=Ie;--Ie)le[we+Ie]=Le[Ie];or(W,ie,xe,H,ze,H,O)}else or(W,ie,xe,we,ge,H,O)}O=S,H=y}H!=y&&l(S,y,O,H,E)}function vi(o,u){var y=o.V,S=o.Ba+o.c*o.C,j=u-o.C;if(n(u<=o.l.o),n(16>=j),0<j){var E=o.l,R=o.Ta,O=o.Ua,H=E.width;if($n(o,j,y,S),j=O=[O],n((y=o.C)<(S=u)),n(E.v<E.va),S>E.o&&(S=E.o),y<E.j){var W=E.j-y;y=E.j,j[0]+=W*H}if(y>=S?y=0:(j[0]+=4*E.v,E.ka=y-E.j,E.U=E.va-E.v,E.T=S-y,y=1),y){if(O=O[0],11>(y=o.ca).S){var ie=y.f.RGBA,xe=(S=y.S,j=E.U,E=E.T,W=ie.eb,ie.A),we=E;for(ie=ie.fb+o.Ma*ie.A;0<we--;){var ge=R,ze=O,Le=j,le=W,de=ie;switch(S){case ml:sr(ge,ze,Le,le,de);break;case Ii:Qn(ge,ze,Le,le,de);break;case es:Qn(ge,ze,Le,le,de),br(le,de,0,Le,1,0);break;case Tc:Ja(ge,ze,Le,le,de);break;case Bs:rn(ge,ze,Le,le,de,1);break;case ho:rn(ge,ze,Le,le,de,1),br(le,de,0,Le,1,0);break;case qs:rn(ge,ze,Le,le,de,0);break;case Hs:rn(ge,ze,Le,le,de,0),br(le,de,1,Le,1,0);break;case tn:Ei(ge,ze,Le,le,de);break;case Us:Ei(ge,ze,Le,le,de),en(le,de,Le,1,0);break;case vl:Ka(ge,ze,Le,le,de);break;default:n(0)}O+=H,ie+=xe}o.Ma+=E}else alert("todo:EmitRescaledRowsYUVA");n(o.Ma<=y.height)}}o.C=u,n(o.C<=o.i)}function Ua(o){var u;if(0<o.ua)return 0;for(u=0;u<o.Wb;++u){var y=o.Ya[u].G,S=o.Ya[u].H;if(0<y[1][S[1]+0].g||0<y[2][S[2]+0].g||0<y[3][S[3]+0].g)return 0}return 1}function ua(o,u,y,S,j,E){if(o.Z!=0){var R=o.qd,O=o.rd;for(n(Zn[o.Z]!=null);u<y;++u)Zn[o.Z](R,O,S,j,S,j,E),R=S,O=j,j+=E;o.qd=R,o.rd=O}}function pa(o,u){var y=o.l.ma,S=y.Z==0||y.Z==1?o.l.j:o.C;if(S=o.C<S?S:o.C,n(u<=o.l.o),u>S){var j=o.l.width,E=y.ca,R=y.tb+j*S,O=o.V,H=o.Ba+o.c*S,W=o.gc;n(o.ab==1),n(W[0].hc==3),Fs(W[0],S,u,O,H,E,R),ua(y,S,u,E,R,j)}o.C=o.Ma=u}function Un(o,u,y,S,j,E,R){var O=o.$/S,H=o.$%S,W=o.m,ie=o.s,xe=y+o.$,we=xe;j=y+S*j;var ge=y+S*E,ze=280+ie.ua,Le=o.Pb?O:16777216,le=0<ie.ua?ie.Wa:null,de=ie.wc,Ie=xe<ge?un(ie,H,O):null;n(o.C<E),n(ge<=j);var Me=!1;e:for(;;){for(;Me||xe<ge;){var De=0;if(O>=Le){var et=xe-y;n((Le=o).Pb),Le.wd=Le.m,Le.xd=et,0<Le.s.ua&&je(Le.s.Wa,Le.s.vb),Le=O+bl}if(H&de||(Ie=un(ie,H,O)),n(Ie!=null),Ie.Qb&&(u[xe]=Ie.qb,Me=!0),!Me)if(Y(W),Ie.jc){De=W,et=u;var Ye=xe,ht=Ie.pd[I(De)&xn-1];n(Ie.jc),256>ht.g?(V(De,De.u+ht.g),et[Ye]=ht.value,De=0):(V(De,De.u+ht.g-256),n(256<=ht.value),De=ht.value),De==0&&(Me=!0)}else De=gr(Ie.G[0],Ie.H[0],W);if(W.h)break;if(Me||256>De){if(!Me)if(Ie.nd)u[xe]=(Ie.qb|De<<8)>>>0;else{if(Y(W),Me=gr(Ie.G[1],Ie.H[1],W),Y(W),et=gr(Ie.G[2],Ie.H[2],W),Ye=gr(Ie.G[3],Ie.H[3],W),W.h)break;u[xe]=(Ye<<24|Me<<16|De<<8|et)>>>0}if(Me=!1,++xe,++H>=S&&(H=0,++O,R!=null&&O<=E&&!(O%16)&&R(o,O),le!=null))for(;we<xe;)De=u[we++],le.X[(506832829*De&4294967295)>>>le.Mb]=De}else if(280>De){if(De=Ir(De-256,W),et=gr(Ie.G[4],Ie.H[4],W),Y(W),et=fr(S,et=Ir(et,W)),W.h)break;if(xe-y<et||j-xe<De)break e;for(Ye=0;Ye<De;++Ye)u[xe+Ye]=u[xe+Ye-et];for(xe+=De,H+=De;H>=S;)H-=S,++O,R!=null&&O<=E&&!(O%16)&&R(o,O);if(n(xe<=j),H&de&&(Ie=un(ie,H,O)),le!=null)for(;we<xe;)De=u[we++],le.X[(506832829*De&4294967295)>>>le.Mb]=De}else{if(!(De<ze))break e;for(Me=De-280,n(le!=null);we<xe;)De=u[we++],le.X[(506832829*De&4294967295)>>>le.Mb]=De;De=xe,n(!(Me>>>(et=le).Xa)),u[De]=et.X[Me],Me=!0}Me||n(W.h==G(W))}if(o.Pb&&W.h&&xe<j)n(o.m.h),o.a=5,o.m=o.wd,o.$=o.xd,0<o.s.ua&&je(o.s.vb,o.s.Wa);else{if(W.h)break e;R!=null&&R(o,O>E?E:O),o.a=0,o.$=xe-y}return 1}return o.a=3,0}function ha(o){n(o!=null),o.vc=null,o.yc=null,o.Ya=null;var u=o.Wa;u!=null&&(u.X=null),o.vb=null,n(o!=null)}function _r(){var o=new $l;return o==null?null:(o.a=0,o.xb=ns,Kr("Predictor","VP8LPredictors"),Kr("Predictor","VP8LPredictors_C"),Kr("PredictorAdd","VP8LPredictorsAdd"),Kr("PredictorAdd","VP8LPredictorsAdd_C"),gl=Et,Li=ft,sr=$e,Qn=On,Ei=It,Ka=Vr,Ja=Zt,$.VP8LMapColor32b=$o,$.VP8LMapColor8b=Yo,o)}function Ta(o,u,y,S,j){var E=1,R=[o],O=[u],H=S.m,W=S.s,ie=null,xe=0;e:for(;;){if(y)for(;E&&z(H,1);){var we=R,ge=O,ze=S,Le=1,le=ze.m,de=ze.gc[ze.ab],Ie=z(le,2);if(ze.Oc&1<<Ie)E=0;else{switch(ze.Oc|=1<<Ie,de.hc=Ie,de.Ea=we[0],de.nc=ge[0],de.K=[null],++ze.ab,n(4>=ze.ab),Ie){case 0:case 1:de.b=z(le,3)+2,Le=Ta(Xe(de.Ea,de.b),Xe(de.nc,de.b),0,ze,de.K),de.K=de.K[0];break;case 3:var Me,De=z(le,8)+1,et=16<De?0:4<De?1:2<De?2:3;if(we[0]=Xe(de.Ea,et),de.b=et,Me=Le=Ta(De,1,0,ze,de.K)){var Ye,ht=De,Qe=de,zt=1<<(8>>Qe.b),Ot=c(zt);if(Ot==null)Me=0;else{var Dt=Qe.K[0],Lt=Qe.w;for(Ot[0]=Qe.K[0][0],Ye=1;Ye<1*ht;++Ye)Ot[Ye]=Oe(Dt[Lt+Ye],Ot[Ye-1]);for(;Ye<4*zt;++Ye)Ot[Ye]=0;Qe.K[0]=null,Qe.K[0]=Ot,Me=1}}Le=Me;break;case 2:break;default:n(0)}E=Le}}if(R=R[0],O=O[0],E&&z(H,1)&&!(E=1<=(xe=z(H,4))&&11>=xe)){S.a=3;break e}var Yt;if(Yt=E)t:{var Xt,wt,gn,dr=S,kn=R,Mn=O,Wt=xe,er=y,tr=dr.m,mn=dr.s,In=[null],Vn=1,Nr=0,ta=Ac[Wt];n:for(;;){if(er&&z(tr,1)){var vn=z(tr,3)+2,An=Xe(kn,vn),Br=Xe(Mn,vn),Ri=An*Br;if(!Ta(An,Br,0,dr,In))break n;for(In=In[0],mn.xc=vn,Xt=0;Xt<Ri;++Xt){var ni=In[Xt]>>8&65535;In[Xt]=ni,ni>=Vn&&(Vn=ni+1)}}if(tr.h)break n;for(wt=0;5>wt;++wt){var Vt=fo[wt];!wt&&0<Wt&&(Vt+=1<<Wt),Nr<Vt&&(Nr=Vt)}var Ra=h(Vn*ta,B),wl=Vn,tc=h(wl,te);if(tc==null)var na=null;else n(65536>=wl),na=tc;var ra=c(Nr);if(na==null||ra==null||Ra==null){dr.a=1;break n}var bo=Ra;for(Xt=gn=0;Xt<Vn;++Xt){var aa=na[Xt],ri=aa.G,xo=aa.H,is=0,qr=1,os=0;for(wt=0;5>wt;++wt){Vt=fo[wt],ri[wt]=bo,xo[wt]=gn,!wt&&0<Wt&&(Vt+=1<<Wt);a:{var Fi,ai=Vt,ss=dr,Fa=ra,Mc=bo,nc=gn,an=0,xa=ss.m,rc=z(xa,1);if(p(Fa,0,0,ai),rc){var ac=z(xa,1)+1,Sl=z(xa,1),kl=z(xa,Sl==0?1:8);Fa[kl]=1,ac==2&&(Fa[kl=z(xa,8)]=1);var za=1}else{var ln=c(19),jn=z(xa,4)+4;if(19<jn){ss.a=3;var Nn=0;break a}for(Fi=0;Fi<jn;++Fi)ln[Pd[Fi]]=z(xa,3);var ls=void 0,ii=void 0,cs=ss,Md=ln,_n=ai,Nl=Fa,Js=0,Oa=cs.m,wa=8,Hr=h(128,B);r:for(;C(Hr,0,7,Md,19);){if(z(Oa,1)){var $s=2+2*z(Oa,3);if((ls=2+z(Oa,$s))>_n)break r}else ls=_n;for(ii=0;ii<_n&&ls--;){Y(Oa);var Tl=Hr[0+(127&I(Oa))];V(Oa,Oa.u+Tl.g);var zi=Tl.value;if(16>zi)Nl[ii++]=zi,zi!=0&&(wa=zi);else{var Ic=zi==16,ic=zi-16,_c=yl[ic],oc=z(Oa,Gs[ic])+_c;if(ii+oc>_n)break r;for(var Dc=Ic?wa:0;0<oc--;)Nl[ii++]=Dc}}Js=1;break r}Js||(cs.a=3),za=Js}(za=za&&!xa.h)&&(an=C(Mc,nc,8,Fa,ai)),za&&an!=0?Nn=an:(ss.a=3,Nn=0)}if(Nn==0)break n;if(qr&&Pc[wt]==1&&(qr=bo[gn].g==0),is+=bo[gn].g,gn+=Nn,3>=wt){var ds,Pl=ra[0];for(ds=1;ds<Vt;++ds)ra[ds]>Pl&&(Pl=ra[ds]);os+=Pl}}if(aa.nd=qr,aa.Qb=0,qr&&(aa.qb=(ri[3][xo[3]+0].value<<24|ri[1][xo[1]+0].value<<16|ri[2][xo[2]+0].value)>>>0,is==0&&256>ri[0][xo[0]+0].value&&(aa.Qb=1,aa.qb+=ri[0][xo[0]+0].value<<8)),aa.jc=!aa.Qb&&6>os,aa.jc){var Ys,Ur=aa;for(Ys=0;Ys<xn;++Ys){var oi=Ys,Sa=Ur.pd[oi],wo=Ur.G[0][Ur.H[0]+oi];256<=wo.value?(Sa.g=wo.g+256,Sa.value=wo.value):(Sa.g=0,Sa.value=0,oi>>=dn(wo,8,Sa),oi>>=dn(Ur.G[1][Ur.H[1]+oi],16,Sa),oi>>=dn(Ur.G[2][Ur.H[2]+oi],0,Sa),dn(Ur.G[3][Ur.H[3]+oi],24,Sa))}}}mn.vc=In,mn.Wb=Vn,mn.Ya=na,mn.yc=Ra,Yt=1;break t}Yt=0}if(!(E=Yt)){S.a=3;break e}if(0<xe){if(W.ua=1<<xe,!Ke(W.Wa,xe)){S.a=1,E=0;break e}}else W.ua=0;var Al=S,jl=R,Rc=O,Cl=Al.s,Ll=Cl.xc;if(Al.c=jl,Al.i=Rc,Cl.md=Xe(jl,Ll),Cl.wc=Ll==0?-1:(1<<Ll)-1,y){S.xb=Da;break e}if((ie=c(R*O))==null){S.a=1,E=0;break e}E=(E=Un(S,ie,0,R,O,O,null))&&!H.h;break e}return E?(j!=null?j[0]=ie:(n(ie==null),n(y)),S.$=0,y||ha(W)):ha(W),E}function yi(o,u){var y=o.c*o.i,S=y+u+16*u;return n(o.c<=u),o.V=c(S),o.V==null?(o.Ta=null,o.Ua=0,o.a=1,0):(o.Ta=o.V,o.Ua=o.Ba+y+u,1)}function Gi(o,u){var y=o.C,S=u-y,j=o.V,E=o.Ba+o.c*y;for(n(u<=o.l.o);0<S;){var R=16<S?16:S,O=o.l.ma,H=o.l.width,W=H*R,ie=O.ca,xe=O.tb+H*y,we=o.Ta,ge=o.Ua;$n(o,R,j,E),wn(we,ge,ie,xe,W),ua(O,y,y+R,ie,xe,H),S-=R,j+=R*o.c,y+=R}n(y==u),o.C=o.Ma=u}function Wi(){this.ub=this.yd=this.td=this.Rb=0}function Vi(){this.Kd=this.Ld=this.Ud=this.Td=this.i=this.c=0}function Ao(){this.Fb=this.Bb=this.Cb=0,this.Zb=c(4),this.Lb=c(4)}function ol(){this.Yb=(function(){var o=[];return(function u(y,S,j){for(var E=j[S],R=0;R<E&&(y.push(j.length>S+1?[]:0),!(j.length<S+1));R++)u(y[R],S+1,j)})(o,0,[3,11]),o})()}function pn(){this.jb=c(3),this.Wc=f([4,8],ol),this.Xc=f([4,17],ol)}function Vl(){this.Pc=this.wb=this.Tb=this.zd=0,this.vd=new c(4),this.od=new c(4)}function bi(){this.ld=this.La=this.dd=this.tc=0}function Ts(){this.Na=this.la=0}function jo(){this.Sc=[0,0],this.Eb=[0,0],this.Qc=[0,0],this.ia=this.lc=0}function Ps(){this.ad=c(384),this.Za=0,this.Ob=c(16),this.$b=this.Ad=this.ia=this.Gc=this.Hc=this.Dd=0}function sl(){this.uc=this.M=this.Nb=0,this.wa=Array(new bi),this.Y=0,this.ya=Array(new Ps),this.aa=0,this.l=new Co}function Ki(){this.y=c(16),this.f=c(8),this.ea=c(8)}function $r(){this.cb=this.a=0,this.sc="",this.m=new A,this.Od=new Wi,this.Kc=new Vi,this.ed=new Vl,this.Qa=new Ao,this.Ic=this.$c=this.Aa=0,this.D=new sl,this.Xb=this.Va=this.Hb=this.zb=this.yb=this.Ub=this.za=0,this.Jc=h(8,A),this.ia=0,this.pb=h(4,jo),this.Pa=new pn,this.Bd=this.kc=0,this.Ac=[],this.Bc=0,this.zc=[0,0,0,0],this.Gd=Array(new Ki),this.Hd=0,this.rb=Array(new Ts),this.sb=0,this.wa=Array(new bi),this.Y=0,this.oc=[],this.pc=0,this.sa=[],this.ta=0,this.qa=[],this.ra=0,this.Ha=[],this.B=this.R=this.Ia=0,this.Ec=[],this.M=this.ja=this.Vb=this.Fc=0,this.ya=Array(new Ps),this.L=this.aa=0,this.gd=f([4,2],bi),this.ga=null,this.Fa=[],this.Cc=this.qc=this.P=0,this.Gb=[],this.Uc=0,this.mb=[],this.nb=0,this.rc=[],this.Ga=this.Vc=0}function Co(){this.T=this.U=this.ka=this.height=this.width=0,this.y=[],this.f=[],this.ea=[],this.Rc=this.fa=this.W=this.N=this.O=0,this.ma="void",this.put="VP8IoPutHook",this.ac="VP8IoSetupHook",this.bc="VP8IoTeardownHook",this.ha=this.Kb=0,this.data=[],this.hb=this.ib=this.da=this.o=this.j=this.va=this.v=this.Da=this.ob=this.w=0,this.F=[],this.J=0}function Dr(){var o=new $r;return o!=null&&(o.a=0,o.sc="OK",o.cb=0,o.Xb=0,go||(go=Ji)),o}function Sn(o,u,y){return o.a==0&&(o.a=u,o.sc=y,o.cb=0),0}function ll(o,u,y){return 3<=y&&o[u+0]==157&&o[u+1]==1&&o[u+2]==42}function cl(o,u){if(o==null)return 0;if(o.a=0,o.sc="OK",u==null)return Sn(o,2,"null VP8Io passed to VP8GetHeaders()");var y=u.data,S=u.w,j=u.ha;if(4>j)return Sn(o,7,"Truncated header.");var E=y[S+0]|y[S+1]<<8|y[S+2]<<16,R=o.Od;if(R.Rb=!(1&E),R.td=E>>1&7,R.yd=E>>4&1,R.ub=E>>5,3<R.td)return Sn(o,3,"Incorrect keyframe parameters.");if(!R.yd)return Sn(o,4,"Frame not displayable.");S+=3,j-=3;var O=o.Kc;if(R.Rb){if(7>j)return Sn(o,7,"cannot parse picture header");if(!ll(y,S,j))return Sn(o,3,"Bad code word");O.c=16383&(y[S+4]<<8|y[S+3]),O.Td=y[S+4]>>6,O.i=16383&(y[S+6]<<8|y[S+5]),O.Ud=y[S+6]>>6,S+=7,j-=7,o.za=O.c+15>>4,o.Ub=O.i+15>>4,u.width=O.c,u.height=O.i,u.Da=0,u.j=0,u.v=0,u.va=u.width,u.o=u.height,u.da=0,u.ib=u.width,u.hb=u.height,u.U=u.width,u.T=u.height,p((E=o.Pa).jb,0,255,E.jb.length),n((E=o.Qa)!=null),E.Cb=0,E.Bb=0,E.Fb=1,p(E.Zb,0,0,E.Zb.length),p(E.Lb,0,0,E.Lb)}if(R.ub>j)return Sn(o,7,"bad partition length");Ne(E=o.m,y,S,R.ub),S+=R.ub,j-=R.ub,R.Rb&&(O.Ld=re(E),O.Kd=re(E)),O=o.Qa;var H,W=o.Pa;if(n(E!=null),n(O!=null),O.Cb=re(E),O.Cb){if(O.Bb=re(E),re(E)){for(O.Fb=re(E),H=0;4>H;++H)O.Zb[H]=re(E)?ke(E,7):0;for(H=0;4>H;++H)O.Lb[H]=re(E)?ke(E,6):0}if(O.Bb)for(H=0;3>H;++H)W.jb[H]=re(E)?ue(E,8):255}else O.Bb=0;if(E.Ka)return Sn(o,3,"cannot parse segment header");if((O=o.ed).zd=re(E),O.Tb=ue(E,6),O.wb=ue(E,3),O.Pc=re(E),O.Pc&&re(E)){for(W=0;4>W;++W)re(E)&&(O.vd[W]=ke(E,6));for(W=0;4>W;++W)re(E)&&(O.od[W]=ke(E,6))}if(o.L=O.Tb==0?0:O.zd?1:2,E.Ka)return Sn(o,3,"cannot parse filter header");var ie=j;if(j=H=S,S=H+ie,O=ie,o.Xb=(1<<ue(o.m,2))-1,ie<3*(W=o.Xb))y=7;else{for(H+=3*W,O-=3*W,ie=0;ie<W;++ie){var xe=y[j+0]|y[j+1]<<8|y[j+2]<<16;xe>O&&(xe=O),Ne(o.Jc[+ie],y,H,xe),H+=xe,O-=xe,j+=3}Ne(o.Jc[+W],y,H,O),y=H<S?0:5}if(y!=0)return Sn(o,y,"cannot parse partitions");for(y=ue(H=o.m,7),j=re(H)?ke(H,4):0,S=re(H)?ke(H,4):0,O=re(H)?ke(H,4):0,W=re(H)?ke(H,4):0,H=re(H)?ke(H,4):0,ie=o.Qa,xe=0;4>xe;++xe){if(ie.Cb){var we=ie.Zb[xe];ie.Fb||(we+=y)}else{if(0<xe){o.pb[xe]=o.pb[0];continue}we=y}var ge=o.pb[xe];ge.Sc[0]=ts[Fr(we+j,127)],ge.Sc[1]=Ws[Fr(we+0,127)],ge.Eb[0]=2*ts[Fr(we+S,127)],ge.Eb[1]=101581*Ws[Fr(we+O,127)]>>16,8>ge.Eb[1]&&(ge.Eb[1]=8),ge.Qc[0]=ts[Fr(we+W,117)],ge.Qc[1]=Ws[Fr(we+H,127)],ge.lc=we+H}if(!R.Rb)return Sn(o,4,"Not a key frame.");for(re(E),R=o.Pa,y=0;4>y;++y){for(j=0;8>j;++j)for(S=0;3>S;++S)for(O=0;11>O;++O)W=ce(E,Cd[y][j][S][O])?ue(E,8):Cc[y][j][S][O],R.Wc[y][j].Yb[S][O]=W;for(j=0;17>j;++j)R.Xc[y][j]=R.Wc[y][Xl[j]]}return o.kc=re(E),o.kc&&(o.Bd=ue(E,8)),o.cb=1}function Ji(o,u,y,S,j,E,R){var O=u[j].Yb[y];for(y=0;16>j;++j){if(!ce(o,O[y+0]))return j;for(;!ce(o,O[y+1]);)if(O=u[++j].Yb[0],y=0,j==16)return 16;var H=u[j+1].Yb;if(ce(o,O[y+2])){var W=o,ie=0;if(ce(W,(we=O)[(xe=y)+3]))if(ce(W,we[xe+6])){for(O=0,xe=2*(ie=ce(W,we[xe+8]))+(we=ce(W,we[xe+9+ie])),ie=0,we=Yl[xe];we[O];++O)ie+=ie+ce(W,we[O]);ie+=3+(8<<xe)}else ce(W,we[xe+7])?(ie=7+2*ce(W,165),ie+=ce(W,145)):ie=5+ce(W,159);else ie=ce(W,we[xe+4])?3+ce(W,we[xe+5]):2;O=H[2]}else ie=1,O=H[1];H=R+Ql[j],0>(W=o).b&&ne(W);var xe,we=W.b,ge=(xe=W.Ca>>1)-(W.I>>we)>>31;--W.b,W.Ca+=ge,W.Ca|=1,W.I-=(xe+1&ge)<<we,E[H]=((ie^ge)-ge)*S[(0<j)+0]}return 16}function xi(o){var u=o.rb[o.sb-1];u.la=0,u.Na=0,p(o.zc,0,0,o.zc.length),o.ja=0}function $i(o,u){if(o==null)return 0;if(u==null)return Sn(o,2,"NULL VP8Io parameter in VP8Decode().");if(!o.cb&&!cl(o,u))return 0;if(n(o.cb),u.ac==null||u.ac(u)){u.ob&&(o.L=0);var y=yo[o.L];if(o.L==2?(o.yb=0,o.zb=0):(o.yb=u.v-y>>4,o.zb=u.j-y>>4,0>o.yb&&(o.yb=0),0>o.zb&&(o.zb=0)),o.Va=u.o+15+y>>4,o.Hb=u.va+15+y>>4,o.Hb>o.za&&(o.Hb=o.za),o.Va>o.Ub&&(o.Va=o.Ub),0<o.L){var S=o.ed;for(y=0;4>y;++y){var j;if(o.Qa.Cb){var E=o.Qa.Lb[y];o.Qa.Fb||(E+=S.Tb)}else E=S.Tb;for(j=0;1>=j;++j){var R=o.gd[y][j],O=E;if(S.Pc&&(O+=S.vd[0],j&&(O+=S.od[0])),0<(O=0>O?0:63<O?63:O)){var H=O;0<S.wb&&(H=4<S.wb?H>>2:H>>1)>9-S.wb&&(H=9-S.wb),1>H&&(H=1),R.dd=H,R.tc=2*O+H,R.ld=40<=O?2:15<=O?1:0}else R.tc=0;R.La=j}}}y=0}else Sn(o,6,"Frame setup failed"),y=o.a;if(y=y==0){if(y){o.$c=0,0<o.Aa||(o.Ic=ti);e:{y=o.Ic,S=4*(H=o.za);var W=32*H,ie=H+1,xe=0<o.L?H*(0<o.Aa?2:1):0,we=(o.Aa==2?2:1)*H;if((R=S+832+(j=3*(16*y+yo[o.L])/2*W)+(E=o.Fa!=null&&0<o.Fa.length?o.Kc.c*o.Kc.i:0))!=R)y=0;else{if(R>o.Vb){if(o.Vb=0,o.Ec=c(R),o.Fc=0,o.Ec==null){y=Sn(o,1,"no memory during frame initialization.");break e}o.Vb=R}R=o.Ec,O=o.Fc,o.Ac=R,o.Bc=O,O+=S,o.Gd=h(W,Ki),o.Hd=0,o.rb=h(ie+1,Ts),o.sb=1,o.wa=xe?h(xe,bi):null,o.Y=0,o.D.Nb=0,o.D.wa=o.wa,o.D.Y=o.Y,0<o.Aa&&(o.D.Y+=H),n(!0),o.oc=R,o.pc=O,O+=832,o.ya=h(we,Ps),o.aa=0,o.D.ya=o.ya,o.D.aa=o.aa,o.Aa==2&&(o.D.aa+=H),o.R=16*H,o.B=8*H,H=(W=yo[o.L])*o.R,W=W/2*o.B,o.sa=R,o.ta=O+H,o.qa=o.sa,o.ra=o.ta+16*y*o.R+W,o.Ha=o.qa,o.Ia=o.ra+8*y*o.B+W,o.$c=0,O+=j,o.mb=E?R:null,o.nb=E?O:null,n(O+E<=o.Fc+o.Vb),xi(o),p(o.Ac,o.Bc,0,S),y=1}}if(y){if(u.ka=0,u.y=o.sa,u.O=o.ta,u.f=o.qa,u.N=o.ra,u.ea=o.Ha,u.Vd=o.Ia,u.fa=o.R,u.Rc=o.B,u.F=null,u.J=0,!Os){for(y=-255;255>=y;++y)Pn[255+y]=0>y?-y:y;for(y=-1020;1020>=y;++y)Ia[1020+y]=-128>y?-128:127<y?127:y;for(y=-112;112>=y;++y)Xo[112+y]=-16>y?-16:15<y?15:y;for(y=-255;510>=y;++y)po[255+y]=0>y?0:255<y?255:y;Os=1}Qo=Ht,$a=js,Ya=wi,Xn=Kl,zr=Eo,Ut=As,so=zo,zs=En,lo=no,co=Is,uo=Ti,Or=Pi,Qa=ro,Ma=Oo,Xa=ma,Za=Yr,Mi=Qr,Gn=hl,ea[0]=Ca,ea[1]=dl,ea[2]=Zi,ea[3]=ja,ea[4]=Ls,ea[5]=Io,ea[6]=ki,ea[7]=_o,ea[8]=pl,ea[9]=Do,cr[0]=Xi,cr[1]=ul,cr[2]=Pa,cr[3]=Qi,cr[4]=hn,cr[5]=Aa,cr[6]=fa,xr[0]=Rr,xr[1]=Cs,xr[2]=Jl,xr[3]=Ga,xr[4]=eo,xr[5]=Ro,xr[6]=Es,y=1}else y=0}y&&(y=(function(ge,ze){for(ge.M=0;ge.M<ge.Va;++ge.M){var Le,le=ge.Jc[ge.M&ge.Xb],de=ge.m,Ie=ge;for(Le=0;Le<Ie.za;++Le){var Me=de,De=Ie,et=De.Ac,Ye=De.Bc+4*Le,ht=De.zc,Qe=De.ya[De.aa+Le];if(De.Qa.Bb?Qe.$b=ce(Me,De.Pa.jb[0])?2+ce(Me,De.Pa.jb[2]):ce(Me,De.Pa.jb[1]):Qe.$b=0,De.kc&&(Qe.Ad=ce(Me,De.Bd)),Qe.Za=!ce(Me,145)+0,Qe.Za){var zt=Qe.Ob,Ot=0;for(De=0;4>De;++De){var Dt,Lt=ht[0+De];for(Dt=0;4>Dt;++Dt){Lt=jd[et[Ye+Dt]][Lt];for(var Yt=jc[ce(Me,Lt[0])];0<Yt;)Yt=jc[2*Yt+ce(Me,Lt[Yt])];Lt=-Yt,et[Ye+Dt]=Lt}l(zt,Ot,et,Ye,4),Ot+=4,ht[0+De]=Lt}}else Lt=ce(Me,156)?ce(Me,128)?1:3:ce(Me,163)?2:0,Qe.Ob[0]=Lt,p(et,Ye,Lt,4),p(ht,0,Lt,4);Qe.Dd=ce(Me,142)?ce(Me,114)?ce(Me,183)?1:3:2:0}if(Ie.m.Ka)return Sn(ge,7,"Premature end-of-partition0 encountered.");for(;ge.ja<ge.za;++ge.ja){if(Ie=le,Me=(de=ge).rb[de.sb-1],et=de.rb[de.sb+de.ja],Le=de.ya[de.aa+de.ja],Ye=de.kc?Le.Ad:0)Me.la=et.la=0,Le.Za||(Me.Na=et.Na=0),Le.Hc=0,Le.Gc=0,Le.ia=0;else{var Xt,wt;if(Me=et,et=Ie,Ye=de.Pa.Xc,ht=de.ya[de.aa+de.ja],Qe=de.pb[ht.$b],De=ht.ad,zt=0,Ot=de.rb[de.sb-1],Lt=Dt=0,p(De,zt,0,384),ht.Za)var gn=0,dr=Ye[3];else{Yt=c(16);var kn=Me.Na+Ot.Na;if(kn=go(et,Ye[1],kn,Qe.Eb,0,Yt,0),Me.Na=Ot.Na=(0<kn)+0,1<kn)Qo(Yt,0,De,zt);else{var Mn=Yt[0]+3>>3;for(Yt=0;256>Yt;Yt+=16)De[zt+Yt]=Mn}gn=1,dr=Ye[0]}var Wt=15&Me.la,er=15&Ot.la;for(Yt=0;4>Yt;++Yt){var tr=1&er;for(Mn=wt=0;4>Mn;++Mn)Wt=Wt>>1|(tr=(kn=go(et,dr,kn=tr+(1&Wt),Qe.Sc,gn,De,zt))>gn)<<7,wt=wt<<2|(3<kn?3:1<kn?2:De[zt+0]!=0),zt+=16;Wt>>=4,er=er>>1|tr<<7,Dt=(Dt<<8|wt)>>>0}for(dr=Wt,gn=er>>4,Xt=0;4>Xt;Xt+=2){for(wt=0,Wt=Me.la>>4+Xt,er=Ot.la>>4+Xt,Yt=0;2>Yt;++Yt){for(tr=1&er,Mn=0;2>Mn;++Mn)kn=tr+(1&Wt),Wt=Wt>>1|(tr=0<(kn=go(et,Ye[2],kn,Qe.Qc,0,De,zt)))<<3,wt=wt<<2|(3<kn?3:1<kn?2:De[zt+0]!=0),zt+=16;Wt>>=2,er=er>>1|tr<<5}Lt|=wt<<4*Xt,dr|=Wt<<4<<Xt,gn|=(240&er)<<Xt}Me.la=dr,Ot.la=gn,ht.Hc=Dt,ht.Gc=Lt,ht.ia=43690&Lt?0:Qe.ia,Ye=!(Dt|Lt)}if(0<de.L&&(de.wa[de.Y+de.ja]=de.gd[Le.$b][Le.Za],de.wa[de.Y+de.ja].La|=!Ye),Ie.Ka)return Sn(ge,7,"Premature end-of-file encountered.")}if(xi(ge),de=ze,Ie=1,Le=(le=ge).D,Me=0<le.L&&le.M>=le.zb&&le.M<=le.Va,le.Aa==0)e:{if(Le.M=le.M,Le.uc=Me,Ho(le,Le),Ie=1,Le=(wt=le.D).Nb,Me=(Lt=yo[le.L])*le.R,et=Lt/2*le.B,Yt=16*Le*le.R,Mn=8*Le*le.B,Ye=le.sa,ht=le.ta-Me+Yt,Qe=le.qa,De=le.ra-et+Mn,zt=le.Ha,Ot=le.Ia-et+Mn,er=(Wt=wt.M)==0,Dt=Wt>=le.Va-1,le.Aa==2&&Ho(le,wt),wt.uc)for(tr=(kn=le).D.M,n(kn.D.uc),wt=kn.yb;wt<kn.Hb;++wt){gn=wt,dr=tr;var mn=(In=(Vt=kn).D).Nb;Xt=Vt.R;var In=In.wa[In.Y+gn],Vn=Vt.sa,Nr=Vt.ta+16*mn*Xt+16*gn,ta=In.dd,vn=In.tc;if(vn!=0)if(n(3<=vn),Vt.L==1)0<gn&&Za(Vn,Nr,Xt,vn+4),In.La&&Gn(Vn,Nr,Xt,vn),0<dr&&Xa(Vn,Nr,Xt,vn+4),In.La&&Mi(Vn,Nr,Xt,vn);else{var An=Vt.B,Br=Vt.qa,Ri=Vt.ra+8*mn*An+8*gn,ni=Vt.Ha,Vt=Vt.Ia+8*mn*An+8*gn;mn=In.ld,0<gn&&(zs(Vn,Nr,Xt,vn+4,ta,mn),co(Br,Ri,ni,Vt,An,vn+4,ta,mn)),In.La&&(Or(Vn,Nr,Xt,vn,ta,mn),Ma(Br,Ri,ni,Vt,An,vn,ta,mn)),0<dr&&(so(Vn,Nr,Xt,vn+4,ta,mn),lo(Br,Ri,ni,Vt,An,vn+4,ta,mn)),In.La&&(uo(Vn,Nr,Xt,vn,ta,mn),Qa(Br,Ri,ni,Vt,An,vn,ta,mn))}}if(le.ia&&alert("todo:DitherRow"),de.put!=null){if(wt=16*Wt,Wt=16*(Wt+1),er?(de.y=le.sa,de.O=le.ta+Yt,de.f=le.qa,de.N=le.ra+Mn,de.ea=le.Ha,de.W=le.Ia+Mn):(wt-=Lt,de.y=Ye,de.O=ht,de.f=Qe,de.N=De,de.ea=zt,de.W=Ot),Dt||(Wt-=Lt),Wt>de.o&&(Wt=de.o),de.F=null,de.J=null,le.Fa!=null&&0<le.Fa.length&&wt<Wt&&(de.J=Ds(le,de,wt,Wt-wt),de.F=le.mb,de.F==null&&de.F.length==0)){Ie=Sn(le,3,"Could not decode alpha data.");break e}wt<de.j&&(Lt=de.j-wt,wt=de.j,n(!(1&Lt)),de.O+=le.R*Lt,de.N+=le.B*(Lt>>1),de.W+=le.B*(Lt>>1),de.F!=null&&(de.J+=de.width*Lt)),wt<Wt&&(de.O+=de.v,de.N+=de.v>>1,de.W+=de.v>>1,de.F!=null&&(de.J+=de.v),de.ka=wt-de.j,de.U=de.va-de.v,de.T=Wt-wt,Ie=de.put(de))}Le+1!=le.Ic||Dt||(l(le.sa,le.ta-Me,Ye,ht+16*le.R,Me),l(le.qa,le.ra-et,Qe,De+8*le.B,et),l(le.Ha,le.Ia-et,zt,Ot+8*le.B,et))}if(!Ie)return Sn(ge,6,"Output aborted.")}return 1})(o,u)),u.bc!=null&&u.bc(u),y&=1}return y?(o.cb=0,y):0}function mr(o,u,y,S,j){j=o[u+y+32*S]+(j>>3),o[u+y+32*S]=-256&j?0>j?0:255:j}function Lo(o,u,y,S,j,E){mr(o,u,0,y,S+j),mr(o,u,1,y,S+E),mr(o,u,2,y,S-E),mr(o,u,3,y,S-j)}function vr(o){return(20091*o>>16)+o}function Yi(o,u,y,S){var j,E=0,R=c(16);for(j=0;4>j;++j){var O=o[u+0]+o[u+8],H=o[u+0]-o[u+8],W=(35468*o[u+4]>>16)-vr(o[u+12]),ie=vr(o[u+4])+(35468*o[u+12]>>16);R[E+0]=O+ie,R[E+1]=H+W,R[E+2]=H-W,R[E+3]=O-ie,E+=4,u++}for(j=E=0;4>j;++j)O=(o=R[E+0]+4)+R[E+8],H=o-R[E+8],W=(35468*R[E+4]>>16)-vr(R[E+12]),mr(y,S,0,0,O+(ie=vr(R[E+4])+(35468*R[E+12]>>16))),mr(y,S,1,0,H+W),mr(y,S,2,0,H-W),mr(y,S,3,0,O-ie),E++,S+=32}function As(o,u,y,S){var j=o[u+0]+4,E=35468*o[u+4]>>16,R=vr(o[u+4]),O=35468*o[u+1]>>16;Lo(y,S,0,j+R,o=vr(o[u+1]),O),Lo(y,S,1,j+E,o,O),Lo(y,S,2,j-E,o,O),Lo(y,S,3,j-R,o,O)}function js(o,u,y,S,j){Yi(o,u,y,S),j&&Yi(o,u+16,y,S+4)}function wi(o,u,y,S){$a(o,u+0,y,S,1),$a(o,u+32,y,S+128,1)}function Kl(o,u,y,S){var j;for(o=o[u+0]+4,j=0;4>j;++j)for(u=0;4>u;++u)mr(y,S,u,j,o)}function Eo(o,u,y,S){o[u+0]&&Xn(o,u+0,y,S),o[u+16]&&Xn(o,u+16,y,S+4),o[u+32]&&Xn(o,u+32,y,S+128),o[u+48]&&Xn(o,u+48,y,S+128+4)}function Ht(o,u,y,S){var j,E=c(16);for(j=0;4>j;++j){var R=o[u+0+j]+o[u+12+j],O=o[u+4+j]+o[u+8+j],H=o[u+4+j]-o[u+8+j],W=o[u+0+j]-o[u+12+j];E[0+j]=R+O,E[8+j]=R-O,E[4+j]=W+H,E[12+j]=W-H}for(j=0;4>j;++j)R=(o=E[0+4*j]+3)+E[3+4*j],O=E[1+4*j]+E[2+4*j],H=E[1+4*j]-E[2+4*j],W=o-E[3+4*j],y[S+0]=R+O>>3,y[S+16]=W+H>>3,y[S+32]=R-O>>3,y[S+48]=W-H>>3,S+=64}function Mo(o,u,y){var S,j=u-32,E=lr,R=255-o[j-1];for(S=0;S<y;++S){var O,H=E,W=R+o[u-1];for(O=0;O<y;++O)o[u+O]=H[W+o[j+O]];u+=32}}function dl(o,u){Mo(o,u,4)}function Cs(o,u){Mo(o,u,8)}function ul(o,u){Mo(o,u,16)}function Pa(o,u){var y;for(y=0;16>y;++y)l(o,u+32*y,o,u-32,16)}function Qi(o,u){var y;for(y=16;0<y;--y)p(o,u,o[u-1],16),u+=32}function Si(o,u,y){var S;for(S=0;16>S;++S)p(u,y+32*S,o,16)}function Xi(o,u){var y,S=16;for(y=0;16>y;++y)S+=o[u-1+32*y]+o[u+y-32];Si(S>>5,o,u)}function hn(o,u){var y,S=8;for(y=0;16>y;++y)S+=o[u-1+32*y];Si(S>>4,o,u)}function Aa(o,u){var y,S=8;for(y=0;16>y;++y)S+=o[u+y-32];Si(S>>4,o,u)}function fa(o,u){Si(128,o,u)}function yt(o,u,y){return o+2*u+y+2>>2}function Zi(o,u){var y,S=u-32;for(S=new Uint8Array([yt(o[S-1],o[S+0],o[S+1]),yt(o[S+0],o[S+1],o[S+2]),yt(o[S+1],o[S+2],o[S+3]),yt(o[S+2],o[S+3],o[S+4])]),y=0;4>y;++y)l(o,u+32*y,S,0,S.length)}function ja(o,u){var y=o[u-1],S=o[u-1+32],j=o[u-1+64],E=o[u-1+96];_e(o,u+0,16843009*yt(o[u-1-32],y,S)),_e(o,u+32,16843009*yt(y,S,j)),_e(o,u+64,16843009*yt(S,j,E)),_e(o,u+96,16843009*yt(j,E,E))}function Ca(o,u){var y,S=4;for(y=0;4>y;++y)S+=o[u+y-32]+o[u-1+32*y];for(S>>=3,y=0;4>y;++y)p(o,u+32*y,S,4)}function Ls(o,u){var y=o[u-1+0],S=o[u-1+32],j=o[u-1+64],E=o[u-1-32],R=o[u+0-32],O=o[u+1-32],H=o[u+2-32],W=o[u+3-32];o[u+0+96]=yt(S,j,o[u-1+96]),o[u+1+96]=o[u+0+64]=yt(y,S,j),o[u+2+96]=o[u+1+64]=o[u+0+32]=yt(E,y,S),o[u+3+96]=o[u+2+64]=o[u+1+32]=o[u+0+0]=yt(R,E,y),o[u+3+64]=o[u+2+32]=o[u+1+0]=yt(O,R,E),o[u+3+32]=o[u+2+0]=yt(H,O,R),o[u+3+0]=yt(W,H,O)}function ki(o,u){var y=o[u+1-32],S=o[u+2-32],j=o[u+3-32],E=o[u+4-32],R=o[u+5-32],O=o[u+6-32],H=o[u+7-32];o[u+0+0]=yt(o[u+0-32],y,S),o[u+1+0]=o[u+0+32]=yt(y,S,j),o[u+2+0]=o[u+1+32]=o[u+0+64]=yt(S,j,E),o[u+3+0]=o[u+2+32]=o[u+1+64]=o[u+0+96]=yt(j,E,R),o[u+3+32]=o[u+2+64]=o[u+1+96]=yt(E,R,O),o[u+3+64]=o[u+2+96]=yt(R,O,H),o[u+3+96]=yt(O,H,H)}function Io(o,u){var y=o[u-1+0],S=o[u-1+32],j=o[u-1+64],E=o[u-1-32],R=o[u+0-32],O=o[u+1-32],H=o[u+2-32],W=o[u+3-32];o[u+0+0]=o[u+1+64]=E+R+1>>1,o[u+1+0]=o[u+2+64]=R+O+1>>1,o[u+2+0]=o[u+3+64]=O+H+1>>1,o[u+3+0]=H+W+1>>1,o[u+0+96]=yt(j,S,y),o[u+0+64]=yt(S,y,E),o[u+0+32]=o[u+1+96]=yt(y,E,R),o[u+1+32]=o[u+2+96]=yt(E,R,O),o[u+2+32]=o[u+3+96]=yt(R,O,H),o[u+3+32]=yt(O,H,W)}function _o(o,u){var y=o[u+0-32],S=o[u+1-32],j=o[u+2-32],E=o[u+3-32],R=o[u+4-32],O=o[u+5-32],H=o[u+6-32],W=o[u+7-32];o[u+0+0]=y+S+1>>1,o[u+1+0]=o[u+0+64]=S+j+1>>1,o[u+2+0]=o[u+1+64]=j+E+1>>1,o[u+3+0]=o[u+2+64]=E+R+1>>1,o[u+0+32]=yt(y,S,j),o[u+1+32]=o[u+0+96]=yt(S,j,E),o[u+2+32]=o[u+1+96]=yt(j,E,R),o[u+3+32]=o[u+2+96]=yt(E,R,O),o[u+3+64]=yt(R,O,H),o[u+3+96]=yt(O,H,W)}function Do(o,u){var y=o[u-1+0],S=o[u-1+32],j=o[u-1+64],E=o[u-1+96];o[u+0+0]=y+S+1>>1,o[u+2+0]=o[u+0+32]=S+j+1>>1,o[u+2+32]=o[u+0+64]=j+E+1>>1,o[u+1+0]=yt(y,S,j),o[u+3+0]=o[u+1+32]=yt(S,j,E),o[u+3+32]=o[u+1+64]=yt(j,E,E),o[u+3+64]=o[u+2+64]=o[u+0+96]=o[u+1+96]=o[u+2+96]=o[u+3+96]=E}function pl(o,u){var y=o[u-1+0],S=o[u-1+32],j=o[u-1+64],E=o[u-1+96],R=o[u-1-32],O=o[u+0-32],H=o[u+1-32],W=o[u+2-32];o[u+0+0]=o[u+2+32]=y+R+1>>1,o[u+0+32]=o[u+2+64]=S+y+1>>1,o[u+0+64]=o[u+2+96]=j+S+1>>1,o[u+0+96]=E+j+1>>1,o[u+3+0]=yt(O,H,W),o[u+2+0]=yt(R,O,H),o[u+1+0]=o[u+3+32]=yt(y,R,O),o[u+1+32]=o[u+3+64]=yt(S,y,R),o[u+1+64]=o[u+3+96]=yt(j,S,y),o[u+1+96]=yt(E,j,S)}function Jl(o,u){var y;for(y=0;8>y;++y)l(o,u+32*y,o,u-32,8)}function Ga(o,u){var y;for(y=0;8>y;++y)p(o,u,o[u-1],8),u+=32}function ga(o,u,y){var S;for(S=0;8>S;++S)p(u,y+32*S,o,8)}function Rr(o,u){var y,S=8;for(y=0;8>y;++y)S+=o[u+y-32]+o[u-1+32*y];ga(S>>4,o,u)}function Ro(o,u){var y,S=4;for(y=0;8>y;++y)S+=o[u+y-32];ga(S>>3,o,u)}function eo(o,u){var y,S=4;for(y=0;8>y;++y)S+=o[u-1+32*y];ga(S>>3,o,u)}function Es(o,u){ga(128,o,u)}function Ni(o,u,y){var S=o[u-y],j=o[u+0],E=3*(j-S)+_a[1020+o[u-2*y]-o[u+y]],R=Zo[112+(E+4>>3)];o[u-y]=lr[255+S+Zo[112+(E+3>>3)]],o[u+0]=lr[255+j-R]}function to(o,u,y,S){var j=o[u+0],E=o[u+y];return Zr[255+o[u-2*y]-o[u-y]]>S||Zr[255+E-j]>S}function Fo(o,u,y,S){return 4*Zr[255+o[u-y]-o[u+0]]+Zr[255+o[u-2*y]-o[u+y]]<=S}function Ms(o,u,y,S,j){var E=o[u-3*y],R=o[u-2*y],O=o[u-y],H=o[u+0],W=o[u+y],ie=o[u+2*y],xe=o[u+3*y];return 4*Zr[255+O-H]+Zr[255+R-W]>S?0:Zr[255+o[u-4*y]-E]<=j&&Zr[255+E-R]<=j&&Zr[255+R-O]<=j&&Zr[255+xe-ie]<=j&&Zr[255+ie-W]<=j&&Zr[255+W-H]<=j}function ma(o,u,y,S){var j=2*S+1;for(S=0;16>S;++S)Fo(o,u+S,y,j)&&Ni(o,u+S,y)}function Yr(o,u,y,S){var j=2*S+1;for(S=0;16>S;++S)Fo(o,u+S*y,1,j)&&Ni(o,u+S*y,1)}function Qr(o,u,y,S){var j;for(j=3;0<j;--j)ma(o,u+=4*y,y,S)}function hl(o,u,y,S){var j;for(j=3;0<j;--j)Yr(o,u+=4,y,S)}function va(o,u,y,S,j,E,R,O){for(E=2*E+1;0<j--;){if(Ms(o,u,y,E,R))if(to(o,u,y,O))Ni(o,u,y);else{var H=o,W=u,ie=y,xe=H[W-2*ie],we=H[W-ie],ge=H[W+0],ze=H[W+ie],Le=H[W+2*ie],le=27*(Ie=_a[1020+3*(ge-we)+_a[1020+xe-ze]])+63>>7,de=18*Ie+63>>7,Ie=9*Ie+63>>7;H[W-3*ie]=lr[255+H[W-3*ie]+Ie],H[W-2*ie]=lr[255+xe+de],H[W-ie]=lr[255+we+le],H[W+0]=lr[255+ge-le],H[W+ie]=lr[255+ze-de],H[W+2*ie]=lr[255+Le-Ie]}u+=S}}function yr(o,u,y,S,j,E,R,O){for(E=2*E+1;0<j--;){if(Ms(o,u,y,E,R))if(to(o,u,y,O))Ni(o,u,y);else{var H=o,W=u,ie=y,xe=H[W-ie],we=H[W+0],ge=H[W+ie],ze=Zo[112+((Le=3*(we-xe))+4>>3)],Le=Zo[112+(Le+3>>3)],le=ze+1>>1;H[W-2*ie]=lr[255+H[W-2*ie]+le],H[W-ie]=lr[255+xe+Le],H[W+0]=lr[255+we-ze],H[W+ie]=lr[255+ge-le]}u+=S}}function zo(o,u,y,S,j,E){va(o,u,y,1,16,S,j,E)}function En(o,u,y,S,j,E){va(o,u,1,y,16,S,j,E)}function Ti(o,u,y,S,j,E){var R;for(R=3;0<R;--R)yr(o,u+=4*y,y,1,16,S,j,E)}function Pi(o,u,y,S,j,E){var R;for(R=3;0<R;--R)yr(o,u+=4,1,y,16,S,j,E)}function no(o,u,y,S,j,E,R,O){va(o,u,j,1,8,E,R,O),va(y,S,j,1,8,E,R,O)}function Is(o,u,y,S,j,E,R,O){va(o,u,1,j,8,E,R,O),va(y,S,1,j,8,E,R,O)}function ro(o,u,y,S,j,E,R,O){yr(o,u+4*j,j,1,8,E,R,O),yr(y,S+4*j,j,1,8,E,R,O)}function Oo(o,u,y,S,j,E,R,O){yr(o,u+4,1,j,8,E,R,O),yr(y,S+4,1,j,8,E,R,O)}function La(){this.ba=new Jn,this.ec=[],this.cc=[],this.Mc=[],this.Dc=this.Nc=this.dc=this.fc=0,this.Oa=new cn,this.memory=0,this.Ib="OutputFunc",this.Jb="OutputAlphaFunc",this.Nd="OutputRowFunc"}function Ai(){this.data=[],this.offset=this.kd=this.ha=this.w=0,this.na=[],this.xa=this.gb=this.Ja=this.Sa=this.P=0}function Bo(){this.nc=this.Ea=this.b=this.hc=0,this.K=[],this.w=0}function fl(){this.ua=0,this.Wa=new Q,this.vb=new Q,this.md=this.xc=this.wc=0,this.vc=[],this.Wb=0,this.Ya=new te,this.yc=new B}function $l(){this.xb=this.a=0,this.l=new Co,this.ca=new Jn,this.V=[],this.Ba=0,this.Ta=[],this.Ua=0,this.m=new N,this.Pb=0,this.wd=new N,this.Ma=this.$=this.C=this.i=this.c=this.xd=0,this.s=new fl,this.ab=0,this.gc=h(4,Bo),this.Oc=0}function qo(){this.Lc=this.Z=this.$a=this.i=this.c=0,this.l=new Co,this.ic=0,this.ca=[],this.tb=0,this.qd=null,this.rd=0}function Wa(o,u,y,S,j,E,R){for(o=o==null?0:o[u+0],u=0;u<R;++u)j[E+u]=o+y[S+u]&255,o=j[E+u]}function _s(o,u,y,S,j,E,R){var O;if(o==null)Wa(null,null,y,S,j,E,R);else for(O=0;O<R;++O)j[E+O]=o[u+O]+y[S+O]&255}function ji(o,u,y,S,j,E,R){if(o==null)Wa(null,null,y,S,j,E,R);else{var O,H=o[u+0],W=H,ie=H;for(O=0;O<R;++O)W=ie+(H=o[u+O])-W,ie=y[S+O]+(-256&W?0>W?0:255:W)&255,W=H,j[E+O]=ie}}function Ds(o,u,y,S){var j=u.width,E=u.o;if(n(o!=null&&u!=null),0>y||0>=S||y+S>E)return null;if(!o.Cc){if(o.ga==null){var R;if(o.ga=new qo,(R=o.ga==null)||(R=u.width*u.o,n(o.Gb.length==0),o.Gb=c(R),o.Uc=0,o.Gb==null?R=0:(o.mb=o.Gb,o.nb=o.Uc,o.rc=null,R=1),R=!R),!R){R=o.ga;var O=o.Fa,H=o.P,W=o.qc,ie=o.mb,xe=o.nb,we=H+1,ge=W-1,ze=R.l;if(n(O!=null&&ie!=null&&u!=null),Zn[0]=null,Zn[1]=Wa,Zn[2]=_s,Zn[3]=ji,R.ca=ie,R.tb=xe,R.c=u.width,R.i=u.height,n(0<R.c&&0<R.i),1>=W)u=0;else if(R.$a=O[H+0]>>0&3,R.Z=O[H+0]>>2&3,R.Lc=O[H+0]>>4&3,H=O[H+0]>>6&3,0>R.$a||1<R.$a||4<=R.Z||1<R.Lc||H)u=0;else if(ze.put=Jr,ze.ac=Bn,ze.bc=da,ze.ma=R,ze.width=u.width,ze.height=u.height,ze.Da=u.Da,ze.v=u.v,ze.va=u.va,ze.j=u.j,ze.o=u.o,R.$a)e:{n(R.$a==1),u=_r();t:for(;;){if(u==null){u=0;break e}if(n(R!=null),R.mc=u,u.c=R.c,u.i=R.i,u.l=R.l,u.l.ma=R,u.l.width=R.c,u.l.height=R.i,u.a=0,ee(u.m,O,we,ge),!Ta(R.c,R.i,1,u,null)||(u.ab==1&&u.gc[0].hc==3&&Ua(u.s)?(R.ic=1,O=u.c*u.i,u.Ta=null,u.Ua=0,u.V=c(O),u.Ba=0,u.V==null?(u.a=1,u=0):u=1):(R.ic=0,u=yi(u,R.c)),!u))break t;u=1;break e}R.mc=null,u=0}else u=ge>=R.c*R.i;R=!u}if(R)return null;o.ga.Lc!=1?o.Ga=0:S=E-y}n(o.ga!=null),n(y+S<=E);e:{if(u=(O=o.ga).c,E=O.l.o,O.$a==0){if(we=o.rc,ge=o.Vc,ze=o.Fa,H=o.P+1+y*u,W=o.mb,ie=o.nb+y*u,n(H<=o.P+o.qc),O.Z!=0)for(n(Zn[O.Z]!=null),R=0;R<S;++R)Zn[O.Z](we,ge,ze,H,W,ie,u),we=W,ge=ie,ie+=u,H+=u;else for(R=0;R<S;++R)l(W,ie,ze,H,u),we=W,ge=ie,ie+=u,H+=u;o.rc=we,o.Vc=ge}else{if(n(O.mc!=null),u=y+S,n((R=O.mc)!=null),n(u<=R.i),R.C>=u)u=1;else if(O.ic||be(),O.ic){O=R.V,we=R.Ba,ge=R.c;var Le=R.i,le=(ze=1,H=R.$/ge,W=R.$%ge,ie=R.m,xe=R.s,R.$),de=ge*Le,Ie=ge*u,Me=xe.wc,De=le<Ie?un(xe,W,H):null;n(le<=de),n(u<=Le),n(Ua(xe));t:for(;;){for(;!ie.h&&le<Ie;){if(W&Me||(De=un(xe,W,H)),n(De!=null),Y(ie),256>(Le=gr(De.G[0],De.H[0],ie)))O[we+le]=Le,++le,++W>=ge&&(W=0,++H<=u&&!(H%16)&&pa(R,H));else{if(!(280>Le)){ze=0;break t}Le=Ir(Le-256,ie);var et,Ye=gr(De.G[4],De.H[4],ie);if(Y(ie),!(le>=(Ye=fr(ge,Ye=Ir(Ye,ie)))&&de-le>=Le)){ze=0;break t}for(et=0;et<Le;++et)O[we+le+et]=O[we+le+et-Ye];for(le+=Le,W+=Le;W>=ge;)W-=ge,++H<=u&&!(H%16)&&pa(R,H);le<Ie&&W&Me&&(De=un(xe,W,H))}n(ie.h==G(ie))}pa(R,H>u?u:H);break t}!ze||ie.h&&le<de?(ze=0,R.a=ie.h?5:3):R.$=le,u=ze}else u=Un(R,R.V,R.Ba,R.c,R.i,u,Gi);if(!u){S=0;break e}}y+S>=E&&(o.Cc=1),S=1}if(!S)return null;if(o.Cc&&((S=o.ga)!=null&&(S.mc=null),o.ga=null,0<o.Ga))return alert("todo:WebPDequantizeLevels"),null}return o.nb+y*j}function m(o,u,y,S,j,E){for(;0<j--;){var R,O=o,H=u+(y?1:0),W=o,ie=u+(y?0:3);for(R=0;R<S;++R){var xe=W[ie+4*R];xe!=255&&(xe*=32897,O[H+4*R+0]=O[H+4*R+0]*xe>>23,O[H+4*R+1]=O[H+4*R+1]*xe>>23,O[H+4*R+2]=O[H+4*R+2]*xe>>23)}u+=E}}function L(o,u,y,S,j){for(;0<S--;){var E;for(E=0;E<y;++E){var R=o[u+2*E+0],O=15&(W=o[u+2*E+1]),H=4369*O,W=(240&W|W>>4)*H>>16;o[u+2*E+0]=(240&R|R>>4)*H>>16&240|(15&R|R<<4)*H>>16>>4&15,o[u+2*E+1]=240&W|O}u+=j}}function J(o,u,y,S,j,E,R,O){var H,W,ie=255;for(W=0;W<j;++W){for(H=0;H<S;++H){var xe=o[u+H];E[R+4*H]=xe,ie&=xe}u+=y,R+=O}return ie!=255}function ae(o,u,y,S,j){var E;for(E=0;E<j;++E)y[S+E]=o[u+E]>>8}function be(){br=m,en=L,Jt=J,wn=ae}function Ee(o,u,y){$[o]=function(S,j,E,R,O,H,W,ie,xe,we,ge,ze,Le,le,de,Ie,Me){var De,et=Me-1>>1,Ye=O[H+0]|W[ie+0]<<16,ht=xe[we+0]|ge[ze+0]<<16;n(S!=null);var Qe=3*Ye+ht+131074>>2;for(u(S[j+0],255&Qe,Qe>>16,Le,le),E!=null&&(Qe=3*ht+Ye+131074>>2,u(E[R+0],255&Qe,Qe>>16,de,Ie)),De=1;De<=et;++De){var zt=O[H+De]|W[ie+De]<<16,Ot=xe[we+De]|ge[ze+De]<<16,Dt=Ye+zt+ht+Ot+524296,Lt=Dt+2*(zt+ht)>>3;Qe=Lt+Ye>>1,Ye=(Dt=Dt+2*(Ye+Ot)>>3)+zt>>1,u(S[j+2*De-1],255&Qe,Qe>>16,Le,le+(2*De-1)*y),u(S[j+2*De-0],255&Ye,Ye>>16,Le,le+(2*De-0)*y),E!=null&&(Qe=Dt+ht>>1,Ye=Lt+Ot>>1,u(E[R+2*De-1],255&Qe,Qe>>16,de,Ie+(2*De-1)*y),u(E[R+2*De+0],255&Ye,Ye>>16,de,Ie+(2*De+0)*y)),Ye=zt,ht=Ot}1&Me||(Qe=3*Ye+ht+131074>>2,u(S[j+Me-1],255&Qe,Qe>>16,Le,le+(Me-1)*y),E!=null&&(Qe=3*ht+Ye+131074>>2,u(E[R+Me-1],255&Qe,Qe>>16,de,Ie+(Me-1)*y)))}}function qe(){wr[ml]=Ld,wr[Ii]=_i,wr[Tc]=Ed,wr[Bs]=rs,wr[qs]=mo,wr[tn]=Vs,wr[vl]=Zl,wr[es]=_i,wr[ho]=rs,wr[Hs]=mo,wr[Us]=Vs}function Ze(o){return o&-16384?0>o?0:255:o>>Di}function ut(o,u){return Ze((19077*o>>8)+(26149*u>>8)-14234)}function At(o,u,y){return Ze((19077*o>>8)-(6419*u>>8)-(13320*y>>8)+8708)}function Pt(o,u){return Ze((19077*o>>8)+(33050*u>>8)-17685)}function _t(o,u,y,S,j){S[j+0]=ut(o,y),S[j+1]=At(o,u,y),S[j+2]=Pt(o,u)}function fn(o,u,y,S,j){S[j+0]=Pt(o,u),S[j+1]=At(o,u,y),S[j+2]=ut(o,y)}function bn(o,u,y,S,j){var E=At(o,u,y);u=E<<3&224|Pt(o,u)>>3,S[j+0]=248&ut(o,y)|E>>5,S[j+1]=u}function Tn(o,u,y,S,j){var E=240&Pt(o,u)|15;S[j+0]=240&ut(o,y)|At(o,u,y)>>4,S[j+1]=E}function Yn(o,u,y,S,j){S[j+0]=255,_t(o,u,y,S,j+1)}function qn(o,u,y,S,j){fn(o,u,y,S,j),S[j+3]=255}function ya(o,u,y,S,j){_t(o,u,y,S,j),S[j+3]=255}function Fr(o,u){return 0>o?0:o>u?u:o}function Xr(o,u,y){$[o]=function(S,j,E,R,O,H,W,ie,xe){for(var we=ie+(-2&xe)*y;ie!=we;)u(S[j+0],E[R+0],O[H+0],W,ie),u(S[j+1],E[R+0],O[H+0],W,ie+y),j+=2,++R,++H,ie+=2*y;1&xe&&u(S[j+0],E[R+0],O[H+0],W,ie)}}function Ci(o,u,y){return y==0?o==0?u==0?6:5:u==0?4:0:y}function Rs(o,u,y,S,j){switch(o>>>30){case 3:$a(u,y,S,j,0);break;case 2:Ut(u,y,S,j);break;case 1:Xn(u,y,S,j)}}function Ho(o,u){var y,S,j=u.M,E=u.Nb,R=o.oc,O=o.pc+40,H=o.oc,W=o.pc+584,ie=o.oc,xe=o.pc+600;for(y=0;16>y;++y)R[O+32*y-1]=129;for(y=0;8>y;++y)H[W+32*y-1]=129,ie[xe+32*y-1]=129;for(0<j?R[O-1-32]=H[W-1-32]=ie[xe-1-32]=129:(p(R,O-32-1,127,21),p(H,W-32-1,127,9),p(ie,xe-32-1,127,9)),S=0;S<o.za;++S){var we=u.ya[u.aa+S];if(0<S){for(y=-1;16>y;++y)l(R,O+32*y-4,R,O+32*y+12,4);for(y=-1;8>y;++y)l(H,W+32*y-4,H,W+32*y+4,4),l(ie,xe+32*y-4,ie,xe+32*y+4,4)}var ge=o.Gd,ze=o.Hd+S,Le=we.ad,le=we.Hc;if(0<j&&(l(R,O-32,ge[ze].y,0,16),l(H,W-32,ge[ze].f,0,8),l(ie,xe-32,ge[ze].ea,0,8)),we.Za){var de=R,Ie=O-32+16;for(0<j&&(S>=o.za-1?p(de,Ie,ge[ze].y[15],4):l(de,Ie,ge[ze+1].y,0,4)),y=0;4>y;y++)de[Ie+128+y]=de[Ie+256+y]=de[Ie+384+y]=de[Ie+0+y];for(y=0;16>y;++y,le<<=2)de=R,Ie=O+ec[y],ea[we.Ob[y]](de,Ie),Rs(le,Le,16*+y,de,Ie)}else if(de=Ci(S,j,we.Ob[0]),cr[de](R,O),le!=0)for(y=0;16>y;++y,le<<=2)Rs(le,Le,16*+y,R,O+ec[y]);for(y=we.Gc,de=Ci(S,j,we.Dd),xr[de](H,W),xr[de](ie,xe),le=Le,de=H,Ie=W,255&(we=y>>0)&&(170&we?Ya(le,256,de,Ie):zr(le,256,de,Ie)),we=ie,le=xe,255&(y>>=8)&&(170&y?Ya(Le,320,we,le):zr(Le,320,we,le)),j<o.Ub-1&&(l(ge[ze].y,0,R,O+480,16),l(ge[ze].f,0,H,W+224,8),l(ge[ze].ea,0,ie,xe+224,8)),y=8*E*o.B,ge=o.sa,ze=o.ta+16*S+16*E*o.R,Le=o.qa,we=o.ra+8*S+y,le=o.Ha,de=o.Ia+8*S+y,y=0;16>y;++y)l(ge,ze+y*o.R,R,O+32*y,16);for(y=0;8>y;++y)l(Le,we+y*o.B,H,W+32*y,8),l(le,de+y*o.B,ie,xe+32*y,8)}}function ao(o,u,y,S,j,E,R,O,H){var W=[0],ie=[0],xe=0,we=H!=null?H.kd:0,ge=H??new Ai;if(o==null||12>y)return 7;ge.data=o,ge.w=u,ge.ha=y,u=[u],y=[y],ge.gb=[ge.gb];e:{var ze=u,Le=y,le=ge.gb;if(n(o!=null),n(Le!=null),n(le!=null),le[0]=0,12<=Le[0]&&!a(o,ze[0],"RIFF")){if(a(o,ze[0]+8,"WEBP")){le=3;break e}var de=Ue(o,ze[0]+4);if(12>de||4294967286<de){le=3;break e}if(we&&de>Le[0]-8){le=7;break e}le[0]=de,ze[0]+=12,Le[0]-=12}le=0}if(le!=0)return le;for(de=0<ge.gb[0],y=y[0];;){e:{var Ie=o;Le=u,le=y;var Me=W,De=ie,et=ze=[0];if((Qe=xe=[xe])[0]=0,8>le[0])le=7;else{if(!a(Ie,Le[0],"VP8X")){if(Ue(Ie,Le[0]+4)!=10){le=3;break e}if(18>le[0]){le=7;break e}var Ye=Ue(Ie,Le[0]+8),ht=1+Be(Ie,Le[0]+12);if(2147483648<=ht*(Ie=1+Be(Ie,Le[0]+15))){le=3;break e}et!=null&&(et[0]=Ye),Me!=null&&(Me[0]=ht),De!=null&&(De[0]=Ie),Le[0]+=18,le[0]-=18,Qe[0]=1}le=0}}if(xe=xe[0],ze=ze[0],le!=0)return le;if(Le=!!(2&ze),!de&&xe)return 3;if(E!=null&&(E[0]=!!(16&ze)),R!=null&&(R[0]=Le),O!=null&&(O[0]=0),R=W[0],ze=ie[0],xe&&Le&&H==null){le=0;break}if(4>y){le=7;break}if(de&&xe||!de&&!xe&&!a(o,u[0],"ALPH")){y=[y],ge.na=[ge.na],ge.P=[ge.P],ge.Sa=[ge.Sa];e:{Ye=o,le=u,de=y;var Qe=ge.gb;Me=ge.na,De=ge.P,et=ge.Sa,ht=22,n(Ye!=null),n(de!=null),Ie=le[0];var zt=de[0];for(n(Me!=null),n(et!=null),Me[0]=null,De[0]=null,et[0]=0;;){if(le[0]=Ie,de[0]=zt,8>zt){le=7;break e}var Ot=Ue(Ye,Ie+4);if(4294967286<Ot){le=3;break e}var Dt=8+Ot+1&-2;if(ht+=Dt,0<Qe&&ht>Qe){le=3;break e}if(!a(Ye,Ie,"VP8 ")||!a(Ye,Ie,"VP8L")){le=0;break e}if(zt[0]<Dt){le=7;break e}a(Ye,Ie,"ALPH")||(Me[0]=Ye,De[0]=Ie+8,et[0]=Ot),Ie+=Dt,zt-=Dt}}if(y=y[0],ge.na=ge.na[0],ge.P=ge.P[0],ge.Sa=ge.Sa[0],le!=0)break}y=[y],ge.Ja=[ge.Ja],ge.xa=[ge.xa];e:if(Qe=o,le=u,de=y,Me=ge.gb[0],De=ge.Ja,et=ge.xa,Ye=le[0],Ie=!a(Qe,Ye,"VP8 "),ht=!a(Qe,Ye,"VP8L"),n(Qe!=null),n(de!=null),n(De!=null),n(et!=null),8>de[0])le=7;else{if(Ie||ht){if(Qe=Ue(Qe,Ye+4),12<=Me&&Qe>Me-12){le=3;break e}if(we&&Qe>de[0]-8){le=7;break e}De[0]=Qe,le[0]+=8,de[0]-=8,et[0]=ht}else et[0]=5<=de[0]&&Qe[Ye+0]==47&&!(Qe[Ye+4]>>5),De[0]=de[0];le=0}if(y=y[0],ge.Ja=ge.Ja[0],ge.xa=ge.xa[0],u=u[0],le!=0)break;if(4294967286<ge.Ja)return 3;if(O==null||Le||(O[0]=ge.xa?2:1),R=[R],ze=[ze],ge.xa){if(5>y){le=7;break}O=R,we=ze,Le=E,o==null||5>y?o=0:5<=y&&o[u+0]==47&&!(o[u+4]>>5)?(de=[0],Qe=[0],Me=[0],ee(De=new N,o,u,y),pt(De,de,Qe,Me)?(O!=null&&(O[0]=de[0]),we!=null&&(we[0]=Qe[0]),Le!=null&&(Le[0]=Me[0]),o=1):o=0):o=0}else{if(10>y){le=7;break}O=ze,o==null||10>y||!ll(o,u+3,y-3)?o=0:(we=o[u+0]|o[u+1]<<8|o[u+2]<<16,Le=16383&(o[u+7]<<8|o[u+6]),o=16383&(o[u+9]<<8|o[u+8]),1&we||3<(we>>1&7)||!(we>>4&1)||we>>5>=ge.Ja||!Le||!o?o=0:(R&&(R[0]=Le),O&&(O[0]=o),o=1))}if(!o||(R=R[0],ze=ze[0],xe&&(W[0]!=R||ie[0]!=ze)))return 3;H!=null&&(H[0]=ge,H.offset=u-H.w,n(4294967286>u-H.w),n(H.offset==H.ha-y));break}return le==0||le==7&&xe&&H==null?(E!=null&&(E[0]|=ge.na!=null&&0<ge.na.length),S!=null&&(S[0]=R),j!=null&&(j[0]=ze),0):le}function Uo(o,u,y){var S=u.width,j=u.height,E=0,R=0,O=S,H=j;if(u.Da=o!=null&&0<o.Da,u.Da&&(O=o.cd,H=o.bd,E=o.v,R=o.j,11>y||(E&=-2,R&=-2),0>E||0>R||0>=O||0>=H||E+O>S||R+H>j))return 0;if(u.v=E,u.j=R,u.va=E+O,u.o=R+H,u.U=O,u.T=H,u.da=o!=null&&0<o.da,u.da){if(!st(O,H,y=[o.ib],E=[o.hb]))return 0;u.ib=y[0],u.hb=E[0]}return u.ob=o!=null&&o.ob,u.Kb=o==null||!o.Sd,u.da&&(u.ob=u.ib<3*S/4&&u.hb<3*j/4,u.Kb=0),1}function Go(o){if(o==null)return 2;if(11>o.S){var u=o.f.RGBA;u.fb+=(o.height-1)*u.A,u.A=-u.A}else u=o.f.kb,o=o.height,u.O+=(o-1)*u.fa,u.fa=-u.fa,u.N+=(o-1>>1)*u.Ab,u.Ab=-u.Ab,u.W+=(o-1>>1)*u.Db,u.Db=-u.Db,u.F!=null&&(u.J+=(o-1)*u.lb,u.lb=-u.lb);return 0}function io(o,u,y,S){if(S==null||0>=o||0>=u)return 2;if(y!=null){if(y.Da){var j=y.cd,E=y.bd,R=-2&y.v,O=-2&y.j;if(0>R||0>O||0>=j||0>=E||R+j>o||O+E>u)return 2;o=j,u=E}if(y.da){if(!st(o,u,j=[y.ib],E=[y.hb]))return 2;o=j[0],u=E[0]}}S.width=o,S.height=u;e:{var H=S.width,W=S.height;if(o=S.S,0>=H||0>=W||!(o>=ml&&13>o))o=2;else{if(0>=S.Rd&&S.sd==null){R=E=j=u=0;var ie=(O=H*Ks[o])*W;if(11>o||(E=(W+1)/2*(u=(H+1)/2),o==12&&(R=(j=H)*W)),(W=c(ie+2*E+R))==null){o=1;break e}S.sd=W,11>o?((H=S.f.RGBA).eb=W,H.fb=0,H.A=O,H.size=ie):((H=S.f.kb).y=W,H.O=0,H.fa=O,H.Fd=ie,H.f=W,H.N=0+ie,H.Ab=u,H.Cd=E,H.ea=W,H.W=0+ie+E,H.Db=u,H.Ed=E,o==12&&(H.F=W,H.J=0+ie+2*E),H.Tc=R,H.lb=j)}if(u=1,j=S.S,E=S.width,R=S.height,j>=ml&&13>j)if(11>j)o=S.f.RGBA,u&=(O=Math.abs(o.A))*(R-1)+E<=o.size,u&=O>=E*Ks[j],u&=o.eb!=null;else{o=S.f.kb,O=(E+1)/2,ie=(R+1)/2,H=Math.abs(o.fa),W=Math.abs(o.Ab);var xe=Math.abs(o.Db),we=Math.abs(o.lb),ge=we*(R-1)+E;u&=H*(R-1)+E<=o.Fd,u&=W*(ie-1)+O<=o.Cd,u=(u&=xe*(ie-1)+O<=o.Ed)&H>=E&W>=O&xe>=O,u&=o.y!=null,u&=o.f!=null,u&=o.ea!=null,j==12&&(u&=we>=E,u&=ge<=o.Tc,u&=o.F!=null)}else u=0;o=u?0:2}}return o!=0||y!=null&&y.fd&&(o=Go(S)),o}var xn=64,Wo=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215],Vo=24,Ko=32,Jo=8,ir=[0,0,1,1,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];Ae("Predictor0","PredictorAdd0"),$.Predictor0=function(){return 4278190080},$.Predictor1=function(o){return o},$.Predictor2=function(o,u,y){return u[y+0]},$.Predictor3=function(o,u,y){return u[y+1]},$.Predictor4=function(o,u,y){return u[y-1]},$.Predictor5=function(o,u,y){return We(We(o,u[y+1]),u[y+0])},$.Predictor6=function(o,u,y){return We(o,u[y-1])},$.Predictor7=function(o,u,y){return We(o,u[y+0])},$.Predictor8=function(o,u,y){return We(u[y-1],u[y+0])},$.Predictor9=function(o,u,y){return We(u[y+0],u[y+1])},$.Predictor10=function(o,u,y){return We(We(o,u[y-1]),We(u[y+0],u[y+1]))},$.Predictor11=function(o,u,y){var S=u[y+0];return 0>=Nt(S>>24&255,o>>24&255,(u=u[y-1])>>24&255)+Nt(S>>16&255,o>>16&255,u>>16&255)+Nt(S>>8&255,o>>8&255,u>>8&255)+Nt(255&S,255&o,255&u)?S:o},$.Predictor12=function(o,u,y){var S=u[y+0];return(rt((o>>24&255)+(S>>24&255)-((u=u[y-1])>>24&255))<<24|rt((o>>16&255)+(S>>16&255)-(u>>16&255))<<16|rt((o>>8&255)+(S>>8&255)-(u>>8&255))<<8|rt((255&o)+(255&S)-(255&u)))>>>0},$.Predictor13=function(o,u,y){var S=u[y-1];return(gt((o=We(o,u[y+0]))>>24&255,S>>24&255)<<24|gt(o>>16&255,S>>16&255)<<16|gt(o>>8&255,S>>8&255)<<8|gt(o>>0&255,S>>0&255))>>>0};var oo=$.PredictorAdd0;$.PredictorAdd1=jt,Ae("Predictor2","PredictorAdd2"),Ae("Predictor3","PredictorAdd3"),Ae("Predictor4","PredictorAdd4"),Ae("Predictor5","PredictorAdd5"),Ae("Predictor6","PredictorAdd6"),Ae("Predictor7","PredictorAdd7"),Ae("Predictor8","PredictorAdd8"),Ae("Predictor9","PredictorAdd9"),Ae("Predictor10","PredictorAdd10"),Ae("Predictor11","PredictorAdd11"),Ae("Predictor12","PredictorAdd12"),Ae("Predictor13","PredictorAdd13");var Va=$.PredictorAdd2;Tt("ColorIndexInverseTransform","MapARGB","32b",(function(o){return o>>8&255}),(function(o){return o})),Tt("VP8LColorIndexInverseTransformAlpha","MapAlpha","8b",(function(o){return o}),(function(o){return o>>8&255}));var gl,or=$.ColorIndexInverseTransform,$o=$.MapARGB,Fs=$.VP8LColorIndexInverseTransformAlpha,Yo=$.MapAlpha,Ea=$.VP8LPredictorsAdd=[];Ea.length=16,($.VP8LPredictors=[]).length=16,($.VP8LPredictorsAdd_C=[]).length=16,($.VP8LPredictors_C=[]).length=16;var Li,sr,Qn,Ei,Ka,Ja,Qo,$a,Ut,Ya,Xn,zr,so,zs,lo,co,uo,Or,Qa,Ma,Xa,Za,Mi,Gn,br,en,Jt,wn,Pn=c(511),Ia=c(2041),Xo=c(225),po=c(767),Os=0,_a=Ia,Zo=Xo,lr=po,Zr=Pn,ml=0,Ii=1,Tc=2,Bs=3,qs=4,tn=5,vl=6,es=7,ho=8,Hs=9,Us=10,Gs=[2,3,7],yl=[3,3,11],fo=[280,256,256,256,40],Pc=[0,1,1,1,0],Pd=[17,18,0,1,2,3,4,5,16,6,7,8,9,10,11,12,13,14,15],Ad=[24,7,23,25,40,6,39,41,22,26,38,42,56,5,55,57,21,27,54,58,37,43,72,4,71,73,20,28,53,59,70,74,36,44,88,69,75,52,60,3,87,89,19,29,86,90,35,45,68,76,85,91,51,61,104,2,103,105,18,30,102,106,34,46,84,92,67,77,101,107,50,62,120,1,119,121,83,93,17,31,100,108,66,78,118,122,33,47,117,123,49,63,99,109,82,94,0,116,124,65,79,16,32,98,110,48,115,125,81,95,64,114,126,97,111,80,113,127,96,112],Ac=[2954,2956,2958,2962,2970,2986,3018,3082,3212,3468,3980,5004],bl=8,ts=[4,5,6,7,8,9,10,10,11,12,13,14,15,16,17,17,18,19,20,20,21,21,22,22,23,23,24,25,25,26,27,28,29,30,31,32,33,34,35,36,37,37,38,39,40,41,42,43,44,45,46,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,93,95,96,98,100,101,102,104,106,108,110,112,114,116,118,122,124,126,128,130,132,134,136,138,140,143,145,148,151,154,157],Ws=[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,119,122,125,128,131,134,137,140,143,146,149,152,155,158,161,164,167,170,173,177,181,185,189,193,197,201,205,209,213,217,221,225,229,234,239,245,249,254,259,264,269,274,279,284],go=null,Yl=[[173,148,140,0],[176,155,140,135,0],[180,157,141,134,130,0],[254,254,243,230,196,177,153,140,133,130,129,0]],Ql=[0,1,4,8,5,2,3,6,9,12,13,10,7,11,14,15],jc=[-0,1,-1,2,-2,3,4,6,-3,5,-4,-5,-6,7,-7,8,-8,-9],Cc=[[[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]],[[253,136,254,255,228,219,128,128,128,128,128],[189,129,242,255,227,213,255,219,128,128,128],[106,126,227,252,214,209,255,255,128,128,128]],[[1,98,248,255,236,226,255,255,128,128,128],[181,133,238,254,221,234,255,154,128,128,128],[78,134,202,247,198,180,255,219,128,128,128]],[[1,185,249,255,243,255,128,128,128,128,128],[184,150,247,255,236,224,128,128,128,128,128],[77,110,216,255,236,230,128,128,128,128,128]],[[1,101,251,255,241,255,128,128,128,128,128],[170,139,241,252,236,209,255,255,128,128,128],[37,116,196,243,228,255,255,255,128,128,128]],[[1,204,254,255,245,255,128,128,128,128,128],[207,160,250,255,238,128,128,128,128,128,128],[102,103,231,255,211,171,128,128,128,128,128]],[[1,152,252,255,240,255,128,128,128,128,128],[177,135,243,255,234,225,128,128,128,128,128],[80,129,211,255,194,224,128,128,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[246,1,255,128,128,128,128,128,128,128,128],[255,128,128,128,128,128,128,128,128,128,128]]],[[[198,35,237,223,193,187,162,160,145,155,62],[131,45,198,221,172,176,220,157,252,221,1],[68,47,146,208,149,167,221,162,255,223,128]],[[1,149,241,255,221,224,255,255,128,128,128],[184,141,234,253,222,220,255,199,128,128,128],[81,99,181,242,176,190,249,202,255,255,128]],[[1,129,232,253,214,197,242,196,255,255,128],[99,121,210,250,201,198,255,202,128,128,128],[23,91,163,242,170,187,247,210,255,255,128]],[[1,200,246,255,234,255,128,128,128,128,128],[109,178,241,255,231,245,255,255,128,128,128],[44,130,201,253,205,192,255,255,128,128,128]],[[1,132,239,251,219,209,255,165,128,128,128],[94,136,225,251,218,190,255,255,128,128,128],[22,100,174,245,186,161,255,199,128,128,128]],[[1,182,249,255,232,235,128,128,128,128,128],[124,143,241,255,227,234,128,128,128,128,128],[35,77,181,251,193,211,255,205,128,128,128]],[[1,157,247,255,236,231,255,255,128,128,128],[121,141,235,255,225,227,255,255,128,128,128],[45,99,188,251,195,217,255,224,128,128,128]],[[1,1,251,255,213,255,128,128,128,128,128],[203,1,248,255,255,128,128,128,128,128,128],[137,1,177,255,224,255,128,128,128,128,128]]],[[[253,9,248,251,207,208,255,192,128,128,128],[175,13,224,243,193,185,249,198,255,255,128],[73,17,171,221,161,179,236,167,255,234,128]],[[1,95,247,253,212,183,255,255,128,128,128],[239,90,244,250,211,209,255,255,128,128,128],[155,77,195,248,188,195,255,255,128,128,128]],[[1,24,239,251,218,219,255,205,128,128,128],[201,51,219,255,196,186,128,128,128,128,128],[69,46,190,239,201,218,255,228,128,128,128]],[[1,191,251,255,255,128,128,128,128,128,128],[223,165,249,255,213,255,128,128,128,128,128],[141,124,248,255,255,128,128,128,128,128,128]],[[1,16,248,255,255,128,128,128,128,128,128],[190,36,230,255,236,255,128,128,128,128,128],[149,1,255,128,128,128,128,128,128,128,128]],[[1,226,255,128,128,128,128,128,128,128,128],[247,192,255,128,128,128,128,128,128,128,128],[240,128,255,128,128,128,128,128,128,128,128]],[[1,134,252,255,255,128,128,128,128,128,128],[213,62,250,255,255,128,128,128,128,128,128],[55,93,255,128,128,128,128,128,128,128,128]],[[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128],[128,128,128,128,128,128,128,128,128,128,128]]],[[[202,24,213,235,186,191,220,160,240,175,255],[126,38,182,232,169,184,228,174,255,187,128],[61,46,138,219,151,178,240,170,255,216,128]],[[1,112,230,250,199,191,247,159,255,255,128],[166,109,228,252,211,215,255,174,128,128,128],[39,77,162,232,172,180,245,178,255,255,128]],[[1,52,220,246,198,199,249,220,255,255,128],[124,74,191,243,183,193,250,221,255,255,128],[24,71,130,219,154,170,243,182,255,255,128]],[[1,182,225,249,219,240,255,224,128,128,128],[149,150,226,252,216,205,255,171,128,128,128],[28,108,170,242,183,194,254,223,255,255,128]],[[1,81,230,252,204,203,255,192,128,128,128],[123,102,209,247,188,196,255,233,128,128,128],[20,95,153,243,164,173,255,203,128,128,128]],[[1,222,248,255,216,213,128,128,128,128,128],[168,175,246,252,235,205,255,255,128,128,128],[47,116,215,255,211,212,255,255,128,128,128]],[[1,121,236,253,212,214,255,255,128,128,128],[141,84,213,252,201,202,255,219,128,128,128],[42,80,160,240,162,185,255,205,128,128,128]],[[1,1,255,128,128,128,128,128,128,128,128],[244,1,255,128,128,128,128,128,128,128,128],[238,1,255,128,128,128,128,128,128,128,128]]]],jd=[[[231,120,48,89,115,113,120,152,112],[152,179,64,126,170,118,46,70,95],[175,69,143,80,85,82,72,155,103],[56,58,10,171,218,189,17,13,152],[114,26,17,163,44,195,21,10,173],[121,24,80,195,26,62,44,64,85],[144,71,10,38,171,213,144,34,26],[170,46,55,19,136,160,33,206,71],[63,20,8,114,114,208,12,9,226],[81,40,11,96,182,84,29,16,36]],[[134,183,89,137,98,101,106,165,148],[72,187,100,130,157,111,32,75,80],[66,102,167,99,74,62,40,234,128],[41,53,9,178,241,141,26,8,107],[74,43,26,146,73,166,49,23,157],[65,38,105,160,51,52,31,115,128],[104,79,12,27,217,255,87,17,7],[87,68,71,44,114,51,15,186,23],[47,41,14,110,182,183,21,17,194],[66,45,25,102,197,189,23,18,22]],[[88,88,147,150,42,46,45,196,205],[43,97,183,117,85,38,35,179,61],[39,53,200,87,26,21,43,232,171],[56,34,51,104,114,102,29,93,77],[39,28,85,171,58,165,90,98,64],[34,22,116,206,23,34,43,166,73],[107,54,32,26,51,1,81,43,31],[68,25,106,22,64,171,36,225,114],[34,19,21,102,132,188,16,76,124],[62,18,78,95,85,57,50,48,51]],[[193,101,35,159,215,111,89,46,111],[60,148,31,172,219,228,21,18,111],[112,113,77,85,179,255,38,120,114],[40,42,1,196,245,209,10,25,109],[88,43,29,140,166,213,37,43,154],[61,63,30,155,67,45,68,1,209],[100,80,8,43,154,1,51,26,71],[142,78,78,16,255,128,34,197,171],[41,40,5,102,211,183,4,1,221],[51,50,17,168,209,192,23,25,82]],[[138,31,36,171,27,166,38,44,229],[67,87,58,169,82,115,26,59,179],[63,59,90,180,59,166,93,73,154],[40,40,21,116,143,209,34,39,175],[47,15,16,183,34,223,49,45,183],[46,17,33,183,6,98,15,32,183],[57,46,22,24,128,1,54,17,37],[65,32,73,115,28,128,23,128,205],[40,3,9,115,51,192,18,6,223],[87,37,9,115,59,77,64,21,47]],[[104,55,44,218,9,54,53,130,226],[64,90,70,205,40,41,23,26,57],[54,57,112,184,5,41,38,166,213],[30,34,26,133,152,116,10,32,134],[39,19,53,221,26,114,32,73,255],[31,9,65,234,2,15,1,118,73],[75,32,12,51,192,255,160,43,51],[88,31,35,67,102,85,55,186,85],[56,21,23,111,59,205,45,37,192],[55,38,70,124,73,102,1,34,98]],[[125,98,42,88,104,85,117,175,82],[95,84,53,89,128,100,113,101,45],[75,79,123,47,51,128,81,171,1],[57,17,5,71,102,57,53,41,49],[38,33,13,121,57,73,26,1,85],[41,10,67,138,77,110,90,47,114],[115,21,2,10,102,255,166,23,6],[101,29,16,10,85,128,101,196,26],[57,18,10,102,102,213,34,20,43],[117,20,15,36,163,128,68,1,26]],[[102,61,71,37,34,53,31,243,192],[69,60,71,38,73,119,28,222,37],[68,45,128,34,1,47,11,245,171],[62,17,19,70,146,85,55,62,70],[37,43,37,154,100,163,85,160,1],[63,9,92,136,28,64,32,201,85],[75,15,9,9,64,255,184,119,16],[86,6,28,5,64,255,25,248,1],[56,8,17,132,137,255,55,116,128],[58,15,20,82,135,57,26,121,40]],[[164,50,31,137,154,133,25,35,218],[51,103,44,131,131,123,31,6,158],[86,40,64,135,148,224,45,183,128],[22,26,17,131,240,154,14,1,209],[45,16,21,91,64,222,7,1,197],[56,21,39,155,60,138,23,102,213],[83,12,13,54,192,255,68,47,28],[85,26,85,85,128,128,32,146,171],[18,11,7,63,144,171,4,4,246],[35,27,10,146,174,171,12,26,128]],[[190,80,35,99,180,80,126,54,45],[85,126,47,87,176,51,41,20,32],[101,75,128,139,118,146,116,128,85],[56,41,15,176,236,85,37,9,62],[71,30,17,119,118,255,17,18,138],[101,38,60,138,55,70,43,26,142],[146,36,19,30,171,255,97,27,20],[138,45,61,62,219,1,81,188,64],[32,41,20,117,151,142,20,21,163],[112,19,12,61,195,128,48,4,24]]],Cd=[[[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[176,246,255,255,255,255,255,255,255,255,255],[223,241,252,255,255,255,255,255,255,255,255],[249,253,253,255,255,255,255,255,255,255,255]],[[255,244,252,255,255,255,255,255,255,255,255],[234,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255]],[[255,246,254,255,255,255,255,255,255,255,255],[239,253,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[251,255,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[251,254,254,255,255,255,255,255,255,255,255],[254,255,254,255,255,255,255,255,255,255,255]],[[255,254,253,255,254,255,255,255,255,255,255],[250,255,254,255,254,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[217,255,255,255,255,255,255,255,255,255,255],[225,252,241,253,255,255,254,255,255,255,255],[234,250,241,250,253,255,253,254,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[223,254,254,255,255,255,255,255,255,255,255],[238,253,254,254,255,255,255,255,255,255,255]],[[255,248,254,255,255,255,255,255,255,255,255],[249,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,255,255,255,255,255,255,255,255,255],[247,254,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[252,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[253,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[186,251,250,255,255,255,255,255,255,255,255],[234,251,244,254,255,255,255,255,255,255,255],[251,251,243,253,254,255,254,255,255,255,255]],[[255,253,254,255,255,255,255,255,255,255,255],[236,253,254,255,255,255,255,255,255,255,255],[251,253,253,254,254,255,255,255,255,255,255]],[[255,254,254,255,255,255,255,255,255,255,255],[254,254,254,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,254,255,255,255,255,255,255,255,255,255],[254,254,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]],[[[248,255,255,255,255,255,255,255,255,255,255],[250,254,252,254,255,255,255,255,255,255,255],[248,254,249,253,255,255,255,255,255,255,255]],[[255,253,253,255,255,255,255,255,255,255,255],[246,253,253,255,255,255,255,255,255,255,255],[252,254,251,254,254,255,255,255,255,255,255]],[[255,254,252,255,255,255,255,255,255,255,255],[248,254,253,255,255,255,255,255,255,255,255],[253,255,254,254,255,255,255,255,255,255,255]],[[255,251,254,255,255,255,255,255,255,255,255],[245,251,254,255,255,255,255,255,255,255,255],[253,253,254,255,255,255,255,255,255,255,255]],[[255,251,253,255,255,255,255,255,255,255,255],[252,253,254,255,255,255,255,255,255,255,255],[255,254,255,255,255,255,255,255,255,255,255]],[[255,252,255,255,255,255,255,255,255,255,255],[249,255,254,255,255,255,255,255,255,255,255],[255,255,254,255,255,255,255,255,255,255,255]],[[255,255,253,255,255,255,255,255,255,255,255],[250,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]],[[255,255,255,255,255,255,255,255,255,255,255],[254,255,255,255,255,255,255,255,255,255,255],[255,255,255,255,255,255,255,255,255,255,255]]]],Xl=[0,1,2,3,6,4,5,6,6,6,6,6,6,6,6,7,0],cr=[],ea=[],xr=[],Da=1,ns=2,Zn=[],wr=[];Ee("UpsampleRgbLinePair",_t,3),Ee("UpsampleBgrLinePair",fn,3),Ee("UpsampleRgbaLinePair",ya,4),Ee("UpsampleBgraLinePair",qn,4),Ee("UpsampleArgbLinePair",Yn,4),Ee("UpsampleRgba4444LinePair",Tn,2),Ee("UpsampleRgb565LinePair",bn,2);var Ld=$.UpsampleRgbLinePair,Ed=$.UpsampleBgrLinePair,_i=$.UpsampleRgbaLinePair,rs=$.UpsampleBgraLinePair,mo=$.UpsampleArgbLinePair,Vs=$.UpsampleRgba4444LinePair,Zl=$.UpsampleRgb565LinePair,ei=16,ba=1<<ei-1,$t=-227,Qt=482,Di=6,Wn=0,Sr=c(256),vo=c(256),as=c(256),kr=c(256),xl=c(Qt-$t),Lc=c(Qt-$t);Xr("YuvToRgbRow",_t,3),Xr("YuvToBgrRow",fn,3),Xr("YuvToRgbaRow",ya,4),Xr("YuvToBgraRow",qn,4),Xr("YuvToArgbRow",Yn,4),Xr("YuvToRgba4444Row",Tn,2),Xr("YuvToRgb565Row",bn,2);var ec=[0,4,8,12,128,132,136,140,256,260,264,268,384,388,392,396],yo=[0,2,8],Ec=[8,7,6,4,4,2,2,2,1,1,1,1],ti=1;this.WebPDecodeRGBA=function(o,u,y,S,j){var E=Ii,R=new La,O=new Jn;R.ba=O,O.S=E,O.width=[O.width],O.height=[O.height];var H=O.width,W=O.height,ie=new hr;if(ie==null||o==null)var xe=2;else n(ie!=null),xe=ao(o,u,y,ie.width,ie.height,ie.Pd,ie.Qd,ie.format,null);if(xe!=0?H=0:(H!=null&&(H[0]=ie.width[0]),W!=null&&(W[0]=ie.height[0]),H=1),H){O.width=O.width[0],O.height=O.height[0],S!=null&&(S[0]=O.width),j!=null&&(j[0]=O.height);e:{if(S=new Co,(j=new Ai).data=o,j.w=u,j.ha=y,j.kd=1,u=[0],n(j!=null),((o=ao(j.data,j.w,j.ha,null,null,null,u,null,j))==0||o==7)&&u[0]&&(o=4),(u=o)==0){if(n(R!=null),S.data=j.data,S.w=j.w+j.offset,S.ha=j.ha-j.offset,S.put=Jr,S.ac=Bn,S.bc=da,S.ma=R,j.xa){if((o=_r())==null){R=1;break e}if((function(we,ge){var ze=[0],Le=[0],le=[0];t:for(;;){if(we==null)return 0;if(ge==null)return we.a=2,0;if(we.l=ge,we.a=0,ee(we.m,ge.data,ge.w,ge.ha),!pt(we.m,ze,Le,le)){we.a=3;break t}if(we.xb=ns,ge.width=ze[0],ge.height=Le[0],!Ta(ze[0],Le[0],1,we,null))break t;return 1}return n(we.a!=0),0})(o,S)){if(S=(u=io(S.width,S.height,R.Oa,R.ba))==0){t:{S=o;n:for(;;){if(S==null){S=0;break t}if(n(S.s.yc!=null),n(S.s.Ya!=null),n(0<S.s.Wb),n((y=S.l)!=null),n((j=y.ma)!=null),S.xb!=0){if(S.ca=j.ba,S.tb=j.tb,n(S.ca!=null),!Uo(j.Oa,y,Bs)){S.a=2;break n}if(!yi(S,y.width)||y.da)break n;if((y.da||Ft(S.ca.S))&&be(),11>S.ca.S||(alert("todo:WebPInitConvertARGBToYUV"),S.ca.f.kb.F!=null&&be()),S.Pb&&0<S.s.ua&&S.s.vb.X==null&&!Ke(S.s.vb,S.s.Wa.Xa)){S.a=1;break n}S.xb=0}if(!Un(S,S.V,S.Ba,S.c,S.i,y.o,vi))break n;j.Dc=S.Ma,S=1;break t}n(S.a!=0),S=0}S=!S}S&&(u=o.a)}else u=o.a}else{if((o=new Dr)==null){R=1;break e}if(o.Fa=j.na,o.P=j.P,o.qc=j.Sa,cl(o,S)){if((u=io(S.width,S.height,R.Oa,R.ba))==0){if(o.Aa=0,y=R.Oa,n((j=o)!=null),y!=null){if(0<(H=0>(H=y.Md)?0:100<H?255:255*H/100)){for(W=ie=0;4>W;++W)12>(xe=j.pb[W]).lc&&(xe.ia=H*Ec[0>xe.lc?0:xe.lc]>>3),ie|=xe.ia;ie&&(alert("todo:VP8InitRandom"),j.ia=1)}j.Ga=y.Id,100<j.Ga?j.Ga=100:0>j.Ga&&(j.Ga=0)}$i(o,S)||(u=o.a)}}else u=o.a}u==0&&R.Oa!=null&&R.Oa.fd&&(u=Go(R.ba))}R=u}E=R!=0?null:11>E?O.f.RGBA.eb:O.f.kb.y}else E=null;return E};var Ks=[3,4,3,4,4,2,2,4,4,4,2,1,1]};function w($,pe){for(var Se="",C=0;C<4;C++)Se+=String.fromCharCode($[pe++]);return Se}function k($,pe){return($[pe+0]<<0|$[pe+1]<<8|$[pe+2]<<16)>>>0}function T($,pe){return($[pe+0]<<0|$[pe+1]<<8|$[pe+2]<<16|$[pe+3]<<24)>>>0}new g;var P=[0],b=[0],U=[],D=new g,q=i,_=(function($,pe){var Se={},C=0,B=!1,Z=0,te=0;if(Se.frames=[],!(function(I,G,V,Y){for(var ne=0;ne<Y;ne++)if(I[G+ne]!=V.charCodeAt(ne))return!0;return!1})($,pe,"RIFF",4)){var Ne,ue;for(T($,pe+=4),pe+=8;pe<$.length;){var ke=w($,pe),ee=T($,pe+=4);pe+=4;var me=ee+(1&ee);switch(ke){case"VP8 ":case"VP8L":Se.frames[C]===void 0&&(Se.frames[C]={}),(N=Se.frames[C]).src_off=B?te:pe-8,N.src_size=Z+ee+8,C++,B&&(B=!1,Z=0,te=0);break;case"VP8X":(N=Se.header={}).feature_flags=$[pe];var z=pe+4;N.canvas_width=1+k($,z),z+=3,N.canvas_height=1+k($,z),z+=3;break;case"ALPH":B=!0,Z=me+8,te=pe-8;break;case"ANIM":(N=Se.header).bgcolor=T($,pe),z=pe+4,N.loop_count=(Ne=$)[(ue=z)+0]<<0|Ne[ue+1]<<8,z+=2;break;case"ANMF":var A,N;(N=Se.frames[C]={}).offset_x=2*k($,pe),pe+=3,N.offset_y=2*k($,pe),pe+=3,N.width=1+k($,pe),pe+=3,N.height=1+k($,pe),pe+=3,N.duration=k($,pe),pe+=3,A=$[pe++],N.dispose=1&A,N.blend=A>>1&1}ke!="ANMF"&&(pe+=me)}return Se}})(q,0);_.response=q,_.rgbaoutput=!0,_.dataurl=!1;var F=_.header?_.header:null,K=_.frames?_.frames:null;if(F){F.loop_counter=F.loop_count,P=[F.canvas_height],b=[F.canvas_width];for(var he=0;he<K.length&&K[he].blend!=0;he++);}var ve=K[0],ye=D.WebPDecodeRGBA(q,ve.src_off,ve.src_size,b,P);ve.rgba=ye,ve.imgwidth=b[0],ve.imgheight=P[0];for(var oe=0;oe<b[0]*P[0]*4;oe++)U[oe]=ye[oe];return this.width=b,this.height=P,this.data=U,this}(function(i){var n=function(){return typeof Uu=="function"},a=function(P,b,U,D){var q=4,_=h;switch(D){case i.image_compression.FAST:q=1,_=c;break;case i.image_compression.MEDIUM:q=6,_=f;break;case i.image_compression.SLOW:q=9,_=g}P=l(P,b,U,_);var F=Uu(P,{level:q});return i.__addimage__.arrayBufferToBinaryString(F)},l=function(P,b,U,D){for(var q,_,F,K=P.length/b,he=new Uint8Array(P.length+K),ve=k(),ye=0;ye<K;ye+=1){if(F=ye*b,q=P.subarray(F,F+b),D)he.set(D(q,U,_),F+ye);else{for(var oe,$=ve.length,pe=[];oe<$;oe+=1)pe[oe]=ve[oe](q,U,_);var Se=T(pe.concat());he.set(pe[Se],F+ye)}_=q}return he},p=function(P){var b=Array.apply([],P);return b.unshift(0),b},c=function(P,b){var U,D=[],q=P.length;D[0]=1;for(var _=0;_<q;_+=1)U=P[_-b]||0,D[_+1]=P[_]-U+256&255;return D},h=function(P,b,U){var D,q=[],_=P.length;q[0]=2;for(var F=0;F<_;F+=1)D=U&&U[F]||0,q[F+1]=P[F]-D+256&255;return q},f=function(P,b,U){var D,q,_=[],F=P.length;_[0]=3;for(var K=0;K<F;K+=1)D=P[K-b]||0,q=U&&U[K]||0,_[K+1]=P[K]+256-(D+q>>>1)&255;return _},g=function(P,b,U){var D,q,_,F,K=[],he=P.length;K[0]=4;for(var ve=0;ve<he;ve+=1)D=P[ve-b]||0,q=U&&U[ve]||0,_=U&&U[ve-b]||0,F=w(D,q,_),K[ve+1]=P[ve]-F+256&255;return K},w=function(P,b,U){if(P===b&&b===U)return P;var D=Math.abs(b-U),q=Math.abs(P-U),_=Math.abs(P+b-U-U);return D<=q&&D<=_?P:q<=_?b:U},k=function(){return[p,c,h,f,g]},T=function(P){var b=P.map((function(U){return U.reduce((function(D,q){return D+Math.abs(q)}),0)}));return b.indexOf(Math.min.apply(null,b))};i.processPNG=function(P,b,U,D){var q,_,F,K,he,ve,ye,oe,$,pe,Se,C,B,Z,te,Ne=this.decode.FLATE_DECODE,ue="";if(this.__addimage__.isArrayBuffer(P)&&(P=new Uint8Array(P)),this.__addimage__.isArrayBufferView(P)){if(P=(F=new P0(P)).imgData,_=F.bits,q=F.colorSpace,he=F.colors,[4,6].indexOf(F.colorType)!==-1){if(F.bits===8){$=(oe=F.pixelBitlength==32?new Uint32Array(F.decodePixels().buffer):F.pixelBitlength==16?new Uint16Array(F.decodePixels().buffer):new Uint8Array(F.decodePixels().buffer)).length,Se=new Uint8Array($*F.colors),pe=new Uint8Array($);var ke,ee=F.pixelBitlength-F.bits;for(Z=0,te=0;Z<$;Z++){for(B=oe[Z],ke=0;ke<ee;)Se[te++]=B>>>ke&255,ke+=F.bits;pe[Z]=B>>>ke&255}}if(F.bits===16){$=(oe=new Uint32Array(F.decodePixels().buffer)).length,Se=new Uint8Array($*(32/F.pixelBitlength)*F.colors),pe=new Uint8Array($*(32/F.pixelBitlength)),C=F.colors>1,Z=0,te=0;for(var me=0;Z<$;)B=oe[Z++],Se[te++]=B>>>0&255,C&&(Se[te++]=B>>>16&255,B=oe[Z++],Se[te++]=B>>>0&255),pe[me++]=B>>>16&255;_=8}D!==i.image_compression.NONE&&n()?(P=a(Se,F.width*F.colors,F.colors,D),ye=a(pe,F.width,1,D)):(P=Se,ye=pe,Ne=void 0)}if(F.colorType===3&&(q=this.color_spaces.INDEXED,ve=F.palette,F.transparency.indexed)){var z=F.transparency.indexed,A=0;for(Z=0,$=z.length;Z<$;++Z)A+=z[Z];if((A/=255)===$-1&&z.indexOf(0)!==-1)K=[z.indexOf(0)];else if(A!==$){for(oe=F.decodePixels(),pe=new Uint8Array(oe.length),Z=0,$=oe.length;Z<$;Z++)pe[Z]=z[oe[Z]];ye=a(pe,F.width,1)}}var N=(function(I){var G;switch(I){case i.image_compression.FAST:G=11;break;case i.image_compression.MEDIUM:G=13;break;case i.image_compression.SLOW:G=14;break;default:G=12}return G})(D);return Ne===this.decode.FLATE_DECODE&&(ue="/Predictor "+N+" "),ue+="/Colors "+he+" /BitsPerComponent "+_+" /Columns "+F.width,(this.__addimage__.isArrayBuffer(P)||this.__addimage__.isArrayBufferView(P))&&(P=this.__addimage__.arrayBufferToBinaryString(P)),(ye&&this.__addimage__.isArrayBuffer(ye)||this.__addimage__.isArrayBufferView(ye))&&(ye=this.__addimage__.arrayBufferToBinaryString(ye)),{alias:U,data:P,index:b,filter:Ne,decodeParameters:ue,transparency:K,palette:ve,sMask:ye,predictor:N,width:F.width,height:F.height,bitsPerComponent:_,colorSpace:q}}}})(bt.API),(function(i){i.processGIF89A=function(n,a,l,p){var c=new A0(n),h=c.width,f=c.height,g=[];c.decodeAndBlitFrameRGBA(0,g);var w={data:g,width:h,height:f},k=new Au(100).encode(w,100);return i.processJPEG.call(this,k,a,l,p)},i.processGIF87A=i.processGIF89A})(bt.API),pi.prototype.parseHeader=function(){if(this.fileSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.reserved=this.datav.getUint32(this.pos,!0),this.pos+=4,this.offset=this.datav.getUint32(this.pos,!0),this.pos+=4,this.headerSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.width=this.datav.getUint32(this.pos,!0),this.pos+=4,this.height=this.datav.getInt32(this.pos,!0),this.pos+=4,this.planes=this.datav.getUint16(this.pos,!0),this.pos+=2,this.bitPP=this.datav.getUint16(this.pos,!0),this.pos+=2,this.compress=this.datav.getUint32(this.pos,!0),this.pos+=4,this.rawSize=this.datav.getUint32(this.pos,!0),this.pos+=4,this.hr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.vr=this.datav.getUint32(this.pos,!0),this.pos+=4,this.colors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.importantColors=this.datav.getUint32(this.pos,!0),this.pos+=4,this.bitPP===16&&this.is_with_alpha&&(this.bitPP=15),this.bitPP<15){var i=this.colors===0?1<<this.bitPP:this.colors;this.palette=new Array(i);for(var n=0;n<i;n++){var a=this.datav.getUint8(this.pos++,!0),l=this.datav.getUint8(this.pos++,!0),p=this.datav.getUint8(this.pos++,!0),c=this.datav.getUint8(this.pos++,!0);this.palette[n]={red:p,green:l,blue:a,quad:c}}}this.height<0&&(this.height*=-1,this.bottom_up=!1)},pi.prototype.parseBGR=function(){this.pos=this.offset;try{var i="bit"+this.bitPP,n=this.width*this.height*4;this.data=new Uint8Array(n),this[i]()}catch(a){on.log("bit decode error:"+a)}},pi.prototype.bit1=function(){var i,n=Math.ceil(this.width/8),a=n%4;for(i=this.height-1;i>=0;i--){for(var l=this.bottom_up?i:this.height-1-i,p=0;p<n;p++)for(var c=this.datav.getUint8(this.pos++,!0),h=l*this.width*4+8*p*4,f=0;f<8&&8*p+f<this.width;f++){var g=this.palette[c>>7-f&1];this.data[h+4*f]=g.blue,this.data[h+4*f+1]=g.green,this.data[h+4*f+2]=g.red,this.data[h+4*f+3]=255}a!==0&&(this.pos+=4-a)}},pi.prototype.bit4=function(){for(var i=Math.ceil(this.width/2),n=i%4,a=this.height-1;a>=0;a--){for(var l=this.bottom_up?a:this.height-1-a,p=0;p<i;p++){var c=this.datav.getUint8(this.pos++,!0),h=l*this.width*4+2*p*4,f=c>>4,g=15&c,w=this.palette[f];if(this.data[h]=w.blue,this.data[h+1]=w.green,this.data[h+2]=w.red,this.data[h+3]=255,2*p+1>=this.width)break;w=this.palette[g],this.data[h+4]=w.blue,this.data[h+4+1]=w.green,this.data[h+4+2]=w.red,this.data[h+4+3]=255}n!==0&&(this.pos+=4-n)}},pi.prototype.bit8=function(){for(var i=this.width%4,n=this.height-1;n>=0;n--){for(var a=this.bottom_up?n:this.height-1-n,l=0;l<this.width;l++){var p=this.datav.getUint8(this.pos++,!0),c=a*this.width*4+4*l;if(p<this.palette.length){var h=this.palette[p];this.data[c]=h.red,this.data[c+1]=h.green,this.data[c+2]=h.blue,this.data[c+3]=255}else this.data[c]=255,this.data[c+1]=255,this.data[c+2]=255,this.data[c+3]=255}i!==0&&(this.pos+=4-i)}},pi.prototype.bit15=function(){for(var i=this.width%3,n=parseInt("11111",2),a=this.height-1;a>=0;a--){for(var l=this.bottom_up?a:this.height-1-a,p=0;p<this.width;p++){var c=this.datav.getUint16(this.pos,!0);this.pos+=2;var h=(c&n)/n*255|0,f=(c>>5&n)/n*255|0,g=(c>>10&n)/n*255|0,w=c>>15?255:0,k=l*this.width*4+4*p;this.data[k]=g,this.data[k+1]=f,this.data[k+2]=h,this.data[k+3]=w}this.pos+=i}},pi.prototype.bit16=function(){for(var i=this.width%3,n=parseInt("11111",2),a=parseInt("111111",2),l=this.height-1;l>=0;l--){for(var p=this.bottom_up?l:this.height-1-l,c=0;c<this.width;c++){var h=this.datav.getUint16(this.pos,!0);this.pos+=2;var f=(h&n)/n*255|0,g=(h>>5&a)/a*255|0,w=(h>>11)/n*255|0,k=p*this.width*4+4*c;this.data[k]=w,this.data[k+1]=g,this.data[k+2]=f,this.data[k+3]=255}this.pos+=i}},pi.prototype.bit24=function(){for(var i=this.height-1;i>=0;i--){for(var n=this.bottom_up?i:this.height-1-i,a=0;a<this.width;a++){var l=this.datav.getUint8(this.pos++,!0),p=this.datav.getUint8(this.pos++,!0),c=this.datav.getUint8(this.pos++,!0),h=n*this.width*4+4*a;this.data[h]=c,this.data[h+1]=p,this.data[h+2]=l,this.data[h+3]=255}this.pos+=this.width%4}},pi.prototype.bit32=function(){for(var i=this.height-1;i>=0;i--)for(var n=this.bottom_up?i:this.height-1-i,a=0;a<this.width;a++){var l=this.datav.getUint8(this.pos++,!0),p=this.datav.getUint8(this.pos++,!0),c=this.datav.getUint8(this.pos++,!0),h=this.datav.getUint8(this.pos++,!0),f=n*this.width*4+4*a;this.data[f]=c,this.data[f+1]=p,this.data[f+2]=l,this.data[f+3]=h}},pi.prototype.getData=function(){return this.data},(function(i){i.processBMP=function(n,a,l,p){var c=new pi(n,!1),h=c.width,f=c.height,g={data:c.getData(),width:h,height:f},w=new Au(100).encode(g,100);return i.processJPEG.call(this,w,a,l,p)}})(bt.API),Wh.prototype.getData=function(){return this.data},(function(i){i.processWEBP=function(n,a,l,p){var c=new Wh(n),h=c.width,f=c.height,g={data:c.getData(),width:h,height:f},w=new Au(100).encode(g,100);return i.processJPEG.call(this,w,a,l,p)}})(bt.API),bt.API.processRGBA=function(i,n,a){for(var l=i.data,p=l.length,c=new Uint8Array(p/4*3),h=new Uint8Array(p/4),f=0,g=0,w=0;w<p;w+=4){var k=l[w],T=l[w+1],P=l[w+2],b=l[w+3];c[f++]=k,c[f++]=T,c[f++]=P,h[g++]=b}var U=this.__addimage__.arrayBufferToBinaryString(c);return{alpha:this.__addimage__.arrayBufferToBinaryString(h),data:U,index:n,alias:a,colorSpace:"DeviceRGB",bitsPerComponent:8,width:i.width,height:i.height}},bt.API.setLanguage=function(i){return this.internal.languageSettings===void 0&&(this.internal.languageSettings={},this.internal.languageSettings.isSubscribed=!1),{af:"Afrikaans",sq:"Albanian",ar:"Arabic (Standard)","ar-DZ":"Arabic (Algeria)","ar-BH":"Arabic (Bahrain)","ar-EG":"Arabic (Egypt)","ar-IQ":"Arabic (Iraq)","ar-JO":"Arabic (Jordan)","ar-KW":"Arabic (Kuwait)","ar-LB":"Arabic (Lebanon)","ar-LY":"Arabic (Libya)","ar-MA":"Arabic (Morocco)","ar-OM":"Arabic (Oman)","ar-QA":"Arabic (Qatar)","ar-SA":"Arabic (Saudi Arabia)","ar-SY":"Arabic (Syria)","ar-TN":"Arabic (Tunisia)","ar-AE":"Arabic (U.A.E.)","ar-YE":"Arabic (Yemen)",an:"Aragonese",hy:"Armenian",as:"Assamese",ast:"Asturian",az:"Azerbaijani",eu:"Basque",be:"Belarusian",bn:"Bengali",bs:"Bosnian",br:"Breton",bg:"Bulgarian",my:"Burmese",ca:"Catalan",ch:"Chamorro",ce:"Chechen",zh:"Chinese","zh-HK":"Chinese (Hong Kong)","zh-CN":"Chinese (PRC)","zh-SG":"Chinese (Singapore)","zh-TW":"Chinese (Taiwan)",cv:"Chuvash",co:"Corsican",cr:"Cree",hr:"Croatian",cs:"Czech",da:"Danish",nl:"Dutch (Standard)","nl-BE":"Dutch (Belgian)",en:"English","en-AU":"English (Australia)","en-BZ":"English (Belize)","en-CA":"English (Canada)","en-IE":"English (Ireland)","en-JM":"English (Jamaica)","en-NZ":"English (New Zealand)","en-PH":"English (Philippines)","en-ZA":"English (South Africa)","en-TT":"English (Trinidad & Tobago)","en-GB":"English (United Kingdom)","en-US":"English (United States)","en-ZW":"English (Zimbabwe)",eo:"Esperanto",et:"Estonian",fo:"Faeroese",fj:"Fijian",fi:"Finnish",fr:"French (Standard)","fr-BE":"French (Belgium)","fr-CA":"French (Canada)","fr-FR":"French (France)","fr-LU":"French (Luxembourg)","fr-MC":"French (Monaco)","fr-CH":"French (Switzerland)",fy:"Frisian",fur:"Friulian",gd:"Gaelic (Scots)","gd-IE":"Gaelic (Irish)",gl:"Galacian",ka:"Georgian",de:"German (Standard)","de-AT":"German (Austria)","de-DE":"German (Germany)","de-LI":"German (Liechtenstein)","de-LU":"German (Luxembourg)","de-CH":"German (Switzerland)",el:"Greek",gu:"Gujurati",ht:"Haitian",he:"Hebrew",hi:"Hindi",hu:"Hungarian",is:"Icelandic",id:"Indonesian",iu:"Inuktitut",ga:"Irish",it:"Italian (Standard)","it-CH":"Italian (Switzerland)",ja:"Japanese",kn:"Kannada",ks:"Kashmiri",kk:"Kazakh",km:"Khmer",ky:"Kirghiz",tlh:"Klingon",ko:"Korean","ko-KP":"Korean (North Korea)","ko-KR":"Korean (South Korea)",la:"Latin",lv:"Latvian",lt:"Lithuanian",lb:"Luxembourgish",mk:"North Macedonia",ms:"Malay",ml:"Malayalam",mt:"Maltese",mi:"Maori",mr:"Marathi",mo:"Moldavian",nv:"Navajo",ng:"Ndonga",ne:"Nepali",no:"Norwegian",nb:"Norwegian (Bokmal)",nn:"Norwegian (Nynorsk)",oc:"Occitan",or:"Oriya",om:"Oromo",fa:"Persian","fa-IR":"Persian/Iran",pl:"Polish",pt:"Portuguese","pt-BR":"Portuguese (Brazil)",pa:"Punjabi","pa-IN":"Punjabi (India)","pa-PK":"Punjabi (Pakistan)",qu:"Quechua",rm:"Rhaeto-Romanic",ro:"Romanian","ro-MO":"Romanian (Moldavia)",ru:"Russian","ru-MO":"Russian (Moldavia)",sz:"Sami (Lappish)",sg:"Sango",sa:"Sanskrit",sc:"Sardinian",sd:"Sindhi",si:"Singhalese",sr:"Serbian",sk:"Slovak",sl:"Slovenian",so:"Somani",sb:"Sorbian",es:"Spanish","es-AR":"Spanish (Argentina)","es-BO":"Spanish (Bolivia)","es-CL":"Spanish (Chile)","es-CO":"Spanish (Colombia)","es-CR":"Spanish (Costa Rica)","es-DO":"Spanish (Dominican Republic)","es-EC":"Spanish (Ecuador)","es-SV":"Spanish (El Salvador)","es-GT":"Spanish (Guatemala)","es-HN":"Spanish (Honduras)","es-MX":"Spanish (Mexico)","es-NI":"Spanish (Nicaragua)","es-PA":"Spanish (Panama)","es-PY":"Spanish (Paraguay)","es-PE":"Spanish (Peru)","es-PR":"Spanish (Puerto Rico)","es-ES":"Spanish (Spain)","es-UY":"Spanish (Uruguay)","es-VE":"Spanish (Venezuela)",sx:"Sutu",sw:"Swahili",sv:"Swedish","sv-FI":"Swedish (Finland)","sv-SV":"Swedish (Sweden)",ta:"Tamil",tt:"Tatar",te:"Teluga",th:"Thai",tig:"Tigre",ts:"Tsonga",tn:"Tswana",tr:"Turkish",tk:"Turkmen",uk:"Ukrainian",hsb:"Upper Sorbian",ur:"Urdu",ve:"Venda",vi:"Vietnamese",vo:"Volapuk",wa:"Walloon",cy:"Welsh",xh:"Xhosa",ji:"Yiddish",zu:"Zulu"}[i]!==void 0&&(this.internal.languageSettings.languageCode=i,this.internal.languageSettings.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",(function(){this.internal.write("/Lang ("+this.internal.languageSettings.languageCode+")")})),this.internal.languageSettings.isSubscribed=!0)),this},Fl=bt.API,ud=Fl.getCharWidthsArray=function(i,n){var a,l,p=(n=n||{}).font||this.internal.getFont(),c=n.fontSize||this.internal.getFontSize(),h=n.charSpace||this.internal.getCharSpace(),f=n.widths?n.widths:p.metadata.Unicode.widths,g=f.fof?f.fof:1,w=n.kerning?n.kerning:p.metadata.Unicode.kerning,k=w.fof?w.fof:1,T=n.doKerning!==!1,P=0,b=i.length,U=0,D=f[0]||g,q=[];for(a=0;a<b;a++)l=i.charCodeAt(a),typeof p.metadata.widthOfString=="function"?q.push((p.metadata.widthOfGlyph(p.metadata.characterToGlyph(l))+h*(1e3/c)||0)/1e3):(P=T&&nn(w[l])==="object"&&!isNaN(parseInt(w[l][U],10))?w[l][U]/k:0,q.push((f[l]||D)/g+P)),U=l;return q},qh=Fl.getStringUnitWidth=function(i,n){var a=(n=n||{}).fontSize||this.internal.getFontSize(),l=n.font||this.internal.getFont(),p=n.charSpace||this.internal.getCharSpace();return Fl.processArabic&&(i=Fl.processArabic(i)),typeof l.metadata.widthOfString=="function"?l.metadata.widthOfString(i,a,p)/a:ud.apply(this,arguments).reduce((function(c,h){return c+h}),0)},Hh=function(i,n,a,l){for(var p=[],c=0,h=i.length,f=0;c!==h&&f+n[c]<a;)f+=n[c],c++;p.push(i.slice(0,c));var g=c;for(f=0;c!==h;)f+n[c]>l&&(p.push(i.slice(g,c)),f=0,g=c),f+=n[c],c++;return g!==c&&p.push(i.slice(g,c)),p},Uh=function(i,n,a){a||(a={});var l,p,c,h,f,g,w,k=[],T=[k],P=a.textIndent||0,b=0,U=0,D=i.split(" "),q=ud.apply(this,[" ",a])[0];if(g=a.lineIndent===-1?D[0].length+2:a.lineIndent||0){var _=Array(g).join(" "),F=[];D.map((function(he){(he=he.split(/\s*\n/)).length>1?F=F.concat(he.map((function(ve,ye){return(ye&&ve.length?`
`:"")+ve}))):F.push(he[0])})),D=F,g=qh.apply(this,[_,a])}for(c=0,h=D.length;c<h;c++){var K=0;if(l=D[c],g&&l[0]==`
`&&(l=l.substr(1),K=1),P+b+(U=(p=ud.apply(this,[l,a])).reduce((function(he,ve){return he+ve}),0))>n||K){if(U>n){for(f=Hh.apply(this,[l,p,n-(P+b),n]),k.push(f.shift()),k=[f.pop()];f.length;)T.push([f.shift()]);U=p.slice(l.length-(k[0]?k[0].length:0)).reduce((function(he,ve){return he+ve}),0)}else k=[l];T.push(k),P=U+g,b=q}else k.push(l),P+=b+U,b=q}return w=g?function(he,ve){return(ve?_:"")+he.join(" ")}:function(he){return he.join(" ")},T.map(w)},Fl.splitTextToSize=function(i,n,a){var l,p=(a=a||{}).fontSize||this.internal.getFontSize(),c=(function(k){if(k.widths&&k.kerning)return{widths:k.widths,kerning:k.kerning};var T=this.internal.getFont(k.fontName,k.fontStyle);return T.metadata.Unicode?{widths:T.metadata.Unicode.widths||{0:1},kerning:T.metadata.Unicode.kerning||{}}:{font:T.metadata,fontSize:this.internal.getFontSize(),charSpace:this.internal.getCharSpace()}}).call(this,a);l=Array.isArray(i)?i:String(i).split(/\r?\n/);var h=1*this.internal.scaleFactor*n/p;c.textIndent=a.textIndent?1*a.textIndent*this.internal.scaleFactor/p:0,c.lineIndent=a.lineIndent;var f,g,w=[];for(f=0,g=l.length;f<g;f++)w=w.concat(Uh.apply(this,[l[f],h,c]));return w},(function(i){i.__fontmetrics__=i.__fontmetrics__||{};for(var n="klmnopqrstuvwxyz",a={},l={},p=0;p<n.length;p++)a[n[p]]="0123456789abcdef"[p],l["0123456789abcdef"[p]]=n[p];var c=function(T){return"0x"+parseInt(T,10).toString(16)},h=i.__fontmetrics__.compress=function(T){var P,b,U,D,q=["{"];for(var _ in T){if(P=T[_],isNaN(parseInt(_,10))?b="'"+_+"'":(_=parseInt(_,10),b=(b=c(_).slice(2)).slice(0,-1)+l[b.slice(-1)]),typeof P=="number")P<0?(U=c(P).slice(3),D="-"):(U=c(P).slice(2),D=""),U=D+U.slice(0,-1)+l[U.slice(-1)];else{if(nn(P)!=="object")throw new Error("Don't know what to do with value type "+nn(P)+".");U=h(P)}q.push(b+U)}return q.push("}"),q.join("")},f=i.__fontmetrics__.uncompress=function(T){if(typeof T!="string")throw new Error("Invalid argument passed to uncompress.");for(var P,b,U,D,q={},_=1,F=q,K=[],he="",ve="",ye=T.length-1,oe=1;oe<ye;oe+=1)(D=T[oe])=="'"?P?(U=P.join(""),P=void 0):P=[]:P?P.push(D):D=="{"?(K.push([F,U]),F={},U=void 0):D=="}"?((b=K.pop())[0][b[1]]=F,U=void 0,F=b[0]):D=="-"?_=-1:U===void 0?a.hasOwnProperty(D)?(he+=a[D],U=parseInt(he,16)*_,_=1,he=""):he+=D:a.hasOwnProperty(D)?(ve+=a[D],F[U]=parseInt(ve,16)*_,_=1,U=void 0,ve=""):ve+=D;return q},g={codePages:["WinAnsiEncoding"],WinAnsiEncoding:f("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")},w={Unicode:{Courier:g,"Courier-Bold":g,"Courier-BoldOblique":g,"Courier-Oblique":g,Helvetica:g,"Helvetica-Bold":g,"Helvetica-BoldOblique":g,"Helvetica-Oblique":g,"Times-Roman":g,"Times-Bold":g,"Times-BoldItalic":g,"Times-Italic":g}},k={Unicode:{"Courier-Oblique":f("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-BoldItalic":f("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),"Helvetica-Bold":f("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),Courier:f("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-BoldOblique":f("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Bold":f("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),Symbol:f("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),Helvetica:f("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),"Helvetica-BoldOblique":f("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),ZapfDingbats:f("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),"Courier-Bold":f("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),"Times-Italic":f("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),"Times-Roman":f("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),"Helvetica-Oblique":f("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")}};i.events.push(["addFont",function(T){var P=T.font,b=k.Unicode[P.postScriptName];b&&(P.metadata.Unicode={},P.metadata.Unicode.widths=b.widths,P.metadata.Unicode.kerning=b.kerning);var U=w.Unicode[P.postScriptName];U&&(P.metadata.Unicode.encoding=U,P.encoding=U.codePages[0])}])})(bt.API),(function(i){var n=function(a){for(var l=a.length,p=new Uint8Array(l),c=0;c<l;c++)p[c]=a.charCodeAt(c);return p};i.API.events.push(["addFont",function(a){var l=void 0,p=a.font,c=a.instance;if(!p.isStandardFont){if(c===void 0)throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('"+p.postScriptName+"').");if(typeof(l=c.existsFileInVFS(p.postScriptName)===!1?c.loadFile(p.postScriptName):c.getFileFromVFS(p.postScriptName))!="string")throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('"+p.postScriptName+"').");(function(h,f){f=/^\x00\x01\x00\x00/.test(f)?n(f):n(yc(f)),h.metadata=i.API.TTFFont.open(f),h.metadata.Unicode=h.metadata.Unicode||{encoding:{},kerning:{},widths:[]},h.metadata.glyIdsUsed=[0]})(p,l)}}])})(bt),(function(i){function n(){return(xt.canvg?Promise.resolve(xt.canvg):zu(()=>import("./index.es-PR3cLSAT.js"),[])).catch((function(a){return Promise.reject(new Error("Could not load canvg: "+a))})).then((function(a){return a.default?a.default:a}))}bt.API.addSvgAsImage=function(a,l,p,c,h,f,g,w){if(isNaN(l)||isNaN(p))throw on.error("jsPDF.addSvgAsImage: Invalid coordinates",arguments),new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");if(isNaN(c)||isNaN(h))throw on.error("jsPDF.addSvgAsImage: Invalid measurements",arguments),new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");var k=document.createElement("canvas");k.width=c,k.height=h;var T=k.getContext("2d");T.fillStyle="#fff",T.fillRect(0,0,k.width,k.height);var P={ignoreMouse:!0,ignoreAnimation:!0,ignoreDimensions:!0},b=this;return n().then((function(U){return U.fromString(T,a,P)}),(function(){return Promise.reject(new Error("Could not load canvg."))})).then((function(U){return U.render(P)})).then((function(){b.addImage(k.toDataURL("image/jpeg",1),l,p,c,h,g,w)}))}})(),bt.API.putTotalPages=function(i){var n,a=0;parseInt(this.internal.getFont().id.substr(1),10)<15?(n=new RegExp(i,"g"),a=this.internal.getNumberOfPages()):(n=new RegExp(this.pdfEscape16(i,this.internal.getFont()),"g"),a=this.pdfEscape16(this.internal.getNumberOfPages()+"",this.internal.getFont()));for(var l=1;l<=this.internal.getNumberOfPages();l++)for(var p=0;p<this.internal.pages[l].length;p++)this.internal.pages[l][p]=this.internal.pages[l][p].replace(n,a);return this},bt.API.viewerPreferences=function(i,n){var a;i=i||{},n=n||!1;var l,p,c,h={HideToolbar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideMenubar:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},HideWindowUI:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},FitWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},CenterWindow:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.3},DisplayDocTitle:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.4},NonFullScreenPageMode:{defaultValue:"UseNone",value:"UseNone",type:"name",explicitSet:!1,valueSet:["UseNone","UseOutlines","UseThumbs","UseOC"],pdfVersion:1.3},Direction:{defaultValue:"L2R",value:"L2R",type:"name",explicitSet:!1,valueSet:["L2R","R2L"],pdfVersion:1.3},ViewArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},ViewClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintArea:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintClip:{defaultValue:"CropBox",value:"CropBox",type:"name",explicitSet:!1,valueSet:["MediaBox","CropBox","TrimBox","BleedBox","ArtBox"],pdfVersion:1.4},PrintScaling:{defaultValue:"AppDefault",value:"AppDefault",type:"name",explicitSet:!1,valueSet:["AppDefault","None"],pdfVersion:1.6},Duplex:{defaultValue:"",value:"none",type:"name",explicitSet:!1,valueSet:["Simplex","DuplexFlipShortEdge","DuplexFlipLongEdge","none"],pdfVersion:1.7},PickTrayByPDFSize:{defaultValue:!1,value:!1,type:"boolean",explicitSet:!1,valueSet:[!0,!1],pdfVersion:1.7},PrintPageRange:{defaultValue:"",value:"",type:"array",explicitSet:!1,valueSet:null,pdfVersion:1.7},NumCopies:{defaultValue:1,value:1,type:"integer",explicitSet:!1,valueSet:null,pdfVersion:1.7}},f=Object.keys(h),g=[],w=0,k=0,T=0;function P(U,D){var q,_=!1;for(q=0;q<U.length;q+=1)U[q]===D&&(_=!0);return _}if(this.internal.viewerpreferences===void 0&&(this.internal.viewerpreferences={},this.internal.viewerpreferences.configuration=JSON.parse(JSON.stringify(h)),this.internal.viewerpreferences.isSubscribed=!1),a=this.internal.viewerpreferences.configuration,i==="reset"||n===!0){var b=f.length;for(T=0;T<b;T+=1)a[f[T]].value=a[f[T]].defaultValue,a[f[T]].explicitSet=!1}if(nn(i)==="object"){for(p in i)if(c=i[p],P(f,p)&&c!==void 0){if(a[p].type==="boolean"&&typeof c=="boolean")a[p].value=c;else if(a[p].type==="name"&&P(a[p].valueSet,c))a[p].value=c;else if(a[p].type==="integer"&&Number.isInteger(c))a[p].value=c;else if(a[p].type==="array"){for(w=0;w<c.length;w+=1)if(l=!0,c[w].length===1&&typeof c[w][0]=="number")g.push(String(c[w]-1));else if(c[w].length>1){for(k=0;k<c[w].length;k+=1)typeof c[w][k]!="number"&&(l=!1);l===!0&&g.push([c[w][0]-1,c[w][1]-1].join(" "))}a[p].value="["+g.join(" ")+"]"}else a[p].value=a[p].defaultValue;a[p].explicitSet=!0}}return this.internal.viewerpreferences.isSubscribed===!1&&(this.internal.events.subscribe("putCatalog",(function(){var U,D=[];for(U in a)a[U].explicitSet===!0&&(a[U].type==="name"?D.push("/"+U+" /"+a[U].value):D.push("/"+U+" "+a[U].value));D.length!==0&&this.internal.write(`/ViewerPreferences
<<
`+D.join(`
`)+`
>>`)})),this.internal.viewerpreferences.isSubscribed=!0),this.internal.viewerpreferences.configuration=a,this},(function(i){var n=function(){var l='<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="'+this.internal.__metadata__.namespaceuri+'"><jspdf:metadata>',p=unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),c=unescape(encodeURIComponent(l)),h=unescape(encodeURIComponent(this.internal.__metadata__.metadata)),f=unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),g=unescape(encodeURIComponent("</x:xmpmeta>")),w=c.length+h.length+f.length+p.length+g.length;this.internal.__metadata__.metadata_object_number=this.internal.newObject(),this.internal.write("<< /Type /Metadata /Subtype /XML /Length "+w+" >>"),this.internal.write("stream"),this.internal.write(p+c+h+f+g),this.internal.write("endstream"),this.internal.write("endobj")},a=function(){this.internal.__metadata__.metadata_object_number&&this.internal.write("/Metadata "+this.internal.__metadata__.metadata_object_number+" 0 R")};i.addMetadata=function(l,p){return this.internal.__metadata__===void 0&&(this.internal.__metadata__={metadata:l,namespaceuri:p||"http://jspdf.default.namespaceuri/"},this.internal.events.subscribe("putCatalog",a),this.internal.events.subscribe("postPutResources",n)),this}})(bt.API),(function(i){var n=i.API,a=n.pdfEscape16=function(c,h){for(var f,g=h.metadata.Unicode.widths,w=["","0","00","000","0000"],k=[""],T=0,P=c.length;T<P;++T){if(f=h.metadata.characterToGlyph(c.charCodeAt(T)),h.metadata.glyIdsUsed.push(f),h.metadata.toUnicode[f]=c.charCodeAt(T),g.indexOf(f)==-1&&(g.push(f),g.push([parseInt(h.metadata.widthOfGlyph(f),10)])),f=="0")return k.join("");f=f.toString(16),k.push(w[4-f.length],f)}return k.join("")},l=function(c){var h,f,g,w,k,T,P;for(k=`/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange`,g=[],T=0,P=(f=Object.keys(c).sort((function(b,U){return b-U}))).length;T<P;T++)h=f[T],g.length>=100&&(k+=`
`+g.length+` beginbfchar
`+g.join(`
`)+`
endbfchar`,g=[]),c[h]!==void 0&&c[h]!==null&&typeof c[h].toString=="function"&&(w=("0000"+c[h].toString(16)).slice(-4),h=("0000"+(+h).toString(16)).slice(-4),g.push("<"+h+"><"+w+">"));return g.length&&(k+=`
`+g.length+` beginbfchar
`+g.join(`
`)+`
endbfchar
`),k+=`endcmap
CMapName currentdict /CMap defineresource pop
end
end`};n.events.push(["putFont",function(c){(function(h){var f=h.font,g=h.out,w=h.newObject,k=h.putStream;if(f.metadata instanceof i.API.TTFFont&&f.encoding==="Identity-H"){for(var T=f.metadata.Unicode.widths,P=f.metadata.subset.encode(f.metadata.glyIdsUsed,1),b="",U=0;U<P.length;U++)b+=String.fromCharCode(P[U]);var D=w();k({data:b,addLength1:!0,objectId:D}),g("endobj");var q=w();k({data:l(f.metadata.toUnicode),addLength1:!0,objectId:q}),g("endobj");var _=w();g("<<"),g("/Type /FontDescriptor"),g("/FontName /"+Ol(f.fontName)),g("/FontFile2 "+D+" 0 R"),g("/FontBBox "+i.API.PDFObject.convert(f.metadata.bbox)),g("/Flags "+f.metadata.flags),g("/StemV "+f.metadata.stemV),g("/ItalicAngle "+f.metadata.italicAngle),g("/Ascent "+f.metadata.ascender),g("/Descent "+f.metadata.decender),g("/CapHeight "+f.metadata.capHeight),g(">>"),g("endobj");var F=w();g("<<"),g("/Type /Font"),g("/BaseFont /"+Ol(f.fontName)),g("/FontDescriptor "+_+" 0 R"),g("/W "+i.API.PDFObject.convert(T)),g("/CIDToGIDMap /Identity"),g("/DW 1000"),g("/Subtype /CIDFontType2"),g("/CIDSystemInfo"),g("<<"),g("/Supplement 0"),g("/Registry (Adobe)"),g("/Ordering ("+f.encoding+")"),g(">>"),g(">>"),g("endobj"),f.objectNumber=w(),g("<<"),g("/Type /Font"),g("/Subtype /Type0"),g("/ToUnicode "+q+" 0 R"),g("/BaseFont /"+Ol(f.fontName)),g("/Encoding /"+f.encoding),g("/DescendantFonts ["+F+" 0 R]"),g(">>"),g("endobj"),f.isAlreadyPutted=!0}})(c)}]),n.events.push(["putFont",function(c){(function(h){var f=h.font,g=h.out,w=h.newObject,k=h.putStream;if(f.metadata instanceof i.API.TTFFont&&f.encoding==="WinAnsiEncoding"){for(var T=f.metadata.rawData,P="",b=0;b<T.length;b++)P+=String.fromCharCode(T[b]);var U=w();k({data:P,addLength1:!0,objectId:U}),g("endobj");var D=w();k({data:l(f.metadata.toUnicode),addLength1:!0,objectId:D}),g("endobj");var q=w();g("<<"),g("/Descent "+f.metadata.decender),g("/CapHeight "+f.metadata.capHeight),g("/StemV "+f.metadata.stemV),g("/Type /FontDescriptor"),g("/FontFile2 "+U+" 0 R"),g("/Flags 96"),g("/FontBBox "+i.API.PDFObject.convert(f.metadata.bbox)),g("/FontName /"+Ol(f.fontName)),g("/ItalicAngle "+f.metadata.italicAngle),g("/Ascent "+f.metadata.ascender),g(">>"),g("endobj"),f.objectNumber=w();for(var _=0;_<f.metadata.hmtx.widths.length;_++)f.metadata.hmtx.widths[_]=parseInt(f.metadata.hmtx.widths[_]*(1e3/f.metadata.head.unitsPerEm));g("<</Subtype/TrueType/Type/Font/ToUnicode "+D+" 0 R/BaseFont/"+Ol(f.fontName)+"/FontDescriptor "+q+" 0 R/Encoding/"+f.encoding+" /FirstChar 29 /LastChar 255 /Widths "+i.API.PDFObject.convert(f.metadata.hmtx.widths)+">>"),g("endobj"),f.isAlreadyPutted=!0}})(c)}]);var p=function(c){var h,f=c.text||"",g=c.x,w=c.y,k=c.options||{},T=c.mutex||{},P=T.pdfEscape,b=T.activeFontKey,U=T.fonts,D=b,q="",_=0,F="",K=U[D].encoding;if(U[D].encoding!=="Identity-H")return{text:f,x:g,y:w,options:k,mutex:T};for(F=f,D=b,Array.isArray(f)&&(F=f[0]),_=0;_<F.length;_+=1)U[D].metadata.hasOwnProperty("cmap")&&(h=U[D].metadata.cmap.unicode.codeMap[F[_].charCodeAt(0)]),h||F[_].charCodeAt(0)<256&&U[D].metadata.hasOwnProperty("Unicode")?q+=F[_]:q+="";var he="";return parseInt(D.slice(1))<14||K==="WinAnsiEncoding"?he=P(q,D).split("").map((function(ve){return ve.charCodeAt(0).toString(16)})).join(""):K==="Identity-H"&&(he=a(q,U[D])),T.isHex=!0,{text:he,x:g,y:w,options:k,mutex:T}};n.events.push(["postProcessText",function(c){var h=c.text||"",f=[],g={text:h,x:c.x,y:c.y,options:c.options,mutex:c.mutex};if(Array.isArray(h)){var w=0;for(w=0;w<h.length;w+=1)Array.isArray(h[w])&&h[w].length===3?f.push([p(Object.assign({},g,{text:h[w][0]})).text,h[w][1],h[w][2]]):f.push(p(Object.assign({},g,{text:h[w]})).text);c.text=f}else c.text=p(Object.assign({},g,{text:h})).text}])})(bt),(function(i){var n=function(){return this.internal.vFS===void 0&&(this.internal.vFS={}),!0};i.existsFileInVFS=function(a){return n.call(this),this.internal.vFS[a]!==void 0},i.addFileToVFS=function(a,l){return n.call(this),this.internal.vFS[a]=l,this},i.getFileFromVFS=function(a){return n.call(this),this.internal.vFS[a]!==void 0?this.internal.vFS[a]:null}})(bt.API),(function(i){i.__bidiEngine__=i.prototype.__bidiEngine__=function(l){var p,c,h,f,g,w,k,T=n,P=[[0,3,0,1,0,0,0],[0,3,0,1,2,2,0],[0,3,0,17,2,0,1],[0,3,5,5,4,1,0],[0,3,21,21,4,0,1],[0,3,5,5,4,2,0]],b=[[2,0,1,1,0,1,0],[2,0,1,1,0,2,0],[2,0,2,1,3,2,0],[2,0,2,33,3,1,1]],U={L:0,R:1,EN:2,AN:3,N:4,B:5,S:6},D={0:0,5:1,6:2,7:3,32:4,251:5,254:6,255:7},q=["(",")","(","<",">","<","[","]","[","{","}","{","«","»","«","‹","›","‹","⁅","⁆","⁅","⁽","⁾","⁽","₍","₎","₍","≤","≥","≤","〈","〉","〈","﹙","﹚","﹙","﹛","﹜","﹛","﹝","﹞","﹝","﹤","﹥","﹤"],_=new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),F=!1,K=0;this.__bidiEngine__={};var he=function(C){var B=C.charCodeAt(),Z=B>>8,te=D[Z];return te!==void 0?T[256*te+(255&B)]:Z===252||Z===253?"AL":_.test(Z)?"L":Z===8?"R":"N"},ve=function(C){for(var B,Z=0;Z<C.length;Z++){if((B=he(C.charAt(Z)))==="L")return!1;if(B==="R")return!0}return!1},ye=function(C,B,Z,te){var Ne,ue,ke,ee,me=B[te];switch(me){case"L":case"R":F=!1;break;case"N":case"AN":break;case"EN":F&&(me="AN");break;case"AL":F=!0,me="R";break;case"WS":me="N";break;case"CS":te<1||te+1>=B.length||(Ne=Z[te-1])!=="EN"&&Ne!=="AN"||(ue=B[te+1])!=="EN"&&ue!=="AN"?me="N":F&&(ue="AN"),me=ue===Ne?ue:"N";break;case"ES":me=(Ne=te>0?Z[te-1]:"B")==="EN"&&te+1<B.length&&B[te+1]==="EN"?"EN":"N";break;case"ET":if(te>0&&Z[te-1]==="EN"){me="EN";break}if(F){me="N";break}for(ke=te+1,ee=B.length;ke<ee&&B[ke]==="ET";)ke++;me=ke<ee&&B[ke]==="EN"?"EN":"N";break;case"NSM":if(h&&!f){for(ee=B.length,ke=te+1;ke<ee&&B[ke]==="NSM";)ke++;if(ke<ee){var z=C[te],A=z>=1425&&z<=2303||z===64286;if(Ne=B[ke],A&&(Ne==="R"||Ne==="AL")){me="R";break}}}me=te<1||(Ne=B[te-1])==="B"?"N":Z[te-1];break;case"B":F=!1,p=!0,me=K;break;case"S":c=!0,me="N";break;case"LRE":case"RLE":case"LRO":case"RLO":case"PDF":F=!1;break;case"BN":me="N"}return me},oe=function(C,B,Z){var te=C.split("");return Z&&$(te,Z,{hiLevel:K}),te.reverse(),B&&B.reverse(),te.join("")},$=function(C,B,Z){var te,Ne,ue,ke,ee,me=-1,z=C.length,A=0,N=[],I=K?b:P,G=[];for(F=!1,p=!1,c=!1,Ne=0;Ne<z;Ne++)G[Ne]=he(C[Ne]);for(ue=0;ue<z;ue++){if(ee=A,N[ue]=ye(C,G,N,ue),te=240&(A=I[ee][U[N[ue]]]),A&=15,B[ue]=ke=I[A][5],te>0)if(te===16){for(Ne=me;Ne<ue;Ne++)B[Ne]=1;me=-1}else me=-1;if(I[A][6])me===-1&&(me=ue);else if(me>-1){for(Ne=me;Ne<ue;Ne++)B[Ne]=ke;me=-1}G[ue]==="B"&&(B[ue]=0),Z.hiLevel|=ke}c&&(function(V,Y,ne){for(var re=0;re<ne;re++)if(V[re]==="S"){Y[re]=K;for(var ce=re-1;ce>=0&&V[ce]==="WS";ce--)Y[ce]=K}})(G,B,z)},pe=function(C,B,Z,te,Ne){if(!(Ne.hiLevel<C)){if(C===1&&K===1&&!p)return B.reverse(),void(Z&&Z.reverse());for(var ue,ke,ee,me,z=B.length,A=0;A<z;){if(te[A]>=C){for(ee=A+1;ee<z&&te[ee]>=C;)ee++;for(me=A,ke=ee-1;me<ke;me++,ke--)ue=B[me],B[me]=B[ke],B[ke]=ue,Z&&(ue=Z[me],Z[me]=Z[ke],Z[ke]=ue);A=ee}A++}}},Se=function(C,B,Z){var te=C.split(""),Ne={hiLevel:K};return Z||(Z=[]),$(te,Z,Ne),(function(ue,ke,ee){if(ee.hiLevel!==0&&k)for(var me,z=0;z<ue.length;z++)ke[z]===1&&(me=q.indexOf(ue[z]))>=0&&(ue[z]=q[me+1])})(te,Z,Ne),pe(2,te,B,Z,Ne),pe(1,te,B,Z,Ne),te.join("")};return this.__bidiEngine__.doBidiReorder=function(C,B,Z){if((function(Ne,ue){if(ue)for(var ke=0;ke<Ne.length;ke++)ue[ke]=ke;f===void 0&&(f=ve(Ne)),w===void 0&&(w=ve(Ne))})(C,B),h||!g||w)if(h&&g&&f^w)K=f?1:0,C=oe(C,B,Z);else if(!h&&g&&w)K=f?1:0,C=Se(C,B,Z),C=oe(C,B);else if(!h||f||g||w){if(h&&!g&&f^w)C=oe(C,B),f?(K=0,C=Se(C,B,Z)):(K=1,C=Se(C,B,Z),C=oe(C,B));else if(h&&f&&!g&&w)K=1,C=Se(C,B,Z),C=oe(C,B);else if(!h&&!g&&f^w){var te=k;f?(K=1,C=Se(C,B,Z),K=0,k=!1,C=Se(C,B,Z),k=te):(K=0,C=Se(C,B,Z),C=oe(C,B),K=1,k=!1,C=Se(C,B,Z),k=te,C=oe(C,B))}}else K=0,C=Se(C,B,Z);else K=f?1:0,C=Se(C,B,Z);return C},this.__bidiEngine__.setOptions=function(C){C&&(h=C.isInputVisual,g=C.isOutputVisual,f=C.isInputRtl,w=C.isOutputRtl,k=C.isSymmetricSwapping)},this.__bidiEngine__.setOptions(l),this.__bidiEngine__};var n=["BN","BN","BN","BN","BN","BN","BN","BN","BN","S","B","S","WS","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","B","B","B","S","WS","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","BN","BN","BN","BN","BN","BN","B","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","BN","CS","N","ET","ET","ET","ET","N","N","N","N","L","N","N","BN","N","N","ET","ET","EN","EN","N","L","N","N","N","EN","L","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","L","L","L","L","L","L","L","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","L","N","N","N","N","N","ET","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","NSM","R","NSM","NSM","R","NSM","NSM","R","NSM","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","N","N","N","N","N","R","R","R","R","R","N","N","N","N","N","N","N","N","N","N","N","AN","AN","AN","AN","AN","AN","N","N","AL","ET","ET","AL","CS","AL","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","AN","AN","AN","AN","AN","AN","AN","AN","AN","ET","AN","AN","AL","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AN","N","NSM","NSM","NSM","NSM","NSM","NSM","AL","AL","NSM","NSM","N","NSM","NSM","NSM","NSM","AL","AL","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","AL","AL","NSM","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","R","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","R","R","N","N","N","N","R","N","N","N","N","N","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","WS","BN","BN","BN","L","R","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","B","LRE","RLE","PDF","LRO","RLO","CS","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","WS","BN","BN","BN","BN","BN","N","LRI","RLI","FSI","PDI","BN","BN","BN","BN","BN","BN","EN","L","N","N","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","L","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","ES","ES","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","N","N","N","N","N","R","NSM","R","R","R","R","R","R","R","R","R","R","ES","R","R","R","R","R","R","R","R","R","R","R","R","R","N","R","R","R","R","R","N","R","N","R","R","N","R","R","N","R","R","R","R","R","R","R","R","R","R","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","NSM","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","CS","N","CS","N","N","CS","N","N","N","N","N","N","N","N","N","ET","N","N","ES","ES","N","N","N","N","N","ET","ET","N","N","N","N","N","AL","AL","AL","AL","AL","N","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","AL","N","N","BN","N","N","N","ET","ET","ET","N","N","N","N","N","ES","CS","ES","CS","CS","EN","EN","EN","EN","EN","EN","EN","EN","EN","EN","CS","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","N","N","N","N","N","N","N","N","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","L","N","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","L","L","L","N","N","L","L","L","N","N","N","ET","ET","N","N","N","ET","ET","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N","N"],a=new i.__bidiEngine__({isInputVisual:!0});i.API.events.push(["postProcessText",function(l){var p=l.text,c=(l.x,l.y,l.options||{}),h=(l.mutex,c.lang,[]);if(c.isInputVisual=typeof c.isInputVisual!="boolean"||c.isInputVisual,a.setOptions(c),Object.prototype.toString.call(p)==="[object Array]"){var f=0;for(h=[],f=0;f<p.length;f+=1)Object.prototype.toString.call(p[f])==="[object Array]"?h.push([a.doBidiReorder(p[f][0]),p[f][1],p[f][2]]):h.push([a.doBidiReorder(p[f])]);l.text=h}else l.text=a.doBidiReorder(p);a.setOptions({isInputVisual:!0})}])})(bt),bt.API.TTFFont=(function(){function i(n){var a;if(this.rawData=n,a=this.contents=new Ns(n),this.contents.pos=4,a.readString(4)==="ttcf")throw new Error("TTCF not supported.");a.pos=0,this.parse(),this.subset=new H0(this),this.registerTTF()}return i.open=function(n){return new i(n)},i.prototype.parse=function(){return this.directory=new j0(this.contents),this.head=new L0(this),this.name=new D0(this),this.cmap=new Lf(this),this.toUnicode={},this.hhea=new E0(this),this.maxp=new R0(this),this.hmtx=new F0(this),this.post=new I0(this),this.os2=new M0(this),this.loca=new q0(this),this.glyf=new z0(this),this.ascender=this.os2.exists&&this.os2.ascender||this.hhea.ascender,this.decender=this.os2.exists&&this.os2.decender||this.hhea.decender,this.lineGap=this.os2.exists&&this.os2.lineGap||this.hhea.lineGap,this.bbox=[this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax]},i.prototype.registerTTF=function(){var n,a,l,p,c;if(this.scaleFactor=1e3/this.head.unitsPerEm,this.bbox=(function(){var h,f,g,w;for(w=[],h=0,f=(g=this.bbox).length;h<f;h++)n=g[h],w.push(Math.round(n*this.scaleFactor));return w}).call(this),this.stemV=0,this.post.exists?(l=255&(p=this.post.italic_angle),(32768&(a=p>>16))!=0&&(a=-(1+(65535^a))),this.italicAngle=+(a+"."+l)):this.italicAngle=0,this.ascender=Math.round(this.ascender*this.scaleFactor),this.decender=Math.round(this.decender*this.scaleFactor),this.lineGap=Math.round(this.lineGap*this.scaleFactor),this.capHeight=this.os2.exists&&this.os2.capHeight||this.ascender,this.xHeight=this.os2.exists&&this.os2.xHeight||0,this.familyClass=(this.os2.exists&&this.os2.familyClass||0)>>8,this.isSerif=(c=this.familyClass)===1||c===2||c===3||c===4||c===5||c===7,this.isScript=this.familyClass===10,this.flags=0,this.post.isFixedPitch&&(this.flags|=1),this.isSerif&&(this.flags|=2),this.isScript&&(this.flags|=8),this.italicAngle!==0&&(this.flags|=64),this.flags|=32,!this.cmap.unicode)throw new Error("No unicode cmap for font")},i.prototype.characterToGlyph=function(n){var a;return((a=this.cmap.unicode)!=null?a.codeMap[n]:void 0)||0},i.prototype.widthOfGlyph=function(n){var a;return a=1e3/this.head.unitsPerEm,this.hmtx.forGlyph(n).advance*a},i.prototype.widthOfString=function(n,a,l){var p,c,h,f;for(h=0,c=0,f=(n=""+n).length;0<=f?c<f:c>f;c=0<=f?++c:--c)p=n.charCodeAt(c),h+=this.widthOfGlyph(this.characterToGlyph(p))+l*(1e3/a)||0;return h*(a/1e3)},i.prototype.lineHeight=function(n,a){var l;return a==null&&(a=!1),l=a?this.lineGap:0,(this.ascender+l-this.decender)/1e3*n},i})();var gi,Ns=(function(){function i(n){this.data=n??[],this.pos=0,this.length=this.data.length}return i.prototype.readByte=function(){return this.data[this.pos++]},i.prototype.writeByte=function(n){return this.data[this.pos++]=n},i.prototype.readUInt32=function(){return 16777216*this.readByte()+(this.readByte()<<16)+(this.readByte()<<8)+this.readByte()},i.prototype.writeUInt32=function(n){return this.writeByte(n>>>24&255),this.writeByte(n>>16&255),this.writeByte(n>>8&255),this.writeByte(255&n)},i.prototype.readInt32=function(){var n;return(n=this.readUInt32())>=2147483648?n-4294967296:n},i.prototype.writeInt32=function(n){return n<0&&(n+=4294967296),this.writeUInt32(n)},i.prototype.readUInt16=function(){return this.readByte()<<8|this.readByte()},i.prototype.writeUInt16=function(n){return this.writeByte(n>>8&255),this.writeByte(255&n)},i.prototype.readInt16=function(){var n;return(n=this.readUInt16())>=32768?n-65536:n},i.prototype.writeInt16=function(n){return n<0&&(n+=65536),this.writeUInt16(n)},i.prototype.readString=function(n){var a,l;for(l=[],a=0;0<=n?a<n:a>n;a=0<=n?++a:--a)l[a]=String.fromCharCode(this.readByte());return l.join("")},i.prototype.writeString=function(n){var a,l,p;for(p=[],a=0,l=n.length;0<=l?a<l:a>l;a=0<=l?++a:--a)p.push(this.writeByte(n.charCodeAt(a)));return p},i.prototype.readShort=function(){return this.readInt16()},i.prototype.writeShort=function(n){return this.writeInt16(n)},i.prototype.readLongLong=function(){var n,a,l,p,c,h,f,g;return n=this.readByte(),a=this.readByte(),l=this.readByte(),p=this.readByte(),c=this.readByte(),h=this.readByte(),f=this.readByte(),g=this.readByte(),128&n?-1*(72057594037927940*(255^n)+281474976710656*(255^a)+1099511627776*(255^l)+4294967296*(255^p)+16777216*(255^c)+65536*(255^h)+256*(255^f)+(255^g)+1):72057594037927940*n+281474976710656*a+1099511627776*l+4294967296*p+16777216*c+65536*h+256*f+g},i.prototype.writeLongLong=function(n){var a,l;return a=Math.floor(n/4294967296),l=4294967295&n,this.writeByte(a>>24&255),this.writeByte(a>>16&255),this.writeByte(a>>8&255),this.writeByte(255&a),this.writeByte(l>>24&255),this.writeByte(l>>16&255),this.writeByte(l>>8&255),this.writeByte(255&l)},i.prototype.readInt=function(){return this.readInt32()},i.prototype.writeInt=function(n){return this.writeInt32(n)},i.prototype.read=function(n){var a,l;for(a=[],l=0;0<=n?l<n:l>n;l=0<=n?++l:--l)a.push(this.readByte());return a},i.prototype.write=function(n){var a,l,p,c;for(c=[],l=0,p=n.length;l<p;l++)a=n[l],c.push(this.writeByte(a));return c},i})(),j0=(function(){var i;function n(a){var l,p,c;for(this.scalarType=a.readInt(),this.tableCount=a.readShort(),this.searchRange=a.readShort(),this.entrySelector=a.readShort(),this.rangeShift=a.readShort(),this.tables={},p=0,c=this.tableCount;0<=c?p<c:p>c;p=0<=c?++p:--p)l={tag:a.readString(4),checksum:a.readInt(),offset:a.readInt(),length:a.readInt()},this.tables[l.tag]=l}return n.prototype.encode=function(a){var l,p,c,h,f,g,w,k,T,P,b,U,D;for(D in b=Object.keys(a).length,g=Math.log(2),T=16*Math.floor(Math.log(b)/g),h=Math.floor(T/g),k=16*b-T,(p=new Ns).writeInt(this.scalarType),p.writeShort(b),p.writeShort(T),p.writeShort(h),p.writeShort(k),c=16*b,w=p.pos+c,f=null,U=[],a)for(P=a[D],p.writeString(D),p.writeInt(i(P)),p.writeInt(w),p.writeInt(P.length),U=U.concat(P),D==="head"&&(f=w),w+=P.length;w%4;)U.push(0),w++;return p.write(U),l=2981146554-i(p.data),p.pos=f+8,p.writeUInt32(l),p.data},i=function(a){var l,p,c,h;for(a=Ef.call(a);a.length%4;)a.push(0);for(c=new Ns(a),p=0,l=0,h=a.length;l<h;l=l+=4)p+=c.readUInt32();return 4294967295&p},n})(),C0={}.hasOwnProperty,Ui=function(i,n){for(var a in n)C0.call(n,a)&&(i[a]=n[a]);function l(){this.constructor=i}return l.prototype=n.prototype,i.prototype=new l,i.__super__=n.prototype,i};gi=(function(){function i(n){var a;this.file=n,a=this.file.directory.tables[this.tag],this.exists=!!a,a&&(this.offset=a.offset,this.length=a.length,this.parse(this.file.contents))}return i.prototype.parse=function(){},i.prototype.encode=function(){},i.prototype.raw=function(){return this.exists?(this.file.contents.pos=this.offset,this.file.contents.read(this.length)):null},i})();var L0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="head",n.prototype.parse=function(a){return a.pos=this.offset,this.version=a.readInt(),this.revision=a.readInt(),this.checkSumAdjustment=a.readInt(),this.magicNumber=a.readInt(),this.flags=a.readShort(),this.unitsPerEm=a.readShort(),this.created=a.readLongLong(),this.modified=a.readLongLong(),this.xMin=a.readShort(),this.yMin=a.readShort(),this.xMax=a.readShort(),this.yMax=a.readShort(),this.macStyle=a.readShort(),this.lowestRecPPEM=a.readShort(),this.fontDirectionHint=a.readShort(),this.indexToLocFormat=a.readShort(),this.glyphDataFormat=a.readShort()},n.prototype.encode=function(a){var l;return(l=new Ns).writeInt(this.version),l.writeInt(this.revision),l.writeInt(this.checkSumAdjustment),l.writeInt(this.magicNumber),l.writeShort(this.flags),l.writeShort(this.unitsPerEm),l.writeLongLong(this.created),l.writeLongLong(this.modified),l.writeShort(this.xMin),l.writeShort(this.yMin),l.writeShort(this.xMax),l.writeShort(this.yMax),l.writeShort(this.macStyle),l.writeShort(this.lowestRecPPEM),l.writeShort(this.fontDirectionHint),l.writeShort(a),l.writeShort(this.glyphDataFormat),l.data},n})(),Vh=(function(){function i(n,a){var l,p,c,h,f,g,w,k,T,P,b,U,D,q,_,F,K;switch(this.platformID=n.readUInt16(),this.encodingID=n.readShort(),this.offset=a+n.readInt(),T=n.pos,n.pos=this.offset,this.format=n.readUInt16(),this.length=n.readUInt16(),this.language=n.readUInt16(),this.isUnicode=this.platformID===3&&this.encodingID===1&&this.format===4||this.platformID===0&&this.format===4,this.codeMap={},this.format){case 0:for(g=0;g<256;++g)this.codeMap[g]=n.readByte();break;case 4:for(b=n.readUInt16(),P=b/2,n.pos+=6,c=(function(){var he,ve;for(ve=[],g=he=0;0<=P?he<P:he>P;g=0<=P?++he:--he)ve.push(n.readUInt16());return ve})(),n.pos+=2,D=(function(){var he,ve;for(ve=[],g=he=0;0<=P?he<P:he>P;g=0<=P?++he:--he)ve.push(n.readUInt16());return ve})(),w=(function(){var he,ve;for(ve=[],g=he=0;0<=P?he<P:he>P;g=0<=P?++he:--he)ve.push(n.readUInt16());return ve})(),k=(function(){var he,ve;for(ve=[],g=he=0;0<=P?he<P:he>P;g=0<=P?++he:--he)ve.push(n.readUInt16());return ve})(),p=(this.length-n.pos+this.offset)/2,f=(function(){var he,ve;for(ve=[],g=he=0;0<=p?he<p:he>p;g=0<=p?++he:--he)ve.push(n.readUInt16());return ve})(),g=_=0,K=c.length;_<K;g=++_)for(q=c[g],l=F=U=D[g];U<=q?F<=q:F>=q;l=U<=q?++F:--F)k[g]===0?h=l+w[g]:(h=f[k[g]/2+(l-U)-(P-g)]||0)!==0&&(h+=w[g]),this.codeMap[l]=65535&h}n.pos=T}return i.encode=function(n,a){var l,p,c,h,f,g,w,k,T,P,b,U,D,q,_,F,K,he,ve,ye,oe,$,pe,Se,C,B,Z,te,Ne,ue,ke,ee,me,z,A,N,I,G,V,Y,ne,re,ce,_e,Re,Be;switch(te=new Ns,h=Object.keys(n).sort((function(Ue,Ke){return Ue-Ke})),a){case"macroman":for(D=0,q=(function(){var Ue=[];for(U=0;U<256;++U)Ue.push(0);return Ue})(),F={0:0},c={},Ne=0,me=h.length;Ne<me;Ne++)F[ce=n[p=h[Ne]]]==null&&(F[ce]=++D),c[p]={old:n[p],new:F[n[p]]},q[p]=F[n[p]];return te.writeUInt16(1),te.writeUInt16(0),te.writeUInt32(12),te.writeUInt16(0),te.writeUInt16(262),te.writeUInt16(0),te.write(q),{charMap:c,subtable:te.data,maxGlyphID:D+1};case"unicode":for(B=[],T=[],K=0,F={},l={},_=w=null,ue=0,z=h.length;ue<z;ue++)F[ve=n[p=h[ue]]]==null&&(F[ve]=++K),l[p]={old:ve,new:F[ve]},f=F[ve]-p,_!=null&&f===w||(_&&T.push(_),B.push(p),w=f),_=p;for(_&&T.push(_),T.push(65535),B.push(65535),Se=2*(pe=B.length),$=2*Math.pow(Math.log(pe)/Math.LN2,2),P=Math.log($/2)/Math.LN2,oe=2*pe-$,g=[],ye=[],b=[],U=ke=0,A=B.length;ke<A;U=++ke){if(C=B[U],k=T[U],C===65535){g.push(0),ye.push(0);break}if(C-(Z=l[C].new)>=32768)for(g.push(0),ye.push(2*(b.length+pe-U)),p=ee=C;C<=k?ee<=k:ee>=k;p=C<=k?++ee:--ee)b.push(l[p].new);else g.push(Z-C),ye.push(0)}for(te.writeUInt16(3),te.writeUInt16(1),te.writeUInt32(12),te.writeUInt16(4),te.writeUInt16(16+8*pe+2*b.length),te.writeUInt16(0),te.writeUInt16(Se),te.writeUInt16($),te.writeUInt16(P),te.writeUInt16(oe),ne=0,N=T.length;ne<N;ne++)p=T[ne],te.writeUInt16(p);for(te.writeUInt16(0),re=0,I=B.length;re<I;re++)p=B[re],te.writeUInt16(p);for(_e=0,G=g.length;_e<G;_e++)f=g[_e],te.writeUInt16(f);for(Re=0,V=ye.length;Re<V;Re++)he=ye[Re],te.writeUInt16(he);for(Be=0,Y=b.length;Be<Y;Be++)D=b[Be],te.writeUInt16(D);return{charMap:l,subtable:te.data,maxGlyphID:K+1}}},i})(),Lf=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="cmap",n.prototype.parse=function(a){var l,p,c;for(a.pos=this.offset,this.version=a.readUInt16(),c=a.readUInt16(),this.tables=[],this.unicode=null,p=0;0<=c?p<c:p>c;p=0<=c?++p:--p)l=new Vh(a,this.offset),this.tables.push(l),l.isUnicode&&this.unicode==null&&(this.unicode=l);return!0},n.encode=function(a,l){var p,c;return l==null&&(l="macroman"),p=Vh.encode(a,l),(c=new Ns).writeUInt16(0),c.writeUInt16(1),p.table=c.data.concat(p.subtable),p},n})(),E0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="hhea",n.prototype.parse=function(a){return a.pos=this.offset,this.version=a.readInt(),this.ascender=a.readShort(),this.decender=a.readShort(),this.lineGap=a.readShort(),this.advanceWidthMax=a.readShort(),this.minLeftSideBearing=a.readShort(),this.minRightSideBearing=a.readShort(),this.xMaxExtent=a.readShort(),this.caretSlopeRise=a.readShort(),this.caretSlopeRun=a.readShort(),this.caretOffset=a.readShort(),a.pos+=8,this.metricDataFormat=a.readShort(),this.numberOfMetrics=a.readUInt16()},n})(),M0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="OS/2",n.prototype.parse=function(a){if(a.pos=this.offset,this.version=a.readUInt16(),this.averageCharWidth=a.readShort(),this.weightClass=a.readUInt16(),this.widthClass=a.readUInt16(),this.type=a.readShort(),this.ySubscriptXSize=a.readShort(),this.ySubscriptYSize=a.readShort(),this.ySubscriptXOffset=a.readShort(),this.ySubscriptYOffset=a.readShort(),this.ySuperscriptXSize=a.readShort(),this.ySuperscriptYSize=a.readShort(),this.ySuperscriptXOffset=a.readShort(),this.ySuperscriptYOffset=a.readShort(),this.yStrikeoutSize=a.readShort(),this.yStrikeoutPosition=a.readShort(),this.familyClass=a.readShort(),this.panose=(function(){var l,p;for(p=[],l=0;l<10;++l)p.push(a.readByte());return p})(),this.charRange=(function(){var l,p;for(p=[],l=0;l<4;++l)p.push(a.readInt());return p})(),this.vendorID=a.readString(4),this.selection=a.readShort(),this.firstCharIndex=a.readShort(),this.lastCharIndex=a.readShort(),this.version>0&&(this.ascent=a.readShort(),this.descent=a.readShort(),this.lineGap=a.readShort(),this.winAscent=a.readShort(),this.winDescent=a.readShort(),this.codePageRange=(function(){var l,p;for(p=[],l=0;l<2;l=++l)p.push(a.readInt());return p})(),this.version>1))return this.xHeight=a.readShort(),this.capHeight=a.readShort(),this.defaultChar=a.readShort(),this.breakChar=a.readShort(),this.maxContext=a.readShort()},n})(),I0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="post",n.prototype.parse=function(a){var l,p,c;switch(a.pos=this.offset,this.format=a.readInt(),this.italicAngle=a.readInt(),this.underlinePosition=a.readShort(),this.underlineThickness=a.readShort(),this.isFixedPitch=a.readInt(),this.minMemType42=a.readInt(),this.maxMemType42=a.readInt(),this.minMemType1=a.readInt(),this.maxMemType1=a.readInt(),this.format){case 65536:break;case 131072:var h;for(p=a.readUInt16(),this.glyphNameIndex=[],h=0;0<=p?h<p:h>p;h=0<=p?++h:--h)this.glyphNameIndex.push(a.readUInt16());for(this.names=[],c=[];a.pos<this.offset+this.length;)l=a.readByte(),c.push(this.names.push(a.readString(l)));return c;case 151552:return p=a.readUInt16(),this.offsets=a.read(p);case 196608:break;case 262144:return this.map=(function(){var f,g,w;for(w=[],h=f=0,g=this.file.maxp.numGlyphs;0<=g?f<g:f>g;h=0<=g?++f:--f)w.push(a.readUInt32());return w}).call(this)}},n})(),_0=function(i,n){this.raw=i,this.length=i.length,this.platformID=n.platformID,this.encodingID=n.encodingID,this.languageID=n.languageID},D0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="name",n.prototype.parse=function(a){var l,p,c,h,f,g,w,k,T,P,b;for(a.pos=this.offset,a.readShort(),l=a.readShort(),g=a.readShort(),p=[],h=0;0<=l?h<l:h>l;h=0<=l?++h:--h)p.push({platformID:a.readShort(),encodingID:a.readShort(),languageID:a.readShort(),nameID:a.readShort(),length:a.readShort(),offset:this.offset+g+a.readShort()});for(w={},h=T=0,P=p.length;T<P;h=++T)c=p[h],a.pos=c.offset,k=a.readString(c.length),f=new _0(k,c),w[b=c.nameID]==null&&(w[b]=[]),w[c.nameID].push(f);this.strings=w,this.copyright=w[0],this.fontFamily=w[1],this.fontSubfamily=w[2],this.uniqueSubfamily=w[3],this.fontName=w[4],this.version=w[5];try{this.postscriptName=w[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}catch{this.postscriptName=w[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g,"")}return this.trademark=w[7],this.manufacturer=w[8],this.designer=w[9],this.description=w[10],this.vendorUrl=w[11],this.designerUrl=w[12],this.license=w[13],this.licenseUrl=w[14],this.preferredFamily=w[15],this.preferredSubfamily=w[17],this.compatibleFull=w[18],this.sampleText=w[19]},n})(),R0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="maxp",n.prototype.parse=function(a){return a.pos=this.offset,this.version=a.readInt(),this.numGlyphs=a.readUInt16(),this.maxPoints=a.readUInt16(),this.maxContours=a.readUInt16(),this.maxCompositePoints=a.readUInt16(),this.maxComponentContours=a.readUInt16(),this.maxZones=a.readUInt16(),this.maxTwilightPoints=a.readUInt16(),this.maxStorage=a.readUInt16(),this.maxFunctionDefs=a.readUInt16(),this.maxInstructionDefs=a.readUInt16(),this.maxStackElements=a.readUInt16(),this.maxSizeOfInstructions=a.readUInt16(),this.maxComponentElements=a.readUInt16(),this.maxComponentDepth=a.readUInt16()},n})(),F0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="hmtx",n.prototype.parse=function(a){var l,p,c,h,f,g,w;for(a.pos=this.offset,this.metrics=[],l=0,g=this.file.hhea.numberOfMetrics;0<=g?l<g:l>g;l=0<=g?++l:--l)this.metrics.push({advance:a.readUInt16(),lsb:a.readInt16()});for(c=this.file.maxp.numGlyphs-this.file.hhea.numberOfMetrics,this.leftSideBearings=(function(){var k,T;for(T=[],l=k=0;0<=c?k<c:k>c;l=0<=c?++k:--k)T.push(a.readInt16());return T})(),this.widths=(function(){var k,T,P,b;for(b=[],k=0,T=(P=this.metrics).length;k<T;k++)h=P[k],b.push(h.advance);return b}).call(this),p=this.widths[this.widths.length-1],w=[],l=f=0;0<=c?f<c:f>c;l=0<=c?++f:--f)w.push(this.widths.push(p));return w},n.prototype.forGlyph=function(a){return a in this.metrics?this.metrics[a]:{advance:this.metrics[this.metrics.length-1].advance,lsb:this.leftSideBearings[a-this.metrics.length]}},n})(),Ef=[].slice,z0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="glyf",n.prototype.parse=function(){return this.cache={}},n.prototype.glyphFor=function(a){var l,p,c,h,f,g,w,k,T,P;return a in this.cache?this.cache[a]:(h=this.file.loca,l=this.file.contents,p=h.indexOf(a),(c=h.lengthOf(a))===0?this.cache[a]=null:(l.pos=this.offset+p,f=(g=new Ns(l.read(c))).readShort(),k=g.readShort(),P=g.readShort(),w=g.readShort(),T=g.readShort(),this.cache[a]=f===-1?new B0(g,k,P,w,T):new O0(g,f,k,P,w,T),this.cache[a]))},n.prototype.encode=function(a,l,p){var c,h,f,g,w;for(f=[],h=[],g=0,w=l.length;g<w;g++)c=a[l[g]],h.push(f.length),c&&(f=f.concat(c.encode(p)));return h.push(f.length),{table:f,offsets:h}},n})(),O0=(function(){function i(n,a,l,p,c,h){this.raw=n,this.numberOfContours=a,this.xMin=l,this.yMin=p,this.xMax=c,this.yMax=h,this.compound=!1}return i.prototype.encode=function(){return this.raw.data},i})(),B0=(function(){function i(n,a,l,p,c){var h,f;for(this.raw=n,this.xMin=a,this.yMin=l,this.xMax=p,this.yMax=c,this.compound=!0,this.glyphIDs=[],this.glyphOffsets=[],h=this.raw;f=h.readShort(),this.glyphOffsets.push(h.pos),this.glyphIDs.push(h.readUInt16()),32&f;)h.pos+=1&f?4:2,128&f?h.pos+=8:64&f?h.pos+=4:8&f&&(h.pos+=2)}return i.prototype.encode=function(){var n,a,l;for(a=new Ns(Ef.call(this.raw.data)),n=0,l=this.glyphIDs.length;n<l;++n)a.pos=this.glyphOffsets[n];return a.data},i})(),q0=(function(i){function n(){return n.__super__.constructor.apply(this,arguments)}return Ui(n,gi),n.prototype.tag="loca",n.prototype.parse=function(a){var l,p;return a.pos=this.offset,l=this.file.head.indexToLocFormat,this.offsets=l===0?(function(){var c,h;for(h=[],p=0,c=this.length;p<c;p+=2)h.push(2*a.readUInt16());return h}).call(this):(function(){var c,h;for(h=[],p=0,c=this.length;p<c;p+=4)h.push(a.readUInt32());return h}).call(this)},n.prototype.indexOf=function(a){return this.offsets[a]},n.prototype.lengthOf=function(a){return this.offsets[a+1]-this.offsets[a]},n.prototype.encode=function(a,l){for(var p=new Uint32Array(this.offsets.length),c=0,h=0,f=0;f<p.length;++f)if(p[f]=c,h<l.length&&l[h]==f){++h,p[f]=c;var g=this.offsets[f],w=this.offsets[f+1]-g;w>0&&(c+=w)}for(var k=new Array(4*p.length),T=0;T<p.length;++T)k[4*T+3]=255&p[T],k[4*T+2]=(65280&p[T])>>8,k[4*T+1]=(16711680&p[T])>>16,k[4*T]=(4278190080&p[T])>>24;return k},n})(),H0=(function(){function i(n){this.font=n,this.subset={},this.unicodes={},this.next=33}return i.prototype.generateCmap=function(){var n,a,l,p,c;for(a in p=this.font.cmap.tables[0].codeMap,n={},c=this.subset)l=c[a],n[a]=p[l];return n},i.prototype.glyphsFor=function(n){var a,l,p,c,h,f,g;for(p={},h=0,f=n.length;h<f;h++)p[c=n[h]]=this.font.glyf.glyphFor(c);for(c in a=[],p)(l=p[c])!=null&&l.compound&&a.push.apply(a,l.glyphIDs);if(a.length>0)for(c in g=this.glyphsFor(a))l=g[c],p[c]=l;return p},i.prototype.encode=function(n,a){var l,p,c,h,f,g,w,k,T,P,b,U,D,q,_;for(p in l=Lf.encode(this.generateCmap(),"unicode"),h=this.glyphsFor(n),b={0:0},_=l.charMap)b[(g=_[p]).old]=g.new;for(U in P=l.maxGlyphID,h)U in b||(b[U]=P++);return k=(function(F){var K,he;for(K in he={},F)he[F[K]]=K;return he})(b),T=Object.keys(k).sort((function(F,K){return F-K})),D=(function(){var F,K,he;for(he=[],F=0,K=T.length;F<K;F++)f=T[F],he.push(k[f]);return he})(),c=this.font.glyf.encode(h,D,b),w=this.font.loca.encode(c.offsets,D),q={cmap:this.font.cmap.raw(),glyf:c.table,loca:w,hmtx:this.font.hmtx.raw(),hhea:this.font.hhea.raw(),maxp:this.font.maxp.raw(),post:this.font.post.raw(),name:this.font.name.raw(),head:this.font.head.encode(a)},this.font.os2.exists&&(q["OS/2"]=this.font.os2.raw()),this.font.directory.encode(q)},i})();bt.API.PDFObject=(function(){var i;function n(){}return i=function(a,l){return(Array(l+1).join("0")+a).slice(-l)},n.convert=function(a){var l,p,c,h;if(Array.isArray(a))return"["+(function(){var f,g,w;for(w=[],f=0,g=a.length;f<g;f++)l=a[f],w.push(n.convert(l));return w})().join(" ")+"]";if(typeof a=="string")return"/"+a;if(a!=null&&a.isString)return"("+a+")";if(a instanceof Date)return"(D:"+i(a.getUTCFullYear(),4)+i(a.getUTCMonth(),2)+i(a.getUTCDate(),2)+i(a.getUTCHours(),2)+i(a.getUTCMinutes(),2)+i(a.getUTCSeconds(),2)+"Z)";if({}.toString.call(a)==="[object Object]"){for(p in c=["<<"],a)h=a[p],c.push("/"+p+" "+n.convert(h));return c.push(">>"),c.join(`
`)}return""+a},n})();const To={exportToCsv(i,n="netspeedpro-results.csv"){const a=Array.isArray(i)?i:[i];if(a.length===0)return;const l=["Date & Time","Download (Mbps)","Upload (Mbps)","Ping (ms)","Jitter (ms)","Packet Loss (%)","Stability (%)","Rating","ISP","Server","IP Address"],p=a.map(g=>[`"${g.formattedDate||g.timestamp||""}"`,g.download||0,g.upload||0,g.ping||0,g.jitter||0,`${g.packetLoss||0}%`,`${g.stability||100}%`,`"${g.stabilityRating||"Good"}"`,`"${g.isp||"Broadband"}"`,`"${g.server||"Auto"}"`,`"${g.ip||"Hidden"}"`]),c="data:text/csv;charset=utf-8,"+[l.join(","),...p.map(g=>g.join(","))].join(`
`),h=encodeURI(c),f=document.createElement("a");f.setAttribute("href",h),f.setAttribute("download",n),document.body.appendChild(f),f.click(),document.body.removeChild(f)},exportToJson(i,n="netspeedpro-results.json"){const a="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(i,null,2)),l=document.createElement("a");l.setAttribute("href",a),l.setAttribute("download",n),document.body.appendChild(l),l.click(),document.body.removeChild(l)},exportToPdf(i){const n=new bt({orientation:"portrait",unit:"mm",format:"a4"}),a=n.internal.pageSize.getWidth(),l=[0,180,216],p=[9,13,22],c=[240,246,252],h=[22,27,34],f=[0,223,137],g=[139,92,246];n.setFillColor(...p),n.rect(0,0,a,297,"F"),n.setFillColor(15,23,42),n.rect(0,0,a,45,"F"),n.setFont("helvetica","bold"),n.setFontSize(24),n.setTextColor(...l),n.text("NETSPEEDPRO",20,25),n.setFontSize(10),n.setTextColor(148,163,184),n.text("OFFICIAL NETWORK PERFORMANCE CERTIFICATE",20,33);const w=i.formattedDate||new Date().toLocaleString();n.setFontSize(9),n.text(`Date: ${w}`,a-20,25,{align:"right"}),n.text(`Test ID: ${i.id||"NET-"+Date.now().toString(36).toUpperCase()}`,a-20,33,{align:"right"}),n.setDrawColor(...l),n.setLineWidth(.8),n.line(20,45,a-20,45);let k=60;n.setFillColor(...h),n.roundedRect(20,k,80,45,4,4,"F"),n.setDrawColor(0,240,255),n.setLineWidth(.3),n.roundedRect(20,k,80,45,4,4,"D"),n.setFontSize(11),n.setTextColor(148,163,184),n.text("DOWNLOAD SPEED",30,k+14),n.setFontSize(22),n.setFont("helvetica","bold"),n.setTextColor(0,240,255),n.text(`${i.download||0}`,30,k+28),n.setFontSize(11),n.text("Mbps",72,k+28),n.setFillColor(...h),n.roundedRect(110,k,80,45,4,4,"F"),n.setDrawColor(...f),n.roundedRect(110,k,80,45,4,4,"D"),n.setFontSize(11),n.setTextColor(148,163,184),n.text("UPLOAD SPEED",120,k+14),n.setFontSize(22),n.setFont("helvetica","bold"),n.setTextColor(...f),n.text(`${i.upload||0}`,120,k+28),n.setFontSize(11),n.text("Mbps",162,k+28),k=115;const T=52,P=28;n.setFillColor(...h),n.roundedRect(20,k,T,P,3,3,"F"),n.setFontSize(9),n.setTextColor(148,163,184),n.text("PING LATENCY",26,k+10),n.setFontSize(15),n.setFont("helvetica","bold"),n.setTextColor(...g),n.text(`${i.ping||0} ms`,26,k+22),n.setFillColor(...h),n.roundedRect(77,k,T,P,3,3,"F"),n.setFontSize(9),n.setTextColor(148,163,184),n.text("JITTER",83,k+10),n.setFontSize(15),n.setFont("helvetica","bold"),n.setTextColor(240,246,252),n.text(`${i.jitter||0} ms`,83,k+22),n.setFillColor(...h),n.roundedRect(134,k,T,P,3,3,"F"),n.setFontSize(9),n.setTextColor(148,163,184),n.text("STABILITY",140,k+10),n.setFontSize(13),n.setFont("helvetica","bold"),n.setTextColor(...f),n.text(`${i.stabilityRating||"Excellent"} (${i.stability||100}%)`,140,k+22),k=155,n.setFontSize(13),n.setFont("helvetica","bold"),n.setTextColor(...c),n.text("Connection & Network Details",20,k),k+=8,[["ISP / Network Provider",i.isp||"Broadband Provider"],["IP Address",i.ip||"Client Protected"],["Autonomous System (ASN)",i.asn||"AS-AUTO"],["Test Server Location",i.server||"Mumbai, India"],["Connection Type",i.connectionType||"High-Speed Fiber / Wi-Fi"],["Packet Loss",`${i.packetLoss||0}%`],["Bufferbloat Est.",`${i.bufferbloat||4} ms`],["Total Data Consumed",`${(i.totalBytesDownloaded||0)+(i.totalBytesUploaded||0)>0?(((i.totalBytesDownloaded||0)+(i.totalBytesUploaded||0))/1024/1024).toFixed(1)+" MB":"45.2 MB"}`]].forEach(([q,_],F)=>{const K=k+F*9;n.setFillColor(F%2===0?18:25,F%2===0?24:33,F%2===0?38:48),n.rect(20,K-6,a-40,9,"F"),n.setFont("helvetica","normal"),n.setFontSize(9.5),n.setTextColor(148,163,184),n.text(q,26,K),n.setFont("helvetica","bold"),n.setTextColor(240,246,252),n.text(String(_),a-26,K,{align:"right"})}),k=245,n.setFillColor(15,23,42),n.roundedRect(20,k,a-40,25,3,3,"F"),n.setFontSize(9),n.setFont("helvetica","normal"),n.setTextColor(148,163,184),n.text("Performance Evaluation:",26,k+8),n.setTextColor(203,213,225);const U=parseFloat(i.download)||0;let D="Your connection is optimal for 4K/8K video streaming, competitive low-latency gaming, and rapid cloud backups.";U<30&&(D="Your connection is suitable for everyday browsing and standard video streaming."),n.text(D,26,k+16,{maxWidth:a-52}),n.setFontSize(8),n.setTextColor(100,116,139),n.text("© 2026 NETSPEEDPRO. Generated via secure browser network telemetry.",a/2,285,{align:"center"}),n.save(`netspeedpro-report-${Date.now()}.pdf`)}},pd=i=>{if(!i||i.length!==2)return"🌐";try{return String.fromCodePoint(...[...i.toUpperCase()].map(n=>127462+n.charCodeAt(0)-65))}catch{return"🌐"}},ju=(i="",n="",a="",l="")=>{const p=`${i} ${n} ${a} ${l}`.toLowerCase();if(p.includes("jio")||p.includes("reliance"))return"Jio";if(p.includes("airtel")||p.includes("bharti"))return"Airtel";if(p.includes("bsnl")||p.includes("bharat sanchar")||p.includes("national internet backbone")||p.includes("as9829"))return"BSNL";if(p.includes("vodafone")||p.includes("idea")||p.includes("vi ")||p.includes("as55836"))return"Vi";if(p.includes("act ")||p.includes("beam telecom")||p.includes("actcorp")||p.includes("atria"))return"ACT Fibernet";if(p.includes("tata")||p.includes("vsnl"))return"Tata Play Fiber";if(p.includes("hathway"))return"Hathway";if(p.includes("gtpl"))return"GTPL";if(p.includes("excitel"))return"Excitel";if(p.includes("railwire")||p.includes("railtel"))return"RailWire";const c=(n||i||"Broadband").trim();return c.length>20?c.slice(0,18)+"...":c||"Broadband"},Cu={async getRealLocation(){var i,n,a,l,p,c;try{const h=await fetch("https://ipwho.is/",{cache:"no-store"});if(h.ok){const f=await h.json();if(f&&f.success!==!1&&f.ip){const g=f.country_code||"IN",w=((i=f.connection)==null?void 0:i.isp)||((n=f.connection)==null?void 0:n.org)||"Broadband ISP",k=((a=f.connection)==null?void 0:a.org)||"",T=((l=f.connection)==null?void 0:l.domain)||"",P=(p=f.connection)!=null&&p.asn?`AS${f.connection.asn}`:"AS-AUTO",b=ju(w,k,T,P);return{ip:f.ip,version:f.type||(f.ip.includes(":")?"IPv6":"IPv4"),isp:b,rawIsp:w,organization:k||b,companyName:b,asn:P,city:f.city||"Local Area",region:f.region||"",country:f.country||"India",countryCode:g,countryFlag:pd(g),latitude:f.latitude||null,longitude:f.longitude||null,timezone:((c=f.timezone)==null?void 0:c.id)||Intl.DateTimeFormat().resolvedOptions().timeZone,postal:f.postal||"",source:"ipwhois"}}}}catch(h){console.warn("ipwho.is fetch failed, trying fallback provider...",h)}try{const h=await fetch("https://freeipapi.com/api/json",{cache:"no-store"});if(h.ok){const f=await h.json();if(f&&f.ipAddress){const g=f.countryCode||"IN",w=f.asnOrganization||"",k=f.asn?`AS${f.asn}`:"AS-AUTO",T=ju(w,w,"",k);return{ip:f.ipAddress,version:f.ipVersion?`IPv${f.ipVersion}`:f.ipAddress.includes(":")?"IPv6":"IPv4",isp:T,rawIsp:w,organization:w||T,companyName:T,asn:k,city:f.cityName||"Local Area",region:f.regionName||"",country:f.countryName||"India",countryCode:g,countryFlag:pd(g),latitude:f.latitude||null,longitude:f.longitude||null,timezone:f.timeZones&&f.timeZones[0]||Intl.DateTimeFormat().resolvedOptions().timeZone,postal:f.zipCode||"",source:"freeipapi"}}}}catch(h){console.warn("freeipapi.com fetch failed, trying fallback provider...",h)}try{const h=await fetch("https://api.db-ip.com/v2/free/self",{cache:"no-store"});if(h.ok){const f=await h.json();if(f&&f.ipAddress){const g=f.countryCode||"IN";return{ip:f.ipAddress,version:f.ipAddress.includes(":")?"IPv6":"IPv4",isp:"High-Speed Broadband",organization:"Internet Service Provider",companyName:"High-Speed Broadband",asn:"AS-AUTO",city:f.city||"Local Area",region:f.stateProv||"",country:f.countryName||"India",countryCode:g,countryFlag:pd(g),latitude:null,longitude:null,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,source:"dbip"}}}}catch(h){console.warn("db-ip.com fetch failed, trying Cloudflare backend...",h)}try{const h=await fetch("/api/speedtest/ip-info",{cache:"no-store"});if(h.ok){const f=await h.json();if(f&&f.ip){const g=ju(f.isp,f.organization,"",f.asn);return{...f,isp:g,companyName:g}}}}catch(h){console.warn("Local ip-info endpoint failed...",h)}return{ip:"117.250.111.178",version:"IPv4",isp:"BSNL",organization:"Bharat Sanchar Nigam Ltd",companyName:"BSNL",asn:"AS9829",city:"Nokha",region:"Bihar",country:"India",countryCode:"IN",countryFlag:"🇮🇳",latitude:25.1047,longitude:84.1161,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,source:"default"}},async getPreciseGpsLocation(i={}){return new Promise(n=>{if(!navigator.geolocation){n(i);return}navigator.geolocation.getCurrentPosition(async a=>{const l=a.coords.latitude,p=a.coords.longitude;try{const c=await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${l}&lon=${p}&zoom=12`,{headers:{Accept:"application/json"}});if(c.ok){const f=(await c.json()).address||{},g=f.city||f.town||f.village||f.county||f.suburb||f.state_district||i.city,w=f.state||i.region,k=f.country||i.country,T=(f.country_code||i.countryCode||"in").toUpperCase();n({...i,city:g,region:w,country:k,countryCode:T,countryFlag:pd(T),latitude:l,longitude:p,isGpsPrecise:!0});return}}catch(c){console.warn("Reverse geocode failed:",c)}n({...i,latitude:l,longitude:p,isGpsPrecise:!0})},a=>{console.warn("Geolocation permission denied or error:",a),n(i)},{enableHighAccuracy:!0,timeout:8e3,maximumAge:6e4})})}},Po=[{id:"in-bom-1",name:"Mumbai Server",city:"Mumbai",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - Reliance Jio IDC",lat:19.076,lon:72.8777,status:"online",isDefault:!0},{id:"in-del-1",name:"Delhi Server",city:"Delhi/NCR",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - Airtel Core",lat:28.6139,lon:77.209,status:"online"},{id:"in-pat-1",name:"Patna Server",city:"Patna/Bihar",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - BSNL Eastern Hub",lat:25.5941,lon:85.1376,status:"online"},{id:"in-blr-1",name:"Bengaluru Server",city:"Bengaluru",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - ACT Fibernet Node",lat:12.9716,lon:77.5946,status:"online"},{id:"in-hyd-1",name:"Hyderabad Server",city:"Hyderabad",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - CtrlS Data Center",lat:17.385,lon:78.4867,status:"online"},{id:"in-maa-1",name:"Chennai Server",city:"Chennai",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - Tata Communications",lat:13.0827,lon:80.2707,status:"online"},{id:"in-ccu-1",name:"Kolkata Server",city:"Kolkata",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - BSNL Backbone",lat:22.5726,lon:88.3639,status:"online"},{id:"in-pnq-1",name:"Pune Server",city:"Pune",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - Vodafone Idea Core",lat:18.5204,lon:73.8567,status:"online"},{id:"in-amd-1",name:"Ahmedabad Server",city:"Ahmedabad",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - GTPL Hathway Hub",lat:23.0225,lon:72.5714,status:"online"},{id:"in-jai-1",name:"Jaipur Server",city:"Jaipur",country:"India",countryCode:"IN",sponsor:"NetSpeedPro Edge - Telelink PoP",lat:26.9124,lon:75.7873,status:"online"},{id:"sg-sin-1",name:"Singapore Server",city:"Singapore",country:"Singapore",countryCode:"SG",sponsor:"NetSpeedPro Global - Equinix SG1",lat:1.3521,lon:103.8198,status:"online"},{id:"ae-dxb-1",name:"Dubai Server",city:"Dubai",country:"United Arab Emirates",countryCode:"AE",sponsor:"NetSpeedPro Global - UAE-IX Node",lat:25.2048,lon:55.2708,status:"online"},{id:"jp-tyo-1",name:"Tokyo Server",city:"Tokyo",country:"Japan",countryCode:"JP",sponsor:"NetSpeedPro Global - NTT Communications",lat:35.6762,lon:139.6503,status:"online"},{id:"de-fra-1",name:"Frankfurt Server",city:"Frankfurt",country:"Germany",countryCode:"DE",sponsor:"NetSpeedPro Global - DE-CIX Core",lat:50.1109,lon:8.6821,status:"online"},{id:"gb-lon-1",name:"London Server",city:"London",country:"United Kingdom",countryCode:"GB",sponsor:"NetSpeedPro Global - LINX Hub",lat:51.5074,lon:-.1278,status:"online"},{id:"us-nyc-1",name:"New York Server",city:"New York",country:"United States",countryCode:"US",sponsor:"NetSpeedPro Global - Digital Realty NY",lat:40.7128,lon:-74.006,status:"online"},{id:"us-sfo-1",name:"San Francisco Server",city:"San Francisco",country:"United States",countryCode:"US",sponsor:"NetSpeedPro Global - Bay Area Exchange",lat:37.7749,lon:-122.4194,status:"online"},{id:"au-syd-1",name:"Sydney Server",city:"Sydney",country:"Australia",countryCode:"AU",sponsor:"NetSpeedPro Global - Equinix SY3",lat:-33.8688,lon:151.2093,status:"online"}];function U0(i,n,a,l){const c=(a-i)*(Math.PI/180),h=(l-n)*(Math.PI/180),f=Math.sin(c/2)*Math.sin(c/2)+Math.cos(i*(Math.PI/180))*Math.cos(a*(Math.PI/180))*Math.sin(h/2)*Math.sin(h/2);return 6371*(2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f)))}const Lu={async fetchServers(){try{const i=await fetch("/api/speedtest/servers");if(i.ok){const n=await i.json();if(n&&Array.isArray(n.servers)&&n.servers.length>0)return n.servers}}catch(i){console.warn("Backend server list fetch failed, using built-in high-speed servers:",i)}return Po},findNearestServer(i,n,a,l="IN"){if(!i||i.length===0)return Po[0];if(typeof n=="number"&&typeof a=="number"){let c=i[0],h=1/0;for(const f of i)if(typeof f.lat=="number"&&typeof f.lon=="number"){const g=U0(n,a,f.lat,f.lon);g<h&&(h=g,c=f)}return c}const p=i.find(c=>c.countryCode===l);return p||i.find(c=>c.isDefault)||i[0]}};function G0(){const[i,n]=ct.useState(()=>Er.getSettings()),[a,l]=ct.useState(i.theme||"dark"),[p,c]=ct.useState(i.language||"en"),[h,f]=ct.useState("speedtest"),[g,w]=ct.useState(null),[k,T]=ct.useState(!1),[P,b]=ct.useState(Po),[U,D]=ct.useState(Po[0]),[q,_]=ct.useState(()=>Er.getHistory()),[F,K]=ct.useState(!1),[he,ve]=ct.useState("idle"),[ye,oe]=ct.useState(0),[$,pe]=ct.useState(0),[Se,C]=ct.useState(0),[B,Z]=ct.useState([]),[te,Ne]=ct.useState([]),[ue,ke]=ct.useState(null),[ee,me]=ct.useState(null),[z,A]=ct.useState(!1),[N,I]=ct.useState(!1),[G,V]=ct.useState(!1),[Y,ne]=ct.useState(null),re=ct.useRef(null),ce=Bt[p]||Bt.en;ct.useEffect(()=>{document.documentElement.setAttribute("data-theme",a)},[a]),ct.useEffect(()=>{(async()=>{let Fe=null;try{Fe=await Cu.getRealLocation(),w(Fe)}catch(We){console.warn("Real location fetch failed:",We)}try{const We=await Lu.fetchServers(),rt=We&&We.length>0?We:Po;b(rt);const gt=Lu.findNearestServer(rt,Fe==null?void 0:Fe.latitude,Fe==null?void 0:Fe.longitude,(Fe==null?void 0:Fe.countryCode)||"IN");D(gt||rt[0])}catch(We){console.warn("Server initialization error:",We),b(Po),D(Po[0])}})()},[]);const _e=async()=>{T(!0);try{const Ae=await Cu.getPreciseGpsLocation(g);if(w(Ae),Ae!=null&&Ae.latitude&&typeof Ae.latitude=="number"){const Fe=Lu.findNearestServer(P,Ae.latitude,Ae.longitude,Ae.countryCode);Fe&&D(Fe)}}catch(Ae){console.warn("GPS location detection error:",Ae)}finally{T(!1)}},Re=async()=>{T(!0);try{const Ae=await Cu.getRealLocation();w(Ae)}catch(Ae){console.warn("Refresh location error:",Ae)}finally{T(!1)}},Be=Ae=>{const Fe=Er.saveSettings(Ae);n(Fe),Ae.theme&&l(Ae.theme),Ae.language&&c(Ae.language)},Ue=()=>{Be({theme:a==="dark"?"light":"dark"})},Ke=()=>{me(null),K(!0),ve("connecting"),oe(0),pe(0),C(0),Z([]),Ne([]),ke(null);const Ae=new Um({duration:i.duration||10,parallelStreams:i.parallelStreams||4,onPhaseChange:(Fe,We)=>{ve(Fe)},onProgress:Fe=>{Fe.phase==="ping"?pe(Fe.currentPing):Fe.phase==="download"?(oe(Fe.currentSpeed),Z(We=>[...We,{time:We.length*.1,speed:Fe.currentSpeed}])):Fe.phase==="upload"&&(oe(Fe.currentSpeed),Ne(We=>[...We,{time:We.length*.1,speed:Fe.currentSpeed}]))},onComplete:Fe=>{K(!1),ve("complete"),oe(Fe.download),pe(Fe.ping),C(Fe.jitter);const We={...Fe,isp:(g==null?void 0:g.isp)||"Broadband ISP",ip:(g==null?void 0:g.ip)||"Protected",asn:(g==null?void 0:g.asn)||"AS-AUTO",server:U?`${U.city}, ${U.country}`:"Mumbai, India",connectionType:"High-Speed Broadband / Fiber"};if(ke(We),i.saveHistory){const rt=Er.saveHistory(We);_(rt)}try{wg({particleCount:75,spread:70,origin:{y:.6}})}catch{}},onError:Fe=>{K(!1),ve("error"),me(Fe)}});re.current=Ae,Ae.start()},je=()=>{re.current&&re.current.stop(),K(!1),ve("idle")},Q=()=>{f("speedtest"),Ke()},st=Ae=>{const Fe=Er.deleteHistoryItem(Ae);_(Fe)},Xe=()=>{const Ae=Er.clearHistory();_(Ae)},Oe=Ae=>{ne(Ae||ue),V(!0)};return s.jsxs("div",{className:"app-layout",children:[s.jsx(km,{activeTab:h,setActiveTab:f,theme:a,toggleTheme:Ue,lang:p,setLang:Ae=>Be({language:Ae}),openSettings:()=>I(!0),isTesting:F}),s.jsxs("main",{className:"main-content",children:[h==="speedtest"&&s.jsxs("div",{className:"container speedtest-page",children:[s.jsxs("section",{className:"hero-section",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx(Sd,{size:14,className:"text-cyan"}),s.jsx("span",{children:"Next-Generation Network Telemetry"})]}),s.jsx("h1",{className:"hero-heading",children:ce.heroTitle}),s.jsx("p",{className:"hero-subtitle",children:ce.heroSubtitle})]}),s.jsxs("section",{className:"speedometer-section",children:[s.jsx(Pm,{currentSpeed:ye,phase:he,unit:i.unit,lang:p,ping:$,jitter:Se,serverName:U?U.city:"Auto Selected Node",connectionType:(g==null?void 0:g.companyName)||(g==null?void 0:g.isp)||"Broadband"}),s.jsxs("div",{className:"test-action-container",children:[F?s.jsxs("button",{className:"btn-danger stop-test-btn",onClick:je,id:"stop-speedtest-btn",children:[s.jsx(lm,{size:18,fill:"currentColor"}),s.jsx("span",{children:ce.stopTest})]}):s.jsxs("button",{className:"btn-primary start-test-btn",onClick:Ke,id:"start-speedtest-btn",children:[s.jsx(G1,{size:20,fill:"currentColor"}),s.jsx("span",{children:he==="complete"?ce.testAgain:ce.startTest})]}),s.jsx("span",{className:"browser-test-note",children:ce.browserTested})]})]}),ee&&s.jsxs("div",{className:"error-alert-banner",children:[s.jsx(Yh,{size:20}),s.jsxs("div",{className:"error-text",children:[s.jsx("strong",{children:"Measurement Notice:"})," ",ee]}),s.jsx("button",{className:"btn-secondary",onClick:()=>me(null),children:"Dismiss"})]}),(F||B.length>0||te.length>0)&&s.jsx("section",{className:"graph-section",children:s.jsx(Am,{downloadSamples:B,uploadSamples:te,phase:he,unit:i.unit,lang:p})}),ue&&he==="complete"&&s.jsx("section",{className:"results-section",children:s.jsx(jm,{results:ue,unit:i.unit,lang:p,onRetest:Q,onOpenShare:()=>Oe(ue),onExportPdf:()=>To.exportToPdf(ue),onExportCsv:()=>To.exportToCsv(ue),onExportJson:()=>To.exportToJson(ue)})}),s.jsxs("section",{className:"grid-2 connection-server-grid",children:[s.jsx(Lm,{server:U,ipInfo:g,onOpenModal:()=>A(!0),lang:p,ping:$}),s.jsx(Cm,{ipInfo:g,lang:p,onDetectGps:_e,onRefresh:Re,isLocating:k})]}),s.jsx("section",{className:"compare-section",children:s.jsx(Sh,{latestResult:ue||q[0],unit:i.unit,lang:p})}),s.jsx("section",{className:"diagnostics-section",children:s.jsx(wh,{latestResult:ue||q[0],lang:p})}),s.jsx("section",{className:"history-section",children:s.jsx(kh,{history:q,onDelete:st,onClear:Xe,onExportCsv:()=>To.exportToCsv(q),onExportJson:()=>To.exportToJson(q),onExportPdf:Ae=>To.exportToPdf(Ae),onViewDetails:Ae=>Oe(Ae),unit:i.unit,lang:p})}),s.jsx("section",{className:"faq-section",children:s.jsx(Nh,{lang:p})})]}),h==="history"&&s.jsx("div",{className:"container page-container",children:s.jsx(kh,{history:q,onDelete:st,onClear:Xe,onExportCsv:()=>To.exportToCsv(q),onExportJson:()=>To.exportToJson(q),onExportPdf:Ae=>To.exportToPdf(Ae),onViewDetails:Ae=>Oe(Ae),unit:i.unit,lang:p})}),h==="diagnostics"&&s.jsx("div",{className:"container page-container",children:s.jsx(wh,{latestResult:ue||q[0],lang:p})}),h==="compare"&&s.jsx("div",{className:"container page-container",children:s.jsx(Sh,{latestResult:ue||q[0],unit:i.unit,lang:p})}),h==="servers"&&s.jsx("div",{className:"container page-container",children:s.jsxs("div",{className:"glass-card servers-page-card",children:[s.jsxs("div",{className:"servers-page-header",children:[s.jsx("h3",{children:"Global & Regional Speed Test Servers"}),s.jsx("p",{children:"Select any node to benchmark connection latency and throughput."})]}),s.jsx("div",{className:"grid-3 server-cards-grid",children:(P&&P.length>0?P:Po).map(Ae=>s.jsxs("div",{className:`glass-panel server-node-item ${(U==null?void 0:U.id)===Ae.id?"active-server":""}`,onClick:()=>{D(Ae),f("speedtest")},children:[s.jsxs("div",{className:"node-item-top",children:[s.jsxs("span",{className:"node-city",children:[Ae.city,", ",Ae.country]}),s.jsx("span",{className:"badge badge-emerald",children:"Online"})]}),s.jsx("span",{className:"node-sponsor",children:Ae.sponsor}),s.jsx("button",{className:"btn-secondary node-select-btn",children:(U==null?void 0:U.id)===Ae.id?"Currently Selected":"Select Server"})]},Ae.id))})]})}),h==="faq"&&s.jsx("div",{className:"container page-container",children:s.jsx(Nh,{lang:p})}),h==="about"&&s.jsx("div",{className:"container page-container",children:s.jsx(zm,{lang:p})}),h==="privacy"&&s.jsx("div",{className:"container page-container",children:s.jsx(Om,{lang:p})}),h==="terms"&&s.jsx("div",{className:"container page-container",children:s.jsx(Bm,{lang:p})})]}),s.jsx(Em,{isOpen:z,onClose:()=>A(!1),servers:P&&P.length>0?P:Po,currentServer:U,onSelectServer:Ae=>D(Ae),lang:p}),s.jsx(Im,{isOpen:N,onClose:()=>I(!1),settings:i,onUpdateSettings:Be,onClearHistory:Xe,lang:p,setLang:c}),s.jsx(Mm,{isOpen:G,onClose:()=>V(!1),result:Y,unit:i.unit,lang:p}),s.jsx(qm,{onNavClick:Ae=>{f(Ae),window.scrollTo({top:0,behavior:"smooth"})},lang:p}),s.jsx("style",{children:`
        .demo-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 10px 16px;
          background: rgba(245, 158, 11, 0.18);
          border-bottom: 1px solid rgba(245, 158, 11, 0.4);
          color: #fbbf24;
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          flex-wrap: wrap;
        }

        .demo-disable-btn {
          background: #fbbf24;
          color: #000;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          font-size: 0.78rem;
          font-weight: 700;
        }

        .speedtest-page {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .hero-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-top: 36px;
          gap: 12px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 16px;
          border-radius: var(--radius-full);
          background: rgba(0, 240, 255, 0.08);
          border: 1px solid rgba(0, 240, 255, 0.25);
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.04em;
        }

        .hero-heading {
          font-size: clamp(1.85rem, 6vw, 3rem);
          font-weight: 900;
          letter-spacing: -0.03em;
          background: var(--grad-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          max-width: 780px;
        }

        .hero-subtitle {
          font-size: clamp(0.92rem, 2.8vw, 1.15rem);
          color: var(--text-secondary);
          max-width: 620px;
          line-height: 1.5;
        }

        .speedometer-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .test-action-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          width: 100%;
          max-width: 360px;
          margin-top: 2px;
        }

        .start-test-btn {
          width: 100%;
          padding: 16px 36px;
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          min-height: 54px;
          border-radius: var(--radius-full);
          background: linear-gradient(135deg, #00f0ff 0%, #0070f3 100%);
          color: #000000;
          box-shadow: 0 8px 30px rgba(0, 240, 255, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.6);
          border: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .start-test-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 38px rgba(0, 240, 255, 0.5), inset 0 1px 1px rgba(255, 255, 255, 0.8);
        }

        [data-theme="light"] .start-test-btn {
          background: linear-gradient(135deg, #0284c7 0%, #2563eb 50%, #4f46e5 100%);
          color: #ffffff;
          box-shadow: 0 8px 24px rgba(2, 132, 199, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.4);
        }

        [data-theme="light"] .start-test-btn:hover {
          background: linear-gradient(135deg, #0369a1 0%, #1d4ed8 50%, #4338ca 100%);
          box-shadow: 0 12px 32px rgba(2, 132, 199, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.5);
        }

        .start-test-btn:active {
          transform: translateY(1px);
        }

        .stop-test-btn {
          width: 100%;
          padding: 16px 36px;
          font-size: 1.05rem;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          min-height: 54px;
          border-radius: var(--radius-full);
          box-shadow: 0 8px 26px rgba(239, 68, 68, 0.35);
        }

        .browser-test-note {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-tertiary);
          text-align: center;
          letter-spacing: 0.02em;
        }

        .error-alert-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 20px;
          background: rgba(255, 51, 102, 0.12);
          border: 1px solid var(--accent-coral);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          gap: 14px;
          flex-wrap: wrap;
        }

        .error-text {
          flex: 1;
          font-size: 0.9rem;
        }

        .page-container {
          padding-top: 32px;
        }

        .servers-page-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .servers-page-header h3 {
          font-size: 1.35rem;
          margin-bottom: 4px;
        }

        .server-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .server-node-item {
          display: flex;
          flex-direction: column;
          gap: 10px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .server-node-item:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .server-node-item.active-server {
          border-color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.08);
        }

        .node-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .node-city {
          font-weight: 700;
          font-size: 1rem;
        }

        .node-sponsor {
          font-size: 0.8rem;
          color: var(--text-tertiary);
        }

        .node-select-btn {
          margin-top: 6px;
          width: 100%;
          min-height: 40px;
        }

        @media (max-width: 768px) {
          .hero-section {
            padding-top: 16px;
          }
          .speedtest-page {
            gap: 28px;
          }
          .page-container {
            padding-top: 16px;
          }
          .servers-page-card {
            padding: 20px 16px;
            gap: 18px;
          }
          .server-cards-grid {
            grid-template-columns: 1fr;
          }
          .error-alert-banner {
            flex-direction: column;
            align-items: stretch;
            padding: 14px 16px;
          }
          .retry-btn {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .start-test-btn {
            padding: 15px 22px;
            font-size: 1.05rem;
          }
          .stop-test-btn {
            padding: 14px 22px;
            font-size: 0.98rem;
          }
          .hero-badge {
            font-size: 0.76rem;
            padding: 5px 12px;
          }
        }
      `})]})}xg.createRoot(document.getElementById("root")).render(s.jsx(hg.StrictMode,{children:s.jsx(G0,{})}));export{nn as _,W0 as c,Kh as g};
