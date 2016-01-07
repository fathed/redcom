function RedcomLineClasses() {

    this.lineClasses_List = [];
    this.currLineClass = 0;//which line class of service are we using?

    for (var t = 0; t < 100; t++) {
        this.lineClasses_List[t] = ['no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no'];
    };


    this.display_LineClasses = function () {

        var lineClasses_Data = '';

        lineClasses_Data += '<table  class="terminalTables tableBorder">';
        lineClasses_Data += '<tbody>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" class="greyTD centerTD">LINE CLASSES OF SERVICE GROUP</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" >&nbsp;</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" >NAME = Analog Line Class</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" >&nbsp;</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="centerText">BSYO=' + this.lineClasses_List[this.currLineClass][0] + '</td>';
        lineClasses_Data += '<td class="centerText">CRNG=' + this.lineClasses_List[this.currLineClass][1] + '</td>';
        lineClasses_Data += '<td class="centerText">LNR=' + this.lineClasses_List[this.currLineClass][2] + '</td>';
        lineClasses_Data += '<td class="centerText">PPAY=' + this.lineClasses_List[this.currLineClass][3] + '</td>';
        lineClasses_Data += '<td class="centerText">SPAY=' + this.lineClasses_List[this.currLineClass][4] + '</td>';
        lineClasses_Data += '<td class="centerText">TRAP=' + this.lineClasses_List[this.currLineClass][5] + '</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="centerText">CFWD=' + this.lineClasses_List[this.currLineClass][6] + '</td>';
        lineClasses_Data += '<td class="centerText">CWT=' + this.lineClasses_List[this.currLineClass][7] + '</td>';
        lineClasses_Data += '<td class="centerText">MANT=' + this.lineClasses_List[this.currLineClass][8] + '</td>';
        lineClasses_Data += '<td class="centerText">PREM=' + this.lineClasses_List[this.currLineClass][9] + '</td>';
        lineClasses_Data += '<td class="centerText">SPL3=' + this.lineClasses_List[this.currLineClass][10] + '</td>';
        lineClasses_Data += '<td class="centerText">TRKX=' + this.lineClasses_List[this.currLineClass][11] + '</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="centerText">CNAB=' + this.lineClasses_List[this.currLineClass][12] + '</td>';
        lineClasses_Data += '<td class="centerText">DATP=' + this.lineClasses_List[this.currLineClass][13] + '</td>';
        lineClasses_Data += '<td class="centerText">MIXD=' + this.lineClasses_List[this.currLineClass][14] + '</td>';
        lineClasses_Data += '<td class="centerText">RADI=' + this.lineClasses_List[this.currLineClass][15] + '</td>';
        lineClasses_Data += '<td class="centerText">SSR=' + this.lineClasses_List[this.currLineClass][16] + '</td>';
        lineClasses_Data += '<td class="centerText">WAKE=' + this.lineClasses_List[this.currLineClass][17] + '</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="centerText">CNBU=' + this.lineClasses_List[this.currLineClass][18] + '</td>';
        lineClasses_Data += '<td class="centerText">DID=' + this.lineClasses_List[this.currLineClass][19] + '</td>';
        lineClasses_Data += '<td class="centerText">NODP=' + this.lineClasses_List[this.currLineClass][20] + '</td>';
        lineClasses_Data += '<td class="centerText">RDL=' + this.lineClasses_List[this.currLineClass][21] + '</td>';
        lineClasses_Data += '<td class="centerText">TGEN=' + this.lineClasses_List[this.currLineClass][22] + '</td>';
        lineClasses_Data += '<td class="centerText">WARM=' + this.lineClasses_List[this.currLineClass][23] + '</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="centerText">CNDB=' + this.lineClasses_List[this.currLineClass][24] + '</td>';
        lineClasses_Data += '<td class="centerText">DTF=' + this.lineClasses_List[this.currLineClass][25] + '</td>';
        lineClasses_Data += '<td class="centerText">MSG=' + this.lineClasses_List[this.currLineClass][26] + '</td>';
        lineClasses_Data += '<td class="centerText">RUTH=' + this.lineClasses_List[this.currLineClass][27] + '</td>';
        lineClasses_Data += '<td class="centerText">TI=' + this.lineClasses_List[this.currLineClass][28] + '</td>';
        lineClasses_Data += '<td class="centerText">XDB=' + this.lineClasses_List[this.currLineClass][29] + '</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="centerText">CNF=' + this.lineClasses_List[this.currLineClass][30] + '</td>';
        lineClasses_Data += '<td class="centerText">DTMF=' + this.lineClasses_List[this.currLineClass][31] + '</td>';
        lineClasses_Data += '<td class="centerText">PCWT=' + this.lineClasses_List[this.currLineClass][32] + '</td>';
        lineClasses_Data += '<td class="centerText">RWAK=' + this.lineClasses_List[this.currLineClass][33] + '</td>';
        lineClasses_Data += '<td class="centerText">TO=' + this.lineClasses_List[this.currLineClass][34] + '</td>';
        lineClasses_Data += '<td class="centerText">XFR=' + this.lineClasses_List[this.currLineClass][35] + '</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="centerText">COLF=' + this.lineClasses_List[this.currLineClass][36] + '</td>';
        lineClasses_Data += '<td class="centerText">DYN=' + this.lineClasses_List[this.currLineClass][37] + '</td>';
        lineClasses_Data += '<td class="centerText">PDT=' + this.lineClasses_List[this.currLineClass][38] + '</td>';
        lineClasses_Data += '<td class="centerText">&nbsp;</td>';
        lineClasses_Data += '<td class="centerText">&nbsp;</td>';
        lineClasses_Data += '<td class="centerText">&nbsp;</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" >&nbsp;</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" >&nbsp;</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" >&nbsp;</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td colspan="6" >&nbsp;</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '<tr>';
        lineClasses_Data += '<td class="greyTD" colspan="6">msu:0/0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cos = ' + this.currLineClass + '</td>';
        lineClasses_Data += '</tr>';
        lineClasses_Data += '</tbody>';
        lineClasses_Data += '</table>';

        return lineClasses_Data;
    };

}