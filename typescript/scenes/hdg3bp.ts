import Scene from "../scene/scene.js";
// import  {hsl} from "../bilza.js";


export default function h13bp ( 
    scene :Scene, 
    //------------------   
    hslColorNo :number =240, 
    //------------------   
    titleContent:string="",

    bp1Content  :string="",    
    bp1EntryTime :number=0,    
    
    bp2Content  :string="",    
    bp2EntryTime :number=0,    
    
    bp3Content  :string="",    
    bp3EntryTime :number=0,
    
    ftNoteContent  :string="",    
    ftNoteEntryTime :number=0,
    //------------------
    titleY :number= 5
    ):Scene{

if (titleContent !== ""){
    const txt = scene.add().text(titleContent).templ.hdg();
    txt.y.set(titleY);
    txt.theme.color(hslColorNo);
    txt.entryAni.topIn()
    txt.exitAni.fadeOut();
}

//-------------------------------Bp01
if (bp1Content !== ""){
const bltPt = scene.add(bp1EntryTime,0).text(bp1Content);

bltPt.templ.bltPt(1,35,7) .theme.color(hslColorNo)
                       .entryAni.fadeIn()
                       .exitAni.fadeOut();
}
//-------------------------------Bp02
if (bp2Content !== ""){
const bltPt02 = scene.add(bp2EntryTime,0).text(bp2Content);

bltPt02.templ.bltPt(1,55,7).theme.color(hslColorNo)
                       .entryAni.fadeIn()
                       .exitAni.fadeOut();
}
//-------------------------------Bp03
if (bp3Content !== ""){
const bltPt03 = scene.add(bp3EntryTime,0).text(bp3Content);

bltPt03.templ.bltPt(1,75,7).theme.color(hslColorNo)
                       .entryAni.fadeIn()
                       .exitAni.fadeOut();
}
//------------------------------footNote
if (ftNoteContent !== ""){
const ftnt = scene.add(ftNoteEntryTime,).text(ftNoteContent);
ftnt.templ.ftNote(0,92,5);
ftnt.theme.color(hslColorNo);
ftnt.entryAni.leftIn();
ftnt.exitAni.fadeOut();
}
//----------------------------------------
return scene;
}
