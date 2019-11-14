(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{243:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return l}),n.d(t,"default",function(){return d});n(11),n(12),n(6),n(19),n(21),n(0);var a=n(79),o=n(258),i=n(28),r=n(77);var l={},c={_frontmatter:l},s=o.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Pop quiz: in a ",Object(a.b)("inlineCode",{parentName:"p"},"UIButton"),", how do you set a padding of 10pt between the image and the title?"),Object(a.b)(i.a,{max:200,filename:"uibutton-padding-1.png",alt:"Image showing 10pt padding between title and image of a UIButton",caption:"If you're looking for a code snippet, skip to the bottom :)",mdxType:"CaptionedImage"}),Object(a.b)("p",null,"I had to do this at work recently, and I was surprised at how hard it was to reason about. There are several posts talking about this topic (including ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://medium.com/short-swift-stories/using-uiedgeinsets-to-layout-a-uibutton-44ba04dd085c"}),"this one")," which uses edge insets to flip the title and image!), but the answer for my use case was pretty hard to find."),Object(a.b)("p",null,"Adding image-title padding is possible, but takes some trickiness with ",Object(a.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),", ",Object(a.b)("inlineCode",{parentName:"p"},"titleEdgeInsets"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"imageEdgeInsets"),"."),Object(a.b)("h1",null,"UIButton Insets"),Object(a.b)("p",null,"To understand why adding image-title padding is hard, we have to look at UIButton's various insets properties, which control how the UIButton is drawn (in different ways)."),Object(a.b)("h2",null,"contentEdgeInsets"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"contentEdgeInsets")," is probably the easiest insets property to reason about. The insets apply padding to the content of the button, and they're taken into account in the button's ",Object(a.b)("inlineCode",{parentName:"p"},"instrinsicContentSize")," (which was what I expected)."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Positive values expand the button away from its content"),Object(a.b)("li",{parentName:"ul"},"Negative values contract the button towards its content")),Object(a.b)("p",null,"With negative ",Object(a.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),", it's possible to get the image and text to draw outside of the button's bounds."),Object(a.b)(r.a,{columns:2,mdxType:"FlowGrid"},Object(a.b)(i.a,{max:300,filename:"content-top.gif",alt:"contentEdgeInsets top",caption:"Top",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"content-left.gif",alt:"contentEdgeInsets left",caption:"Left",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"content-bottom.gif",alt:"contentEdgeInsets bottom",caption:"Bottom",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"content-right.gif",alt:"contentEdgeInsets right",caption:"Right",mdxType:"CaptionedImage"})),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),' is the closest thing available to "padding" within UIButton.'),Object(a.b)("h2",null,"imageEdgeInsets"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"imageEdgeInsets")," affects the drawing rect of the button's image, and does ",Object(a.b)("em",{parentName:"p"},"not")," figure into the button's ",Object(a.b)("inlineCode",{parentName:"p"},"intrinsicContentSize")," (this is different than ",Object(a.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),", which contributes to the ",Object(a.b)("inlineCode",{parentName:"p"},"intrinsicContentSize"),")."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Positive values contract the drawing rect towards the image's center"),Object(a.b)("li",{parentName:"ul"},"Negative values expand the drawing rect away from the image's center")),Object(a.b)("p",null,"Because ",Object(a.b)("inlineCode",{parentName:"p"},"imageEdgeInsets")," modifies the drawing rect, setting positive values can result in a squished image - with correct insets, you can actually flip the image! Negative values have the effect of translating the image, they expand the drawing rect back instead of contracting it."),Object(a.b)(r.a,{columns:2,mdxType:"FlowGrid"},Object(a.b)(i.a,{max:300,filename:"image-top.gif",alt:"imageEdgeInsets top",caption:"Top",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"image-left.gif",alt:"imageEdgeInsets left",caption:"Left",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"image-bottom.gif",alt:"imageEdgeInsets bottom",caption:"Bottom",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"image-right.gif",alt:"imageEdgeInsets right",caption:"Right",mdxType:"CaptionedImage"})),Object(a.b)("p",null,"Interestingly, ",Object(a.b)("inlineCode",{parentName:"p"},"UIButton")," seems to have some issues with positive left and right edge insets - if you have an idea of why, please ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769"}),"let me know"),"."),Object(a.b)("p",null,"Also interestingly, negative values of equal magnitudes cancel each other out!"),Object(a.b)(i.a,{max:300,filename:"uibutton-cancellout.png",alt:"With all insets the same negative value, the button looks the same",caption:"",mdxType:"CaptionedImage"}),Object(a.b)("h2",null,"titleEdgeInsets"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"titleEdgeInsets")," affects the drawing rect of the button's title, and like ",Object(a.b)("inlineCode",{parentName:"p"},"imageEdgeInsets")," does ",Object(a.b)("em",{parentName:"p"},"not")," contribute to the button's ",Object(a.b)("inlineCode",{parentName:"p"},"intrinsicContentSize"),"."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Positive values contract the drawing rect towards the center of the title"),Object(a.b)("li",{parentName:"ul"},"Negative values expand the drawing rect away from the center of the title")),Object(a.b)("p",null,"As the title's drawing rect compresses (i.e., as positive insets are added), letters get cut off with ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1125608257806979073"}),"ellipses"),". As with ",Object(a.b)("inlineCode",{parentName:"p"},"imageEdgeInsets"),", negative values translate the text without otherwise affecting the button's layout."),Object(a.b)(r.a,{columns:2,mdxType:"FlowGrid"},Object(a.b)(i.a,{max:300,filename:"title-top.gif",alt:"titleEdgeInsets top",caption:"Top",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"title-left.gif",alt:"titleEdgeInsets left",caption:"Left",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"title-bottom.gif",alt:"titleEdgeInsets bottom",caption:"Bottom",mdxType:"CaptionedImage"}),Object(a.b)(i.a,{max:300,filename:"title-right.gif",alt:"titleEdgeInsets right",caption:"Right",mdxType:"CaptionedImage"})),Object(a.b)("h2",null,"Image-title padding"),Object(a.b)("p",null,"Though there's no built in way to put padding between the image and the title of a ",Object(a.b)("inlineCode",{parentName:"p"},"UIButton"),", we can fake it by using what we know about the various inset properties. Let's assume we want a button with 10pt padding around the content and 10pt padding between the image and the title. We'll:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Add 10pt to all edges of the ",Object(a.b)("inlineCode",{parentName:"li"},"contentEdgeInsets")),Object(a.b)("li",{parentName:"ol"},"Add 10pt to the left edge of the ",Object(a.b)("inlineCode",{parentName:"li"},"titleEdgeInsets")," to shift the button to the right"),Object(a.b)("li",{parentName:"ol"},"Add ",Object(a.b)("em",{parentName:"li"},"negative")," 10pt to the ",Object(a.b)("em",{parentName:"li"},"right")," edge of the ",Object(a.b)("inlineCode",{parentName:"li"},"titleEdgeInsets")," since we have to make sure the button doesn't get cut off by ellipsis - adding this negative padding preserves the text's original drawing rect"),Object(a.b)("li",{parentName:"ol"},"Add 10pt ",Object(a.b)("em",{parentName:"li"},"more")," to the right edge of the ",Object(a.b)("inlineCode",{parentName:"li"},"contentEdgeInsets")," to account for the button being moved 10pt to the right")),Object(a.b)("p",null,"The final product ends up looking like this:"),Object(a.b)(i.a,{max:300,filename:"uibutton-wireframe.png",alt:"Wireframe explaining the incantation required to add padding between the image and title of a UIButton",caption:"Magic incantation",mdxType:"CaptionedImage"}),Object(a.b)("p",null,"Once we know how to do this, it's easy enough to write a method:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"extension UIButton {\n    func setInsets(\n        forContentPadding contentPadding: UIEdgeInsets,\n        imageTitlePadding: CGFloat\n    ) {\n        self.contentEdgeInsets = UIEdgeInsets(\n            top: contentPadding.top,\n            left: contentPadding.left,\n            bottom: contentPadding.bottom,\n            right: contentPadding.right + imageTitlePadding\n        )\n        self.titleEdgeInsets = UIEdgeInsets(\n            top: 0,\n            left: imageTitlePadding,\n            bottom: 0,\n            right: -imageTitlePadding\n        )\n    }\n}\n")),Object(a.b)("h2",null,"Conclusion"),Object(a.b)("p",null,"Hopefully this post helps some folks wrap their heads around a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1123798154082758656"}),"weird")," UIKit API. If you're looking for a truly customizable ",Object(a.b)("inlineCode",{parentName:"p"},"UIButton"),", don't forget that you can subclass ",Object(a.b)("inlineCode",{parentName:"p"},"UIControl")," directly and use your own layout entirely - I did this for ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}),"Trestle")," and it worked well, even when I needed SVGs (!) inside the button."),Object(a.b)("p",null,"The code for all the examples in this post can be found at ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGUIButtonInsetsExample"}),"NGUIButtonInsetsExample"),"."),Object(a.b)(i.a,{max:300,filename:"uibutton-final.png",alt:"Screenshot of the sample app displaying a UIButton with image-title padding.",caption:"",mdxType:"CaptionedImage"}))}d.isMDXComponent=!0},245:function(e,t,n){"use strict";n.d(t,"c",function(){return f}),n.d(t,"b",function(){return u}),n.d(t,"f",function(){return g}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return h}),n.d(t,"a",function(){return w});var a=n(10),o=n(248),i=n.n(o),r=n(249),l=n.n(r),c=n(250),s=n.n(c),d=n(251),p=n.n(d);function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return m=function(){return e},e}var f=Object(a.a)(m(),i.a,i.a,l.a,s.a,p.a),u=a.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),g=(a.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),a.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=a.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),h=a.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=a.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},246:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return o});var a="rgba(128, 165, 177, 1)",o="rgba(151, 195, 210, 1)"},248:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},249:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},250:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},251:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},252:function(e,t,n){"use strict";var a=n(0),o=n.n(a),i=n(245),r=n(246),l=n(10),c=n(256),s=n(257),d=l.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),p=l.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),m=Object(l.c)(i.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),f=Object(l.c)(i.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),u=Object(l.c)(i.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],r.a,r.b);t.a=function(e){return o.a.createElement(d,null,o.a.createElement(p,null,o.a.createElement(u,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),o.a.createElement(m,null,o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Blog Home",href:"/blog"},o.a.createElement(c.b,{color:r.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},o.a.createElement(s.a,{color:r.a,size:"24"}))),o.a.createElement(f,null,o.a.createElement(u,{"aria-label":"App Store",href:"https://appstore.com/trestle"},o.a.createElement(c.a,{color:r.a,size:"24"})))))}},253:function(e,t,n){"use strict";n.d(t,"a",function(){return l}),n.d(t,"b",function(){return p});var a=n(0),o=n.n(a),i=n(10),r=n(247);var l=i.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(i.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),c=i.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),s=i.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;@media (prefers-color-scheme:dark){color:#fff;}']),d=i.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),p=function(e){return o.a.createElement("div",null,o.a.createElement(r.Helmet,null,o.a.createElement("title",null,e.title)),o.a.createElement(c,null,o.a.createElement(s,null,e.title),o.a.createElement(d,null,e.date)))};o.a.Component},254:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(0),o=n.n(a),i=n(50),r=n.n(i);var l=n(10).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:not(pre code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre > code.language-nohighlight{@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),c=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.render=function(){return o.a.createElement(l,null,this.props.children)},i.componentDidMount=function(){for(var e=r.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},a}(o.a.Component)},255:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},258:function(e,t,n){"use strict";n(157);var a=n(0),o=n.n(a),i=n(247),r=n(245),l=n(252),c=n(10),s=n(256),d=n(257),p=n(246);var m=c.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),f=c.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],p.a,p.b,function(e){return e.margin&&Object(c.b)(["margin-right:20px;"])}),u=function(e){return o.a.createElement(r.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},o.a.createElement(f,{margin:e.margin},e.children))},g=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return o.a.createElement(m,null,o.a.createElement(u,{label:"Twitter",url:t,newTab:!0,margin:!0},o.a.createElement(d.a,{size:24,color:"white"})),o.a.createElement(u,{label:"Blog homepage",url:"/blog"},o.a.createElement(s.b,{size:24,color:"white"})))},a}(o.a.Component),b=n(253),h=n(254),w=n(255);var x=c.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),y=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.render=function(){return o.a.createElement(x,null,o.a.createElement("div",{id:"disqus_thread"}))},i.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},a}(o.a.Component),j=n(259),O=n.n(j);n.d(t,"a",function(){return E});var v=c.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),I=c.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),E=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var c=a.prototype;return c.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return o.a.createElement(v,null,o.a.createElement(r.c,null),o.a.createElement(i.Helmet,null,o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&o.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),o.a.createElement("meta",{name:"twitter:card",content:"summary"}),o.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),o.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),o.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),o.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),o.a.createElement(l.a,{blog:!0}),o.a.createElement(b.a,null,o.a.createElement(I,null,o.a.createElement(b.b,{title:this.props.pageContext.frontmatter.title,date:Object(w.a)(this.props.pageContext.frontmatter.date)})),o.a.createElement(h.a,null,this.props.children),o.a.createElement(I,null,o.a.createElement(g,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),o.a.createElement(y,null))))},c.componentDidMount=function(){O.a.initialize("UA-35325391-1"),O.a.pageview(window.location.pathname+window.location.search)},a}(o.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-uibutton-padding-mdx-ecbd9dd95355b128554f.js.map