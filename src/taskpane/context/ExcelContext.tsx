import * as React from "react";
import type { FormSubmit } from "../components/AddTransactionForm/AddTransactionForm";
import type { MonthState } from "../excel/useMonth";

type ExcelContextType = {
  submitTransaction: FormSubmit;
  month: MonthState;
  year: number | undefined;
};

const ExcelContext = React.createContext<ExcelContextType | undefined>(undefined);

type ExcelProviderProps = {
  children: React.ReactNode;
  submitTransaction: FormSubmit;
  month: MonthState;
  year: number | undefined;
};

export const ExcelProvider: React.FC<ExcelProviderProps> = ({
  children,
  submitTransaction,
  month,
  year,
}) => {
  const value = React.useMemo(
    () => ({ submitTransaction, month, year }),
    [submitTransaction, month, year]
  );

  return <ExcelContext.Provider value={value}>{children}</ExcelContext.Provider>;
};

export const useExcel = (): ExcelContextType => {
  const context = React.useContext(ExcelContext);
  if (context === undefined) {
    throw new Error("useExcel must be used within an ExcelProvider");
  }
  return context;
};
