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
		console.log('releasing');
		sound.release();	
	}
}

function togglePlayStop(evt){
	if (sound.playing){
		$.playstop.image="/rightarrow.png";
		sound.pause();
	}else{
		$.playstop.image="/square.png";
		sound.play();
	}
}