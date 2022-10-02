

export default class AniPropDb<T> {

private initialValue :T    
constructor(initialValue :T){
this.initialValue = initialValue;
}

set(initialValue :T){
this.initialValue = initialValue;    
}
value():T{
return this.initialValue;
}
}