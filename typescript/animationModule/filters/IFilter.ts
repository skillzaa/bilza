

export default interface IFilter <T> {
    responsive :boolean;
    rTimeMsStart :number;
    rTimeMsEnd :number;
    baseValue :T;
    update(rTimeMs: number): boolean; 
    animatedValue(): T;//a filter can never send null-- internally even if _ANIMATEDVALUE is null the baseValue should never be null 
    //--??
    init(canvasWidthHeight: number): boolean;
    percToPix(perc :number ):number;
    
}
