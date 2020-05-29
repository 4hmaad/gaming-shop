import styled from "styled-components";

import { ReactComponent as ArrowIcon } from "../../assets/next.svg";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";

const CartProductContainer = styled.li`
  padding: 2rem 0rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid var(--lightGrey);

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 0.5rem;
  }
`;

export const ImageContainer = styled.img`
  height: 33rem;
  margin: 0 auto;
`;

export const TitleContainer = styled.h1`
  font-size: var(--text-0);
  font-weight: 300;
  text-wrap: wrap;
`;
export const OptionContainer = styled.span`
  font-size: var(--text-1);
  font-weight: 300;
`;

export const ArrowIconContainer = styled(ArrowIcon)`
  ${(props) => {
    return props.left
      ? "margin-right: 2rem; transform: rotate(180deg);"
      : "margin-left: 2rem;";
  }}
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
`;

export const CloseIconContainer = styled(CloseIcon)`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
`;

export default CartProductContainer;
