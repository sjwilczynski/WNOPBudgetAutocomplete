/* global Excel */

const categoriesRows = [13, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142, 154, 166, 178, 190, 202];

const categoriesRange = categoriesRows.map((rowIndex) => `B${rowIndex + 1}`).join(";");

export const getCategories = () =>
  Excel.run(async (context) => {
    const categoriesSheet = context.workbook.worksheets.getItem("Wzorzec kategorii");

    const categoriesNamesRange = categoriesSheet.getRanges(categoriesRange);
    categoriesNamesRange.load("areas/items/text");
    await context.sync();

    const categoriesNames = categoriesNamesRange.areas.items.map((item) => item.text[0][0]);

    const categoriesMap: Record<string, string[]> = {};
    const subCategoriesRanges = categoriesRows.map((rowIndex) =>
      categoriesSheet.getRange(`B${rowIndex + 2}:B${rowIndex + 11}`).load("text")
    );
    await context.sync();

    categoriesNames.forEach((name, index) => {
      categoriesMap[name] = subCategoriesRanges[index].text.map((item) => item[0]).filter((x) => x && x !== ".");
    });

    return categoriesMap;
  });
