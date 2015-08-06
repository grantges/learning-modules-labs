var extraStyles = '';

// configure webview based on arguments
$.webv.height 	= Ti.UI.FILL;
$.webv.width 	= Ti.UI.FILL;
$.webv.top 		= 0;
$.webv.left 	= 0;
$.webv.right 	= 0;
$.webv.bottom 	= 0;

function loadFile(filePath){
	var f = Ti.Filesystem.getFile(filePath);
	var contents = f.read();
	return contents.toString();	
}

function fileExists(filePath){
	return Ti.Filesystem.getFile(filePath).exists();
}

function setMarkDown(m){
	// read files
	var htmlTemplate 	= loadFile(Ti.Filesystem.resourcesDirectory + '/html_template.htm');
	var showdown 		= loadFile(Ti.Filesystem.resourcesDirectory +'/showdown.min.js');
	var stylesheet 		= loadFile(Ti.Filesystem.resourcesDirectory +'/bootstrap.min.css');

	// inject content, styling and script
	var md 				= htmlTemplate.replace('##INSERT_MARKDOWN##',m);
	md 					= md.replace('##STYLESHEET##',stylesheet);
	md 					= md.replace('##SHOWDOWN##',showdown);
	md 					= md.replace('##EXTRASTYLES##',extraStyles);

	// set to webview
	$.webv.html 		= md;
}

function setExtraStyles(style){
	extraStyles = style;
}

function setPageFromText(md){
	setMarkDown(md);
}

function setPageFromFilePath(path){
	var md=loadFile(path);
	setMarkDown(md);
}

function setPageFromURL(url){
	 var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         setMarkDown(this.responseText);
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('error');
	     },
	     timeout : 5000
	 });
	 client.open("GET", url);
	 client.send();
}

setPageFromText('# test title   
* Item 1    
* Item 2');

$.index.open();
