(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{151:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=s(r(0)),i=s(r(50)),o=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,i.default)({}),u=l.Provider,d=l.Consumer;t.withMDXComponents=function(e){return function(t){var r=t.components,i=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}(t,["components"]);return a.default.createElement(d,null,function(t){return a.default.createElement(e,n({components:r||t},i))})}};var c=function(e){var t=e.components,r=e.children;return a.default.createElement(u,{value:t},r)};c.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},t.default=c},155:function(e,t){e.exports=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}},156:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(157);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return i(n).default}});var a=r(151);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return i(a).default}})},157:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(0),o=u(i),s=u(r(158)),l=r(151);function u(e){return e&&e.__esModule?e:{default:e}}var d={inlineCode:"code",wrapper:"div"},c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.parentName,a=e.props,i=void 0===a?{}:a,l=e.children,u=e.components,c=void 0===u?{}:u,f=e.Layout,p=e.layoutProps,h=c[r+"."+t]||c[t]||d[t]||t;return f?((0,s.default)(this,f),o.default.createElement(f,n({components:c},p),o.default.createElement(h,i,l))):o.default.createElement(h,i,l)}}]),t}();t.default=(0,l.withMDXComponents)(c)},158:function(e,t,r){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i=Object.defineProperty,o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,d=u&&u(Object);e.exports=function e(t,r,c){if("string"!=typeof r){if(d){var f=u(r);f&&f!==d&&e(t,f,c)}var p=o(r);s&&(p=p.concat(s(r)));for(var h=0;h<p.length;++h){var y=p[h];if(!(n[y]||a[y]||c&&c[y])){var v=l(r,y);try{i(t,y,v)}catch(e){}}}return t}return t}},159:function(e,t,r){"use strict";var n=r(35);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var a=n(r(155)),i=n(r(165)),o=n(r(7)),s=n(r(51)),l=n(r(36)),u=n(r(4)),d=n(r(0)),c=r(16),f=r(164);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},y=function(e){function t(t){var r;r=e.call(this)||this,(0,l.default)((0,s.default)((0,s.default)(r)),"defaultGetProps",function(e){return e.isCurrent?{className:[r.props.className,r.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},r.props.style,r.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),r.state={IOSupported:n},r.handleRef=r.handleRef.bind((0,s.default)((0,s.default)(r))),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},r.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},r.handleRef=function(e){var t,r,n,a=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,r=function(){___loader.enqueue((0,f.parsePath)(a.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),r())})})).observe(t))},r.render=function(){var e=this,t=this.props,r=t.to,n=t.getProps,o=void 0===n?this.defaultGetProps:n,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),h=t.replace,y=(0,a.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),v=p(r);return d.default.createElement(c.Link,(0,i.default)({to:v,state:u,getProps:o,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(r).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(r,{state:u,replace:h})),!0}},y))},t}(d.default.Component);y.propTypes=(0,i.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=y;t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var b=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=b;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),b(e)}},165:function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},r.apply(this,arguments)}e.exports=r},182:function(e,t,r){"use strict";var n=r(6),a=r(52)(!0);n(n.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r(53)("includes")},183:function(e,t,r){"use strict";var n=r(6),a=r(184);n(n.P+n.F*r(185)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},184:function(e,t,r){var n=r(77),a=r(26);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(a(e))}},185:function(e,t,r){var n=r(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},188:function(e,t,r){"use strict";var n=r(35);t.__esModule=!0,t.default=void 0;var a,i=n(r(7)),o=n(r(51)),s=n(r(155)),l=n(r(165)),u=n(r(0)),d=n(r(4)),c=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=c(e),r=t.fluid?t.fluid.src:t.fixed.src;return!!f[r]||(f[r]=!0,!1)},h=[];var y=function(e,t){(void 0===a&&"undefined"!=typeof window&&window.IntersectionObserver&&(a=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),a).observe(e),h.push([e,t])},v=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+r+"/>":"",a=e.srcSet?'<source srcSet="'+e.srcSet+'" '+r+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1";return"<picture>"+n+a+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=u.default.forwardRef(function(e,t){var r=e.style,n=e.onLoad,a=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return u.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:a,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var r;r=e.call(this,t)||this;var n=!0,a=!0,i=!1,s=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,a=!1,i=!0),"undefined"==typeof window&&(n=!1,a=!1),t.critical&&(n=!0,a=!1,i=!1);var d=!(r.props.critical&&!r.props.fadeIn);return r.state={isVisible:n,imgLoaded:a,IOSupported:i,fadeIn:s,hasNoScript:d,seenBefore:l},r.imageRef=u.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,o.default)((0,o.default)(r))),r.handleRef=r.handleRef.bind((0,o.default)((0,o.default)(r))),r}(0,i.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.handleRef=function(e){var t=this;this.state.IOSupported&&e&&y(e,function(){t.setState({isVisible:!0})})},r.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,n=e.className,a=e.style,i=void 0===a?{}:a,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,m="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s);if(p){var O=p;return u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},u.default.createElement(b,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),O.base64&&u.default.createElement(g,{alt:this.state.isVisible?"":r,title:t,src:O.base64,style:w}),O.tracedSVG&&u.default.createElement(g,{alt:this.state.isVisible?"":r,title:t,src:O.tracedSVG,style:w}),m&&u.default.createElement(b,{title:t,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement("picture",null,O.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),u.default.createElement("source",{srcSet:O.srcSet,sizes:O.sizes}),u.default.createElement(g,{alt:r,title:t,src:O.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:r,title:t},O))}}))}if(h){var _=h,E=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},i);return"inherit"===i.display&&delete E.display,u.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:E,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},_.base64&&u.default.createElement(g,{alt:this.state.isVisible?"":r,title:t,src:_.base64,style:w}),_.tracedSVG&&u.default.createElement(g,{alt:this.state.isVisible?"":r,title:t,src:_.tracedSVG,style:w}),m&&u.default.createElement(b,{title:t,style:{backgroundColor:m,width:_.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:_.height}}),this.state.isVisible&&u.default.createElement("picture",null,_.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:_.srcSetWebp,sizes:_.sizes}),u.default.createElement("source",{srcSet:_.srcSet,sizes:_.sizes}),u.default.createElement(g,{alt:r,title:t,width:_.width,height:_.height,src:_.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:v((0,l.default)({alt:r,title:t,width:_.width,height:_.height},_))}}))}return null},t}(u.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var m=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:m,sizes:w,fixed:m,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=10-9224469ffe4224281610.js.map