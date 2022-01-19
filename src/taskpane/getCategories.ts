const categoriesRows = [13, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142, 154, 166, 178, 190, 202];

const categoriesRange = categoriesRows.map((rowIndex) => `B${rowIndex + 1}`).join(";");

export const getCategories = () =>
  Excel.run(async (context) => {
    const categoriesSheet = context.workbook.worksheets.getItem("Wzorzec kategorii");

    const categoriesNamesRange = categoriesSheet.getRanges(categoriesRange);
    categoriesNamesRange.load("areas");
    await context.sync();
    categoriesNamesRange.areas.items.forEach((area) => area.load("text"));
    await context.sync();

    const categoriesNames = categoriesNamesRange.areas.items.map((item) => item.text[0][0]);

    const categoriesMap: { [key in string]: string[] } = {};
    for (const i in categoriesRows) {
      const rowIndex = categoriesRows[i];
      const subCategoryRange = categoriesSheet.getRange(`B${rowIndex + 2}:B${rowIndex + 11}`).load("text");
      await context.sync();
      categoriesMap[categoriesNames[i]] = subCategoryRange.text.map((item) => item[0]).filter((x) => x && x !== ".");
    }

    return categoriesMap;
  });
