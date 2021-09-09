import { auth, provider } from "../firebase";

export const signInWithGoogle = async () => {
	let user;
	await auth
		.signInWithPopup(provider)
		.then((res) => {
			console.log(res.user);
			user = res.user;
		})
		.catch((e) => {
			console.error(e);
		});
	return user;
};

export const logout = async () => {
	let logoutSuccess;
	await auth
		.signOut()
		.then(() => {
			logoutSuccess = true;
		})
		.catch((e) => {
			console.error(e.message);
		});
	return logoutSuccess;
};
