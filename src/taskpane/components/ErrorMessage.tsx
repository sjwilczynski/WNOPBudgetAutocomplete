import * as React from "react";
import { Alert } from "@fluentui/react-components/unstable";

type Props = {
  message?: string;
  children?: React.ReactNode;
};

export const ErrorMessage = ({ message, children }: Props) => (
  <Alert intent="error">
    <span>
      {message}
      {children}
    </span>
  </Alert>
);
