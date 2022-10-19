// import Bilza, {Ui, CompFactory as cf,hsl,Scene,getRandom} from "../bilza.js";
import Scene from "../scene/scene.js";

export default function hdg1bp ( 
    scene :Scene, 
    //------------------   
    hslColorNo :number =240, 
    //------------------   
    titleContent:string="",

    bp1Content  :string="",    
    bp1EntryTime :number=0,    
    
    ftNoteContent  :string="",    
    ftNoteEntryTime :number=0,
    //------------------
    titleY :number= 25
    ):Scene{

if (titleContent !== ""){
    const txt = scene.add().text(titleContent).templ.hdg(1,titleY);
    txt.theme.color(hslColorNo);
    txt.entryAni.topIn()
    txt.exitAni.fadeOut();
}

//-------------------------------Bp01
if (bp1Content !== ""){
const bltPt = scene.add(bp1EntryTime,0).text(bp1Content);

bltPt.templ.bltPt(1,55,7) .theme.color(hslColorNo)
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
