


export default class Settings {
public readonly debugMode :boolean;    
//--keep most of variables private and just export functions.
private readonly fixBugWarning :boolean;    
constructor(){
this.debugMode = true;
this.fixBugWarning = true;
}
fixBugWarn(msg :string){
if (this.fixBugWarning == true){
    console.warn(msg);
}

}

}//settings