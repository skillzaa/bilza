
import SpriteSheetAlt from "../components/spriteSheet/spriteSheetAlt.js";

export default function ghosts(imgUrl :string) :SpriteSheetAlt{

const ss = new SpriteSheetAlt(imgUrl);
ss.defineSprite("blue",27,21,113,112);
ss.defineSprite("greenAlien",146,18,116,109);
ss.defineSprite("angel",263,20,135,116);
ss.defineSprite("redDeamon",396,16,130,123);
ss.defineSprite("robot",529,15,121,119);
ss.defineSprite("windows",647,22,121,123);
ss.defineSprite("military",26,140,118,130);
ss.defineSprite("candy",144,140,109,130);
ss.defineSprite("chocolate",269,140,134,130);
ss.defineSprite("cowboy",402,140,126,130);
ss.defineSprite("bowtie",525,140,128,130);
ss.defineSprite("wall",653,140,123,130);
ss.defineSprite("cat",27,272,121,130);
ss.defineSprite("chinese",146,260,118,130);
ss.defineSprite("japanese",257,279,139,121);
ss.defineSprite("kid",398, 273,121,121);
ss.defineSprite("ninja",523,269,121,123);
ss.defineSprite("pirate",640, 281,123,111);
ss.defineSprite("nurse",29,400,114,132);
ss.defineSprite("cop",140,400,116,128);
ss.defineSprite("santa",272,400,121,125);
ss.defineSprite("queen",392,395,130,130);
ss.defineSprite("punk",534,395,111,121);
ss.defineSprite("checker",665,411,112,103);
ss.defineSprite("stripes",277,529,111,100);
ss.defineSprite("glasses",404,528,116,100);
return ss;
}
