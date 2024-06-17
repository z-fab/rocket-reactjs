import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
    id?: number;
    description: string;
    amount: number;
    type: "income" | "outcome";
    category: string;
    createdAt?: string;
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: Transaction) => Promise<void>;
}

export const TransactionContext = createContext({} as TransactionContextType);

interface TransactionsProviderProps {
    children: React.ReactNode;
}

export function TransactionProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function fetchTransactions(query?: string) {
        const response = await api.get("/transactions", {
            params: {
                _sort: "createdAt",
                _order: "desc",
                q: query,
            },
        });

        setTransactions(response.data);
    }

    async function createTransaction(data: Transaction) {
        const { description, amount, category, type } = data;

        const response = await api.post("/transactions", {
            description: description,
            amount: amount,
            type: type,
            category: category,
            createdAt: new Date(),
        });

        setTransactions((state) => [response.data, ...state]);
    }

    useEffect(() => {
        // fetch("http://localhost:3000/transactions")
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));
        fetchTransactions();
    }, []);

    return (
        <TransactionContext.Provider
            value={{
                transactions,
                fetchTransactions,
                createTransaction,
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
}
