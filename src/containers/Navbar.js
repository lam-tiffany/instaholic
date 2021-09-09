import React from "react";
import { SignInBtn } from "../components";
import styled from "styled-components";

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
`;

const Navbar = () => {
	return (
		<NavWrapper>
			<h1>Instaholic</h1>
			<SignInBtn />
		</NavWrapper>
	);
};

export default Navbar;
