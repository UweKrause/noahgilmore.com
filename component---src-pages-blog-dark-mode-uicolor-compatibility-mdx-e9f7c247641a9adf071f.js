(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",function(){return s}),n.d(t,"default",function(){return d});n(11),n(12),n(6),n(19),n(21),n(0);var a=n(79),r=n(259),o=n(28),l=n(67),i=n(144);var s={},c={_frontmatter:s},p=r.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(p,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Update (6/13/2019): The original version of this post featured the wrong colors in the ColorCompatibility enum at the end of the post. This has now been fixed.")),Object(a.b)("p",null,"At WWDC 2019, Apple announced that Dark Mode would be supported on iOS 13. There are some significant changes to UIKit in order to support this - many of them are detailed in the talk ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://developer.apple.com/videos/play/wwdc2019/214/"}),"Implementing Dark Mode on iOS")," which I'd highly recommend watching."),Object(a.b)("p",null,"One of the changes that makes adopting Dark Mode so easy is the new system colors API from ",Object(a.b)("inlineCode",{parentName:"p"},"UIColor"),". On iOS 12 and older, you might have a label you want to make black, and it would work just fine - in fact, black was the default color for ",Object(a.b)("inlineCode",{parentName:"p"},"UILabel"),"s."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"label.textColor = UIColor.black\n")),Object(a.b)("p",null,"But in Dark Mode, the background will also be black, which means the text won't be visible. In iOS 13+, it's better to use the new system color which will respect the user's color scheme preference:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"label.textColor = UIColor.label\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"label")," is only one example: there are 36 new color scheme agnostic ",Object(a.b)("inlineCode",{parentName:"p"},"UIColor"),"s available in iOS 13+, organized into two groups:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors"}),"Element Colors")," (e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"label"),")"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object.assign({parentName:"li"},{href:"https://developer.apple.com/documentation/uikit/uicolor/standard_colors"}),"Standard Colors")," (",Object(a.b)("inlineCode",{parentName:"li"},"systemBlue"),", ",Object(a.b)("inlineCode",{parentName:"li"},"systemGray3"),", etc).")),Object(a.b)("p",null,"(Skip to the bottom if you'd like to see a list of the new colors.)"),Object(a.b)("h2",null,"Compatibility"),Object(a.b)("p",null,"These new colors are all well and good, but most of us with existing apps will still be supporting devices with iOS 12 or lower, at least for a while. This means we'll probably be doing a lot of things like this, using ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://docs.swift.org/swift-book/ReferenceManual/Attributes.html"}),"Swift's #available syntax"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"if #available(iOS 13, *) {\n    label.textColor = .label\n} else {\n    label.textColor = .black\n}\n")),Object(a.b)("p",null,"It's a workable solution, but it necessitates changing a lot of code - an ",Object(a.b)("inlineCode",{parentName:"p"},"if")," statement for every custom label or background color! For ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/blog/cifilterio"}),"CIFilter.io"),", I wondered if there was a better way. What if, instead of the ",Object(a.b)("inlineCode",{parentName:"p"},"if #available"),", there was a way to abstract the color choice down one level, so we could do something like this?"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"label.textColor = ColorCompatibility.label\n")),Object(a.b)("h2",null,"Generating system colors"),Object(a.b)("p",null,"I wrote a ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSystemColorComparison"}),"small app")," (with SwiftUI, no less!) which displays all the system colors in the current color scheme."),Object(a.b)(l.a,{columns:2,mdxType:"FlowGrid"},Object(a.b)(o.a,{max:300,filename:"systemcolors-light.png",alt:"System colors (light mode)",caption:"Light mode",mdxType:"CaptionedImage"}),Object(a.b)(o.a,{max:300,filename:"systemcolors-dark.png",alt:"System colors (dark mode)",caption:"Dark mode",mdxType:"CaptionedImage"})),Object(a.b)("p",null,"This app collects all the ",Object(a.b)("inlineCode",{parentName:"p"},"UIColor")," objects - once we have those, we can use their red/green/blue/alpha components to ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/noahsark769/NGSystemColorComparison/blob/master/NGSystemColorComparison/SystemColors.swift#L102"}),"generate the implementation")," of ",Object(a.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," that we want:"),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"enum ColorCompatibility {\n    static var label: UIColor {\n        if #available(iOS 13, *) {\n            return .label\n        }\n        return UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)\n    }\n\n    static var secondaryLabel: UIColor {\n        if #available(iOS 13, *) {\n            return .secondaryLabel\n        }\n        return UIColor(red: 0.9215686274509803, green: 0.9215686274509803, blue: 0.9607843137254902, alpha: 0.6)\n    }\n\n    // ... 34 more definitions: full code at the bottom of this post\n}\n")),Object(a.b)("p",null,"We can then use ",Object(a.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," it to set any colors we need."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: we can't use ",Object(a.b)("inlineCode",{parentName:"p"},"@available")," for these checks, since it doesn't provide a way to check if the current environment is ",Object(a.b)("em",{parentName:"p"},"less")," than a specific app version.")),Object(a.b)("h2",null,"Conclusion"),Object(a.b)("p",null,"This approach has some great advantages:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"This code will compile on iOS 13+, iOS 12 and earlier, and UIKitForMac ✅"),Object(a.b)("li",{parentName:"ol"},"Since everything is a computed ",Object(a.b)("inlineCode",{parentName:"li"},"var"),", we never pre-store colors, which means that when the user switches color scheme, our app will automatically adapt as the trait collection changes 👍"),Object(a.b)("li",{parentName:"ol"},"When we drop iOS 12 support, cleaning this up will be as simple as replacing every instance of ",Object(a.b)("inlineCode",{parentName:"li"},"ColorCompatibility")," with ",Object(a.b)("inlineCode",{parentName:"li"},"UIColor")," 🎉")),Object(a.b)("p",null,"Hopefully this makes your app's transition to dark mode easier!"),Object(a.b)("h2",null,"Table of system colors"),Object(a.b)("p",null,"For those interested in iOS 13+ system colors but not wanting (or not able) to compile the sample app, here's a list of the system colors in light and dark mode, with their hex codes and RGBA values:"),Object(a.b)(i.a,{mdxType:"IOS13SystemColorTable"}),Object(a.b)("h2",null,"ColorCompatibility full code"),Object(a.b)("p",null,"Here's the full, generated implementation of ",Object(a.b)("inlineCode",{parentName:"p"},"ColorCompatibility")," - this will be used by ",Object(a.b)("a",Object.assign({parentName:"p"},{href:"/blog/cifilterio"}),"CIFilter.io")," when iOS 13 is out of beta."),Object(a.b)("pre",null,Object(a.b)("code",Object.assign({parentName:"pre"},{className:"language-swift"}),"enum ColorCompatibility {\n    static var label: UIColor {\n        if #available(iOS 13, *) {\n            return .label\n        }\n        return UIColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 1.0)\n    }\n    static var secondaryLabel: UIColor {\n        if #available(iOS 13, *) {\n            return .secondaryLabel\n        }\n        return UIColor(red: 0.23529411764705882, green: 0.23529411764705882, blue: 0.2627450980392157, alpha: 0.6)\n    }\n    static var tertiaryLabel: UIColor {\n        if #available(iOS 13, *) {\n            return .tertiaryLabel\n        }\n        return UIColor(red: 0.23529411764705882, green: 0.23529411764705882, blue: 0.2627450980392157, alpha: 0.3)\n    }\n    static var quaternaryLabel: UIColor {\n        if #available(iOS 13, *) {\n            return .quaternaryLabel\n        }\n        return UIColor(red: 0.23529411764705882, green: 0.23529411764705882, blue: 0.2627450980392157, alpha: 0.18)\n    }\n    static var systemFill: UIColor {\n        if #available(iOS 13, *) {\n            return .systemFill\n        }\n        return UIColor(red: 0.47058823529411764, green: 0.47058823529411764, blue: 0.5019607843137255, alpha: 0.2)\n    }\n    static var secondarySystemFill: UIColor {\n        if #available(iOS 13, *) {\n            return .secondarySystemFill\n        }\n        return UIColor(red: 0.47058823529411764, green: 0.47058823529411764, blue: 0.5019607843137255, alpha: 0.16)\n    }\n    static var tertiarySystemFill: UIColor {\n        if #available(iOS 13, *) {\n            return .tertiarySystemFill\n        }\n        return UIColor(red: 0.4627450980392157, green: 0.4627450980392157, blue: 0.5019607843137255, alpha: 0.12)\n    }\n    static var quaternarySystemFill: UIColor {\n        if #available(iOS 13, *) {\n            return .quaternarySystemFill\n        }\n        return UIColor(red: 0.4549019607843137, green: 0.4549019607843137, blue: 0.5019607843137255, alpha: 0.08)\n    }\n    static var placeholderText: UIColor {\n        if #available(iOS 13, *) {\n            return .placeholderText\n        }\n        return UIColor(red: 0.23529411764705882, green: 0.23529411764705882, blue: 0.2627450980392157, alpha: 0.3)\n    }\n    static var systemBackground: UIColor {\n        if #available(iOS 13, *) {\n            return .systemBackground\n        }\n        return UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)\n    }\n    static var secondarySystemBackground: UIColor {\n        if #available(iOS 13, *) {\n            return .secondarySystemBackground\n        }\n        return UIColor(red: 0.9490196078431372, green: 0.9490196078431372, blue: 0.9686274509803922, alpha: 1.0)\n    }\n    static var tertiarySystemBackground: UIColor {\n        if #available(iOS 13, *) {\n            return .tertiarySystemBackground\n        }\n        return UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)\n    }\n    static var systemGroupedBackground: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGroupedBackground\n        }\n        return UIColor(red: 0.9490196078431372, green: 0.9490196078431372, blue: 0.9686274509803922, alpha: 1.0)\n    }\n    static var secondarySystemGroupedBackground: UIColor {\n        if #available(iOS 13, *) {\n            return .secondarySystemGroupedBackground\n        }\n        return UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 1.0)\n    }\n    static var tertiarySystemGroupedBackground: UIColor {\n        if #available(iOS 13, *) {\n            return .tertiarySystemGroupedBackground\n        }\n        return UIColor(red: 0.9490196078431372, green: 0.9490196078431372, blue: 0.9686274509803922, alpha: 1.0)\n    }\n    static var separator: UIColor {\n        if #available(iOS 13, *) {\n            return .separator\n        }\n        return UIColor(red: 0.23529411764705882, green: 0.23529411764705882, blue: 0.2627450980392157, alpha: 0.29)\n    }\n    static var opaqueSeparator: UIColor {\n        if #available(iOS 13, *) {\n            return .opaqueSeparator\n        }\n        return UIColor(red: 0.7764705882352941, green: 0.7764705882352941, blue: 0.7843137254901961, alpha: 1.0)\n    }\n    static var link: UIColor {\n        if #available(iOS 13, *) {\n            return .link\n        }\n        return UIColor(red: 0.0, green: 0.47843137254901963, blue: 1.0, alpha: 1.0)\n    }\n    static var darkText: UIColor {\n        if #available(iOS 13, *) {\n            return .darkText\n        }\n        return UIColor(red: 0.0, green: 0.0, blue: 0.0, alpha: 1.0)\n    }\n    static var lightText: UIColor {\n        if #available(iOS 13, *) {\n            return .lightText\n        }\n        return UIColor(red: 1.0, green: 1.0, blue: 1.0, alpha: 0.6)\n    }\n    static var systemBlue: UIColor {\n        if #available(iOS 13, *) {\n            return .systemBlue\n        }\n        return UIColor(red: 0.0, green: 0.47843137254901963, blue: 1.0, alpha: 1.0)\n    }\n    static var systemBrown: UIColor {\n        if #available(iOS 13, *) {\n            return .systemBrown\n        }\n        return UIColor(red: 0.6352941176470588, green: 0.5176470588235295, blue: 0.3686274509803922, alpha: 1.0)\n    }\n    static var systemGreen: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGreen\n        }\n        return UIColor(red: 0.20392156862745098, green: 0.7803921568627451, blue: 0.34901960784313724, alpha: 1.0)\n    }\n    static var systemIndigo: UIColor {\n        if #available(iOS 13, *) {\n            return .systemIndigo\n        }\n        return UIColor(red: 0.34509803921568627, green: 0.33725490196078434, blue: 0.8392156862745098, alpha: 1.0)\n    }\n    static var systemOrange: UIColor {\n        if #available(iOS 13, *) {\n            return .systemOrange\n        }\n        return UIColor(red: 1.0, green: 0.5843137254901961, blue: 0.0, alpha: 1.0)\n    }\n    static var systemPink: UIColor {\n        if #available(iOS 13, *) {\n            return .systemPink\n        }\n        return UIColor(red: 1.0, green: 0.17647058823529413, blue: 0.3333333333333333, alpha: 1.0)\n    }\n    static var systemPurple: UIColor {\n        if #available(iOS 13, *) {\n            return .systemPurple\n        }\n        return UIColor(red: 0.6862745098039216, green: 0.3215686274509804, blue: 0.8705882352941177, alpha: 1.0)\n    }\n    static var systemRed: UIColor {\n        if #available(iOS 13, *) {\n            return .systemRed\n        }\n        return UIColor(red: 1.0, green: 0.23137254901960785, blue: 0.18823529411764706, alpha: 1.0)\n    }\n    static var systemTeal: UIColor {\n        if #available(iOS 13, *) {\n            return .systemTeal\n        }\n        return UIColor(red: 0.35294117647058826, green: 0.7843137254901961, blue: 0.9803921568627451, alpha: 1.0)\n    }\n    static var systemYellow: UIColor {\n        if #available(iOS 13, *) {\n            return .systemYellow\n        }\n        return UIColor(red: 1.0, green: 0.8, blue: 0.0, alpha: 1.0)\n    }\n    static var systemGray: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGray\n        }\n        return UIColor(red: 0.5568627450980392, green: 0.5568627450980392, blue: 0.5764705882352941, alpha: 1.0)\n    }\n    static var systemGray2: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGray2\n        }\n        return UIColor(red: 0.6823529411764706, green: 0.6823529411764706, blue: 0.6980392156862745, alpha: 1.0)\n    }\n    static var systemGray3: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGray3\n        }\n        return UIColor(red: 0.7803921568627451, green: 0.7803921568627451, blue: 0.8, alpha: 1.0)\n    }\n    static var systemGray4: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGray4\n        }\n        return UIColor(red: 0.8196078431372549, green: 0.8196078431372549, blue: 0.8392156862745098, alpha: 1.0)\n    }\n    static var systemGray5: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGray5\n        }\n        return UIColor(red: 0.8980392156862745, green: 0.8980392156862745, blue: 0.9176470588235294, alpha: 1.0)\n    }\n    static var systemGray6: UIColor {\n        if #available(iOS 13, *) {\n            return .systemGray6\n        }\n        return UIColor(red: 0.9490196078431372, green: 0.9490196078431372, blue: 0.9686274509803922, alpha: 1.0)\n    }\n}\n")))}d.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"c",function(){return u}),n.d(t,"b",function(){return b}),n.d(t,"f",function(){return f}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return g}),n.d(t,"a",function(){return y});var a=n(10),r=n(249),o=n.n(r),l=n(250),i=n.n(l),s=n(251),c=n.n(s),p=n(252),d=n.n(p);function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    @font-face {\n        font-family: 'Bariol';\n        src: url('","');\n        src: url('","?#iefix') format('embedded-opentype'),\n             url('","') format('woff'),\n             url('","') format('truetype'),\n             url('","#svgBariolRegular') format('svg');\n    }\n\n    * {\n        box-sizing: border-box !important;\n    }\n\n    body {\n        margin: 0;\n        padding: 0;\n    }\n"]);return m=function(){return e},e}var u=Object(a.a)(m(),o.a,o.a,i.a,c.a,d.a),b=a.c.div.withConfig({displayName:"default__Div",componentId:"d4l1a1-0"})([""]),f=(a.c.nav.withConfig({displayName:"default__Nav",componentId:"d4l1a1-1"})([""]),a.c.ul.withConfig({displayName:"default__UL",componentId:"d4l1a1-2"})(["margin:0;padding:0;"])),h=a.c.li.withConfig({displayName:"default__LI",componentId:"d4l1a1-3"})(["margin:0;padding:0;"]),g=a.c.p.withConfig({displayName:"default__P",componentId:"d4l1a1-4"})(["margin:0;padding:0;"]),y=a.c.a.withConfig({displayName:"default__A",componentId:"d4l1a1-5"})(["&,&:hover,&:focus{outline:none;color:inherit;text-decoration:none;}"])},247:function(e,t,n){"use strict";n.d(t,"a",function(){return a}),n.d(t,"b",function(){return r});var a="rgba(128, 165, 177, 1)",r="rgba(151, 195, 210, 1)"},249:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-b0d07df351f442860551405a4be58de7.eot"},250:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-4afd94f0fd93a1f63b46c6c6ad792f71.woff"},251:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-8a7d23d53f8d118e190c63e4e81a91fe.ttf"},252:function(e,t,n){e.exports=n.p+"static/Bariol-Regular-75b90056f4cdf5a742897ec0a59569d7.svg"},253:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(246),l=n(247),i=n(10),s=n(257),c=n(258),p=i.c.nav.withConfig({displayName:"Nav__StyledNav",componentId:"sc-1cm9dpf-0"})(["display:flex;flex-direction:row;flex-wrap:wrap;padding:20px 60px;border-bottom:1px solid #ddd;@media all and (max-width:600px){padding:20px;}@media (prefers-color-scheme:dark){border-color:#777;}"]),d=i.c.div.withConfig({displayName:"Nav__Title",componentId:"sc-1cm9dpf-1"})(['flex:2;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:28px;font-display:swap;@media (prefers-color-scheme:dark){color:#fff;}']),m=Object(i.c)(o.f).withConfig({displayName:"Nav__NavLinks",componentId:"sc-1cm9dpf-2"})(["flex:10;display:flex;flex-direction:horizontal;flex-wrap:wrap;justify-content:flex-end;height:100%;align-self:center;"]),u=Object(i.c)(o.d).withConfig({displayName:"Nav__NavLink",componentId:"sc-1cm9dpf-3"})(['display:flex;flex-direction:vertical;align-items:center;text-align:center;font-family:"Bariol","Helvetica Neue","Helvetica",sans-serif;font-size:16px;padding:0px 20px;']),b=Object(i.c)(o.a).withConfig({displayName:"Nav__StyledA",componentId:"sc-1cm9dpf-4"})(["height:auto;color:",";display:flex;flex-direction:vertical;align-items:center;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{color:",";}"],l.a,l.b);t.a=function(e){return r.a.createElement(p,null,r.a.createElement(d,null,r.a.createElement(b,{href:e.blog?"/blog":"/"},"NOAH GILMORE")),r.a.createElement(m,null,r.a.createElement(u,null,r.a.createElement(b,{"aria-label":"Blog Home",href:"/blog"},r.a.createElement(s.b,{color:l.a,size:"24"}))),r.a.createElement(u,null,r.a.createElement(b,{"aria-label":"Twitter",href:"https://twitter.com/noahsark769"},r.a.createElement(c.a,{color:l.a,size:"24"}))),r.a.createElement(u,null,r.a.createElement(b,{"aria-label":"App Store",href:"https://appstore.com/trestle"},r.a.createElement(s.a,{color:l.a,size:"24"})))))}},254:function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),o=n(10),l=n(248);var i=o.c.div.withConfig({displayName:"BlogPost__BlogPostContainer",componentId:"gyfnna-0"})(["padding:60px 0;margin:0 auto;width:90%;@media all and (min-width:600px){max-width:700px;margin:auto;}@media all and (max-width:600px){width:100%;padding:20px 0;","}"],function(e){return e.darkened&&Object(o.b)(["background-color:#f6f6f6;@media (prefers-color-scheme:dark){background-color:inherit;}"])}),s=o.c.div.withConfig({displayName:"BlogPost__TitleContainer",componentId:"gyfnna-1"})(["width:100%;margin-bottom:40px;"]),c=o.c.h1.withConfig({displayName:"BlogPost__Heading",componentId:"gyfnna-2"})(['width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;font-size:34px;margin-bottom:10px;line-height:1.2em;@media (prefers-color-scheme:dark){color:#fff;}']),p=o.c.p.withConfig({displayName:"BlogPost__DateContainer",componentId:"gyfnna-3"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;']),d=function(e){return r.a.createElement("div",null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,e.title)),r.a.createElement(s,null,r.a.createElement(c,null,e.title),r.a.createElement(p,null,e.date)))};r.a.Component},255:function(e,t,n){"use strict";n.d(t,"a",function(){return s});var a=n(0),r=n.n(a),o=n(50),l=n.n(o);var i=n(10).c.div.withConfig({displayName:"MarkdownContent__Container",componentId:"zl3v0s-0"})(['p,li{margin:0;padding:0;font-family:"Gentium Book Basic",times,serif;font-size:21px;line-height:29px;color:#333;padding-bottom:15px;margin-top:15px;@media all and (max-width:600px){width:90%;margin:15px auto 0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}blockquote{background-color:#faf9f7;border-left:4px solid #e5e4e1;padding:20px;font-style:italic;@media (prefers-color-scheme:dark){background-color:#3f3f3f;}p{margin:0;padding:0;color:#555;@media (prefers-color-scheme:dark){color:#fff;}}}a{color:#1A3F4B;-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;@media (prefers-color-scheme:dark){color:#60b5d1;}}a:hover{color:#47656E;@media (prefers-color-scheme:dark){color:#6bcfef;}}code{font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:not(pre code){font-family:monospace;font-size:16px;background-color:#faf9f7;border:1px solid #e5e4e1;padding:3px 5px;margin:0px 2px;color:#555;@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}code:first-child{margin-left:0;}pre{display:block;margin:0;padding:0;background:none;@media all and (max-width:600px){width:100%;margin:0 auto;}}pre > code{display:block;margin:0;padding:0;border:1px solid #e5e4e1;border-radius:2px;padding:10px;margin-top:10px;font-family:monospace;font-size:14px;line-height:17px;white-space:pre-wrap;@media all and (max-width:600px){font-size:15px;white-space:pre;border-left:none;border-right:none;padding:15px 5% 15px 5%;width:100%;}}pre > code.language-nohighlight{@media (prefers-color-scheme:dark){color:#fff;background-color:#3f3f3f;}}pre + p{margin-top:30px;}ol{margin-left:30px;@media all and (max-width:600px){width:90%;margin:0 auto 0 30px;}@media (prefers-color-scheme:dark){color:#fff;}}ol li{list-style-type:decimal;}ul li{list-style-type:square;margin-left:40px;@media all and (max-width:600px){width:90%;margin:0 auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1,h2,h3,h4,h5,h6{width:100%;font-family:"Roboto","Helvetica Neue","Helvetica",sans-serif;margin-bottom:10px;margin-top:40px;@media all and (max-width:600px){width:90%;margin:40px auto 10px auto;}@media (prefers-color-scheme:dark){color:#fff;}}h1{font-size:28px;}h2{font-size:24px;}h3{font-size:20px;}em{font-style:italic;}strong{font-weight:bold;}']),s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.render=function(){return r.a.createElement(i,null,this.props.children)},o.componentDidMount=function(){for(var e=l.a.findDOMNode(this).querySelectorAll("pre code"),t=0;t<e.length;t++)window.hljs&&window.hljs.highlightBlock(e[t])},a}(r.a.Component)},256:function(e,t,n){"use strict";function a(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}n.d(t,"a",function(){return a})},259:function(e,t,n){"use strict";n(157);var a=n(0),r=n.n(a),o=n(248),l=n(246),i=n(253),s=n(10),c=n(257),p=n(258),d=n(247);var m=s.c.div.withConfig({displayName:"EndButtons__Container",componentId:"sc-2ta1su-0"})(["width:100%;display:flex;flex-direction:horizontal;align-items:center;justify-content:center;margin-top:40px;"]),u=s.c.div.withConfig({displayName:"EndButtons__ButtonStyle",componentId:"sc-2ta1su-1"})(["background-color:",";-webkit-transition:0.2s ease-in-out;-moz-transition:0.2s ease-in-out;-o-transition:0.2s ease-in-out;transition:0.2s ease-in-out;&:hover{background-color:",";}width:100px;padding:10px 20px;text-align:center;display:flex;flex-direction:vertical;align-items:center;justify-content:center;border-radius:4px;",";"],d.a,d.b,function(e){return e.margin&&Object(s.b)(["margin-right:20px;"])}),b=function(e){return r.a.createElement(l.a,{href:e.url,target:e.newTab?"_blank":null,"aria-label":e.label},r.a.createElement(u,{margin:e.margin},e.children))},f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e,t=(e="Post by @noahsark769: "+this.props.tweetTitle+" "+this.props.tweetUrl,"https://twitter.com/intent/tweet?text="+encodeURIComponent(e));return r.a.createElement(m,null,r.a.createElement(b,{label:"Twitter",url:t,newTab:!0,margin:!0},r.a.createElement(p.a,{size:24,color:"white"})),r.a.createElement(b,{label:"Blog homepage",url:"/blog"},r.a.createElement(c.b,{size:24,color:"white"})))},a}(r.a.Component),h=n(254),g=n(255),y=n(256);var C=s.c.div.withConfig({displayName:"Disqus__Wrapper",componentId:"sc-1jjeqqj-0"})(["margin-top:80px;"]),w=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.render=function(){return r.a.createElement(C,null,r.a.createElement("div",{id:"disqus_thread"}))},o.componentDidMount=function(){var e,t;e=document,(t=e.createElement("script")).src="//noahgilmore-com.disqus.com/embed.js",t.setAttribute("data-timestamp",+new Date),(e.head||e.body).appendChild(t)},a}(r.a.Component),v=n(260),O=n.n(v);n.d(t,"a",function(){return j});var x=s.c.div.withConfig({displayName:"BlogPageLayout__Container",componentId:"sc-118ribu-0"})(["@media (prefers-color-scheme:dark){background-color:#2b2c2f;}"]),I=s.c.div.withConfig({displayName:"BlogPageLayout__NonContent",componentId:"sc-118ribu-1"})(["@media all and (max-width:600px){padding-right:5%;padding-left:5%;}"]),j=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=a.prototype;return s.render=function(){var e="undefined"!=typeof window&&window.matchMedia("(prefers-color-scheme: dark)").matches;return r.a.createElement(x,null,r.a.createElement(l.c,null),r.a.createElement(o.Helmet,null,r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:700",rel:"stylesheet",type:"text/css"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Gentium+Book+Basic",rel:"stylesheet"}),!e&&r.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/atom-one-light.min.css"}),e&&r.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.0/styles/zenburn.min.css"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:creator",content:"@noahsark769"}),r.a.createElement("meta",{property:"og:url",content:"https://noahgilmore.com"+this.props.location.pathname}),r.a.createElement("meta",{property:"og:title",content:this.props.pageContext.frontmatter.title}),r.a.createElement("meta",{property:"og:description",content:this.props.pageContext.frontmatter.staticPreview}),r.a.createElement("meta",{name:"description",content:this.props.pageContext.frontmatter.staticPreview})),r.a.createElement(i.a,{blog:!0}),r.a.createElement(h.a,null,r.a.createElement(I,null,r.a.createElement(h.b,{title:this.props.pageContext.frontmatter.title,date:Object(y.a)(this.props.pageContext.frontmatter.date)})),r.a.createElement(g.a,null,this.props.children),r.a.createElement(I,null,r.a.createElement(f,{tweetTitle:this.props.pageContext.frontmatter.title,tweetUrl:"https://noahgilmore.com"+this.props.location.pathname}),r.a.createElement(w,null))))},s.componentDidMount=function(){O.a.initialize("UA-35325391-1"),O.a.pageview(window.location.pathname+window.location.search)},a}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-dark-mode-uicolor-compatibility-mdx-e9f7c247641a9adf071f.js.map