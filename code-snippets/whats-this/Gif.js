import React from "react";
import styled from "@emotion/styled";
const Gif = ({ src }) => {
  return (
    <BlogImageContainer>
      <img
        src={src}
        alt="GIF Meme of Jack from Nightmare Before Christmas Saying What Does it Mean?"
      />
    </BlogImageContainer>
  );
};

export default Gif;

const BlogImageContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 550px) {
    width: 350px;
  }
`;
