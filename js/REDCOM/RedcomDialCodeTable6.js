//home code tables 6 globals
var redcomHomeCodeTable6CurrntEntry = 0,
        dialCodeTable6_1 = ["", "0", "- default -", "0", "dct", "7", "0", "0", "0", "", "", "0", ""],
        dialCodeTable6_2 = ["", "1", "123", "0", "dct", "7", "3", "0", "ac", "", "", "0", ""],
        dialCodeTable6_3 = ["", "2", "", "", "", "", "", "", "", "", "", "", ""],
        dialCodeTable6_4 = ["", "3", "", "", "", "", "", "", "", "", "", "", ""],
        dialCodeTable6_5 = ["", "4", "", "", "", "", "", "", "", "", "", "", ""],
        dialCodeTable6_6 = ["", "5", "", "", "", "", "", "", "", "", "", "", ""],
        dialCodeTable6_7 = ["", "6", "", "", "", "", "", "", "", "", "", "", ""],
        dialCodeTable6_8 = ["", "7", "", "", "", "", "", "", "", "", "", "", ""],
        dialCodeTable6_9 = ["", "8", "n0x", "0", "rte", "0", "0", "0", "ac", "", "", "0", ""],
        dialCodeTable6_10 = ["", "9", "n1x", "0", "rte", "0", "0", "0", "ac", "", "", "0", ""];






function restartRedcomDialCodeTable6() {
    RedcomDialCodeTable6("");
}


function RedcomDialCodeTable6(attributes) {
    var totalDialCodeTables = [dialCodeTable6_1, dialCodeTable6_2, dialCodeTable6_3, dialCodeTable6_4, dialCodeTable6_5, dialCodeTable6_6, dialCodeTable6_7, dialCodeTable6_8, dialCodeTable6_9, dialCodeTable6_10];


    $("#" + redcomRef.name + "TerminalCenter").html("");//always clear the terminal


    var newValArr = StringReplaceToArray(attributes);//swap characters so I can build an array




    errors(newValArr);



    for (var o = 0; o < newValArr.length; o++) {
        var t = o + 1;//I add 1 because the odd entries are the value for the even entries

        switch (newValArr[o]) {
            case "entry":
                redcomHomeCodeTable6CurrntEntry = newValArr[t];
                restartRedcomDialCodeTable6();
                break;
            case "val":
                totalDialCodeTables[redcomHomeCodeTable6CurrntEntry][5] = newValArr[t];
                restartRedcomDialCodeTable6();
                break;
            case "pattern":
                totalDialCodeTables[redcomHomeCodeTable6CurrntEntry][2] = newValArr[t];
                restartRedcomDialCodeTable6();
                break;
            case "type":
                totalDialCodeTables[redcomHomeCodeTable6CurrntEntry][4] = newValArr[t];
                restartRedcomDialCodeTable6();
                break;
            case "mark":
                totalDialCodeTables[redcomHomeCodeTable6CurrntEntry][8] = newValArr[t];
                restartRedcomDialCodeTable6();
                break;
        }

    }




    /////////////////////////////////////////////////////////////////////////////////////////////////////////////>
    //clear out all carets
    for (var i = 0; i < totalDialCodeTables.length; i++) {
        totalDialCodeTables[i][0] = "";
    }
    totalDialCodeTables[redcomHomeCodeTable6CurrntEntry][0] = ">";//set the caret























    var redcomDialCodeTableData = "";




    redcomDialCodeTableData += '<table class="terminalTables">';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td colspan="14" class="centerTD">DIAL CODE TABLE</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td width="8%">DCT</td>';
    redcomDialCodeTableData += '<td width="2%" class="centerTD">=</td>';
    redcomDialCodeTableData += '<td width="18%">6</td>';
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
    redcomDialCodeTableData += '<td>LINE=0</td>';
    redcomDialCodeTableData += '<td>Trunk=0</td>';
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





    for (var i = 0; i < totalDialCodeTables.length; i++) {
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
    redcomDialCodeTableData += '</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '<tr>';
    redcomDialCodeTableData += '<td colspan="14">Translation type : dct - Dial code table</td>';
    redcomDialCodeTableData += '</tr>';
    redcomDialCodeTableData += '</table>';

    return redcomDialCodeTableData;
}