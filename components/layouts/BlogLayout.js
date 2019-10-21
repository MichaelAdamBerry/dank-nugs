import React from "react";
import styled from "@emotion/styled";

export const BlogContent = styled.div`
  grid-column: 1/6;
  grid-row: 2/6;
  width: 100%;
  border-bottom: solid 2px;
  max-width: 550px;
  padding: 1rem 0;
  margin: auto;
  margin-bottom: 2rem;

  h2 {
    font-size: 2rem;
    padding: 1rem 0;
    color: var(--dark-purp);

    a {
      color: var(--dark-purp);
    }
  }

  @media (max-width: 550px) {
    max-width: 350px;
    justify-self: center;
  }
`;
