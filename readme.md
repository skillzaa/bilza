###### 25-March-2022 (version 0.0.5)

# What is Bilza.js

---
> Bilza is a framework for creating javascript presentations, slides and educational content.
---

## What Bilza is Not
 
 - Bilza is NOT fast. Currently I am running it on 1 frame per second. which by any animation standerds is as low as it gets.
 - Bilza is not an animation framework.
 - Bilza is not a game engine.
  
## How Bilza Works
1. First **create a bilza instance** giving it the dimentions of the canvas element that we want to create and the length of the animation in milli seconds (1 minute = 60,000 ms).
2. Secondly We **add some components** to this bilza instance. We specify the starting time and ending time (again in milli seconds) for each component. A component is just displayed during its given start time and end time only.
3. Thirdly if we want we can add **Transitions**, which means that at a specif time our components can change its properties.
4. Finally draw / Run the app.
---
## Installation

> npm install bilza

## Example : Hello World 

```javascript
//--You have to change the path if its different
import Bilza  from "./node_modules/bilza/index.js";
//---lets create a 15 seconds clip
let bilzaa = new Bilza("bilza",800,350,15000);

///-----Add components

//---Add a Grid
bilzaa.add.grid();

//---- Add a frame counter (counter)
bilzaa.add.frameCounter(0,300,bilzaa.getTimeEnd());
bilzaa.start();
```
---

### What is a Component 

> A component is what bilza library consumes. The only objective of bilza library is to draw components on the screen. That means that bilza library is extended through components.

###### At the moment some very basic components have been added like "Text" and "Grid".

## Example : Using Components with Transitions

```javascript
//--You have to change the path 
import Bilza  from "./node_modules/bilza/index.js";
//---lets create a 15 seconds clip
let bilzaa = new Bilza("bilza",800,350,15000);

///-----Add components
//---Add a Grid
bilzaa.add.grid();
//---- Add a frame counter (counter)
bilzaa.add.frameCounter(0,300,bilzaa.getTimeEnd());
//--Add text
let title = bilzaa.add.text("Introducing Bilza Library","yellow",40,0,
bilzaa.getTimeEnd(),50,20);

title.d.colorBorder = "red";
title.d.widthBorder = 3;
title.d.colorContentBg = "blue"
title.d.flagDrawBorder = true;
title.d.flagDrawContentArea = true;

//--- The list items
function createItem(content :string,msStart=0,y :number){
    let itemOne = bilzaa.add.text(content,"green",25,msStart,
    bilzaa.getTimeEnd(),10,y);
    let trans  = itemOne.addTransition(msStart + 1000);
    trans.flagDrawBorder = true;
    trans.colorBorder = "red";
    trans.fontColor = "yellow";
    trans.widthBorder = 5;
    }
//--show headings one by one

createItem("A framework for creating javascript presentations",2000,70);
createItem("Emphasis is on education",4000,120);
createItem("slides and presentation",6000,170);
createItem("formulas, tables, lists",8000,220);

///////////////////////////////
bilzaa.start();

```

**This library is still in early stages and is error prone. You should play with it but wait till version 1.0.0 for serious use.**


If you want to be in touch or send me a bug report please use github issues.
I will add some tests and then improve documentations.





