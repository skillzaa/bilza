import Shadow from "./80Shadow.js";

export default class WidthHeight extends Shadow {

constructor (){
    super();
}
/**
 * 9-sep-2022
 * - Now  every number prop is AniNumber and there is no AniPerc.
 * - AniNumber has comp.value fn and a new fn called comp.valueNR
 * - comp.valueNR (value Non Responsive) will return the normal / raw value of the prop no matter if its in responsive or Non-responsive mode.
 * - comp.value will give normal value if AniNumber is not responsive mode BUT if it is in responsive mode it will give percentage BUT it needs to be init first.
 * - It mean comp.value will give error if used during compile time (if the prop is in responsive mode). So we can use comp.value during compile time only if we r sure that it will always be non-responsive.
 * -  comp.valueNR will not give error in responsive OR non-responsive mode.
 * - if we get a value from comp.valueNR during compile time. That value should some how get translated to responsive value -- if required.
 * - IF prop is in non-responsive mode both the comp.value and comp.valueNR both will give the same value.
 */
//--- if the comp width !== contentWidth the over-ride this method
contentWidth(): number {
    return this.width.value();
}
contentWidthNR(): number {
    return this.width.valueNR();
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
contentHeightNR(): number {
    return this.height.valueNR();
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
compWidthNR(): number {
    //--Border is not included so border will grow outward where as the internal area of box is just padding from 4 sides and the content area in between.
    return this.contentWidthNR() + this.paddingLeft.valueNR() + this.paddingRight.valueNR();
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
compHeightNR(): number {
//--Border is not included    
return this.contentHeightNR() + this.paddingTop.valueNR() + this.paddingBottom.valueNR();
}
} 