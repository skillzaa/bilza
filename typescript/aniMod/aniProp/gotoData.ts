


export default class GotoData <T>{

public msDelta :number;
public value :T;

constructor( msDelta :number , value :T){
    this.msDelta = msDelta;
    this.value = value;    
}

}