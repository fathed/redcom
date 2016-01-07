/*
 * 
 * @param {type} redcomSettings
 * @param {type} tempusRef
 * @returns {redcom}
 * 
 * Redcom written by James Gibbens 2014/2015
 * 
 */
function redcom(redcomSettings, tempusRef) {

    /*
     * keep all references to redcom here. this is the starting point.
     * all variables here. 
     * redcom inherits from terminal.js
     */
    var redcom_terminal = {},
            redcom_settings = redcomSettings,
            redcom_decipher = new RedcomDecipher(null),
            redcomTerminalRef = {},
            redcomBody = {},
            redcomBodyMask = {},
            startMessage = '',
            RedcomPSSWD = '',
            RedcomLGN = '',
            entryCharCount = 0,
            redcomStoreCommands = [],
            redcom_ref = this, //a reference to this object
            dct_ref = {},
            dbSettings_ref = {},
            sysConfig_ref = {},
            dbsearch_ref = {},
            slicegen_ref = {},
            sysAdmin_ref = {},
            ethernetConfig_ref = {},
            hardwareSettings_ref = {},
            homeExchange_ref = {},
            redcom_ref_txtBdy = '', // make sure there is a reference to the txt body of the terminal
            unreadNotices = Math.floor(Math.random() * 20) + 2,
            currCommand = 0,
            today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth() + 1,
            yyyy = today.getFullYear(),
            month = "";


//setting up the time - just so it has a little more real feel
    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    switch (mm) {
        case '01':
            month = "Jan";
            break;
        case '02':
            month = "Feb";
            break;
        case '03':
            month = "Mar";
            break;
        case '04':
            month = "Apr";
            break;
        case '05':
            month = "May";
            break;
        case '06':
            month = "Jun";
            break;
        case '07':
            month = "Jul";
            break;
        case '08':
            month = "Aug";
            break;
        case '09':
            month = "Sep";
            break;
        case '10':
            month = "Oct";
            break;
        case '11':
            month = "Nov";
            break;
        case '12':
            month = "Dec";
            break;
    }

    today = dd + '-' + month + '-' + yyyy;
    redcom_ref.name = "REDCOM";//name it
    //fill them variables
    startMessage = "login as: ";
    RedcomPSSWD = "yam";//redcom password
    RedcomLGN = "root";//redcom login
    entryCharCount = 0;//count everytime I press a key with the exception od delete, the arrow keys, shift, control, tab, and enter
    currCommand = 0;
    
    this.tempus_ref = tempusRef;
    this.databasesBuilt = 0;//keep track of the number of databases I build
    this.dialCodeTables = false; //when I am working with the dial code tables this will be set to true
    this.duplicatingDBFolder = false;//I need to know if the duplication is being done
    this.resettingTheShelf = false;//I need to know if the shelf is being reset
    this.confirmationCodeEntered = false;//I need to know if the shelf is being reset - let me know if I entered the confirm code
    this.deleteDatabases = false;//Iasking me if I really want to delete databases
    this.getTheDatabases = false; // for when I am wanting the database table configuration
    this.loadTheDatabases = false; // for when I am entering table=dctm; curr=300
    this.changingSystemConfig = false; // for when I am changing the system config
    this.etherNetPage = false; // for when I am go to the ethernet page = so I can back out and stuff
    this.hardwarePage = false; // for when I am go to the hardware page
    this.genPage = false; // for when I am go to the hardware page
    //loading hardware
    this.gettingPortsForFindMe = false; // for when I am go to the hardware page - how many ports for find-me?
    this.gettingPortsForFindMe2 = false; // for when I am go to the hardware page - how many ports for find-me?
    this.offProcessorQ1 = false; //if the first question in hardware table is answered off this is the first alt question asked
    this.offProcessorQ2 = false; //if the second question in hardware table is answered off this is the first alt question asked
    this.offProcessorQ3 = false; //if the third question in hardware table is answered off this is the first alt question asked
    this.howManyAnnouncerCircuts = false; // for when I am go to the hardware page - how many ports for find-me?
    this.howManyPrimaryRateCircuts = false; // for when I am go to the hardware page - how many ports for find-me?
    this.spanTypeForMetCircuts = false; // for when I am go to the hardware page - how many ports for find-me?
    this.howManyChannelsFotMetCircut = false; // for when I am go to the hardware page - how many ports for find-me?
    this.spanTypeForMetCircuts2 = false; // for when I am go to the hardware page - how many ports for find-me?
    this.howManyChannelsFotMetCircut = false;
    this.br2Appearances = false;
    this.br2Appearances2 = false;
    this.setUpSystemAdminTable = false;//setting up the system admin table - adm
    this.setUpSystemAdminTableNPA = false;//npa page of home echange table
    this.setupDialCodeTable = false;
    this.databaseActivate = false; // allow the activate key to be used when closing the database configuration
    this.slotScreenActivated = false; // is the redcom at the slot screen?
    this.ipListActivated = false; // is the redcom at the ip list?
    this.stationListActivated = false; // is the redcom at the station list?
    this.lineClasses = false; // is the redcom at the line class of service group?
    this.ram = 'unprotected';//well is my ram unprotected? I don't know where it gets this data but I make a reference just in case
    this.dbsearch = false; //i am working in the dbsearch table
    this.PromptStore = '> ';
    this.RedcomCheckLogin = false;
    this.RedcomCheckPasswd = false;
    /*
     * these are for tracking what has been activated and what hasnt
     */
    this.database_act = false;//database table
    this.system_act = false;//system table
    this.hardware_act = false;//hardware table
    this.slot_act = false;//slot table
    this.ipList_act = false;//slot table
    this.npa_act = false;//home exchange table
    this.dct_act = false;//dial code table
    this.sntList_act = false;//station list table
    this.lineClasses_act = false;//line classes table


    /*
     * keep track of what tasks have been done
     * use boolean as a simple state engine each table will have a place in the main array - assoc array
     * for tasks with multiple steps there will be an internal array holding those steps
     * i will push all the steps to the array afeter its declaration
     */


    /*
     * reference to the table that is borught up when entering gen> database
     */
    this.redcomDatabaseSettings = {};
    this.redcomDatabaseSettings_ref = {};

    // console.log(this.redcomTasks)


//22-Jul-2013
    this.RedcomUserAgreement = "SLICE V4.0a (R3P8) Copyright (c) 2004-2012 REDCOM Laboratories, Inc. ALL RIGHTS RESERVED. Any modification, reproduction, distribution, disclosure, reverse engineering, decompilation or disassembly, by purchaser/ lessee or any of its employees, of any portion or all of the program or software contained in the product, without the express written permission of REDCOM Laboratories, Inc., is prohibited.<br><br>There are " + unreadNotices + " unread notes in the system.<br><br>Last login on " + today + " at 8:43:36<br><br>Welcome to RSH REDCOM's terminal interface<br><br>THIS IS A DEPARTMENT OF DEFENSE COMPUTER SYSTEM. THIS COMPUTER SYSTEM, INCLUDING ALL RELATED EQUIPMENT, NETWORK, AND NETWORK DEVICES (SPECIFICALLY INCLUDING INTERNET ACCESS), ARE PROVIDED ONLY FOR AUTHORIZED US GOVERNMENT USE.  DOD COMPUTER SYSTEMS MAY BE MONITORED FOR ALL LAWFUL PURPOSES, INCLUDING TO ENSURE THEIR USE IS AUTHORIZED, FOR MANAGEMENT OF THE SYSTEM, TO FACILITATE PROTECTION AGAINST UNAUTHORIZED ACCESS, AND TO VERIFY SECURITY PROCEDURES, SURVIVABILITY, AND OPERATIONAL SECURITY.  MONITORING INCLUDES ACTIVE ATTACKS BY AUTHORIZED DOD ENTITIES TO TEST OR VERIFY THE SECURITY OF THIS SYSTEM. DURING MONITORING, INFORMATION MAY BE EXAMINED, RECORDED, COPIED, AND USED FOR AUTHORIZED PURPOSES.  ALL INFORMATION, INCLUDING PERSONAL, PLACED ON OR SENT OVER THIS SYSTEM, MAY BE MONITORED.<br><br>USE OF THIS DOD COMPUTER SYSTEM, AUTHORIZED OR UNAUTHORIZED, CONSTITUTES CONSENT TO MONITORING OF THIS SYSTEM.  UNAUTHORIZED USE MAY SUBJECT YOU TO CRIMINAL PROSECUTION.  EVIDENCE OF UNAUTHORIZED USE COLLECTED DURING MONITORING MAY BE USED FOR ADMINISTRATIVE, CRIMINAL, OR OTHER ADVERSE ACTION. USE OF THIS SYSTEM CONSTITUTES CONSENT TO MONITORING FOR THESE PURPOSES.<br>";

    this.RedcomSecurityNotice = "THIS IS A DEPARTMENT OF DEFENSE COMPUTER SYSTEM. THIS COMPUTER SYSTEM, INCLUDING ALL RELATED EQUIPMENT, NETWORKS, AND NETWORK DEVICES (SPECIFICALLY INCLUDING INTERNET ACCESS) ARE PROVIDED ONLY FOR AUTHORIZED U.S. GOVERNMENT USE. DOD COMPUTER SYSTEMS MAY BE MONITORED FOR ALL LAWFUL PURPOSES, INCLUDING TO ENSURE THAT THEIR USE IS AUTHORIZED, FOR MANAGEMENT OF THE SYSTEM, TO FACILITATE PROTECTION AGAINST UNAUTHORIZED ACCESS, AND TO VERIFY SECURITY PROCEDURES, SURVIVABILITY, AND OPERATIONAL SECURITY. MONITORING INCLUDES ACTIVE ATTACKS BY AUTHORIZED DOD ENTITIES TO TEST OR VERIFY THE SECURITY OF THIS SYSTEM. DURING MONITORING, INFORMATION MAY BE EXAMINED, RECORDED, COPIED AND USED FOR AUTHORIZED PURPOSES. ALL INFORMATION, INCLUDING PERSONAL INFORMATION, PLACED OR SENT OVER THIS SYSTEM MAY BE MONITORED. USE OF THIS DOD COMPUTER SYSTEM, AUTHORIZED OR UNAUTHORIZED, CONSTITUTES CONSENT TO MONITORING OF THIS SYSTEM. UNAUTHORIZED USE MAY SUBJECT YOU TO CRIMINAL PROSECUTION. EVIDENCE OF UNAUTHORIZED USE COLLECTED DURING MONITORING MAY BE USED FOR ADMINISTRATIVE, CRIMINAL, OR OTHER ACTION. USE OF THIS SYSTEM CONSTITUTES CONSENT TO MONITORING FOR THESE PURPOSES.";

    //loading in the terminal

    /*
     * i am adding the needed libraries
     */


    this.init_terminal = function () {
        redcom_terminal = new terminal(redcom_settings);
        //make references to all editable fields on the terminal
        redcomTerminalRef = redcom_settings[0];
        redcomBody = redcomTerminalRef + '_textBody';
        redcomBodyMask = redcomTerminalRef + '_textBodyMask';
        this.redcom_ref_txtBdy = redcomBody;
        //set it up so focus goes back on the terminal when I click on the black part
        $("#" + redcomBody).click(function () {
            TerminalRefreshCursor(redcomBody);
        });
        init_redcom();//once the terminal is init then init the redcom
    };

    function init_redcom() {
        dct_ref = new dialCodeTables();
        dbsearch_ref = new RedcomDatabaseSearch();
        ethernetConfig_ref = new RedcomEthernetConfig();
        slicegen_ref = new RedcomSliceGeneration();
        hardwareSettings_ref = new RedcomHardwareConfig();
        homeExchange_ref = new RedcomHomeExchangeTable();
        sysAdmin_ref = new RedcomSystemAdministration();
        dbSettings_ref = new RedcomDatabaseTableConfigSettings();
        sysConfig_ref = new RedcomSystemConfig();
        slotScreen_ref = new RedcomSlotScreen();
        iplistTable = new RedcomIPList();
        station_listing = new RedcomStationListings();
        line_classes = new RedcomLineClasses();

        $("#" + redcomBody).html(startMessage); // put the starting mmessage

        $("#" + redcomBody).keydown(function (e) {
            var kC = e.keyCode;
            //for the control key
            if (e.ctrlKey) {
                if (kC === 76) {
                    // console.log('CNTRL + L')
                }
                e.preventDefault();
            }
            //------------------------------> end control key
            if (kC !== 9 && kC !== 20 && kC !== 16 && kC !== 17 && kC !== 18 && kC !== 91 && kC !== 37 && kC !== 39 && kC !== 38 && kC !== 40 && kC !== 13 && kC !== 8) {
                entryCharCount++;
            }
            if (kC === 38) {
                /*
                 Since i am using one long string to build my terminal (great for perfect positioning) I can't simple append text to it. so I store what is on the screen, delete everything, and append my previous command
                 */
                var txt = $("#" + redcomBody).html(),
                        tt = txt.slice(0, txt.length - entryCharCount);
                entryCharCount = redcomStoreCommands[currCommand].length;
                
                $("#" + redcomBody).html(tt);
                $("#" + redcomBody).append(redcomStoreCommands[currCommand]);
                if (currCommand !== redcomStoreCommands.length - 1) {
                    currCommand++;
                } else {
                    currCommand = 0;
                }
                TerminalRefreshCursor(redcomBody);
                e.preventDefault();
            }
            if (kC === 40) {
                /*
                 this really needs a bit more abstraction but it is working for now.
                 basically, I take the current string and store it, then I delete it from the text field, then I add it back with the new string appened
                 */
                var txt2 = $("#" + redcomBody).html(),
                        tt2 = txt2.slice(0, txt2.length - entryCharCount);
                        
                entryCharCount = redcomStoreCommands[currCommand].length;
                $("#" + redcomBody).html(tt2);
                $("#" + redcomBody).append(redcomStoreCommands[currCommand]);
                //basic looping
                if (currCommand > 0) {
                    currCommand--;
                } else {
                    currCommand = redcomStoreCommands.length - 1;
                }
                TerminalRefreshCursor(redcomBody);//always move the cursor to the end of the string
                e.preventDefault();
            }
            //enter key
            if (kC === 13) {
                var stringDivRef, stripQuotes_string, string_a, string, totalLineLength, fixedInput;
                stringDivRef = $("#" + redcomBody);


                stripQuotes_string = stringDivRef.text();//get the string I need to look at
                string_a = stripQuotes_string.replace(/"/g, "");
                string = string_a.replace(/'/g, "");

                totalLineLength = string.length;//get the total length of that string

                //string2 = RedcomDecipher(string);
                var fixedInputFixed = '';

                fixedInput = redcomShortcuts(ProcessTerminalText(string, totalLineLength, entryCharCount));//getting actual text I just entered
                fixedInputFixed = fixedInput;


                /*
                 * first look to see if the commands are strung together
                 * if they are seperate them out using redcom decipher and pass them one at a time, in order to the redcom functions
                 * if they aren't send them on to the redcom functions
                 * 
                 * 
                 * here i have a sweet little tool that takes each command strung together and parses them one by one - in order. 
                 * so it will work pretty damn close to the real thing.
                 * 
                 * there is also a version taht just accepts the single input
                 */

                var references = [redcom_ref, redcom_ref_txtBdy, dct_ref, dbSettings_ref, sysConfig_ref, dbsearch_ref, slicegen_ref, hardwareSettings_ref, sysAdmin_ref, slotScreen_ref, ethernetConfig_ref, homeExchange_ref, iplistTable, station_listing, line_classes];

                if (fixedInput.match(/\;/gi) || fixedInput.match(/\=/gi)) {

                    //getTheDatabases will be true when working with the DATABASE table

                    var decipherStringArr = [];//an array to hold the returned items
                    decipherStringArr = RedcomDecipher(fixedInput); // get the items broken apart


                    for (var i = 0; i < decipherStringArr.length; i++) {
                        if (decipherStringArr[i] != "") {
                            var newShortcut = redcomShortcuts(decipherStringArr[i]);
                            redcomStoreCommands.push(decipherStringArr[i].toLowerCase());//used for scrolling through previously entered commands
                            var ans = RedcomFunctions(newShortcut, references);
                            TerminalCommands(stringDivRef, newShortcut, ans, redcom_ref);//terminalCommands.js
                        }
                    }
                } else {
                    //get all commands and check for short cuts
                    redcomStoreCommands.push(fixedInput.toLowerCase());//used for scrolling through previously entered commands
                    var ans = RedcomFunctions(fixedInput, references);
                    TerminalCommands(stringDivRef, fixedInput, ans, redcom_ref);//terminalCommands.js
                }


                TerminalRefreshCursor(redcomBody);//make sure that everytime I touch the terminal the cursor is set at the end of the string
                entryCharCount = 0;//reset the keystroke counter - enter is the end of the line for all commands
                TerminalScroller(stringDivRef);//make sure we are always seeing the bottom
                //console.log(string)
                e.preventDefault();
            }
            /*
             TRICKY!
             I look to see if I am pressing the delete key - if I am I look to see how many characters I have typed (omitting the omitted keys of course).
             If I hit the delete key the number entryCharCount that was incremented as I typed is decremented until 0.
             */
            //backspace
            if (kC === 8 && entryCharCount > 0) {
                entryCharCount--;
            } else if (kC === 8 && entryCharCount === 0) {
                e.preventDefault();
            }
        });
    }
}