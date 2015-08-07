var args = arguments[0] || {};
var sound = Ti.Media.createAudioPlayer({
	allowBackground : false,
	url : args.mp3
});

$.itemwin.title = args.title;
$.description.text = args.description;

function closeWin(evt){
	// for Android's up button
	sound.stop();
	sound.release();	
	$.itemwin.close();
}

function doClose(evt){
	sound.stop();
	if (OS_ANDROID){
		console.log('releasing resources');
		sound.release();	
	}
}

function togglePlayStop(evt){
	if (sound.playing){
		$.playstop.image="/rightarrow.png";
		sound.pause();
	}else{
		// don't be alarmed if you see this error on Android:
		// "MediaPlayer: Should have subtitle controller already set"
		// It's a known issue but completely harmless: https://jira.appcelerator.org/browse/TIMOB-16134
		$.playstop.image="/square.png";
		sound.play();
	}
}