

export default interface IFilter <T> {
    rTimeMsStart :number; rTimeMsEnd :number;
    
    responsive :boolean;
    baseValue :T;
    update(rTimeMs: number): boolean; 
    animatedValue(): T;//a filter can never send null-- internally even if _ANIMATEDVALUE is null the baseValue should never be null 
    //--??
    init(canvasWidthHeight: number): boolean;
    percToPix(perc :number ):number;
    
}
