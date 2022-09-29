


export default class Alignment {

x: 0|1|2;
y: 0|1|2;
constructor(x :0|1|2=0,y :0|1|2=0){
this.x=x;
this.y=y;
}

align(x :0|1|2=0,y :0|1|2=0){
    this.x=x;
    this.y=y;
}
xAlignment():0|1|2{
    return this.x;
}
yAlignment():0|1|2{
    return this.y;
}
}