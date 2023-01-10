export const getInfo = async (name, callback) => {
	const apiKey = '10222219245044158';
	const url = `https://api.allorigins.win/get?url=${encodeURIComponent(
		`https://www.superheroapi.com/api/${apiKey}/search/${name}`
	)}`;
	const resp = await fetch(url);
	// const data = await resp.json();
	// const { results } = await JSON.parse(data.contents);
	// const superheroe = results.map((hero) => ({
	// 	name: hero.name,
	// 	img: hero.image.url,
	// }));
	// // console.log(superheroe); //Devuelve un array de objetos
	// return superheroe;

	if (resp.status == 200) {
		const data = await resp.json();
		const dataToObject = await JSON.parse(data.contents);
		if (dataToObject.response === 'success') {
			// Obtenemos un array de objetos con la información
			const { results } = dataToObject;
			// Crear un nuevo array con objetos cuyas propiedades seleccionamos nosotros
			const superhero = results.map((hero) => ({
				id: hero.id,
				name: hero.name,
				fullName: hero.biography["full-name"],
				birth: hero.biography["place-of-birth"],
				height: hero.appearance.height[1],
				weight: hero.appearance.weight[1],
				img: hero.image.url,
			}));
			// Devuelve un array de objetos en un callback para esperar a la información
			callback(superhero);
		} else {
			console.log('No existe este personaje');
		}
	} else {
		console.log('Error en la respuesta');
	}
};
