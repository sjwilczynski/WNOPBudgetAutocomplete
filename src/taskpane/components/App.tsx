import * as React from "react";
import { AddTransactionForm } from "./AddTransactionForm";
import Header from "./Header";
import Progress from "./Progress";

type Props = {
  title: string;
  categories?: { [key in string]: string[] };
};

export default function App(props: Props) {
  const { title, categories } = props;

  if (!categories) {
    return (
      <Progress
        title={title}
        logo={require("./../../../assets/logo-filled.png")}
        message="Please sideload your addin to see app body."
      />
    );
  }

  return (
    <>
      <div className="ms-welcome">
        <Header logo={require("./../../../assets/logo-filled.png")} title={title} message="Welcome" />
      </div>
      <AddTransactionForm categories={categories}></AddTransactionForm>
    </>
  );
}
