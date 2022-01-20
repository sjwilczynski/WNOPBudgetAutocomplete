import * as React from "react";
import { useTranslation } from "react-i18next";
import { AddTransactionForm } from "./AddTransactionForm";
import { Header } from "./Header";
import { Progress } from "./Progress";

type Props = {
  categories?: { [key in string]: string[] };
};

export default function App(props: Props) {
  const { categories } = props;
  const { t } = useTranslation();

  if (!categories) {
    return <Progress title={t("app-title")} message={t("loading")} />;
  }

  return (
    <>
      <Header message={t("welcome")} />
      <AddTransactionForm categories={categories}></AddTransactionForm>
    </>
  );
}
