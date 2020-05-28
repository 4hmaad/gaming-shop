import styled, { css } from "styled-components";

const PrimaryStyle = css`
  border: 2px solid var(--black);
  background: var(--black);
  color: var(--white);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;
const PrimaryInvertedStyle = css`
  border: 2px solid var(--black);
  background: var(--white);
  color: var(--black);
  transition: all 0.2s;

  &:hover {
    background-color: var(--black);
    color: var(--white);
  }
`;

const SecondaryStyle = css`
  border: 2px solid var(--yellow);
  background: var(--yellow);
  color: var(--black);
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

const SecondaryInvertedStyle = css`
  border: 2px solid var(--yellow);
  background: var(--white);
  color: var(--black);
  transition: all 0.2s;

  &:hover {
    background-color: var(--yellow);
  }
`;

const FullWidthButton = css`
  width: 100%;
  text-align: center;
`;

const getButtonStyles = (props) => {
  if (props.secondary && props.inverted) {
    return SecondaryInvertedStyle;
  } else if (props.secondary && !props.inverted) {
    return SecondaryStyle;
  } else if (props.primary && props.inverted) {
    return PrimaryInvertedStyle;
  } else {
    return PrimaryStyle;
  }
};

const getButtonWidth = (props) => {
  return props.fullWidth ? FullWidthButton : "";
};

const CustomButtonContainer = styled.button`
  font-family: "Oswald", "Segoe UI", sans-serif;
  padding: 1.5rem 4rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-size: var(--text-2);
  letter-spacing: 2px;
  border: none;
  outline: none;
  cursor: pointer;

  ${getButtonStyles}
  ${getButtonWidth}
`;
export default CustomButtonContainer;
