"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[2416],{3901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var c=t(5893),i=t(1151);const r={title:"\u7b2c5\u7ae0 \u57fa\u7840\u6784\u5efa\u6a21\u5757",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},a=void 0,o={id:"java-concurrency-in-practice/\u57fa\u7840\u6784\u5efa\u6a21\u5757",title:"\u7b2c5\u7ae0 \u57fa\u7840\u6784\u5efa\u6a21\u5757",description:"\u57fa\u7840\u6784\u5efa\u6a21\u5757",source:"@site/docs/java-concurrency-in-practice/05-\u57fa\u7840\u6784\u5efa\u6a21\u5757.md",sourceDirName:"java-concurrency-in-practice",slug:"/java-concurrency-in-practice/\u57fa\u7840\u6784\u5efa\u6a21\u5757",permalink:"/docs/java-concurrency-in-practice/\u57fa\u7840\u6784\u5efa\u6a21\u5757",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-concurrency-in-practice/05-\u57fa\u7840\u6784\u5efa\u6a21\u5757.md",tags:[{label:"Java",permalink:"/docs/tags/java"},{label:"concurrency",permalink:"/docs/tags/concurrency"}],version:"current",sidebarPosition:5,frontMatter:{title:"\u7b2c5\u7ae0 \u57fa\u7840\u6784\u5efa\u6a21\u5757",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},sidebar:"javaConcurrencySidebar",previous:{title:"\u7b2c4\u7ae0 \u5bf9\u8c61\u7684\u7ec4\u5408",permalink:"/docs/java-concurrency-in-practice/\u5bf9\u8c61\u7684\u7ec4\u5408"},next:{title:"\u7b2c6\u7ae0 \u4efb\u52a1\u6267\u884c",permalink:"/docs/java-concurrency-in-practice/\u4efb\u52a1\u6267\u884c"}},s={},l=[{value:"\u57fa\u7840\u6784\u5efa\u6a21\u5757",id:"\u57fa\u7840\u6784\u5efa\u6a21\u5757",level:2},{value:"5.1 \u540c\u6b65\u5bb9\u5668\u7c7b",id:"51-\u540c\u6b65\u5bb9\u5668\u7c7b",level:3},{value:"5.1.1 \u540c\u6b65\u5bb9\u5668\u7c7b\u7684\u95ee\u9898",id:"511-\u540c\u6b65\u5bb9\u5668\u7c7b\u7684\u95ee\u9898",level:4},{value:"5.1.2 \u8fed\u4ee3\u5668\u4e0eConcurrentModificationException",id:"512-\u8fed\u4ee3\u5668\u4e0econcurrentmodificationexception",level:4},{value:"5.1.3 \u9690\u85cf\u8fed\u4ee3\u5668",id:"513-\u9690\u85cf\u8fed\u4ee3\u5668",level:4},{value:"5.2 \u5e76\u53d1\u5bb9\u5668",id:"52-\u5e76\u53d1\u5bb9\u5668",level:3}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u57fa\u7840\u6784\u5efa\u6a21\u5757",children:"\u57fa\u7840\u6784\u5efa\u6a21\u5757"}),"\n",(0,c.jsx)(n.h3,{id:"51-\u540c\u6b65\u5bb9\u5668\u7c7b",children:"5.1 \u540c\u6b65\u5bb9\u5668\u7c7b"}),"\n",(0,c.jsx)(n.p,{children:"Vector\u548cHashtable"}),"\n",(0,c.jsx)(n.h4,{id:"511-\u540c\u6b65\u5bb9\u5668\u7c7b\u7684\u95ee\u9898",children:"5.1.1 \u540c\u6b65\u5bb9\u5668\u7c7b\u7684\u95ee\u9898"}),"\n",(0,c.jsxs)(n.p,{children:["\u540c\u6b65\u5bb9\u5668\u7c7b\u90fd\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\u53ef\u80fd\u9700\u8981",(0,c.jsx)(n.strong,{children:"\u989d\u5916\u7684\u5ba2\u6237\u7aef\u52a0\u9501\u6765\u4fdd\u62a4\u590d\u5408\u64cd\u4f5c"}),"\u3002\u590d\u5408\u64cd\u4f5c\u5305\u62ec\uff1a\u8fed\u4ee3\uff0c\u8df3\u8f6c\uff08\u5f53\u524d\u5143\u7d20\u7684\u4e0b\u4e00\u4e2a\u5143\u7d20\uff09\uff0c\u6761\u4ef6\u8fd0\u7b97\uff08\u4f8b\u5982\uff1a\u82e5\u6ca1\u6709\u5219\u6dfb\u52a0)"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"public static Object getLast(Vector list) {\n\tint lastIndex = list.size() - 1;\n\treturn list.get(index);\n}\n\npublic static void deleteLast(Vector list) {\n    int lastIndex = list.size() - 1;\n    list.remve(lastIndex);\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"Vectore\u4e0a\u53ef\u80fd\u5bfc\u81f4\u6df7\u4e71\u7ed3\u679c\u7684\u590d\u5408\u64cd\u4f5c\uff0c\u7ebf\u7a0bA/B\u4ea4\u66ff\u8c03\u7528deleteLast\u548cgetLast\uff0c\u53ef\u80fd\u629b\u51faArrayIndexOutOfBoundsException"}),"\n",(0,c.jsx)(n.h4,{id:"512-\u8fed\u4ee3\u5668\u4e0econcurrentmodificationexception",children:"5.1.2 \u8fed\u4ee3\u5668\u4e0eConcurrentModificationException"}),"\n",(0,c.jsx)(n.h4,{id:"513-\u9690\u85cf\u8fed\u4ee3\u5668",children:"5.1.3 \u9690\u85cf\u8fed\u4ee3\u5668"}),"\n",(0,c.jsx)(n.h3,{id:"52-\u5e76\u53d1\u5bb9\u5668",children:"5.2 \u5e76\u53d1\u5bb9\u5668"}),"\n",(0,c.jsx)(n.mermaid,{value:"graph LR\nA[A] --\x3e size[size - 10] ---\x3e C[get - 9] --\x3e D[ArrayIndexOutOfBoundsException]\n\nB1[B] --\x3e size1[size - 10] --\x3e R[remove - 9]"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var c=t(7294);const i={},r=c.createContext(i);function a(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);