import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 20px;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #666;

    h1 {
      margin: 0;
      color: #000;
    }

    .description {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1.03rem;
      font-weight: 500;
      color: #000;
      margin: 0;
    }

    .card-section {
      display: flex;

      .card {
        flex: 1;
        min-width: 180px;
        padding: 10px;
        box-shadow: 1px 2px 3px 3px #ccc;
        margin-right: 20px;

        &:last-child {
          margin: 0;
        }

        .description {
          margin: 10px 0 0;
          font-size: .9rem;
        }
      }
    }
  }
`;

export default GlobalStyle;
