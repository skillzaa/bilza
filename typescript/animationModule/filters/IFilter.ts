

export default interface IFilter <T> {
    rTimeMsStart :number;
    rTimeMsEnd :number;
    baseValue :T;
    update(rTimeMs: number): boolean; 
    animatedValue(): T;//a filter can never send null 
    //--??
    // init(canvasWidthHeight: number): boolean;
    // percToPix(perc :number ,canvasWidthHeight :number ):number;
    
}
