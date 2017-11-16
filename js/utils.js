function init404(){
	document.getElementById("msg").innerText="The requested URL "+getCurrentUrl()+" was not found on this server.";
}
function getCurrentUrl(){
	return window.location.toString();
}
