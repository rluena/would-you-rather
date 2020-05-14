import { createGlobalStyle } from "styled-components";
import { primaryFont } from "./typography";

export const GlobalStyle = createGlobalStyle`
    body, html, div, blockquote, img, label, p, h1, h2, h3, h4, h5, h6, pre, ul, ol,
    li, dl, dt, dd, form, a, fieldset, input, th, td
    {
    margin: 0; padding: 0; border: 0; outline: none;
    }

    body
    {
    line-height: 1;
    font-family: ${primaryFont}
    }

    h1, h2, h3, h4, h5, h6
    {
    font-size: 100%;
    margin: 0px;
    }
    
    ul, ol
    {
    list-style: none;
    }
    
    a
    {
    color: black;
    text-decoration: none;
    }
 
`;
