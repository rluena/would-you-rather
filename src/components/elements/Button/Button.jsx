import styled, { css } from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  padding: ${(props) => props.theme.size.button.default};
  cursor: pointer;
`;

Button.primary = styled(Button)`
  background-color: ${(props) =>
    props.theme.color.background.button.primary.default};
  color: ${(props) => props.theme.color.text.button.primary.default};

  // Button variants
  ${(props) =>
    props.success &&
    css`
      background-color: ${(props) =>
        props.theme.color.background.button.primary.success};
      color: ${(props) => props.theme.color.text.button.primary.success};
    `}

  ${(props) =>
    props.danger &&
    css`
      background-color: ${(props) =>
        props.theme.color.background.button.primary.danger};
      color: ${(props) => props.theme.color.text.button.primary.danger};
    `}
  
  ${(props) =>
    props.warning &&
    css`
      background-color: ${(props) =>
        props.theme.color.background.button.primary.warning};
      color: ${(props) => props.theme.color.text.button.primary.warning};
    `}

    // Size
    ${(props) =>
      props.small &&
      css`
        padding: ${(props) => props.theme.size.button.small};
      `}
  
    ${(props) =>
      props.large &&
      css`
        padding: ${(props) => props.theme.size.button.large};
      `}
`;

export default Button;
