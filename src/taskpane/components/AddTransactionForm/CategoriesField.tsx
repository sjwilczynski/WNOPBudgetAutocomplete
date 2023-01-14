import * as React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { ComboboxField, OptionGroup, Option } from "@fluentui/react-components/unstable";
import { useTranslation } from "react-i18next";
import { FormData, SEPARATOR } from "./formSchema";
import "./CategoryField.css";

type Props = {
  categories: Record<string, string[]>;
  control: Control<FormData>;
  error: FieldError | undefined;
};

export const CategoriesField = ({ categories, control, error }: Props) => {
  const { t } = useTranslation();

  const [categoryFilter, setCategoryFilter] = React.useState("");

  return (
    <Controller
      name="categoryDetails"
      control={control}
      render={({ field }) => (
        <ComboboxField
          {...field}
          label={t("choose-category")}
          autoComplete="on"
          inlinePopup={true}
          onChange={(event) => {
            const value = event.target.value.trim();
            setCategoryFilter(value);
          }}
          onOptionSelect={(_event, data) => {
            field.onChange(data.optionValue);
          }}
          required={true}
          validationState={error ? "error" : "success"}
          validationMessage={error?.message}
          listbox={{ className: "category-listbox" }}
          onFocus={(e) => e.currentTarget.select()}
        >
          <CategoryOptions filter={categoryFilter} categories={categories} />
        </ComboboxField>
      )}
    />
  );
};

const CategoryOptions = React.memo(
  ({ filter, categories }: { filter: string; categories: Record<string, string[]> }) => {
    const matches = (filter: string, text: string) => text.toLowerCase().indexOf(filter.toLowerCase()) > -1;
    const macthesFilter = (subcategory: string) => matches(filter, subcategory);
    return (
      <>
        {Object.entries(categories)
          .filter(([, subcatgeories]) => subcatgeories.some(macthesFilter))
          .map(([category, subCategories]) => (
            <OptionGroup key={category} label={category}>
              {subCategories.filter(macthesFilter).map((subcategory) => {
                const key = `${category}${SEPARATOR}${subcategory}`;
                return (
                  <Option key={key} value={key} text={subcategory}>
                    {subcategory}
                  </Option>
                );
              })}
            </OptionGroup>
          ))}
      </>
    );
  }
);

CategoryOptions.displayName = "CategoryOptions";
