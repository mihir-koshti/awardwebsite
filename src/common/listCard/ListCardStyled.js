import { styled } from "styled-components";

export const ListCardStyled = styled.div`
.Card {
    padding : 3px 20px !important;
    border: none !important;
    border-top : 2px #e9e9e9 solid !important; 
    border-radius: 0px !important;
}

.midCol {
    align-items: center;
    display: grid;
}

@media (max-width: ${({theme}) => theme.size.mobileS}) {
    .card-body{
        padding-right: 0px;
        padding-left: 0px;
    }
    .col1{
        
        padding-right: 0px;
        padding-left: 0px;
    }
    
}

.ListTitle{
    font-size: 16px;
    justify-content: space-between;
    display: flex;
}

.Listdes{
    font-size: 20px;
}

@media (max-width: ${({theme}) => theme.size.laptop}) {
    .ListTitle {
        font-size: 12px;
        white-space: nowrap;
    }
    .Listdes{
        font-size: 16px !important;
    }
}
`