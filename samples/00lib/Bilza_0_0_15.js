var t,i,e,s,h,r;(t=>{t.Left='LEFT',t.Right='RIGHT',t.Mid='MID',t.Off='OFF'})(t||(t={})),(t=>{t.Top='TOP',t.Mid='MID',t.Bot='BOT'})(i||(i={})),(t=>{t.AlwaysOn='ALWAYSON',t.Append='APPEND',t.Insert='INSERT',t.InsertTillEnd='INSERTTILLEND',t.Repeat='REPEAT'})(e||(e={}));class d{constructor(s,h=10){this.xAlignmentOptions=t,this.yAlignmentOptions=i,this.insertTypeOptions=e,this.insertType=this.insertTypeOptions.Insert,this.DURATION=h,this.insertTimeInVid=0,this.compData=new j(s),this.d=this.compData.data,this.data=this.compData.data,this.drawLayer=r.MiddleGround,this.id=Math.random().toString(36).slice(2),this.style=new a}width(t){return 0}height(t){return 0}init(t){return!0}draw(t){return!0}update(t,i){return!0}log(t){}addTransition(t){return this.compData.add(t)}checkCollision(t,i,e){return!1}shadowsOff(){this.style.shadowBlur=0,this.style.shadowOffsetX=0,this.style.shadowOffsetY=0}setShadow(t=8,i=10,e=10,s='grey'){this.style.shadowBlur=t,this.style.shadowOffsetX=i,this.style.shadowOffsetY=e,this.style.shadowColor=s}shadowsOn(){this.style.shadowBlur=8,this.style.shadowOffsetX=10,this.style.shadowOffsetY=10,this.style.shadowColor='grey'}resize(t,i){return 0}drawBoundingRectangle(t){return this.style.strokeStyle='black',t.drawRect(t.xPerc(this.d.x),t.yPerc(this.d.y),this.width(t),this.height(t),this.style),!0}applyTransition(t){this.compData.apply(t)}xAfterAlignment(t){let i=this.d.x;switch(1==this.d.useRelativeXY&&(i=t.xPerc(this.d.x)),this.d.xAlignment){case this.xAlignmentOptions.Left:break;case this.xAlignmentOptions.Mid:i=Math.floor(i-this.width(t)/2);break;case this.xAlignmentOptions.Right:Math.floor(i-this.width(t))}return i}yAfterAlignment(t){let i=this.d.y;switch(1==this.d.useRelativeXY&&(i=t.yPerc(this.d.y)),this.d.yAlignment){case this.yAlignmentOptions.Top:break;case this.yAlignmentOptions.Mid:i=Math.floor(i-this.height(t)/2);break;case this.yAlignmentOptions.Bot:i=Math.floor(i-this.height(t))}return i}getEndTime(t=!0){let i=this.insertTimeInVid+this.DURATION;return t?1e3*i:i}duration(){return this.DURATION}getStartTime(t=!0){return t?1e3*this.insertTimeInVid:this.insertTimeInVid}setStartTime(t){return this.insertTimeInVid=t,this.insertTimeInVid}}function n(t){let i=t/16;return Math.ceil(9*i)}class o{constructor(t,i=0,e=null){if(this.canvas=t,this.ctx=this.canvas.getContext('2d'),null==this.ctx)throw new Error('could not obtain drawing context');this.canvas.width=i,this.canvas.height=e??n(i)}drawBackground(t='blue'){return this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle}canvasWidth(){return this.canvas.width}canvasHeight(){return this.canvas.height}quadraticCurveTo(t,i,e,s){this.commitCtxData(s),this.beginPath(),this.moveTo(t.x,t.y),this.ctx.quadraticCurveTo(e.x,e.y,i.x,i.y),this.stroke()}restore(){this.ctx.restore()}save(){this.ctx.save()}drawImage(t,i,e,s,h){this.ctx.drawImage(t,i,e,s,h)}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}charsWidth(t='',i,e){this.ctx.save(),this.setFont(i,e);let s=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(s)}textWidth(t,i){this.ctx.save(),this.commitCtxData(i);let e=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(e)}drawLine(t,i,e,s,h){this.commitCtxData(h),this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}line(t,i,e,s){this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}beginPath(){this.ctx.beginPath()}closePath(){this.ctx.closePath()}moveTo(t,i){this.ctx.moveTo(t,i)}lineTo(t,i,e){this.commitCtxData(e),this.ctx.lineTo(t,i)}fill(t){this.commitCtxData(t),this.ctx.fill()}stroke(){this.ctx.stroke()}drawRect(t,i,e,s,h){this.commitCtxData(h),this.ctx.beginPath(),this.ctx.rect(t,i,e,s),this.ctx.stroke()}drawFillRect(t,i,e,s,h){this.commitCtxData(h),this.ctx.fillRect(t,i,e,s)}arcTo(t,i,e,s=20){this.commitCtxData(e),this.ctx.arcTo(t.x,t.y,i.x,i.y,s)}drawCircle(t=0,i=0,e=25,s=!1,h=0,r=2*Math.PI,d){this.commitCtxData(d),this.ctx.beginPath(),this.ctx.arc(t,i,e,h,r,!1),1==s&&this.ctx.fill(),this.ctx.stroke()}drawText(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(t,i,e)}drawIcon(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(String.fromCharCode(t),i,e)}drawTextstroke(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.strokeText(t,i,e)}commitCtxData(t){null!==t.lineCap&&(this.ctx.lineCap='round'),null!==t.globalAlpha&&(this.ctx.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.ctx.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.ctx.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.ctx.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.ctx.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.ctx.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.ctx.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.ctx.fillStyle=t.fillStyle),null!==t.lineDash&&this.ctx.setLineDash(t.lineDash),this.setFont(t.fontSize,t.fontName)}setFont(t,i){let e=`${t}px ${i}`;this.ctx.font=e}xPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.width/100*i}yPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.height/100*i}setBwZeroNhundred(t){return t<0?0:t>100?100:t}}(t=>{t.Round='round',t.Butt='butt',t.Square='square'})(s||(s={})),(t=>{t.Arial='Arial',t.ArialBlack='Arial Black',t.Verdana='Verdana',t.Tahoma='Tahoma',t.Impact='Impact',t.Times='Times',t.Helvetica='Helvetica',t.TimesNewRoman='Times New Roman',t.Didot='Didot',t.Calibri='Calibri',t.Georgia='Georgia',t.AmericanTypewriter='American Typewriter',t.Courier='Courier',t.CourierNew='Courier New',t.LucidaConsole='Lucida Console',t.Monaco='Monaco',t.BradleyHand='Bradley Hand',t.BrushScriptMT='Brush Script MT',t.BrushScript='Brush Script',t.Luminari='Luminari'})(h||(h={}));class a{constructor(t=0){this.msStart=t,this.fontSize=25,this.fontName=h.Luminari,this.fillStyle='green',this.strokeStyle='red',this.lineWidth=2,this.shadowColor='black',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.globalAlpha=1,this.lineCap=s.Round,this.lineDash=[]}merge(t){null!==t.lineCap&&(this.lineCap=t.lineCap),null!==t.globalAlpha&&(this.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.fillStyle=t.fillStyle),null!==t.fontSize&&(this.fontSize=t.fontSize),null!==t.fontName&&(this.fontName=t.fontName),null!==t.lineDash&&(this.lineDash=t.lineDash)}}class l{constructor(){this.msStart=0,this.x=0,this.y=0,this.selected=!1,this.visible=!0,this.useRelativeXY=!0,this.shadowColor='grey',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.colorBoundingRectangle='black',this.xAlignment=t.Left,this.yAlignment=i.Top}}class c extends l{constructor(){super(),this.x=0,this.y=0,this.flagUseRelativeXY=!0,this.dynWidth=25,this.dynHeight=30,this.flagUseDynResize=!0,this.flagShrinkHeightToFit=!0,this.xAlignment=t.Left,this.yAlignment=i.Top,this.content='Text Component',this.padding=0,this.border=0,this.colorBorder='black',this.colorBg='#e1f4e1',this.color='black',this.fontSize=25,this.showContent=!0,this.showBg=!1,this.showTextShadow=!1,this.showBgShadow=!1,this.showBorderShadow=!1,this.maxDisplayChars=200,this.selected=!1,this.visible=!0,this.shadowColor='#b2abab',this.shadowOffsetX=13,this.shadowOffsetY=9,this.shadowBlur=4,this.colorBoundingRectangle='#000000'}}function g(){return new c}function w(t,i){var e=!1;'#'==t[0]&&(t=t.slice(1),e=!0);var s=parseInt(t,16),h=(s>>16)+i;h>255?h=255:h<0&&(h=0);var r=(s>>8&255)+i;r>255?r=255:r<0&&(r=0);var d=(255&s)+i;return d>255?d=255:d<0&&(d=0),(e?'#':'')+(d|r<<8|h<<16).toString(16)}class u extends d{constructor(t=10,i='',e='#000000',s=0,h=0,d=20,n=20){super(g,t),this.insertType=this.insertTypeOptions.Append,this.d.content=i,this.d.x=s,this.d.y=h,this.d.dynWidth=d,this.d.dynHeight=n,this.d.color=e,this.d.colorBorder=e,this.d.colorBg=w(e,10),this.drawLayer=r.MiddleGround}width(t){return t.textWidth(this.d.content.substring(0,this.d.maxDisplayChars),this.style)+2*this.d.padding+this.d.border}height(t){return t.charsWidth('W',this.d.fontSize,this.style.fontName)+2*this.d.padding+this.d.border}init(t){return!0}update(t,i){return 1==this.d.flagUseDynResize&&this.dynamicFontSize(i),1==this.d.flagShrinkHeightToFit&&this.shrinkHeightToFit(i),!0}draw(t){return 1==this.d.showBg&&this.drawBg(t),this.d.border>0&&this.drawBorder(t),1==this.d.showContent&&this.drawContent(t),!0}drawBorder(t){return 1==this.d.showBorderShadow?this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor):this.shadowsOff(),this.style.fillStyle=this.d.colorBorder,this.style.strokeStyle=this.d.colorBorder,this.style.lineWidth=this.d.border,this.style.fontSize=this.d.fontSize,t.drawRect(this.getX(t)+this.d.border/2,this.getY(t)+this.d.border/2,this.width(t),this.height(t),this.style),!0}drawBg(t){return 1==this.d.showBgShadow?this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor):this.shadowsOff(),this.style.fillStyle=this.d.colorBg,this.style.strokeStyle=this.d.colorBg,this.style.fontSize=this.d.fontSize,t.drawFillRect(this.getX(t)+this.d.border,this.getY(t)+this.d.border,this.width(t),this.height(t),this.style),!0}drawContent(t){1==this.d.showTextShadow?this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor):this.shadowsOff(),this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,this.style.fontSize=this.d.fontSize,t.drawText(this.d.content.substring(0,this.d.maxDisplayChars),this.getX(t)+(this.d.border+this.d.padding),this.getY(t)+(this.d.border+this.d.padding),this.style)}getX(t){let i=this.d.x;switch(1==this.d.flagUseRelativeXY&&(i=t.xPerc(this.d.x)),this.d.xAlignment){case this.xAlignmentOptions.Left:break;case this.xAlignmentOptions.Mid:i-=this.width(t)/2+this.d.border/2;break;case this.xAlignmentOptions.Right:i-=this.width(t)+this.d.border/2}return i}getY(t){let i=this.d.y;switch(1==this.d.flagUseRelativeXY&&(i=t.yPerc(this.d.y)),this.d.yAlignment){case this.yAlignmentOptions.Top:break;case this.yAlignmentOptions.Mid:i-=this.height(t)/2+this.d.border/2;break;case this.yAlignmentOptions.Bot:i-=this.height(t)+this.d.border}return i}dynamicFontSize(t){let i=t.canvasWidth()/100*this.d.dynWidth;this.style.fontSize=this.d.fontSize;let e=0;for(let s=1;s<900;s++)if(this.style.fontSize=s,e=this.width(t),e>=i)return this.d.fontSize=s,this.style.fontSize=s,this.d.fontSize;return null}shrinkHeightToFit(t){let i=t.canvasHeight()/100*this.d.dynHeight;if(this.height(t)<i)return!0;this.style.fontSize=this.d.fontSize,this.style.fontSize;for(let e=this.style.fontSize;e>5;e--)if(this.style.fontSize-=1,this.d.fontSize=this.style.fontSize,this.height(t)<i)return!0;return!1}}function m(){return new y}class y extends l{constructor(){super(),this.msStart=0,this.fontSize=12,this.cellWidthPerc=10,this.cellHeightPerc=10,this.colorHorizontalLines='grey',this.colorVerticalLines='grey',this.colorNumbers='black',this.showNumbers=!0,this.showHorizontalLines=!0,this.showVerticalLines=!0,this.lineWidthVertical=1,this.lineWidthHorizontal=1,this.lineDash=[]}}class f extends d{constructor(t='grey',i=10,e=10){super(m),this.insertType=this.insertTypeOptions.AlwaysOn,this.d.cellWidthPerc=i,this.d.cellHeightPerc=e,this.d.colorVerticalLines=t,this.d.colorHorizontalLines=t,this.d.colorNumbers=t,this.drawLayer=r.BackGround}draw(t){return this.draw_horizontal(t),this.draw_vertical(t),!0}draw_horizontal(t){let i=0,e=t.canvasWidth(),s=t.canvasHeight(),h=0+e;do{this.style.strokeStyle=this.d.colorHorizontalLines,this.style.lineDash=this.d.lineDash,this.style.lineWidth=this.d.lineWidthHorizontal,t.drawLine(0,i,h,i,this.style),1==this.d.showNumbers&&(this.style.strokeStyle=this.d.colorNumbers,this.drawText(t,Math.ceil(i),4,i+4)),i+=t.canvasHeight()/100*this.d.cellHeightPerc}while(s>i)}draw_vertical(t){let i=0,e=t.canvasWidth(),s=0+t.canvasHeight();do{this.style.strokeStyle=this.d.colorVerticalLines,this.style.lineWidth=this.d.lineWidthVertical,this.style.lineDash=this.d.lineDash,t.drawLine(i,0,i,s,this.style),1==this.d.showNumbers&&(this.style.strokeStyle=this.d.colorNumbers,this.drawText(t,Math.ceil(i),i+4,2)),i+=t.canvasWidth()/100*this.d.cellWidthPerc}while(e>i)}drawText(t,i,e,s){this.style.fontSize=this.d.fontSize,this.style.strokeStyle=this.d.colorNumbers,this.style.fillStyle=this.d.colorNumbers,t.drawText(i.toString(),e+this.d.lineWidthVertical-2,s+this.d.lineWidthHorizontal,this.style)}}class p extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.color='#000000',this.widthPercent=10,this.heightPercent=10}}function x(){return new p}class S extends d{constructor(t=300,i=0,e=0,s=10,h=10,d='#008000'){super(x,t),this.d.x=i,this.d.y=e,this.d.color=d,this.d.widthPercent=s,this.d.heightPercent=h,this.drawLayer=r.MiddleGround}width(t){return t.canvasWidth()/100*this.d.widthPercent}height(t){return t.canvasHeight()/100*this.d.heightPercent}draw(t){this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color;let i=t.xPerc(this.d.x),e=t.yPerc(this.d.y);return t.drawFillRect(i,e,this.width(t),this.height(t),this.style),!0}}class b extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.lineWidth=10,this.color='#000000',this.widthPercent=10,this.heightPercent=10}}function T(){return new b}class A extends d{constructor(t=300,i=0,e=0,s=10,h=10,d='#008000'){super(T,t),this.d.x=i,this.d.y=e,this.d.color=d,this.d.widthPercent=s,this.d.heightPercent=h,this.drawLayer=r.MiddleGround}width(t){return t.canvasWidth()/100*this.d.widthPercent}height(t){return t.canvasHeight()/100*this.d.heightPercent}draw(t){this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,this.style.lineWidth=this.d.lineWidth;let i=t.xPerc(this.d.x),e=t.yPerc(this.d.y);return t.drawRect(i,e,this.width(t),this.height(t),this.style),!0}}class B extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.dynWidthPercent=30,this.dynHeightPercent=50,this.useDynResize=!0,this.xAlignment=t.Left,this.yAlignment=i.Top}}function O(){return new B}class v extends d{constructor(t=300,i,e=0,s=0){if(super(O,t),this.img=document.getElementById(i),null==this.img)throw new Error('image could not be found');document.body.appendChild(this.img),this.orignalWidth=this.img.clientWidth,this.orignalHeight=this.img.clientHeight,this.img.style.display='none',this.d.x=e,this.d.y=s,this.drawLayer=r.MiddleGround}width(t){if(1==this.d.useDynResize){return t.canvasWidth()/100*this.d.dynWidthPercent}return this.orignalWidth}height(t){return 1==this.d.useDynResize?t.canvasHeight()/100*this.d.dynHeightPercent:this.orignalHeight}draw(t){return t.drawImage(this.img,this.getX(t),this.getY(t),this.width(t),this.height(t)),!0}getX(t){let i=t.xPerc(this.d.x);switch(this.d.xAlignment){case this.xAlignmentOptions.Left:break;case this.xAlignmentOptions.Mid:i-=this.width(t)/2;break;case this.xAlignmentOptions.Right:i-=this.width(t)}return i}getY(t){let i=t.yPerc(this.d.y);switch(this.d.yAlignment){case this.yAlignmentOptions.Top:break;case this.yAlignmentOptions.Mid:i-=this.height(t)/2;break;case this.yAlignmentOptions.Bot:i-=this.height(t)}return i}}class R extends l{constructor(){super(),this.msStart=0,this.prefix='sec: '}}function E(){return new R}class C{constructor(){}h1(t,i=Number.MAX_SAFE_INTEGER,e='Heading One',s='#000000'){let h=new u(t,e,s,50,5);return h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.flagUseRelativeXY=!0,h.d.dynWidth=80,h.d.dynHeight=25,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=8,h.d.border=4,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=26,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h}jt(t,i=Number.MAX_SAFE_INTEGER,e='JUMBO TRON',s='#008000'){let h=new u(t,e,s);return h.d.x=50,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=20,h.d.border=10,h.d.dynWidth=80,h.d.dynHeight=100,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!0,h.d.showBgShadow=!0,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}lb(t,i=Number.MAX_SAFE_INTEGER,e='Left Bottom',s='#008000'){let h=new u(t,e,s);return h.d.x=0,h.d.y=100,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Left,h.d.yAlignment=h.yAlignmentOptions.Bot,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}lm(t,i=Number.MAX_SAFE_INTEGER,e='Left Mid',s='#008000'){let h=new u(t,e,s);return h.d.x=0,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Left,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}lt(t,i=Number.MAX_SAFE_INTEGER,e='Left Top',s='#008000'){let h=new u(t,e,s);return h.d.x=0,h.d.y=0,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Left,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}rb(t,i=Number.MAX_SAFE_INTEGER,e='Right Bottom',s='#008000'){let h=new u(t,e,s);return h.d.x=100,h.d.y=100,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Right,h.d.yAlignment=h.yAlignmentOptions.Bot,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}rm(t,i=Number.MAX_SAFE_INTEGER,e='Right Mid',s='#008000'){let h=new u(t,e,s);return h.d.x=100,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Right,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}rt(t,i=Number.MAX_SAFE_INTEGER,e='Right Top',s='#008000'){let h=new u(t,e,s);return h.d.x=100,h.d.y=0,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Right,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}mt(t,i=Number.MAX_SAFE_INTEGER,e='Mid Top',s='#008000'){let h=new u(t,e,s);return h.d.x=50,h.d.y=0,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}mm(t,i=Number.MAX_SAFE_INTEGER,e='Mid Mid',s='#008000'){let h=new u(t,e,s);return h.d.x=50,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}mb(t,i=Number.MAX_SAFE_INTEGER,e='Mid Bottom',s='#008000'){let h=new u(t,e,s);return h.d.x=50,h.d.y=100,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Bot,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=w(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}bulletPointMid(t,i=Number.MAX_SAFE_INTEGER,e='bulletPointMid',s='#008000',h=50){let r=new u(t,e,s,50,h);return r.d.selected=!1,r.d.visible=!0,r.d.shadowColor='#b2abab',r.d.shadowOffsetX=13,r.d.shadowOffsetY=9,r.d.shadowBlur=4,r.d.colorBoundingRectangle='#000000',r.d.xAlignment=r.xAlignmentOptions.Mid,r.d.yAlignment=r.yAlignmentOptions.Mid,r.d.content=e,r.d.padding=20,r.d.border=0,r.d.dynWidth=80,r.d.dynHeight=30,r.d.colorBorder=s,r.d.colorBg=w(s,245),r.d.color=s,r.d.fontSize=45,r.d.showContent=!0,r.d.showBg=!0,r.d.showTextShadow=!1,r.d.showBgShadow=!1,r.d.showBorderShadow=!1,r.d.maxDisplayChars=200,r.d.flagUseDynResize=!0,r.d.flagShrinkHeightToFit=!0,r.d.flagUseRelativeXY=!0,r}}class k extends d{constructor(t=300,i='rb'){switch(super(E,t),this.insertType=this.insertTypeOptions.AlwaysOn,this.drawLayer=r.MiddleGround,this.tt=new C,i){case'rt':this.hdg=this.tt.rt(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'rm':this.hdg=this.tt.rm(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'rb':default:this.hdg=this.tt.rb(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'lt':this.hdg=this.tt.lt(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'lm':this.hdg=this.tt.lm(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'lb':this.hdg=this.tt.lb(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'mt':this.hdg=this.tt.mt(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'mm':this.hdg=this.tt.mm(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'mb':this.hdg=this.tt.mb(this.getStartTime(),this.getEndTime(),'sec:0000','#008000')}this.hdg.d.content='sec:0000'}width(t){return this.hdg.width(t)}height(t){return this.hdg.height(t)}update(t,i){let e=t/1e3;return this.hdg.d.content=this.d.prefix+parseInt(e.toString()),!0}draw(t){return this.hdg.draw(t),!0}}class M extends l{constructor(){super(),this.msStart=0,this.x1=0,this.y1=0,this.x2=800,this.y2=100,this.lineWidth=2,this.color='red'}}function D(){return new M}class N extends d{constructor(t=300,i=0,e=0,s=100,h=100,d='black',n=2){super(D,t),this.d.x1=i,this.d.y1=e,this.d.x2=s,this.d.y2=h,this.d.color=d,this.d.lineWidth=n,this.drawLayer=r.MiddleGround}width(t){return Math.abs(this.d.x1-this.d.x2)}height(t){return Math.abs(this.d.y1-this.d.y2)}draw(t){return this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,this.style.lineWidth=this.d.lineWidth,t.drawLine(t.xPerc(this.d.x1),t.yPerc(this.d.y1),t.xPerc(this.d.x2),t.yPerc(this.d.y2),this.style),!0}}class z extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.startAngle=0,this.endAngle=2*Math.PI,this.radiusPercent=10,this.fill=!0,this.color='grey'}}function W(){return new z}class X extends d{constructor(t=300,i=0,e=0,s=10,h='grey',r=!0,d=0,n=2*Math.PI){super(W,t),this.d.x=i,this.d.y=e,this.d.color=h,this.d.radiusPercent=s,this.d.startAngle=d,this.d.endAngle=n,this.d.fill=r}width(t){return t.canvasWidth()/100*this.d.radiusPercent}height(t){return t.canvasWidth()/100*this.d.radiusPercent}draw(t){return this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,t.drawCircle(t.xPerc(this.d.x),t.yPerc(this.d.y),Math.floor(this.width(t)/2),this.d.fill,this.d.startAngle,this.d.endAngle,this.style),!0}}class P{constructor(){}text(t=10,i='',e='#000000',s=0,h=0,r=20,d=20){return new u(t,i,e,s,h,r,d)}grid(t='#000000',i=10,e=10){return new f(t,i,e)}counter(t=10,i='rb'){return new k(t,i)}rect(t=0,i=300,e=0,s=0,h=10,r=10,d='#008000'){return new A(i,e,s,h,r,d)}fillRect(t=0,i=10,e=0,s=0,h=10,r=10,d='#008000'){return new S(i,e,s,h,r,d)}Image(t=10,i,e=0,s=0){return new v(t,i,e,s)}line(t=300,i=0,e=0,s=100,h=100,r='black',d=2){return new N(t,i,e,s,h,r,d)}circle(t=10,i=0,e=0,s=10,h='grey',r=!0,d=0,n=2*Math.PI){return new X(t,i,e,s,h,r,d,n)}}class H extends l{constructor(){super(),this.color='#008000'}}function _(){return new H}class I extends d{constructor(t='#efeee3'){super(_),this.d.color=t,this.drawLayer=r.BackGround}width(t){return 0}height(t){return 0}draw(t){return t.drawBackground(this.d.color),!0}}function F(t){return t>100?100:t<0?0:t}class L{constructor(t){this.insert=t,this.tt=new C}h1(t=0,i=Number.MAX_SAFE_INTEGER,e='',s='#000000'){let h=this.tt.h1(t,i,e,s);return this.insert(h),h}jt(t=0,i=Number.MAX_SAFE_INTEGER,e='JUMBO TRON',s='#008000'){let h=this.tt.jt(t,i,e,s);return this.insert(h),h}lb(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Bottom',s='#008000'){let h=this.tt.lb(t,i,e,s);return this.insert(h),h}lm(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Mid',s='#008000'){let h=this.tt.lm(t,i,e,s);return this.insert(h),h}lt(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Top',s='#008000'){let h=this.tt.lt(t,i,e,s);return this.insert(h),h}mt(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Top',s='#008000'){let h=this.tt.mt(t,i,e,s);return this.insert(h),h}mm(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Mid',s='#008000'){let h=this.tt.mm(t,i,e,s);return this.insert(h),h}mb(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Bottom',s='#008000'){let h=this.tt.mb(t,i,e,s);return this.insert(h),h}rb(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Bottom',s='#008000'){let h=this.tt.rb(t,i,e,s);return this.insert(h),h}rm(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Mid',s='#008000'){let h=this.tt.rm(t,i,e,s);return this.insert(h),h}rt(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Top',s='#008000'){let h=this.tt.rt(t,i,e,s);return this.insert(h),h}bulletPointMid(t=0,i=Number.MAX_SAFE_INTEGER,e='bulletPointMid',s='#008000',h=50){let r=this.tt.bulletPointMid(t,i,e,s,h);return this.insert(r),r}}class Y{constructor(t){this.insert=t}dashed(t='#dee1e2'){let i=new f;return i.shadowsOff(),this.insert(i),i.d.showNumbers=!1,i.d.colorNumbers='#ff0000',i.d.lineWidthHorizontal=1,i.d.lineWidthVertical=1,i.d.fontSize=25,i.d.colorHorizontalLines=t,i.d.colorVerticalLines=t,i.d.lineDash=[15,5],i}demo(){let t=new f;return this.insert(t),t.d.showNumbers=!0,t.data.colorNumbers='red',t.d.fontSize=12,t.d.cellWidthPerc=100,t.d.cellHeightPerc=20,t.d.colorHorizontalLines='blue',t.d.colorVerticalLines='brown',t.d.lineWidthVertical=10,t.d.lineWidthHorizontal=2,t}simple(t='#dee1e2'){let i=new f;return this.insert(i),i.d.colorHorizontalLines=t,i.d.colorVerticalLines=t,i}}class G{constructor(t){this.pack=t,this.compsArray=[]}init(){for(let t=0;t<this.compsArray.length;t++)this.compsArray[t].init(this.pack);return!0}drawByDrawLayer(t,i,e){for(let s=0;s<this.compsArray.length;s++){let h=this.compsArray[s];h.drawLayer==i&&this.qualifyForDraw(h,t)&&(e.save(),h.update(t,e),h.draw(e),e.restore())}return!0}qualifyForDraw(t,i){return t.insertType==t.insertTypeOptions.AlwaysOn||t.getStartTime(!0)<=i&&t.getEndTime(!0)>i}resizeAll(t=800,i=400){for(let e=0;e<this.compsArray.length;e++){this.compsArray[e].resize(t,i)}return!0}}class U{constructor(){this.setBWzeroNhundred=F,this.lightenDarkenColor=w,this.aspectRatioHeight=n}}class V{constructor(){this.debugMode=!0,this.fixBugWarning=!0}fixBugWarn(t){this.fixBugWarning}}class q{constructor(t='bilza',i=800,e=null){this.set=new V,this.util=new U,this.canvas=function(t='bilza'){let i=document.getElementById(t);if(null==i){let i=document.createElement('canvas');if(document.getElementsByTagName('body')[0].appendChild(i),i.id=t,i.style.position='static',null==i)throw new Error('canvas not found');return i}{let e=i;if(e.id=t,e.style.position='static',null==e)throw new Error('canvas not found');return e}}(t),this.pack=new o(this.canvas,i,e),this.background=new I,this.runningStartTimeTS=null,this._pvt_duration_val=0,this.interval=null,this.msPerFrame=100,this.comps=new G(this.pack),this.init=this.comps.init.bind(this.comps),this.drawByDrawLayer=this.comps.drawByDrawLayer.bind(this.comps),this.resizeAll=this.comps.resizeAll.bind(this.comps),this.add=new P,this.textTempl=new L(this.insert.bind(this)),this.gridTempl=new Y(this.insert.bind(this))}start(){return null===this.runningStartTimeTS&&(this.stop(),this.init(),this.runningStartTimeTS=(new Date).getTime(),this.interval=window.setInterval((()=>{this.draw()}),this.msPerFrame),!0)}drawInit(){this.init(),this.draw()}draw(){if(null==this.pack)throw new Error('bilzaa is not initialized');let t=this.getMsDelta();return t>=this.duration(!0)&&this.stop(),this.pack.clearCanvas(),this.background.draw(this.pack),this.drawByDrawLayer(t,r.BackGround,this.pack),this.drawByDrawLayer(t,r.MiddleGround,this.pack),this.drawByDrawLayer(t,r.ForeGround,this.pack),this.drawEvent(t),!0}drawEvent(t){return!0}dynamicCanvas(t=95,i=null){let e=window.innerWidth/100*F(t);return this.setCanvas(e,null),!0}duration(t=!0){return t?1e3*this._pvt_duration_val:this._pvt_duration_val}extendDuration(t){return this._pvt_duration_val+=t,this._pvt_duration_val}getMsDelta(){if(null==this.runningStartTimeTS)return 0;return(new Date).getTime()-this.runningStartTimeTS}setMsDelta(t){return null==this.runningStartTimeTS||t>this.duration()||t<0?0:(this.runningStartTimeTS=(new Date).getTime()-t,this.runningStartTimeTS)}stop(){return this.runningStartTimeTS=null,null!==this.interval&&clearInterval(this.interval),!0}setCanvas(t=800,i=null){null==i&&(i=this.util.aspectRatioHeight(t)),this.pack=new o(this.canvas,t,i),this.resizeAll(this.pack.canvasWidth(),this.pack.canvasHeight())}getCanvasHeight(){return this.pack.canvasHeight()}getCanvasWidth(){return this.pack.canvasWidth()}chqCollision(t,i){return null}insert(t){return function(t,i,e){let s=!1;switch(t.insertType){case t.insertTypeOptions.AlwaysOn:s=!0;break;case t.insertTypeOptions.Append:if(t.duration()<1)throw new Error('for Insert operation to succeed you need component duration greater than 0');t.setStartTime(i),e(t.duration()),s=!0;break;case t.insertTypeOptions.Insert:if(t.getStartTime(!1)>i)throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${t.getStartTime()} where as the end time of current video at this time is ${i} , this creates a blank space of ${Math.ceil(t.getStartTime()-i)} seconds.`);t.getEndTime(!1)<=i||e(t.getEndTime(!1)-i),s=!0}}(t,this.duration(!1),this.extendDuration.bind(this)),this.comps.compsArray.push(t),t}}(t=>{t.BackGround='BACKGROUND',t.MiddleGround='MIDDLEGROUND',t.ForeGround='FOREGROUND'})(r||(r={}));class j{constructor(t){this.newDataObjFn=t,this.data=this.newDataObjFn(),this.transitions=[]}add(t){let i=this.newDataObjFn();for(const t in i)i[t]=null;return i.msStart=t,this.transitions.push(i),i}insert(t){return this.transitions.push(t),t}apply(t){for(let i=this.transitions.length-1;i>=0;i--){const e=this.transitions[i];e.msStart<=t&&(this.merge(e),this.transitions.splice(i,1))}}merge(t){for(const i in this.data)t.hasOwnProperty(i)&&null!==t[i]&&(this.data[i]=t[i]);return!0}}export{P as CompFactory,d as Component,r as DrawLayer,h as FontNames,o as Pack,a as Style,j as Transition,q as default};