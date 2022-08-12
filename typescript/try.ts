// import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";
import AniNumber from "./animationModule/aniNumber/aniNumber.js";

const no = new AniNumber(10);
no.update(10000);
console.log("anim-10000=100",no.value());
