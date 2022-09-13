import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";
/**
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
    titleY :number= 5,
    bp1Y :number=35,
    bp2Y :number=55,
    bp3Y :number=75    
*/

export default function h13bp ( 
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
    titleY :number= 5,
    bp1Y :number=35,
    bp2Y :number=55,
    bp3Y :number=75
    ):Scene{
//----------------------------------------------
    const scene = new Scene(startTime,endTime);
//-----------------------------Title
if (titleContent !== ""){
    const txt = cf.text(titleContent,hsl(0));
    scene.add(txt); // this makes scene min-duration = 2
    txt.y.set(titleY);
    // txt.templ.h1(50,titleY);
    txt.theme.color(hslColorNo);
    txt.entryAni.topIn()
    txt.exitAni.fadeOut();
}

//-------------------------------Bp01
if (bp1Content !== ""){
const bltPt = cf.text(bp1Content);
scene.add(bltPt,bp1EntryTime);
bltPt.templ.bltPt(1,25,10) .theme.color(hslColorNo)
                       .entryAni.fadeIn()
                       .exitAni.fadeOut();
}
//-------------------------------Bp02
if (bp2Content !== ""){
const bltPt02 = cf.text(bp2Content);
scene.add(bltPt02,bp2EntryTime);

bltPt02.templ.bltPt(1,bp2Y,10).theme.color(hslColorNo)
                       .entryAni.fadeIn()
                       .exitAni.fadeOut();
}
//-------------------------------Bp03
if (bp3Content !== ""){
const bltPt03 = cf.text(bp3Content);
scene.add(bltPt03,bp3EntryTime);
bltPt03.templ.bltPt(1,bp3Y,10).theme.color(hslColorNo)
                       .entryAni.fadeIn()
                       .exitAni.fadeOut();
}
//------------------------------footNote
if (ftNoteContent !== ""){
const ftnt = cf.text(ftNoteContent);
scene.add(ftnt,ftNoteEntryTime);
ftnt.templ.ftNote(0,90,10);
ftnt.theme.color(hslColorNo);
ftnt.entryAni.fadeIn();
ftnt.exitAni.fadeOut();
}
//----------------------------------------
return scene;
}
