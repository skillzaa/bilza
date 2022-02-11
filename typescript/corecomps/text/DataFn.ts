
    export class TextData {
    frameStart:number;
    x :number;
    y :number;
    content :string;

    constructor(){
    this.frameStart = 0;
    this.x = 0;
    this.y = 0;
    this.content =  "some text";
    }
};


export default function DataFn ():TextData  {
let td = new TextData();
return td;
}