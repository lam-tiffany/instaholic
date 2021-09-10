import React from "react";
import styled from "styled-components";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const Wrapper = styled.div`
	background-color: white;
	width: 100%;
	max-width: 650px;
	padding: 0.5rem 1rem;
	border-radius: 4px;
	textarea {
		border: none;
		width: 100%;
		margin-top: 0.5rem;
		font-size: 1rem;
	}
	textarea:focus {
		outline: none;
	}
	.image_upload input {
		display: none;
	}
	.image-preview {
		height: 80px;
		margin: 0.5rem 0;
		border-radius: 4px;
	}
	.btns {
		display: flex;
		justify-content: space-between;
	}
	.btns button {
		background-color: white;
		border: none;
		font-size: 1rem;
		cursor: pointer;
	}
`;

const AddAPhotoIconStyled = styled(AddAPhotoIcon)`
	cursor: pointer;
	font-size: 1.2rem;
`;

const CreatePad = ({
	caption,
	setCaption,
	imageSrc,
	progress,
	handleImageChange,
	handleUpload,
}) => {
	return (
		<Wrapper>
			<p>Create post</p>
			<div>
				<textarea
					rows="3"
					placeholder="Enter your caption..."
					value={caption.toString()}
					onChange={(e) => setCaption(e.target.value)}
				></textarea>
				{imageSrc && (
					<img
						src={imageSrc}
						className="image-preview"
						alt="Uploaded img preview"
					/>
				)}
			</div>
			<div className="btns">
				<div className="image_upload">
					<label htmlFor="fileInput">
						<AddAPhotoIconStyled />
					</label>
					<input
						id="fileInput"
						type="file"
						accept="image/*"
						onChange={handleImageChange}
					/>
				</div>
				<button
					className="upload_btn"
					onClick={handleUpload}
					disabled={!caption || !imageSrc}
				>
					{`Upload ${progress ? progress + "%" : "→"}`}
				</button>
			</div>
		</Wrapper>
	);
};

export default CreatePad;
