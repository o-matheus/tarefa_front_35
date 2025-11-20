import styled from "styled-components";
import { Background, colors, Container } from "../../styles/styles";

export const HeaderWrapper = styled.header`
    ${Background}
    display: flex;
    align-items: center;
    justify-content: center;

    ${Container} {
        img {
            margin-top: 40px;
            margin-bottom: 138.5px;
        }
    }

`

export const TitleHeader = styled.h2`
    color: ${colors.corTextoPrincipal};
    font-size: 36px;
    font-weight: 900;
    width: 540px;
    text-align: center;
    padding-bottom: 40px;
`