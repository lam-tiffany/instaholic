import React, { useState, useContext } from "react";
import { UserContext } from "../helpers/user";
import { db } from "../firebase";
import styled from "styled-components";

const Wrapper = styled.form`
	display: flex;
	justify-content: space-between;
	input {
		margin: 0.5rem 0;
		border: none;
		width: 100%;
		resize: none;
		font-size: 1rem;
	}
	input:focus {
		outline: none;
	}
	button {
		background-color: white;
		border: none;
		font-size: 1rem;
		cursor: pointer;
	}
`;

const CommentInput = ({ id, comments }) => {
	const [user] = useContext(UserContext).user;
	const [comment, setComment] = useState("");
	const [commentArr, setCommentArr] = useState(comments);

	const addComment = (e) => {
		e.preventDefault();
		if (comment.length && user) {
			commentArr.push({
				comment,
				username: user.email.split("@")[0],
			});
			db.collection("posts")
				.doc(id)
				.update({
					comments: commentArr,
				})
				.then(() => {
					setComment("");
				})
				.catch((e) => {
					console.error(e);
				});
		}
	};

	return (
		<Wrapper>
			<input
				type="text"
				placeholder="Write a comment..."
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
			<button type="submit" onClick={addComment}>
				Post
			</button>
		</Wrapper>
	);
};

export default CommentInput;
