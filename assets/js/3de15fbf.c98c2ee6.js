"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[9729],{6258:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"java-concurrency-in-practice/\u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177","title":"\u7b2c14\u7ae0 \u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177","description":"\u521b\u5efa\u72b6\u6001\u4f9d\u8d56\u7c7b\u7684\u6700\u7b80\u5355\u65b9\u5f0f\u901a\u5e38\u662f\u5728\u7c7b\u5e93\u4e2d\u73b0\u6709\u72b6\u5728\u8f7d\u8d56\u7c7b\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u6784\u9020","source":"@site/docs/java-concurrency-in-practice/14.\u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177.md","sourceDirName":"java-concurrency-in-practice","slug":"/java-concurrency-in-practice/\u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177","permalink":"/docs/java-concurrency-in-practice/\u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/java-concurrency-in-practice/14.\u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177.md","tags":[{"inline":true,"label":"Java","permalink":"/docs/tags/java"},{"inline":true,"label":"concurrency","permalink":"/docs/tags/concurrency"}],"version":"current","sidebarPosition":14,"frontMatter":{"title":"\u7b2c14\u7ae0 \u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177","excerpt":null,"last_modified_at":"2021-02-02","toc":true,"tags":["Java","concurrency"]},"sidebar":"javaConcurrencySidebar","previous":{"title":"\u7b2c13\u7ae0 \u663e\u793a\u9501","permalink":"/docs/java-concurrency-in-practice/\u663e\u793a\u9501"},"next":{"title":"\u7b2c15\u7ae0 \u539f\u5b50\u53d8\u91cf\u4e0e\u975e\u963b\u585e\u540c\u6b65\u673a\u5236","permalink":"/docs/java-concurrency-in-practice/\u539f\u5b50\u53d8\u91cf\u4e0e\u975e\u963b\u585e\u540c\u6b65\u673a\u5236"}}');var r=i(4848),a=i(8453);const l={title:"\u7b2c14\u7ae0 \u6784\u5efa\u81ea\u5b9a\u4e49\u7684\u540c\u6b65\u5de5\u5177",excerpt:null,last_modified_at:"2021-02-02",toc:!0,tags:["Java","concurrency"]},c=void 0,o={},d=[{value:"\u72b6\u6001\u4f9d\u8d56\u6027\u7684\u7ba1\u7406",id:"\u72b6\u6001\u4f9d\u8d56\u6027\u7684\u7ba1\u7406",level:2},{value:"\u793a\u4f8b\uff1a\u5c06\u524d\u63d0\u6761\u4ef6\u7684\u5931\u8d25\u4f20\u9012\u7ed9\u8c03\u7528\u8005",id:"\u793a\u4f8b\u5c06\u524d\u63d0\u6761\u4ef6\u7684\u5931\u8d25\u4f20\u9012\u7ed9\u8c03\u7528\u8005",level:3},{value:"\u793a\u4f8b\uff1a\u901a\u8fc7\u8f6e\u8be2\u4e0e\u4f11\u7720\u6765\u5b9e\u73b0\u7b80\u5355\u7684\u963b\u585e",id:"\u793a\u4f8b\u901a\u8fc7\u8f6e\u8be2\u4e0e\u4f11\u7720\u6765\u5b9e\u73b0\u7b80\u5355\u7684\u963b\u585e",level:3},{value:"\u6761\u4ef6\u961f\u5217",id:"\u6761\u4ef6\u961f\u5217",level:3},{value:"\u4f7f\u7528\u6761\u4ef6\u961f\u5217",id:"\u4f7f\u7528\u6761\u4ef6\u961f\u5217",level:2},{value:"\u6761\u4ef6\u8c13\u8bcd",id:"\u6761\u4ef6\u8c13\u8bcd",level:3},{value:"\u8fc7\u65e9\u5524\u9192",id:"\u8fc7\u65e9\u5524\u9192",level:3},{value:"\u4e22\u5931\u7684\u4fe1\u53f7",id:"\u4e22\u5931\u7684\u4fe1\u53f7",level:3},{value:"\u901a\u77e5",id:"\u901a\u77e5",level:3},{value:"\u793a\u4f8b\uff1a\u9600\u95e8\u7c7b",id:"\u793a\u4f8b\u9600\u95e8\u7c7b",level:3},{value:"\u5b50\u7c7b\u7684\u5b89\u5168\u95ee\u9898",id:"\u5b50\u7c7b\u7684\u5b89\u5168\u95ee\u9898",level:3},{value:"\u5c01\u88c5\u6761\u4ef6\u961f\u5217",id:"\u5c01\u88c5\u6761\u4ef6\u961f\u5217",level:3},{value:"\u5165\u53e3\u534f\u8bae\u4e0e\u51fa\u53e3\u534f\u8bae",id:"\u5165\u53e3\u534f\u8bae\u4e0e\u51fa\u53e3\u534f\u8bae",level:3},{value:"\u663e\u5f0f\u7684Condition\u5bf9\u8c61",id:"\u663e\u5f0f\u7684condition\u5bf9\u8c61",level:2},{value:"Synchronized\u5256\u6790",id:"synchronized\u5256\u6790",level:2},{value:"AbstractQueuedSynchronizer",id:"abstractqueuedsynchronizer",level:2},{value:"java.until.concurrent\u540c\u6b65\u5668\u7c7b\u4e2d\u7684AQS",id:"javauntilconcurrent\u540c\u6b65\u5668\u7c7b\u4e2d\u7684aqs",level:2},{value:"ReentrantLock",id:"reentrantlock",level:3},{value:"Semaphore\u4e0eCountDownLatch",id:"semaphore\u4e0ecountdownlatch",level:3},{value:"FutureTask",id:"futuretask",level:3},{value:"ReentrantReadWriteLock",id:"reentrantreadwritelock",level:3}];function s(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.p,{children:"\u521b\u5efa\u72b6\u6001\u4f9d\u8d56\u7c7b\u7684\u6700\u7b80\u5355\u65b9\u5f0f\u901a\u5e38\u662f\u5728\u7c7b\u5e93\u4e2d\u73b0\u6709\u72b6\u5728\u8f7d\u8d56\u7c7b\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u6784\u9020"}),"\n",(0,r.jsx)(e.h2,{id:"\u72b6\u6001\u4f9d\u8d56\u6027\u7684\u7ba1\u7406",children:"\u72b6\u6001\u4f9d\u8d56\u6027\u7684\u7ba1\u7406"}),"\n",(0,r.jsx)(e.p,{children:"\u53ef\u963b\u585e\u7684\u72b6\u6001\u4f9d\u8d56\u64cd\u4f5c\u7684\u7ed3\u6784"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"// acquire lock on object state\nwhile (precondition dose not hold) {\n    release lock\n        wait until precondition might hold\n        optionally fail if interrupted on timeout expires\n            reacquire lock\n}\nperform action\n    release lock\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u6709\u754c\u7f13\u5b58\u5b9e\u73b0\u7684\u57fa\u7c7b"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@ThreadSafe\npublic abstract class BaseBoundedBuffer<V> {\n    @GuardedBy("this")\n    private final V[] buf;\n    @GuradedBy("this")\n    private final int tail;\n    @GuardedBy("this")\n    private final int head;\n    @GuardedBy("this")\n    private final int count;\n    \n    protected BaseBoundedBuffer(int capacity) {\n        this.buf = (V[])new Object[capacity];\n    }\n    protected synchronized final void doPut(V v) {\n        buf[tail] = v;\n        if (++tail == buf.length) {\n            tail = 0;\n        }\n        ++count;\n    }\n    protected synchronized final V doTake() {\n        V v = buf[head];\n        buf[head] = null;\n        if (++head == buf.length) {\n            head = 0;\n        }\n        --count;\n        return v;\n    }\n    public synchronized final boolean isFull() {\n        return count == buf.length;\n    }\n    public synchronized final boolean isEmpty() {\n        return count == 0;\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u5c06\u524d\u63d0\u6761\u4ef6\u7684\u5931\u8d25\u4f20\u9012\u7ed9\u8c03\u7528\u8005",children:"\u793a\u4f8b\uff1a\u5c06\u524d\u63d0\u6761\u4ef6\u7684\u5931\u8d25\u4f20\u9012\u7ed9\u8c03\u7528\u8005"}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u4e0d\u6ee1\u8db3\u524d\u63d0\u6761\u4ef6\u65f6\uff0c\u6709\u754c\u7f13\u5b58\u4e0d\u4f1a\u6267\u884c\u76f8\u5e94\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@ThreadSafe\npublic class GrumpyBoundedBuffer<V> extends BaseBoundedBuffer<V> {\n    public GrumpyBoundedBuffer(int size) {\n        super(size);\n    }\n    \n    public synchronized void put(V v) throws BufferFullException {\n        if (isFull()) {\n            throw new BufferFullException();\n        }\n        doPut(v);\n    }\n    public synchronized V take() throws BufferEmptyException {\n        if (isEmpty()) {\n            throw new BufferEmptyException();\n        }\n        return doTake();\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u901a\u8fc7\u8f6e\u8be2\u4e0e\u4f11\u7720\u6765\u5b9e\u73b0\u7b80\u5355\u7684\u963b\u585e",children:"\u793a\u4f8b\uff1a\u901a\u8fc7\u8f6e\u8be2\u4e0e\u4f11\u7720\u6765\u5b9e\u73b0\u7b80\u5355\u7684\u963b\u585e"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@ThreadSafe\npublic class SleepyBoundedBuffer<V> extends BaseBoundedBuffer<V> {\n    public SleepyBoundedBuffer(int size) {\n        super(size);\n    }\n    public void put(V v) throws InterruptedException {\n        while (true) {\n            synchronized (this) {\n                if (!isFull()) {\n                    doPut(v);\n                    return;\n                }\n            }\n            Thread.sleep(SLEEP_GRANULARITY);\n        }\n    }\n    public V take() throws InterruptedException {\n        while (true) {\n            synchronized (this) {\n                if (!isEmpty()) {\n                    return doTake();\n                }\n            }\n            Thread.sleep(SLEEP_GRANULARITY);\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u6761\u4ef6\u961f\u5217",children:"\u6761\u4ef6\u961f\u5217"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528\u6761\u4ef6\u961f\u5217\u5b9e\u73b0\u7684\u6709\u754c\u7f13\u5b58"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@ThreadSafe\npublic class BoundedBuffer<V> extends BaseBoundedBuffer<V> {\n    public BoundedBuffer(int size) {\n        super(size);\n    }\n    \n    // \u963b\u585e\u76f4\u5230 not-full\n    public synchronized void put(V v) throws InterruptedException {\n        while (isFull()) {\n            wait();\n        }\n        doPut(v);\n        notfiyAll();\n    }\n    // \u963b\u585e\u76f4\u5230 not-empty\n    public synchronized V take() throws InterruptedException {\n        while (isEmpty()) {\n            wait();\n        }\n        V v = doTake();\n        notifyAll();\n        return v;\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u6761\u4ef6\u961f\u5217",children:"\u4f7f\u7528\u6761\u4ef6\u961f\u5217"}),"\n",(0,r.jsx)(e.p,{children:"\u6761\u4ef6\u961f\u5217\u4f7f\u6784\u5efa\u9ad8\u6548\u4ee5\u53ca\u9ad8\u53ef\u54cd\u5e94\u6027\u7684\u72b6\u6001\u4f9d\u8d56\u7c7b\u53d8\u5f97\u66f4\u5bb9\u6613\uff0c \u4f46\u540c\u65f6\u4e5f\u5f88\u5bb9\u6613\u88ab\u4e0d\u6b63\u786e\u5730\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u6761\u4ef6\u8c13\u8bcd",children:"\u6761\u4ef6\u8c13\u8bcd"}),"\n",(0,r.jsx)(e.p,{children:"\u5173\u952e\u627e\u51fa\u5bf9\u8c61\u5728\u54ea\u4e2a\u6761\u4ef6\u8c13\u8bcd\u4e0a\u7b49\u5f85"}),"\n",(0,r.jsx)(e.p,{children:"\u6bcf\u6b21wait\u8c03\u7528\u90fd\u4f1a\u9690\u5f0f\u7684\u4e0e\u7279\u5b9a\u7684\u6761\u4ef6\u8c13\u8bcd\u5173\u8054\u8d77\u6765\u3002\u5f53\u8c03\u7528\u67d0\u4e2a\u7279\u5b9a\u6761\u4ef6\u8c13\u8bcd\u7684wait\u65f6\uff0c\u8c03\u7528\u8005\u5fc5\u987b\u5df2\u7ecf\u6301\u6709\u4e0e\u6761\u4ef6\u961f\u5217\u76f8\u5173\u7684\u9501\uff0c\u5e76\u4e14\u8fd9\u4e2a\u9501\u5fc5\u987b\u4fdd\u6301\u7740\u6784\u6210\u6761\u4ef6\u8c13\u8bcd\u7684\u72b6\u6001\u53d8\u91cf"}),"\n",(0,r.jsx)(e.h3,{id:"\u8fc7\u65e9\u5524\u9192",children:"\u8fc7\u65e9\u5524\u9192"}),"\n",(0,r.jsx)(e.p,{children:"\u5185\u7f6e\u6761\u4ef6\u961f\u5217\u53ef\u4ee5\u4e0e\u591a\u4e2a\u6761\u4ef6\u8c13\u8bcd\u4e00\u8d77\u4f7f\u7528\u3002\u5f53\u4e00\u4e2a\u7ebf\u7a0b\u7531\u4e8e\u8c03\u7528 notifyAll \u800c\u9192\u6765\u65f6\uff0c\u5e76\u4e0d\u610f\u5473\u8be5\u7ebf\u7a0b\u6b63\u5728\u7b49\u5f85\u7684\u6761\u4ef6\u8c13\u8bcd\u5df2\u7ecf\u53d8\u6210\u771f\u4e86\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u6240\u4ee5\uff0c\u6bcf\u5f53\u7ebf\u7a0b\u4ecewait\u4e2d\u5524\u9192\u65f6\uff0c\u90fd\u5fc5\u987b\u518d\u6b21\u6d4b\u8bd5\u6761\u4ef6\u8c13\u8bcd"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"void stateDependentMethod() throws InterruptedException {\n    synchronized (lock) {\n        while (!conditionPredicate()) {\n            lock.wait();\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u5f53\u4f7f\u7528\u6761\u4ef6\u7b49\u5f85\u65f6\uff08Object.wait  \u6216 Condition.await\uff09"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u901a\u5e38\u90fd\u6709\u4e00\u4e2a\u6761\u4ef6\u8c13\u8bcd--\u5305\u62ec\u4e00\u4e9b\u5bf9\u8c61\u7684\u72b6\u6001\u7684\u6d4b\u8bd5\uff0c\u7ebf\u7a0b\u5728\u6267\u884c\u524d\u5fc5\u987b\u9996\u5148\u901a\u8fc7\u8fd9\u4e9b\u6d4b\u8bd5"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u8c03\u7528wait\u4e4b\u524d\u6d4b\u8bd5\u6761\u4ef6\u8c13\u8bcd\uff0c\u5e76\u4e14\u4ecewait\u4e2d\u8fd4\u56de\u65f6\u518d\u6b21\u8fdb\u884c\u6d4b\u8bd5"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u4e00\u4e2a\u5faa\u73af\u4e2d\u8c03\u7528wait"}),"\n",(0,r.jsx)(e.li,{children:"\u786e\u4fdd\u4f7f\u7528\u4e0e\u6761\u4ef6\u961f\u5217\u76f8\u5173\u7684\u9501\u6765\u4fdd\u62a4\u6784\u6210\u6761\u4ef6\u8c13\u8bcd\u7684\u5404\u4e2a\u72b6\u6001\u53d8\u91cf"}),"\n",(0,r.jsx)(e.li,{children:"\u5f53\u8c03\u7528wait\uff0cnotify\uff0cnotifyAll\u7b49\u65b9\u6cd5\u65f6\uff0c\u4e00\u5b9a\u8981\u6301\u6709\u4e0e\u6761\u4ef6\u961f\u5217\u76f8\u5173\u7684\u9501"}),"\n",(0,r.jsx)(e.li,{children:"\u5728\u68c0\u67e5\u6761\u4ef6\u8c13\u8bcd\u4e4b\u540e\u4ee5\u53ca\u5f00\u59cb\u6267\u884c\u76f8\u5173\u7684\u64cd\u4f5c\u4e4b\u524d\uff0c\u4e0d\u8981\u91ca\u653e\u9501"}),"\n"]}),"\n",(0,r.jsx)(e.h3,{id:"\u4e22\u5931\u7684\u4fe1\u53f7",children:"\u4e22\u5931\u7684\u4fe1\u53f7"}),"\n",(0,r.jsx)(e.p,{children:"\u4e22\u5931\u7684\u4fe1\u53f7\u662f\u6307\uff1a\u7ebf\u7a0b\u5fc5\u987b\u7b49\u5f85\u4e00\u4e2a\u5df2\u7ecf\u4e3a\u771f\u7684\u6761\u4ef6\uff0c\u4f46\u5728\u5f00\u59cb\u7b49\u5f85\u4e4b\u524d\u6ca1\u6709\u68c0\u67e5\u6761\u4ef6\u8c13\u8bcd\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u901a\u77e5",children:"\u901a\u77e5"}),"\n",(0,r.jsx)(e.p,{children:"\u6bcf\u5f53\u5728\u7b49\u5f85\u4e00\u4e2a\u6761\u4ef6\u65f6\uff0c\u4e00\u5b9a\u8981\u786e\u4fdd\u5728\u6761\u4ef6\u8c13\u8bcd\u53d8\u4e3a\u771f\u65f6\u901a\u8fc7\u67d0\u79cd\u65b9\u5f0f\u53d1\u51fa\u901a\u77e5"}),"\n",(0,r.jsx)(e.p,{children:"\u53ea\u6709\u540c\u65f6\u6ee1\u8db3\u4e24\u4e2a\u6761\u4ef6\uff0c\u624d\u80fd\u7528\u5355\u4e00\u7684notify\u800c\u4e0d\u662fnotifyAll"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u6240\u6709\u7b49\u5f85\u7ebf\u7a0b\u7684\u7c7b\u578b\u90fd\u76f8\u540c\u3002\u53ea\u6709\u4e00\u4e2a\u6761\u4ef6\u8c13\u8bcd\u4e0e\u6761\u4ef6\u961f\u5217\u76f8\u5173\uff0c\u5e76\u4e14\u6bcf\u4e2a\u7ebf\u7a0b\u5728\u4ecewait\u8fd4\u56de\u540e\u5c06\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c"}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"\u5355\u8fdb\u5355\u51fa\u3002\u5728\u6761\u4ef6\u53d8\u91cf\u4e0a\u7684\u6bcf\u6b21\u901a\u77e5\uff0c\u6700\u591a\u53ea\u80fd\u5524\u9192\u4e00\u4e2a\u7ebf\u7a0b\u6765\u6267\u884c\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"\u666e\u904d\u8ba4\u53ef\u7684\u505a\u6cd5\u662f\u5fe7\u5148\u4f7f\u7528 notifyAll \u800c\u4e0d\u662fnotify. \u867d\u7136 notifyAll \u53ef\u80fd\u6bd4 notiy\u66f4\u4f4e\u6548\uff0c\u4f46\u5374\u66f4\u5bb9\u6613\u786e\u4fdd\u7c7b\u7684\u884c\u4e3a\u662f\u6b63\u786e\u7684\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u5728\u6bcf\u4e2a\u7ed3\u7a0b\u6267\u884c\u4e00\u4e2a\u4e8b\u4ef6\u7684\u540c\u65f6\uff0c\u5c06\u51fa\u73b0\u5927\u91cf\u7684\u4e0a\u4e0b\u6587\u5207\u6362\u64cd\u4f5c\u4ee5\u53ca\u53d1\u751f\u7ade\u4e89\u7684\u9501\u83b7\u53d6\u64cd\u4f5c\u3002\uff08\u6700\u574f\u7684\u60c5\u51b5\u662f\uff0c\u5728\u4f7fnotifyAll \u65f6\u5c06\u5bfc\u81f4 ",(0,r.jsx)(e.code,{children:"O(n^2)"})," \u6b21\u5524\u9192\u64cd\u4f5c\uff0c\u800c\u5b9e\u9645\u4e0a\u53ea\u9700\u8981 n\u6b21\u5524\u9192\u64cd\u4f5c\u5c31\u8db3\u591f\u4e86\uff09"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public synchronized void put(V v) throws InterruptedException {\n    while (ifFull()) {\n        wait();\n    }\n    boolean wasEmpty = isEmpty();\n    doPut(v);\n    if (wasEmpty) {\n        notifyAll();\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"\u793a\u4f8b\u9600\u95e8\u7c7b",children:"\u793a\u4f8b\uff1a\u9600\u95e8\u7c7b"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528wait\u548cnotifyAll\u6765\u5b9e\u73b0\u53ef\u91cd\u65b0\u5173\u95ed\u7684\u9600\u95e8"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@ThreadSafe\npublic class ThreaadGate {\n    @GuardedBy("this")\n    private boolean isOpen;\n    @GuardedBy("this")\n    private int generation;\n    \n    public synchronized void close() {\n        isOpen = false;\n    }\n    \n    public synchronized void open() {\n        ++generation;\n        isOpen = true;\n        notifyAll();\n    }\n    \n    public synchronized void await() throws InterruptedException {\n        int arrivalGeneration = generation;\n        while (!isOpen && arrivalGeneration == generation) {\n            wait();\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h3,{id:"\u5b50\u7c7b\u7684\u5b89\u5168\u95ee\u9898",children:"\u5b50\u7c7b\u7684\u5b89\u5168\u95ee\u9898"}),"\n",(0,r.jsx)(e.p,{children:"\u5982\u679c\u5728\u5b9e\u65bd\u5b50\u7c7b\u5316\u65f6\u8fdd\u80cc\u4e86\u6761\u4ef6\u901a\u77e5\u6216\u5355\u6b21\u901a\u77e5\u7684\u67d0\u4e2a\u9700\u6c42\uff0c\u90a3\u4e48\u5728\u5b50\u7c7b\u4e2d\u53ef\u4ee5\u589e\u52a0\u5408\u9002\u7684\u901a\u77e5\u673a\u5236\u6765\u4ee3\u8868\u57fa\u7c7b\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u5c01\u88c5\u6761\u4ef6\u961f\u5217",children:"\u5c01\u88c5\u6761\u4ef6\u961f\u5217"}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u5e38\uff0c\u6211\u4eec\u5e94\u8be5\u628a\u6761\u4ef6\u961f\u5217\u5c01\u88c5\u8d77\u6765\uff0c\u56e0\u800c\u9664\u4e86\u4f7f\u7528\u6761\u4ef6\u961f\u5217\u7684\u7c7b\uff0c\u5c31\u4e0d\u80fd\u5728\u5176\u4ed6\u5730\u65b9\u574a\u8bbf\u95ee\u5b83\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"\u5165\u53e3\u534f\u8bae\u4e0e\u51fa\u53e3\u534f\u8bae",children:"\u5165\u53e3\u534f\u8bae\u4e0e\u51fa\u53e3\u534f\u8bae"}),"\n",(0,r.jsx)(e.p,{children:"\u4eba\u53e3\u534f\u8bae\u548c\u51fa\u53e3\u534f\u8bae\uff08 Entry and Exit Protocols \uff09\u201d\u6765\u63cf\u8ff0wait notify\u65b9\u6cd5\u7684\u6b63\u786e\u4f7f\u7528\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u4f9d\u8d56\u72b6\u6001\u7684\u64cd\u4ef6\uff0c\u4ee5\u53ca\u6bcf\u4e2a\u4fee\u6539\u5176\u4ed6\u64cd\u4f5c\u4f9d\u8d56\u72b6\u6001\u7684\u64cd\u4f5c\uff0c\u90fd\u5e94\u8be5\u5b9a\u4e49\u4e00\u4e2a\u5165\u53e3\u534f\u8bae\u548c\u51fa\u53e3\u534f\u8bae\u3002\u5165\u53e3\u534f\u8bae\u5c31\u662f\u8be5\u64cd\u4f5c\u7684\u6761\u4ef6\u8c13\u8bcd\uff0c\u51fa\u53e3\u534f\u8bae\u5219\u5305\u62ec\uff0c\u68c0\u67e5\u88ab\u8be5\u64cd\u4f5c\u4fee\u6539\u7684\u6240\u6709\u72b6\u6001\u53d8\u91cf\uff0c\u5e76\u786e\u8ba4\u5b83\u4eec\u662f\u5426\u4f7f\u67d0\u4e2a\u5176\u4ed6\u7684\u6761\u4ef6\u8c13\u8bcd\u53d8\u4e3a\u771f\uff0c\u5982\u662f\uff0c\u5219\u901a\u77e5\u76f8\u5173\u7684\u6761\u4ef6\u961f\u5217\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u663e\u5f0f\u7684condition\u5bf9\u8c61",children:"\u663e\u5f0f\u7684Condition\u5bf9\u8c61"}),"\n",(0,r.jsx)(e.p,{children:"Condition\u4e5f\u662f\u4e00\u79cd\u5e7f\u4e49\u7684\u5185\u7f6e\u6761\u4ef6\u961f\u5217"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"public interface Condition {\n    void await() throws InterruptedException;\n    boolean await(long time, TimeUnit unit) throws InterruptedException;\n    long awaitNanos(long nanosTImeout) throws InterruptedException;\n    void awaitUninterruptibly();\n    boolean awaitUntil(Date deadline) throws InterruptedException;;\n    \n    void signal();\n    void signalAll();\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"Condition\u6bd4\u5185\u7f6e\u6761\u4ef6\u961f\u5217\u63d0\u4f9b\u4e86\u66f4\u4e30\u5bcc\u7684\u529f\u80fd\uff1a\u5728\u6bcf\u4e2a\u9501\u4e0a\u53ef\u5b58\u5728\u591a\u4e2a\u7b49\u5f85/\u6761\u4ef6\u7b49\u5f85\u53ef\u4ee5\u65f6\u53ef\u4e2d\u65ad\u6216\u4e0d\u53ef\u4e2d\u65ad\uff0c\u57fa\u4e8e\u65f6\u9650\u7684\u7b49\u5f85\uff0c\u4ee5\u53ca\u516c\u5e73\u7684\u6216\u975e\u516c\u5e73\u7684\u961f\u5217\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@ThreadSafe\npublic class ConditionBoundedBuffer<T> {\n    protected final Lock lock = new ReentrantLock();\n    private final Condition notFull = lock.newCondition();\n    private final Condition notEmpty = lock.newCondition();\n    @GuardedBy("lock")\n    private final T[] items = (T[])new Object[BUFFER_SIZE];\n    @GuardedBy("lock")\n    private int tail, head, count;\n    \n    // \u963b\u585e\u76f4\u5230notFull\n    public void put(T x) throws InterruptedException {\n        lock.lock();\n        try {\n            while (count == items.length) {\n                notFull.await();\n            }\n            items[tail] = x;\n            if (++tail == items.length) {\n                tail = 0;\n            }\n            ++count;\n            notEmpty.signal();\n        } finally {\n            lock.unlock();\n        }\n    }\n    // \u963b\u585e\u76f4\u5230notEmpty\n    public T take() throws InterruptedException {\n        lock.lock();\n        try {\n            while (count == 0) {\n                notEmpty.await();\n            }\n            T x = items[head];\n            items[head] = null;\n            if (++head == items.length) {\n                head = 0;\n            }\n            --count;\n            notFull.signal();\n            return x;\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"synchronized\u5256\u6790",children:"Synchronized\u5256\u6790"}),"\n",(0,r.jsx)(e.p,{children:"AQS \u662f\u4e00\u4e2a\u7528\u4e8e\u6784\u5efa\u9501\u548c\u540c\u6b65\u5668\u7684\u6846\u67b6\uff0c\u8bb8\u591a\u540c\u6b65\u5668\u90fd\u53ef\u4ee5\u901a\u8fc7 AQS \u5f88\u5bb9\u6613\u5e76\u4e14\u9ad8\u6548\u5730\u6784\u9020\u51fa\u6765\u3002"}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528Lock\u6765\u5b9e\u73b0\u4fe1\u53f7\u91cf"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:'@ThreadSafe\npublic class SemaphoreOnLock{\n    private final Lock lock = new ReentrantLock();\n    private final Condition permitsAvailable = lock.newCondition();\n    @GuardedBy("this")\n    private int permits;\n    \n    SemaphoreOnLock(int initialPermits) {\n        lock.lock();\n        try {\n            permits = initialPermits;\n        } finally {\n            lock.unlock();\n        }\n    }\n    \n    public void acquire() throws InterruptedException {\n        lock.lock();\n        try {\n            while (permits <= 0) {\n                permitsAvailable.await();\n                --permits;\n            } finally {\n                lock.unlock();\n            }\n        }\n    }\n    \n    public void release() {\n        lock.lock();\n        try {\n            ++permits;\n            permitsAvailable.signal();\n        } finally {\n            lock.unlock();\n        }\n    }\n}\n'})}),"\n",(0,r.jsx)(e.h2,{id:"abstractqueuedsynchronizer",children:"AbstractQueuedSynchronizer"}),"\n",(0,r.jsx)(e.p,{children:"AQS\u4e2d\u83b7\u53d6\u548c\u91ca\u653e\u64cd\u4f5c\u7684\u6807\u51c6\u5f62\u5f0f"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"boolean acquire() throws InterruptedException {\n    while (\u5f53\u524d\u72b6\u6001\u4e0d\u5141\u8bb8\u83b7\u53d6\u64cd\u4f5c) {\n        if (\u9700\u8981\u963b\u585e\u83b7\u53d6\u8bf7\u6c42) {\n            \u5982\u679c\u5f53\u524d\u7ebf\u7a0b\u4e0d\u5728\u961f\u5217\u4e2d\uff0c\u5219\u5c06\u5176\u63d2\u5165\u961f\u5217\n            \u963b\u585e\u5f53\u524d\u7ebf\u7a0b\n        } else {\n            \u8fd4\u56de\u5931\u8d25\n        }\n    }\n    \u53ef\u80fd\u66f4\u65b0\u540c\u6b65\u5668\u7684\u72b6\u6001\n    \u5982\u679c\u7ebf\u7a0b\u4f4d\u4e8e\u961f\u5217\u4e2d\uff0c\u5219\u5c06\u5176\u79fb\u9664\u961f\u5217\n    \u8fd4\u56de\u6210\u529f\n}\n\nvoid release() {\n    \u66f4\u65b0\u540c\u6b65\u5668\u7684\u72b6\u6001\n    if (\u65b0\u7684\u72b6\u6001\u5141\u8bb8\u67d0\u4e2a\u88ab\u963b\u585e\u7684\u7ebf\u7a0b\u83b7\u53d6\u6210\u529f) \n        \u63a5\u89e6\u961f\u5217\u4e2d\u4e00\u4e2a\u6216\u591a\u4e2a\u7ebf\u7a0b\u7684\u963b\u585e\u72b6\u6001\n}\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u4f7f\u7528AbstractQueueSynchronizer\u5b9e\u73b0\u7684\u4e8c\u5143\u95ed\u9501"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"@ThreadSafe\npublic class OneShotLatch{\n    private final Sync sync = new Sync();\n    \n    public void signal() {\n        sync.releaseShared(0);\n    }\n    public void await() throws InterruptedException {\n        sync.acquireSharedInterruptibly(0);\n    }\n    private class Sync extends AbstractQueueSynchronizer {\n        protected int tryAcquireShared(int ignored) {\n            return (getState() == 1) ? 1 : -1;\n        }\n        protected boolean tryReleaseShared(int ignored) {\n            setState(1);\n            return true;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h2,{id:"javauntilconcurrent\u540c\u6b65\u5668\u7c7b\u4e2d\u7684aqs",children:"java.until.concurrent\u540c\u6b65\u5668\u7c7b\u4e2d\u7684AQS"}),"\n",(0,r.jsx)(e.h3,{id:"reentrantlock",children:"ReentrantLock"}),"\n",(0,r.jsx)(e.p,{children:"ReentrantLock \u53ea\u652f\u6301\u5f3a\u5360\u65b9\u5f0f\u7684\u83b7\u53d6\u64cd\u4f5c\uff0c\u56e0\u6b64\u5b83\u5b9e\u73b0\u4e86tryAcquire tryRelease\u548cisHeldExclusively"}),"\n",(0,r.jsx)(e.p,{children:"\u57fa\u4e8e\u975e\u516c\u5e73\u7684ReentrantLock\u5b9e\u73b0tryAcquire"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"protected boolean tryAcquire(int ignored) {\n    final Thread current = Thread.currentThread();\n    int c = getState();\n    if (c == 0) {\n        if (compareAndSetState(0, 1)) {\n            owner = current;\n            return true;\n        }\n    } else if (current == owner) {\n        setState(c + 1);\n        return true;\n    }\n    return false;\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"semaphore\u4e0ecountdownlatch",children:"Semaphore\u4e0eCountDownLatch"}),"\n",(0,r.jsx)(e.p,{children:"Semaphore\u4e2d\u7684tryAcquireShared\u4e0etryRleaseShared"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-java",children:"protected int tryAcquireShared(int acquires) {\n    while (true) {\n        int available = getState();\n        int remaining = available - acquires;\n        if (remaining < 0 || compareAndSetState(available, remaining)) {\n            return remaining;\n        }\n    }\n}\nprotected boolean tryReleaseShared(int releases) {\n    while (true) {\n        int p = getState();\n        if (compareAndSetState(p, p + releases)) {\n            return true;\n        }\n    }\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"futuretask",children:"FutureTask"}),"\n",(0,r.jsx)(e.p,{children:"FutureTask \u4e2d\uff0c AQS \u540c\u6b65\u72b6\u6001\u88ab\u7528\u6765\u4fdd\u5b58\u4efb\u52a1\u7684\u72b6\u6001\uff0c\u4f8b\u5982\uff0c\u6b63\u5728\u8fd0\u884c\u3001\u5df2\u5b8c\u6210\u6216\u5df2\u53d6\u6d88\u3002 FutureTask \u8fd8\u7ef4\u62a4\u4e00\u4e9b\u989d\u5916\u7684\u72b6\u6001\u53d8\u91cf\uff0c\u7528\u6765\u4fdd\u5b58\u8ba1\u7b97\u7ed3\u679c\u6216\u8005\u629b\u51fa\u7684\u5f02\u5e38\u3002\u6b64\u5916\uff0c\u5b83\u8fd8\u7ef4\u62a4\u4e86\u4e00\u4e2a\u5f15\u7528\uff0c\u6307\u5411\u6b63\u5728\u6267\u884c\u8ba1\u7b97\u4efb\u52a1\u7684\u7ebf\u7a0b\u3008\u5982\u679c\u5b83\u5f53\u524d\u5904\u4e8e\u8fd0\u884c\u72b6\u6001\u3009\uff0c\u56e0\u800c\u5982\u679c\u4efb\u52a1\u53d6\u6d88\uff0c\u8be5\u7ebf\u7a0b\u4f1a\u4e2d\u65ad\u3002"}),"\n",(0,r.jsx)(e.h3,{id:"reentrantreadwritelock",children:"ReentrantReadWriteLock"}),"\n",(0,r.jsx)(e.p,{children:"ReadWriteLock \u63a5\u53e3\u8868\u793a\u5b58\u5728\u4e24\u4e2a\u9501\uff1a\u4e00\u4e2a\u8bfb\u53d6\u9501\u548c\u4e00\u4e2a\u5199\u5165\u9501\uff0c\u4f46\u5728\u57fa\u4e8e AQS \u5b9e\u73b0ReentrantReadWriteLock \u4e2d\uff0c\u5355\u4e2a AQS\u5b50\u7c7b\u5c06\u540c\u65f6\u7ba1\u7406\u8bfb\u53d6\u52a0\u9501\u5982\u5199\u5165\u52a0\u9501\u3002 ReentrantReadWriteLock \u4f7f\u7528\u4e86\u4e00\u4e2a 16 \u4f4d\u7684\u72b6\u6001\u6765\u8868\u793a\u5728\u5199\u5165\u9501\u7684\u8ba1\u6570\uff0c\u5e76\u4e14\u4f7f\u7528\u4e86\u53e6\u2026\u4e2a 16 \u4f4d\u7684\u72b6\u6001\u6765\u8868\u793a\u8bfb\u53d6\u9501\u7684\u8ba1\u6570\u3002\u5728\u8bfb\u53d6\u9501\u4e0a\u7684\u64cd\u4f5c\u5c06\u4f7f\u7528\u5171\u4eab\u7684\u83b7\u53d6\u65b9\u6cd5\u4e0e\u91ca\u653e\u65b9\u6cd5\uff0c\u5728\u5199\u5165\u9501\u4e0a\u7684\u64cd\u4f5c\u5c06\u4f7f\u7528\u72ec\u5360\u7684\u83b7\u53d6\u65b9\u6cd5\u4e0e\u91ca\u653e\u65b9\u6cd5\u3002"})]})}function u(n={}){const{wrapper:e}={...(0,a.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(s,{...n})}):s(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>l,x:()=>c});var t=i(6540);const r={},a=t.createContext(r);function l(n){const e=t.useContext(a);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),t.createElement(a.Provider,{value:e},n.children)}}}]);