(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{bMaT:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return c})),s.d(e,"default",(function(){return m}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH");var c={},b={_frontmatter:c},p=n.a;function m(a){var e=a.components,s=function(a,e){if(null==a)return{};var s,t,n={},c=Object.keys(a);for(t=0;t<c.length;t++)s=c[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,["components"]);return Object(t.b)(p,Object.assign({},b,s,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"To clear a value from UserDefaults, I previously thought it was fine to do something like this:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"set"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(t.b)("p",null,"Turns out that this works differently in different iOS versions. Starting in iOS 11, setting nil for a key works as I expected and the following prints nil:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"set"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"))")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// nil")))),Object(t.b)("p",null,"However, in iOS 10, UserDefaults actually tries to serialize nil into a Data:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"set"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"))")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk3"}),"// 135 bytes")))),Object(t.b)("p",null,"If we look at this data, it seems like it might be a plist:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"String"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")!,")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"encoding"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": ."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"ascii")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"))")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'Optional("bplist00Ô\\u{01}\\u{02}\\u{03}\\u{04}\\u{05}\\u{08}\\n\\u{0B}T$topX$objectsX$versionY$archiverÑ\\u{06}\\u{07}Troot\\0¡\\tU$null\\u{12}\\0\\u{01} _\\u{10}\\u{0F}NSKeyedArchiver\\u{08}\\u{11}\\u{16}\\u{1F}(25:<>DI\\0\\0\\0\\0\\0\\0\\u{01}\\u{01}\\0\\0\\0\\0\\0\\0\\0\\u{0C}\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0\\0[")'))),Object(t.b)("p",null,"Turns out that we can use PropertyListSerialization to actually print the serialized value of nil:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," data = UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")!")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," propertyList = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"try"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"! PropertyListSerialization."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"propertyList"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": data,")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"options"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": [],")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"format"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"nil")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(propertyList)")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"{"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$archiver" = NSKeyedArchiver;'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$objects" =     ('),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'        "$null"'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"    );"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$top" =     {'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'        root = "<CFKeyedArchiverUID 0x79e7c420 [0xf126e8]>{value = 0}";'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"    };"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'    "$version" = 100000;'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"}"))),Object(t.b)("p",null,"For whatever reason, this was totally unexpected to me. It’s particularly tricky when you’re trying to interpret the value of a previously cleared UserDefaults key as JSON:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"if"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," data = UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"data"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"let"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," json = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"try"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"JSONDecoder"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"()."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"decode"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(MyClass.self, "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": data)")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(json)")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"} "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"else"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," {")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"No data found"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"}")))),Object(t.b)("p",null,"This will work just fine on iOS 11+, but throw an error on iOS 10."),Object(t.b)("p",null,"Here’s an ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/userdefaults-set-nil-example"}),"example project")," which demonstrates this behavior. I ended up finding one stackoverflow post about it, but as far as I can tell this isn’t documented anywhere. If you have any more info about it, ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://twitter.com/noahsark769"}),"let me know")," 👋"),Object(t.b)("p",null,"Lesson learned — setting nil isn’t a good way to clear a UserDefaults value. Instead, use the recommended approach:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"swift"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"UserDefaults."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"standard"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"."),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"removeObject"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"forKey"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),": "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"myKey"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-userdefaults-set-nil-mdx-1602988642011bc9b611.js.map