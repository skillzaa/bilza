import Bilza, { Ui,CompFactory as cf } from "./bilza.js";

let bil = new Bilza("bilza",70);
// bil.resizeCanvas(1000,500);
bil.background.color.set("#182b89");
//----------------------------------
const g = cf.grid();
bil.insert.alwaysOn(g);

const hdg = cf.text("Particle System","red");
hdg.width.set(30);
hdg.x.setInitValue(100);
hdg.xAlign = hdg.XAlignOpt.Right;
bil.insert.alwaysOn(hdg);

const particleSystem01 = getParticles();
particleSystem01.x.animate(2,20,0,100);

const particleSystem02 = getParticles(90,40,20,"yellow");
particleSystem02.x.animate(0,20,90,0);

const particleSystem03 = getParticles(0,80,200,"white");
particleSystem03.width.set(100);

const ui = new Ui(bil);
bil.draw();
//----------------------


function getParticles(x=0,y=0,count=20,color="red",delay=20){
    const particleSystem = cf.circleParticles(count,color,delay);
    particleSystem.size = 5;
    particleSystem.count = count;
    particleSystem.width.set(30);
    particleSystem.height.set(30);
    particleSystem.x.setInitValue(x);
    particleSystem.y.setInitValue(y);
    particleSystem.opacity.set(80);
    bil.insert.add(particleSystem,0,25);
    return particleSystem;
}