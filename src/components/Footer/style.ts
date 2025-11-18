import styled from "styled-components";
import { Background, colors, Container } from "../../styles/styles";

export const FooterWrapper = styled.footer`
  ${Background}
  display: flex;
  align-items: center;
  justify-content: center;

  ${Container} {
    img {
      margin-top: 40px;
    }
  }
`;

export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const TextFooter = styled.p`
  font-size: 10px;
  line-height: 100%;
  color: ${colors.corTextoPrincipal};
  margin-top: 80px;
  max-width: 480px;
  text-align: center;
`;
