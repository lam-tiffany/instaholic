import React from "react";
import styled from "styled-components";
import { Navbar, CreatePost } from "../containers";

const Wrapper = styled.div`
	background-color: #f3f2ef;
	height: 100vh;
`

const Home = () => {
	return (
		<Wrapper>
			<Navbar />
			<CreatePost />
		</Wrapper>
	);
};

export default Home;
