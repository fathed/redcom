/*
 * 
 */
function RedcomHardwareConfig() {
    ///each of the slots
    this.slotsArr = ['P', 'T', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
    this.slotsPos = '0';//where i move the caret to indicate the current slot
    this.currPos = 2; //so I know what position I am working with -- mostly redundant

    //the row for each slot
    this.slotsRowArr = [];
    this.slotsRowArr.push(["pro", "pro", "0", "0", "0", "0"]);// P
    this.slotsRowArr.push(["tsi", "tun", "0", "0", "0", "0"]);// T
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 0
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 1
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 2
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 3
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 4
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 5
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 6
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 7
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 8
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 9
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 10
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 11
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 12
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 13
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 14
    this.slotsRowArr.push(["na", "na", "", "", "", ""]);// 15

    this.hardwareTableCenter = [];
    this.hardwareTableCenter.push(["0", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    this.hardwareTableCenter.push(["-", "-", "-", "1", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    this.hardwareTableCenter.push(["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    this.hardwareTableCenter.push(["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    this.hardwareTableCenter.push(["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"]);

    this.showRedcomFillTable = false;

    //global scope vars for the hardware config function
    this.RedcomHardwareFreeNumber = 0;

    this.tslots = 0;

    this.buildHardwareTable = function () {
        var RedcomHardwareConfigData = "";
        RedcomHardwareConfigData += '<table id="hardwareTable" class="terminalTables tableBorder">';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td colspan="34" class="greyTD centerTD">HARDWARE CONFIGURATION</td>';
        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td colspan="34">';
        RedcomHardwareConfigData += '<table class="innerTables">';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td width="11%">Timeslot Numbers</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>&nbsp;</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>3</td>';
        RedcomHardwareConfigData += '<td>3</td>';
        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td width="11%">Free: ' + this.RedcomHardwareFreeNumber + ' |</td>';
        RedcomHardwareConfigData += '<td>0</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>3</td>';
        RedcomHardwareConfigData += '<td>4</td>';
        RedcomHardwareConfigData += '<td>5</td>';
        RedcomHardwareConfigData += '<td>6</td>';
        RedcomHardwareConfigData += '<td>7</td>';
        RedcomHardwareConfigData += '<td>8</td>';
        RedcomHardwareConfigData += '<td>9</td>';
        RedcomHardwareConfigData += '<td>0</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>3</td>';
        RedcomHardwareConfigData += '<td>4</td>';
        RedcomHardwareConfigData += '<td>5</td>';
        RedcomHardwareConfigData += '<td>6</td>';
        RedcomHardwareConfigData += '<td>7</td>';
        RedcomHardwareConfigData += '<td>8</td>';
        RedcomHardwareConfigData += '<td>9</td>';
        RedcomHardwareConfigData += '<td>0</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '<td>2</td>';
        RedcomHardwareConfigData += '<td>3</td>';
        RedcomHardwareConfigData += '<td>4</td>';
        RedcomHardwareConfigData += '<td>5</td>';
        RedcomHardwareConfigData += '<td>6</td>';
        RedcomHardwareConfigData += '<td>7</td>';
        RedcomHardwareConfigData += '<td>8</td>';
        RedcomHardwareConfigData += '<td>9</td>';
        RedcomHardwareConfigData += '<td>0</td>';
        RedcomHardwareConfigData += '<td>1</td>';
        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td colspan="34">------------------------------------------------------------------------------------------------------------------------------</td>';
        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '</table>';

        ///insert new table

        if (this.showRedcomFillTable) {
            RedcomHardwareConfigData += '<table class="terminalTables">';
            RedcomHardwareConfigData += '<tr>';
            RedcomHardwareConfigData += '<td width="11%" class="borderBarRight centerTD">0-31</td>';

            for (var i = 0; i < this.hardwareTableCenter[0].length; i++) {
                RedcomHardwareConfigData += '<td>' + this.hardwareTableCenter[0][i] + '</td>';
            }

            RedcomHardwareConfigData += ' </tr>';
            RedcomHardwareConfigData += '<tr>';
            RedcomHardwareConfigData += '<td class="borderBarRight centerText">32-63</td>';

            for (var i = 0; i < this.hardwareTableCenter[1].length; i++) {
                RedcomHardwareConfigData += '<td>' + this.hardwareTableCenter[1][i] + '</td>';
            }

            RedcomHardwareConfigData += ' </tr>';
            RedcomHardwareConfigData += '<tr>';
            RedcomHardwareConfigData += '<td class="borderBarRight centerText">64-95</td>';

            for (var i = 0; i < this.hardwareTableCenter[2].length; i++) {
                RedcomHardwareConfigData += '<td>' + this.hardwareTableCenter[2][i] + '</td>';
            }

            RedcomHardwareConfigData += ' </tr>';
            RedcomHardwareConfigData += '<tr>';
            RedcomHardwareConfigData += '<td class="borderBarRight centerText">96-127</td>';

            for (var i = 0; i < this.hardwareTableCenter[3].length; i++) {
                RedcomHardwareConfigData += '<td>' + this.hardwareTableCenter[3][i] + '</td>';
            }

            RedcomHardwareConfigData += ' </tr>';
            RedcomHardwareConfigData += '<tr>';
            RedcomHardwareConfigData += '<td class="borderBarRight centerText">128-159</td>';

            for (var i = 0; i < this.hardwareTableCenter[4].length; i++) {
                RedcomHardwareConfigData += '<td>' + this.hardwareTableCenter[4][i] + '</td>';
            }

            RedcomHardwareConfigData += ' </tr>';
            RedcomHardwareConfigData += '</table>';
        }

        RedcomHardwareConfigData += '</td>';
        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr >';
        RedcomHardwareConfigData += '<td colspan="34">';
        RedcomHardwareConfigData += '<table class="innerTables">';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td width="6%">SLOT</td>';
        RedcomHardwareConfigData += '<td width="2%">=</td>';

        for (var i = 0; i < this.slotsArr.length; i++) {
            RedcomHardwareConfigData += '<td width="4%">_';
            if (this.slotsPos == this.slotsArr[i]) {
                this.currPos = i;
                RedcomHardwareConfigData += '&gt;';
            }
            RedcomHardwareConfigData += this.slotsArr[i];
            RedcomHardwareConfigData += '</td>';
        }

        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td>Type</td>';
        RedcomHardwareConfigData += '<td>:</td>';

        for (var i = 0; i < this.slotsRowArr.length; i++) {
            RedcomHardwareConfigData += '<td>';
            RedcomHardwareConfigData += this.slotsRowArr[i][0];
            RedcomHardwareConfigData += '</td>';
        }

        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td>PID</td>';
        RedcomHardwareConfigData += '<td>=</td>';

        for (var i = 0; i < this.slotsRowArr.length; i++) {
            RedcomHardwareConfigData += '<td>';
            RedcomHardwareConfigData += this.slotsRowArr[i][1];
            RedcomHardwareConfigData += '</td>';
        }

        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td>Ts1</td>';
        RedcomHardwareConfigData += '<td>:</td>';

        for (var i = 0; i < this.slotsRowArr.length; i++) {
            RedcomHardwareConfigData += '<td>';
            RedcomHardwareConfigData += this.slotsRowArr[i][2];
            RedcomHardwareConfigData += '</td>';
        }

        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td>TsQty</td>';
        RedcomHardwareConfigData += '<td>:</td>';

        for (var i = 0; i < this.slotsRowArr.length; i++) {
            RedcomHardwareConfigData += '<td>';
            RedcomHardwareConfigData += this.slotsRowArr[i][3];
            RedcomHardwareConfigData += '</td>';
        }

        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td>Pt1</td>';
        RedcomHardwareConfigData += '<td>:</td>';

        for (var i = 0; i < this.slotsRowArr.length; i++) {
            RedcomHardwareConfigData += '<td>';
            RedcomHardwareConfigData += this.slotsRowArr[i][4];
            RedcomHardwareConfigData += '</td>';
        }

        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td>PtQty</td>';
        RedcomHardwareConfigData += '<td>:</td>';

        for (var i = 0; i < this.slotsRowArr.length; i++) {
            RedcomHardwareConfigData += '<td>';
            RedcomHardwareConfigData += this.slotsRowArr[i][5];
            RedcomHardwareConfigData += '</td>';
        }

        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '</table>';
        RedcomHardwareConfigData += '</td>';
        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '<tr>';
        RedcomHardwareConfigData += '<td colspan="66">msu: 0/0 &nbsp;&nbsp;&nbsp;tslots: ' + this.tslots + ' &nbsp;&nbsp;&nbsp;TSAUTO= on &nbsp;&nbsp;&nbsp;PORTAUTO= on&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Empty database</td>';
        RedcomHardwareConfigData += '</tr>';
        RedcomHardwareConfigData += '</table>';

        return RedcomHardwareConfigData;
    };
}