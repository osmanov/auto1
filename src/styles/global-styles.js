import { createGlobalStyle } from 'styled-components'
import { tundora } from './colors'
const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    line-height: 1.5;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    color: ${tundora};
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }
`

export default GlobalStyle
