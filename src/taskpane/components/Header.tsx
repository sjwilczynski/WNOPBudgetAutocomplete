import * as React from "react";

type Props = {
  message: string;
};

export function Header({ message }: Props) {
  return (
    <section className="ms-bgColor-neutralLighter ms-u-fadeIn500">
      <h1 className="ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary">{message}</h1>
    </section>
  );
}
