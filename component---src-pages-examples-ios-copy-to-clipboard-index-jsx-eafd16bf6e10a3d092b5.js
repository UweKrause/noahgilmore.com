(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{XGiR:function(e,t,n){"use strict";n.r(t);n("OG14"),n("jm62"),n("ioFf"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("Z2Ku"),n("L9s1");var r=n("q1tI"),o=n.n(r),i=n("vOnD"),a=n("0b+E");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var u=i.c.div.withConfig({displayName:"ios-copy-to-clipboard__Container",componentId:"sc-15wqtpv-0"})(["width:960px;height:100vh;margin:0 auto;"]),l=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.handleOnClick=function(){var e,t=document.createElement("input"),n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({timestamp:Date.now()},this.props.data),r=JSON.stringify(n),o=btoa(r);e=this.props.href.includes("?")?"&ed="+o:"?ed="+o,t.value=this.props.href+e,t.style="position: absolute; opacity: 0.0",document.body.appendChild(t),function(e){var t=e.contentEditable,n=e.readOnly,r=document.createRange();e.contentEditable=!0,e.readOnly=!1,r.selectNodeContents(e);var o=window.getSelection();o.removeAllRanges(),o.addRange(r),e.setSelectionRange(0,999999),e.contentEditable=t,e.readOnly=n,document.execCommand("copy")}(t)},n.render=function(){return o.a.createElement("a",{href:this.props.href,onClick:this.handleOnClick.bind(this)},this.props.children)},t}(o.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}s(t,e);var n=t.prototype;return n.render=function(){return o.a.createElement(u,null,o.a.createElement(l,{data:{referrer:"pasteboard-blog-post"},href:"https://itunes.apple.com/us/app/trestle-the-new-sudoku/id1300230302?mt=8"},"This is the link"))},n.componentDidMount=function(){a.a.initialize("UA-35325391-1"),a.a.pageview(window.location.pathname+window.location.search)},t}(o.a.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-examples-ios-copy-to-clipboard-index-jsx-eafd16bf6e10a3d092b5.js.map