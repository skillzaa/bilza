export default function corePropsToEngineComp(compDb, engineComp) {
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
    engineComp.version = compDb.version;
    engineComp.width.set(compDb.width.value());
    engineComp.x.set(compDb.x.value());
    engineComp.xAlign = (compDb.xAlign);
    engineComp.yAlign = compDb.yAlign;
    engineComp.y.set(compDb.y.value());
    engineComp.xRotate = compDb.xRotate;
    engineComp.yRotate = compDb.yRotate;
    return engineComp;
}
