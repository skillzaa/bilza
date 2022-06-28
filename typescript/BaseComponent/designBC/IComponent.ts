import {DrawLayer,Pack,Style} from "../../bilza.js";

/**
 * An IComponent is used and drawn. All the logic inside it has be deal with update and drawing- no business logic etc inside. That will come when we build systems.
 * The components (tools / items / objects) needs to be like lego pieces exposing just this.xyz and reacting to that.
 */

export default interface IComponent{

//-----Public Properties
    readonly id :string;
    usePercentages : boolean; 
    drawLayer : DrawLayer; 
    duration :number;//---------?
    alwaysOn: boolean;
    version :string;

//-----Public Objects
    style:Style; 

//=============--- METHODS--------    
//---28-june-2022 --Basic methods
init(p :Pack):boolean; 

update(msDelta :number,p :Pack):boolean; //second not frame 

draw(p :Pack):boolean;
///////////28-june-2022/////////// 
//-- This is one function reference that it gets so that it can directly access one function of the main "bilza" pack object.
//-- There can be more such functions but those functions can not make breaking changes just get information from rest of the system.
//-- I think there is no problem in a component getting information from the engine through function references as long as those functions just return information and MUST NOT HAVE SIDE EFFECTS inside engine. However after getting the information the component can make its own decisions.
//--Keep in mind a comp can only do one thing and that is to DRAW and nothing else (for now)
///////////28-june-2022///////////
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);

getStartTime(inMilliSec ?:boolean) :number;

setStartTime(n :number) :number;

getEndTime(inMilliSec ?:boolean) :number;

goto(atFrame :number,x :number , y :number):boolean; 

animate(timeFrom :number,timeTo :number,
    xFrom :number,xTo :number, 
    yFrom :number,yTo :number,
    ):boolean;


}
