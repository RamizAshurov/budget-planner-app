import { Typography } from "@shared/ui/typography"
import styles from "./styles.module.scss"
import { Bus, Coffee, Store } from "@shared/icons"
import type { FC, SVGProps } from "react"
import { ExpenseCard } from "../expense-card"
import { Container } from "@shared/ui/container"

export const YourBudget = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Container>
                    <Typography
                        className={styles.title}
                        tag="h4"
                        variant="h4"
                    >
                        Your Budget
                    </Typography>
                </Container>
            </div>
            <div className={styles.body}>
                <Container>
                    <ul className={styles.expenses}>
                        {expenses.map((expense) => (
                            <li key={expense.title}>
                                <ExpenseCard {...expense} />
                            </li>
                        ))}
                    </ul>
                </Container>
            </div>
        </section>
    )
}

const expenses: {
    color: 'blue' | 'violet' | 'green'
    icon: FC<SVGProps<SVGSVGElement>>
    title: string
    date: string
    sum: string
    paymentType: string
}[] = [
    { color: 'blue', icon: Store, title: 'Shopping', date: '10 jan 2022', sum: '$544', paymentType: 'in cash' },
    { color: 'violet', icon: Coffee, title: 'Restaurant', date: '11 jan 2022', sum: '$54,417.80 ', paymentType: 'card' },
    { color: 'green', icon: Bus, title: 'Transport', date: '12 jan 2022', sum: '$54.00 ', paymentType: 'online' },

]