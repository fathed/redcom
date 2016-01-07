/*
 Terminal globals
 */


function Terminal(terminalName, startMessage, OS, teminalTitleColor, terminalTitleOffsetX, terminalTitleOffsetY) {
    //this.TerminalDirectory = "C:&#92;Users&#92;cmd>";

    this.TerminalDirectory = startMessage;




    var newName = terminalName.toLowerCase(), //I need the name to be lower case for some of the IDs
            newTerminalName = terminalName + "Terminal",
            cmdTxt = "",
            teminalTitleColor = "", //some terminals need black titles and others need white titles
            entryCharCount = 0, //count everytime I press a key with the exception od delete, the arrow keys, shift, control, tab, and enter
            isDraggable = false;///keep track if I have initiated the drag method for JQuery - error handling

    $("#Tempus").append('<div id="' + newTerminalName + '" class="CMD_terminal">');
    ///build the basic structure of the terminal
    cmdTxt += '<div id="' + newTerminalName + 'DragHandle">&nbsp;</div>';
    cmdTxt += '<div id="' + newTerminalName + 'Close" class="cursorPointer"></div>';
    cmdTxt += '<div id="' + newTerminalName + 'Min" class="cursorPointer"></div>';
    cmdTxt += '<div id="' + newTerminalName + 'Top"><span id="' + newTerminalName + 'Title">' + terminalName + '</span></div>';
    cmdTxt += '<div id="' + newTerminalName + 'Center" contenteditable="true" spellcheck="false">' + startMessage + '</div>';
    cmdTxt += ' <div id="' + newTerminalName + 'maskContent" contenteditable="false"></div>';//the mask to keep the user from being able to delete the text in this string
    cmdTxt += '<div id="' + newTerminalName + 'Bottom"></div>';
    cmdTxt += '</div>';
    //append the terminal structure
    $("#" + newTerminalName).append(cmdTxt);
    //if I scroll the terminal window move the cursor to the end of the string
    $("#" + newTerminalName + "Center").scroll(function () {
        //errors(newTerminalName+"Center")
        TerminalRefreshCursor(newTerminalName + "Center");
    });
    //if I click on the terminal mask move the cursor to the end of the string
    $('#' + newTerminalName + 'maskContent').click(function () {
        TerminalRefreshCursor(newTerminalName + "Center");
    });
    //controll the drag and drop of the terminal
    $("#" + newTerminalName + 'DragHandle').mousedown(function () {
        $("#" + newTerminalName).draggable();
        isDraggable = true;
    });
    //dropping the terminal
    $("#" + newTerminalName + 'DragHandle').mouseup(function () {
        if (isDraggable) {
            $("#" + newTerminalName).draggable('destroy');
            isDraggable = false;
        }
    });

    //listen for keypresses on the terminal
    /*
     9 TAB
     20 CAPS LOCK
     16 SHIFT
     17 CONTROL
     18 ALT
     91 WINDOWS BTN
     37 LEFT ARROW
     39 RIGHT ARROW
     38 UP ARROW
     40 DOWN ARROW
     13 ENTER KEY
     8 DELETE
     */


    $("#" + newTerminalName).keydown(function (e) {
        var kC = e.keyCode;//get the key code
        //errors(kC)
        //keys to omit from the count
        if (kC != 9 && kC != 20 && kC != 16 && kC != 17 && kC != 18 && kC != 91 && kC != 37 && kC != 39 && kC != 38 && kC != 40 && kC != 13 && kC != 8) {
            entryCharCount++;
        }
        //don't let the enter key do what is was intended for - I want to control the return function
        if (kC == 13) {
            /*
             I need to process the text entered now
             */
            var stringDivRef = $("#" + newTerminalName + "Center");
            var string = stringDivRef.text();//get the string I need to look at
            var totalLineLength = string.length;//get the total length of that string



            //ProcessTerminalText(newTerminalName,stringDivRef,string,totalLineLength,entryCharCount)//pass that data to the processor
            //errors(ProcessTerminalText(string,totalLineLength,entryCharCount));

            //errors("@ "+terminalHost.name)
            TerminalCommands(newTerminalName + "Center", ProcessTerminalText(string, totalLineLength, entryCharCount));

            TerminalRefreshCursor(newTerminalName + "Center");//make sure that everytime I touch the terminal the cursor is set at the end of the string
            entryCharCount = 0;//reset the keystroke counter - enter is the end of the line for all commands
            TerminalScroller(stringDivRef);
            e.preventDefault();
        }
        /*
         TRICKY!
         I look to see if I am pressing the delete key - if I am I look to see how many characters I have typed (omitting the omitted keys of course).
         If I hit the delete key the number entryCharCount that was incremented as I typed is decremented until 0.
         */
        if (kC == 8 && entryCharCount > 0) {
            entryCharCount--;
        } else if (kC == 8 && entryCharCount == 0) {
            e.preventDefault();
        }
    });

    ///init everything
    TerminalLayout(newTerminalName, OS, startMessage, teminalTitleColor, terminalTitleOffsetX, terminalTitleOffsetY);//instantiate the terminal
    TerminalRefreshCursor(newTerminalName + "Center");//make sure that everytime I touch the terminal the cursor is set at the end of the string
    TerminalScroller($("#" + newTerminalName + "Center"));//scroll to bottom of page
}