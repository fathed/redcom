function RedcomSystemConfig() {


    this.switchType = 'custom - custom defined switch';
    this.npaSetting = '';
    this.hmxSetting = '';
    this.typeSetting = 'both_opt';
    this.ltaSetting = '';
    this.numbersSequenced = 'consecutively';
    this.startingAt = '1000';
    this.nextNum = '1000';
    this.sip_user_start = 'REDCOM';
    this.sip_user_next = 'REDCOM1';
    this.specificClotID = 'no';
    this.cluster = 'MSUs up';
    this.fill = '';



    this.recomSysConfigTable = function () {
        var RedcomSystemConfigTable = '<table class="terminalTables tableBorder">';
        RedcomSystemConfigTable += '<tr><td colspan="4" class="greyTD centerTD">SYSTEM CONFIGURATION</td></tr>';
        RedcomSystemConfigTable += '<tr><td colspan="4">SWITCH_TYPE = ' + this.switchType + '</td></tr>';
        RedcomSystemConfigTable += '<tr><td>NPA =' + this.npaSetting + '</td><td>HMX =' + this.hmxSetting + '</td><td>TYPE = ' + this.typeSetting + '</td><td>LATA =' + this.ltaSetting + '</td></tr>';
        RedcomSystemConfigTable += '<tr><td colspan="4">station numbers SEQUENCED = ' + this.numbersSequenced + ', STARTing at = ' + this.startingAt + ' next: ' + this.nextNum + '</td></tr>';
        RedcomSystemConfigTable += '<tr><td>SIP_USER_START:' + this.sip_user_start + '</td><td>&nbsp;</td><td colspan="2">sip_user_next:' + this.sip_user_next + '</td></tr>';
        RedcomSystemConfigTable += '<tr><td>SPECIFIC clot id = ' + this.specificClotID + '</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
        RedcomSystemConfigTable += '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
        RedcomSystemConfigTable += '<tr><td colspan="4">cluster - ' + this.cluster + '</td></tr>';
        RedcomSystemConfigTable += '<tr><td colspan="4">' + this.fill + '</td></tr>';
        RedcomSystemConfigTable += '</table>';

        return RedcomSystemConfigTable;
    };
}