import React from "react";
import styled from "styled-components";

const StyledDevider = styled.hr`
  border: 1px solid ${(props) => props.theme.color.background.hr};
`;

const HorizontalDevider = styled(StyledDevider)``;

const VerticalDevider = styled(StyledDevider)``;

const Separator = ({ orientation }) => {
  if (orientation === "horizontal") {
    return <HorizontalDevider />;
  }

  return <VerticalDevider />;
};

export default Separator;
