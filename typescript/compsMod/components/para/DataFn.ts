import CompDataBase from "../../../BaseComponent/CompDataBase.js";  

export class ObjectData extends CompDataBase{

listGapFactor :number;
border :number;
maxDisplayCharsPerLine :number;
colorFont :string;
colorBorder :string;
colorBg :string;

constructor(){
super();
this.listGapFactor = 1; 
this.maxDisplayCharsPerLine = 70; 
this.border = 1; 
this.colorFont = "black"; 
this.colorBorder = "black";
this.colorBg =  "white";

}
};
 

export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
