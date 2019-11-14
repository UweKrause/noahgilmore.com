(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{148:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",function(){return m});var a=t(157),o=t.n(a),r=t(0),i=t.n(r),p=t(159),s=t(160);n.default=function(e){var n=e.components,t=o()(e,["components"]);return i.a.createElement(p.MDXTag,{name:"wrapper",Layout:s.a,layoutProps:t,components:n},i.a.createElement(p.MDXTag,{name:"p",components:n},"There are some times in Swift, like when using ",i.a.createElement(p.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://developer.apple.com/videos/play/wwdc2016/411/"}},"System Trace"),", that you want to get the pointer value of an object directly as a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UInt")," (passing the pointer to ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"kdebug_signpost")," is one). I was surprised at how hard it was to find documentation on how to get a Swift reference’s pointer value as a ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UInt"),". Here’s how to do it, using the ",i.a.createElement(p.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"UInt(bitPattern:)")," initializer:"),i.a.createElement(p.MDXTag,{name:"pre",components:n},i.a.createElement(p.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"_ = withUnsafePointer(to: myObject) { unsafePointer in\n    let pointerValue = UInt(bitPattern: unsafePointer)\n    // do whatever with pointerValue: it's a UInt!\n}\n")))};var m={}}}]);
//# sourceMappingURL=component---src-pages-blog-swift-pointer-uint-mdx-e4a54b28dcacb522bbb2.js.map