# Objective

In this lab you will create an app, the layout of which reacts to orientation changes, as well as swipe and shake gesture events.

## Contents

To successfully complete this lab, you must develop an app that meets the following description:

- When the phone registers the shake event, the app will choose a random photo to display as the album image.
- When you swipe over the copy, it will choose a random one for display as well.
- Rotation of device will reorient the content of the window to be more effectively located.

1. Build the project for the simulator/emulator and check how orientation changes should affect the layout of the app.  Press Cmd + Arrow to rotate the iOS Simulator. Press Ctrl + F12 to rotate the Android emulator.
2. In the index controller, add the swipe event listener to the $.linernotes element. It should set the text to a random member of the notes array.
3. Add the shake event listener. It should set the image property of the $.coverart element to a random member of the images array.
4. Add the orientation change event listener. When in landscape orientation, set these parameters:

```
$.artist ‐ top: 240, left: 250
$.coverart ‐ top: null, left: 10
$.linernotes ‐ left: 260, bottom: 20, width: 200
```

When in portrait orientation, set these parameters:

```
$.artist ‐ top: 260, left: null
$.coverart ‐ top: 10, left: null
$.linernotes ‐ left: null, bottom: 10, width: 240
```

5. Update the tiapp.xml. You'll need to enable the two landscape orientations for iPhone. iPad and Android should be configured properly already.
6. Build your app for the simulator/emulator and test your work. Its functionality should match the specification described above.

You can simulate the shake event on the iOS simulator (see the Device menu). However, you will have to install to an Android device, as the emulator doesn't offer a way to test shakes.

## Summary

In this lab, you modified an app to better support orientation changes by updating its layout appropriately for the new screen dimensions. You also added shake and swipe event listeners so that your app now reacts to gestures rather than just taps.

## Resources

- Docs: Orientation guide: [http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Orientation](http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Orientation)
- Docs: Gestures guide: [http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Supporting_Gestures](http://docs.appcelerator.com/titanium/2.0/index.html#!/guide/Supporting_Gestures)