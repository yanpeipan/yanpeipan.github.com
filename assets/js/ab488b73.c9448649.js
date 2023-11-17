"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[4604],{9513:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>a});var n=t(5893),s=t(1151);const l={},d=void 0,r={id:"redis/Redis\u4f18\u5316/JedisPool\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e",title:"JedisPool\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e",description:"Lettuce\u5ba2\u6237\u7aef\u53caJedis\u5ba2\u6237\u7aef\u6bd4\u8f83\u5982\u4e0b\uff1a",source:"@site/docs/redis/Redis\u4f18\u5316/JedisPool\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e.md",sourceDirName:"redis/Redis\u4f18\u5316",slug:"/redis/Redis\u4f18\u5316/JedisPool\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e",permalink:"/docs/redis/Redis\u4f18\u5316/JedisPool\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/redis/Redis\u4f18\u5316/JedisPool\u8fde\u63a5\u6c60\u53c2\u6570\u914d\u7f6e.md",tags:[],version:"current",frontMatter:{},sidebar:"redisSidebar",previous:{title:"Lettuce\u95f4\u6b47\u6027\u53d1\u751f\uff1aRedisCommandTimeoutException",permalink:"/docs/redis/\u5e38\u89c1\u95ee\u9898/Lettuce\u95f4\u6b47\u6027\u53d1\u751f\uff1aRedisCommandTimeoutException"},next:{title:"Redis\u5b95\u673a\u4f18\u5316",permalink:"/docs/redis/Redis\u4f18\u5316/Redis\u5b95\u673a\u4f18\u5316"}},o={},a=[{value:"<strong>maxTotal</strong>",id:"maxtotal",level:2},{value:"maxIdle: maxTotal",id:"maxidle-maxtotal",level:2},{value:"minIdle",id:"minidle",level:2},{value:"maxWaitMillis: 1s",id:"maxwaitmillis-1s",level:2},{value:"timeout",id:"timeout",level:2},{value:"minEvictableIdleTimeMillis: -1",id:"minevictableidletimemillis--1",level:2},{value:"timeBetweenEvictionRunsMillis: 30",id:"timebetweenevictionrunsmillis-30",level:2},{value:"testOnBorrow: false",id:"testonborrow-false",level:2},{value:"testWhileIdle: true",id:"testwhileidle-true",level:2},{value:"testOnReturn: false",id:"testonreturn-false",level:2},{value:"maxAttempts",id:"maxattempts",level:2}];function c(e){const i={h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Lettuce\u5ba2\u6237\u7aef\u53caJedis\u5ba2\u6237\u7aef\u6bd4\u8f83\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Lettuce\uff1a","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Lettuce\u5ba2\u6237\u7aef\u6ca1\u6709\u8fde\u63a5\u4fdd\u6d3b\u63a2\u6d4b\uff0c\u9519\u8bef\u8fde\u63a5\u5b58\u5728\u8fde\u63a5\u6c60\u4e2d\u4f1a\u9020\u6210\u8bf7\u6c42\u8d85\u65f6\u62a5\u9519\u3002"}),"\n",(0,n.jsx)(i.li,{children:"Lettuce\u5ba2\u6237\u7aef\u672a\u5b9e\u73b0testOnBorrow\u7b49\u8fde\u63a5\u6c60\u68c0\u6d4b\u65b9\u6cd5\uff0c\u65e0\u6cd5\u5728\u4f7f\u7528\u8fde\u63a5\u4e4b\u524d\u8fdb\u884c\u8fde\u63a5\u6821\u9a8c\u3002"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Jedis\uff1a","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Jedis\u5ba2\u6237\u7aef\u5b9e\u73b0\u4e86testOnBorrow\u3001testWhileIdle\u3001testOnReturn\u7b49\u8fde\u63a5\u6c60\u6821\u9a8c\u914d\u7f6e\u3002\n\u5f00\u542ftestOnBorrow\u5728\u6bcf\u6b21\u501f\u7528\u8fde\u63a5\u524d\u90fd\u4f1a\u8fdb\u884c\u8fde\u63a5\u6821\u9a8c\uff0c\u53ef\u9760\u6027\u6700\u9ad8\uff0c\u4f46\u662f\u4f1a\u5f71\u54cd\u6027\u80fd\uff08\u6bcf\u6b21Redis\u8bf7\u6c42\u524d\u4f1a\u8fdb\u884c\u63a2\u6d4b\uff09\u3002"}),"\n",(0,n.jsx)(i.li,{children:"testWhileIdle\u53ef\u4ee5\u5728\u8fde\u63a5\u7a7a\u95f2\u65f6\u8fdb\u884c\u8fde\u63a5\u68c0\u6d4b\uff0c\u5408\u7406\u914d\u7f6e\u9608\u503c\u53ef\u4ee5\u53ca\u65f6\u5254\u9664\u8fde\u63a5\u6c60\u4e2d\u7684\u5f02\u5e38\u8fde\u63a5\uff0c\u9632\u6b62\u4f7f\u7528\u5f02\u5e38\u8fde\u63a5\u9020\u6210\u4e1a\u52a1\u62a5\u9519\u3002"}),"\n",(0,n.jsx)(i.li,{children:"\u5728\u7a7a\u95f2\u8fde\u63a5\u68c0\u6d4b\u4e4b\u524d\uff0c\u8fde\u63a5\u51fa\u73b0\u95ee\u9898\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u4f7f\u7528\u8be5\u8fde\u63a5\u7684\u4e1a\u52a1\u62a5\u9519\uff0c\u6b64\u5904\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570\u63a7\u5236\u68c0\u6d4b\u95f4\u9694\uff08timeBetweenEvictionRunsMillis\uff09\u3002\n\u56e0\u6b64\uff0cJedis\u5ba2\u6237\u7aef\u5728\u9762\u5bf9\u8fde\u63a5\u5f02\u5e38\uff0c\u7f51\u7edc\u6296\u52a8\u7b49\u573a\u666f\u4e0b\u7684\u5f02\u5e38\u5904\u7406\u548c\u68c0\u6d4b\u80fd\u529b\u660e\u663e\u5f3a\u4e8eLettuce\uff0c\u53ef\u9760\u6027\u66f4\u5f3a\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"maxtotal",children:(0,n.jsx)(i.strong,{children:"maxTotal"})}),"\n",(0,n.jsx)(i.p,{children:"\u6700\u5927\u8fde\u63a5\uff0c\u5355\u4f4d\uff1a\u4e2a"}),"\n",(0,n.jsx)(i.p,{children:"\u6839\u636eWeb\u5bb9\u5668\u7684Http\u7ebf\u7a0b\u6570\u6765\u8fdb\u884c\u914d\u7f6e\uff0c\u4f30\u7b97\u5355\u4e2aHttp\u8bf7\u6c42\u4e2d\u53ef\u80fd\u4f1a\u5e76\u884c\u8fdb\u884c\u7684Redis\u8c03\u7528\u6b21\u6570\uff0c\u4f8b\u5982\uff1aTomcat\u4e2d\u7684Connector\u5185\u7684maxConnections\u914d\u7f6e\u4e3a150\uff0c\u6bcf\u4e2aHttp\u8bf7\u6c42\u53ef\u80fd\u4f1a\u5e76\u884c\u6267\u884c2\u4e2aRedis\u8bf7\u6c42\uff0c\u5728\u6b64\u4e4b\u4e0a\u8fdb\u884c\u90e8\u5206\u9884\u7559\uff0c\u5219\u5efa\u8bae\u914d\u7f6e\u81f3\u5c11\u4e3a\uff1a150 x 2 + 100= 400"}),"\n",(0,n.jsx)(i.p,{children:"**\u9650\u5236\u6761\u4ef6\uff1a**\u5355\u4e2aRedis\u5b9e\u4f8b\u7684\u6700\u5927\u8fde\u63a5\u6570\u3002maxTotal\u548c\u5ba2\u6237\u7aef\u8282\u70b9\u6570\uff08CCE\u5bb9\u5668\u6216\u4e1a\u52a1VM\u6570\u91cf\uff09\u6570\u503c\u7684\u4e58\u79ef\u8981\u5c0f\u4e8e\u5355\u4e2aRedis\u5b9e\u4f8b\u7684\u6700\u5927\u8fde\u63a5\u6570\u3002"}),"\n",(0,n.jsx)(i.p,{children:"\u4f8b\u5982\uff1aRedis\u4e3b\u5907\u5b9e\u4f8b\u914d\u7f6emaxClients\u4e3a10000\uff0c\u5355\u4e2a\u5ba2\u6237\u7aefmaxTotal\u914d\u7f6e\u4e3a500\uff0c\u5219\u6700\u5927\u5ba2\u6237\u7aef\u8282\u70b9\u6570\u91cf\u4e3a20\u4e2a\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"maxidle-maxtotal",children:"maxIdle: maxTotal"}),"\n",(0,n.jsx)(i.p,{children:"\u6700\u5927\u7a7a\u95f2\u8fde\u63a5\uff0c\u5355\u4f4d\uff1a\u4e2a\n\u5efa\u8bae\u914d\u7f6e\u4e3amaxTotal\u4e00\u81f4\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"minidle",children:"minIdle"}),"\n",(0,n.jsx)(i.p,{children:"\u6700\u5c0f\u7a7a\u95f2\u8fde\u63a5\uff0c\u5355\u4f4d\uff1a\u4e2a\n\u4e00\u822c\u6765\u8bf4\u5efa\u8bae\u914d\u7f6e\u4e3amaxTotal\u7684X\u5206\u4e4b\u4e00\uff0c\u4f8b\u5982\u6b64\u5904\u5e38\u89c4\u914d\u7f6e\u5efa\u8bae\u4e3a\uff1a100\u3002\n\u5bf9\u4e8e\u6027\u80fd\u654f\u611f\u7684\u573a\u666f\uff0c\u9632\u6b62\u7ecf\u5e38\u8fde\u63a5\u6570\u91cf\u6296\u52a8\u9020\u6210\u5f71\u54cd\uff0c\u4e5f\u53ef\u4ee5\u914d\u7f6e\u4e3a\u4e0emaxIdle\u4e00\u81f4\uff0c\u4f8b\u5982\uff1a400\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"maxwaitmillis-1s",children:"maxWaitMillis: 1s"}),"\n",(0,n.jsxs)(i.p,{children:["\u6700\u5927\u83b7\u53d6\u8fde\u63a5\u7b49\u5f85\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\u3002\u5f53",(0,n.jsx)(i.strong,{children:"blockWhenExhausted: true"}),"\u65f6\u624d\u751f\u6548\u3002\n\u83b7\u53d6\u8fde\u63a5\u65f6\u6700\u5927\u7684\u8fde\u63a5\u6c60\u7b49\u5f85\u65f6\u95f4\uff0c\u6839\u636e\u5355\u6b21\u4e1a\u52a1\u6700\u957f\u5bb9\u5fcd\u7684\u5931\u8d25\u65f6\u95f4\u51cf\u53bb\u6267\u884c\u547d\u4ee4\u7684\u8d85\u65f6\u65f6\u95f4\u5f97\u5230\u5efa\u8bae\u503c\u3002\u4f8b\u5982\uff1aHttp\u6700\u5927\u5bb9\u5fcd\u8d85\u65f6\u65f6\u95f4\u4e3a15s\uff0cRedis\u8bf7\u6c42\u7684timeout\u8bbe\u7f6e\u4e3a10s\uff0c\u5219\u6b64\u5904\u53ef\u4ee5\u914d\u7f6e\u4e3a5s\u3002"]}),"\n",(0,n.jsx)(i.h2,{id:"timeout",children:"timeout"}),"\n",(0,n.jsx)(i.p,{children:"\u547d\u4ee4\u6267\u884c\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n\u5355\u6b21\u6267\u884cRedis\u547d\u4ee4\u6700\u5927\u53ef\u5bb9\u5fcd\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u6839\u636e\u4e1a\u52a1\u7a0b\u5e8f\u7684\u903b\u8f91\u8fdb\u884c\u9009\u62e9\uff0c\u4e00\u822c\u6765\u8bf4\u5904\u4e8e\u5bf9\u7f51\u7edc\u5bb9\u9519\u7b49\u8003\u8651\u81f3\u5c11\u5efa\u8bae\u914d\u7f6e\u4e3a210ms\u4ee5\u4e0a\u3002\u7279\u6b8a\u7684\u63a2\u6d4b\u903b\u8f91\u6216\u8005\u73af\u5883\u5f02\u5e38\u68c0\u6d4b\u7b49\uff0c\u53ef\u4ee5\u9002\u5f53\u8c03\u6574\u8fbe\u5230\u79d2\u7ea7\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"minevictableidletimemillis--1",children:"minEvictableIdleTimeMillis: -1"}),"\n",(0,n.jsx)(i.p,{children:"\u7a7a\u95f2\u8fde\u63a5\u9010\u51fa\u65f6\u95f4\uff0c\u5927\u4e8e\u8be5\u503c\u7684\u7a7a\u95f2\u8fde\u63a5\u4e00\u76f4\u672a\u88ab\u4f7f\u7528\u5219\u4f1a\u88ab\u91ca\u653e\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n\u5982\u679c\u5e0c\u671b\u7cfb\u7edf\u4e0d\u4f1a\u7ecf\u5e38\u5bf9\u8fde\u63a5\u8fdb\u884c\u65ad\u94fe\u91cd\u5efa\uff0c\u6b64\u5904\u53ef\u4ee5\u914d\u7f6e\u4e00\u4e2a\u8f83\u5927\u503c\uff08xx\u5206\u949f\uff09\uff0c\u6216\u8005\u6b64\u5904\u914d\u7f6e\u4e3a-1\u5e76\u4e14\u642d\u914d\u7a7a\u95f2\u8fde\u63a5\u68c0\u6d4b\u8fdb\u884c\u5b9a\u671f\u68c0\u6d4b\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"timebetweenevictionrunsmillis-30",children:"timeBetweenEvictionRunsMillis: 30"}),"\n",(0,n.jsx)(i.p,{children:"\u7a7a\u95f2\u8fde\u63a5\u63a2\u6d4b\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n\u6839\u636e\u7cfb\u7edf\u7684\u7a7a\u95f2\u8fde\u63a5\u6570\u91cf\u8fdb\u884c\u4f30\u7b97\uff0c\u4f8b\u5982\u7cfb\u7edf\u7684\u7a7a\u95f2\u8fde\u63a5\u63a2\u6d4b\u65f6\u95f4\u914d\u7f6e\u4e3a30s\uff0c\u5219\u4ee3\u8868\u6bcf\u969430s\u4f1a\u5bf9\u8fde\u63a5\u8fdb\u884c\u63a2\u6d4b\uff0c\u5982\u679c30s\u5185\u53d1\u751f\u5f02\u5e38\u7684\u8fde\u63a5\uff0c\u7ecf\u8fc7\u63a2\u6d4b\u540e\u4f1a\u8fdb\u884c\u8fde\u63a5\u6392\u9664\u3002\u6839\u636e\u8fde\u63a5\u6570\u7684\u591a\u5c11\u8fdb\u884c\u914d\u7f6e\uff0c\u5982\u679c\u8fde\u63a5\u6570\u592a\u5927\uff0c\u914d\u7f6e\u65f6\u95f4\u592a\u77ed\uff0c\u4f1a\u9020\u6210\u8bf7\u6c42\u8d44\u6e90\u6d6a\u8d39\u3002\u5bf9\u4e8e\u51e0\u767e\u7ea7\u522b\u7684\u8fde\u63a5\uff0c\u5e38\u89c4\u6765\u8bf4\u5efa\u8bae\u914d\u7f6e\u4e3a30s\uff0c\u53ef\u4ee5\u6839\u636e\u7cfb\u7edf\u9700\u8981\u8fdb\u884c\u52a8\u6001\u8c03\u6574\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"testonborrow-false",children:"testOnBorrow: false"}),"\n",(0,n.jsx)(i.p,{children:"\u5411\u8d44\u6e90\u6c60\u501f\u7528\u8fde\u63a5\u65f6\u662f\u5426\u505a\u8fde\u63a5\u6709\u6548\u6027\u68c0\u6d4b\uff08ping\uff09\uff0c\u68c0\u6d4b\u5230\u7684\u65e0\u6548\u8fde\u63a5\u5c06\u4f1a\u88ab\u79fb\u9664\u3002\n\u5bf9\u4e8e\u4e1a\u52a1\u8fde\u63a5\u6781\u7aef\u654f\u611f\u7684\uff0c\u5e76\u4e14\u6027\u80fd\u53ef\u4ee5\u63a5\u53d7\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u914d\u7f6e\u4e3aTrue\uff0c\u4e00\u822c\u6765\u8bf4\u5efa\u8bae\u914d\u7f6e\u4e3aFalse\uff0c\u542f\u7528\u8fde\u63a5\u7a7a\u95f2\u68c0\u6d4b\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"testwhileidle-true",children:"testWhileIdle: true"}),"\n",(0,n.jsx)(i.p,{children:"\u662f\u5426\u5728\u7a7a\u95f2\u8d44\u6e90\u76d1\u6d4b\u65f6\u901a\u8fc7ping\u547d\u4ee4\u76d1\u6d4b\u8fde\u63a5\u6709\u6548\u6027\uff0c\u65e0\u6548\u8fde\u63a5\u5c06\u88ab\u9500\u6bc1\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"testonreturn-false",children:"testOnReturn: false"}),"\n",(0,n.jsx)(i.p,{children:"\u5411\u8d44\u6e90\u6c60\u5f52\u8fd8\u8fde\u63a5\u65f6\u662f\u5426\u505a\u8fde\u63a5\u6709\u6548\u6027\u68c0\u6d4b\uff08ping\uff09\uff0c\u68c0\u6d4b\u5230\u65e0\u6548\u8fde\u63a5\u5c06\u4f1a\u88ab\u79fb\u9664\u3002"}),"\n",(0,n.jsx)(i.h2,{id:"maxattempts",children:"maxAttempts"}),"\n",(0,n.jsx)(i.p,{children:"\u5728JedisCluster\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u914d\u7f6emaxAttempts\u53c2\u6570\u6765\u5b9a\u4e49\u5931\u8d25\u65f6\u7684\u91cd\u8bd5\u6b21\u6570\u3002\n\u5efa\u8bae\u914d\u7f6e3-5\u4e4b\u95f4\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4e3a5\u3002\u6839\u636e\u4e1a\u52a1\u63a5\u53e3\u6700\u5927\u8d85\u65f6\u65f6\u95f4\u548c\u5355\u6b21\u8bf7\u6c42\u7684timeout\u7efc\u5408\u914d\u7f6e\uff0c\u6700\u5927\u914d\u7f6e\u4e0d\u5efa\u8bae\u8d85\u8fc710\uff0c\u5426\u5219\u4f1a\u9020\u6210\u5355\u6b21\u8bf7\u6c42\u5904\u7406\u65f6\u95f4\u8fc7\u957f\uff0c\u63a5\u53e3\u8bf7\u6c42\u963b\u585e\u3002"})]})}function m(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>r,a:()=>d});var n=t(7294);const s={},l=n.createContext(s);function d(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);