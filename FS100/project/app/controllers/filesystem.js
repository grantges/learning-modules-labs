var args = arguments[0] || {};


if(Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'test.json').exists()) {
	// if file exists in applicationDataDirectory, use it
	var f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'test.json');
} else {
	// otherwise, open the 'stock' version from resourcesDirectory
	console.log('here');
	var f = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, 'test.json');
}

var resources = JSON.parse(f.read().text);
$.tf1.value = resources.en_us.hello;
$.tf2.value = resources.en_us.goodbye;

function tf1Return(evt) {
	evt.source.blur();
}

function tf1Change(evt){
	resources.en_us.hello = evt.value;
}

function tf2Return(evt){
	evt.source.blur();
}

function tf2Change(evt){
  resources.en_us.goodbye = evt.value;
}

function onClick(evt){
	$.tf1.blur();
	$.tf2.blur();
	f = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, 'test.json');
	f.write(JSON.stringify(resources));
}

