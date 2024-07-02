import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import logoImg from "../../assets/logo.svg";
import { NewTransactionModel } from "../NewTransactionModel";

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="" />
                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>
                            Nova Transação
                        </NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModel />
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    );
}
