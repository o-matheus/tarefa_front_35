import { Link } from "react-router-dom";

import { CardWrapper, ImageRestaurant, InfoContainer, RatingContainer, TextContainer, TitleContainer } from "./style";
import Tag from "../Tag";
import star from "../../assets/img/star.png"

type CardProps = {
  id: number;
  image: string;
  name: string;
  rating: string;
  info: string[];
  description: string;
  
};
const CardRestaurant = ({
  id,
  image,
  name,
  rating,
  info,
  description,
}: CardProps) => {
  return (
    <CardWrapper key={id}>
      <ImageRestaurant src={image} alt="" />
      <InfoContainer>
        {info.map((i) => (
          <Tag>{i}</Tag>
        ))}
      </InfoContainer>
      <TextContainer>
        <TitleContainer>
          <h4>{name}</h4>
          <RatingContainer>
            <p>{rating}</p>
            <img src={star} alt="Estrela preenchida com a cor amarela." />
          </RatingContainer>
        </TitleContainer>
        <p>{description}</p>
        <Link to={`/restaurant/${id}`}>Saiba mais</Link>
      </TextContainer>
    </CardWrapper>
  );
};

export default CardRestaurant;
