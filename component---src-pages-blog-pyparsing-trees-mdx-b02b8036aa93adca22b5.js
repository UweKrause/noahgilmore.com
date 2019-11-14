(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,a,n){"use strict";n.r(a);var t=n(155),r=n.n(t),o=n(0),i=n.n(o),s=n(162),p=n(165),c=n(7),l=n.n(c),m=n(146),d=(n(283),n(284),n(76),n(287)),g=n(169),u=n(288),f=n.n(u),h=function(e){return i.a.createElement(g.StaticQuery,{query:"1345654842",render:function(a){var n=a.images.edges.find(function(a){return a.node.relativePath.includes(e.filename)});if(!n)return null;var t=n.node.childImageSharp.sizes;return i.a.createElement(f.a,{alt:e.alt,sizes:t})},data:d})},y=m.c.div.withConfig({displayName:"CaptionedImage__Container",componentId:"ceijyq-0"})(["margin:20px 0;"]),x=m.c.div.withConfig({displayName:"CaptionedImage__Caption",componentId:"ceijyq-1"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;margin-bottom:30px;img{width:100%;margin-bottom:10px;}']),w=function(e){function a(){return e.apply(this,arguments)||this}return l()(a,e),a.prototype.render=function(){return i.a.createElement(y,null,i.a.createElement(h,{filename:this.props.filename,alt:this.props.alt}),i.a.createElement(x,null,this.props.caption))},a}(i.a.Component);n.d(a,"_frontmatter",function(){return b});a.default=function(e){var a=e.components,n=r()(e,["components"]);return i.a.createElement(s.MDXTag,{name:"wrapper",Layout:p.a,layoutProps:n,components:a},i.a.createElement(s.MDXTag,{name:"p",components:a},"Let's talk about ",i.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"}},"syntax trees"),'. In static analysis, a common operation is to take a character string (e.g. "x = 1") and transform it into well structured data:'),i.a.createElement(w,{filename:"pyparsing-trees-1.png",alt:"Simple syntax tree",caption:"This is a simple example of course."}),i.a.createElement(s.MDXTag,{name:"p",components:a},"Let's try to do this in python. We'll use ",i.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://pyparsing.wikispaces.com/"}},"Pyparsing")," as our tokenization tool - you can use pyparsing's rules to build a grammar, from which you can get back a list of token data."),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'from pyparsing import alphas, Word, Literal, nums\n\ngrammar = Literal("var") + Word(alphas) + Literal("=") + Word(nums)\n')),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},">>> print(grammar.parseString(\"var x = 1\"))\n['var', 'x', '=', '1']\n")),i.a.createElement(s.MDXTag,{name:"p",components:a},"This is great, but what if we need a tree instead of an array of tokens?"),i.a.createElement(s.MDXTag,{name:"p",components:a},"For example, let's say we have a language that describes a tree, where each node in the tree can have a number. Each node is represented by a pair of parentheses, and inside is the value followed by the child nodes:"),i.a.createElement(w,{filename:"pyparsing-trees-2.png",alt:"Simple syntax tree",caption:""}),i.a.createElement(s.MDXTag,{name:"p",components:a},"How could we write a parser for this? It differs in a couple of ways from the first example:"),i.a.createElement(s.MDXTag,{name:"ol",components:a},i.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ol"},i.a.createElement(s.MDXTag,{name:"p",components:a,parentName:"li"},"It's inherently recursive, since after the value in each node, zero or more child nodes can follow:"),i.a.createElement(s.MDXTag,{name:"pre",components:a,parentName:"li"},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"node := (value[, node, node, node, ...])\n"))),i.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ol"},"If we just parse the string as a list, we won't be able to preserve the tree structure.")),i.a.createElement(s.MDXTag,{name:"h3",components:a},"Recursive grammars with pyparsing"),i.a.createElement(s.MDXTag,{name:"p",components:a},"Pyparsing supports recursive grammars using a grammar component called ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Forward"),". To define a recursive grammar, you create a ",i.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"pyparsing.Forward()"),", then use the shift left operator to set its content:"),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'grammar = pyparsing.Forward()\ngrammar << pyparsing.Suppress("(") + pyparsing.Word("0123456789") + pyparsing.ZeroOrMore(grammar) + pyparsing.Suppress(")")\n\nquery = "(1 (2 (3)) (4 (5 (6) (7) (8)))"\n')),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},">>> print(grammar.parseString(query))\n['5', '6', '7', '9', '9', '5', '6', '7', '8', '9', '7', '8', '9']\n")),i.a.createElement(s.MDXTag,{name:"p",components:a},"This parses the grammar, but we still don't have the tree structure."),i.a.createElement(s.MDXTag,{name:"h3",components:a},"Parse actions"),i.a.createElement(s.MDXTag,{name:"p",components:a},'Pyparsing allows a "parse action" to be defined:'),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},"def action(string, location, tokens):\n    return tokens\n\ngrammar.setParseAction(action)\n")),i.a.createElement(s.MDXTag,{name:"p",components:a},"The parse action is a function which will be applied every time a parse element generates output. It takes three arguments:"),i.a.createElement(s.MDXTag,{name:"ol",components:a},i.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ol"},"The full input string being parsed."),i.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ol"},"The location of the parse element as an index into the full string."),i.a.createElement(s.MDXTag,{name:"li",components:a,parentName:"ol"},"The list generated tokens, as strings.")),i.a.createElement(s.MDXTag,{name:"p",components:a},"The value returned from the parse action function will replace the string tokens, and the default implementation does nothing with the tokens and just returns them the way they are. The parse action is our chance to hook into pyparsing and output structured data instead of strings."),i.a.createElement(s.MDXTag,{name:"p",components:a},"As an example:"),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'import pyparsing\n\nclass Item:\n    def __init__(self, value):\n        self.value = value\n\n    def __repr__(self):\n        return "{Item: %s}" % self.value\n\ndef transform(string, location, tokens):\n    return [Item(token) for token in tokens]\n\ngrammar = Literal("var") + Word(alphas) + Literal("=") + Word(nums)\ngrammar.setParseAction(transform)\n')),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},'>>> print(grammar.parseString("var x = 1"))\n[{Item: var}, {Item: x}, {Item: =}, {Item: 1}]\n')),i.a.createElement(s.MDXTag,{name:"p",components:a},"Now we have items instead of strings."),i.a.createElement(s.MDXTag,{name:"h3",components:a},"Building a tree"),i.a.createElement(s.MDXTag,{name:"p",components:a},"Let's apply this to the tree grammar to build a tree. We'll define a simple node class:"),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'from collections import namedtuple\n\nNode = namedtuple("Node", ["value", "children"])\n')),i.a.createElement(s.MDXTag,{name:"p",components:a},"And define the recursive grammar:"),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'from pyparsing import Forward, Suppress, Word, ZeroOrMore\n\ngrammar = Forward()\ngrammar << Suppress("(") + Word("0123456789") + ZeroOrMore(grammar) + Suppress(")")\n\ndef parseAction(string, location, tokens):\n    return Node(value=tokens[0], children=tokens[1:])\n\ngrammar.setParseAction(parseAction)\n')),i.a.createElement(s.MDXTag,{name:"p",components:a},"And a way to print it out and see if it worked:"),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'def pprint(node, tab=""):\n   print tab + u"┗━ " + str(node.value)\n   for child in node.children:\n      pprint(child, tab + "    ")\n')),i.a.createElement(s.MDXTag,{name:"pre",components:a},i.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},'>>> pprint(grammar.parseString("(1 (2 (3)) (4 (5 (6) (7) (8))))"))\n┗━ 1\n    ┗━ 2\n        ┗━ 3\n    ┗━ 4\n        ┗━ 5\n            ┗━ 6\n            ┗━ 7\n            ┗━ 8\n')),i.a.createElement(s.MDXTag,{name:"p",components:a},"Not bad: a simple parser in 9 lines of code."))};var b={}},147:function(e,a,n){"use strict";n.d(a,"c",function(){return f}),n.d(a,"b",function(){return h}),n.d(a,"f",function(){return y}),n.d(a,"d",function(){return x}),n.d(a,"e",function(){return w}),n.d(a,"a",function(){return b});var t=n(166),r=n.n(t),o=(n(0),n(146)),i=n(151),s=n.n(i),p=n(152),c=n.n(p),l=n(153),m=n.n(l),d=n(154),g=n.n(d);function u(){var e=r()(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return u=function(){return e},e}var f=Object(o.a)(u(),s.a,s.a,c.a,m.a,g.a),h=o.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),y=(o.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),o.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),x=o.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),w=o.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),b=o.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},151:function(e,a,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},152:function(e,a,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},153:function(e,a,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},154:function(e,a,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},157:function(e,a,n){"use strict";var t=n(0),r=n.n(t),o=n(147),i=n(146),s=i.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){flex-direction:column;padding:20px 20px 10px 20px;}"]),p=i.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;']),c=Object(i.c)(o.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;@media all and (max-width:600px){justify-content:flex-start;}"]),l=Object(i.c)(o.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:horizontal;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;@media all and (max-width:600px){display:block;width:100%;font-size:20px;margin:5px 0px;padding:10px 10px;background-color:#eee;}']),m=Object(i.c)(o.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:rgba(128,165,177,1);-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:rgba(151,195,210,1);}@media all and (max-width:600px){width:100%;}"]);a.a=function(e){return r.a.createElement(s,null,r.a.createElement(p,null,r.a.createElement(m,{href:"/"},"NOAH GILMORE")),r.a.createElement(c,null,r.a.createElement(l,null,r.a.createElement(m,{href:"/"},"HOME")),r.a.createElement(l,null,r.a.createElement(m,{href:"/blog/"},"POSTS"))))}},158:function(e,a,n){"use strict";n.d(a,"a",function(){return c}),n.d(a,"b",function(){return g});var t=n(7),r=n.n(t),o=n(0),i=n.n(o),s=n(146),p=n(150),c=s.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&"background-color: #f6f6f6;"}),l=s.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),m=s.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;margin-bottom:10px;']),d=s.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),g=function(e){return i.a.createElement("div",null,i.a.createElement(p.Helmet,null,i.a.createElement("title",null,e.title)),i.a.createElement(l,null,i.a.createElement(m,null,e.title),i.a.createElement(d,null,e.date)))};i.a.Component},159:function(e,a,n){"use strict";n.d(a,"a",function(){return l});var t=n(7),r=n.n(t),o=n(0),i=n.n(o),s=n(34),p=n.n(s),c=n(146).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:26px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;}a:hover{color:#47656E;}code{font-family:monospace;font-size:16px;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #ddd;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;white-space:pre-wrap;@media all and (max-width:600px){font-size:19px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}']),l=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var n=a.prototype;return n.render=function(){return i.a.createElement(c,null,this.props.children)},n.componentDidMount=function(){for(var e=p.a.findDOMNode(this).querySelectorAll("pre code"),a=0;a<e.length;a++)window.hljs.highlightBlock(e[a])},a}(i.a.Component)},160:function(e,a,n){"use strict";function t(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(a,"a",function(){return t})},165:function(e,a,n){"use strict";n(49);var t=n(7),r=n.n(t),o=n(0),i=n.n(o),s=n(150),p=n(147),c=n(157),l=n(158),m=n(159),d=n(160),g=n(146),u=g.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),f=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var n=a.prototype;return n.render=function(){return i.a.createElement(u,null,i.a.createElement("div",{id:"disqus_thread"}))},n.componentDidMount=function(){var e,a;e=document,(a=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",a.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(a)},a}(i.a.Component),h=n(167),y=n.n(h);n.d(a,"a",function(){return w});var x=g.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-0"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),w=function(e){function a(){return e.apply(this,arguments)||this}r()(a,e);var n=a.prototype;return n.render=function(){return i.a.createElement("div",null,i.a.createElement(p.c,null),i.a.createElement(s.Helmet,null,i.a.createElement("link",{href:"http://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"})),i.a.createElement(c.a,null),i.a.createElement(l.a,null,i.a.createElement(x,null,i.a.createElement(l.b,{title:this.props.pageContext.frontmatter.title,date:Object(d.a)(this.props.pageContext.frontmatter.date)})),i.a.createElement(m.a,null,this.props.children),i.a.createElement(x,null,i.a.createElement(f,null))))},n.componentDidMount=function(){y.a.initialize("UA-35325391-1"),y.a.pageview(window.location.pathname+window.location.search)},a}(i.a.Component)},169:function(e,a,n){"use strict";n.r(a),n.d(a,"graphql",function(){return u}),n.d(a,"StaticQueryContext",function(){return d}),n.d(a,"StaticQuery",function(){return g});var t=n(0),r=n.n(t),o=n(4),i=n.n(o),s=n(148),p=n.n(s);n.d(a,"Link",function(){return p.a}),n.d(a,"withPrefix",function(){return s.withPrefix}),n.d(a,"navigate",function(){return s.navigate}),n.d(a,"push",function(){return s.push}),n.d(a,"replace",function(){return s.replace}),n.d(a,"navigateTo",function(){return s.navigateTo});var c=n(170),l=n.n(c);n.d(a,"PageRenderer",function(){return l.a});var m=n(37);n.d(a,"parsePath",function(){return m.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,a,n){var t;e.exports=(t=n(180))&&t.default||t},180:function(e,a,n){"use strict";n.r(a);var t=n(13),r=n.n(t),o=n(0),i=n.n(o),s=n(4),p=n.n(s),c=n(56),l=n(2),m=function(e){var a=e.location,n=l.default.getResourcesForPathnameSync(a.pathname);return i.a.createElement(c.a,r()({location:a,pageResources:n},n.json))};m.propTypes={location:p.a.shape({pathname:p.a.string.isRequired}).isRequired},a.default=m},287:function(e){e.exports={data:{images:{edges:[{node:{relativePath:"gatsby-icon.png",name:"gatsby-icon",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAD2klEQVQ4y3WUW2xUVRSGDyY+8MCLTxofvNNWqPY61Wgk4IvxEmI1ktpxOm2n01IKCg8gCYpGgxgkpTB3LjOlnaYNDQGaaC0kpbaVS0molWYql9SMGDWxRBrajt3nrOX6d+cMo5aTrOx99uXba61/7W14i0MGvrqikOEtDt+HvqcgeH+DI/LO+rKDnQ2lkUmZU2JmfWkkKWPdMlcp/0uxFnvqisJGum/YnSVNLxy2+2tlQ6KhKMrVuRF2LfezpyDEnsIQu3L87M6JcENhlGXNDVlbYRh3GRlqFmzXBkeM3Xkh3vTSEdWxe1D9OJy0bl6bopvXp2j83C/Utfd7tXl1TLlzg9zkOMreknBLFtTIhAnYprI4V+X5zOjOfnM+pYiZCbCRvut0sfcaJX/6U49ZpsXxLwbNqqd9qqm0netLwr502jJeroVngPVELlmyiS/3T9KONztJNrFz+X5trjwfb3+jg85/fRVg7u+6QrJXpT11GlkCJBAmPMPCk8ERqnxqP7tX+HE6ixgLJv3qlX6ueHwfH2s+R5ZF/PFbXWZtfhhzSYEvM6AmBGh68bD6e07R6MDP5BSYNw2SRf8yjEloIlSQt73aTmjh5YbSVrQeA6UBNeVEhfxsfz1O8EwO0huzYfa/9lqs5pkAWrKBMt9joM6qcgMc+/Qsckd9bT/oXGlIyV1Idlv7bFAbvJOWxKz1JUcwPw5lFMJY92gzdXw5pJN9Oj7GrtwDi0LhmZRUxj5YHaP3V0WpvlhHNGNIwZqNzx/i0NY+qnyyhdp3fceLQQFyiyAflXfy9NQsp2bneWY6xTO3UzQx8ivVFeq0zBm4TrgBKNqhkxNU/uAeju8e/B8UUSDMzWti3N1ynk/4LyLvfOevOZq88odVu1JXQQKidEMUgWhRvm0dpbcf3rs4VLxE3t6T/4rH9rHkn01lUU/4kgmGCPkNysaJu7nl5VY1fWuWbWHuBYX6jc8dZEkPD3SP65x/+Fpc1Rfo+90IUZbiouNuiii6sO8JFfVr8gO6sGOf9GvYcd8F05UTgLe/CesB++pV4PpI0tWZjjGyob2to1z+0FdsC4VDRFE+e2zBs+FTE1SdH5jf6GiDcF4btvA4yKux0dGuoZ17hs07t1MaOnQiQe8+0ULiqX4Y0sbHD1wwF2Bx5DaaecIyj6J8eDXgaZWEv/WVNoXbc2Psd+voZwO07pFmavt8wOqNXTYxhzDhmQ3775u4JGvQKTlNQigoh3JoLDukFa1ZEdZjWgDJmaz1LgILZR5He7CuMLRMoB4pqR7xYFz+Z1C0UosJlAbUtAXAHnsfGP8An71yIvslifEAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-ee766.png",srcSet:"/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-3f213.png 150w,\n/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-243cb.png 300w,\n/static/gatsby-icon-4a9773549091c227cd2eb82ccd9c5e3a-ee766.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}}},{node:{relativePath:"pyparsing-trees-1.png",name:"pyparsing-trees-1",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABN0lEQVQoz3VRy0rDUBDNwt/Qr/EfXPgNfou4E3Qn7lyJKxcqiIitBirSmLYJ2KS2TcxNUqHN6/Y4c2ljE9IDh7kwM2dmztXQgOVyWcb6m7lYLOB5nmIYhpWcVi/exk0kSQLTNGEYBlzXrSyibWuqoygKRFEEy7Jg2zbm83mZE0LA9/3/DTcnSClLskiWZaWgR02tdhu6ruMnCFBQDWMyncKiIQyNlWezmTqDwZ4EVMxTOTJZPE1TjB0HI2eIOI4xcR2KESQtIXzyc/ytvNXyPFfT12fzRmuyCA9iMyTVtT57GAwdJNT4TO+QLGB0v4bo9Aco8qx6chPkytquiLFzdoXDuxecGza0kwscv/dUbu/yBrvE3yyvfkoT5eqzRJLi4PYJpx996L7A/vU9HkZTlTt6fCO+qto/pKhhHRkwq+EAAAAASUVORK5CYII=",aspectRatio:2.597122302158273,src:"/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-1e875.png",srcSet:"/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-5f5eb.png 150w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-07cb7.png 300w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-1e875.png 600w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-4ddaa.png 900w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-bfb6f.png 1200w,\n/static/pyparsing-trees-1-9aff37cd96139c434e35a8880481e63c-d8427.png 1444w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"pyparsing-trees-2.png",name:"pyparsing-trees-2",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABcklEQVQoz5WSy04CUQyGeRBfxXcwceFb6M4VWze6IPEBjLoyujDqQqPGDRgkBgOIQYkgKoIic2GY+4Xf0zLAQCRKk+ZMm55/2n4nhtB6vR7+a37Qr90qVbF0fg3D84YasahYEATwfZ+dvinvieKBO47D+SCsT+RKmD+8hCvq+f6koGEYUFUViqLAsiwWkWWZY3JJkuCLnCs6TDdasMPOit8SaprO32OCk2NTzB2F7rgu59OfbcQSOzipfXA8t3uEhdPkSHCa2DTruh6OX+qQLJvjq/oX8m2lL0gXZ/VpNoQyq9FFV6yA7KDyhqKsjqDQ4m3bZghEkU6KB26a5pC2ruv8AqIrWb97QKbZGgmSQLfbZbpEudPpQNM0ztFJlBmI+BmRdkMwnsjFb/JQbAd75Rr2n1/Hofx31MEGSXDxLIWGYWKz8CQeeWV2KNFRfXFuP1Zx8d7E2u09NsToZUX7u8Oo0G/vdTWdw3Iyi5VUFvFMAT+6R5054ebxbwAAAABJRU5ErkJggg==",aspectRatio:1.6509635974304069,src:"/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-1e875.png",srcSet:"/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-5f5eb.png 150w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-07cb7.png 300w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-1e875.png 600w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-4ddaa.png 900w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-bfb6f.png 1200w,\n/static/pyparsing-trees-2-a5da0e9369c510847504d20e68f74f11-ef766.png 1542w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"gatsby-astronaut.png",name:"gatsby-astronaut",childImageSharp:{sizes:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-1e875.png",srcSet:"/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-5f5eb.png 150w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-07cb7.png 300w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-1e875.png 600w,\n/static/gatsby-astronaut-6d91c86c0fde632ba4cd01062fd9ccfa-adfd6.png 800w",sizes:"(max-width: 600px) 100vw, 600px"}}}},{node:{relativePath:"404.jsx",name:"404",childImageSharp:null}},{node:{relativePath:"index.jsx",name:"index",childImageSharp:null}},{node:{relativePath:"blog/easy-gatsby-image-components.mdx",name:"easy-gatsby-image-components",childImageSharp:null}},{node:{relativePath:"blog/index.jsx",name:"index",childImageSharp:null}},{node:{relativePath:"blog/nsobject-equatable.mdx",name:"nsobject-equatable",childImageSharp:null}},{node:{relativePath:"blog/pyparsing-trees.mdx",name:"pyparsing-trees",childImageSharp:null}},{node:{relativePath:"blog/swift-pointer-uint.mdx",name:"swift-pointer-uint",childImageSharp:null}},{node:{relativePath:"blog/userdefaults-set-nil.mdx",name:"userdefaults-set-nil",childImageSharp:null}}]}}}}}]);
//# sourceMappingURL=component---src-pages-blog-pyparsing-trees-mdx-b02b8036aa93adca22b5.js.map