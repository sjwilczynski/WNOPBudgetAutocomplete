import * as React from "react";
import { AddTransactionForm } from "./AddTransactionForm";
import { Header } from "./Header";
import { Progress } from "./Progress";

type Props = {
  title: string;
  categories?: { [key in string]: string[] };
};

export default function App(props: Props) {
  const { title, categories } = props;

  if (!categories) {
    return <Progress title={title} message="Trwa ładowanie..." />;
  }

  return (
    <>
      <Header message="Witamy!" />
      <AddTransactionForm categories={categories}></AddTransactionForm>
    </>
  );
}
