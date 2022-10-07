// import Pack from "../../pack/pack.js";
// import compEngine from "../../compEngine/compEngine.js";
// import CompDb from "../../compDb/compDb.js";

// import {AniNumberDb,AniBooleanDb, AniColorDb} from "../../animationsFacade/animationsDb.js";
// import Arc from "./arc.js";
// import IArc from "./IArc.js";


// export default class ArcDb extends CompDb implements IArc {
//    // startX      : AniNumberDb;
//    // startY      : AniNumberDb;
//    midX        : AniNumberDb;
//    midY        : AniNumberDb;
//    endX        : AniNumberDb;
//    endY        : AniNumberDb;
//    lineWidth   : AniNumberDb;

// constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,  startX :number ,startY :number,midX :number,midY :number,endX :number,endY :number, color:string="black"){

// super(startTime,endTime,insertAction,canvasWidth,canvasHeight);

// this.x.set(startX);
// this.y.set(startY);

// // this.startX      = new AniNumberDb(startX);
// // this.startY      = new AniNumberDb(startY);
// this.midX        = new AniNumberDb(midX);
// this.midY        = new AniNumberDb(midY);
// this.endX        = new AniNumberDb(endX);
// this.endY        = new AniNumberDb(endY);
// this.lineWidth   = new AniNumberDb(1);
// ///////////////////////////////////
// this.color.set(color);
// this.lineWidth = new AniNumberDb(1);
// } 
 
// getEngineComp(pack :Pack):compEngine{
//    const comp = new Arc(this,pack);
//    return comp; 
// }


// }