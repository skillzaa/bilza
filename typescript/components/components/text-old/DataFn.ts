import {FontNames} from "../../bilzaa2d/pack/fontNames.js";
    export class ObjectData {
    frameStart:number;
    x :number;
    y :number;
    content :string;
    //----------
    showBorder :boolean;
    borderColor :string;
    borderWidth :number;
    margin :number;
    padding :number;
    
    showBackground : boolean;    
    backgroundColor :string;
    
    underline :boolean;
    underlineColor :string;
    underlineWidth :number;
    overlineColor :string;
    overline :boolean;
    
    fontSize :number;
    fontName : FontNames;    
    fontColor : string;    
    

    constructor(){
    this.frameStart = 0;
    this.x = 0;
    this.y = 0;
    this.content =  "some text";
    this.showBorder = true;
    this.borderColor = "black";
    this.borderWidth = 8;
    this.margin = 2;
    this.padding = 2;
    this.showBackground = true;    
    this.backgroundColor = "yellow";
    this.underline = true;
    this.underlineColor = "red";
    this.overline = true;    
    this.overlineColor = "red";    
    this.underlineWidth = 4;    
    this.fontSize = 200;
    this.fontName = FontNames.Georgia;    
    this.fontColor = "crimson";    
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}