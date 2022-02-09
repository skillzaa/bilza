import Grid from "../../corecomps/grid/grid.js";
export default function DashedGrid() {
    let g = new Grid();
    g.style.fillStyle = "red";
    g.style.shadowOffsetX = 0;
    g.style.shadowOffsetY = 0;
    g.style.lineWidth = 1;
    g.style.fontSize = 15;
    g.lineStyle.strokeStyle = "#dee1e2";
    g.lineStyle.fillStyle = "green";
    g.lineStyle.fontSize = 2;
    g.lineStyle.lineWidth = 1;
    g.lineStyle.lineDashWidth = 15;
    g.lineStyle.lineDashGap = 5;
    // g.show_numbers = true;
    return g;
}
