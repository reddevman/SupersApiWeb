import { useState, useEffect } from 'react';
import { getInfo } from './helpers/getInfo';
import './App.css';

const name = 'brainiac';

export const SuperHeroApp = () => {
	const [character, setCharacter] = useState([]);

	const heroes = async () => {
		/**
		 * El 2º parámetro, callback, espera a la información y entonces introduce los datos en el
		 * estado mediante useState
		 */
		getInfo(name, setCharacter);
	};
	useEffect(() => {
		heroes();
	}, []);

	// console.log(character);
	return (
		<ul className='gridHeroes'>
			{character.map((el) => (
				<li key={el.id}>
					<p>
						<span>Nombre:</span> {el.name}
					</p>
					<p>
						<span>Nombre completo:</span>
						{el.fullName}
					</p>
					<p>
						<span>Nacimiento:</span>
						{el.birth}
					</p>
					<p>
						<span>Altura:</span>
						{el.height}
					</p>
					<p>
						<span>Peso:</span>
						{el.weight}
					</p>
					<img src={el.img} alt={el.name} title={el.name} />
				</li>
			))}
		</ul>
	);
};
