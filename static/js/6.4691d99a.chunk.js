(this.webpackJsonpdev=this.webpackJsonpdev||[]).push([[6],{68:function(t,r,e){t.exports=e(69)},69:function(t,r,e){var n=function(t){"use strict";var r=Object.prototype,e=r.hasOwnProperty,n="function"===typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,r,e,n){var o=r&&r.prototype instanceof h?r:h,i=Object.create(o.prototype),a=new b(n||[]);return i._invoke=function(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=w(a,e);if(c){if(c===s)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var h=u(t,r,e);if("normal"===h.type){if(n=e.done?"completed":"suspendedYield",h.arg===s)continue;return{value:h.arg,done:e.done}}"throw"===h.type&&(n="completed",e.method="throw",e.arg=h.arg)}}}(t,e,a),i}function u(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=c;var s={};function h(){}function f(){}function l(){}var p={};p[o]=function(){return this};var y=Object.getPrototypeOf,v=y&&y(y(E([])));v&&v!==r&&e.call(v,o)&&(p=v);var d=l.prototype=h.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(r){t[r]=function(t){return this._invoke(r,t)}}))}function m(t){var r;this._invoke=function(n,o){function i(){return new Promise((function(r,i){!function r(n,o,i,a){var c=u(t[n],t,o);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"===typeof h&&e.call(h,"__await")?Promise.resolve(h.__await).then((function(t){r("next",t,i,a)}),(function(t){r("throw",t,i,a)})):Promise.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,a)}))}a(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function w(t,r){var e=t.iterator[r.method];if(void 0===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=void 0,w(t,r),"throw"===r.method))return s;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(e,t.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,s;var o=n.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,s):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,s)}function x(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function L(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function E(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return i.next=i}}return{next:_}}function _(){return{value:void 0,done:!0}}return f.prototype=d.constructor=l,l.constructor=f,l[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"===typeof t&&t.constructor;return!!r&&(r===f||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,l):(t.__proto__=l,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(d),t},t.awrap=function(t){return{__await:t}},g(m.prototype),m.prototype[i]=function(){return this},t.AsyncIterator=m,t.async=function(r,e,n,o){var i=new m(c(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(d),d[a]="Generator",d[o]=function(){return this},d.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=E,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),s},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),s}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;L(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:E(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},98:function(t,r,e){"use strict";e.r(r),e.d(r,"default",(function(){return i}));var n=e(68),o=e.n(n);function i(t){var r;return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(Array.isArray(t)){e.next=3;break}return console.info("Empty fontList passed to buildSearchIndex"),e.abrupt("return",[]);case 3:return r=t.slice().map((function(t,r){return{name:t.family,index:r}})),e.abrupt("return",r.sort((function(t,r){return t.name<r.name?-1:1})));case 5:case"end":return e.stop()}}))}}}]);
//# sourceMappingURL=6.4691d99a.chunk.js.map