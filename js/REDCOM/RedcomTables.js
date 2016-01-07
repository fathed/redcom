//RedcomTables.js



var RedcomDatabaseTableConfigArr = [];//main array that holds all the table data


RedcomDatabaseTableConfigArr.push(["Test", "2", "3", "4", "5", "6", "7"]); //pushing an array to an array so I can get data


//loop through the array and place the data
function RedcomDatabaseTableConfigAdd() {
    var val;
    for (var i = 0; i < RedcomDatabaseTableConfigArr.length; i++) {
        val += "<tr>";
        val += "<td>";
        val += RedcomDatabaseTableConfigArr[i][0];
        val += "</td>";
        val += "<td>";
        val += RedcomDatabaseTableConfigArr[i][1];
        val += "</td>";
        val += "<td>";
        val += RedcomDatabaseTableConfigArr[i][2];
        val += "</td>";
        val += "<td>";
        val += RedcomDatabaseTableConfigArr[i][3];
        val += "</td>";
        val += "<td>";
        val += RedcomDatabaseTableConfigArr[i][4];
        val += "</td>";
        val += "<td>";
        val += RedcomDatabaseTableConfigArr[i][5];
        val += "</td>";
        val += "<td>";
        val += RedcomDatabaseTableConfigArr[i][6];
        val += "</td>";
        val += "</tr>";
    }
    return val;
}


function RedcomDatabaseTableConfig() {
//the template for the config table
    var RedcomDatabaseTableConfig =
            "<table class='terminalTables'>" +
            "<tr>" +
            "<td>DATABASE TABLE CONFIGURATION</td>" +
            "</tr>" +
            "<tr>" +
            "<td>Bytes in database</td>" +
            "<td>Used: 165009</td>" +
            "<td>Free: 13499</td>" +
            "</tr>" +
            "<tr></tr>" +
            "</table>";

    RedcomDatabaseTableConfig +=
            "<table class='terminalTables'>" +
            "<tr>" +
            "<td>TABLE</td>" +
            "<td>CURR</td>" +
            "<td>min</td>" +
            "<td>max</td>" +
            "<td>size</td>" +
            "<td>scope</td>" +
            "<td>COMMENT</td>" +
            "</tr>" +
            RedcomDatabaseTableConfigAdd() +
            "</table>";

    RedcomDatabaseTableConfig +=
            "<table class='terminalTables'>" +
            "<tr>" +
            "<td>VERBOSE=OFF</td>" +
            "<td>MSU=0/0</td>" +
            "<td>Empty database</td>" +
            "</tr>" +
            "</table>"
            ;

    return RedcomDatabaseTableConfig;
}
