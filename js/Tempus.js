/*
Global vars
*/
var terminals = [];
var toolBarRef = "";//????
var redcomRef = {};//keep a global reference to the redcom
/*
Build the basic Tempus object
*/
function Tempus(modules){

	$("body").prepend('<div id="Tempus"></div>');
	
	

	//<div id="puttyBox"><!--end puttyBox--></div>
	
	/*
	build the redcom
	the redcom builds a new terminal
	*/

	

	for(var i = 0;i<modules.length;i++){
		switch(modules[i][1]){
				case "Redcom":
					var redcom = new Redcom(modules[i][1],modules[i][2],modules[i][3],modules[i][4],modules[i][5]);//instantiate a new redcom module
					redcom.name = "Redcom"; 
					redcomRef = redcom;
	
					
					//terminals[i] = new Terminal(modules[i][1],modules[i][2],modules[i][3],modules[i][4],modules[i][5],modules[i][6],redcom);//instant a new terminal
				break;
			}
			
			
			
		switch(modules[i][0]){
			case "term":
			
			//var terminalRef = {};
			/*switch(modules[i][1]){
				case "Redcom":
					var redcom = new Redcom();//instantiate a new redcom module
					
					redcom.name = "Redcom";
					terminalRef = redcom;
				break;
			}*/
				
			//	terminals[i] = new Terminal(modules[i][1],modules[i][2],modules[i][3],modules[i][4],modules[i][5],modules[i][6],terminalRef);//instant a new terminal
				//terminals[i].name = terminalRef.name+"Ter";//give the terminal object a property of name so I can reference it and still be able to read what I am referencing
				
			break;
		}
	}
	
	
	
	
	
	
	
}