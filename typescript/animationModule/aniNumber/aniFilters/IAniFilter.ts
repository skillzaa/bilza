

export default interface IAniFilter <T> {
    init(canvasWidthHeight :number):boolean; 
    value(): null | T; 
    update(msDelta :number): boolean; 
    qualifyToRun(msDelta :number):boolean; 
} 
