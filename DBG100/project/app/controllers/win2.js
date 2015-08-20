var args = arguments[0] || {};

var data = [
	{ title: 'Row 1' },
	{ title: 'Row 2' },
	{ title: 'Row 3' },
	{ title: 'Row 4' },
	{ title: 'Row 5' },
];
	
$.tblView.setData(data);
//$.win2.rightNavButton = $.closeBtn;
$.closeBtn.addEventListener('click', function() {
		$.win2.close();
});

/*
This function is registered on a global Ti.App event and
references two proxy objects that should be destroyed in this context.
Because the function is not de-registered, the proxy references are not
released.  Please de-register this Ti.App event to dealloc proxies.
*/
function doSomething(_event) {
	Ti.API.info('event fired');
	$.tblView.setData(_event.data);
	$.someLabel.text = _event.label;
}

Ti.App.addEventListener('bad:idea', doSomething);


var close = function() {
    // set proxy objects to null
    $.tblView = null;
    
    // Remove event listeners
    
    // This solution works on both iOS and Android
    if (Alloy.Globals.clean) {
    	Ti.App.removeEventListener('bad:idea', doSomething);
    }
    
    // unbind UI->Alloy collections & models
    $.destroy();
    
    $.win2.close();
}

exports.close = close;