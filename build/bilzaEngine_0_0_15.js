class t{constructor(){this.color='#efeee3'}}class i{constructor(){this.runningStartTimeTS=null,this.interval=null,this.msPerFrame=100}start(t){return 1!=this.isAlreadyRunning()&&(this.stop(),this.runningStartTimeTS=(new Date).getTime(),this.interval=window.setInterval((()=>{t()}),this.msPerFrame),!0)}isAlreadyRunning(){return null!=this.runningStartTimeTS}stop(){return this.runningStartTimeTS=null,null!==this.interval&&clearInterval(this.interval),!0}getMsDelta(){if(null==this.runningStartTimeTS)return 0;return(new Date).getTime()-this.runningStartTimeTS}}class e{constructor(){this.debugMode=!0,this.fixBugWarning=!0}fixBugWarn(t){this.fixBugWarning}}class s{constructor(){this.compArray=[]}push(t){return this.compArray.push(t),t}init(t){for(let i=0;i<this.compArray.length;i++)this.compArray[i].init(t);return!0}resizeAll(t=800,i=400){for(let e=0;e<this.compArray.length;e++){this.compArray[e].resize(t,i)}return!0}drawByDrawLayer(t,i,e){for(let s=0;s<this.compArray.length;s++){let r=this.compArray[s];r.drawLayer==i&&this.qualifyForDraw(r,t)&&(e.save(),r.update(t,e),r.draw(e),e.restore())}return!0}qualifyForDraw(t,i){return 1==t.alwaysOn||t.getStartTime(!0)<=i&&t.getEndTime(!0)>i}len(){return this.compArray.length}}class r{constructor(t,i){this.comps=t,this.duration=i}append(t,i){if(i<1||void 0===i)throw new Error('for Insert operation to succeed you need component duration greater than 0');return t.duration=i,t.setStartTime(this.duration.len(!1)),this.duration.extend(t.duration),this.comps.push(t)}add(t,i,e){if(e<1||void 0===e)throw new Error('for Insert operation to succeed you need component duration greater than 0');if(t.duration=e,t.setStartTime(i),t.getStartTime(!1)>this.duration.len(!1))throw new Error(`to insert a clip inside the video, the start time of the clip can not be larger than the duration of the video since that will create blank frames, the start time of the component is set as ${t.getStartTime()} where as the end time of current video at this time is ${this.duration.len()} , this creates a blank space of ${Math.ceil(t.getStartTime()-this.duration.len())} seconds.`);if(t.getEndTime(!1)>this.duration.len());else{let i=t.getEndTime(!1)-this.duration.len(!1);this.duration.extend(i)}return this.comps.push(t)}alwaysOn(t){return this.comps.push(t)}}class a{constructor(){this._pvt_duration_val=0}len(t=!0){return t?1e3*this._pvt_duration_val:this._pvt_duration_val}extend(t){return this._pvt_duration_val+=t,this._pvt_duration_val}}class n{constructor(n='bilza',h=80){this.pack=new l(n,h),this.comps=new s,this.duration=new a,this.insert=new r(this.comps,this.duration),this.stopWatch=new i,this.set=new e,this.background=new t}init(){return this.comps.init(this.pack),!0}drawInit(){return this.comps.init(this.pack),this.draw(),!0}draw(){if(null==this.pack)throw new Error('bilzaa is not initialized');let t=this.stopWatch.getMsDelta();return t>=this.len(!0)&&this.stopWatch.stop(),this.pack.clearCanvas(),this.pack.drawBackground(this.background.color),this.comps.drawByDrawLayer(t,c.BackGround,this.pack),this.comps.drawByDrawLayer(t,c.MiddleGround,this.pack),this.comps.drawByDrawLayer(t,c.ForeGround,this.pack),this.drawEvent(t),!0}len(t=!0){return this.duration.len(t)}drawEvent(t){return!0}dynamicCanvas(t=95,i=null){return this.pack.dynamicCanvas(t,i),!0}start(){return this.stopWatch.start(this.draw.bind(this)),!0}stop(){return this.stopWatch.stop(),!0}}function h(t){let i=t/16;return Math.ceil(9*i)}function o(t){return t>100?100:t<0?0:t}class l{constructor(t,i=80){this.canvasId=t,this.canvas=function(t='bilza'){let i=document.getElementById(t);if(null==i){let i=document.createElement('canvas');if(document.getElementsByTagName('body')[0].appendChild(i),i.id=t,i.style.position='static',null==i)throw new Error('canvas not found');return i}{let e=i;if(e.id=t,e.style.position='static',null==e)throw new Error('canvas not found');return e}}(this.canvasId),this.dynamicCanvas(i,null),this.ctx=this.getNewCtx()}getNewCtx(){let t=this.canvas.getContext('2d');if(null==t)throw new Error('could not obtain drawing context');return t}drawBackground(t='blue'){return this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle}canvasWidth(){return this.canvas.width}canvasHeight(){return this.canvas.height}quadraticCurveTo(t,i,e,s){this.commitCtxData(s),this.beginPath(),this.moveTo(t.x,t.y),this.ctx.quadraticCurveTo(e.x,e.y,i.x,i.y),this.stroke()}restore(){this.ctx.restore()}save(){this.ctx.save()}drawImage(t,i,e,s,r){this.ctx.drawImage(t,i,e,s,r)}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}charsWidth(t='',i,e){this.ctx.save(),this.setFont(i,e);let s=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(s)}textWidth(t,i){this.ctx.save(),this.commitCtxData(i);let e=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(e)}drawLine(t,i,e,s,r){this.commitCtxData(r),this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}line(t,i,e,s){this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}beginPath(){this.ctx.beginPath()}closePath(){this.ctx.closePath()}moveTo(t,i){this.ctx.moveTo(t,i)}lineTo(t,i,e){this.commitCtxData(e),this.ctx.lineTo(t,i)}fill(t){this.commitCtxData(t),this.ctx.fill()}stroke(){this.ctx.stroke()}drawRect(t,i,e,s,r){this.commitCtxData(r),this.ctx.beginPath(),this.ctx.rect(t,i,e,s),this.ctx.stroke()}drawFillRect(t,i,e,s,r){this.commitCtxData(r),this.ctx.fillRect(t,i,e,s)}arcTo(t,i,e,s=20){this.commitCtxData(e),this.ctx.arcTo(t.x,t.y,i.x,i.y,s)}drawCircle(t=0,i=0,e=25,s=!1,r=0,a=2*Math.PI,n){this.commitCtxData(n),this.ctx.beginPath(),this.ctx.arc(t,i,e,r,a,!1),1==s&&this.ctx.fill(),this.ctx.stroke()}drawText(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(t,i,e)}drawIcon(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(String.fromCharCode(t),i,e)}drawTextstroke(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.strokeText(t,i,e)}commitCtxData(t){null!==t.lineCap&&(this.ctx.lineCap='round'),null!==t.globalAlpha&&(this.ctx.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.ctx.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.ctx.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.ctx.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.ctx.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.ctx.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.ctx.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.ctx.fillStyle=t.fillStyle),null!==t.lineDash&&this.ctx.setLineDash(t.lineDash),this.setFont(t.fontSize,t.fontFamily)}setFont(t,i){let e=`${t}px ${i}`;this.ctx.font=e}xPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.width/100*i}yPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.height/100*i}setBwZeroNhundred(t){return t<0?0:t>100?100:t}dynCanvasWidth(t=80){return window.innerWidth/100*o(t)}dynCanvasHeight(t,i=null){return null!==i?window.innerHeight/100*o(i):h(t)}resizeCanvas(t,i){this.canvas.width=t,this.canvas.height=i??h(t)}dynamicCanvas(t=95,i=null){let e=this.dynCanvasWidth(t);return this.resizeCanvas(e,this.dynCanvasHeight(e,i)),!0}}var c,u,d,m,w;(t=>{t.BackGround='BACKGROUND',t.MiddleGround='MIDDLEGROUND',t.ForeGround='FOREGROUND'})(c||(c={})),(t=>{t.Round='round',t.Butt='butt',t.Square='square'})(u||(u={})),(t=>{t.Arial='Arial',t.ArialBlack='Arial Black',t.Verdana='Verdana',t.Tahoma='Tahoma',t.Impact='Impact',t.Times='Times',t.Helvetica='Helvetica',t.TimesNewRoman='Times New Roman',t.Didot='Didot',t.Calibri='Calibri',t.Georgia='Georgia',t.AmericanTypewriter='American Typewriter',t.Courier='Courier',t.CourierNew='Courier New',t.LucidaConsole='Lucida Console',t.Monaco='Monaco',t.BradleyHand='Bradley Hand',t.BrushScriptMT='Brush Script MT',t.BrushScript='Brush Script',t.Luminari='Luminari'})(d||(d={}));class f{constructor(t=0){this.fontSize=25,this.fontFamily=d.Luminari,this.fillStyle='green',this.strokeStyle='red',this.lineWidth=2,this.shadowColor='black',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.globalAlpha=1,this.lineCap=u.Round,this.lineDash=[]}merge(t){null!==t.lineCap&&(this.lineCap=t.lineCap),null!==t.globalAlpha&&(this.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.fillStyle=t.fillStyle),null!==t.fontSize&&(this.fontSize=t.fontSize),null!==t.fontFamily&&(this.fontFamily=t.fontFamily),null!==t.lineDash&&(this.lineDash=t.lineDash)}}(t=>{t.Left='LEFT',t.Right='RIGHT',t.Mid='MID',t.Off='OFF'})(m||(m={})),(t=>{t.Top='TOP',t.Mid='MID',t.Bot='BOT'})(w||(w={}));class p{constructor(t,i,e,s){if(t>=i)throw new Error('from can not be larger than to');if(e>=s)throw new Error('startValue can not be larger than endValue');this.FROM=1e3*t,this.TO=1e3*i,this.STARTVALUE=e,this.ENDVALUE=s,this.timeDiff=this.TO-this.FROM,this.xDiff=this.ENDVALUE-this.STARTVALUE,this.val=null}update(t){if(t>this.FROM&&t<=this.TO){const i=this.getTimeLapsed(t),e=Math.ceil(i/this.timeDiff*100);if(e<0||e>100)throw new Error('timePerc error: timePerc can only be between 0 and 100');const s=Math.ceil(this.xDiff/100*e);return this.val=this.STARTVALUE+s,!0}return this.val=null,!1}value(){return this.val}getTimePerc(t){}getTimeLapsed(t){if(t>this.TO)throw new Error('getTimeLapsed error');return Math.ceil(t-this.FROM)}}class y{constructor(t){this.INITALVALUE=t,this.val=t,this.animations=[]}update(t,i){for(let i=0;i<this.animations.length;i++){const e=this.animations[i];e.update(t);let s=e.value();null!=s&&(this.val=s)}}value(){return this.val}increment(t=0,i=10,e=0,s=100){let r=new p(t,i,e,s);this.animations.push(r)}setValue(t){return this.val=t,this.val}}class v{constructor(){this.x=new y(0),this.y=new y(0),this.selected=!1,this.visible=!0,this.shadowColor='grey',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.colorBoundingRectangle='black',this.xAlignment=m.Left,this.yAlignment=w.Top}}class x{constructor(t=0,i=10,e=0,s=100){this.from=t,this.to=i,this.startValue=e,this.endValue=s}}class g{constructor(){this.props=new v,this.p=this.props,this.alwaysOn=!1,this.useRelativeXY=!0,this.moveXArray=[],this.moveYArray=[],this.xAlignmentOptions=m,this.yAlignmentOptions=w,this.duration=0,this.insertTimeInVid=0,this.drawLayer=c.MiddleGround,this.id=Math.random().toString(36).slice(2),this.style=new f}width(t){return 0}height(t){return 0}init(t){return this.initProps(t),1==this.useRelativeXY?(this.initMoveXArray(t),this.initMoveYArray(t)):(this.initMoveXArrayNONuseRelativeXY(t),this.initMoveYArrayNONuseRelativeXY(t)),!0}initProps(t){this.p.x.setValue(-150),this.p.y.setValue(Math.ceil(t.yPerc(this.p.y.value())))}initMoveXArrayNONuseRelativeXY(t){for(let t=0;t<this.moveXArray.length;t++){const i=this.moveXArray[t];this.p.x.increment(i.from,i.to,i.startValue,i.endValue)}}initMoveYArrayNONuseRelativeXY(t){for(let t=0;t<this.moveYArray.length;t++){const i=this.moveYArray[t];this.p.x.increment(i.from,i.to,i.startValue,i.endValue)}}initMoveXArray(t){for(let i=0;i<this.moveXArray.length;i++){const e=this.moveXArray[i];this.p.x.increment(this.getStartTime(!1)+e.from,this.getStartTime(!1)+e.to,Math.ceil(t.xPerc(e.startValue)-150),Math.ceil(t.xPerc(e.endValue)))}}initMoveYArray(t){for(let i=0;i<this.moveYArray.length;i++){const e=this.moveYArray[i];this.p.y.increment(this.getStartTime(!1)+e.from,this.getStartTime(!1)+e.to,Math.ceil(t.yPerc(e.startValue)),Math.ceil(t.yPerc(e.endValue)))}}draw(t){return!0}update(t,i){return this.p.x.update(t,i),this.p.y.update(t,i),!0}checkCollision(t,i,e){return!1}shadowsOff(){this.style.shadowBlur=0,this.style.shadowOffsetX=0,this.style.shadowOffsetY=0}setShadow(t=8,i=10,e=10,s='grey'){this.style.shadowBlur=t,this.style.shadowOffsetX=i,this.style.shadowOffsetY=e,this.style.shadowColor=s}shadowsOn(){this.style.shadowBlur=8,this.style.shadowOffsetX=10,this.style.shadowOffsetY=10,this.style.shadowColor='grey'}resize(t,i){return 0}getEndTime(t=!0){let i=this.insertTimeInVid+this.duration;return t?1e3*i:i}getStartTime(t=!0){return t?1e3*this.insertTimeInVid:this.insertTimeInVid}setStartTime(t){return this.insertTimeInVid=t,this.insertTimeInVid}moveX(t=0,i=10,e=0,s=100){const r=new x(t,i,e,s);this.moveXArray.push(r)}move(t=0,i=10,e=0,s=100,r=0,a=100){const n=new x(t,i,e,s),h=new x(t,i,r,a);this.moveXArray.push(n),this.moveYArray.push(h)}}export{g as BaseComponent,n as Bilza,c as DrawLayer,l as Pack,n as default};
