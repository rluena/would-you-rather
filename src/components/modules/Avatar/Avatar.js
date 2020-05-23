import React from "react";
import styled from "styled-components";

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  ${(props) => console.log("Props: ", props)}
  max-wdith: 123px;
  max-height: 123px;
  border-radius: ${(props) => (props.round ? "50%" : "0px")}50%;
  border: ${(props) => props.theme.border.avatar};
`;

const Avatar = ({ src, alt, ...props }) => {
  return (
    <ImageWrapper>
      <Image src={src} alt={alt} {...props} />
    </ImageWrapper>
  );
};

export default Avatar;
