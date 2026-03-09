import { Typography } from "@shared/ui/typography";
import styles from "./style.module.scss";
import type { FC, SVGProps } from "react";
import { Bank, Wallet } from "@shared/icons";
import { Container } from "@shared/ui/container";
import { Card } from "./card";

export const Main = () => {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <Container>
                    <Typography tag="h4" variant="h4" className={styles.title}>Cash</Typography>
                </Container>
            </div>
            <div className={styles.body}>
                <Container>
                    <div className={styles.stack}>
                        {cards.map((card, idx) => <Card key={idx} {...card} />)}
                    </div>
                </Container>
            </div>
        </section>
    )
}

interface ICard {
    balance: string
    type: "income" | "expense"
    icon: FC<SVGProps<SVGSVGElement>>
}

const cards: ICard[] = [
    {
        balance: "$1,800.00",
        type: "income",
        icon: Bank
    },
    {
        balance: "$1,800.00",
        type: "expense",
        icon: Wallet
    }
]