//funktio jossa haetaan käyttäjän syöte ja siirretään se li elementteihin
function uusiTehtävä() {
//määritetään muuttujat, ensiksi sille mitä käyttäjä kirjoittaa, toiseksi li elementtien luomiselle
	var tehtävä = $('#syöte').val();
	var listaItem = $("<li>" + tehtävä +"</li>");
	$("#lista").slideUp().fadeIn(100);
//tarkistetaan onko syötekenttä tyhjä kun käyttäjä painaa nappia, jos niin, tulee alert tyyppinen hälytys
  if (tehtävä == "" || tehtävä.length == 0 || tehtävä == null){
	alert('Kenttä ei voi olla tyhjä!');
	}
//jos syöte ei ole tyhjä niin luodaan jQueryn appendillä uusi listaItem
	else{
	$("ul").append(listaItem);
//seuraavaksi tyhjennetään käyttäjän syöttämä teksti tekstikentästä
	$('#syöte').val("");
//sitten jQueryn click kuuntelija joka poistaa klikatun listaItem:in
	$("li").click(poistaTehtävä);
	}
};
//funktio joka hoitaa listaItemien poistamisen
function poistaTehtävä(e) {
	e.target.parentElement.removeChild(e.target);
}
