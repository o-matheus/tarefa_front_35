import { CardWrapper } from "./styles";

type PropsCardDish = {
    image: string;
    name: string;
    description: string;
    onClick?: () => void;
}
const CardDish = ({image, name, description, onClick}: PropsCardDish) => {

    return (
        <CardWrapper>
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>{description}</p>
            <button onClick={onClick}>Adicionar ao carrinho</button>
        </CardWrapper>
    )
}

export default CardDish;