(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8418:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.default=void 0;var o,i=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),c=n(387),u=n(7190);var l={};function s(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var t=r(a.resolveHref(o,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(o,e.as):i||n}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,y=e.shallow,_=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var b=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,g=r(u.useIntersection({rootMargin:"200px"}),2),w=g[0],x=g[1],k=i.default.useCallback((function(e){w(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,w]);i.default.useEffect((function(){var e=x&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,r=l[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,x,m,n,o]);var E={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:c}))}(e,o,d,p,v,y,_,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&s(o,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var L="undefined"!==typeof m?m:o&&o.locale,j=o&&o.isLocaleDomain&&a.getDomainLocale(p,L,o&&o.locales,o&&o.domainLocales);E.href=j||a.addBasePath(a.addLocale(p,L,o&&o.defaultLocale))}return i.default.cloneElement(t,E)};t.default=f},7190:function(e,t,n){"use strict";function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!a,u=o.useRef(),l=r(o.useState(!1),2),s=l[0],f=l[1],d=o.useCallback((function(e){u.current&&(u.current(),u.current=void 0),n||s||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=c.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return c.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,a=r.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,s]);return o.useEffect((function(){if(!a&&!s){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[s]),[d,s]};var o=n(7294),i=n(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},5075:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u}});var r=n(5893),o=n(9008),i=n(1664),a=n(214),c=n.n(a),u=!0;t.default=function(e){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"City Guide"}),(0,r.jsx)("meta",{name:"description",content:"Stephen's City Guide"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap",rel:"stylesheet"})]}),(0,r.jsx)("section",{className:c().cities,children:e.cities.map((function(e){return(0,r.jsx)(i.default,{href:"/".concat(e.abbr),children:(0,r.jsx)("a",{className:c().cityLink,children:e.name})},e.abbr)}))})]})}},214:function(e){e.exports={cityLink:"Home_cityLink__MLbBb",header:"Home_header__GCVRv",grid:"Home_grid__GxQ85",list:"Home_list__qBUOI",place:"Home_place__oOy_q"}},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)}},function(e){e.O(0,[774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);