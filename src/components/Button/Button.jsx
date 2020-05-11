import styled, { css } from "styled-components";
import { defaultTheme } from "../../utils/template";

const Button = styled.button`
  outline: none;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
`;

Button.primary = styled(Button)`
  background-color: ${defaultTheme.color.background.button.primary.default};
  color: ${defaultTheme.color.text.button.primary.default};

  // Button variants
  ${(props) =>
    props.success &&
    css`
      background-color: ${defaultTheme.color.background.button.primary.success};
      color: ${defaultTheme.color.text.button.primary.success};
    `}

  ${(props) =>
    props.danger &&
    css`
      background-color: ${defaultTheme.color.background.button.primary.danger};
      color: ${defaultTheme.color.text.button.primary.danger};
    `}
  
  ${(props) =>
    props.warning &&
    css`
      background-color: ${defaultTheme.color.background.button.primary.warning};
      color: ${defaultTheme.color.text.button.primary.warning};
    `}

    // Size
    ${(props) =>
      props.small &&
      css`
        padding: ${defaultTheme.spacing.s};
      `}
  
    ${(props) =>
      props.large &&
      css`
        padding: ${defaultTheme.spacing.default} ${defaultTheme.spacing.large};
      `}
`;

export default Button;
