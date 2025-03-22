"use strict";(self.webpackChunkyanpeipan_github_com=self.webpackChunkyanpeipan_github_com||[]).push([[2295],{2295:(t,e,n)=>{n.d(e,{diagram:()=>J});var i=n(992),s=n(7),r=n(3219),a=n(8041),o=n(5263),c=function(){var t=(0,i.K2)((function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n}),"o"),e=[6,8,10,11,12,14,16,17,20,21],n=[1,9],s=[1,10],r=[1,11],a=[1,12],o=[1,13],c=[1,16],l=[1,17],h={trace:(0,i.K2)((function(){}),"trace"),yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:(0,i.K2)((function(t,e,n,i,s,r,a){var o=r.length-1;switch(s){case 1:return r[o-1];case 2:case 6:case 7:this.$=[];break;case 3:r[o-1].push(r[o]),this.$=r[o-1];break;case 4:case 5:this.$=r[o];break;case 8:i.getCommonDb().setDiagramTitle(r[o].substr(6)),this.$=r[o].substr(6);break;case 9:this.$=r[o].trim(),i.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=r[o].trim(),i.getCommonDb().setAccDescription(this.$);break;case 12:i.addSection(r[o].substr(8)),this.$=r[o].substr(8);break;case 15:i.addTask(r[o],0,""),this.$=r[o];break;case 16:i.addEvent(r[o].substr(2)),this.$=r[o]}}),"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:n,12:s,14:r,16:a,17:o,18:14,19:15,20:c,21:l},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:18,11:n,12:s,14:r,16:a,17:o,18:14,19:15,20:c,21:l},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,19]},{15:[1,20]},t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),t(e,[2,4]),t(e,[2,9]),t(e,[2,10])],defaultActions:{},parseError:(0,i.K2)((function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)}),"parseError"),parse:(0,i.K2)((function(t){var e=this,n=[0],s=[],r=[null],a=[],o=this.table,c="",l=0,h=0,d=0,u=a.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var f=p.yylloc;a.push(f);var m=p.options&&p.options.ranges;function x(){var t;return"number"!=typeof(t=s.pop()||p.lex()||1)&&(t instanceof Array&&(t=(s=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,i.K2)((function(t){n.length=n.length-2*t,r.length=r.length-t,a.length=a.length-t}),"popStack"),(0,i.K2)(x,"lex");for(var b,k,_,w,v,K,S,$,E,T={};;){if(_=n[n.length-1],this.defaultActions[_]?w=this.defaultActions[_]:(null==b&&(b=x()),w=o[_]&&o[_][b]),void 0===w||!w.length||!w[0]){var I="";for(K in E=[],o[_])this.terminals_[K]&&K>2&&E.push("'"+this.terminals_[K]+"'");I=p.showPosition?"Parse error on line "+(l+1)+":\n"+p.showPosition()+"\nExpecting "+E.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(l+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(I,{text:p.match,token:this.terminals_[b]||b,line:p.yylineno,loc:f,expected:E})}if(w[0]instanceof Array&&w.length>1)throw new Error("Parse Error: multiple actions possible at state: "+_+", token: "+b);switch(w[0]){case 1:n.push(b),r.push(p.yytext),a.push(p.yylloc),n.push(w[1]),b=null,k?(b=k,k=null):(h=p.yyleng,c=p.yytext,l=p.yylineno,f=p.yylloc,d>0&&d--);break;case 2:if(S=this.productions_[w[1]][1],T.$=r[r.length-S],T._$={first_line:a[a.length-(S||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(S||1)].first_column,last_column:a[a.length-1].last_column},m&&(T._$.range=[a[a.length-(S||1)].range[0],a[a.length-1].range[1]]),void 0!==(v=this.performAction.apply(T,[c,h,l,y.yy,w[1],r,a].concat(u))))return v;S&&(n=n.slice(0,-1*S*2),r=r.slice(0,-1*S),a=a.slice(0,-1*S)),n.push(this.productions_[w[1]][0]),r.push(T.$),a.push(T._$),$=o[n[n.length-2]][n[n.length-1]],n.push($);break;case 3:return!0}}return!0}),"parse")},d=function(){return{EOF:1,parseError:(0,i.K2)((function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)}),"parseError"),setInput:(0,i.K2)((function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this}),"setInput"),input:(0,i.K2)((function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t}),"input"),unput:(0,i.K2)((function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var s=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[s[0],s[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this}),"unput"),more:(0,i.K2)((function(){return this._more=!0,this}),"more"),reject:(0,i.K2)((function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"reject"),less:(0,i.K2)((function(t){this.unput(this.match.slice(t))}),"less"),pastInput:(0,i.K2)((function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")}),"pastInput"),upcomingInput:(0,i.K2)((function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")}),"upcomingInput"),showPosition:(0,i.K2)((function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"}),"showPosition"),test_match:(0,i.K2)((function(t,e){var n,i,s;if(this.options.backtrack_lexer&&(s={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(s.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var r in s)this[r]=s[r];return!1}return!1}),"test_match"),next:(0,i.K2)((function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var s=this._currentRules(),r=0;r<s.length;r++)if((n=this._input.match(this.rules[s[r]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=r,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,s[r])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,s[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})}),"next"),lex:(0,i.K2)((function(){var t=this.next();return t||this.lex()}),"lex"),begin:(0,i.K2)((function(t){this.conditionStack.push(t)}),"begin"),popState:(0,i.K2)((function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]}),"popState"),_currentRules:(0,i.K2)((function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules}),"_currentRules"),topState:(0,i.K2)((function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"}),"topState"),pushState:(0,i.K2)((function(t){this.begin(t)}),"pushState"),stateStackSize:(0,i.K2)((function(){return this.conditionStack.length}),"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,i.K2)((function(t,e,n,i){switch(n){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}}),"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^:\n]+)/i,/^(?::\s[^:\n]+)/i,/^(?:[^#:\n]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}}}();function u(){this.yy={}}return h.lexer=d,(0,i.K2)(u,"Parser"),u.prototype=h,h.Parser=u,new u}();c.parser=c;var l=c,h={};(0,i.VA)(h,{addEvent:()=>w,addSection:()=>x,addTask:()=>_,addTaskOrg:()=>v,clear:()=>m,default:()=>S,getCommonDb:()=>f,getSections:()=>b,getTasks:()=>k});var d="",u=0,p=[],y=[],g=[],f=(0,i.K2)((()=>i.Wt),"getCommonDb"),m=(0,i.K2)((function(){p.length=0,y.length=0,d="",g.length=0,(0,i.IU)()}),"clear"),x=(0,i.K2)((function(t){d=t,p.push(t)}),"addSection"),b=(0,i.K2)((function(){return p}),"getSections"),k=(0,i.K2)((function(){let t=K();let e=0;for(;!t&&e<100;)t=K(),e++;return y.push(...g),y}),"getTasks"),_=(0,i.K2)((function(t,e,n){const i={id:u++,section:d,type:d,task:t,score:e||0,events:n?[n]:[]};g.push(i)}),"addTask"),w=(0,i.K2)((function(t){g.find((t=>t.id===u-1)).events.push(t)}),"addEvent"),v=(0,i.K2)((function(t){const e={section:d,type:d,description:t,task:t,classes:[]};y.push(e)}),"addTaskOrg"),K=(0,i.K2)((function(){const t=(0,i.K2)((function(t){return g[t].processed}),"compileTask");let e=!0;for(const[n,i]of g.entries())t(n),e=e&&i.processed;return e}),"compileTasks"),S={clear:m,getCommonDb:f,addSection:x,getSections:b,getTasks:k,addTask:_,addTaskOrg:v,addEvent:w},$=(0,i.K2)((function(t,e){const n=t.append("rect");return n.attr("x",e.x),n.attr("y",e.y),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("width",e.width),n.attr("height",e.height),n.attr("rx",e.rx),n.attr("ry",e.ry),void 0!==e.class&&n.attr("class",e.class),n}),"drawRect"),E=(0,i.K2)((function(t,e){const n=15,r=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",n).attr("stroke-width",2).attr("overflow","visible"),a=t.append("g");function o(t){const i=(0,s.JLW)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function c(t){const i=(0,s.JLW)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(n/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function l(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return a.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),a.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),(0,i.K2)(o,"smile"),(0,i.K2)(c,"sad"),(0,i.K2)(l,"ambivalent"),e.score>3?o(a):e.score<3?c(a):l(a),r}),"drawFace"),T=(0,i.K2)((function(t,e){const n=t.append("circle");return n.attr("cx",e.cx),n.attr("cy",e.cy),n.attr("class","actor-"+e.pos),n.attr("fill",e.fill),n.attr("stroke",e.stroke),n.attr("r",e.r),void 0!==n.class&&n.attr("class",n.class),void 0!==e.title&&n.append("title").text(e.title),n}),"drawCircle"),I=(0,i.K2)((function(t,e){const n=e.text.replace(/<br\s*\/?>/gi," "),i=t.append("text");i.attr("x",e.x),i.attr("y",e.y),i.attr("class","legend"),i.style("text-anchor",e.anchor),void 0!==e.class&&i.attr("class",e.class);const s=i.append("tspan");return s.attr("x",e.x+2*e.textMargin),s.text(n),i}),"drawText"),R=(0,i.K2)((function(t,e){function n(t,e,n,i,s){return t+","+e+" "+(t+n)+","+e+" "+(t+n)+","+(e+i-s)+" "+(t+n-1.2*s)+","+(e+i)+" "+t+","+(e+i)}(0,i.K2)(n,"genPoints");const s=t.append("polygon");s.attr("points",n(e.x,e.y,50,20,7)),s.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,I(t,e)}),"drawLabel"),A=(0,i.K2)((function(t,e,n){const i=t.append("g"),s=P();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=n.width,s.height=n.height,s.class="journey-section section-type-"+e.num,s.rx=3,s.ry=3,$(i,s),H(n)(e.text,i,s.x,s.y,s.width,s.height,{class:"journey-section section-type-"+e.num},n,e.colour)}),"drawSection"),L=-1,M=(0,i.K2)((function(t,e,n){const i=e.x+n.width/2,s=t.append("g");L++;s.append("line").attr("id","task"+L).attr("x1",i).attr("y1",e.y).attr("x2",i).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),E(s,{cx:i,cy:300+30*(5-e.score),score:e.score});const r=P();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=n.width,r.height=n.height,r.class="task task-type-"+e.num,r.rx=3,r.ry=3,$(s,r),H(n)(e.task,s,r.x,r.y,r.width,r.height,{class:"task"},n,e.colour)}),"drawTask"),C=(0,i.K2)((function(t,e){$(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"}).lower()}),"drawBackgroundRect"),N=(0,i.K2)((function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}}),"getTextObj"),P=(0,i.K2)((function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}}),"getNoteRect"),H=function(){function t(t,e,n,i,r,a,o,c){s(e.append("text").attr("x",n+r/2).attr("y",i+a/2+5).style("font-color",c).style("text-anchor","middle").text(t),o)}function e(t,e,n,i,r,a,o,c,l){const{taskFontSize:h,taskFontFamily:d}=c,u=t.split(/<br\s*\/?>/gi);for(let p=0;p<u.length;p++){const t=p*h-h*(u.length-1)/2,c=e.append("text").attr("x",n+r/2).attr("y",i).attr("fill",l).style("text-anchor","middle").style("font-size",h).style("font-family",d);c.append("tspan").attr("x",n+r/2).attr("dy",t).text(u[p]),c.attr("y",i+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),s(c,o)}}function n(t,n,i,r,a,o,c,l){const h=n.append("switch"),d=h.append("foreignObject").attr("x",i).attr("y",r).attr("width",a).attr("height",o).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,i,r,a,o,c,l),s(d,c)}function s(t,e){for(const n in e)n in e&&t.attr(n,e[n])}return(0,i.K2)(t,"byText"),(0,i.K2)(e,"byTspan"),(0,i.K2)(n,"byFo"),(0,i.K2)(s,"_setTextAttrs"),function(i){return"fo"===i.textPlacement?n:"old"===i.textPlacement?t:e}}(),O=(0,i.K2)((function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")}),"initGraphics");function j(t,e){t.each((function(){var t,n=(0,s.Ltv)(this),i=n.text().split(/(\s+|<br>)/).reverse(),r=[],a=n.attr("y"),o=parseFloat(n.attr("dy")),c=n.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",o+"em");for(let s=0;s<i.length;s++)t=i[i.length-1-s],r.push(t),c.text(r.join(" ").trim()),(c.node().getComputedTextLength()>e||"<br>"===t)&&(r.pop(),c.text(r.join(" ").trim()),r="<br>"===t?[""]:[t],c=n.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))}))}(0,i.K2)(j,"wrap");var D=(0,i.K2)((function(t,e,n,i){const s=n%12-1,r=t.append("g");e.section=s,r.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+s);const a=r.append("g"),o=r.append("g"),c=o.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(j,e.width).node().getBBox(),l=i.fontSize?.replace?i.fontSize.replace("px",""):i.fontSize;return e.height=c.height+1.1*l*.5+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,o.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),W(a,e,s,i),e}),"drawNode"),z=(0,i.K2)((function(t,e,n){const i=t.append("g"),s=i.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(j,e.width).node().getBBox(),r=n.fontSize?.replace?n.fontSize.replace("px",""):n.fontSize;return i.remove(),s.height+1.1*r*.5+e.padding}),"getVirtualNodeHeight"),W=(0,i.K2)((function(t,e,n){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${10-e.height} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+n).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)}),"defaultBkg"),B={drawRect:$,drawCircle:T,drawSection:A,drawText:I,drawLabel:R,drawTask:M,drawBackgroundRect:C,getTextObj:N,getNoteRect:P,initGraphics:O,drawNode:D,getVirtualNodeHeight:z},F=(0,i.K2)((function(t,e,n,r){const a=(0,i.D7)(),o=a.leftMargin??50;i.Rm.debug("timeline",r.db);const c=a.securityLevel;let l;"sandbox"===c&&(l=(0,s.Ltv)("#i"+e));const h=("sandbox"===c?(0,s.Ltv)(l.nodes()[0].contentDocument.body):(0,s.Ltv)("body")).select("#"+e);h.append("g");const d=r.db.getTasks(),u=r.db.getCommonDb().getDiagramTitle();i.Rm.debug("task",d),B.initGraphics(h);const p=r.db.getSections();i.Rm.debug("sections",p);let y=0,g=0,f=0,m=0,x=50+o,b=50;m=50;let k=0,_=!0;p.forEach((function(t){const e={number:k,descr:t,section:k,width:150,padding:20,maxHeight:y},n=B.getVirtualNodeHeight(h,e,a);i.Rm.debug("sectionHeight before draw",n),y=Math.max(y,n+20)}));let w=0,v=0;i.Rm.debug("tasks.length",d.length);for(const[s,S]of d.entries()){const t={number:s,descr:S,section:S.section,width:150,padding:20,maxHeight:g},e=B.getVirtualNodeHeight(h,t,a);i.Rm.debug("taskHeight before draw",e),g=Math.max(g,e+20),w=Math.max(w,S.events.length);let n=0;for(const i of S.events){const t={descr:i,section:S.section,number:S.section,width:150,padding:20,maxHeight:50};n+=B.getVirtualNodeHeight(h,t,a)}v=Math.max(v,n)}i.Rm.debug("maxSectionHeight before draw",y),i.Rm.debug("maxTaskHeight before draw",g),p&&p.length>0?p.forEach((t=>{const e=d.filter((e=>e.section===t)),n={number:k,descr:t,section:k,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:y};i.Rm.debug("sectionNode",n);const s=h.append("g"),r=B.drawNode(s,n,k,a);i.Rm.debug("sectionNode output",r),s.attr("transform",`translate(${x}, 50)`),b+=y+50,e.length>0&&V(h,e,k,x,b,g,a,w,v,y,!1),x+=200*Math.max(e.length,1),b=50,k++})):(_=!1,V(h,d,k,x,b,g,a,w,v,y,!0));const K=h.node().getBBox();i.Rm.debug("bounds",K),u&&h.append("text").text(u).attr("x",K.width/2-o).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),f=_?y+g+150:g+100;h.append("g").attr("class","lineWrapper").append("line").attr("x1",o).attr("y1",f).attr("x2",K.width+3*o).attr("y2",f).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,i.ot)(void 0,h,a.timeline?.padding??50,a.timeline?.useMaxWidth??!1)}),"draw"),V=(0,i.K2)((function(t,e,n,s,r,a,o,c,l,h,d){for(const u of e){const e={descr:u.task,section:n,number:n,width:150,padding:20,maxHeight:a};i.Rm.debug("taskNode",e);const c=t.append("g").attr("class","taskWrapper"),p=B.drawNode(c,e,n,o).height;if(i.Rm.debug("taskHeight after draw",p),c.attr("transform",`translate(${s}, ${r})`),a=Math.max(a,p),u.events){const e=t.append("g").attr("class","lineWrapper");let i=a;r+=100,i+=G(t,u.events,n,s,r,o),r-=100,e.append("line").attr("x1",s+95).attr("y1",r+a).attr("x2",s+95).attr("y2",r+a+(d?a:h)+l+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}s+=200,d&&!o.timeline?.disableMulticolor&&n++}r-=10}),"drawTasks"),G=(0,i.K2)((function(t,e,n,s,r,a){let o=0;const c=r;r+=100;for(const l of e){const e={descr:l,section:n,number:n,width:150,padding:20,maxHeight:50};i.Rm.debug("eventNode",e);const c=t.append("g").attr("class","eventWrapper"),h=B.drawNode(c,e,n,a).height;o+=h,c.attr("transform",`translate(${s}, ${r})`),r=r+10+h}return r=c,o}),"drawEvents"),U={setConf:(0,i.K2)((()=>{}),"setConf"),draw:F},q=(0,i.K2)((t=>{let e="";for(let n=0;n<t.THEME_COLOR_LIMIT;n++)t["lineColor"+n]=t["lineColor"+n]||t["cScaleInv"+n],(0,r.A)(t["lineColor"+n])?t["lineColor"+n]=(0,a.A)(t["lineColor"+n],20):t["lineColor"+n]=(0,o.A)(t["lineColor"+n],20);for(let n=0;n<t.THEME_COLOR_LIMIT;n++){const i=""+(17-3*n);e+=`\n    .section-${n-1} rect, .section-${n-1} path, .section-${n-1} circle, .section-${n-1} path  {\n      fill: ${t["cScale"+n]};\n    }\n    .section-${n-1} text {\n     fill: ${t["cScaleLabel"+n]};\n    }\n    .node-icon-${n-1} {\n      font-size: 40px;\n      color: ${t["cScaleLabel"+n]};\n    }\n    .section-edge-${n-1}{\n      stroke: ${t["cScale"+n]};\n    }\n    .edge-depth-${n-1}{\n      stroke-width: ${i};\n    }\n    .section-${n-1} line {\n      stroke: ${t["cScaleInv"+n]} ;\n      stroke-width: 3;\n    }\n\n    .lineWrapper line{\n      stroke: ${t["cScaleLabel"+n]} ;\n    }\n\n    .disabled, .disabled circle, .disabled text {\n      fill: lightgray;\n    }\n    .disabled text {\n      fill: #efefef;\n    }\n    `}return e}),"genSections"),J={db:h,renderer:U,parser:l,styles:(0,i.K2)((t=>`\n  .edge {\n    stroke-width: 3;\n  }\n  ${q(t)}\n  .section-root rect, .section-root path, .section-root circle  {\n    fill: ${t.git0};\n  }\n  .section-root text {\n    fill: ${t.gitBranchLabel0};\n  }\n  .icon-container {\n    height:100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .edge {\n    fill: none;\n  }\n  .eventWrapper  {\n   filter: brightness(120%);\n  }\n`),"getStyles")}}}]);