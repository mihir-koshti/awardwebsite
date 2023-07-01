import { styled } from "styled-components";

export const ImageStyled = styled.div`
position: relative;
width: -webkit-fill-available !important;
height:  -webkit-fill-available !important;

@media (max-width: ${({ theme }) => theme.size.mobileL}) {
    
}
`