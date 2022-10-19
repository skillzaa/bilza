import CompDb from "../compDb/compDb";

//////////////////////////////////////////////
export default class EntryAni {
private  comp:CompDb;    

constructor(comp :CompDb){
this.comp = comp;    
}

leftIn(){
this.comp.x.animate(
    this.comp.startTime,
    this.comp.startTime + 1,
    -this.comp.compWidth(), // in percent
    this.comp.x.valuePerc() ); // in percent
return this.comp;    
}

rightIn(){
this.comp.x.animate(
    this.comp.startTime,
    this.comp.startTime+1,
100 + this.comp.compWidth(), 
this.comp.x.valuePerc()
);
return this.comp;    
}

bottomIn(){
    this.comp.y.animate(
        this.comp.startTime,
        this.comp.startTime+1,
        100 + this.comp.compHeight(), 
        this.comp.y.valuePerc()
    );
return this.comp;    
}
topIn(){
    this.comp.y.animate(
    this.comp.startTime,
    this.comp.startTime+1,
    ( -this.comp.compHeight() ) ,
    this.comp.y.valuePerc()
    );
return this.comp;    
}

fadeIn(){
    this.comp.opacity.animate(
        this.comp.startTime,
        this.comp.startTime+1,
    0,100
    );
return this.comp;    
}
/////////////////////////////////////////////////
}