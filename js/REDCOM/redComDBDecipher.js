function redComDBDecipher(data) {
    var t = data.replace(/^.*=/, "");//remove everything before and including the equal sign
    return t;
}