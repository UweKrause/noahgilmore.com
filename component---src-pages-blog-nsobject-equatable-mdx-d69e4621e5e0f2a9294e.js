(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return p});var a=t(165),o=t.n(a),r=t(0),i=t.n(r),l=t(161),c=t(164);n.default=function(e){var n=e.components,t=o()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:c.a,layoutProps:t,components:n},i.a.createElement(l.MDXTag,{name:"p",components:n},"Swift can be tricky sometimes. For example, what does the following print?"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"class A: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n}\n\nfunc ==(left: A, right: A) -> Bool {\n  return left.x == right.x\n}\n\nprint(A(x: 1) == A(x: 1))\nprint([A(x: 1)] == [A(x: 1)])\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Perhaps surprisingly, it's this:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"true\nfalse // huh?!\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n},"Equatable conformance is hard"),i.a.createElement(l.MDXTag,{name:"p",components:n},"Why does comparing two arrays with equal contents return false? It turns out that:"),i.a.createElement(l.MDXTag,{name:"ul",components:n},i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"Array is bridged to NSArray"),i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"NSArray doesn't declare a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"==(_:_:)")," function, so it falls back to NSObject's ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"==(_:_:)"),", which calls ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"isEqual")),i.a.createElement(l.MDXTag,{name:"li",components:n,parentName:"ul"},"NSArray's ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"isEqual")," ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/apple/swift-corelibs-foundation/blob/0cbb3225660752987a6c2cf672886fca434d3b1d/Foundation/NSArray.swift#L310"}},"compares objects by casting to AnyHashable"))),i.a.createElement(l.MDXTag,{name:"p",components:n},"We can see that this is the problem by casting the objects to ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"AnyHashable")," before comparing them:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"print(A(x: 1) as AnyHashable == A(x: 1) as AnyHashable)\n")),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"false\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Apparently, doing this will use the NSObject implementation of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"==(_:_:)")," rather than the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"A")," one. The NSObject implementation of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"==(_:_:)")," checks isEqual, which returns false because the two elements aren't the same in memory. We can see this by adding an override:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},'class B: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    print("isEqual for B")\n    return super.isEqual(object)\n  }\n}\n\nfunc ==(left: B, right: B) -> Bool {\n  print("== for B")\n  return left.x == right.x\n}\n')),i.a.createElement(l.MDXTag,{name:"p",components:n},"Then,"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"print([B(x: 1)] == [B(x: 1)])\n")),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"isEqual for B\nfalse\n")),i.a.createElement(l.MDXTag,{name:"h3",components:n},"The fix"),i.a.createElement(l.MDXTag,{name:"p",components:n},"As far as I can tell, the best way to make an NSObject subclass use custom equality inside an array is to override isEqual:"),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},'class C: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    guard let object = object as? C else { return false }\n    return object == self\n  }\n}\n\nfunc ==(left: C, right: C) -> Bool {\n  print("== for C")\n  return left.x == right.x\n}\n')),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"print([C(x: 1)] == [C(x: 1)])\n")),i.a.createElement(l.MDXTag,{name:"pre",components:n},i.a.createElement(l.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"== for C\ntrue\n")),i.a.createElement(l.MDXTag,{name:"p",components:n},"Of course, if we defined ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"A")," as a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"struct")," or a regular ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"class")," in the first place, there won't be ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"==(_:_:)")," defined for ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"[A]"),", which means the compiler would catch our mistake instead of falling back to something that might not work correctly."),i.a.createElement(l.MDXTag,{name:"p",components:n},"Sigh. Working with NSObject can be tricky."),i.a.createElement(l.MDXTag,{name:"p",components:n},"A working playground with the code from this post can be found ",i.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/noahsark769/code-examples/blob/ed9df41aae709eaeb4e334e3e9a5b1a650deef4d/swift/swift-nsobject-equatable.playground/Contents.swift"}},"here"),"."))};var p={}},147:function(e,n,t){"use strict";t.d(n,"c",function(){return g}),t.d(n,"b",function(){return h}),t.d(n,"f",function(){return y}),t.d(n,"d",function(){return b}),t.d(n,"e",function(){return x}),t.d(n,"a",function(){return w});var a=t(166),o=t.n(a),r=(t(0),t(146)),i=t(151),l=t.n(i),c=t(152),p=t.n(c),s=t(153),m=t.n(s),d=t(154),u=t.n(d);function f(){var e=o()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return f=function(){return e},e}var g=Object(r.a)(f(),l.a,l.a,p.a,m.a,u.a),h=r.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(r.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),r.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=r.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),x=r.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=r.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},149:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=l(t(0)),r=l(t(50)),i=l(t(4));function l(e){return e&&e.__esModule?e:{default:e}}var c=(0,r.default)({}),p=c.Provider,s=c.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,r=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return o.default.createElement(s,null,function(n){return o.default.createElement(e,a({components:t||n},r))})}};var m=function(e){var n=e.components,t=e.children;return o.default.createElement(p,{value:n},t)};m.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},n.default=m},151:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},152:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},153:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},154:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},156:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=t(147),i=t(146),l=t(168),c=t(169),p=i.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}"]),s=i.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;']),m=Object(i.c)(r.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),d=Object(i.c)(r.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(i.c)(r.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:rgba(128,165,177,1);display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:rgba(151,195,210,1);}"]);i.c.div.withConfig({displayName:"Nav__MediaOnlySmall",componentId:"sc-1cm9dpf-5"})(["display:none;@media all and (max-width:600px){display:inline-block;}"]),i.c.div.withConfig({displayName:"Nav__MediaOnlyLarge",componentId:"sc-1cm9dpf-6"})(["display:inline-block;@media all and (max-width:600px){display:none;}"]);n.a=function(e){return o.a.createElement(p,null,o.a.createElement(s,null,o.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),o.a.createElement(m,null,o.a.createElement(d,null,o.a.createElement(u,{href:"/blog"},o.a.createElement(l.b,{color:"rgba(128, 165, 177, 1)",size:"24"}))),o.a.createElement(d,null,o.a.createElement(u,{href:"https://twitter.com/noahsark769"},o.a.createElement(c.a,{color:"rgba(128, 165, 177, 1)",size:"24"}))),o.a.createElement(d,null,o.a.createElement(u,{href:"https://appstore.com/trestle"},o.a.createElement(l.a,{color:"rgba(128, 165, 177, 1)",size:"24"})))))}},157:function(e,n,t){"use strict";t.d(n,"a",function(){return p}),t.d(n,"b",function(){return u});var a=t(7),o=t.n(a),r=t(0),i=t.n(r),l=t(146),c=t(150),p=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&"background-color: #f6f6f6;"}),s=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),m=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;margin-bottom:10px;']),d=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),u=function(e){return i.a.createElement("div",null,i.a.createElement(c.Helmet,null,i.a.createElement("title",null,e.title)),i.a.createElement(s,null,i.a.createElement(m,null,e.title),i.a.createElement(d,null,e.date)))};i.a.Component},158:function(e,n,t){"use strict";t.d(n,"a",function(){return s});var a=t(7),o=t.n(a),r=t(0),i=t.n(r),l=t(34),c=t.n(l),p=t(146).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:26px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}a:hover{color:#47656E;}code{font-family:monospace;font-size:16px;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #ddd;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;white-space:pre-wrap;@media all and (max-width:600px){font-size:19px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}']),s=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){return i.a.createElement(p,null,this.props.children)},t.componentDidMount=function(){for(var e=c.a.findDOMNode(this).querySelectorAll("pre code"),n=0;n<e.length;n++)window.hljs.highlightBlock(e[n])},n}(i.a.Component)},159:function(e,n,t){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}t.d(n,"a",function(){return a})},161:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(162);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(149);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},162:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=t(0),i=p(r),l=p(t(163)),c=t(149);function p(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},m=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.Component),o(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,o=e.props,r=void 0===o?{}:o,c=e.children,p=e.components,m=void 0===p?{}:p,d=e.Layout,u=e.layoutProps,f=m[t+"."+n]||m[n]||s[n]||n;return d?((0,l.default)(this,d),i.default.createElement(d,a({components:m},u),i.default.createElement(f,r,c))):i.default.createElement(f,r,c)}}]),n}();n.default=(0,c.withMDXComponents)(m)},163:function(e,n,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,s=p&&p(Object);e.exports=function e(n,t,m){if("string"!=typeof t){if(s){var d=p(t);d&&d!==s&&e(n,d,m)}var u=i(t);l&&(u=u.concat(l(t)));for(var f=0;f<u.length;++f){var g=u[f];if(!(a[g]||o[g]||m&&m[g])){var h=c(t,g);try{r(n,g,h)}catch(e){}}}return n}return n}},164:function(e,n,t){"use strict";t(49);var a=t(7),o=t.n(a),r=t(0),i=t.n(r),l=t(150),c=t(147),p=t(156),s=t(157),m=t(158),d=t(159),u=t(146),f=u.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),g=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){return i.a.createElement(f,null,i.a.createElement("div",{id:"disqus_thread"}))},t.componentDidMount=function(){var e,n;e=document,(n=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(n)},n}(i.a.Component),h=t(167),y=t.n(h);t.d(n,"a",function(){return x});var b=u.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-0"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),x=function(e){function n(){return e.apply(this,arguments)||this}o()(n,e);var t=n.prototype;return t.render=function(){return i.a.createElement("div",null,i.a.createElement(c.c,null),i.a.createElement(l.Helmet,null,i.a.createElement("link",{href:"http://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"})),i.a.createElement(p.a,{blog:!0}),i.a.createElement(s.a,null,i.a.createElement(b,null,i.a.createElement(s.b,{title:this.props.pageContext.frontmatter.title,date:Object(d.a)(this.props.pageContext.frontmatter.date)})),i.a.createElement(m.a,null,this.props.children),i.a.createElement(b,null,i.a.createElement(g,null))))},t.componentDidMount=function(){y.a.initialize("UA-35325391-1"),y.a.pageview(window.location.pathname+window.location.search)},n}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-nsobject-equatable-mdx-d69e4621e5e0f2a9294e.js.map