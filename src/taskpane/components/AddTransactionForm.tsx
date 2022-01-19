import * as React from "react";
import { ComboBox, IComboBoxOption, SelectableOptionMenuItemType } from "@fluentui/react";

const separator = "$%^";

type Props = {
  categories: { [key in string]: string[] } | undefined;
};

export const AddTransactionForm = ({ categories }: Props) => {
  if (categories) {
    const options = getOptions(categories);
    return (
      <form onSubmit={onSubmit}>
        <ComboBox options={options} label="Wybierz kategorię" autoComplete="on" allowFreeform={true} />
        <input type="number" minLength={1} maxLength={2} min={1} max={30} id="day" name="Dzień" />
        <input type="number" minLength={1} id="price" name="Cena" />
        <button type="submit">Dodaj transakcję</button>
      </form>
    );
  } else {
    return null;
  }
};

function onSubmit(event: React.FormEvent): void {
  event.preventDefault();
  //@ts-ignore
  console.log({ el: event.currentTarget.elements });
}

function getOptions(categories: { [x: string]: string[] }): IComboBoxOption[] {
  const options: IComboBoxOption[] = [];
  Object.entries(categories).forEach((value) => {
    const [category, subCategories] = value;
    options.push({ key: category, text: category, itemType: SelectableOptionMenuItemType.Header });
    for (const subcategory of subCategories) {
      options.push({ key: `${category}${separator}${subcategory}`, text: subcategory });
    }
  });
  return options;
}
