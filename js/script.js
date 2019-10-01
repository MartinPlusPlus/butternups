// Make Butters

$.getJSON( "json/butters.json", function( json ) {
	console.log( json )
	for (let i = 0; i < json.length; i++) {
		$("#butters").append(`
			<img src=${json[i].imgSrc} width="350" height="350"/>
			<h5>${json[i].name}</h5>
			<p>${json[i].price}</p>
		`)
	}
})
