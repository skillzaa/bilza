import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
import {OffScreenXOpt,OffScreenYOpt,XAlignment,YAlignment} from "../bilza.js";
/**
 * An IComponent is used and drawn. All the logic inside it has be deal with update and drawing- no business legic etc inside. That will come when we build systems.
 * The components (tools / items / objects) needs to be like lego pieces exposing just this.d.xyz and reacting to that.
 */

export default interface IComponent{
    //This is read only means cant be changed from outside and its value is set once in contructor internally.
    drawLayer:DrawLayer; 
    alwaysOn :boolean;
    offScreenXOpt :typeof OffScreenXOpt;
    offScreenYOpt :typeof OffScreenYOpt;

    
//---init is one time settings unlike update it is run on required basis
    init(p :Pack):boolean; 
    //--UPDATE SHD NOT HAVE DRAW FUNCTIONS
    //--if we decide not to send Pack to update since pack has drawing functions i must break pack into 2 groups, the draw fn and the non draw fns. one goes to update and the other to draw.
    update(msDelta :number,p :Pack):boolean; //second not frame 
    //finally
    draw(p :Pack):boolean; 
    charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
    ///----check collision
    checkCollision(x :number,y :number, p :Pack):boolean;
    // resize(width :number,height :number):number;

//----insert/displayType ==> 1append-2Timed-3AlwaysShow
getStartTime(inMilliSec ?:boolean) :number;
//--no need for a public startTime variable just use fns
setStartTime(n :number) :number;

duration :number;
//--correct
getEndTime(inMilliSec ?:boolean) :number;
///////////////////////////////////////////////////

goto(atFrame :number,x :number|OffScreenXOpt , y :number|OffScreenYOpt,xAlign ?:XAlignment,yAlign ?:YAlignment,xExtra ?:number,yExtra ?:number):boolean; 

animate(timeFrom :number,timeTo :number,
    xFrom :number |OffScreenXOpt,xTo :number |OffScreenXOpt, yFrom :number|OffScreenYOpt,yTo :number |OffScreenYOpt,
    
    xAlignFrom ?:XAlignment,xAlignTo ?:XAlignment,
    yAlignFrom ?:YAlignment,yAlignTo ?:YAlignment,
    
    xExtraFrom ?:number,xExtraTo ?:number,yExtraFrom ?:number,yExtraTo ?:number):boolean;

///////////////////////////////////////////////////////

}
