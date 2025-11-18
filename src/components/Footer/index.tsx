import { Container } from "../../styles/styles";
import { FooterWrapper, SocialMedia, TextFooter } from "./style";
import logo from "../../assets/img/logo.png";
import face from "../../assets/img/Social_Media/face.png";
import insta from "../../assets/img/Social_Media/insta.png";
import twitter from "../../assets/img/Social_Media/twitter.png";


const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <img src={logo} alt="Logo do Efood" />
        <SocialMedia>
          <a href="https://pt-br.facebook.com" target="_blank">
            <img src={face} alt="Logo do Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={insta} alt="Logo do Instagram" />
          </a>
          <a href="https://x.com/?lang=pt" target="_blank">
            <img src={twitter} alt="Logo do Twitter" />
          </a>
        </SocialMedia>
        <TextFooter>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </TextFooter>
      </Container>
    </FooterWrapper>
  );
};
export default Footer;
