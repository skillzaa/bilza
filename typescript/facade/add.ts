

export default class Add {

constructor(){

}

add(secStart :number,secEnd :number):CompFactory{
const cf = new CompFactory(secStart,secEnd,"add",this.insert.bind(this));
return cf;
}

}