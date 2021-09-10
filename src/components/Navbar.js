import React, { useContext } from "react";
import { UserContext } from "../helpers/user";
import { logout } from "../helpers/auth";
import styled from "styled-components";
import SignInBtn from "./SignInBtn";

const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem;
	background-color: white;
	border-bottom: 1px solid lightgrey;
	h1 {
		font-size: 1rem;
		font-weight: 500;
	}
	img {
		border-radius: 50%;
		height: 2.5rem;
	}
`;

const LoggedIn = styled.div`
	display: flex;
	align-items: center;
	button {
		background-color: white;
		border: none;
		margin-left: 1rem;
		font-size: 1rem;
		cursor: pointer;
		color: var(--primary-color);
	}
`;

const Navbar = () => {
	const [user] = useContext(UserContext).user;
	return (
		<NavWrapper>
			<h1>Instaholic</h1>
			{user ? (
				<LoggedIn>
					<img src={user.photoURL} alt={user.displayName} />
					<button onClick={logout}>Sign out</button>
				</LoggedIn>
			) : (
				<SignInBtn />
			)}
		</NavWrapper>
	);
};

export default Navbar;
