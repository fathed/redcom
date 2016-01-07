function RedcomDatabaseSearch(place) {
    this.dbSearchArr = [];
    this.dbSearchArr.push(["/card1", "(not mounted)", "n/a", "n/a", "n/a"]);//pos 0
    this.dbSearchArr.push(["/tmp", "(no db boot files)", "n/a", "n/a", "n/a"]);//pos 1
    this.dbSearchArr.push(["/sys", "(no db boot files)", "n/a", "n/a", "n/a"]);//pos 2
    this.dbSearchArr.push(["/redcom", "(no db boot files)", "n/a", "n/a", "n/a"]);//pos 3


    /*
     * i dont know if this even gets reset but better safe than sorry
     */
    this.reset_dbSearch = function () {
        this.dbSearchArr = [];
        this.dbSearchArr.push(["/card1", "(not mounted)", "n/a", "n/a", "n/a"]);//pos 0
        this.dbSearchArr.push(["/tmp", "(no db boot files)", "n/a", "n/a", "n/a"]);//pos 1
        this.dbSearchArr.push(["/sys", "(no db boot files)", "n/a", "n/a", "n/a"]);//pos 2
        this.dbSearchArr.push(["/redcom", "(no db boot files)", "n/a", "n/a", "n/a"]);//pos 3
    };



    this.dbSearch_table = function () {
        var bdSearchTable1 = "";
        bdSearchTable1 = "<table id='dbSearchTable' class='terminalTables'><tr class='trHeader'>  <td width='11%'>MSU 0/0</td>  <td width='45%'>database boot file inclusion tree</td>  <td width='7%'>size</td>  <td width='11%'>version</td>  <td width='26%'>download date</td></tr>";

        for (var i = 0; i < this.dbSearchArr.length; i++) {
            var fill = "";
            bdSearchTable1 += "<tr>";
            bdSearchTable1 += " <td width='11%'>" + this.dbSearchArr[i][0] + "</td>";
            bdSearchTable1 += " <td width='33%'>" + this.dbSearchArr[i][1] + "</td>";
            bdSearchTable1 += " <td width='7%' class='trHeader'>" + this.dbSearchArr[i][2] + "</td>";
            bdSearchTable1 += "<td width='9%' class='trHeader'>" + this.dbSearchArr[i][3] + "</td>";
            bdSearchTable1 += "<td width='40%' class='trHeader'>" + this.dbSearchArr[i][4] + "</td>";
            bdSearchTable1 += "</tr>";
        }
        bdSearchTable1 += "</table>";
        //dbSearchMSU
        return bdSearchTable1;
    };
}