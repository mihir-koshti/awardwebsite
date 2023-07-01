import { styled } from "styled-components";

export const MarketStyled = styled.div`


.ViewProduct {
    font-size: inherit !important;
}

.content{
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    font-size: 20px;
}

@media (max-width: ${({ theme }) => theme.size.laptop}) {
    .display-mobile {
        display: none;
    }
}

@media (max-width: ${({ theme }) => theme.size.mobileL}) {
    .content { 
        font-size: inherit !important;
    }
}
`;

export const MarketCardStyled = styled.div`
.MarketCard {
    width: auto;
    box-shadow: 9px 11px 74px -32px black;

}
.MarketTitle {
    font-size: 23px;
}
.CardImage{
    border-radius: 10px;

}
.linkView{
    color: grey;
    text-decoration: none !important;
    cursor: pointer;
    display: flex;
}
.arrow {
    display: flex;
    align-items: center;
    width: -webkit-fill-available;
    justify-content: flex-end;
}


`;