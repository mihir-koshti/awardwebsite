import { styled } from "styled-components";

export const AcademyStyled = styled.div`
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
`;