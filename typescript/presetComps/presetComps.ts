import {IComponent} from "../Bilza.js";
import jumbotron from "../presetComps/jumbotron.js";

export default class PresetComps {

static jumbotron(startFrame :number=1,endFrame :number=2, content :string="Jumbotron",colorHax :string = "#000000"):IComponent{
return jumbotron(startFrame,endFrame, content,colorHax)
}


}