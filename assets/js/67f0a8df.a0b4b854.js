"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[5733],{6377:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream","title":"Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream","description":"\u4f7f\u7528Jedis\u8fde\u63a5\u6c60\uff0c\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream","source":"@site/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream.md","sourceDirName":"redis/\u5e38\u89c1\u95ee\u9898","slug":"/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream","permalink":"/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream","draft":false,"unlisted":false,"editUrl":"https://github.com/yanpeipan/yanpeipan.github.com/tree/main/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream.md","tags":[{"inline":true,"label":"Redis","permalink":"/docs/tags/redis"},{"inline":true,"label":"Jedis","permalink":"/docs/tags/jedis"},{"inline":true,"label":"JedisConnectionException","permalink":"/docs/tags/jedis-connection-exception"}],"version":"current","frontMatter":{"title":"Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream","tags":["Redis","Jedis","JedisConnectionException"]},"sidebar":"redisSidebar","previous":{"title":"Jedis\u5185\u5b58\u6ea2\u51fa\uff1aOOM command not allowed when used memory > \'maxmemory\'","permalink":"/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5185\u5b58\u6ea2\u51fa\uff1aOOM command not allowed when used memory &gt \'maxmemory\'"},"next":{"title":"Jedis\u5ba2\u6237\u7aef\u8bfb\u5199\u8d85\u65f6\uff1aRead timed out","permalink":"/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5ba2\u6237\u7aef\u8bfb\u5199\u8d85\u65f6\uff1aRead timed out"}}');var s=i(4848),d=i(8453);const r={title:"Jedis\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream",tags:["Redis","Jedis","JedisConnectionException"]},o="\u95ee\u9898\u73b0\u8c61",a={},c=[{value:"1. \u591a\u4e2a\u7ebf\u7a0b\u5171\u7528\u4e00\u4e2aJedis\u8fde\u63a5",id:"1-\u591a\u4e2a\u7ebf\u7a0b\u5171\u7528\u4e00\u4e2ajedis\u8fde\u63a5",level:2},{value:"2. \u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5df2\u6ee1\uff0c\u5bfc\u81f4\u7194\u65ad",id:"2-\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5df2\u6ee1\u5bfc\u81f4\u7194\u65ad",level:2},{value:"3. \u8fde\u63a5\u7a7a\u95f2\uff0c\u88ab\u4e3b\u52a8\u5173\u95ed",id:"3-\u8fde\u63a5\u7a7a\u95f2\u88ab\u4e3b\u52a8\u5173\u95ed",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"\u95ee\u9898\u73b0\u8c61",children:"\u95ee\u9898\u73b0\u8c61"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528Jedis\u8fde\u63a5\u6c60\uff0c\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5f02\u5e38\uff1aUnexpected end of stream"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:"redis.clients.jedis.exceptions.JedisConnectionException: Unexpected end of stream.  \n    at redis.clients.util.RedisInputStream.ensureFill(RedisInputStream.java:199)  \n    at redis.clients.util.RedisInputStream.readByte(RedisInputStream.java:40)  \n    at redis.clients.jedis.Protocol.process(Protocol.java:151)  \n    at redis.clients.jedis.Protocol.read(Protocol.java:215)  \n    at redis.clients.jedis.Connection.readProtocolWithCheckingBroken(Connection.java:340)  \n    at redis.clients.jedis.Connection.getBinaryBulkReply(Connection.java:259)  \n    at redis.clients.jedis.Connection.getBulkReply(Connection.java:248)  \n    at redis.clients.jedis.Jedis.get(Jedis.java:153)\n"})}),"\n",(0,s.jsx)(n.h1,{id:"\u95ee\u9898\u6392\u67e5",children:"\u95ee\u9898\u6392\u67e5"}),"\n",(0,s.jsx)(n.h2,{id:"1-\u591a\u4e2a\u7ebf\u7a0b\u5171\u7528\u4e00\u4e2ajedis\u8fde\u63a5",children:"1. \u591a\u4e2a\u7ebf\u7a0b\u5171\u7528\u4e00\u4e2aJedis\u8fde\u63a5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'new Thread(new Runnable() {\n    public void run() {\n        jedis.get("hello");\n    }\n}).start();\n\nnew Thread(new Runnable() {\n    public void run() {\n        jedis.get("world");\n    }\n}).start();\n'})}),"\n",(0,s.jsx)(n.h2,{id:"2-\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5df2\u6ee1\u5bfc\u81f4\u7194\u65ad",children:"2. \u5ba2\u6237\u7aef\u7f13\u51b2\u533a\u5df2\u6ee1\uff0c\u5bfc\u81f4\u7194\u65ad"}),"\n",(0,s.jsxs)(n.p,{children:["Redis \u666e\u901a\u5ba2\u6237\u7aef\u8bf7\u6c42\u8d85\u8fc7",(0,s.jsx)(n.code,{children:"client-output-buffer-limit"}),"\u9650\u5236\uff0c\u5bfc\u81f4\u8fde\u63a5\u65ad\u5f00\u7684\u95ee\u9898\nRedis\u6709\u4e09\u79cd\u5ba2\u6237\u7aef\u7f13\u51b2\u533a\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u666e\u901a\u5ba2\u6237\u7aef\u7f13\u51b2\u533a(normal)"}),"\n",(0,s.jsx)(n.li,{children:"slave\u5ba2\u6237\u7aef\u7f13\u51b2\u533a(slave)"}),"\n",(0,s.jsx)(n.li,{children:"\u53d1\u5e03\u8ba2\u9605\u7f13\u51b2\u533a(pubsub)"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# \u9ed8\u8ba4\u914d\u7f6e\nclient-output-buffer-limit normal 0 0 0\nclient-output-buffer-limit slave 256mb 64mb 60\nclient-output-buffer-limit pubsub 8mb 2mb 60\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u91c7\u7528\u4e34\u65f6\u89e3\u51b3\u529e\u6cd5:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'config set client-output-buffer-limit "normal 0 0 0 slave 8294967296 2147483648 60 pubsub 33554432 8388608 60"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"3-\u8fde\u63a5\u7a7a\u95f2\u88ab\u4e3b\u52a8\u5173\u95ed",children:"3. \u8fde\u63a5\u7a7a\u95f2\uff0c\u88ab\u4e3b\u52a8\u5173\u95ed"}),"\n",(0,s.jsxs)(n.p,{children:["Redis Service\u5728\u7a7a\u95f2",(0,s.jsx)(n.code,{children:"timeout"}),"\u540e\u4e3b\u52a8",(0,s.jsx)(n.code,{children:"FIN"}),"\u5173\u95ed\u8fde\u63a5\u3002\u5ba2\u6237\u7aef\u4ece\u8fde\u63a5\u6c60\u62ff\u5230\u5df2\u7ecf\u88ab\u65ad\u5f00\u7684\u8fde\u63a5\uff0c\u5bfc\u81f4\u5f02\u5e38\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-java",children:'try {  \n    jedis.get("helo")  \n    Thread.sleep(3000)  \n    jedis.get("hello")  \n} catch (ex: Exception) {  \n    ex.printStackTrace\n}\n'})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'127.0.0.1:6379> config get timeout\n1) "timeout"  \n2) "2"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u5927\u5e76\u53d1\u573a\u666f\u4e0b\uff0c\u4e0d\u63a8\u8350\u5f00\u542f",(0,s.jsx)(n.code,{children:"testOnBorrow"}),"\u3002\u53c2\u7167[[JedisPool\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e]]"]})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(6540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);