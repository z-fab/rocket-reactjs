import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import {
    PriceHighlight,
    TransactionsContainer,
    TransactionsTable,
} from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <SearchForm />
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="40%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">
                                    R$ 12.000,00
                                </PriceHighlight>
                            </td>
                            <td>Desenvolvimento</td>
                            <td>14/03/2022</td>
                        </tr>
                        <tr>
                            <td width="40%">Hamburguer</td>
                            <td>
                                <PriceHighlight variant="outcome">
                                    - R$ 59,90
                                </PriceHighlight>
                            </td>
                            <td>Alimentação</td>
                            <td>12/03/2022</td>
                        </tr>
                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>
        </div>
    );
}
