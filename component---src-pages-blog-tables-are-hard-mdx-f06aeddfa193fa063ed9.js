(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return i});var n=a(155),o=a.n(n),l=a(0),m=a.n(l),s=a(157),r=a(158);t.default=function(e){var t=e.components,a=o()(e,["components"]);return m.a.createElement(s.MDXTag,{name:"wrapper",Layout:r.a,layoutProps:a,components:t},m.a.createElement(s.MDXTag,{name:"p",components:t},"Let’s talk about HTML tables."),m.a.createElement(s.MDXTag,{name:"p",components:t},"Here’s some code:"),m.a.createElement(s.MDXTag,{name:"pre",components:t},m.a.createElement(s.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-html",metaString:""}},'<table class="main">\n  <colgroup><col class="votes"><col></colgroup>\n  <tr>\n    <td>Votes</td>\n    <td>Comments</td>\n  </tr>\n  <tr>\n    <td>\n      <p class="vote-desc">Some long name, really long, like really super long</p>\n      <p class="vote-desc">Another long name, really long</p>\n    </td>\n    <td>\n      <p class="comment">A really, really, really, really, really really really really really, really long comment.</p>\n    </td>\n  </tr>\n</table>\n')),m.a.createElement(s.MDXTag,{name:"p",components:t},"In this table, there are two main data cells: one with two vote descriptions and one with a comment. Assuming the outside of the table has a constrained width, what will be the widths of the two inner data cells? ",m.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://jsfiddle.net/R3AKT/1/"}},"Check out this jsfiddle"),". Now, ",m.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://jsfiddle.net/8vzRb/1/"}},"check it out with a longer comment"),"."),m.a.createElement(s.MDXTag,{name:"p",components:t},"When I came across this situation in a project I was working on, I expected the left column to set its own width based on the width of its content, and for the subsequent columns to do the same with the remaining space. But no! In chrome and firefox, the left cell is all squished up, but the crazier thing is that chrome and firefox ",m.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"p"},"squish it up differently"),"."),m.a.createElement(s.MDXTag,{name:"h2",components:t},"Non-normativity"),m.a.createElement(s.MDXTag,{name:"p",components:t},"It turns out that this part of the HTML specification is actually non-normative. It’s called the ",m.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://www.w3.org/TR/CSS21/tables.html#auto-table-layout"}},"automatic table layout algorithm"),". Basically, this applies to tables (elements with ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"display: table")," or ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"display: inline-table"),") with ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"table-layout: auto"),". ","[See end note.]"," From the spec:"),m.a.createElement(s.MDXTag,{name:"blockquote",components:t},m.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"blockquote"},'"UAs are not required to implement this algorithm to determine the table layout in the case that ‘table-layout’ is ‘auto’; they can use any other algorithm even if it results in different behavior.""')),m.a.createElement(s.MDXTag,{name:"p",components:t},"So, this is what really happens: the browser doesn’t know what to do when there are two columns that have to have automatically distributed width, so it makes its own decision."),m.a.createElement(s.MDXTag,{name:"h2",components:t},"What to do?"),m.a.createElement(s.MDXTag,{name:"p",components:t},"In order to control the actual width of columns in a table, we have a couple of options. Since, according to the spec, setting ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"table-layout: auto")," can have unpredictable results, we should use ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"table-layout: fixed")," if we’re not sure of the length of the content that will occupy the table cells."),m.a.createElement(s.MDXTag,{name:"p",components:t},"In this case, the browser will try to determine the width of the columns first by the widths of the column elements, second by the width of the cells in the first row of the column, and third by distributing total table width, if it is set, equally among columns (note that if it is not set, then the automatic table algorithm from above will be used, in some cases ","[see end note]","). This is called the fixed table layout algorithm."),m.a.createElement(s.MDXTag,{name:"p",components:t},m.a.createElement(s.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"http://jsfiddle.net/8vzRb/7/"}},"Here’s an example"),": much better!"),m.a.createElement(s.MDXTag,{name:"h2",components:t},"End note"),m.a.createElement(s.MDXTag,{name:"p",components:t},"The specification is a little shaky on what kind of algorithms should be used when for table width. Steps go like this, for a ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"table")," or ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inline-table")," element:"),m.a.createElement(s.MDXTag,{name:"ol",components:t},m.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"If the table has ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"table-layout: auto"),", use the non-normative auto algorithm."),m.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"If the table has ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"table-layout: fixed")," and has a width set, then use the normative fixed algorithm (aka, distribute equally) based on that width."),m.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},m.a.createElement(s.MDXTag,{name:"p",components:t,parentName:"li"},"If the table has table-layout: fixed but does not have a width set, then what to do depends on whether the element is a ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"table")," or an ",m.a.createElement(s.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"inline-table"),"."),m.a.createElement(s.MDXTag,{name:"ol",components:t,parentName:"li"},m.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"If the latter, use the auto algorithm."),m.a.createElement(s.MDXTag,{name:"li",components:t,parentName:"ol"},"If the former, ",m.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"li"},"either")," use the auto algorithm, ",m.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"li"},"or")," calculate the total width of the table based on the normal block flow, ",m.a.createElement(s.MDXTag,{name:"strong",components:t,parentName:"li"},"then")," use the fixed algorithm based on that width.")))),m.a.createElement(s.MDXTag,{name:"p",components:t},"That is, the widths could still be non-normative if you use a fixed layout table with an automatic width. Maybe."),m.a.createElement(s.MDXTag,{name:"p",components:t},"Tables are hard, guys."))};var i={}}}]);
//# sourceMappingURL=component---src-pages-blog-tables-are-hard-mdx-f06aeddfa193fa063ed9.js.map