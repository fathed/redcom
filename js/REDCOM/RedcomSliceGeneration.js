/*
 * not much here yet - this pretty much just shows a table that I am not 100% 
 * sure even changes. but it is an object and therefore ready to roll if needed
 */


function RedcomSliceGeneration() {

    this.slicegen_table = function () {
        var RedcomSliceGenerationTable = "";

        RedcomSliceGenerationTable += "<table id='RedcomSliceGenerationTable' class='terminalTables'>";
        RedcomSliceGenerationTable += "<tr class='greyTD centerTD'>";
        RedcomSliceGenerationTable += "<td colspan='5' class='centerTD'>SLICE V4.0 DATABASE GENERATION</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td width='5%' colspan='2'>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td width='1%'>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td width='2%'>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td width='83%'>NAME</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>NETWORK</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>=</td>";
        RedcomSliceGenerationTable += "<td class='rightTD'>000</td>";
        RedcomSliceGenerationTable += "<td>&lt;no name&gt;</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>CLUSTER</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>=</td>";
        RedcomSliceGenerationTable += "<td class='rightTD'>0</td>";
        RedcomSliceGenerationTable += "<td>&lt;no name&gt;</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>THIS_MSU</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>=</td>";
        RedcomSliceGenerationTable += "<td class='rightTD'>0</td>";
        RedcomSliceGenerationTable += "<td>Empty database</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>AREA</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>=</td>";
        RedcomSliceGenerationTable += "<td class='rightTD'>0</td>";
        RedcomSliceGenerationTable += "<td>(cluster based registration area)</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>CONTACT</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>=</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>LOCATION</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>=</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>MSU ^msu, slot ^slot</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>DATABASE</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>database table configuration</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>ETHERNET</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>IP network configuration</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>HARDWARE</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>hardware configuration</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>PROTECT</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>job and keyword user protection</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>SYSTEM</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>system configuration</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>TIMESLOT</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>timeslot and hardware configuration</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>NOTE</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>note filter configuration</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "<tr>";
        RedcomSliceGenerationTable += "<td colspan='2'>USERS</td>";
        RedcomSliceGenerationTable += "<td class='centerTD'>-</td>";
        RedcomSliceGenerationTable += "<td colspan='2'>add, delete, and change shell users</td>";
        RedcomSliceGenerationTable += "</tr>";




        RedcomSliceGenerationTable += "<tr class='greyTD'>";
        RedcomSliceGenerationTable += "<td>MSU= </td>";
        RedcomSliceGenerationTable += "<td>0/0</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "<td>&nbsp;</td>";
        RedcomSliceGenerationTable += "</tr>";
        RedcomSliceGenerationTable += "</table>";

        return RedcomSliceGenerationTable;
    };

}