import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  background-color: #0379a1;
  padding: 0 1em;
  align-items: center;
  font-weight: 700;
`

function Header() {
  return (
    <Wrapper>Header</Wrapper>
  )
}

export default Header