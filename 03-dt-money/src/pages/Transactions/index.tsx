import { useContext } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from "./styles";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { currencyFormatter, dateFormatter } from "../../utils/formatter";

export function Transactions() {
    const { transactions } = useContext(TransactionContext);

    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        {transactions.map((transaction) => {
                            return (
                                <tr key={transaction.id}>
                                    <td width="40%">
                                        {transaction.description}
                                    </td>
                                    <td>
                                        <PriceHighlight
                                            variant={transaction.type}
                                        >
                                            {transaction.type === "outcome" &&
                                                "- "}
                                            {currencyFormatter.format(
                                                transaction.amount
                                            )}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>
                                        {dateFormatter.format(
                                            new Date(transaction.createdAt)
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
