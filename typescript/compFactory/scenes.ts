
import Scene  from "../scene/scene.js";
import h13bp from "../scenes/h13bp.js";
import swingJt from "../scenes/swingJt.js";
import jt from "../scenes/jt.js";

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

}
