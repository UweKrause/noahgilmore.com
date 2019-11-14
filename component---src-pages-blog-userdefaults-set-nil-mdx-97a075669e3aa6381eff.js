(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{150:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return l});var n=t(158),r=t.n(n),o=t(0),s=t.n(o),m=t(159),p=t(160);a.default=function(e){var a=e.components,t=r()(e,["components"]);return s.a.createElement(m.MDXTag,{name:"wrapper",Layout:p.a,layoutProps:t,components:a},s.a.createElement(m.MDXTag,{name:"p",components:a},"To clear a value from UserDefaults, I previously thought it was fine to do something like this:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\n')),s.a.createElement(m.MDXTag,{name:"p",components:a},"Turns out that this works differently in different iOS versions. Starting in iOS 11, setting nil for a key works as I expected and the following prints nil:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\nprint(UserDefaults.standard.data(forKey: "myKey"))\n// nil\n')),s.a.createElement(m.MDXTag,{name:"p",components:a},"However, in iOS 10, UserDefaults actually tries to serialize nil into a Data:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.set(nil, forKey: "myKey")\nprint(UserDefaults.standard.data(forKey: "myKey"))\n// 135 bytes\n')),s.a.createElement(m.MDXTag,{name:"p",components:a},"If we look at this data, it seems like it might be a plist:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-swift",metaString:""}},'print(String(\n    data: UserDefaults.standard.data(forKey: "myKey")!,\n    encoding: .ascii\n))\n')),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},'Optional("bplist00Ô\b\n\vT$topX$objectsX$versionY$archiverÑTroot\0¡\tU$null\0 _NSKeyedArchiver\b(25:<>DI\0\0\0\0\0\0\0\0\0\0\0\0\0\f\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0[")\n')),s.a.createElement(m.MDXTag,{name:"p",components:a},"Turns out that we can use PropertyListSerialization to actually print the serialized value of nil:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-swift",metaString:""}},'let data = UserDefaults.standard.data(forKey: "myKey")!\nlet propertyList = try! PropertyListSerialization.propertyList(\n   from: data,\n   options: [],\n   format: nil\n)\nprint(propertyList)\n')),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},'{\n    "$archiver" = NSKeyedArchiver;\n    "$objects" =     (\n        "$null"\n    );\n    "$top" =     {\n        root = "<CFKeyedArchiverUID 0x79e7c420 [0xf126e8]>{value = 0}";\n    };\n    "$version" = 100000;\n}\n')),s.a.createElement(m.MDXTag,{name:"p",components:a},"For whatever reason, this was totally unexpected to me. It’s particularly tricky when you’re trying to interpret the value of a previously cleared UserDefaults key as JSON:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-swift",metaString:""}},'if let data = UserDefaults.standard.data(forKey: "myKey") {\n    let json = try JSONDecoder().decode(MyClass.self, from: data)\n    print(json)\n} else {\n    print("No data found")\n}\n')),s.a.createElement(m.MDXTag,{name:"p",components:a},"This will work just fine on iOS 11+, but throw an error on iOS 10."),s.a.createElement(m.MDXTag,{name:"p",components:a},"Here’s an ",s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/noahsark769/userdefaults-set-nil-example"}},"example project")," which demonstrates this behavior. I ended up finding one stackoverflow post about it, but as far as I can tell this isn’t documented anywhere. If you have any more info about it, ",s.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://twitter.com/noahsark769"}},"let me know")," 👋"),s.a.createElement(m.MDXTag,{name:"p",components:a},"Lesson learned — setting nil isn’t a good way to clear a UserDefaults value. Instead, just use the recommended approach:"),s.a.createElement(m.MDXTag,{name:"pre",components:a},s.a.createElement(m.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-swift",metaString:""}},'UserDefaults.standard.removeObject(forKey: "myKey")\n')))};var l={}}}]);
//# sourceMappingURL=component---src-pages-blog-userdefaults-set-nil-mdx-97a075669e3aa6381eff.js.map