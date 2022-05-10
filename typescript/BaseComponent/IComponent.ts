import Pack from "../pack/pack.js";
import {DrawLayer} from "../design/drawLayer.js";
import {DisplayTypeOptions} from "./displayTypeOptions.js";

/**
 * An IComponent is used and drawn. All the logic inside it has be deal with update and drawing- no business legic etc inside. That will come when we build systems.
 * The components (tools / items / objects) needs to be like lego pieces exposing just this.d.xyz and reacting to that.
 */

export default interface IComponent{
    //This is read only means cant be changed from outside and its value is set once in contructor internally.
    drawLayer:DrawLayer; //gone into an object--just like ObjectData


    
    //--we can set the start frame and end frame externally
    // getStartTime():number;
    // setStartTime(n :number):number;
    //--we can set the start frame and end frame externally
    // getEndTime():number;
    // setEndTime(n :number):number;
    
    //--we can get the width and height thus we can use components into array and trees like table,list etc
    //-- since we have to use it externally thus Pack is always avaialbe
    // While using internally it shd be used when draw/update is called is called
    width(p :Pack):number;
    height(p :Pack):number;
//---init is one time settings unlike update it is run on required basis
    init(p :Pack):boolean; 
    //--UPDATE SHD NOT HAVE DRAW FUNCTIONS
    //--if we decide not to send Pack to update since pack has drawing functions i must break pack into 2 groups, the draw fn and the non draw fns. one goes to update and the other to draw.
    update(ms :number, p :Pack):boolean; //second not frame 
    //finally
    draw(p :Pack):boolean; 

    ///----check collision
    checkCollision(x :number,y :number, p :Pack):boolean;
    resize(width :number,height :number):number;
//---------------
getEndTime(inMilliSec ?:boolean) :number;
getStartTime(inMilliSec ?:boolean) :number;
displayType :DisplayTypeOptions;
displayTypeOptions:typeof DisplayTypeOptions
}
