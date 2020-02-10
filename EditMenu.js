function validateform(){
var name=document.EditMenu.menuname.value;
var price=document.EditMenu.price.value;
var active=document.EditMenu.act.value;
var DOL=document.EditMenu.DOL.value;
var delivery=document.EditMenu.delivery.value;




if(name==""){
alert("Name cannot be empty");
return false;
}

if(name.length<2 || name.length>65){
	alert("name length should be between 2 to 65");
	return false;
}

if(price==""){
alert("Price cannot be empty");
return false;
}



if(active==""){
alert("Select your choice for active field");
return false;
}

if(DOL==""){
alert("Date of Launch cannot be empty");
return false;
}

return true;
}