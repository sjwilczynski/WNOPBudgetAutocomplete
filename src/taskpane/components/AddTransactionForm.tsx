import * as React from "react";
import { ComboBox, IComboBox, IComboBoxOption, SelectableOptionMenuItemType } from "@fluentui/react";
import { Controller, useForm } from "react-hook-form";

const separator = "$%^";

type Props = {
  categories: { [key in string]: string[] } | undefined;
};

type FormData = {
  category: string;
  day: number;
  price: number;
};

export const AddTransactionForm = ({ categories }: Props) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>();

  const { category, onCategoryChange } = useOnCategoryChange();

  if (categories) {
    const options = getOptions(categories);
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <ComboBox
              {...field}
              options={options}
              label="Wybierz kategorię"
              autoComplete="on"
              allowFreeform={true}
              onChange={(_event, option) => {
                field.onChange(option.data)
              }}
            />
          )}
        />
        <p>{errors.category?.message}</p>
        <input type="number" {...register("day", { required: true, min: 1, max: 31, valueAsNumber: true })} />
        <p>{errors.day?.message}</p>
        <input type="number" {...register("price", { required: true, min: 0, valueAsNumber: true })} />
        <p>{errors.price?.message}</p>
        <button type="submit">Dodaj transakcję</button>
      </form>
    );
  } else {
    return null;
  }
};

const useOnCategoryChange = () => {
  const [category, setCategory] = React.useState<string>("");
  const onCategoryChange = (
    _event: React.FormEvent<IComboBox>,
    option?: IComboBoxOption,
    _index?: number,
    _value?: string
  ) => {
    if (option) {
      console.log(option);
      setCategory(option.data);
    }
  };

  return { category, onCategoryChange };
};

function onSubmit(data: FormData): void {
  console.log(data);
}

function getOptions(categories: { [x: string]: string[] }): IComboBoxOption[] {
  const options: IComboBoxOption[] = [];
  Object.entries(categories).forEach((value) => {
    const [category, subCategories] = value;
    options.push({ key: category, text: category, itemType: SelectableOptionMenuItemType.Header });
    for (const subcategory of subCategories) {
      const key = `${category}${separator}${subcategory}`;
      options.push({ key, text: subcategory, data: key });
    }
  });
  return options;
}
