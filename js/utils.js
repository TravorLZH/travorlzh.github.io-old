function init404(){
	document.getElementById("msg").innerText="The requested URL "+getCurrentPath()+" was not found on this server.";
}
function getCurrentPath(){
	return window.location.href;
}
