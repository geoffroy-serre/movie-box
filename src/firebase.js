import {initializeApp} from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import {
	getFirestore,
	query,
	getDocs,
	collection,
	where,
	addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCbnlpwjjubmWEBmGZhOBq5-qr9ACO4En4',
	authDomain: 'moviebox-7ff5b.firebaseapp.com',
	projectId: 'moviebox-7ff5b',
	storageBucket: 'moviebox-7ff5b.appspot.com',
	messagingSenderId: '90724916045',
	appId: '1:90724916045:web:0a6282a8d5758bee483504',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
	try {
		const res = await signInWithPopup(auth, googleProvider);
		const user = res.user;
		const q = query(collection(db, 'users'), where('uid', '==', user.uid));
		const docs = await getDocs(q);
		if (docs.docs.length === 0) {
			await addDoc(collection(db, 'users'), {
				uid: user.uid,
				name: user.displayName,
				authProvider: 'google',
				email: user.email,
			});
		}
	} catch (err) {
		console.error(err);
		alert(err.message);
	}
};

const logout = () => {
	signOut(auth);
};

export {auth, db, signInWithGoogle, logout};
