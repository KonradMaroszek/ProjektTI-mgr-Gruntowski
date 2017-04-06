/**
 * 
 */
kwadratowe = function(a,b,c)
{
	this.A = a;
	this.B = b;
	this.C = c;
	this.delta = null;
	this.x1 = null;
	this.x2 = null;
};

kwadratowe.prototype.liczDelta = function()
{
	this.delta = (this.B * this.B) - 4*(this.A * this.C);
	return this.delta;
};

kwadratowe.prototype.getX1 = function()
{
	return this.x1;
};

kwadratowe.prototype.getX2 = function()
{
	return this.x2;
};

kwadratowe.prototype.getDelta = function()
{
	return this.delta;
};

kwadratowe.prototype.miejscaZerowe = function()
{
	var d = this.liczDelta();
	if(d>0)
	{
		this.x1 = ((this.B*-1) - Math.sqrt(d))/(2*this.A);
		this.x2 = ((this.B*-1) + Math.sqrt(d))/(2*this.A);
	}
	else if(d==0)
	{
		this.x1 = ((this.B*-1) - Math.sqrt(d))/(2*this.A);
		this.x2 = ((this.B*-1) + Math.sqrt(d))/(2*this.A);
	}
	else
	{
		this.x1 = ((this.B*-1) - Math.sqrt(d))/(2*this.A);
		this.x2 = ((this.B*-1) + Math.sqrt(d))/(2*this.A);
	}
};

kwadratowe.prototype.waliduj = function()
{
	if(this.A == 'NaN' || this.A==null || !this.A) return false;
	if(this.B == 'NaN' || this.B==null || !this.B) return false;
	if(this.C == 'NaN' || this.C==null || !this.C) return false;
	if(this.A == 0) return false;
	return true;
};

kwadratowe.prototype.licz = function()
{
	if(this.waliduj())
	{
		this.miejscaZerowe();
	}
	else
	{
	alert("Nie podano danych");
	}
};

function podpiecie() {
	var element = document.getElementById('licz');
	
	element.addEventListener('click', function(event)
	{
		
		var lista = document.getElementById('lista');
		var a = document.getElementById('wsp_a').value;
		var b = document.forms['dane'].elements['wb'].value;
		var c = document.getElementById('wsp_c').value;
		
		var rownanie = new kwadratowe(a,b,c);
		
		
		if (lista.hasChildNodes())
			while (lista.firstChild) lista.removeChild(lista.firstChild);
		var wynik = document.createTextNode('Wynik: ' + rownanie.licz());
		var x1 = rownanie.getX1();
		var x2 = rownanie.getX2();
		
		var ul = document.createElement('ul');
		var li = document.createElement('li');
		var liText = document.createTextNode(x1);
		li.appendChild(liText);
		ul.appendChild(li);
		lista.appendChild(wynik);
		lista.appendChild(ul);
		
		var liText2 = document.createTextNode(x2);
		var li2 = document.createElement('li');
		li2.appendChild(liText2);
		ul.appendChild(li2);
		
		
	});
	
}