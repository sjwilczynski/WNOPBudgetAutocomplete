import * as React from "react";
import { Spinner, SpinnerSize } from "@fluentui/react";

type Props = {
  message: string;
  title: string;
};

export function Progress({ message, title }: Props) {
  return (
    <section className="ms-welcome__progress ms-u-fadeIn500">
      <h1 className="ms-fontSize-su ms-fontWeight-light ms-fontColor-neutralPrimary">{title}</h1>
      <Spinner size={SpinnerSize.large} label={message} />
    </section>
  );
}
