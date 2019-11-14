(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return c});var n=a(157),o=a.n(n),r=a(0),i=a.n(r),l=a(159),p=a(160),m=a(176);t.default=function(e){var t=e.components,a=o()(e,["components"]);return i.a.createElement(l.MDXTag,{name:"wrapper",Layout:p.a,layoutProps:a,components:t},i.a.createElement(l.MDXTag,{name:"p",components:t},"After struggling for some time with ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://developer.apple.com/documentation/coreimage/cifilter"}},"CIFilter")," documentation at work, I've been ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://twitter.com/noahsark769/status/1080580341973348352"}},"working on an app")," which can apply filters interactively for various inputs (another blog post to come on this later). As part of this app, I needed a UI for the user to select a color, and decided to implement a color wheel."),i.a.createElement(l.MDXTag,{name:"p",components:t},"There are several open source projects implementing color wheels on iOS, and StackOverflow has a ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://stackoverflow.com/questions/5108921/how-to-draw-a-color-wheel-in-objective-c"}},"few answers")," which mostly recommend drawing the color wheel image yourself by iterating over the ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/HSL_and_HSV"}},"Hue-Saturation-Lightness")," color representation. However, I managed to find ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://www.chibicode.org/?p=62"}},"this post")," about new CIFilters in iOS 10, which included a description of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CIHueSaturationValueGradient"),", and realized we can use this filter to generate a color wheel much more easily."),i.a.createElement(l.MDXTag,{name:"h2",components:t},"CoreImage Has Color Wheels Built In"),i.a.createElement(l.MDXTag,{name:"p",components:t},"The description of ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CIHueSaturationValueGradient")," is:"),i.a.createElement(l.MDXTag,{name:"blockquote",components:t},i.a.createElement(l.MDXTag,{name:"p",components:t,parentName:"blockquote"},"Generates a color wheel that shows hues and saturations for a specified value.")),i.a.createElement(l.MDXTag,{name:"p",components:t},"For a given value of lightness (0 is dark, 1 is light), this filter's output image will be a wheel of all the hues and saturations for that lightness in a given color space. Code that looks like this:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},'let filter = CIFilter(name: "CIHueSaturationValueGradient", parameters: [\n    "inputColorSpace": CGColorSpaceCreateDeviceRGB(),\n    "inputDither": 0,\n    "inputRadius": 160,\n    "inputSoftness": 0,\n    "inputValue": 1\n])!\nlet image = UIImage(ciImage: filter.outputImage!)\n')),i.a.createElement(l.MDXTag,{name:"p",components:t},"Generates an output image that looks like this:"),i.a.createElement(m.a,{filename:"cifilter-colorwheel-1.png",alt:"Color wheel",caption:""}),i.a.createElement(l.MDXTag,{name:"h2",components:t},"Details"),i.a.createElement(l.MDXTag,{name:"p",components:t},"The filter takes five parameters:"),i.a.createElement(l.MDXTag,{name:"p",components:t},i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputColorSpace"),": This is a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CGColorSpaceRef")," representing the color space in which to generate the wheel. Generally, you're going to want to use ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"CGColorSpaceCreateDeviceRGB()")," for this, which will generate a wheel in the current device's color space."),i.a.createElement(l.MDXTag,{name:"p",components:t},i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputDither"),": The amount of ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Dither"}},"dither")," to apply to the wheel. I'm not exactly sure what this is useful for, but it can be fun to play around with. I also don't really know the units of this value, but I think it's pixels (if you can confirm, ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://twitter.com/noahsark769"}},"let me know"),"). For example, here's a color wheel with ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputDither")," as 300:"),i.a.createElement(m.a,{filename:"cifilter-colorwheel-2.png",alt:"Color wheel with dither",caption:""}),i.a.createElement(l.MDXTag,{name:"p",components:t},i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputRadius"),": The value, ",i.a.createElement(l.MDXTag,{name:"em",components:t,parentName:"p"},"in points"),", of the radius of the wheel. A radius of 160 creates an image which is 320x320 points square (640x640 pixels on a device with 2x screen scale)."),i.a.createElement(l.MDXTag,{name:"p",components:t},i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputSoftness"),": Specifies a softness value to smooth the gradient. A value of 0 means no smoothing, which is probably what you want for a color wheel. I'm also pretty sure the units here are pixels. Here's a color wheel with ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputSoftness")," as 4:"),i.a.createElement(m.a,{filename:"cifilter-colorwheel-3.png",alt:"Color wheel",caption:""}),i.a.createElement(l.MDXTag,{name:"p",components:t},i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputValue"),": The lightness value. 0 creates a black wheel, 1 means full lightness. Here's a color wheel with ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inputValue")," as 0.5:"),i.a.createElement(m.a,{filename:"cifilter-colorwheel-4.png",alt:"Color wheel",caption:""}),i.a.createElement(l.MDXTag,{name:"h2",components:t},"Getting The Color On Touch"),i.a.createElement(l.MDXTag,{name:"p",components:t},"I still needed to actually let the user select a color from the color wheel. Turns out there are tons of people online talking about how to get the color at a given touch location for a ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"UIImageView"),". I ended up going with ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://stackoverflow.com/questions/12770181/how-to-get-the-pixel-color-on-touch"}},"this one")," which translated pretty well into an extension:"),i.a.createElement(l.MDXTag,{name:"pre",components:t},i.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-swift",metaString:""}},"extension UIImageView {\n    func getPixelColorAt(point: CGPoint) -> UIColor {\n        let pixel = UnsafeMutablePointer<CUnsignedChar>.allocate(capacity: 4)\n        let colorSpace = CGColorSpaceCreateDeviceRGB()\n        let bitmapInfo = CGBitmapInfo(rawValue: CGImageAlphaInfo.premultipliedLast.rawValue)\n        let context = CGContext(\n            data: pixel,\n            width: 1,\n            height: 1,\n            bitsPerComponent: 8,\n            bytesPerRow: 4,\n            space: colorSpace,\n            bitmapInfo: bitmapInfo.rawValue\n        )\n\n        context!.translateBy(x: -point.x, y: -point.y)\n        layer.render(in: context!)\n        let color = UIColor(\n            red: CGFloat(pixel[0]) / 255.0,\n            green: CGFloat(pixel[1]) / 255.0,\n            blue: CGFloat(pixel[2]) / 255.0,\n            alpha: CGFloat(pixel[3]) / 255.0\n        )\n\n        pixel.deallocate()\n        return color\n    }\n}\n")),i.a.createElement(l.MDXTag,{name:"h2",components:t},"End Result"),i.a.createElement(l.MDXTag,{name:"p",components:t},"It ended up ",i.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://twitter.com/noahsark769/status/1087511576871981056"}},"working pretty well"),"! Adding a gesture recognizer to the imageView which calls ",i.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"getPixelColorAt(point:)")," allows us to easily determine the color that the user picked and render a simple UI to show the selected color:"),i.a.createElement(m.a,{filename:"cifilter-colorwheel-5.png",alt:"Color wheel",caption:""}),i.a.createElement(l.MDXTag,{name:"p",components:t},"All in all, this was a great exercise in figuring out the least complicated way to implement a complicated UI component, and I continue to learn about all the awesome stuff that CoreImage comes with out of the box (not just color wheels, but photo effects, blurs, distortions, etc)."),i.a.createElement(l.MDXTag,{name:"p",components:t},"More on CIFilters soon to come! 👋"))};var c={}},176:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(7),o=a.n(n),r=a(0),i=a.n(r),l=a(154),p=a(183),m=l.c.div.withConfig({displayName:"CaptionedImage__Container",componentId:"ceijyq-0"})(["margin:20px 0;"]),c=l.c.div.withConfig({displayName:"CaptionedImage__Caption",componentId:"ceijyq-1"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;margin-bottom:30px;img{width:100%;margin-bottom:10px;}']),s=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return i.a.createElement(m,null,i.a.createElement(p.a,{filename:this.props.filename,alt:this.props.alt}),i.a.createElement(c,null,this.props.caption))},t}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-blog-cifilter-colorwheel-mdx-6f4c455e3ebeb83af19e.js.map