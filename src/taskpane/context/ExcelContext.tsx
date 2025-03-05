import * as React from "react";
import { FormData } from "../components/AddTransactionForm/formSchema";

type ExcelContextType = {
  submitTransaction: (data: FormData) => void;
  month: string;
};

const ExcelContext = React.createContext<ExcelContextType | undefined>(undefined);

type ExcelProviderProps = {
  children: React.ReactNode;
  submitTransaction: (data: FormData) => void;
  month: string;
};

export const ExcelProvider: React.FC<ExcelProviderProps> = ({ children, submitTransaction, month }) => {
  const value = React.useMemo(() => ({ submitTransaction, month }), [submitTransaction, month]);

  return <ExcelContext.Provider value={value}>{children}</ExcelContext.Provider>;
};

export const useExcel = (): ExcelContextType => {
  const context = React.useContext(ExcelContext);
  if (context === undefined) {
    throw new Error("useExcel must be used within an ExcelProvider");
  }
  return context;
};
