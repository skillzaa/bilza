// import Bilza, {IComponent, Ui,CompFactory as cf,hsl } from "../bilza.js";

// let bil = new Bilza("bilza", 70);
// bil.background.color.set(hsl(240,100,18));

// bil.insert.alwaysOn(cf.grid(hsl(60,50,30)));
// const fc = cf.frameCounter(hsl(60,50,30));
// fc.goto(0,20,0);
// bil.insert.alwaysOn(fc);


// const fill = cf.fillRect(hsl(30));
// attachGotoTest(fill,0);
// bil.insert.add(fill,0,20);

// const circle = cf.circle(hsl(30));
// circle.showBackground.set(true);
// circle.colorBackground.set(hsl(60));
// attachGotoTest(circle,10);
// bil.insert.add(circle,10,20);//start time and duration (not end time)
// ///////////////////////////////////////

// const txt = cf.text("Text Demo",hsl(30));
// attachGotoTest(txt,20);
// bil.insert.add(txt,20,20);//start time and duration (not end time)'

// const txtRaw = cf.text("Raw Text Demo",hsl(30));
// attachGotoTest(txtRaw,30);
// bil.insert.add(txtRaw,30,20);//start time and duration (not end time)'
// /////////////////////////////////////////////////////
// const ui = new Ui(bil);
// bil.draw(); //-------------------------------------//
// /////////////////////////////////////////////////////

// function attachGotoTest(comp :IComponent,startingTime :number=1000){
// comp.goto(startingTime + 0,0,0);
// comp.goto(startingTime + 2000,10,10);
// comp.goto(startingTime + 4000,20,20);
// comp.goto(startingTime + 6000,30,30);
// comp.goto(startingTime + 8000,40,40);
// comp.goto(startingTime + 10_000,50,50);
// comp.goto(startingTime + 12000,60,60);
// comp.goto(startingTime + 14000,70,70);
// comp.goto(startingTime + 16000,80,80);
// comp.goto(startingTime + 18000,90,90);
// comp.goto(startingTime + 20000,100,100);
// }