(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{255:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return r}),a.d(t,"default",function(){return c});a(9),a(10),a(5),a(14),a(22),a(0);var n=a(84),o=a(275);var r={},i={_frontmatter:r},l=o.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(l,Object.assign({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"There are some times in Swift, like when using ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/videos/play/wwdc2016/411/"}),"System Trace"),", that you want to get the pointer value of an object directly as a ",Object(n.b)("inlineCode",{parentName:"p"},"UInt")," (passing the pointer to ",Object(n.b)("inlineCode",{parentName:"p"},"kdebug_signpost")," is one). I was surprised at how hard it was to find documentation on how to get a Swift reference’s pointer value as a ",Object(n.b)("inlineCode",{parentName:"p"},"UInt"),". Here’s how to do it, using the ",Object(n.b)("inlineCode",{parentName:"p"},"UInt(bitPattern:)")," initializer:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"_"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"withUnsafePointer"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"to"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": myObject) { unsafePointer "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"in")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," pointerValue = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"UInt"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"bitPattern"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": unsafePointer)")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// do whatever with pointerValue: it's a UInt!")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(n.b)("style",{className:"vscode-highlight-styles"},".dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }"))}c.isMDXComponent=!0},263:function(e,t,a){"use strict";a.d(t,"d",function(){return g}),a.d(t,"b",function(){return h}),a.d(t,"c",function(){return b}),a.d(t,"g",function(){return k}),a.d(t,"e",function(){return x}),a.d(t,"f",function(){return y}),a.d(t,"a",function(){return w});var n=a(2),o=a(265),r=a.n(o),i=a(266),l=a.n(i),c=a(267),s=a.n(c),d=a(268),p=a.n(d);function m(){var e=u(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n            url('","') format('woff'),\n            url('","') format('truetype'),\n            url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    @media (prefers-color-scheme: dark) {\n        html, body {\n            background-color: #2b2c2f;\n        }\n    }\n"]);return m=function(){return e},e}function f(){var e=u(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return f=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),e.raw=t,e}var g=Object(n.a)(f(),r.a,r.a,l.a,s.a,p.a),h=Object(n.a)(m(),r.a,r.a,l.a,s.a,p.a),b=n.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),k=(n.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),n.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),x=n.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),y=n.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=n.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},265:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},266:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},267:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},268:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},269:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(263),i=a(66),l=a(2),c=a(273),s=a(274),d=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),p=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),m=Object(l.c)(r.g).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(r.e).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(r.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],i.a,i.b);t.a=function(e){return o.a.createElement(d,null,o.a.createElement(p,null,o.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),o.a.createElement(m,null,o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},o.a.createElement(c.b,{color:i.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},o.a.createElement(s.a,{color:i.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"App Store",href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},o.a.createElement(c.a,{color:i.a,size:"24"})))))}},270:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return p});var n=a(0),o=a.n(n),r=a(2),i=a(264);var l=r.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:",";margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.isCompressed?"700px":"1600px"},function(e){return e.darkened&&Object(r.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),c=r.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),s=r.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),d=r.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),p=function(e){return o.a.createElement("div",null,o.a.createElement(i.Helmet,null,o.a.createElement("title",null,e.title)),o.a.createElement(c,null,o.a.createElement(s,null,e.title),o.a.createElement(d,null,e.date)))};o.a.Component},271:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),o=a.n(n);var r=a(2).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;padding:3px 5px;margin:0px 2px;@media (prefers-color-scheme:dark){color:#fff;}}code:not(.vscode-highlight-code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;margin-top:10px;border:1px solid #e5e4e1;border-radius:2px;@media all and (max-width:600px){width:100%;margin:10px auto 0 auto;border-left:none;border-right:none;border-radius:0;overflow-x:scroll;}}pre > code{display:block;margin:0;padding:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return o.a.createElement(r,null,this.props.children)},n}(o.a.Component)},272:function(e,t,a){"use strict";function n(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}a.d(t,"a",function(){return n})},275:function(e,t,a){"use strict";a(114);var n=a(0),o=a.n(n),r=a(264),i=a(263),l=a(269),c=a(2),s=a(273),d=a(274),p=a(66);var m=c.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),f=c.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],p.a,p.b,function(e){return e.margin&&Object(c.b)(["margin-right:20px;"])}),u=function(e){return o.a.createElement(i.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},o.a.createElement(f,{margin:e.margin},e.children))},g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return o.a.createElement(m,null,o.a.createElement(u,{label:"Twitter",url:t,newTab:!0,margin:!0},o.a.createElement(d.a,{size:24,color:"white"})),o.a.createElement(u,{label:"Blog homepage",url:"/blog"},o.a.createElement(s.b,{size:24,color:"white"})))},n}(o.a.Component),h=a(270),b=a(271),k=a(272),x=a(29);var y=c.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),w=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.render=function(){return o.a.createElement(y,null,o.a.createElement("div",{id:"disqus_thread"}))},r.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},n}(o.a.Component),v=a(115),N=a.n(v);a.d(t,"a",function(){return C});var j=c.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),E=c.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),O=(c.c.div.withConfig({displayName:"BlogPageLayout__InstabugContainer",componentId:"sc-118ribu-2"})(["min-width:430px;margin-left:60px;@media all and (max-width:1200px){display:none;}"]),c.c.div.withConfig({displayName:"BlogPageLayout__InstabugInner",componentId:"sc-118ribu-3"})([""]),c.c.div.withConfig({displayName:"BlogPageLayout__PostContainerOuter",componentId:"sc-118ribu-4"})(["display:flex;flex-direction:row;padding:",";@media all and (max-width:1200px){padding:0;}"],function(e){return e.hasPadding?"20px":"0"})),_=c.c.div.withConfig({displayName:"BlogPageLayout__PostContainerInner",componentId:"sc-118ribu-5"})(["display:block;flex-direction:column;width:100%;"]),C=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isShowingInstabug:!0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.handleInstabugHide=function(){this.setState({isShowingInstabug:!1})},c.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return o.a.createElement(j,null,o.a.createElement(i.b,null),o.a.createElement(r.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),o.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),o.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),o.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),o.a.createElement(l.a,{blog:!0}),o.a.createElement(h.a,{isCompressed:!0},o.a.createElement(O,{hasPadding:!1},o.a.createElement(_,null,o.a.createElement(E,null,o.a.createElement(h.b,{title:this.props.pageContext.frontmatter.title,date:Object(k.a)(this.props.pageContext.frontmatter.date)})),o.a.createElement(b.a,null,this.props.children,this.props.pageContext.frontmatter.instabugEnabled&&o.a.createElement("p",null,"If you enjoyed this post, consider checking out Instabug - checking them out helps ",o.a.createElement("a",{href:"/blog/advertising"},"support")," my writing and open source projects.")),this.props.pageContext.frontmatter.instabugEnabled&&o.a.createElement(x.a,null),o.a.createElement(E,null,o.a.createElement(g,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement(w,null))))))},c.componentDidMount=function(){N.a.initialize("UA-35325391-1"),N.a.pageview(window.location.pathname+window.location.search)},n}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-swift-pointer-uint-mdx-04a54dab595d59ee7587.js.map