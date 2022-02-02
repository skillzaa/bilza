
export default class CompData  {

startFrame :number; //cant be null
x :number | null;
y :number | null;

constructor(startFrame :number = 0){
this.startFrame = startFrame;
this.x = null;
this.y = null;
}

}