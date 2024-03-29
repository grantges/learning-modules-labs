// We need a reference to the ti.map module
var map = require('ti.map');

// List of map types to traverse, and our initial index
var mapTypes = [map.NORMAL_TYPE, map.SATELLITE_TYPE, map.HYBRID_TYPE];
var mapType = 0;

// Android has a fourth map type. We use conditional code, which Alloy automatically
// strips as dead code when it builds for other platforms.
if (OS_ANDROID) {
	mapTypes.push(map.TERRAIN_TYPE);
}

/**
 * self-executing function to organize otherwise inline constructor code
 * @param  {Object} args arguments passed to the controller
 */
(function (args) {

	// Use strict mode for this function scope. We can't do this for all of the
	// controller because after Alloy has compiled all of this file is wrapped.
	// FIXME: https://jira.appcelerator.org/browse/ALOY-1263
	'use strict';

	// Fetch the models stored in our SQLite database from previous sessions
	Alloy.Collections.location.fetch();

	// Open the window. We didn't give it an id in the view, but it defaults to
	// the name of the controller/view.
	$.index.open();

	// Show our current position on the map
	showCurrentPosition();

})(arguments[0] || {});

/**
 * Gets our current position and then continues the same process as when you
 * longpress somewhere on the map, which is reverseGeocode().
 */
function showCurrentPosition() {
	'use strict';

	// Get our current position
	Ti.Geolocation.getCurrentPosition(function (e) {

		// FIXME: https://jira.appcelerator.org/browse/TIMOB-19071
		if (!e.success || e.error) {
			return alert('Could not find your position.');
		}

		// Continue the same process as when the user longpresses on the map,
		// passing `true` to tell it to center on the location.
		reverseGeocode(e.coords, true);
	});
}

/**
 * Receives a position, reverse geocodes it and then calls addLocation() to
 * add it to the map.
 * @param  {Object}  coords            Event or other object that has:
 * @param  {Float}   coords.latitude   Latitude
 * @param  {Float}   coords.longitude  Longitude
 * @param  {boolean} center            Set to true to center the map on the position
 */
function reverseGeocode(coords, center) {
	'use strict';

	// Don't re-use coords since reverseGeocode() is also a callback for two
	// events in the view, which has other properties as well that we don't need.
	var location = {
		latitude: coords.latitude,
		longitude: coords.longitude
	};

	// Reverse geocode the position
	Ti.Geolocation.reverseGeocoder(location.latitude, location.longitude, function (e) {

		if (!e.success || e.error) {
			return alert('Could not reverse geocode the position.');
		}

		// Use the address of the first place found for the title
		location.title = e.places[0].address;

		// Add the location to the map and center if requested
		addLocation(location, center);
	});
}

/**
 * Adds the location to the collection, triggering data-binding to update the map.
 * @param  {Object}  location            Data for the model:
 * @param  {Float}   location.latitude   Latitude
 * @param  {Float}   location.longitude  Longitude
 * @param  {string}  location.title      Title
 * @param  {boolean} center              Set to true to center the map on the position
 */
function addLocation(location, center) {
	'use strict';

	// create a model for the new location
	var model = Alloy.createModel('location', location);

	// add it to the collection trigger data-bindings
	Alloy.Collections.location.add(model);

	// save it to the data store
	model.save();

	// center on the location if requested
	if (center) {
		$.map.region = {
			latitude: location.latitude,
			longitude: location.longitude,
			latitudeDelta: 7,
			longitudeDelta: 7
		};
	}
}

/**
 * Called by Alloy to change the model fields to be used for `createAnnotation()`.
 * @param  {Object} model BackBone model
 * @return {Object}       Plain object
 */
function transformLocation(model) {
	'use strict';

	// For other types of data-binding we could just return the changed/added properties
	// but for ti.map we need to include all unchanged properties as well.
	// FIXME: https://jira.appcelerator.org/browse/ALOY-1282
	var transformed = model.toJSON();

	// Add a subtitle, showing the position
	transformed.subtitle = model.get('latitude') + ', ' + model.get('longitude');

	// TODO: Draggable pins, blocked by https://jira.appcelerator.org/browse/MOD-2131
	// TODO: Buttons in callout to remove a model, blocked by https://jira.appcelerator.org/browse/MOD-2130

	return transformed;
}

/**
 * Callback bound to the SearchView and SearchBar in the view. Forward geocodes an address
 * and uses addLocation() to add it to the collection, triggering data-binding for the UI.
 * @param  {Object} event Event
 */
function geocodeLocation(e) {
	'use strict';

	// Reference to the SearchView or SearchBar
	var source = e.source;

	// On iOS we have e.value, but on Android we don't. This always works.
	var address = source.value;

	// Forward geocode the address
	Ti.Geolocation.forwardGeocoder(address, function (e) {

		if (!e.success || e.error) {
			return alert('Could not geocode the location.');
		}

		if (OS_ANDROID) {

			// Collapse the ActionView, which also clears the value and hides the keyboard
			$.searchMenu.collapseActionView();

		} else {

			// Clear the value
			source.value = '';

			// Hide keyboard
			source.blur();
		}

		// Let addLocation() add it to the collection and update the UI
		// Also center the map on the location
		addLocation({
			title: address,
			latitude: e.latitude,
			longitude: e.longitude
		}, true);
	});
}

/**
 * Callback bound to the button overlay to switch map types.
 */
function changeMapType() {

	// Increment our mapType index or move back to 0 if we reached the end
	mapType = (mapType === mapTypes.length - 1) ? 0 : mapType + 1;

	// Set it
	$.map.mapType = mapTypes[mapType];
}
