

export default class AniPropDb<T> {

protected _value :T    

constructor(_value :T){
this._value = _value;
}

set(_value :T){
this._value = _value;    
}
value():T{
return this._value;
}
}