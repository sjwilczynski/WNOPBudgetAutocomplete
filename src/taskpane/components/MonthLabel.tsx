/* global Excel, OfficeExtension */

import * as React from "react";
import { useTranslation } from "react-i18next";

export const MonthLabel = () => {
  const { t } = useTranslation();
  const month = useMonth();
  return (
    <h2>
      {t("current-month")}: {month}
    </h2>
  );
};

const useMonth = () => {
  const [month, setMonth] = React.useState<string>("");
  let handler: OfficeExtension.EventHandlerResult<unknown>;
  React.useEffect(() => {
    Excel.run(async (context) => {
      const setMonthFromWorkbook = async () => {
        const activeSheet = context.workbook.worksheets.getActiveWorksheet().load("name");
        await context.sync();
        setMonth(activeSheet.name);
      };

      setMonthFromWorkbook();

      handler = context.workbook.onSelectionChanged.add(setMonthFromWorkbook);
    });

    return () => {
      handler.remove();
    };
  }, []);
  return month;
};
