var global={
	init:function(module){
		document.title="TravorLZH - "+module.title;
	}
};
var p404={
	init:function(){
		document.getElementById("msg").innerText="The requested URL "+document.location.pathname+" was not found on this server.";
	}
};
var index={
	title:"Home",
	init:function(){
		console.info("Welcome");
	}
};
global.init();
