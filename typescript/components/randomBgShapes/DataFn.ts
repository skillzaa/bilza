
export class ObjectData {
frameStart:number;
//////////////////////////
count :number;
constructor(){
this.frameStart =0;
this.count = 200;
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
