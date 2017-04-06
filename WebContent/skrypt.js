/**
 * 
 */
var dzisiaj = new Date();
function testowa(){
	alert(powitanie());
}

function powitanie(){
	var godzina = dzisiaj.getHours();
	var dzien = dzisiaj.getDate();
	var miesiac = dzisiaj.getMonth();
	var rok = dzisiaj.getFullYear();
	return 'dzisiaj jest ' + dzien + ' ' + miesiac + ' ' + rok;
	}


function uzupelnij()
{
	var tresc2 = document.getElementById('urodziny');
	tresc2.innerHTML = urodzinki();
}

function urodzinki(){
	var today = new Date();
	var moje_urodziny = new Date(1603, 1, 23);
	var za_ile = today.getFullYear() - moje_urodziny.getFullYear();
	if(za_ile > 0)
	{
		return "Twórca wzorów vieta - François Viète zmarł  " + za_ile + " lat temu";
	}
}

function zegarek()
{
	var date = new Date();
	stopka = document.getElementById('stopka');
	var tresc_stopki = stopka.innerHTML.split(" | ")[0];
	stopka.innerHTML = tresc_stopki + ' | ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	
}