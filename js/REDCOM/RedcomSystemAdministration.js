


function RedcomSystemAdministration() {

    //Redcom System Administration globals
    this.sysAdminTableArr = [];
    this.sysAdminTableArr.push(["000", "&lt;no name&gt;"]);
    this.sysAdminTableArr.push(["0", "Non-cluster system."]);
    this.sysAdminTableArr.push(["0", "( MSU 0 is active )"]);
    this.sysAdminTableArr.push(["", ""]);
    this.sysAdminTableArr.push(["", ""]);
    this.sysAdminTableArr.push(["", ""]);
    this.hardwareSlotsRowArr = [];
    this.hardwareSlotsArr = [];




    this.sysAdminTable = function () {
        var RedcomSystemAdministrationData = "";

        RedcomSystemAdministrationData += '<table class="terminalTables tableBorder">';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td class="centerTD" colspan="4">SLICE V4.0 SYSTEM ADMINISTRATION</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td width="6%">Network</td>';
        RedcomSystemAdministrationData += '<td class="centerTD" width="2%">=</td>';
        RedcomSystemAdministrationData += '<td class="centerTD" width="3%">' + this.sysAdminTableArr[0][0] + '</td>';
        RedcomSystemAdministrationData += '<td>' + this.sysAdminTableArr[0][1] + '</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td colspan="4">&nbsp;</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>Cluster</td>';
        RedcomSystemAdministrationData += '<td class="centerTD" >=</td>';
        RedcomSystemAdministrationData += '<td class="centerTD">' + this.sysAdminTableArr[1][0] + '</td>';
        RedcomSystemAdministrationData += '<td>' + this.sysAdminTableArr[1][1] + '</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>MSU</td>';
        RedcomSystemAdministrationData += '<td class="centerTD" >=</td>';
        RedcomSystemAdministrationData += '<td class="centerTD">' + this.sysAdminTableArr[2][0] + '</td>';
        RedcomSystemAdministrationData += '<td>' + this.sysAdminTableArr[2][1] + '</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>SLOT</td>';
        RedcomSystemAdministrationData += '<td class="centerTD" >=</td>';
        RedcomSystemAdministrationData += '<td class="centerTD">' + this.sysAdminTableArr[3][0] + '</td>';
        RedcomSystemAdministrationData += '<td>' + this.sysAdminTableArr[3][1] + '</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>CCT</td>';
        RedcomSystemAdministrationData += '<td class="centerTD" >=</td>';
        RedcomSystemAdministrationData += '<td class="centerTD">' + this.sysAdminTableArr[4][0] + '</td>';
        RedcomSystemAdministrationData += '<td>' + this.sysAdminTableArr[4][1] + '</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>TERM</td>';
        RedcomSystemAdministrationData += '<td class="centerTD" >=</td>';
        RedcomSystemAdministrationData += '<td class="centerTD">' + this.sysAdminTableArr[5][0] + '</td>';
        RedcomSystemAdministrationData += '<td>' + this.sysAdminTableArr[5][1] + '</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td class="centerTD" colspan="4">--------------------------- current database msu ---------------------------</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td colspan="4">&nbsp;</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td colspan="4">';
        RedcomSystemAdministrationData += '<table width="100%">';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td width="5%">slot</td>';
        RedcomSystemAdministrationData += '<td width="2%" class="centerTD">|</td>';

        for (var i = 0; i < this.hardwareSlotsArr.length; i++) {
            RedcomSystemAdministrationData += '<td width="4%">';
            RedcomSystemAdministrationData += this.hardwareSlotsArr[i];
            RedcomSystemAdministrationData += '</td>';
        }

        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>----</td>';
        RedcomSystemAdministrationData += '<td class="centerTD">+</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '<td>---</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>type </td>';
        RedcomSystemAdministrationData += '<td class="centerTD">|</td>';

        for (var i = 0; i < this.hardwareSlotsRowArr.length; i++) {
            RedcomSystemAdministrationData += '<td>' + this.hardwareSlotsRowArr[i][0] + '</td>';
        }

        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '<tr>';
        RedcomSystemAdministrationData += '<td>pid</td>';
        RedcomSystemAdministrationData += '<td class="centerTD">|</td>';

        for (var i = 0; i < this.hardwareSlotsRowArr.length; i++) {
            RedcomSystemAdministrationData += '<td>' + this.hardwareSlotsRowArr[i][1] + '</td>';
        }

        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '</table>';
        RedcomSystemAdministrationData += '</td>';
        RedcomSystemAdministrationData += '</tr>';
        RedcomSystemAdministrationData += '</table>';

        return RedcomSystemAdministrationData;
    };
}