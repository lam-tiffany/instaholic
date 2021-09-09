import React, { useContext } from "react";
import { SignInBtn } from "../components";
import styled from "styled-components";
import { UserContext } from "../contexts/user";

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  border-bottom: 1px solid lightgrey;
	h1 {
		font-size: 1rem;
		font-weight: 400;
	}
	img {
		border-radius: 50%;
		height: 2.5rem;
	}
`;

const Navbar = () => {
	const [user] = useContext(UserContext).user;
	return (
		<NavWrapper>
			<h1>Instaholic</h1>
			{user ? <img src={user.photoURL} alt={user.displayName} /> : <SignInBtn />}
		</NavWrapper>
	);
};

export default Navbar;
