import React, { useContext } from "react";
import { db, storage } from "../firebase";
import { UserContext } from "../helpers/user";
import styled from "styled-components";
import CommentInput from "./CommentInput";

const Wrapper = styled.div`
	max-width: 600px;
	width: 90vw;
	background-color: white;
	padding: 1.2rem 1rem;
	border-radius: 4px;
	margin-bottom: 1rem;
	.highlight {
		font-weight: 500;
	}
`;

const Header = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	.user {
		display: flex;
		align-items: center;
	}
	.user img {
		border-radius: 50%;
		height: 2rem;
		margin-right: 0.5rem;
	}
	button {
		background: white;
		border: none;
		cursor: pointer;
	}
	button:focus {
		outline: none;
	}
`;

const MainImage = styled.img`
	width: 100%;
	margin: 0.8rem 0;
	object-fit: cover;
`;

const Post = ({
	username,
	id,
	profileImageURL,
	imageURL,
	caption,
	comments,
}) => {
	const [user] = useContext(UserContext).user;
	const user_username = user && user.email.split("@")[0];

	const deletePost = () => {
		let imageRef = storage.refFromURL(imageURL);
		imageRef
			.delete()
			.then(() => {
				console.log("image deleted from storage successfully");
			})
			.catch((e) => {
				console.error(e);
			});
		db.collection("posts")
			.doc(id)
			.delete()
			.then(() => {
				console.log("post deleted from db successfully");
			})
			.catch((e) => {
				console.error(e);
			});
	};

	return (
		<Wrapper>
			<Header>
				<div className="user">
					<img src={profileImageURL} alt={username} />
					<p>{username}</p>
				</div>
				{user_username === username && (
					<button onClick={deletePost}>Delete</button>
				)}
			</Header>
			<MainImage src={imageURL} alt={caption} />
			<p>
				<span className="highlight">{username}</span> {caption}
			</p>
			{comments &&
				comments.map((cm) => {
					return (
						<p>
							<span className="highlight">{cm.username}</span> {cm.comment}
						</p>
					);
				})}
			{user && <CommentInput id={id} comments={comments} />}
		</Wrapper>
	);
};

export default Post;
