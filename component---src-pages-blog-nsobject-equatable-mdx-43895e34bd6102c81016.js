(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{145:function(e,n,a){"use strict";a.r(n),a.d(n,"_frontmatter",function(){return p});var t=a(156),o=a.n(t),r=a(0),m=a.n(r),c=a(158),s=a(159);n.default=function(e){var n=e.components,a=o()(e,["components"]);return m.a.createElement(c.MDXTag,{name:"wrapper",Layout:s.a,layoutProps:a,components:n},m.a.createElement(c.MDXTag,{name:"p",components:n},"Swift can be tricky sometimes. For example, what does the following print?"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"class A: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n}\n\nfunc ==(left: A, right: A) -> Bool {\n  return left.x == right.x\n}\n\nprint(A(x: 1) == A(x: 1))\nprint([A(x: 1)] == [A(x: 1)])\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Perhaps surprisingly, it's this:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"true\nfalse // huh?!\n")),m.a.createElement(c.MDXTag,{name:"h3",components:n},"Equatable conformance is hard"),m.a.createElement(c.MDXTag,{name:"p",components:n},"Why does comparing two arrays with equal contents return false? It turns out that:"),m.a.createElement(c.MDXTag,{name:"ul",components:n},m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Array is bridged to NSArray"),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"NSArray doesn't declare a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"==(_:_:)")," function, so it falls back to NSObject's ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"==(_:_:)"),", which calls ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"isEqual")),m.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"NSArray's ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"isEqual")," ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"li",props:{href:"https://github.com/apple/swift-corelibs-foundation/blob/0cbb3225660752987a6c2cf672886fca434d3b1d/Foundation/NSArray.swift#L310"}},"compares objects by casting to AnyHashable"))),m.a.createElement(c.MDXTag,{name:"p",components:n},"We can see that this is the problem by casting the objects to ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"AnyHashable")," before comparing them:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"print(A(x: 1) as AnyHashable == A(x: 1) as AnyHashable)\n")),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"false\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Apparently, doing this will use the NSObject implementation of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"==(_:_:)")," rather than the ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"A")," one. The NSObject implementation of ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"==(_:_:)")," checks isEqual, which returns false because the two elements aren't the same in memory. We can see this by adding an override:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},'class B: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    print("isEqual for B")\n    return super.isEqual(object)\n  }\n}\n\nfunc ==(left: B, right: B) -> Bool {\n  print("== for B")\n  return left.x == right.x\n}\n')),m.a.createElement(c.MDXTag,{name:"p",components:n},"Then,"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"print([B(x: 1)] == [B(x: 1)])\n")),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"isEqual for B\nfalse\n")),m.a.createElement(c.MDXTag,{name:"h3",components:n},"The fix"),m.a.createElement(c.MDXTag,{name:"p",components:n},"As far as I can tell, the best way to make an NSObject subclass use custom equality inside an array is to override isEqual:"),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},'class C: NSObject {\n  let x: Int\n\n  init(x: Int) {\n    self.x = x\n  }\n\n  override func isEqual(_ object: Any?) -> Bool {\n    guard let object = object as? C else { return false }\n    return object == self\n  }\n}\n\nfunc ==(left: C, right: C) -> Bool {\n  print("== for C")\n  return left.x == right.x\n}\n')),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-swift",metaString:""}},"print([C(x: 1)] == [C(x: 1)])\n")),m.a.createElement(c.MDXTag,{name:"pre",components:n},m.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"== for C\ntrue\n")),m.a.createElement(c.MDXTag,{name:"p",components:n},"Of course, if we defined ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"A")," as a ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"struct")," or a regular ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"class")," in the first place, there won't be ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"==(_:_:)")," defined for ",m.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"[A]"),", which means the compiler would catch our mistake instead of falling back to something that might not work correctly."),m.a.createElement(c.MDXTag,{name:"p",components:n},"Sigh. Working with NSObject can be tricky."),m.a.createElement(c.MDXTag,{name:"p",components:n},"A working playground with the code from this post can be found ",m.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/noahsark769/code-examples/blob/ed9df41aae709eaeb4e334e3e9a5b1a650deef4d/swift/swift-nsobject-equatable.playground/Contents.swift"}},"here"),"."))};var p={}}}]);
//# sourceMappingURL=component---src-pages-blog-nsobject-equatable-mdx-43895e34bd6102c81016.js.map