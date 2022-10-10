import IComponent from "../../compDb/IComponent";


export default interface ILineSeg extends IComponent {

startX :number;
startY :number;
lineWidth  :number;

lineTo(x :number, y :number):void;
moveTo(x :number, y :number):void;
fill():void;

setLineCap(lineCap :"butt" | "square" | "round"):void;
getLineCap( ):"butt" | "square" | "round";

setLineJoin(lineJoin : "round" | "bevel" | "miter"):void;
getLineJoin(): "round" | "bevel" | "miter";

setLineDash(lineDash :[line :number, dash :number]):void;
getLineDash ( ):[line :number, dash :number];

setFilled(filled :boolean):boolean;
getFilled():boolean;

setClosed(closed :boolean):boolean;
getClosed():boolean;


}