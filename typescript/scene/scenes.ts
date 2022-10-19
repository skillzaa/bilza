import {hsl} from "../bilza.js";
import Scene from "./scene.js";
//-------scenes--------------------
import jt from "../scenes/jt.js";
import swingJt from "../scenes/swingJt.js";
import twoSqHor from "../scenes/twoSqHor.js";
import twoSqVer from "../scenes/twoSqVer.js";
import fourSq from "../scenes/fourSq.js";
import eightSq from "../scenes/eightSq.js";
import sixSq from "../scenes/sixSq.js";
import hdg3bp from "../scenes/hdg3bp.js";
import hdg2bp from "../scenes/hdg2bp.js";
import hdg1bp from "../scenes/hdg1bp.js";
//---------------------------------------------------


export default class Scenes {
scene :Scene;
constructor(scene :Scene){
this.scene = scene;
}
///////////////////////////////////////    
 eightSq( colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180),colorSq7 :string= hsl(0),colorSq8 :string= hsl(100) ) {
 
const s =  eightSq( this.scene ,colorSq1,colorSq2,colorSq3,colorSq4,colorSq5,colorSq6 ,colorSq7,colorSq8 );
}

///////////////////////////////////////
 sixSq( colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180)) {
const s =  sixSq( this.scene ,colorSq1,colorSq2,colorSq3,colorSq4,colorSq5,colorSq6);
}
///////////////////////////////////////
 fourSq ( colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(300) ) {
const s = fourSq( this.scene ,colorSq1,colorSq2,colorSq3,colorSq4);
}
///////////////////////////////////////
 twoSqHor( colorSq1 :string= hsl(0),colorSq2 :string= hsl(120))  {
const s = twoSqHor( this.scene ,colorSq1,colorSq2);
}
///////////////////////////////////////
 twoSqVer( colorSq1 :string= hsl(0),colorSq2 :string= hsl(120))  {

const s = twoSqVer( this.scene ,colorSq1,colorSq2);

}

 swingJt (  content :string="Welcome To Bilza.js", hslColorNo :number= 0 )  {
const s = swingJt( this.scene ,content, hslColorNo);

}

 jt (  content :string="Welcome To Bilza.js", hslColorNo :number= 0 )  {
const s = jt( this.scene ,content, hslColorNo);

}
///////////////////////////////////////////////
 hdg3bp( hslColorNo :number =240, 
titleContent:string="",bp1Content  :string="",bp1EntryTime :number=0,
bp2Content  :string="",bp2EntryTime :number=0,bp3Content  :string="",    
bp3EntryTime :number=0,ftNoteContent  :string="",ftNoteEntryTime :number=0,titleY :number= 5){
const s = hdg3bp( this.scene ,hslColorNo,
    titleContent,
    bp1Content,bp1EntryTime,
    bp2Content,bp2EntryTime,
    bp3Content,bp3EntryTime,
    ftNoteContent,ftNoteEntryTime,
    titleY);

}
///////////////////////////////////////////////
 hdg2bp( hslColorNo :number =240, 
titleContent:string="",bp1Content  :string="",bp1EntryTime :number=0,
bp2Content  :string="",bp2EntryTime :number=0, ftNoteContent  :string="",ftNoteEntryTime :number=0,titleY :number= 5){
const s = hdg2bp( this.scene ,hslColorNo,
    titleContent,
    bp1Content,bp1EntryTime,
    bp2Content,bp2EntryTime,
    ftNoteContent,ftNoteEntryTime,
    titleY);

}
 hdg1bp( hslColorNo :number =240, 
titleContent:string="",bp1Content  :string="",bp1EntryTime :number=0,
ftNoteContent  :string="",ftNoteEntryTime :number=0,titleY :number= 5){
const s = hdg1bp( this.scene ,hslColorNo,
    titleContent,
    bp1Content,bp1EntryTime,
    ftNoteContent,ftNoteEntryTime,
    titleY);

}


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
}