function f1()
{
  document.body.style.backgroundColor="#84787C";
}

function f2()
{
  var buton = document.getElementById("b1");
  //buton.onclick= f3; //nume de functie
  //buton.onclick=function(){ alert("am folosit o functie anonima");}
  buton.onclick=function(){ alert(buton.value);} //am folosesc campul buton
}

function f3()
{ 
alert("Hello! I am an alert box!!");
}

function f4()
{ 
	var div= document.getElementById("div2");
	for(i=0;i<5;i++)
	div.innerHTML+='<input type="button" value="b'+i+'" onclick="f5(event,this,'+i+')" id="b1">'
}

/*function f5(e,t,i)
{ 
alert("sunt butonul"+i);
}*/

function f5(e,ob,i)
{ 
	//alert(	e.target.value);
	//alert(ob.value);
	alert(i);
}

function f6()
{ 
	var div= document.getElementById("div3");
	for(i=0;i<5;i++)
	{buton = document.createElement("input")
	buton.type="button";
	//buton.value="buton"+i;
	//buton.setAttribute("value","buton"+i);
	buton.setAttribute("onclick","f5(event,this,"+i+")");
	div.appendChild(buton);
	}
	
}

function f7()
{ 
	 var buton= document.getElementById("b5");
	 var t1=document.getElementById("t1");
	 var t2=document.getElementById("t2");
	 //buton.value="alta val";
	 buton.setAttribute(t1.value,t2.value);
}

var nr=0;
var valset;
function f8()
{ 
	 var im= document.getElementById("img1");
	 im.src="im"+nr+".jpg";
	 nr++;
	 nr = nr % 3;
	 valset=setTimeout(function(){  f8();}, 1000);
	
}

function f9()
{ 
	 clearTimeout(valset);
}
