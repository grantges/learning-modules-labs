function doLoad(){
	// Load Signature Capture widget
	$.sigCapture.init({
	  borderColor:"#cacaca",
	  top:20,
	  width:Ti.UI.FILL,
	  height:200
	});
}

function doSave(evt){
	// Capture Signature
	$.sigCapture.save();
}

Ti.App.addEventListener('app:signature:capture',function(evt){
	console.log(evt.data);
})

$.index.open();
