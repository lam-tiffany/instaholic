import React, { useContext } from "react";
import { UserContext } from "../helpers/user";
import { signInWithGoogle } from "../helpers/auth";
import styled from "styled-components";

const Button = styled.button`
	background-color: var(--primary-color);
	text-align: center;
	padding: 0.5rem 1rem;
	color: white;
	border-radius: 4px;
	border: none;
	font-weight: 500;
	cursor: pointer;
`;

const SignInBtn = () => {
	const [user, setUser] = useContext(UserContext).user;

	const signInBtnClick = async () => {
		let user = await signInWithGoogle();
		if (user) {
			setUser(user);
		}
	};
	return <Button onClick={signInBtnClick}>Sign In with Google</Button>;
};

export default SignInBtn;
