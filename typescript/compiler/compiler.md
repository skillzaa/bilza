/*
3-oct-2022
 * - Before init we do not know the width and height of the canvas. 
 * - So how do we get the right-edge and bottom-edge
 * - Why is it important to get the edges.
 * - Option 1 : Use aspect ration and do not allow user to set width and height at random.
 * - Option 2 : Allow user to use any values for canvas width and height just resolve everything at the last moment (everything gets translated at init). 
 * Final::::
 *      -- Have aspect ration but also allow users to resizeCanvas
 *      -- Every thing resolves at the init dont try to resolve         anything before that.
 *      -- We need to introduce classes which store data and get resolved at init. For example
 *          - till-end (for inserting comps into )
 *          - in-mid.
 *          - at_percent
 * Why is init not when the bil is created all the remainig code does not need to be written with the idea that the 
 * --what about insert time and end time in percentages.
 * 
 * 
 * 
 * 
 * 
 */

## What is the Purpose of Compiler:
> Compiler collects all the data required for creating a videos and once it has that data it creates an animation using bilza engine.

- The compiler by default is designed to collect data and then analyze it in many iterations thus it can collect data as right-edge and bottom-edge since it gets resolved later.
- The user code and the bilza engine does not have to co-incide one-to-one the compiler will make many things esay.
- The compiler is an abolutely important module and musr for future.
- Compiler can create its own function which add objects as templates.

> The engine will be greatly simplified and become a real engine since it will work on simple numbers crunching and not logic. all the logic will be resolved by compiler. 
- All the responsive vs non responsive confusion is also move up to be solved at compiler level.

> The compiler wear bilza engine like a glove

The same compiler is what i tried to create in the UI project as recorder. The same compiler will also pring code base on its collected data.

- it is very easy to make compiler save more data than required for later use HERE the COMPILER FILE IS DIFFERENT THAN THE DISPLAY FILE.

- when ever we need to save more data we can do it in compiler since it has a recorder portion and a compiler portion. it is very easy to add more data to save. 

- this gives us wayyy more flexibility and thus we can make engine more strict.
