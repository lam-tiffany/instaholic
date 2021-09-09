import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../contexts/user";
import { signInWithGoogle } from "../services/auth";

const Button = styled.button`
	background-color: #de5246;
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
      console.log(user)
    }
	};
	return <Button onClick={signInBtnClick}>Sign In with Google</Button>;
};

export default SignInBtn;
