import React from "react";
import styled from "styled-components";
import { SignInBtn } from "../components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  p {
    margin-left: 1rem;
  }
`

const CreatePost = () => {
	return (
    <Wrapper>
      <SignInBtn />
      <p>to Post & Comment</p>
    </Wrapper>
	);
};

export default CreatePost;
