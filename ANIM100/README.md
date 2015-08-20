# Objective

Animations can provide critical feedback to a user in your application. Used wisely, your app's UI will benefit greatly from the gentle application of animations. This lab will create a simple series of animation examples for common use cases.

![](https://wiki.appcelerator.org/download/attachments/37522683/Screen%20Shot%202014-07-20%20at%205.39.05%20PM.png?version=1&modificationDate=1405892353000&api=v2)


## Contents


In this lab, you will animate three elements in a partially-completed app. You'll add code to fade an element out of view, then back into view; add code to slide an element off screen, then back; and you'll implement the Alloy animation built-in and use its function to shake an element when clicked.

1. Start a new Titanium Alloy project, giving it a name and app ID of your choice.
2. In the index view, add four labels (we'll use labels for our boxes). The first one gets the "Click the boxes for fun!" message. The other three will be "fade out/in", "fly out/in", and "shake". Make sure each has a unique ID; the three labels to be used as boxes should have a class of "box".
3. In the index style file, set the "Click the boxes" label to have black, bold, 20dp text that is 10dp from the top. Define a box class with a height/width of 50/100, a font color of white, with bold, center-aligned text. 4. Finally, for the three boxes, set them to be top 50, 120, and 190, with red, green, and blue background colors.
4. In the index controller, define the click handlers. For box 1, on click, animate to zero opacity over two seconds then back to full opacity. For box two, animate to a new top value that is 20dp taller than the screen over two seconds and then back. For the third box, require in the animation built-in; apply the shake animation to the box with a delay of 30 milliseconds.
5. Build your app for the simulator/emulator and test your work by click on each of the boxes.

## Summary

In this lab, you implemented three simple animations as an introduction to the types of effects you could add to your apps.

## Resources
