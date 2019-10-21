import React from "react";
import { css, Global } from "@emotion/core";

import styled from "@emotion/styled";

//used in pages/about.js & pages/index.js
export const CenteredPage = styled.div`
  .centered-container {
    height: 80vh;
    width: 98vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

//used in _app.js
export const GlobalStyles = () => (
  <Global
    styles={css`
      :root {
        --purp: #861657;
        --dark-purp: #fb8ccc;
        --sunshine: #fff000;
        --blueish: #9ab6bb;
        --dark-color-background: #38444c;
        --dark-color-border: #697278;
        --dark-color-text-default: #f0f2f3;
        --dark-color-base: #293238;
        --dark-color-accent: #ec1a62;
        --dark-code-block-background: #2b2c2b;
        --purp-gradient: linear-gradient(#861657, #fb8ccc);
      }

      html {
        scroll-behavior: smooth;
      }
      body {
        position: relative;
        top: 0;
        margin: 0;
        padding: 0;
        font-size: 18px;
      }
      #__next {
        background-color: var(--dark-color-background);
        color: var(--dark-color-text-default);
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 100vh;
      }

      .site-container {
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        overflow-x: hidden;
        background-color: var(--dark-color-background);
        display: grid;
        grid-template-columns: 10rem 1fr 1fr 1fr auto;
        grid-template-rows: 100px 25vh 25vh 25vh 10vh;
        font-family: "Nunito", sans-serif;

        font-weight: 200;
        color: var(--dark-color-text-default);
        max-width: 1400px;
        margin: auto;

        p {
          line-height: 2rem;
        }
      }
      .footer {
        position: relative;
        text-align: center;
        width: 100%;

        div {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;

          p {
            text-align: center;
          }
        }
      }
      strong,
      h1,
      h1 > *,
      h2,
      h2 > *,
      h3,
      h3 > *,
      h4,
      h4 > *,
      h5,
      h5 > *,
      h6,
      h6 > *,
      p,
      p,
      li > * {
        font-family: "Nunito";
        letter-spacing: 1px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      p {
        margin: 0;
        font-weight: 200;
      }

      blockquote,
      dl {
        color: var(--blueish);
        padding: 1rem;
        font-size: 1.2rem;
        line-height: 1.3rem;
        background-color: var(--dark-color-base);
        box-shadow: 0px 10px 20px #2f2f2f;
        margin: 2rem;
      }

      dl {
        font-size: 0.9rem;
        margin-left: 0;
        color: var(--dark-color-text-default);
      }

      dd {
        margin-bottom: 1rem;
      }
      dd:last-of-type {
        margin-bottom: 0;
      }

      strong {
        color: var(--dark-purp);
      }

      h3 {
        margin: 1.5rem 0;
        color: var(--dark-purp);
      }

      a {
        text-decoration-style: dotted;
        color: var(--dark-color-text-default);
        cursor: pointer;
      }

      p,
      li {
        line-height: 1.5rem;
        margin-bottom: 1.5rem;
      }

      pre {
        margin: 2rem 0;
      }

      img {
        max-width: 100%;
      }
      img.img-centered {
        align-self: center;
        margin: 10px 0px;
      }
      .icon-button {
        outline: none;
        border: none;
      }
      .icon-button.hamburger {
        position: fixed;
        left: 0px;
        top: 0px;
        z-index: 3; /* the navigation menu is z-index: 4 */
        padding-top: 4px;
        border-radius: 3px;
      }
      @media (max-width: 425px) {
        .site-container {
          grid-template-columns: 3rem 1fr 1fr 1fr auto;
        }
      }
    `}
  />
);
