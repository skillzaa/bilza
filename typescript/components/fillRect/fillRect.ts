import Pack from "../../pack/pack.js";
import Component from "../../EngineComponent/component.js";
import ComponentPack from "../../componentPack/componentPack.js";


//-14-july-2022 : There is no need to add any public prop width height and color are all added    
//--16-jul-2022 : This is the first completed comp.

export default class FillRect extends Component {

constructor (componentPack :ComponentPack,color :string="#000000"){ 

super(componentPack);

this.color.set(color) ; 
}

draw(p:Pack):boolean{
this.style.fillStyle = "blue";  
this.style.strokeStyle = "blue";  
this.style.opacity = 100;
// p.drawFillRect(100,100,300,300,this.style);
this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.fillStyle = "red";    
this.style.strokeStyle = "red";    
this.style.strokeStyle = this.color.value(); 
// ---------------------------------------
   p.drawFillRect(
     this.contentX(),
     this.contentY(),

    this.width.value(),this.height.value(),
    // 200,200
    this.style
    );
// ----------------------------
this.postDraw(p)
return true;
}
}