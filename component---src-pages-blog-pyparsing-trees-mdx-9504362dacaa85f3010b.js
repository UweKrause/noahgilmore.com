(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{145:function(e,a,n){"use strict";n.r(a);var t=n(151),r=n.n(t),o=n(0),m=n.n(o),p=n(159),s=n(160),i=n(7),c=n.n(i),l=n(146),g=n(191),d=l.c.div.withConfig({displayName:"CaptionedImage__Container",componentId:"ceijyq-0"})(["margin:20px 0;"]),u=l.c.div.withConfig({displayName:"CaptionedImage__Caption",componentId:"ceijyq-1"})(['font-family:"Gentium Book Basic",times,serif;font-style:italic;font-size:16px;color:#999;margin-bottom:30px;img{width:100%;margin-bottom:10px;}']),h=function(e){function a(){return e.apply(this,arguments)||this}return c()(a,e),a.prototype.render=function(){return m.a.createElement(d,null,m.a.createElement(g.a,{filename:this.props.filename,alt:this.props.alt}),m.a.createElement(u,null,this.props.caption))},a}(m.a.Component);n.d(a,"_frontmatter",function(){return f});a.default=function(e){var a=e.components,n=r()(e,["components"]);return m.a.createElement(p.MDXTag,{name:"wrapper",Layout:s.a,layoutProps:n,components:a},m.a.createElement(p.MDXTag,{name:"p",components:a},"Let's talk about ",m.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"}},"syntax trees"),'. In static analysis, a common operation is to take a character string (e.g. "x = 1") and transform it into well structured data:'),m.a.createElement(h,{filename:"pyparsing-trees-1.png",alt:"Simple syntax tree",caption:"This is a simple example of course."}),m.a.createElement(p.MDXTag,{name:"p",components:a},"Let's try to do this in python. We'll use ",m.a.createElement(p.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://pyparsing.wikispaces.com/"}},"Pyparsing")," as our tokenization tool - you can use pyparsing's rules to build a grammar, from which you can get back a list of token data."),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'from pyparsing import alphas, Word, Literal, nums\n\ngrammar = Literal("var") + Word(alphas) + Literal("=") + Word(nums)\n')),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},">>> print(grammar.parseString(\"var x = 1\"))\n['var', 'x', '=', '1']\n")),m.a.createElement(p.MDXTag,{name:"p",components:a},"This is great, but what if we need a tree instead of an array of tokens?"),m.a.createElement(p.MDXTag,{name:"p",components:a},"For example, let's say we have a language that describes a tree, where each node in the tree can have a number. Each node is represented by a pair of parentheses, and inside is the value followed by the child nodes:"),m.a.createElement(h,{filename:"pyparsing-trees-2.png",alt:"Simple syntax tree",caption:""}),m.a.createElement(p.MDXTag,{name:"p",components:a},"How could we write a parser for this? It differs in a couple of ways from the first example:"),m.a.createElement(p.MDXTag,{name:"ol",components:a},m.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},m.a.createElement(p.MDXTag,{name:"p",components:a,parentName:"li"},"It's inherently recursive, since after the value in each node, zero or more child nodes can follow:"),m.a.createElement(p.MDXTag,{name:"pre",components:a,parentName:"li"},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-nohighlight",metaString:""}},"node := (value[, node, node, node, ...])\n"))),m.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"If we just parse the string as a list, we won't be able to preserve the tree structure.")),m.a.createElement(p.MDXTag,{name:"h3",components:a},"Recursive grammars with pyparsing"),m.a.createElement(p.MDXTag,{name:"p",components:a},"Pyparsing supports recursive grammars using a grammar component called ",m.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Forward"),". To define a recursive grammar, you create a ",m.a.createElement(p.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"pyparsing.Forward()"),", then use the shift left operator to set its content:"),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'grammar = pyparsing.Forward()\ngrammar << pyparsing.Suppress("(") + pyparsing.Word("0123456789") + pyparsing.ZeroOrMore(grammar) + pyparsing.Suppress(")")\n\nquery = "(1 (2 (3)) (4 (5 (6) (7) (8)))"\n')),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},">>> print(grammar.parseString(query))\n['5', '6', '7', '9', '9', '5', '6', '7', '8', '9', '7', '8', '9']\n")),m.a.createElement(p.MDXTag,{name:"p",components:a},"This parses the grammar, but we still don't have the tree structure."),m.a.createElement(p.MDXTag,{name:"h3",components:a},"Parse actions"),m.a.createElement(p.MDXTag,{name:"p",components:a},'Pyparsing allows a "parse action" to be defined:'),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},"def action(string, location, tokens):\n    return tokens\n\ngrammar.setParseAction(action)\n")),m.a.createElement(p.MDXTag,{name:"p",components:a},"The parse action is a function which will be applied every time a parse element generates output. It takes three arguments:"),m.a.createElement(p.MDXTag,{name:"ol",components:a},m.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"The full input string being parsed."),m.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"The location of the parse element as an index into the full string."),m.a.createElement(p.MDXTag,{name:"li",components:a,parentName:"ol"},"The list generated tokens, as strings.")),m.a.createElement(p.MDXTag,{name:"p",components:a},"The value returned from the parse action function will replace the string tokens, and the default implementation does nothing with the tokens and just returns them the way they are. The parse action is our chance to hook into pyparsing and output structured data instead of strings."),m.a.createElement(p.MDXTag,{name:"p",components:a},"As an example:"),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'import pyparsing\n\nclass Item:\n    def __init__(self, value):\n        self.value = value\n\n    def __repr__(self):\n        return "{Item: %s}" % self.value\n\ndef transform(string, location, tokens):\n    return [Item(token) for token in tokens]\n\ngrammar = Literal("var") + Word(alphas) + Literal("=") + Word(nums)\ngrammar.setParseAction(transform)\n')),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},'>>> print(grammar.parseString("var x = 1"))\n[{Item: var}, {Item: x}, {Item: =}, {Item: 1}]\n')),m.a.createElement(p.MDXTag,{name:"p",components:a},"Now we have items instead of strings."),m.a.createElement(p.MDXTag,{name:"h3",components:a},"Building a tree"),m.a.createElement(p.MDXTag,{name:"p",components:a},"Let's apply this to the tree grammar to build a tree. We'll define a simple node class:"),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'from collections import namedtuple\n\nNode = namedtuple("Node", ["value", "children"])\n')),m.a.createElement(p.MDXTag,{name:"p",components:a},"And define the recursive grammar:"),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'from pyparsing import Forward, Suppress, Word, ZeroOrMore\n\ngrammar = Forward()\ngrammar << Suppress("(") + Word("0123456789") + ZeroOrMore(grammar) + Suppress(")")\n\ndef parseAction(string, location, tokens):\n    return Node(value=tokens[0], children=tokens[1:])\n\ngrammar.setParseAction(parseAction)\n')),m.a.createElement(p.MDXTag,{name:"p",components:a},"And a way to print it out and see if it worked:"),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-python",metaString:""}},'def pprint(node, tab=""):\n   print tab + u"┗━ " + str(node.value)\n   for child in node.children:\n      pprint(child, tab + "    ")\n')),m.a.createElement(p.MDXTag,{name:"pre",components:a},m.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},'>>> pprint(grammar.parseString("(1 (2 (3)) (4 (5 (6) (7) (8))))"))\n┗━ 1\n    ┗━ 2\n        ┗━ 3\n    ┗━ 4\n        ┗━ 5\n            ┗━ 6\n            ┗━ 7\n            ┗━ 8\n')),m.a.createElement(p.MDXTag,{name:"p",components:a},"Not bad: a simple parser in 9 lines of code."))};var f={}}}]);
//# sourceMappingURL=component---src-pages-blog-pyparsing-trees-mdx-9504362dacaa85f3010b.js.map