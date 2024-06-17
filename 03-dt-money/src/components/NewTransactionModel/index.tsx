import * as Dialog from "@radix-ui/react-dialog";
import * as z from "zod";
import {
    Content,
    Overlay,
    CloseButton,
    TransactionType,
    TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";

const newTransactionFormSchema = z.object({
    description: z.string(),
    amount: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"]),
});

type NewTransactionFormInput = z.infer<typeof newTransactionFormSchema>;

export function NewTransactionModel() {
    const { createTransaction } = useContext(TransactionContext);

    const {
        control,
        register,
        handleSubmit,
        formState: { isSubmitting },
        reset,
    } = useForm<NewTransactionFormInput>({
        resolver: zodResolver(newTransactionFormSchema),
        defaultValues: {
            type: "income",
        },
    });

    async function handleCreateNewTransaction(data: NewTransactionFormInput) {
        const { description, amount, category, type } = data;

        await createTransaction({
            description,
            amount,
            category,
            type,
        });
        reset();
    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova Transação</Dialog.Title>

                <CloseButton>
                    <X size={24} />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input
                        type="text"
                        placeholder="Descrição"
                        {...register("description")}
                        required
                    />
                    <input
                        type="number"
                        placeholder="Valor"
                        {...register("amount", { valueAsNumber: true })}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        {...register("category")}
                    />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType
                                    onValueChange={field.onChange}
                                    value={field.value}
                                >
                                    <TransactionTypeButton
                                        variant="income"
                                        value="income"
                                    >
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton
                                        variant="outcome"
                                        value="outcome"
                                    >
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            );
                        }}
                    />

                    <button type="submit" disabled={isSubmitting}>
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    );
}
