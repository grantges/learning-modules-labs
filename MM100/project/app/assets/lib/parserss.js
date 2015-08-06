function parse(url,cb){
	var client = Ti.Network.createHTTPClient({
		onload : function(e) {
		 	var data = [];
		 	var obj = {};
		 	var description = '';
		 	var XMLTools = require("lib/XMLTools");
		 	var feed = new XMLTools(this.responseText).toObject();

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
		 		try{
		 			obj.mp3 = entry.enclosure.url;
		 		}catch(e){
		 			obj.mp3 = '';
		 		}
		 		data.push(obj);
		 	})
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