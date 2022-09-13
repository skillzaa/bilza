import Text from "../components/text/text.js";


export default class Lab{
comp :Text;

constructor(txt :Text){
this.comp = txt;    
this.comp.content.set("done");
}

attachTextBox(prop :string, value :string, conertToNo :boolean=false){

}

}