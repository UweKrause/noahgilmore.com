(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{t3Rv:function(a,e,s){"use strict";s.r(e),s.d(e,"_frontmatter",(function(){return b})),s.d(e,"default",(function(){return i}));s("rGqo"),s("yt8O"),s("Btvt"),s("RW0V"),s("91GP"),s("q1tI");var t=s("E/Ix"),n=s("1zrH"),c=s("Qjvx");var b={},p={_frontmatter:b},m=n.a;function i(a){var e=a.components,s=function(a,e){if(null==a)return{};var s,t,n={},c=Object.keys(a);for(t=0;t<c.length;t++)s=c[t],e.indexOf(s)>=0||(n[s]=a[s]);return n}(a,["components"]);return Object(t.b)(m,Object.assign({},p,s,{components:e,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Let's talk about ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Abstract_syntax_tree"}),"syntax trees"),'. In static analysis, a common operation is to take a character string (e.g. "x = 1") and transform it into well structured data:'),Object(t.b)(c.a,{filename:"pyparsing-trees-1.png",alt:"Simple syntax tree",caption:"",mdxType:"CaptionedImage"}),Object(t.b)("p",null,"Let's try to do this in python. We'll use ",Object(t.b)("a",Object.assign({parentName:"p"},{href:"http://pyparsing.wikispaces.com/"}),"Pyparsing")," as our tokenization tool - you can use pyparsing's rules to build a grammar, from which you can get back a list of token data."),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"python"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," pyparsing "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"import"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," alphas, Word, Literal, nums")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar = Literal("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"var"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + Word(alphas) + Literal("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"="'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + Word(nums)")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":""},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'>>> print(grammar.parseString("var x = 1"))'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"['var', 'x', '=', '1']"))),Object(t.b)("p",null,"This is great, but what if we need a tree instead of an array of tokens?"),Object(t.b)("p",null,"For example, let's say we have a language that describes a tree, where each node in the tree can have a number. Each node is represented by a pair of parentheses, and inside is the value followed by the child nodes:"),Object(t.b)(c.a,{filename:"pyparsing-trees-2.png",alt:"Simple syntax tree",caption:"",mdxType:"CaptionedImage"}),Object(t.b)("p",null,"How could we write a parser for this? It differs in a couple of ways from the first example:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"It's inherently recursive, since after the value in each node, zero or more child nodes can follow:",Object(t.b)("pre",Object.assign({parentName:"li"},{className:"dark-default-dark vscode-highlight","data-language":"nohighlight"}),Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"node := (value[, node, node, node, ...])")))),Object(t.b)("li",{parentName:"ol"},"If we parse the string as a list, we won't be able to preserve the tree structure.")),Object(t.b)("h3",{id:"recursive-grammars-with-pyparsing"},"Recursive grammars with pyparsing"),Object(t.b)("p",null,"Pyparsing supports recursive grammars using a grammar component called ",Object(t.b)("inlineCode",{parentName:"p"},"Forward"),". To define a recursive grammar, you create a ",Object(t.b)("inlineCode",{parentName:"p"},"pyparsing.Forward()"),", then use the shift left operator to set its content:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"python"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar = pyparsing.Forward()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar << pyparsing.Suppress("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"("'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + pyparsing.Word("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"0123456789"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + pyparsing.ZeroOrMore(grammar) + pyparsing.Suppress("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'")"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"query = "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"(1 (2 (3)) (4 (5 (6) (7) (8)))"')))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":""},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),">>> print(grammar.parseString(query))"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"['5', '6', '7', '9', '9', '5', '6', '7', '8', '9', '7', '8', '9']"))),Object(t.b)("p",null,"This parses the grammar, but we still don't have the tree structure."),Object(t.b)("h3",{id:"parse-actions"},"Parse actions"),Object(t.b)("p",null,'Pyparsing allows a "parse action" to be defined:'),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"python"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"def"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"action"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"string"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"location"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"tokens"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"):")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," tokens")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar.setParseAction(action)")))),Object(t.b)("p",null,"The parse action is a function which will be applied every time a parse element generates output. It takes three arguments:"),Object(t.b)("ol",null,Object(t.b)("li",{parentName:"ol"},"The full input string being parsed."),Object(t.b)("li",{parentName:"ol"},"The location of the parse element as an index into the full string."),Object(t.b)("li",{parentName:"ol"},"The list generated tokens, as strings.")),Object(t.b)("p",null,"The value returned from the parse action function will replace the string tokens, and the default implementation does nothing with the tokens and just returns them the way they are. The parse action is our chance to hook into pyparsing and output structured data instead of strings."),Object(t.b)("p",null,"As an example:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"python"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"import"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," pyparsing")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"class"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"Item"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),":")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"def"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"__init__"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"value"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"):")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),".value = value")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"def"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"__repr__"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"):")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"        "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"{Item: %s}"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," % "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"self"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),".value")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"def"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"transform"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"string"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"location"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"tokens"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"):")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," [Item(token) "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"for"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," token "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"in"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," tokens]")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar = Literal("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"var"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + Word(alphas) + Literal("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"="'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + Word(nums)")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar.setParseAction(transform)")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":""},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'>>> print(grammar.parseString("var x = 1"))'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"[{Item: var}, {Item: x}, {Item: =}, {Item: 1}]"))),Object(t.b)("p",null,"Now we have items instead of strings."),Object(t.b)("h3",{id:"building-a-tree"},"Building a tree"),Object(t.b)("p",null,"Let's apply this to the tree grammar to build a tree. We'll define a simple node class:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"python"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," collections "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"import"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," namedtuple")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"Node = namedtuple("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"Node"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", ["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"value"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"children"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"])")))),Object(t.b)("p",null,"And define the recursive grammar:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"python"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"from"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," pyparsing "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"import"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," Forward, Suppress, Word, ZeroOrMore")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar = Forward()")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar << Suppress("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"("'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + Word("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"0123456789"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),") + ZeroOrMore(grammar) + Suppress("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'")"'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"def"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"parseAction"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"string"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"location"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"tokens"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"):")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"    "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"return"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," Node("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"value"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"=tokens["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"0"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"], "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"children"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"=tokens["),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk7"}),"1"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),":])")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}))),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"grammar.setParseAction(parseAction)")))),Object(t.b)("p",null,"And a way to print it out and see if it worked:"),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":"python"},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"def"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"pprint"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"("),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"node"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),", "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk12"}),"tab"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"="),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'""'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"):")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk11"}),"print"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," tab + "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"u"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"┗━ "'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," + "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk10"}),"str"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"(node.value)")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"   "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk15"}),"for"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," child "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk4"}),"in"),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"})," node.children:")),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),"      pprint(child, tab + "),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk8"}),'"    "'),Object(t.b)("span",Object.assign({parentName:"span"},{className:"mtk1"}),")")))),Object(t.b)("pre",{className:"dark-default-dark vscode-highlight","data-language":""},Object(t.b)("code",Object.assign({parentName:"pre"},{className:"vscode-highlight-code"}),Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),'>>> pprint(grammar.parseString("(1 (2 (3)) (4 (5 (6) (7) (8))))"))'),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"┗━ 1"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"    ┗━ 2"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"        ┗━ 3"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"    ┗━ 4"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"        ┗━ 5"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"            ┗━ 6"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"            ┗━ 7"),"\n",Object(t.b)("span",Object.assign({parentName:"code"},{className:"vscode-highlight-line"}),"            ┗━ 8"))),Object(t.b)("p",null,"Not bad: a simple parser in 9 lines of code."),Object(t.b)("style",{className:"vscode-highlight-styles"},"\n  \n  .dark-default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.dark-default-dark .mtk1 { color: #D4D4D4; }\n.dark-default-dark .mtk2 { color: #1E1E1E; }\n.dark-default-dark .mtk3 { color: #6A9955; }\n.dark-default-dark .mtk4 { color: #569CD6; }\n.dark-default-dark .mtk5 { color: #D16969; }\n.dark-default-dark .mtk6 { color: #D7BA7D; }\n.dark-default-dark .mtk7 { color: #B5CEA8; }\n.dark-default-dark .mtk8 { color: #CE9178; }\n.dark-default-dark .mtk9 { color: #646695; }\n.dark-default-dark .mtk10 { color: #4EC9B0; }\n.dark-default-dark .mtk11 { color: #DCDCAA; }\n.dark-default-dark .mtk12 { color: #9CDCFE; }\n.dark-default-dark .mtk13 { color: #000080; }\n.dark-default-dark .mtk14 { color: #F44747; }\n.dark-default-dark .mtk15 { color: #C586C0; }\n.dark-default-dark .mtk16 { color: #6796E6; }\n.dark-default-dark .mtk17 { color: #808080; }\n.dark-default-dark .mtki { font-style: italic; }\n.dark-default-dark .mtkb { font-weight: bold; }\n.dark-default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-blog-pyparsing-trees-mdx-9c3ddd5a1014988f9d49.js.map