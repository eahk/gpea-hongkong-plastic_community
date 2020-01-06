import React from "react";
import styled from "styled-components";
import { IMaskMixin } from "react-imask";

// extend style component
const StyledInput = styled.input`
  font-size: 16px;
`;

const MaskedInput = IMaskMixin(({ inputRef, ...props }) => (
  <StyledInput
    {...props}
    innerRef={inputRef} // bind internal input (if you use styled-components V4, use "ref" instead "innerRef")
  />
));

export default MaskedInput;
