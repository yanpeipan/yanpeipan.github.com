"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[5559],{7442:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>t});const a=JSON.parse('{"id":"java-concurrency-in-practice/\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027","title":"\u7b2c11\u7ae0 \u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027","description":"\u5bf9\u6027\u80fd\u7684\u601d\u8003","source":"@site/docs/java-concurrency-in-practice/11-\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027.md","sourceDirName":"java-concurrency-in-practice","slug":"/java-concurrency-in-practice/\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027","permalink":"/docs/java-concurrency-in-practice/\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027","draft":false,"unlisted":false,"editUrl":"https://github.com/yanpeipan/yanpeipan.github.com/tree/main/docs/java-concurrency-in-practice/11-\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027.md","tags":[{"inline":true,"label":"Java","permalink":"/docs/tags/java"},{"inline":true,"label":"concurrency","permalink":"/docs/tags/concurrency"}],"version":"current","sidebarPosition":11,"frontMatter":{"title":"\u7b2c11\u7ae0 \u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027","excerpt":null,"last_modified_at":"2021-02-02","toc":true,"tags":["Java","concurrency"]},"sidebar":"javaConcurrencySidebar","previous":{"title":"\u7b2c10\u7ae0 \u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669","permalink":"/docs/java-concurrency-in-practice/\u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669"},"next":{"title":"\u7b2c12\u7ae0 \u5e76\u53d1\u7a0b\u5e8f\u7684\u6d4b\u8bd5","permalink":"/docs/java-concurrency-in-practice/\u5e76\u53d1\u7a0b\u5e8f\u7684\u6d4b\u8bd5"}}');var l=n(4848),i=n(8453);const r={title:"\u7b2c11\u7ae0 \u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},c=void 0,d={},t=[{value:"\u5bf9\u6027\u80fd\u7684\u601d\u8003",id:"\u5bf9\u6027\u80fd\u7684\u601d\u8003",level:2},{value:"\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027",id:"\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027",level:3},{value:"\u8bc4\u4f30\u5404\u79cd\u6027\u80fd\u6743\u8861\u56e0\u7d20",id:"\u8bc4\u4f30\u5404\u79cd\u6027\u80fd\u6743\u8861\u56e0\u7d20",level:3},{value:"Amdahl \u5b9a\u5f8b",id:"amdahl-\u5b9a\u5f8b",level:2},{value:"\u793a\u4f8b\uff1a\u5728\u5404\u79cd\u6846\u67b6\u4e2d\u9690\u85cf\u7684\u4e32\u884c\u90e8\u5206",id:"\u793a\u4f8b\u5728\u5404\u79cd\u6846\u67b6\u4e2d\u9690\u85cf\u7684\u4e32\u884c\u90e8\u5206",level:3},{value:"Amdahl \u5b9a\u5f8b\u7684\u5e94\u7528",id:"amdahl-\u5b9a\u5f8b\u7684\u5e94\u7528",level:3},{value:"\u7ebf\u7a0b\u5f15\u5165\u7684\u5f00\u9500",id:"\u7ebf\u7a0b\u5f15\u5165\u7684\u5f00\u9500",level:2},{value:"\u4e0a\u4e0b\u6587\u5207\u6362",id:"\u4e0a\u4e0b\u6587\u5207\u6362",level:3},{value:"\u5185\u5b58\u540c\u6b65",id:"\u5185\u5b58\u540c\u6b65",level:3},{value:"\u963b\u585e",id:"\u963b\u585e",level:3},{value:"\u51cf\u5c11\u9501\u7684\u7ade\u4e89",id:"\u51cf\u5c11\u9501\u7684\u7ade\u4e89",level:2},{value:"\u7f29\u5c0f\u9501\u7684\u8303\u56f4\uff08\u201c\u5feb\u8fdb\u5feb\u51fa\u201d\uff09",id:"\u7f29\u5c0f\u9501\u7684\u8303\u56f4\u5feb\u8fdb\u5feb\u51fa",level:3},{value:"\u51cf\u5c0f\u9501\u7684\u7c92\u5ea6",id:"\u51cf\u5c0f\u9501\u7684\u7c92\u5ea6",level:3},{value:"\u9501\u5206\u6bb5",id:"\u9501\u5206\u6bb5",level:3},{value:"\u907f\u514d\u70ed\u70b9\u57df",id:"\u907f\u514d\u70ed\u70b9\u57df",level:3},{value:"\u4e00\u4e9b\u66ff\u4ee3\u72ec\u5360\u9501\u7684\u65b9\u6cd5",id:"\u4e00\u4e9b\u66ff\u4ee3\u72ec\u5360\u9501\u7684\u65b9\u6cd5",level:3},{value:"\u76d1\u6d4b CPU \u7684\u5229\u7528\u7387",id:"\u76d1\u6d4b-cpu-\u7684\u5229\u7528\u7387",level:3},{value:"\u5411\u5bf9\u8c61\u6c60\u8bf4\u4e0d",id:"\u5411\u5bf9\u8c61\u6c60\u8bf4\u4e0d",level:3},{value:"\u793a\u4f8b\uff1a\u6bd4\u8f83 Map \u7684\u6027\u80fd",id:"\u793a\u4f8b\u6bd4\u8f83-map-\u7684\u6027\u80fd",level:2},{value:"\u51cf\u5c11\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500",id:"\u51cf\u5c11\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500",level:2}];function h(e){const s={annotation:"annotation",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h2,{id:"\u5bf9\u6027\u80fd\u7684\u601d\u8003",children:"\u5bf9\u6027\u80fd\u7684\u601d\u8003"}),"\n",(0,l.jsx)(s.p,{children:"\u6027\u80fd\u63d0\u5347\u610f\u5473\u7740\u7528\u66f4\u5c11\u7684\u8d44\u6e90\u505a\u66f4\u591a\u7684\u4e8b\u60c5\u3002\u5f53\u64cd\u4f5c\u6027\u80fd\u7531\u4e8e\u67d0\u79cd\u7279\u5b9a\u7684\u8d44\u6e90\u800c\u53d7\u5230\u9650\u5236\u65f6\uff0c\u6211\u4eec\u901a\u5e38\u5c06\u8be5\u64cd\u4f5c\u79f0\u4e3a\u8d44\u6e90\u5bc6\u96c6\u578b\u7684\u64cd\u4f5c\uff0c\u5982\uff1aCPU \u5bc6\u96c6\u578b\uff0cIO \u5bc6\u96c6\u578b\uff0c\u6570\u636e\u5e93\u5bc6\u96c6\u578b\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5c3d\u7ba1\u4f7f\u7528\u591a\u7ebf\u7a0b\u76ee\u6807\u662f\u63d0\u5347\u6574\u4f53\u6027\u80fd\uff0c\u4f46\u4e0e\u5355\u7ebf\u7a0b\u7684\u65b9\u6cd5\u76f8\u6bd4\uff0c\u591a\u7ebf\u7a0b\u603b\u662f\u4f1a\u5f15\u5165\u989d\u5916\u7684\u6027\u80fd\u5f00\u9500\uff0c\u5305\u62ec\uff1a\u7ebf\u7a0b\u4e4b\u95f4\u7684\u534f\u8c03\uff08\u52a0\u9501\uff0c\u89e6\u53d1\u4fe1\u53f7\u4ee5\u53ca\u5185\u5b58\u540c\u6b65\u7b49\uff09\uff0c\u589e\u52a0\u7684\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u7ebf\u7a0b\u7684\u521b\u5efa\u548c\u9500\u6bc1\uff0c\u4ee5\u53ca\u7ebf\u7a0b\u7684\u8c03\u5ea6\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u8981\u60f3\u901a\u8fc7\u5e76\u53d1\u6765\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\uff0c\u9700\u8981\u52aa\u529b\u505a\u597d\u4e24\u4ef6\u4e8b\u60c5\uff1a\u66f4\u6709\u6548\u7684\u5229\u7528\u73b0\u6709\u5904\u7406\u8d44\u6e90\uff0c\u4ee5\u53ca\u5728\u51fa\u73b0\u65b0\u7684\u5904\u7406\u8d44\u6e90\u65f6\u4f7f\u7a0b\u5e8f\u5c3d\u53ef\u80fd\u7684\u5229\u7528\u8fd9\u4e9b\u65b0\u8d44\u6e90\u3002\u4ece\u6027\u80fd\u76d1\u89c6\u7684\u89d2\u5ea6\u6765\u770b\uff0cCPU \u9700\u8981\u5c3d\u53ef\u80fd\u7684\u4fdd\u6301\u5fd9\u788c\u72b6\u6001\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027",children:"\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027"}),"\n",(0,l.jsx)(s.p,{children:"\u53ef\u4f38\u7f29\u6027\u6307\u7684\u662f\uff1a\u5f53\u589e\u52a0\u8ba1\u7b97\u8d44\u6e90\u65f6\uff08CPU\u3001\u5185\u5b58\u3001\u5b58\u50a8\u5bb9\u91cf\u6216 IO \u5bbd\u5e26\uff09\u7a0b\u5e8f\u7684\u541e\u5410\u91cf\u6216\u8005\u5904\u7406\u80fd\u529b\u54cd\u5e94\u7684\u589e\u52a0"}),"\n",(0,l.jsx)(s.h3,{id:"\u8bc4\u4f30\u5404\u79cd\u6027\u80fd\u6743\u8861\u56e0\u7d20",children:"\u8bc4\u4f30\u5404\u79cd\u6027\u80fd\u6743\u8861\u56e0\u7d20"}),"\n",(0,l.jsx)(s.p,{children:"\u907f\u514d\u4e0d\u6210\u719f\u7684\u4f18\u5316\u3002\u9996\u5148\u4f7f\u7a0b\u5e8f\u6b63\u786e\uff0c\u7136\u540e\u518d\u63d0\u9ad8\u8fd0\u884c\u901f\u5ea6--\u5982\u679c\u5b83\u8fd8\u8fd0\u884c\u5f97\u4e0d\u591f\u5feb\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u4ee5\u6d4b\u8bd5\u4e3a\u57fa\u51c6\uff0c\u4e0d\u8981\u731c\u6d4b"}),"\n",(0,l.jsx)(s.h2,{id:"amdahl-\u5b9a\u5f8b",children:"Amdahl \u5b9a\u5f8b"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u589e\u52a0\u8ba1\u7b97\u8d44\u6e90\u7684\u60c5\u51b5\u4e0b\uff0c\u7a0b\u5e8f\u5728\u7406\u8bba\u4e0a\u80fd\u591f\u5b9e\u73b0\u6700\u9ad8\u52a0\u901f\u6bd4\uff0c\u8fd9\u4e2a\u503c\u53d6\u51b3\u4e8e\u7a0b\u5e8f\u4e2d\u53ef\u5e76\u884c\u7ec4\u4ef6\u4e0e\u4e32\u884c\u7ec4\u4ef6\u6240\u5360\u7684\u6bd4\u91cd\u3002\u5047\u5b9a F \u662f\u5fc5\u987b\u88ab\u4e32\u884c\u6267\u884c\u7684\u90e8\u5206\uff0c\u90a3\u4e48\u6839\u636e Amdahl \u5b9a\u5f8b\uff0c\u5728\u5305\u542b N \u4e2a\u5904\u7406\u5668\u7684\u673a\u5668\u4e2d\uff0c\u6700\u9ad8\u7684\u52a0\u901f\u6bd4\u4e3a\uff1a"}),"\n",(0,l.jsx)(s.span,{className:"katex-display",children:(0,l.jsxs)(s.span,{className:"katex",children:[(0,l.jsx)(s.span,{className:"katex-mathml",children:(0,l.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,l.jsxs)(s.semantics,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"S"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mi,{children:"e"}),(0,l.jsx)(s.mi,{children:"e"}),(0,l.jsx)(s.mi,{children:"d"}),(0,l.jsx)(s.mi,{children:"u"}),(0,l.jsx)(s.mi,{children:"p"}),(0,l.jsx)(s.mo,{children:"\u2264"}),(0,l.jsxs)(s.mfrac,{children:[(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mi,{children:"F"}),(0,l.jsx)(s.mo,{children:"+"}),(0,l.jsxs)(s.mfrac,{children:[(0,l.jsxs)(s.mrow,{children:[(0,l.jsx)(s.mo,{stretchy:"false",children:"("}),(0,l.jsx)(s.mn,{children:"1"}),(0,l.jsx)(s.mo,{children:"\u2212"}),(0,l.jsx)(s.mi,{children:"F"}),(0,l.jsx)(s.mo,{stretchy:"false",children:")"})]}),(0,l.jsx)(s.mi,{children:"N"})]})]})]})]}),(0,l.jsx)(s.annotation,{encoding:"application/x-tex",children:"Speedup\\leq\\frac{1}{F+\\frac{(1-F)}{N}}\n"})]})})}),(0,l.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"Sp"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"ee"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,l.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,l.jsx)(s.span,{className:"mrel",children:"\u2264"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,l.jsxs)(s.span,{className:"base",children:[(0,l.jsx)(s.span,{className:"strut",style:{height:"2.5664em",verticalAlign:"-1.245em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(s.span,{className:"mfrac",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"1.3214em"},children:[(0,l.jsxs)(s.span,{style:{top:"-2.11em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.01em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"F"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsx)(s.span,{className:"mbin",children:"+"}),(0,l.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,l.jsxs)(s.span,{className:"mord",children:[(0,l.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,l.jsx)(s.span,{className:"mfrac",children:(0,l.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,l.jsxs)(s.span,{className:"vlist-r",children:[(0,l.jsxs)(s.span,{className:"vlist",style:{height:"1.01em"},children:[(0,l.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsx)(s.span,{className:"mord mtight",children:(0,l.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"})})})]}),(0,l.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(s.span,{style:{top:"-3.485em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,l.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,l.jsxs)(s.span,{className:"mord mtight",children:[(0,l.jsx)(s.span,{className:"mopen mtight",children:"("}),(0,l.jsx)(s.span,{className:"mord mtight",children:"1"}),(0,l.jsx)(s.span,{className:"mbin mtight",children:"\u2212"}),(0,l.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"F"}),(0,l.jsx)(s.span,{className:"mclose mtight",children:")"})]})})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,l.jsx)(s.span,{})})})]})}),(0,l.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})]}),(0,l.jsxs)(s.span,{style:{top:"-3.24em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.01em"}}),(0,l.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,l.jsxs)(s.span,{style:{top:"-3.687em"},children:[(0,l.jsx)(s.span,{className:"pstrut",style:{height:"3.01em"}}),(0,l.jsx)(s.span,{className:"mord",children:(0,l.jsx)(s.span,{className:"mord",children:"1"})})]})]}),(0,l.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,l.jsx)(s.span,{className:"vlist-r",children:(0,l.jsx)(s.span,{className:"vlist",style:{height:"1.245em"},children:(0,l.jsx)(s.span,{})})})]})}),(0,l.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})]})]})}),"\n",(0,l.jsx)(s.p,{children:"\u5f53 N \u8d8b\u8fd1\u65e0\u7a77\u5927\u65f6\uff0c\u6700\u5927\u52a0\u901f\u6bd4\u8d8b\u8fd1\u4e8e1/F\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u6240\u6709\u5e76\u53d1\u7a0b\u5e8f\u4e2d\u90fd\u5305\u542b\u4e00\u4e9b\u4e32\u884c\u90e8\u5206\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u793a\u4f8b\u5728\u5404\u79cd\u6846\u67b6\u4e2d\u9690\u85cf\u7684\u4e32\u884c\u90e8\u5206",children:"\u793a\u4f8b\uff1a\u5728\u5404\u79cd\u6846\u67b6\u4e2d\u9690\u85cf\u7684\u4e32\u884c\u90e8\u5206"}),"\n",(0,l.jsx)(s.p,{children:"\u53ef\u4ee5\u6bd4\u8f83\u5f53\u589e\u52a0\u7ebf\u7a0b\u65f6\u541e\u5410\u91cf\u7684\u53d8\u5316"}),"\n",(0,l.jsx)(s.p,{children:"ConcurrentLinkedQueue \u7684\u541e\u5410\u91cf\u4e0d\u65ad\u63d0\u5347\uff0c\u76f4\u5230\u5230\u8fbe\u5904\u7406\u5668\u6570\u91cf\u4e0a\u9650\uff0c\u4e4b\u540e\u5c06\u57fa\u672c\u4fdd\u6301\u4e0d\u53d8\u3002\u53e6\u4e00\u65b9\u9762\uff0c\u5f53\u7ebf\u7a0b\u6570\u91cf\u5c0f\u4e8e3\u65f6\uff0c\u540c\u6b65 LinkedList \u7684\u541e\u5410\u91cf\u4e5f\u4f1a\u5728\u67d0\u79cd\u7a0b\u5ea6\u7684\u63d0\u5347\uff0c\u4f46\u662f\u4e4b\u540e\u4f1a\u7531\u4e8e\u540c\u6b65\u5f00\u9500\u7684\u589e\u52a0\u800c\u4e0b\u8dcc\u3002\u5f53\u7ebf\u7a0b\u6570\u91cf\u8fbe\u52304\u4e2a\u62165\u4e2a\u65f6\uff0c\u7ade\u4e89\u5c06\u975e\u5e38\u6fc0\u70c8\uff0c\u751a\u81f3\u6bcf\u6b21\u8bbf\u95ee\u961f\u5217\u90fd\u4f1a\u5728\u9501\u4e0a\u53d1\u751f\u7ade\u4e89\uff0c\u6b64\u65f6\u7684\u541e\u5410\u91cf\u4e3b\u8981\u53d7\u5230\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u9650\u5236\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u541e\u5410\u6027\u7684\u5dee\u5f02\u6765\u6e90\u4e8e\u4e24\u4e2a\u961f\u5217\u4e2d\u4e0d\u540c\u6bd4\u4f8b\u7684\u4e32\u884c\u90e8\u5206\u3002\u540c\u6b65\u7684 LinkedList \u91c7\u7528\u5355\u4e2a\u9501\u6765\u4fdd\u62a4\u6574\u4e2a\u961f\u5217\u7684\u72b6\u6001\uff0c\u5e76\u4e14\u5728 offer remove \u7b49\u65b9\u6cd5\u7684\u8c03\u7528\u671f\u95f4\u90fd\u5c06\u6301\u6709\u8fd9\u4e2a\u9501\u3002ConcurrentLinkedQueue \u4f7f\u7528\u4e86\u4e00\u79cd\u66f4\u590d\u6742\u7684\u975e\u963b\u585e\u961f\u5217\u7b97\u6cd5\uff0c\u8be5\u7b97\u6cd5\u4f7f\u7528\u539f\u5b50\u5f15\u7528\u6765\u66f4\u65b0\u5404\u4e2a\u94fe\u63a5\u6307\u9488\u3002\u5728\u7b2c\u4e00\u4e2a\u961f\u5217\u4e2d\uff0c\u6574\u4e2a\u7684\u63d2\u5165\u6216\u5220\u9664\u64cd\u90fd\u5c06\u4e32\u884c\u6267\u884c\uff0c\u800c\u5728\u7b2c\u4e8c\u4e2a\u961f\u5217\u4e2d\uff0c\u53ea\u6709\u5bf9\u6307\u9488\u7684\u66f4\u65b0\u64cd\u4f5c\u9700\u8981\u4e32\u884c\u6267\u884c\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"amdahl-\u5b9a\u5f8b\u7684\u5e94\u7528",children:"Amdahl \u5b9a\u5f8b\u7684\u5e94\u7528"}),"\n",(0,l.jsx)(s.p,{children:"\u76f4\u63a5\u6d4b\u91cf\u4e32\u884c\u90e8\u5206\u7684\u6bd4\u4f8b\u975e\u5e38\u56f0\u96be"}),"\n",(0,l.jsx)(s.h2,{id:"\u7ebf\u7a0b\u5f15\u5165\u7684\u5f00\u9500",children:"\u7ebf\u7a0b\u5f15\u5165\u7684\u5f00\u9500"}),"\n",(0,l.jsx)(s.p,{children:"\u5bf9\u4e8e\u4e3a\u4e86\u63d0\u5347\u6027\u80fd\u800c\u5f15\u5165\u7684\u7ebf\u7a0b\u6765\u8bf4\uff0c\u5e76\u884c\u5e26\u6765\u7684\u6027\u80fd\u63d0\u5347\u5fc5\u987b\u8d85\u8fc7\u5e76\u53d1\u5bfc\u81f4\u7684\u5f00\u9500"}),"\n",(0,l.jsx)(s.h3,{id:"\u4e0a\u4e0b\u6587\u5207\u6362",children:"\u4e0a\u4e0b\u6587\u5207\u6362"}),"\n",(0,l.jsx)(s.p,{children:"\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5c06\u4fdd\u5b58\u5f53\u524d\u8fd0\u884c\u7ebf\u7a0b\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff0c\u5e76\u5c06\u65b0\u8c03\u5ea6\u8fdb\u6765\u7684\u7ebf\u7a0b\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u8bbe\u7f6e\u4e3a\u5f53\u524d\u4e0a\u4e0b\u6587"}),"\n",(0,l.jsx)(s.p,{children:"\u5207\u6362\u4e0a\u4e0b\u6587\u9700\u8981\u4e00\u5b9a\u7684\u5f00\u9500\uff0c\u800c\u5728\u7ebf\u7a0b\u8c03\u5ea6\u8fc7\u7a0b\u4e2d\u9700\u8981\u8bbf\u95ee\u7531\u64cd\u4f5c\u7cfb\u7edf\u548c JVM \u5171\u4eab\u7684\u6570\u636e\u7ed3\u6784\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u5927\u591a\u6570\u901a\u7528\u7684\u5904\u7406\u5668\u4e2d\uff0c\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500\u76f8\u5f53\u4e8e 5000~10000 \u4e2a\u65f6\u949f\u5468\u671f\uff0c\u4e5f\u5c31\u662f\u51e0\u5fae\u79d2\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5982\u679c\u5185\u6838\u5360\u7528\u7387\u8f83\u9ad8\uff08\u8d85\u8fc7 10%\uff09\uff0c\u90a3\u4e48\u901a\u5e38\u8868\u793a\u8c03\u5ea6\u6d3b\u52a8\u53d1\u751f\u5f97\u5f88\u9891\u7e41\uff0c\u8fd9\u5f88\u53ef\u80fd\u7531 IO \u6216\u7ade\u4e89\u9501\u5bfc\u81f4\u7684\u963b\u585e\u5f15\u8d77\u7684"}),"\n",(0,l.jsx)(s.h3,{id:"\u5185\u5b58\u540c\u6b65",children:"\u5185\u5b58\u540c\u6b65"}),"\n",(0,l.jsx)(s.p,{children:"\u540c\u6b65\u64cd\u4f5c\u7684\u6027\u80fd\u5f00\u9500\u5305\u62ec\u591a\u4e2a\u65b9\u9762 synchronized volatile \u63d0\u4f9b\u7684\u53ef\u89c1\u6027\u4fdd\u8bc1\u4e2d\u53ef\u80fd\u4f1a\u4f7f\u7528\u4e00\u4e9b\u7279\u6b8a\u6307\u4ee4\uff0c\u5373\u5185\u5b58\u6805\u680f\uff08Memory Barrier) \u5185\u5b58\u6805\u680f\u53ef\u4ee5\u5237\u65b0\u63f4\u5b58\uff0c\u4f7f\u63f4\u5b58\u65e0\u6570\uff0c\u5237\u65b0\u786c\u4ef6\u7684\u5199\u7f13\u51b2\uff0c \u4ee5\u53ca\u505c\u6b62\u6267\u884c\u7ba1\u9053\u3002\u5185\u5b58\u6805\u4f4d\u53ef\u80fd\u540c\u6837\u4f1a\u5bf9\u6027\u80fd\u5e26\u6765\u63d0\u63a5\u7684\u5f71\u54cd\uff0c\u56e0\u4e3a\u5b83\u4eec\u5c06\u6291\u5236\u4e00\u4e9b\u7f16\u8bd1\u5668\u4f18\u5316\u64cd\u4f5c\u3002\u5728\u5185\u5b58\u6805\u680f\u4e2d\uff0c\u5927\u591a\u6570\u64cd\u4f5c\u90fd\u662f\u4e0d\u80fd\u88ab\u91cd\u6392\u5e8f\u7684\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u6709\u7ade\u4e89\u7684\u540c\u6b65\u548c\u65e0\u7ade\u4e89\u7684\u540c\u6b65\uff0csynchronized \u673a\u5236\u9488\u5bf9\u65e0\u7ade\u4e89\u7684\u540c\u6b65\u8fdb\u884c\u4e86\u4f18\u5316\uff08volatile \u901a\u5e38\u662f\u975e\u7ade\u4e89\u7684\uff09\u3002\u4e00\u4e2a\u201c\u5feb\u901f\u901a\u9053\uff08Fast-Path\uff09\u201d\u7684\u975e\u7ade\u4e89\u540c\u6b65\u5c06\u6d88\u8017 20~250 \u4e2a\u65f6\u949f\u5468\u671f\u3002\u65e0\u7ade\u4e89\u540c\u6b65\u7684\u5f00\u9500\u5bf9\u5e94\u7528\u7a0b\u5e8f\u6574\u4f53\u6027\u80fd\u7684\u5f71\u54cd\u5fae\u4e4e\u5176\u5fae\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u66f4\u5b8c\u5907\u7684 JVM \u80fd\u901a\u8fc7\u9038\u51fa\u5206\u6790\uff08Escape Analysis\uff09\u6765\u627e\u51fa\u4e0d\u4f1a\u53d1\u5e03\u5230\u5806\u7684\u672c\u5730\u5bf9\u8c61\u5f15\u7528\uff08\u56e0\u6b64\u8fd9\u4e2a\u5f15\u7528\u662f\u7ebf\u7a0b\u672c\u5730\u7684\uff09"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'// \u901a\u8fc7\u9501\u6d88\u9664\u4f18\u5316\u53bb\u6389\u7684\u9501\u83b7\u53d6\u64cd\u4f5c\npublic String getStoogeNames() {\n  List<String> stooges = new Vector<String>();\n  stooges.add("Moe");\n  stooges.add("Larry");\n  stooges.add("Curly");\n  return stooges.toString();\n}\n'})}),"\n",(0,l.jsx)(s.p,{children:"\u7f16\u8bd1\u5668\u6267\u884c\u9501\u7c92\u5ea6\u7c97\u5316\uff08Lock Coarsening\uff09\u64cd\u4f5c\uff0c\u5373\u5c06\u90bb\u8fd1\u7684\u540c\u6b65\u4ee3\u7801\u5757\u7528\u540c\u4e00\u4e2a\u9501\u5408\u5e76\u8d77\u6765"}),"\n",(0,l.jsx)(s.p,{children:"\u4e0d\u8981\u8fc7\u5ea6\u62c5\u5fc3\u975e\u7ade\u4e89\u540c\u6b65\u5e26\u6765\u7684\u5f00\u9500\uff0c\u8fd9\u4e2a\u57fa\u672c\u7684\u673a\u5236\u5df2\u7ecf\u975e\u5e38\u5feb\u4e86\uff0c\u5e76\u4e14 JVM \u8fd8\u80fd\u8fdb\u884c\u989d\u5916\u7684\u4f18\u5316\u4ee5\u8fdb\u4e00\u6b65\u964d\u4f4e\u6216\u6d88\u9664\u5f00\u9500\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u963b\u585e",children:"\u963b\u585e"}),"\n",(0,l.jsx)(s.p,{children:"\u975e\u7ade\u4e89\u7684\u540c\u6b65\u53ef\u4ee5\u5b8c\u5168\u5728 JVM \u4e2d\u8fdb\u884c\u5904\u7406\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u7ade\u4e89\u7684\u540c\u6b65\u53ef\u80fd\u9700\u8981\u64cd\u4f5c\u7cfb\u7edf\u7684\u4ecb\u5165\uff0c\u4ece\u800c\u589e\u52a0\u5f00\u9500\u3002\u5f53\u5728\u9501\u4e0a\u53d1\u751f\u7ade\u4e89\u65f6\uff0c\u7ade\u4e89\u5931\u8d25\u7684\u7ebf\u7a0b\u80af\u5b9a\u4f1a\u963b\u585e\u3002JVM \u5728\u5b9e\u73b0\u963b\u585e\u884c\u4e3a\u65f6\uff0c\u5982\u679c\u7b49\u5f85\u65f6\u95f4\u8f83\u77ed\uff0c\u5219\u9002\u5408\u91c7\u7528\u81ea\u65cb\u7b49\u5f85\u65b9\u5f0f\u3002\u800c\u7b49\u5f85\u65f6\u95f4\u8f83\u957f\uff0c\u5219\u9002\u5408\u91c7\u7528\u7ebf\u7a0b\u6302\u8d77\u65b9\u5f0f\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u5f53\u7ebf\u7a0b\u65e0\u6cd5\u83b7\u53d6\u67d0\u4e2a\u9501\u6216\u8005\u7531\u4e8e\u5728\u67d0\u4e2a\u6761\u4ef6\u7b49\u5f85\u6216\u5728 I/0 \u64cd\u4f5c\u4e0a\u963b\u585e\u65f6\uff0c\u9700\u8981\u88ab\u6302\u8d77\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u5c06\u5305\u542b\u4e24\u6b21\u989d\u5916\u7684\u4e0a\u4e0b\u6587\u5207\u6362\uff0c\u4ee5\u53ca\u6240\u6709\u5fc5\u8981\u7684\u64cd\u4f5c\u7cfb\u7edf\u64cd\u4f5c\u548c\u7f13\u5b58\u64cd\u4f5c\uff1a\u88ab\u963b\u585e\u7684\u7ebf\u7a0b\u5728\u5176\u6267\u884c\u65f6\u95f4\u7247\u8fd8\u672a\u7528\u5b8c\u4e4b\u524d\u5c31\u88ab\u4ea4\u6362\u51fa\u53bb\uff0c\u800c\u5728\u968f\u540e\u5f53\u8981\u83b7\u53d6\u7684\u9501\u6216\u8005\u5176\u4ed6\u8d44\u6e90\u53ef\u7528\u65f6\uff0c\u53c8\u518d\u6b21\u88ab\u5207\u6362\u56de\u6765\u3002\u3008\u7531\u4e8e\u9501\u7ade\u4e89\u800c\u5bfc\u81f4\u963b\u585e\u65f6\uff0c\u7ebf\u7a0b\u5728\u6301\u6709\u9501\u65f6\u5c06\u5b58\u5728\u4e00\u5b9a\u7684\u5f00\u9500\uff1a\u5f53\u5b83\u91ca\u653e\u9501\u65f6\uff0c\u5fc5\u987b\u544a\u8bc9\u64cd\u4f5c\u7cfb\u7edf\u6062\u590d\u8fd0\u884c\u963b\u585e\u7684\u7ebf\u7a0b\u3002\u3009"}),"\n",(0,l.jsx)(s.h2,{id:"\u51cf\u5c11\u9501\u7684\u7ade\u4e89",children:"\u51cf\u5c11\u9501\u7684\u7ade\u4e89"}),"\n",(0,l.jsx)(s.p,{children:"\u5728\u5e76\u53d1\u7a0b\u5e8f\u4e2d\uff0c\u5bf9\u53ef\u4f38\u7f29\u6027\u7684\u6700\u4e3b\u8981\u5a01\u80c1\u5c31\u662f\u72ec\u5360\u65b9\u5f0f\u7684\u8d44\u6e90\u9501"}),"\n",(0,l.jsx)(s.p,{children:"\u4e24\u4e2a\u56e0\u7d20\u5f71\u54cd\u9501\u4e0a\u53d1\u751f\u7ade\u4e89\u7684\u53ef\u80fd\u6027\uff1a\u9501\u7684\u8bf7\u6c42\u9891\u7387\uff0c\u4ee5\u53ca\u6bcf\u6b21\u6301\u6709\u8be5\u9501\u7684\u65f6\u673a\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u964d\u4f4e\u9501\u7684\u7ade\u4e89\u7a0b\u5e8f\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u51cf\u5c11\u9501\u7684\u6301\u6709\u65f6\u95f4"}),"\n",(0,l.jsx)(s.li,{children:"\u964d\u4f4e\u9501\u7684\u8bf7\u6c42\u9891\u7387"}),"\n",(0,l.jsx)(s.li,{children:"\u4f7f\u7528\u5e26\u6709\u534f\u8c03\u673a\u5236\u7684\u72ec\u5360\u9501\uff0c\u8fd9\u4e9b\u673a\u5236\u5141\u8bb8\u66f4\u9ad8\u7684\u5e76\u53d1\u6027"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u7f29\u5c0f\u9501\u7684\u8303\u56f4\u5feb\u8fdb\u5feb\u51fa",children:"\u7f29\u5c0f\u9501\u7684\u8303\u56f4\uff08\u201c\u5feb\u8fdb\u5feb\u51fa\u201d\uff09"}),"\n",(0,l.jsx)(s.p,{children:"\u964d\u4f4e\u53d1\u751f\u7ade\u4e89\u53ef\u80fd\u6027\u7684\u4e00\u79cd\u6709\u6548\u65b9\u5f0f\u5c31\u662f\u5c3d\u53ef\u80fd\u7f29\u77ed\u9501\u7684\u6301\u6709\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u5c06\u4e00\u4e9b\u4e0e\u9501\u65e0\u5173\u7684\u4ee3\u7801\u79fb\u51fa\u540c\u6b65\u4ee3\u7801\u5757\uff0c\u5c24\u5176\u662f\u90a3\u4e9b\u5f00\u9500\u8f83\u5927\u7684\u64cd\u4f5c\uff0c\u4ee5\u53ca\u53ef\u80fd\u88ab\u963b\u585e\u7684\u64cd\u4f5c\uff0c\u4f8b\u5982 I/O \u64cd\u4f5c\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u51cf\u5c0f\u9501\u7684\u7c92\u5ea6",children:"\u51cf\u5c0f\u9501\u7684\u7c92\u5ea6"}),"\n",(0,l.jsx)(s.p,{children:"\u53e6\u4e00\u4e2a\u51cf\u5c0f\u9501\u7684\u6301\u6709\u65f6\u95f4\u7684\u65b9\u5f0f\u662f\u964d\u4f4e\u7ebf\u7a0b\u8bf7\u6c42\u9501\u7684\u9891\u7387\u3008\u4ece\u800c\u51cf\u5c0f\u53d1\u751f\u7ade\u4e89\u7684\u53ef\u80fd\u6027\uff09\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7\u9501\u5206\u89e3\u548c\u9501\u5206\u6bb5\u7b49\u6280\u672f\u6765\u5b9e\u73b0\uff0c\u5728\u8fd9\u4e9b\u6280\u672f\u4e2d\u5c06\u91c7\u7528\u591a\u4e2a\u76f8\u4e92\u72ec\u7acb\u7684\u9501\u6765\u4fdd\u62a4\u72ec\u7acb\u7684\u72b6\u6001\u53d8\u91cf\uff0c\u4ece\u800c\u6539\u53d8\u8fd9\u4e9b\u53d8\u91cf\u5728\u4e4b\u524d\u7531\u5355\u4e2a\u9501\u6765\u4fdd\u62a4\u7684\u60c5\u51b5\u3002\u8fd9\u4e9b\u662f\u6280\u672f\u80fd\u51cf\u5c0f\u9501\u64cd\u4f5c\u7684\u7c92\u5ea6\uff0c\u5e76\u80fd\u5b9e\u73b0\u66f4\u9ad8\u7684\u53ef\u4f38\u7f29\u6027\uff0c\u7136\u800c\uff0c\u4f7f\u7528\u7684\u9501\u8d8a\u591a\uff0c\u90a3\u4e48\u53d1\u751f\u6b7b\u9501\u7684\u98ce\u9669\u4e5f\u5c31\u8d8a\u9ad8\u3002"}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-java",children:'\n@ThreadSafe\npublic class ServerStatus {\n  // \u4e24\u79cd\u7c7b\u578b\u7684\u4fe1\u606f\u662f\u5b8c\u5168\u72ec\u7acb\u7684\n  @GuardedBy("users")\n  public final Set<String> users;\n  @GuardedBy("queries")\n  public final Set<String> queries;\n  \n  public synchronized void addUser(String u) {\n    users.add(u);\n  }\n  \n  // \u9501\u5206\u89e3\n  public void addUser(String u) {\n    synchronized (users) {\n      users.add(u);\n    }\n  }\n  \n  public void addQuery(String q) {\n    synchronized (queries) {\n      queries.add(q);\n    }\n  }\n}\n'})}),"\n",(0,l.jsx)(s.h3,{id:"\u9501\u5206\u6bb5",children:"\u9501\u5206\u6bb5"}),"\n",(0,l.jsx)(s.p,{children:"\u4f8b\u5982\uff0c\u5728 ConcurrentHashMap \u7684\u5b9e\u73b0\u4e2d\u4f7f\u7528\u4e86\u4e00\u4e2a\u5305\u542b 16 \u4e2a\u9501\u7684\u6570\u7ec4\uff0c\u6bcf\u4e2a\u9501\u4fdd\u62a4\u6240\u6709\u6563\u5217\u6876\u7684 1/16 \uff0c\u5176\u4e2d\u7b2c N\u4e2a\u6563\u5217\u6876\u7531\u7b2c\uff08 N mod 16 \uff09\u4e2a\u9501\u6765\u4fdd\u62a4\u3002\u5047\u8bbe\u6563\u5217\u51fd\u6570\u5177\u6709\u5408\u7406\u7684\u5206\u5e03\u6027\uff0c\u5e76\u4e14\u5173\u952e\u5b57\u80fd\u591f\u5b9e\u73b0\u5747\u5300\u5206\u5e03\uff0c\u90a3\u4e48\u8fd9\u5927\u7ea6\u80fd\u628a\u5bf9\u4e8e\u9501\u7684\u8bf7\u6c42\u51cf\u5c11\u5230\u539f\u67651/16."}),"\n",(0,l.jsx)(s.p,{children:"\u9501\u5206\u6bb5\u7684\u4e00\u4e2a\u52a3\u52bf\u5728\u4e8e\uff1a \u4e0e\u91c7\u7528\u5355\u4e2a\u9501\u6765\u5b9e\u73b0\u72ec\u5360\u8bbf\u95ee\u76f8\u6bd4\uff0c\u8981\u83b7\u53d6\u591a\u4e2a\u9501\u6765\u5b9e\u73b0\u72ec\u5360\u8bbf\u95ee\u5c06\u66f4\u52a0\u56f0\u96be\u5e76\u4e14\u5f00\u9500\u66f4\u9ad8\u3002\u901a\u5e38\uff0c\u5728\u6267\u884c\u4e00\u4e2a\u64cd\u4f5c\u65f6\u6700\u591a\u53ea\u9700\u83b7\u53d6\u4e00\u4e2a\u9501\uff0c\u4f46\u5728\u67d0\u4e9b\u7cbe\u51b5\u4e0b\u9700\u8981\u52a0\u9501\u6574\u4e2a\u5bb9\u5668\uff0c\u4f8b\u5982\u5f53 ConcurrentHashMap \u9700\u8981\u6269\u5c55\u6620\u5c04\u8303\u56f4\uff0c\u4ee5\u53ca\u91cd\u65b0\u8ba1\u7b97\u952e\u503c\u7684\u6563\u5230\u503c\u8981\u5206\u5e03\u5230\u66f4\u5927\u7684\u6876\u96c6\u5408\u4e2d\u65f6\uff0c\u5c31\u9700\u8981\u83b7\u53d6\u5206\u6bb5\u9501\u96c6\u5408\u4e2d\u6240\u6709\u7684\u9501\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u907f\u514d\u70ed\u70b9\u57df",children:"\u907f\u514d\u70ed\u70b9\u57df"}),"\n",(0,l.jsx)(s.p,{children:"\u5f53\u6bcf\u4e2a\u64cd\u4f5c\u90fd\u8bf7\u6c42\u591a\u4e2a\u53d8\u91cf\u65f6\uff0c\u9501\u7684\u7c92\u5ea6\u5c06\u5f88\u96be\u964d\u4f4e\u3002\u8fd9\u662f\u5728\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027\u4e4b\u95f4\u76f8\u4e92\u5236\u8861\u7684\u53e6\u4e00\u4e2a\u65b9\u9762\uff0c\u4e00\u4e9b\u5e38\u89c1\u7684\u4f18\u5316\u63aa\u65bd\uff0c\u4f8b\u5982\u5c06\u4e00\u4e9b\u53cd\u590d\u8ba1\u7b97\u7684\u7ed3\u679c\u7f13\u5b58\u8d77\u6765\uff0c\u90fd\u4f1a\u5f15\u4eba\u4e00\u4e9b\u201c\u70ed\u70b9\u57df\uff08Hot Field\uff09\u201d\uff0c\u800c\u8fd9\u4e9b\u70ed\u70b9\u57df\u5f80\u5f80\u4f1a\u9650\u5236\u53ef\u4f38\u7f29\u2019\u6027\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u4e3a\u4e86\u907f\u514d\u679a\u4e3e\u6bcf\u4e2a\u5143\u7d20\uff0c ConcurrentHashMap\u4e3a\u6bcf\u4e2a\u5206\u6bb5\u90fd\u7ef4\u62a4\u4e86\u4e00\u4e2a\u72ec\u7acb\u7684\u8ba1\u6570\uff0c\u5e76\u901a\u8fc7\u6bcf\u4e2a\u5206\u6bb5\u7684\u9501\u6765\u7ef4\u62a4\u8fd9\u4e2a\u503c\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u4e00\u4e9b\u66ff\u4ee3\u72ec\u5360\u9501\u7684\u65b9\u6cd5",children:"\u4e00\u4e9b\u66ff\u4ee3\u72ec\u5360\u9501\u7684\u65b9\u6cd5"}),"\n",(0,l.jsx)(s.p,{children:"ReadWriteLock\uff1a\u5982\u679c\u591a\u4e2a\u8bfb\u53d6\u64cd\u4f5c\u90fd\u4e0d\u4f1a\u4fee\u6539\u5171\u4eab\u8d44\u6e90\uff0c\u90a3\u4e48\u8fd9\u4e9b\u8bfb\u53d6\u64cd\u4f5c\u53ef\u4ee5\u540c\u65f6\u8bbf\u95ee\u8be5\u5171\u4eab\u8d44\u6e90\uff0c\u4f46\u5728\u6267\u884c\u5199\u5165\u64cd\u4f5c\u65f6\u5fc5\u987b\u4ee5\u72ec\u5360\u65b9\u5f0f\u6765\u83b7\u53d6\u9501\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u539f\u5b50\u53d8\u91cf\uff1a\u539f\u5b50\u53d8\u91cf\u7c7b\u63d0\u4f9b\u4e86\u5728\u6574\u6570\u6216\u8005\u5bf9\u8c61\u5f15\u7528\u4e0a\u7684\u7ec6\u7c92\u5ea6\u539f\u5b50\u64cd\u4f5c\uff08\u56e0\u6b64\u53ef\u4f38\u7f29\u6027\u66f4\u9ad8\uff09\uff0c\u5e76\u4f7f\u7528\u4e86\u73b0\u4ee3\u5904\u7406\u5668\u4e2d\u63d0\u4f9b\u7684\u5e95\u5c42\u5e76\u53d1\u539f\u8bed( \u4f8b\u5982\u6bd4\u8f83\u5e76\u4ea4\u6362\uff3bcompare-and-swap]) \u539f\u5b50\u53d8\u91cf\u80fd\u964d\u4f4e\u70ed\u70b9\u57df\u7684\u66f4\u65b0\u5f00\u9500\uff0c\u4f46\u5e76\u4e0d\u80fd\u5b8c\u5168\u6d88\u9664\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"\u76d1\u6d4b-cpu-\u7684\u5229\u7528\u7387",children:"\u76d1\u6d4b CPU \u7684\u5229\u7528\u7387"}),"\n",(0,l.jsx)(s.p,{children:"\u5982\u679cCPU\u6ca1\u6709\u5f97\u5230\u5145\u5206\u5229\u7528\uff0c\u901a\u5e38\u7531\u4e8e\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u8d1f\u8f7d\u4e0d\u5145\u8db3 \u6d4b\u8bd5\u65f6\u589e\u52a0\u8d1f\u8f7d\uff0c\u5e76\u68c0\u67e5\u5229\u7528\u7387\u3001\u54cd\u5e94\u65f6\u95f4\u548c\u670d\u52a1\u65f6\u95f4\u7b49\u6307\u6807\u7684\u53d8\u5316"}),"\n",(0,l.jsx)(s.li,{children:"I/O\u5bc6\u96c6"}),"\n",(0,l.jsx)(s.li,{children:"\u5916\u90e8\u9650\u5236 \u5982\u679c\u4f9d\u8d56\u5916\u90e8\u670d\u52a1"}),"\n",(0,l.jsx)(s.li,{children:"\u9501\u7ade\u4e89 \u7ebf\u7a0b\u8f6c\u50a8\u5b58\u5728\u76f8\u5e94\u7684\u6808\u5e27\uff0c\u5305\u542b\u4fe1\u606f\u5982\u201cwaiting to lock monitor\u201d"}),"\n"]}),"\n",(0,l.jsx)(s.h3,{id:"\u5411\u5bf9\u8c61\u6c60\u8bf4\u4e0d",children:"\u5411\u5bf9\u8c61\u6c60\u8bf4\u4e0d"}),"\n",(0,l.jsx)(s.p,{children:"JVM \u7684\u65e9\u671f\u7248\u672c\u4e2d\uff0c\u5bf9\u8c61\u5206\u914d\u548c\u5783\u573e\u56de\u6536\u7b49\u64cd\u4f5c\u7684\u6267\u884c\u901f\u5ea6\u975e\u5e38\u6162\u3002\u4f46\u5728\u540e\u7eed\u7684\u7248\u672c\u4e2d\uff0c\u8fd9\u6bb5\u64cd\u4f5c\u7684\u6027\u80fd\u5f97\u5230\u4e86\u6781\u5927\u63d0\u9ad8\u3002"}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u5e38\uff0c\u5bf9\u8c61\u5206\u914d\u64cd\u4f5c\u7684\u5f00\u9500\u6bd4\u540c\u6b65\u7684\u5f00\u9500\u66f4\u4f4e"}),"\n",(0,l.jsx)(s.h2,{id:"\u793a\u4f8b\u6bd4\u8f83-map-\u7684\u6027\u80fd",children:"\u793a\u4f8b\uff1a\u6bd4\u8f83 Map \u7684\u6027\u80fd"}),"\n",(0,l.jsx)(s.p,{children:"ConcurrentHashMap"}),"\n",(0,l.jsx)(s.p,{children:"ConcurrentSkipListMap"}),"\n",(0,l.jsx)(s.p,{children:"synchronized HashMap"}),"\n",(0,l.jsx)(s.p,{children:"synchronized TreeMap"}),"\n",(0,l.jsx)(s.p,{children:"\u540c\u6b65\u5bb9\u5668\u7684\u6570\u91cf\u5e76\u975e\u8d8a\u591a\u8d8a\u597d\u3002\u5355\u7ebf\u7a0b\u60c5\u51b5\u4e0b\u7684\u6027\u80fd\u4e0e ConcurrentHashMap \u7684\u6027\u80fd\u57fa\u672c\u76f8\u5f53\uff0c\u4f46\u5f53\u8d1f\u8f7d\u60c5\u51b5\u7531\u975e\u7ade\u4e89\u6027\u8f6c\u53d8\u6210\u7ade\u4e89\u6027\u65f6\u4e00\u4e00\u8fd9\u91cc\u662f\u4e24\u4e2a\u7ebf\u7a0b\uff0c\u540c\u6b65\u5bb9\u5668\u7684\u6027\u80fd\u5c06\u53d8\u5f97\u7cdf\u7cd5\u3002"}),"\n",(0,l.jsx)(s.h2,{id:"\u51cf\u5c11\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500",children:"\u51cf\u5c11\u4e0a\u4e0b\u6587\u5207\u6362\u7684\u5f00\u9500"}),"\n",(0,l.jsx)(s.p,{children:"\u5f53\u4efb\u52a1\u5728\u8fd0\u884c\u548c\u963b\u585e\u8fd9\u4e24\u4e2a\u72b6\u6001\u4e4b\u95f4\u8f6c\u6362\u65f6\uff0c\u5c31\u76f8\u5f53\u4e8e\u4e00\u6b21\u4e0a\u4e0b\u6587\u5207\u6362"}),"\n",(0,l.jsx)(s.p,{children:"\u8bf7\u6c42\u670d\u52a1\u7684\u65f6\u95f4\u4e0d\u5e94\u8be5\u8fc7\u957f\uff0c\u4e3b\u8981\u6709\u4ee5\u4e0b\u539f\u56e0\u3002\u9996\u5148\uff0c\u670d\u52a1\u65f6\u95f4\u5c06\u5f71\u54cd\u670d\u52a1\u8d28\u91cf\uff1a\u670d\u52a1\u65f6\u95f4\u8d8a\u957f\uff0c\u5c31\u610f\u5473\u7740\u6709\u7a0b\u5e8f\u5728\u83b7\u5f97\u7ed3\u679c\u65f6\u9700\u8981\u7b49\u5f85\u66f4\u957f\u7684\u65f6\u95f4\u3002\u66f4\u91cd\u8981\u7684\u662f\uff0c\u670d\u52a1\u65f6\u95f4\u8d8a\u957f\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u5b58\u5728\u8d8a\u591a\u7684\u9501\u7ade\u4e89\u3002\u5728\u9501\u83b7\u53d6\u64cd\u4f5c\u4e0a\u53d1\u751f\u7adf\u4e89\u65f6\u5c06\u5bfc\u81f4\u66f4\u591a\u7684\u4e0a\u4e0b\u6587\u5207\u6362"}),"\n",(0,l.jsx)(s.p,{children:"\u901a\u8fc7\u5c06 I/0 \u64cd\u4f5c\u4ece\u5904\u7406\u8bf7\u6c42\u7684\u7ebf\u7a0b\u4e2d\u5206\u79bb\u51fa\u6765\uff0c\u4e95\u5c06 I/0 \u64cd\u4f5c\u79fb\u5230\u4e86\u53e6\u4e00\u4e2a\u7528\u6237\u611f\u77e5\u4e0d\u5230\u5f00\u9500\u7684\u7ebf\u7a0b\u4e0a\u3002\u901a\u8fc7\u628a\u6240\u6709\u8bb0\u5f55\u65e5\u5fd7\u7684I/O\u8f6c\u79fb\u5230\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u8fd8\u6d88\u9664\u4e86\u8f93\u51fa\u6d41\u4e0a\u7684\u7ade\u4e89\uff0c\u56e0\u6b64\u53c8\u53bb\u6389\u4e86\u4e00\u4e2a\u7ade\u4e89\u6765\u6e90\u3002\u8fd9\u5c06\u63d0\u5347\u6574\u4f53\u7684\u541e\u5410\u91cf\uff0c\u56e0\u4e3a\u5728\u8c03\u5ea6\u4e2d\u6d88\u8017\u7684\u8d44\u6e90\u66f4\u5c11\uff0c\u4e0a\u4e0b\u6587\u5207\u6362\u6b21\u6570\u66f4\u5c11\uff0c\u5e76\u4e14\u9501\u7684\u7ba1\u7406\u4e5f\u66f4\u7b80\u5355\u3002"})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>c});var a=n(6540);const l={},i=a.createContext(l);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);