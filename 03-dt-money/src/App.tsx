import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyles } from "./styles/global";
import { Transactions } from "./pages/Transactions";
import { TransactionProvider } from "./contexts/TransactionsContext";

export function App() {
   return (
      <ThemeProvider theme={defaultTheme}>
         <TransactionProvider>
            <Transactions />
         </TransactionProvider>
         <GlobalStyles />
      </ThemeProvider>
   );
}
