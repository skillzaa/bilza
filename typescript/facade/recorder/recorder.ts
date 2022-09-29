import BaseCompDb from "../comps/baseCompDb.js";
import TextDb from "../comps/textDb.js";




export default class Recorder {

comps : BaseCompDb[];    
    
constructor(){
this.comps = [];

}
addText(id :string,startTime :number,endTime :number){
const txt = new TextDb(id,startTime,endTime);
this.comps.push(txt);
}


getComps(){
return this.comps;    
}
getCompById(id:string):BaseCompDb |null{
for (let i = 0; i < this.comps.length; i++) {
    const comp = this.comps[i];
    if (comp.id == id){return comp;}
}
return null;
}
/////////////////////////////////////////////////
}