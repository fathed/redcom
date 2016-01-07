function RedcomDatabaseTableConfigSettings() {


//build the table
    var dbTable = '<table class="terminalTables"><tr>  <td colspan="3" class="centerTD">DATABASE TABLE CONFIGURATION</td></tr><tr>  <td>Bytes in database</td>  <td>Used: 407816</td>  <td>Free: 392184</td></tr></table><table class="terminalTables"><tr>  <td width="5%">TABLE</td>  <td width="3%">CURR</td>  <td width="2%">min</td>  <td width="3%">max</td>  <td width="3%">size</td>  <td width="4%">scope</td>  <td width="80%">COMMENT</td></tr></table><div id="tableScrollPanel"><table id="databaseTableConfigList" class="terminalTables"></table></div><table class="terminalTables"><tr>  <td>MSU= 0/0</td>  <td>VERBOSE= off</td></tr></table>';


    /*
     table data
     */


    var databaseTableConfigSettings = [];

    //16 down is dctm so in arr would be 15
    databaseTableConfigSettings.push(["aflst", "5", "1", "750", "56", "msu", "Regular STN ANI feature lists"]);//----------------pos 0
    databaseTableConfigSettings.push(["afmem", "50", "1", "5000", "23", "msu", "Regular STN ANI feature entries"]);//------------pos 1
    databaseTableConfigSettings.push(["agent", "3", "1", "7", "36", "network", "SNMP Agent Configurations"]);//------------------pos 2
    databaseTableConfigSettings.push(["attribute", "1", "1", "255", "35", "network", "Attribute tables"]);//---------------------pos 3
    databaseTableConfigSettings.push(["block", "100", "1", "1600", "1", "network", "Block setting for port connections"]);//-----pos 4
    databaseTableConfigSettings.push(["budgets", "20", "1", "200", "4", "network", "Budgets Table"]);//--------------------------pos 5
    databaseTableConfigSettings.push(["change", "10", "1", "500", "29", "msu", "Change number intercept"]);//--------------------pos 6
    databaseTableConfigSettings.push(["class", "20", "1", "500", "34", "network", "Class features services (0)"]);//-------------pos 7
    databaseTableConfigSettings.push(["cled", "1", "1", "400", "40", "network", "Console LED map"]);//---------------------------pos 8
    databaseTableConfigSettings.push(["connect", "100", "1", "1600", "1", "network", "Connect setting for trunks"]);//-----------pos 9
    databaseTableConfigSettings.push(["cron", "1", "1", "150", "201", "msu", "Cron timer entries"]);//---------------------------pos 10
    databaseTableConfigSettings.push(["cusdb", "1", "1", "9999", "20", "msu", "Custom database information"]);//-----------------pos 11
    databaseTableConfigSettings.push(["daflst", "5", "1", "1000", "56", "network", "Dynamic STN ANI feature lists"]);//----------pos 12
    databaseTableConfigSettings.push(["dafmem", "50", "1", "5000", "23", "network", "Dynamic STN ANI feature lists"]);//---------pos 13
    databaseTableConfigSettings.push(["dcta", "20", "1", "250", "59", "network", "Dial table attributes"]);//--------------------pos 14
    databaseTableConfigSettings.push(["dctm", "5", "1", "1000", "56", "network", "Dynamic STN ANI feature lists"]);//------------pos 15
    databaseTableConfigSettings.push(["dev", "46", "10", "1000", "102", "network", "System device configurations"]);//-----------pos 16
    databaseTableConfigSettings.push(["domain", "10", "1", "255", "4", "network", "MLPP domain number table"]);//----------------pos 17
    databaseTableConfigSettings.push(["dstint", "2", "1", "1000", "303", "msu", "Dynamic Station Information"]);//---------------pos 18
    databaseTableConfigSettings.push(["dtrmem", "8", "1", "64", "426", "network", "DB transaction definition"]);//---------------pos 20
    databaseTableConfigSettings.push(["dwake", "2", "1", "1000", "8", "msu", "Dynamic wake-up tables"]);//-----------------------pos 21
    databaseTableConfigSettings.push(["fblist", "20", "1", "100", "24", "network", "Feature button list table"]);//--------------pos 22

    var RedcomDatabaseTableConfigSettings = "";

    for (var i = 0; i < databaseTableConfigSettings.length; i++) {
        var fill = "";
        fill += "<tr>";
        fill += "<td>" + databaseTableConfigSettings[i][0] + "</td>";
        fill += "<td class='rightTD'>" + databaseTableConfigSettings[i][1] + "</td>";
        fill += "<td class='rightTD'>" + databaseTableConfigSettings[i][2] + "</td>";
        fill += " <td class='rightTD'>" + databaseTableConfigSettings[i][3] + "</td>";
        fill += " <td class='rightTD'>" + databaseTableConfigSettings[i][4] + "</td>";
        fill += "<td>" + databaseTableConfigSettings[i][5] + "</td>";
        fill += "<td>" + databaseTableConfigSettings[i][6] + "</td>";
        fill += " </tr>";
        //$("#databaseTableConfigList").append(fill);
    };
}