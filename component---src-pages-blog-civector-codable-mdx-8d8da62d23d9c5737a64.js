(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"9web":function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return c})),s.d(e,"default",(function(){return m}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH");var c={},b={_frontmatter:c},p=n.a;function m(a){var e=a.components,s=function(a,e){if(null==a)return{};var s,t,n={},c=Object.keys(a);for(t=0;t<c.length;t++)s=c[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,["components"]);return Object(t.b)(p,Object.assign({},b,s,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"For my current ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769/status/1102318232025718785"}),"side project"),", I have to export CIFilter parameters to json, and I've been running into issues with various CoreImage types not conforming to Swift's ",Object(t.b)("inlineCode",{parentName:"p"},"Codable"),". ",Object(t.b)("inlineCode",{parentName:"p"},"CIColor")," works well with ",Object(t.b)("inlineCode",{parentName:"p"},"Codable")," out of the box, but ",Object(t.b)("inlineCode",{parentName:"p"},"CIVector")," (which represents an arbitrary length list of ",Object(t.b)("inlineCode",{parentName:"p"},"CGFloats"),") is trickier."),Object(t.b)("p",null,"Thought I'd share a wrapper type which I use to encode and decode ",Object(t.b)("inlineCode",{parentName:"p"},"CIVector"),":"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"struct"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"CIVectorCodableWrapper"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," vector: CIVector")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"extension"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"CIVectorCodableWrapper"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": Codable {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"public"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"init"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"decoder"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": Decoder) "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"throws"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," container = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"try"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," decoder."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"unkeyedContainer"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," floats: [CGFloat] = []")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"while"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," !container."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"isAtEnd"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            floats."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"append"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"try"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," container."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"decode"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(CGFloat.self))")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        vector = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"CIVector"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"floats"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": floats)")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"func"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"encode"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"to"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"encoder"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": Encoder) "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"throws"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"var"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," container = encoder."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"unkeyedContainer"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"for"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," i "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"in"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"..<vector."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"count"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"            "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"try"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," container."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"encode"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(vector."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"value"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"at"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": i))")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("p",null,Object(t.b)("inlineCode",{parentName:"p"},"CIVector"),' is semantically an "unkeyed container" type, so the ',Object(t.b)("inlineCode",{parentName:"p"},"Codable")," implementation encodes the vector's floats to an unkeyed coding container (with ",Object(t.b)("inlineCode",{parentName:"p"},"JSONEncoder"),", for example, this becomes an array)."),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-civector-codable-mdx-8d8da62d23d9c5737a64.js.map