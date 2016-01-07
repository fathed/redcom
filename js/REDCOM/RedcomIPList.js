function RedcomIPList() {

    /*    var iplist_List = [], //main array - holds all dial code tables and their current status
     defaultVals,
     iplist__display_ref;*/

    this.iplist_List = [];
    this.tablesBuilt = false;

    this.selected = 0; // which row will the caret show up on

    if (!this.tablesBuilt) {
        this.iplist_List = [
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", "", "", ""],
            ["", "FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF:FFFF", "y", "y", "y", "y", "y", "y", "y", "y"]
        ];


        this.tablesBuilt = true;
    }






    this.display_IPList = function () {

        var iplist_Data = '';

        iplist_Data += '<table  class="terminalTables tableBorder">';
        iplist_Data += '<tbody>';
        iplist_Data += '<tr>';
        iplist_Data += '<td colspan="11" class="greyTD centerTD">IP RESTRICTION LIST</td>';
        iplist_Data += '</tr>';
        iplist_Data += '<tr>';
        iplist_Data += '<td width="4%">&nbsp;</td>';
        iplist_Data += '<td width="1%">&nbsp;</td>';
        iplist_Data += '<td width="69%">IP_MASK</td>';
        iplist_Data += '<td width="5%">&nbsp;</td>';
        iplist_Data += '<td width="4%">TELNET</td>';
        iplist_Data += '<td width="3%">&nbsp;</td>';
        iplist_Data += '<td width="3%">SMDR</td>';
        iplist_Data += '<td width="3%">&nbsp;</td>';
        iplist_Data += '<td width="3%">TDMP</td>';
        iplist_Data += '<td width="3%">&nbsp;</td>';
        iplist_Data += '<td width="2%">LCS</td>';
        iplist_Data += '</tr>';
        iplist_Data += '<tr>';
        iplist_Data += '<td>ENTRY</td>';
        iplist_Data += '<td>&nbsp;</td>';

        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>STELNET</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>HOST</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>NOTE</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>MAUI</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '</tr>';




        for (var i = 0; i < this.iplist_List.length; i++) {

            /*
             
             I only want to be able to add y or n = anything else is stripped out
             */
            if (this.iplist_List[i][2] != 'y' && this.iplist_List[i][2] != 'n') {
                this.iplist_List[i][2] = '';
            }
            if (this.iplist_List[i][3] != 'y' && this.iplist_List[i][3] != 'n') {
                this.iplist_List[i][3] = '';
            }
            if (this.iplist_List[i][4] != 'y' && this.iplist_List[i][4] != 'n') {
                this.iplist_List[i][4] = '';
            }
            if (this.iplist_List[i][5] != 'y' && this.iplist_List[i][5] != 'n') {
                this.iplist_List[i][5] = '';
            }
            if (this.iplist_List[i][6] != 'y' && this.iplist_List[i][6] != 'n') {
                this.iplist_List[i][6] = '';
            }
            if (this.iplist_List[i][7] != 'y' && this.iplist_List[i][7] != 'n') {
                this.iplist_List[i][7] = '';
            }
            if (this.iplist_List[i][8] != 'y' && this.iplist_List[i][8] != 'n') {
                this.iplist_List[i][8] = '';
            }
            if (this.iplist_List[i][9] != 'y' && this.iplist_List[i][9] != 'n') {
                this.iplist_List[i][9] = '';
            }




            iplist_Data += '<tr>';
            iplist_Data += '<td class="rightTD">' + i + '</td>';
            //move the caret to the position saved in this.selected
            if (i == this.selected) {
                iplist_Data += '<td class="centerTD">&gt;</td>';
            } else {
                iplist_Data += '<td class="centerTD">' + this.iplist_List[i][0] + '</td>';
            }

            iplist_Data += '<td>' + this.iplist_List[i][1] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][2] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][3] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][4] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][5] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][6] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][7] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][8] + '</td>';
            iplist_Data += '<td class="centerTD">' + this.iplist_List[i][9] + '</td>';
            iplist_Data += '</tr>';
        }



        iplist_Data += '<tr>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '</tr>';
        iplist_Data += '<tr>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '</tr>';
        iplist_Data += '<tr>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '</tr>';
        iplist_Data += '<tr>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '<td>&nbsp;</td>';
        iplist_Data += '</tr>';
        iplist_Data += '<tr>';
        iplist_Data += '<td class="greyTD" colspan="11">msu:0/0</td>';
        iplist_Data += '</tr>';

        iplist_Data += '</tbody>';
        iplist_Data += '</table>';

        return iplist_Data;
    };
}