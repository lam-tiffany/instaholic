import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import Post from "./Post";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Feed = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		db.collection("posts")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						post: doc.data(),
					}))
				);
			});
	}, []);

	return (
		<Wrapper>
			{posts.map(({ id, post }) => {
				return (
					<Post
						key={id}
						id={id}
						username={post.username}
						profileImageURL={post.profileImageURL}
						imageURL={post.imageURL}
						caption={post.caption}
						comments={post.comments}
					/>
				);
			})}
		</Wrapper>
	);
};

export default Feed;
