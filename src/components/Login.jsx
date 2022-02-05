import React, {useEffect} from 'react';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom';
import {auth, signInWithGoogle} from '../firebase';
import {ReactComponent as GoogleLogo} from '../assets/google.svg';

function Login() {
	const navigate = useNavigate();
	const [user, loading, error] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			navigate('/');
		}
	}, [user, loading]);

	return (
		<div className="login-container">
			<div className="login-card">
				<h1>Veuillez vous connecter pour accéder au site</h1>
				<button className="login-btn-google" onClick={signInWithGoogle}>
					<GoogleLogo />
					<span>Google</span>
				</button>
			</div>
		</div>
	);
}

export default Login;
