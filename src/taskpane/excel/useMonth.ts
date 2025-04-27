/* global Excel, OfficeExtension */
import { useEffect, useRef, useState } from "react";
import { monthNameToNumber } from "../utils/constants";

export type MonthState = string | "LOADING" | "NOT_FOUND";

export const useMonth = (): MonthState => {
  const [month, setMonth] = useState<MonthState>("LOADING");
  const handlerRef = useRef<OfficeExtension.EventHandlerResult<unknown>>();
  useEffect(() => {
    Excel.run(async (context) => {
      const setMonthFromWorkbook = async () => {
        const activeSheet = context.workbook.worksheets.getActiveWorksheet().load("name");
        await context.sync();
        const sheetName = activeSheet.name;
        if (sheetName in monthNameToNumber) {
          setMonth(sheetName);
        } else {
          setMonth("NOT_FOUND");
        }
      };

      setMonthFromWorkbook();

      handlerRef.current = context.workbook.onSelectionChanged.add(setMonthFromWorkbook);
    });

    return () => {
      handlerRef.current?.remove();
    };
  }, []);
  return month;
};
