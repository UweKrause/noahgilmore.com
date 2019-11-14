(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{141:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",function(){return i});var t=n(157),o=n.n(t),r=n(0),m=n.n(r),s=n(159),p=n(160);a.default=function(e){var a=e.components,n=o()(e,["components"]);return m.a.createElement(s.MDXTag,{name:"wrapper",Layout:p.a,layoutProps:n,components:a},m.a.createElement(s.MDXTag,{name:"p",components:a},"I use ",m.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://gatsbyjs.org"}},"Gatsby")," as a static site generator to build this blog using React. As part of this, I wanted a simple component to display a static image, something like this:"),m.a.createElement(s.MDXTag,{name:"pre",components:a},m.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},'<Image filename="myimage.png" />\n')),m.a.createElement(s.MDXTag,{name:"p",components:a},"Surprisingly, this is hard to do in Gatsby. The default Image component generated by Gatsby uses ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"StaticQuery"),":"),m.a.createElement(s.MDXTag,{name:"pre",components:a},m.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import Img from 'gatsby-image'\n\nconst Image = () => (\n  <StaticQuery\n    query={graphql`\n      query {\n        placeholderImage: file(relativePath: { eq: \"gatsby-astronaut.png\" }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    `}\n    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}\n  />\n)\n")),m.a.createElement(s.MDXTag,{name:"p",components:a},"Simple enough - I figured I could make it customizable using props:"),m.a.createElement(s.MDXTag,{name:"pre",components:a},m.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"const Image = (props) => (\n  <StaticQuery\n    query={graphql`\n      query {\n        placeholderImage: file(relativePath: { eq: ${props.filename} }) {\n          childImageSharp {\n            fluid(maxWidth: 300) {\n              ...GatsbyImageSharpFluid\n            }\n          }\n        }\n      }\n    `}\n    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}\n  />\n)\n")),m.a.createElement(s.MDXTag,{name:"p",components:a},"Unfortunately this doesn't actually work - ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"StaticQuery")," is called \"Static\" because it's compiled and doesn't support string interpolation in its template literal. If you try to do this, you'll see an error like this on build:"),m.a.createElement(s.MDXTag,{name:"pre",components:a},m.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"Error: BabelPluginRemoveGraphQL: String interpolations are not allowed in graphql fragments. Included fragments should be referenced as `...MyModule_foo`.\n")),m.a.createElement(s.MDXTag,{name:"p",components:a},"This behavior is ",m.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.gatsbyjs.org/docs/static-query/"}},"documented")," by Gatsby, and that documentation notes that the alternative is to use a page query. I didn't want to put a query on every page with images though, so I started investigating other options."),m.a.createElement(s.MDXTag,{name:"p",components:a},"I came across ",m.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://medium.freecodecamp.org/how-i-made-my-portfolio-website-blazing-fast-with-gatsby-82ccddc2f671"}},"this post")," by someone who had been doing some fancier image querying with Gatsby - she had the foresight to ",m.a.createElement(s.MDXTag,{name:"em",components:a,parentName:"p"},"query all the images upfront")," by using the ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"allFile")," query, and filter them down with props later. Based on that, I implemented the following component, which works great and includes all the fun functionality that ",m.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.gatsbyjs.org/packages/gatsby-image/"}},"gatsby-image")," offers:"),m.a.createElement(s.MDXTag,{name:"pre",components:a},m.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import Img from 'gatsby-image'\n\nconst Image = (props) => (\n  <StaticQuery\n    query={graphql`\n      query {\n        images: allFile {\n          edges {\n            node {\n              relativePath\n              name\n              childImageSharp {\n                sizes(maxWidth: 600) {\n                  ...GatsbyImageSharpSizes\n                }\n              }\n            }\n          }\n        }\n      }\n    `}\n\n    render={(data) => {\n      const image = data.images.edges.find(n => {\n        return n.node.relativePath.includes(props.filename);\n      });\n      if (!image) { return null; }\n      \n      const imageSizes = image.node.childImageSharp.sizes;\n      return (\n        <Img\n          alt={props.alt}\n          sizes={imageSizes}\n        />\n      );\n    }}\n  />\n)\n")),m.a.createElement(s.MDXTag,{name:"p",components:a},"Hopefully that snippet helps if you're trying to do something similar. If it does, ",m.a.createElement(s.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://twitter.com/noahsark769"}},"let me know")," 👋"))};var i={}}}]);
//# sourceMappingURL=component---src-pages-blog-easy-gatsby-image-components-mdx-463566b4b2678c38a838.js.map