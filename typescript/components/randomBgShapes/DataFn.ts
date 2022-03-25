
export class ObjectData {
    msStart:number;
//////////////////////////
count :number;
constructor(){
this.msStart =0;
this.count = 200;
}
};


export default function DataFn ():ObjectData  {
let td = new ObjectData();
return td;
}
