import {DrawLayer,Pack,Style,AniNumber,AniBoolean} from "../../bilza.js";

/**
 * An IComponent is used and drawn. All the logic inside it has be deal with update and drawing- no business logic etc inside. That will come when we build systems.
 * The components needs to be like lego pieces exposing just this.xyz and reacting to that.
 */
/**
 * 30-june-2022 I have decided NOT to make width() and height() part of this interface since all components does not need it.
 * Also i am removing dynWidth and dynHeight since they too are not used by all
 * Also if i declare dynWidth or dynHeight here in later components some may need dynWidth as number and some comps may need it as AniNumber
 * Keep minimum requirements here of the system will collapse. 
 * Also in future comps I will keep "width" and "height" as dynWidth and dynHeight where as width() and height() will be widthInPix() and heightInPix()
 * 
 */
export default interface IComponent{

//-----Public Properties
    readonly id :string;

    drawLayer : DrawLayer; 
    duration :number;
    alwaysOn: boolean;
    visible: AniBoolean;
    version :string;
/**
 * 30-july-2022 : added since now all those component which implement this can be widened and shortened (scaled) using width.animate height.animate.
 */
    width :AniNumber;
    height :AniNumber;

//-----Public Objects
    style:Style; 
////////////////////////////////////////
// usePercentages is used in xy module and entire system is built around it. It means that using percentages OR pixes both are possible in all components.
responsiveCoordinates : boolean;
responsivePadding : boolean; 
    
//=============--- METHODS--------    
//---28-june-2022 --Basic methods
//--30-june-2022 the user should not see init. This is just for the engine and for component creator --??? what to do aboit it? i may need 2 interfaces
init(p :Pack):boolean; 

update(msDelta :number,p :Pack):boolean; //second not frame 

draw(p :Pack):boolean;
/**
 *--30-june-2022 : widthInPix and heightInPix added.
 From now on there is not confusion. "width" and "height" (IF APPLIED BY YHE COMPONENT) are both aniNumber where as the fol methods will just return the size of comp in pix
 */
compWidth():number;
compHeight():number;
///////////28-june-2022/////////// 
//-- This is one function reference that it gets so that it can directly access one function of the main "bilza" pack object.
//-- There can be more such functions but those functions can not make breaking changes just get information from rest of the system.
//-- I think there is no problem in a component getting information from the engine through function references as long as those functions just return information and MUST NOT HAVE SIDE EFFECTS inside engine. However after getting the information the component can make its own decisions.
//--Keep in mind a comp can only do one thing and that is to DRAW and nothing else.
///////////28-june-2022///////////
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);

contentWidth() :number;
contentHeight() :number;


setStartTime(n :number) :number;

getStartTime(inMilliSec ?:boolean) :number;

getEndTime(inMilliSec ?:boolean) :number;

goto(atFrame :number,x :number , y :number):boolean; 

animate(timeFrom :number,timeTo :number,
    xFrom :number,xTo :number, 
    yFrom :number,yTo :number,
    ):boolean;


}
