import React from "react";
import Router from "next/router";
import styled from "@emotion/styled";

const BackBtn = () => {
  const onClick = () => {
    Router.push("/home");
  };
  return (
    <Back>
      <button onClick={onClick}>All</button>
    </Back>
  );
};

const Back = styled.div`
  position: relative;
  button {
    position: absolute;
    top: 3rem;
    left: 3rem;
    background-color: var(--dark-color-base);
    border: none;
    font-size: 1.2rem;
    line-height: 1.5rem;
    height: 3rem;
    color: var(--dark-color-text-default);
    cursor: pointer;
    width: 11rem;
    font-family: nunito;
    border-radius: 5px;
    box-shadow: 0px 3px 7px #2f2f1f;

    &:after {
      content: "Articles 📓";
    }
  }

  @media (max-width: 550px) {
    button {
      width: 5rem;
      height: 2em;

      top: 1rem;
      left: 1rem;
      font-size: 1.2rem;

      &:after {
        content: " 📓";
      }
    }
  }
`;

export default BackBtn;
