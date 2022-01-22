/* global require*/

import * as React from "react";
import "./Header.css";

type Props = {
  message: string;
};

export function Header({ message }: Props) {
  return (
    <div className="container">
      <img width="90" height="90" src={require("../../../../assets/logo-80.png")} alt={message} />
      <h1 className="header">{message}</h1>
    </div>
  );
}
