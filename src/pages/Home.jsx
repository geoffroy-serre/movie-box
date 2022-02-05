import axios from 'axios';
import React, {useEffect, useState} from 'react';
import CardList from '../components/CardList';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, db, logout} from '../firebase';
import {useNavigate} from 'react-router-dom';

function Home() {
	const navigate = useNavigate();
	const API_KEY = process.env.REACT_APP_API_KEY;
	const [user, loading, error] = useAuthState(auth);
	const [search, setSearch] = useState('*');
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	useEffect(() => {
		if (loading) return;
		if (!user) {
			navigate('/login');
		} else {
			axios
				.get(
					`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=fr-FR&page=${page}&query=${search}&include_adult=false`
				)
				.then((data) => {
					setTotalResults(data.data.total_results);
					setData(data.data.results);
				})
				.catch((err) => console.log('ooops', err));
		}
	}, [search, page, user, loading]);

	return (
		<React.Fragment>
			<section id="search">
				<h1>Movie Box</h1>
				<div id="search__box">
					<input
						type="text"
						placeholder="Entrez votre recherche"
						aria-label="Recherchez un film"
						onChange={(val) => {
							val.target.value ? setSearch(val.target.value) : setSearch('*');
						}}
					/>
				</div>
			</section>
			<section id="results">
				<CardList data={data} total={totalResults} />
			</section>
		</React.Fragment>
	);
}

export default Home;
