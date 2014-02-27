/**
 * @author Prisca Pointdujour
 */
/*
 * Project steps:
 * 1. Set up document ready
 * 2. Load Google charting package
 * 3. Load data
 * 4. Render chart
*/

function infoLoaded(UEMP270V){
	console.log(UEMP270V);
	
}

//defining my google.load callback
function Pkgloaded(){
	console.log("Google pkg loaded");
	//setting up jQuery "get" call to load data
	$.get("UEMP270V_data.json", infoLoaded, "json");
}

//defining document ready callback
function Polo(){
	console.log("page done");
	//load Google charting package
	google.load("visualization", "1", {packages:["corechart"], "callback": Pkgloaded});
}

/*document ready function */
$(document).ready(Polo)

console.log("js loaded");
 
