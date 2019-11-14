(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var a=n(150),o=n.n(a),r=n(0),i=n.n(r),l=n(161),p=n(164),s=n(148);t.default=function(e){var t=e.components,n=o()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:p.a,layoutProps:n,components:t},i.a.createElement(s.b,{title:"Easy Gatsby Image Components",date:"November 2nd, 2018"}),i.a.createElement(l.MDXTag,{name:"p",components:t},"I use ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://gatsbyjs.org"}},"Gatsby")," as a static site generator to build this blog using React. As part of this, I wanted a simple component to display a static image, something like this:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},'<Image filename="myimage.png" />\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"Surprisingly, this is hard to do in Gatsby. The default Image component generated by Gatsby uses ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"StaticQuery"),":"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import Img from 'gatsby-image'\n\nconst Image = () => (\n  <StaticQuery\n    query={graphql`\n      query {\n        placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    `}\n    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}\n  />\n)\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},"Simple enough - I figured I could make it customizable using props:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"const Image = (props) => (\n  <StaticQuery\n    query={graphql`\n      query {\n        placeholderImage: file(relativePath: { eq: ${props.filename} }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    `}\n    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}\n  />\n)\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},"Unfortunately this doesn't actually work - ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"StaticQuery")," is called \"Static\" because it's compiled and doesn't support string interpolation in its template literal. If you try to do this, you'll see an error like this on build:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"Error: BabelPluginRemoveGraphQL: String interpolations are not allowed in graphql fragments. Included fragments should be referenced as `...MyModule_foo`.\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},"This behavior is ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/static-query/"}},"documented")," by Gatsby, and that documentation notes that the alternative is to use a page query. I didn't want to put a query on every page with images though, so I started investigating other options."),i.a.createElement(l.MDXTag,{name:"p",components:t},"I came across ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://medium.freecodecamp.org/how-i-made-my-portfolio-website-blazing-fast-with-gatsby-82ccddc2f671"}},"this post")," by someone who had been doing some fancier image querying with Gatsby - she had the foresight to ",i.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"query all the images upfront")," by using the ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"allFile")," query, and filter them down with props later. Based on that, I implemented the following component, which works great and includes all the fun functionality that ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-image/"}},"gatsby-image")," offers:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import Img from 'gatsby-image'\n\nconst Image = (props) => (\n  <StaticQuery\n    query={graphql`\n      query {\n        images: allFile {\n          edges {\n            node {\n              relativePath\n              name\n              childImageSharp {\n                sizes(maxWidth: 600) {\n                  ...GatsbyImageSharpSizes\n                }\n              }\n            }\n          }\n        }\n      }\n    `}\n\n    render={(data) => {\n      const image = data.images.edges.find(n => {\n        return n.node.relativePath.includes(props.filename);\n      });\n      if (!image) { return null; }\n      \n      const imageSizes = image.node.childImageSharp.sizes;\n      return (\n        <Img\n          alt={props.alt}\n          sizes={imageSizes}\n        />\n      );\n    }}\n  />\n)\n")),i.a.createElement(l.MDXTag,{name:"p",components:t},"Hopefully that snippet helps if you're trying to do something similar. If it does, ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://twitter.com/noahsark769"}},"let me know")," 👋"))};var c={}},147:function(e,t,n){"use strict";n.d(t,"c",function(){return g}),n.d(t,"b",function(){return h}),n.d(t,"f",function(){return y}),n.d(t,"d",function(){return b}),n.d(t,"e",function(){return v}),n.d(t,"a",function(){return w});var a=n(165),o=n.n(a),r=(n(0),n(146)),i=n(153),l=n.n(i),p=n(154),s=n.n(p),c=n(155),m=n.n(c),d=n(156),u=n.n(d);function f(){var e=o()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n"]);return f=function(){return e},e}var g=Object(r.a)(f(),l.a,l.a,s.a,m.a,u.a),h=r.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(r.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),r.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),b=r.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),v=r.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),w=r.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},148:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u});var a=n(7),o=n.n(a),r=n(0),i=n.n(r),l=n(146),p=n(152),s=l.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}"]),c=l.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),m=l.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;margin-bottom:10px;']),d=l.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),u=function(e){return i.a.createElement("div",null,i.a.createElement(p.Helmet,null,i.a.createElement("title",null,e.title)),i.a.createElement(c,null,i.a.createElement(m,null,e.title),i.a.createElement(d,null,e.date)))};i.a.Component},150:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=l(n(0)),r=l(n(50)),i=l(n(4));function l(e){return e&&e.__esModule?e:{default:e}}var p=(0,r.default)({}),s=p.Provider,c=p.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return o.default.createElement(c,null,function(t){return o.default.createElement(e,a({components:n||t},r))})}};var m=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};m.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=m},153:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},154:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},155:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},156:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},158:function(e,t,n){"use strict";var a=n(0),o=n.n(a),r=n(147),i=n(146),l=i.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){flex-direction:column;padding:20px 20px 10px 20px;}"]),p=i.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;']),s=Object(i.c)(r.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;@media all and (max-width:600px){justify-content:flex-start;}"]),c=Object(i.c)(r.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:horizontal;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;@media all and (max-width:600px){display:block;width:100%;font-size:20px;margin:5px 0px;padding:10px 10px;background-color:#eee;}']),m=Object(i.c)(r.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:rgba(128,165,177,1);-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:rgba(151,195,210,1);}@media all and (max-width:600px){width:100%;}"]);t.a=function(e){return o.a.createElement(l,null,o.a.createElement(p,null,o.a.createElement(m,{href:"/"},"NOAH GILMORE")),o.a.createElement(s,null,o.a.createElement(c,null,o.a.createElement(m,{href:"/"},"HOME")),o.a.createElement(c,null,o.a.createElement(m,{href:"/blog/"},"POSTS"))))}},159:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var a=n(7),o=n.n(a),r=n(0),i=n.n(r),l=n(34),p=n.n(l),s=n(146).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['.format-post-preview p,.format-post-preview li{font-family:"Open Sans",arial,sans-serif;font-size:14px;line-height:14px;line-height:18px;margin-top:10px;padding-bottom:10px;}.format-post-preview p + p{margin-top:0;}.format-post-preview pre > code{font-size:12px;line-height:12px;margin-top:0;margin-bottom:0;}p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:26px;color:#333;padding-bottom:15px;margin-top:15px;}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}a:hover{color:#47656E;}code{font-family:monospace;font-size:16px;}pre{display:block;margin:0;padding:0;background:none;}pre > code{display:block;margin:0;padding:0;border:1px solid #ddd;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;white-space:pre-wrap;@media all and (max-width:600px){font-size:19px;white-space:pre;}}pre + p{margin-top:30px;}ol{margin-left:30px;}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}']),c=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(s,null,this.props.children)},n.componentDidMount=function(){for(var e=p.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs.highlightBlock(e[t])},t}(i.a.Component)},161:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(162);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(151);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=s(r),l=s(n(163)),p=n(151);function s(e){return e&&e.__esModule?e:{default:e}}var c={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,p=e.children,s=e.components,m=void 0===s?{}:s,d=e.Layout,u=e.layoutProps,f=m[n+"."+t]||m[t]||c[t]||t;return d?((0,l.default)(this,d),i.default.createElement(d,a({components:m},u),i.default.createElement(f,r,p))):i.default.createElement(f,r,p)}}]),t}();t.default=(0,p.withMDXComponents)(m)},163:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,p=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,c=s&&s(Object);e.exports=function e(t,n,m){if("string"!=typeof n){if(c){var d=s(n);d&&d!==c&&e(t,d,m)}var u=i(n);l&&(u=u.concat(l(n)));for(var f=0;f<u.length;++f){var g=u[f];if(!(a[g]||o[g]||m&&m[g])){var h=p(n,g);try{r(t,g,h)}catch(e){}}}return t}return t}},164:function(e,t,n){"use strict";n(49);var a=n(7),o=n.n(a),r=n(0),i=n.n(r),l=n(152),p=n(147),s=n(158),c=n(148),m=n(159),d=n(146).c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),u=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return i.a.createElement(d,null,i.a.createElement("div",{id:"disqus_thread"}))},n.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},t}(i.a.Component),f=n(166),g=n.n(f);n.d(t,"a",function(){return h});var h=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var n=t.prototype;return n.render=function(){return console.log(this.props.children),i.a.createElement("div",null,i.a.createElement(p.c,null),i.a.createElement(l.Helmet,null,i.a.createElement("link",{href:"http://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"})),i.a.createElement(s.a,null),i.a.createElement(c.a,null,i.a.createElement(m.a,null,this.props.children),i.a.createElement(u,null)))},n.componentDidMount=function(){g.a.initialize("UA-35325391-1"),g.a.pageview(window.location.pathname+window.location.search)},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-easy-gatsby-image-components-mdx-d11288a403d430b33325.js.map