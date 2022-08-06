
# What is Bilza

---
> Bilza is an easy to use Javascript framework/library for creating responsive animations on HTML5 canvas.
---
# Mission
- <strong>Ease of use</strong> : This library has no installations, built systems etc. Is usable with any project. Even primitive JavaScript knowledge is enough to start using it.
- <strong>Responsiveness</strong> : The drawings and animations will resize its self according to the host screen size. (The most difficult part of this library).
- <strong>Composable Animations</strong> : The library will try to provide more and more tools to enable the creator to compose larger animations using smaller animation like LEGO pieces. 
---
<h1><a href="https://skillzaa.github.io/bilzaDocs/">Documentation</a></h1>
<h1><a href="https://skillzaa.github.io/bilzaDocs/samples.html">Samples</a></h1>

<h2><a href="https://skillzaa.github.io/bilzaDocs/docs/detailedIntroduction.html">Detailed Introduction Bilza.js</a></h2>

## Installation

> npm install bilza

---

## Getting Started
![helloWorld](./images/helloWorld.png "helloWorld")
<pre>
<code>
import Bilza, { Ui,CompFactory as cf,hsl,TextTempl } from "./bilza.js";
//--Create Bilza engine
let bil = new Bilza("bilza", 70);
//--Create and add grid to engine
const grid = cf.grid("grey");
bil.insert.alwaysOn(grid);
//--create text, edit props, add animation and finally add text to engine
const txt = cf.rawText("Hellow World",hsl(240));
txt.x.set(30);
txt.y.set(30);
txt.width.oscillate(0,120,20,100,.15);
bil.insert.add(txt,0,120);
//--required for UI
const ui = new Ui(bil);
bil.draw(); 
</code>
</pre>


<small>If you want to be in touch or send me a bug report please use github issues.</small>

-----
###### 06-aug-2022   (version 0.0.30) //0 ver short of 0.1.0
###### 04-aug-2022   (version 0.0.29) //1 ver short of 0.1.0 
###### 26-july-2022   (version 0.0.28) //2 ver short of 0.1.0 
###### 25-july-2022   (version 0.0.27) //3 ver short of 0.1.0 
###### 23-july-2022   (version 0.0.26) //4 ver short of 0.1.0 
###### 22-july-2022   (version 0.0.25) 
###### 20-july-2022   (version 0.0.24) 
###### 13-july-2022   (version 0.0.23) 
###### 9-july-2022   (version 0.0.22) //Getting close to 0.1.0
###### 7-july-2022   (version 0.0.21) //also ver 0.0.20
###### 2-july-2022   (version 0.0.19) //release candidate for 0.1
###### 21-june-2022   (version 0.0.17) //also ver 0.0.18
###### 06-jun-2022   (version 0.0.16)
###### 03-jun-2022   (version 0.0.15)
###### 09-May-2022   (version 0.0.14)
###### 08-May-2022   (version 0.0.13)
###### 15-Apr-2022   (version 0.0.12)
###### 28-March-2022 (version 0.0.11)
###### 27-March-2022 (version 0.0.10)
###### 26-March-2022 (version 0.0.7)
###### 25-March-2022 (version 0.0.5)



