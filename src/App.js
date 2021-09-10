import "./App.css";
import { UserContextProvider } from "./helpers/user";
import styled from "styled-components";
import { Navbar, CreatePost, Feed } from "./components";

const Wrapper = styled.div`
	background-color: var(--grey);
	height: 100%;
	min-height: 100vh;
`;

const Footer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2rem 0;
`;

function App() {
	return (
		<UserContextProvider>
			<Wrapper>
				<Navbar />
				<CreatePost />
				<Feed />
				<Footer>
					<iframe
						src="https://ghbtns.com/github-btn.html?user=lam-tiffany&type=follow&count=true&size=large"
						frameborder="0"
						scrolling="0"
						width="230"
						height="30"
						title="GitHub"
					></iframe>
				</Footer>
			</Wrapper>
		</UserContextProvider>
	);
}

export default App;
