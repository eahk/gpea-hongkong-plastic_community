import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
//
import Button from './components/Button.js'
//
import './styles/main.scss';
//
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  // You can continue writing global styles here
  body {
    padding: 0;
  }
`

class MyApp extends Component {
  render() {
    return (
      <div className="App">
      <GlobalStyle/>
			<Button/>
			<button className="button">Button</button>
    </div>
    )
  }
}

export default MyApp
