(this.webpackJsonpmyhome=this.webpackJsonpmyhome||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(16),n(7),n(11),n(6)),s=n.n(o),u=n(9),l=n(4),j=n(10),b=n.n(j),d=n(24),h=n.p+"static/media/switch.5a4fe930.png",v=n.p+"static/media/switch-sound.0d19c9a6.mp3",f=(n(18),n(19),n(1)),p="https://albertqm.github.io/generative-art/",g=new Audio(v);function O(){var t=Object(a.useState)(),e=Object(l.a)(t,2),n=e[0],r=e[1],i=Object(a.useState)(C()),c=Object(l.a)(i,2),o=c[0],j=c[1],b=Object(a.useState)({x:0,y:0,z:0}),v=Object(l.a)(b,2),O=v[0],M=v[1];Object(a.useEffect)((function(){if("GravitySensor"in window){var t=null;try{(t=new window.GravitySensor({frequency:60})).addEventListener("reading",(function(){var e=t,n=e.x,a=e.y,r=e.z;M({x:n,y:a,z:r})})),t.start()}catch(e){}return function(){var e;return null===(e=t)||void 0===e?void 0:e.stop()}}}),[]);var k,S,D,N=Object(a.useState)(!0),A=Object(l.a)(N,2),E=A[0],L=A[1],B=Object(a.useState)(!1),I=Object(l.a)(B,2),T=I[0],H=I[1],F=Object(a.useCallback)((function(t,e){var n=e.point.y;if(!T&&n>225){try{g.play()}catch(a){DOMException}H(!0),L((function(t){return!t}))}}),[T]);return Object(a.useEffect)((function(){Object(u.a)(s.a.mark((function t(){var e,n,a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://www.boredapi.com/api/activity");case 3:return e=t.sent,t.next=6,e.json();case 6:n=t.sent,a=n.activity,r(a.toLowerCase()),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),r("fix the API Albert is using on this website to show a new activity every time");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}),[]),Object(f.jsxs)("div",{style:{filter:"brightness(".concat(E?1:.5,")")},children:[Object(f.jsx)(d.a.img,{src:h,drag:"y",whileTap:{cursor:"grabbing"},dragMomentum:!1,dragElastic:.1,dragConstraints:{top:0,bottom:25},style:{position:"absolute",top:-125,left:25,width:100,rotate:"".concat((k=O.x,S=-30,D=30,(k- -9.8)*(D-S)/19.6+S),"deg")},onDrag:F,onDragEnd:function(){return H(!1)},onContextMenu:function(t){return t.preventDefault()}}),Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(m,{}),Object(f.jsx)("div",{className:"intro-container",children:"Hey, I'm Albert. \n          I mostly create Web-related products for a living."})]}),Object(f.jsx)(x,{whileHover:"actionButton",variants:{actionButton:{backgroundColor:o}},onMouseLeave:function(){return j(C())},onClick:function(){return window.location.href=p},children:Object(f.jsx)(w,{title:Object(f.jsx)(d.a.a,{href:p,className:"project-title",variants:{actionButton:{scale:1.2}},children:"Generative Art"})})}),Object(f.jsx)(x,{children:Object(f.jsx)(y,{thingToDo:n})}),Object(f.jsx)(x,{children:Object(f.jsx)(w,{title:Object(f.jsx)(d.a.span,{transition:{repeat:1/0,duration:2},animate:{rotate:[-10,10,-10]},children:"More stuff to come..."})})})]})}function m(){return Object(f.jsx)("div",{className:"avatar-container",onContextMenu:function(t){return t.preventDefault()},children:Object(f.jsx)(d.a.img,{draggable:!1,className:"avatar-img",src:"https://avatars.githubusercontent.com/u/33761650?v=4",alt:"A photo of Albert's face",whileHover:{rotate:360},whileTap:{rotate:360},transition:{type:"spring"}})})}function x(t){var e=t.children,n=t.whileHover,a=t.variants,r=t.onClick,i=t.onMouseLeave;return Object(f.jsx)(d.a.div,{className:b()("project-poster",{clickable:Boolean(r)}),whileHover:n,variants:a,onMouseLeave:i,onClick:r,children:e})}function w(t){var e=t.title;return Object(f.jsx)("header",{className:"project-title",children:e})}function y(t){var e=t.thingToDo;return Object(f.jsxs)("div",{className:"activity-suggestion",children:["While I build this, why don't you...",e&&Object(f.jsxs)(d.a.div,{initial:{y:-500},animate:{y:0},children:[e,"?"]})]})}function C(){var t=Math.floor(16777215*Math.random()).toString(16);return"#".concat(t.length<6?t+"a":t)}var M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),i(t),c(t)}))};c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(O,{})}),document.getElementById("root")),M()}},[[21,1,2]]]);
//# sourceMappingURL=main.65bbe1b0.chunk.js.map