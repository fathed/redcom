function terminal(terminalParams) {
    var terminalBDY = "", tName = terminalParams;

    terminalBDY += '<div class="terminal" id="' + tName + ' ">';
    terminalBDY += '<div class="terminal_header">';
    terminalBDY += '<div class="terminal_title">' + tName + '</div>';
    terminalBDY += '<div class="terminal_btnsTop">';
    terminalBDY += '<div class="dialog_closeBtn dialog_btnsTop">';
    terminalBDY += '<div class="dialog_btnTxt">x</div>';
    terminalBDY += '</div>';
    terminalBDY += '<div class="dialog_minBtn dialog_btnsTop">';
    terminalBDY += '<div class="dialog_btnTxt_min">-</div>';
    terminalBDY += '</div>';
    terminalBDY += '</div>';
    terminalBDY += '</div>';
    //  terminalBDY += '<div  id="' + tName + '_textBodyMask" class="terminal_bodyMask"></div>';
    terminalBDY += '<div id="' + tName + '_textBody" class="terminal_body" contenteditable="true">replace text</div>';
    terminalBDY += '</div>';

    $('body').prepend(terminalBDY);
}