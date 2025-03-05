/* global Excel, OfficeExtension */
import { useEffect, useRef, useState } from "react";

export const useMonth = () => {
  const [month, setMonth] = useState<string>("");
  const handlerRef = useRef<OfficeExtension.EventHandlerResult<unknown>>();
  useEffect(() => {
    Excel.run(async (context) => {
      const setMonthFromWorkbook = async () => {
        const activeSheet = context.workbook.worksheets.getActiveWorksheet().load("name");
        await context.sync();
        setMonth(activeSheet.name);
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
