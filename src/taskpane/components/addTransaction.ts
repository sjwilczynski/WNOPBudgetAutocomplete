const searchSettings = {
  completeMatch: true,
  matchCase: true,
  searchDirection: Excel.SearchDirection.forward,
};

export const addTransaction = (category: string, subcategory: string, day: number, price: number) => {
  console.log({ category, subcategory, day, price });

  Excel.run(async (context) => {
    const sheet = context.workbook.worksheets.getActiveWorksheet();

    const searchRangeCategory = sheet.getUsedRange();
    const searchRangeDay = sheet.getRange("A1:AZ2");

    const foundCategory = searchRangeCategory.find(category, searchSettings).load();
    await context.sync();
    const foundSubCategory = sheet
      .getRangeByIndexes(foundCategory.rowIndex + 1, foundCategory.columnIndex, 10, 1)
      .find(subcategory, searchSettings)
      .load();
    const foundDay = searchRangeDay.find(day.toString(), searchSettings).load();

    await context.sync();

    const rowIndex = foundSubCategory.rowIndex;
    const columnIndex = foundDay.columnIndex;
    const cell = sheet.getCell(rowIndex, columnIndex).load("values");

    await context.sync();
    const currentValue = cell.values[0][0];
    cell.values = [[currentValue + price]];
  });
};
