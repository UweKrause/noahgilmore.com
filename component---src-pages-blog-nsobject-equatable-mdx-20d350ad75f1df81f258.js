(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s});var a=n(166),o=n.n(a),r=n(0),i=n.n(r),l=n(178),c=n(181);t.default=function(e){var t=e.components,n=o()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:n,components:t},i.a.createElement(l.MDXTag,{name:"p",components:t},"Swift can be tricky sometimes. For example, what does the following print?"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},"class A: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n}\n\nfunc ==(left: A, right: A) -> Bool {\n  return left.x == right.x\n}\n\nprint(A(x: 1) == A(x: 1))\nprint([A(x: 1)] == [A(x: 1)])\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},"Perhaps surprisingly, it's this:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"true\nfalse // huh?!\n")),i.a.createElement(l.MDXTag,{name:"h3",components:t},"Equatable conformance is hard"),i.a.createElement(l.MDXTag,{name:"p",components:t},"Why does comparing two arrays with equal contents return false? It turns out that:"),i.a.createElement(l.MDXTag,{name:"ul",components:t},i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"Array is bridged to NSArray"),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"NSArray doesn't declare a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"==(_:_:)")," function, so it falls back to NSObject's ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"==(_:_:)"),", which calls ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"isEqual")),i.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},"NSArray's ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"isEqual")," ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"https://github.com/apple/swift-corelibs-foundation/blob/0cbb3225660752987a6c2cf672886fca434d3b1d/Foundation/NSArray.swift#L310"}},"compares objects by casting to AnyHashable"))),i.a.createElement(l.MDXTag,{name:"p",components:t},"We can see that this is the problem by casting the objects to ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"AnyHashable")," before comparing them:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},"print(A(x: 1) as AnyHashable == A(x: 1) as AnyHashable)\n")),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"false\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},"Apparently, doing this will use the NSObject implementation of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"==(_:_:)")," rather than the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"A")," one. The NSObject implementation of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"==(_:_:)")," checks isEqual, which returns false because the two elements aren't the same in memory. We can see this by adding an override:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'class B: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    print("isEqual for B")\n    return super.isEqual(object)\n  }\n}\n\nfunc ==(left: B, right: B) -> Bool {\n  print("== for B")\n  return left.x == right.x\n}\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"Then,"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},"print([B(x: 1)] == [B(x: 1)])\n")),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"isEqual for B\nfalse\n")),i.a.createElement(l.MDXTag,{name:"h3",components:t},"The fix"),i.a.createElement(l.MDXTag,{name:"p",components:t},"As far as I can tell, the best way to make an NSObject subclass use custom equality inside an array is to override isEqual:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'class C: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    guard let object = object as? C else { return false }\n    return object == self\n  }\n}\n\nfunc ==(left: C, right: C) -> Bool {\n  print("== for C")\n  return left.x == right.x\n}\n')),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},"print([C(x: 1)] == [C(x: 1)])\n")),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"== for C\ntrue\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},"Of course, if we defined ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"A")," as a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"struct")," or a regular ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"class")," in the first place, there won't be ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"==(_:_:)")," defined for ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"[A]"),", which means the compiler would catch our mistake instead of falling back to something that might not work correctly."),i.a.createElement(l.MDXTag,{name:"p",components:t},"Sigh. Working with NSObject can be tricky."),i.a.createElement(l.MDXTag,{name:"p",components:t},"A working playground with the code from this post can be found ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/noahsark769/code-examples/blob/ed9df41aae709eaeb4e334e3e9a5b1a650deef4d/swift/swift-nsobject-equatable.playground/Contents.swift"}},"here"),"."))};var s={}},162:function(e,t,n){"use strict";n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return b}),n.d(t,"d",function(){return y}),n.d(t,"e",function(){return x}),n.d(t,"a",function(){return w});var a=n(187),o=n.n(a),r=n(161),i=n(168),l=n.n(i),c=n(169),s=n.n(c),p=n(170),m=n.n(p),d=n(171),f=n.n(d);function u(){var e=o()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return u=function(){return e},e}var g=Object(r.a)(u(),l.a,l.a,s.a,m.a,f.a),h=r.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),b=(r.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),r.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),y=r.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),x=r.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=r.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},164:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var a="rgba(128, 165, 177, 1)",o="rgba(151, 195, 210, 1)"},165:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=l(n(0)),r=l(n(50)),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.default)({}),s=c.Provider,p=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return o.default.createElement(p,null,function(t){return o.default.createElement(e,a({components:n||t},r))})}};var m=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};m.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=m},166:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}},168:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},169:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},170:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},171:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},172:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(162),i=n(164),l=n(161),c=n(176),s=n(177),p=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),m=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),d=Object(l.c)(r.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(r.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(r.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],i.a,i.b);t.a=function(e){return o.a.createElement(p,null,o.a.createElement(m,null,o.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),o.a.createElement(d,null,o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},o.a.createElement(c.b,{color:i.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},o.a.createElement(s.a,{color:i.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"App Store",href:"https://appstore.com/trestle"},o.a.createElement(c.a,{color:i.a,size:"24"})))))}},173:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return f});var a=n(7),o=n.n(a),r=n(0),i=n.n(r),l=n(161),c=n(167),s=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(l.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),p=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),m=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;@media (prefers-color-scheme:dark){color:#fff;}']),d=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),f=function(e){return i.a.createElement("div",null,i.a.createElement(c.Helmet,null,i.a.createElement("title",null,e.title)),i.a.createElement(p,null,i.a.createElement(m,null,e.title),i.a.createElement(d,null,e.date)))};i.a.Component},174:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var a=n(7),o=n.n(a),r=n(0),i=n.n(r),l=n(34),c=n.n(l),s=n(161).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:not(pre code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre > code.language-nohighlight{@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),p=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(s,null,this.props.children)},n.componentDidMount=function(){for(var e=c.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},t}(i.a.Component)},175:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(179);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(165);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=s(r),l=s(n(180)),c=n(165);function s(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,c=e.children,s=e.components,m=void 0===s?{}:s,d=e.Layout,f=e.layoutProps,u=m[n+"."+t]||m[t]||p[t]||t;return d?((0,l.default)(this,d),i.default.createElement(d,a({components:m},f),i.default.createElement(u,r,c))):i.default.createElement(u,r,c)}}]),t}();t.default=(0,c.withMDXComponents)(m)},180:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,p=s&&s(Object);e.exports=function e(t,n,m){if("string"!=typeof n){if(p){var d=s(n);d&&d!==p&&e(t,d,m)}var f=i(n);l&&(f=f.concat(l(n)));for(var u=0;u<f.length;++u){var g=f[u];if(!(a[g]||o[g]||m&&m[g])){var h=c(n,g);try{r(t,g,h)}catch(e){}}}return t}return t}},181:function(e,t,n){"use strict";n(49);var a=n(7),o=n.n(a),r=n(0),i=n.n(r),l=n(167),c=n(162),s=n(172),p=n(161),m=n(176),d=n(177),f=n(164);var u=p.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),g=p.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],f.a,f.b,function(e){return e.margin&&Object(p.b)(["margin-right:20px;"])}),h=function(e){return i.a.createElement(c.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},i.a.createElement(g,{margin:e.margin},e.children))},b=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return i.a.createElement(u,null,i.a.createElement(h,{label:"Twitter",url:t,newTab:!0,margin:!0},i.a.createElement(d.a,{size:24,color:"white"})),i.a.createElement(h,{label:"Blog homepage",url:"/blog"},i.a.createElement(m.b,{size:24,color:"white"})))},t}(i.a.Component),y=n(173),x=n(174),w=n(175),E=p.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),v=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(E,null,i.a.createElement("div",{id:"disqus_thread"}))},n.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},t}(i.a.Component),N=n(185),_=n.n(N);n.d(t,"a",function(){return M});var C=p.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),D=p.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),M=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return i.a.createElement(C,null,i.a.createElement(c.c,null),i.a.createElement(l.Helmet,null,i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&i.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&i.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),i.a.createElement("meta",{name:"twitter:card",content:"summary"}),i.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),i.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),i.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),i.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),i.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),i.a.createElement(s.a,{blog:!0}),i.a.createElement(y.a,null,i.a.createElement(D,null,i.a.createElement(y.b,{title:this.props.pageContext.frontmatter.title,date:Object(w.a)(this.props.pageContext.frontmatter.date)})),i.a.createElement(x.a,null,this.props.children),i.a.createElement(D,null,i.a.createElement(b,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),i.a.createElement(v,null))))},n.componentDidMount=function(){_.a.initialize("UA-35325391-1"),_.a.pageview(window.location.pathname+window.location.search)},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-nsobject-equatable-mdx-20d350ad75f1df81f258.js.map