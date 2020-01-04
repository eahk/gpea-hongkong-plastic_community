import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  margin: 0 auto;
  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`

export default function Container(props) {
  return (
    <StyledContainer className={props.className}>
      {props.children}
    </StyledContainer>
  )
}
