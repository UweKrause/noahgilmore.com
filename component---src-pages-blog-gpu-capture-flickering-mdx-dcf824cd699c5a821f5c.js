(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{247:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return i}),n.d(t,"default",function(){return s});n(9),n(10),n(5),n(14),n(22),n(0);var a=n(84),o=n(275),r=n(13);var i={},l={_frontmatter:i},c=o.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(c,Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,'One of the "',Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://overreacted.io/things-i-dont-know-as-of-2018/"}),"Things I Don't Know"),"\" in the iOS ecosystem is Metal. As such, I've been working through ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://metalbyexample.com/"}),"Metal By Example")," recently, which still stands as a great introduction to Metal. Invariably I've hit issues debugging my shader pipelines, and ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://app.plangrid.com/projects/712902dd-d42d-d9de-9557-86222a6ef5b2/sheets"}),"GPU Frame Capture")," has been a really invaluable tool."),Object(a.b)("p",null,"One weird thing I noticed was that in the ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/MetalByExampleExamples"}),"examples")," I was writing, the camera button in Xcode which enables GPU Frame Capture would flicker, making it really hard to click:"),Object(a.b)(r.a,{max:400,filename:"gpu-frame-capture.gif",alt:"GIF showing the camera button flickering",caption:"",mdxType:"CaptionedImage"}),Object(a.b)("p",null,"After puzzling over this for a while, Warren Moore, who wrote the book (!) ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/warrenm/status/1188915996125356032"}),"reached out")," on Twitter to note that this might happen because I was calling the device's ",Object(a.b)("inlineCode",{parentName:"p"},"makeCommandQueue")," every frame, when really I should be creating one up front and saving it."),Object(a.b)("p",null,Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/MetalByExampleExamples/commit/6a6e7b0320bc877e58c055fd5f084fe91ff5e1ad#diff-c11c08d51dee2b1b6b212e4dc20e1d65R21"}),"It worked"),", and now the flicker doesn't happen anymore! 🎉"))}s.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"d",function(){return h}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return b}),n.d(t,"g",function(){return x}),n.d(t,"e",function(){return y}),n.d(t,"f",function(){return w}),n.d(t,"a",function(){return v});var a=n(2),o=n(265),r=n.n(o),i=n(266),l=n.n(i),c=n(267),s=n.n(c),p=n(268),d=n.n(p);function m(){var e=u(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n            url('","') format('woff'),\n            url('","') format('truetype'),\n            url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    @media (prefers-color-scheme: dark) {\n        html, body {\n            background-color: #2b2c2f;\n        }\n    }\n"]);return m=function(){return e},e}function f(){var e=u(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return f=function(){return e},e}function u(e,t){return t||(t=e.slice(0)),e.raw=t,e}var h=Object(a.a)(f(),r.a,r.a,l.a,s.a,d.a),g=Object(a.a)(m(),r.a,r.a,l.a,s.a,d.a),b=a.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),x=(a.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),a.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),y=a.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),w=a.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),v=a.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},265:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},266:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},267:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},268:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},269:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(263),i=n(66),l=n(2),c=n(273),s=n(274),p=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),d=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),m=Object(l.c)(r.g).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(r.e).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(r.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],i.a,i.b);t.a=function(e){return o.a.createElement(p,null,o.a.createElement(d,null,o.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),o.a.createElement(m,null,o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},o.a.createElement(c.b,{color:i.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},o.a.createElement(s.a,{color:i.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"App Store",href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},o.a.createElement(c.a,{color:i.a,size:"24"})))))}},270:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return d});var a=n(0),o=n.n(a),r=n(2),i=n(264);var l=r.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:",";margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.isCompressed?"700px":"1600px"},function(e){return e.darkened&&Object(r.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),c=r.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),s=r.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),p=r.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),d=function(e){return o.a.createElement("div",null,o.a.createElement(i.Helmet,null,o.a.createElement("title",null,e.title)),o.a.createElement(c,null,o.a.createElement(s,null,e.title),o.a.createElement(p,null,e.date)))};o.a.Component},271:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n(0),o=n.n(a);var r=n(2).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;padding:3px 5px;margin:0px 2px;@media (prefers-color-scheme:dark){color:#fff;}}code:not(.vscode-highlight-code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;margin-top:10px;border:1px solid #e5e4e1;border-radius:2px;@media all and (max-width:600px){width:100%;margin:10px auto 0 auto;border-left:none;border-right:none;border-radius:0;overflow-x:scroll;}}pre > code{display:block;margin:0;padding:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),i=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return o.a.createElement(r,null,this.props.children)},a}(o.a.Component)},272:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},275:function(e,t,n){"use strict";n(114);var a=n(0),o=n.n(a),r=n(264),i=n(263),l=n(269),c=n(2),s=n(273),p=n(274),d=n(66);var m=c.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),f=c.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],d.a,d.b,function(e){return e.margin&&Object(c.b)(["margin-right:20px;"])}),u=function(e){return o.a.createElement(i.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},o.a.createElement(f,{margin:e.margin},e.children))},h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return o.a.createElement(m,null,o.a.createElement(u,{label:"Twitter",url:t,newTab:!0,margin:!0},o.a.createElement(p.a,{size:24,color:"white"})),o.a.createElement(u,{label:"Blog homepage",url:"/blog"},o.a.createElement(s.b,{size:24,color:"white"})))},a}(o.a.Component),g=n(270),b=n(271),x=n(272),y=n(29);var w=c.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),v=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.render=function(){return o.a.createElement(w,null,o.a.createElement("div",{id:"disqus_thread"}))},r.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},a}(o.a.Component),_=n(115),k=n.n(_);n.d(t,"a",function(){return N});var E=c.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),C=c.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),j=(c.c.div.withConfig({displayName:"BlogPageLayout__InstabugContainer",componentId:"sc-118ribu-2"})(["min-width:430px;margin-left:60px;@media all and (max-width:1200px){display:none;}"]),c.c.div.withConfig({displayName:"BlogPageLayout__InstabugInner",componentId:"sc-118ribu-3"})([""]),c.c.div.withConfig({displayName:"BlogPageLayout__PostContainerOuter",componentId:"sc-118ribu-4"})(["display:flex;flex-direction:row;padding:",";@media all and (max-width:1200px){padding:0;}"],function(e){return e.hasPadding?"20px":"0"})),I=c.c.div.withConfig({displayName:"BlogPageLayout__PostContainerInner",componentId:"sc-118ribu-5"})(["display:block;flex-direction:column;width:100%;"]),N=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={isShowingInstabug:!0},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=a.prototype;return c.handleInstabugHide=function(){this.setState({isShowingInstabug:!1})},c.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return o.a.createElement(E,null,o.a.createElement(i.b,null),o.a.createElement(r.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),o.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),o.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),o.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),o.a.createElement(l.a,{blog:!0}),o.a.createElement(g.a,{isCompressed:!0},o.a.createElement(j,{hasPadding:!1},o.a.createElement(I,null,o.a.createElement(C,null,o.a.createElement(g.b,{title:this.props.pageContext.frontmatter.title,date:Object(x.a)(this.props.pageContext.frontmatter.date)})),o.a.createElement(b.a,null,this.props.children,this.props.pageContext.frontmatter.instabugEnabled&&o.a.createElement("p",null,"If you enjoyed this post, consider checking out Instabug - checking them out helps ",o.a.createElement("a",{href:"/blog/advertising"},"support")," my writing and open source projects.")),this.props.pageContext.frontmatter.instabugEnabled&&o.a.createElement(y.a,null),o.a.createElement(C,null,o.a.createElement(h,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement(v,null))))))},c.componentDidMount=function(){k.a.initialize("UA-35325391-1"),k.a.pageview(window.location.pathname+window.location.search)},a}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-gpu-capture-flickering-mdx-dcf824cd699c5a821f5c.js.map