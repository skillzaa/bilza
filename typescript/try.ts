import Bilza, {Ui,hsl,Scene,Scenes} from "./bilza.js";

let bil = new Bilza("bilza", 70);

bil.alwaysOn().grid(10,10,hsl(0,80,20));
bil.alwaysOn().frameCounter(0);
bil.background.color.set(hsl(240,30,10));

//=============================================
const title = bil.add(0,15).text("Arrow Point To / Goto",hsl(120))
    .templ.hdg(1,0).entryAni.topIn().exitAni.fadeOut();

bil.alwaysOn().marker(50,20,"red");
bil.alwaysOn().marker(50,30, hsl(60)  );
bil.alwaysOn().marker(50,40, hsl(120) );
bil.alwaysOn().marker(50,50, hsl(45)  );
bil.alwaysOn().marker(50,60, hsl(180) );
bil.alwaysOn().marker(50,70, hsl(240) );
bil.alwaysOn().marker(50,80, hsl(300) );
bil.alwaysOn().marker(50,90, hsl(200) );

const arrow = bil.add(0,25).arrow(10,50,20,50,hsl(0));

arrow.pointTo(2,50,20);
arrow.pointTo(4,50,30);
arrow.pointTo(6,50,40);
arrow.pointTo(8,50,50);
arrow.pointTo(10,50,60);
arrow.pointTo(12,50,70);
arrow.pointTo(14,50,80);
arrow.pointTo(16,50,90);
//-----------------return
arrow.pointTo(18,20,50);

const ui = new Ui(bil);
bil.draw();
