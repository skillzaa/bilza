import CompDb from "../compDb/compDb";

//////////////////////////////////////////////
export default class ExitAni {
private  comp:CompDb;    

constructor(comp :CompDb){
this.comp = comp;    
}

leftOut(){
this.comp.x.animate(
    this.comp.endTime - 1,
    this.comp.endTime,
    this.comp.x.valuePerc() , // in percent
    -this.comp.compWidth() ); // in percent
return this.comp;    
}

rightOut(){
this.comp.x.animate(
    this.comp.endTime - 1,
    this.comp.endTime,
    this.comp.x.valuePerc(),
100 + this.comp.compWidth() 
);
return this.comp;    
}

bottomOut(){
    this.comp.y.animate(
        this.comp.endTime - 1,
        this.comp.endTime,
        this.comp.y.valuePerc(),
        100 + this.comp.compHeight() 
    );
return this.comp;    
}
topOut(){
    this.comp.y.animate(
        this.comp.endTime - 1,
    this.comp.endTime,
    this.comp.y.valuePerc() ,
    ( -this.comp.compHeight() ) 
    );
return this.comp;    
}

fadeOut(){
    this.comp.opacity.animate(
        this.comp.endTime - 1,
        this.comp.endTime,
    100, 0
    );
return this.comp;    
}
/////////////////////////////////////////////////
}