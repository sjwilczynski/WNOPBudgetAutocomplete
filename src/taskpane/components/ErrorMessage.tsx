import * as React from "react";
import { MessageBar, MessageBarBody } from "@fluentui/react-components";

type Props = {
  message?: string;
  children?: React.ReactNode;
};

export const ErrorMessage = ({ message, children }: Props) => (
  <MessageBar intent="error">
    <MessageBarBody>
      {message}
      {children}
    </MessageBarBody>
  </MessageBar>
);
