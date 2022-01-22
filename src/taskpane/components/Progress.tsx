import * as React from "react";
import { Spinner, SpinnerSize } from "@fluentui/react";

type Props = {
  message: string;
};

export function Progress({ message }: Props) {
  return <Spinner size={SpinnerSize.large} label={message} />;
}
