"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[9986],{4757:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>s});const c=JSON.parse('{"id":"java-concurrency-in-practice/\u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669","title":"\u7b2c10\u7ae0 \u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669","description":"\u5728\u5b89\u5168\u6027\u4e0e\u6d3b\u8dc3\u6027\u4e4b\u95f4\u901a\u5e38\u5b58\u5728\u7740\u67d0\u79cd\u5236\u8861\u3002\u6211\u4eec\u4f7f\u7528\u52a0\u9501\u673a\u5236\u6765\u786e\u4fdd\u94b1\u7a0b\u5b89\u5168\uff0c\u4f46\u5982\u679c\u8fc7\u5ea6\u5730\u4f7f\u7528\u5982\u9501\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u987a\u5e8f\u6b7b\u9501\uff08 Lock-Ordering Deadlock \uff09\u3002\u540c\u610f\uff0c\u6211\u4eec\u4f7f\u7528\u7ebf\u7a0b\u548c\u4fe1\u53f7\u91cf\u6765\u9650\u5236\u5bf9\u8d44\u6e90\u7684\u4f7f\u7528\uff0c\u4f46\u8fd9\u4e9b\u88ab\u9650\u5236\u7684\u884c\u4e3a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8d44\u6e90\u6b7b\u9501\uff08Resource Deadlock \uff09\u3002","source":"@site/docs/java-concurrency-in-practice/10-\u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669.md","sourceDirName":"java-concurrency-in-practice","slug":"/java-concurrency-in-practice/\u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669","permalink":"/docs/java-concurrency-in-practice/\u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669","draft":false,"unlisted":false,"editUrl":"https://github.com/yanpeipan/yanpeipan.github.com/tree/main/docs/java-concurrency-in-practice/10-\u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669.md","tags":[{"inline":true,"label":"Java","permalink":"/docs/tags/java"},{"inline":true,"label":"concurrency","permalink":"/docs/tags/concurrency"}],"version":"current","sidebarPosition":10,"frontMatter":{"title":"\u7b2c10\u7ae0 \u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669","excerpt":null,"last_modified_at":"2021-02-02","toc":true,"tags":["Java","concurrency"]},"sidebar":"javaConcurrencySidebar","previous":{"title":"\u7b2c8\u7ae0 \u7ebf\u7a0b\u6c60\u7684\u4f7f\u7528","permalink":"/docs/java-concurrency-in-practice/\u7ebf\u7a0b\u6c60\u7684\u4f7f\u7528"},"next":{"title":"\u7b2c11\u7ae0 \u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027","permalink":"/docs/java-concurrency-in-practice/\u6027\u80fd\u4e0e\u53ef\u4f38\u7f29\u6027"}}');var a=i(4848),t=i(8453);const r={title:"\u7b2c10\u7ae0 \u907f\u514d\u6d3b\u8dc3\u6027\u5371\u9669",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},l=void 0,o={},s=[{value:"\u6b7b\u9501",id:"\u6b7b\u9501",level:2},{value:"\u9501\u987a\u5e8f\u6b7b\u9501",id:"\u9501\u987a\u5e8f\u6b7b\u9501",level:3},{value:"\u52a8\u6001\u7684\u9501\u987a\u5e8f\u6b7b\u9501",id:"\u52a8\u6001\u7684\u9501\u987a\u5e8f\u6b7b\u9501",level:3},{value:"\u5728\u534f\u4f5c\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u7684\u6b7b\u9501",id:"\u5728\u534f\u4f5c\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u7684\u6b7b\u9501",level:3},{value:"\u5f00\u653e\u8c03\u7528",id:"\u5f00\u653e\u8c03\u7528",level:3},{value:"\u8d44\u6e90\u6b7b\u9501",id:"\u8d44\u6e90\u6b7b\u9501",level:3},{value:"\u6b7b\u9501\u7684\u907f\u514d\u4e0e\u8bca\u65ad",id:"\u6b7b\u9501\u7684\u907f\u514d\u4e0e\u8bca\u65ad",level:2},{value:"\u652f\u6301\u5b9a\u65f6\u7684\u9501",id:"\u652f\u6301\u5b9a\u65f6\u7684\u9501",level:3},{value:"\u901a\u8fc7\u7ebf\u7a0b\u8f6c\u50a8\u4fe1\u606f\u6765\u5206\u6790\u6b7b\u9501",id:"\u901a\u8fc7\u7ebf\u7a0b\u8f6c\u50a8\u4fe1\u606f\u6765\u5206\u6790\u6b7b\u9501",level:3},{value:"\u5176\u4ed6\u6d3b\u8dc3\u6027\u5371\u9669",id:"\u5176\u4ed6\u6d3b\u8dc3\u6027\u5371\u9669",level:2},{value:"\u9965\u997f",id:"\u9965\u997f",level:3},{value:"\u7cdf\u7cd5\u7684\u54cd\u5e94\u6027",id:"\u7cdf\u7cd5\u7684\u54cd\u5e94\u6027",level:3},{value:"\u6d3b\u9501",id:"\u6d3b\u9501",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"\u5728\u5b89\u5168\u6027\u4e0e\u6d3b\u8dc3\u6027\u4e4b\u95f4\u901a\u5e38\u5b58\u5728\u7740\u67d0\u79cd\u5236\u8861\u3002\u6211\u4eec\u4f7f\u7528\u52a0\u9501\u673a\u5236\u6765\u786e\u4fdd\u94b1\u7a0b\u5b89\u5168\uff0c\u4f46\u5982\u679c\u8fc7\u5ea6\u5730\u4f7f\u7528\u5982\u9501\uff0c\u5219\u53ef\u80fd\u5bfc\u81f4\u987a\u5e8f\u6b7b\u9501\uff08 Lock-Ordering Deadlock \uff09\u3002\u540c\u610f\uff0c\u6211\u4eec\u4f7f\u7528\u7ebf\u7a0b\u548c\u4fe1\u53f7\u91cf\u6765\u9650\u5236\u5bf9\u8d44\u6e90\u7684\u4f7f\u7528\uff0c\u4f46\u8fd9\u4e9b\u88ab\u9650\u5236\u7684\u884c\u4e3a\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8d44\u6e90\u6b7b\u9501\uff08Resource Deadlock \uff09\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u6b7b\u9501",children:"\u6b7b\u9501"}),"\n",(0,a.jsx)(e.p,{children:"\u7ecf\u5178\u7684\u201c\u54f2\u5b66\u5bb6\u8fdb\u9910\u201d\u95ee\u9898\u5f88\u597d\u7684\u63cf\u8ff0\u4e86\u6b7b\u9501\u72b6\u51b5\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5f53\u6b7b\u9501\u51fa\u73b0\u65f6\uff0c\u5f80\u5f80\u662f\u6700\u7cdf\u7cd5\u7684\u65f6\u5019--\u9ad8\u8d1f\u8f7d\u7684\u60c5\u51b5\u4e0b"}),"\n",(0,a.jsx)(e.h3,{id:"\u9501\u987a\u5e8f\u6b7b\u9501",children:"\u9501\u987a\u5e8f\u6b7b\u9501"}),"\n",(0,a.jsx)(e.p,{children:"\u5728LeftRightDeadLock\u4e2d\u53d1\u751f\u6b7b\u9501\u7684\u539f\u56e0\u662f\uff1a\u4e24\u4e2a\u7ebf\u7a0b\u8bd5\u56fe\u4ee5\u4e0d\u540c\u7684\u987a\u5e8f\u6765\u83b7\u5f97\u76f8\u540c\u7684\u9501\u3002"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public class LeftRightDeadLock {\n    private final Object left = new Object();\n    private final Object right = new Object();\n    \n    public void leftRight() {\n        synchronized (left) {\n            synchronized (right) {\n                doSomething();\n            }\n        }\n    }\n    \n    public void rightLeft() {\n        synchronized (right) {\n            synchronized (left) {\n                doSomethingElse();\n            }\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u6240\u6709\u7ebf\u7a0b\u4ee5\u56fa\u5b9a\u7684\u987a\u5e8f\u6765\u83b7\u53d6\u9501\uff0c\u90a3\u4e48\u5728\u7a0b\u5e8f\u4e2d\u5c31\u4e0d\u4f1a\u51fa\u73b0\u987a\u5e8f\u6b7b\u9501\u7684\u95ee\u9898\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u52a8\u6001\u7684\u9501\u987a\u5e8f\u6b7b\u9501",children:"\u52a8\u6001\u7684\u9501\u987a\u5e8f\u6b7b\u9501"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:"public void transferMoney(Account fromAccount, Account toAccount, DollarAmount amount) throws InsuffcientFundsException {\n    synchronized (fromAccount) {\n        synchronized (toAccount) {\n            \n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u5728\u534f\u4f5c\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u7684\u6b7b\u9501",children:"\u5728\u534f\u4f5c\u5bf9\u8c61\u4e4b\u95f4\u53d1\u751f\u7684\u6b7b\u9501"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u679c\u5728\u6301\u6709\u9501\u65f6\u8c03\u7528\u67d0\u4e2a\u5916\u90e8\u65b9\u6cd5\uff0c\u90a3\u4e48\u5c06\u51fa\u73b0\u6d3b\u8dc3\u6027\u95ee\u9898\u3002\u5728\u8fd9\u4e2a\u5916\u90e8\u65b9\u6cd5\u4e2d\u53ef\u80fd\u4f1a\u83b7\u53d6\u5176\u4ed6\u9501\uff08\u53ef\u80fd\u4f1a\u6b7b\u9501\uff09\u6216\u8005\u963b\u585e\u65f6\u95f4\u8fc7\u957f\uff0c\u5bfc\u81f4\u5176\u4ed6\u7ebf\u7a0b\u65e0\u6cd5\u53ca\u65f6\u83b7\u5f97\u5f53\u524d\u88ab\u6301\u6709\u7684\u9501\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u5f00\u653e\u8c03\u7528",children:"\u5f00\u653e\u8c03\u7528"}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u8c03\u7528\u67d0\u4e2a\u65b9\u6cd5\u65f6\u4e0d\u9700\u8981\u6301\u6709\u9501\uff0c\u90a3\u4e48\u8fd9\u79cd\u8c03\u7528\u5c06\u88ab\u79f0\u4e3a\u5f00\u653e\u8c03\u7528\uff08Open Call\uff09"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-java",children:'@ThreadSafe\nclass Taxi {\n    @GuardedBy("this")\n    private Point location, destination;\n    private final Dispatcher dispatcher;\n    \n    public synchronized Ponit getLocation() {\n        return location;\n    }\n    \n    public void setLocation(Point location) {\n        boolean reachedDestination;\n        synchronized (this) {\n            this.location = location;\n            reachedDestination = location.equals(destination);\n        }\n        if (reachedDestination) {\n            dispatcher.notifyAvailable(this);\n        }\n    }\n}\n\n@ThreadSafe\nclass Dispatcher {\n    @GuardedBy("this")\n    private final Set<Taxi> taxis;\n    @GuardedBy("this")\n    private final Set<Taxi> availableTaxis;\n    \n    public synchronized void notifyAvailable(Taxi taxi) {\n        availableTaxis.add(taxi);\n    }\n    public Image getImage() {\n        set<Taxi> copy;\n        synchronized (this) {\n            copy = new HashSet<Taxi>(taxis);\n        }\n        Image image = new Image();\n        for (Taxi t : copy) {\n            image.drawMarker(t.getLocation());\n        }\n        return image;\n    }\n}\n'})}),"\n",(0,a.jsx)(e.p,{children:"\u5728\u7a0b\u5e8f\u4e2d\u5c3d\u91cf\u4f7f\u7528\u5f00\u653e\u8c03\u7528\u3002\u4e0e\u90a3\u4e9b\u5728\u6301\u6709\u9501\u65f6\u8c03\u7528\u5916\u90e8\u65b9\u6cd5\u7684\u7a0b\u5e8f\u76f8\u6bd4\uff0c\u66f4\u6613\u4e8e\u5bf9\u4f9d\u8d56\u4e8e\u5f00\u653e\u8c03\u7528\u7684\u7a0b\u5e8f\u8fdb\u884c\u6b7b\u9501\u5206\u6790"}),"\n",(0,a.jsx)(e.h3,{id:"\u8d44\u6e90\u6b7b\u9501",children:"\u8d44\u6e90\u6b7b\u9501"}),"\n",(0,a.jsx)(e.p,{children:"\u6b63\u5982\u5f53\u591a\u4e2a\u7ed3\u7a0b\u76f8\u4e92\u6301\u6709\u5f7c\u6b64\u6b63\u5728\u7b49\u5f85\u7684\u9501\u53c8\u4e0d\u91ca\u653e\u81ea\u5df1\u5df1\u6301\u6709\u7684\u9501\u65f6\u4f1a\u53d1\u751f\u6b7b\u9501\uff0c\u5f53\u5b83\u4eec\u5728\u76f8\u540c\u7684\u8d44\u6e90\u96c6\u5408\u4e0a\u7b49\u5f85\u65f6\uff0c\u4e5f\u4f1a\u53d1\u751f\u6b7b\u9501\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u5982\u4e24\u4e2a\u4e0d\u540c\u6570\u636e\u5e93\u7684\u8fde\u63a5\u6c60\uff0c\u8d44\u6e90\u6c60\u901a\u5e38\u91c7\u7528\u4fe1\u53f7\u91cf\u6765\u5b9e\u73b0\u5f53\u8d44\u6e90\u6c60\u4e3a\u7a7a\u65f6\u7684\u963b\u585e\u884c\u4e3a\u3002\u5982\u679c\u4e00\u4e2a\u4efb\u52a1\u9700\u8981\u8fde\u63a5\u4e24\u4e2a\u6570\u636e\u5e93\uff0c\u5e76\u4e14\u5728\u8bf7\u6c42\u8fd9\u4e24\u4e2a\u8d44\u6e90\u65f6\u4e0d\u4f1a\u59cb\u7ec8\u9075\u5faa\u76f8\u540c\u7684\u987a\u5e8f\uff0c\u90a3\u7ebf\u7a0bA\u6301\u6709D1 \u7684\u8fde\u63a5\uff0c\u7b49\u5f85 D2\u8fde\u63a5\u3002B\u5219\u6301\u6709D2\uff0c\u7b49\u5f85D1\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u53e6\u4e00\u79cd\u662f\u7ebf\u7a0b\u9965\u997f\u6b7b\u9501\uff08Thread-Stravation Deadlock) \u4e00\u4e2a\u4efb\u52a1\u63d0\u4ea4\u53e6\u4e00\u4e2a\u4efb\u52a1\uff0c\u5e76\u7b49\u5f85\u88ab\u63d0\u4ea4\u4efb\u52a1\u5728\u5355\u7ebf\u7a0b\u7684\u7684 Executor\u4e2d\u6267\u884c\u5b8c\u6210\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7b2c\u4e00\u4e2a\u4efb\u52a1\u5c06\u6765\u8fdc\u7b49\u5f85\u4e0b\u53bb\uff0c\u5e76\u4f7f\u5f97\u53e6\u4e00\u4e2a\u4efb\u52a1\u4ee5\u53ca\u5728\u8fd9\u4e2a Executor\u4e2d\u6267\u884c\u7684\u6240\u6709\u5176\u4ed6\u4efb\u52a1\u90fd\u505c\u6b62\u6267\u884c\u3002\u5982\u679c\u67d0\u4e9b\u4efb\u52a1\u9700\u8981\u7b49\u5f85\u5176\u5b83\u4efb\u52a1\u7684\u7ed3\u679c\uff0c\u90a3\u4e48\u8fd9\u62f4\u4efb\u52a1\u5f80\u5f80\u662f\u4ea7\u751f\u7ebf\u7a0b\u9965\u997f\u6b7b\u9501\u7684\u4e3b\u8981\u6765\u6e90\uff0c\u6709\u754c\u7ebf\u7a0b\u6c60\uff0f\u8d44\u6e90\u6c60\u4e0e\u76f8\u4e92\u4f9d\u8d56\u7684\u4efb\u52a1\u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528\u3002"}),"\n",(0,a.jsx)(e.h2,{id:"\u6b7b\u9501\u7684\u907f\u514d\u4e0e\u8bca\u65ad",children:"\u6b7b\u9501\u7684\u907f\u514d\u4e0e\u8bca\u65ad"}),"\n",(0,a.jsx)(e.h3,{id:"\u652f\u6301\u5b9a\u65f6\u7684\u9501",children:"\u652f\u6301\u5b9a\u65f6\u7684\u9501"}),"\n",(0,a.jsx)(e.p,{children:"\u5f53\u4f7f\u7528\u5185\u7f6e\u9501\u65f6\uff0c\u53ea\u8981\u6ca1\u6709\u83b7\u5f97\u9501\uff0c\u5c31\u4f1a\u6c38\u8fdc\u7b49\u5f85\u4e0b\u53bb\uff0c\u800c\u663e\u793a\u9501\u5219\u53ef\u4ee5\u6307\u5b9a\u4e00\u4e2a\u8d85\u65f6\u65f6\u9650\uff08 Timeout\uff09\uff0c\u5728\u7b49\u5f85\u8d85\u8fc7\u8bfb\u65f6\u95f4\u540e tryLock \u4f1a\u8fd4\u56de\u4e00\u4e2a\u5931\u8d25\u4fe1\u606f\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u901a\u8fc7\u7ebf\u7a0b\u8f6c\u50a8\u4fe1\u606f\u6765\u5206\u6790\u6b7b\u9501",children:"\u901a\u8fc7\u7ebf\u7a0b\u8f6c\u50a8\u4fe1\u606f\u6765\u5206\u6790\u6b7b\u9501"}),"\n",(0,a.jsx)(e.p,{children:"JVM \u4ecd\u7136\u901a\u8fc7\u7ebf\u7a0b\u8f6c\u50a8\uff08Thread Dump\uff09\u6765\u5e2e\u52a9\u8bc6\u522b\u6b7b\u9501\u7684\u53d1\u751f"}),"\n",(0,a.jsx)(e.h2,{id:"\u5176\u4ed6\u6d3b\u8dc3\u6027\u5371\u9669",children:"\u5176\u4ed6\u6d3b\u8dc3\u6027\u5371\u9669"}),"\n",(0,a.jsx)(e.h3,{id:"\u9965\u997f",children:"\u9965\u997f"}),"\n",(0,a.jsx)(e.p,{children:"\u5f53\u7ebf\u7a0b\u7531\u4e8e\u65e0\u6cd5\u8bbf\u95ee\u5b83\u6240\u9700\u8981\u7684\u8d44\u6e90\u800c\u4e0d\u80fd\u7ee7\u7eed\u6267\u884c\u65f6\uff0c\u5c31\u53d1\u751f\u4e86\u9965\u997f\uff08 Starvation\uff09"}),"\n",(0,a.jsx)(e.p,{children:"\u5f15\u53d1\u9965\u997f\u7684\u6700\u5e38\u89c1\u8d44\u6e90\u5c31\u662f CPU \u65f6\u949f\u5468\u671f\u3002\u5982\u679c\u5728 Java \u5e94\u7528\u7a0b\u5e8f\u4e2d\u5bf9\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7\u4f7f\u7528\u4e0d\u5f53\uff0c"}),"\n",(0,a.jsx)(e.p,{children:"\u6216\u8005\u5728\u6301\u6709\u9501\u65f6\u6267\u884c\u4e00\u6bb5\u65e0\u6cd5\u7ed3\u675f\u7684\u7ed3\u6784\uff08\u4f8b\u5982\u65e0\u9650\u951a\u574f\uff0c\u6216\u8005\u65e0\u9650\u5236\u5730\u7b49\u5f85\u67d0\u4e2a\u8d44\u6e90\uff09\uff0c\u90a3"}),"\n",(0,a.jsx)(e.p,{children:"\u4e48\u4e5f\u53ef\u80fd\u5bfc\u81f4\u9965\u997f\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8981\u907f\u514d\u4f7f\u7528\u7ebf\u7a0b\u7684\u4f18\u5148\u7ea7\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u589e\u52a0\u5e73\u53f0\u4f9d\u8d56\u6027\uff0c\u5e76\u53ef\u80fd\u5bfc\u81f4\u6d3b\u8dc3\u6027\u95ee\u9898\u3002\u5728\u5927\u591a\u6570\u5e76\u53d1\u5e94\u7528\u7a0b\u5e8f\u4e2d\uff0c\u90fd\u53ef\u4ee5\u4f7f\u7528\u9ed8\u8ba4\u7684\u7ebf\u7a0b\u4f18\u5148\u7ea7\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u7cdf\u7cd5\u7684\u54cd\u5e94\u6027",children:"\u7cdf\u7cd5\u7684\u54cd\u5e94\u6027"}),"\n",(0,a.jsx)(e.p,{children:"CPU\u5bc6\u96c6\u578b\u7684\u540e\u53f0\u4efb\u52a1\u53ef\u80fd\u5bf9\u54cd\u5e94\u6027\u9020\u6210\u5f71\u54cd\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u4e0d\u826f\u7684\u9501\u7ba1\u7406\u4e5f\u53ef\u80fd\u5bfc\u81f4\u7cdf\u7cd5\u7684\u54cd\u5e94\u6027\u3002"}),"\n",(0,a.jsx)(e.h3,{id:"\u6d3b\u9501",children:"\u6d3b\u9501"}),"\n",(0,a.jsx)(e.p,{children:"\u6d3b\u9501\uff08Livelock\uff09\u662f\u53e6\u4e00\u79cd\u5f62\u5f0f\u7684\u6d3b\u8dc3\u6027\u95ee\u9898\uff0c\u8be5\u95ee\u9898\u5c3d\u7ba1\u4e0d\u4f1a\u963b\u585e\u7ebf\u7a0b\uff0c\u4f46\u4e5f\u4e0d\u80fd\u7ee7\u7eed\u6267\u884c\uff0c\u56e0\u4e3a\u7ebf\u7a0b\u5c06\u4e0d\u65ad\u91cd\u590d\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c\uff0c\u800c\u4e14\u603b\u4f1a\u5931\u8d25\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u6bd2\u836f\u6d88\u606f\uff08Poison Message\uff09\u8fc7\u5ea6\u7684\u9519\u8bef\u6062\u590d\u4ee3\u7801\u9020\u6210"}),"\n",(0,a.jsx)(e.p,{children:"\u5f53\u591a\u4e2a\u76f8\u4e92\u534f\u4f5c\u7684\u7ebf\u7a0b\u90fd\u5bf9\u5f7c\u6b64\u8fdb\u884c\u54cd\u5e94\u4ece\u800c\u4fee\u6539\u5404\u81ea\u7684\u72b6\u6001\uff0c\u5e76\u4f7f\u5f97\u4efb\u4f55\u4e00\u4e2a\u7ebf\u7a0b\u90fd\u65e0\u6cd5\u7ee7\u7eed\u6267\u884c\u65f6\uff0c\u5c31\u53d1\u751f\u4e86\u6d3b\u9501\u3002\u3002\u8fd9\u5c31\u50cf\u4e24\u4e2a\u8fc7\u4e8e\u793c\u8c8c\u7684\u4eba\u5728\u534a\u8def\u4e0a\u9762\u5bf9\u9762\u5730\u76f8\u9047\uff1a\u4ed6\u4eec\u6309\u6b64\u90fd\u8ba9\u51fa\u5bf9\u65b9\u7684\u8def\uff0c\u7136\u800c\u53c8\u5728\u53e6\u4e00\u6761\u8def\u4e0a\u76f8\u9047\u4e86\u3002\u56e0\u6b64\u4ed6\u4eec\u5c31\u8fd9\u6837\u53cd\u590d\u5730\u907f\u8ba9\u4e0b\u53bb\u3002"}),"\n",(0,a.jsx)(e.p,{children:"\u8981\u89e3\u51b3\u8fd9\u79cd\u6d3b\u9501\u95ee\u9898\uff0c\u9700\u8981\u5728\u91cd\u8bd5\u673a\u5236\u4e2d\u5f15\u5165\u968f\u673a\u6027\u3002"})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>l});var c=i(6540);const a={},t=c.createContext(a);function r(n){const e=c.useContext(t);return c.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),c.createElement(t.Provider,{value:e},n.children)}}}]);