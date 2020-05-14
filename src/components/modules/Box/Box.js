import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Box = styled.div`
  max-width: 100px;
  text-align: center;
`;

Box.circle = styled.div`
  font-size: 23px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.theme.color.text.card.scoreBox};
  background-color: ${(props) => props.theme.color.background.card.scoreBox};
  width: 63px;
  height: 63px;
  border-radius: 50%;
  margin: 0px auto;
  margin-bottom: ${(props) => props.theme.spacing.s};
`;

Box.circle.text = styled.span`
  padding-top: 21px;
  display: block;
`;

Box.text = styled.p`
  font-size: ${(props) => props.theme.font.scale.paragraph};
  font-weight: bold;
  color: ${(props) => props.theme.color.text.box.text};
`;

export const ScoreBox = ({ value, text }) => {
  return (
    <Box>
      <Box.circle>
        <Box.circle.text>{value}</Box.circle.text>
      </Box.circle>
      {text && text.length > 0 && <Box.text>{text}</Box.text>}
    </Box>
  );
};

ScoreBox.defaultProps = {
  text: undefined,
};

ScoreBox.propType = {
  value: PropTypes.number.isRequred,
  text: PropTypes.string,
};
