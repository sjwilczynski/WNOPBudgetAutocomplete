import { Link, makeStyles, tokens } from "@fluentui/react-components";
import * as React from "react";

const useStyles = makeStyles({
  issuesLink: {
    paddingLeft: "0px",
    color: `color-mix(in srgb, ${tokens.colorBrandForegroundLink} 88%, white)`,
  },
});

export const IssuesLink = () => {
  const styles = useStyles();
  return (
    <Link
      className={styles.issuesLink}
      href="https://github.com/sjwilczynski/WNOPBudgetAutocomplete/issues/new"
    >
      Github
    </Link>
  );
};
