import * as React from "react";

type Props = {
  message: string;
};

export function Header({ message }: Props) {
  return <h1 className="ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary">{message}</h1>;
}
