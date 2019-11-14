(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s});var a=n(166),r=n.n(a),o=n(0),i=n.n(o),l=n(178),c=n(181);t.default=function(e){var t=e.components,n=r()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},i.a.createElement(l.MDXTag,{name:"p",components:t},"To clear a value from UserDefaults, I previously thought it was fine to do something like this:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"Turns out that this works differently in different iOS versions. Starting in iOS 11, setting nil for a key works as I expected and the following prints nil:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\nprint(UserDefaults.standard.data(forKey: "myKey"))\n// nil\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"However, in iOS 10, UserDefaults actually tries to serialize nil into a Data:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\nprint(UserDefaults.standard.data(forKey: "myKey"))\n// 135 bytes\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"If we look at this data, it seems like it might be a plist:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'print(String(\n    data: UserDefaults.standard.data(forKey: "myKey")!,\n    encoding: .ascii\n))\n')),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},'Optional("bplist00Ô\b\n\vT$topX$objectsX$versionY$archiverÑTroot\0¡\tU$null\0 _NSKeyedArchiver\b(25:<>DI\0\0\0\0\0\0\0\0\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0[")\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"Turns out that we can use PropertyListSerialization to actually print the serialized value of nil:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'let data = UserDefaults.standard.data(forKey: "myKey")!\nlet propertyList = try! PropertyListSerialization.propertyList(\n   from: data,\n   options: [],\n   format: nil\n)\nprint(propertyList)\n')),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},'{\n    "$archiver" = NSKeyedArchiver;\n    "$objects" =     (\n        "$null"\n    );\n    "$top" =     {\n        root = "<CFKeyedArchiverUID 0x79e7c420 [0xf126e8]>{value = 0}";\n    };\n    "$version" = 100000;\n}\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"For whatever reason, this was totally unexpected to me. It’s particularly tricky when you’re trying to interpret the value of a previously cleared UserDefaults key as JSON:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'if let data = UserDefaults.standard.data(forKey: "myKey") {\n    let json = try JSONDecoder().decode(MyClass.self, from: data)\n    print(json)\n} else {\n    print("No data found")\n}\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"This will work just fine on iOS 11+, but throw an error on iOS 10."),i.a.createElement(l.MDXTag,{name:"p",components:t},"Here’s an ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/noahsark769/userdefaults-set-nil-example"}},"example project")," which demonstrates this behavior. I ended up finding one stackoverflow post about it, but as far as I can tell this isn’t documented anywhere. If you have any more info about it, ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://twitter.com/noahsark769"}},"let me know")," 👋"),i.a.createElement(l.MDXTag,{name:"p",components:t},"Lesson learned — setting nil isn’t a good way to clear a UserDefaults value. Instead, just use the recommended approach:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.removeObject(forKey: "myKey")\n')))};var s={}},162:function(e,t,n){"use strict";n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return y}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return w}),n.d(t,"a",function(){return x});var a=n(187),r=n.n(a),o=n(161),i=n(168),l=n.n(i),c=n(169),s=n.n(c),p=n(170),m=n.n(p),d=n(171),f=n.n(d);function u(){var e=r()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return u=function(){return e},e}var g=Object(o.a)(u(),l.a,l.a,s.a,m.a,f.a),h=o.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(o.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),o.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=o.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),w=o.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),x=o.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},164:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a="rgba(128, 165, 177, 1)",r="rgba(151, 195, 210, 1)"},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=l(n(0)),o=l(n(50)),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.default)({}),s=c.Provider,p=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return r.default.createElement(p,null,function(t){return r.default.createElement(e,a({components:n||t},o))})}};var m=function(e){var t=e.components,n=e.children;return r.default.createElement(s,{value:t},n)};m.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=m},166:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},168:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},169:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},170:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},171:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},172:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(162),i=n(164),l=n(161),c=n(176),s=n(177),p=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),m=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),d=Object(l.c)(o.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(o.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(o.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],i.a,i.b);t.a=function(e){return r.a.createElement(p,null,r.a.createElement(m,null,r.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),r.a.createElement(d,null,r.a.createElement(f,null,r.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},r.a.createElement(c.b,{color:i.a,size:"24"}))),r.a.createElement(f,null,r.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},r.a.createElement(s.a,{color:i.a,size:"24"}))),r.a.createElement(f,null,r.a.createElement(u,{"aria-label":"App Store",href:"https://appstore.com/trestle"},r.a.createElement(c.a,{color:i.a,size:"24"})))))}},173:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return f});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(161),c=n(167),s=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(l.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),p=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),m=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;@media (prefers-color-scheme:dark){color:#fff;}']),d=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),f=function(e){return i.a.createElement("div",null,i.a.createElement(c.Helmet,null,i.a.createElement("title",null,e.title)),i.a.createElement(p,null,i.a.createElement(m,null,e.title),i.a.createElement(d,null,e.date)))};i.a.Component},174:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(34),c=n.n(l),s=n(161).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:not(pre code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre > code.language-nohighlight{@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),p=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(s,null,this.props.children)},n.componentDidMount=function(){for(var e=c.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},t}(i.a.Component)},175:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(179);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(165);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),i=s(o),l=s(n(180)),c=n(165);function s(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,c=e.children,s=e.components,m=void 0===s?{}:s,d=e.Layout,f=e.layoutProps,u=m[n+"."+t]||m[t]||p[t]||t;return d?((0,l.default)(this,d),i.default.createElement(d,a({components:m},f),i.default.createElement(u,o,c))):i.default.createElement(u,o,c)}}]),t}();t.default=(0,c.withMDXComponents)(m)},180:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=s&&s(Object);e.exports=function e(t,n,m){if("string"!=typeof n){if(p){var d=s(n);d&&d!==p&&e(t,d,m)}var f=i(n);l&&(f=f.concat(l(n)));for(var u=0;u<f.length;++u){var g=f[u];if(!(a[g]||r[g]||m&&m[g])){var h=c(n,g);try{o(t,g,h)}catch(e){}}}return t}return t}},181:function(e,t,n){"use strict";n(49);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(167),c=n(162),s=n(172),p=n(161),m=n(176),d=n(177),f=n(164);var u=p.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),g=p.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],f.a,f.b,function(e){return e.margin&&Object(p.b)(["margin-right:20px;"])}),h=function(e){return i.a.createElement(c.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},i.a.createElement(g,{margin:e.margin},e.children))},y=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return i.a.createElement(u,null,i.a.createElement(h,{label:"Twitter",url:t,newTab:!0,margin:!0},i.a.createElement(d.a,{size:24,color:"white"})),i.a.createElement(h,{label:"Blog homepage",url:"/blog"},i.a.createElement(m.b,{size:24,color:"white"})))},t}(i.a.Component),b=n(173),w=n(174),x=n(175),v=p.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),E=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(v,null,i.a.createElement("div",{id:"disqus_thread"}))},n.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},t}(i.a.Component),k=n(185),_=n.n(k);n.d(t,"a",function(){return j});var D=p.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),N=p.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),j=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return i.a.createElement(D,null,i.a.createElement(c.c,null),i.a.createElement(l.Helmet,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&i.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&i.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),i.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),i.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),i.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),i.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),i.a.createElement(s.a,{blog:!0}),i.a.createElement(b.a,null,i.a.createElement(N,null,i.a.createElement(b.b,{title:this.props.pageContext.frontmatter.title,date:Object(x.a)(this.props.pageContext.frontmatter.date)})),i.a.createElement(w.a,null,this.props.children),i.a.createElement(N,null,i.a.createElement(y,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),i.a.createElement(E,null))))},n.componentDidMount=function(){_.a.initialize("UA-35325391-1"),_.a.pageview(window.location.pathname+window.location.search)},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-userdefaults-set-nil-mdx-dcfcf3367bb6d51f39fa.js.map