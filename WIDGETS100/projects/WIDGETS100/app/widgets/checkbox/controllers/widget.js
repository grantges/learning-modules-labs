var args = arguments[0] || {};
var checkState = false;
var cb = false;

function doClick() {
  checkState = !checkState;
	$.chk.text = (checkState) ? '\u263A' : '';
	if (typeof cb == "function") {
	  cb(checkState);
  }
}


exports.init = function (_cb) {
  cb = _cb;
	$.lbl.text = args.message || 'Set "message" attribute to change';
	
	_.extend($.chk, args);
	_.extend($.lbl, args);
};