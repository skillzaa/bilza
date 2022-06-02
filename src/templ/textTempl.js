import Text from "../components/text.js";
export default class TextTempl {
    static h1(content = "", colorHax = "#008000", x = 0, y = 0, dynWidth = 30) {
        let g = new Text(content, colorHax, x, y, dynWidth);
        g.showBg = true;
        return g;
    }
}
