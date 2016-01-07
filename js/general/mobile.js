var thisWidth = window.screen.availWidth,
        thisHeight = window.screen.availHeight;


if (thisHeight <= 1024 && thisWidth >= 320) {

    $(".terminal").height(thisHeight + 'px');
    $(".terminal_body").height(thisHeight + 'px');
    //$(".terminal_bodyMask").height(thisHeight+'px');
    //$(".terminal_bodyMask").css('display','none');
}
