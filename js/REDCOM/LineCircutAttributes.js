function LineCircutAttributes() {


    this.caretPos = 0; // which row will the caret show up on

    this.lineCircut_List = [
        ['0:5150', '414', '574-5150'],
        'none',
        'Commanding Officer',
        'none',
        'email',
        'forward',
        'on',
        'off',
        'off',
        'off',
        ['un-restricted DOD', '0'],
        'coverage',
        'r',
        'r',
        'fo',
        'off',
        'off',
        'off',
        'OHS_DIGITS',
        ['18', 'normal'],
        '0',
        '0',
        'none',
        'Not Activated',
        'CAC1',
        'CAC2',
        'CAC3',
        'XXXX',
        '0',
        'none',
        'LAST_SAVE',
        'off',
        ['1', 'Analog Line Class'],
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no',
        'no'
    ];

    this.display_LineCircut = function () {

        var lineCircut_Data = '';

        lineCircut_Data += '<table width="100%" border="0" class="terminalTables tableBorder">';
        lineCircut_Data += '<tbody>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td colspan="13" class="greyTD centerTD">LINE CIRCUT ATTRIBUTES</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td width="7%">STATION</td>';
        lineCircut_Data += '<td width="2%" class="centerTD">=</td>';
        lineCircut_Data += '<td colspan="7">' + this.lineCircut_List[0][0] + '&nbsp;&nbsp;( ' + this.lineCircut_List[0][1] + ' )&nbsp;&nbsp;' + this.lineCircut_List[0][2] + '</td>';
        lineCircut_Data += '<td colspan="3">LINKED group = ' + this.lineCircut_List[1] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>NAME</td>';
        lineCircut_Data += '<td class="centerTD">=</td>';
        lineCircut_Data += '<td colspan="7">' + this.lineCircut_List[2] + '.</td>';
        lineCircut_Data += '<td colspan="3">member group : ' + this.lineCircut_List[3] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>EMAIL</td>';
        lineCircut_Data += '<td class="centerTD">=</td>';
        lineCircut_Data += '<td colspan="7">' + this.lineCircut_List[4] + '</td>';
        lineCircut_Data += '<td colspan="3">FORWARD = ' + this.lineCircut_List[5] + '</td>';
        lineCircut_Data += '<td></td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>ATTRIBUTES</td>';
        lineCircut_Data += '<td class="centerTD">=</td>';
        lineCircut_Data += '<td colspan="7">' + this.lineCircut_List[6] + '</td>';
        lineCircut_Data += '<td width="12" colspan="2">ALL=' + this.lineCircut_List[7] + '</td>';
        lineCircut_Data += '<td width="12%">DNA=' + this.lineCircut_List[8] + '</td>';
        lineCircut_Data += '<td>BUSY=' + this.lineCircut_List[9] + '</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>TOLL_LIST</td>';
        lineCircut_Data += '<td class="centerTD">=</td>';
        lineCircut_Data += '<td colspan="7">' + this.lineCircut_List[10][0] + '&nbsp;( ' + this.lineCircut_List[10][1] + ' )</td>';
        lineCircut_Data += '<td colspan="3">COVERAGE = ' + this.lineCircut_List[11] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>priority</td>';
        lineCircut_Data += '<td class="centerTD">: </td>';
        lineCircut_Data += '<td colspan="7">IDLE=' + this.lineCircut_List[12] + ' DEFAULT=' + this.lineCircut_List[13] + ' MAX_p=' + this.lineCircut_List[14] + '</td>';
        lineCircut_Data += '<td colspan="2">CALL=' + this.lineCircut_List[15] + '</td>';
        lineCircut_Data += '<td>CDNA=' + this.lineCircut_List[16] + '</td>';
        lineCircut_Data += '<td>CBUSY=' + this.lineCircut_List[17] + '</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>OHS_DIGITS</td>';
        lineCircut_Data += '<td class="centerTD">= </td>';
        lineCircut_Data += '<td colspan="7">' + this.lineCircut_List[18] + '</td>';
        lineCircut_Data += '<td colspan="3">RING = ( ' + this.lineCircut_List[19][0] + ' )&nbsp;' + this.lineCircut_List[19][1] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>DCT</td>';
        lineCircut_Data += '<td class="centerTD">=</td>';
        lineCircut_Data += '<td>' + this.lineCircut_List[20] + '</td>';
        lineCircut_Data += '<td colspan="2">SCREEN = ' + this.lineCircut_List[21] + '</td>';
        lineCircut_Data += '<td colspan="4">AFL = ' + this.lineCircut_List[22] + '</td>';
        lineCircut_Data += '<td>AUTH_CODE  </td>';
        lineCircut_Data += '<td>&nbsp;=&nbsp;</td>';
        lineCircut_Data += '<td>' + this.lineCircut_List[23] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>CAC1=' + this.lineCircut_List[24] + '</td>';
        lineCircut_Data += '<td class="centerTD">&nbsp;</td>';
        lineCircut_Data += '<td colspan="2">CAC2=' + this.lineCircut_List[25] + '</td>';
        lineCircut_Data += '<td colspan="5">CAC3=' + this.lineCircut_List[26] + '</td>';
        lineCircut_Data += '<td>PASSWORD</td>';
        lineCircut_Data += '<td>&nbsp;=&nbsp;</td>';
        lineCircut_Data += '<td>' + this.lineCircut_List[27] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>ATTR_TABLE</td>';
        lineCircut_Data += '<td class="centerTD">=</td>';
        lineCircut_Data += '<td width="3%">' + this.lineCircut_List[28] + '</td>';
        lineCircut_Data += '<td colspan="6">SNS = ' + this.lineCircut_List[29] + '</td>';
        lineCircut_Data += '<td>LAST_SAVE</td>';
        lineCircut_Data += '<td>&nbsp;=&nbsp;</td>';
        lineCircut_Data += '<td>' + this.lineCircut_List[30] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '<td colspan="7">&nbsp;</td>';
        lineCircut_Data += '<td>BACKP</td>';
        lineCircut_Data += '<td>&nbsp;=&nbsp;</td>';
        lineCircut_Data += '<td>' + this.lineCircut_List[31] + '</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td colspan="9">COS = ' + this.lineCircut_List[32][0] + '&nbsp;-&nbsp;' + this.lineCircut_List[32][1] + '</td>';
        lineCircut_Data += '<td colspan="3">&nbsp;</td>';
        lineCircut_Data += '<td>&nbsp;</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td colspan="13">';
        lineCircut_Data += '<table width="100%" border="0">';
        lineCircut_Data += '<tbody>';
        lineCircut_Data += '<tr>';







        lineCircut_Data += '<td width="16%">BSYO=' + this.lineCircut_List[33] + '</td>';
        lineCircut_Data += '<td>CRNG=' + this.lineCircut_List[34] + '</td>';
        lineCircut_Data += '<td>LNR=' + this.lineCircut_List[35] + '</td>';
        lineCircut_Data += '<td>PPAY=' + this.lineCircut_List[36] + '</td>';
        lineCircut_Data += '<td>SPAY=' + this.lineCircut_List[37] + '</td>';
        lineCircut_Data += '<td>TRAP=' + this.lineCircut_List[38] + '</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>CFWD=' + this.lineCircut_List[39] + '</td>';
        lineCircut_Data += '<td>CWT=' + this.lineCircut_List[40] + '</td>';
        lineCircut_Data += '<td>MANT=' + this.lineCircut_List[41] + '</td>';
        lineCircut_Data += '<td>PREM=' + this.lineCircut_List[42] + '</td>';
        lineCircut_Data += '<td>SPL3=' + this.lineCircut_List[43] + '</td>';
        lineCircut_Data += '<td>TRKX=' + this.lineCircut_List[44] + '</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>CNAB=' + this.lineCircut_List[45] + '</td>';
        lineCircut_Data += '<td>DATP=' + this.lineCircut_List[46] + '</td>';
        lineCircut_Data += '<td>MIXD=' + this.lineCircut_List[47] + '</td>';
        lineCircut_Data += '<td>RADI=' + this.lineCircut_List[48] + '</td>';
        lineCircut_Data += '<td>SSR=' + this.lineCircut_List[49] + '</td>';
        lineCircut_Data += '<td>WAKE=' + this.lineCircut_List[50] + '</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td>CNBU=' + this.lineCircut_List[51] + '</td>';
        lineCircut_Data += '<td>DID=' + this.lineCircut_List[52] + '</td>';
        lineCircut_Data += '<td>NODP=' + this.lineCircut_List[53] + '</td>';
        lineCircut_Data += '<td>RDL=' + this.lineCircut_List[54] + '</td>';
        lineCircut_Data += '<td>TGEN=' + this.lineCircut_List[55] + '</td>';
        lineCircut_Data += '<td>WARM=' + this.lineCircut_List[56] + '</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '</tbody>';
        lineCircut_Data += '</table>';
        lineCircut_Data += '</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '<tr>';
        lineCircut_Data += '<td colspan="13" class="greyTD">Address: 0/0.4/0 | STN=' + this.lineCircut_List[0][0] + ' | Hdw: xd2 | Name: ' + this.lineCircut_List[2] + '.</td>';
        lineCircut_Data += '</tr>';
        lineCircut_Data += '</tbody>';
        lineCircut_Data += '</table>';


        return lineCircut_Data;
    };
}