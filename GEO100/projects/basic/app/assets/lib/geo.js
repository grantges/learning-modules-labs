exports.getCurrentPosition = function(args){
	// will return cached data
    var outData={}; 

    Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
    Titanium.Geolocation.distanceFilter = 10;
    Titanium.Geolocation.getCurrentPosition(function(e){
        if (!e.success || e.error){
            //alert('error ' + JSON.stringify(e.error));
            console.log('Error: GPS Error 2');
            return;
        }
         
        outData={
            latitude 			: e.coords.latitude,
            longitude 			: e.coords.longitude,
            altitude 			: e.coords.altitude,
            heading 			: e.coords.heading,
            accuracy 			: e.coords.accuracy,
            speed 				: e.coords.speed,
            timestamp 			: e.coords.timestamp,
            altitudeAccuracy 	: e.coords.altitudeAccuracy
        }
    }); 
    return outData;
}