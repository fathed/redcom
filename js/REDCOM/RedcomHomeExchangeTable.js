function RedcomHomeExchangeTable() {

    this.homeExchangeArr = [];
    this.currRow = 0;
    this.numOfRows = 5;

    var whichHomeExchangeTableDB = 0; //let me know which row we are working on - zero indexed array


    var tablesBuilt = false;

    this.restorHomeExchangeTable = function () {
        for (var t = 0; t < this.numOfRows; t++) {
            this.homeExchangeArr.push(["", t, "----", "----", "----", "both_opt", "native", "no name"]);
        }
    };
    if (!tablesBuilt) {
        this.restorHomeExchangeTable();
        tablesBuilt = true; // stop the class from over-writing the table
    }

    this.homeExchangeTable = function () {
        var redcomHomeExchangeTableData = "";
        redcomHomeExchangeTableData += '<table class="terminalTables tableBorder">';
        redcomHomeExchangeTableData += '<tr>';
        redcomHomeExchangeTableData += '<td class="greyTD centerTD" colspan="8" >HOME EXCHANGE TABLE</td>';
        redcomHomeExchangeTableData += '</tr>';
        redcomHomeExchangeTableData += '<tr>';
        redcomHomeExchangeTableData += '<td width="1%">&nbsp;</td>';
        redcomHomeExchangeTableData += '<td>ENTRY</td>';
        redcomHomeExchangeTableData += '<td>CC</td>';
        redcomHomeExchangeTableData += '<td>NPA</td>';
        redcomHomeExchangeTableData += '<td>HMX</td>';
        redcomHomeExchangeTableData += '<td>TYPE</td>';
        redcomHomeExchangeTableData += '<td>LOCATION</td>';
        redcomHomeExchangeTableData += '<td>DESCRIPTION</td>';
        redcomHomeExchangeTableData += '</tr>';


        for (var i = 0; i < this.homeExchangeArr.length; i++) {
            redcomHomeExchangeTableData += ' <tr>';
            redcomHomeExchangeTableData += '<td>';
            if (i == this.currRow) {
                redcomHomeExchangeTableData += "&gt;";
            } else {
                redcomHomeExchangeTableData += this.homeExchangeArr[i][0];
            }
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '<td>';
            redcomHomeExchangeTableData += this.homeExchangeArr[i][1];
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '<td>';
            redcomHomeExchangeTableData += this.homeExchangeArr[i][2];
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '<td>';
            redcomHomeExchangeTableData += this.homeExchangeArr[i][3];
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '<td>';
            redcomHomeExchangeTableData += this.homeExchangeArr[i][4];
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '<td>';
            redcomHomeExchangeTableData += this.homeExchangeArr[i][5];
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '<td>';
            redcomHomeExchangeTableData += this.homeExchangeArr[i][6];
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '<td>';
            redcomHomeExchangeTableData += this.homeExchangeArr[i][7];
            redcomHomeExchangeTableData += '</td>';
            redcomHomeExchangeTableData += '</tr>';
        }

        redcomHomeExchangeTableData += '<tr class="greyTD"> ';
        redcomHomeExchangeTableData += '<td colspan="8" >msu:0/0</td>';
        redcomHomeExchangeTableData += '</tr>';
        redcomHomeExchangeTableData += '</table>';

        return redcomHomeExchangeTableData;
    };

}