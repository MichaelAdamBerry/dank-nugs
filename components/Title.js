import React from "react";
import { useSpring, animated, config } from "react-spring";

const Title = ({ name, subtitle }) => {
  const { opacity, xyz } = useSpring({
    from: {
      xyz: [0, -50, 0],
      opacity: 0
    },
    opacity: 1,
    xyz: [0, -1, 1],
    config: config.wobbly
  });
  return (
    <>
      <div className="name">
        <h1>{name}</h1>

        <animated.h1
          style={{
            display: "flex",
            margin: "0",
            boxShadow: `5px, 5px 10px black`,
            transform: xyz.interpolate(
              (x, y, z) => `translate3d(${x}rem, ${y}rem, ${z}px )`
            )
          }}>
          <span>.</span>
        </animated.h1>
      </div>
      {subtitle && <h2>{subtitle}</h2>}
      <style jsx>{`
        .name {
          grid-column: 2/4;
          grid-row: 1/2;
          justify-self: start;
          align-self: center;
          color: var(--dark-color-text-default);
          display: flex;
          margin-top: 1rem;
          opacity: 0.99;
          z-index: 20;
          transform: translate3d(0.5rem, 0px, 0px);
        }

        h2 {
          grid-column: 2/4;
          grid-row: 1/3;
          justify-self: start;
          align-self: center;
          color: var(--dark-purp);
        }

        .name h1,
        h2 {
          font-family: "Nunito", sans-serif;
        }

        .name span {
          font-size: 3rem;
          margin: 0;
          color: var(--blueish);
        }

        @media (max-width: 800px) {
          .name,
          h2 {
            grid-column: 1/5;
            justify-self: left;
            margin-left: 40px;
          }
          .name h1,
          h2 {
            font-size: 1.7rem;
          }
          .name span {
            font-size: 2rem;
            margin-top: 0.8rem;
          }
        }

        @media (max-width: 425px) {
          .name,
          h2 {
            grid-column: 2/4;
            margin-left: 0;
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default Title;
