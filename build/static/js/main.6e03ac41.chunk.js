(this.webpackJsonpnft=this.webpackJsonpnft||[]).push([[0],{26:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),a=n(19),o=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},u="Normal Fucking Things",l="root",d=n(2),f=n(20),p=n(10),j=n(5),b=n(14),h=n.n(b),m=n(21),v=n(4),O=n(9),g=n.n(O),x=(n(26),r.a.createContext({mountSharedElement:function(){},isTransitioning:!1,activePathname:void 0}));function _(e){return!!(e.firstBoundingClientRect&&e.lastBoundingClientRect&&e.node&&"undefined"!==typeof e.id)}function w(e){var t=e.children,n=Object(d.h)().pathname,r=Object(i.useRef)(null),a=Object(i.useRef)(n),o=Object(i.useRef)(n),s=Object(i.useState)(!1),u=Object(v.a)(s,2),l=u[0],f=u[1],b=Object(i.useState)({}),O=Object(v.a)(b,2),w=O[0],k=O[1],y=Object(i.useCallback)((function(e){var t,n=e.node,c=e.lastBoundingClientRect;n.classList.add("SharedElement"),n.style.top="".concat(c.top,"px"),n.style.left="".concat(c.left,"px"),n.style.height="".concat(c.height,"px"),n.style.width="".concat(c.width,"px"),n.style.transformOrigin="top left",null===(t=r.current)||void 0===t||t.appendChild(n)}),[r]),N=Object(i.useCallback)(function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.animation).play(),e.abrupt("return",n.finished);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),C=Object(i.useCallback)((function(){if(r.current)for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild)}),[r]),T=Object(i.useCallback)((function(e){var t=e.id,n=e.ref;return k((function(e){var c,i;if(null===(c=e[t])||void 0===c?void 0:c.lastBoundingClientRect)return e;if(null===(i=e[t])||void 0===i?void 0:i.firstBoundingClientRect){var r=n.getBoundingClientRect(),a=n.cloneNode(!0),o=new Animation(function(e,t,n){var c=t.top-n.top,i=t.left-n.left,r=t.width/n.width,a=t.height/n.height;return new KeyframeEffect(e,[{transform:"matrix(".concat(r,", 0, 0, ").concat(a,", ").concat(i,", ").concat(c,")")},{transform:"none"}],{duration:200})}(a,e[t].firstBoundingClientRect,r)),s=Object(j.a)(Object(j.a)({},e[t]),{},{lastBoundingClientRect:r,node:a,animation:o});return y(s),Object(j.a)(Object(j.a)({},e),{},Object(p.a)({},t,s))}return Object(j.a)(Object(j.a)({},e),{},Object(p.a)({},t,{firstBoundingClientRect:n.getBoundingClientRect(),id:t}))}))}),[y]),R=Object(i.useCallback)((function(){k({}),f(!1),setTimeout(C,200)}),[C]),S=Object(i.useCallback)(Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object.values(w).filter(_)).length){e.next=4;break}return console.log("starting transition of ".concat(t.length," element(s)")),e.abrupt("return",Promise.all(t.map(N)).finally(R));case 4:return console.log("did not transition: found no elements to transition"),f(!1),e.abrupt("return",Promise.resolve().then((function(){return f(!1)})));case 7:case"end":return e.stop()}}),e)}))),[R,w,N]);Object(i.useEffect)((function(){o.current&&n!==o.current&&(o.current=n)}),[n]),Object(i.useEffect)((function(){l||o.current===a.current||S().then((function(){a.current=n}))}),[n,l,S]);var E=Object(i.useCallback)((function(e,t){w[e.id]?t!==a.current&&(console.log("updating element"),f(!0),T(e)):(console.log("adding element"),T(e))}),[T,w]);return Object(c.jsx)(x.Provider,{value:{mountSharedElement:E,isTransitioning:l||a.current!==n||o.current!==n||a.current!==o.current,activePathname:a.current},children:Object(c.jsxs)(c.Fragment,{children:[t,Object(c.jsx)("div",{className:g()("GhostLayer__mask",{GhostLayer__mask__transitioning:a.current!==n||o.current!==n||a.current!==o.current||l})}),Object(c.jsx)("div",{className:"GhostLayer",ref:r})]})})}n(43);function k(e){var t=e.disabled,n=e.className,r=e.children,a=e.title,o=e.onPress,s=e.preventDefault,u=e.href,l=Object(d.g)(),f=Object(i.useCallback)((function(e){s&&(e.preventDefault(),e.stopPropagation()),u&&!u.startsWith("https:")&&l.push(u),u&&u.startsWith("https:")&&(window.location.href=u),o&&o()}),[o,u,l,s]);return Object(c.jsx)("button",{type:"button",className:n?"Button ".concat(n):"Button",disabled:t,title:a||("string"===typeof r?r:""),onClick:f,children:r})}n(44);function y(e){return null===e||void 0===e?void 0:e.includes("/video/")}function N(e){var t,n=e.alt,r=void 0===n?"":n,a=e.borderRadius,o=void 0===a?10:a,s=e.className,u=void 0===s?"":s,l=e.height,d=void 0===l?"":l,f=e.imageClassName,b=void 0===f?"":f,h=e.onReady,m=e.src,O=e.useImg,x=void 0!==O&&O,_=e.width,w=void 0===_?"":_,k=function(){var e=Object(i.useState)(!1),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){c(!0)}),[]),n}(),N=Object(i.useRef)(new Image);N.current.referrerPolicy="no-referrer",N.current.src=m;var C=Object(i.useState)(N.current.complete),T=Object(v.a)(C,2),R=T[0],S=T[1],E=Object(i.useCallback)((function(){S(!0),h&&h(m),N.current.onload&&(N.current.onload=null)}),[m,h]);N.current.onload=E,Object(i.useEffect)((function(){var e=N.current;return m!==e.src&&(e.src=m,S(e.complete)),function(){(null===e||void 0===e?void 0:e.onload)&&(e.onload=null)}}),[m]);var I=Object(i.useMemo)((function(){return{height:d,width:w,display:x?"flex":"block",borderRadius:y(m)?o:void 0}}),[d,w,x,o,m]),B=Object(i.useMemo)((function(){return{borderRadius:o,height:x?d:void 0,width:x?w:void 0}}),[o,d,x,w]),F=Object(i.useMemo)((function(){return Object(j.a)(Object(j.a)({},B),{},{backgroundImage:x?void 0:"url(".concat(m,")")})}),[B,m,x]),P=g()("preloaded-image__container",Object(p.a)({"preloaded-image__preloading":!k||!R},u,!!u)),M=g()("preloaded-image".concat(x?"__img":""),(t={},Object(p.a)(t,b,!!b),Object(p.a)(t,"preloaded-image__video",y(m)),t));return y(m)?Object(c.jsx)("div",{className:P,style:I,children:Object(c.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,controls:!0,height:d,width:w,title:r,className:M,children:Object(c.jsx)("source",{src:m})})}):x?Object(c.jsxs)("div",{className:P,style:I,children:[Object(c.jsx)("img",{className:M,style:F,alt:r,src:m,height:d,width:w,referrerPolicy:"no-referrer"}),Object(c.jsx)("div",{className:"preloaded-image__cover",style:B})]}):Object(c.jsxs)("div",{className:P,style:I,children:[Object(c.jsx)("div",{className:M,style:F,role:"img","aria-label":r}),Object(c.jsx)("div",{className:"preloaded-image__cover",style:B})]})}var C=n.p+"static/media/logo.478f188f.png";function T(e){var t=e.size,n=void 0===t?16:t;return Object(c.jsx)(N,{src:C,height:n,width:n})}n(45);function R(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(i.useRef)("undefined"!==typeof window&&window.scrollY),n=Object(i.useState)(!1),c=Object(v.a)(n,2),r=c[0],a=c[1],o=Object(i.useState)(t.current>e),s=Object(v.a)(o,2),u=s[0],l=s[1],d=Object(i.useCallback)((function(){var n="undefined"!==typeof window&&window.scrollY;a((function(e){return!(t.current<n&&e)&&(t.current>n&&!e||e)})),t.current=n,l((function(t){return!t&&n>e||!(t&&n<e)&&t}))}),[e]);return Object(i.useEffect)((function(){if("undefined"!==typeof window)return window.addEventListener("scroll",d,{passive:!0}),function(){return window.removeEventListener("scroll",d)}}),[r,d]),{isGoingUp:r,isAboveThreshold:u}}(100),t=e.isGoingUp,n=e.isAboveThreshold;return Object(c.jsxs)("div",{className:g()("nav",{nav__hidden:!t&&n}),children:[Object(c.jsx)("nav",{className:"nav__content",children:Object(c.jsx)("ul",{className:"nav__list",children:Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsxs)(k,{href:"/things",className:"nav__logo",children:[Object(c.jsx)(T,{}),Object(c.jsx)("span",{className:"nav__title",children:"Normal Fucking Things"})]})})})}),Object(c.jsx)("div",{children:"Why buy IRL, when the NFT is worth so much more?"}),Object(c.jsx)("div",{className:"nav__spacer"})]})}function S(e){var t=function(e){return e?"".concat(u,": ").concat(e):u}(e);return Object(i.useEffect)((function(){"undefined"!==typeof window&&t&&(window.document.title=t)}),[t])}function E(e){var t=e.children,n=e.id,r=e.pathname,a=Object(i.useContext)(x).mountSharedElement,o=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=o.current;e&&a({ref:e,id:n},r)}),[n,a,o,r]),Object(c.jsx)("div",{ref:o,children:t})}n(46);function I(e){return fetch(e).then((function(e){return e.json()}))}function B(e,t){var n=Object(i.useRef)(null),c=Object(i.useRef)(e);return Object(i.useEffect)((function(){c.current=e}),[e]),Object(i.useEffect)((function(){var e=function(){return c.current()};if("number"===typeof t&&(e(),t>0))return n.current=window.setInterval(e,t),function(){n.current&&window.clearInterval(n.current)}}),[t]),n.current}function F(e,t,n){var c=B(Object(i.useCallback)((function(){return I("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then((function(e){return e.USD})).then((function(n){console.log("1 ETH = $".concat(n)),t(Math.round(100*e)/Math.round(100*n))}))}),[t,e]),n?5e3:null);!n&&c&&clearInterval(c)}var P=n(24),M=n.n(P);n(56);M.a.setAppElement("#".concat(l));var A={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"white",borderRadius:"8px"}};function L(e){var t=e.isOpen,n=void 0!==t&&t,i=e.onAfterOpen,r=e.onRequestClose,a=e.title,o=void 0===a?"":a,s=e.children;return Object(c.jsxs)(M.a,{isOpen:n,onAfterOpen:i,onRequestClose:r,contentLabel:o,style:A,children:[Object(c.jsxs)("div",{className:"Modal__header",children:[Object(c.jsx)(k,{className:"Modal__close_button",onPress:r,title:"Close",children:"x"}),Object(c.jsx)("div",{className:"Modal__title",children:o})]}),Object(c.jsx)("div",{className:"Modal__content",children:s})]})}function D(e){var t=e.usd,n=e.prefix,r=void 0===n?"":n,a=e.name,o=Object(i.useState)(!1),s=Object(v.a)(o,2),u=s[0],l=s[1],d=Object(i.useState)(0),f=Object(v.a)(d,2),p=f[0];F(t,f[1],!0);var j=p?"IRL: ".concat(p.toFixed(8)," ETH"):" ",b="IRL Cost of ".concat(r).concat(a);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{className:"Main__price",onPress:function(){return l(!0)},children:j}),Object(c.jsx)(L,{title:b,isOpen:u,onRequestClose:function(){return l(!1)},children:Object(c.jsxs)("div",{className:"Main__price_detail",children:["$",t.toFixed(2)]})})]})}function G(e,t,n){var c=B(Object(i.useCallback)((function(){return function(e){var t=e.tokenId,n=e.contractAddress;return I("".concat("https://api.opensea.io/api/v1/assets","?token_ids=").concat(t,"&asset_contract_address=").concat(n)).then((function(e){var t;return null===e||void 0===e||null===(t=e.assets)||void 0===t?void 0:t[0]}))}({tokenId:e,contractAddress:t}).then((function(e){console.log(e),n(e)}))}),[n,e,t]),0);c&&clearInterval(c)}function q(e){var t=e.contractAddress,n=e.tokenId,r=e.name,a=Object(i.useState)(!1),o=Object(v.a)(a,2),s=o[0],u=o[1],l=Object(i.useState)(),d=Object(v.a)(l,2),f=d[0];if(G(n,t,d[1]),!f)return Object(c.jsx)("div",{className:"Main__NFT"});var p=((f.sell_orders||[])[0]||{}).base_price,j="NFT of ".concat(r),b=p?"NFT: ".concat(p/1e18," ETH"):"NFT: Not For Sale",h="".concat(p?"Buy":"View"," on OpenSea");return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{className:"Main__NFT",onPress:p?void 0:function(){return u(!0)},href:p?f.permalink:void 0,children:b}),Object(c.jsx)(L,{title:j,isOpen:s,onRequestClose:function(){return u(!1)},children:Object(c.jsx)(k,{href:f.permalink,children:h})})]})}var H=n.p+"static/media/toiletPaper.da99d3fe.png",U=n.p+"static/media/banana.3c5e04c4.png",W=n.p+"static/media/ductTape.e1be0eeb.png",Y=n.p+"static/media/iceCream.d06ec4d9.png",J=n.p+"static/media/strawberry.12a99143.png",$=n.p+"static/media/scotchTape.f927a7f3.png",z=n.p+"static/media/sponge.1a9e0694.png",K=n.p+"static/media/bowlingBall.ed590812.png",V=n.p+"static/media/candle.d6a9bd27.png",Q=n.p+"static/media/brusselsSprouts.ebdde723.png",X=n.p+"static/media/asparagus.dcdf5f25.png",Z=n.p+"static/media/eggs.344c6d60.png",ee=n.p+"static/media/pacifier.fa5f1230.png",te=n.p+"static/media/garlic.c56ad151.png",ne=n.p+"static/media/shallot.9ed7eeac.png",ce=n.p+"static/media/yellowOnion.705db0c0.png",ie=n.p+"static/media/redOnion.9e9c82d9.png",re=n.p+"static/media/dishTowel.3a935b4b.png",ae=n.p+"static/media/crackers.97e9da58.png",oe=n.p+"static/media/tomato.cbd55e77.png",se="0x495f947276749ce646f68ac8c248420045cb7b5e",ue=[{picture:H,name:"Toilet Paper",price:.84,token:"115520923340809203113026120233829107469855999749882535239359978683612329410561"},{picture:U,name:"Banana",prefix:"a ",price:.39,token:"115520923340809203113026120233829107469855999749882535239359978684711841038337"},{picture:W,name:"Duct Tape",price:4.99,token:"115520923340809203113026120233829107469855999749882535239359978685811352666113"},{picture:Y,name:"Ice Cream",price:3.5,token:"115520923340809203113026120233829107469855999749882535239359978686910864293889"},{picture:J,name:"Strawberry",prefix:"a ",price:.25,token:"115520923340809203113026120233829107469855999749882535239359978688010375921665"},{picture:$,name:"Scotch Tape",price:2.79,token:"115520923340809203113026120233829107469855999749882535239359978689109887549441"},{picture:z,name:"Sponge",prefix:"a ",price:.93,token:"115520923340809203113026120233829107469855999749882535239359978690209399177217"},{picture:K,name:"Bowling Ball",prefix:"a ",price:144.95,token:"115520923340809203113026120233829107469855999749882535239359978691308910804993"},{picture:V,name:"Candle",prefix:"a ",price:7.8,token:"115520923340809203113026120233829107469855999749882535239359978692408422432769"},{picture:Q,name:"Brussels Sprouts",price:3.99,token:"115520923340809203113026120233829107469855999749882535239359978693507934060545"},{picture:X,name:"Asparagus",price:5.99,token:"115520923340809203113026120233829107469855999749882535239359978694607445688321"},{picture:Z,name:"Eggs",price:1.48,token:"115520923340809203113026120233829107469855999749882535239359978695706957316097"},{picture:ee,name:"Pacifier",prefix:"a ",price:2.5,token:"115520923340809203113026120233829107469855999749882535239359978696806468943873"},{picture:te,name:"Garlic",price:.5,token:"115520923340809203113026120233829107469855999749882535239359978697905980571649"},{picture:ne,name:"Shallot",prefix:"a ",price:.75,token:"115520923340809203113026120233829107469855999749882535239359978699005492199425"},{picture:ce,name:"Yellow Onion",prefix:"a ",price:1.49,token:"115520923340809203113026120233829107469855999749882535239359978700105003827201"},{picture:re,name:"Dish Towel",prefix:"a ",price:4.99,token:"115520923340809203113026120233829107469855999749882535239359978701204515454977"},{picture:ie,name:"Red Onion",prefix:"a ",price:1.49,token:"115520923340809203113026120233829107469855999749882535239359978702304027082753"},{picture:ae,name:"Crackers",prefix:"a ",price:6.9,token:"115520923340809203113026120233829107469855999749882535239359978703403538710529"},{picture:oe,name:"Tomato",prefix:"a ",price:1.5,token:"115520923340809203113026120233829107469855999749882535239359978704503050338305"}],le=ue.map((function(e){return e.picture}));function de(e){var t,n;return"undefined"===typeof e?null===(n=ue[0])||void 0===n?void 0:n.picture:null===(t=ue[parseInt(e,10)])||void 0===t?void 0:t.picture}function fe(e){var t,n;return"undefined"===typeof e?null===(n=ue[0])||void 0===n?void 0:n.price:null===(t=ue[parseInt(e,10)])||void 0===t?void 0:t.price}function pe(e){var t,n;return"undefined"===typeof e?null===(n=ue[0])||void 0===n?void 0:n.name:null===(t=ue[parseInt(e,10)])||void 0===t?void 0:t.name}function je(e){var t,n;return"undefined"===typeof e?null===(n=ue[0])||void 0===n?void 0:n.prefix:null===(t=ue[parseInt(e,10)])||void 0===t?void 0:t.prefix}function be(e){var t,n;return"undefined"===typeof e?{tokenId:null===(n=ue[0])||void 0===n?void 0:n.token,contractAddress:se}:{tokenId:null===(t=ue[parseInt(e,10)])||void 0===t?void 0:t.token,contractAddress:se}}n(57),n(58);function he(e){var t=e.children;return Object(c.jsx)("h1",{className:"Title",children:t})}n(59);function me(){return S("Not Found"),Object(c.jsx)("div",{className:"NotFound",children:Object(c.jsx)(he,{children:"404: That's an error"})})}function ve(e){var t=e.match,n=e.location.pathname,r=t.params.id,a=void 0===r?String(0):r,o=Object(i.useContext)(x),s=o.isTransitioning,u=o.activePathname;return S(pe(a)),de(a)?Object(c.jsxs)("div",{className:g()("Main",{Main__transitioning:s||u!==n}),children:[Object(c.jsx)("div",{className:"Main__marquee",children:Object(c.jsx)(E,{id:"/thing/".concat(a),pathname:n,children:Object(c.jsx)(N,{height:300,width:300,src:de(a)})})}),Object(c.jsx)(D,{usd:fe(a),name:pe(a),prefix:je(a)}),Object(c.jsx)(q,Object(j.a)(Object(j.a)({},be(a)),{},{name:pe(a)}))]}):Object(c.jsx)(me,{})}var Oe=n(25);n(60);function ge(e){var t=e.history.location.pathname;S("Things");var n,r,a,o=Object(i.useContext)(x),s=o.isTransitioning,u=o.activePathname;return Object(c.jsx)("div",{className:g()("Things",{Things__transitioning:s||u!==t}),children:Object(c.jsx)("div",{className:"Things__grid",children:(n=le,r="",a=50,[].concat(Object(Oe.a)(n),Object(Oe.a)(Array(a-n.length).fill(r)))).map((function(e,n){var i="/thing/".concat(n);return e?Object(c.jsx)(E,{id:i,pathname:t,children:Object(c.jsx)(k,{href:i,children:Object(c.jsx)(N,{height:50,width:50,src:e})})},i):Object(c.jsx)("div",{},i)}))})})}function xe(){return Object(i.useEffect)((function(){n(61)}),[]),Object(c.jsx)(w,{children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:ge}),Object(c.jsx)(d.a,{path:"/things",component:ge}),Object(c.jsx)(d.a,{path:"/thing/:id",component:ve}),Object(c.jsx)(d.a,{path:"*",component:me})]})})}function _e(e){var t=e.location;return"undefined"===typeof window?Object(c.jsxs)(d.c,{location:t,children:[Object(c.jsx)(R,{}),Object(c.jsx)("main",{children:Object(c.jsx)(xe,{})})]}):Object(c.jsxs)(f.a,{children:[Object(c.jsx)(R,{}),Object(c.jsx)("main",{children:Object(c.jsx)(xe,{})})]})}n(62);o.a.hydrate(Object(c.jsx)(_e,{}),document.getElementById(l)),s()}},[[63,1,2]]]);
//# sourceMappingURL=main.6e03ac41.chunk.js.map