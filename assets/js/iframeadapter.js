var iframes=null;
function initFrames(){
	iframes=document.getElementsByClassName("code");
	console.log(iframes);
	var len=iframes.length;
	for(var a=0;a<len;a++){
		iframes[a].addEventListener("onload",function(ev){
			x=ev.target;
			console.log(ev.target);
			var h=getHeight(x.contentWindow.document);
			x.height=h;
			x.width="50%";
		});
	}
}
var x=null;
var xx=null;
var xdoc=null;
function getHeight(doc){
	xdoc=doc;
	var html=doc.getElementsByTagName("div")[0];
	xx=html;
	console.log("Hello world!");
	console.log(html);
	return html.scrollHeight;
}