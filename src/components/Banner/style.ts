import styled from "styled-components";
import { colors, Container } from "../../styles/styles";
type PropsBannerWrapper = {
    img: string;  
}
export const BannerWrapper = styled.div<PropsBannerWrapper>`
    width: 100%;
    height: 280px;
    background-image: url(${p => p.img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    color: ${colors.corTextoBanner};
    font-size: 32px;

    ${Container} {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding-top: 24px;
        padding-bottom: 32px;

        h3 {
            font-size: 32px;
            font-weight: 900;
        }

        h4 {
            font-weight: 100;
        }
    }
`
