import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  background-color: gray;
  border: 1px solid black;
  padding: 4px 10px;
  color: white;
  border-radius: 6px;
`
const Button = () => {
	return (
		<StyledButton>style button</StyledButton>
	)
}

export default Button
