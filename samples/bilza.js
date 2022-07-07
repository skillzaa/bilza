var t,i,e,s,r,h;(t=>{t.BackGround='BACKGROUND',t.MiddleGround='MIDDLEGROUND',t.ForeGround='FOREGROUND'})(t||(t={})),(t=>{t.Round='round',t.Butt='butt',t.Square='square'})(i||(i={})),(t=>{t.Arial='Arial',t.ArialBlack='Arial Black',t.Verdana='Verdana',t.Tahoma='Tahoma',t.Impact='Impact',t.Times='Times',t.Helvetica='Helvetica',t.TimesNewRoman='Times New Roman',t.Didot='Didot',t.Calibri='Calibri',t.Georgia='Georgia',t.AmericanTypewriter='American Typewriter',t.Courier='Courier',t.CourierNew='Courier New',t.LucidaConsole='Lucida Console',t.Monaco='Monaco',t.BradleyHand='Bradley Hand',t.BrushScriptMT='Brush Script MT',t.BrushScript='Brush Script',t.Luminari='Luminari'})(e||(e={}));class n{constructor(){this.fontSize=25,this.fontFamily=e.Luminari,this.fillStyle='green',this.strokeStyle='red',this.lineWidth=2,this.shadowColor='black',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0,this.globalAlpha=1,this.lineCap=i.Round,this.lineDash=[]}merge(t){null!==t.lineCap&&(this.lineCap=t.lineCap),null!==t.globalAlpha&&(this.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.fillStyle=t.fillStyle),null!==t.fontSize&&(this.fontSize=t.fontSize),null!==t.fontFamily&&(this.fontFamily=t.fontFamily),null!==t.lineDash&&(this.lineDash=t.lineDash)}}(t=>{t.Left='LEFT',t.Right='RIGHT',t.Mid='MID'})(s||(s={})),(t=>{t.Top='TOP',t.Mid='MID',t.Bot='BOT'})(r||(r={}));class a{constructor(t){this._value=t,this.filters=[]}update(t){return this.runFilters(t),!0}value(){return this._value}set(t){return this._value=t,this._value}runFilters(t){for(let i=0;i<this.filters.length;i++){const e=this.filters[i];e.update(t);let s=e.value();null!=s&&(this._value=s)}}}(t=>{t.Waiting='WAITING',t.Running='RUNNING',t.Exhausted='EXHAUSTED'})(h||(h={}));class l{constructor(t,i,e,s){if(t<0||i<0)throw new Error('time can not be negative');if(i<=t)throw new Error('end Time can not be equal or smaller than start time');if(e>=s)throw new Error('start value can not be equal to or larger than end value in an increment operation');this.startTime=1e3*t,this.endTime=1e3*i,this.startValue=e,this.endValue=s,this.timeDiff=Math.abs(this.endTime-this.startTime),this.Xdiff=Math.abs(this.startValue-this.endValue),this._ret_val=null,this.filterState=h.Waiting}update(t){if(this.setState(t),this.filterState==h.Running){const i=Math.ceil(t-this.startTime)/this.timeDiff*100,e=this.Xdiff/100*i;this._ret_val=this.startValue+e}else this._ret_val=null;return this.filterState}setState(t){return t<this.startTime?this.filterState=h.Waiting:t>=this.startTime&&t<=this.endTime?this.filterState=h.Running:t>this.endTime&&(this.filterState=h.Exhausted),this.filterState}value(){return this._ret_val}}class o{constructor(t,i,e,s){if(t<0||i<0)throw new Error('time can not be negative');if(i<=t)throw new Error('end Time can not be equal or smaller than start time');if(e<=s)throw new Error('end value can not be equal to or larger than start value in an decrement operation');if(e<0)throw new Error('start value can not be less than zero in decrement operation');this.startTime=1e3*t,this.endTime=1e3*i,this.startValue=e,this.endValue=s,this.timeDiff=Math.abs(this.startTime-this.endTime),this.Xdiff=Math.abs(this.startValue-this.endValue),this._ret_val=null,this.filterState=h.Waiting}update(t){if(this.setState(t),this.filterState==h.Running){const i=Math.ceil(t-this.startTime)/this.timeDiff*100,e=Math.abs(100-i),s=this.Xdiff/100*e;this._ret_val=Math.ceil(this.endValue+s)}else this._ret_val=null;return this.filterState}setState(t){return t<this.startTime?this.filterState=h.Waiting:t>=this.startTime&&t<=this.endTime?this.filterState=h.Running:t>this.endTime&&(this.filterState=h.Exhausted),this.filterState}value(){return this._ret_val}}class u{constructor(t,i,e=0){if(t<0||i<0)throw new Error('time can not be negative');if(i<=t)throw new Error('end Time can not be equal or smaller than start time');this.skipXframes=e,this.skipframesCounter=0,this.startTime=1e3*t,this.endTime=1e3*i,this._ret_val=null,this.filterState=h.Waiting}update(t){return t<this.startTime?this.filterState=h.Waiting:t>=this.startTime&&t<=this.endTime?this.filterState=h.Running:t>this.endTime&&(this.filterState=h.Exhausted),this.filterState}value(){return this._ret_val}okToGo(){return this.filterState==h.Running&&(this.skipframesCounter<this.skipXframes?(this.skipframesCounter+=1,!1):(this.skipframesCounter=0,!0))}xFramesSkipped(){return this.skipframesCounter<this.skipXframes?(this.skipframesCounter+=1,!1):(this.skipframesCounter=0,!0)}isRunning(){return this.filterState==h.Running}}class d extends u{constructor(t,i,e=1,s=10,r=0){super(t,i),this.offset=s,this.seed=e,this.delay=r,this.delayCounter=0,this._ret_val=null}update(t){return super.update(t),this.filterState==h.Running?this.delayCounter>=this.delay?(this.delayCounter=0,Math.random()>.5?this._ret_val=this.seed+this.offset:this._ret_val=this.seed-this.offset):this.delayCounter+=1:this._ret_val=null,this.filterState}}class c extends u{constructor(t,i,e=1,s=10,r=0){super(t,i),this.pointOne=e,this.pointTwo=s,this.skipFrames=r,this.delayCounter=0,this._ret_val=null}update(t){return this.filterState==h.Running?this.delayCounter>=this.skipFrames?(this.delayCounter=0,this._ret_val!==this.pointOne?this._ret_val=this.pointOne:this._ret_val=this.pointTwo):this.delayCounter+=1:this._ret_val=null,this.filterState}}class p extends u{constructor(t,i=10){super(t,t+3e3),this.theValue=i,this.usedOnce=!1,this._ret_val=null}update(t){return super.update(t),this.filterState==h.Running&&0==this.usedOnce?(this._ret_val=this.theValue,this.usedOnce=!0):this._ret_val=null,this.filterState}}class w extends u{constructor(t,i,e=1,s=10,r=0){super(t,i),this.min=e,this.max=s,this.everyXFrame=r,this.delayCounter=0,this._ret_val=null}update(t){return super.update(t),this.filterState==h.Running?this.delayCounter>=this.everyXFrame?(this.delayCounter=0,this._ret_val=Math.floor(Math.random()*(this.max-this.min+1)+this.min)):this.delayCounter+=1:this._ret_val=null,this.filterState}}class m extends u{constructor(t,i,e){super(t,i),this.constantValue=e,this._ret_val=null}update(t){return this.update(t)==h.Running?this._ret_val=this.constantValue:this._ret_val=null,this.filterState}}class g extends a{constructor(t){super(t)}animate(t,i,e,s){if(e<s){let r=new l(t,i,e,s);this.filters.push(r)}else if(e>s){let r=new o(t,i,e,s);this.filters.push(r)}else if(e==s){let s=new m(t,i,e);this.filters.push(s)}}vibrate(t,i,e=10,s=10,r=0){const h=new d(t,i,e,s,r);this.filters.push(h)}jumpBetween(t,i,e=1,s=10,r=0){const h=new c(t,i,e,s,r);this.filters.push(h)}random(t,i,e=0,s=100,r=0){const h=new w(t,i,e,s,r);this.filters.push(h)}goto(t,i=0){const e=new p(t,i);this.filters.push(e)}}class f{constructor(t,i){this.frame=t,this.theValue=i}}class y{constructor(t,i,e,s){this.startTime=t,this.endTime=i,this.startValue=e,this.endValue=s}}class v{constructor(t,i,e,s,r){this.from=t,this.to=i,this.seed=e,this.offset=s,this.delay=r}}class x{constructor(t,i,e=1,s=10,r=0){this.min=1,this.max=10,this.skipFrames=0,this.startTimeSec=t,this.endTimeSec=i,this.min=e,this.max=s,this.skipFrames=r}}class T{constructor(t,i,e=1,s=10,r=0){this.startTimeSec=t,this.endTimeSec=i,this.pointOne=e,this.pointTwo=s,this.skipFrames=r}}class S{constructor(t=0){this._XorY=new g(t),this.usePercentages=!0,this._initValue=t,this.preInitRandoms=[],this.preInitGotos=[],this.preInitAnimates=[],this.preInitVibrates=[],this.preInitJumpBetweens=[]}setInitValue(t){this._initValue=t}update(t){this._XorY.update(t)}value(){return this._XorY.value()}jumpBetween(t,i,e=1,s=10,r=0){const h=new T(t,i,e,s,r);this.preInitJumpBetweens.push(h)}baseJumpBetween(t,i,e=1,s=10,r=0){this._XorY.jumpBetween(t,i,e,s,r)}goto(t,i){const e=new f(t,i);this.preInitGotos.push(e)}baseGoto(t,i){this._XorY.goto(t,i)}vibrate(t,i,e,s,r){const h=new v(t,i,e,s,r);this.preInitVibrates.push(h)}baseVibrate(t,i,e,s,r){this._XorY.vibrate(t,i,e,s,r)}random(t,i,e=1,s=10,r=0){const h=new x(t,i,e,s,r);this.preInitRandoms.push(h)}baseRandom(t,i,e=1,s=10,r=0){this._XorY.random(t,i,e,s,r)}animate(t,i,e,s){const r=new y(t,i,e,s);this.preInitAnimates.push(r)}baseAnimate(t,i,e,s){this._XorY.animate(t,i,e,s)}}class b extends S{constructor(t=0){super(t),this.canvasWidth=null}init(t,i){this.usePercentages=t,this.canvasWidth=i,this.initSetInitValue(),this.initVibrate(),this.initGoto(),this.initAnimate(),this.initRandom(),this.initJumpBetween()}set(t){if(null==this.canvasWidth)throw new Error('init error : set value can not be used at compile time for properties which need canvas width or height. For such values you should use setInitValue at compile time and use "set" only at run time when the protety has been initialized');if(1==this.usePercentages){const i=this.percToX(t);this._XorY.set(i)}else this._XorY.set(t)}initSetInitValue(){if(null==this.canvasWidth)throw new Error('init error');if(1==this.usePercentages){const t=this.percToX(this._initValue);this._XorY.set(t)}else this._XorY.set(this._initValue)}initVibrate(){if(null==this.canvasWidth)throw new Error('init error');for(let t=0;t<this.preInitVibrates.length;t++){const i=this.preInitVibrates[t];let e=i.seed;1==this.usePercentages&&(e=this.percToX(i.seed)),this.baseVibrate(i.from,i.to,e,i.offset,i.delay)}}initRandom(){if(null==this.canvasWidth)throw new Error('init error');for(let t=0;t<this.preInitRandoms.length;t++){const i=this.preInitRandoms[t];let e=i.min,s=i.max;1==this.usePercentages&&(e=this.percToX(i.min),s=this.percToX(i.max)),this.baseRandom(i.startTimeSec,i.endTimeSec,e,s,i.skipFrames)}}initJumpBetween(){if(null==this.canvasWidth)throw new Error('init error');for(let t=0;t<this.preInitJumpBetweens.length;t++){const i=this.preInitJumpBetweens[t];let e=i.pointOne,s=i.pointTwo;1==this.usePercentages&&(e=this.percToX(i.pointOne),s=this.percToX(i.pointTwo)),this.baseJumpBetween(i.startTimeSec,i.endTimeSec,e,s,i.skipFrames)}}initGoto(){if(null==this.canvasWidth)throw new Error('init error');for(let t=0;t<this.preInitGotos.length;t++){const i=this.preInitGotos[t];let e=i.theValue;1==this.usePercentages&&(e=this.percToX(i.theValue)),this.baseGoto(i.frame,e)}}initAnimate(){if(null==this.canvasWidth)throw new Error('init error');for(let t=0;t<this.preInitAnimates.length;t++){const i=this.preInitAnimates[t];1==this.usePercentages?this.baseAnimate(i.startTime,i.endTime,this.percToX(i.startValue),this.percToX(i.endValue)):this.baseAnimate(i.startTime,i.endTime,i.startValue,i.endValue)}}percToX(t){if(null==this.canvasWidth)throw'init error';return this.canvasWidth/100*t}}class _ extends S{constructor(t=0){super(t),this.canvasHeight=null}init(t,i){this.usePercentages=t,this.canvasHeight=i,this.initSetInitValue(),this.initVibrate(),this.initGoto(),this.initAnimate(),this.initRandom(),this.initJumpBetween()}set(t){if(null==this.canvasHeight)throw new Error('init error : set value can not be used at compile time for properties which need canvas width or height. For such values you should use setInitValue at compile time and use "set" only at run time when the protety has been initialized');if(1==this.usePercentages){const i=this.percToY(t);this._XorY.set(i)}else this._XorY.set(t)}initSetInitValue(){if(null==this.canvasHeight)throw new Error('init error');if(1==this.usePercentages){const t=this.percToY(this._initValue);this._XorY.set(t)}else this._XorY.set(this._initValue)}initVibrate(){if(null==this.canvasHeight)throw new Error('init error');for(let t=0;t<this.preInitVibrates.length;t++){const i=this.preInitVibrates[t];let e=i.seed;1==this.usePercentages&&(e=this.percToY(i.seed)),this.baseVibrate(i.from,i.to,e,i.offset,i.delay)}}initRandom(){if(null==this.canvasHeight)throw new Error('init error');for(let t=0;t<this.preInitRandoms.length;t++){const i=this.preInitRandoms[t];let e=i.min,s=i.max;1==this.usePercentages&&(e=this.percToY(i.min),s=this.percToY(i.max)),this.baseRandom(i.startTimeSec,i.endTimeSec,e,s,i.skipFrames)}}initJumpBetween(){if(null==this.canvasHeight)throw new Error('init error');for(let t=0;t<this.preInitJumpBetweens.length;t++){const i=this.preInitJumpBetweens[t];let e=i.pointOne,s=i.pointTwo;1==this.usePercentages&&(e=this.percToY(i.pointOne),s=this.percToY(i.pointTwo)),this.baseJumpBetween(i.startTimeSec,i.endTimeSec,e,s,i.skipFrames)}}initGoto(){if(null==this.canvasHeight)throw new Error('init error');for(let t=0;t<this.preInitGotos.length;t++){const i=this.preInitGotos[t];let e=i.theValue;1==this.usePercentages&&(e=this.percToY(i.theValue)),this.baseGoto(i.frame,e)}}initAnimate(){if(null==this.canvasHeight)throw new Error('init error');for(let t=0;t<this.preInitAnimates.length;t++){const i=this.preInitAnimates[t];1==this.usePercentages?this.baseAnimate(i.startTime,i.endTime,this.percToY(i.startValue),this.percToY(i.endValue)):this.baseAnimate(i.startTime,i.endTime,i.startValue,i.endValue)}}percToY(t){if(null==this.canvasHeight)throw'init error';return this.canvasHeight/100*t}}class W extends class extends class extends class extends class extends class extends class{constructor(){this.version='0.0.1',this.alwaysOn=!1,this.XAlignOpt=s,this.YAlignOpt=r,this.xAlign=this.XAlignOpt.Left,this.yAlign=this.YAlignOpt.Top,this.xRotate=this.XAlignOpt.Left,this.yRotate=this.YAlignOpt.Top,this.usePercentages=!0,this.width=new g(10),this.rotation=new g(0),this.opacity=new g(100),this.height=new g(10),this.drawLayer=t.MiddleGround,this.id=Math.random().toString(36).slice(2),this.style=new n,this.canvasWidth=null,this.canvasHeight=null,this.selected=!1,this.visible=new et(!0)}}{constructor(){super(),this.duration=0,this.insertTimeInVid=0}getEndTime(t=!0){let i=this.insertTimeInVid+this.duration;return t?1e3*i:i}getStartTime(t=!0){return t?1e3*this.insertTimeInVid:this.insertTimeInVid}setStartTime(t){return this.insertTimeInVid=t,this.insertTimeInVid}}{constructor(){super(),this.shadowColor='grey',this.shadowOffsetX=0,this.shadowOffsetY=0,this.shadowBlur=0}shadowsOff(){this.style.shadowBlur=0,this.style.shadowOffsetX=0,this.style.shadowOffsetY=0}setShadow(t=8,i=10,e=10,s='grey'){this.style.shadowBlur=t,this.style.shadowOffsetX=i,this.style.shadowOffsetY=e,this.style.shadowColor=s}shadowsOn(){this.style.shadowBlur=8,this.style.shadowOffsetX=10,this.style.shadowOffsetY=10,this.style.shadowColor='grey'}}{constructor(){super()}widthInPix(){return 0}heightInPix(){return 0}}{constructor(){super(),this.x=new b(0),this.y=new _(0),this.charsWidth=null}draw(t){return!0}random(t,i,e=1,s=100,r=1,h=100,n=60){this.x.random(t,i,e,s,n),this.y.random(t,i,r,h,n)}vibrate(t,i,e,s,r,h){this.x.vibrate(t,i,e,r,h),this.y.vibrate(t,i,s,r,h)}goto(t,i,e){return this.x.goto(t,i),this.y.goto(t,e),!0}animate(t,i,e,s,r,h){return this.x.animate(t,i,e,s),this.y.animate(t,i,r,h),!0}xAligned(){let t=this.x.value();switch(this.xAlign){case this.XAlignOpt.Left:break;case this.XAlignOpt.Mid:t-=this.widthInPix()/2;break;case this.XAlignOpt.Right:t-=this.widthInPix()}return t}yAligned(){let t=this.y.value();switch(this.yAlign){case this.YAlignOpt.Top:break;case this.YAlignOpt.Mid:t-=this.heightInPix()/2;break;case this.YAlignOpt.Bot:t-=this.heightInPix()}return t}xRotateAligned(){let t=this.xAligned();switch(this.xRotate){case this.XAlignOpt.Left:break;case this.XAlignOpt.Mid:t+=this.widthInPix()/2;break;case this.XAlignOpt.Right:t+=this.widthInPix()}return t}yRotateAligned(){let t=this.yAligned();switch(this.yRotate){case this.YAlignOpt.Top:break;case this.YAlignOpt.Mid:t+=this.heightInPix()/2;break;case this.YAlignOpt.Bot:t+=this.heightInPix()}return t}}{constructor(){super()}applyRotation(t){t.save(),t.translate(this.xRotateAligned(),this.yRotateAligned()),t.rotate(this.rotation.value()),t.translate(-this.xRotateAligned(),-this.yRotateAligned())}removeRotation(t){t.restore()}}{constructor(){super()}init(t){return this.canvasWidth=t.canvasWidth(),this.canvasHeight=t.canvasHeight(),this.x.init(this.usePercentages,this.canvasWidth),this.y.init(this.usePercentages,this.canvasHeight),!0}update(t,i){return this.x.update(t),this.y.update(t),this.visible.update(t),this.rotation.update(t),this.opacity.update(t),this.width.update(t),this.height.update(t),!0}removeOpacity(){this.opacity.set(1)}}class I extends u{constructor(t,i){super(t,t+3e3),this.theValue=i,this.usedOnce=!1,this._ret_val=null}update(t){return super.update(t)==h.Running&&0==this.usedOnce?(this._ret_val=this.theValue,this.usedOnce=!0):this._ret_val=null,this.filterState}}class k extends u{constructor(t,i,e=0){super(t,i),this.everyXFrame=e,this.delayCounter=0,this._ret_val=null}update(t){if(super.update(t),this.filterState==h.Running)if(this.delayCounter>=this.everyXFrame){this.delayCounter=0;const t=Math.floor(360*Math.random()),i=Math.floor(101*Math.random()),e=Math.floor(101*Math.random());this._ret_val=`hsl(${t},${i}%,${e}%)`}else this.delayCounter+=1;else this._ret_val=null;return this.filterState}}class C extends a{goto(t,i){const e=new I(t,i);this.filters.push(e)}random(t,i,e=0){const s=new k(t,i,e);this.filters.push(s)}}class A extends W{constructor(i='#efeee3'){super(),this.drawLayer=t.BackGround,this.color=new C(i)}init(t){return super.init(t),!0}update(t,i){return super.update(t,i),this.color.update(t),!0}widthInPix(){if(null!==this.canvasWidth)return this.canvasWidth;throw new Error('the component is not initialized yet')}heightInPix(){if(null!==this.canvasHeight)return this.canvasHeight;throw new Error('the component is not initialized yet')}draw(t){return t.drawBackground(this.color.value()),!0}}class B{constructor(){this.runningStartTimeTS=null,this.interval=null,this.msPerFrame=20,this._stopFlag=!0}isRunning(){return null!=this.runningStartTimeTS}shouldStop(){return this._stopFlag}stop(){return this.runningStartTimeTS=null,this._stopFlag=!0,!0}start(){return this._stopFlag=!1,!0}getMsDelta(){if(null==this.runningStartTimeTS)return 0;return(new Date).getTime()-this.runningStartTimeTS}}class P{constructor(){this.clearCanvasBwFrames=!0,this.loadDefaultBackground=!0}}class V{constructor(){this.compArray=[]}push(t){return this.compArray.push(t),t}init(t){for(let i=0;i<this.compArray.length;i++)this.compArray[i].init(t);return!0}drawByDrawLayer(t,i,e){for(let s=0;s<this.compArray.length;s++){let r=this.compArray[s];r.drawLayer==i&&this.qualifyForDraw(r,t)&&(e.save(),r.update(t,e),r.draw(e),e.restore())}return!0}qualifyForDraw(t,i){return 0!=t.visible.value()&&(1==t.alwaysOn||t.getStartTime(!0)<=i&&t.getEndTime(!0)>i)}len(){return this.compArray.length}}class E{constructor(t,i,e){this.comps=t,this.duration=i,this.charsWidth=e}append(t,i){if(t.charsWidth=this.charsWidth,i<1||void 0===i)throw new Error('for Insert operation to succeed you need component duration greater than 0');return t.duration=i,t.setStartTime(this.duration.len(!1)),this.duration.extend(t.duration),this.comps.push(t)}add(t,i,e){if(t.charsWidth=this.charsWidth,e<1||void 0===e)throw new Error('for Add operation to succeed you need component duration greater than 0');if(t.duration=e,t.setStartTime(i),t.getStartTime(!1)>this.duration.len(!1)&&this.duration.set(t.getStartTime(!1)),t.getEndTime(!1)>this.duration.len(!1)){let i=t.getEndTime(!1)-this.duration.len(!1);this.duration.extend(i)}return this.comps.push(t)}alwaysOn(t){return t.charsWidth=this.charsWidth,t.alwaysOn=!0,this.comps.push(t)}}class R{constructor(){this._pvt_duration_val=0}len(t=!0){return t?1e3*this._pvt_duration_val:this._pvt_duration_val}extend(t){return this._pvt_duration_val+=t,this._pvt_duration_val}set(t){return this._pvt_duration_val=t,this._pvt_duration_val}}class D{constructor(t='bilza',i=70){this.pack=new it(t,i),this.comps=new V,this.duration=new R,this.lastMsDelta=0,this.soundTrackElement=null,this.soundTrack=null,this.insert=new E(this.comps,this.duration,this.pack.charsWidth.bind(this.pack)),this.stopWatch=new B,this.set=new P,this.background=new A}init(){return null!==this.soundTrack&&(this.soundTrackElement=new Audio(this.soundTrack)),1==this.set.loadDefaultBackground&&this.insert.alwaysOn(this.background),this.comps.init(this.pack),!0}drawForStart(){let t=this.stopWatch.getMsDelta();return 0==this.stopWatch.shouldStop()&&window.requestAnimationFrame(this.drawForStart.bind(this)),this.lastMsDelta=t,this.draw_internal(t),!0}draw(t=0){this.init(),this.draw_internal(t)}draw_internal(i=0){if(null==this.pack)throw new Error('bilzaa is not initialized');i>=this.len(!0)&&this.stopWatch.stop(),1==this.set.clearCanvasBwFrames&&this.pack.clearCanvas(),this.comps.drawByDrawLayer(i,t.BackGround,this.pack),this.comps.drawByDrawLayer(i,t.MiddleGround,this.pack),this.comps.drawByDrawLayer(i,t.ForeGround,this.pack),this.drawEvent(i)}len(t=!0){return this.duration.len(t)}drawEvent(t){return!0}dynamicCanvas(t=95,i=null){return this.pack.dynamicCanvas(t,i),!0}start(){return null!==this.soundTrackElement&&this.soundTrackElement.play(),1!=this.stopWatch.isRunning()&&(this.stop(),this.init(),this.stopWatch.start(),this.stopWatch.runningStartTimeTS=(new Date).getTime(),window.requestAnimationFrame(this.drawForStart.bind(this)),!0)}stop(){return null!==this.soundTrackElement&&(this.soundTrackElement.pause(),this.soundTrackElement.currentTime=0),this.stopWatch.stop(),!0}resizeCanvas(t,i){this.pack.resizeCanvas(t,i)}getLastMsDelta(){return this.lastMsDelta}isRunning(){return this.stopWatch.isRunning()}}class M extends W{constructor(i='grey',e=10,s=10){super(),this.fontSize=12,this.cellWidthPerc=e,this.cellHeightPerc=s,this.colorHorizontalLines=i,this.colorVerticalLines=i,this.colorNumbers='black',this.showNumbers=!0,this.showHorizontalLines=!0,this.showVerticalLines=!0,this.lineWidthVertical=1,this.lineWidthHorizontal=1,this.lineDash=[],this.drawLayer=t.MiddleGround}draw(t){return this.draw_horizontal(t),this.draw_vertical(t),!0}draw_horizontal(t){let i=0,e=t.canvasWidth(),s=t.canvasHeight(),r=0+e;do{this.style.strokeStyle=this.colorHorizontalLines,this.style.lineDash=this.lineDash,this.style.lineWidth=this.lineWidthHorizontal,t.drawLine(0,i,r,i,this.style),1==this.showNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,Math.ceil(i),4,i+4)),i+=t.canvasHeight()/100*this.cellHeightPerc}while(s>i)}draw_vertical(t){let i=0,e=t.canvasWidth(),s=0+t.canvasHeight();do{this.style.strokeStyle=this.colorVerticalLines,this.style.lineWidth=this.lineWidthVertical,this.style.lineDash=this.lineDash,t.drawLine(i,0,i,s,this.style),1==this.showNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,Math.ceil(i),i+4,2)),i+=t.canvasWidth()/100*this.cellWidthPerc}while(e>i)}drawText(t,i,e,s){this.style.fontSize=this.fontSize,this.style.strokeStyle=this.colorNumbers,this.style.fillStyle=this.colorNumbers,t.drawText(i.toString(),e+this.lineWidthVertical-2,s+this.lineWidthHorizontal,this.style)}}class O extends W{constructor(t='#000000'){super(),this.color=t,this.lineWidth=new g(1)}update(t,i){return super.update(t,i),this.lineWidth.update(t),!0}widthInPix(){if(null!==this.canvasWidth)return Math.ceil(this.canvasWidth/100*this.width.value());throw new Error('the component is not initialized yet')}heightInPix(){if(null!==this.canvasHeight)return Math.ceil(this.canvasHeight/100*this.height.value());throw new Error('the component is not initialized yet')}draw(t){return this.style.fillStyle=this.color,this.style.strokeStyle=this.color,this.style.lineWidth=this.lineWidth.value(),t.drawRect(this.xAligned(),this.yAligned(),this.widthInPix(),this.heightInPix(),this.style),!0}}class z extends W{constructor(t='#000000'){super(),this.color=t}init(t){return super.init(t),!0}update(t,i){return super.update(t,i),!0}widthInPix(){if(null!==this.canvasWidth)return Math.ceil(this.canvasWidth/100*this.width.value());throw new Error('the component is not initialized yet')}heightInPix(){if(null!==this.canvasHeight)return Math.ceil(this.canvasHeight/100*this.height.value());throw new Error('the component is not initialized yet')}draw(t){return this.applyRotation(t),this.style.fillStyle=this.color,this.style.globalAlpha=this.opacity.value()/100,this.style.strokeStyle=this.color,t.drawFillRect(this.xAligned(),this.yAligned(),this.widthInPix(),this.heightInPix(),this.style),this.removeRotation(t),this.style.globalAlpha=1,!0}}class F extends W{constructor(i=100,e=100,s='#efe1e1'){super(),this.cellWidth=new g(i),this.cellHeight=new g(e),this.lineWidthVertical=new g(1),this.lineWidthHorizontal=new g(1),this.colorHorizontalLines=s,this.colorVerticalLines=s,this.drawLayer=t.MiddleGround,this.fontSize=8,this.colorNumbers='grey',this.flagDrawNumbers=!1,this.flagDrawHorizontal=!1,this.flagDrawVertical=!1,this.lineDash=[]}update(t,i){return super.update(t,i),this.cellWidth.update(t),this.cellHeight.update(t),this.lineWidthHorizontal.update(t),this.lineWidthVertical.update(t),!0}draw(t){return this.draw_horizontal(t),this.draw_vertical(t),!0}draw_horizontal(t){let i=0,e=t.canvasWidth(),s=t.canvasHeight(),r=0+e;do{this.style.strokeStyle=this.colorHorizontalLines,this.style.lineDash=this.lineDash,this.style.lineWidth=this.lineWidthHorizontal.value(),t.drawLine(0,i,r,i,this.style),1==this.flagDrawNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,i,0,i)),i+=this.cellHeight.value()}while(s>i)}draw_vertical(t){let i=0,e=t.canvasWidth(),s=0+t.canvasHeight();do{this.style.strokeStyle=this.colorVerticalLines,this.style.lineWidth=this.lineWidthVertical.value(),this.style.lineDash=this.lineDash,t.drawLine(i,0,i,s,this.style),1==this.flagDrawNumbers&&(this.style.strokeStyle=this.colorNumbers,this.drawText(t,i,i,0)),i+=this.cellWidth.value()}while(e>i)}drawText(t,i,e,s){this.style.fontSize=this.fontSize,this.style.strokeStyle=this.colorNumbers,this.style.fillStyle=this.colorNumbers,t.drawText(i.toString(),e+this.lineWidthVertical.value()-2,s+this.lineWidthHorizontal.value(),this.style)}}class H extends W{constructor(i='',s='#000000'){super(),this.content=i,this.fontSize=new g(50),this.fontFamily=e.Calibri,this.paddingLeft=new g(0),this.paddingRight=new g(0),this.paddingTop=new g(0),this.paddingBottom=new g(0),this.border=new g(0),this.colorBorder=s,this.colorBg=function(t,i){var e=!1;'#'==t[0]&&(t=t.slice(1),e=!0);var s=parseInt(t,16),r=(s>>16)+i;r>255?r=255:r<0&&(r=0);var h=(s>>8&255)+i;h>255?h=255:h<0&&(h=0);var n=(255&s)+i;return n>255?n=255:n<0&&(n=0),(e?'#':'')+(n|h<<8|r<<16).toString(16)}(s,225),this.color=s,this.showContent=!0,this.showBg=!1,this.showTextShadow=!1,this.showBgShadow=!1,this.showBorderShadow=!1,this.maxDisplayChars=200,this.drawLayer=t.MiddleGround}init(t){return super.init(t),!0}update(t,i){return super.update(t,i),this.paddingBottom.update(t),this.paddingLeft.update(t),this.paddingRight.update(t),this.paddingTop.update(t),this.border.update(t),this.fontSize.update(t),!0}heightInPix(){if(null==this.charsWidth)throw new Error('init error');return this.charsWidth('W',this.style.fontSize,this.style.fontFamily)+(this.paddingTop.value()+this.paddingBottom.value())}widthInPix(){if(null==this.charsWidth)throw new Error('init error');return this.charsWidth(this.content.substring(0,this.maxDisplayChars),this.fontSize.value(),this.fontFamily)+(this.paddingLeft.value()+this.paddingRight.value())}draw(t){return this.style.fillStyle=this.colorBg,this.style.strokeStyle=this.colorBg,this.style.globalAlpha=this.opacity.value()/100,this.drawBg(t,this.style,this.xAligned(),this.yAligned(),this.widthInPix(),this.heightInPix()),this.style.fillStyle=this.colorBorder,this.style.strokeStyle=this.colorBorder,this.drawBorder(t,this.style,this.xAligned(),this.yAligned(),this.border.value(),this.widthInPix(),this.heightInPix()),this.style.fillStyle=this.color,this.style.strokeStyle=this.color,this.style.fontSize=this.fontSize.value(),this.style.fontFamily=this.fontFamily,this.drawContent(t,this.style,this.content,this.xAligned(),this.yAligned(),this.maxDisplayChars,this.paddingLeft.value(),this.paddingTop.value(),this.showContent),!0}drawBorder(t,i,e,s,r,h,n){return!(r<=0)&&(i.lineWidth=r,t.drawRect(e-Math.ceil(r/2),s-Math.ceil(r/2),h+r,n+r,i),!0)}drawBg(t,i,e,s,r,h){return t.drawFillRect(e,s,r,h,i),!0}drawContent(t,i,e,s,r,h,n,a,l){if(0==l)return!1;t.drawText(e.substring(0,h),s+n,r+a,i)}}class X extends H{constructor(t='',i='#000000'){super(t,i),this.maxHeight=500}init(t){return super.init(t),this.applyBoth(t),!0}update(t,i){return this.applyBoth(i),super.update(t,i),!0}dynamicFontSize(t){const i=this.reqWdInPixForFontSize(t);this.style.fontSize=this.fontSize.value();for(let e=1;e<900;e++){if(t.charsWidth(this.content,e,this.style.fontFamily)>=i)return this.fontSize.set(e),this.style.fontSize=e,this.fontSize.value()}return null}reqWdInPixForFontSize(t){return t.canvasWidth()/100*this.width.value()-(this.paddingLeft.value()+this.paddingRight.value())}shrinkToFitMaxHeight(t){if(null==this.charsWidth)throw new Error('init error');const i=t.canvasHeight()/100*this.maxHeight-(this.paddingTop.value()+this.paddingBottom.value());if(this.charsWidth('W',this.style.fontSize,this.style.fontFamily)<i)return!0;for(let e=300;e>0;e--){if(t.charsWidth('W',e,this.style.fontFamily)<=i)return this.fontSize.set(e),this.style.fontSize=e,!0}return!0}applyBoth(t){this.dynamicFontSize(t),this.shrinkToFitMaxHeight(t)}}class L extends X{constructor(t='#008000'){super('',t),this.border.set(0),this.maxHeight=10}init(t){return super.init(t),!0}update(t,i){return super.update(t,i),this.content='sec:'+Math.ceil(t/1e3).toString(),!0}}class Y extends W{constructor(i=10,e='#008000',s=1){super(),this.drawLayer=t.MiddleGround,this.count=i,this.color=e,this.size=20,this.delay=60*s,this.delayCounter=this.delay}draw(t){if(null==this.canvasWidth||null==this.canvasHeight)throw new Error('init error');this.style.fillStyle=this.color,this.style.strokeStyle=this.color;for(let i=0;i<this.count;i++)t.drawCircle(Math.random()*this.canvasWidth,Math.random()*this.canvasHeight,this.size,!0,0,2*Math.PI,this.style);return!0}}class G extends W{constructor(i,e=10,s=10){if(super(),this.width.set(e),this.height.set(s),this.img=new Image,this.img.src=i,null==this.img)throw new Error('image could not be found');document.body.appendChild(this.img),this.orignalWidth=this.img.clientWidth,this.orignalHeight=this.img.clientHeight,this.img.style.display='none',this.drawLayer=t.MiddleGround}init(t){if(super.init(t),null==this.canvasWidth)throw new Error('init error');if(null==this.canvasHeight)throw new Error('init error');return this.img.setAttribute('width',this.widthInPix().toString()),this.img.setAttribute('height',this.heightInPix().toString()),!0}widthInPix(){if(null==this.canvasWidth)throw new Error('init error');return this.canvasWidth/100*this.width.value()}heightInPix(){if(null==this.canvasHeight)throw new Error('init error');return this.canvasHeight/100*this.height.value()}draw(t){return t.drawImage(this.img,this.xAligned(),this.yAligned(),this.widthInPix(),this.heightInPix()),!0}}class N extends W{constructor(i=0,e=0,s=20,r=20,h='#000000'){super(),this.x.setInitValue(i),this.y.setInitValue(e),this.x2=new b(s),this.y2=new _(r),this.lineWidth=new g(2),this.color=h,this.drawLayer=t.MiddleGround}init(t){if(super.init(t),null==this.canvasWidth||null==this.canvasHeight)throw new Error('init error');return this.x2.init(this.usePercentages,this.canvasWidth),this.y2.init(this.usePercentages,this.canvasHeight),!0}update(t,i){return super.update(t,i),this.x2.update(t),this.y2.update(t),this.lineWidth.update(t),!0}draw(t){return this.style.fillStyle=this.color,this.style.strokeStyle=this.color,this.style.lineWidth=this.lineWidth.value(),t.drawLine(this.x.value(),this.y.value(),this.x2.value(),this.y2.value(),this.style),!0}}class q extends u{constructor(t,i){super(t,t+3e3),this.theValue=i,this.usedOnce=!1,this._ret_val=null}update(t){return super.update(t)==h.Running&&0==this.usedOnce?(this._ret_val=this.theValue,this.usedOnce=!0):this._ret_val=null,this.filterState}}class J extends a{goto(t,i){const e=new q(t,i);this.filters.push(e)}}class U extends W{constructor(i='',s='#000000'){super(),this.content=new J(i),this.fontSize=new g(50),this.maxDisplayChars=new g(200),this.fontFamily=e.Calibri,this.color=s,this.drawLayer=t.MiddleGround}update(t,i){return super.update(t,i),this.fontSize.update(t),this.content.update(t),this.maxDisplayChars.update(t),!0}heightInPix(){if(null==this.charsWidth)throw new Error('init error');return this.maxDisplayChars.value()<1?0:this.charsWidth('W',this.style.fontSize,this.style.fontFamily)}widthInPix(){if(null==this.charsWidth)throw new Error('init error');return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.fontSize.value(),this.fontFamily)}draw(t){return this.style.globalAlpha=this.opacity.value()/100,this.style.fillStyle=this.color,this.style.strokeStyle=this.color,this.style.fontSize=this.fontSize.value(),this.style.fontFamily=this.fontFamily,this.applyRotation(t),this.drawContent(t),this.removeRotation(t),!0}drawContent(t){t.drawText(this.content.value().substring(0,this.maxDisplayChars.value()),this.xAligned(),this.yAligned(),this.style)}}class $ extends W{constructor(t='#ffff00'){super(),this.xAlign=this.XAlignOpt.Mid,this.yAlign=this.YAlignOpt.Mid,this.x.setInitValue(50),this.y.setInitValue(50),this.color=t}widthInPix(){return 0}heightInPix(){return 0}draw(t){return this.style.fillStyle=this.color,this.style.strokeStyle=this.color,t.drawFillRect(this.x.value(),this.y.value(),4,4,this.style),!0}}class j extends W{constructor(t='#000000'){super(),this.color=new C(t),this.filled=new et(!0)}widthInPix(){if(null!==this.canvasWidth)return Math.ceil(this.canvasWidth/100*this.width.value());throw new Error('the component is not initialized yet')}heightInPix(){return this.widthInPix()}draw(t){return this.style.fillStyle=this.color.value(),this.style.globalAlpha=this.opacity.value()/100,this.style.strokeStyle=this.color.value(),t.beginPath(),t.drawCircle(this.xAligned()+this.widthInPix()/2,this.yAligned()+this.widthInPix()/2,this.widthInPix()/2,this.filled.value(),0,2*Math.PI,this.style),t.stroke(),!0}}class Z{static circle(t='red'){return new j(t)}static marker(t='red'){return new $(t)}static pic(t,i=10,e=10){return new G(t,i,e)}static staticGrid(t=100,i=100,e='#efe1e1'){return new F(t,i,e)}static grid(t='grey',i=10,e=10){return new M(t,i,e)}static rect(t='#000000'){return new O(t)}static fillRect(t='#000000'){return new z(t)}static frameCounter(t='#000000'){return new L(t)}static bgCircles(t=10,i='#008000',e=1){return new Y(t,i,e)}static plainText(t='',i='#000000'){return new H(t,i)}static rawText(t='',i='#000000'){return new U(t,i)}static text(t='',i='#000000'){return new X(t,i)}static line(t=0,i=0,e=20,s=20,r='#000000'){return new N(t,i,e,s,r)}}class K{constructor(t){!function(t){const i=document.getElementById('slider');if(null==i)throw new Error('slider error');const e=i;e.min='0',e.max=t.len(!1).toString(),e.value='0',setInterval((()=>{1==t.isRunning()&&(e.value=Math.ceil(t.getLastMsDelta()/1e3))}),500),e.addEventListener('input',(i=>{t.draw(1e3*i.target.value)}))}(t);const i=document.getElementById('start');if(null===i)throw new Error('start button not found');this.start=i,this.start.addEventListener('click',(i=>{t.start()}));const e=document.getElementById('stop');if(null===e)throw new Error('stop button not found');this.stop=e,this.stop.addEventListener('click',(i=>{t.stop(),slider.value=0,t.draw(0)}))}}function Q(t){let i=t/16;return Math.ceil(9*i)}function tt(t){return t>100?100:t<0?0:t}class it{constructor(t,i=80){this.canvasId=t,this.canvas=function(t='bilza'){let i=document.getElementById(t);if(null==i){let i=document.createElement('canvas');if(document.getElementsByTagName('body')[0].appendChild(i),i.id=t,i.style.position='static',null==i)throw new Error('canvas not found');return i}{let e=i;if(e.id=t,e.style.position='static',null==e)throw new Error('canvas not found');return e}}(this.canvasId),this.dynamicCanvas(i,null),this.ctx=this.getNewCtx()}getNewCtx(){let t=this.canvas.getContext('2d');if(null==t)throw new Error('could not obtain drawing context');return t}drawBackground(t='blue'){return this.ctx.fillStyle=t,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle}canvasWidth(){return this.canvas.width}canvasHeight(){return this.canvas.height}quadraticCurveTo(t,i,e,s){this.commitCtxData(s),this.beginPath(),this.moveTo(t.x,t.y),this.ctx.quadraticCurveTo(e.x,e.y,i.x,i.y),this.stroke()}restore(){this.ctx.restore()}save(){this.ctx.save()}drawImage(t,i,e,s,r){this.ctx.drawImage(t,i,e,s,r)}clearCanvas(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}charsWidth(t,i,e){this.ctx.save(),this.setFont(i,e);let s=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(s)}textWidth(t,i){this.ctx.save(),this.commitCtxData(i);let e=this.ctx.measureText(t).width;return this.ctx.restore(),Math.ceil(e)}drawLine(t,i,e,s,r){this.commitCtxData(r),this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}line(t,i,e,s){this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(e,s),this.ctx.stroke()}beginPath(){this.ctx.beginPath()}closePath(){this.ctx.closePath()}moveTo(t,i){this.ctx.moveTo(t,i)}lineTo(t,i,e){this.commitCtxData(e),this.ctx.lineTo(t,i)}fill(t){this.commitCtxData(t),this.ctx.fill()}stroke(){this.ctx.stroke()}drawRect(t,i,e,s,r){this.commitCtxData(r),this.ctx.beginPath(),this.ctx.rect(t,i,e,s),this.ctx.stroke()}drawFillRect(t,i,e,s,r){this.commitCtxData(r),this.ctx.fillRect(t,i,e,s)}arcTo(t,i,e,s=20){this.commitCtxData(e),this.ctx.arcTo(t.x,t.y,i.x,i.y,s)}drawCircle(t=0,i=0,e=25,s=!1,r=0,h=2*Math.PI,n){this.commitCtxData(n),this.ctx.beginPath(),this.ctx.arc(t,i,e,r,h,!1),1==s&&this.ctx.fill(),this.ctx.stroke()}textBaseline(t){switch(t){case'top':this.ctx.textBaseline='top';break;case'middle':case'bottom':this.ctx.textBaseline='middle';break;case'alphabetic':this.ctx.textBaseline='alphabetic';break;case'hanging':this.ctx.textBaseline='hanging'}}drawText(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(t,i,e)}drawIcon(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.fillText(String.fromCharCode(t),i,e)}drawTextstroke(t,i,e,s){this.commitCtxData(s),this.ctx.textBaseline='top',this.ctx.strokeText(t,i,e)}commitCtxData(t){null!==t.lineCap&&(this.ctx.lineCap='round'),null!==t.globalAlpha&&(this.ctx.globalAlpha=t.globalAlpha),null!==t.shadowBlur&&(this.ctx.shadowBlur=t.shadowBlur),null!==t.shadowOffsetY&&(this.ctx.shadowOffsetY=t.shadowOffsetY),null!==t.shadowOffsetX&&(this.ctx.shadowOffsetX=t.shadowOffsetX),null!==t.lineWidth&&(this.ctx.lineWidth=t.lineWidth),null!==t.shadowColor&&(this.ctx.shadowColor=t.shadowColor),null!==t.strokeStyle&&(this.ctx.strokeStyle=t.strokeStyle),null!==t.fillStyle&&(this.ctx.fillStyle=t.fillStyle),null!==t.lineDash&&this.ctx.setLineDash(t.lineDash),this.setFont(t.fontSize,t.fontFamily)}setFont(t,i){let e=`${t}px ${i}`;this.ctx.font=e}xPerc(t){let i=this.setBwZeroNhundred(t);return Math.ceil(this.canvas.width/100*i)}yPerc(t){let i=this.setBwZeroNhundred(t);return this.canvas.height/100*i}setBwZeroNhundred(t){return t<0?0:t>100?100:t}dynCanvasWidth(t=80){return window.innerWidth/100*tt(t)}dynCanvasHeight(t,i=null){return null!==i?window.innerHeight/100*tt(i):Q(t)}resizeCanvas(t,i){this.canvas.width=t,this.canvas.height=i??Q(t)}dynamicCanvas(t=95,i=null){let e=this.dynCanvasWidth(t);return this.resizeCanvas(e,this.dynCanvasHeight(e,i)),!0}rotate(t,i=!1){const e=t*(Math.PI/180);0==i?this.ctx.rotate(e):this.ctx.rotate(-e)}translate(t,i){this.ctx.translate(t,i)}setTransform(t=1,i=0,e=0,s=1,r=0,h=0){this.ctx.setTransform(t,i,e,s,r,h)}}class et extends a{}export{et as AniBoolean,C as AniColor,g as AniNumber,W as BaseComponent,D as Bilza,Z as CompFactory,t as DrawLayer,e as FontFamily,it as Pack,n as Style,K as Ui,s as XAlignOpt,r as YAlignOpt,D as default};
