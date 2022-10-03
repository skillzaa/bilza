import AniPropDb from "./AniPropDb.js";
 

export default class AniNumberDb extends AniPropDb <number>{

private _isResp :boolean;
private theWhole :number | null;
     
constructor(initialValue :number){
super(initialValue)
this._isResp = false;
this.theWhole = null;
}
//////////////////////////////////////////////
private init(theWhole :number){
this.theWhole = theWhole;
}
private setResp(tf :boolean){
    this._isResp = tf;
}

isResponsive():boolean{
    return this._isResp;
}


public value():number{
        if (this._isResp == false){
            return super.value() ;
        }else {
            return this.responsiveValue(super.value());        
        }
}

public valueRaw():number{
    return super.value();
 
}

private responsiveValue(perc :number):number {
if (this.theWhole == null){throw new Error("init error");}
    return ((this.theWhole / 100) * perc);
}

//////////////////////////////////////////////
public animate(timeFrom :number,timeTo :number,xFrom :number,xTo :number){

}

}