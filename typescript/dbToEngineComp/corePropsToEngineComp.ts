import IEngineComp from "../component/IEngineComp.js";
import ComponentDb from "../componentFacade/componentDb.js";

/***
 * corePropsToEngineComp function get a componentDb object and extract core props from it to assign it to An engine comp (through IEngineComp)
 * - Both the compDb and engineComp are obtained and not created 
 */


export default function corePropsToEngineComp(compDb :ComponentDb,engineComp :IEngineComp):IEngineComp{
    
    //--set out of this function
    // engineComp.id = compDb.id; --taken care of
    engineComp.alwaysOn = compDb.alwaysOn;
    engineComp.border.set(compDb.border.value());
    engineComp.color.set(compDb.color.value());
    engineComp.colorBackground.set(compDb.colorBackground.value());
    engineComp.colorBorder.set(compDb.colorBorder.value());
    engineComp.drawLayer = compDb.drawLayer;
    engineComp.height.set(compDb.height.value());
    engineComp.opacity.set(compDb.opacity.value());

    engineComp.paddingBottom.set(compDb.paddingBottom.value());
    engineComp.paddingLeft.set(compDb.paddingLeft.value());
    engineComp.paddingRight.set(compDb.paddingRight.value());
    engineComp.paddingTop.set(compDb.paddingTop.value());
    
    engineComp.rotation.set(compDb.rotation.value());
    engineComp.showBackground.set(compDb.showBackground.value());
    engineComp.version = compDb.version ;
    engineComp.width.set(compDb.width.value());
    engineComp.x.set(compDb.x.value());
    engineComp.xAlign = (compDb.xAlign );

    engineComp.yAlign = compDb.yAlign;
    engineComp.y.set(compDb.y.value());

    engineComp.xRotate = compDb.xRotate;
    engineComp.yRotate = compDb.yRotate;

return engineComp;    
}