(this.webpackJsonpnft=this.webpackJsonpnft||[]).push([[0],{26:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(19),o=n.n(i),s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},u="Normal Fucking Things",l="root",d=n(2),j=n(20),f=n(10),b=n(5),h=n(14),O=n.n(h),m=n(21),p=n(4),v=n(9),g=n.n(v),x=(n(26),a.a.createContext({mountSharedElement:function(){},isTransitioning:!1,activePathname:void 0}));function _(e){return!!(e.firstBoundingClientRect&&e.lastBoundingClientRect&&e.node&&"undefined"!==typeof e.id)}function w(e){var t=e.children,n=Object(d.h)().pathname,a=Object(r.useRef)(null),i=Object(r.useRef)(n),o=Object(r.useRef)(n),s=Object(r.useState)(!1),u=Object(p.a)(s,2),l=u[0],j=u[1],h=Object(r.useState)({}),v=Object(p.a)(h,2),w=v[0],y=v[1],N=Object(r.useCallback)((function(e){var t,n=e.node,c=e.lastBoundingClientRect;n.classList.add("SharedElement"),n.style.top="".concat(c.top,"px"),n.style.left="".concat(c.left,"px"),n.style.height="".concat(c.height,"px"),n.style.width="".concat(c.width,"px"),n.style.transformOrigin="top left",null===(t=a.current)||void 0===t||t.appendChild(n)}),[a]),C=Object(r.useCallback)(function(){var e=Object(m.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=t.animation).play(),e.abrupt("return",n.finished);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),k=Object(r.useCallback)((function(){if(a.current)for(;a.current.firstChild;)a.current.removeChild(a.current.firstChild)}),[a]),T=Object(r.useCallback)((function(e){var t=e.id,n=e.ref;return y((function(e){var c,r;if(null===(c=e[t])||void 0===c?void 0:c.lastBoundingClientRect)return e;if(null===(r=e[t])||void 0===r?void 0:r.firstBoundingClientRect){var a=n.getBoundingClientRect(),i=n.cloneNode(!0),o=new Animation(function(e,t,n){var c=t.top-n.top,r=t.left-n.left,a=t.width/n.width,i=t.height/n.height;return new KeyframeEffect(e,[{transform:"matrix(".concat(a,", 0, 0, ").concat(i,", ").concat(r,", ").concat(c,")")},{transform:"none"}],{duration:200})}(i,e[t].firstBoundingClientRect,a)),s=Object(b.a)(Object(b.a)({},e[t]),{},{lastBoundingClientRect:a,node:i,animation:o});return N(s),Object(b.a)(Object(b.a)({},e),{},Object(f.a)({},t,s))}return Object(b.a)(Object(b.a)({},e),{},Object(f.a)({},t,{firstBoundingClientRect:n.getBoundingClientRect(),id:t}))}))}),[N]),R=Object(r.useCallback)((function(){y({}),j(!1),setTimeout(k,200)}),[k]),E=Object(r.useCallback)(Object(m.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=Object.values(w).filter(_)).length){e.next=4;break}return console.log("starting transition of ".concat(t.length," element(s)")),e.abrupt("return",Promise.all(t.map(C)).finally(R));case 4:return console.log("did not transition: found no elements to transition"),j(!1),e.abrupt("return",Promise.resolve().then((function(){return j(!1)})));case 7:case"end":return e.stop()}}),e)}))),[R,w,C]);Object(r.useEffect)((function(){o.current&&n!==o.current&&(o.current=n)}),[n]),Object(r.useEffect)((function(){l||o.current===i.current||E().then((function(){i.current=n}))}),[n,l,E]);var I=Object(r.useCallback)((function(e,t){w[e.id]?t!==i.current&&(console.log("updating element"),j(!0),T(e)):(console.log("adding element"),T(e))}),[T,w]);return Object(c.jsx)(x.Provider,{value:{mountSharedElement:I,isTransitioning:l||i.current!==n||o.current!==n||i.current!==o.current,activePathname:i.current},children:Object(c.jsxs)(c.Fragment,{children:[t,Object(c.jsx)("div",{className:g()("GhostLayer__mask",{GhostLayer__mask__transitioning:i.current!==n||o.current!==n||i.current!==o.current||l})}),Object(c.jsx)("div",{className:"GhostLayer",ref:a})]})})}n(43);function y(e){var t=e.disabled,n=e.className,a=e.children,i=e.title,o=e.onPress,s=e.preventDefault,u=e.href,l=Object(d.g)(),j=Object(r.useCallback)((function(e){s&&(e.preventDefault(),e.stopPropagation()),u&&!u.startsWith("https:")&&l.push(u),u&&u.startsWith("https:")&&(window.location.href=u),o&&o()}),[o,u,l,s]);return Object(c.jsx)("button",{type:"button",className:n?"Button ".concat(n):"Button",disabled:t,title:i||("string"===typeof a?a:""),onClick:j,children:a})}n(44);function N(e){return null===e||void 0===e?void 0:e.includes("/video/")}function C(e){var t,n=e.alt,a=void 0===n?"":n,i=e.borderRadius,o=void 0===i?10:i,s=e.className,u=void 0===s?"":s,l=e.height,d=void 0===l?"":l,j=e.imageClassName,h=void 0===j?"":j,O=e.onReady,m=e.src,v=e.useImg,x=void 0!==v&&v,_=e.width,w=void 0===_?"":_,y=Object(r.useRef)(new Image);y.current.referrerPolicy="no-referrer",y.current.src=m;var C=Object(r.useState)(y.current.complete),k=Object(p.a)(C,2),T=k[0],R=k[1],E=Object(r.useCallback)((function(){R(!0),O&&O(m),y.current.onload&&(y.current.onload=null)}),[m,O]);y.current.onload=E,Object(r.useEffect)((function(){var e=y.current;return m&&(e.src=m,R(e.complete)),function(){(null===e||void 0===e?void 0:e.onload)&&(e.onload=null)}}),[m]);var I=Object(r.useMemo)((function(){return{height:d,width:w,display:x?"flex":"block",borderRadius:N(m)?o:void 0}}),[d,w,x,o,m]),S=Object(r.useMemo)((function(){return{borderRadius:o,height:x?d:void 0,width:x?w:void 0}}),[o,d,x,w]),B=Object(r.useMemo)((function(){return Object(b.a)(Object(b.a)({},S),{},{backgroundImage:x?void 0:"url(".concat(m,")")})}),[S,m,x]),P=g()("preloaded-image__container",Object(f.a)({"preloaded-image__preloading":!T},u,!!u)),F=g()("preloaded-image".concat(x?"__img":""),(t={},Object(f.a)(t,h,!!h),Object(f.a)(t,"preloaded-image__video",N(m)),t));return N(m)?Object(c.jsx)("div",{className:P,style:I,children:Object(c.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,controls:!0,height:d,width:w,title:a,className:F,children:Object(c.jsx)("source",{src:m})})}):x?Object(c.jsxs)("div",{className:P,style:I,children:[Object(c.jsx)("img",{className:F,style:B,alt:a,src:m,height:d,width:w,referrerPolicy:"no-referrer"}),Object(c.jsx)("div",{className:"preloaded-image__cover",style:S})]}):Object(c.jsxs)("div",{className:P,style:I,children:[Object(c.jsx)("div",{className:F,style:B,role:"img","aria-label":a}),Object(c.jsx)("div",{className:"preloaded-image__cover",style:S})]})}var k=n.p+"static/media/logo.478f188f.png";function T(e){var t=e.size,n=void 0===t?16:t;return Object(c.jsx)(C,{src:k,height:n,width:n})}n(45);function R(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(r.useRef)("undefined"!==typeof window&&window.scrollY),n=Object(r.useState)(!1),c=Object(p.a)(n,2),a=c[0],i=c[1],o=Object(r.useState)(t.current>e),s=Object(p.a)(o,2),u=s[0],l=s[1],d=Object(r.useCallback)((function(){var n="undefined"!==typeof window&&window.scrollY;i((function(e){return!(t.current<n&&e)&&(t.current>n&&!e||e)})),t.current=n,l((function(t){return!t&&n>e||!(t&&n<e)&&t}))}),[e]);return Object(r.useEffect)((function(){if("undefined"!==typeof window)return window.addEventListener("scroll",d,{passive:!0}),function(){return window.removeEventListener("scroll",d)}}),[a,d]),{isGoingUp:a,isAboveThreshold:u}}(100),t=e.isGoingUp,n=e.isAboveThreshold;return Object(c.jsxs)("div",{className:g()("nav",{nav__hidden:!t&&n}),children:[Object(c.jsx)("nav",{className:"nav__content",children:Object(c.jsx)("ul",{className:"nav__list",children:Object(c.jsx)("li",{className:"nav__list-item",children:Object(c.jsxs)(y,{href:"/things",className:"nav__logo",children:[Object(c.jsx)(T,{}),Object(c.jsx)("span",{className:"nav__title",children:"Normal Fucking Things"})]})})})}),Object(c.jsx)("div",{children:"Why buy IRL, when the NFT is worth so much more?"}),Object(c.jsx)("div",{className:"nav__spacer"})]})}function E(e){var t=function(e){return e?"".concat(u,": ").concat(e):u}(e);return Object(r.useEffect)((function(){"undefined"!==typeof window&&t&&(window.document.title=t)}),[t])}function I(e){var t=e.children,n=e.id,a=e.pathname,i=Object(r.useContext)(x).mountSharedElement,o=Object(r.useRef)(null);return Object(r.useEffect)((function(){var e=o.current;e&&i({ref:e,id:n},a)}),[n,i,o,a]),Object(c.jsx)("div",{ref:o,children:t})}n(46);function S(e){return fetch(e).then((function(e){return e.json()}))}function B(e,t){var n=Object(r.useRef)(null),c=Object(r.useRef)(e);return Object(r.useEffect)((function(){c.current=e}),[e]),Object(r.useEffect)((function(){var e=function(){return c.current()};if("number"===typeof t&&(e(),t>0))return n.current=window.setInterval(e,t),function(){n.current&&window.clearInterval(n.current)}}),[t]),n.current}function P(e,t,n){var c=B(Object(r.useCallback)((function(){return S("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then((function(e){return e.USD})).then((function(n){console.log("1 ETH = $".concat(n)),t(Math.round(100*e)/Math.round(100*n))}))}),[t,e]),n?5e3:null);!n&&c&&clearInterval(c)}var F=n(24),M=n.n(F);n(56);M.a.setAppElement("#".concat(l));var A={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",backgroundColor:"white"}};function L(e){var t=e.isOpen,n=void 0!==t&&t,r=e.onAfterOpen,a=e.onRequestClose,i=e.title,o=void 0===i?"":i,s=e.children;return Object(c.jsxs)(M.a,{isOpen:n,onAfterOpen:r,onRequestClose:a,contentLabel:o,style:A,children:[Object(c.jsxs)("div",{className:"Modal__header",children:[Object(c.jsx)(y,{className:"Modal__close_button",onPress:a,title:"Close",children:"x"}),Object(c.jsx)("div",{className:"Modal__title",children:o})]}),Object(c.jsx)("div",{className:"Modal__content",children:s})]})}function D(e){var t=e.usd,n=e.name,a=Object(r.useState)(!1),i=Object(p.a)(a,2),o=i[0],s=i[1],u=Object(r.useState)(0),l=Object(p.a)(u,2),d=l[0];P(t,l[1],!0);var j=d?"IRL: ".concat(d," ETH"):" ",f="Real Life Cost of ".concat(n);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{className:"Main__price",onPress:function(){return s(!0)},children:j}),Object(c.jsx)(L,{title:f,isOpen:o,onRequestClose:function(){return s(!1)},children:Object(c.jsxs)("div",{children:["$",t]})})]})}function q(e,t,n){var c=B(Object(r.useCallback)((function(){return function(e){var t=e.tokenId,n=e.contractAddress;return S("".concat("https://api.opensea.io/api/v1/assets","?token_ids=").concat(t,"&asset_contract_address=").concat(n)).then((function(e){var t;return null===e||void 0===e||null===(t=e.assets)||void 0===t?void 0:t[0]}))}({tokenId:e,contractAddress:t}).then((function(e){console.log(e),n(e)}))}),[n,e,t]),0);c&&clearInterval(c)}function G(e){var t=e.contractAddress,n=e.tokenId,a=e.name,i=Object(r.useState)(!1),o=Object(p.a)(i,2),s=o[0],u=o[1],l=Object(r.useState)(),d=Object(p.a)(l,2),j=d[0];if(q(n,t,d[1]),!j)return Object(c.jsx)("div",{className:"Main__NFT"});var f=((j.sell_orders||[])[0]||{}).base_price,b="NFT of ".concat(a),h=f?"NFT: ".concat(f/1e18," ETH"):"NFT: Not For Sale",O="".concat(f?"Buy":"View"," on OpenSea");return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(y,{className:"Main__NFT",onPress:f?void 0:function(){return u(!0)},href:f?j.permalink:void 0,children:h}),Object(c.jsx)(L,{title:b,isOpen:s,onRequestClose:function(){return u(!1)},children:Object(c.jsx)(y,{href:j.permalink,children:O})})]})}var H=n.p+"static/media/toiletPaper.7b41c171.png",U=n.p+"static/media/banana.3c5e04c4.png",W=n.p+"static/media/ductTape.e1be0eeb.png",J=n.p+"static/media/iceCream.d06ec4d9.png",Y=n.p+"static/media/strawberry.12a99143.png",$=n.p+"static/media/scotchTape.f927a7f3.png",z=n.p+"static/media/sponge.1a9e0694.png",K=n.p+"static/media/bowlingBall.ed590812.png",V=n.p+"static/media/candle.d6a9bd27.png",Q="0x495f947276749ce646f68ac8c248420045cb7b5e",X=[H,U,W,J,Y,$,z,K,V],Z=["Toilet Paper","Banana","Duct Tape","Ice Cream","Strawberry","Scotch Tape","Sponge","Bowling Ball","Candle"],ee=[.84,.39,4.99,3.5,.25,2.79,.93,144.95,7.8],te=["115520923340809203113026120233829107469855999749882535239359978683612329410561","115520923340809203113026120233829107469855999749882535239359978684711841038337","115520923340809203113026120233829107469855999749882535239359978685811352666113","115520923340809203113026120233829107469855999749882535239359978686910864293889","115520923340809203113026120233829107469855999749882535239359978688010375921665","115520923340809203113026120233829107469855999749882535239359978689109887549441","115520923340809203113026120233829107469855999749882535239359978690209399177217","115520923340809203113026120233829107469855999749882535239359978691308910804993","115520923340809203113026120233829107469855999749882535239359978692408422432769"];function ne(e){return"undefined"===typeof e?X[0]:X[parseInt(e,10)]}function ce(e){return"undefined"===typeof e?ee[0]:ee[parseInt(e,10)]}function re(e){return"undefined"===typeof e?Z[0]:Z[parseInt(e,10)]}function ae(e){return"undefined"===typeof e?{tokenId:te[0],contractAddress:Q}:{tokenId:te[parseInt(e,10)],contractAddress:Q}}n(57),n(58);function ie(e){var t=e.children;return Object(c.jsx)("h1",{className:"Title",children:t})}n(59);function oe(){return E("Not Found"),Object(c.jsx)("div",{className:"NotFound",children:Object(c.jsx)(ie,{children:"404: That's an error"})})}function se(e){var t=e.match,n=e.location.pathname,a=t.params.id,i=void 0===a?String(0):a,o=Object(r.useContext)(x),s=o.isTransitioning,u=o.activePathname;return E(re(i)),ne(i)?Object(c.jsxs)("div",{className:g()("Main",{Main__transitioning:s||u!==n}),children:[Object(c.jsx)("div",{className:"Main__marquee",children:Object(c.jsx)(I,{id:"/thing/".concat(i),pathname:n,children:Object(c.jsx)(C,{height:300,width:300,src:ne(i)})})}),Object(c.jsx)(D,{usd:ce(i),name:re(i)}),Object(c.jsx)(G,Object(b.a)(Object(b.a)({},ae(i)),{},{name:re(i)}))]}):Object(c.jsx)(oe,{})}var ue=n(25);n(60);function le(e){var t=e.history.location.pathname;E("Things");var n,a,i,o=Object(r.useContext)(x),s=o.isTransitioning,u=o.activePathname;return Object(c.jsx)("div",{className:g()("Things",{Things__transitioning:s||u!==t}),children:Object(c.jsx)("div",{className:"Things__grid",children:(n=X,a="",i=50,[].concat(Object(ue.a)(n),Object(ue.a)(Array(i-n.length).fill(a)))).map((function(e,n){var r="/thing/".concat(n);return e?Object(c.jsx)(I,{id:r,pathname:t,children:Object(c.jsx)(y,{href:r,children:Object(c.jsx)(C,{height:50,width:50,src:e})})},r):Object(c.jsx)("div",{},r)}))})})}function de(){return Object(r.useEffect)((function(){n(61)}),[]),Object(c.jsx)(w,{children:Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:le}),Object(c.jsx)(d.a,{path:"/things",component:le}),Object(c.jsx)(d.a,{path:"/thing/:id",component:se}),Object(c.jsx)(d.a,{path:"*",component:oe})]})})}function je(e){var t=e.location;return"undefined"===typeof window?Object(c.jsxs)(d.c,{location:t,children:[Object(c.jsx)(R,{}),Object(c.jsx)("main",{children:Object(c.jsx)(de,{})})]}):Object(c.jsxs)(j.a,{children:[Object(c.jsx)(R,{}),Object(c.jsx)("main",{children:Object(c.jsx)(de,{})})]})}n(62);o.a.hydrate(Object(c.jsx)(je,{}),document.getElementById(l)),s()}},[[63,1,2]]]);
//# sourceMappingURL=main.d7e1b311.chunk.js.map