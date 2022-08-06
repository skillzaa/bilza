import SpriteSheet from "../components/spriteSheet/spriteSheet.js";
import SpriteSheetAlt from "../components/spriteSheet/spriteSheetAlt.js";
import ghosts from "./ghosts.js";

export default class PremadeSpriteSheets {

static emoji():SpriteSheet{
const g = new SpriteSheet("../images/emoji.png",72,72,16,10);
return g;    
}
static ghosts(imgUrl :string):SpriteSheetAlt{
const g = ghosts(imgUrl);
return g;    
}


}