import { Typography } from "@shared/ui/typography"
import styles from "./styles.module.scss"
import type { FC, SVGProps } from "react"
import clsx from "clsx"

interface Props {
    balance: string
    type: "income" | "expense"
    icon:  FC<SVGProps<SVGSVGElement>>
}

export const Card = ({ balance, type, icon: Icon }: Props) => {
    return (
        <article className={clsx(styles.card, type === "income" ? styles.green : styles.violet)}>
            <div className={styles.icon}>
                <Icon width={20} height={20}/>
            </div>
            <Typography tag="h4" variant="h5" className={styles.title}>{balance}</Typography>
            <Typography tag="p" variant="h6" className={styles.subtitle}>{type}</Typography>
        </article>
    )
}