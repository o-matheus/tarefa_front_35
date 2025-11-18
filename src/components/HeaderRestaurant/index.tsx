import { Center, HeaderWrapper, Left, Right } from "./style";
import logo from "../../assets/img/logo.png";
import { Container } from "../../styles/styles";
import { Link } from "react-router-dom";

const HeaderRestaurant = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Left>
          <Link to={"/"}>Restaurantes</Link>
        </Left>
        <Center>
          <img src={logo} alt="Logo Efood" />
        </Center>
        <Right>
          <p>0 produto(s) no carrinho</p>
        </Right>
      </Container>
    </HeaderWrapper>
  );
};

export default HeaderRestaurant;
