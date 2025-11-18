import { Container } from "../../styles/styles";
import { BannerWrapper } from "./style";

type PropsBanner = {
    category: string;
    name: string;
    img: string;
}

const Banner = ({category, name, img}: PropsBanner) => {

    return (
        <BannerWrapper img={img}>
            <Container>
                <h4>{category}</h4>
                <h3>{name}</h3>
            </Container>
        </BannerWrapper>
    )
}

export default Banner;