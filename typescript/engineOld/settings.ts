import { Pack } from "../bilza";



export default class Settings {
    clearCanvasBwFrames :boolean;
    loadSystemBackground :boolean;
    pack :Pack;
constructor(pack :Pack){
this.clearCanvasBwFrames  = true;
this.loadSystemBackground  = true;
this.pack  = pack;
}
disableOpacity(){
this.pack.disableOpacity = true;
}
enableOpacity(){
this.pack.disableOpacity = false;
}
}//settings