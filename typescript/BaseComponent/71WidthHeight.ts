import Shadow from "./80Shadow.js";

export default class WidthHeight extends Shadow {

constructor (){
    super();
}
//--- if the comp width !== contentWidth the over-ride this method
contentWidth(): number {
    return this.width.value();
}
/**
 * 15-july-2022 : content height and also content width will always return width and height prop (that every comp has) as per its percentage to the current canvas size if "responsiveDims == true" else just return raw number. 
 * This is the default behaviour of the component :: IF WE WANT TO OVER RIDE THIS BEHAVIOUR THEN OVERRIDE THE contentWidth and contentHeight methods.
 * Do not invent new props to denote width and height just every comp may apply them differently thus explain that there e.g in rawText width = fontSize;
 * Other than very special cases : Try that every comp should widen and shrink with width and height prop. IN RESPONSIVE AS WELL AS NON RESPONSIVE MODE. this is the core of this lib.
 * 16-july-2022 : added responsiveDims
 */
contentHeight(): number {
    return this.height.value();
}
//---------------------
// compWidth(): number {
//     //--Border is not included so border will grow outward where as the internal area of box is just padding from 4 sides and the content area in between.
//     return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value() + (this.border.value() * 2);
// }   
compWidth(): number {
    //--Border is not included so border will grow outward where as the internal area of box is just padding from 4 sides and the content area in between.
    return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value();
}   
// compHeight(): number {
// //--Border is not included    
// return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value() + (this.border.value() * 2);
// }
//---border is excluded from height
compHeight(): number {
//--Border is not included    
return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value();
}
} 