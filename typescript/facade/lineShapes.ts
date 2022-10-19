import LineShapeFactory from "./lineShapesFactory.js";
import Linker from "./linker.js";
/**
 * LineShapes Assets:
 * This is a group of Assets based on Lines component. 
 * The purpose of LineShapes is to present simple shapes created with grouping lines and segmented-lines.
 * We can create new assets using the Lines comp however in LineShapes assets we have provided very limited options to edit and most of the decisions are made by the artist who created the asset.
 * An asset is ready to be consumed with min modifications.
 */
export default class LineShapes {
private linker :Linker;
constructor(linker :Linker){
this.linker = linker;
}

add(secStart :number,secEnd :number):LineShapeFactory{
const cf = new LineShapeFactory(this.getLinker(secStart,secEnd,"add"));
return cf;
}
alwaysOn():LineShapeFactory{
const cf = new LineShapeFactory(this.getLinker(0,1,"alwaysOn"));
return cf;
}
append(duration :number):LineShapeFactory{
const cf = new LineShapeFactory(this.getLinker(0,duration,"append"));
return cf;    
}
//////////////////////////////////////////////////

}