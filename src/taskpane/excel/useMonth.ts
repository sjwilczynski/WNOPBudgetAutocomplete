/* global Excel, OfficeExtension */
import { useEffect, useState } from "react";

export const useMonth = () => {
  const [month, setMonth] = useState<string>("");
  let handler: OfficeExtension.EventHandlerResult<unknown>;
  useEffect(() => {
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
