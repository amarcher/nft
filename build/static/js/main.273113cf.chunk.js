(this.webpackJsonpnft=this.webpackJsonpnft||[]).push([[0],{26:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(0),r=n.n(i),a=n(19),o=n.n(a),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))},u="Normal Fucking Things",l="root",d=n(2),f=n(20),p=n(10),j=n(5),b=n(14),h=n.n(b),m=n(21),v=n(4),O=n(9),g=n.n(O),x=(n(26),r.a.createContext({mountSharedElement:function(){},isTransitioning:!1,activePathname:void 0}));function w(e){return!!(e.firstBoundingClientRect&&e.lastBoundingClientRect&&e.node&&"undefined"!==typeof e.id)}function _(e){var t=e.children,n=Object(d.h)().pathname,r=Object(i.useRef)(null),a=Object(i.useRef)(n),o=Object(i.useRef)(n),s=Object(i.useRef)(),u=Object(i.useState)(!1),l=Object(v.a)(u,2),f=l[0],b=l[1],O=Object(i.useState)({}),_=Object(v.a)(O,2),k=_[0],y=_[1],C=Object(i.useCallback)((function(e){var t,n=e.node,c=e.lastBoundingClientRect;n.classList.add("SharedElement"),n.style.top="".concat(c.top,"px"),n.style.left="".concat(c.left,"px"),n.style.height="".concat(c.height,"px"),n.style.width="".concat(c.width,"px"),n.style.transformOrigin="top left",null===(t=r.current)||void 0===t||t.appendChild(n)}),[r]),N=Object(i.useCallback)(function(){var e=Object(m.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.animation).play(),e.abrupt("return",n.finished);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),T=Object(i.useCallback)((function(){if(r.current)for(;r.current.firstChild;)r.current.removeChild(r.current.firstChild)}),[r]),R=Object(i.useCallback)((function(e){var t=e.id,n=e.ref;return y((function(e){var c,i;if(null===(c=e[t])||void 0===c?void 0:c.lastBoundingClientRect)return e;if(null===(i=e[t])||void 0===i?void 0:i.firstBoundingClientRect){var r=n.getBoundingClientRect(),a=n.cloneNode(!0),o=new Animation(function(e,t,n){var c=t.top-n.top,i=t.left-n.left,r=t.width/n.width,a=t.height/n.height;return new KeyframeEffect(e,[{transform:"matrix(".concat(r,", 0, 0, ").concat(a,", ").concat(i,", ").concat(c,")")},{transform:"none"}],{duration:200})}(a,e[t].firstBoundingClientRect,r)),s=Object(j.a)(Object(j.a)({},e[t]),{},{lastBoundingClientRect:r,node:a,animation:o});return C(s),Object(j.a)(Object(j.a)({},e),{},Object(p.a)({},t,s))}return Object(j.a)(Object(j.a)({},e),{},Object(p.a)({},t,{firstBoundingClientRect:n.getBoundingClientRect(),node:n,id:t}))}))}),[C]),E=Object(i.useCallback)((function(){y((function(e){return Object.keys(e).reduce((function(t,n){var c;return t[n]=Object(j.a)(Object(j.a)({},e[n]),{},{firstBoundingClientRect:(null===(c=e[n].node)||void 0===c?void 0:c.getBoundingClientRect())||e[n].firstBoundingClientRect}),t}),{})}))}),[]),S=Object(i.useCallback)((function(){s.current&&clearTimeout(s.current),s.current=setTimeout(E,100)}),[E]);Object(i.useEffect)((function(){return window.addEventListener("resize",S),function(){return window.removeEventListener("resize",S)}}),[S]);var I=Object(i.useCallback)((function(){y({}),b(!1),setTimeout(T,200)}),[T]),B=Object(i.useCallback)(Object(m.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object.values(k).filter(w)).length){e.next=4;break}return console.log("starting transition of ".concat(t.length," element(s)")),e.abrupt("return",Promise.all(t.map(N)).finally(I));case 4:return console.log("Found no elements to transition"),b(!1),e.abrupt("return",Promise.resolve().then((function(){return b(!1)})));case 7:case"end":return e.stop()}}),e)}))),[I,k,N]);Object(i.useEffect)((function(){o.current&&n!==o.current&&(o.current=n)}),[n]),Object(i.useEffect)((function(){f||o.current===a.current||B().then((function(){a.current=n}))}),[n,f,B]);var F=Object(i.useCallback)((function(e,t){k[e.id]?t!==a.current&&(console.log("updating element"),b(!0),R(e)):(console.log("adding element"),R(e))}),[R,k]);return Object(c.jsx)(x.Provider,{value:{mountSharedElement:F,isTransitioning:f,activePathname:a.current},children:Object(c.jsxs)(c.Fragment,{children:[t,Object(c.jsx)("div",{className:g()("GhostLayer__mask",{GhostLayer__mask__transitioning:f})}),Object(c.jsx)("div",{className:"GhostLayer",ref:r})]})})}n(43);function k(e){var t=e.disabled,n=e.className,r=e.children,a=e.title,o=e.onPress,s=e.preventDefault,u=e.href,l=Object(d.g)(),f=Object(i.useCallback)((function(e){s&&(e.preventDefault(),e.stopPropagation()),u&&!u.startsWith("https:")&&l.push(u),u&&u.startsWith("https:")&&(window.location.href=u),o&&o()}),[o,u,l,s]);return Object(c.jsx)("button",{type:"button",className:n?"Button ".concat(n):"Button",disabled:t,title:a||("string"===typeof r?r:""),onClick:f,children:r})}n(44);function y(e){return null===e||void 0===e?void 0:e.includes("/video/")}function C(e){var t,n=e.alt,r=void 0===n?"":n,a=e.borderRadius,o=void 0===a?10:a,s=e.className,u=void 0===s?"":s,l=e.height,d=void 0===l?"":l,f=e.imageClassName,b=void 0===f?"":f,h=e.onReady,m=e.src,O=e.useImg,x=void 0!==O&&O,w=e.width,_=void 0===w?"":w,k=function(){var e=Object(i.useState)(!1),t=Object(v.a)(e,2),n=t[0],c=t[1];return Object(i.useEffect)((function(){c(!0)}),[]),n}(),C=Object(i.useRef)(new Image);C.current.referrerPolicy="no-referrer",C.current.src=m;var N=Object(i.useState)(C.current.complete),T=Object(v.a)(N,2),R=T[0],E=T[1],S=Object(i.useCallback)((function(){E(!0),h&&h(m),C.current.onload&&(C.current.onload=null)}),[m,h]);C.current.onload=S,Object(i.useEffect)((function(){var e=C.current;return m!==e.src&&(e.src=m,E(e.complete)),function(){(null===e||void 0===e?void 0:e.onload)&&(e.onload=null)}}),[m]);var I=Object(i.useMemo)((function(){return{height:d,width:_,display:x?"flex":"block",borderRadius:y(m)?o:void 0}}),[d,_,x,o,m]),B=Object(i.useMemo)((function(){return{borderRadius:o,height:x?d:void 0,width:x?_:void 0}}),[o,d,x,_]),F=Object(i.useMemo)((function(){return Object(j.a)(Object(j.a)({},B),{},{backgroundImage:x?void 0:"url(".concat(m,")")})}),[B,m,x]),P=g()("preloaded-image__container",Object(p.a)({"preloaded-image__preloading":!k||!R},u,!!u)),M=g()("preloaded-image".concat(x?"__img":""),(t={},Object(p.a)(t,b,!!b),Object(p.a)(t,"preloaded-image__video",y(m)),t));return y(m)?Object(c.jsx)("div",{className:P,style:I,children:Object(c.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,controls:!0,height:d,width:_,title:r,className:M,children:Object(c.jsx)("source",{src:m})})}):x?Object(c.jsxs)("div",{className:P,style:I,children:[Object(c.jsx)("img",{className:M,style:F,alt:r,src:m,height:d,width:_,referrerPolicy:"no-referrer"}),Object(c.jsx)("div",{className:"preloaded-image__cover",style:B})]}):Object(c.jsxs)("div",{className:P,style:I,children:[Object(c.jsx)("div",{className:M,style:F,role:"img","aria-label":r}),Object(c.jsx)("div",{className:"preloaded-image__cover",style:B})]})}var N=n.p+"static/media/logo.478f188f.png";function T(e){var t=e.size,n=void 0===t?16:t;return Object(c.jsx)(C,{src:N,height:n,width:n})}n(45);function R(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(i.useRef)("undefined"!==typeof window&&window.scrollY),n=Object(i.useState)(!1),c=Object(v.a)(n,2),r=c[0],a=c[1],o=Object(i.useState)(t.current>e),s=Object(v.a)(o,2),u=s[0],l=s[1],d=Object(i.useCallback)((function(){var n="undefined"!==typeof window&&window.scrollY;a((function(e){return!(t.current<n&&e)&&(t.current>n&&!e||e)})),t.current=n,l((function(t){return!t&&n>e||!(t&&n<e)&&t}))}),[e]);return Object(i.useEffect)((function(){if("undefined"!==typeof window)return window.addEventListener("scroll",d,{passive:!0}),function(){return window.removeEventListener("scroll",d)}}),[r,d]),{isGoingUp:r,isAboveThreshold:u}}(100),t=e.isGoingUp,n=e.isAboveThreshold;return Object(c.jsxs)("div",{className:g()("nav",{nav__hidden:!t&&n}),children:[Object(c.jsx)("nav",{className:"nav__content",children:Object(c.jsx)("ul",{className:"nav__list",children:Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsxs)(k,{href:"/things",className:"nav__logo",children:[Object(c.jsx)(T,{}),Object(c.jsx)("span",{className:"nav__title",children:"Normal Fucking Things"})]})})})}),Object(c.jsx)("div",{children:"Why buy IRL, when the NFT is worth so much more?"}),Object(c.jsx)("div",{className:"nav__spacer"})]})}function E(e){var t=function(e){return e?"".concat(u,": ").concat(e):u}(e);return Object(i.useEffect)((function(){"undefined"!==typeof window&&t&&(window.document.title=t)}),[t])}function S(){return Object(i.useContext)(x)}function I(e){var t=e.children,n=e.id,r=e.pathname,a=S().mountSharedElement,o=Object(i.useRef)(null);return Object(i.useEffect)((function(){var e=o.current;e&&a({ref:e,id:n},r)}),[n,a,o,r]),Object(c.jsx)("div",{ref:o,children:t})}n(46);function B(e){return fetch(e).then((function(e){return e.json()}))}function F(e,t){var n=Object(i.useRef)(null),c=Object(i.useRef)(e);return Object(i.useEffect)((function(){c.current=e}),[e]),Object(i.useEffect)((function(){var e=function(){return c.current()};if("number"===typeof t&&(e(),t>0))return n.current=window.setInterval(e,t),function(){n.current&&window.clearInterval(n.current)}}),[t]),n.current}function P(e,t,n){var c=F(Object(i.useCallback)((function(){return B("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then((function(e){return e.USD})).then((function(n){console.log("1 ETH = $".concat(n)),t(Math.round(100*e)/Math.round(100*n))}))}),[t,e]),n?5e3:null);!n&&c&&clearInterval(c)}var M=n(24),A=n.n(M);n(56);A.a.setAppElement("#".concat(l));var L={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"white",borderRadius:"8px"}};function D(e){var t=e.isOpen,n=void 0!==t&&t,i=e.onAfterOpen,r=e.onRequestClose,a=e.title,o=void 0===a?"":a,s=e.children;return Object(c.jsxs)(A.a,{isOpen:n,onAfterOpen:i,onRequestClose:r,contentLabel:o,style:L,children:[Object(c.jsxs)("div",{className:"Modal__header",children:[Object(c.jsx)(k,{className:"Modal__close_button",onPress:r,title:"Close",children:"x"}),Object(c.jsx)("div",{className:"Modal__title",children:o})]}),Object(c.jsx)("div",{className:"Modal__content",children:s})]})}function G(e){var t=e.usd,n=e.prefix,r=void 0===n?"":n,a=e.name,o=Object(i.useState)(!1),s=Object(v.a)(o,2),u=s[0],l=s[1],d=Object(i.useState)(0),f=Object(v.a)(d,2),p=f[0];P(t,f[1],!0);var j=p?"IRL: ".concat(p.toFixed(8)," ETH"):" ",b="IRL Cost of ".concat(r).concat(a);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{className:"Main__price",onPress:function(){return l(!0)},children:j}),Object(c.jsx)(D,{title:b,isOpen:u,onRequestClose:function(){return l(!1)},children:Object(c.jsxs)("div",{className:"Main__price_detail",children:["$",t.toFixed(2)]})})]})}function q(e,t,n){var c=F(Object(i.useCallback)((function(){return function(e){var t=e.tokenId,n=e.contractAddress;return B("".concat("https://api.opensea.io/api/v1/assets","?token_ids=").concat(t,"&asset_contract_address=").concat(n)).then((function(e){var t;return null===e||void 0===e||null===(t=e.assets)||void 0===t?void 0:t[0]}))}({tokenId:e,contractAddress:t}).then((function(e){console.log(e),n(e)}))}),[n,e,t]),0);c&&clearInterval(c)}function H(e){var t=e.contractAddress,n=e.tokenId,r=e.name,a=Object(i.useState)(!1),o=Object(v.a)(a,2),s=o[0],u=o[1],l=Object(i.useState)(),d=Object(v.a)(l,2),f=d[0];if(q(n,t,d[1]),!f)return Object(c.jsx)("div",{className:"Main__NFT"});var p=((f.sell_orders||[])[0]||{}).base_price,j="NFT of ".concat(r),b=p?"NFT: ".concat(p/1e18," ETH"):"NFT: Not For Sale",h="".concat(p?"Buy":"View"," on OpenSea");return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(k,{className:"Main__NFT",onPress:p?void 0:function(){return u(!0)},href:p?f.permalink:void 0,children:b}),Object(c.jsx)(D,{title:j,isOpen:s,onRequestClose:function(){return u(!1)},children:Object(c.jsx)(k,{href:f.permalink,children:h})})]})}var U=n.p+"static/media/toiletPaper.da99d3fe.png",z=n.p+"static/media/banana.5ed7f540.png",J=n.p+"static/media/ductTape.505b9937.png",W=n.p+"static/media/iceCream.d06ec4d9.png",Y=n.p+"static/media/strawberry.12a99143.png",$=n.p+"static/media/scotchTape.f927a7f3.png",K=n.p+"static/media/sponge.934262d3.png",V=n.p+"static/media/bowlingBall.ed590812.png",Q=n.p+"static/media/candle.d6a9bd27.png",X=n.p+"static/media/brusselsSprouts.53d1fa19.png",Z=n.p+"static/media/asparagus.f7833a6c.png",ee=n.p+"static/media/eggs.a7bba307.png",te=n.p+"static/media/pacifier.fa5f1230.png",ne=n.p+"static/media/garlic.c56ad151.png",ce=n.p+"static/media/shallot.9ed7eeac.png",ie=n.p+"static/media/yellowOnion.705db0c0.png",re=n.p+"static/media/redOnion.9e9c82d9.png",ae=n.p+"static/media/dishTowel.3a935b4b.png",oe=n.p+"static/media/crackers.2a977019.png",se=n.p+"static/media/tomato.f0126756.png",ue="0x495f947276749ce646f68ac8c248420045cb7b5e",le=[{picture:U,name:"Toilet Paper",price:.84,token:"115520923340809203113026120233829107469855999749882535239359978683612329410561"},{picture:z,name:"Banana",prefix:"a ",price:.39,token:"115520923340809203113026120233829107469855999749882535239359978684711841038337"},{picture:J,name:"Duct Tape",price:4.99,token:"115520923340809203113026120233829107469855999749882535239359978685811352666113"},{picture:W,name:"Ice Cream",price:3.5,token:"115520923340809203113026120233829107469855999749882535239359978686910864293889"},{picture:Y,name:"Strawberry",prefix:"a ",price:.25,token:"115520923340809203113026120233829107469855999749882535239359978688010375921665"},{picture:$,name:"Scotch Tape",price:2.79,token:"115520923340809203113026120233829107469855999749882535239359978689109887549441"},{picture:K,name:"Sponge",prefix:"a ",price:.93,token:"115520923340809203113026120233829107469855999749882535239359978690209399177217"},{picture:V,name:"Bowling Ball",prefix:"a ",price:144.95,token:"115520923340809203113026120233829107469855999749882535239359978691308910804993"},{picture:Q,name:"Candle",prefix:"a ",price:7.8,token:"115520923340809203113026120233829107469855999749882535239359978692408422432769"},{picture:X,name:"Brussels Sprouts",price:3.99,token:"115520923340809203113026120233829107469855999749882535239359978693507934060545"},{picture:Z,name:"Asparagus",price:5.99,token:"115520923340809203113026120233829107469855999749882535239359978694607445688321"},{picture:ee,name:"Eggs",price:1.48,token:"115520923340809203113026120233829107469855999749882535239359978695706957316097"},{picture:te,name:"Pacifier",prefix:"a ",price:2.5,description:"This piece celebrates the birth of my son.",token:"115520923340809203113026120233829107469855999749882535239359978696806468943873"},{picture:ne,name:"Garlic",price:.5,description:"Some find its scent offensive. Others find it comforting. Those from Gilroy, CA can\u2019t escape it.",token:"115520923340809203113026120233829107469855999749882535239359978697905980571649"},{picture:ce,name:"Shallot",prefix:"a ",price:.75,description:"Delicious raw in salad dressing or deep fried or pan simmered.",token:"115520923340809203113026120233829107469855999749882535239359978699005492199425"},{picture:ie,name:"Yellow Onion",prefix:"a ",price:1.49,description:"One of the only vegetables I knew how to cook as a bachelor.",token:"115520923340809203113026120233829107469855999749882535239359978700105003827201"},{picture:ae,name:"Dish Towel",prefix:"a ",price:4.99,description:"Good to have around to clean up inevitable messes.",token:"115520923340809203113026120233829107469855999749882535239359978701204515454977"},{picture:re,name:"Red Onion",prefix:"a ",price:1.49,description:"Though mild and sweet, it will still bring tears to your eyes.",token:"115520923340809203113026120233829107469855999749882535239359978702304027082753"},{picture:oe,name:"Crackers",prefix:"a ",price:6.9,description:"Just add peanut butter.",token:"115520923340809203113026120233829107469855999749882535239359978703403538710529"},{picture:se,name:"Tomato",prefix:"a ",price:1.5,token:"115520923340809203113026120233829107469855999749882535239359978704503050338305"}],de=le.map((function(e){return e.picture}));function fe(e){var t,n;return"undefined"===typeof e?null===(n=le[0])||void 0===n?void 0:n.picture:null===(t=le[parseInt(e,10)])||void 0===t?void 0:t.picture}function pe(e){var t,n;return"undefined"===typeof e?null===(n=le[0])||void 0===n?void 0:n.price:null===(t=le[parseInt(e,10)])||void 0===t?void 0:t.price}function je(e){var t,n;return"undefined"===typeof e?null===(n=le[0])||void 0===n?void 0:n.name:null===(t=le[parseInt(e,10)])||void 0===t?void 0:t.name}function be(e){var t,n;return"undefined"===typeof e?null===(n=le[0])||void 0===n?void 0:n.prefix:null===(t=le[parseInt(e,10)])||void 0===t?void 0:t.prefix}function he(e){var t,n;return"undefined"===typeof e?{tokenId:null===(n=le[0])||void 0===n?void 0:n.token,contractAddress:ue}:{tokenId:null===(t=le[parseInt(e,10)])||void 0===t?void 0:t.token,contractAddress:ue}}n(57),n(58);function me(e){var t=e.children;return Object(c.jsx)("h1",{className:"Title",children:t})}n(59);function ve(){return E("Not Found"),Object(c.jsx)("div",{className:"NotFound",children:Object(c.jsx)(me,{children:"404: That's an error"})})}function Oe(e){var t=e.match,n=e.location.pathname,i=t.params.id,r=void 0===i?String(0):i,a=S(),o=a.isTransitioning,s=a.activePathname;return E(je(r)),fe(r)?Object(c.jsxs)("div",{className:g()("Main",{Main__transitioning:o||s!==n}),children:[Object(c.jsx)("div",{className:"Main__details",children:Object(c.jsx)("div",{className:"Main__name",children:je(r)})}),Object(c.jsx)("div",{className:"Main__marquee",children:Object(c.jsx)(I,{id:"/thing/".concat(r),pathname:n,children:Object(c.jsx)(C,{height:300,width:300,src:fe(r)})})}),Object(c.jsx)(G,{usd:pe(r),name:je(r),prefix:be(r)}),Object(c.jsx)(H,Object(j.a)(Object(j.a)({},he(r)),{},{name:je(r)}))]}):Object(c.jsx)(ve,{})}var ge=n(25);n(60);function xe(e){var t=e.history.location.pathname;E("Things");var n,i,r,a=S(),o=a.isTransitioning,s=a.activePathname;return Object(c.jsx)("div",{className:g()("Things",{Things__transitioning:o||s!==t}),children:Object(c.jsx)("div",{className:"Things__grid",children:(n=de,i="",r=50,[].concat(Object(ge.a)(n),Object(ge.a)(Array(r-n.length).fill(i)))).map((function(e,n){var i="/thing/".concat(n);return e?Object(c.jsx)(I,{id:i,pathname:t,children:Object(c.jsx)(k,{href:i,children:Object(c.jsx)(C,{height:50,width:50,src:e})})},i):Object(c.jsx)("div",{},i)}))})})}function we(){return Object(i.useEffect)((function(){n(61)}),[]),Object(c.jsx)(_,{children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:xe}),Object(c.jsx)(d.a,{path:"/things",component:xe}),Object(c.jsx)(d.a,{path:"/thing/:id",component:Oe}),Object(c.jsx)(d.a,{path:"*",component:ve})]})})}function _e(e){var t=e.location;return"undefined"===typeof window?Object(c.jsxs)(d.c,{location:t,children:[Object(c.jsx)(R,{}),Object(c.jsx)("main",{children:Object(c.jsx)(we,{})})]}):Object(c.jsxs)(f.a,{children:[Object(c.jsx)(R,{}),Object(c.jsx)("main",{children:Object(c.jsx)(we,{})})]})}n(62);o.a.hydrate(Object(c.jsx)(_e,{}),document.getElementById(l)),s()}},[[63,1,2]]]);
//# sourceMappingURL=main.273113cf.chunk.js.map