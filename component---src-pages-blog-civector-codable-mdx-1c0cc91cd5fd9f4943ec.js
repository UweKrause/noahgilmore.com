(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s});var o=n(166),a=n.n(o),r=n(0),i=n.n(r),l=n(178),c=n(181);t.default=function(e){var t=e.components,n=a()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},i.a.createElement(l.MDXTag,{name:"p",components:t},"For my current ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://twitter.com/noahsark769/status/1102318232025718785"}},"side project"),", I have to export CIFilter parameters to json, and I've been running into issues with various CoreImage types not conforming to Swift's ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Codable"),". ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CIColor")," is easy enough to encode and decode, but ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CIVector")," (which represents an arbitrary length list of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CGFloats"),") is trickier."),i.a.createElement(l.MDXTag,{name:"p",components:t},"Thought I'd share a wrapper type which I use to encode and decode ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CIVector"),":"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},"struct CIVectorCodableWrapper {\n    let vector: CIVector\n}\n\nextension CIVectorCodableWrapper: Codable {\n    public init(from decoder: Decoder) throws {\n        var container = try decoder.unkeyedContainer()\n        var floats: [CGFloat] = []\n        while !container.isAtEnd {\n            floats.append(try container.decode(CGFloat.self))\n        }\n        vector = CIVector(floats: floats)\n    }\n\n    func encode(to encoder: Encoder) throws {\n        var container = encoder.unkeyedContainer()\n        for i in 0..<vector.count {\n            try container.encode(vector.value(at: i))\n        }\n    }\n}\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CIVector"),' is semantically an "unkeyed container" type, so the ',i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Codable")," implementation encodes the vector's floats to an unkeyed coding container (with ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"JSONEncoder"),", for example, this becomes an array)."))};var s={}},162:function(e,t,n){"use strict";n.d(t,"c",function(){return h}),n.d(t,"b",function(){return g}),n.d(t,"f",function(){return y}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return w}),n.d(t,"a",function(){return x});var o=n(187),a=n.n(o),r=n(161),i=n(168),l=n.n(i),c=n(169),s=n.n(c),p=n(170),d=n.n(p),m=n(171),f=n.n(m);function u(){var e=a()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return u=function(){return e},e}var h=Object(r.a)(u(),l.a,l.a,s.a,d.a,f.a),g=r.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(r.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),r.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=r.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),w=r.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),x=r.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},164:function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return a});var o="rgba(128, 165, 177, 1)",a="rgba(151, 195, 210, 1)"},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=l(n(0)),r=l(n(50)),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.default)({}),s=c.Provider,p=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n}(t,["components"]);return a.default.createElement(p,null,function(t){return a.default.createElement(e,o({components:n||t},r))})}};var d=function(e){var t=e.components,n=e.children;return a.default.createElement(s,{value:t},n)};d.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=d},166:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}},168:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},169:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},170:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},171:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},172:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(162),i=n(164),l=n(161),c=n(176),s=n(177),p=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),d=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),m=Object(l.c)(r.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(r.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(r.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],i.a,i.b);t.a=function(e){return a.a.createElement(p,null,a.a.createElement(d,null,a.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),a.a.createElement(m,null,a.a.createElement(f,null,a.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},a.a.createElement(c.b,{color:i.a,size:"24"}))),a.a.createElement(f,null,a.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},a.a.createElement(s.a,{color:i.a,size:"24"}))),a.a.createElement(f,null,a.a.createElement(u,{"aria-label":"App Store",href:"https://appstore.com/trestle"},a.a.createElement(c.a,{color:i.a,size:"24"})))))}},173:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return f});var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(161),c=n(167),s=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(l.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),p=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),d=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;@media (prefers-color-scheme:dark){color:#fff;}']),m=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),f=function(e){return i.a.createElement("div",null,i.a.createElement(c.Helmet,null,i.a.createElement("title",null,e.title)),i.a.createElement(p,null,i.a.createElement(d,null,e.title),i.a.createElement(m,null,e.date)))};i.a.Component},174:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(34),c=n.n(l),s=n(161).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:not(pre code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre > code.language-nohighlight{@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),p=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(s,null,this.props.children)},n.componentDidMount=function(){for(var e=c.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},t}(i.a.Component)},175:function(e,t,n){"use strict";function o(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return o})},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(179);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(o).default}});var a=n(165);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(a).default}})},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(0),i=s(r),l=s(n(180)),c=n(165);function s(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,r=void 0===a?{}:a,c=e.children,s=e.components,d=void 0===s?{}:s,m=e.Layout,f=e.layoutProps,u=d[n+"."+t]||d[t]||p[t]||t;return m?((0,l.default)(this,m),i.default.createElement(m,o({components:d},f),i.default.createElement(u,r,c))):i.default.createElement(u,r,c)}}]),t}();t.default=(0,c.withMDXComponents)(d)},180:function(e,t,n){"use strict";var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=s&&s(Object);e.exports=function e(t,n,d){if("string"!=typeof n){if(p){var m=s(n);m&&m!==p&&e(t,m,d)}var f=i(n);l&&(f=f.concat(l(n)));for(var u=0;u<f.length;++u){var h=f[u];if(!(o[h]||a[h]||d&&d[h])){var g=c(n,h);try{r(t,h,g)}catch(e){}}}return t}return t}},181:function(e,t,n){"use strict";n(49);var o=n(7),a=n.n(o),r=n(0),i=n.n(r),l=n(167),c=n(162),s=n(172),p=n(161),d=n(176),m=n(177),f=n(164);var u=p.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),h=p.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],f.a,f.b,function(e){return e.margin&&Object(p.b)(["margin-right:20px;"])}),g=function(e){return i.a.createElement(c.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},i.a.createElement(h,{margin:e.margin},e.children))},y=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return i.a.createElement(u,null,i.a.createElement(g,{label:"Twitter",url:t,newTab:!0,margin:!0},i.a.createElement(m.a,{size:24,color:"white"})),i.a.createElement(g,{label:"Blog homepage",url:"/blog"},i.a.createElement(d.b,{size:24,color:"white"})))},t}(i.a.Component),b=n(173),w=n(174),x=n(175),v=p.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),E=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(v,null,i.a.createElement("div",{id:"disqus_thread"}))},n.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},t}(i.a.Component),C=n(185),_=n.n(C);n.d(t,"a",function(){return j});var k=p.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),N=p.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),j=function(e){function t(){return e.apply(this,arguments)||this}a()(t,e);var n=t.prototype;return n.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return i.a.createElement(k,null,i.a.createElement(c.c,null),i.a.createElement(l.Helmet,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&i.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&i.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),i.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),i.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),i.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),i.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),i.a.createElement(s.a,{blog:!0}),i.a.createElement(b.a,null,i.a.createElement(N,null,i.a.createElement(b.b,{title:this.props.pageContext.frontmatter.title,date:Object(x.a)(this.props.pageContext.frontmatter.date)})),i.a.createElement(w.a,null,this.props.children),i.a.createElement(N,null,i.a.createElement(y,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),i.a.createElement(E,null))))},n.componentDidMount=function(){_.a.initialize("UA-35325391-1"),_.a.pageview(window.location.pathname+window.location.search)},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-civector-codable-mdx-1c0cc91cd5fd9f4943ec.js.map