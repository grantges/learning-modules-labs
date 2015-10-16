 
# AND100

In this lab you will use Android Intent to open a PDF file shipped with your app.

![Screenshot](https://monosnap.com/file/XYt8P7jBEMfMHVe663d5SCVyDtmf08.png)


## Contents

To successfully complete this lab, you must develop an app that meets the following description:

- Alloy-based app that contains one button to open a PDF
- Your "open pdf" code should:

	* Grab the PDF file from the assets/pdf folder
	* Move the file to the externalStorageDirectory.  The reason for doing this is becuase your app is "sandboxed" by the operating system, so no other app can read your files.  By moving your file to an external location your making that file publicly accesible by any other app
	* Use an Intent to open the PDF file with the viewer(s) currenty installed on the device


This app needs to be tested on a device, unless your emulator has a third-party PDF reader installed.


## Summary

In this lab, you implemented native Android Intents to open a PDF file with a third-party PDF viewer.

## Resources

- API docs: Android Intents: [http://docs.appcelerator.com/platform/latest/#!/api/Titanium.Android.Intent](http://docs.appcelerator.com/platform/latest/#!/api/Titanium.Android.Intent)
