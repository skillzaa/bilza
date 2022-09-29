

export default class AniPropDb<T> {

public initialValue :T    
constructor(initialValue :T){
this.initialValue = initialValue;
}

set(initialValue :T){
this.initialValue = initialValue;    
}
}