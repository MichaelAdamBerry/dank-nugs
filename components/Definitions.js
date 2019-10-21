import React from "react";

const Definitions = ({ heading, items }) => {
  return (
    <>
      <h3>{heading}</h3>
      <dl>
        {items.map((item, indx) => {
          return (
            <>
              <dt>{item.dt}</dt>
              <dd>{item.dd}</dd>
            </>
          );
        })}
      </dl>
      <style jsx>{`
        h3 {
          color: var(--blueish);
          font-size: 1.1rem;
          text-decoration: underline;
          transform: translate(1rem, 4rem);
        }

        dt {
          color: var(--dark-color-text-default);
          font-size: 1rem;
        }

        dl {
          padding: 1rem;
          padding-top: 3rem;
          line-height: 1.3rem;
          background-color: var(--dark-color-base);
          box-shadow: 0px 10px 20px #2f2f2f;
          font-size: 0.9rem;
          margin-left: 0;
          line-height: 2rem;
          color: var(--blueish);
        }

        dd {
          margin-bottom: 1rem;
        }
        dd:last-of-type {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};

export default Definitions;
