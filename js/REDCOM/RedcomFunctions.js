/*
 * this is the main controller for the redcom emulator
 * i am trying to mimic as much of this thing as i can
 * by grouping tasks by common commands i have made this a little easier to read but the whole thing is no more
 * than a massive conditional statment
 * 
 * the controller is an attempt to have a scoreboard - I am not sure if this is the way I will do it in the future but
 * for now the scoring is done in the Temps class. Actually, the scoring right now is nothing more than keeping track of what steps have been done - a simple state machine
 * 
 * I decided since I am passing so many references to this class that I would do it with an array
 */
//function RedcomFunctions(com, redcom_ref, redcom_ref_txtBdy, dct_ref, dbSettings_ref) {
function RedcomFunctions(com, refs) {



    var Prompt = "",
            redcomRef = refs[0],
            redcomRefTB = refs[1],
            dctref = refs[2], //dial code table ref
            dbSettingsRef = refs[3], //database settings ref
            sysconfig_ref = refs[4],
            dbsearch_ref = refs[5],
            slicegen_ref = refs[6],
            hardwareSettings_ref = refs[7],
            sysAdmin_ref = refs[8],
            slotScreen_ref = refs[9],
            ethernetConfig_ref = refs[10],
            homeExchange_ref = refs[11],
            iplistTable_ref = refs[12],
            station_listing_ref = refs[13],
            line_classes_ref = refs[14],
            notLoggedIn = redcomRef.RedcomSecurityNotice + "<br><br><br>Incorrect login.<br>",
            command = stripQuotes(com);





//this is how I get to the state machine
    //console.log(redcomRef.tempus_ref.controller[0]);
    //----------------------------------------------------------------------------------------------------------------------> entering login


    try {
        if (command.match(/^root$/gi) && !redcomRef.RedcomCheckPasswd) {
            redcomRef.PromptStore = "Password:";
            Prompt = "<br>" + redcomRef.PromptStore;
            redcomRef.RedcomCheckLogin = true;//--------------------------------------------------------------------------------> change the login status to true now we wait for password
        }
        //----------------------------------------------------------------------------------------------------------------------> entering password
        else if (command.match(/^yam$/gi) && redcomRef.RedcomCheckLogin && !redcomRef.RedcomCheckPasswd) {
            redcomRef.PromptStore = "rsh /tmp>";
            Prompt = "<br>" + redcomRef.RedcomUserAgreement + "<br>" + redcomRef.PromptStore;
            redcomRef.RedcomCheckPasswd = true;//-------------------------------------------------------------------------------> change the login status to true now we wait for password
        }




        //----------------------------------------------------------------------------------------------------------------------> if we are completely logged in
        else if (redcomRef.RedcomCheckPasswd) {
            //------------------------------------------------------------------------------------------------------------------> all exit commands
            if (command.match(/^exit$/gi)) {

                if (redcomRef.getTheDatabases) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "gen>";
                    Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                    redcomRef.getTheDatabases = false;
                    redcomRef.loadTheDatabases = false;
                    redcomRef.databaseActivate = true;
                    redcomRef.ipList_act = false;
                }

                //redcomRef.lineClasses
                else if (redcomRef.lineClasses) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.lineClasses = false;

                }

                //stationListActivated
                else if (redcomRef.stationListActivated) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.stationListActivated = false;

                }
                //redcomRef.dialCodeTables
                else if (redcomRef.dialCodeTables) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "npa>";
                    Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.dialCodeTables = false;
                    redcomRef.setUpSystemAdminTableNPA = true;

                }

                else if (redcomRef.ipListActivated) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.setUpSystemAdminTable = true;
                    redcomRef.hardwarePage = false;
                    redcomRef.ipListActivated = false;
                }



                else if (redcomRef.changingSystemConfig) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "gen>";
                    Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                    redcomRef.loadTheDatabases = false;
                }


                else if (redcomRef.etherNetPage) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "gen>";
                    Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                    redcomRef.etherNetPage = false;
                }

                else if (redcomRef.setUpSystemAdminTable) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "gen /hardware>";
                    Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.hardwarePage = true;
                    redcomRef.setUpSystemAdminTable = false;
                }

                else if (redcomRef.setUpSystemAdminTableNPA) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                    redcomRef.setUpSystemAdminTableNPA = false;
                }

                else if (redcomRef.slotScreenActivated) {

                    redcomRef.slotScreenActivated = false;
                    redcomRef.setUpSystemAdminTable = true;

                }



                else if (redcomRef.hardwarePage) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "gen>";
                    Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                    redcomRef.gettingPortsForFindMe = false;
                    redcomRef.hardwarePage = false;
                }

                /*else if (redcomRef.dbsearch) {
                 TerminalClear(".terminal_body");
                 redcomRef.PromptStore = "rsh /tmp>";
                 Prompt = "" + redcomRef.PromptStore;
                 redcomRef.dbsearch = false;
                 }*/
                else {
                    finCheck();
                }
            }
            //------------------------------------------------------------------------------------------------------------------> activate - no idea what this does
            else if (command.match(/^activate$/gi)) {
                //database

                if (redcomRef.database_act) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "gen>";
                    Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                    redcomRef.database_act = false;
                }

                /*
                 I duplicate the active and the exit because I don't know if they will use both or one.
                 also it doesnt matter as far as this tool is concerned
                 */
                //redcomRef.lineClasses_act
                else if (redcomRef.lineClasses_act) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.lineClasses_act = false;
                }


                else if (redcomRef.sntList_act) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.sntList_act = false;
                }




                else if (redcomRef.dct_act) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "npa>";
                    Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.dialCodeTables = false;
                    redcomRef.setUpSystemAdminTableNPA = true;
                    redcomRef.dct_act = false;
                }



                else if (redcomRef.ipList_act) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.setUpSystemAdminTable = true;
                    redcomRef.hardwarePage = false;
                    redcomRef.ipListActivated = false;

                }
                else if (redcomRef.system_act) {
                    redcomRef.system_act = false;
                }
                else if (redcomRef.hardware_act) {
                    redcomRef.hardware_act = false;
                }
                else if (redcomRef.slot_act) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "adm>";
                    Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.slot_act = false;
                }



                /* else if (redcomRef.databaseActivate) {
                 TerminalClear(".terminal_body");
                 redcomRef.PromptStore = "Status: Activating ........ <br> gen>";
                 Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                 redcomRef.databaseActivate = false;
                 
                 }*/
                /*else if (redcomRef.changingSystemConfig) {
                 TerminalClear(".terminal_body");
                 redcomRef.PromptStore = "gen>";
                 Prompt = slicegen_ref.slicegen_table() + "<br>Status: Working ..............<br><br>Status: Activating ...............<br>" + redcomRef.PromptStore;
                 redcomRef.loadTheDatabases = false;
                 
                 }*/ /*else if (redcomRef.hardwarePage) {
                  TerminalClear(".terminal_body");
                  redcomRef.PromptStore = "rsh /tmp>";
                  Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>0/0 Writing slot: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 T P<br>Status: Activating...<br><br>" + redcomRef.PromptStore;
                  redcomRef.gettingPortsForFindMe = false;
                  
                  }*/ else {
                    finCheck();
                }
            }


            //------------------------------------------------------------------------------------------------------------------> all logout commands
            //------------------------------------------------------------------------------------------------------------------> I don't want this to work when someone types it in to the dbsearch
            else if (command.match(/^logout$/gi)) {

                //--------------------------------------------------------------------------------------------------------------> logout of the dial code tables
                if (redcomRef.dialCodeTables) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "rsh /tmp>";
                    Prompt = redcomRef.RedcomUserAgreement + "<br>" + redcomRef.PromptStore;
                    redcomRef.dialCodeTables = false;
                }

                else if (redcomRef.genPage) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "rsh /tmp>";
                    Prompt = "<br>" + redcomRef.PromptStore;
                    redcomRef.genPage = false;
                    //make sure all parts are shut off for the gen page
                    redcomRef.databaseActivate = false;
                }

                else if (!redcomRef.setUpSystemAdminTableNPA || redcomRef.hardwarePage) {
                    TerminalClear(".terminal_body");
                    redcomRef.PromptStore = "rsh /tmp>";
                    Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>0/0 Writing slot: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 T P<br>Status: Activating...<br><br>" + redcomRef.PromptStore;
                    redcomRef.gettingPortsForFindMe = false;
                }

                else {
                    finCheck();
                }
            }

            /*
             I used y and yes instead of the RedcomShortcuts.js because some other commands use y and n. This was causing an issue with shortcuts
             */

            //------------------------------------------------------------------------------------------------------------------> check for a yes on duplicating the sys folder
            else if (command.match(/^y$/gi) || command.match(/^yes$/gi)) {
                //------------------------------------------------------------------------------------------------------------------> check for a yes on deleting the sys folder
                if (redcomRef.deleteDatabases) {
                    TerminalClear(".terminal_body");
                    Prompt = "<br>Reset request sent to MSU 0/0<br><br>" + redcomRef.PromptStore + '<br>' + redcomRef.RedcomUserAgreement + "<br>Login:";
                    redcomRef.PromptStore = "Login:";
                    redcomRef.RedcomCheckLogin = false;
                    redcomRef.RedcomCheckPasswd = false;
                    redcomRef.deleteDatabases = false;
                }
                //------------------------------------------------------------------------------------------------------------------> check for a yes on duplicating the sys folder
                if (redcomRef.duplicatingDBFolder) {
                    redcomRef.PromptStore = "rsh /sys>";
                    Prompt = "<br>Copying file system Clear...Copy...Verify...Completed <br><br>" + redcomRef.PromptStore;
                    redcomRef.duplicatingDBFolder = false;
                }
                //------------------------------------------------------------------------------------------------------------------> check for a yes on resetting the sys folder
                if (redcomRef.resettingTheShelf) {
                    Prompt = "<br>Enter confirmation code:";
                    redcomRef.resettingTheShelf = false;
                    redcomRef.confirmationCodeEntered = true;//-----------------------------------------------------------------> I set this to true so I can look for the confirmation code
                }
                if (sysconfig_ref.switchType == "mil") {
                    redcomRef.PromptStore = "gen /sys>";
                    Prompt = "<br>" + redcomRef.PromptStore;
                }
                //redcomRef.switchType
            }
            //------------------------------------------------------------------------------------------------------------------> check for no on duplicating the yss folder
            //------------------------------------------------------------------------------------------------------------------> check for a yes on resetting the shelf
            else if (command.match(/^n$/gi) || command.match(/^no$/gi)) {
                if (redcomRef.deleteDatabases) {
                    Prompt = "I apologize but I don't have the actual output for a no answer yet so this will hold its place! <br><br>" + redcomRef.PromptStore;
                    redcomRef.deleteDatabases = false;
                }
                if (redcomRef.duplicatingDBFolder) {
                    redcomRef.PromptStore = "rsh /sys>";
                    Prompt = "<br>I apologize but I don't have the actual output for a no answer yet so this will hold its place! <br>" + redcomRef.PromptStore;
                    redcomRef.duplicatingDBFolder = false;
                }
                if (redcomRef.resettingTheShelf) {
                    Prompt = "<br>I apologize but I don't have the actual output for a no answer yet so this will hold its place! <br>" + redcomRef.PromptStore;
                    redcomRef.resettingTheShelf = false;
                }
            }
            //------------------------------------------------------------------------------------------------------------------> fill
            else if (command.match(/^fill/gi)) {
                if (redcomRef.changingSystemConfig) {
                    // TerminalClear(".terminal_body");
                    sysconfig_ref.fill = '> 0 - 0';
                    Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
                }
                if (redcomRef.hardwarePage) {
                    Prompt = "Processor in 0/0.p  DHCP Enabled (off|on|last|db_ip) [on]?";
                    redcomRef.gettingPortsForFindMe = true;
                }
            }


            /*
             * right now this algorithm just looks for dct - i need it to probe a little deeper
             * what i am looking for now is to pass dct to open a dial code table and then prepare for either a string of commands or single commands
             * once the dial code table opens up i will be looking to pass variables to it. i will accomplish this much in the same
             * way i did with the exit / activate commands.
             * 
             * pass the commands to this algorithm and have a check run to know what fields in the database and table need to be updated.
             * i am seeing now as a switch is turned on to let the system know that we are updating dial code tables. and if the delete database 
             * command is run i will need to reset the dial code tables.
             * so the switch is turned on, the system prepares to recieve either a string of commands or single commands, looks at the name of the comand and pushes the data to 
             * the appropriate slot.
             * 
             * i also need to be able to update the number of rows the dct has
             * 
             * as of now there are exactly 100 tables prepared with default data. i am simply updating them. i can have less or more depending on the needs of the user.
             * 
             * this tool should allow the school to make as many tables as they would ever need
             */
            //------------------------------------------------------------------------------------------------------------------> dial code tables
            else if (command.match(/^dct/gi)) {
                /*
                 * so i get the table number from the dct entry
                 * i use substring to get the table number and I pass that to the dialcode table class
                 * this builds a table based on the entry number
                 */
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "rsh /tmp>";
                var place = command.substring(4, 5);

                //var tr = dctref.retrunADCT();
                var te = dctref.retrunDCT(place);


                if (place == 6) {
                    dctref.updateADCT[place][2].pop(); // remove the last row in the array
                    /*
                     * obviously i am adding
                     * i also changed the display table for the quantity - it simply gets the actual number of rows and displays that count
                     */
                    dctref.updateADCT[place][2].push(["", "0", "- add -", "0", "dct", "7", "0", "0", "0", "", "", "0", ""]);
                    dctref.updateADCT[place][2].push(["", "0", "- add -", "0", "dct", "7", "0", "0", "0", "", "", "0", ""]);

                    dctref.updateADCT[place][2][0][2] = 'monkey'; //reference so i can start changing values

                }


                Prompt = dctref.displayDCT(place) + '<br>' + redcomRef.PromptStore;
                redcomRef.dialCodeTables = true;
                redcomRef.dct_act = true;
            }






            else if (command.match(/^name/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var changeName = command.replace(/^name=/g, "");

                dctref.updateADCT[dctref.tablePOS][1][0] = changeName; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }


            else if (command.match(/^tonetable/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var tonetable = command.replace(/^tonetable=/g, "");

                dctref.updateADCT[dctref.tablePOS][1][1] = tonetable; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }
            else if (command.match(/^intercept/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var intercept = command.replace(/^intercept=/g, "");

                dctref.updateADCT[dctref.tablePOS][1][2] = intercept; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }

            else if (command.match(/^format/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var format = command.replace(/^format=/g, "");

                dctref.updateADCT[dctref.tablePOS][1][3] = format; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }










            else if (command.match(/^entry/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var moveCaret = command.replace(/^entry=/g, "");

                dctref.caretPos = moveCaret;//moving the pointer and caret

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }


            else if (command.match(/^pattern/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_pattern = command.replace(/^pattern=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][2] = update_pattern; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }

            else if (command.match(/^sc/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_sc = command.replace(/^sc=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][3] = update_sc; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }


            else if (command.match(/^type/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_type = command.replace(/^type=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][4] = update_type; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }


            else if (command.match(/^val/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_val = command.replace(/^val=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][5] = update_val; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }


            else if (command.match(/^pre/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_pre = command.replace(/^pre=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][6] = update_pre; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }



            else if (command.match(/^pos/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_pos = command.replace(/^pos=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][7] = update_pos; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }




            else if (command.match(/^mark/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_mark = command.replace(/^mark=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][8] = update_mark; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }




            else if (command.match(/^next/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_next = command.replace(/^next=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][9] = update_next; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }




            else if (command.match(/^sbsnu/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_sbsnu = command.replace(/^sbsnu=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][10] = update_sbsnu; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }





            else if (command.match(/^sstnst/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_sstnst = command.replace(/^sstnst=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][11] = update_sstnst; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }







            else if (command.match(/^tid/gi) && redcomRef.dialCodeTables) {
                TerminalClear(".terminal_body");
                var update_tid = command.replace(/^tid=/g, "");

                dctref.updateADCT[dctref.tablePOS][2][dctref.caretPos][12] = update_tid; //reference so i can start changing values

                Prompt = dctref.displayDCT(dctref.tablePOS) + '<br>' + redcomRef.PromptStore;
            }










            //------------------------------------------------------------------------------------------------------------------> this will be the section for all the special commmands
            //------------------------------------------------------------------------------------------------------------------> dial code tables ready for input and changes




















            //------------------------------------------------------------------------------------------------------------------> dbsearch
            else if (command.match(/^dbsearch$/gi)) {
                //TerminalClear(".terminal_body");
                redcomRef.PromptStore = "rsh/tmp>";

                Prompt = dbsearch_ref.dbSearch_table() + "<br>" + redcomRef.PromptStore;
                redcomRef.dbsearch = true;
            }

            /*else if (command.match(/^change$/gi) && redcomRef.dbsearch) {
             TerminalClear(".terminal_body");
             dbsearch_ref.dbSearchArr[0][0] = '/changed';
             Prompt = dbsearch_ref.dbSearch_table() + "<br>" + redcomRef.PromptStore;
             }
             
             else if (command.match(/^reset$/gi) && redcomRef.dbsearch) {
             TerminalClear(".terminal_body");
             console.log(dbsearch_ref.reset_dbSearch())
             dbsearch_ref.reset_dbSearch();
             Prompt = dbsearch_ref.dbSearch_table() + "<br>" + redcomRef.PromptStore;
             }*/


            //dbSearchArr





            /*
             delete is handeled in the redcomShortcuts.js
             basically anything from del to delete is seens as delete
             
             */


            //------------------------------------------------------------------------------------------------------------------> del *.db
            else if (command.match(/^delete\s\*\.db$/gi)) {
                //  redcomRef.PromptStore = "rsh /tmp>";
                Prompt = redcomRef.databasesBuilt + " files deleted<br>" + redcomRef.PromptStore;
            }



















            // next i need to work out switching directories
            //------------------------------------------------------------------------------------------------------------------> cd /sys
            else if (command.match(/^cd\s\/sys$/gi)) {
                redcomRef.PromptStore = "rsh /sys>";
                Prompt = "" + redcomRef.PromptStore;
            }
            //------------------------------------------------------------------------------------------------------------------> cd /tmp
            else if (command.match(/^cd\s\/tmp$/gi)) {
                redcomRef.PromptStore = "rsh /tmp>";
                Prompt = "" + redcomRef.PromptStore;
            }

            //and then this fucking thing - i should be able to duplicate what ever i want
            //------------------------------------------------------------------------------------------------------------------> duplicating a system folder
            else if (command.match(/^dup\s\/sys\s\/sysrom$/gi)) {
                Prompt = "<br>This command will make a copy of /sys onto /sysrom \r All current files on /sysrom will be lost<br><br>Do you want to proceed? &lt;y/n&gt;";
                redcomRef.duplicatingDBFolder = true;
            }




            //------------------------------------------------------------------------------------------------------------------> dbunlk
            else if (command.match(/^dbunlk$/gi)) {
                Prompt = "<br>Database memory UN-LOCK request sent to MSU 0/0<br><br>" + redcomRef.PromptStore;
            }



            //------------------------------------------------------------------------------------------------------------------> common cmd entries
            //there is no clear in the redcom

            else if (command.match(/^clear$/gi)) {
                TerminalClear(".terminal_body");
                Prompt = redcomRef.RedcomUserAgreement + "<br>" + redcomRef.PromptStore;
            }


            //cls is a windows command - it won't work here
            else if (command.match(/^cls$/gi)) {
                Prompt = "ERROR 001 : unkown keyword '" + command + "'<br><br>" + redcomRef.PromptStore;
            }

            //the help is actually handeled int TerminalCommands.js - the only thing it doesn't do is add the prompt with out a conflict with this page
            else if (command.match(/^help$/gi)) {
                Prompt = "<br>" + redcomRef.PromptStore;
            }





            //------------------------------------------------------------------------------------------------------------------> teser confirmation code
            else if (command.match(/^teser$/gi) && redcomRef.confirmationCodeEntered) {
                Prompt = "Confirmation code accepted!<br><br> Your RAM is " + redcomRef.ram + ".<br>Database changes may be lost, ok to continue? &lt;y/n&gt;";
                redcomRef.confirmationCodeEntered = false;
                redcomRef.deleteDatabases = true;
            }
            //------------------------------------------------------------------------------------------------------------------> entering reset - no need to change the stored prompt
            else if (command.match(/^reset$/gi)) {
                Prompt = "<br>WARNING: This command will cause dropped calls and a service disruption!<br><br>Okay to reboot the shelf? &lt;y/n&gt;";
                redcomRef.resettingTheShelf = true;
            }
            //------------------------------------------------------------------------------------------------------------------> start building the database
            //------------------------------------------------------------------------------------------------------------------> database generation		
            else if (command.match(/^gen$/gi)) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "gen>";
                Prompt = slicegen_ref.slicegen_table() + "<br>" + redcomRef.PromptStore;
                redcomRef.genPage = true;
            }
            //------------------------------------------------------------------------------------------------------------------> getTheDatabases
            else if (command.match(/^database$/gi) && redcomRef.genPage) {
                //you must be in the gen table to complete this step
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "gen/database>";
                // dbSettingsRef.databaseTableConfigSettings[0][0] = 'asshat'//this is how I change the values
                Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
                redcomRef.getTheDatabases = true;
                redcomRef.database_act = true; // this table needs to be activated
            }
            //we are working in the database table
            /*else if(redcomRef.getTheDatabases){
             TerminalClear(".terminal_body");
             Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
             }*/
            /* examples
             else if(command.match(/^change$/gi) && redcomRef.getTheDatabases){
             TerminalClear(".terminal_body");
             dbSettingsRef.databaseTableConfigSettings[0][0] = 'changed it'
             Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
             }else if(command.match(/^again$/gi) && redcomRef.getTheDatabases){
             TerminalClear(".terminal_body");
             dbSettingsRef.databaseTableConfigSettings[0][0] = 'j gibb'
             Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
             }
             */
            //------------------------------------------------------------------------------------------------------------------> RedcomDecipher
            /*
             * regex: I need to see the word table with an equals sign (+) and get everything between the equal sign and a semi-colon. then a white space the word curr an equal sign and everything after it
             */
            //------------------------------------------------------------------------------------------------------------------> loadTheDatabases


            else if (command.match(/^table\=(.*)/gi) && redcomRef.getTheDatabases) {
                //--------------------------------------------------------------------------------------------------------------> i get the values from looking up the table
                //--------------------------------------------------------------------------------------------------------------> i send the table name to the RedcomDatabaseTableConfigSettings to "select" the correct table
                //--------------------------------------------------------------------------------------------------------------> i store which table I am looking at in the redcom
                //--------------------------------------------------------------------------------------------------------------> clear out everything so I can reload the database tables
                TerminalClear(".terminal_body");
                //--------------------------------------------------------------------------------------------------------------> pass the values returned from searching the table 
                dbSettingsRef.posToSeclect = redComDBDecipher(command);
                Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
                redcomRef.loadTheDatabases = true;
            }

            else if (command.match(/^current\=(.*)/gi) && redcomRef.getTheDatabases) {

                var theVal = Number(redComDBDecipher(command));



                if (dbSettingsRef.dbmin <= theVal && dbSettingsRef.dbmax >= theVal) {
                    //console.log('yep it is between them');
                    TerminalClear(".terminal_body");
                    dbSettingsRef.databaseTableConfigSettings[dbSettingsRef.dbPosition][1] = redComDBDecipher(command);
                    Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
                } else {
                    Prompt = "<br>ERROR: the CURRENT value must be in between the min and max values<br><br>" + redcomRef.PromptStore;
                }
            }

            /*	
             else if (command.match(/^min\=(.*)/gi) && redcomRef.getTheDatabases) {
             TerminalClear(".terminal_body");
             dbSettingsRef.databaseTableConfigSettings[dbSettingsRef.dbPosition][2] = redComDBDecipher(command);
             Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
             }
             else if (command.match(/^max\=(.*)/gi) && redcomRef.getTheDatabases) {
             TerminalClear(".terminal_body");
             dbSettingsRef.databaseTableConfigSettings[dbSettingsRef.dbPosition][3] = redComDBDecipher(command);
             Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
             }
             else if (command.match(/^size\=(.*)/gi) && redcomRef.getTheDatabases) {
             TerminalClear(".terminal_body");
             dbSettingsRef.databaseTableConfigSettings[dbSettingsRef.dbPosition][4] = redComDBDecipher(command);
             Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
             } else if (command.match(/^scope\=(.*)/gi) && redcomRef.getTheDatabases) {
             TerminalClear(".terminal_body");
             dbSettingsRef.databaseTableConfigSettings[dbSettingsRef.dbPosition][5] = redComDBDecipher(command);
             Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
             }
             */


            else if (command.match(/^comment\=(.*)/gi) && redcomRef.getTheDatabases) {
                TerminalClear(".terminal_body");
                dbSettingsRef.databaseTableConfigSettings[dbSettingsRef.dbPosition][6] = redComDBDecipher(command);
                Prompt = dbSettingsRef.db_table() + "<br>gen> database<br>" + redcomRef.PromptStore;
            }




            //------------------------------------------------------------------------------------------------------------------> system config
            else if (command.match(/^system$/gi) && redcomRef.genPage) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "gen /system>";
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
                redcomRef.changingSystemConfig = true;
                redcomRef.system_act = true;
            }


            //------------------------------------------------------------------------------------------------------------------> system config - entering commands
            else if (command.match(/^switch_type=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.switchType = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + redcomRef.PromptStore;
                //
                switch (redComDBDecipher(command)) {
                    case 'mil':
                        Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + "This command will overwrite Dial Code tables, Tone and Ring Tables,<br>System options, Timers, Line class marks, and device drivers.<br>Do you wish to continue?<br>(Y)es, (N)o, (C)ustomize or (S)witch setting only?";
                        break;
                }




                /* if (command.match(/^switch_type=mil$/gi)) {
                 Prompt = RedcomSystemConfig(command) + "<br>" + "This command will overwrite Dial Code tables, Tone and Ring Tables,<br>System options, Timers, Line class marks, and device drivers.<br>Do you wish to continue?<br>(Y)es, (N)o, (C)ustomize or (S)witch setting only?";
                 } else {
                 Prompt = RedcomSystemConfig(command) + "<br>" + redcomRef.PromptStore;
                 }*/

            }




            else if (command.match(/^npa=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.npaSetting = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }




            else if (command.match(/^hmx=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.hmxSetting = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^type=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.typeSetting = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^lta=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.ltaSetting = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }



            else if (command.match(/^sequenced=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");

                var searcher = command.replace(/^sequenced=/g, "");//passed command
                //var searcher2 = command.replace(/(.*)/g, "");//sequenced
                var newTerm = redcomShortcuts(searcher);
                //var newTerm2 = redcomShortcuts(searcher2);


                sysconfig_ref.numbersSequenced = newTerm;//the command passed for sequenced
                //sysconfig_ref.numbersSequenced = redComDBDecipher(command);//the command passed for sequenced

                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }




            else if (command.match(/^start=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.startingAt = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^next=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.nextNum = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^sip_user_start=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.sip_user_start = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^sip_user_next=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.sip_user_next = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^specific=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.specificClotID = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^cluster=(.*)/gi) && redcomRef.changingSystemConfig) {
                TerminalClear(".terminal_body");
                sysconfig_ref.cluster = redComDBDecipher(command);
                Prompt = sysconfig_ref.recomSysConfigTable() + "<br>" + redcomRef.PromptStore;
            }










            //------------------------------------------------------------------------------------------------------------------> hardware




            else if (command.match(/^hardware$/gi) && redcomRef.genPage) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "gen /hardware>";
                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
                redcomRef.hardwarePage = true;
                redcomRef.hardware_act = true;
                redcomRef.setUpSystemAdminTable = false; //ensure that this slot is used only for hardware when we leave the adm page
            }

            else if (command.match(/^type=(.*)/gi) && redcomRef.hardwarePage) {
                //position 0 in array
                TerminalClear(".terminal_body");
                hardwareSettings_ref.slotsRowArr[hardwareSettings_ref.currPos][0] = redComDBDecipher(command);
                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
            }

            else if (command.match(/^pid=(.*)/gi) && redcomRef.hardwarePage) {
                //position 1 in array
                TerminalClear(".terminal_body");
                hardwareSettings_ref.slotsRowArr[hardwareSettings_ref.currPos][1] = redComDBDecipher(command);
                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
            }

            else if (command.match(/^ts1=(.*)/gi) && redcomRef.hardwarePage) {
                //position 2 in array
                TerminalClear(".terminal_body");
                hardwareSettings_ref.slotsRowArr[hardwareSettings_ref.currPos][2] = redComDBDecipher(command);
                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
            }

            else if (command.match(/^tsqty=(.*)/gi) && redcomRef.hardwarePage) {
                //position 3 in array
                TerminalClear(".terminal_body");
                hardwareSettings_ref.slotsRowArr[hardwareSettings_ref.currPos][3] = redComDBDecipher(command);
                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
            }

            else if (command.match(/^pt1=(.*)/gi) && redcomRef.hardwarePage) {
                //position 4 in array
                TerminalClear(".terminal_body");
                hardwareSettings_ref.slotsRowArr[hardwareSettings_ref.currPos][4] = redComDBDecipher(command);
                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
            }

            else if (command.match(/^ptqty=(.*)/gi) && redcomRef.hardwarePage) {
                //position 5 in array
                TerminalClear(".terminal_body");
                hardwareSettings_ref.slotsRowArr[hardwareSettings_ref.currPos][5] = redComDBDecipher(command);
                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
            }





            /*
             * need to account for the answer to be 'off'
             * so if the answer is off we send different responses
             */


            else if (redcomRef.gettingPortsForFindMe) {

                if (command.match(/^off$/gi)) {
                    Prompt = "Processor in 0/0.p  IP Address [0.0.0.0]?";
                    redcomRef.offProcessorQ1 = true;
                } else {
                    Prompt = "Processor in 0/0.p  How many ports for find-me (0-50) [0]?";
                    redcomRef.gettingPortsForFindMe2 = true;
                }
                redcomRef.gettingPortsForFindMe = false;

            }

            else if (redcomRef.offProcessorQ1) {
                Prompt = "Processor in 0/0.p  Net mask [0.0.0.0]?";
                redcomRef.offProcessorQ1 = false;
                redcomRef.offProcessorQ2 = true;
            }
            else if (redcomRef.offProcessorQ2) {
                Prompt = "Processor in 0/0.p  Gateway [0.0.0.0]?";
                redcomRef.offProcessorQ2 = false;
                redcomRef.gettingPortsForFindMe2 = true;
            }






            else if (redcomRef.gettingPortsForFindMe2) {
                Prompt = "How many primary rate circuts for met board in MSU 0/0 slot 1 (0-4)[0]?";
                redcomRef.gettingPortsForFindMe2 = false;
                redcomRef.howManyPrimaryRateCircuts = true;
            }
            else if (redcomRef.howManyPrimaryRateCircuts) {
                Prompt = "How many announcer circuts for met board in MSU 0/0 slot 1 (0-8)[0]?";
                redcomRef.howManyAnnouncerCircuts = true;
                redcomRef.howManyPrimaryRateCircuts = false;
            }
            else if (redcomRef.howManyAnnouncerCircuts) {
                Prompt = "Span type for met circut 0/0.1/0 (t1,e1,t1_exp)[t1_exp]?";
                redcomRef.howManyAnnouncerCircuts = false;
                redcomRef.spanTypeForMetCircuts = true;
            }
            else if (redcomRef.spanTypeForMetCircuts) {
                Prompt = "How many channels for met circut 0/0.1/0 (0-24)[24]?";
                redcomRef.spanTypeForMetCircuts = false;
                redcomRef.howManyChannelsFotMetCircut = true;
            }
            else if (redcomRef.howManyChannelsFotMetCircut) {
                Prompt = "Span type for met circut 0/0.1/0 (t1,e1,t1_exp)[t1_exp]?";
                redcomRef.howManyChannelsFotMetCircut = false;
                redcomRef.spanTypeForMetCircuts2 = true;
            }
            else if (redcomRef.spanTypeForMetCircuts2) {
                Prompt = "How many channels for met circut 0/0.1/0 (0-24)[24]?";
                redcomRef.spanTypeForMetCircuts2 = false;
                redcomRef.howManyChannelsFotMetCircut2 = true;
            }
            else if (redcomRef.howManyChannelsFotMetCircut2) {
                Prompt = "BR2 in 0/0.5 How many appearances for each term (1-8) [3]?";
                redcomRef.howManyChannelsFotMetCircut2 = false;
                redcomRef.br2Appearances = true;
            }
            else if (redcomRef.br2Appearances) {
                Prompt = "BR2 in 0/0.9 How many appearances for each term (1-8) [3]?";
                redcomRef.br2Appearances = false;
                redcomRef.br2Appearances2 = true;
            }
            else if (redcomRef.br2Appearances2) {


                //set the preset military codes

                TerminalClear(".terminal_body");
                /* hardwareSettings_ref.hardwareTableBottom[0] = ["pro", "tsi", "ser", "trk", "na", "na", "lin", "lin", "na", "na", "lin", "lin", "na", "na", "na", "na", "na", "na"];
                 hardwareSettings_ref.hardwareTableBottom[1] = ["pro", "ts1", "ts2", "met", "na", "na", "xd2", "br2", "na", "na", "xd2", "br2", "na", "na", "na", "na", "na", "na"];
                 hardwareSettings_ref.hardwareTableBottom[2] = ["0", "0", "0", "36", "", "", "284", "296", "", "", "300", "312", "", "", "", "", "", ""];
                 hardwareSettings_ref.hardwareTableBottom[3] = ["0", "0", "36", "248", "", "", "12", "4", "", "", "12", "4", "", "", "", "", "", ""];
                 hardwareSettings_ref.hardwareTableBottom[4] = ["0", "0", "714", "0", "", "", "154", "166", "", "", "182", "194", "", "", "", "", "", ""];
                 hardwareSettings_ref.hardwareTableBottom[5] = ["0", "0", "36", "154", "", "", "12", "16", "", "", "12", "16", "", "", "", "", "", ""];*/

                hardwareSettings_ref.tslots = 608;
                hardwareSettings_ref.showRedcomFillTable = true;


                Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
                redcomRef.br2Appearances2 = false;
            }







            //------------------------------------------------------------------------------------------------------------------> admin




            //lets get the system admin panel
            else if (command.match(/^adm$/gi)) {
                TerminalClear(".terminal_body");
                sysAdmin_ref.hardwareSlotsRowArr = hardwareSettings_ref.slotsRowArr;
                sysAdmin_ref.hardwareSlotsArr = hardwareSettings_ref.slotsArr;
                redcomRef.PromptStore = "adm>";
                Prompt = sysAdmin_ref.sysAdminTable() + "<br>" + redcomRef.PromptStore;
                redcomRef.setUpSystemAdminTable = true;
                redcomRef.hardwarePage = false;
            }




            //lineClasses_act
            //line_classes_ref
            else if (command.match(/^cos=(.*)$/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "adm/cos>";
                var movePointer = command.replace(/^cos=/g, "");
                line_classes_ref.currLineClass = movePointer;
                Prompt = line_classes_ref.display_LineClasses() + "<br>" + redcomRef.PromptStore;

                redcomRef.lineClasses_act = true;
                redcomRef.lineClasses = true;
            }






            else if (command.match(/^(.*)=(.*)$/gi) && redcomRef.lineClasses) {
                TerminalClear(".terminal_body");
                var new_commands = command.split("="),
                        searchTerm = 0;
                switch (new_commands[0]) {
                    case "bsyo":
                        searchTerm = 0;
                        break;
                    case "crng":
                        searchTerm = 1;
                        break;
                    case "lnr":
                        searchTerm = 2;
                        break;
                    case "ppay":
                        searchTerm = 3;
                        break;
                    case "spay":
                        searchTerm = 4;
                        break;
                    case "trap":
                        searchTerm = 5;
                        break;
                    case "cfwd":
                        searchTerm = 6;
                        break;
                    case "cwt":
                        searchTerm = 7;
                        break;
                    case "mant":
                        searchTerm = 8;
                        break;
                    case "prem":
                        searchTerm = 9;
                        break;
                    case "spl3":
                        searchTerm = 10;
                        break;
                    case "trkx":
                        searchTerm = 11;
                        break;
                    case "cnab":
                        searchTerm = 12;
                        break;
                    case "datp":
                        searchTerm = 13;
                        break;
                    case "mixd":
                        searchTerm = 14;
                        break;
                    case "radi":
                        searchTerm = 15;
                        break;
                    case "ssr":
                        searchTerm = 16;
                        break;
                    case "wake":
                        searchTerm = 17;
                        break;
                    case "cnbu":
                        searchTerm = 18;
                        break;
                    case "did":
                        searchTerm = 19;
                        break;
                    case "nodp":
                        searchTerm = 20;
                        break;
                    case "rdl":
                        searchTerm = 21;
                        break;
                    case "tgen":
                        searchTerm = 22;
                        break;
                    case "warm":
                        searchTerm = 23;
                        break;
                    case "cndb":
                        searchTerm = 24;
                        break;
                    case "dtf":
                        searchTerm = 25;
                        break;
                    case "msg":
                        searchTerm = 26;
                        break;
                    case "ruth":
                        searchTerm = 27;
                        break;
                    case "ti":
                        searchTerm = 28;
                        break;
                    case "xdb":
                        searchTerm = 29;
                        break;
                    case "cnf":
                        searchTerm = 30;
                        break;
                    case "dtmf":
                        searchTerm = 31;
                        break;
                    case "pcwt":
                        searchTerm = 32;
                        break;
                    case "rwak":
                        searchTerm = 33;
                        break;
                    case "to":
                        searchTerm = 34;
                        break;
                    case "xfr":
                        searchTerm = 35;
                        break;
                    case "colf":
                        searchTerm = 36;
                        break;
                    case "dyn":
                        searchTerm = 37;
                        break;
                    case "pdt":
                        searchTerm = 38;
                        break;
                }
                line_classes_ref.lineClasses_List[line_classes_ref.currLineClass][searchTerm] = rejectYesNo(new_commands[1]);//using a local funciton to see if the input is only yes or no or y or n

                Prompt = line_classes_ref.display_LineClasses() + "<br>" + redcomRef.PromptStore;
            }









//station_listing_ref
            //------------------------------------------------------------------------------------------------------------------> ip list - if the adm panel has been activated

            else if (command.match(/^stn_lst$/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "adm/stnlst>";

                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
                redcomRef.sntList_act = true;
                redcomRef.stationListActivated = true;

            }
            //caretPos
            else if (command.match(/^entry=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var moveCaret = command.replace(/^entry=/g, "");
                station_listing_ref.caretPos = moveCaret;//moves the caret and the pointer to the array item we need to alter
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }

            else if (command.match(/^type=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var type = command.replace(/^type=/g, "");
                station_listing_ref.stationListing_List[station_listing_ref.caretPos][1] = type;
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }


            else if (command.match(/^station=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var station = command.replace(/^station=/g, "");
                station_listing_ref.stationListing_List[station_listing_ref.caretPos][2] = station;
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }



            else if (command.match(/^cos=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var coss = command.replace(/^cos=/g, "");
                station_listing_ref.stationListing_List[station_listing_ref.caretPos][3] = coss;
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }



            else if (command.match(/^class=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var st_class = command.replace(/^class=/g, "");
                station_listing_ref.stationListing_List[station_listing_ref.caretPos][4] = st_class;
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }



            else if (command.match(/^cac1=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var cac1 = command.replace(/^cac1=/g, "");
                station_listing_ref.stationListing_List[station_listing_ref.caretPos][5] = cac1;
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }



            else if (command.match(/^cac2=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var cac2 = command.replace(/^cac2=/g, "");
                station_listing_ref.stationListing_List[station_listing_ref.caretPos][6] = cac2;
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }



            else if (command.match(/^name=(.*)$/gi) && redcomRef.stationListActivated) {
                TerminalClear(".terminal_body");
                var name = command.replace(/^name=/g, "");
                station_listing_ref.stationListing_List[station_listing_ref.caretPos][7] = name;
                Prompt = station_listing_ref.display_StationList() + "<br>" + redcomRef.PromptStore;
            }

















            //------------------------------------------------------------------------------------------------------------------> ip list - if the adm panel has been activated

            else if (command.match(/^iplist$/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "adm/iplist>";
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
                redcomRef.ipList_act = true;
                redcomRef.ipListActivated = true;
                redcomRef.hardwarePage = false;

            }

            else if (command.match(/^entry=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var moveCaret = command.replace(/^entry=/g, "");

                iplistTable_ref.selected = moveCaret;//moves the caret and the pointer to the array item we need to alter

                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }




            else if (command.match(/^ip_mask=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeIPMask = command.replace(/^ip_mask=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][1] = changeIPMask;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;


            }









            else if (command.match(/^stelnet=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeStelnet = command.replace(/^stelnet=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][2] = changeStelnet;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^telnet=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeTelnet = command.replace(/^telnet=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][3] = changeTelnet;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^host=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeHost = command.replace(/^host=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][4] = changeHost;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^smdr=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeSMDR = command.replace(/^smdr=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][5] = changeSMDR;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^note=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeNote = command.replace(/^note=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][6] = changeNote;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^tdmp=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeTDMP = command.replace(/^tdmp=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][7] = changeTDMP;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^maui=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changeMaui = command.replace(/^maui=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][8] = changeMaui;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^lcs=(.*)/gi) && redcomRef.ipListActivated) {
                TerminalClear(".terminal_body");
                var changLCS = command.replace(/^lcs=/g, "");
                iplistTable_ref.iplist_List[iplistTable_ref.selected][9] = changLCS;
                Prompt = iplistTable_ref.display_IPList() + "<br>" + redcomRef.PromptStore;
            }





            //------------------------------------------------------------------------------------------------------------------> using slot - multiple input

            else if (command.match(/^slot=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");

                //look at specific slot on slot table
                if (redcomRef.setUpSystemAdminTable) {

                    switch (redComDBDecipher(command)) {
                        case 'p':
                            slotScreen_ref.currSlot = 0;
                            break;
                        case 't':
                            slotScreen_ref.currSlot = 1;
                            break;
                        case '0':
                            slotScreen_ref.currSlot = 2;
                            break;
                        case '1':
                            slotScreen_ref.currSlot = 3;
                            break;
                        case '2':
                            slotScreen_ref.currSlot = 4;
                            break;
                        case '3':
                            slotScreen_ref.currSlot = 5;
                            break;
                        case '4':
                            slotScreen_ref.currSlot = 6;
                            break;
                        case '5':
                            slotScreen_ref.currSlot = 7;
                            break;
                        case '6':
                            slotScreen_ref.currSlot = 8;
                            break;
                        case '7':
                            slotScreen_ref.currSlot = 9;
                            break;
                        case '8':
                            slotScreen_ref.currSlot = 10;
                            break;
                        case '9':
                            slotScreen_ref.currSlot = 11;
                            break;
                        case '10':
                            slotScreen_ref.currSlot = 12;
                            break;
                        case '11':
                            slotScreen_ref.currSlot = 13;
                            break;
                        case '12':
                            slotScreen_ref.currSlot = 14;
                            break;
                        case '13':
                            slotScreen_ref.currSlot = 15;
                            break;
                        case '14':
                            slotScreen_ref.currSlot = 16;
                            break;
                        case '15':
                            slotScreen_ref.currSlot = 17;
                            break;
                    }

                    //slotScreen_ref.slotScreen[slotScreen_ref.currSlot][0] = 'asshat';
                    redcomRef.PromptStore = "adm /slot>";
                    Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
                    redcomRef.slotScreenActivated = true;
                    //redcomRef.setUpSystemAdminTable = false;
                    redcomRef.slot_act = true;
                }

                //altering slots on hardware page
                else if (redcomRef.hardwarePage && !redcomRef.setUpSystemAdminTable) {
                    hardwareSettings_ref.slotsPos = redComDBDecipher(command).toUpperCase();
                    Prompt = hardwareSettings_ref.buildHardwareTable() + "<br>" + redcomRef.PromptStore;
                } else {
                    finCheck();
                }

            }

            //------------------------------------------------------------------------------------------------------------------> using slot - manual input tables

            else if (command.match(/^phy=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][0][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^fqdn=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][1][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^ip_addr=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][2][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^gateway=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][3][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^dhcp=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                if (redComDBDecipher(command) == 'on' || redComDBDecipher(command) == 'off' || redComDBDecipher(command) == 'last' || redComDBDecipher(command) == 'db_ip') {
                    TerminalClear(".terminal_body");
                    slotScreen_ref.slotScreen[slotScreen_ref.currSlot][4][1] = redComDBDecipher(command);
                    Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
                } else {
                    rejectInput(redComDBDecipher(command));
                }



            }
            else if (command.match(/^60v4_tunnel=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][5][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^icmp_echo=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                if (redComDBDecipher(command) == 'on' || redComDBDecipher(command) == 'off') {
                    TerminalClear(".terminal_body");
                    slotScreen_ref.slotScreen[slotScreen_ref.currSlot][6][1] = redComDBDecipher(command);
                    Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
                } else {
                    rejectInput(redComDBDecipher(command));
                }
            }
            else if (command.match(/^nd6_redirect=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                if (redComDBDecipher(command) == 'on' || redComDBDecipher(command) == 'off') {
                    TerminalClear(".terminal_body");
                    slotScreen_ref.slotScreen[slotScreen_ref.currSlot][7][1] = redComDBDecipher(command);
                    Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
                } else {
                    rejectInput(redComDBDecipher(command));
                }
            }
            else if (command.match(/^ip6_addr=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][8][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^mtu=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][9][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^vlan_id=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][10][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^icmp_dest=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                if (redComDBDecipher(command) == 'on' || redComDBDecipher(command) == 'off') {
                    TerminalClear(".terminal_body");
                    slotScreen_ref.slotScreen[slotScreen_ref.currSlot][11][1] = redComDBDecipher(command);
                    Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
                } else {
                    rejectInput(redComDBDecipher(command));
                }
            }
            else if (command.match(/^agent=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][12][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^net_mask=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][13][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^linklocal=(.*)/gi) && redcomRef.setUpSystemAdminTable) {

                if (redComDBDecipher(command) == 'on' || redComDBDecipher(command) == 'off' || redComDBDecipher(command) == 'last' || redComDBDecipher(command) == 'll-only') {
                    TerminalClear(".terminal_body");
                    slotScreen_ref.slotScreen[slotScreen_ref.currSlot][14][1] = redComDBDecipher(command);
                    Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
                } else {
                    rejectInput(redComDBDecipher(command));
                }





            }
            else if (command.match(/^tagging=(.*)/gi) && redcomRef.setUpSystemAdminTable) {

                if (redComDBDecipher(command) == 'on' || redComDBDecipher(command) == 'off') {
                    TerminalClear(".terminal_body");
                    slotScreen_ref.slotScreen[slotScreen_ref.currSlot][15][1] = redComDBDecipher(command);
                    Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
                } else {
                    rejectInput(redComDBDecipher(command));
                }
            }
            else if (command.match(/^icmp6_limit=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][16][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^ip6_dad=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][17][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^msu=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][18][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^pid=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][19][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^name=(.*)/gi) && redcomRef.setUpSystemAdminTable) {
                TerminalClear(".terminal_body");
                slotScreen_ref.slotScreen[slotScreen_ref.currSlot][20][1] = redComDBDecipher(command);
                Prompt = slotScreen_ref.SlotScreenTable() + "<br>" + redcomRef.PromptStore;
            }
























            //lets get the system admin panel - npa
            else if (command.match(/^npa$/gi) && redcomRef.setUpSystemAdminTable && !redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "adm/npa>";

                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
                redcomRef.setUpSystemAdminTableNPA = true;
            }


            else if (command.match(/^entry=(.*)$/gi) && redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                var moveCaret = command.replace(/^entry=/g, "");
                homeExchange_ref.currRow = moveCaret;
                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
            }





            else if (command.match(/^cc=(.*)$/gi) && redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                homeExchange_ref.homeExchangeArr[homeExchange_ref.currRow][2] = redComDBDecipher(command);
                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
            }



            else if (command.match(/^npa=(.*)$/gi) && redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                homeExchange_ref.homeExchangeArr[homeExchange_ref.currRow][3] = redComDBDecipher(command);
                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^hmx=(.*)$/gi) && redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                homeExchange_ref.homeExchangeArr[homeExchange_ref.currRow][4] = redComDBDecipher(command);
                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;

            }
            else if (command.match(/^type=(.*)$/gi) && redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                homeExchange_ref.homeExchangeArr[homeExchange_ref.currRow][5] = redComDBDecipher(command);
                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;

            }
            else if (command.match(/^location=(.*)$/gi) && redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                homeExchange_ref.homeExchangeArr[homeExchange_ref.currRow][6] = redComDBDecipher(command);
                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
            }
            else if (command.match(/^description=(.*)$/gi) && redcomRef.setUpSystemAdminTableNPA) {
                TerminalClear(".terminal_body");
                homeExchange_ref.homeExchangeArr[homeExchange_ref.currRow][7] = redComDBDecipher(command);
                Prompt = homeExchange_ref.homeExchangeTable() + "<br>" + redcomRef.PromptStore;
            }






            //going to th ethernet
            else if (command.match(/^ethernet$/gi)) {
                TerminalClear(".terminal_body");
                redcomRef.PromptStore = "gen /ethernet>";
                Prompt = ethernetConfig_ref.ethernetTable() + "<br>Status: Activating.....<br>" + redcomRef.PromptStore;
                redcomRef.etherNetPage = true;
            }




            //------------------------------------------------------------------------------------------------------------------> easter eggs

            else if (command.match(/^author$/gi)) {
                Prompt = "<br><br><br>The Redcom Emulator was developed in its entirety by J Gibbens in 2014/2015 (it took a while).<br>The REDCOM Emulator was built on the Tempus v4 engine.<br>Tempus was conceived and developed in its entirety by J Gibbens.<br>J Gibbens is pretty amazing.<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^j gibbens is amazing$/gi)) {
                Prompt = "<br><br><br>I don't always write in easter eggs, but when I do, they are <em>all</em> about me.<br><br>J Gibbens <em>IS</em> amazing.<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^j gibbens$/gi)) {
                Prompt = "<br><br><br>I don't always write in easter eggs, but when I do, they are <em>all</em> about me.<br><br>J Gibbens <em>IS</em> amazing.<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^gibbens$/gi)) {
                Prompt = "<br><br><br>I don't always write in easter eggs, but when I do, they are <em>all</em> about me.<br><br>J Gibbens <em>IS</em> amazing.<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^haiku$/gi)) {
                Prompt = "<br><br><br>Do not doubt my work<br>It is an awesome work man!<br>I like to code stuff<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^riddle$/gi)) {
                Prompt = "<br><br><br><em>What is curious and about to fail this class?</em><br><br><br><br><strong>You.</strong> -----> (☉_☉)<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^red text$/gi)) {
                $(".terminal_body").css({
                    "color": "#ff0000 !important"
                });
                Prompt = "<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^white text$/gi)) {
                $(".terminal_body").css({
                    "color": "#ffffff !important"
                });
                Prompt = "<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^green text$/gi)) {
                $(".terminal_body").css({
                    "color": "#00d128 !important"
                });
                Prompt = "<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^apple II$/gi)) {
                $(".terminal_body").css({
                    "color": "#00d128 !important"
                });
                Prompt = "<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^old school$/gi)) {
                $(".terminal_body").css({
                    "color": "#00d128 !important"
                });
                Prompt = "<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^shadow text$/gi)) {
                $(".terminal_body").css({
                    "color": "#282828 !important"
                });
                Prompt = "<br><br>Press ENTER to continue.<br><br><br><br>";
            }
            else if (command.match(/^hidden text$/gi)) {
                $(".terminal_body").css({
                    "color": "#000000 !important"
                });
                Prompt = "<br><br>Press ENTER to continue.<br><br><br><br>";
            }








            //------------------------------------------------------------------------------------------------------------------> end
            else {
                finCheck();
            }
            //------------------------------------------------------------------------------------------------------------------> not logged in and I am letting you know it
        } else {
            //------------------------------------------------------------------------------------------------------------------> if we arent logged in ...
            if (!redcomRef.RedcomCheckLogin) {
                redcomRef.PromptStore = "Login:";
                Prompt = notLoggedIn + redcomRef.PromptStore;
            }
            if (!redcomRef.RedcomCheckPasswd) {
                redcomRef.PromptStore = "Login:";
                Prompt = notLoggedIn + redcomRef.PromptStore;
                redcomRef.RedcomCheckLogin = false;
            }
        }
    } catch (err) {
        finCheck();

    }

//so i dont have to repeat 
    function finCheck() {
        //--------------------------------------------------------------------------------------------------------------> gotta watch out for the terminal checking for clear
        if (!command.match(/^cls$/gi) && !command.match(/^cd\s\.\.\/$/gi) && redcomRef.RedcomCheckPasswd) {
            Prompt = "ERROR 001 : unkown keyword '" + command + "'<br><br>" + redcomRef.PromptStore;
        }
        //--------------------------------------------------------------------------------------------------------------> unknown entries
        else {
            Prompt = redcomRef.PromptStore;
        }
    }


    function rejectInput(e) {
        Prompt = "ERROR : unkown value '" + e + "'<br><br>" + redcomRef.PromptStore;
    }


    /*
     console.log('ipListActivated: '+redcomRef.ipListActivated)
     console.log('getTheDatabases: '+redcomRef.getTheDatabases)
     console.log('changingSystemConfig: '+redcomRef.changingSystemConfig)
     console.log('hardwarePage: '+redcomRef.hardwarePage)
     console.log('etherNetPage: '+redcomRef.etherNetPage)
     console.log('setUpSystemAdminTable: '+redcomRef.setUpSystemAdminTable)
     console.log('setUpSystemAdminTableNPA: '+redcomRef.setUpSystemAdminTableNPA)
     console.log('slotScreenActivated: '+redcomRef.slotScreenActivated)
     */
    function rejectYesNo(e) {
        var a = '';
        if (e == 'yes' || e == 'y') {
            a = 'yes';
        }
        else if (e == 'no' || e == 'n') {
            a = 'no';
        }
        return a;
    }




    return Prompt + "&nbsp;";
}