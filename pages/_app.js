import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { AlurakutStyles } from './src/lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas Reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: #D9E6F6;
  }
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  h1, h2, h3{
    line-height:125%;
    font-weight:normal;
  }

  hr{
    color:#eee;
    margin:10px 0;
  }


  input{
    width:100%;
    height:2.5rem;
    border-radius:100px;
    background-color:#eee;
    border:1px solid #cacaca;
    margin:10px 0;
    padding-left:1.5rem;
  }

  button{
    background-color:#6b8fbe;
    height:2.5rem;
    border-radius:100px;
    border:#7c9fdf;
    padding:0 1.5rem;
    color:#fff;
    font-weight:bold;
  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}