function RedcomDatabaseTableConfigSettings() {

    this.databaseTableConfigSettings = [];
    this.posToSeclect = 'aflst';
    this.dbPosition = 0;
    this.writer = 'testing';


    this.dbmax = 0;
    this.dbmin = 0;

    //16 down is dctm so in arr would be 15
    this.databaseTableConfigSettings.push(["aflst", "5", "1", "750", "56", "msu", "Regular STN ANI feature lists"]);//----------------pos 0
    this.databaseTableConfigSettings.push(["afmem", "50", "1", "5000", "23", "msu", "Regular STN ANI feature entries"]);//------------pos 1
    this.databaseTableConfigSettings.push(["agent", "3", "1", "7", "36", "network", "SNMP Agent Configurations"]);//------------------pos 2
    this.databaseTableConfigSettings.push(["attribute", "1", "1", "255", "35", "network", "Attribute tables"]);//---------------------pos 3
    this.databaseTableConfigSettings.push(["block", "100", "1", "1600", "1", "network", "Block setting for port connections"]);//-----pos 4
    this.databaseTableConfigSettings.push(["budgets", "20", "1", "200", "4", "network", "Budgets Table"]);//--------------------------pos 5
    this.databaseTableConfigSettings.push(["change", "10", "1", "500", "29", "msu", "Change number intercept"]);//--------------------pos 6
    this.databaseTableConfigSettings.push(["class", "20", "1", "500", "34", "network", "Class features services (0)"]);//-------------pos 7
    this.databaseTableConfigSettings.push(["cled", "1", "1", "400", "40", "network", "Console LED map"]);//---------------------------pos 8
    this.databaseTableConfigSettings.push(["connect", "100", "1", "1600", "1", "network", "Connect setting for trunks"]);//-----------pos 9
    this.databaseTableConfigSettings.push(["cron", "1", "1", "150", "201", "msu", "Cron timer entries"]);//---------------------------pos 10
    this.databaseTableConfigSettings.push(["cusdb", "1", "1", "9999", "20", "msu", "Custom database information"]);//-----------------pos 11
    this.databaseTableConfigSettings.push(["daflst", "5", "1", "1000", "56", "network", "Dynamic STN ANI feature lists"]);//----------pos 12
    this.databaseTableConfigSettings.push(["dafmem", "50", "1", "5000", "23", "network", "Dynamic STN ANI feature lists"]);//---------pos 13
    this.databaseTableConfigSettings.push(["dcta", "20", "1", "250", "59", "network", "Dial table attributes"]);//--------------------pos 14
    this.databaseTableConfigSettings.push(["dctm", "5", "1", "1000", "56", "network", "Dynamic STN ANI feature lists"]);//------------pos 15
    this.databaseTableConfigSettings.push(["dev", "46", "10", "1000", "102", "network", "System device configurations"]);//-----------pos 16
    this.databaseTableConfigSettings.push(["domain", "10", "1", "255", "4", "network", "MLPP domain number table"]);//----------------pos 17
    this.databaseTableConfigSettings.push(["dstint", "2", "1", "1000", "303", "msu", "Dynamic Station Information"]);//---------------pos 18
    this.databaseTableConfigSettings.push(["dtrmem", "8", "1", "64", "426", "network", "DB transaction definition"]);//---------------pos 20
    this.databaseTableConfigSettings.push(["dwake", "2", "1", "1000", "8", "msu", "Dynamic wake-up tables"]);//-----------------------pos 21
    this.databaseTableConfigSettings.push(["fblist", "20", "1", "100", "24", "network", "Feature button list table"]);//--------------pos 22






    this.db_table = function () {
        var dbTable = "";
        dbTable += '<table cellpadding="2" id="RedcomSliceGenerationTable" class="terminalTables"> ';
        dbTable += '<tr class="greyTD centerTD">';
        dbTable += '<td colspan="8" class="centerTD">DATABASE TABLE CONFIGURATION</td> ';
        dbTable += '</tr> ';
        dbTable += '<tr><td colspan="2">Bytes in database</td>';
        dbTable += '<td>Used: 407816</td>';
        dbTable += '<td colspan="5">Free: 392184</td> ';
        dbTable += '</tr> ';
        dbTable += '<tr>';
        dbTable += '<td width="7%">&nbsp;</td>';
        dbTable += '<td width="5%">TABLE</td>';
        dbTable += '<td width="3%">CURR</td>';
        dbTable += '<td width="2%">min</td>';
        dbTable += '<td width="3%">max</td>';
        dbTable += '<td width="3%">size</td>';
        dbTable += '<td width="4%">scope</td>';
        dbTable += '<td width="80%">COMMENT</td> ';
        dbTable += '</tr>';


        /*
         i want to look to see if i changed the table data
         if i did then rebuild the table with the changes
         if i didnt look to see if there were any changes made and move the caret to the last selected table
         */


        for (var i = 0; i < this.databaseTableConfigSettings.length; i++) {
            dbTable += "<tr>";
            dbTable += "<td class='rightTD'>";
            //look to see where I move the caret to indicate a selected table


            if (this.posToSeclect == this.databaseTableConfigSettings[i][0]) {
                this.dbmin = Number(this.databaseTableConfigSettings[i][2]);
                this.dbmax = Number(this.databaseTableConfigSettings[i][3]);
                this.dbPosition = i;
                tableSelected = this.posToSeclect;
                this.databaseTableConfigSettings[i][0] = this.posToSeclect;//show the table with the changes
                dbTable += ">";
            }



            dbTable += "</td>";
            dbTable += "<td>" + this.databaseTableConfigSettings[i][0] + "</td>";
            dbTable += "<td class='rightTD'>" + this.databaseTableConfigSettings[i][1] + "</td>";
            dbTable += "<td class='rightTD'>" + this.databaseTableConfigSettings[i][2] + "</td>";
            dbTable += " <td class='rightTD'>" + this.databaseTableConfigSettings[i][3] + "</td>";
            dbTable += " <td class='rightTD'>" + this.databaseTableConfigSettings[i][4] + "</td>";
            dbTable += "<td>" + this.databaseTableConfigSettings[i][5] + "</td>";
            dbTable += "<td>" + this.databaseTableConfigSettings[i][6] + "</td>";
            dbTable += " </tr>";
        }



        dbTable += '<tr  class="greyTD centerTD"> <td colspan="3">MSU= 0/0</td> <td colspan="5">VERBOSE= off</td></tr></table>';
        return dbTable;
    };


}