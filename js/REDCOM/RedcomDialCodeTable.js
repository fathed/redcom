//home code table globals
var redcomHomeCodeTableNumber = 0, //which homecode table 
        totalDialCodeTables = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""], //there are ten possible entries
        dctLINE = 0,
        dctTRUNK = 0;













//force a refresh of the tables
function restartRedcomDialCodeTable() {
    RedcomDialCodeTable("");
}




//load the appropriate set of entries
function populateDialCodeTableArray() {
    switch (redcomHomeCodeTableNumber) {
        case 1:
            totalDialCodeTables = dialCodeTable1_total;
            break;
        case 2:
            totalDialCodeTables = dialCodeTable2_total;
            break;
        case 3:
            totalDialCodeTables = dialCodeTable3_total;
            break;
        case 4:
            totalDialCodeTables = dialCodeTable4_total;
            break;
        case 5:
            totalDialCodeTables = dialCodeTable5_total;
            break;
        case 6:
            totalDialCodeTables = dialCodeTable6_total;
            break;
        case 7:
            totalDialCodeTables = dialCodeTable7_total;
            break;
        case 8:
            totalDialCodeTables = dialCodeTable8_total;
            break;
        case 9:
            totalDialCodeTables = dialCodeTable9_total;
            break;
        case 10:
            totalDialCodeTables = dialCodeTable10_total;
            break;
        case 11:
            totalDialCodeTables = dialCodeTable11_total;
            break;
    }

}



//update according to what table we are using
function redcomDCT_Update(thisDCT, newValArr) {
    var tipper = thisDCT - 1, //since arrays are zero indexed I have to move back one space since I am using real numbers
            counter = totalDialCodeTables[0];




    for (var o = 0; o < newValArr.length; o++) {

        var t = o + 1;//I add 1 because the odd entries are the value for the even entries

        switch (newValArr[o]) {
            case "entry":
                for (var i = 1; i < totalDialCodeTables.length; i++) {
                    totalDialCodeTables[i][0] = "";
                }
                totalDialCodeTables[0] = Number(newValArr[t]) + 1;
                totalDialCodeTables[totalDialCodeTables[0]][0] = ">";//set the caret
                restartRedcomDialCodeTable();
                break;
            case "pattern":
                totalDialCodeTables[totalDialCodeTables[0]][2] = newValArr[t];
                restartRedcomDialCodeTable();
                break;
            case "sc":
                totalDialCodeTables[totalDialCodeTables[0]][3] = newValArr[t];
                restartRedcomDialCodeTable();
                break;
            case "type":

                totalDialCodeTables[totalDialCodeTables[0]][4] = newValArr[t];
                restartRedcomDialCodeTable();
                break;
            case "val":
                totalDialCodeTables[totalDialCodeTables[0]][5] = newValArr[t];
                restartRedcomDialCodeTable();
                break;
            case "pre":
                totalDialCodeTables[totalDialCodeTables[0]][6] = newValArr[t];
                restartRedcomDialCodeTable();
                break;
            case "pos":
                totalDialCodeTables[totalDialCodeTables[0]][7] = newValArr[t];
                restartRedcomDialCodeTable();
                break;
            case "mark":
                totalDialCodeTables[totalDialCodeTables[0]][8] = newValArr[t];
                restartRedcomDialCodeTable();
                break;
            case "line":
                dctLINE = newValArr[t];
                break;
            case "trunk":
                dctTRUNK = newValArr[t];
                break;
        }

    }
}

function RedcomDialCodeTable(attributes) {
    var newValArr = StringReplaceToArray(attributes), redcomDialCodeTableData = "";//swap characters so I can build an array
    $("#" + redcomRef.name + "TerminalCenter").html("");//always clear the terminal
    populateDialCodeTableArray();
    redcomDCT_Update(redcomHomeCodeTableNumber, newValArr);//pass in the array and update
    /*
     if i am using dial code table 6 then i first populate the totalDialCodeTables array with the 10 dial code entries for table 6.    
     */
    redcomDialCodeTableData += '<table class="terminalTables">';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td colspan="14" class="centerTD">DIAL CODE TABLE</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td width="8%">DCT</td>';
    redcomDialCodeTableData += '<td width="2%" class="centerTD">=</td>';
    redcomDialCodeTableData += '<td width="18%">' + redcomHomeCodeTableNumber + '</td>';
    redcomDialCodeTableData += '<td width="9%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="6%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="5%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="5%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="5%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="6%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="6%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="9%">&nbsp;</td>';
    redcomDialCodeTableData += '<td width="10%">DIAL_TIMER</td>';
    redcomDialCodeTableData += '<td width="5%" class="centerTD">=</td>';
    redcomDialCodeTableData += '<td width="6%">07.000</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td>NAME</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>NPA Check</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>DTMF</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>off</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td>TONETABLE</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>sil &quot;silence&quot;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>NPA</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>off</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td>intercept</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>LINE=' + dctLINE + '</td>';
    redcomDialCodeTableData += '<td>Trunk=' + dctTRUNK + '</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>QUANTITY</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>10</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td>FORMAT</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>delete</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td>COMP</td>';
    redcomDialCodeTableData += '<td class="centerTD">=</td>';
    redcomDialCodeTableData += '<td>off</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td colspan="14">';
    redcomDialCodeTableData += '<div class="scrollerTable">';
    redcomDialCodeTableData += '<table width="100%">';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td>&nbsp;</td>';
    redcomDialCodeTableData += '<td class="centerTD">ENTRY</td>';
    redcomDialCodeTableData += '<td class="centerTD">PATTERN</td>';
    redcomDialCodeTableData += '<td class="centerTD">SC</td>';
    redcomDialCodeTableData += '<td class="centerTD">TYPE</td>';
    redcomDialCodeTableData += '<td class="centerTD">VAL</td>';
    redcomDialCodeTableData += '<td class="centerTD">PRE</td>';
    redcomDialCodeTableData += '<td class="centerTD">POS</td>';
    redcomDialCodeTableData += '<td class="centerTD">MARK</td>';
    redcomDialCodeTableData += '<td class="centerTD">NEXT</td>';
    redcomDialCodeTableData += '<td class="centerTD">SB/SNU</td>';
    redcomDialCodeTableData += '<td class="centerTD">SST/NST</td>';
    redcomDialCodeTableData += '<td class="centerTD">TID</td>';
    redcomDialCodeTableData += '</tr>';

    for (var i = 1; i < totalDialCodeTables.length; i++) {
        redcomDialCodeTableData += '<tr>';
        //I just use the first entry array because they all have the same number or elements and all I need is a count
        for (var j = 0; j < dialCodeTable6_1.length; j++) {
            redcomDialCodeTableData += '<td class="centerTD">';
            redcomDialCodeTableData += totalDialCodeTables[i][j];
            redcomDialCodeTableData += '</td>';
        }
        redcomDialCodeTableData += '</tr>';
    }

    redcomDialCodeTableData += '</table>';
    redcomDialCodeTableData += '</div>';
    redcomDialCodeTableData += '</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td colspan="14">Translation type : dct - Dial code table</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '</table>';

    return redcomDialCodeTableData;
}