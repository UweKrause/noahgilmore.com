(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,n){"use strict";n.r(t);n(49),n(190),n(50);var a=n(7),i=n.n(a),o=n(294),r=n(0),l=n.n(r),s=n(162),d=n(155),c=n(170),m=n(171),p=n(182),u=n(180),f=n.n(u),g=n(169),h=n(174),y=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.render=function(){return l.a.createElement("div",null,l.a.createElement(d.c,null),l.a.createElement(s.Helmet,null,l.a.createElement("title",null,"Blog"),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),l.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com/blog"}),l.a.createElement("meta",{property:"og:title",content:"Blog - Noah Gilmore"}),l.a.createElement("meta",{property:"og:description",content:"Noah Gilmore's personal blog. Software development (web, iOS)."}),l.a.createElement("meta",{name:"Description",content:"Noah Gilmore's personal blog. Software development (web, iOS)."})),l.a.createElement(c.a,null),l.a.createElement(m.a,{darkened:!0},this.props.queryData.allMdx.edges.map(function(e){return l.a.createElement(p.a,{key:e.node.id,url:"/blog/"+e.node.parent.name,title:e.node.frontmatter.title,date:Object(h.a)(e.node.frontmatter.date),mdxPreview:e.node.frontmatter.mdxPreview})})))},n.componentDidMount=function(){f.a.initialize("UA-35325391-1"),f.a.pageview(window.location.pathname+window.location.search)},t}(l.a.Component);t.default=function(e){return l.a.createElement(g.StaticQuery,{query:"2812790483",render:function(e){return l.a.createElement(y,{queryData:e})},data:o})}},155:function(e,t,n){"use strict";n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return y}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return x}),n.d(t,"a",function(){return w});var a=n(175),i=n.n(a),o=(n(0),n(153)),r=n(163),l=n.n(r),s=n(164),d=n.n(s),c=n(165),m=n.n(c),p=n(166),u=n.n(p);function f(){var e=i()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return f=function(){return e},e}var g=Object(o.a)(f(),l.a,l.a,d.a,m.a,u.a),h=o.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(o.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),o.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=o.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),x=o.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=o.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},161:function(e,t,n){var a;e.exports=(a=n(173))&&a.default||a},163:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},164:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},165:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},166:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},167:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i});var a="rgba(128, 165, 177, 1)",i="rgba(151, 195, 210, 1)"},169:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return p}),n.d(t,"StaticQuery",function(){return u});var a=n(0),i=n.n(a),o=n(4),r=n.n(o),l=n(154),s=n.n(l);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var d=n(161),c=n.n(d);n.d(t,"PageRenderer",function(){return c.a});var m=n(34);n.d(t,"parsePath",function(){return m.a});var p=i.a.createContext({}),u=function(e){return i.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}u.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},170:function(e,t,n){"use strict";var a=n(0),i=n.n(a),o=n(155),r=n(167),l=n(153),s=n(176),d=n(177),c=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}"]),m=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;']),p=Object(l.c)(o.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),u=Object(l.c)(o.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),f=Object(l.c)(o.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],r.a,r.b);l.c.div.withConfig({displayName:"Nav__MediaOnlySmall",componentId:"sc-1cm9dpf-5"})(["display:none;@media all and (max-width:600px){display:inline-block;}"]),l.c.div.withConfig({displayName:"Nav__MediaOnlyLarge",componentId:"sc-1cm9dpf-6"})(["display:inline-block;@media all and (max-width:600px){display:none;}"]);t.a=function(e){return i.a.createElement(c,null,i.a.createElement(m,null,i.a.createElement(f,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),i.a.createElement(p,null,i.a.createElement(u,null,i.a.createElement(f,{"aria-label":"Blog Home",href:"/blog"},i.a.createElement(s.b,{color:r.a,size:"24"}))),i.a.createElement(u,null,i.a.createElement(f,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},i.a.createElement(d.a,{color:r.a,size:"24"}))),i.a.createElement(u,null,i.a.createElement(f,{"aria-label":"App Store",href:"https://appstore.com/trestle"},i.a.createElement(s.a,{color:r.a,size:"24"})))))}},171:function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"b",function(){return u});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(153),s=n(162),d=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&"background-color: #f6f6f6;"}),c=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),m=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;']),p=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),u=function(e){return r.a.createElement("div",null,r.a.createElement(s.Helmet,null,r.a.createElement("title",null,e.title)),r.a.createElement(c,null,r.a.createElement(m,null,e.title),r.a.createElement(p,null,e.date)))};r.a.Component},172:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(35),s=n.n(l),d=n(153).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;p{margin:0;padding:0;color:#555;}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}a:hover{color:#47656E;}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),c=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.render=function(){return r.a.createElement(d,null,this.props.children)},n.componentDidMount=function(){for(var e=s.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs.highlightBlock(e[t])},t}(r.a.Component)},173:function(e,t,n){"use strict";n.r(t);var a=n(13),i=n.n(a),o=n(0),r=n.n(o),l=n(4),s=n.n(l),d=n(52),c=n(2),m=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(d.a,i()({location:t,pageResources:n},n.json))};m.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=m},174:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},182:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var a=n(7),i=n.n(a),o=n(0),r=n.n(o),l=n(153),s=n(155),d=n(172),c=n(192),m=n.n(c),p=l.c.div.withConfig({displayName:"BlogPostPreview__Wrapper",componentId:"sc-19o7o75-0"})(["border:1px solid #ddd;border-radius:2px;padding:20px;margin-bottom:20px;cursor:pointer;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;background-color:white;&:hover{border-color:rgba(128,165,177,1);}@media all and (max-width:600px){border-right:none;border-left:none;padding-right:0;padding-left:0;background-color:white;}"]),u=l.c.h1.withConfig({displayName:"BlogPostPreview__Title",componentId:"sc-19o7o75-1"})(['font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:20px;margin-bottom:5px;']),f=l.c.div.withConfig({displayName:"BlogPostPreview__StyledDate",componentId:"sc-19o7o75-2"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;margin-bottom:20px;']),g=l.c.div.withConfig({displayName:"BlogPostPreview__Content",componentId:"sc-19o7o75-3"})(['font-family:"Open Sans",times,serif;font-size:15px;line-height:16px;color:#333;padding-bottom:15px;margin-top:15px;line-height:26px;']),h=l.c.div.withConfig({displayName:"BlogPostPreview__NonContent",componentId:"sc-19o7o75-4"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),y=Object(l.c)(s.a).withConfig({displayName:"BlogPostPreview__StyledA",componentId:"sc-19o7o75-5"})(['&,&:hover{color:#1A3F4B;text-decoration:underline;font-family:"Gentium Book Basic",times,serif;font-size:16px;line-height:18px;}']),b=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var n=t.prototype;return n.handleClick=function(){window.location=this.props.url},n.render=function(){var e=this;return r.a.createElement(p,{onClick:function(){return e.handleClick()}},r.a.createElement(h,null,r.a.createElement(u,null,this.props.title),r.a.createElement(f,null,this.props.date)),r.a.createElement(g,null,r.a.createElement(d.a,null,r.a.createElement(m.a,{source:this.props.mdxPreview}))),r.a.createElement(h,null,r.a.createElement(s.e,null,r.a.createElement(y,{href:this.props.url},"Read more"))))},t}(r.a.Component)},294:function(e){e.exports={data:{allMdx:{edges:[{node:{parent:{__typename:"File",name:"cifilter-colorwheel",relativePath:"blog/cifilter-colorwheel.mdx"},id:"1c741a19-ba67-5766-9981-bc02b9566781",frontmatter:{title:"iOS Color Wheel Using CIFilter",date:"2019-01-28T00:00:00.000Z",mdxPreview:"After struggling for some time with CIFilter documentation at work, I've been [working on an app](https://twitter.com/noahsark769/status/1080580341973348352) which can apply filters interactively for various inputs..."}}},{node:{parent:{__typename:"File",name:"rxswift-multiple-subscribers",relativePath:"blog/rxswift-multiple-subscribers.mdx"},id:"1f41edb2-6a48-582b-9092-65cbd3fcd65e",frontmatter:{title:"RxSwift: Multiple subscribers for a unit of work",date:"2018-12-08T00:00:00.000Z",mdxPreview:"I've been working on a side project for [better CIFilter documentation](https://twitter.com/noahsark769/status/1066878101907419137) lately, and I decided this was as good of a time as any to try out [RxSwift](https://github.com/ReactiveX/RxSwift). We use reactive programming at work, but I haven't really been able to dig into it yet...\n"}}},{node:{parent:{__typename:"File",name:"install-nokogiri-macos-mojave",relativePath:"blog/install-nokogiri-macos-mojave.mdx"},id:"b9a184b5-ab51-547f-993b-6422e5416473",frontmatter:{title:"Installing Nokogiri from a Gemfile on Mojave",date:"2018-11-14T00:00:00.000Z",mdxPreview:"Another MacOS and another struggle through installing nokogiri. Most places online recommend using..."}}},{node:{parent:{__typename:"File",name:"gatsby-mdx-frontmatter",relativePath:"blog/gatsby-mdx-frontmatter.mdx"},id:"bb839908-c1ac-56c8-9cbe-8a985a856970",frontmatter:{title:"Accessing MDX Frontmatter in Gatsby",date:"2018-11-08T00:00:00.000Z",mdxPreview:"While building this site in Gatsby using [MDX](https://github.com/ChristopherBiscardi/gatsby-mdx), I noticed that there wasn't any documentation on how to include data from the frontmatter of an MDX document in the document's page layout...\n"}}},{node:{parent:{__typename:"File",name:"easy-gatsby-image-components",relativePath:"blog/easy-gatsby-image-components.mdx"},id:"54c7b8a3-fc38-5765-8f49-ca96d6658a9a",frontmatter:{title:"Easy Gatsby Image Components",date:"2018-11-02T00:00:00.000Z",mdxPreview:'I use [Gatsby](https://gatsbyjs.org) as a static site generator to build this blog using React. As part of this, I wanted a simple component to display a static image, something like this:\n```jsx\n<Image filename="myimage.png" />\n```\nSurprisingly, this is hard to do in Gatsby. The default Image component generated by Gatsby uses `StaticQuery`:\n'}}},{node:{parent:{__typename:"File",name:"userdefaults-set-nil",relativePath:"blog/userdefaults-set-nil.mdx"},id:"b8318387-70d5-59f6-9eca-a6da26291cbc",frontmatter:{title:"How NOT to set nil in UserDefaults",date:"2018-10-22T00:00:00.000Z",mdxPreview:'To clear a value from UserDefaults, I previously thought it was fine to do something like this:\n```swift\nUserDefaults.standard.set(nil, forKey: "myKey")\n```\nTurns out that this works differently in different iOS versions. Starting in iOS 11, setting nil for a key works as I expected.\n'}}},{node:{parent:{__typename:"File",name:"swift-pointer-uint",relativePath:"blog/swift-pointer-uint.mdx"},id:"38a8cf81-a653-5a77-bd0c-e4004149d347",frontmatter:{title:"Casting a pointer to UInt in Swift",date:"2018-10-16T00:00:00.000Z",mdxPreview:"There are some times in Swift, like when using [System Trace](https://developer.apple.com/videos/play/wwdc2016/411/), that you want to get the pointer value of an object directly as a `UInt` (passing the pointer to `kdebug_signpost` is one). I was surprised at how hard it was to find documentation on how to get a Swift reference’s pointer value as a `UInt`.\n"}}},{node:{parent:{__typename:"File",name:"nsobject-equatable",relativePath:"blog/nsobject-equatable.mdx"},id:"436d50bd-bf20-5441-a870-3227f8662238",frontmatter:{title:"NSObject Equality is Tricky",date:"2016-11-13T00:00:00.000Z",mdxPreview:"Swift can be tricky sometimes. For example, what does the following print?\n```swift\nclass A: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n}\nfunc ==(left: A, right: A) -> Bool {\n  return left.x == right.x\n}\nprint(A(x: 1) == A(x: 1))\nprint([A(x: 1)] == [A(x: 1)])\n"}}},{node:{parent:{__typename:"File",name:"pyparsing-trees",relativePath:"blog/pyparsing-trees.mdx"},id:"6423923f-7879-5b9a-b8b7-03f58fb9df36",frontmatter:{title:"Syntax trees with Pyparsing",date:"2016-10-23T00:00:00.000Z",mdxPreview:"Let's talk about [syntax trees](https://en.wikipedia.org/wiki/Abstract_syntax_tree). In static analysis, a common operation is to take a character string (e.g. \"x = 1\") and transform it into well structured data.\nLet's try to do this in python. We'll use [Pyparsing](http://pyparsing.wikispaces.com/) as our tokenization tool.\n"}}},{node:{parent:{__typename:"File",name:"my-bucket-list",relativePath:"blog/my-bucket-list.mdx"},id:"0f3c82e0-0fa5-56d6-bf78-f38720e38ae7",frontmatter:{title:"My Bucket List",date:"2014-05-20T00:00:00.000Z",mdxPreview:"Ambitious, subject to change, incomplete, based on [this](https://dcurt.is/bucket-list).\n1. ~~Create something that touches 10,000 people.~~ (January 20th, 2013) 2. ~~Create something that touches 100,000 people.~~ (January 14th, 2015) 3. Create something that touches 1,000,000 people.\n"}}},{node:{parent:{__typename:"File",name:"tables-are-hard",relativePath:"blog/tables-are-hard.mdx"},id:"712aee7b-8fe9-580d-8ff1-68cbc1c5db99",frontmatter:{title:"Tables are hard",date:"2014-04-03T00:00:00.000Z",mdxPreview:'Let’s talk about HTML tables.\nHere’s some code:\n```html\n<table class="main">\n  <colgroup><col class="votes"><col></colgroup>\n  <tr>\n    <td>Votes</td>\n    <td>Comments</td>\n  </tr>\n  <tr>\n    <td>\n      <p class="vote-desc">Some long name, really long, like really super long</p>\n      <p class="vote-desc">Another long name, really long</p>\n    </td>\n    <td>\n      <p class="comment">A really, really, really, really, really really really really really, really long comment.</p>\n    </td>\n  </tr>\n</table>\n```\n'}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-index-jsx-a24060f6d1922216697f.js.map