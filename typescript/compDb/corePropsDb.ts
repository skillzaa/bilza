import AniNumberDb from "../animationsFacade/AniNumberDb.js";
import AniStringDb from "../animationsFacade/AniStringDb.js";
import AniColorDb from "../animationsFacade/AniColorDb.js";
import AniBooleanDb from "../animationsFacade/AniBooleanDb.js";


export default class CorePropsDb  {
////////////////////////////////////////////
//--25-9-2022 -- xx CORE props 
////////////////////////////////////////////    
//--here readonly is ok but not in compEngine
public readonly id :string;
public border :AniNumberDb;
public colorBackground :AniColorDb;
public colorBorder :AniColorDb;
public color :AniColorDb;
public drawLayer :0|1|2|3|4;
public selected: boolean;
public height :AniNumberDb;
public rotation :AniNumberDb;
public opacity :AniNumberDb;
public paddingTop    :AniNumberDb;        
public paddingBottom :AniNumberDb;         
public paddingRight  :AniNumberDb;         
public paddingLeft   :AniNumberDb;         
public showBackground :AniBooleanDb;
public visible: AniBooleanDb;
public version :string;
public width :AniNumberDb;
public x :AniNumberDb;
public y :AniNumberDb;
/////////////////////////////////////////////
public alwaysOn :boolean;

public xAlign  : 0|1|2;  
public yAlign  : 0|1|2;  
public xRotate : 0|1|2;  
public yRotate : 0|1|2;  



////////////////////////////////////
startTime :number;
endTime :number;
insertAction :"add"|"append" | "alwaysOn";

////////////////////////////////////
constructor(startTime :number,endTime :number,insertAction :"add"|"append" | "alwaysOn"){

this.id = Math.random().toString(36).slice(2);
this.startTime = startTime;
this.endTime = endTime;
this.insertAction = insertAction;
if (this.insertAction == "alwaysOn"){
    this.alwaysOn = true;
}else {
    this.alwaysOn = false;
}

///////////////
this.drawLayer = 2;

this.border = new AniNumberDb(0);
this.colorBackground = new AniColorDb("white");
this.colorBorder = new AniColorDb("black");
this.color = new AniColorDb("black");
this.height = new AniNumberDb(10);
this.opacity = new AniNumberDb(100);
this.paddingTop = new AniNumberDb(0);
this.paddingBottom = new AniNumberDb(0);
this.paddingRight = new AniNumberDb(0);
this.paddingLeft = new AniNumberDb(0);
this.rotation = new AniNumberDb(0);
this.selected = false;
this.showBackground = new AniBooleanDb(false);
this.visible = new AniBooleanDb(true);
this.version = "0.1.2";
this.width = new AniNumberDb(10);
this.x = new AniNumberDb(0);
this.y = new AniNumberDb(0);

/////////////////
this.xAlign =0;
this.yAlign =0;
this.xRotate =0;
this.yRotate =0;


}

/////////////////////////////////////////////////////    
}