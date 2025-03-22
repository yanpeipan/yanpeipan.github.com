"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[2084],{8453:(n,e,c)=>{c.d(e,{R:()=>l,x:()=>s});var i=c(6540);const t={},r=i.createContext(t);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}},9552:(n,e,c)=>{c.r(e),c.d(e,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"java-concurrency-in-practice/\u7ebf\u7a0b\u5b89\u5168\u6027","title":"\u7b2c2\u7ae0 \u7ebf\u7a0b\u5b89\u5168\u6027","description":"\u7ebf\u7a0b\u5b89\u5168\u6027","source":"@site/docs/java-concurrency-in-practice/02-\u7ebf\u7a0b\u5b89\u5168\u6027.md","sourceDirName":"java-concurrency-in-practice","slug":"/java-concurrency-in-practice/\u7ebf\u7a0b\u5b89\u5168\u6027","permalink":"/docs/java-concurrency-in-practice/\u7ebf\u7a0b\u5b89\u5168\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-concurrency-in-practice/02-\u7ebf\u7a0b\u5b89\u5168\u6027.md","tags":[{"inline":true,"label":"Java","permalink":"/docs/tags/java"},{"inline":true,"label":"concurrency","permalink":"/docs/tags/concurrency"}],"version":"current","sidebarPosition":2,"frontMatter":{"title":"\u7b2c2\u7ae0 \u7ebf\u7a0b\u5b89\u5168\u6027","excerpt":null,"last_modified_at":"2021-02-02","toc":true,"tags":["Java","concurrency"]},"sidebar":"javaConcurrencySidebar","previous":{"title":"\u7b2c1\u7ae0 \u7b80\u4ecb","permalink":"/docs/java-concurrency-in-practice/\u7b80\u4ecb"},"next":{"title":"\u7b2c3\u7ae0 \u5bf9\u8c61\u7684\u5171\u4eab","permalink":"/docs/java-concurrency-in-practice/\u5bf9\u8c61\u7684\u5171\u4eab"}}');var t=c(4848),r=c(8453);const l={title:"\u7b2c2\u7ae0 \u7ebf\u7a0b\u5b89\u5168\u6027",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},s=void 0,a={},d=[{value:"\u7ebf\u7a0b\u5b89\u5168\u6027",id:"\u7ebf\u7a0b\u5b89\u5168\u6027",level:2},{value:"2.1 \u4ec0\u4e48\u662f\u7ebf\u7a0b\u5b89\u5168\u6027",id:"21-\u4ec0\u4e48\u662f\u7ebf\u7a0b\u5b89\u5168\u6027",level:3},{value:"2.2 \u539f\u5b50\u6027",id:"22-\u539f\u5b50\u6027",level:3},{value:"2.2.1 \u7ade\u6001\u6761\u4ef6",id:"221-\u7ade\u6001\u6761\u4ef6",level:4},{value:"2.2.2 \u5ef6\u8fdf\u521d\u59cb\u5316\u4e2d\u7684\u7ade\u6001\u6761\u4ef6",id:"222-\u5ef6\u8fdf\u521d\u59cb\u5316\u4e2d\u7684\u7ade\u6001\u6761\u4ef6",level:4},{value:"2.2.3 \u590d\u5408\u64cd\u4f5c",id:"223-\u590d\u5408\u64cd\u4f5c",level:4},{value:"2.3 \u52a0\u9501\u673a\u5236",id:"23-\u52a0\u9501\u673a\u5236",level:3},{value:"2.3.1 \u5185\u7f6e\u9501",id:"231-\u5185\u7f6e\u9501",level:4},{value:"2.3.2 \u91cd\u5165",id:"232-\u91cd\u5165",level:4},{value:"2.4 \u7528\u9501\u6765\u4fdd\u62a4\u72b6\u6001",id:"24-\u7528\u9501\u6765\u4fdd\u62a4\u72b6\u6001",level:3},{value:"2.5 \u6d3b\u8dc3\u6027\u4e0e\u6027\u80fd",id:"25-\u6d3b\u8dc3\u6027\u4e0e\u6027\u80fd",level:3}];function o(n){const e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"\u7ebf\u7a0b\u5b89\u5168\u6027",children:"\u7ebf\u7a0b\u5b89\u5168\u6027"}),"\n",(0,t.jsx)(e.p,{children:"\u540c\u6b65\uff1a synchronized\uff0cvolatile\uff0c \u663e\u793a\u9501\uff08Explicit Lock\uff09\uff0c\u539f\u5b50\u53d8\u91cf"}),"\n",(0,t.jsx)(e.p,{children:"\u9762\u5411\u5bf9\u8c61\u52a9\u4e8e\u7f16\u5199\u7ebf\u7a0b\u5b89\u5168\u7684\u7c7b"}),"\n",(0,t.jsx)(e.p,{children:"\u7ebf\u7a0b\u7c7b\u5b89\u5168 != \u7a0b\u5e8f\u5b89\u5168"}),"\n",(0,t.jsx)(e.h3,{id:"21-\u4ec0\u4e48\u662f\u7ebf\u7a0b\u5b89\u5168\u6027",children:"2.1 \u4ec0\u4e48\u662f\u7ebf\u7a0b\u5b89\u5168\u6027"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6b63\u786e\u6027\uff1a\u5f53\u591a\u4e2a\u7ebf\u7a0b\u8bbf\u95ee\u67d0\u4e2a\u7c7b\u65f6\uff0c\u8fd9\u4e2a\u7c7b\u59cb\u7ec8\u8868\u73b0\u51fa\u6b63\u786e\u884c\u4e3a"}),"\n",(0,t.jsx)(e.li,{children:"\u65e0\u72b6\u6001\u5bf9\u8c61\u4e00\u5b9a\u662f\u7ebf\u7a0b\u5b89\u5168\u7684"}),"\n"]}),"\n",(0,t.jsx)(e.h3,{id:"22-\u539f\u5b50\u6027",children:"2.2 \u539f\u5b50\u6027"}),"\n",(0,t.jsx)(e.h4,{id:"221-\u7ade\u6001\u6761\u4ef6",children:"2.2.1 \u7ade\u6001\u6761\u4ef6"}),"\n",(0,t.jsx)(e.p,{children:"\u6b63\u786e\u6027\u4f9d\u8d56\u65f6\u5e8f\uff0c\u5e38\u89c1\uff1a\u5148\u68c0\u67e5\u540e\u6267\u884c\uff08Check-Then-Act\uff09\uff0c\u8ba1\u6570\u5668\u9012\u589e\uff08\u8bfb\u53d6-\u4fee\u6539-\u5199\u5165\uff09"}),"\n",(0,t.jsx)(e.h4,{id:"222-\u5ef6\u8fdf\u521d\u59cb\u5316\u4e2d\u7684\u7ade\u6001\u6761\u4ef6",children:"2.2.2 \u5ef6\u8fdf\u521d\u59cb\u5316\u4e2d\u7684\u7ade\u6001\u6761\u4ef6"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:"@NotThreadSafe \npublic class Lazy nitRace { \n\tprivate ExpensiveObject instance = null; \n    \n\tpublic ExpensiveObject getInstance () { \n\t\tif (instance = null) \n\t\t\tinstance = new Expensiveobject (); \n        return instance;\n    }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u4e24\u6b21\u8c03\u7528",(0,t.jsx)(e.code,{children:"getlnstance"}),"\u53ef\u80fd\u5f97\u5230\u4e0d\u540c\u7684\u7ed3\u679c"]}),"\n",(0,t.jsx)(e.h4,{id:"223-\u590d\u5408\u64cd\u4f5c",children:"2.2.3 \u590d\u5408\u64cd\u4f5c"}),"\n",(0,t.jsx)(e.p,{children:"\u7ebf\u7a0b\u5b89\u5168\u5bf9\u8c61\uff08\u5982AtomicLong \u8bfb\u53d6-\u4fee\u6539-\u5199\u5165\u7b49\u64cd\u4f5c\u662f\u539f\u5b50\u7684\uff09\u66f4\u6613\u7ef4\u62a4\u548c\u9a8c\u8bc1\u5b89\u5168\u6027"}),"\n",(0,t.jsx)(e.h3,{id:"23-\u52a0\u9501\u673a\u5236",children:"2.3 \u52a0\u9501\u673a\u5236"}),"\n",(0,t.jsx)(e.h4,{id:"231-\u5185\u7f6e\u9501",children:"2.3.1 \u5185\u7f6e\u9501"}),"\n",(0,t.jsx)(e.p,{children:"\u540c\u6b65\u4ee3\u7801\u5757\uff08Synchronized Block\uff09"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4f5c\u4e3a\u9501\u7684\u5bf9\u8c61\u5f15\u7528"}),"\n",(0,t.jsx)(e.li,{children:"\u4f5c\u4e3a\u7531\u8fd9\u4e2a\u9501\u4fdd\u62a4\u7684\u4ee3\u7801\u5757"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u6027\u80fd\u95ee\u9898\uff1a\u5e76\u53d1\u6027\u975e\u5e38\u7cdf\u7cd5"}),"\n",(0,t.jsx)(e.h4,{id:"232-\u91cd\u5165",children:"2.3.2 \u91cd\u5165"}),"\n",(0,t.jsx)(e.p,{children:"\u7ebf\u7a0b\u8bd5\u56fe\u83b7\u53d6\u4e00\u4e2a\u5df2\u7ecf\u7531\u5b83\u81ea\u5df1\u6301\u6709\u7684\u9501\uff0c\u8fd9\u4e2a\u8bf7\u6c42\u4f1a\u6210\u529f\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4e00\u79cd\u5b9e\u73b0\uff1a\u4e3a\u6bcf\u4e2a\u9501\u5173\u8054\u4e00\u4e2a\u83b7\u53d6\u8ba1\u6570\u503c\u548c\u4e00\u4e2a\u6240\u6709\u8005\u7ebf\u7a0b\u3002\u7ebf\u7a0b\u8bf7\u6c42\u9501\u65f6\uff0cJVM\u8bb0\u5f55\u9501\u7684\u6301\u6709\u8005\uff0c\u540c\u4e00\u4e2a\u7ebf\u7a0b\u518d\u6b21\u83b7\u53d6\u9501\u65f6\uff0c\u9012\u589e\u8ba1\u6570\u503c\uff0c\u5f53\u7ebf\u7a0b\u9000\u51fa\u540c\u6b65\u4ee3\u7801\u5757\u65f6\uff0c\u8ba1\u6570\u5668\u54cd\u5e94\u9012\u51cf\uff0c\u5f53\u4e3a0\u65f6\u9501\u5c06\u91ca\u653e"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-java",children:'/**\n * \u5982\u679c\u5185\u7f6e\u9501\u4e0d\u662f\u53ef\u91cd\u5165\u7684\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5c06\u53d1\u751f\u6b7b\u9501\n */\npublic class Widget {\n    public synchronized void doSomething() {\n        System.out.println("Widget doSomething");\n    }\n\n    public static class LoggingWidget extends Widget {\n        public synchronized void doSomething() {\n            System.out.println("LoggingWidget doSomething");\n            // \u65e0\u6cd5\u83b7\u53d6Wdiget\u4e0a\u7684\u9501\n            super.doSomething();\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"\u91cd\u5165\u83b7\u53d6\u9501\u7684\u7c92\u5ea6\u65f6\u201c\u7ebf\u7a0b\u201d  POSIX pthread\u4e92\u65a5\u4f53\u7684\u83b7\u53d6\u64cd\u4f5c\u4ee5\u201c\u8c03\u7528\u201d\u4e3a\u7c92\u5ea6"})}),"\n",(0,t.jsx)(e.h3,{id:"24-\u7528\u9501\u6765\u4fdd\u62a4\u72b6\u6001",children:"2.4 \u7528\u9501\u6765\u4fdd\u62a4\u72b6\u6001"}),"\n",(0,t.jsx)(e.p,{children:"\u9501\u80fd\u4fdd\u62a4\u4ee3\u7801\u4e32\u884c\u8bbf\u95ee\uff0c\u56e0\u6b64\u53ef\u7528\u9501\u6765\u6784\u9020\u534f\u8bae\u4ee5\u5b9e\u73b0\u5bf9\u5171\u4eab\u72b6\u6001\u7684\u72ec\u5360\u8bbf\u95ee\uff0c\u786e\u4fdd\u72b6\u6001\u7684\u4e00\u81f4\u6027"}),"\n",(0,t.jsx)(e.p,{children:"\u5e38\u89c1\u52a0\u9501\u7ea6\u5b9a\uff1a\u5c06\u6240\u6709\u53ef\u53d8\u72b6\u6001\u90fd\u5c01\u88c5\u592a\u5bf9\u8c61\u5185\u90e8\uff0c\u5e76\u901a\u8fc7\u5bf9\u8c61\u7684\u5185\u7f6e\u9501\u5bf9\u6240\u6709\u8bbf\u95ee\u53ef\u53d8\u72b6\u6001\u7684\u8def\u5f84\u8fdb\u884c\u540c\u6b65\uff0c\u4f7f\u5f97\u5728\u8be5\u5bf9\u8c61\u4e0a\u4e0d\u4f1a\u53d1\u751f\u5e76\u53d1\u8bbf\u95ee\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u590d\u5408\u64cd\u4f5c\u9700\u8981\u989d\u5916\u7684\u52a0\u9501\u673a\u5236"}),"\n",(0,t.jsx)(e.h3,{id:"25-\u6d3b\u8dc3\u6027\u4e0e\u6027\u80fd",children:"2.5 \u6d3b\u8dc3\u6027\u4e0e\u6027\u80fd"}),"\n",(0,t.jsx)(e.p,{children:"\u7f29\u5199\u540c\u6b65\u4ee3\u7801\u5757\u7684\u4f5c\u7528\u8303\u56f4\uff0c\u786e\u4fdd\u5e76\u53d1\u6027\uff0c\u540c\u65f6\u53c8\u7ef4\u62a4\u7ebf\u7a0b\u5b89\u5168"})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(o,{...n})}):o(n)}}}]);