

export default interface IFilter {
    value(msDelta :number,oldValue :number): null | number; 
}
