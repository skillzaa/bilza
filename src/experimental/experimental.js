import Icon from "../components/icon.js";
export default class Experimental {
    static Icon(code = 9876, colorHax = "#008000") {
        let g = new Icon(code, colorHax);
        return g;
    }
}
