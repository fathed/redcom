/*
 I wamnt Tempus to be module driven so I need a list of the available modules and then pass them to Tempus
 the modules are accepted as arrays so I can pass all the data to them
 
 term = build a terminal
 */


//REDCOM

//var redcomStartingText = ""+redcom.RedcomInitPrompt+">"; //Always need to add the > symbol

var redcomArr = ['term', 'Redcom', "xp", "#FFFFFF", 35, 6]; //pass all the init data for this module

////////////////////////////// test

var modules = [redcomArr],//the array being passed to Tempus
 newTempus = new Tempus(modules);//init Tempus

$("#Tempus").prepend('<div id="puttyBox"></div>');
buildPutty();

$("#" + redcomRef.name + "Terminal").hide();

