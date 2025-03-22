"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[9760],{1793:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>t,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"java-concurrency-in-practice/Java\u5185\u5b58\u6a21\u578b","title":"\u7b2c16\u7ae0 Java\u5185\u5b58\u6a21\u578b","description":"\u4ec0\u4e48\u662f\u5185\u5b58\u6a21\u578b\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u5b83","source":"@site/docs/java-concurrency-in-practice/16.Java\u5185\u5b58\u6a21\u578b.md","sourceDirName":"java-concurrency-in-practice","slug":"/java-concurrency-in-practice/Java\u5185\u5b58\u6a21\u578b","permalink":"/docs/java-concurrency-in-practice/Java\u5185\u5b58\u6a21\u578b","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-concurrency-in-practice/16.Java\u5185\u5b58\u6a21\u578b.md","tags":[{"inline":true,"label":"Java","permalink":"/docs/tags/java"},{"inline":true,"label":"concurrency","permalink":"/docs/tags/concurrency"}],"version":"current","sidebarPosition":16,"frontMatter":{"title":"\u7b2c16\u7ae0 Java\u5185\u5b58\u6a21\u578b","excerpt":null,"last_modified_at":"2021-02-02","toc":true,"tags":["Java","concurrency"]},"sidebar":"javaConcurrencySidebar","previous":{"title":"\u7b2c15\u7ae0 \u539f\u5b50\u53d8\u91cf\u4e0e\u975e\u963b\u585e\u540c\u6b65\u673a\u5236","permalink":"/docs/java-concurrency-in-practice/\u539f\u5b50\u53d8\u91cf\u4e0e\u975e\u963b\u585e\u540c\u6b65\u673a\u5236"}}');var c=a(4848),i=a(8453);const t={title:"\u7b2c16\u7ae0 Java\u5185\u5b58\u6a21\u578b",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},s=void 0,l={},o=[{value:"\u4ec0\u4e48\u662f\u5185\u5b58\u6a21\u578b\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u5b83",id:"\u4ec0\u4e48\u662f\u5185\u5b58\u6a21\u578b\u4e3a\u4ec0\u4e48\u9700\u8981\u5b83",level:2},{value:"\u5e73\u53f0\u7684\u5185\u5b58\u6a21\u578b",id:"\u5e73\u53f0\u7684\u5185\u5b58\u6a21\u578b",level:3},{value:"\u91cd\u6392\u5e8f",id:"\u91cd\u6392\u5e8f",level:3},{value:"Java\u5185\u5b58\u6a21\u578b\u7b80\u4ecb",id:"java\u5185\u5b58\u6a21\u578b\u7b80\u4ecb",level:3},{value:"\u501f\u52a9\u540c\u6b65",id:"\u501f\u52a9\u540c\u6b65",level:3},{value:"\u53d1\u5e03",id:"\u53d1\u5e03",level:2},{value:"\u4e0d\u5b89\u5168\u7684\u53d1\u5e03",id:"\u4e0d\u5b89\u5168\u7684\u53d1\u5e03",level:3},{value:"\u5b89\u5168\u7684\u53d1\u5e03",id:"\u5b89\u5168\u7684\u53d1\u5e03",level:3},{value:"\u5b89\u5168\u521d\u59cb\u5316\u6a21\u5f0f",id:"\u5b89\u5168\u521d\u59cb\u5316\u6a21\u5f0f",level:3},{value:"\u53cc\u91cd\u68c0\u67e5\u52a0\u9501",id:"\u53cc\u91cd\u68c0\u67e5\u52a0\u9501",level:3},{value:"\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027",id:"\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027",level:2}];function u(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h2,{id:"\u4ec0\u4e48\u662f\u5185\u5b58\u6a21\u578b\u4e3a\u4ec0\u4e48\u9700\u8981\u5b83",children:"\u4ec0\u4e48\u662f\u5185\u5b58\u6a21\u578b\uff0c\u4e3a\u4ec0\u4e48\u9700\u8981\u5b83"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"aVariable = 3;\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u5185\u5b58\u6a21\u578b\u9700\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff1a\u8fd9\u4ec0\u4e48\u6761\u4ef6\u4e0b\uff0c\u8bfb\u53d6aVariable\u7684\u7ebf\u7a0b\u770b\u5230\u8fd9\u4e2a\u503c\u4e3a3"}),"\n",(0,c.jsx)(n.p,{children:"JMM \u89c4\u5b9a\u4e86 JVM \u5fc5\u987b\u9075\u5faa\u4e00\u7ec4\u6700\u5c0f\u4fdd\u8bc1\uff0c\u8fd9\u7ec4\u4fdd\u8bc1\u89c4\u5b9a\u4e86\u5bf9\u53d8\u91cf\u7684\u5199\u5165\u64cd\u4f5c\u5728\u4f55\u65f6\u5c06\u5bf9\u4e8e\u5176\u4ed6\u7ebf\u7a0b\u53ef\u89c1\u3002 JMM \u5728\u8bbe\u8ba1\u65f6\u5c31\u5728\u53ef\u9884\u6d4b\u6027\u548c\u7a0b\u5e8f\u7684\u6613\u4e8e\u5f00\u53d1\u6027\u4e4b\u95f4\u8fdb\u884c\u4e86\u6743\u8861\uff0c\u4ece\u800c\u65e8\u5728\u5404\u79cd\u4e3b\u6d41\u7684\u5904\u7406\u5668\u4f53\u7cfb\u67b6\u6784\u4e0a\u80fd\u5b9e\u73b0\u9ad8\u6027\u80fd\u7684 JVM"}),"\n",(0,c.jsx)(n.h3,{id:"\u5e73\u53f0\u7684\u5185\u5b58\u6a21\u578b",children:"\u5e73\u53f0\u7684\u5185\u5b58\u6a21\u578b"}),"\n",(0,c.jsx)(n.p,{children:"\u5728\u5171\u4eab\u5185\u5b58\u7684\u591a\u5904\u7406\u5668\u4f53\u7cfb\u67b6\u6784\u4e2d\uff0c\u6bcf\u4e2a\u5904\u7406\u5668\u90fd\u62e5\u6709\u81ea\u5df1\u7684\u7f13\u5b58\uff0c\u5e76\u4e14\u5b9a\u671f\u5730\u4e0e\u4e3b\u5185\u5b58\u8fdb\u884c\u534f\u8c03\u3002\u5728\u4e0d\u540c\u7684\u5904\u7406\u5668\u67b6\u6784\u4e2d\u63d0\u4f9b\u4e86\u4e0d\u540c\u7ea7\u522b\u7684\u7f13\u5b58\u4e00\u81f4\u6027\uff08Cache Coherenc\u7684\uff0c\u5176\u4e2d\u4e00\u90e8\u5206\u53ea\u63d0\u4f9b\u6700\u5c0f\u7684\u4fdd\u8bc1\uff0c\u5373\u5141\u8bb8\u4e0d\u540c\u7684\u5904\u7406\u5668\u5728\u4efb\u610f\u65f6\u523b\u4ece\u540c\u4e00\u4e2a\u5b58\u50a8\u4f4d\u7f6e\u4e0a\u770b\u5230\u4e0d\u540c\u7684\u503c\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u91cd\u6392\u5e8f",children:"\u91cd\u6392\u5e8f"}),"\n",(0,c.jsx)(n.p,{children:"\u540c\u6b65\u5c06\u9650\u5236\u7f16\u8bd1\u5668\u3001\u8fd0\u884c\u65f6\u548c\u786c\u4ef6\u5bf9\u5185\u5b58\u64cd\u4f5c\u91cd\u6392\u5e8f\u7684\u65b9\u5f0f\uff0c\u4ece\u800c\u5b9e\u65bd\u91cd\u6392\u5e8f\u65f6\u4e0d\u4f1a\u7834\u574f JMM \u63d0\u4f9b\u7684\u53ef\u89c1\u6027\u4fdd\u8bc1\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"java\u5185\u5b58\u6a21\u578b\u7b80\u4ecb",children:"Java\u5185\u5b58\u6a21\u578b\u7b80\u4ecb"}),"\n",(0,c.jsx)(n.p,{children:"JMM \u4e3a\u7a0b\u5e8f\u4e2d\u6240\u6709\u7684\u64cd\u4f5c\u5b9a\u4e49\u4e86\u4e00\u4e2a\u504f\u5e8f\u5173\u7cfb \uff0c\u79f0\u4e4bHappens-Before."}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u7a0b\u5e8f\u987a\u5e8f\u89c4\u5219"}),"\n",(0,c.jsx)(n.li,{children:"\u76d1\u89c6\u5668\u9501\u89c4\u5219"}),"\n",(0,c.jsx)(n.li,{children:"volatile \u53d8\u91cf\u89c4\u5219"}),"\n",(0,c.jsx)(n.li,{children:"\u7ebf\u7a0b\u542f\u52a8\u89c4\u5219"}),"\n",(0,c.jsx)(n.li,{children:"\u4e2d\u65ad\u89c4\u5219"}),"\n",(0,c.jsx)(n.li,{children:"\u7ec8\u7ed3\u5668\u89c4\u5219"}),"\n",(0,c.jsx)(n.li,{children:"\u4f20\u9012\u6027"}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"\u501f\u52a9\u540c\u6b65",children:"\u501f\u52a9\u540c\u6b65"}),"\n",(0,c.jsx)(n.p,{children:"\u7531\u4e8e Happens-Before \u7684\u6392\u5e8f\u529f\u80fd\u5f88\u5f3a\u5927\uff0c\u56e0\u6b64\u6709\u65f6\u5019\u53ef\u4ee5\u201c\u501f\u52a9\uff08 Piggyback \uff09\uff02\u73b0\u6709\u540c\u6b65\u673a\u5236\u7684\u53ef\u89c1\u6027\u5c5e\u6027\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u7a0b\u5e8f\u6e05\u5355 16-2 \u8bf4\u660e\u5982\u4f55\u501f\u52a9\u540c\u6b65\u7684 FutureTask \u7684\u5185\u90e8\u7c7b"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"// FutureTask \u5185\u90e8\u7c7b\nprivate final class Sync extends AbstractQueuedSynchronizer {\n  private static final int RUNNING = 1, RAN = 2, CANCELLED = 4;\n  private V result;\n  private Exception exception;\n  \n  void innerSet(V v) {\n    while (true) {\n      int s = getState();\n      if (ranOrCancelled(s)) {\n        return;\n      }\n      if (compareAndSetState(s, RAN)) {\n        break;\n      }\n    }\n    result = v;\n    releaseShared(0);\n    done();\n  }\n  \n  V innerGet() throws InterruptedException, ExecutionException {\n    acquireSharedInterruptibly(0);\n    if (getState() == CANCELLED) {\n      throw new CancellationException();\n    }\n    if (exception != null) {\n      throw new ExecutionException(exception);\n    }\n    return result;\n  }\n}\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u53d1\u5e03",children:"\u53d1\u5e03"}),"\n",(0,c.jsx)(n.h3,{id:"\u4e0d\u5b89\u5168\u7684\u53d1\u5e03",children:"\u4e0d\u5b89\u5168\u7684\u53d1\u5e03"}),"\n",(0,c.jsx)(n.p,{children:"\u9664\u4e86\u4e0d\u53ef\u53d8\u5bf9\u8c61\u4ee5\u5916\uff0c\u4f7f\u7528\u88ab\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u521d\u59cb\u5316\u7684\u5bf9\u8c61\u901a\u5e38\u90fd\u662f\u4e0d\u5b89\u5168\u7684\uff0c\u9664\u975e\u5bf9\u8c61\u7684\u53d1\u5e03\u64cd\u4f5c\u662f\u5728\u4f7f\u7528\u8be5\u5bf9\u8c61\u7684\u7ebf\u7a0b\u5f00\u59cb\u4f7f\u7528\u4e4b\u524d\u6267\u884c"}),"\n",(0,c.jsx)(n.h3,{id:"\u5b89\u5168\u7684\u53d1\u5e03",children:"\u5b89\u5168\u7684\u53d1\u5e03"}),"\n",(0,c.jsx)(n.p,{children:"Happens-Before \u6392\u5e8f\u662f\u5728\u5185\u5b58\u8bbf\u95ee\u7ea7\u522b\u4e0a\u64cd\u4f5c\u7684\uff0c\u5b83\u662f\u4e00\u79cd\u201c\u5e76\u53d1\u7ea7\u6c47\u7f16\u8bed\u8a00\u201c\uff0c\u800c\u5b89\u5168\u53d1\u5e03\u7684\u8fd0\u884c\u7ea7\u522b\u66f4\u63a5\u8fd1\u7a0b\u5e8f\u8bbe\u8ba1\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u5b89\u5168\u521d\u59cb\u5316\u6a21\u5f0f",children:"\u5b89\u5168\u521d\u59cb\u5316\u6a21\u5f0f"}),"\n",(0,c.jsx)(n.p,{children:"\u7ebf\u7a0b\u5b89\u5168\u7684\u5ef6\u8fdf\u521d\u59cb\u5316"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"@ThreadSafe\npublic class SafeLazyInitialization {\n  private static Resource resource;\n  \n  public synchronized static Resource getInstance() {\n    if (resource == null) {\n      resource = new Resource();\n    }\n    return source();\n  }\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7a0b\u5e8f\u6e05\u5355 16-5 \u63d0\u524d\u521d\u59cb\u5316"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"@ThreadSafe\npublic class EagerInitialization {\n  private static Resource resource = new Resource();\n  \n  public static Resource getResource() {\n    return resource;\n  }\n}\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u7a0b\u5e8f\u6e05\u5355 16-6 \u5ef6\u957f\u521d\u59cb\u5316\u5360\u4f4d\u7c7b\u6a21\u5f0f"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:"@ThreadSafe\npublic class ResourceFactory {\n  private static class ResourceHolder {\n    public static Resource resource = new Resource();\n  }\n  public static Resource getResource() {\n    return ResourceHolder.resource;\n  }\n}\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u53cc\u91cd\u68c0\u67e5\u52a0\u9501",children:"\u53cc\u91cd\u68c0\u67e5\u52a0\u9501"}),"\n",(0,c.jsx)(n.p,{children:"DCL \u7684\u8fd9\u79cd\u4f7f\u7528\u65b9\u6cd5\u5df2\u7ecf\u88ab\u5e7f\u6cdb\u5730\u5e9f\u5f03\u4e86\uff0c\u4fc3\u4f7f\u8be5\u6a21\u5f0f\u51fa\u73b0\u7684\u9a71\u52a8\u529b\u3008\u65e0\u7ade\u4e89\u540c\u6b65\u7684\u6267\u884c\u901f\u5ea6\u5f88\u6162\uff0c\u4ee5\u53ca JVM \u542f\u52a8\u65f6\u5f88\u6162\uff09\u5df1\u7ecf"}),"\n",(0,c.jsx)(n.p,{children:"\u4e0d\u590d\u5b58\u5728\uff0c\u56e0\u800c\u5b83\u4e0d\u662f\u4e00\u79cd\u9ad8\u6548\u7684\u4f18\u5316\u63aa\u65bd\u3002\u5ef6\u8fdf\u521d\u59cb\u5316\u5360\u4f4d\u7c7b\u6a21\u5f0f\u80fd\u5e26\u6765\u540c\u6837\u7684\u4f18\u52bf\uff0c\u5e76\u4e14\u66f4\u5bb9\u6613\u7406\u89e3\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027",children:"\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u7684\u5b89\u5168\u6027"}),"\n",(0,c.jsx)(n.p,{children:"\u521d\u59cb\u5316\u5b89\u5168\u6027\u5c06\u786e\u4fdd\uff0c\u5bf9\u4e8e\u88ab\u6b63\u786e\u6784\u9020\u7684\u5bf9\u8c61\uff0c\u6240\u6709\u7ebf\u7a0b\u90fd\u80fd\u770b\u5230\u7531\u6784\u9020\u51fd\u6570\u4e3a\u5bf9\u8c61\u7ed9\u5404\u4e2a final \u57df\u8bbe\u7f6e\u7684\u6b63\u786e\u503c\uff0c\u800c\u4e0d\u7ba1\u91c7\u7528\u4f55\u79cd\u65b9\u5f0f\u6765\u53d1\u5e03\u5bf9\u8c61\u3002\u800c\u4e14\uff0c\u5bf9\u4e8e\u53ef\u4ee5\u901a\u8fc7\u88ab\u6b63\u786e\u6784\u9020\u5bf9\u8c61\u4e2d\u67d0\u4e2a final \u57df\u5230\u8fbe\u7684\u4efb\u610f\u53d8\u91cf\uff08\u4f8b\u5982\u67d0\u4e2a final \u6570\u7ec4\u4e2d\u7684\u5143\u7d20\uff0c\u6216\u8005\u7531\u4e00\u4e2a final \u57df\u5f15\u7528\u7684 HashMap \u7684\u5185\u5bb9\uff09\u5c06\u540c\u6837\u5bf9\u4e8e\u5176\u4ed6\u7ebf\u7a0b\u662f\u53ef\u89c1\u7684\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u7a0b\u5e8f\u6e05\u5355 16-8 \u4e0d\u53ef\u53d8\u5bf9\u8c61\u7684\u521d\u59cb\u5316\u5b89\u5168\u6027"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-java",children:'@ThreadSafe\npublic class SafeStates {\n  private final Map<String, String> states;\n  \n  public SafeStates() {\n    states = new HashMap<String, String>();\n    states.put("alaska", "AK");\n    states.put("alabama", "AL");\n    \n  }\n  public String getAbbreviation(String s) {\n    return states.get(s);\n  }\n}\n'})}),"\n",(0,c.jsx)(n.p,{children:"\u521d\u59cb\u5316\u5b89\u5168\u6027\u53ea\u80fd\u4fdd\u8bc1\u901a\u8fc7 final \u57df\u53ef\u8fbe\u7684\u503c\u4ece\u6784\u9020\u8fc7\u7a0b\u5b8c\u6210\u65f6\u5f00\u59cb\u7684\u53ef\u89c1\u6027\u3002\u5bf9\u4e8e\u901a\u8fc7\u975efinal\u57df\u53ef\u8fbe\u7684\u503c\uff0c\u6216\u8005\u5728\u6784\u6210\u8fc7\u7a0b\u5b8c\u6210\u540e\u53ef\u80fd\u6539\u53d8\u7684\u503c\uff0c\u5fc5\u987b\u91c7\u7528\u540c\u6b65\u6765\u786e\u4fdd\u53ef\u89c1\u6027\u3002"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(u,{...e})}):u(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>s});var r=a(6540);const c={},i=r.createContext(c);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);