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

add( startTime :number, endTime :number):LineShapeFactory{
this.linker.setStartTime(startTime);    
this.linker.setEndTime(endTime);    
this.linker.setInsertAction("add");    
const cf = new LineShapeFactory(this.linker);
return cf;
}
alwaysOn():LineShapeFactory{
this.linker.setStartTime(0); //will not be used   
this.linker.setEndTime(1);    //will not be used
    this.linker.setInsertAction("alwaysOn");    
    const cf = new LineShapeFactory(this.linker);    
return cf;
}
append(duration :number):LineShapeFactory{
    this.linker.setStartTime(0);   //will not be used 
    this.linker.setEndTime(duration);        
    this.linker.setInsertAction("append");    
    const cf = new LineShapeFactory(this.linker);    
return cf;    
}
//////////////////////////////////////////////////

}