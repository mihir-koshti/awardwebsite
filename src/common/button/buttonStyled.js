const { styled } = require("styled-components");

export const ButtonStyled = styled.div`
.defaultButton {
    padding : 24px;
    text-align: center;
    font-size: 23px;
  }

  @media (max-width:${({ theme }) => theme.size.laptop}) {
    .defaultButton {
        padding : 14px;
        text-align: center;
        font-size: 14px;
      }
}

@media (max-width:${({ theme }) => theme.size.tablet}) {
    .defaultButton {
        padding : 14px;
        text-align: center;
        font-size: 11px;
      }
}

@media (max-width:${({ theme }) => theme.size.mobileL}) {
    .defaultButton {
        padding : 7px;
        text-align: center;
        font-size: 10px;
      }
}

@media (max-width:${({ theme }) => theme.size.mobileM}) {
    
}

@media (max-width: ${({ theme }) => theme.size.mobileS}) {
    
}

`;