(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{137:function(e,n,t){"use strict";t.r(n);t(48);var a=t(7),i=t.n(a),o=t(0),r=t.n(o),l=t(144),s=t(141),c=t(156),p=t(140),d=p.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),f=function(e){function n(){return e.apply(this,arguments)||this}i()(n,e);var t=n.prototype;return t.render=function(){return r.a.createElement(d,null,r.a.createElement("div",{id:"disqus_thread"}))},t.componentDidMount=function(){var e,n;e=document,(n=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(n)},n}(r.a.Component),m=p.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}"]),u=p.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),h=p.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;margin-bottom:10px;']),g=p.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),x=function(e){function n(){return e.apply(this,arguments)||this}return i()(n,e),n.prototype.render=function(){return r.a.createElement(m,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,this.props.title)),r.a.createElement(u,null,r.a.createElement(h,null,this.props.title),r.a.createElement(g,null,this.props.date)),r.a.createElement("div",null,this.props.children),r.a.createElement(f,null))},n}(r.a.Component),b=t(34),y=t.n(b),w=t(193),v=t.n(w),E=t(270),N=t.n(E),_=p.c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['.format-post-preview p,.format-post-preview li{font-family:"Open Sans",arial,sans-serif;font-size:14px;line-height:14px;line-height:18px;margin-top:10px;padding-bottom:10px;}.format-post-preview p + p{margin-top:0;}.format-post-preview pre > code{font-size:12px;line-height:12px;margin-top:0;margin-bottom:0;}p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:26px;color:#333;padding-bottom:15px;margin-top:15px;}a{color:#1A3F4B;}code{font-family:monospace;font-size:16px;}pre{display:block;margin:0;padding:0;background:none;}pre > code{display:block;margin:0;padding:0;border:1px solid #ddd;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;white-space:pre-wrap;}pre > code.hljs{border:none;}pre + p{margin-top:30px;}ol{margin-left:30px;}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}']),j=function(e){function n(){return e.apply(this,arguments)||this}i()(n,e);var t=n.prototype;return t.render=function(){return r.a.createElement(_,null,r.a.createElement(v.a,{source:this.props.source}))},t.componentDidMount=function(){for(var e=y.a.findDOMNode(this).querySelectorAll("pre code"),n=0;n<e.length;n++)N.a.highlightBlock(e[n])},n}(r.a.Component),C=t(157),A=t.n(C);t.d(n,"Page",function(){return k});var B=r.a.createElement("div",null,r.a.createElement(j,{source:"\nSwift can be tricky sometimes. For example, what does the following print?\n\n```swift\nclass A: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n}\n\nfunc ==(left: A, right: A) -> Bool {\n  return left.x == right.x\n}\n\nprint(A(x: 1) == A(x: 1))\nprint([A(x: 1)] == [A(x: 1)])\n```\n\nPerhaps surprisingly, it's this:\n```nohighlight\ntrue\nfalse // huh?!\n```\n\n### Equatable conformance is hard\n\nWhy does comparing two arrays with equal contents return false? It turns out that:\n- Array is bridged to NSArray\n- NSArray doesn't declare a `==(_:_:)` function, so it falls back to NSObject's `==(_:_:)`, which calls `isEqual`\n- NSArray's `isEqual` [compares objects by casting to AnyHashable](https://github.com/apple/swift-corelibs-foundation/blob/0cbb3225660752987a6c2cf672886fca434d3b1d/Foundation/NSArray.swift#L310)\n\nWe can see that this is the problem by casting the objects to `AnyHashable` before comparing them:\n\n```swift\nprint(A(x: 1) as AnyHashable == A(x: 1) as AnyHashable)\n```\n```nohighlight\nfalse\n```\n\nApparently, doing this will use the NSObject implementation of `==(_:_:)` rather than the `A` one. The NSObject implementation of `==(_:_:)` checks isEqual, which returns false because the two elements aren't the same in memory. We can see this by adding an override:\n\n```swift\nclass B: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    print(\"isEqual for B\")\n    return super.isEqual(object)\n  }\n}\n\nfunc ==(left: B, right: B) -> Bool {\n  print(\"== for B\")\n  return left.x == right.x\n}\n```\n\nThen,\n\n```swift\nprint([B(x: 1)] == [B(x: 1)])\n```\n```nohighlight\nisEqual for B\nfalse\n```\n\n### The fix\n\nAs far as I can tell, the best way to make an NSObject subclass use custom equality inside an array is to override isEqual:\n\n```swift\nclass C: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    guard let object = object as? C else { return false }\n    return object == self\n  }\n}\n\nfunc ==(left: C, right: C) -> Bool {\n  print(\"== for C\")\n  return left.x == right.x\n}\n```\n```swift\nprint([C(x: 1)] == [C(x: 1)])\n```\n```nohighlight\n== for C\ntrue\n```\n    \nOf course, if we defined `A` as a `struct` or a regular `class` in the first place, there won't be `==(_:_:)` defined for `[A]`, which means the compiler would catch our mistake instead of falling back to something that might not work correctly.\n\nSigh. Working with NSObject can be tricky.\n\nA working playground with the code from this post can be found [here](https://github.com/noahsark769/code-examples/blob/ed9df41aae709eaeb4e334e3e9a5b1a650deef4d/swift/swift-nsobject-equatable.playground/Contents.swift).\n"})),k=function(e){function n(){return e.apply(this,arguments)||this}i()(n,e);var t=n.prototype;return t.render=function(){return r.a.createElement("div",null,r.a.createElement(s.c,null),r.a.createElement(l.Helmet,null,r.a.createElement("link",{href:"http://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/atom-one-light.min.css"}),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"}),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/swift.min.js"})),r.a.createElement(c.a,null),r.a.createElement(x,{title:"NSObject Equality is Tricky",date:"November 13th, 2016"},B))},t.componentDidMount=function(){A.a.initialize("UA-35325391-1"),A.a.pageview(window.location.pathname+window.location.search)},n}(r.a.Component);n.default=k},141:function(e,n,t){"use strict";t.d(n,"c",function(){return h}),t.d(n,"b",function(){return g}),t.d(n,"e",function(){return x}),t.d(n,"d",function(){return b}),t.d(n,"a",function(){return y});var a=t(154),i=t.n(a),o=(t(0),t(140)),r=t(147),l=t.n(r),s=t(148),c=t.n(s),p=t(149),d=t.n(p),f=t(150),m=t.n(f);function u(){var e=i()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n"]);return u=function(){return e},e}var h=Object(o.a)(u(),l.a,l.a,c.a,d.a,m.a),g=o.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),x=(o.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),o.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=o.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),y=o.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-4"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},147:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},148:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},149:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},150:function(e,n,t){e.exports=t.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},156:function(e,n,t){"use strict";var a=t(0),i=t.n(a),o=t(141),r=t(140),l=r.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){flex-direction:column;padding:20px 20px 10px 20px;}"]),s=r.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;']),c=Object(r.c)(o.e).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;@media all and (max-width:600px){justify-content:flex-start;}"]),p=Object(r.c)(o.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:horizontal;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;@media all and (max-width:600px){display:block;width:100%;font-size:20px;margin:5px 0px;padding:10px 10px;background-color:#eee;}']),d=Object(r.c)(o.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:rgba(128,165,177,1);&:hover{color:rgba(151,195,210,1);}@media all and (max-width:600px){width:100%;}"]);n.a=function(e){return i.a.createElement(l,null,i.a.createElement(s,null,"NOAH GILMORE"),i.a.createElement(c,null,i.a.createElement(p,null,i.a.createElement(d,{href:"/"},"HOME")),i.a.createElement(p,null,i.a.createElement(d,{href:"/blog/"},"POSTS"))))}}}]);
//# sourceMappingURL=component---src-pages-blog-nsobject-equatable-jsx-bfe0c88bd80dc49c69cc.js.map