/*
 Realism is important. This process takes the entire string, looks at the number of keystrokes I have used, adds those two numbers together. The total number of chars in the oringinal string is my starting point. 
 I then take the new number when I add the original count with the keystroke count for my ending point. I use substring to get the command I just entered
 
 this comes from Terminal.js
 */
//function ProcessTerminalText(terminalRef,stringDivRef,stringRef,startIndex,endIndex){
function ProcessTerminalText(stringRef, startIndex, endIndex) {


    //terminalRef = terminal name
    //stringDivRef = reference to the div used to hold the string
    //stringRef = reference to the text in the div
    //startIndex = total number of char in the string
    //endIndex = total number of chars entered by the user
    var newStartIndex = startIndex - endIndex;//subtract the number of key strokes from the total string length
    //errors(stringRef.substring(newStartIndex,startIndex));//use substring to get the text I just entered
    var newentry = stringRef.substring(newStartIndex, startIndex);
    //// check for general commands - TerminalCommands.js
    //TerminalCommands(terminalRef,newentry);
    //RedcomCommands(terminalRef,newentry)
    /*
     the following needs to get the actual line name as I am changing it
     for now it is working with just one string
     */
    //stringDivRef.append('<br>C:/\Users/\gibbensj.JNN>');
    //TerminalRefreshCursor(terminalRef);//make sure that everytime I touch the terminal the cursor is set at the end of the string





    return newentry;

}