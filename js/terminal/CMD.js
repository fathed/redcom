/*
 Abstracted method for a simple terminal
 
 cmdContainer = the object (div) that will act as the terminal
 cmdInput = the actual input field for the terminal
 startMessage = the first message that the terminal will display
 inputOffsetX = the offset for the terminal command prompt
 inputOffsetY = the offset for the terminal command prompt
 OS = what OS are we using? Make th etempus tool look like a legitimate OS
 teminalTitleColor = the color of the terminal title = some OS need a black title with others need a white
 terminalTitleOffsetX = sometimes the terminal title needs to be offest - x position
 
 */


function CMD(cmdContainer, startMessage, inputOffsetX, inputOffsetY, OS, teminalTitleColor, terminalTitleOffsetX, terminalTitleOffsetY) {
    var cmdID = cmdContainer.toLowerCase() + "_CMD",
            cmdTxt = "", ///the string being built and displayed in the terminal
            commandPrompt = $("#" + cmdContainer).find(".commandPrompt").html();//get a reference to the command prompt




    inputOffsetX = inputOffsetX + 'px';//concat px to the end of the terminal offest
    inputOffsetY = inputOffsetY + 'px';//concat px to the end of the terminal offest
    terminalTitleOffsetX = terminalTitleOffsetX + 'px';//concat px to the end of the terminal title offest

    //Add this particular CMD object to the Tempus object
    $("#Tempus").append('<div id="' + cmdID + '" class="CMD_terminal">');

    ///build the basic structure of the terminal
    cmdTxt += '<div id="' + cmdID + 'DragHandle">&nbsp;</div>';
    cmdTxt += '<div id="' + cmdID + 'Close" class="cursorPointer"></div>';
    cmdTxt += '<div id="' + cmdID + 'Min" class="cursorPointer"></div>';
    cmdTxt += '<div id="' + cmdID + 'Top"><span id="' + cmdID + 'Title">' + cmdContainer + '</span></div>';
    //cmdTxt += '<textarea id="'+cmdID+'Input" name="" cols="" rows=""></textarea>';
    cmdTxt += '<div id="' + cmdID + 'Input" contenteditable="true" class="termInput" >input here</div>';
    cmdTxt += '<div id="' + cmdID + 'Center">' + startMessage + ' &gt;<span class="commandPrompt"></span></div>';
    cmdTxt += '<div id="' + cmdID + 'Bottom"></div>';
    cmdTxt += '</div>';

    //append the terminal structure
    $("#" + cmdID).append(cmdTxt);


    $("#" + cmdID + 'DragHandle').mousedown(function () {
        $("#" + cmdID).draggable();
    });

    $("#" + cmdID + 'DragHandle').mouseup(function () {
        $("#" + cmdID).draggable('destroy');
    });



    $("#" + cmdID).children().click(function () {
        currentCursorLocation = $(this).attr('class');//found in Tempus.js
    });

    CMDLayout(cmdID, OS, startMessage, inputOffsetX, inputOffsetY, teminalTitleColor, terminalTitleOffsetX, terminalTitleOffsetY);//instantiate the terminal
    CMDPrompt(cmdID, inputOffsetX, inputOffsetY);
}