import * as React from "react";
import { useTranslation } from "react-i18next";
import { useExcel } from "../../context/ExcelContext";
import { makeStyles } from "@fluentui/react-components";

const useStyles = makeStyles({
  label: {
    fontSize: "16px",
    fontWeight: "600",
    margin: 0,
  },
});

export const MonthLabel = () => {
  const { t } = useTranslation();
  const { month } = useExcel();
  const styles = useStyles();
  return (
    <h2 className={styles.label}>
      {t("current-month")}: {month}
    </h2>
  );
};
