import React from 'react'
import styled from 'styled-components'
import Container from './Container'

const StyledFooter = styled.footer`
  padding: 80px 0;
  background-color: #f6f6f6;
  @media (max-width: 480px) {
    padding: 56px 0;
  }
`;

const StyledContainer = styled(Container)`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`

function Footer() {
  render {
    return (
      <StyledFooter>
        <StyledContainer className="container">
          Footer
        </StyledContainer>
      </StyledFooter>
    )
  }
}
