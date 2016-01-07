//just a simple function that sends to SetCursor.js
function TerminalRefreshCursor(e) {
    var editableDiv = document.getElementById(e);
    cursorManager.setEndOfContenteditable(editableDiv);
}