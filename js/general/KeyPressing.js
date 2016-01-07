/*
 catch all for the keypresses in this application
 */
$(document).keydown(function (e) {
    switch (e.keyCode) {
        case 13:
            if (currentCursorLocation == "termInput") {
                e.preventDefault();//there is no need to use the enter key on a lot of windows applications - here I start it
            } else {
            }
            break;
    }
});