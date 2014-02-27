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

//defining my google.load callback
function Pkgloaded(){
	console.log("Google pkg loaded");
}


function Polo(){
	console.log("page done");
	//load Google charting package
	google.load("visualization", "1", {packages:["corechart"], "callback": Pkgloaded});
}

/*document ready function */
$(document).ready(Polo)

console.log("js loaded");
 
