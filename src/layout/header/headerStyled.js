import { styled } from "styled-components";

export const HeaderStyled = styled.div` 
.Navbar{
    background-color: ${({theme}) => theme.colors.bgColor} !important;
}
.buttonSize{
    min-width: 100px;
    padding: 10px !important;
    font-size: 18px !important;
}

.submitButton {
    min-width: 180px !important;
}

.navLink {
    white-space: nowrap;
    min-width: 100px;
    justify-content: center;
    display: flex;
    align-items: center;
}
.dropdown-menu {
    top: -3px;
    background-color: ${({theme}) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
}
.dropdown-item{
    color: ${({ theme }) => theme.colors.white} !important;
}
.Instudropdown {
    display: inline-flex;
    align-items: center;
}
.searchBox {
    border: 0px solid gray;
    background-color: darkgray;
    width: -webkit-fill-available;
    border-radius:12px;
}
.searchInput{
    border: none;
    background-color: darkgray;

}

@media (max-width: ${({theme }) => theme.size.laptop}) {
    .submitButton {
        min-width: 150px !important;
    }
}

@media (max-width: ${({theme }) => theme.size.tablet}) {
    .display-mobile {
        display: none;
    }
}
`
