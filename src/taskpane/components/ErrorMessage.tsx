import * as React from "react";
import { MessageBar, MessageBarType } from "@fluentui/react";

export const ErrorMessage = ({ message }: { message?: string }) =>
  message ? (
    <MessageBar messageBarType={MessageBarType.error} isMultiline={false}>
      {message}
    </MessageBar>
  ) : null;
