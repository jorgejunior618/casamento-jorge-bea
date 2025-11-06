import Image from "next/image";
import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: 200px;
  gap: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
  border: 1px solid black;
  border-radius: 6px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 60px;
  }
`;

export const ImageStyled = styled(Image)`
  max-height: 100px !important;
  width: auto !important;
  max-width: 100%;
`;

export const LinkButton = styled.a`
  border-radius: 5px;
  display: flex;
  padding: 8px 12px;
  background-color: #a0a0ff;
`;
