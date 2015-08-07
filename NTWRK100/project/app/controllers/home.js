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