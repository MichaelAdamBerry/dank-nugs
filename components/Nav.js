import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(fab);

const NavBar = styled.div`
  width: 75%;
  justify-self: right;
  grid-column: 3/6;
  grid-row: 1/2;
  align-self: center;
  display: flex;
  justify-content: space-around;
  opacity: 0.99;
  z-index: 100;

  a {
    text-decoration: dotted;
    text-decoration-color: var(--dark-purp);
    color: var(--dark-text-default);
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const Nav = ({ current }) => {
  const iconStyles = {
    width: "1.5rem",
    height: "1.5rem"
  };

  const url = "https://adam-berrys-dope-website.michaeladamberry3.now.sh";
  return (
    <>
      <NavBar>
        <a href={`${url}/`}>Home</a>
        <a href={`${url}/about`}>About</a>
        <a href={`${url}/portfolio`}>Works</a>

        <div className="item">
          <a href="https://github.com/michaeladamberry">
            <FontAwesomeIcon icon={["fab", "github"]} style={iconStyles} />
          </a>
        </div>
        <div className="item">
          <a href="https://linkedin.com/in/michaeladamberry">
            <FontAwesomeIcon icon={["fab", "linkedin"]} style={iconStyles} />
          </a>
        </div>

        <div className="item">
          <a href="https://twitter.com/_adam_berry">
            <FontAwesomeIcon icon={["fab", "twitter"]} style={iconStyles} />
          </a>
        </div>
      </NavBar>
    </>
  );
};

export default Nav;
