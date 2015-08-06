var url = "http://feeds.twit.tv/floss.xml";

var listdata=[];

require('lib/parserss').parse(url,function(data){
	if (typeof data === 'object'){
		data.forEach(function(item){
			var row=Alloy.createController('listrow',item).getView();
			listdata.push(row);
		});
		$.list.setData(listdata);
	}else{
		console.log('Error');
	}
});

function rowclick(evt){
	// clean up the event data and send only what's needed
	var payload 		= {};
	payload.title 		= evt.source.itemTitle;
	payload.description = evt.source.itemDescription;
	payload.mp3 		= evt.source.itemMP3;
	payload.pubDate 	= evt.source.itemPubDate;

	var w = Alloy.createController('itemwin',payload).getView();
	if (OS_IOS){
		$.home.openWindow(w);
	}else{
		w.open();
	}	
}
