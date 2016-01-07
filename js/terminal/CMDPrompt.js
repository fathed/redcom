///get all the text from te terminal
function CMDPrompt(cmdContainer, inputOffsetX, inputOffsetY) {
    $("#" + cmdContainer).ready(function () {
        var terminalText = "#" + cmdContainer + "Center",
                commandPrompt = $("#" + cmdContainer).find(".commandPrompt"),
                pos = $(commandPrompt).position().left,
                breakSpace = "$nbsp;";

        $("#" + cmdContainer + "Input").html("");

        var inputLen = $("#" + cmdContainer + "Center").text().length + 1;

        for (var i = 0; i < inputLen; i++) {
            $("#" + cmdContainer + "Input").append("&nbsp;");
        }

        var editableDiv = document.getElementById(cmdContainer + "Input");
        cursorManager.setEndOfContenteditable(editableDiv);
    });
}










