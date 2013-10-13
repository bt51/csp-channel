(function(definition){if(typeof exports==="object"){module.exports=definition();}else if(typeof define==="function"&&define.amd){define(definition);}else{csp_channel=definition();}})(function(){return function(){
var b={};function n(a,c){var e=typeof c;"object"==e&&(e=c?c.constructor===Array?"array":Object.prototype.toString.call(c):"null");return Error(["No protocol method ",a," defined for type ",e,": ",c].join(""))}b.a={};b.a.h=function(a,c){if(a&&a.S)return a.S(a,c);throw n("csp.channel.ReadPort/take",a);};b.a.put=function(a,c,e){if(a&&a.T)return a.T(a,c,e);throw n("csp.channel.WritePort/put",a);};b.a.close=function(a){if(a&&a.Q)return a.Q(a);throw n("csp.channel.Channel/close",a);};
b.a.closed=function(a){if(a&&a.R)return a.R(a);throw n("csp.channel.Channel/closed",a);};b.a.s=function(a){if(a&&a.A)return a.A(a);throw n("csp.channel.Buffer/full",a);};b.a.remove=function(a){if(a&&a.B)return a.B(a);throw n("csp.channel.Buffer/remove",a);};b.a.add=function(a,c){if(a&&a.w)return a.w(a,c);throw n("csp.channel.Buffer/add",a);};b.a.f=function(a){if(a&&a.C)return a.C(a);throw n("csp.channel.Handler/active",a);};
b.a.d=function(a){if(a&&a.D)return a.D(a);throw n("csp.channel.Handler/commit",a);};b.a.m=function(a){if(a&&a.P)return a.P(a);throw n("csp.Core/deref",a);};b.a.count=function(a){if(a&&a.v)return a.v(a);throw n("csp.Core/count",a);};b.types={};
(function(a,c){function e(a,c,p,d,e){var g;for(g=0;g<e;g++)p[d+g]=a[c+g]}a.q=function(a,c,p,d){this.head=a;this.e=c;this.b=p;this.c=d};var d=a.q.prototype;d.pop=function(a){if(0===a.b)return null;var c=a.c[a.e];a.c[a.e]=null;a.e=(a.e+1)%a.c.length;a.b-=1;return c};d.unshift=function(a,c){a.c[a.head]=c;a.head=(a.head+1)%a.c.length;a.b+=1;return null};d.N=function(a,c){a.b+1===a.c.length&&a.U(a);a.unshift(a,c)};d.U=function(a){var c=Array(2*a.c.length);a.e<a.head?(e(a.c,a.e,c,0,a.b),a.e=0,a.head=a.b):
a.e>a.head?(e(a.c,a.e,c,0,a.c.length-a.e),e(a.c,0,c,a.c.length-a.e,a.head),a.e=0,a.head=a.b):(a.e=0,a.head=0);a.c=c};d.O=function(a,c){for(var p;0<a.b;a++)p=a.pop(a),c(p)&&a.unshift(a,p)};a.p=function(a,c){this.buffer=a;this.t=c};d=a.p.prototype;d.A=function(a){return a.buffer.b===a.t};d.B=function(a){return a.buffer.pop(a.buffer)};d.w=function(a,d){if(c.s(a))throw Error("Can't add to a full buffer");return a.buffer.unshift(a.buffer,d)};d.v=function(a){return a.buffer.b};a.o=function(a,c){this.buffer=
a;this.t=c};d=a.o.prototype;d.A=function(){return!1};d.B=function(a){return a.buffer.pop(a.buffer)};d.w=function(a,c){return a.buffer.b!==a.t?a.buffer.unshift(a.buffer,c):null};d.v=function(a){return a.buffer.b};a.r=function(a,c){this.buffer=a;this.t=c};d=a.r.prototype;d.A=function(){return!1};d.B=function(a){return a.buffer.pop(a.buffer)};d.w=function(a,d){a.buffer.b===a.t&&c.remove(a);return a.buffer.unshift(a.buffer,d)};d.v=function(a){return a.buffer.b}})(b.types,b.a);
b.g=function(a){return new b.types.q(0,0,0,Array(a))};function r(a){return{P:function(){return a}}}
var w=function(a){function c(){e=!0;d=!1;for(var a=!0,c=0;a&&1024>c;)(a=l.pop(l))&&a(),c+=1;e=!1;!(0<l.b)||d&&e||(d=!0,s())}var e=!1,d=!1,l=a(32),s=function(){if("undefined"!==typeof MessageChannel){var a=new MessageChannel;a.port1.onmessage=function(){c()};return function(){a.port2.postMessage(0)}}return"undefined"!==typeof setImmediate?function(){setImmediate(c)}:function(){setTimeout(c,0)}}();return{J:function(a){l.N(l,a);d&&e||(d=!0,s())}}}(b.g);
(function(a,c,e,d){function l(a){return c.f(a.k)}function s(a,c){this.k=a;this.V=c}a.n=function(a,c,d,g,m){this.i=a;this.G=c;this.l=d;this.F=g;this.buffer=m;this.closed=null};a=a.n.prototype;a.T=function(a,h,f){if(null===h)throw Error("Cant put null in a channel");if(a.closed||!c.f(f))return e(null);for(var g,m,k=!0;k;)if(k=!1,m=a.i.pop(a.i),null!==m){if(c.f(m))return g=c.d(m),c.d(f),d.J(function(){return g(h)}),e(null);k=!0}else{if(a.buffer&&!c.s(a.buffer))return c.d(f),c.add(a.buffer,h),e(null);
if(64<a.F)a.F=0,a.l.O(a.l,l);else if(a.F+=1,1024<a.l.b)throw Error("No more than 1024 pending takes on a single channel");a.l.N(a.l,new s(f,h))}};a.S=function(a,h){if(!c.f(h))return null;if(a.buffer&&0<c.count(a.buffer))return c.d(h),e(c.remove(a.buffer));var f,g;for(f=!0;f;)if(g=a.l.pop(a.l),null!==g){f=g.k;g=g.V;if(c.f(f))return f=c.d(f),c.d(h),d.J(f),e(g);f=!0}else{if(a.closed)return c.d(h),e(null);64<a.G?(a.G=0,a.i.O(a.i,c.f)):a.G+=1;if(1024<a.i.b)throw Error("No more than 1024 pending takes on a single channel");
a.i.N(a.i,h);return null}};a.Q=function(a){if(!a.closed){a.closed=!0;for(var e,f,g=!0;g;)g=!1,e=a.i.pop(a.i),null!==e&&(c.f(e)&&(f=c.d(e),d.J(function(){return f(null)})),g=!0)}return null};a.R=function(a){return!0===a.closed}})(b.types,b.a,r,w);b.j={k:function(a){return{C:function(){return!0},D:function(){return a}}}};
(function(a,c,e,d,l){function s(a,d){return{C:function(){return c.f(a)},D:function(){c.d(a);return d}}}function p(){var a=!0;return{C:function(){return a},D:function(){a=null;return!0}}}function h(a){var c,d,e=[];for(c=0;c<a;c++)e.push(0);for(c=1;c<a;c++)d=Math.floor(Math.random()*c),e[c]=e[d],e[d]=c;return e}function f(){return null}a.u=function(c){c="number"===typeof c?0!==c?a.I(c):null:c;return new a.types.n(a.g(32),0,a.g(32),0,c,null)};a.h=function(a,m,k){k=k||!0;if(a=c.h(a,e(m))){var f=c.m(a);
k?m(f):d(function(){return m(f)})}return null};a.put=function(a,m,k,h){k=k||f;h=h||!0;c.put(a,m,e(k))&&k!==f&&(h?k():d(k));return null};a.close=function(a){return c.close(a)};a.closed=function(a){return c.closed(a)};a.H=function(a,d,e){e=e||{};var f=p(),B=a.length,C=h(B),D=e.hasOwnProperty("priority"),y,u,q,t,v;for(u=0;u<B;u++)q=D?u:C[u],t=a[q],q=t.constructor===Array?t[0]:null,v=function(a,c){return a?s(f,function(){return d(null,a)}):s(f,function(a){return d(a,c)})}(q,t),(v=q?c.put(q,t[1],v):c.h(t,
v))&&(y=l([c.m(v),q?q:t]));return y?y:e.hasOwnProperty("default")&&c.f(f)&&c.d(f)?l([e["default"],"default"]):null};a.K=function(e,f,k,h){h=h||!0;if(e=a.H(e,f,k)){var l=c.m(e);h?f(l[0],l[1]):d(function(){return f(l[0],l[1])})}return null};a.I=function(c){return new a.types.p(a.g(c),c)};a.L=function(c){return new a.types.o(a.g(c),c)};a.M=function(c){return new a.types.r(a.g(c),c)};a.timeout=function(c){var d=a.u();setTimeout(function(){a.close(d)},c);return d};a.loop=function(){function a(){d.apply(null,
[a].concat(Array.prototype.slice.call(arguments)))}var c=Array.prototype.slice.call(arguments),d=c.pop();a.apply(null,c)}})(b,b.a,b.j.k,w.J,r);var x=["chan"],z=this;x[0]in z||!z.execScript||z.execScript("var "+x[0]);for(var A;x.length&&(A=x.shift());)x.length||void 0===b?z=z[A]?z[A]:z[A]={}:z[A]=b;b.a=b.a;b.impl=b.a;b.a.h=b.a.h;b.a.take=b.a.h;b.a.put=b.a.put;b.a.put=b.a.put;b.a.close=b.a.close;b.a.close=b.a.close;b.a.closed=b.a.closed;b.a.closed=b.a.closed;b.a.s=b.a.s;b.a.full=b.a.s;b.a.remove=b.a.remove;
b.a.remove=b.a.remove;b.a.add=b.a.add;b.a.add=b.a.add;b.a.f=b.a.f;b.a.active=b.a.f;b.a.d=b.a.d;b.a.commit=b.a.d;b.a.m=b.a.m;b.a.deref=b.a.m;b.a.count=b.a.count;b.a.count=b.a.count;b.types=b.types;b.types=b.types;b.types.q=b.types.q;b.types.RingBuffer=b.types.q;b.types.p=b.types.p;b.types.FixedBuffer=b.types.p;b.types.o=b.types.o;b.types.DroppingBuffer=b.types.o;b.types.r=b.types.r;b.types.SlidingBuffer=b.types.r;b.types.n=b.types.n;b.types.Channel=b.types.n;b.g=b.g;b.ring_buffer=b.g;b.j=b.j;
b.util=b.j;b.j.k=b.j.k;b.j.handler=b.j.k;b.u=b.u;b.chan=b.u;b.h=b.h;b.take=b.h;b.put=b.put;b.put=b.put;b.close=b.close;b.close=b.close;b.closed=b.closed;b.closed=b.closed;b.H=b.H;b.do_alts=b.H;b.K=b.K;b.alts=b.K;b.I=b.I;b.fixed_buffer=b.I;b.L=b.L;b.dropping_buffer=b.L;b.M=b.M;b.sliding_buffer=b.M;b.timeout=b.timeout;b.timeout=b.timeout;b.loop=b.loop;b.loop=b.loop;
return this.chan; }.call({});});
