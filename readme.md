###### 25-March-2022 (version 0.0.5)
###### 26-March-2022 (version 0.0.7)

# What is Bilza.js

---
> Bilza.js is a javascript framework for creating business and educational visualizations in the browser using HTML5 canvas.
---


## What Bilza is Not
 - Bilza is NOT fast, currently I am running it on 1 frame per second which by any animation standerds is as low as it gets.
 - Bilza is not an animation framework.
 - Bilza is not a game engine.
 - The output code is simple javascript which will draw its content on a HTML5 canvas.
- Bilza is not interactive (since its a lot of work, may be some day).

## How Bilza Works (the layman explanation)
- Bilza gets the id of a canvas element (if not then creates one) and then draw onto it what ever you tell it to draw.
- You can use bilza to just draw an image onto canvas or to run an animation /presentation. You have to spicify the duration of the animation /presentation.
- The drawing is done throught components like Text, Counter, Grid, List etc etc.
- Every component also has a start time and an end time. If a Text component has start time = 2000 ms and end time = 10,000 ms; in this case the said text will be visible on the screen only between second 2 and 10.
- Every component has a ton of properties / attributes. These peoperties are accessable throught **objectName.data.propertyName** or simple **objectName.d.propertyName**.
- We can create a component and then change any of its properties to suit our selves.
- Component properties are like fontSize, colorText, lineWidth etc. One can change any of these properties and when the component is draw it will reflect those changes. *A component is always drawn as per the current state of the properties*. 
- We also do have a large collection (working on it) of templates. Templates are pre-styled components to save you time.
- So we can create a component and then alter its properties **BUT** we can also change those properties at some specic time. We can do so by adding **Transitions** to components. *A Transition is just a time and a set of properites of that component. Bilza will apply those properties to the component at the time specified*.
- Using **components** , **component properties** and **transitions** we can create animations that we can run in the browser using HTML5 canvas.
- Once the animation is created we can run and stop it like a normal video (work in progress).

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





