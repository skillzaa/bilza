
# Major Decisions

- Transition is different from animation. In bilzaa2d transition means changing a property value at once without animation.
- if later i need animation i will add other feature but for now I will not confuse the current feature of Transition.
- TRANSITION SHOULD BE BASED ON TIME AND NOT FRAME since frame can move fast and slow but the changes should be time bound. this needs change in bilzaa2d.

//=====---- Further Points

- in text i am using the relative x and y value but this is translated into real x and y before feeding it to bilzaa2d i.e the user has to make sure that the values are with in 0-100.