import styled from "styled-components";

import { colors } from "../../styles/styles";

export const CardWrapper = styled.div`
  position: relative;
  max-width: 472px;
  color: ${colors.corTextoPrincipal};
  background-color: #fff;
  border: 1px solid;
  border-top: 0;
`;

export const ImageRestaurant = styled.img`
  display: block;
  width: 472px;
  height: 217px;
  object-fit: cover;
  object-position: center 65%;
`

export const InfoContainer = styled.div`
  position: absolute;
  display: flex;
  gap: 8px;
  top: 16px;
  right: 16px;
`;

export const TextContainer = styled.div`
  height: 181px;
  font-size: 14px;
  padding: 8px;
  padding-top: 0;

  a {
    position: absolute;
    bottom: 0;
    font-weight: bold;
    color: ${colors.corTextoTag};
    background-color: ${colors.corFundoTag};
    padding: 8px 16px;
    margin-bottom: 8px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;

  h4 {
    padding-top: 8px;
    font-size: 18px;
    font-weight: bold;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
