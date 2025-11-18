import { useParams } from "react-router-dom";

import { restaurantsMock } from "../../mocks/restaurantMocks";
import Banner from "../../components/Banner";
import CardDish from "../../components/CardDish";
import { DishesWrapper } from "./style";
import { Container } from "../../styles/styles";

const ListProducts = () => {
  const { id } = useParams<{ id: string }>();
  const nId = Number(id);

  const restaurant = restaurantsMock.find((r) => r.id === nId);

  if (!restaurant) {
    return <p>Restaurante não encontrado</p>;
  } else {
    return (
      <>
        <Banner
          img={restaurant.image}
          category={restaurant.category!}
          name={restaurant.name}
        />
        <Container>
          <DishesWrapper>
            {restaurant.pratos?.map((p) => (
              <CardDish
                key={p.id}
                image={p.image}
                name={p.name}
                description={p.description}
              />
            ))}
          </DishesWrapper>
        </Container>
      </>
    );
  }
};

export default ListProducts;
