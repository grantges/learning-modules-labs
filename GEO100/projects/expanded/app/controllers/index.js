var Geo 	= require('lib/geo');
var abort 	= false;

var globalGeoData = {
	longitude 			: 0,
	latitude 			: 0,
	altitude 			: 0,
	heading 			: 0,
	accuracy 			: 0,
	speed 				: 0,
	timestamp 			: 0,
	altitudeAccuracy 	: 0
}

function loadFile(filePath){
    var f = Ti.Filesystem.getFile(filePath);
    var contents = f.read();
    return contents.toString(); 
}

// the geo checks need to happen on the Window Open event
// if we don't do this, any alert will be shown behind the actual main window
$.index.addEventListener('open',function(evt){
	// Check status of location services and ask for permission on iOS
	if (Titanium.Geolocation.locationServicesEnabled === false){
	    alert('Your device has geo turned off - turn it on.');
	    abort = true;
	}else{
		// get user permission (ios-only)
	    if (OS_IOS) {
	        var authorization = Titanium.Geolocation.locationServicesAuthorization;
	        console.log('Authorization: '+authorization);

	        if (authorization == Titanium.Geolocation.AUTHORIZATION_DENIED) {
	            alert('You have disallowed this app from running geolocation services.');
	        }else if (authorization == Titanium.Geolocation.AUTHORIZATION_RESTRICTED) {
	            alert('Your system has disallowed this app from running geolocation services.');
	        }
	    }
	}   

	// Set listener for location changes
	// Fires when there's a change in location and catches the geo data
	Titanium.Geolocation.addEventListener('location',function(e){
	    if (e.error){
	        console.log('Error: ' + e.error);
	        return;
	    }

	    // assign this location to the globalGeoData Object
	    globalGeoData.longitude 		= e.coords.longitude;
	    globalGeoData.latitude 			= e.coords.latitude;
	    globalGeoData.altitude 			= e.coords.altitude;
	    globalGeoData.heading 			= e.coords.heading;
	    globalGeoData.accuracy 			= e.coords.accuracy;
	    globalGeoData.speed 			= e.coords.speed;
	    globalGeoData.timestamp 		= e.coords.timestamp;
	    globalGeoData.altitudeAccuracy 	= e.coords.altitudeAccuracy;
	 });

	// we abort if location services are off
	if (!abort){
		// Check very 1 second until we have the device's location
		var count=0;

		var waitForLocation = setInterval(function(){ 
			checkLocation();
		}, 1000);

		function checkLocation() {
			console.log('Waiting for location...');

			if (count > 10){ // if we already checked 10 times and it didn't work
				clearInterval(waitForLocation);	
				alert('Sorry but I couldn\'t get a position fix');
			}else{
				// if we have location, then we can stop the interval and carry on
			    if (globalGeoData.latitude > 0){
			    	clearInterval(waitForLocation);	
					appStart(); // now that we have the device's location, we can start the app
			    }else{
			    	count++;
			    }
			}
		}

		function appStart(){
			// get data.  we're using dummy data stored in the file system
			var data=JSON.parse(loadFile(Ti.Filesystem.resourcesDirectory + 'data.json'));

			// get distance and sort descending
			var sortedData = Geo.getSortedData({
				data 			: data,
				lat 			: globalGeoData.latitude,
				lon 			: globalGeoData.longitude,
				km2miles 		: true,
				roundDistance 	: true
			});

			var tableData=[];

			sortedData.forEach(function(item){
				var payload = item;
				var row = Alloy.createController('tablerow',payload).getView();
				tableData.push(row);
			})

			$.list.setData(tableData);
		}	
	}
})

$.index.open();