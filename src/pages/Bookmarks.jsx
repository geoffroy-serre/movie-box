import React, {useEffect} from 'react';
import {useState} from 'react';
import CardList from '../components/CardList';

function Bookmarks() {
	const [bookmarks, setBookmarks] = useState([]);
	const retrieveStorage = JSON.parse(localStorage.getItem('bookmarks'));

	useEffect(() => {
		setBookmarks(retrieveStorage.movies);
	}, []);

	console.log(bookmarks);

	return (
		<React.Fragment>
			<section>
				<h1>Favoris</h1>
				{bookmarks.length > 0 && (
					<CardList data={bookmarks} total={bookmarks.length} />
				)}
			</section>
		</React.Fragment>
	);
}

export default Bookmarks;
