import React from 'react';
import { Helmet } from "react-helmet";
import { Div, A, GlobalStyle } from '../../components/default';
import styled from "styled-components";
import Nav from '../../components/Nav';
import BlogPost from '../../components/BlogPost';
import MarkdownContent from '../../components/MarkdownContent';

const content = (<div>

<MarkdownContent source={`
Swift can be tricky sometimes. For example, what does the following print?

\`\`\`swift
class A: NSObject {
  let x: Int

  init(x: Int) {
    self.x = x
  }
}

func ==(left: A, right: A) -> Bool {
  return left.x == right.x
}

print(A(x: 1) == A(x: 1))
print([A(x: 1)] == [A(x: 1)])
\`\`\`

Perhaps surprisingly, it's this:
\`\`\`nohighlight
true
false // huh?!
\`\`\`

### Equatable conformance is hard

Why does comparing two arrays with equal contents return false? It turns out that:
- Array is bridged to NSArray
- NSArray doesn't declare a \`==(_:_:)\` function, so it falls back to NSObject's \`==(_:_:)\`, which calls \`isEqual\`
- NSArray's \`isEqual\` [compares objects by casting to AnyHashable](https://github.com/apple/swift-corelibs-foundation/blob/0cbb3225660752987a6c2cf672886fca434d3b1d/Foundation/NSArray.swift#L310)

We can see that this is the problem by casting the objects to \`AnyHashable\` before comparing them:

\`\`\`swift
print(A(x: 1) as AnyHashable == A(x: 1) as AnyHashable)
\`\`\`
\`\`\`nohighlight
false
\`\`\`

Apparently, doing this will use the NSObject implementation of \`==(_:_:)\` rather than the \`A\` one. The NSObject implementation of \`==(_:_:)\` checks isEqual, which returns false because the two elements aren't the same in memory. We can see this by adding an override:

\`\`\`swift
class B: NSObject {
  let x: Int

  init(x: Int) {
    self.x = x
  }

  override func isEqual(_ object: Any?) -> Bool {
    print("isEqual for B")
    return super.isEqual(object)
  }
}

func ==(left: B, right: B) -> Bool {
  print("== for B")
  return left.x == right.x
}
\`\`\`

Then,

\`\`\`swift
print([B(x: 1)] == [B(x: 1)])
\`\`\`
\`\`\`nohighlight
isEqual for B
false
\`\`\`

### The fix

As far as I can tell, the best way to make an NSObject subclass use custom equality inside an array is to override isEqual:

\`\`\`swift
class C: NSObject {
  let x: Int

  init(x: Int) {
    self.x = x
  }

  override func isEqual(_ object: Any?) -> Bool {
    guard let object = object as? C else { return false }
    return object == self
  }
}

func ==(left: C, right: C) -> Bool {
  print("== for C")
  return left.x == right.x
}
\`\`\`
\`\`\`swift
print([C(x: 1)] == [C(x: 1)])
\`\`\`
\`\`\`nohighlight
== for C
true
\`\`\`
    
Of course, if we defined \`A\` as a \`struct\` or a regular \`class\` in the first place, there won't be \`==(_:_:)\` defined for \`[A]\`, which means the compiler would catch our mistake instead of falling back to something that might not work correctly.

Sigh. Working with NSObject can be tricky.

A working playground with the code from this post can be found [here](https://github.com/noahsark769/code-examples/blob/ed9df41aae709eaeb4e334e3e9a5b1a650deef4d/swift/swift-nsobject-equatable.playground/Contents.swift).
`} />

</div>);

function Page() {
    return (
        <div>
            <GlobalStyle />
            <Helmet>
                <link href='http://fonts.googleapis.com/css?family=Roboto:700' rel='stylesheet' type='text/css' />
                <link href="https://fonts.googleapis.com/css?family=Gentium+Book+Basic" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/styles/atom-one-light.min.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.7.0/highlight.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.4.0/languages/swift.min.js"></script>
            </Helmet>
            <Nav />
            <BlogPost title="NSObject Equality is Tricky" date="November 13th, 2016">
                {content}
            </BlogPost>
        </div>
    )
}

export default Page;
