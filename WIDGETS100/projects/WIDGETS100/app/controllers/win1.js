$.checkbox.init(function(state) {
  Ti.API.info('state: '+state);
	alert('The box is ' + ((state) ? 'checked' : 'unchecked'));
});