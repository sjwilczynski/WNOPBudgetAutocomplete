import yupLocalePL from "yup-locale-pl";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

function useYupSchema() {
  const {
    t,
    i18n: { language },
  } = useTranslation();
  if (language === "pl-PL") {
    yup.setLocale(yupLocalePL);
  } else {
    yup.setLocale({});
  }

  return yup
    .object({
      categoryDetails: yup.string().required(),
      day: yup.number().typeError(t("day-type-error")).required().min(1).max(31),
      price: yup.number().typeError(t("price-type-error")).required(),
    })
    .required();
}

export const useFormResolver = () => {
  const schema = useYupSchema();
  return yupResolver(schema);
};

export type FormData = yup.InferType<ReturnType<typeof useYupSchema>>;

export const SEPARATOR = "$%^";
