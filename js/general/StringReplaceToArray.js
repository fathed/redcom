function StringReplaceToArray(val) {
    var piece = val.replace(/;/g, "=");
    var stringParts = piece.split("=");
    return stringParts;
}
