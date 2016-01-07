/*
 * redcom decipher is only for multiple values being entered at one time
 */
function RedcomDecipher(decipherString) {

    /*
     * parse the entire string
     * break string by semi-colon
     * push to an array
     * if the item has
     */

    var stringParts = decipherString;
    //in case there isn't a space between entries - I don't know if this is even legit
    if (decipherString != null) {

        if (stringParts.match(/;/gi) || stringParts.match(/;$/gi)) {

            stringParts = decipherString.split("; ");
            stringParts = decipherString.split(";");

        } else if (stringParts.match(/\=/gi) || stringParts.match(/\=$/gi)) {
            stringParts = decipherString.split("=");
            stringParts = decipherString.split("= ");
        }
    }
    return stringParts;

}