import Bilza from "../../src/Bilza.js";
let bil = new Bilza("bilza", 600, 300);
let g = bil.gridTempl.dashed();
let txt = bil.add.text(0, 60, "Text Sample", "red");
txt.d.x = 0;
txt.d.y = 0;
txt.d.shadowColor = "blue";
txt.d.xAlignment = txt.xAlignmentOptions.Left;
txt.d.yAlignment = txt.yAlignmentOptions.Top;
txt.d.content = "Fix Shadows";
txt.d.padding = 0;
txt.d.border = 10;
txt.d.dynWidth = 80;
txt.d.dynHeight = 30;
txt.d.colorBorder = "red";
txt.d.colorBg = "green";
txt.d.color = "blue";
txt.d.fontSize = 80;
txt.d.flagDrawContent = true;
txt.d.flagDrawBorder = true;
txt.d.flagDrawBg = true;
txt.d.flagTextShadow = true;
txt.d.flagBgShadow = true;
txt.d.flagBorderShadow = true;
txt.d.maxDisplayChars = 200;
txt.d.flagUseDynResize = false;
txt.d.flagShrinkHeightToFit = false;
txt.d.flagUseRelativeXY = false;
bil.drawInit();
let interval = setInterval(function () {
    bil.drawInit();
}, 150);
