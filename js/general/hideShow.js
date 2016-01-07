function hideShow(e) {
    if ($(e).is(":visible")) {
        $(e).hide("drop", {direction: "down", easing: "swing"}, 80);
    } else {
        $(e).show("drop", {direction: "down", easing: "swing"}, 80);
    }
}