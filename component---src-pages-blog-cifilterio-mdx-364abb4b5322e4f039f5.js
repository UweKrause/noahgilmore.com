(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{225:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return r}),a.d(t,"default",function(){return p});a(11),a(12),a(6),a(19),a(21),a(0);var o=a(79),n=a(259),i=a(28);var r={},l={_frontmatter:r},c=n.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(o.b)(c,Object.assign({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Today I'm launching ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io"}),"CIFilter.io")," 🎉"),Object(o.b)(i.a,{filename:"cifilterio.png",alt:"Screenshot of the CIFilter.io website",caption:"",mdxType:"CaptionedImage"}),Object(o.b)("p",null,"CIFilter.io is a project I've been working on for the last few months, and today it's ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/cifilter.io/"}),"open source"),". It has two parts:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A website, ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://cifilter.io"}),"https://cifilter.io"),", which lists all the available ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/coreimage/cifilter"}),"CIFilters"),", their information and examples of applying them"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"An app")," which allows you to apply each CIFilter to various inputs, tune their parameters, and apply them to camera and photo library images")),Object(o.b)("p",null,"The website is completely free and I intend to keep it updated with each new release of iOS and macOS. The app is not free, but your purchase helps support this project and others like it, and you can build it ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/cifilter.io/tree/master/iOS"}),"from source")," if you'd prefer."),Object(o.b)("p",null,"In this post I'll go into a bit of detail about the project, how it works, and why I built it."),Object(o.b)("h1",null,"Background"),Object(o.b)("p",null,Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/documentation/coreimage/cifilter"}),"CIFilter")," is a powerful part of ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/documentation/coreimage"}),"Core Image")," that every app developer can take advantage of. There are many (207, as of iOS 12) CIFilters available in Core Image - everything from doing image compositing to photobooth effects."),Object(o.b)(i.a,{max:"400",filename:"cithermal.jpeg",alt:"Application of the CIThermal filter",caption:"The CIThermal filter",mdxType:"CaptionedImage"}),Object(o.b)("p",null,"However, it's hard to find documentation on what filters are available or how they work. Apple has ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/library/archive/documentation/GraphicsImaging/Reference/CoreImageFilterReference/index.html#//apple_ref/doc/uid/TP40004346"}),"a page"),' listing about 85% of the available filters, but it\'s "no longer being updated", and no new filters which were made available in iOS 10, 11, or 12 are listed there. If you Google ',Object(o.b)("inlineCode",{parentName:"p"},"CIThermal"),", for example, most of what you'll find is iOS header dumps."),Object(o.b)("p",null,"For the filters which are listed, many have incomplete documentation - for example, the ",Object(o.b)("inlineCode",{parentName:"p"},"inputSharpness")," parameter to ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io#CICheckerboardGenerator"}),"CICheckerboardGenerator")," says:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"An NSNumber object whose attribute type is CIAttributeTypeScalar and whose display name is Sharpness.")),Object(o.b)("p",null,"Good info, but doesn't tell you what the parameter actually does. The examples on this page are also limited - for example, ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io#CISourceOutCompositing"}),"CISourceOutCompositing")," takes an ",Object(o.b)("inlineCode",{parentName:"p"},"inputImgage")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"backgroundImage"),". The page shows two images being composited, but doesn't specify which image is which:"),Object(o.b)(i.a,{max:"400",filename:"old-cisourceoutcompositing.png",alt:"Image of CISourceOutCompositing from Apple's documentation",caption:"",mdxType:"CaptionedImage"}),Object(o.b)("h1",null,"Problem"),Object(o.b)("p",null,"I ran into this documentation issue at work (in fact, I recently gave ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1111148213921153024"}),"a talk")," detailing more background on what issues I ran into), and I thought that there must be a better way. Turns out, it's possible to get info about every filter and their parameters by using ",Object(o.b)("inlineCode",{parentName:"p"},"CIFilter"),"'s ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/documentation/coreimage/cifilter/1437661-attributes"}),"attributes var"),"."),Object(o.b)("p",null,"The CIFilter.io ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"app")," takes this filter attributes data, parses and normalizes it, and renders it to a json (which you can view ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/cifilter.io/blob/master/web/src/data/filters.json"}),"here"),"). The CIFilter.io ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io"}),"website")," parses this json and renders it using ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/"}),"Gatsby"),"."),Object(o.b)("h1",null,"The Website"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io"}),"CIFilter.io website")," lists all filters and allows searching through the list:"),Object(o.b)(i.a,{max:"300",filename:"cifilterio-search.gif",alt:"Gif showing CIFilter.io's search bar",caption:"",mdxType:"CaptionedImage"}),Object(o.b)("p",null,"Each filter lists the description and parameters, pulled directly from the filter's ",Object(o.b)("inlineCode",{parentName:"p"},"attributes")," dict, which are generally more descriptive. For example, the ",Object(o.b)("inlineCode",{parentName:"p"},"inputSharpness")," parameter discussed above has the following description on CIFilter.io:"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The sharpness of the edges in pattern. The smaller the value, the more blurry the pattern. Values range from 0.0 to 1.0.")),Object(o.b)("p",null,"And the example for ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io#CISourceOutCompositing"}),"CISourceOutCompositing")," shows the input parameter names:"),Object(o.b)(i.a,{filename:"cisourceoutcompositing.png",alt:"Example of applying the CISourceOutCompositing filter",caption:"",mdxType:"CaptionedImage"}),Object(o.b)("h1",null,"The App"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"CIFilter.io app")," also shows documentation for all filters, but allows you to interactively apply them as well. Here's a gif of applying ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io#CICheckerboardGenerator"}),"CICheckerboardGenerator"),":"),Object(o.b)(i.a,{max:"300",filename:"cicheckerboardgenerator.gif",alt:"Gif showing CICheckerboardGenerator in the CIFilter.io app",caption:"The color wheels don't transfer very well to GIFs",mdxType:"CaptionedImage"}),Object(o.b)("p",null,"You can also apply filters to photos from your camera or photo library (this is how the examples on the website are generated, and how I generated the cat thermal from earlier in this post). Here's ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io#CIComicEffect"}),"CIComicEffect"),", for example:"),Object(o.b)(i.a,{max:"300",filename:"cicomiceffect.gif",alt:"Gif showing CICheckerboardGenerator in the CIFilter.io app",caption:"",mdxType:"CaptionedImage"}),Object(o.b)("h1",null,"Next Steps"),Object(o.b)("p",null,"There are several improvements ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/cifilter.io/issues"}),"tracked on GitHub")," that would be good to implement:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Compatibility for ",Object(o.b)("a",Object.assign({parentName:"li"},{href:"https://kapeli.com/dash"}),"Dash")," docsets"),Object(o.b)("li",{parentName:"ol"},"More examples for more filters"),Object(o.b)("li",{parentName:"ol"},"Use filters.json to generate a Swift library for applying CIFilters in a type-safe manner")),Object(o.b)("p",null,"I'll be working on some of these going forward, but I'm hoping the community can get involved too 🙂"),Object(o.b)("p",null,"Until then, you can check out CIFilter.io on the ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://cifilter.io"}),"website"),", ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/cifilter-io/id1457458557?mt=8"}),"app"),", and on ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/cifilterio"}),"Twitter"),"."))}p.isMDXComponent=!0},246:function(e,t,a){"use strict";a.d(t,"c",function(){return f}),a.d(t,"b",function(){return h}),a.d(t,"f",function(){return u}),a.d(t,"d",function(){return b}),a.d(t,"e",function(){return g}),a.d(t,"a",function(){return w});var o=a(10),n=a(249),i=a.n(n),r=a(250),l=a.n(r),c=a(251),p=a.n(c),s=a(252),m=a.n(s);function d(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return d=function(){return e},e}var f=Object(o.a)(d(),i.a,i.a,l.a,p.a,m.a),h=o.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),u=(o.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),o.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=o.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),g=o.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=o.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},247:function(e,t,a){"use strict";a.d(t,"a",function(){return o}),a.d(t,"b",function(){return n});var o="rgba(128, 165, 177, 1)",n="rgba(151, 195, 210, 1)"},249:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},250:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},251:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},252:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},253:function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(246),r=a(247),l=a(10),c=a(257),p=a(258),s=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),m=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),d=Object(l.c)(i.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(i.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),h=Object(l.c)(i.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],r.a,r.b);t.a=function(e){return n.a.createElement(s,null,n.a.createElement(m,null,n.a.createElement(h,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),n.a.createElement(d,null,n.a.createElement(f,null,n.a.createElement(h,{"aria-label":"Blog Home",href:"/blog"},n.a.createElement(c.b,{color:r.a,size:"24"}))),n.a.createElement(f,null,n.a.createElement(h,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},n.a.createElement(p.a,{color:r.a,size:"24"}))),n.a.createElement(f,null,n.a.createElement(h,{"aria-label":"App Store",href:"https://appstore.com/trestle"},n.a.createElement(c.a,{color:r.a,size:"24"})))))}},254:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return m});var o=a(0),n=a.n(o),i=a(10),r=a(248);var l=i.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(i.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),c=i.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),p=i.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),s=i.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),m=function(e){return n.a.createElement("div",null,n.a.createElement(r.Helmet,null,n.a.createElement("title",null,e.title)),n.a.createElement(c,null,n.a.createElement(p,null,e.title),n.a.createElement(s,null,e.date)))};n.a.Component},255:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var o=a(0),n=a.n(o),i=a(50),r=a.n(i);var l=a(10).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:not(pre code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre > code.language-nohighlight{@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),c=function(e){var t,a;function o(){return e.apply(this,arguments)||this}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=o.prototype;return i.render=function(){return n.a.createElement(l,null,this.props.children)},i.componentDidMount=function(){for(var e=r.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},o}(n.a.Component)},256:function(e,t,a){"use strict";function o(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}a.d(t,"a",function(){return o})},259:function(e,t,a){"use strict";a(157);var o=a(0),n=a.n(o),i=a(248),r=a(246),l=a(253),c=a(10),p=a(257),s=a(258),m=a(247);var d=c.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),f=c.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],m.a,m.b,function(e){return e.margin&&Object(c.b)(["margin-right:20px;"])}),h=function(e){return n.a.createElement(r.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},n.a.createElement(f,{margin:e.margin},e.children))},u=function(e){var t,a;function o(){return e.apply(this,arguments)||this}return a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,o.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return n.a.createElement(d,null,n.a.createElement(h,{label:"Twitter",url:t,newTab:!0,margin:!0},n.a.createElement(s.a,{size:24,color:"white"})),n.a.createElement(h,{label:"Blog homepage",url:"/blog"},n.a.createElement(p.b,{size:24,color:"white"})))},o}(n.a.Component),b=a(254),g=a(255),w=a(256);var y=c.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),x=function(e){var t,a;function o(){return e.apply(this,arguments)||this}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=o.prototype;return i.render=function(){return n.a.createElement(y,null,n.a.createElement("div",{id:"disqus_thread"}))},i.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},o}(n.a.Component),j=a(260),O=a.n(j);a.d(t,"a",function(){return I});var C=c.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),v=c.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),I=function(e){var t,a;function o(){return e.apply(this,arguments)||this}a=e,(t=o).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=o.prototype;return c.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return n.a.createElement(C,null,n.a.createElement(r.c,null),n.a.createElement(i.Helmet,null,n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&n.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&n.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),n.a.createElement("meta",{name:"twitter:card",content:"summary"}),n.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),n.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),n.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),n.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),n.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),n.a.createElement(l.a,{blog:!0}),n.a.createElement(b.a,null,n.a.createElement(v,null,n.a.createElement(b.b,{title:this.props.pageContext.frontmatter.title,date:Object(w.a)(this.props.pageContext.frontmatter.date)})),n.a.createElement(g.a,null,this.props.children),n.a.createElement(v,null,n.a.createElement(u,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),n.a.createElement(x,null))))},c.componentDidMount=function(){O.a.initialize("UA-35325391-1"),O.a.pageview(window.location.pathname+window.location.search)},o}(n.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-cifilterio-mdx-364abb4b5322e4f039f5.js.map