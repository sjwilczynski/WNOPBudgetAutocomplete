import * as React from "react";
import "./Header.css";

type Props = {
  message: string;
};

export function Header({ message }: Props) {
  return <h1 className="header">{message}</h1>;
}
