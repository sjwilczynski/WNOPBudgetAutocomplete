import * as React from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import { ComboboxField, OptionGroup, Option } from "@fluentui/react-components/unstable";
import { useTranslation } from "react-i18next";
import { FormData, SEPARATOR } from "./formSchema";

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
          onChange={(event) => {
            const value = event.target.value.trim();
            setCategoryFilter(value);
          }}
          inlinePopup={true}
          onOptionSelect={(_event, data) => {
            field.onChange(data.optionValue);
          }}
          required={true}
          validationState={error ? "error" : "success"}
          validationMessage={error?.message}
        >
          <CategoryOptions filter={categoryFilter} categories={categories} />
        </ComboboxField>
      )}
    />
  );
};

const CategoryOptions = ({ filter, categories }: { filter: string; categories: Record<string, string[]> }) => (
  <>
    {Object.entries(categories).map(([category, subCategories]) => (
      <OptionGroup key={category} label={category}>
        {subCategories
          .filter((subcategory) => subcategory.toLowerCase().indexOf(filter.toLowerCase()) > -1)
          .map((subcategory) => {
            const key = `${category}${SEPARATOR}${subcategory}`;
            return <Option key={key} value={key} text={subcategory} />;
          })}
      </OptionGroup>
    ))}
  </>
);
