import AniNumberDb from "../propTypes/AniNumberDb.js";
import AniStringDb from "../propTypes/AniStringDb.js";
import AniColorDb from "../propTypes/AniColorDb.js";
import AniBooleanDb from "../propTypes/AniBooleanDb.js";



export default class CoreProps {
////////////////////////////////////////////
//--25-9-2022 -- xx CORE props 
////////////////////////////////////////////    
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
public compType :string;

constructor(){
this.id = Math.random().toString(36).slice(2);
this.compType = "base";
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
}


/////////////////////////////////////////////////////    
}