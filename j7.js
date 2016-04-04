function func(eveniment)
{
	var buton=document.getElementById("b1");
	buton.style.left=eveniment.pageX-2+"px";
	buton.style.top=eveniment.pageY-2+"px";
}

function func2(eveniment)
{
	var buton=document.getElementById("b2");
	buton.value=eveniment.which;
}

function f3(){
	var p=document.getElementById("para1");
	alert(p.innerHTML);
	p.innerHTML+='<img src="1.jpg" width=100px>'
}
function f4(){
	var p=document.getElementById("para2");
	var im=document.createElement("img");
	im.src="1.jpg";
	im.width=100;
	p.appendChild(im);
	var txt=document.createTextNode("continut text");
	p.appendChild(txt);
	var cutietext=document.createElement("input");
	cutietext.type="text";
	p.appendChild(cutietext);
}