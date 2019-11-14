(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{155:function(e,t,n){"use strict";n.r(t);n(49);var a=n(7),o=n.n(a),i=n(0),r=n.n(i),l=n(158),c=n(156),p=Object(c.c)(l.b).withConfig({displayName:"HomepageLink__StyledLink",componentId:"klpjue-0"})(['display:block;width:100%;padding:15px 15px 15px 0;background-color:white;pointer:cursor;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;text-align:center;font-size:16px;text-transform:uppercase;margin-bottom:10px;text-align:right;cursor:pointer;']),d=function(e){return e.to?r.a.createElement(p,null,r.a.createElement(l.a,{href:e.to},e.children)):r.a.createElement(p,{onClick:e.onClick},e.children)},s=n(162),u=Object(c.c)(l.b).withConfig({displayName:"RightColumnContent__RightColumnSection",componentId:"sc-1d6p2cv-0"})(["width:100%;text-align:left;font-size:16px;",""],function(e){return e.intro&&Object(c.b)(["line-height:40px;text-transform:lowercase;border-bottom:1px solid #eee;"])}),m=Object(c.c)(l.b).withConfig({displayName:"RightColumnContent__P",componentId:"sc-1d6p2cv-1"})(["height:40px;line-height:40px;font-size:20px;width:100%;text-align:center;text-decoration:underline;"]),f=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return"home"===this.props.component?r.a.createElement(u,{intro:!0},"a college graduate, developer, musician. Sometimes witty."):"about"===this.props.component?r.a.createElement(u,null,r.a.createElement("p",null,"Hi, I'm Noah. I'm a software engineer, recent Berkeley grad, and migrant to the SF Bay Area. You can read my blog posts ",r.a.createElement("a",{href:"/blog"},"here"),".")):"contact"===this.props.component?r.a.createElement(u,null,r.a.createElement(m,null,r.a.createElement(l.a,{href:"https://twitter.com/noahsark769"},"twitter")),r.a.createElement(m,null,r.a.createElement(l.a,{href:"https://github.com/noahsark769"},"github"))):void 0},t}(r.a.Component),g=n(189),h=n.n(g),b=Object(c.c)(l.b).withConfig({displayName:"pages__Container",componentId:"sc-1p0quar-0"})(["width:960px;height:100vh;margin:0 auto;"]),w=Object(c.c)(l.b).withConfig({displayName:"pages__LeftColumn",componentId:"sc-1p0quar-1"})(["width:",' height:100%;background-image:url("https://format-com-cld-res.cloudinary.com/image/private/s--noYGWsqS--/c_limit,g_center,h_65535,w_2500/a_auto,fl_keep_iptc.progressive,q_95/43206-2413999-uc-2.jpg?2500");background-size:cover;background-position:center center;padding-top:50px;position:relative;display:inline-block;vertical-align:middle;margin-right:',"px;"],"384px;",70),x=Object(c.c)(l.b).withConfig({displayName:"pages__Title",componentId:"sc-1p0quar-2"})(['font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;height:60px;line-height:40px;font-size:30px;text-transform:uppercase;width:100%;text-align:left;padding:10px 15px 10px 0;background-color:white;text-align:right;']),y=Object(c.c)(l.b).withConfig({displayName:"pages__Links",componentId:"sc-1p0quar-3"})(["display:block;position:absolute;bottom:40px;left:0;right:0;"]),_=Object(c.c)(l.b).withConfig({displayName:"pages__RightColumn",componentId:"sc-1p0quar-4"})(["width:",' font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;vertical-align:middle;display:inline-block;'],"506px;"),C=function(e){function t(){var t;return(t=e.call(this)||this).state={component:"home"},t}o()(t,e);var n=t.prototype;return n.handleContentChange=function(e){this.setState({component:e})},n.render=function(){var e=this;return r.a.createElement(b,null,r.a.createElement(l.c,null),r.a.createElement(s.Helmet,null,r.a.createElement("title",null,"Noah Gilmore"),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"})),r.a.createElement(w,null,r.a.createElement(x,null,r.a.createElement(l.a,{href:"/"},"Noah Gilmore")),r.a.createElement(y,null,r.a.createElement(d,{onClick:function(){return e.handleContentChange("about")}},"About"),r.a.createElement(d,{onClick:function(){return e.handleContentChange("contact")}},"Contact"),r.a.createElement(d,{to:"/blog"},"Blog"))),r.a.createElement(_,null,r.a.createElement(f,{component:this.state.component})))},n.componentDidMount=function(){h.a.initialize("UA-35325391-1"),h.a.pageview(window.location.pathname+window.location.search)},t}(r.a.Component);t.default=C},158:function(e,t,n){"use strict";n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return b}),n.d(t,"d",function(){return w}),n.d(t,"e",function(){return x}),n.d(t,"a",function(){return y});var a=n(190),o=n.n(a),i=(n(0),n(156)),r=n(163),l=n.n(r),c=n(164),p=n.n(c),d=n(165),s=n.n(d),u=n(166),m=n.n(u);function f(){var e=o()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return f=function(){return e},e}var g=Object(i.a)(f(),l.a,l.a,p.a,s.a,m.a),h=i.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),b=(i.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),i.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),w=i.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),x=i.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),y=i.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},163:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},164:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},165:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},166:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"}}]);
//# sourceMappingURL=component---src-pages-index-jsx-3bc3c49554a87f49eff5.js.map