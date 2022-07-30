import SpriteSheet from "../components/spriteSheet/spriteSheet.js";
import SpriteSheetOpt from "../components/spriteSheet/spriteSheetOpt.js";
import ghosts from "./ghosts.js";

export default class PremadeSpriteSheets {

static emoji():SpriteSheet{
const g = new SpriteSheet("../images/emoji.png",72,72,16,10);
return g;    
}
static ghosts(imgUrl :string):SpriteSheetOpt{
const g = ghosts(imgUrl);
return g;    
}


}