import { styled } from "styled-components";

export const BannerStyled = styled.div`
background-color: #e9e9e9 !important;

.bannerImage{
    position: relative !important;
    width: -webkit-fill-available;
    height: auto;
    border-radius: 25px;
    box-shadow: 9px 11px 74px -32px black;
}
.imageCol{
    align-content: center;
    display: grid;   
    border-radius: 5px;
    overflow: hidden;
}
.NameContent{
    padding-bottom: 50px;
    padding-top: 20px; 
}

.bannerTitle{
    justify-content: center;
    display: flex;
    font-size: 145px;
    font-weight: 700;
}
.marquee{
    font-size: 40px;
}
.mainHover{ 
    display: block;
}
.displayContainer{
    position: absolute;
    display: grid;
    align-self: center;
}
.button {
    padding : 24px;
    text-align: center;
    opacity: 0;
    transition: opacity .35s ease;
    font-size: 23px;
  }
.button:hover {
    color: white;
    background-color: transparent;
}
.mainHover:hover .button {
    opacity: 1;
  }
@media (max-width:${({ theme }) => theme.size.laptop}) {
    
    .bannerTitle{
        font-size: 100px;
        font-weight: bold;
    }
    .marquee{
        font-size: 27px;
    }  
    

}

@media (max-width:${({ theme }) => theme.size.tablet}) {
    .bannerTitle{
        font-size: 78px;
        font-weight: bold;
    }   
    .imageCol{
        margin: 12px;
    }
      
    .display-desktop {
        display:none;
    } 
    .marquee{
        font-size: 21px;
    }
}

@media (max-width:${({ theme }) => theme.size.mobileL}) {
    .bannerTitle{
        font-size: 47px;
        font-weight: bold;
    } 
    .marquee{
        font-size: 13px;
    }
    .mainHover {
        margin: 0px !important;
    }
}

@media (max-width:${({ theme }) => theme.size.mobileM}) {
    .bannerTitle{
        font-size: 40px;
        font-weight: bold;
    }   
    .marquee{
        font-size: 11px;
    }
}

@media (max-width: ${({ theme }) => theme.size.mobileS}) {
    .bannerTitle{
        font-size: 34px;
        font-weight: bold;
    }   
    .marquee{
        font-size: 10px;
    }
}

`; 