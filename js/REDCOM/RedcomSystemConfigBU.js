function RedcomSystemConfig() {

    /*
     attributes are passed as an array or individually
     i need to check the name of the attribute and see if it exists to change
     if it exists then I need to change it
     */
//(.*)= everything upto the equal
//=(.*) everything beyond equal

    var piece = attributes.replace("; ", "="),
            stringParts = piece.split("="),
            switchType = "custom - custom defined switch",
            hmxSetting = "",
            npaSetting = "",
            ltaSetting = "",
            typeSetting = "both_opt",
            startingAt = 1000,
            nextNum = 100,
            SIP_USER_START = "REDCOM",
            sip_user_next = "REDCOM1",
            specificClotID = "no",
            numbersSequenced = "consecutively",
            fill = "",
            att = stringParts[0],
            att2 = stringParts[1];

    if (att == "switch_type") {
        switch (att2) {
            case "mil":
                switchType = "Military - switch defined for military";
                break;
            case "custom":
                switchType = "custom - custom defined switch";
                break;
        }
    }


    if (att == "hmx") {
        hmxSetting = att2;
    }
    if (att == "sequence") {
        switch (att2) {
            case "consecutive":
                numbersSequenced = "consecutively";
                break;
            case "custom":
                numbersSequenced = "custom - custom defined switch";
                break;
        }
    }




    var RedcomSystemConfigTable = '<table class="terminalTables">';
    RedcomSystemConfigTable += '<tr><td colspan="4" class="greyTD centerTD">SYSTEM CONFIGURATION</td></tr>';
    RedcomSystemConfigTable += '<tr><td colspan="4">SWITCH_TYPE = ' + switchType + '</td></tr>';
    RedcomSystemConfigTable += '<tr><td>NPA =' + npaSetting + '</td><td>HMX =' + hmxSetting + '</td><td>TYPE = ' + typeSetting + '</td><td>LATA =' + ltaSetting + '</td></tr>';
    RedcomSystemConfigTable += '<tr><td colspan="4">station numbers SEQUENCED = ' + numbersSequenced + ', STARTing at = ' + startingAt + ' next: ' + nextNum + '</td></tr>';
    RedcomSystemConfigTable += '<tr><td>SIP_USER_START:' + SIP_USER_START + '</td><td>&nbsp;</td><td colspan="2">sip_user_next:' + sip_user_next + '</td></tr>';
    RedcomSystemConfigTable += '<tr><td>SPECIFIC clot id = ' + specificClotID + '</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
    RedcomSystemConfigTable += '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
    RedcomSystemConfigTable += '<tr><td colspan="4">cluster - MSUs up</td></tr>';
    RedcomSystemConfigTable += '<tr><td colspan="4">' + fill + '</td></tr>';
    RedcomSystemConfigTable += '</table>';

//return RedcomSystemConfigTable;
}