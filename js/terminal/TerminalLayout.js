function TerminalLayout(terminalName, OS, startMessage, teminalTitleColor, terminalTitleOffsetX, terminalTitleOffsetY) {

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
            $("#" + terminalName).addClass("xp_putty_terminal win_icons");
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
            $("#" + terminalName).addClass("win7_terminal win_icons");
            break;
    }

    $("#" + terminalName).css({
        'position': 'absolute',
        'font-family': 'terminalRegular',
        'font-size': '12px',
        'color': '#D6D6D6'
    });

    $("#" + terminalName + "DragHandle").css({
        'cursor': 'move',
        'position': 'absolute',
        'left': '10px',
        'top': '8px',
        'width': '600px'
    });

    $("#" + terminalName + "Input").css({
        'position': 'absolute',
        'width': '634px',
        'height': '342px',
        'top': '34px',
        'left': '12px',
        'height': '20px',
                'z-index': '0',
        'border': 'none',
        'background-color': 'none',
        'color': '#ffffff',
        'outline': 'none',
        'word-wrap': 'break-word',
        'border' : '1px solid red'
    });

    $("#" + terminalName + "Center").css({
        'position': 'absolute',
        'top': '30px',
        'left': '15px',
        'height': '304px',
        'width': '652px',
        'overflow': 'scroll',
        'overflow-x': 'hidden',
        'outline': 'none',
        'cursor': 'text',
        'word-wrap': 'break-word'
    });

    $("#" + terminalName + "maskContent").css({
        'position': 'absolute',
        'top': '34px',
        'left': '15px',
        'height': '300px',
        'width': '635px',
        'overflow': 'hidden',
        'outline': 'none',
        'z-index': '1'
    });

    $("#" + terminalName + "Title").css({
        'font-size': '10px',
        'font-weight': 'bold',
        'position': 'absolute',
        'color': teminalTitleColor,
        'top': '10px',
        'left': terminalTitleOffsetX
    });

    $("#" + terminalName + "Close").css({
        'position': 'absolute',
        'right': closeX,
        'top': closeY,
        'width': closeW,
        'height': closeH
    });

    $("#" + terminalName + "Min").css({
        'position': 'absolute',
        'right': minX,
        'top': minY,
        'width': minW,
        'height': minH
    });

    //closing the cmd panel
    $("#" + terminalName + "Close").click(function (e) {
        hideShow(terminalName);//hideShow.js
        $("#" + terminalName + "Center").html(startMessage);
        $("#" + terminalName + "Input").html('');
        toolBarRemoveItem(toolBarRef, toolBarChild, "cmd_startmenu");
    });
    
    $("#" + terminalName + "Min").click(function (e) {
        hideShow("#" + terminalName);//hideShow.js
    });
    
    $("#" + terminalName).click(function (e) {
        $("#" + terminalName + "Input").focus();
    });
}