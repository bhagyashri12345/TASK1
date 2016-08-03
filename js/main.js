document(window).keypress(function(e){  //$(window) is a jQuery object
    e.charCode = 102;
    e.which = 102;
    e.keyCode = 102;
    console.log(e);
    return e;
});