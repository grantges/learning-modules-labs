# UICOL100

In this lab you will set various keyboard options and conveniences to ease data entry, and you will implement a few of the many UI controls available in Titanium.

![Screenshot](https://monosnap.com/file/4rtstlcuh2YLckAiQmzWqdkAPhMHMj.png)

## Contents

To successfully complete this lab, you must develop an app that meets the following description:

- Alloy-based app that contains 5 input fields, each assigned different keyboard options (described below):
	- The active text field remains visible when focused and is not covered by the soft keyboard.
	- The window has a click event listener that will blur() all the fields to hide the keyboard.

Assign a meaningful titles and IDs to windows. Add five text fields with ids normal, numeric, web, email, and password. Put them inside a scroll view within the window.

In the associated style sheet, create style rules for your UI components. Set the scrollable view to use the vertical layout. For all of the fields, set the top to 40, width to 85%, height to 40dp, and the borderStyle to Ti.UI.INPUT_BORDERSTYLE_ROUNDED. Specify appropriate hintText for each of the fields. Then, set options for the fields as described:

| Field | Properties |
|------|------
| normal | keyboard type = default, return key type = default, autocorrect = true, autocapitalization = words |
| numeric | keyboard type = numbers/punctuation, return key type = 'Done' |
| web | keyboard type = URL, return key type = 'Go' |
| email | keyboard type = email, return key type = 'Send' |
| password | keyboard type = default, autocorrect = false, autocapitalization = none, password mask = true |

To the controller, add a click event listener on the window. When the window is clicked, blur each of the text fields to hide the soft keyboard.

Build your app for the simulator/emulator.

When you tap in a field, the appropriate keyboard type should be used, as should the correct return button type. Test the autocorrection and autocapitalization settings on the fields. Also, input to the password field should be obscured. The fields should remain visible when the soft keyboard is displayed.

## Summary

In this lab, you implemented various keyboard and text field options that can ease data entry on the small screen. You also implemented a switch, slider, and picker.

## Resources

- API docs: TextField: [http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TextField](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.TextField) 
- API docs: Slider: [http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Slider](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Slider) 
- API docs: Switch: [http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Switch](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Switch) 
- API docs: Picker: [http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Picker](http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Picker)