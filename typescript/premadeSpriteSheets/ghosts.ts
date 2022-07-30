
import SpriteSheetOpt from "../components/spriteSheet/spriteSheetOpt.js";

export default function ghosts(imgUrl :string) :SpriteSheetOpt{

const ss = new SpriteSheetOpt(imgUrl);
ss.defineImage("blue",27,21,113,112);
ss.defineImage("greenAlien",146,18,116,109);
ss.defineImage("angel",263,20,135,116);
ss.defineImage("redDeamon",396,16,130,123);
ss.defineImage("robot",529,15,121,119);
ss.defineImage("windows",647,22,121,123);
ss.defineImage("military",26,140,118,130);
ss.defineImage("candy",144,140,109,130);
ss.defineImage("chocolate",269,140,134,130);
ss.defineImage("cowboy",402,140,126,130);
ss.defineImage("bowtie",525,140,128,130);
ss.defineImage("wall",653,140,123,130);
ss.defineImage("cat",27,272,121,130);
ss.defineImage("chinese",146,260,118,130);
ss.defineImage("japnese",257,279,139,121);
ss.defineImage("kid",398, 273,121,121);
ss.defineImage("ninja",523,269,121,123);
ss.defineImage("pirate",640, 281,123,111);
ss.defineImage("nurse",29,400,114,132);
ss.defineImage("cop",140,400,116,128);
ss.defineImage("santa",272,400,121,125);
ss.defineImage("queen",392,395,130,130);
ss.defineImage("punk",534,395,111,121);
ss.defineImage("checker",665,411,112,103);
ss.defineImage("stripes",277,529,111,100);
ss.defineImage("glasses",404,528,116,100);
return ss;
}
