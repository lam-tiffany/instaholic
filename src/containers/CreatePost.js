import React, { useContext, useState } from "react";
import styled from "styled-components";
import { SignInBtn } from "../components";
import { UserContext } from "../contexts/user";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.2rem;
	.not_logged_in span {
		margin-left: 1rem;
	}

`;

const CreatePad = styled.div`
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
  #image-preview {
    display: none;
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
  }
`;

const AddAPhotoIconStyled = styled(AddAPhotoIcon)`
	cursor: pointer;
	font-size: 1.2rem;
`;

const CreatePost = () => {
	const [user] = useContext(UserContext).user;
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      const selectedImgSrc = URL.createObjectURL(e.target.files[0]);
      let imagePreview = document.getElementById("image-preview");
      imagePreview.src = selectedImgSrc;
      imagePreview.style.display = "block";
    }
  };

	const handleUpload = () => {};

	return (
		<Wrapper>
			{user ? (
				<CreatePad>
					<p>Create post</p>
					<div>
						<textarea
							rows="3"
							placeholder="Enter your caption..."
							value={caption}
							onChange={(e) => setCaption(e.target.value)}
            ></textarea>
            <div className="image_preview">
              <img id="image-preview" alt="Uploaded img preview" />
            </div>
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
								onChange={handleChange}
							/>
						</div>
						<button
							className="upload_btn"
							onClick={handleUpload}
							disabled={!caption.length}
						>
							Upload →
						</button>
					</div>
				</CreatePad>
			) : (
				<div className="not_logged_in">
					<SignInBtn />
					<span>to Post & Comment</span>
				</div>
			)}
		</Wrapper>
	);
};

export default CreatePost;
