(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{151:function(e,t,a){"use strict";a.d(t,"c",function(){return g}),a.d(t,"b",function(){return h}),a.d(t,"f",function(){return y}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return v}),a.d(t,"a",function(){return w});var n=a(167),i=a.n(n),r=(a(0),a(148)),o=a(158),s=a.n(o),l=a(159),c=a.n(l),d=a(160),u=a.n(d),p=a(161),f=a.n(p);function m(){var e=i()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return m=function(){return e},e}var g=Object(r.a)(m(),s.a,s.a,c.a,u.a,f.a),h=r.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(r.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),r.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=r.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),v=r.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=r.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},154:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(288);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(n).default}});var i=a(192);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(i).default}})},155:function(e,t,a){"use strict";a(49);var n=a(7),i=a.n(n),r=a(0),o=a.n(r),s=a(157),l=a(151),c=a(169),d=a(148),u=(a(193),a(170)),p=a(171),f=a(163);var m=d.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),g=d.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],f.a,f.b,function(e){return e.margin&&Object(d.b)(["margin-right:20px;"])}),h=function(e){return o.a.createElement(l.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},o.a.createElement(g,{margin:e.margin},e.children))},y=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return o.a.createElement(m,null,o.a.createElement(h,{label:"Twitter",url:t,newTab:!0,margin:!0},o.a.createElement(p.a,{size:24,color:"white"})),o.a.createElement(h,{label:"Blog homepage",url:"/blog"},o.a.createElement(u.b,{size:24,color:"white"})))},t}(o.a.Component),b=a(172),v=a(173),w=a(181),x=d.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),A=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.render=function(){return o.a.createElement(x,null,o.a.createElement("div",{id:"disqus_thread"}))},a.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},t}(o.a.Component),E=a(179),S=a.n(E);a.d(t,"a",function(){return N});var I=d.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-0"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),N=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.render=function(){return o.a.createElement("div",null,o.a.createElement(l.c,null),o.a.createElement(s.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),o.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),o.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),o.a.createElement("meta",{name:"Description",content:this.props.pageContext.frontmatter.staticPreview})),o.a.createElement(c.a,{blog:!0}),o.a.createElement(b.a,null,o.a.createElement(I,null,o.a.createElement(b.b,{title:this.props.pageContext.frontmatter.title,date:Object(w.a)(this.props.pageContext.frontmatter.date)})),o.a.createElement(v.a,null,this.props.children),o.a.createElement(I,null,o.a.createElement(y,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement(A,null))))},a.componentDidMount=function(){S.a.initialize("UA-35325391-1"),S.a.pageview(window.location.pathname+window.location.search)},t}(o.a.Component)},158:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},159:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},160:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},161:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},162:function(e,t,a){var n;e.exports=(n=a(180))&&n.default||n},163:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i});var n="rgba(128, 165, 177, 1)",i="rgba(151, 195, 210, 1)"},166:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return m}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),i=a.n(n),r=a(4),o=a.n(r),s=a(149),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(162),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(36);a.d(t,"parsePath",function(){return u.a});var p=i.a.createContext({}),f=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},169:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(151),o=a(163),s=a(148),l=a(170),c=a(171),d=s.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}"]),u=s.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;']),p=Object(s.c)(r.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(s.c)(r.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),m=Object(s.c)(r.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],o.a,o.b);s.c.div.withConfig({displayName:"Nav__MediaOnlySmall",componentId:"sc-1cm9dpf-5"})(["display:none;@media all and (max-width:600px){display:inline-block;}"]),s.c.div.withConfig({displayName:"Nav__MediaOnlyLarge",componentId:"sc-1cm9dpf-6"})(["display:inline-block;@media all and (max-width:600px){display:none;}"]);t.a=function(e){return i.a.createElement(d,null,i.a.createElement(u,null,i.a.createElement(m,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),i.a.createElement(p,null,i.a.createElement(f,null,i.a.createElement(m,{"aria-label":"Blog Home",href:"/blog"},i.a.createElement(l.b,{color:o.a,size:"24"}))),i.a.createElement(f,null,i.a.createElement(m,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},i.a.createElement(c.a,{color:o.a,size:"24"}))),i.a.createElement(f,null,i.a.createElement(m,{"aria-label":"App Store",href:"https://appstore.com/trestle"},i.a.createElement(l.a,{color:o.a,size:"24"})))))}},172:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return f});var n=a(7),i=a.n(n),r=a(0),o=a.n(r),s=a(148),l=a(157),c=s.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&"background-color: #f6f6f6;"}),d=s.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),u=s.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;margin-bottom:10px;']),p=s.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),f=function(e){return o.a.createElement("div",null,o.a.createElement(l.Helmet,null,o.a.createElement("title",null,e.title)),o.a.createElement(d,null,o.a.createElement(u,null,e.title),o.a.createElement(p,null,e.date)))};o.a.Component},173:function(e,t,a){"use strict";a.d(t,"a",function(){return d});var n=a(7),i=a.n(n),r=a(0),o=a.n(r),s=a(34),l=a.n(s),c=a(148).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:26px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}a:hover{color:#47656E;}code{font-family:monospace;font-size:16px;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #ddd;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;white-space:pre-wrap;@media all and (max-width:600px){font-size:19px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}']),d=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.render=function(){return o.a.createElement(c,null,this.props.children)},a.componentDidMount=function(){for(var e=l.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs.highlightBlock(e[t])},t}(o.a.Component)},180:function(e,t,a){"use strict";a.r(t);var n=a(13),i=a.n(n),r=a(0),o=a.n(r),s=a(4),l=a.n(s),c=a(55),d=a(2),u=function(e){var t=e.location,a=d.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(c.a,i()({location:t,pageResources:a},a.json))};u.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=u},181:function(e,t,a){"use strict";function n(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}a.d(t,"a",function(){return n})},192:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=s(a(0)),r=s(a(70)),o=s(a(4));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)({}),c=l.Provider,d=l.Consumer;t.withMDXComponents=function(e){return function(t){var a=t.components,r=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["components"]);return i.default.createElement(d,null,function(t){return i.default.createElement(e,n({components:a||t},r))})}};var u=function(e){var t=e.components,a=e.children;return i.default.createElement(c,{value:t},a)};u.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},t.default=u},193:function(e,t,a){"use strict";a(290),a(291),a(76);var n=a(294),i=a(0),r=a.n(i),o=a(166),s=a(295),l=a.n(s);t.a=function(e){return r.a.createElement(o.StaticQuery,{query:"1345654842",render:function(t){var a=t.images.edges.find(function(t){return t.node.relativePath.includes(e.filename)});if(!a)return null;var n=a.node.childImageSharp.sizes;return r.a.createElement(l.a,{alt:e.alt,sizes:n})},data:n})}},288:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(0),o=c(r),s=c(a(289)),l=a(192);function c(e){return e&&e.__esModule?e:{default:e}}var d={inlineCode:"code",wrapper:"div"},u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),i(t,[{key:"render",value:function(){var e=this.props,t=e.name,a=e.parentName,i=e.props,r=void 0===i?{}:i,l=e.children,c=e.components,u=void 0===c?{}:c,p=e.Layout,f=e.layoutProps,m=u[a+"."+t]||u[t]||d[t]||t;return p?((0,s.default)(this,p),o.default.createElement(p,n({components:u},f),o.default.createElement(m,r,l))):o.default.createElement(m,r,l)}}]),t}();t.default=(0,l.withMDXComponents)(u)},289:function(e,t,a){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,o=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,d=c&&c(Object);e.exports=function e(t,a,u){if("string"!=typeof a){if(d){var p=c(a);p&&p!==d&&e(t,p,u)}var f=o(a);s&&(f=f.concat(s(a)));for(var m=0;m<f.length;++m){var g=f[m];if(!(n[g]||i[g]||u&&u[g])){var h=l(a,g);try{r(t,g,h)}catch(e){}}}return t}return t}},290:function(e,t,a){"use strict";var n=a(6),i=a(51)(!0);n(n.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a(53)("includes")},291:function(e,t,a){"use strict";var n=a(6),i=a(292);n(n.P+n.F*a(293)("includes"),"String",{includes:function(e){return!!~i(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},292:function(e,t,a){var n=a(77),i=a(27);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(i(e))}},293:function(e,t,a){var n=a(3)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(e){}}return!0}},294:function(e){e.exports={data:{images:{edges:[{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-ee766.png",srcSet:"/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-3f213.png 150w,\n/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-243cb.png 300w,\n/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-ee766.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{relativePath:"pyparsing-trees-1.png",name:"pyparsing-trees-1",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQoz3VRy0rDUBDNwt/Qr/EfXPgNfou4E3Qn7lyJKxcqiIitBirSmLYJ2KS2TcxNUqHN6/Y4c2ljE9IDh7kwM2dmztXQgOVyWcb6m7lYLOB5nmIYhpWcVi/exk0kSQLTNGEYBlzXrSyibWuqoygKRFEEy7Jg2zbm83mZE0LA9/3/DTcnSClLskiWZaWgR02tdhu6ruMnCFBQDWMyncKiIQyNlWezmTqDwZ4EVMxTOTJZPE1TjB0HI2eIOI4xcR2KESQtIXzyc/ytvNXyPFfT12fzRmuyCA9iMyTVtT57GAwdJNT4TO+QLGB0v4bo9Aco8qx6chPkytquiLFzdoXDuxecGza0kwscv/dUbu/yBrvE3yyvfkoT5eqzRJLi4PYJpx996L7A/vU9HkZTlTt6fCO+qto/pKhhHRkwq+EAAAAASUVORK5CYII=",aspectRatio:2.597122302158273,src:"/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-1e875.png",srcSet:"/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-5f5eb.png 150w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-07cb7.png 300w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-1e875.png 600w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-4ddaa.png 900w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-bfb6f.png 1200w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-d8427.png 1444w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"pyparsing-trees-2.png",name:"pyparsing-trees-2",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABcklEQVQoz5WSy04CUQyGeRBfxXcwceFb6M4VWze6IPEBjLoyujDqQqPGDRgkBgOIQYkgKoIic2GY+4Xf0zLAQCRKk+ZMm55/2n4nhtB6vR7+a37Qr90qVbF0fg3D84YasahYEATwfZ+dvinvieKBO47D+SCsT+RKmD+8hCvq+f6koGEYUFUViqLAsiwWkWWZY3JJkuCLnCs6TDdasMPOit8SaprO32OCk2NTzB2F7rgu59OfbcQSOzipfXA8t3uEhdPkSHCa2DTruh6OX+qQLJvjq/oX8m2lL0gXZ/VpNoQyq9FFV6yA7KDyhqKsjqDQ4m3bZghEkU6KB26a5pC2ruv8AqIrWb97QKbZGgmSQLfbZbpEudPpQNM0ztFJlBmI+BmRdkMwnsjFb/JQbAd75Rr2n1/Hofx31MEGSXDxLIWGYWKz8CQeeWV2KNFRfXFuP1Zx8d7E2u09NsToZUX7u8Oo0G/vdTWdw3Iyi5VUFvFMAT+6R5054ebxbwAAAABJRU5ErkJggg==",aspectRatio:1.6509635974304069,src:"/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-1e875.png",srcSet:"/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-5f5eb.png 150w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-07cb7.png 300w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-1e875.png 600w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-4ddaa.png 900w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-bfb6f.png 1200w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-ef766.png 1542w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"gatsby-astronaut.png",name:"gatsby-astronaut",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-1e875.png",srcSet:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-5f5eb.png 150w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-07cb7.png 300w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-1e875.png 600w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-adfd6.png 800w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"404.jsx",name:"404",childImageSharp:null}},{node:{relativePath:"index.jsx",name:"index",childImageSharp:null}},{node:{relativePath:"blog/easy-gatsby-image-components.mdx",name:"easy-gatsby-image-components",childImageSharp:null}},{node:{relativePath:"blog/index.jsx",name:"index",childImageSharp:null}},{node:{relativePath:"blog/nsobject-equatable.mdx",name:"nsobject-equatable",childImageSharp:null}},{node:{relativePath:"blog/pyparsing-trees.mdx",name:"pyparsing-trees",childImageSharp:null}},{node:{relativePath:"blog/swift-pointer-uint.mdx",name:"swift-pointer-uint",childImageSharp:null}},{node:{relativePath:"blog/userdefaults-set-nil.mdx",name:"userdefaults-set-nil",childImageSharp:null}},{node:{relativePath:"blog/my-bucket-list.mdx",name:"my-bucket-list",childImageSharp:null}},{node:{relativePath:"blog/tables-are-hard.mdx",name:"tables-are-hard",childImageSharp:null}}]}}}},295:function(e,t,a){"use strict";var n=a(35);t.__esModule=!0,t.default=void 0;var i,r=n(a(7)),o=n(a(50)),s=n(a(153)),l=n(a(191)),c=n(a(0)),d=n(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},p={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!p[a]||(p[a]=!0,!1)},m=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),m.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",r=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+i+"<img "+s+l+t+o+r+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,i=e.onError,r=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},r,{onLoad:n,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,i=!0,r=!1,s=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,i=!1,r=!0),"undefined"==typeof window&&(n=!1,i=!1),t.critical&&(n=!0,i=!1,r=!1);var d=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:i,IOSupported:r,fadeIn:s,hasNoScript:d,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,r.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,p=void 0===d?{}:d,f=e.fluid,m=e.fixed,g=e.backgroundColor,b=e.Tag,v="boolean"==typeof g?"lightgray":g,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,p),x=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s);if(f){var A=f;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),A.base64&&c.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:A.base64,style:w}),A.tracedSVG&&c.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:A.tracedSVG,style:w}),v&&c.default.createElement(b,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),c.default.createElement(y,{alt:a,title:t,src:A.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},A))}}))}if(m){var E=m,S=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},r);return"inherit"===r.display&&delete S.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:S,ref:this.handleRef,key:"fixed-"+JSON.stringify(E.srcSet)},E.base64&&c.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:E.base64,style:w}),E.tracedSVG&&c.default.createElement(y,{alt:this.state.isVisible?"":a,title:t,src:E.tracedSVG,style:w}),v&&c.default.createElement(b,{title:t,style:{backgroundColor:v,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&c.default.createElement("picture",null,E.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),c.default.createElement("source",{srcSet:E.srcSet,sizes:E.sizes}),c.default.createElement(y,{alt:a,title:t,width:E.width,height:E.height,src:E.src,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:E.width,height:E.height},E))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,Tag:d.default.string};var x=b;t.default=x}}]);
//# sourceMappingURL=2-28463163bd3657898a3f.js.map