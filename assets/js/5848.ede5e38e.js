"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[5848],{902:(e,t,a)=>{function i(e,t){e.accDescr&&t.setAccDescription?.(e.accDescr),e.accTitle&&t.setAccTitle?.(e.accTitle),e.title&&t.setDiagramTitle?.(e.title)}a.d(t,{S:()=>i}),(0,a(992).K2)(i,"populateCommonDb")},5848:(e,t,a)=>{a.d(t,{diagram:()=>b});var i=a(902),n=a(6853),l=a(4078),r=a(992),s=a(8731),o=a(7),c=r.UI.pie,p={sections:new Map,showData:!1,config:c},d=p.sections,g=p.showData,u=structuredClone(c),h=(0,r.K2)((()=>structuredClone(u)),"getConfig"),m=(0,r.K2)((()=>{d=new Map,g=p.showData,(0,r.IU)()}),"clear"),f=(0,r.K2)((({label:e,value:t})=>{d.has(e)||(d.set(e,t),r.Rm.debug(`added new section: ${e}, with value: ${t}`))}),"addSection"),S=(0,r.K2)((()=>d),"getSections"),x=(0,r.K2)((e=>{g=e}),"setShowData"),w=(0,r.K2)((()=>g),"getShowData"),D={getConfig:h,clear:m,setDiagramTitle:r.ke,getDiagramTitle:r.ab,setAccTitle:r.SV,getAccTitle:r.iN,setAccDescription:r.EI,getAccDescription:r.m7,addSection:f,getSections:S,setShowData:x,getShowData:w},y=(0,r.K2)(((e,t)=>{(0,i.S)(e,t),t.setShowData(e.showData),e.sections.map(t.addSection)}),"populateDb"),T={parse:(0,r.K2)((async e=>{const t=await(0,s.qg)("pie",e);r.Rm.debug(t),y(t,D)}),"parse")},$=(0,r.K2)((e=>`\n  .pieCircle{\n    stroke: ${e.pieStrokeColor};\n    stroke-width : ${e.pieStrokeWidth};\n    opacity : ${e.pieOpacity};\n  }\n  .pieOuterCircle{\n    stroke: ${e.pieOuterStrokeColor};\n    stroke-width: ${e.pieOuterStrokeWidth};\n    fill: none;\n  }\n  .pieTitleText {\n    text-anchor: middle;\n    font-size: ${e.pieTitleTextSize};\n    fill: ${e.pieTitleTextColor};\n    font-family: ${e.fontFamily};\n  }\n  .slice {\n    font-family: ${e.fontFamily};\n    fill: ${e.pieSectionTextColor};\n    font-size:${e.pieSectionTextSize};\n    // fill: white;\n  }\n  .legend text {\n    fill: ${e.pieLegendTextColor};\n    font-family: ${e.fontFamily};\n    font-size: ${e.pieLegendTextSize};\n  }\n`),"getStyles"),C=(0,r.K2)((e=>{const t=[...e.entries()].map((e=>({label:e[0],value:e[1]}))).sort(((e,t)=>t.value-e.value));return(0,o.rLf)().value((e=>e.value))(t)}),"createPieArcs"),b={parser:T,db:D,renderer:{draw:(0,r.K2)(((e,t,a,i)=>{r.Rm.debug("rendering pie chart\n"+e);const s=i.db,c=(0,r.D7)(),p=(0,n.$t)(s.getConfig(),c.pie),d=18,g=450,u=(0,l.D)(t),h=u.append("g");h.attr("transform","translate(225,225)");const{themeVariables:m}=c;let[f]=(0,n.I5)(m.pieOuterStrokeWidth);f??=2;const S=p.textPosition,x=Math.min(450,g)/2-40,w=(0,o.JLW)().innerRadius(0).outerRadius(x),D=(0,o.JLW)().innerRadius(x*S).outerRadius(x*S);h.append("circle").attr("cx",0).attr("cy",0).attr("r",x+f/2).attr("class","pieOuterCircle");const y=s.getSections(),T=C(y),$=[m.pie1,m.pie2,m.pie3,m.pie4,m.pie5,m.pie6,m.pie7,m.pie8,m.pie9,m.pie10,m.pie11,m.pie12],b=(0,o.UMr)($);h.selectAll("mySlices").data(T).enter().append("path").attr("d",w).attr("fill",(e=>b(e.data.label))).attr("class","pieCircle");let k=0;y.forEach((e=>{k+=e})),h.selectAll("mySlices").data(T).enter().append("text").text((e=>(e.data.value/k*100).toFixed(0)+"%")).attr("transform",(e=>"translate("+D.centroid(e)+")")).style("text-anchor","middle").attr("class","slice"),h.append("text").text(s.getDiagramTitle()).attr("x",0).attr("y",-200).attr("class","pieTitleText");const K=h.selectAll(".legend").data(b.domain()).enter().append("g").attr("class","legend").attr("transform",((e,t)=>"translate(216,"+(22*t-22*b.domain().length/2)+")"));K.append("rect").attr("width",d).attr("height",d).style("fill",b).style("stroke",b),K.data(T).append("text").attr("x",22).attr("y",14).text((e=>{const{label:t,value:a}=e.data;return s.getShowData()?`${t} [${a}]`:t}));const v=512+Math.max(...K.selectAll("text").nodes().map((e=>e?.getBoundingClientRect().width??0)));u.attr("viewBox",`0 0 ${v} 450`),(0,r.a$)(u,g,v,p.useMaxWidth)}),"draw")},styles:$}}}]);