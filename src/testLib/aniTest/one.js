import BaseTest from "../baseTest.js";
import AniNumber from "../../aniMod/aniNumber.js";
const tst = new BaseTest("AniNumber");
const aniNo = new AniNumber(0);
tst.toEqual(aniNo.value(0), 0);
