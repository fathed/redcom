/*
 * Tempus v4.1
 */
function tempus(initArr) {
    var init = initArr,
            tempus_ref = this;


    // state machine
    this.controller = [];
    this.name = 'TEMPUS'; //make a reference back to the main tool
    this.redcom_ref = {};// reference to the redcom
    // this.cursorManager = {};



    // look and see what tools will be loaded

    if (init[0][0].match('redcom')) {
        redcom_ref = new redcom(initArr[1][0], tempus_ref);
        redcom_ref.init_terminal();
        /*$.getScript("js/REDCOM/redcom.js", function() {
         //pass in the title of this item -  the only param that terminal accepts is the title
         redcom_ref = new redcom(init[1][j - 1], tempus_ref);
         });
         */

    }
    for (var j = 0; j < init[0].length; j++) {
    }

    /*
     * set up the state machine
     * 
     * when I get the steps that will be graded - if any - I will add booleans to the controller array to track the state of this redcom
     */



}