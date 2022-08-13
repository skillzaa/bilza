import IFilter from "../../filters/IFilter";

// export default interface IPercFilter <T> extends IFilter<T> {
export default interface IPercFilter <T> {
    rTimeMsStart :number; rTimeMsEnd :number;
    
    setBaseValue(bv :T):T;
    update(rTimeMs: number): boolean; 
    animatedValue(): T;//a filter can never send null-- internally even if _ANIMATEDVALUE is null the baseValue should never be null 
    //--??
    init(canvasWidthHeight: number): boolean;
    // percToPix(perc :number ):number;
    responsive :boolean;
    
}
