var images = [],
	notes = [];

notes[0] = 'Together Through Life is the 33rd studio album by Bob Dylan, released on April 28, 2009, on Columbia Records. The album debuted at number one in several countries, including the U.S. and the UK. It is Dylan\'s first number one in Britain since New Morning in 1970.';
notes[1] = "Rumors of the album, reported in Rolling Stone magazine, came as a surprise, with no official press release until March 16, 2009 ‚Äî less than two months before the album's release date.";
notes[2] = "In a conversation with music journalist Bill Flanagan, published on Bob Dylan's official website, Flanagan suggested a similarity of the new record to the sound of Chess Records and Sun Records, which Dylan acknowledged as an effect of 'the way the instruments were played.'";

images[0] = 'images/dylan.png';
images[1] = 'images/dylan1.png';
images[2] = 'images/dylan2.png';

// Set default
$.linernotes.text = notes[Math.floor(Math.random()*3)];

// handle the swipe event -- change the liner notes 
// to a random member of the notes array
$.linernotes.addEventListener('swipe', function(){
	$.linernotes.text = notes[Math.floor(Math.random()*3)];
});

// handle the shake event -- change the cover art image
// to a random member of the images array
Ti.Gesture.addEventListener('shake', function() {
	$.coverart.image = images[Math.floor(Math.random()*3)];
});

// handle the orientation change event
// by moving elements to new locations
Ti.Gesture.addEventListener('orientationchange', function(e) {
    console.log('in orientationchange');
    console.log('orientation is ' + e.orientation);
	if (e.source.isLandscape()) {
		Ti.API.info('landscape');
		
		$.artist.applyProperties({
			top:50, left: 200
		});
		$.coverart.applyProperties({
			top: null, left: 10
		});
		$.linernotes.applyProperties({
			left: 260, bottom: 100, width: 200
		});
	} else if(e.source.isPortrait()){
		Ti.API.info('portrait');
		
		$.artist.applyProperties({
			top:260, left: null
		});
		$.coverart.applyProperties({
			top: 10, left: null
		});
		$.linernotes.applyProperties({
			left: null, bottom: 50, width: 240
		});
	}
});