(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5075)}])},8418:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.default=void 0;var o,i=(o=t(7294))&&o.__esModule?o:{default:o},a=t(6273),c=t(387),s=t(7190);var u={};function l(e,n,t,r){if(e&&a.isLocalURL(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n,t=!1!==e.prefetch,o=c.useRouter(),f=i.default.useMemo((function(){var n=r(a.resolveHref(o,e.href,!0),2),t=n[0],i=n[1];return{href:t,as:e.as?a.resolveHref(o,e.as):i||t}}),[o,e.href,e.as]),d=f.href,p=f.as,h=e.children,v=e.replace,_=e.shallow,y=e.scroll,m=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var g=(n=i.default.Children.only(h))&&"object"===typeof n&&n.ref,b=r(s.useIntersection({rootMargin:"200px"}),2),x=b[0],w=b[1],j=i.default.useCallback((function(e){x(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,x]);i.default.useEffect((function(){var e=w&&t&&a.isLocalURL(d),n="undefined"!==typeof m?m:o&&o.locale,r=u[d+"%"+p+(n?"%"+n:"")];e&&!r&&l(o,d,p,{locale:n})}),[p,d,w,m,t,o]);var E={ref:j,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,i,c,s){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==c&&r.indexOf("#")>=0&&(c=!1),n[o?"replace":"push"](t,r,{shallow:i,locale:s,scroll:c}))}(e,o,d,p,v,_,y,m)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(d)&&l(o,d,p,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var k="undefined"!==typeof m?m:o&&o.locale,C=o&&o.isLocaleDomain&&a.getDomainLocale(p,k,o&&o.locales,o&&o.domainLocales);E.href=C||a.addBasePath(a.addLocale(p,k,o&&o.defaultLocale))}return i.default.cloneElement(n,E)};n.default=f},7190:function(e,n,t){"use strict";function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(s){o=!0,i=s}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,s=o.useRef(),u=r(o.useState(!1),2),l=u[0],f=u[1],d=o.useCallback((function(e){s.current&&(s.current(),s.current=void 0),t||l||e&&e.tagName&&(s.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=c.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return c.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,i=r.observer,a=r.elements;return a.set(e,n),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),c.delete(o))}}(e,(function(e){return e&&f(e)}),{rootMargin:n}))}),[t,n,l]);return o.useEffect((function(){if(!a&&!l){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[l]),[d,l]};var o=t(7294),i=t(9311),a="undefined"!==typeof IntersectionObserver;var c=new Map},5075:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return u}});var r=t(5893),o=t(9008),i=t(1664),a=t(214),c=t.n(a),s=t(3267),u=!0;n.default=function(e){var n=(0,s.o)();return(0,r.jsxs)("div",{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"City Guide"}),(0,r.jsx)("meta",{name:"description",content:"Stephen's City Guide"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,r.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"anonymous"}),(0,r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap",rel:"stylesheet"})]}),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsx)("h1",{className:c().heading,children:"City Guide"}),(0,r.jsx)("section",{className:c().cities,children:e.cities.map((function(e){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.default,{href:"/".concat(e.abbr),children:(0,r.jsxs)("div",{className:c().city,children:[(0,r.jsx)("a",{className:c().cityImage,style:{backgroundImage:'url("'.concat(n,"/").concat(e.abbr,'.jpeg")'),backgroundPosition:e.imgPosition}}),(0,r.jsx)("span",{children:e.name})]})},e.abbr)})}))})]})]})}},3267:function(e,n,t){"use strict";t.d(n,{o:function(){return r}});var r=function(){return"/city-guide"}},214:function(e){e.exports={container:"Home_container__bCOhY",heading:"Home_heading__BTwrO",cities:"Home_cities__KSxIf",city:"Home_city__oFjC_",cityImage:"Home_cityImage__c06HI",header:"Home_header__GCVRv",grid:"Home_grid__GxQ85",listDescription:"Home_listDescription__zU71D",list:"Home_list__qBUOI",place:"Home_place__oOy_q"}},9008:function(e,n,t){e.exports=t(5443)},1664:function(e,n,t){e.exports=t(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);