var args = arguments[0] || {};

setTimeout(function() {
  $.web.focus();
},2000);

// NOT GOOD!!
$.win1.addEventListener('click', function() {
    $.normal.blur();
    $.numeric.blur();
    $.web.blur();
    $.email.blur();
    $.password.blur();
});
