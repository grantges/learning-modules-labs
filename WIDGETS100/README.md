# WIDGETS100

In this lab, you will create a simple widget that displays a checkbox.  The completed lab is located in  [projects/WIDGETS100](https://github.com/appcelerator-training/learning-modules-labs/tree/master/WIDGETS100/projects/WIDGETS100)

![Screenshot](https://monosnap.com/file/pUcsB7BfwSpJLVTOicelYjzxtyFweX.png)

## Contents

To successfully complete this lab:

- Create a widget and implement it within a test project.
- The widget should show a box and associated text message
- When the box or label is tapped, a checkmark should be displayed in or removed from the box.

1. Create a new Titanium Alloy project, giving it a name and app ID of your choice. Close the tiapp.xml file.
2. Right-click the app folder, and choose New, Alloy Widget. Name your widget 'checkbox'. Expand the app/widgets folder and explore the folders and files within. Open your app's config.json file to confirm your new widget has been included as a dependency.
3. In widget.xml, define three UI elements: a view which contains two labels. Give the view an ID of 'checkbox' and the labels the IDs 'chk' and 'lbl'. In the TSS file, set these styles:

```
'#checkbox': height & width = Ti.UI.SIZE and a 'horizontal' layout
'#chk': text color black, height & width of '32dp', a 1 pt black border, 18 pt bold text that is centered, and a left of 1 and top of 0.
'#lbl': text color black, height & width of Ti.UI.SIZE, 18 pt bold text that is left-aligned, and a left of 10
```

You will use a label for the checkbox itself. You'll give it a border and other styling properties. When 'checked' you'll set that label's text property equal to the Unicode character for a checkmark.

4. In widget.js, declare an 'args' variable that refers to the controller's arguments. Then, define the init() function. It accepts a function as an argument. Set $.lbl.text to the args.message value or a default string of your choice. Initialize a 'checkState' variable to false. Add a click event listener to the $.checkbox component. When clicked, set 'checkState' to the opposite of it's current value. If it's true, set $.chk.text equal to the Unicode value '\u2713' otherwise set it to an empty string. Invoke the callback function, passing checkState to it.
5. In the app's index.xml, use the Widget tag to include your widget. Give it an ID of checkbox. Add a 'message' attribute to the tag with text of your choice to appear in the label beside the box.
6. In your app's index.js controller, call the checkbox widget's init() method, passing to it a simple function that accepts a 'state' argument. Output a simple alert message indicating whether or not the box is checked.
7. Build your app for the simulator/emulator. When you tap the box or label, a checkmark should be displayed (or removed) and an appropriate alert message displayed. Correct any errors and re-build, if necessary.
8. (Optional) If time permits, modify the widget.js init() method to call the Underscore.js extend() method on both the $.lbl and $.chk elements, passing to it the arguments received in that controller. Modify the widget tag in index.xml to specify that the label should be red (add the 'color' attribute).

By doing so, you will be able to specify additional stylistic parameters (such as a text color) in the index view or style sheet.

## Summary

In this lab, you created a simple widget to practice the steps involved.

## Resources

- Guides: Widget Reference: [http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Widgets](http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Widgets)
- Unicode Dingbat characters: [http://en.wikipedia.org/wiki/List_of_Unicode_characters#Dingbats](http://en.wikipedia.org/wiki/List_of_Unicode_characters#Dingbats)