"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[7959],{8473:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>o});var n=i(5893),r=i(1151);const t={title:"Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached",tags:["Jedis","Redis","JedisDataException"]},d=void 0,c={id:"redis/\u5e38\u89c1\u95ee\u9898/Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached",title:"Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached",description:"\u95ee\u9898\u73b0\u8c61",source:"@site/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached.md",sourceDirName:"redis/\u5e38\u89c1\u95ee\u9898",slug:"/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached",permalink:"/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached.md",tags:[{label:"Jedis",permalink:"/docs/tags/jedis"},{label:"Redis",permalink:"/docs/tags/redis"},{label:"JedisDataException",permalink:"/docs/tags/jedis-data-exception"}],version:"current",frontMatter:{title:"Jedis\u89e6\u53d1\u7194\u65ad\uff1aERR max number of clients reached",tags:["Jedis","Redis","JedisDataException"]},sidebar:"redisSidebar",previous:{title:"Jedis\u5ba2\u6237\u7aef\u8bfb\u5199\u8d85\u65f6\uff1aRead timed out",permalink:"/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u5ba2\u6237\u7aef\u8bfb\u5199\u8d85\u65f6\uff1aRead timed out"},next:{title:"Jedis\u8fde\u63a5\u6c60\u5f02\u5e38\uff1aCould not get a resource from the pool",permalink:"/docs/redis/\u5e38\u89c1\u95ee\u9898/Jedis\u8fde\u63a5\u6c60\u5f02\u5e38\uff1aCould not get a resource from the pool"}},a={},o=[{value:"\u95ee\u9898\u73b0\u8c61",id:"\u95ee\u9898\u73b0\u8c61",level:2},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:2},{value:"1. \u8c03\u6574\u6700\u5927\u8fde\u63a5\u6570",id:"1-\u8c03\u6574\u6700\u5927\u8fde\u63a5\u6570",level:3},{value:"2. \u964d\u4f4e\u7a7a\u95f2\u8d85\u65f6\u65f6\u95f4",id:"2-\u964d\u4f4e\u7a7a\u95f2\u8d85\u65f6\u65f6\u95f4",level:3},{value:"3. \u5b9a\u4f4d\u548c\u4f18\u5316\u5ba2\u6237\u7aef\u95ee\u9898",id:"3-\u5b9a\u4f4d\u548c\u4f18\u5316\u5ba2\u6237\u7aef\u95ee\u9898",level:3}];function l(e){const s={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"\u95ee\u9898\u73b0\u8c61",children:"\u95ee\u9898\u73b0\u8c61"}),"\n",(0,n.jsxs)(s.p,{children:["\u5982\u679cRedis Service\u8fde\u63a5\u6570\u8d85\u8fc7",(0,n.jsx)(s.code,{children:"maxclients"}),"\uff08\u9ed8\u8ba4\u4e3a10000\uff09\u9608\u503c\u5219\u4f1a\u89e6\u53d1\u7194\u65ad\uff0c\u629b\u51fa\u4ee5\u4e0b\u5f02\u5e38\uff1a"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-java",children:"redis.exceptions.connectionerror: max number of clients reached\n\nredis.clients.jedis.exceptions.JedisDataException: ERR max number of clients reached\n"})}),"\n",(0,n.jsx)(s.h2,{id:"\u89e3\u51b3\u65b9\u6848",children:"\u89e3\u51b3\u65b9\u6848"}),"\n",(0,n.jsx)(s.h3,{id:"1-\u8c03\u6574\u6700\u5927\u8fde\u63a5\u6570",children:"1. \u8c03\u6574\u6700\u5927\u8fde\u63a5\u6570"}),"\n",(0,n.jsx)(s.p,{children:"\u8c03\u6574Redis Service\u7684\u6700\u5927\u8fde\u63a5\u6570\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"config set maxclients 65535\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u6ce8\u610f\uff1a\u68c0\u67e5Redis Service\u80fd\u591f\u6253\u5f00\u7684\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\uff1a"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"# \u67e5\u770bRedis Service\u80fd\u591f\u6253\u5f00\u7684\u6700\u5927\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\ncat /proc/`redis-pid`/limits | grep 'Max open files'\n\n# \u7edf\u8ba1Redis Service\u8fdb\u7a0b\u6253\u5f00\u7684\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570\u91cf\nll /proc/`redis-pid`/fd | wc -l\n"})}),"\n",(0,n.jsx)(s.h3,{id:"2-\u964d\u4f4e\u7a7a\u95f2\u8d85\u65f6\u65f6\u95f4",children:"2. \u964d\u4f4e\u7a7a\u95f2\u8d85\u65f6\u65f6\u95f4"}),"\n",(0,n.jsxs)(s.p,{children:["Redis Service\u901a\u8fc7",(0,n.jsx)(s.strong,{children:"timeout"}),"\u6765\u8bbe\u7f6e\u5ba2\u6237\u7aef\u7684\u7a7a\u95f2\u8d85\u65f6\uff0c\u9ed8\u8ba4\u503c\u4e3a0\u8868\u793a\u6c38\u4e0d\u5173\u95ed\uff0c\u8bbe\u7f6e\u4e00\u4e2a\u5408\u7406\u7684\u53c2\u6570\u53ef\u4ee5\u8ba9\u670d\u52a1\u7aef\u4e3b\u52a8\u5173\u95ed\u95f2\u7f6e\u7684\u8fde\u63a5\u3002\n\u6ce8\uff1a\u4e3a\u4e86\u63d0\u9ad8\u6027\u80fd\uff0cRedis\u4e0d\u4e00\u5b9a\u4f1a\u7cbe\u786e\u5730\u6309\u7167",(0,n.jsx)(s.strong,{children:"timeout"}),"\u53c2\u6570\u503c\u7684\u65f6\u95f4\u6765\u65ad\u5f00\u7b26\u5408\u6761\u4ef6\u7684\u7a7a\u95f2\u8fde\u63a5\uff0c\u4f8b\u5982\u8bbe\u7f6e",(0,n.jsx)(s.strong,{children:"timeout"}),"\u53c2\u6570\u503c\u4e3a10s\uff0c\u4f46\u7a7a\u95f2\u8fde\u63a5\u53ef\u80fd\u572812s\u540e\uff0c\u670d\u52a1\u5668\u4e2d\u65b0\u589e\u5f88\u591a\u8fde\u63a5\u65f6\u624d\u4f1a\u88ab\u65ad\u5f00\u3002\u5982\u9700\u964d\u4f4e\u8fd9\u4e2a\u5ef6\u8fdf\uff0c\u53ef\u9002\u5f53\u589e\u5927",(0,n.jsx)(s.strong,{children:"hz"}),"\u53c2\u6570\u7684\u503c\uff0c\u63d0\u9ad8\u8d1f\u8d23\u65ad\u5f00\u8d85\u65f6\u8fde\u63a5\u7b49\u5b9a\u65f6\u4efb\u52a1\u7684\u8fd0\u884c\u9891\u7387\u3002"]}),"\n",(0,n.jsx)(s.h3,{id:"3-\u5b9a\u4f4d\u548c\u4f18\u5316\u5ba2\u6237\u7aef\u95ee\u9898",children:"3. \u5b9a\u4f4d\u548c\u4f18\u5316\u5ba2\u6237\u7aef\u95ee\u9898"}),"\n",(0,n.jsx)(s.p,{children:"\u67e5\u627e\u5ba2\u6237\u7aef\u7684\u539f\u56e0\uff1a\u6269\u5bb9/\u8fde\u63a5\u6c60\u914d\u7f6e/\u6162\u67e5\u8be2"})]})}function u(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,s,i)=>{i.d(s,{Z:()=>c,a:()=>d});var n=i(7294);const r={},t=n.createContext(r);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);