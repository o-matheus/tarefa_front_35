import logo from "../../assets/img/logo.png";
import { Container } from "../../styles/styles";
import { HeaderWrapper, TitleHeader } from "./styles";

const HeaderHome = () => {
  return (
    <HeaderWrapper>
      <Container>
        <img src={logo} alt="Logo Efood" />
        <TitleHeader>
          Viva experiências gastronômicasno conforto da sua casa
        </TitleHeader>
      </Container>
    </HeaderWrapper>
  );
};

export default HeaderHome;
