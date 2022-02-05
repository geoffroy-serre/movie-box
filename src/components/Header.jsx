import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {auth, logout} from '../firebase';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from '@fortawesome/free-solid-svg-icons';

function Header() {
	const [user, loading, error] = useAuthState(auth);
	const [menu, setMenu] = useState(false);

	return (
		<React.Fragment>
			{user && (
				<header className="header">
					<nav className="header__nav">
						<div className="links">
							<ul>
								<li>
									<Link to="/">Accueil</Link>
								</li>
								<li>
									<Link to="/bookmarks">Favoris</Link>
								</li>
							</ul>
						</div>
						<div className="menu">
							<button
								onClick={() => (menu ? setMenu(false) : setMenu(true))}
								// onBlur={() => setMenu(false)}
							>
								<img src={user.photoURL} alt="user avatar" className="avatar" />
							</button>
							{menu && (
								<div className="menu-dropdown">
									<h4>{user.displayName}</h4>
									<ul>
										<li>Mes films</li>
										<li>Mes séries</li>
										<li>A voir</li>
									</ul>
									<div>
										<FontAwesomeIcon
											icon={faPowerOff}
											onClick={() => {
												logout();
												setMenu(false);
											}}
										/>
									</div>
								</div>
							)}
						</div>
					</nav>
				</header>
			)}
		</React.Fragment>
	);
}

export default Header;
