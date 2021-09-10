import React, { useContext, useState } from "react";
import { db, storage } from "../firebase";
import firebase from "firebase/compat/app";
import styled from "styled-components";
import { UserContext } from "../helpers/user";
import { makeId } from "../helpers/makeId";
import { SignInBtn } from "../components";
import CreatePad from "./CreatePad";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.2rem;
	.not_logged_in {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		p {
			margin-top: 0.5rem;
		}
		@media (min-width: 768px) {
			flex-direction: row;
			p {
				margin: 0 0 0 1rem;
			}
		}
	}
`;

const CreatePost = () => {
	const [user] = useContext(UserContext).user;
	const [caption, setCaption] = useState("");
	const [image, setImage] = useState(null);
	const [imageSrc, setImageSrc] = useState(null);
	const [progress, setProgress] = useState(0);

	const handleImageChange = (e) => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			const selectedImgSrc = URL.createObjectURL(e.target.files[0]);
			setImageSrc(selectedImgSrc);
		}
	};

	const handleUpload = () => {
		if (image) {
			let imageId = makeId(10);
			const uploadTask = storage.ref(`images/${imageId}.jpg`).put(image);
			uploadTask.on(
				"state_changed",
				(snapshot) => {
					const progress = Math.round(
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					);
					setProgress(progress);
				},
				(error) => {
					console.error(error);
				},
				() => {
					storage
						.ref("images")
						.child(`${imageId}.jpg`)
						.getDownloadURL()
						.then((imageURL) => {
							db.collection("posts").add({
								timestamp: firebase.firestore.FieldValue.serverTimestamp(),
								caption,
								imageURL,
								username: user.email.split("@")[0],
								profileImageURL: user.photoURL,
								comments: [],
							});
						});
					setCaption("");
					setProgress(0);
					setImageSrc("");
				}
			);
		}
	};

	return (
		<Wrapper>
			{user ? (
				<CreatePad
					caption={caption}
					setCaption={setCaption}
					imageSrc={imageSrc}
					progress={progress}
					handleImageChange={handleImageChange}
					handleUpload={handleUpload}
				/>
			) : (
				<div className="not_logged_in">
					<SignInBtn />
					<p>to Post & Comment</p>
				</div>
			)}
		</Wrapper>
	);
};

export default CreatePost;
