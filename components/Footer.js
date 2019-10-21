import React from "react";
import { config } from "../config/config.yml";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>
          {" "}
          &copy; 2018 - {new Date().getFullYear()} {config.author}
        </p>
      </div>
    </div>
  );
}
