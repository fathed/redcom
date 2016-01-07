/*
 * there are 18 tables built to represent the 18 slot areas I know about. 
 */
function RedcomSlotScreen() {


    this.slotScreen = []; //reference to the main array that holds all of the slots
    this.currSlot = 2; // just so we know FOR SURE what slot we are on - this can be synced to the hardware table slot selection if need be

    this.slotScreenPorts = 'none';
    this.slotScreenTimeslots = 'none';

    this.restorSlotScreens = function () {
        for (var t = 0; t < 18; t++) {
            this.slotScreen[t] = [
                ['PHY', 'auto (10half 10full 100half 100full)'],
                ['FQDN', 'localhost'],
                ['IP_ADDR', '0.0.0.0/0'],
                ['GATEWAY', '0.0.0.0'],
                ['DHCP', 'off'],
                ['60V4_TUNNEL', '0.0.0.0'],
                ['ICMP_ECHO', 'on'],
                ['ND6_REDIRECT', 'off'],
                ['IP6_ADDR', '::/0'],
                ['MTU', '1500'],
                ['VLAN_ID', '0'],
                ['ICMP_DEST', 'on'],
                ['AGENT', '0'],
                ['NET_MASK', '0.0.0.0'],
                ['LINKLOCAL', 'off'],
                ['TAGGING', 'off'],
                ['ICMP6_LIMIT', '500 ms'],
                ['IP6_DAD', 'on'],
                ['msu', '0/0'],
                ['pid', 'pro'],
                ['pid name', 'Processor']
            ];
        }
    };
    //this only allows the table to be filled once
    var tablesBuilt = false;

    /*
     * filling the table
     * i left the name of the actual selection in the first node of the array for easy  reading
     */

    if (!tablesBuilt) {
        this.restorSlotScreens();
        tablesBuilt = true; // stop the class from over-writing the table
    }





    /*
     * the best way to get a fresh table is to build a new one each and every time
     */

    this.SlotScreenTable = function () {
        var SlotScreenBody = '';
        SlotScreenBody += '<table class="terminalTables tableBorder">';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td colspan="5" class="greyTD centerTD">SLOT SCREEN</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td width="11%">ports :</td>';
        SlotScreenBody += '<td width="15%">' + this.slotScreenPorts + '</td>';
        SlotScreenBody += '<td width="42%">&nbsp;</td>';
        SlotScreenBody += '<td width="16%">timeslots :</td>';
        SlotScreenBody += '<td width="16%">' + this.slotScreenTimeslots + '</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td colspan="5"><table class="terminalTables tableBorder">';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td width="5%">PHY</td>';
        SlotScreenBody += '<td width="2%">=</td>';
        SlotScreenBody += '<td colspan="4">' + this.slotScreen[this.currSlot][0][1] + '</td>';
        SlotScreenBody += '<td colspan="3">&nbsp;</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>FQDN</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td colspan="4">' + this.slotScreen[this.currSlot][1][1] + '</td>';
        SlotScreenBody += '<td colspan="3">&nbsp;</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>IP_ADDR</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td colspan="4">' + this.slotScreen[this.currSlot][2][1] + '</td>';
        SlotScreenBody += '<td width="5%">NET_MASK</td>';
        SlotScreenBody += '<td width="2%">=</td>';
        SlotScreenBody += '<td width="14%">' + this.slotScreen[this.currSlot][13][1] + '</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>GATEWAY</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td colspan="4">' + this.slotScreen[this.currSlot][3][1] + '</td>';
        SlotScreenBody += '<td>LINKLOCAL</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][14][1] + '</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>DHCP</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td width="17%">' + this.slotScreen[this.currSlot][4][1] + '</td>';
        SlotScreenBody += '<td width="5%">VLAN_ID</td>';
        SlotScreenBody += '<td width="1%">=</td>';
        SlotScreenBody += '<td width="14%">' + this.slotScreen[this.currSlot][10][1] + '</td>';
        SlotScreenBody += '<td>TAGGING</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][15][1] + '</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>60V4_TUNNEL</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td colspan="4">' + this.slotScreen[this.currSlot][5][1] + '</td>';
        SlotScreenBody += '<td colspan="3">&nbsp;</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>ICMP_ECHO</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][6][1] + '</td>';
        SlotScreenBody += '<td>ICMP_DEST</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][11][1] + '</td>';
        SlotScreenBody += '<td>ICMP6_LIMIT</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][16][1] + '</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>ND6_REDIRECT</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td colspan="4">' + this.slotScreen[this.currSlot][7][1] + '</td>';
        SlotScreenBody += '<td colspan="3">&nbsp;</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>IP6_ADDR</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td colspan="4">' + this.slotScreen[this.currSlot][8][1] + '</td>';
        SlotScreenBody += '<td colspan="3">&nbsp;</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr>';
        SlotScreenBody += '<td>MTU</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][9][1] + '</td>';
        SlotScreenBody += '<td>AGENT</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][12][1] + '</td>';
        SlotScreenBody += '<td>IP6_DAD</td>';
        SlotScreenBody += '<td>=</td>';
        SlotScreenBody += '<td>' + this.slotScreen[this.currSlot][17][1] + '</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '</table></td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr class="centerTD">';
        SlotScreenBody += '<td colspan="5">More ethernet attributes on gen ethernet screen</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '<tr class="greyTD ">';
        SlotScreenBody += '<td colspan="5">msu:' + this.slotScreen[this.currSlot][18][1] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        SlotScreenBody += 'pid: ' + this.slotScreen[this.currSlot][19][1] + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
        SlotScreenBody += 'pid name:' + this.slotScreen[this.currSlot][20][1] + '</td>';
        SlotScreenBody += '</tr>';
        SlotScreenBody += '</table>';

        return SlotScreenBody;
    };
}