<a href="https://skillzaa.github.io/bilzaDocs/">Documentation</a>
&nbsp;
&nbsp;
<a href="https://skillzaa.github.io/bilzaDocs/samples.html">Samples</a>
---

# What is Bilza

---
> A Javascript Animation Engine for creating responsive animations on HTML5 Canvas.
---


# Philosophy Behind Bilza.js

1. I think that in year 2022 creating complex animations in Javascript should not be a black art. <b>Any body who has basic javascript knowledge should be able to create animations.</b>

1. The main purpose of bilza.js is <strong>to enable</strong> its users to create, share and edit "Javasscript Animation" just like they edit and share HTML files and normal Javascript code.   

1. There are many content types (e.g educational slides, business presentations etc) which we want to be presented like a video but should be edit-able like normal text (or a power point presentation). Incase of video format;  editing is very expensive and time consuming. On the other hand editing a javascript animation is just editing few commands.

1. Incase you want your message / presentation to reach millions of viewers and the message is in videos format: the file size will be atleast 2-10 Gb (and this is on the lowest side). Imgaine how many people will be reluctant to download such a heavy file or to share it. On the other hand a javascript animation is very light weight as compared to video format.  A javascript animation carrying the same message may have a filesize of few kilo Bites. The heaviest thing in a javascript animation is the sound file. 

1. You can share javascript animation just like you share a link to an html file. It can be hosted free of cost on github.

1. One of the things that I want to achieve is that:: Since the final output is a javascript file and once you have packed your presentation there should be no outer dependency for it. There should be  nothing out of the single file that can break and crash your animation. As long as browsers support javascript your animation should run. <b>BUT</b> The images and sound files that you use are external reasources and if they go missing your animation will not work. We can make effort to convert images and sound files also into Javascript BUT a better option is to bind them using an html file just like we have been doing for so many years on the web. 

1. Creating Responsive Animations: The single main pain point of creating javascript animation is <b> creating responsive animations</b>. We like to create animations but we also want them to fit themselves according to the many sizes of screens they are viewed on. For this the bilz.js has been written with responsiveness in mind and every thing grow and shrink according to the screen size. All the x and y coordinated and the width and height values are in percentages of the current canvas size and are drawn according. 

1. Animation is code and Code is Reusable : One of the basic purpose of this library is to enable users to stich together small pieces of animation and create complex animations.

1. It is not morally and ethically correct for any developers / apps to hold the data of its users as hostage. The hard work and effort that a user has put into creating an animation makes him the creator and owner of that animation. <i> I think its dishonesty if an app / lib does not allow its users to download their data in a user firendly format or make it difficult for its users to take their data and use another tool</i>. For this I wil make sure that there is always commands present in the library (working on it currently) which should enable the user to get their animation data in json format so that if they like they can use it else-where.  



# What Will Bilza.js Enable you to do ?

1. <i>Bilza.js will enable you to create Javascript animation that behave like a video</i>. You can "play", "pause", "stop" the animation just like a video. You can also "skip forward" ,  "skip backward" or draw any random frame from inbetween the animation. You can also go to any frame and save that as an image.

1. <i>Bilza.js will enable you to create slide (presentations, lesson plans ,sales Pitch, advertisements etc)</i> and then share them with who ever you like. The final product is a simple javascript file that will run in any (decent) browser anywhere. There is no installation or plug ins and NO dependency on any other library. This will enable your clients to consume your content with out any hassle.


1. <i>Bilza.js will enable you to create web based advertisement videos (animation) and embed them into your website or your client websites. Animated graphics are always prefered over still ones.</i>

1. <i>Bilza.js will enable your to insert animation in your "notes", "web posts" , "blog posts" or other client projects</i>. You can make simple animations for explaining your point and that will make your content far richer and attractive that normal text. Incase you are working for a client they will also welcome animated content.

1. <i>Bilza.js can help you in creating viral content</i>. To create viral content we need animation but we want to make the file size as small as possible since downloading large content is what costs money to your customers. In this scenario light weight javascript animations seems like the best candidate.

1. <i>Bilza.js will enable you in create animations that will always run everywhere (in browser)</i>. Once you have created an animation with a version of bilza.js that animation with that version of bilza will always run on any browser since there is nothing to break between your animation and its execuation. There is No outer dependecies of libraries that can crash or inject virus etc.

1. <i>Bilza.js will enable you to create responsive animations which will resize themselves according to the current screen size</i>. Your content can be viewed on many screen sizes and will draw responsively.

---
# Basic Feature
---
- <strong>Ease of use</strong> : <b>This library has no dependencies.</b>. It also has no installations, built systems etc. Is usable with any project. Even primitive JavaScript knowledge is enough to start using it.

- <strong>Responsiveness</strong> : The drawings and animations will resize its self according to the host screen size. (The most difficult part of this library).
- <strong>Composable Animations</strong> : The library will try to provide more and more tools to enable the creator to compose larger animations using smaller animation like LEGO pieces. 
- <strong>Behave like a Video</strong> : This library is written with an intention that the animation should behave more like a normal video. 
---

# How Bilza.js Works
Following are the steps to create animations with bilza.js:

1. <b>Create Bilza Engine</b>

 The first step is to create an instance of bilza engine. Here we decide about the width and height of the canvas that we want to create.

 Also in this step we decide if we want to keep the canvas size responsive (i.e equal to 70% of the screen size) or to make the canvas of a fixed size. 

2. <b>Create Components</b> :

<b>Please keep in mind that every thing that you see on bilza canvas is a components</b>. We create components and them insert them in bilza engine.

Currently components avaialbe in the library are
1. grid
1. circle
1. rect
1. fillRect
1. frameCounter
1. text
1. line
1. marker (not complete)
1. pic
1. particleSystem
1. spriteSheet (not complete)
1. many others are in development

You can <strong>use these components</strong> to quickly draw complex animations.  

2. <b>Edit Components</b> :

We edit components by editing their properties and attaching animations to them. 

Each of these components have 2 sets of properties (called the props). 
- One set of props are those that these components get from their parent object which are common among all the components (except few). These props are refered to as <b>core props</b>
- Second set of props is what is unique to that specific component.These props are refered to as <b>component props</b>
- The props that (almost) all of the components share are like:
    - x
    - y
    - color
    - width
    - height
    - rotation
    - opacity
    - border
    - colorBorder
    - and many more .......

- The props that are unique to each component are explained on the relevant page of that component (work in progress).

- <b>We add animation to a component by adding animation to one of its props</b> For example every component has "opacity" prop. We can animate it to go from value 100 to value 0 in 1 second starting from frame 10 to 11. 

3. <b>Inserting Components into Bilza Engine</b> :

When ever we insert components into bilza engine, we have to tell the engine the starting frame (starting time) and the ending frame (ending time) of that components. A component is just loaded and displayed between its starting frame and ending frame.When all components have completed their ending frame, the animation ends.

When we insert a component into bilza engine, we have following options:

- alwaysOn

This will make the component visible throughout the duration of the animation. However, inserting components with alwaysOn does not affect the duration of the animation, we need other components to give the animation some duration to run.

- add

When we "add" a component, we have to provide the starting time (also called the starting frame) and the duration. The component will appear just between its starting and ending frame. If the ending frame is larger than the current duration of the animation will extend its self to accommodate the newly inserted component. Keep in mind that we can create blank frames while inserting components and the engine will not object to that, assuming you actually mean to create blank frames. For example, if we insert componentOne from frame 0 to 60 and componentTwo from frame 120 to 300. The animation duration has been set to 300 seconds, but there is no component displayed between frame 60 and 120. This is not an error, but may occur without knowing.

- append

This comes in handy when we want to use premade scenes and just append them together (stitch them together like LEGO pieces).

4. <b>Running the Animation</b> : 

The last step is to run the animation.

---
<!-- The snippets from Docs -->
# Important Sections of Documentation

<small>I am starting to write important chapters of the documentation first.</small>

> <a href="#">Hello world Example</a>

> <a href="#">Getting Started Example</a>

> <a href="#">Getting Started Example</a>

> <a href="#">Getting Started Example</a>

> <a href="#">Getting Started Example</a>






---
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



