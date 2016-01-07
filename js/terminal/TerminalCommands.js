function TerminalCommands(terminalRef, command, Prompt, redcomRef) {
    /*
     these regex are to match the string EXACTLY 
     */
    //I want to use the Windows method for clearing the terminal
    if (command.match(/^help$/gi)) {
        terminalRef.append(TerminalHelp() + Prompt);
    }
    else {
        //no matter what happens I get the correct curosr text
        terminalRef.append("<br><br>" + Prompt);
    }
}








