(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{245:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return c}),a.d(t,"default",function(){return p});a(8),a(12),a(4),a(16),a(21),a(0);var n=a(79),s=a(265),i=a(26),o=a(67);var c={},r={_frontmatter:c},l=s.a;function p(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(l,Object.assign({},r,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Pop quiz: in a ",Object(n.b)("inlineCode",{parentName:"p"},"UIButton"),", how do you set a padding of 10pt between the image and the title?"),Object(n.b)(i.a,{max:200,filename:"uibutton-padding-1.png",alt:"Image showing 10pt padding between title and image of a UIButton",caption:"If you're looking for a code snippet, skip to the bottom :)",mdxType:"CaptionedImage"}),Object(n.b)("p",null,"I had to do this at work recently, and I was surprised at how hard it was to reason about. There are several posts talking about this topic (including ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://medium.com/short-swift-stories/using-uiedgeinsets-to-layout-a-uibutton-44ba04dd085c"}),"this one")," which uses edge insets to flip the title and image!), but the answer for my use case was pretty hard to find."),Object(n.b)("p",null,"Adding image-title padding is possible, but takes some trickiness with ",Object(n.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),", ",Object(n.b)("inlineCode",{parentName:"p"},"titleEdgeInsets"),", and ",Object(n.b)("inlineCode",{parentName:"p"},"imageEdgeInsets"),"."),Object(n.b)("h1",null,"UIButton Insets"),Object(n.b)("p",null,"To understand why adding image-title padding is hard, we have to look at UIButton's various insets properties, which control how the UIButton is drawn (in different ways)."),Object(n.b)("h2",null,"contentEdgeInsets"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"contentEdgeInsets")," is probably the easiest insets property to reason about. The insets apply padding to the content of the button, and they're taken into account in the button's ",Object(n.b)("inlineCode",{parentName:"p"},"instrinsicContentSize")," (which was what I expected)."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Positive values expand the button away from its content"),Object(n.b)("li",{parentName:"ul"},"Negative values contract the button towards its content")),Object(n.b)("p",null,"With negative ",Object(n.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),", it's possible to get the image and text to draw outside of the button's bounds."),Object(n.b)(o.a,{columns:2,mdxType:"FlowGrid"},Object(n.b)(i.a,{max:300,filename:"content-top.gif",alt:"contentEdgeInsets top",caption:"Top",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"content-left.gif",alt:"contentEdgeInsets left",caption:"Left",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"content-bottom.gif",alt:"contentEdgeInsets bottom",caption:"Bottom",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"content-right.gif",alt:"contentEdgeInsets right",caption:"Right",mdxType:"CaptionedImage"})),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),' is the closest thing available to "padding" within UIButton.'),Object(n.b)("h2",null,"imageEdgeInsets"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"imageEdgeInsets")," affects the drawing rect of the button's image, and does ",Object(n.b)("em",{parentName:"p"},"not")," figure into the button's ",Object(n.b)("inlineCode",{parentName:"p"},"intrinsicContentSize")," (this is different than ",Object(n.b)("inlineCode",{parentName:"p"},"contentEdgeInsets"),", which contributes to the ",Object(n.b)("inlineCode",{parentName:"p"},"intrinsicContentSize"),")."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Positive values contract the drawing rect towards the image's center"),Object(n.b)("li",{parentName:"ul"},"Negative values expand the drawing rect away from the image's center")),Object(n.b)("p",null,"Because ",Object(n.b)("inlineCode",{parentName:"p"},"imageEdgeInsets")," modifies the drawing rect, setting positive values can result in a squished image - with correct insets, you can actually flip the image! Negative values have the effect of translating the image, they expand the drawing rect back instead of contracting it."),Object(n.b)(o.a,{columns:2,mdxType:"FlowGrid"},Object(n.b)(i.a,{max:300,filename:"image-top.gif",alt:"imageEdgeInsets top",caption:"Top",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"image-left.gif",alt:"imageEdgeInsets left",caption:"Left",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"image-bottom.gif",alt:"imageEdgeInsets bottom",caption:"Bottom",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"image-right.gif",alt:"imageEdgeInsets right",caption:"Right",mdxType:"CaptionedImage"})),Object(n.b)("p",null,"Interestingly, ",Object(n.b)("inlineCode",{parentName:"p"},"UIButton")," seems to have some issues with positive left and right edge insets - if you have an idea of why, please ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769"}),"let me know"),"."),Object(n.b)("p",null,"Also interestingly, negative values of equal magnitudes cancel each other out!"),Object(n.b)(i.a,{max:300,filename:"uibutton-cancellout.png",alt:"With all insets the same negative value, the button looks the same",caption:"",mdxType:"CaptionedImage"}),Object(n.b)("h2",null,"titleEdgeInsets"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"titleEdgeInsets")," affects the drawing rect of the button's title, and like ",Object(n.b)("inlineCode",{parentName:"p"},"imageEdgeInsets")," does ",Object(n.b)("em",{parentName:"p"},"not")," contribute to the button's ",Object(n.b)("inlineCode",{parentName:"p"},"intrinsicContentSize"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Positive values contract the drawing rect towards the center of the title"),Object(n.b)("li",{parentName:"ul"},"Negative values expand the drawing rect away from the center of the title")),Object(n.b)("p",null,"As the title's drawing rect compresses (i.e., as positive insets are added), letters get cut off with ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1125608257806979073"}),"ellipses"),". As with ",Object(n.b)("inlineCode",{parentName:"p"},"imageEdgeInsets"),", negative values translate the text without otherwise affecting the button's layout."),Object(n.b)(o.a,{columns:2,mdxType:"FlowGrid"},Object(n.b)(i.a,{max:300,filename:"title-top.gif",alt:"titleEdgeInsets top",caption:"Top",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"title-left.gif",alt:"titleEdgeInsets left",caption:"Left",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"title-bottom.gif",alt:"titleEdgeInsets bottom",caption:"Bottom",mdxType:"CaptionedImage"}),Object(n.b)(i.a,{max:300,filename:"title-right.gif",alt:"titleEdgeInsets right",caption:"Right",mdxType:"CaptionedImage"})),Object(n.b)("h2",null,"Image-title padding"),Object(n.b)("p",null,"Though there's no built in way to put padding between the image and the title of a ",Object(n.b)("inlineCode",{parentName:"p"},"UIButton"),", we can fake it by using what we know about the various inset properties. Let's assume we want a button with 10pt padding around the content and 10pt padding between the image and the title. We'll:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Add 10pt to all edges of the ",Object(n.b)("inlineCode",{parentName:"li"},"contentEdgeInsets")),Object(n.b)("li",{parentName:"ol"},"Add 10pt to the left edge of the ",Object(n.b)("inlineCode",{parentName:"li"},"titleEdgeInsets")," to shift the button to the right"),Object(n.b)("li",{parentName:"ol"},"Add ",Object(n.b)("em",{parentName:"li"},"negative")," 10pt to the ",Object(n.b)("em",{parentName:"li"},"right")," edge of the ",Object(n.b)("inlineCode",{parentName:"li"},"titleEdgeInsets")," since we have to make sure the button doesn't get cut off by ellipsis - adding this negative padding preserves the text's original drawing rect"),Object(n.b)("li",{parentName:"ol"},"Add 10pt ",Object(n.b)("em",{parentName:"li"},"more")," to the right edge of the ",Object(n.b)("inlineCode",{parentName:"li"},"contentEdgeInsets")," to account for the button being moved 10pt to the right")),Object(n.b)("p",null,"The final product ends up looking like this:"),Object(n.b)(i.a,{max:300,filename:"uibutton-wireframe.png",alt:"Wireframe explaining the incantation required to add padding between the image and title of a UIButton",caption:"Magic incantation",mdxType:"CaptionedImage"}),Object(n.b)("p",null,"Once we know how to do this, we can extract it to a method:"),Object(n.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(n.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"extension"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"UIButton"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"func"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"setInsets"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forContentPadding"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"contentPadding"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": UIEdgeInsets,")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"imageTitlePadding"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": CGFloat")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    ) {")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"contentEdgeInsets"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIEdgeInsets"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"top"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": contentPadding."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"top"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"left"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": contentPadding."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"left"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"bottom"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": contentPadding."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"bottom"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"right"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": contentPadding."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"right"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," + imageTitlePadding")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        )")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"titleEdgeInsets"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," = "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"UIEdgeInsets"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"top"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"left"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": imageTitlePadding,")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"bottom"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"right"),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": -imageTitlePadding")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        )")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(n.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(n.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(n.b)("h2",null,"Conclusion"),Object(n.b)("p",null,"Hopefully this post helps some folks wrap their heads around a ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1123798154082758656"}),"weird")," UIKit API. If you're looking for a truly customizable ",Object(n.b)("inlineCode",{parentName:"p"},"UIButton"),", don't forget that you can subclass ",Object(n.b)("inlineCode",{parentName:"p"},"UIControl")," directly and use your own layout entirely - I did this for ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"}),"Trestle")," and it worked well, even when I needed SVGs (!) inside the button."),Object(n.b)("p",null,"The code for all the examples in this post can be found at ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGUIButtonInsetsExample"}),"NGUIButtonInsetsExample"),"."),Object(n.b)(i.a,{max:300,filename:"uibutton-final.png",alt:"Screenshot of the sample app displaying a UIButton with image-title padding.",caption:"",mdxType:"CaptionedImage"}),Object(n.b)("style",{className:"vscode-highlight-styles"},".dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }"))}p.isMDXComponent=!0},252:function(e,t,a){"use strict";a.d(t,"d",function(){return u}),a.d(t,"b",function(){return f}),a.d(t,"c",function(){return h}),a.d(t,"g",function(){return j}),a.d(t,"e",function(){return O}),a.d(t,"f",function(){return N}),a.d(t,"a",function(){return k});var n=a(11),s=a(255),i=a.n(s),o=a(256),c=a.n(o),r=a(257),l=a.n(r),p=a(258),m=a.n(p);function d(){var e=g(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n            url('","') format('woff'),\n            url('","') format('truetype'),\n            url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n\n    @media (prefers-color-scheme: dark) {\n        html, body {\n            background-color: #2b2c2f;\n        }\n    }\n"]);return d=function(){return e},e}function b(){var e=g(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return b=function(){return e},e}function g(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u=Object(n.a)(b(),i.a,i.a,c.a,l.a,m.a),f=Object(n.a)(d(),i.a,i.a,c.a,l.a,m.a),h=n.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),j=(n.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),n.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),O=n.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),N=n.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),k=n.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},253:function(e,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return s});var n="rgba(128, 165, 177, 1)",s="rgba(151, 195, 210, 1)"},255:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},256:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},257:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},258:function(e,t,a){e.exports=a.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},259:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(252),o=a(253),c=a(11),r=a(263),l=a(264),p=c.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),m=c.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),d=Object(c.c)(i.g).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),b=Object(c.c)(i.e).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),g=Object(c.c)(i.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],o.a,o.b);t.a=function(e){return s.a.createElement(p,null,s.a.createElement(m,null,s.a.createElement(g,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),s.a.createElement(d,null,s.a.createElement(b,null,s.a.createElement(g,{"aria-label":"Blog Home",href:"/blog"},s.a.createElement(r.b,{color:o.a,size:"24"}))),s.a.createElement(b,null,s.a.createElement(g,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},s.a.createElement(l.a,{color:o.a,size:"24"}))),s.a.createElement(b,null,s.a.createElement(g,{"aria-label":"App Store",href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},s.a.createElement(r.a,{color:o.a,size:"24"})))))}},260:function(e,t,a){"use strict";a.d(t,"a",function(){return c}),a.d(t,"b",function(){return m});var n=a(0),s=a.n(n),i=a(11),o=a(254);var c=i.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(i.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),r=i.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),l=i.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),p=i.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),m=function(e){return s.a.createElement("div",null,s.a.createElement(o.Helmet,null,s.a.createElement("title",null,e.title)),s.a.createElement(r,null,s.a.createElement(l,null,e.title),s.a.createElement(p,null,e.date)))};s.a.Component},261:function(e,t,a){"use strict";a.d(t,"a",function(){return o});var n=a(0),s=a.n(n);var i=a(11).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;padding:3px 5px;margin:0px 2px;@media (prefers-color-scheme:dark){color:#fff;}}code:not(.vscode-highlight-code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;margin-top:10px;border:1px solid #e5e4e1;border-radius:2px;@media all and (max-width:600px){width:100%;margin:10px auto 0 auto;border-left:none;border-right:none;border-radius:0;overflow-x:scroll;}}pre > code{display:block;margin:0;padding:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return s.a.createElement(i,null,this.props.children)},n}(s.a.Component)},262:function(e,t,a){"use strict";function n(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}a.d(t,"a",function(){return n})},265:function(e,t,a){"use strict";a(161);var n=a(0),s=a.n(n),i=a(254),o=a(252),c=a(259),r=a(11),l=a(263),p=a(264),m=a(253);var d=r.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),b=r.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],m.a,m.b,function(e){return e.margin&&Object(r.b)(["margin-right:20px;"])}),g=function(e){return s.a.createElement(o.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},s.a.createElement(b,{margin:e.margin},e.children))},u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return s.a.createElement(d,null,s.a.createElement(g,{label:"Twitter",url:t,newTab:!0,margin:!0},s.a.createElement(p.a,{size:24,color:"white"})),s.a.createElement(g,{label:"Blog homepage",url:"/blog"},s.a.createElement(l.b,{size:24,color:"white"})))},n}(s.a.Component),f=a(260),h=a(261),j=a(262);var O=r.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),N=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.render=function(){return s.a.createElement(O,null,s.a.createElement("div",{id:"disqus_thread"}))},i.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},n}(s.a.Component),k=a(266),w=a.n(k);a.d(t,"a",function(){return v});var x=r.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),y=r.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return s.a.createElement(x,null,s.a.createElement(o.b,null),s.a.createElement(i.Helmet,null,s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&s.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&s.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),s.a.createElement("meta",{name:"twitter:card",content:"summary"}),s.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),s.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),s.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),s.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),s.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),s.a.createElement(c.a,{blog:!0}),s.a.createElement(f.a,null,s.a.createElement(y,null,s.a.createElement(f.b,{title:this.props.pageContext.frontmatter.title,date:Object(j.a)(this.props.pageContext.frontmatter.date)})),s.a.createElement(h.a,null,this.props.children),s.a.createElement(y,null,s.a.createElement(u,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),s.a.createElement(N,null))))},r.componentDidMount=function(){w.a.initialize("UA-35325391-1"),w.a.pageview(window.location.pathname+window.location.search)},n}(s.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-uibutton-padding-mdx-d8e0c07739ebfa153d74.js.map