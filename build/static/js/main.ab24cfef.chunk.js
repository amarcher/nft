(this.webpackJsonpnft=this.webpackJsonpnft||[]).push([[0],{25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),r=n(26);t.default=function(){return(0,i.useContext)(r.SharedElementContext)}},26:function(e,t,n){"use strict";var i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},c=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,a){function o(e){try{s(i.next(e))}catch(t){a(t)}}function c(e){try{s(i.throw(e))}catch(t){a(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((i=i.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,i,r,a,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&a[0]?i.return:a[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,a[1])).done)return r;switch(i=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,i=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(r=(r=o.trys).length>0&&r[r.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){o.label=a[1];break}if(6===a[0]&&o.label<r[1]){o.label=r[1],r=a;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(a);break}r[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(c){a=[6,c],i=0}finally{n=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.SharedElementContext=void 0;var u=o(n(0)),l=n(40),d=n(27);function f(e){return!!(e.firstBoundingClientRect&&e.lastBoundingClientRect&&e.node&&"undefined"!==typeof e.id)}t.SharedElementContext=u.default.createContext({mountSharedElement:function(){},isTransitioning:!1,activePathname:void 0}),t.default=function(e){var r=this,a=e.children,o=e.pathname;(0,u.useEffect)((function(){n(41)}),[]);var p=(0,u.useRef)(null),h=(0,u.useRef)(o),m=(0,u.useRef)(),v=(0,u.useState)(!1),b=v[0],j=v[1],O=(0,u.useState)({}),g=O[0],_=O[1],x=(0,u.useCallback)((function(){if(p.current){for(;p.current.firstChild;)p.current.removeChild(p.current.firstChild);p.current.style.pointerEvents="none"}}),[p]),y=(0,u.useCallback)((function(e,t){var n=e.id,r=e.ref,a=e.animationOptions,o=e.getNode,c=e.getKeyframes;_((function(e){var s,u=r.getBoundingClientRect(),f={firstNode:e[n].node,lastNode:r,firstBoundingClientRect:e[n].firstBoundingClientRect,lastBoundingClientRect:u},h=(null===o||void 0===o?void 0:o(f))||(0,d.getNodeForTransition)(r,u),m=h.animate((null===c||void 0===c?void 0:c({firstBoundingClientRect:e[n].firstBoundingClientRect,lastBoundingClientRect:u}))||(0,d.getKeyframes)(e[n].firstBoundingClientRect,u),i(i({},l.DEFAULT_ANIMATION_OPTIONS),a));p.current&&(p.current.appendChild(h),p.current.style.pointerEvents="all");var v=i(i({},e[n]),{lastBoundingClientRect:u,node:h,animation:m,lastSeenAtPathname:t});return i(i({},e),((s={})[n]=v,s))}))}),[]),E=(0,u.useCallback)((function(e,t){var n=e.id,r=e.ref;return _((function(e){var a;return i(i({},e),((a={})[n]={lastSeenAtPathname:t,firstBoundingClientRect:r.getBoundingClientRect(),node:r,id:n},a))}))}),[]),T=(0,u.useCallback)((function(){_((function(e){return Object.keys(e).reduce((function(t,n){var r;return t[n]=i(i({},e[n]),{firstBoundingClientRect:(null===(r=e[n].node)||void 0===r?void 0:r.getBoundingClientRect())||e[n].firstBoundingClientRect}),t}),{})}))}),[]),w=(0,u.useCallback)((function(){m.current&&clearTimeout(m.current),m.current=setTimeout(T,l.DEBOUNCE_TIMEOUT)}),[T]);(0,u.useEffect)((function(){return window.addEventListener("resize",w),document.addEventListener("scroll",w),function(){window.removeEventListener("resize",w),document.addEventListener("scroll",w)}}),[w]);var C=(0,u.useCallback)((function(){_({}),j(!1),setTimeout(x,l.GHOST_LAYER_CLEAR_TIMEOUT)}),[x]),N=(0,u.useCallback)((function(){return c(r,void 0,void 0,(function(){var e;return s(this,(function(t){return(e=Object.values(g).filter(f)).length?(console.log("Starting transition of "+e.length+" element(s)"),[2,Promise.all(e.map((function(e){return e.animation.finished}))).finally(C)]):(console.log("Found no elements to transition"),j(!1),[2,Promise.resolve().then((function(){return j(!1)}))])}))}))}),[C,g]);(0,u.useEffect)((function(){b||o===h.current||N().then((function(){h.current=o}))}),[o,b,N]);var S=(0,u.useCallback)((function(e,t){var n;g[e.id]?(null===(n=g[e.id])||void 0===n?void 0:n.lastSeenAtPathname)!==t&&(y(e,t),j(!0)):E(e,t)}),[E,y,g]);return u.default.createElement(t.SharedElementContext.Provider,{value:{mountSharedElement:S,isTransitioning:b,activePathname:h.current}},u.default.createElement(u.default.Fragment,null,a,u.default.createElement("div",{className:"GhostLayer",style:l.GHOST_LAYER_STYLE,ref:p})))}},27:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getNodeForTransition=t.getKeyframes=void 0,t.getKeyframes=function(e,t){var n=e.top-t.top,i=e.left-t.left;return[{transform:"matrix("+e.width/t.width+", 0, 0, "+e.height/t.height+", "+i+", "+n+")"},{transform:"none"}]},t.getNodeForTransition=function(e,t){var n=e.cloneNode(!0);return n.classList.add("SharedElement"),n.style.position="fixed",n.style.setProperty("contain","strict"),n.style.willChange="transform",n.style.animationFillMode="both",n.style.top=t.top+"px",n.style.left=t.left+"px",n.style.height=t.height+"px",n.style.width=t.width+"px",n.style.transformOrigin="top left",n}},39:function(e,t,n){"use strict";var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=a(n(0)),s=o(n(25));t.default=function(e){var t=e.children,n=e.id,i=e.pathname,r=e.animationOptions,a=e.getNode,o=e.getKeyframes,u=(0,s.default)().mountSharedElement,l=(0,c.useRef)(null);return(0,c.useEffect)((function(){var e=l.current;e&&u({animationOptions:r,ref:e,id:n,getKeyframes:o,getNode:a},i)}),[n,u,l,i,r,a,o]),c.default.createElement("div",{ref:l},t)}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_ANIMATION_OPTIONS=t.DEFAULT_DURATION=t.DEBOUNCE_TIMEOUT=t.GHOST_LAYER_CLEAR_TIMEOUT=t.GHOST_LAYER_STYLE=void 0,t.GHOST_LAYER_STYLE={pointerEvents:"none",position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"transparent",opacity:1},t.GHOST_LAYER_CLEAR_TIMEOUT=200,t.DEBOUNCE_TIMEOUT=100,t.DEFAULT_DURATION=200,t.DEFAULT_ANIMATION_OPTIONS={duration:t.DEFAULT_DURATION,fill:"forwards",easing:"ease-out"}},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(0),a=n(18),o=n.n(a),c=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),r(e),a(e),o(e)}))},s="Normal Fucking Things",u="root",l=n(2),d=n(19),f=n(9),p=n(8),h=n.n(p),m=n(4);n(42);function v(e){var t=e.disabled,n=e.className,a=e.children,o=e.title,c=e.onPress,s=e.preventDefault,u=e.href,d=Object(l.g)(),f=Object(r.useCallback)((function(e){s&&(e.preventDefault(),e.stopPropagation()),u&&!u.startsWith("https:")&&d.push(u),u&&u.startsWith("https:")&&(window.location.href=u),c&&c()}),[c,u,d,s]);return Object(i.jsx)("button",{type:"button",className:n?"Button ".concat(n):"Button",disabled:t,title:o||("string"===typeof a?a:""),onClick:f,children:a})}var b=n(12),j=n(13);n(48);function O(e){return null===e||void 0===e?void 0:e.includes("/video/")}function g(e){var t,n=e.alt,a=void 0===n?"":n,o=e.borderRadius,c=void 0===o?10:o,s=e.className,u=void 0===s?"":s,l=e.height,d=void 0===l?"":l,f=e.imageClassName,p=void 0===f?"":f,v=e.onReady,g=e.src,_=e.useImg,x=void 0!==_&&_,y=e.width,E=void 0===y?"":y,T=function(){var e=Object(r.useState)(!1),t=Object(m.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){i(!0)}),[]),n}(),w=Object(r.useRef)(new Image);w.current.referrerPolicy="no-referrer",w.current.src=g;var C=Object(r.useState)(w.current.complete),N=Object(m.a)(C,2),S=N[0],k=N[1],P=Object(r.useCallback)((function(){k(!0),v&&v(g),w.current.onload&&(w.current.onload=null)}),[g,v]);w.current.onload=P,Object(r.useEffect)((function(){var e=w.current;return g!==e.src&&(e.src=g,k(e.complete)),function(){(null===e||void 0===e?void 0:e.onload)&&(e.onload=null)}}),[g]);var R=Object(r.useMemo)((function(){return{height:d,width:E,display:x?"flex":"block",borderRadius:O(g)?c:void 0}}),[d,E,x,c,g]),I=Object(r.useMemo)((function(){return{borderRadius:c,height:x?d:void 0,width:x?E:void 0}}),[c,d,x,E]),A=Object(r.useMemo)((function(){return Object(j.a)(Object(j.a)({},I),{},{backgroundImage:x?void 0:"url(".concat(g,")")})}),[I,g,x]),M=h()("preloaded-image__container",Object(b.a)({"preloaded-image__preloading":!T||!S},u,!!u)),F=h()("preloaded-image".concat(x?"__img":""),(t={},Object(b.a)(t,p,!!p),Object(b.a)(t,"preloaded-image__video",O(g)),t));return O(g)?Object(i.jsx)("div",{className:M,style:R,children:Object(i.jsx)("video",{playsInline:!0,autoPlay:!0,muted:!0,loop:!0,controls:!0,height:d,width:E,title:a,className:F,children:Object(i.jsx)("source",{src:g})})}):x?Object(i.jsxs)("div",{className:M,style:R,children:[Object(i.jsx)("img",{className:F,style:A,alt:a,src:g,height:d,width:E,referrerPolicy:"no-referrer"}),Object(i.jsx)("div",{className:"preloaded-image__cover",style:I})]}):Object(i.jsxs)("div",{className:M,style:R,children:[Object(i.jsx)("div",{className:F,style:A,role:"img","aria-label":a}),Object(i.jsx)("div",{className:"preloaded-image__cover",style:I})]})}var _=n.p+"static/media/logo.c1374840.png";function x(e){var t=e.size,n=void 0===t?16:t;return Object(i.jsx)(g,{src:_,height:n,width:n})}n(49);function y(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(r.useRef)("undefined"!==typeof window&&window.scrollY),n=Object(r.useState)(!1),i=Object(m.a)(n,2),a=i[0],o=i[1],c=Object(r.useState)(t.current>e),s=Object(m.a)(c,2),u=s[0],l=s[1],d=Object(r.useCallback)((function(){var n="undefined"!==typeof window&&window.scrollY;o((function(e){return!(t.current<n&&e)&&(t.current>n&&!e||e)})),t.current=n,l((function(t){return!t&&n>e||!(t&&n<e)&&t}))}),[e]);return Object(r.useEffect)((function(){if("undefined"!==typeof window)return window.addEventListener("scroll",d,{passive:!0}),function(){return window.removeEventListener("scroll",d)}}),[a,d]),{isGoingUp:a,isAboveThreshold:u}}(100),t=e.isGoingUp,n=e.isAboveThreshold;return Object(i.jsxs)("div",{className:h()("nav",{nav__hidden:!t&&n}),children:[Object(i.jsx)("nav",{className:"nav__content",children:Object(i.jsx)("ul",{className:"nav__list",children:Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsxs)(v,{href:"/things",className:"nav__logo",children:[Object(i.jsx)(x,{}),Object(i.jsx)("span",{className:"nav__title",children:"Normal Fucking Things"})]})})})}),Object(i.jsx)("div",{children:"Why buy IRL, when the NFT is worth so much more?"}),Object(i.jsx)("div",{className:"nav__spacer"})]})}function E(e){var t=function(e){return e?"".concat(s,": ").concat(e):s}(e);return Object(r.useEffect)((function(){"undefined"!==typeof window&&t&&(window.document.title=t)}),[t])}n(50);function T(e){return fetch(e).then((function(e){return e.json()}))}function w(e,t){var n=Object(r.useRef)(null),i=Object(r.useRef)(e);return Object(r.useEffect)((function(){i.current=e}),[e]),Object(r.useEffect)((function(){var e=function(){return i.current()};if("number"===typeof t&&(e(),t>0))return n.current=window.setInterval(e,t),function(){n.current&&window.clearInterval(n.current)}}),[t]),n.current}function C(e,t,n){var i=w(Object(r.useCallback)((function(){return T("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD").then((function(e){return e.USD})).then((function(n){console.log("1 ETH = $".concat(n)),t(Math.round(100*e)/Math.round(100*n))}))}),[t,e]),n?5e3:null);!n&&i&&clearInterval(i)}var N=n(22),S=n.n(N);n(60);S.a.setAppElement("#".concat(u));var k={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)",backgroundColor:"white",borderRadius:"8px"}};function P(e){var t=e.isOpen,n=void 0!==t&&t,r=e.onAfterOpen,a=e.onRequestClose,o=e.title,c=void 0===o?"":o,s=e.children;return Object(i.jsxs)(S.a,{isOpen:n,onAfterOpen:r,onRequestClose:a,contentLabel:c,style:k,children:[Object(i.jsxs)("div",{className:"Modal__header",children:[Object(i.jsx)(v,{className:"Modal__close_button",onPress:a,title:"Close",children:"x"}),Object(i.jsx)("div",{className:"Modal__title",children:c})]}),Object(i.jsx)("div",{className:"Modal__content",children:s})]})}function R(e){var t=e.usd,n=e.prefix,a=void 0===n?"":n,o=e.name,c=Object(r.useState)(!1),s=Object(m.a)(c,2),u=s[0],l=s[1],d=Object(r.useState)(0),f=Object(m.a)(d,2),p=f[0];C(t,f[1],!0);var h=p?"IRL: ".concat(p.toFixed(8)," ETH"):" ",b="IRL Cost of ".concat(a).concat(o);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v,{className:"Main__price",onPress:function(){return l(!0)},children:h}),Object(i.jsx)(P,{title:b,isOpen:u,onRequestClose:function(){return l(!1)},children:Object(i.jsxs)("div",{className:"Main__price_detail",children:["$",t.toFixed(2)]})})]})}function I(e,t,n){var i=w(Object(r.useCallback)((function(){return function(e){var t=e.tokenId,n=e.contractAddress;return T("".concat("https://api.opensea.io/api/v1/assets","?token_ids=").concat(t,"&asset_contract_address=").concat(n)).then((function(e){var t;return null===e||void 0===e||null===(t=e.assets)||void 0===t?void 0:t[0]}))}({tokenId:e,contractAddress:t}).then((function(e){console.log(e),n(e)}))}),[n,e,t]),0);i&&clearInterval(i)}function A(e){var t=e.contractAddress,n=e.tokenId,a=e.name,o=Object(r.useState)(!1),c=Object(m.a)(o,2),s=c[0],u=c[1],l=Object(r.useState)(),d=Object(m.a)(l,2),f=d[0];if(I(n,t,d[1]),!f)return Object(i.jsx)("div",{className:"Main__NFT"});var p=((f.sell_orders||[])[0]||{}).base_price,h="NFT of ".concat(a),b=p?"NFT: ".concat(p/1e18," ETH"):"NFT: Not For Sale",j="".concat(p?"Buy":"View"," on OpenSea");return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(v,{className:"Main__NFT",onPress:p?void 0:function(){return u(!0)},href:p?f.permalink:void 0,children:b}),Object(i.jsx)(P,{title:h,isOpen:s,onRequestClose:function(){return u(!1)},children:Object(i.jsx)(v,{href:f.permalink,children:j})})]})}var M=n.p+"static/media/toiletPaper.d714d2d2.png",F=n.p+"static/media/banana.b0114185.png",L=n.p+"static/media/ductTape.bcb0825b.png",B=n.p+"static/media/iceCream.2da3dbf2.png",D=n.p+"static/media/strawberry.45df4dd6.png",U=n.p+"static/media/scotchTape.3b7aa4dc.png",G=n.p+"static/media/sponge.765fc2f2.png",Y=n.p+"static/media/bowlingBall.a7381ada.png",H=n.p+"static/media/candle.551a5061.png",K=n.p+"static/media/brusselsSprouts.88d0ee82.png",q=n.p+"static/media/asparagus.d2fde0db.png",z=n.p+"static/media/eggs.0f037a7a.png",J=n.p+"static/media/pacifier.d691d612.png",W=n.p+"static/media/garlic.8691fc9e.png",$=n.p+"static/media/shallot.bc89f645.png",V=n.p+"static/media/yellowOnion.8f08aa54.png",Q=n.p+"static/media/redOnion.06e53a36.png",X=n.p+"static/media/dishTowel.c5a76481.png",Z=n.p+"static/media/crackers.e34a7a6b.png",ee=n.p+"static/media/tomato.ead07dce.png",te="0x495f947276749ce646f68ac8c248420045cb7b5e",ne=[{picture:M,name:"Toilet Paper",price:.84,token:"115520923340809203113026120233829107469855999749882535239359978683612329410561"},{picture:F,name:"Banana",prefix:"a ",price:.39,token:"115520923340809203113026120233829107469855999749882535239359978684711841038337"},{picture:L,name:"Duct Tape",price:4.99,token:"115520923340809203113026120233829107469855999749882535239359978685811352666113"},{picture:B,name:"Ice Cream",price:3.5,token:"115520923340809203113026120233829107469855999749882535239359978686910864293889"},{picture:D,name:"Strawberry",prefix:"a ",price:.25,token:"115520923340809203113026120233829107469855999749882535239359978688010375921665"},{picture:U,name:"Scotch Tape",price:2.79,token:"115520923340809203113026120233829107469855999749882535239359978689109887549441"},{picture:G,name:"Sponge",prefix:"a ",price:.93,token:"115520923340809203113026120233829107469855999749882535239359978690209399177217"},{picture:Y,name:"Bowling Ball",prefix:"a ",price:144.95,token:"115520923340809203113026120233829107469855999749882535239359978691308910804993"},{picture:H,name:"Candle",prefix:"a ",price:7.8,token:"115520923340809203113026120233829107469855999749882535239359978692408422432769"},{picture:K,name:"Brussels Sprouts",price:3.99,token:"115520923340809203113026120233829107469855999749882535239359978693507934060545"},{picture:q,name:"Asparagus",price:5.99,token:"115520923340809203113026120233829107469855999749882535239359978694607445688321"},{picture:z,name:"Eggs",price:1.48,token:"115520923340809203113026120233829107469855999749882535239359978695706957316097"},{picture:J,name:"Pacifier",prefix:"a ",price:2.5,description:"This piece celebrates the birth of my son.",token:"115520923340809203113026120233829107469855999749882535239359978696806468943873"},{picture:W,name:"Garlic",price:.5,description:"Some find its scent offensive. Others find it comforting. Those from Gilroy, CA can\u2019t escape it.",token:"115520923340809203113026120233829107469855999749882535239359978697905980571649"},{picture:$,name:"Shallot",prefix:"a ",price:.75,description:"Delicious raw in salad dressing or deep fried or pan simmered.",token:"115520923340809203113026120233829107469855999749882535239359978699005492199425"},{picture:V,name:"Yellow Onion",prefix:"a ",price:1.49,description:"One of the only vegetables I knew how to cook as a bachelor.",token:"115520923340809203113026120233829107469855999749882535239359978700105003827201"},{picture:X,name:"Dish Towel",prefix:"a ",price:4.99,description:"Good to have around to clean up inevitable messes.",token:"115520923340809203113026120233829107469855999749882535239359978701204515454977"},{picture:Q,name:"Red Onion",prefix:"a ",price:1.49,description:"Though mild and sweet, it will still bring tears to your eyes.",token:"115520923340809203113026120233829107469855999749882535239359978702304027082753"},{picture:Z,name:"Crackers",prefix:"a ",price:6.9,description:"Just add peanut butter.",token:"115520923340809203113026120233829107469855999749882535239359978703403538710529"},{picture:ee,name:"Tomato",prefix:"a ",price:1.5,token:"115520923340809203113026120233829107469855999749882535239359978704503050338305"}],ie=ne.map((function(e){return e.picture}));function re(e){var t,n;return"undefined"===typeof e?null===(n=ne[0])||void 0===n?void 0:n.picture:null===(t=ne[parseInt(e,10)])||void 0===t?void 0:t.picture}function ae(e){var t,n;return"undefined"===typeof e?null===(n=ne[0])||void 0===n?void 0:n.price:null===(t=ne[parseInt(e,10)])||void 0===t?void 0:t.price}function oe(e){var t,n;return"undefined"===typeof e?null===(n=ne[0])||void 0===n?void 0:n.name:null===(t=ne[parseInt(e,10)])||void 0===t?void 0:t.name}function ce(e){var t,n;return"undefined"===typeof e?null===(n=ne[0])||void 0===n?void 0:n.prefix:null===(t=ne[parseInt(e,10)])||void 0===t?void 0:t.prefix}function se(e){var t,n;return"undefined"===typeof e?{tokenId:null===(n=ne[0])||void 0===n?void 0:n.token,contractAddress:te}:{tokenId:null===(t=ne[parseInt(e,10)])||void 0===t?void 0:t.token,contractAddress:te}}n(61),n(62);function ue(e){var t=e.children;return Object(i.jsx)("h1",{className:"Title",children:t})}n(63);function le(){return E("Not Found"),Object(i.jsx)("div",{className:"NotFound",children:Object(i.jsx)(ue,{children:"404: That's an error"})})}function de(e){var t=e.match,n=e.location.pathname,r=t.params.id,a=void 0===r?String(0):r,o=Object(f.useSharedElementContext)(),c=o.isTransitioning,s=o.activePathname;return E(oe(a)),re(a)?Object(i.jsxs)("div",{className:h()("Main",{Main__transitioning:c||s!==n}),children:[Object(i.jsx)("div",{className:"Main__details",children:Object(i.jsx)("div",{className:"Main__name",children:oe(a)})}),Object(i.jsx)("div",{className:"Main__marquee",children:Object(i.jsx)(f.SharedElement,{id:"/thing/".concat(a),pathname:n,children:Object(i.jsx)(g,{height:300,width:300,src:re(a)})})}),Object(i.jsx)(R,{usd:ae(a),name:oe(a),prefix:ce(a)}),Object(i.jsx)(A,Object(j.a)(Object(j.a)({},se(a)),{},{name:oe(a)}))]}):Object(i.jsx)(le,{})}var fe=n(23);n(64);function pe(e){var t=e.history.location.pathname;E("Things");var n,r,a,o=Object(f.useSharedElementContext)(),c=o.isTransitioning,s=o.activePathname;return Object(i.jsx)("div",{className:h()("Things",{Things__transitioning:c||s!==t}),children:Object(i.jsx)("div",{className:"Things__grid",children:(n=ie,r="",a=50,[].concat(Object(fe.a)(n),Object(fe.a)(Array(a-n.length).fill(r)))).map((function(e,n){var r="/thing/".concat(n);return e?Object(i.jsx)(f.SharedElement,{id:r,pathname:t,children:Object(i.jsx)(v,{href:r,children:Object(i.jsx)(g,{height:50,width:50,src:e})})},r):Object(i.jsx)("div",{},r)}))})})}function he(){var e=Object(l.h)().pathname;return Object(i.jsx)(f.SharedElementContextProvider,{pathname:e,children:Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.a,{exact:!0,path:"/",component:pe}),Object(i.jsx)(l.a,{path:"/things",component:pe}),Object(i.jsx)(l.a,{path:"/thing/:id",component:de}),Object(i.jsx)(l.a,{path:"*",component:le})]})})}function me(e){var t=e.location;return"undefined"===typeof window?Object(i.jsxs)(l.c,{location:t,children:[Object(i.jsx)(y,{}),Object(i.jsx)("main",{children:Object(i.jsx)(he,{})})]}):Object(i.jsxs)(d.a,{children:[Object(i.jsx)(y,{}),Object(i.jsx)("main",{children:Object(i.jsx)(he,{})})]})}n(65);o.a.hydrate(Object(i.jsx)(me,{}),document.getElementById(u)),c()},9:function(e,t,n){"use strict";var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getKeyframes=t.getNodeForTransition=t.useSharedElementContext=t.SharedElementContext=t.SharedElementContextProvider=t.SharedElement=void 0;var r=n(39);Object.defineProperty(t,"SharedElement",{enumerable:!0,get:function(){return i(r).default}});var a=n(26);Object.defineProperty(t,"SharedElementContextProvider",{enumerable:!0,get:function(){return i(a).default}}),Object.defineProperty(t,"SharedElementContext",{enumerable:!0,get:function(){return a.SharedElementContext}});var o=n(25);Object.defineProperty(t,"useSharedElementContext",{enumerable:!0,get:function(){return i(o).default}});var c=n(27);Object.defineProperty(t,"getNodeForTransition",{enumerable:!0,get:function(){return c.getNodeForTransition}}),Object.defineProperty(t,"getKeyframes",{enumerable:!0,get:function(){return c.getKeyframes}})}},[[66,1,2]]]);
//# sourceMappingURL=main.ab24cfef.chunk.js.map