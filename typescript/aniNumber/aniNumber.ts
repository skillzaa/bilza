import PreInitIncDec from "./preInitIncDec.js";
import IFilter from "./IFilter.js";

export default class AniNumber {
private _ret_value :number;
protected filters :IFilter[];

//--the component width and height can change without init dynamically so we need fn to get updated value of canvasWidth and canvasHeight 
protected compWidth    : null | (()=>number) ;
protected compHeight   : null | (()=>number) ;
protected canvasWidth  :number | null; 
protected canvasHeight :number | null;

//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
constructor(defaultValue :number=0){
    this._ret_value  = defaultValue; 
    this.filters = [];
    //--
    this.compWidth = null;
    this.compHeight = null;
    this.canvasWidth = null;
    this.canvasHeight = null;
}
//zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
init(compWidth :()=>number,compHeight :()=>number,canvasWidth :number, canvasHeight :number): boolean {
    this.compWidth = compWidth;
    this.compHeight = compHeight;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    return true;
}

update(msDelta :number):boolean{
this.runFilters(msDelta);
return true;    
}
public value():number{
return this._ret_value;
}


private runFilters(msDelta :number){
    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];
        // ani.init(p);
        ani.update(msDelta);
        let v  = ani.value(); 
        if ( v != null){
            //--place 3 of 3 where _ret_value is changed
            this._ret_value = v;
            // console.log("msDelta",msDelta,"value",this._ret_value);
        }
} 
}


} 