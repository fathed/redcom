//this method ONLY controls the display for changing directories
function ChangeDirectories(dir, hostRef, Prompt) {
    var t = dir, //parse the new directory
            td = hostRef.PromptStore, //reserve the original terminal directory
            promptStorage = hostRef.PromptStore,
            newString = "";


    if (t.match(/^cd\s/gi)) {
        t = dir.replace(/^cd\s/gi, "");
    }


    /*
     the moving up in a directory is kind of a weird thing. Here I am saying htat if you want to move up in the directory but not to a specific folder (just the parent)
     then I remove the ../ and the last folder name leaving only the parent folder name.
     
     BUT if you want to go up to the parent directory then over to another folder I place the forward slash between the parent directory and the new directory
     */
    //errors(td)

    if (t.match(/^..\/$/gi)) {
        t = t.replace(/^..\//gi, "");//we never want these characters added
        td = td.substring(0, td.lastIndexOf('/'));//if we are stepping up one directory then we need to illustrate that

    } else {
        t = t.replace(/^..\//gi, "");//we never want these characters added
        td = td.substring(0, td.lastIndexOf('&#92;'));//if we are stepping up one directory then we need to illustrate that
        td = td + '&#92;';// this is a \
    }


    return td;
}