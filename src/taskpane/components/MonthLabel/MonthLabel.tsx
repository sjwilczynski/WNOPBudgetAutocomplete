import * as React from "react";
import { useTranslation } from "react-i18next";
import "./MonthLabel.css";
import { useExcel } from "../../context/ExcelContext";

export const MonthLabel = () => {
  const { t } = useTranslation();
  const { month } = useExcel();
  return (
    <h2 className="label">
      {t("current-month")}: {month}
    </h2>
  );
};
