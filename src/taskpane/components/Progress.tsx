import * as React from "react";
import { Spinner } from "@fluentui/react-components";

type Props = {
  message: string;
};

export function Progress({ message }: Props) {
  // TODO: test
  return <Spinner size="large" label={message} />;
}
