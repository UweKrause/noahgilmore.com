(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{i0MM:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return l}));n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP"),n("q1tI");var a=n("E/Ix"),o=n("1zrH");var r={},s={_frontmatter:r},i=o.a;function l(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(i,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For some reason lately, I've been having a lot of trouble installing apps and running tests in the iOS simulator on Xcode 10 (non-beta). The error message looks like this:"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Failed to install the requested application")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The application's CFBundleVersion is invalid")),Object(a.b)("p",null,"To be completely honest, I'm not super sure what causes this error, but it might be related to the fact that I'm using non-semver version numbers (they include a sub-patch number) and ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://forums.developer.apple.com/thread/117322"}),"the Xcode 11 simulator treats CFBundleVersion numbers differently"),". For what it's worth, this started happening when installing the Xcode 11 beta and running it in parallel with Xcode 10."),Object(a.b)("p",null,"Anyways, the magic fix is to kill CoreSimulatorBridge: in 99% of cases, this has fixed the error for me! 🎉"),Object(a.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":""},Object(a.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(a.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"killall -9 CoreSimulatorBridge"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: in a few instances, I've had this not work. Usually, erasing the simulator (Hardware > Erase All Content And Settings) then killing the CoreSimulatorBridge again seems to help.")),Object(a.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n"))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-cfbundleversion-invalid-mdx-eb079584e13170f7d5e5.js.map