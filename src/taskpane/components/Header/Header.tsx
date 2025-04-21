import * as React from "react";
import logo from "../../../../assets/logo-80.png";
import { makeStyles } from "@fluentui/react-components";

type Props = {
  message: string;
};

const useStyles = makeStyles({
  header: {
    fontSize: "24px",
    fontWeight: "600",
    marginTop: "0px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export function Header({ message }: Props) {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <img width="90" height="90" src={logo} alt={message} />
      <h1 className={styles.header}>{message}</h1>
    </div>
  );
}
