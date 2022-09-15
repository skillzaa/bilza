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

///////////////////////////////////////    
static eightSq(startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180),colorSq7 :string= hsl(0),colorSq8 :string= hsl(100) ):Scene{

const s =  eightSq(startTime,endTime,colorSq1,colorSq2,colorSq3,colorSq4,colorSq5,colorSq6 ,colorSq7,colorSq8 );
return s;
}
///////////////////////////////////////
static sixSq(startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(60),colorSq5 :string= hsl(0),colorSq6 :string= hsl(180)):Scene{

const s =  sixSq(startTime,endTime,colorSq1,colorSq2,colorSq3,colorSq4,colorSq5,colorSq6);
return s;
}
///////////////////////////////////////
static fourSq (startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120),colorSq3 :string= hsl(240),colorSq4 :string= hsl(300) ):Scene{
const s = fourSq(startTime,endTime,colorSq1,colorSq2,colorSq3,colorSq4);
return s;    
}
///////////////////////////////////////
static twoSqHor(startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120)):Scene {

const s = twoSqHor(startTime,endTime,colorSq1,colorSq2);
return s;
}
///////////////////////////////////////
static twoSqVer(startTime :number,endTime :number,colorSq1 :string= hsl(0),colorSq2 :string= hsl(120)):Scene {

const s = twoSqVer(startTime,endTime,colorSq1,colorSq2);
return s;
}

static swingJt ( startTime :number,endTime :number,content :string="Welcome To Bilza.js", hslColorNo :number= 0 ):Scene {
const s = swingJt( startTime,endTime,content, hslColorNo);
return s;
}

static jt ( startTime :number,endTime :number,content :string="Welcome To Bilza.js", hslColorNo :number= 0 ):Scene {
const s = jt( startTime,endTime,content, hslColorNo);
return s;
}
///////////////////////////////////////////////
static hdg3bp(startTime :number,endTime :number,hslColorNo :number =240, 
titleContent:string="",bp1Content  :string="",bp1EntryTime :number=0,
bp2Content  :string="",bp2EntryTime :number=0,bp3Content  :string="",    
bp3EntryTime :number=0,ftNoteContent  :string="",ftNoteEntryTime :number=0,titleY :number= 5){
const s = hdg3bp(startTime,endTime,hslColorNo,
    titleContent,
    bp1Content,bp1EntryTime,
    bp2Content,bp2EntryTime,
    bp3Content,bp3EntryTime,
    ftNoteContent,ftNoteEntryTime,
    titleY);
return s;
}
///////////////////////////////////////////////
static hdg2bp(startTime :number,endTime :number,hslColorNo :number =240, 
titleContent:string="",bp1Content  :string="",bp1EntryTime :number=0,
bp2Content  :string="",bp2EntryTime :number=0, ftNoteContent  :string="",ftNoteEntryTime :number=0,titleY :number= 5){
const s = hdg2bp(startTime,endTime,hslColorNo,
    titleContent,
    bp1Content,bp1EntryTime,
    bp2Content,bp2EntryTime,
    ftNoteContent,ftNoteEntryTime,
    titleY);
return s;
}
static hdg1bp(startTime :number,endTime :number,hslColorNo :number =240, 
titleContent:string="",bp1Content  :string="",bp1EntryTime :number=0,
ftNoteContent  :string="",ftNoteEntryTime :number=0,titleY :number= 5){
const s = hdg1bp(startTime,endTime,hslColorNo,
    titleContent,
    bp1Content,bp1EntryTime,
    ftNoteContent,ftNoteEntryTime,
    titleY);
return s;
}


///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
}