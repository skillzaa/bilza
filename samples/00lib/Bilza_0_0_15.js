class t{constructor(){this.color='#efeee3'}}class i{constructor(){this.runningStartTimeTS=null,this.interval=null,this.msPerFrame=20}start(t){return 1!=this.isAlreadyRunning()&&(this.stop(),this.runningStartTimeTS=(new Date).getTime(),this.interval=window.setInterval((()=>{t()}),this.msPerFrame),!0)}isAlreadyRunning(){return null!=this.runningStartTimeTS}stop(){return this.runningStartTimeTS=null,null!==this.interval&&clearInterval(this.interval),!0}getMsDelta(){if(null==this.runningStartTimeTS)return 0;return(new Date).getTime()-this.runningStartTimeTS}}class e{constructor(){this.debugMode=!0,this.fixBugWarning=!0}fixBugWarn(t){this.fixBugWarning}}class s{constructor(){this.compArray=[]}push(t){return this.compArray.push(t),t}init(t){for(let i=0;i<this.compArray.length;i++)this.compArray[i].init(t);return!0}resizeAll(t=800,i=400){for(let e=0;e<this.compArray.length;e++){this.compArray[e].resize(t,i)}return!0}drawByDrawLayer(t,i,e){for(let s=0;s<this.compArray.length;s++){let r=this.compArray[s];r.drawLayer==i&&this.qualifyForDraw(r,t)&&(e.save(),r.update(t,e),r.draw(e),e.restore())}return!0}qualifyForDraw(t,i){return 1==t.alwaysOn||t.getStartTime(!0)<=i&&t.getEndTime(!0)>i}len(){return this.compArray.length}}class r{constructor(t,i){this.comps=t,this.duration=i}append(t,i){if(i<1||void 0===i)throw new Error('for Insert operation to succeed you need component duration greater than 0');return t.duration=i,t.setStartTime(this.duration.len(!1)),this.duration.extend(t.duration),this.comps.push(t)}add(t,i,e){if(e<1||void 0===e)throw new Error('for Insert operation to succeed you need component duration greater than 0');if(t.duration=e,t.setStartTime(i),t.getStartTime(!1)>this.duration.len(!1))throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${t.getStartTime()} where as the end time of current video at this time is ${this.duration.len()} , this creates a blank space of ${Math.ceil(t.getStartTime()-this.duration.len())} seconds.`);if(t.getEndTime(!1)>this.duration.len());else{let i=t.getEndTime(!1)-this.duration.len(!1);this.duration.extend(i)}return this.comps.push(t)}alwaysOn(t){return t.alwaysOn=!0,this.comps.push(t)}}class h{constructor(){this._pvt_duration_val=0}len(t=!0){return t?1e3*this._pvt_duration_val:this._pvt_duration_val}extend(t){return this._pvt_duration_val+=t,this._pvt_duration_val}}class n{constructor(n='bilza',a=80){this.pack=new Y(n,a),this.comps=new s,this.duration=new h,this.insert=new r(this.comps,this.duration),this.stopWatch=new i,this.set=new e,this.background=new t}init(){return this.comps.init(this.pack),!0}drawInit(){return this.comps.init(this.pack),this.draw(),!0}draw(){if(null==this.pack)throw new Error('bilzaa is not initialized');let t=this.stopWatch.getMsDelta();return t>=this.len(!0)&&this.stopWatch.stop(),this.pack.clearCanvas(),this.pack.drawBackground(this.background.color),this.comps.drawByDrawLayer(t,w.BackGround,this.pack),this.comps.drawByDrawLayer(t,w.MiddleGround,this.pack),this.comps.drawByDrawLayer(t,w.ForeGround,this.pack),this.drawEvent(t),!0}len(t=!0){return this.duration.len(t)}drawEvent(t){return!0}dynamicCanvas(t=95,i=null){return this.pack.dynamicCanvas(t,i),!0}start(){return this.stopWatch.start(this.draw.bind(this)),!0}stop(){return this.stopWatch.stop(),!0}resizeCanvas(t,i){this.pack.resizeCanvas(t,i)}}var a,o,l,c,d,u,w;(t=>{t.Round='round',t.Butt='butt',t.Square='square'})(a||(a={})),(t=>{t.Arial='Arial',t.ArialBlack='Arial Black',t.Verdana='Verdana',t.Tahoma='Tahoma',t.Impact='Impact',t.Times='Times',t.Helvetica='Helvetica',t.TimesNewRoman='Times New Roman',t.Didot='Didot',t.Calibri='Calibri',t.Georgia='Georgia',t.AmericanTypewriter='American Typewriter',t.Courier='Courier',t.CourierNew='Courier New',t.LucidaConsole='Lucida Console',t.Monaco='Monaco',t.BradleyHand='Bradley Hand',t.BrushScriptMT='Brush Script MT',t.BrushScript='Brush Script',t.Luminari='Luminari'})(o||(o={}));class f{constructor(t=0){this.fontSize=25,this.fontFamily=o.Luminari,this.fillStyle='green',this.strokeStyle='red',this.lineWidth=2,this.shadowColor='black',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.globalAlpha=1,this.lineCap=a.Round,this.lineDash=[]}merge(t){null!==t.lineCap&&(this.lineCap=t.lineCap),null!==t.globalAlpha&&(this.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.fillStyle=t.fillStyle),null!==t.fontSize&&(this.fontSize=t.fontSize),null!==t.fontFamily&&(this.fontFamily=t.fontFamily),null!==t.lineDash&&(this.lineDash=t.lineDash)}}class m{constructor(t=0,i=10,e,s){this.from=t,this.to=i,this.startValue=e,this.endValue=s}}class y{constructor(){this.active=!1,this.exhausted=!1,this._ret_val=null,this.FROM=0,this.TO=0,this.ENDVALUE=0,this.TOTALFRAMES=0,this.SYSTEMMAXVALUE=3e3,this.SYSTEMMINVALUE=-1e3,this.TIMEDIFFSEC=0,this.XDIFF=0,this.STARTVALUE=0,this.framesCounter=0,this.ADDFACTOR=0}setActive(t){return 0==this.active&&(t>1e3*this.FROM&&t<=1e3*this.TO?(this.active=!0,!0):(this._ret_val=null,!1))}isActive(){return this.active}setExhausted(t){return t>1e3*this.TO&&(this.exhausted=!0,!0)}isExhausted(){return this.exhausted}value(){return this._ret_val}getTimeLapsed(t){return Math.ceil(t-this.FROM)}getXDiff(t,i){let e=null;if(e=i>0?t-i:t+Math.abs(i),null!==e)return e;throw new Error('failed to getXDiff')}}class g extends y{constructor(t,i,e,s){super(),this.FROM=this.getFrom(t,i),this.TO=this.getTo(t,i),this.TIMEDIFFSEC=Math.ceil(this.TO-this.FROM),this.STARTVALUE=Math.ceil(e),this.ENDVALUE=this.getEndValue(s,e),this.XDIFF=this.getXDiff(this.ENDVALUE,this.STARTVALUE),this.TOTALFRAMES=Math.ceil(60*this.TIMEDIFFSEC),this.framesCounter=0,this.ADDFACTOR=this.XDIFF/this.TOTALFRAMES}update(t){if(this.setActive(t),this.setExhausted(t),1==this.active&&this.framesCounter<=this.TOTALFRAMES){const t=Math.ceil(this.ADDFACTOR*this.framesCounter);return this.framesCounter+=1,this.STARTVALUE>=0?this._ret_val=Math.abs(this.STARTVALUE+t):this._ret_val=this.STARTVALUE+t,!0}return this._ret_val=null,this.active=!1,!1}getFrom(t,i){if(t<0)throw new Error('from can not be smaller than zero');if(t>=i)throw new Error('from can not be smaller than zero');return t}getTo(t,i){if(t>=i)throw new Error('from can not be smaller than zero');if(i<1)throw new Error('To can not be smaller than One');return i}getEndValue(t,i){if(t>this.SYSTEMMAXVALUE)throw new Error('endValue is too large');if(t<0)throw new Error('endValue can not be negative');return Math.ceil(t)}}class p extends y{constructor(t,i,e,s){super(),this.FROM=this.getFrom(t,i),this.TO=this.getTo(t,i),this.TIMEDIFFSEC=Math.ceil(this.TO-this.FROM),this.STARTVALUE=this.getStartValue(e,s),this.ENDVALUE=this.getEndValue(e,s),this.XDIFF=this.getXDiff(this.STARTVALUE,this.ENDVALUE),this.TOTALFRAMES=Math.ceil(60*this.TIMEDIFFSEC),this.framesCounter=0,this.ADDFACTOR=this.XDIFF/this.TOTALFRAMES,this._ret_val=null}update(t){if(this.setActive(t),this.setExhausted(t),1==this.active&&this.framesCounter<=this.TOTALFRAMES){const t=Math.ceil(this.ADDFACTOR*this.framesCounter);return this.framesCounter+=1,this.STARTVALUE>=0?this._ret_val=Math.abs(this.STARTVALUE-t):this._ret_val=this.STARTVALUE+t,!0}return this._ret_val=null,this.active=!1,!1}getFrom(t,i){if(t<0)throw new Error('from can not be smaller than zero');if(t>=i)throw new Error('from can not be smaller than zero');return t}getTo(t,i){if(t>=i)throw new Error('from can not be smaller than zero');if(i<1)throw new Error('To can not be smaller than One');return i}getStartValue(t,i){if(t>this.SYSTEMMAXVALUE)throw new Error('start Value (for decrement operation) is too large');if(t<0)throw new Error('start Value (for decrement operation) can not be negative');return Math.abs(Math.ceil(t))}getEndValue(t,i){if(i<=this.SYSTEMMINVALUE)throw new Error('start Value (for decrement operation) is too large');if(i>t)throw new Error('end Value (for decrement operation) can not be larger than start value');return Math.ceil(i)}}class v{constructor(t=0){this._ret_value=t,this._set_value=null,this.preInitIncDecArray=[],this.animations=[],this.compWidth=null,this.compHeight=null,this.canvasWidth=null,this.canvasHeight=null}init(t,i,e,s){return this.compWidth=t,this.compHeight=i,this.canvasWidth=e,this.canvasHeight=s,this.runSetValue(),this.initIncDec(),!0}update(t){return this.runSetValue(),this.runAnimations(t),!0}value(){return this._ret_value}runSetValue(){null!==this._set_value&&(this._ret_value=this._set_value,this._set_value=null)}setValue(t){this._set_value=t}animate(t=0,i=10,e=0,s=100){let r=new m(t,i,e,s);this.preInitIncDecArray.push(r)}initIncDec(){for(let t=0;t<this.preInitIncDecArray.length;t++){const i=this.preInitIncDecArray[t];i.startValue<i.endValue?this.newIncrement(i.from,i.to,i.startValue,i.endValue):this.newDecrement(i.from,i.to,i.startValue,i.endValue)}}runAnimations(t){for(let i=0;i<this.animations.length;i++){const e=this.animations[i];e.update(t);let s=e.value();null!=s&&(this._ret_value=s)}}notInitError(){throw new Error('XAxis is not initialized yet')}checkNonNull(t){let i=0;return null==t?this.notInitError():i=t,i}newIncrement(t,i,e,s){let r=new g(t,i,e,s);this.animations.push(r)}newDecrement(t,i,e,s){let r=new p(t,i,e,s);this.animations.push(r)}}(t=>{t.Left='LEFT',t.Right='RIGHT',t.Mid='MID',t.Off='OFF'})(l||(l={})),(t=>{t.Top='TOP',t.Mid='MID',t.Bot='BOT'})(c||(c={}));class x{constructor(t,i,e=l.Left,s=c.Top,r=0,h=0){this.x=t,this.y=i,this.xAlign=e,this.yAlign=s,this.xExtra=r,this.yExtra=h}}function T(){throw new Error('module is not initialized yet')}function S(t){return t>100?100:t<0?0:t}function A(t,i=null,e=null){if(null==e)throw new Error('canvasWidth = null');let s=0;if('number'==typeof t.x){return D(E(t.x,e),t.xAlign,i)+t.xExtra}{const r=function(t,i,e){if(null==i||null==e)throw new Error('module is not initialized');let s=0;switch(t){case d.XLeft:s=-1*i;break;case d.XRight:s=E(100,e)+i}return Math.ceil(s)}(t.x,i,e);D(r,t.xAlign,i),s=r+t.xExtra}return s}function E(t,i){let e=0;if(null==i)T();else{let s=S(t);e=Math.ceil(i/100*s)}return e}function D(t,i,e){if(null==e)throw new Error('init error');let s=t;switch(i){case l.Left:break;case l.Mid:s=Math.floor(s-e/2);break;case l.Right:s=Math.floor(s-e)}return s}function C(t,i=null,e=null){if(null==e)throw new Error('canvasWidth = null');let s=0;if('number'==typeof t.y){return W(b(t.y,e),t.yAlign,i)+t.xExtra}{const r=function(t,i,e){if(null==i||null==e)throw new Error('module is not initialized');let s=0;switch(t){case u.YTop:s=-1*e;break;case u.YBot:s=b(100,e)+e}return Math.ceil(s)}(t.y,i,e);W(r,t.yAlign,i),s=r+t.xExtra}return s}function b(t,i){let e=0;if(null==i)T();else{let s=S(t);e=Math.ceil(i/100*s)}return e}function W(t,i,e){if(null==e)throw new Error('init error');let s=t;switch(i){case c.Top:break;case c.Mid:s=Math.floor(s-e/2);break;case c.Bot:s=Math.floor(s-e)}return s}(t=>{t.XLeft='XLEFT',t.XRight='XRIGHT'})(d||(d={})),(t=>{t.YTop='YTOP',t.YBot='YBOT'})(u||(u={}));class M{constructor(t,i,e,s){this.fromLocItem=e,this.toLocItem=s,this.timeFrom=t,this.timeTo=i}}class I{constructor(t=0,i=0){this.x=t,this.y=i}}class F{constructor(t,i){this.gotoLocItem=i,this.atFrame=t}}class L{constructor(){this._ret_data=new I,this.preInitArray=[],this.animationsX=[],this.animationsY=[],this.gotoArray=[],this.compWidth=null,this.compHeight=null,this.canvasWidth=null,this.canvasHeight=null,this.yAlignOpt=c,this.xAlignOpt=l}init(t,i,e,s){return this.compWidth=t,this.compHeight=i,this.canvasWidth=e,this.canvasHeight=s,!0}update(t){if(null==this.compWidth)throw new Error('init error');return this.activateFilter(t),this.runAnimationsX(t),this.runAnimationsY(t),this.runGoto(t),!0}initIncDec(t,i){for(let e=0;e<this.preInitArray.length;e++){const s=this.preInitArray[e];this.initIncDecX(s,t),this.initIncDecY(s,i)}}activateFilter(t){if(null==this.compWidth)throw new Error('init error');if(null==this.compHeight)throw new Error('init error');for(let i=0;i<this.preInitArray.length;i++){const e=this.preInitArray[i];1e3*e.timeFrom<=t&&(this.initIncDecX(e,this.compWidth()),this.initIncDecY(e,this.compHeight()),this.preInitArray.splice(i,1))}}initIncDecX(t,i){const e=A(t.fromLocItem,i,this.canvasWidth),s=A(t.toLocItem,i,this.canvasWidth);if(e<s){let i=this.newIncrement(t.timeFrom,t.timeTo,e,s);this.animationsX.push(i)}else if(s<e){let i=this.newDecrement(t.timeFrom,t.timeTo,e,s);this.animationsX.push(i)}}initIncDecY(t,i){const e=C(t.fromLocItem,i,this.canvasHeight),s=C(t.toLocItem,i,this.canvasHeight);if(e<s){let i=this.newIncrement(t.timeFrom,t.timeTo,e,s);this.animationsY.push(i)}else if(s<e){let i=this.newDecrement(t.timeFrom,t.timeTo,e,s);this.animationsY.push(i)}}runAnimationsX(t){for(let i=0;i<this.animationsX.length;i++){const e=this.animationsX[i];e.update(t);let s=e.value();null!=s&&(this._ret_data.x=s)}}goto(t,i,e,s=l.Left,r=c.Top,h=0,n=0){let a=new x(i,e,s,r,h,n),o=new F(t,a);this.gotoArray.push(o)}runGoto(t){if(null==this.compWidth)throw new Error('init error');if(null==this.compHeight)throw new Error('init error');for(let i=0;i<this.gotoArray.length;i++){const e=this.gotoArray[i];1e3*e.atFrame<=t&&(this._ret_data.x=A(e.gotoLocItem,this.compWidth(),this.canvasWidth),this._ret_data.y=C(e.gotoLocItem,this.compHeight(),this.canvasHeight),this.gotoArray.splice(i,1))}}runAnimationsY(t){for(let i=0;i<this.animationsY.length;i++){const e=this.animationsY[i];e.update(t);let s=e.value();null!=s&&(this._ret_data.y=s)}}animate(t,i,e,s,r,h,n=l.Left,a=l.Left,o=c.Top,d=c.Top,u=0,w=0,f=0,m=0){const y=new x(e,r,n,o,u,f),g=new x(s,h,a,d,w,m),p=new M(t,i,y,g);this.preInitArray.push(p)}x(){if(null!==this._ret_data)return this._ret_data.x;throw new Error('init error')}y(){if(null!==this._ret_data)return this._ret_data.y;throw new Error('init error')}newIncrement(t,i,e,s){return new g(t,i,e,s)}newDecrement(t,i,e,s){return new p(t,i,e,s)}}class O extends class{constructor(){this.loc=new L,this.dynWidth=new v(10),this.dynHeight=new v(10),this.canvasWidth=null,this.canvasHeight=null,this.selected=!1,this.visible=!0,this.shadowColor='grey',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.colorBoundingRectangle='black'}}{constructor(){super(),this.alwaysOn=!1,this.offScreenXOpt=d,this.offScreenYOpt=u,this.duration=0,this.insertTimeInVid=0,this.drawLayer=w.MiddleGround,this.id=Math.random().toString(36).slice(2),this.style=new f}width(){if(null!==this.canvasWidth)return Math.ceil(this.canvasWidth/100*this.dynWidth.value());throw new Error('the component is not initialized yet')}height(){if(null!==this.canvasHeight)return Math.ceil(this.canvasHeight/100*this.dynHeight.value());throw new Error('the component is not initialized yet')}init(t){return this.canvasWidth=t.canvasWidth(),this.canvasHeight=t.canvasHeight(),this.loc.init(this.width.bind(this),this.height.bind(this),t.canvasWidth(),t.canvasHeight()),this.dynWidth.init(this.width.bind(this),this.height.bind(this),t.canvasWidth(),t.canvasHeight()),this.dynHeight.init(this.width.bind(this),this.height.bind(this),t.canvasWidth(),t.canvasHeight()),!0}update(t,i){return this.loc.update(t),this.dynWidth.update(t),this.dynHeight.update(t),!0}draw(t){return!0}checkCollision(t,i,e){return!1}shadowsOff(){this.style.shadowBlur=0,this.style.shadowOffsetX=0,this.style.shadowOffsetY=0}setShadow(t=8,i=10,e=10,s='grey'){this.style.shadowBlur=t,this.style.shadowOffsetX=i,this.style.shadowOffsetY=e,this.style.shadowColor=s}shadowsOn(){this.style.shadowBlur=8,this.style.shadowOffsetX=10,this.style.shadowOffsetY=10,this.style.shadowColor='grey'}resize(t,i){return 0}getEndTime(t=!0){let i=this.insertTimeInVid+this.duration;return t?1e3*i:i}getStartTime(t=!0){return t?1e3*this.insertTimeInVid:this.insertTimeInVid}setStartTime(t){return this.insertTimeInVid=t,this.insertTimeInVid}}class _ extends O{constructor(t='grey',i=10,e=10){super(),this.fontSize=12,this.cellWidthPerc=10,this.cellHeightPerc=10,this.colorHorizontalLines='grey',this.colorVerticalLines='grey',this.colorNumbers='black',this.showNumbers=!0,this.showHorizontalLines=!0,this.showVerticalLines=!0,this.lineWidthVertical=1,this.lineWidthHorizontal=1,this.lineDash=[],this.drawLayer=w.BackGround}draw(t){return this.draw_horizontal(t),this.draw_vertical(t),!0}draw_horizontal(t){let i=0,e=t.canvasWidth(),s=t.canvasHeight(),r=0+e;do{this.style.strokeStyle=this.colorHorizontalLines,this.style.lineDash=this.lineDash,this.style.lineWidth=this.lineWidthHorizontal,t.drawLine(0,i,r,i,this.style),1==this.showNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,Math.ceil(i),4,i+4)),i+=t.canvasHeight()/100*this.cellHeightPerc}while(s>i)}draw_vertical(t){let i=0,e=t.canvasWidth(),s=0+t.canvasHeight();do{this.style.strokeStyle=this.colorVerticalLines,this.style.lineWidth=this.lineWidthVertical,this.style.lineDash=this.lineDash,t.drawLine(i,0,i,s,this.style),1==this.showNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,Math.ceil(i),i+4,2)),i+=t.canvasWidth()/100*this.cellWidthPerc}while(e>i)}drawText(t,i,e,s){this.style.fontSize=this.fontSize,this.style.strokeStyle=this.colorNumbers,this.style.fillStyle=this.colorNumbers,t.drawText(i.toString(),e+this.lineWidthVertical-2,s+this.lineWidthHorizontal,this.style)}}class k extends O{constructor(t='#000000'){super(),this.lineWidth=new v(1),this.color=t}init(t){return super.init(t),this.lineWidth.init(this.width.bind(this),this.height.bind(this),t.canvasWidth(),t.canvasHeight()),!0}update(t,i){return super.update(t,i),this.lineWidth.update(t),!0}draw(t){return this.style.fillStyle=this.color,this.style.strokeStyle=this.color,this.style.lineWidth=this.lineWidth.value(),t.drawRect(this.loc.x(),this.loc.y(),this.width(),this.height(),this.style),!0}}class B extends O{constructor(t='#000000'){super(),this.color=t}init(t){return super.init(t),!0}update(t,i){return super.update(t,i),!0}draw(t){return this.style.fillStyle=this.color,this.style.strokeStyle=this.color,t.drawFillRect(this.loc.x(),this.loc.y(),this.width(),this.height(),this.style),!0}}class z extends O{constructor(t=100,i=100,e){super(),this.cellWidth=t,this.cellHeight=i,this.colorHorizontalLines=e,this.colorVerticalLines=e,this.drawLayer=w.BackGround,this.fontSize=8,this.colorNumbers='grey',this.flagDrawNumbers=!1,this.flagDrawHorizontal=!1,this.flagDrawVertical=!1,this.lineWidthVertical=1,this.lineWidthHorizontal=1,this.lineDash=[]}draw(t){return this.draw_horizontal(t),this.draw_vertical(t),!0}draw_horizontal(t){let i=0,e=t.canvasWidth(),s=t.canvasHeight(),r=0+e;do{this.style.strokeStyle=this.colorHorizontalLines,this.style.lineDash=this.lineDash,this.style.lineWidth=this.lineWidthHorizontal,t.drawLine(0,i,r,i,this.style),1==this.flagDrawNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,i,0,i)),i+=this.cellHeight}while(s>i)}draw_vertical(t){let i=0,e=t.canvasWidth(),s=0+t.canvasHeight();do{this.style.strokeStyle=this.colorVerticalLines,this.style.lineWidth=this.lineWidthVertical,this.style.lineDash=this.lineDash,t.drawLine(i,0,i,s,this.style),1==this.flagDrawNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,i,i,0)),i+=this.cellWidth}while(e>i)}drawText(t,i,e,s){this.style.fontSize=this.fontSize,this.style.strokeStyle=this.colorNumbers,this.style.fillStyle=this.colorNumbers,t.drawText(i.toString(),e+this.lineWidthVertical-2,s+this.lineWidthHorizontal,this.style)}}class H extends O{constructor(t='#008000',i='#d1d0c8'){super(),this.content='sec:00.00',this.color=t,this.bgColor=i}init(t){return super.init(t),!0}update(t,i){return super.update(t,i),this.content='sec:'+Math.ceil(t/1e3).toString(),!0}draw(t){return this.style.fillStyle=this.bgColor,this.style.strokeStyle=this.bgColor,t.drawFillRect(this.loc.x(),this.loc.y(),this.width(),this.height(),this.style),this.style.fillStyle=this.color,this.style.strokeStyle=this.color,t.drawText(this.content,this.loc.x()+10,this.loc.y()+10,this.style),!0}}class V extends O{constructor(t=10,i='#008000',e=1){super(),this.drawLayer=w.BackGround,this.count=t,this.color=i,this.size=20,this.delay=60*e,this.delayCounter=this.delay,this.xy=[]}draw(t){if(this.delayCounter<=this.delay){this.delayCounter+=1,this.style.fillStyle=this.color,this.style.strokeStyle=this.color;for(let i=0;i<this.xy.length;i++)t.drawCircle(this.xy[i].x,this.xy[i].y,this.size,!0,0,2*Math.PI,this.style);return!1}this.xy.length=0;for(let i=0;i<this.count;i++){let i=new I(Math.ceil(Math.random()*t.canvasWidth()),Math.ceil(Math.random()*t.canvasHeight()));this.xy.push(i)}return this.delayCounter=0,!0}}class R extends O{constructor(t='',i='#000000',e=30){super(),this.content=t,this.padding=0,this.border=0,this.dynWidth.setValue(e),this.localDynHeight=20,this.colorBorder='black',this.colorBg='#e1f4e1',this.color=i,this.fontSize=25,this.showContent=!0,this.showBg=!1,this.showTextShadow=!1,this.showBgShadow=!1,this.showBorderShadow=!1,this.maxDisplayChars=200,this.drawLayer=w.MiddleGround}width(){if(null==this.canvasWidth)throw new Error('init error');return Math.ceil(this.canvasWidth/100*this.dynWidth.value())}height(){if(null==this.canvasHeight)throw new Error('init error');return Math.ceil(this.canvasHeight/100*this.localDynHeight)}update(t,i){return super.update(t,i),this.dynamicFontSize(i),!0}draw(t){return 1==this.showBg&&this.drawBg(t),this.border>0&&this.drawBorder(t),1==this.showContent&&this.drawContent(t),!0}drawBorder(t){return 1==this.showBorderShadow?this.setShadow(this.shadowBlur,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor):this.shadowsOff(),this.style.fillStyle=this.colorBorder,this.style.strokeStyle=this.colorBorder,this.style.lineWidth=this.border,this.style.fontSize=this.fontSize,t.drawRect(this.loc.x()+this.border/2,this.loc.y()+this.border/2,this.width(),this.height(),this.style),!0}drawBg(t){return 1==this.showBgShadow?this.setShadow(this.shadowBlur,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor):this.shadowsOff(),this.style.fillStyle=this.colorBg,this.style.strokeStyle=this.colorBg,this.style.fontSize=this.fontSize,t.drawFillRect(this.loc.x()+this.border,this.loc.y()+this.border,this.width(),this.height(),this.style),!0}drawContent(t){1==this.showTextShadow?this.setShadow(this.shadowBlur,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor):this.shadowsOff(),this.style.fillStyle=this.color,this.style.strokeStyle=this.color,this.style.fontSize=this.fontSize,t.drawText(this.content.substring(0,this.maxDisplayChars),this.loc.x()+(this.border+this.padding),this.loc.y()+(this.border+this.padding),this.style)}reqWdInPix(t){return t.canvasWidth()/100*this.dynWidth.value()-2*this.padding}dynamicFontSize(t){const i=this.reqWdInPix(t);this.style.fontSize=this.fontSize;for(let e=1;e<900;e++){this.style.fontSize=e;const s=t.charsWidth(this.content,this.style.fontSize,this.style.fontFamily),r=t.charsWidth('W',this.style.fontSize,this.style.fontFamily),h=Math.ceil(r/t.canvasHeight()*100);if(s>=i)return this.fontSize=e,this.style.fontSize=e,this.localDynHeight=h,this.fontSize}return null}}class X{static staticGrid(t=100,i=100,e){return new z(t,i,e)}static grid(t='grey',i=10,e=10){return new _(t,i,e)}static rect(t='#000000'){return new k(t)}static fillRect(t='#000000'){return new B(t)}static frameCounter(t='#000000'){return new H(t)}static bgCircles(t=10,i='#008000',e=1){return new V(t,i,e)}static text(t='',i='#000000',e=0,s=0,r=30){return new R(t,i,r)}}function N(t){let i=t/16;return Math.ceil(9*i)}class Y{constructor(t,i=80){this.canvasId=t,this.canvas=function(t='bilza'){let i=document.getElementById(t);if(null==i){let i=document.createElement('canvas');if(document.getElementsByTagName('body')[0].appendChild(i),i.id=t,i.style.position='static',null==i)throw new Error('canvas not found');return i}{let e=i;if(e.id=t,e.style.position='static',null==e)throw new Error('canvas not found');return e}}(this.canvasId),this.dynamicCanvas(i,null),this.ctx=this.getNewCtx()}getNewCtx(){let t=this.canvas.getContext('2d');if(null==t)throw new Error('could not obtain drawing context');return t}drawBackground(t='blue'){return this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle}canvasWidth(){return this.canvas.width}canvasHeight(){return this.canvas.height}quadraticCurveTo(t,i,e,s){this.commitCtxData(s),this.beginPath(),this.moveTo(t.x,t.y),this.ctx.quadraticCurveTo(e.x,e.y,i.x,i.y),this.stroke()}restore(){this.ctx.restore()}save(){this.ctx.save()}drawImage(t,i,e,s,r){this.ctx.drawImage(t,i,e,s,r)}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}charsWidth(t='',i,e){this.ctx.save(),this.setFont(i,e);let s=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(s)}textWidth(t,i){this.ctx.save(),this.commitCtxData(i);let e=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(e)}drawLine(t,i,e,s,r){this.commitCtxData(r),this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}line(t,i,e,s){this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}beginPath(){this.ctx.beginPath()}closePath(){this.ctx.closePath()}moveTo(t,i){this.ctx.moveTo(t,i)}lineTo(t,i,e){this.commitCtxData(e),this.ctx.lineTo(t,i)}fill(t){this.commitCtxData(t),this.ctx.fill()}stroke(){this.ctx.stroke()}drawRect(t,i,e,s,r){this.commitCtxData(r),this.ctx.beginPath(),this.ctx.rect(t,i,e,s),this.ctx.stroke()}drawFillRect(t,i,e,s,r){this.commitCtxData(r),this.ctx.fillRect(t,i,e,s)}arcTo(t,i,e,s=20){this.commitCtxData(e),this.ctx.arcTo(t.x,t.y,i.x,i.y,s)}drawCircle(t=0,i=0,e=25,s=!1,r=0,h=2*Math.PI,n){this.commitCtxData(n),this.ctx.beginPath(),this.ctx.arc(t,i,e,r,h,!1),1==s&&this.ctx.fill(),this.ctx.stroke()}drawText(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(t,i,e)}drawIcon(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(String.fromCharCode(t),i,e)}drawTextstroke(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.strokeText(t,i,e)}commitCtxData(t){null!==t.lineCap&&(this.ctx.lineCap='round'),null!==t.globalAlpha&&(this.ctx.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.ctx.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.ctx.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.ctx.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.ctx.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.ctx.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.ctx.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.ctx.fillStyle=t.fillStyle),null!==t.lineDash&&this.ctx.setLineDash(t.lineDash),this.setFont(t.fontSize,t.fontFamily)}setFont(t,i){let e=`${t}px ${i}`;this.ctx.font=e}xPerc(t){let i=this.setBwZeroNhundred(t);return Math.ceil(this.canvas.width/100*i)}yPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.height/100*i}setBwZeroNhundred(t){return t<0?0:t>100?100:t}dynCanvasWidth(t=80){return window.innerWidth/100*S(t)}dynCanvasHeight(t,i=null){return null!==i?window.innerHeight/100*S(i):N(t)}resizeCanvas(t,i){this.canvas.width=t,this.canvas.height=i??N(t)}dynamicCanvas(t=95,i=null){let e=this.dynCanvasWidth(t);return this.resizeCanvas(e,this.dynCanvasHeight(e,i)),!0}}(t=>{t.BackGround='BACKGROUND',t.MiddleGround='MIDDLEGROUND',t.ForeGround='FOREGROUND'})(w||(w={}));class U{static h1(t='',i='#008000',e=30){let s=new R(t,i,e);return s.showBg=!0,s}}export{v as AnimatedNoBase,O as BaseComponent,n as Bilza,X as CompFactory,w as DrawLayer,Y as Pack,U as TextTempl,l as XAlignment,c as YAlignment,n as default};
