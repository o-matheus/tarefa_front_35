import CardRestaurant from "../../components/CardRestaurant";
import { restaurantsMock } from "../../mocks/restaurantMocks";
import { Container } from "../../styles/styles";
import { RestaurantWrapper } from "./styles";
const ListRestaurants = () => {
  return (
    <Container>
      <RestaurantWrapper>
        {restaurantsMock.map((r) => (
          <CardRestaurant
            id={r.id}
            image={r.image}
            info={r.info}
            name={r.name}
            rating={r.rating}
            description={r.description}
          />
        ))}
      </RestaurantWrapper>
    </Container>
  );
};

export default ListRestaurants;
