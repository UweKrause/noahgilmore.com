(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{160:function(e,t,n){"use strict";var r=n(36);t.__esModule=!0,t.withPrefix=d,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=r(n(179)),o=r(n(190)),i=r(n(7)),s=r(n(50)),c=r(n(42)),l=r(n(4)),u=r(n(0)),p=n(16),f=n(171);function d(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var v={activeClassName:l.default.string,activeStyle:l.default.object},h=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,s.default)((0,s.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,s.default)((0,s.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(a.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,i=void 0===r?this.defaultGetProps:r,s=t.onClick,c=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),v=t.replace,h=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),m=d(n);return u.default.createElement(p.Link,(0,o.default)({to:m,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(n,{state:l,replace:v})),!0}},h))},t}(u.default.Component);h.propTypes=(0,o.default)({},v,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=h;t.default=m;var g=function(e,t){window.___navigate(d(e),t)};t.navigate=g;var w=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(d(e))};t.push=w;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(d(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),w(e)}},177:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var r=n(299),a=function(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm-78.9 296.9c-2.7 4.6-7.5 7.1-12.5 7.1-2.5 0-5-.6-7.3-2-6.9-4-9.2-12.8-5.2-19.7l14.2-23.6c1.5-2.5 4.1-4 7-4h2.1c10.3 0 17.5 6.2 19.6 12.2l-17.9 30zm120.2-46.4l-93 .1h-61.8c-8.2 0-14.8-6.8-14.4-15 .3-7.8 7.1-13.7 14.9-13.7h44.8l53.1-90.4-17.2-29.3c-3.9-6.7-2.2-15.5 4.4-19.7 7-4.5 16.2-2.2 20.3 4.8l9.2 15.7h.1l9.2-15.7c4.1-7 13.4-9.3 20.3-4.8 6.6 4.2 8.3 13 4.4 19.7l-17.2 29.3-16.7 28.5-36.3 61.9v.1h53.5c6.7 0 15.1 3.6 18.5 9.4l.3.6c3 5.1 4.7 8.6 4.7 13.7-.1 2.8-1.1 4.8-1.1 4.8zm72.2.1h-25.2v.1l18.4 31.3c4 6.8 2.1 15.8-4.8 20-2.3 1.4-4.9 2.1-7.5 2.1-5 0-9.8-2.6-12.5-7.1l-27.2-46.3-16.9-28.8-21.8-37.3c-6.4-10.9-6.7-24.5-.6-35.3 4.3-7.6 7.6-9.6 7.6-9.6l48.5 82.1h41.7c7.8 0 14.5 6 14.9 13.7.3 8.3-6.3 15.1-14.6 15.1z"}}]})(e)};a.displayName="IoIosAppstore";var o=function(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M258.5 104.1c-1.5-1.2-3.5-1.2-5 0l-156 124.8c-.9.8-1.5 1.9-1.5 3.1v230c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V322c0-1.1.9-2 2-2h92c1.1 0 2 .9 2 2v140c0 1.1.9 2 2 2h108c1.1 0 2-.9 2-2V232c0-1.2-.6-2.4-1.5-3.1l-156-124.8z"}},{tag:"path",attr:{d:"M458.7 204.2l-189-151.4C265.9 49.7 261 48 256 48s-9.9 1.7-13.7 4.8L160 119.7V77.5c0-1.1-.9-2-2-2H98c-1.1 0-2 .9-2 2v92.2l-42.7 35.1c-3.1 2.5-5.1 6.2-5.3 10.2-.2 4 1.3 7.9 4.1 10.7 2.6 2.6 6.1 4.1 9.9 4.1 3.2 0 6.3-1.1 8.8-3.1l183.9-148c.5-.4.9-.4 1.3-.4s.8.1 1.3.4l183.9 147.4c2.5 2 5.6 3.1 8.8 3.1 3.7 0 7.2-1.4 9.9-4.1 2.9-2.8 4.4-6.7 4.2-10.7-.3-4-2.2-7.7-5.4-10.2z"}}]})(e)};o.displayName="IoIosHome"},178:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(299),a=function(e){return Object(r.a)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)};a.displayName="FaTwitter"},179:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}},190:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},299:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.a.createContext&&a.a.createContext(o);n.d(t,"a",function(){return l});var s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&(n[r[a]]=e[r[a]])}return n};function l(e){return function(t){return a.a.createElement(u,s({attr:s({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return a.a.createElement(t.tag,s({key:n},t.attr),e(t.child))})}(e.child))}}function u(e){var t=function(t){var n,r=e.size||t.size||"1em";t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className);var o=e.attr,i=c(e,["attr"]);return a.a.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,i,{className:n,style:s({color:e.color||t.color},t.style,e.style),height:r,width:r}),e.children)};return void 0!==i?a.a.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}}}]);
//# sourceMappingURL=3-263c14d187370ee3a9ba.js.map