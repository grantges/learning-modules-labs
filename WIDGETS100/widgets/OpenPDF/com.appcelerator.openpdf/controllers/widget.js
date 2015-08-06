function open(filename){
	if (OS_ANDROID){
		openAndroid(filename);
	}else if (OS_IOS){
		openiOS(filename);
	}
}

function openiOS(filename){
	docViewer = Ti.UI.iOS.createDocumentViewer({
		url:filename
	});
    docViewer.show();
}

function openAndroid(filename) {
  // from: http://developer.appcelerator.com/question/72361/open-pdf-file-on-android
  //create tmpdir
  var tmpdir = Ti.Filesystem.getFile(Ti.Filesystem.tempDirectory,'pdfs');
  tmpdir.createDirectory();
 	
  //create temp file //WORLD READABLE/WRITEABLE
  var tmpFile = Ti.Filesystem.getFile(tmpdir.nativePath, filename ); 
 
  //copy file to temp file     
  var f = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, filename);
 
  tmpFile.write( f.read() );

  //start intent
  try {
    Ti.Android.currentActivity.startActivity(
      Ti.Android.createIntent({
        action: Ti.Android.ACTION_VIEW,
        type: 'application/pdf',
        data: tmpFile.nativePath
      })
    );
  }catch(e){
    console.log("Error opening PDF");
  }
}

exports.open = open;