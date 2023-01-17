import * as React from "react";
import { Spinner } from "@fluentui/react-components";

type Props = {
  message: string;
};

export function Progress({ message }: Props) {
  return <Spinner size="large" label={message} />;
}
