class t{constructor(t,i=0,e=300){this.compData=new G(t),this.d=this.compData.data,this.data=this.compData.data,this.drawLayer=n.MiddleGround,this.id=Math.random().toString(36).slice(2),this.style=new o,this.msStart=0,this.msEnd=55e4,this.setStartTime(i),this.setEndTime(e)}getStartTime(){return this.msStart}setStartTime(t=0){return this.msStart=1e3*t,this.msStart}getEndTime(){return this.msEnd}setEndTime(t=300){return this.msEnd=1e3*t,this.msEnd}width(t){return 0}height(t){return 0}init(t){return!0}draw(t){return!0}update(t,i){return!0}log(t){}addTransition(t){return this.compData.add(t)}checkCollision(t,i,e){return!1}shadowsOff(){this.style.shadowBlur=0,this.style.shadowOffsetX=0,this.style.shadowOffsetY=0}setShadow(t=8,i=10,e=10,s='grey'){this.style.shadowBlur=t,this.style.shadowOffsetX=i,this.style.shadowOffsetY=e,this.style.shadowColor=s}shadowsOn(){this.style.shadowBlur=8,this.style.shadowOffsetX=10,this.style.shadowOffsetY=10,this.style.shadowColor='grey'}resize(t,i){return 0}drawBoundingRectangle(t){return this.style.strokeStyle='black',t.drawRect(t.xPerc(this.d.x),t.yPerc(this.d.y),this.width(t),this.height(t),this.style),!0}applyTransition(t){this.compData.apply(t)}}function i(t){let i=t/16;return Math.ceil(9*i)}class e{constructor(t,e=0,s=null){if(this.canvas=t,this.ctx=this.canvas.getContext('2d'),null==this.ctx)throw new Error('could not obtain drawing context');this.canvas.width=e,this.canvas.height=s??i(e)}drawBackground(t='blue'){return this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle}canvasWidth(){return this.canvas.width}canvasHeight(){return this.canvas.height}quadraticCurveTo(t,i,e,s){this.commitCtxData(s),this.beginPath(),this.moveTo(t),this.ctx.quadraticCurveTo(e.x,e.y,i.x,i.y),this.stroke()}restore(){this.ctx.restore()}save(){this.ctx.save()}drawImage(t,i,e,s,h){this.ctx.drawImage(t,i,e,s,h)}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}charsWidth(t='',i,e){this.ctx.save(),this.setFont(i,e);let s=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(s)}textWidth(t,i){this.ctx.save(),this.commitCtxData(i);let e=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(e)}drawLine(t,i,e,s,h){this.commitCtxData(h),this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}line(t,i,e,s){this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}beginPath(){this.ctx.beginPath()}closePath(){this.ctx.closePath()}moveTo(t){this.ctx.moveTo(t.x,t.y)}lineTo(t,i,e){this.commitCtxData(e),this.ctx.lineTo(t,i)}fill(t){this.commitCtxData(t),this.ctx.fill()}stroke(){this.ctx.stroke()}drawRect(t,i,e,s,h){this.commitCtxData(h),this.ctx.beginPath(),this.ctx.rect(t,i,e,s),this.ctx.stroke()}drawFillRect(t,i,e,s,h){this.commitCtxData(h),this.ctx.fillRect(t,i,e,s)}arcTo(t,i,e,s=20){this.commitCtxData(e),this.ctx.arcTo(t.x,t.y,i.x,i.y,s)}drawCircle(t=0,i=0,e=25,s=!1,h=0,d=2*Math.PI,r){this.commitCtxData(r),this.ctx.beginPath(),this.ctx.arc(t,i,e,h,d,!1),1==s&&this.ctx.fill(),this.ctx.stroke()}drawText(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(t,i,e)}drawIcon(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(String.fromCharCode(t),i,e)}drawTextstroke(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.strokeText(t,i,e)}commitCtxData(t){null!==t.lineCap&&(this.ctx.lineCap='round'),null!==t.globalAlpha&&(this.ctx.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.ctx.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.ctx.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.ctx.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.ctx.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.ctx.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.ctx.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.ctx.fillStyle=t.fillStyle),null!==t.lineDash&&this.ctx.setLineDash(t.lineDash),this.setFont(t.fontSize,t.fontName)}setFont(t,i){let e=`${t}px ${i}`;this.ctx.font=e}xPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.width/100*i}yPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.height/100*i}setBwZeroNhundred(t){return t<0?0:t>100?100:t}}var s,h,d,r,n;(t=>{t.Round='round',t.Butt='butt',t.Square='square'})(s||(s={})),(t=>{t.Arial='Arial',t.ArialBlack='Arial Black',t.Verdana='Verdana',t.Tahoma='Tahoma',t.Impact='Impact',t.Times='Times',t.Helvetica='Helvetica',t.TimesNewRoman='Times New Roman',t.Didot='Didot',t.Calibri='Calibri',t.Georgia='Georgia',t.AmericanTypewriter='American Typewriter',t.Courier='Courier',t.CourierNew='Courier New',t.LucidaConsole='Lucida Console',t.Monaco='Monaco',t.BradleyHand='Bradley Hand',t.BrushScriptMT='Brush Script MT',t.BrushScript='Brush Script',t.Luminari='Luminari'})(h||(h={}));class o{constructor(t=0){this.msStart=t,this.fontSize=25,this.fontName=h.Luminari,this.fillStyle='green',this.strokeStyle='red',this.lineWidth=2,this.shadowColor='black',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.globalAlpha=1,this.lineCap=s.Round,this.lineDash=[]}merge(t){null!==t.lineCap&&(this.lineCap=t.lineCap),null!==t.globalAlpha&&(this.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.fillStyle=t.fillStyle),null!==t.fontSize&&(this.fontSize=t.fontSize),null!==t.fontName&&(this.fontName=t.fontName),null!==t.lineDash&&(this.lineDash=t.lineDash)}}class l{constructor(){this.msStart=0,this.x=0,this.y=0,this.selected=!1,this.visible=!0,this.shadowColor='grey',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.colorBoundingRectangle='black'}}(t=>{t.Left='LEFT',t.Right='RIGHT',t.Mid='MID',t.Off='OFF'})(d||(d={})),(t=>{t.Top='TOP',t.Mid='MID',t.Bot='BOT'})(r||(r={}));class a extends l{constructor(){super(),this.x=0,this.y=0,this.flagUseRelativeXY=!0,this.dynWidth=25,this.dynHeight=30,this.flagUseDynResize=!0,this.flagShrinkHeightToFit=!0,this.xAlignment=d.Left,this.yAlignment=r.Top,this.content='Text Component',this.padding=0,this.border=0,this.colorBorder='black',this.colorBg='#e1f4e1',this.color='black',this.fontSize=25,this.showContent=!0,this.showBg=!1,this.showTextShadow=!1,this.showBgShadow=!1,this.showBorderShadow=!1,this.maxDisplayChars=200,this.selected=!1,this.visible=!0,this.shadowColor='#b2abab',this.shadowOffsetX=13,this.shadowOffsetY=9,this.shadowBlur=4,this.colorBoundingRectangle='#000000'}}function c(){return new a}function g(t,i){var e=!1;'#'==t[0]&&(t=t.slice(1),e=!0);var s=parseInt(t,16),h=(s>>16)+i;h>255?h=255:h<0&&(h=0);var d=(s>>8&255)+i;d>255?d=255:d<0&&(d=0);var r=(255&s)+i;return r>255?r=255:r<0&&(r=0),(e?'#':'')+(r|d<<8|h<<16).toString(16)}class w extends t{constructor(t=0,i=300,e='',s='#000000',h=0,o=0,l=20,a=20){super(c,t,i),this.xAlignmentOptions=d,this.yAlignmentOptions=r,this.d.content=e,this.d.x=h,this.d.y=o,this.d.dynWidth=l,this.d.dynHeight=a,this.d.color=s,this.d.colorBorder=s,this.d.colorBg=g(s,10),this.drawLayer=n.MiddleGround}width(t){return t.textWidth(this.d.content.substring(0,this.d.maxDisplayChars),this.style)+2*this.d.padding+this.d.border}height(t){return t.charsWidth('W',this.d.fontSize,this.style.fontName)+2*this.d.padding+this.d.border}init(t){return!0}update(t,i){return 1==this.d.flagUseDynResize&&this.dynamicFontSize(i),1==this.d.flagShrinkHeightToFit&&this.shrinkHeightToFit(i),!0}draw(t){return 1==this.d.showBg&&this.drawBg(t),this.d.border>0&&this.drawBorder(t),1==this.d.showContent&&this.drawContent(t),!0}drawBorder(t){return 1==this.d.showBorderShadow?this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor):this.shadowsOff(),this.style.fillStyle=this.d.colorBorder,this.style.strokeStyle=this.d.colorBorder,this.style.lineWidth=this.d.border,this.style.fontSize=this.d.fontSize,t.drawRect(this.getX(t)+this.d.border/2,this.getY(t)+this.d.border/2,this.width(t),this.height(t),this.style),!0}drawBg(t){return 1==this.d.showBgShadow?this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor):this.shadowsOff(),this.style.fillStyle=this.d.colorBg,this.style.strokeStyle=this.d.colorBg,this.style.fontSize=this.d.fontSize,t.drawFillRect(this.getX(t)+this.d.border,this.getY(t)+this.d.border,this.width(t),this.height(t),this.style),!0}drawContent(t){1==this.d.showTextShadow?this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor):this.shadowsOff(),this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,this.style.fontSize=this.d.fontSize,t.drawText(this.d.content.substring(0,this.d.maxDisplayChars),this.getX(t)+(this.d.border+this.d.padding),this.getY(t)+(this.d.border+this.d.padding),this.style)}getX(t){let i=this.d.x;switch(1==this.d.flagUseRelativeXY&&(i=t.xPerc(this.d.x)),this.d.xAlignment){case this.xAlignmentOptions.Left:break;case this.xAlignmentOptions.Mid:i-=this.width(t)/2+this.d.border/2;break;case this.xAlignmentOptions.Right:i-=this.width(t)+this.d.border/2}return i}getY(t){let i=this.d.y;switch(1==this.d.flagUseRelativeXY&&(i=t.yPerc(this.d.y)),this.d.yAlignment){case this.yAlignmentOptions.Top:break;case this.yAlignmentOptions.Mid:i-=this.height(t)/2+this.d.border/2;break;case this.yAlignmentOptions.Bot:i-=this.height(t)+this.d.border}return i}dynamicFontSize(t){let i=t.canvasWidth()/100*this.d.dynWidth;this.style.fontSize=this.d.fontSize;let e=0;for(let s=1;s<900;s++)if(this.style.fontSize=s,e=this.width(t),e>=i)return this.d.fontSize=s,this.style.fontSize=s,this.d.fontSize;return null}shrinkHeightToFit(t){let i=t.canvasHeight()/100*this.d.dynHeight;if(this.height(t)<i)return!0;this.style.fontSize=this.d.fontSize,this.style.fontSize;for(let e=this.style.fontSize;e>5;e--)if(this.style.fontSize-=1,this.d.fontSize=this.style.fontSize,this.height(t)<i)return!0;return!1}}function u(){return new m}class m extends l{constructor(){super(),this.msStart=0,this.fontSize=12,this.cellWidthPerc=10,this.cellHeightPerc=10,this.colorHorizontalLines='grey',this.colorVerticalLines='grey',this.colorNumbers='black',this.showNumbers=!0,this.showHorizontalLines=!0,this.showVerticalLines=!0,this.lineWidthVertical=1,this.lineWidthHorizontal=1,this.lineDash=[]}}class y extends t{constructor(t=0,i=300,e='grey',s=10,h=10){super(u,t,i),this.d.cellWidthPerc=s,this.d.cellHeightPerc=h,this.d.colorVerticalLines=e,this.d.colorHorizontalLines=e,this.d.colorNumbers=e,this.drawLayer=n.BackGround}draw(t){return this.draw_horizontal(t),this.draw_vertical(t),!0}draw_horizontal(t){let i=0,e=t.canvasWidth(),s=t.canvasHeight(),h=0+e;do{this.style.strokeStyle=this.d.colorHorizontalLines,this.style.lineDash=this.d.lineDash,this.style.lineWidth=this.d.lineWidthHorizontal,t.drawLine(0,i,h,i,this.style),1==this.d.showNumbers&&(this.style.strokeStyle=this.d.colorNumbers,this.drawText(t,Math.ceil(i),4,i+4)),i+=t.canvasHeight()/100*this.d.cellHeightPerc}while(s>i)}draw_vertical(t){let i=0,e=t.canvasWidth(),s=0+t.canvasHeight();do{this.style.strokeStyle=this.d.colorVerticalLines,this.style.lineWidth=this.d.lineWidthVertical,this.style.lineDash=this.d.lineDash,t.drawLine(i,0,i,s,this.style),1==this.d.showNumbers&&(this.style.strokeStyle=this.d.colorNumbers,this.drawText(t,Math.ceil(i),i+4,2)),i+=t.canvasWidth()/100*this.d.cellWidthPerc}while(e>i)}drawText(t,i,e,s){this.style.fontSize=this.d.fontSize,this.style.strokeStyle=this.d.colorNumbers,this.style.fillStyle=this.d.colorNumbers,t.drawText(i.toString(),e+this.d.lineWidthVertical-2,s+this.d.lineWidthHorizontal,this.style)}}class f extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.color='#000000',this.widthPercent=10,this.heightPercent=10}}function x(){return new f}class S extends t{constructor(t=0,i=300,e=0,s=0,h=10,d=10,r='#008000'){super(x,t,i),this.d.x=e,this.d.y=s,this.d.color=r,this.d.widthPercent=h,this.d.heightPercent=d,this.drawLayer=n.MiddleGround}width(t){return t.canvasWidth()/100*this.d.widthPercent}height(t){return t.canvasHeight()/100*this.d.heightPercent}draw(t){this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color;let i=t.xPerc(this.d.x),e=t.yPerc(this.d.y);return t.drawFillRect(i,e,this.width(t),this.height(t),this.style),!0}}class b extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.lineWidth=10,this.color='#000000',this.widthPercent=10,this.heightPercent=10}}function p(){return new b}class B extends t{constructor(t=0,i=300,e=0,s=0,h=10,d=10,r='#008000'){super(p,t,i),this.d.x=e,this.d.y=s,this.d.color=r,this.d.widthPercent=h,this.d.heightPercent=d,this.drawLayer=n.MiddleGround}width(t){return t.canvasWidth()/100*this.d.widthPercent}height(t){return t.canvasHeight()/100*this.d.heightPercent}draw(t){this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,this.style.lineWidth=this.d.lineWidth;let i=t.xPerc(this.d.x),e=t.yPerc(this.d.y);return t.drawRect(i,e,this.width(t),this.height(t),this.style),!0}}class A extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.dynWidthPercent=30,this.dynHeightPercent=50,this.useDynResize=!0,this.xAlignment=d.Left,this.yAlignment=r.Top}}function T(){return new A}class E extends t{constructor(t=0,i=300,e,s=0,h=0){if(super(T,t,i),this.xAlignmentOptions=d,this.yAlignmentOptions=r,this.img=document.getElementById(e),null==this.img)throw new Error('image could not be found');document.body.appendChild(this.img),this.orignalWidth=this.img.clientWidth,this.orignalHeight=this.img.clientHeight,this.img.style.display='none',this.d.x=s,this.d.y=h,this.drawLayer=n.MiddleGround}width(t){if(1==this.d.useDynResize){return t.canvasWidth()/100*this.d.dynWidthPercent}return this.orignalWidth}height(t){return 1==this.d.useDynResize?t.canvasHeight()/100*this.d.dynHeightPercent:this.orignalHeight}draw(t){return t.drawImage(this.img,this.getX(t),this.getY(t),this.width(t),this.height(t)),!0}getX(t){let i=t.xPerc(this.d.x);switch(this.d.xAlignment){case this.xAlignmentOptions.Left:break;case this.xAlignmentOptions.Mid:i-=this.width(t)/2;break;case this.xAlignmentOptions.Right:i-=this.width(t)}return i}getY(t){let i=t.yPerc(this.d.y);switch(this.d.yAlignment){case this.yAlignmentOptions.Top:break;case this.yAlignmentOptions.Mid:i-=this.height(t)/2;break;case this.yAlignmentOptions.Bot:i-=this.height(t)}return i}}class O extends l{constructor(){super(),this.msStart=0,this.prefix='sec: '}}function R(){return new O}class v{constructor(){}h1(t=0,i=Number.MAX_SAFE_INTEGER,e='Heading One',s='#000000'){let h=new w(t,i,e,s,50,5);return h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.flagUseRelativeXY=!0,h.d.dynWidth=80,h.d.dynHeight=25,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=8,h.d.border=4,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=26,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h}jt(t=0,i=Number.MAX_SAFE_INTEGER,e='JUMBO TRON',s='#008000'){let h=new w(t,i,e,s);return h.d.x=50,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=20,h.d.border=10,h.d.dynWidth=80,h.d.dynHeight=100,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!0,h.d.showBgShadow=!0,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}lb(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Bottom',s='#008000'){let h=new w(t,i,e,s);return h.d.x=0,h.d.y=100,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Left,h.d.yAlignment=h.yAlignmentOptions.Bot,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}lm(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Mid',s='#008000'){let h=new w(t,i,e,s);return h.d.x=0,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Left,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}lt(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Top',s='#008000'){let h=new w(t,i,e,s);return h.d.x=0,h.d.y=0,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Left,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}rb(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Bottom',s='#008000'){let h=new w(t,i,e,s);return h.d.x=100,h.d.y=100,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Right,h.d.yAlignment=h.yAlignmentOptions.Bot,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}rm(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Mid',s='#008000'){let h=new w(t,i,e,s);return h.d.x=100,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Right,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}rt(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Top',s='#008000'){let h=new w(t,i,e,s);return h.d.x=100,h.d.y=0,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Right,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}mt(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Top',s='#008000'){let h=new w(t,i,e,s);return h.d.x=50,h.d.y=0,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Top,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}mm(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Mid',s='#008000'){let h=new w(t,i,e,s);return h.d.x=50,h.d.y=50,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Mid,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}mb(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Bottom',s='#008000'){let h=new w(t,i,e,s);return h.d.x=50,h.d.y=100,h.d.selected=!1,h.d.visible=!0,h.d.shadowColor='#b2abab',h.d.shadowOffsetX=13,h.d.shadowOffsetY=9,h.d.shadowBlur=4,h.d.colorBoundingRectangle='#000000',h.d.xAlignment=h.xAlignmentOptions.Mid,h.d.yAlignment=h.yAlignmentOptions.Bot,h.d.content=e,h.d.padding=5,h.d.border=0,h.d.dynWidth=20,h.d.dynHeight=200,h.d.colorBorder=s,h.d.colorBg=g(s,245),h.d.color=s,h.d.fontSize=45,h.d.showContent=!0,h.d.showBg=!0,h.d.showTextShadow=!1,h.d.showBgShadow=!1,h.d.showBorderShadow=!1,h.d.maxDisplayChars=200,h.d.flagUseDynResize=!0,h.d.flagShrinkHeightToFit=!0,h.d.flagUseRelativeXY=!0,h}bulletPointMid(t=0,i=Number.MAX_SAFE_INTEGER,e='bulletPointMid',s='#008000',h=50){let d=new w(t,i,e,s,50,h);return d.d.selected=!1,d.d.visible=!0,d.d.shadowColor='#b2abab',d.d.shadowOffsetX=13,d.d.shadowOffsetY=9,d.d.shadowBlur=4,d.d.colorBoundingRectangle='#000000',d.d.xAlignment=d.xAlignmentOptions.Mid,d.d.yAlignment=d.yAlignmentOptions.Mid,d.d.content=e,d.d.padding=20,d.d.border=0,d.d.dynWidth=80,d.d.dynHeight=30,d.d.colorBorder=s,d.d.colorBg=g(s,245),d.d.color=s,d.d.fontSize=45,d.d.showContent=!0,d.d.showBg=!0,d.d.showTextShadow=!1,d.d.showBgShadow=!1,d.d.showBorderShadow=!1,d.d.maxDisplayChars=200,d.d.flagUseDynResize=!0,d.d.flagShrinkHeightToFit=!0,d.d.flagUseRelativeXY=!0,d}}class C extends t{constructor(t=0,i=300,e='rb'){switch(super(R,t,i),this.drawLayer=n.MiddleGround,this.tt=new v,e){case'rt':this.hdg=this.tt.rt(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'rm':this.hdg=this.tt.rm(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'rb':default:this.hdg=this.tt.rb(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'lt':this.hdg=this.tt.lt(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'lm':this.hdg=this.tt.lm(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'lb':this.hdg=this.tt.lb(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'mt':this.hdg=this.tt.mt(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'mm':this.hdg=this.tt.mm(this.getStartTime(),this.getEndTime(),'sec:0000','#008000');break;case'mb':this.hdg=this.tt.mb(this.getStartTime(),this.getEndTime(),'sec:0000','#008000')}this.hdg.d.content='sec:0000'}width(t){return this.hdg.width(t)}height(t){return this.hdg.height(t)}update(t,i){let e=t/1e3;return this.hdg.d.content=this.d.prefix+parseInt(e.toString()),!0}draw(t){return this.hdg.draw(t),!0}}class k extends l{constructor(){super(),this.msStart=0,this.x1=0,this.y1=0,this.x2=800,this.y2=100,this.lineWidth=2,this.color='red'}}function z(){return new k}class M extends t{constructor(t=0,i=300,e=0,s=0,h=100,d=100,r='black',o=2){super(z,t,i),this.d.x1=e,this.d.y1=s,this.d.x2=h,this.d.y2=d,this.d.color=r,this.d.lineWidth=o,this.drawLayer=n.MiddleGround}width(t){return Math.abs(this.d.x1-this.d.x2)}height(t){return Math.abs(this.d.y1-this.d.y2)}draw(t){return this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,this.style.lineWidth=this.d.lineWidth,t.drawLine(t.xPerc(this.d.x1),t.yPerc(this.d.y1),t.xPerc(this.d.x2),t.yPerc(this.d.y2),this.style),!0}}class D extends l{constructor(){super(),this.msStart=0,this.x=0,this.y=0,this.startAngle=0,this.endAngle=2*Math.PI,this.radiusPercent=10,this.fill=!0,this.color='grey'}}function N(){return new D}class X extends t{constructor(t=0,i=300,e=0,s=0,h=10,d='grey',r=!0,n=0,o=2*Math.PI){super(N,t,i),this.d.x=e,this.d.y=s,this.d.color=d,this.d.radiusPercent=h,this.d.startAngle=n,this.d.endAngle=o,this.d.fill=r}width(t){return t.canvasWidth()/100*this.d.radiusPercent}height(t){return t.canvasWidth()/100*this.d.radiusPercent}draw(t){return this.style.fillStyle=this.d.color,this.style.strokeStyle=this.d.color,t.drawCircle(t.xPerc(this.d.x),t.yPerc(this.d.y),Math.floor(this.width(t)/2),this.d.fill,this.d.startAngle,this.d.endAngle,this.style),!0}}class W{constructor(t,i){this.insert=t,this.pack=i}text(t=0,i=Number.MAX_SAFE_INTEGER,e='',s='#000000',h=0,d=0,r=20,n=20){let o=new w(t,i,e,s,h,d,r,n);return this.insert(o),o}grid(t=0,i=Number.MAX_SAFE_INTEGER,e='#000000',s=10,h=10){let d=new y(t,i,e,s,h);return this.insert(d),d}counter(t=0,i=Number.MAX_SAFE_INTEGER,e='rb'){let s=new C(t,i,e);return this.insert(s),s}rect(t=0,i=300,e=0,s=0,h=10,d=10,r='#008000'){let n=new B(t,i,e,s,h,d,r);return this.insert(n),n}fillRect(t=0,i=300,e=0,s=0,h=10,d=10,r='#008000'){let n=new S(t,i,e,s,h,d,r);return this.insert(n),n}Image(t=0,i=300,e,s=0,h=0){let d=new E(t,i,e,s,h);return this.insert(d),d}line(t=0,i=300,e=0,s=0,h=100,d=100,r='black',n=2){let o=new M(t,i,e,s,h,d,r,n);return this.insert(o),o}circle(t=0,i=300,e=0,s=0,h=10,d='grey',r=!0,n=0,o=2*Math.PI){let l=new X(t,i,e,s,h,d,r,n,o);return this.insert(l),l}}class H{constructor(){this.color='#efeee3'}}function P(t){return t>100?100:t<0?0:t}class F{constructor(t){this.insert=t,this.tt=new v}h1(t=0,i=Number.MAX_SAFE_INTEGER,e='',s='#000000'){let h=this.tt.h1(t,i,e,s);return this.insert(h),h}jt(t=0,i=Number.MAX_SAFE_INTEGER,e='JUMBO TRON',s='#008000'){let h=this.tt.jt(t,i,e,s);return this.insert(h),h}lb(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Bottom',s='#008000'){let h=this.tt.lb(t,i,e,s);return this.insert(h),h}lm(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Mid',s='#008000'){let h=this.tt.lm(t,i,e,s);return this.insert(h),h}lt(t=0,i=Number.MAX_SAFE_INTEGER,e='Left Top',s='#008000'){let h=this.tt.lt(t,i,e,s);return this.insert(h),h}mt(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Top',s='#008000'){let h=this.tt.mt(t,i,e,s);return this.insert(h),h}mm(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Mid',s='#008000'){let h=this.tt.mm(t,i,e,s);return this.insert(h),h}mb(t=0,i=Number.MAX_SAFE_INTEGER,e='Mid Bottom',s='#008000'){let h=this.tt.mb(t,i,e,s);return this.insert(h),h}rb(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Bottom',s='#008000'){let h=this.tt.rb(t,i,e,s);return this.insert(h),h}rm(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Mid',s='#008000'){let h=this.tt.rm(t,i,e,s);return this.insert(h),h}rt(t=0,i=Number.MAX_SAFE_INTEGER,e='Right Top',s='#008000'){let h=this.tt.rt(t,i,e,s);return this.insert(h),h}bulletPointMid(t=0,i=Number.MAX_SAFE_INTEGER,e='bulletPointMid',s='#008000',h=50){let d=this.tt.bulletPointMid(t,i,e,s,h);return this.insert(d),d}}class _{constructor(t){this.insert=t}dashed(t='#dee1e2'){let i=new y;return i.shadowsOff(),this.insert(i),i.d.showNumbers=!1,i.d.colorNumbers='#ff0000',i.d.lineWidthHorizontal=1,i.d.lineWidthVertical=1,i.d.fontSize=25,i.d.colorHorizontalLines=t,i.d.colorVerticalLines=t,i.d.lineDash=[15,5],i}demo(){let t=new y;return this.insert(t),t.d.showNumbers=!0,t.data.colorNumbers='red',t.d.fontSize=12,t.d.cellWidthPerc=100,t.d.cellHeightPerc=20,t.d.colorHorizontalLines='blue',t.d.colorVerticalLines='brown',t.d.lineWidthVertical=10,t.d.lineWidthHorizontal=2,t}simple(t='#dee1e2'){let i=new y;return this.insert(i),i.d.colorHorizontalLines=t,i.d.colorVerticalLines=t,i}}class L{constructor(t){this.pack=t,this.compsArray=[]}insert(t){return this.compsArray.push(t),t}init(){for(let t=0;t<this.compsArray.length;t++)this.compsArray[t].init(this.pack);return!0}drawByDrawLayer(t,i,e){for(let s=0;s<this.compsArray.length;s++){let h=this.compsArray[s];h.drawLayer==i&&h.getStartTime()<=t&&h.getEndTime()>t&&(e.save(),h.update(t,e),h.draw(e),e.restore())}return!0}resizeAll(t=800,i=400){for(let e=0;e<this.compsArray.length;e++){this.compsArray[e].resize(t,i)}return!0}}class I{constructor(){this.setBWzeroNhundred=P,this.lightenDarkenColor=g,this.aspectRatioHeight=i}}class Y{constructor(t='bilza',i=60,s=800,h=null){this.util=new I,this.canvas=function(t='bilza'){let i=document.getElementById(t);if(null==i){let i=document.createElement('canvas');if(document.getElementsByTagName('body')[0].appendChild(i),i.id=t,i.style.position='static',null==i)throw new Error('canvas not found');return i}{let e=i;if(e.id=t,e.style.position='static',null==e)throw new Error('canvas not found');return e}}(t),this.pack=new e(this.canvas,s,h),this.background=new H,this.timeStart=null,this.timeEnd=1e3*i,this.interval=null,this.msPerFrame=100,this.comps=new L(this.pack),this.insert=this.comps.insert.bind(this.comps),this.init=this.comps.init.bind(this.comps),this.drawByDrawLayer=this.comps.drawByDrawLayer.bind(this.comps),this.resizeAll=this.comps.resizeAll.bind(this.comps),this.add=new W(this.insert.bind(this),this.pack),this.textTempl=new F(this.insert.bind(this)),this.gridTempl=new _(this.insert.bind(this))}start(){return null===this.timeStart&&(this.stop(),this.init(),this.timeStart=(new Date).getTime(),this.interval=window.setInterval((()=>{this.draw()}),this.msPerFrame),!0)}drawInit(){this.init(),this.draw()}draw(){if(null==this.pack)throw new Error('bilzaa is not initialized');let t=this.getMsDelta();return t>=this.timeEnd&&this.stop(),this.pack.clearCanvas(),this.pack.drawBackground(this.background.color),this.drawByDrawLayer(t,n.BackGround,this.pack),this.drawByDrawLayer(t,n.MiddleGround,this.pack),this.drawByDrawLayer(t,n.ForeGround,this.pack),this.drawEvent(t),!0}drawEvent(t){return!0}dynamicCanvas(t=95,i=null){let e=window.innerWidth/100*P(t);return this.setCanvas(e,null),!0}dynamicFontSize(t,i=10,e=null,s=!0){null==e&&(e=i);let h=this.pack.canvasWidth()/100*i,d=this.pack.canvasWidth()/100*e;t.style.fontSize=t.d.fontSize;let r=t.d.fontSize,n=0,o=0;for(let i=1;i<900;i++)if(t.style.fontSize=i,n=t.width(this.pack),o=t.height(this.pack),n>=h||o>=d)return 0==s?(t.d.fontSize=r,t.style.fontSize=r,i):(t.d.fontSize=i,t.style.fontSize=i,t.d.fontSize);return null}getTimeEnd(){return this.timeEnd}setTimeEnd(t){return this.timeEnd=t,this.timeEnd}getMsDelta(){if(null==this.timeStart)return 0;return(new Date).getTime()-this.timeStart}setMsDelta(t){return null==this.timeStart||t>this.getTimeEnd()||t<0?0:(this.timeStart=(new Date).getTime()-t,this.timeStart)}stop(){return this.timeStart=null,null!==this.interval&&clearInterval(this.interval),!0}setCanvas(t=800,i=null){null==i&&(i=this.util.aspectRatioHeight(t)),this.pack=new e(this.canvas,t,i),this.resizeAll(this.pack.canvasWidth(),this.pack.canvasHeight())}getCanvasHeight(){return this.pack.canvasHeight()}getCanvasWidth(){return this.pack.canvasWidth()}chqCollision(t,i){return null}}(t=>{t.BackGround='BACKGROUND',t.MiddleGround='MIDDLEGROUND',t.ForeGround='FOREGROUND'})(n||(n={}));class G{constructor(t){this.newDataObjFn=t,this.data=this.newDataObjFn(),this.transitions=[]}add(t){let i=this.newDataObjFn();for(const t in i)i[t]=null;return i.msStart=t,this.transitions.push(i),i}insert(t){return this.transitions.push(t),t}apply(t){for(let i=this.transitions.length-1;i>=0;i--){const e=this.transitions[i];e.msStart<=t&&(this.merge(e),this.transitions.splice(i,1))}}merge(t){for(const i in this.data)t.hasOwnProperty(i)&&null!==t[i]&&(this.data[i]=t[i]);return!0}}export{W as CompFactory,t as Component,n as DrawLayer,h as FontNames,e as Pack,o as Style,G as Transition,Y as default};