import {IComponent} from "../Bilza.js";
import jumbotron from "../presetComps/jumbotron.js";
import topInHdg from "../presetComps/topInHdg.js";

export default class PresetComps {

static jumbotron(startFrame :number=1,endFrame :number=2, content :string="Jumbotron",colorHax :string = "#000000"):IComponent{
return jumbotron(startFrame,endFrame, content,colorHax)
}
static topInHdg(startFrame :number=1,endFrame :number=2, content :string="Top In Heading",colorHax :string = "#000000",yUpto :number = 2):IComponent{
return topInHdg(startFrame,endFrame, content,colorHax,yUpto);
}


}