var getDistance = function(lat1,lon1,lat2,lon2){
	var R 		= 6371; // earth's radius in km
	var dLat 	= toRad(lat2-lat1);
    var dLon 	= toRad(lon2-lon1);
    var lat1 	= toRad(lat1);
    var lat2 	= toRad(lat2);
	 
	var a 		= Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
	var c 		= 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d 		= R * c;
	return d;
}

function kilometersToMiles(km){ 
	return Number(km)*.62
}

function toRad(num) {
	return num * Math.PI / 180;
}

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
            latitude            : e.coords.latitude,
            longitude           : e.coords.longitude,
            altitude            : e.coords.altitude,
            heading             : e.coords.heading,
            accuracy            : e.coords.accuracy,
            speed               : e.coords.speed,
            timestamp           : e.coords.timestamp,
            altitudeAccuracy    : e.coords.altitudeAccuracy
        }
    }); 
    return outData;
}

exports.getSortedData = function(args){
    // add a distance column to each record
	args.data.forEach(function(item){
        var distance    = getDistance(item.lat,item.lon,args.lat,args.lon); // default is km

        if (args.km2miles){ 
            item.distance    = kilometersToMiles(distance);
        }

        if (args.roundDistance){
            item.distance   = item.distance.toFixed(2); // round to 2 decimal positions    
        }
	})

	// sort by distance showing closest first
	args.data.sort(function (a, b) {
	  return a.distance - b.distance;
	});

	return args.data;
}

