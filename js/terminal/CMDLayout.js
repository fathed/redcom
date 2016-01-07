function CMDLayout(cmdContainer, OS, startMessage, inputOffsetX, inputOffsetY, teminalTitleColor, terminalTitleOffsetX, terminalTitleOffsetY) {
    //layout the terminal according to OS type
    var closeX = "";
    closeY = "",
            closeW = "",
            closeH = "",
            minX = "",
            minY = "",
            minW = "",
            minH = "";

    switch (OS) {
        case "xp":
            closeX = "7px";
            closeY = "10px";
            closeW = "20px";
            closeH = "20px";
            minX = "45px";
            minY = "10px";
            minW = "20px";
            minH = "20px";
            $("#" + cmdContainer).addClass("xp_terminal win_icons");
            break;
        case "7":
            closeX = "20px";
            closeY = "10px";
            closeW = "40px";
            closeH = "20px";
            minX = "90px";
            minY = "10px";
            minW = "30px";
            minH = "20px";
            $("#" + cmdContainer).addClass("win7_terminal win_icons");
            break;
    }


    $("#" + cmdContainer).css({
        'position': 'absolute',
        'font-family': 'terminalRegular',
        'font-size': '12px',
        'color': 'white'
    });


    $("#" + cmdContainer + "DragHandle").css({
        'cursor': 'move'
    });

    $("#" + cmdContainer + "Input").css({
        'position': 'absolute',
        'width': '634px',
        'height': '362px',
        'top': '34px',
        'left': '12px',
        'z-index': '0',
        'background-color': 'none',
        'color': '#ffffff',
        'outline': 'none',
        'word-wrap': 'break-word',
        'border': '1px solid red'
    });



    $("#" + cmdContainer + "Center").css({
        'position': 'absolute',
        'top': '34px',
        'left': '15px',
        'height': '300px',
        'width': '652px',
        'overflow': 'scroll',
        'overflow-x': 'hidden'
    });



    $("#" + cmdContainer + "Title").css({
        'position': 'absolute',
        'color': teminalTitleColor,
        'top': terminalTitleOffsetY,
        'left': terminalTitleOffsetX

    });
    $("#" + cmdContainer + "Close").css({
        'position': 'absolute',
        'right': closeX,
        'top': closeY,
        'width': closeW,
        'height': closeH
    });
    $("#" + cmdContainer + "Min").css({
        'position': 'absolute',
        'right': minX,
        'top': minY,
        'width': minW,
        'height': minH
    });


    //closing the cmd panel
    $("#" + cmdContainer + "Close").click(function (e) {
        hideShow(cmdContainer);//hideShow.js
        $("#" + cmdContainer + "Center").html(startMessage);
        $("#" + cmdContainer + "Input").html('');
        toolBarRemoveItem(toolBarRef, toolBarChild, "cmd_startmenu");
    });
    $("#" + cmdContainer + "Min").click(function (e) {
        hideShow("#" + cmdContainer);//hideShow.js
    });
    $("#" + cmdContainer).click(function (e) {
        $("#" + cmdContainer + "Input").focus();
    });
}