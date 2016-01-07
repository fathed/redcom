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
    var newStartIndex = startIndex - endIndex, //subtract the number of key strokes from the total string length
            newentry = stringRef.substring(newStartIndex, startIndex);
    return newentry;
}