import styled from "styled-components";

const ReceiptPageContainer = styled.div`
  max-width: 50rem;
  margin: 10rem auto;
  background: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  border: 2px solid black;
  padding: 2rem;
`;

export const TitleContainer = styled.h1`
  font-size: var(--text-0);
  text-align: center;
`;

export const ReceiptContainer = styled.div`
  margin-top: 2.5rem;

  & > ul {
    list-style-type: none;

    & > li {
      font-size: var(--text-2);
      padding: 0.6rem 0rem;
      display: flex;
      flex-direction: row;
      font-weight: 300;

      & > span:first-child {
        padding-right: 0.8rem;
        text-transform: capitalize;
        font-weight: 400;
      }
    }
  }

  & > h1 {
    font-size: var(--text-2);
    font-weight: 400;
  }
`;

export const GamesContainer = styled.ul`
  margin-top: 1.5rem;

  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-weight: 300;
    font-size: var(--text-3);
    padding: 0.5rem 1.5rem;
  }

  & > div:first-child {
    background: var(--black);
    color: var(--white);
    font-size: var(--text-3);
    margin-bottom: 1rem;
  }
`;

export default ReceiptPageContainer;
