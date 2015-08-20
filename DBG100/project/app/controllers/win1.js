function toggle(e) {
	Alloy.Globals.clean = (e.source.value%2);
	alert('Leak is '+((Alloy.Globals.clean)?"off":"on"));
}

$.openBtn.addEventListener("click", function(){
   var winController = Alloy.createController('win2');
   
   // cleanup if needed
   winController.close();

	if (OS_IOS) {
		Alloy.Globals.Main.openWindow(winController.getView());
	} else {
		Alloy.Globals.Main.open(winController.getView());
	}
});