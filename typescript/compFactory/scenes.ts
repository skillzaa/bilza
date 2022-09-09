import Scene  from "../scene/scene.js";
import h13bp from "../scenes/h13bp.js";
import swingJt from "../scenes/swingJt.js";
import jt from "../scenes/jt.js";
import fourSq from "../scenes/fourSq.js";
import sixSq from "../scenes/sixSq.js";
import eightSq from "../scenes/eightSq.js";
import twoSqVer from "../scenes/twoSqVer.js";
import twoSqHor from "../scenes/twoSqHor.js";
import canvasBorder from "../scenes/canvasBorder.js";
//..............................................
import { hsl } from "../bilza.js";
////////////////////////////////////////////////////
export default class Scenes {


static h13bp(
    startTime :number,endTime :number, 
    //------------------   
    titleContent:string="",    
    bp1Content  :string="",    
    bp2Content  :string="",    
    bp3Content  :string="",    
    ftNoteContent  :string="",    
    //------------------   
    hslColorNo :number =240, 
    //------------------   
    bp1EntryTime :number=0,    
    bp2EntryTime :number=0,    
    bp3EntryTime :number=0,
    ftNoteEntryTime :number=0,
    //------------------
    bp1Y :number=35,
    bp2Y :number=55,
    bp3Y :number=75
):Scene{
return h13bp(
    startTime,endTime, 
    //------------------   
    titleContent,    
    bp1Content  ,    
    bp2Content  ,    
    bp3Content  ,    
    ftNoteContent,    
    //------------------   
    hslColorNo, 
    //------------------   
    bp1EntryTime,    
    bp2EntryTime,    
    bp3EntryTime,
    ftNoteEntryTime,
    //------------------
    bp1Y,
    bp2Y,
    bp3Y); 
    
}


static swingJt(startTime :number,endTime :number,content :string="Welcome To Bilza.js", hslColorNo :number= 0):Scene{
return swingJt(startTime,endTime,content, hslColorNo);
}    
static jt(startTime :number,endTime :number,content :string="Welcome To Bilza.js", hslColorNo :number= 0):Scene{
return jt(startTime,endTime,content, hslColorNo);
}    
static twoSqVer(startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120)):Scene{
return twoSqVer(startTime,endTime,colorSq1,colorSq2);
}    
static twoSqHor(startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120)):Scene{
return twoSqHor(startTime,endTime,colorSq1,colorSq2);
}    
static fourSq(startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(300) ):Scene{
return fourSq(startTime,endTime,colorSq1,colorSq2,colorSq3,colorSq4);
}    
static sixSq( startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(300),colorSq6 :string= hsl(180) ):Scene{
return sixSq( startTime,endTime,colorSq1,colorSq2,colorSq3,colorSq4,colorSq5,colorSq6);
}    

static eightSq( startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(300),colorSq6 :string= hsl(180),colorSq7 :string= hsl(0),colorSq8 :string= hsl(250) ):Scene{
return eightSq( startTime,endTime,colorSq1,colorSq2,colorSq3,colorSq4,colorSq5,colorSq6,colorSq7,colorSq8);
}    

static canvasBorder( startTime :number,endTime :number,color :string= hsl(0),borderWidth :number=5):Scene{
return canvasBorder(startTime,endTime,color,borderWidth);
}    












///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
///////////////
}
