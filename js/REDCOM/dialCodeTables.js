/*
 * Infinite Dial Code Tables
 * written by J Gibbens June 17, 2014
 * 
 * This file works in conjunction with displayDCT.js
 * 
 * 
 * NOTES:
 * 
 * when i am interacting with the dial code tables i will actually be interacting with this page.
 * i tell the redcom i want to use dial code table 6, that references the main array on this page
 * each command will tell this page what spot in the array i want to change. i then update
 * the display view with the new data
 */
function dialCodeTables() {
    /*
     * i need a way to have an init method to set default parameters
     * use a check to see what data tables we want to start with and build those
     */
    var dctList = [], //main array - holds all dial code tables and their current status
            defaultVals,
            dct_display_ref;


    this.tablesBuilt = false;
    this.tablePOS = 0;//always store the current dial code table we are working on
    this.caretPos = 0;//position of the caret and the pointer

    if (!this.tablesBuilt) {
        //I can have up to 100 dial code tables here.
        for (var t = 0; t < 100; t++) {
            dctList[t] = [
                t,
                ['NPA CHECK', 'sil "silence"', 'munch it', 'hammer'],
                [
                    ["", "0", "- default -", "0", "dct", "7", "0", "0", "0", "", "", "0", ""],
                    ["", "1", "123", "0", "dct", "7", "3", "0", "ac", "", "", "0", ""],
                    ["", "2", "", "", "", "", "", "", "", "", "", "", ""],
                    ["", "3", "", "", "", "", "", "", "", "", "", "", ""],
                    ["", "4", "", "", "", "", "", "", "", "", "", "", ""],
                    ["", "5", "", "", "", "", "", "", "", "", "", "", ""],
                    ["", "6", "", "", "", "", "", "", "", "", "", "", ""],
                    ["", "7", "", "", "", "", "", "", "", "", "", "", ""],
                    ["", "8", "n0x", "0", "rte", "0", "0", "0", "ac", "", "", "0", ""],
                    ["", "9", "n1x", "0", "rte", "0", "0", "0", "ac", "", "", "0", ""]
                ]
            ];
        }
        this.tablesBuilt = true;
    }

    this.updateADCT = dctList;
    /*
     * I need to retrieve the table data
     */
    this.retrunDCT = function (i) {
        return dctList[i];
    };
    /*
     * return the entire array - for testing purposes
     */
    this.retrunADCT = function () {
        return dctList;
    };

    /*
     * i pass the array position of my entry: if it is table 6 then it will be entry 6
     * i also pass the table data - since the tables are all the same i will know exactly what fields are needed
     */
    this.buldDCT = function () {

        /*dctList[tableNum] = [
         tableNum,
         ['NPA CHECK', 'hat', 'munch it'],
         [
         ["", "0", "- default -", "0", "dct", "7", "0", "0", "0", "", "", "0", ""],
         ["", "1", "123", "0", "dct", "7", "3", "0", "ac", "", "", "0", ""],
         ["", "2", "", "", "", "", "", "", "", "", "", "", ""],
         ["", "3", "", "", "", "", "", "", "", "", "", "", ""],
         ["", "4", "", "", "", "", "", "", "", "", "", "", ""],
         ["", "5", "", "", "", "", "", "", "", "", "", "", ""],
         ["", "6", "", "", "", "", "", "", "", "", "", "", ""],
         ["", "7", "", "", "", "", "", "", "", "", "", "", ""],
         ["", "8", "n0x", "0", "rte", "0", "0", "0", "ac", "", "", "0", ""],
         ["", "9", "n1x", "0", "rte", "0", "0", "0", "ac", "", "", "0", ""]
         ]
         ];*/
    };



    this.displayDCT = function (table) {
        this.tablePOS = table;


        var dctData = '';
        dctData += '<table class="terminalTables tableBorder">';
        dctData += '<tr>';
        dctData += '<td colspan="14" class="greyTD centerTD" class="centerTD">DIAL CODE TABLE</td>';
        dctData += '</tr>';
        dctData += '<tr>';
        dctData += '<td width="8%">DCT</td>';
        dctData += '<td width="2%" class="centerTD">=</td>';
        dctData += '<td width="18%">' + dctList[table][0] + '</td>';
        dctData += '<td width="9%">&nbsp;</td>';
        dctData += '<td width="6%">&nbsp;</td>';
        dctData += '<td width="5%">&nbsp;</td>';
        dctData += '<td width="5%">&nbsp;</td>';
        dctData += '<td width="5%">&nbsp;</td>';
        dctData += '<td width="6%">&nbsp;</td>';
        dctData += '<td width="6%">&nbsp;</td>';
        dctData += '<td width="9%">&nbsp;</td>';
        dctData += '<td width="10%">DIAL_TIMER</td>';
        dctData += '<td width="5%" class="centerTD">=</td>';
        dctData += '<td width="6%">07.000</td>';
        dctData += '</tr>';
        dctData += '<tr>';
        dctData += '<td>NAME</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>' + dctList[table][1][0] + '</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>DTMF</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>off</td>';
        dctData += '</tr>';
        dctData += '<tr>';
        dctData += '<td>TONETABLE</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>' + dctList[table][1][1] + '</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>NPA</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>off</td>';
        dctData += '</tr>';
        dctData += '<tr>';
        dctData += '<td>intercept</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>LINE=0</td>';
        dctData += '<td>Trunk=0</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>QUANTITY</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>' + dctList[table][2].length + '</td>';
        dctData += '</tr>';
        dctData += '<tr>';
        dctData += '<td>FORMAT</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>delete</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td>COMP</td>';
        dctData += '<td class="centerTD">=</td>';
        dctData += '<td>off</td>';
        dctData += '</tr>';
        dctData += '<tr>';
        dctData += '<td colspan="14">';
        dctData += '<table width="100%">';
        dctData += '<tr>';
        dctData += '<td>&nbsp;</td>';
        dctData += '<td class="centerTD">ENTRY</td>';
        dctData += '<td class="centerTD">PATTERN</td>';
        dctData += '<td class="centerTD">SC</td>';
        dctData += '<td class="centerTD">TYPE</td>';
        dctData += '<td class="centerTD">VAL</td>';
        dctData += '<td class="centerTD">PRE</td>';
        dctData += '<td class="centerTD">POS</td>';
        dctData += '<td class="centerTD">MARK</td>';
        dctData += '<td class="centerTD">NEXT</td>';
        dctData += '<td class="centerTD">SB/SNU</td>';
        dctData += '<td class="centerTD">SST/NST</td>';
        dctData += '<td class="centerTD">TID</td>';
        dctData += '</tr>';


        /*
         * this has a nested array so i first need to point to the correct spot in the main array
         * then i loop through to see how many are there
         * then i loop through them and place the values
         * 
         * fucking brilliant - i can have as many data tables as i want
         */

        for (var i = 0; i < dctList[table][2].length; i++) {
            dctData += '<tr>';
            for (var j = 0; j < dctList[table][2][i].length; j++) {
                dctData += '<td class="centerTD">';
                /*
                 I need to place the caret and move the pointer to the correct position
                 this way I can ensure I am changing the correct data
                 */
                if (i == this.caretPos) {
                    dctList[table][2][i][0] = "&gt;";
                } else {
                    dctList[table][2][i][0] = "";
                }
                dctList[table][2][i][1] = i;
                dctData += dctList[table][2][i][j];
                dctData += '</td>';
            }
            dctData += '</tr>';
        }


        dctData += '</table>';
        dctData += '</td>';
        dctData += '</tr>';
        dctData += '<tr>';
        dctData += '<td colspan="14">Translation type : dct - Dial code table</td>';
        dctData += '</tr>';
        dctData += '</table>';

        return dctData;
    };
}