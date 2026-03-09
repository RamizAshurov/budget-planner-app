import { Container } from "@shared/ui/container"
import { BankCard } from "./bank-card"
import { BudgetCard } from "./budget-card"
import { Goal } from "./goal"
import styles from "./styles.module.scss";

export const Main = () => {
    return (
        <Container className={styles.container}>
            <BankCard className={styles.bankCard} />
            <BudgetCard className={styles.budgetCard} />
            <Goal />
        </Container>
    )
}