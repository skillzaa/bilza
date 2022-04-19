import CompDataBase from "../../design/CompDataBase.js";  



export class ObjectData extends CompDataBase{

listStartY :number;
listGapFactor :number;
applyWdHtPerc :boolean;
maxLiChars :number;
flagStartDim :boolean;
constructor(){
super();
this.listStartY = 30; 
this.listGapFactor = 10; 
this.applyWdHtPerc = false; 
this.maxLiChars = 50; 
this.flagStartDim = true;

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
