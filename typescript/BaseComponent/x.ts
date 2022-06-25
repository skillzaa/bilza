import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designBC/preInitGoto.js";

export default class X extends AniNumber {
// private aniNo:AniNumber;
private preInitGotos:PreInitGoto[];

constructor(defaultValue :number=0){
super(defaultValue);    
this.preInitGotos = []; 
}

}