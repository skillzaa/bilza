import Bilza, { Ui } from "./bilza.js";
import Row from "./components/row/row.js";
let bil = new Bilza("bilza", 70);
const row = new Row(["An", "Apple", "a", "day"]);
row.goto(0, 1, 50);
bil.insert.add(row, 0, 50);
const ui = new Ui(bil);
bil.draw();
