function rightClickMenu(rmArr) {
    var rightClickMenu = "";
    for (var i = 0; i < rmArr.length; i++) {
        if (rmArr[i] != null) {
            rightClickMenu += '<div class="rmItme">' + rmArr[i] + '</div>';
        } else {
            rightClickMenu += '<div class="rmSep"></div>';
        }
    }
    $("#rightClickMenu").append(rightClickMenu);
    $('#rightClickMenu').hide();

    getMenuItems("#rightClickMenu");
}



function getMenuItems(e) {
    $(e).find("div").each(function () {
        var tyu = $(this).attr("id");
        $("#" + tyu).click(function () {
            btn_pushed = tyu;
            //console.log(tyu);
        });
    });
}
