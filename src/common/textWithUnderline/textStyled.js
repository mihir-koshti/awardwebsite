import { styled } from "styled-components";

export const TextStyled = styled.div`
  .link-underlined {
    font-size: 23px;
    padding:12px;
    position: relative;
    display: inline-block;
    line-height: 100%;
    color: black;
    border: 1px;
    cursor: pointer;
  }
  .link-underlined:before {
    content: "";
    position: absolute;
    bottom: -0.2em;
    left: 0;
    width: 0%;
    height: 3px;
    background-repeat: no-repeat;
    background-image: linear-gradient(white,grey , black);
    background-size: 220% 100%;
    background-position: 100% 50%;
    transition: .3s ease-out;
}
.link-underlined:hover:before {
    background-position: 0% 50%;
    width: 100%;
}
`;