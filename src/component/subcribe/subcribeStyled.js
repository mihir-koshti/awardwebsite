import { styled } from "styled-components";

export const SubcribeStyled = styled.div`
.mainHover{ 
    position: relative;
    display: block;
}
.bannerImage{
    position: relative !important;
    width: -webkit-fill-available;
    height: 523px !important;
    max-height: 523px;
    border-radius: 25px;
    box-shadow: 9px 11px 74px -32px black;
}
.mainheading {
    font-size: 45px;
}
.displayContainer{
    color: ${({theme}) => theme.colors.white};
    position: absolute;
    display: grid;
    align-self: start;
    
    justify-content: flex-start;
    width: -webkit-fill-available;
    padding: 50px;
}
.submitButton{
    padding: 12px 12px;
}

@media (max-width: ${({theme}) => theme.size.mobileL}) {
    display: none;
}
`;