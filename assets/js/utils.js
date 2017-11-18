function getMeta(n){
	var xx=document.getElementsByTagName("meta");
	for(x=0;x<xx.length;x++){
		item=xx.item(x);
		if(item.name==n){
			return item.content;
		}
	}
}
