import styled from "styled-components";
import { colors } from "../../styles/styles";

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    font-size: 14px;
    padding: 8px;
    background-color: ${colors.corFundoCardPrato};
    color: ${colors.corTextoCardPrato};
    
    img {
        height: 167px;
    }
    h4 {
        margin-top: 8px;
        margin-bottom: 8px;
        font-size: 16px;
        font-weight: 900;
    }


    button {
        margin-top: 8px;
        color: ${colors.CorTextoBotaoPrato};
        background-color: ${colors.CorFundoBotaoPrato};
        font-weight: bold;
        border: none;
    }
`