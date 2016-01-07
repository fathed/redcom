function RedcomCommands(terminalRef, command) {
    var t = terminalRef + "Center";//the terminal will always use Center
    /*
     these regex are to match the string EXACTLY 
     */
    if (command.match(/^adm\/line$/gi)) {
        //commandType = "line";
        //	errors("line");	
    } else {
        //get the standard error message - ignore empty
        //if(!command.match(/^\s*$/gi))
        //$("#"+t).append("<br>'"+command+"' is not recognized as an internal or external command, operable program or batch file.");
    }
}