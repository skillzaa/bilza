
import Bilzaa2d from "../bilzaa2d/bilzaa2d.js";
import Text,{TextTemplates} from "../components/text/text.js";

let bilzaa = new Bilzaa2d();
let a = TextTemplates.normal("Red","red");
a.x=50;
a.y=5;;
bilzaa.add_comp(a);

let b = TextTemplates.normal("Blue","blue");
b.x=5;
b.y=25;;
bilzaa.add_comp(b);

let c = TextTemplates.shadow("Shadow","blue");
c.x=5;
c.y=45;;
bilzaa.add_comp(c);

console.log("b",bilzaa);

bilzaa.start();