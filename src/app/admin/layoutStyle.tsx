/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: row;
  background-color: #e1e1e1;
  color: black;
`;

const MenuWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid gray;
  padding: 0.5em;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const MenuItem = styled.div<any>`
  margin-top: 0.2em;
  width: 100%;
  height: 42px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 1em;
  font-weight: 700;
  background-color: ${(props: any) => props.$isSelected ? '#fdbd45' : '#f4edd6'};
  border: 1px solid gray;
  border-radius: 0.3em;

  &:hover {
    background-color: #f5e9c0;
  }
`

export {
  Wrapper,
  MenuWrapper,
  ContentWrapper,
  MenuItem,
};