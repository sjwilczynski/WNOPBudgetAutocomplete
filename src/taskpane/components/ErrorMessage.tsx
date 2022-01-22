import * as React from "react";
import { MessageBar, MessageBarType } from "@fluentui/react";

type Props = {
  message?: string;
  children?: React.ReactNode;
};

export const ErrorMessage = ({ message, children }: Props) => (
  <MessageBar messageBarType={MessageBarType.error}>
    {message}
    {children}
  </MessageBar>
);
