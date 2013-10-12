(function(definition){if(typeof exports==="object"){module.exports=definition();}else if(typeof define==="function"&&define.amd){define(definition);}else{csp_channel=definition();}})(function(){return function(){
var b={};function n(a,c){var e=typeof c;"object"==e&&(e=c?c.constructor===Array?"array":Object.prototype.toString.call(c):"null");return Error(["No protocol method ",a," defined for type ",e,": ",c].join(""))}b.a={};b.a.g=function(a,c){if(a&&a.R)return a.R(a,c);throw n("csp.channel.ReadPort/take",a);};b.a.put=function(a,c,e){if(a&&a.S)return a.S(a,c,e);throw n("csp.channel.WritePort/put",a);};b.a.close=function(a){if(a&&a.P)return a.P(a);throw n("csp.channel.Channel/close",a);};
b.a.closed=function(a){if(a&&a.Q)return a.Q(a);throw n("csp.channel.Channel/closed",a);};b.a.s=function(a){if(a&&a.A)return a.A(a);throw n("csp.channel.Buffer/full",a);};b.a.remove=function(a){if(a&&a.B)return a.B(a);throw n("csp.channel.Buffer/remove",a);};b.a.add=function(a,c){if(a&&a.w)return a.w(a,c);throw n("csp.channel.Buffer/add",a);};b.a.f=function(a){if(a&&a.C)return a.C(a);throw n("csp.channel.Handler/active",a);};
b.a.d=function(a){if(a&&a.D)return a.D(a);throw n("csp.channel.Handler/commit",a);};b.a.m=function(a){if(a&&a.O)return a.O(a);throw n("csp.Core/deref",a);};b.a.count=function(a){if(a&&a.v)return a.v(a);throw n("csp.Core/count",a);};function q(a){return{O:function(){return a}}}var v={I:function(a){setTimeout(a,0)}};b.types={};
(function(a,c,e,d){function f(a){return c.f(a.k)}function h(a,f){this.k=a;this.V=f}a.n=function(a,f,c,g,m){this.h=a;this.G=f;this.l=c;this.F=g;this.buffer=m;this.closed=null};a=a.n.prototype;a.S=function(a,s,k){if(null===s)throw Error("Cant put null in a channel");if(a.closed||!c.f(k))return e(null);for(var g,m,l=!0;l;)if(l=!1,m=a.h.pop(a.h),null!==m){if(c.f(m))return g=c.d(m),c.d(k),d.I(function(){return g(s)}),e(null);l=!0}else{if(a.buffer&&!c.s(a.buffer))return c.d(k),c.add(a.buffer,s),e(null);
if(64<a.F)a.F=0,a.l.N(a.l,f);else if(a.F+=1,1024<a.l.b)throw Error("No more than 1024 pending takes on a single channel");a.l.T(a.l,new h(k,s))}};a.R=function(a,f){if(!c.f(f))return null;if(a.buffer&&0<c.count(a.buffer))return c.d(f),e(c.remove(a.buffer));var h,g;for(h=!0;h;)if(g=a.l.pop(a.l),null!==g){h=g.k;g=g.V;if(c.f(h))return h=c.d(h),c.d(f),d.I(h),e(g);h=!0}else{if(a.closed)return c.d(f),e(null);64<a.G?(a.G=0,a.h.N(a.h,c.f)):a.G+=1;if(1024<a.h.b)throw Error("No more than 1024 pending takes on a single channel");
a.h.T(a.h,f);return null}};a.P=function(a){if(!a.closed){a.closed=!0;for(var f,h,g=!0;g;)g=!1,f=a.h.pop(a.h),null!==f&&(c.f(f)&&(h=c.d(f),d.I(function(){return h(null)})),g=!0)}return null};a.Q=function(a){return!0===a.closed}})(b.types,b.a,q,v);
(function(a,c){function e(a,c,d,e,k){var g;for(g=0;g<k;g++)d[e+g]=a[c+g]}a.q=function(a,c,d,e){this.head=a;this.e=c;this.b=d;this.c=e};var d=a.q.prototype;d.pop=function(a){if(0===a.b)return null;var c=a.c[a.e];a.c[a.e]=null;a.e=(a.e+1)%a.c.length;a.b-=1;return c};d.unshift=function(a,c){a.c[a.head]=c;a.head=(a.head+1)%a.c.length;a.b+=1;return null};d.T=function(a,c){a.b+1===a.c.length&&a.U(a);a.unshift(a,c)};d.U=function(a){var c=Array(2*a.c.length);a.e<a.head?(e(a.c,a.e,c,0,a.b),a.e=0,a.head=a.b):
a.e>a.head?(e(a.c,a.e,c,0,a.c.length-a.e),e(a.c,0,c,a.c.length-a.e,a.head),a.e=0,a.head=a.b):(a.e=0,a.head=0);a.c=c};d.N=function(a,c){for(var d;0<a.b;a++)d=a.pop(a),c(d)&&a.unshift(a,d)};a.p=function(a,c){this.buffer=a;this.t=c};d=a.p.prototype;d.A=function(a){return a.buffer.b===a.t};d.B=function(a){return a.buffer.pop(a.buffer)};d.w=function(a,d){if(c.s(a))throw Error("Can't add to a full buffer");return a.buffer.unshift(a.buffer,d)};d.v=function(a){return a.buffer.b};a.o=function(a,c){this.buffer=
a;this.t=c};d=a.o.prototype;d.A=function(){return!1};d.B=function(a){return a.buffer.pop(a.buffer)};d.w=function(a,c){return a.buffer.b!==a.t?a.buffer.unshift(a.buffer,c):null};d.v=function(a){return a.buffer.b};a.r=function(a,c){this.buffer=a;this.t=c};d=a.r.prototype;d.A=function(){return!1};d.B=function(a){return a.buffer.pop(a.buffer)};d.w=function(a,d){a.buffer.b===a.t&&c.remove(a);return a.buffer.unshift(a.buffer,d)};d.v=function(a){return a.buffer.b}})(b.types,b.a);
b.i=function(a){return new b.types.q(0,0,0,Array(a))};b.j={k:function(a){return{C:function(){return!0},D:function(){return a}}}};
(function(a,c,e,d,f){function h(a,d){return{C:function(){return c.f(a)},D:function(){c.d(a);return d}}}function B(){var a=!0;return{C:function(){return a},D:function(){a=null;return!0}}}function s(a){var c,d,e=[];for(c=0;c<a;c++)e.push(0);for(c=1;c<a;c++)d=Math.floor(Math.random()*c),e[c]=e[d],e[d]=c;return e}function k(){return null}a.u=function(c){return new a.types.n(a.i(32),0,a.i(32),0,c,null)};a.g=function(a,m,l){l=l||!0;if(a=c.g(a,e(m))){var f=c.m(a);l?m(f):d(function(){return m(f)})}return null};
a.put=function(a,m,l,f){l=l||k;f=f||!0;c.put(a,m,e(l))&&l!==k&&(f?l():d(l));return null};a.close=function(a){return c.close(a)};a.closed=function(a){return c.closed(a)};a.H=function(a,d,e){e=e||{};var k=B(),A=a.length,C=s(A),D=e.hasOwnProperty("priority"),x,t,p,r,u;for(t=0;t<A;t++)p=D?t:C[t],r=a[p],p=r.constructor===Array?r[0]:null,u=function(a,c){return a?h(k,function(){return d(null,a)}):h(k,function(a){return d(a,c)})}(p,r),(u=p?c.put(p,r[1],u):c.g(r,u))&&(x=f([c.m(u),p?p:r]));return x?x:e.hasOwnProperty("default")&&
c.f(k)&&c.d(k)?f([e["default"],"default"]):null};a.J=function(g,e,f,h){h=h||!0;if(g=a.H(g,e,f)){var k=c.m(g);h?e(k[0],k[1]):d(function(){return e(k[0],k[1])})}return null};a.L=function(c){return new a.types.p(a.i(c),c)};a.K=function(c){return new a.types.o(a.i(c),c)};a.M=function(c){return new a.types.r(a.i(c),c)};a.timeout=function(c){var d=a.u();setTimeout(function(){a.close(d)},c);return d};a.loop=function(){function a(){d.apply(null,[a].concat(Array.prototype.slice.call(arguments)))}var c=Array.prototype.slice.call(arguments),
d=c.pop();a.apply(null,c)}})(b,b.a,b.j.k,v.I,q);var w=["chan"],y=this;w[0]in y||!y.execScript||y.execScript("var "+w[0]);for(var z;w.length&&(z=w.shift());)w.length||void 0===b?y=y[z]?y[z]:y[z]={}:y[z]=b;b.a=b.a;b.impl=b.a;b.a.g=b.a.g;b.a.take=b.a.g;b.a.put=b.a.put;b.a.put=b.a.put;b.a.close=b.a.close;b.a.close=b.a.close;b.a.closed=b.a.closed;b.a.closed=b.a.closed;b.a.s=b.a.s;b.a.full=b.a.s;b.a.remove=b.a.remove;b.a.remove=b.a.remove;b.a.add=b.a.add;b.a.add=b.a.add;b.a.f=b.a.f;b.a.active=b.a.f;
b.a.d=b.a.d;b.a.commit=b.a.d;b.a.m=b.a.m;b.a.deref=b.a.m;b.a.count=b.a.count;b.a.count=b.a.count;b.types=b.types;b.types=b.types;b.types.n=b.types.n;b.types.Channel=b.types.n;b.types.q=b.types.q;b.types.RingBuffer=b.types.q;b.types.p=b.types.p;b.types.FixedBuffer=b.types.p;b.types.o=b.types.o;b.types.DroppingBuffer=b.types.o;b.types.r=b.types.r;b.types.SlidingBuffer=b.types.r;b.i=b.i;b.ring_buffer=b.i;b.j=b.j;b.util=b.j;b.j.k=b.j.k;b.j.handler=b.j.k;b.u=b.u;b.chan=b.u;b.g=b.g;b.take=b.g;b.put=b.put;
b.put=b.put;b.close=b.close;b.close=b.close;b.closed=b.closed;b.closed=b.closed;b.H=b.H;b.do_alts=b.H;b.J=b.J;b.alts=b.J;b.L=b.L;b.fixed_buffer=b.L;b.K=b.K;b.dropping_buffer=b.K;b.M=b.M;b.sliding_buffer=b.M;b.timeout=b.timeout;b.timeout=b.timeout;b.loop=b.loop;b.loop=b.loop;
return this.chan; }.call({});});
