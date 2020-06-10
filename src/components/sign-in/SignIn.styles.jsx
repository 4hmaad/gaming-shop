import styled from "styled-components";

const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;

  & > * {
    margin: 1rem 0rem;
  }
`;

export const TitleContainer = styled.h1`
  font-size: var(--text-1);

  ${(props) =>
    props.small
      ? "font-weight: 300; font-size: var(--text-2)"
      : "font-weight: 400; font-size: var(--text-1)"}
`;

export default SignInFormContainer;
