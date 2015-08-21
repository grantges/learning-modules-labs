function doClick(e) {
    // 1. open the file shipped with the app
	var originalFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, 'pdf/AND100.pdf');

	// 2. obtain handle to new file in externalStorageDirectory
	var publicFile = Ti.Filesystem.getFile(Ti.Filesystem.externalStorageDirectory, 'AND100.pdf');

	// 3. copy the original file to the new location
	publicFile.write(originalFile.read());

	// 4. get the absolute path to the new file
	var publicFilePath = publicFile.nativePath;


	// 5. launch the intent
	try {
	    Ti.Android.currentActivity.startActivity(
	      Ti.Android.createIntent({
	        action: Ti.Android.ACTION_VIEW,
	        type: 'application/pdf',
	        data: publicFilePath
	      })
	    );
	}catch(e){
		alert("Error opening PDF.  Ensure you have a PDF reading app installed on your device.");
	}
}
$.index.open();