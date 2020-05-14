import React from "react";
import styled from "styled-components";
import { Devider } from "../../elements";
import { ScoreBox } from "../Box";
import Avatar from "../Avatar";
// import Rating from "../Rating";

const Card = styled.div`
  min-height: 250px;
  width: 550px;
  background: ${(props) => props.theme.color.background.card.wrapper};
  box-shadow: ${(props) => props.theme.shadow.card.wrapper};
`;

Card.header = styled.div`
  background-color: ${(props) => props.theme.color.background.card.header};
  padding: ${(props) => props.theme.size.card.padding.header};
`;

Card.heading = styled.h2`
  color: ${(props) => props.theme.color.text.card.heading};
  font-size: ${(props) => props.theme.font.scale.h3};
`;

Card.headingDark = styled(Card.heading)`
  color: ${(props) => props.theme.color.text.card.headingDark};
`;

Card.main = styled.div``;

Card.leftContent = styled.div`
  display: inline-block;
  padding: ${(props) => props.theme.size.card.padding.leftContent};
  overflow: hidden;
  position: relative;
`;

Card.rightContent = styled.div`
  display: inline-block;
  float: right;
  width: 65%;
  height: 204px;
  background-color: ${(props) =>
    props.theme.color.background.card.rightContent};
`;

Card.footer = styled.div`
  background-color: ${(props) => props.theme.color};
`;

Card.questionsBox = styled.div`
  padding: ${(props) => props.theme.size.card.padding.questionsBox};
  margin-top: 50px;
  display: inline-block;
`;

Card.question = styled.h3`
  color: ${(props) => props.theme.color.text.card.question};
  font-size ${(props) => props.theme.font.scale.h3}
  `;

Card.question.number = styled.span`
  color: ${(props) => props.theme.color.text.question} font-size
    ${(props) => props.theme.font.scale.h3};
  float: right;
  margin-left: 24px;
`;

Card.scoreBoxContainer = styled.div`
  padding: 56px 8px;
  display: inline-block;
  float: right;
`;

export const CardScore = ({ heading, imgSrc, ratingValue }) => {
  return (
    <Card>
      <Card.header>
        <Card.heading>{heading} asks:</Card.heading>
      </Card.header>
      <Card.main>
        <Card.leftContent>
          <Avatar src={imgSrc} round />
        </Card.leftContent>
        <Card.rightContent>
          <Card.questionsBox>
            <Card.question>
              Created questions <Card.question.number>5</Card.question.number>
            </Card.question>
            <Devider orientetion="horizontal" />
            <Card.question>
              Created answers <Card.question.number>5</Card.question.number>
            </Card.question>
          </Card.questionsBox>
          <Card.scoreBoxContainer>
            <ScoreBox value="5" text="Sometext" />
          </Card.scoreBoxContainer>
          {/* <Rating value={ratingValue} /> */}
        </Card.rightContent>
      </Card.main>
    </Card>
  );
};

export default Card;
