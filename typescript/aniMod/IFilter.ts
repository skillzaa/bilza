

export default interface IFilter <T> {
    value(): null | T; 
    update(msDelta :number,oldValue :T): boolean; 
    qualifyToRun(msDelta :number):boolean; 
}
