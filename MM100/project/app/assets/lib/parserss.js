function parse(url,cb){
	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
		 	var data 		= [];
		 	var obj 		= {};
		 	var description = '';
		 	var XMLTools 	= require("lib/XMLTools");

		 	// convert RSS feed to JSON
		 	var feed 		= new XMLTools(this.responseText).toObject();

		 	// loop through all items to only get the data we need for our UI
		 	feed.channel.item.forEach(function(entry){
		 		// some times description comes as an object
		 		if (typeof entry.description === 'object'){
		 			description = entry.description.text.replace(/<(?:.|\n)*?>/gm, '').trim();;	
		 		}else{
		 			description = entry.description.trim();;
		 		}

		 		obj={};
		 		obj.title = entry.title;
		 		obj.description = description;	
		 		obj.pubDate 	= entry.pubDate;
		 		obj.mp3 = entry.enclosure.url;
		 		data.push(obj);
		 	})

		 	// give collected data to caller
		 	cb(data);
		},
		onerror : function(e) {
	 		cb(e.error);
		},
			timeout : 5000  // in milliseconds
	});
	client.open("GET", url);
	client.send();	
}

exports.parse = parse;