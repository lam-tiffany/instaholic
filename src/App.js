import "./App.css";
import { UserContextProvider } from "./helpers/user";
import styled from "styled-components";
import { Navbar, CreatePost, Feed } from "./components";

const Wrapper = styled.div`
	background-color: var(--grey);
	height: 100%;
	min-height: 100vh;
`;

function App() {
	return (
		<UserContextProvider>
			<Wrapper>
				<Navbar />
				<CreatePost />
				<Feed />
			</Wrapper>
		</UserContextProvider>
	);
}

export default App;
