import Text from "../components/text/text.js";
export default function slide02() {
    let txt = new Text(0, 10, "Another Text", "red");
    txt.d.x = 50;
    txt.d.y = 50;
    txt.d.shadowColor = "blue";
    txt.d.xAlignment = txt.xAlignmentOptions.Mid;
    txt.d.yAlignment = txt.yAlignmentOptions.Mid;
    txt.d.content = "Another Text";
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
    txt.d.flagUseRelativeXY = true;
    return txt;
}
