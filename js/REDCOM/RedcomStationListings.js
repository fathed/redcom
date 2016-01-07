function RedcomStationListings() {

    this.stationListing_List = [];

    this.caretPos = 0; // which row will the caret show up on

    this.stationListing_List = [
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"],
        ["&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;", "&nbsp;"]
    ];

    this.display_StationList = function () {

        var stationListing_Data = '';

        stationListing_Data += '<table width="100%" border="0">';
        stationListing_Data += '<tbody>';
        stationListing_Data += '<tr>';
        stationListing_Data += '<td colspan="9" class="greyTD centerTD">STATION LISTINGS</td>';
        stationListing_Data += '</tr>';
        stationListing_Data += '<tr>';
        stationListing_Data += '<td>&nbsp;</td>';
        stationListing_Data += '<td>ENTRY</td>';
        stationListing_Data += '<td>type</td>';
        stationListing_Data += '<td>STATION</td>';
        stationListing_Data += '<td>COS</td>';
        stationListing_Data += '<td>CLASS</td>';
        stationListing_Data += '<td>CAC1</td>';
        stationListing_Data += '<td>CAC2</td>';
        stationListing_Data += '<td>NAME</td>';
        stationListing_Data += '</tr>';

        for (var i = 0; i < this.stationListing_List.length; i++) {
            stationListing_Data += '<tr>';
            if (i == this.caretPos) {
                stationListing_Data += '<td class="centerTD">&gt;</td>';
            } else {
                stationListing_Data += '<td class="centerTD"></td>';
            }

            stationListing_Data += '<td>' + i + '</td>';
            stationListing_Data += '<td>' + this.stationListing_List[i][1] + '</td>';
            stationListing_Data += '<td>' + this.stationListing_List[i][2] + '</td>';
            stationListing_Data += '<td>' + this.stationListing_List[i][3] + '</td>';
            stationListing_Data += '<td>' + this.stationListing_List[i][4] + '</td>';
            stationListing_Data += '<td>' + this.stationListing_List[i][5] + '</td>';
            stationListing_Data += '<td>' + this.stationListing_List[i][6] + '</td>';
            stationListing_Data += '<td>' + this.stationListing_List[i][7] + '</td>';
            stationListing_Data += '</tr>';
        }

        stationListing_Data += '<tr>';
        stationListing_Data += '<td colspan="9" class="greyTD">MSU=0/0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;there may be more entries on other MSU&#39;s</td>';
        stationListing_Data += '</tr>';
        stationListing_Data += '</tbody>';
        stationListing_Data += '</table>';

        return stationListing_Data;
    };
}