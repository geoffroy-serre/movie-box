import {faSave} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';

function Card({data}) {
	return (
		<div className="card">
			<FontAwesomeIcon icon={faSave} />
			<div className="card__image">
				{data.poster_path && (
					<img
						onClick={() => {
							addToLocalStorage(data);
						}}
						alt={data.title}
						src={`http://image.tmdb.org/t/p/w500/${data.poster_path}`}
					/>
				)}
			</div>
			<h2 className="card__title">{data.title}</h2>
		</div>
	);
}

function addToLocalStorage(media) {
	const localDatas = localStorage.getItem('bookmarks');
	const data = JSON.parse(localDatas);
	let isPresent = false;
	data.movies.forEach((movie) => {
		if (movie.id === media.id) {
			isPresent = true;
		}
	});

	if (!isPresent) {
		data.movies.push(media);
		console.log(data);
		localStorage.setItem('bookmarks', JSON.stringify(data));
	}
}

export default Card;
