function toolBarRemoveItem(tb_name, tb_array_name, obj_remove) {
    var i = tb_array_name.indexOf(obj_remove);
    if (i != -1) {
        tb_array_name.splice(i, 1);
    }
    tb_name.rebuildToolBar();
}