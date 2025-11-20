import styled from "styled-components";
import { Background, colors, Container } from "../../styles/styles";

export const HeaderWrapper = styled.header`
  ${Background}
  height: 180px;
  color: ${colors.corTextoPrincipal};
  font-size: 18px;
  font-weight: 900;

  a {
    color: ${colors.corTextoPrincipal};
  }

  ${Container} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 40px;
    align-items: center;
    justify-content: center;
    justify-items: center;
  }
`;

export const Left = styled.div`
  justify-self: start;
  display: flex;
  align-items: center;
`

export const Center = styled.div`
  justify-self: center;
  img {
    display: block;
  }
`

export const Right = styled.div`
  justify-self: end;
  display: flex;
  align-items: center;
`
