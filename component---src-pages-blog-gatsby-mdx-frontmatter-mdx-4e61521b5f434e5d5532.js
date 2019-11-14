(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return c});var a=n(154),o=n.n(a),r=n(0),m=n.n(r),p=n(156),s=n(157);t.default=function(e){var t=e.components,n=o()(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",Layout:s.a,layoutProps:n,components:t},m.a.createElement(p.MDXTag,{name:"p",components:t},"While building this site in Gatsby using ",m.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/ChristopherBiscardi/gatsby-mdx"}},"MDX"),", I noticed that there wasn't any documentation on how to include data from the frontmatter of an MDX document in the document's page layout."),m.a.createElement(p.MDXTag,{name:"p",components:t},"Though this isn't anywhere in the ",m.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"gatsby-mdx")," docs (that I can tell), there's an ",m.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/ChristopherBiscardi/gatsby-mdx/blob/ee4b17f814396ea7c4aaf8007a1603a57967a40a/examples/kitchen-sink/src/pages/using-pagecontext-frontmatter.mdx"}},"example")," of how to use it in the repo. Frontmatter is passed to the layout component in ",m.a.createElement(p.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"props.pageContext.frontmatter"),". This means you can do things like this in your markdown document:"),m.a.createElement(p.MDXTag,{name:"pre",components:t},m.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{metaString:null}},"---\ntitle: My Page\n---\nThis is the content\n")),m.a.createElement(p.MDXTag,{name:"p",components:t},"And in your layout component, you can grab the frontmatter:"),m.a.createElement(p.MDXTag,{name:"pre",components:t},m.a.createElement(p.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"const MyPageLayout = (props) => {\n    return (\n        <div>\n            <h1>{props.pageContext.frontmatter.title}</h1>\n            <div>\n                {props.children}\n            </div>\n        </div>\n    ); \n};\n")),m.a.createElement(p.MDXTag,{name:"p",components:t},"On this ",m.a.createElement(p.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://noahgilmore.com/blog"}},"blog's home page")," I use frontmatter of all the MDX documents, which includes things like title, date, and preview text, to render the list of blog post previews."))};var c={}}}]);
//# sourceMappingURL=component---src-pages-blog-gatsby-mdx-frontmatter-mdx-4e61521b5f434e5d5532.js.map