"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[4892],{8453:(n,e,i)=>{i.d(e,{R:()=>c,x:()=>s});var l=i(6540);const r={},a=l.createContext(r);function c(n){const e=l.useContext(a);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),l.createElement(a.Provider,{value:e},n.children)}},8876:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"java-concurrency-in-practice/\u5bf9\u8c61\u7684\u5171\u4eab","title":"\u7b2c3\u7ae0 \u5bf9\u8c61\u7684\u5171\u4eab","description":"\u5bf9\u8c61\u7684\u5171\u4eab","source":"@site/docs/java-concurrency-in-practice/03-\u5bf9\u8c61\u7684\u5171\u4eab.md","sourceDirName":"java-concurrency-in-practice","slug":"/java-concurrency-in-practice/\u5bf9\u8c61\u7684\u5171\u4eab","permalink":"/docs/java-concurrency-in-practice/\u5bf9\u8c61\u7684\u5171\u4eab","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-concurrency-in-practice/03-\u5bf9\u8c61\u7684\u5171\u4eab.md","tags":[{"inline":true,"label":"Java","permalink":"/docs/tags/java"},{"inline":true,"label":"concurrency","permalink":"/docs/tags/concurrency"}],"version":"current","sidebarPosition":3,"frontMatter":{"title":"\u7b2c3\u7ae0 \u5bf9\u8c61\u7684\u5171\u4eab","excerpt":null,"last_modified_at":"2021-02-02","toc":true,"tags":["Java","concurrency"]},"sidebar":"javaConcurrencySidebar","previous":{"title":"\u7b2c2\u7ae0 \u7ebf\u7a0b\u5b89\u5168\u6027","permalink":"/docs/java-concurrency-in-practice/\u7ebf\u7a0b\u5b89\u5168\u6027"},"next":{"title":"\u7b2c4\u7ae0 \u5bf9\u8c61\u7684\u7ec4\u5408","permalink":"/docs/java-concurrency-in-practice/\u5bf9\u8c61\u7684\u7ec4\u5408"}}');var r=i(4848),a=i(8453);const c={title:"\u7b2c3\u7ae0 \u5bf9\u8c61\u7684\u5171\u4eab",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},s=void 0,t={},d=[{value:"\u5bf9\u8c61\u7684\u5171\u4eab",id:"\u5bf9\u8c61\u7684\u5171\u4eab",level:2},{value:"3.1 \u53ef\u89c1\u6027",id:"31-\u53ef\u89c1\u6027",level:3},{value:"3.1.1 \u5931\u6548\u6570\u636e",id:"311-\u5931\u6548\u6570\u636e",level:4},{value:"3.1.2 \u975e\u539f\u5b50\u768464\u4f4d\u64cd\u4f5c",id:"312-\u975e\u539f\u5b50\u768464\u4f4d\u64cd\u4f5c",level:4},{value:"3.1.3 \u52a0\u9501\u4e0e\u53ef\u89c1\u6027",id:"313-\u52a0\u9501\u4e0e\u53ef\u89c1\u6027",level:4},{value:"3.1.4 Volatile\u53d8\u91cf",id:"314-volatile\u53d8\u91cf",level:4},{value:"3.2 \u53d1\u5e03\u4e0e\u9038\u51fa",id:"32-\u53d1\u5e03\u4e0e\u9038\u51fa",level:3},{value:"3.3 \u7ebf\u7a0b\u5c01\u95ed",id:"33-\u7ebf\u7a0b\u5c01\u95ed",level:3},{value:"3.3.1 Ad-hoc\u7ebf\u7a0b\u5c01\u95ed",id:"331-ad-hoc\u7ebf\u7a0b\u5c01\u95ed",level:4},{value:"3.3.2 \u6808\u5c01\u95ed",id:"332-\u6808\u5c01\u95ed",level:4},{value:"3.3.3 ThreadLocal",id:"333-threadlocal",level:4},{value:"3.4 \u4e0d\u53d8\u6027",id:"34-\u4e0d\u53d8\u6027",level:3},{value:"3.4.1 Final\u57df",id:"341-final\u57df",level:4},{value:"3.4.2 Volatile\u7c7b\u578b\u53d1\u5e03\u4e0d\u53ef\u53d8\u5bf9\u8c61",id:"342-volatile\u7c7b\u578b\u53d1\u5e03\u4e0d\u53ef\u53d8\u5bf9\u8c61",level:4},{value:"3.5 \u5b89\u5168\u53d1\u5e03",id:"35-\u5b89\u5168\u53d1\u5e03",level:3},{value:"3.5.1 \u4e0d\u6b63\u786e\u7684\u53d1\u5e03\uff1a\u6b63\u786e\u7684\u5bf9\u8c61\u88ab\u7834\u574f",id:"351-\u4e0d\u6b63\u786e\u7684\u53d1\u5e03\u6b63\u786e\u7684\u5bf9\u8c61\u88ab\u7834\u574f",level:4},{value:"3.5.2 \u4e0d\u53ef\u53d8\u5bf9\u8c61\u4e0e\u521d\u59cb\u5316\u5b89\u5168\u6027",id:"352-\u4e0d\u53ef\u53d8\u5bf9\u8c61\u4e0e\u521d\u59cb\u5316\u5b89\u5168\u6027",level:4},{value:"3.5.3 \u5b89\u5168\u53d1\u5e03\u7684\u5e38\u7528\u6a21\u5f0f",id:"353-\u5b89\u5168\u53d1\u5e03\u7684\u5e38\u7528\u6a21\u5f0f",level:4},{value:"3.5.4 \u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61",id:"354-\u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61",level:4},{value:"3.5.5 \u53ef\u53d8\u5bf9\u8c61",id:"355-\u53ef\u53d8\u5bf9\u8c61",level:4},{value:"3.5.6 \u5b89\u5168\u7684\u5171\u4eab\u5bf9\u8c61",id:"356-\u5b89\u5168\u7684\u5171\u4eab\u5bf9\u8c61",level:4}];function o(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\u5bf9\u8c61\u7684\u5171\u4eab",children:"\u5bf9\u8c61\u7684\u5171\u4eab"}),"\n",(0,r.jsx)(e.p,{children:"\u540c\u6b65synchronized\u4e0d\u4ec5\u53ef\u7528\u4e8e\u539f\u5b50\u6027\u6216\u8005\u786e\u5b9a\u4e34\u754c\u533a\uff08Critical Section\uff09\uff0c\u8fd8\u53ef\u4ee5\u4fdd\u8bc1\u5185\u5b58\u53ef\u89c1\u6027\uff08Memory Visibility\uff09"}),"\n",(0,r.jsx)(e.h3,{id:"31-\u53ef\u89c1\u6027",children:"3.1 \u53ef\u89c1\u6027"}),"\n",(0,r.jsx)(e.p,{children:"\u91cd\u6392\u5e8f\uff08Reordering\uff09\u8bfb\u7ebf\u7a0b\u770b\u5230\u7684\u987a\u5e8f\u4e0e\u5199\u5165\u7684\u987a\u5e8f\u5b8c\u5168\u76f8\u53cd"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7f16\u8bd1\u5668\u4f18\u5316\u7684\u91cd\u6392\u5e8f"}),"\n",(0,r.jsx)(e.li,{children:"\u6307\u4ee4\u7ea7\u5e76\u884c\u7684\u91cd\u6392\u5e8f"}),"\n",(0,r.jsx)(e.li,{children:"\u5185\u5b58\u7cfb\u7edf\u7684\u91cd\u6392\u5e8f"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://tech.meituan.com/2014/09/23/java-memory-reordering.html",children:"Java\u5185\u5b58\u8bbf\u95ee\u91cd\u6392\u5e8f\u7684\u7814\u7a76"})}),"\n",(0,r.jsx)(e.h4,{id:"311-\u5931\u6548\u6570\u636e",children:"3.1.1 \u5931\u6548\u6570\u636e"}),"\n",(0,r.jsx)(e.h4,{id:"312-\u975e\u539f\u5b50\u768464\u4f4d\u64cd\u4f5c",children:"3.1.2 \u975e\u539f\u5b50\u768464\u4f4d\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.h4,{id:"313-\u52a0\u9501\u4e0e\u53ef\u89c1\u6027",children:"3.1.3 \u52a0\u9501\u4e0e\u53ef\u89c1\u6027"}),"\n",(0,r.jsx)(e.h4,{id:"314-volatile\u53d8\u91cf",children:"3.1.4 Volatile\u53d8\u91cf"}),"\n",(0,r.jsx)(e.p,{children:"\u7528\u6765\u786e\u4fdd\u5c06\u53d8\u91cf\u7684\u66f4\u65b0\u64cd\u4f5c\u901a\u77e5\u5230\u5176\u5b83\u7ebf\u7a0b"}),"\n",(0,r.jsx)(e.h3,{id:"32-\u53d1\u5e03\u4e0e\u9038\u51fa",children:"3.2 \u53d1\u5e03\u4e0e\u9038\u51fa"}),"\n",(0,r.jsx)(e.p,{children:"\u53d1\u5e03\u5bf9\u8c61\uff08Publish\uff09\uff1a\u4f7f\u5bf9\u8c61\u5728\u5f53\u524d\u4f5c\u7528\u57df\u4e4b\u5916\u7684\u4ee3\u7801\u4e2d\u4f7f\u7528"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u67d0\u4e2a\u4e0d\u8be5\u53d1\u5e03\u7684\u5bf9\u8c61\u88ab\u53d1\u5e03\u65f6\uff0c\u9038\u51fa\uff08Escape\uff09"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'class UnsafeStates {\n\tprivate String[] states = new String[] {"AL", "AK"};\n    \n    public String[] getStates() { return states; }\n}\n'})}),"\n",(0,r.jsx)(e.p,{children:"\u9690\u5f0f\u4f7fthis\u5f15\u7528\u9038\u51fa"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class ThisEscape {\n    public ThisEscape(EventSource source) {\n        source.registerListener( \n            new EventListener() {\n                // \u5185\u90e8\u7c7b\u521d\u59cb\u5316\u4e4b\u540e\uff0c\u5df2\u7ecf\u62ff\u5230\u7236\u7c7b\u7684this\u5f15\u7528\uff0c\u4f46\u6b64\u65f6\u7236\u7c7b\u8fd8\u6ca1\u521d\u59cb\u5316\u5b8c\u6210\n                public void onEvent(Event e) {\n                    doSt(e);\n                }\n            });\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5b89\u5168\u7684\u5bf9\u8c61\u6784\u9020\u8fc7\u7a0b\uff0c\u4e0d\u8981\u5728\u6784\u9020\u8fc7\u7a0b\u4e2d\u4f7fthis\u5f15\u7528\u9038\u51fa"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class SafeListener {\n    private final EventListener listener;\n    \n    private SafeListener() {\n        listener = new EventListener() {\n            public void onEvent(Event e) {\n                doSt(e);\n            }\n        }\n    }\n    \n    public static SafeListener newInstance(EventSource source) {\n        SafeListener safe = new SafeListener();\n        source.registerListener(safe.listener);\n        return safe;\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"33-\u7ebf\u7a0b\u5c01\u95ed",children:"3.3 \u7ebf\u7a0b\u5c01\u95ed"}),"\n",(0,r.jsx)(e.p,{children:"\u907f\u514d\u540c\u6b65\uff0c\u4e0d\u4f7f\u7528\u5171\u4eab\u6570\u636e\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5355\u7ebf\u7a0b\u5185\u8bbf\u95ee\u6570\u636e\uff0c\u7ebf\u7a0b\u5c01\u95ed\uff08Thread Confinement\uff09"}),"\n",(0,r.jsx)(e.h4,{id:"331-ad-hoc\u7ebf\u7a0b\u5c01\u95ed",children:"3.3.1 Ad-hoc\u7ebf\u7a0b\u5c01\u95ed"}),"\n",(0,r.jsx)(e.p,{children:"\u5b8c\u5168\u7531\u7a0b\u5e8f\u5b9e\u73b0\u6765\u627f\u62c5\uff0c\u5c3d\u91cf\u5c11\u7528"}),"\n",(0,r.jsx)(e.h4,{id:"332-\u6808\u5c01\u95ed",children:"3.3.2 \u6808\u5c01\u95ed"}),"\n",(0,r.jsx)(e.p,{children:"\u53ea\u6709\u5c40\u90e8\u53d8\u91cf\u624d\u80fd\u8bbf\u95ee\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.h4,{id:"333-threadlocal",children:"3.3.3 ThreadLocal"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u5e38\u7528\u4e8e\u9632\u6b62\u5bf9\u53ef\u53d8\u7684\u5355\u5b9e\u4f8b\u53d8\u91cf\uff08Singleton\uff09\u548c\u5168\u5c40\u53d8\u91cf\u8fdb\u884c\u5171\u4eab"}),"\n",(0,r.jsx)(e.h3,{id:"34-\u4e0d\u53d8\u6027",children:"3.4 \u4e0d\u53d8\u6027"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff08Immutable Object\uff09\u4e00\u5b9a\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u6ee1\u8db3\u540c\u6b65"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5bf9\u8c61\u521b\u5efa\u4ee5\u540e\u5176\u72b6\u6001\u5c31\u4e0d\u80fd\u4fee\u6539"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5bf9\u8c61\u7684\u6240\u6709\u57df\u90fd\u662ffinal\u7c7b\u578b"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5bf9\u8c61\u662f\u6b63\u786e\u521b\u5efa\u7684\uff08\u5728\u5bf9\u8c61\u521b\u5efa\u671f\u95f4\uff0cthis\u5f15\u7528\u6ca1\u6709\u9038\u51fa\uff09"}),"\n",(0,r.jsx)(e.p,{children:"\u4fdd\u5b58\u5728\u4e0d\u53ef\u53d8\u5bf9\u8c61\u4e2d\u7684\u7a0b\u5e8f\u4ecd\u7136\u53ef\u4ee5\u66f4\u65b0\uff0c\u5373\u901a\u8fc7\u5c06\u4e00\u4e2a\u4fdd\u5b58\u65b0\u72b6\u6001\u7684\u5b9e\u4f8b\u6765\u66ff\u6362\u539f\u6709\u7684\u4e0d\u53ef\u53d8\u5bf9\u8c61"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"341-final\u57df",children:"3.4.1 Final\u57df"}),"\n",(0,r.jsx)(e.p,{children:"JAVA\u5185\u5b58\u6a21\u578b\uff0cfinal\u57df\u786e\u4fdd\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027\uff0c\u4ece\u800c\u53ef\u4ee5\u4e0d\u53d7\u9650\u5236\u7684\u8bbf\u95ee\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u4e14\u5171\u4eab\u8bbf\u95ee\u65f6\u65e0\u9700\u540c\u6b65\u3002"}),"\n",(0,r.jsx)(e.p,{children:"final\u57df\u91cd\u6392\u5e8f\u89c4\u5219\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5728\u6784\u9020\u51fd\u6570\u5185\u5bf9\u4e00\u4e2afinal\u57df\u7684\u5199\u5165\uff0c\u4e0e\u968f\u540e\u628a\u8fd9\u4e2a\u88ab\u6784\u9020\u5bf9\u8c61\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\u4e00\u4e2a\u5f15\u7528 \u53d8\u91cf\uff0c\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u521d\u6b21\u8bfb\u4e00\u4e2a\u5305\u542bfinal\u57df\u7684\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u4e0e\u968f\u540e\u521d\u6b21\u8bfb\u8fd9\u4e2afinal\u57df\uff0c\u8fd9\u4e24\u4e2a\u64cd\u4f5c\u4e4b\u95f4\u4e0d\u80fd \u91cd\u6392\u5e8f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class FinalExample {\n    // \u666e\u901a\u53d8\u91cf\n    int i;\n    // final\u53d8\u91cf\n    final int j;\n    static FinalExample obj;\n    \n    // \u6784\u9020\u51fd\u6570\n    public FinalExample() {\n        // \u5199\u666e\u901a\u57df\uff0c\u53ef\u80fd\u91cd\u6392\u5e8f\u5230\u6784\u9020\u51fd\u6570\u4e4b\u5916\uff0ci = 1 \u8fd8\u6ca1\u5199\u5165\u666e\u901a\u57dfi\n        i = 1;\n        // \u5199final\u57df\n        j = 2;\n    }\n    \n    // \u5199\u7ebf\u7a0bA\u6267\u884c\n    public static void writer() {\n        obj = new FinalExample();\n    }\n    \n    // \u8bfb\u7ebf\u7a0bB\u6267\u884c\n    public static void reader() {\n        // \u8bfb\u5bf9\u8c61\u5f15\u7528\n        FinalExample object = obj;\n        // \u8bfb\u666e\u901a\u57df\uff0c\u53ef\u80fd\u91cd\u6392\u5e8f\u5230\u201c\u8bfb\u5bf9\u8c61\u5f15\u7528\u201d\u4e4b\u524d\uff0c\u7ebf\u7a0bA\u8fd8\u6ca1\u5199\u5165i\n        int a = object.i;\n        // \u8bfbfinal\u57df\n        int b = object.j;\n    }\n}\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u5199final\u57df\u7684\u91cd\u6392\u5e8f\u89c4\u5219"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"JMM\u7981\u6b62\u7f16\u8bd1\u5668\u628afinal\u57df\u7684\u5199\u91cd\u6392\u5e8f\u5230\u6784\u9020\u51fd\u6570\u4e4b\u5916"}),"\n",(0,r.jsx)(e.li,{children:"\u7f16\u8bd1\u5668\u4f1a\u5728final\u57df\u7684\u5199\u4e4b\u540e\uff0c\u6784\u9020\u51fd\u6570return\u4e4b\u524d\uff0c\u63d2\u5165\u4e00\u4e2aStoreStore\u5c4f\u969c\u3002\u8fd9\u4e2a\u5c4f\u969c\u7981\u6b62\u5904\u7406\u5668\u628afinal\u57df\u7684\u5199\u91cd\u6392\u5e8f\u5230\u6784\u9020\u51fd\u6570\u4e4b\u5916"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u8bfbfinal\u57df\u7684\u91cd\u6392\u5e8f\u89c4\u5219"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e2d\uff0c\u521d\u6b21\u8bfb\u5bf9\u8c61\u5f15\u7528\u4e0e\u521d\u6b21\u8bfb\u8be5\u5bf9\u8c61\u5305\u542b\u7684final \u57df\uff0cJMM\u7981\u6b62\u5904\u7406\u5668\u91cd\u6392\u5e8f\u8fd9\u4e24\u4e2a\u64cd\u4f5c\uff08\u6ce8\u610f\uff0c\u8fd9\u4e2a\u89c4\u5219\u4ec5\u4ec5\u9488\u5bf9\u5904\u7406\u5668\uff09\u3002\u7f16\u8bd1\u5668\u4f1a\u5728\u8bfbfinal\u57df\u64cd\u4f5c\u7684\u524d\u9762\u63d2\u5165\u4e00\u4e2aLoadLoad\u5c4f\u969c\u3002"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"final\u57df\u4e3a\u5f15\u7528\u7c7b\u578b"}),"\n",(0,r.jsx)(e.p,{children:"1\u662f\u5bf9final\u57df\u7684\u5199\u5165\uff0c2\u662f\u5bf9\u8fd9\u4e2afinal\u57df\u5f15\u7528\u7684\u5bf9\u8c61\u7684\u6210\u5458\u57df\u7684\u5199\u5165\uff0c3\u662f\u628a\u88ab\u6784\u9020\u7684\u5bf9\u8c61\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\u67d0\u4e2a\u5f15\u7528\u53d8\u91cf\u3002\u8fd9\u91cc\u9664\u4e86\u524d\u9762\u63d0\u5230\u76841\u4e0d\u80fd\u548c3\u91cd\u6392\u5e8f\u5916\uff0c2\u548c3\u4e5f\u4e0d\u80fd\u91cd\u6392\u5e8f\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"/* \n * \u5047\u8bbe\u9996\u5148\u7ebf\u7a0bA\u6267\u884cwriterOne()\u65b9\u6cd5\uff0c\u6267\u884c\u5b8c\u540e\u7ebf\u7a0bB\u6267\u884c writerTwo()\u65b9\u6cd5\uff0c\u6267\u884c\u5b8c\u540e\u7ebf\u7a0bC\u6267\u884creader()\u65b9\u6cd5\u3002\n * JMM\u4e0d\u4fdd\u8bc1\u7ebf\u7a0bB\u7684\u5199\u5165\u5bf9\u8bfb\u7ebf\u7a0bC\u53ef\u89c1\uff0c\u56e0\u4e3a\u5199\u7ebf\u7a0bB\u548c\u8bfb\u7ebf\u7a0bC\u4e4b\u95f4\u5b58\u5728\u6570 \u636e\u7ade\u4e89\uff0c\u6b64\u65f6\u7684\u6267\u884c\u7ed3\u679c\u4e0d\u53ef\u9884\u77e5\u3002\n * \u5199\u7ebf\u7a0bB\u548c\u8bfb\u7ebf\u7a0bC\u4e4b\u95f4\u9700\u8981\u4f7f \u7528\u540c\u6b65\u539f\u8bed\uff08lock\u6216volatile\uff09\u6765\u786e\u4fdd\u5185\u5b58\u53ef\u89c1\u6027\n */\npublic class FinalReferenceExample {\n    final int[] intArray;\n    static FinalReferenceExample obj;\n    \n    public FinalReferenceExample() {\n        // 1: \u5199final\u5f15\u7528\n        intArray = new int[1];\n        // 2: \u5199final\u5f15\u7528\u5bf9\u8c61\u7684\u6210\u5458\u57df\n        intArray[0] = 1;\n    }\n    \n    // \u5199\u7ebf\u7a0bA\u6267\u884c\n    public static void writeOne() {\n        // 3: \u628a\u6784\u9020\u5bf9\u8c61\u7684\u5f15\u7528\u8d4b\u503c\u7ed9\u5f15\u7528\u53d8\u91cfobj\n        obj = new FinalReferenceExample();\n    }\n    \n    // \u5199\u7ebf\u7a0bB\u6267\u884c\n    public static void writeTwo() {\n        // 4: \u5199final\u5f15\u7528\u5bf9\u8c61\u7684\u6210\u5458\u57df\n        obj.intArray[0] = 2;\n    }\n    \n    // \u8bfb\u7ebf\u7a0bC\u6267\u884c\n    public static void reader() {\n        // 5: \u8bfb\u5bf9\u8c61\u5f15\u7528obj\n        if (obj != null) {\n            // 6: \u8bfbfinal\u5f15\u7528\u7684\u6210\u5458\u57df\n            int temp1 = obj.intArray[0];\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e3a\u4ec0\u4e48final\u5f15\u7528\u4e0d\u80fd\u4ece\u6784\u9020\u51fd\u6570\u5185\u201c\u6ea2\u51fa\u201d"}),"\n",(0,r.jsx)(e.p,{children:"\u4fdd\u8bc1\u5728\u6784\u9020\u5668\u5185\u90e8\uff0c\u4e0d\u80fd\u8ba9\u8fd9\u4e2a\u88ab\u6784\u9020\u5bf9\u8c61\u7684\u5f15\u7528\u4e3a\u5176\u5b83\u7ebf\u7a0b\u6240\u89c1\uff0c\u4e5f\u5c31\u662f\u5bf9\u8c61\u5f15\u7528\u4e0d\u80fd\u5728\u6784\u9020\u51fd\u6570\u4e2d\u201c\u9038\u51fa\u201d\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public class FinalReferenceEscapeExample {\n    final int i;\n    static FinalReferenceEscapeExample obj;\n    \n    public FinalReferenceEscapeExample() {\n        // 1\uff1a\u5199final\u57df\n        i = 1;\n        // 2\uff1athis\u5f15\u7528\u5728\u6b64\u9038\u51fa\uff0c1\uff0c2\u53ef\u80fd\u88ab\u91cd\u6392\u5e8f\n        obj = this;\n    }\n    \n    public static void writer() {\n        new FinalReferenceEscapeExample();\n    }\n    \n    public static void reader() {\n        // \u8bfb\u53d6\u4e0d\u4e3anull\u7684\u5bf9\u8c61\u5f15\u7528a\n        if (obj != null) {\n            // \u53ef\u80fd\u8bfb\u53d6\u5230final\u57df\u521d\u59cb\u5316\u4e4b\u524d\u7684\u503c\n            int temp = obj.i;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h4,{id:"342-volatile\u7c7b\u578b\u53d1\u5e03\u4e0d\u53ef\u53d8\u5bf9\u8c61",children:"3.4.2 Volatile\u7c7b\u578b\u53d1\u5e03\u4e0d\u53ef\u53d8\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.p,{children:"\u4e0d\u53ef\u53d8\u5bf9\u8c61\u80fd\u591f\u63d0\u4f9b\u4e00\u79cd\u5f31\u5f62\u5f0f\u7684\u539f\u5b50\u6027"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u9700\u8981\u5bf9\u4e00\u7ec4\u76f8\u5173\u6570\u636e\u4ee5\u539f\u5b50\u65b9\u5f0f\u6267\u884c\u67d0\u4e2a\u64cd\u4f5c\uff0c\u5c31\u53ef\u4ee5\u8003\u8651\u521b\u5efa\u4e00\u4e2a\u4e0d\u53ef\u53d8\u7684\u7c7b\u6765\u5305\u542b\u8fd9\u4e9b\u6570\u636e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@Immutable\npublic class OneValueCache {\n    private final BigInteger lastNumber;\n    private final BigInteger[] lastFactors;\n\n    public OneValueCache(BigInteger i,\n                         BigInteger[] factors) {\n        lastNumber = i;\n        lastFactors = Arrays.copyOf(factors, factors.length);\n    }\n\n    public BigInteger[] getFactors(BigInteger i) {\n        if (lastNumber == null || !lastNumber.equals(i))\n            return null;\n        else\n            return Arrays.copyOf(lastFactors, lastFactors.length);\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.a,{href:"https://juejin.cn/post/6844903601068998664",children:"https://juejin.cn/post/6844903601068998664"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@ThreadSafe\npublic class VolatileCachedFactorizer extends GenericServlet implements Servlet {\n    // \u53ef\u89c1\u6027\n    private volatile OneValueCache cache = new OneValueCache(null, null);\n\n    public void service(ServletRequest req, ServletResponse resp) {\n        BigInteger i = extractFromRequest(req);\n        BigInteger[] factors = cache.getFactors(i);\n        if (factors == null) {\n            factors = factor(i);\n            // i \u548c factors \u662f\u4e00\u4e00\u5bf9\u5e94\u7684\uff0c\u4fdd\u969c\u4e86\u7f13\u5b58\u4e00\u81f4\u6027\n            cache = new OneValueCache(i, factors);\n        }\n        encodeIntoResponse(resp, factors);\n    }\n\n    void encodeIntoResponse(ServletResponse resp, BigInteger[] factors) {\n    }\n\n    BigInteger extractFromRequest(ServletRequest req) {\n        return new BigInteger("7");\n    }\n\n    BigInteger[] factor(BigInteger i) {\n        // Doesn\'t really factor\n        return new BigInteger[]{i};\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"35-\u5b89\u5168\u53d1\u5e03",children:"3.5 \u5b89\u5168\u53d1\u5e03"}),"\n",(0,r.jsx)(e.h4,{id:"351-\u4e0d\u6b63\u786e\u7684\u53d1\u5e03\u6b63\u786e\u7684\u5bf9\u8c61\u88ab\u7834\u574f",children:"3.5.1 \u4e0d\u6b63\u786e\u7684\u53d1\u5e03\uff1a\u6b63\u786e\u7684\u5bf9\u8c61\u88ab\u7834\u574f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public Holder holder;\n\npublic void initialize() {\n    // \u7531\u4e8e\u53ef\u89c1\u6027\u95ee\u9898\uff0c\u5176\u5b83\u7ebf\u7a0b\u770b\u5230\u5c1a\u672a\u521b\u5efa\u5b8c\u6210\u7684\u5bf9\u8c61\n\tholder = new Holder(42);\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4e0d\u80fd\u6307\u671b\u5c1a\u672a\u5b8c\u5168\u521b\u5efa\u7684\u5bf9\u8c61\u62e5\u6709\u5b8c\u6574\u6027\u3002"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'public class Holder {\n\tprivate int n;\n\t\n\tpublic Holder(int n) { this.n = n; }\n\t\n\tpublic void assertSanity() {\n        // \u7b2c\u4e00\u6b21\u8bfb\u53d6\u5230\u5931\u6548\u503c\uff0c\u518d\u6b21\u8bfb\u53d6\u5f97\u5230\u66f4\u65b0\u503c\n\t\tif (n != n) {\n\t\t\tthrown new AssertionError("This statement is false.")\n\t\t}\n\t}\n}\n'})}),"\n",(0,r.jsx)(e.h4,{id:"352-\u4e0d\u53ef\u53d8\u5bf9\u8c61\u4e0e\u521d\u59cb\u5316\u5b89\u5168\u6027",children:"3.5.2 \u4e0d\u53ef\u53d8\u5bf9\u8c61\u4e0e\u521d\u59cb\u5316\u5b89\u5168\u6027"}),"\n",(0,r.jsx)(e.p,{children:"Java\u5185\u5b58\u6a21\u578b\u4e3a\u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u5171\u4eab\u63d0\u4f9b\u4e86\u4e00\u79cd\u7279\u6b8a\u7684\u521d\u59cb\u5316\u5b89\u5168\u6027\u4fdd\u8bc1\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4efb\u4f55\u94b1\u7a0b\u90fd\u53ef\u4ee5\u5728\u4e0d\u9700\u59a5\u989d\u5916\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\u5b89\u5168\u5730\u8bbf\u95ee\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff0c\u5373\u4f7f\u5728\u53d1\u5e03\u8fd9\u4e9b\u5bf9\u8c61\u65f6\u6ca1\u6709\u4f7f\u7528\u540c\u6b65\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"353-\u5b89\u5168\u53d1\u5e03\u7684\u5e38\u7528\u6a21\u5f0f",children:"3.5.3 \u5b89\u5168\u53d1\u5e03\u7684\u5e38\u7528\u6a21\u5f0f"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5728\u9759\u6001\u521d\u59cb\u5316\u51fd\u6570\u4e2d\u521d\u59cb\u5316\u4e00\u4e2a\u5bf9\u8c61\u5f15\u7528"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u5bf9\u8c61\u7684\u5f15\u7528\u4fdd\u5b58\u5230volatile\u7c7b\u578b\u7684\u57df\u6216\u8005AtomicReferance\u5bf9\u8c61\u4e2d"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u5bf9\u8c61\u7684\u5f15\u7528\u4fdd\u5b58\u5230\u67d0\u4e2a\u6b63\u786e\u6784\u9020\u5bf9\u8c61\u7684final\u7c7b\u578b\u57df\u4e2d"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u5bf9\u8c61\u7684\u5f15\u7528\u4fdd\u5b58\u5230\u67d0\u4e2a\u6b63\u786e\u6784\u9020\u5bf9\u8c61\u7684fianl\u7c7b\u578b\u57df\u4e2d"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u5bf9\u8c61\u7684\u5f15\u7528\u4fdd\u5b58\u5230\u4e00\u4e2a\u7531\u9501\u4fdd\u62a4\u7684\u57df\u4e2d"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7ebf\u7a0b\u5b89\u5168\u5e93\u4e2d\u7684\u5bb9\u5668\u7c7b\u63d0\u4f9b\u4e86\u5b89\u5168\u53d1\u5e03\u4fdd\u8bc1\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u5c06\u4e00\u4e2a\u952e\u6216\u8005\u503c\u653e\u5165Hashtable\u3001synchronizedMap\u6216\u8005ConcurrentMap\u4e2d\uff0c\u53ef\u4ee5\u5b89\u5168\u7684\u5c06\u5b83\u53d1\u5e03\u7ed9\u4efb\u4f55\u4ece\u8fd9\u4e9b\u5bb9\u5668\u8bbf\u95ee\u5b83\u7684\u7ebf\u7a0b"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u67d0\u4e9b\u5143\u7d20\u653e\u5165Vector\u3001CopyOnWriteArrayList\u3001CopyOnWriteArraySet\u3001synchronizedList\u6216synchronizedSet\u4e2d\uff0c\u53ef\u4ee5\u5c06\u8be5\u5143\u7d20\u53d1\u5e03\u5230\u4efb\u4f55\u4ece\u8fd9\u4e9b\u5bb9\u5668\u4e2d\u8bbf\u95ee\u8be5\u5143\u7d20\u7684\u7ebf\u7a0b"}),"\n",(0,r.jsx)(e.li,{children:"\u5c06\u67d0\u4e2a\u5143\u7d20\u653e\u5165BlockingQueue\u6216ConcurrentLinkedQueue\u4e2d\uff0c\u53ef\u4ee5\u5c06\u8be5\u5143\u7d20\u5b89\u5168\u5730\u53d1\u5e03\u5230\u4efb\u4f55\u4ece\u8fd9\u4e9b\u961f\u5217\u4e2d\u8bbf\u95ee\u8be5\u5143\u7d20\u7684\u7ebf\u7a0b"}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u7c7b\u5e93\u4e2d\u7684\u5176\u5b83\u4f20\u9012\u673a\u5236\uff08Future\u3001Exchanger\uff09\u540c\u6837\u80fd\u5b9e\u73b0\u5b89\u5168\u53d1\u5e03"}),"\n",(0,r.jsx)(e.p,{children:"\u53d1\u5e03\u9759\u6001\u6784\u9020\u7684\u5bf9\u8c61\uff0c\u6700\u7b80\u5355\u548c\u6700\u5b89\u5168\u7684\u65b9\u5f0f\u662f\u4f7f\u7528\u9759\u6001\u7684\u521d\u59cb\u5316\u5668\uff1a"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"public static Holder holder = new Holder(42);"})}),"\n",(0,r.jsx)(e.p,{children:"\u9759\u6001\u521d\u59cb\u5316\u5668\u7531JVM \u5728\u7c7b\u7684\u521d\u59cb\u5316\u9636\u6bb5\u6267\u884c\u3002\u7531\u4e8e\u5728 JVM \u5185\u90e8\u5b58\u5728\u7740\u540c\u6b65\u673a\u5236\uff0c\u56e0\u6b64\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u521d\u59cb\u5316\u7684\u4efb\u4f55\u5bf9\u8c61\u90fd\u53ef\u4ee5\u5761\u5b89\u5168\u5730\u53d1\u5e03\uff3bJLS 12.4.2\uff3d\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"354-\u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61",children:"3.5.4 \u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u5bf9\u8c61\u4ece\u6280\u672f\u4e0a\u6765\u770b\u662f\u53ef\u53d8\u7684\uff0c\u4f46\u5176\u72b6\u6001\u5728\u53d1\u5e03\u540e\u4e0d\u4f1a\u518d\u6539\u53d8\uff0c\u90a3\u4e48\u63d0\u8fd9\u79cd\u5bf9\u8c61\u79f0\u4e3a\u201c\u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61\uff08 Effectively Immutable Object)\u201d"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u6ca1\u662f\u6709\u989d\u5916\u7684\u540c\u6b65\u7684\u60c5\u51b5\u4e0b\uff0c\u4efb\u4f55\u7ebf\u7a0b\u90fd\u53ef\u4ee5\u5b89\u5168\u5730\u4f7f\u7528\u88ab\u5b89\u5168\u53d1\u5e03\u7684\u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"public Map<String, Date> lastLogin = Collections.synchronizedMap(new HashMap<String, Date>);"})}),"\n",(0,r.jsx)(e.p,{children:"\u4fdd\u5b58\u6bcf\u4f4d\u7528\u6237\u7684\u6700\u8fd1\u767b\u5f55\u65f6\u95f4\uff0c\u5982\u679cDate\u5bf9\u8c61\u7684\u503c\u653e\u5165Map\u540e\u5c31\u4e0d\u4f1a\u6539\u53d8\uff0c\u90a3\u4e48synchronizedMap\u4e2d\u7684\u540c\u6b65\u673a\u5236\u8db3\u4ee5\u4f7fDate\u503c\u88ab\u5b89\u5168\u53d1\u5e03\uff0c\u5e76\u4e14\u8bbf\u95eeDate\u503c\u65f6\u4e0d\u9700\u8981\u989d\u5916\u7684\u540c\u6b65\u3002"}),"\n",(0,r.jsx)(e.h4,{id:"355-\u53ef\u53d8\u5bf9\u8c61",children:"3.5.5 \u53ef\u53d8\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u53d8\u5bf9\u8c61\u5728\u6784\u9020\u540e\u53ef\u4ee5\u4fee\u6539\uff0c\u4e0d\u4ec5\u5728\u53d1\u5e03\u5bf9\u8c61\u65f6\u9700\u8981\u4f7f\u7528\u540c\u6b65\uff0c\u800c\u4e14\u5728\u6bcf\u6b21\u5bf9\u8c61\u8bbf\u95ee\u65f6\u9700\u8981\u4f7f\u7528\u540c\u6b65\u6765\u786e\u4fdd\u540e\u7eed\u4fee\u6539\u64cd\u4f5c\u7684\u53ef\u89c1\u6027\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u8c61\u7684\u53d1\u5e03\u9700\u6c42\u53d6\u51b3\u4e8e\u5b83\u7684\u53ef\u53d8\u6027\uff1a"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e0d\u53ef\u53d8\u5bf9\u8c61\u53ef\u4ee5\u901a\u8fc7\u4efb\u610f\u673a\u5236\u6765\u53d1\u5e03"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61\u5fc5\u987b\u901a\u8fc7\u5b89\u5168\u65b9\u5f0f\u6765\u53d1\u5e03"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u53ef\u53d8\u5bf9\u8c61\u5fc5\u987b\u901a\u8fc7\u5b89\u5168\u65b9\u5f0f\u6765\u53d1\u5e03\uff0c\u5e76\u4e14\u5fc5\u987b\u662f\u7ebf\u7a0b\u5b89\u5168\u7684\u6216\u8005\u7531\u67d0\u4e2a\u9501\u4fdd\u62a4\u8d77\u6765"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h4,{id:"356-\u5b89\u5168\u7684\u5171\u4eab\u5bf9\u8c61",children:"3.5.6 \u5b89\u5168\u7684\u5171\u4eab\u5bf9\u8c61"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7ebf\u7a0b\u5c01\u95ed"}),"\n",(0,r.jsx)(e.li,{children:"\u53ea\u8bfb\u5171\u4eab\uff0c\u5305\u62ec\u4e0d\u53ef\u53d8\u5bf9\u8c61\u548c\u4e8b\u5b9e\u4e0d\u53ef\u53d8\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.li,{children:"\u7ebf\u7a0b\u5b89\u5168\u5171\u4eab\uff0c\u7ebf\u7a0b\u5b89\u5168\u7684\u5bf9\u8c61\u5728\u5176\u5185\u90e8\u5b9e\u73b0\u540c\u6b65\uff0c\u56e0\u6b64\u591a\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u901a\u8fc7\u5bf9\u8c61\u7684\u516c\u6709\u63a5\u53e3\u6765\u8fdb\u884c\u8bbf\u95ee\u800c\u4e0d\u9700\u8981\u8fdb\u4e00\u6b65\u7684\u540c\u6b65"}),"\n",(0,r.jsx)(e.li,{children:"\u4fdd\u62a4\u5bf9\u8c61\uff0c\u5c01\u88c5\u5728\u5176\u4ed6\u7ebf\u7a0b\u5b89\u5168\u5bf9\u8c61\u4e2d\u7684\u5bf9\u8c61\uff0c\u4ee5\u53ca\u5df2\u53d1\u5e03\u7684\u5e76\u4e14\u7531\u67d0\u4e2a\u7279\u5b9a\u9501\u4fdd\u62a4\u7684\u5bf9\u8c61"}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(o,{...n})}):o(n)}}}]);