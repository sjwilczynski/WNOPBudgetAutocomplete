import * as React from "react";
/* global Excel */

/**
 * Custom hook to read the budget year from the "CAŁY ROK" sheet.
 * It assumes the year is located in the merged cell D2:E2.
 */
export const useYear = () => {
  const [year, setYear] = React.useState<number | undefined>(undefined);

  React.useEffect(() => {
    const getYear = async () => {
      try {
        await Excel.run(async (context) => {
          const sheet = context.workbook.worksheets.getItem("CAŁY ROK");
          // Get the range D2:E2. Since it might be merged, reading D2 is sufficient.
          const range = sheet.getRange("D2");
          range.load("values");

          await context.sync();

          // Assuming the year is a number in the first cell of the range
          const yearValue = range.values[0][0];
          if (typeof yearValue === "number") {
            setYear(yearValue);
          } else {
            console.error("Year value in D2 is not a number:", yearValue);
            // Handle cases where the value might be a string or empty
            const parsedYear = parseInt(String(yearValue), 10);
            if (!isNaN(parsedYear)) {
              setYear(parsedYear);
            } else {
              throw new Error('Could not parse year from cell D2 in sheet "CAŁY ROK".');
            }
          }
        });
      } catch (error) {
        console.error("Error fetching year from Excel:", error);
        // Optionally, set an error state here
      }
    };

    getYear();
  }, []);

  return year;
};
