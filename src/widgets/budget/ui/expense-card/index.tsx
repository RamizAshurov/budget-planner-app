import { Typography } from "@shared/ui/typography";
import styles from "./styles.module.scss";
import type { FC, SVGProps } from "react";
import clsx from "clsx";

interface Props {
    color: 'blue' | 'violet' | 'green'
    icon: FC<SVGProps<SVGSVGElement>>
    title: string
    date: string
    sum: string
    paymentType: string
}

export const ExpenseCard = ({ color, icon: Icon, title, sum, paymentType, date }: Props) => {
    return (
        <article className={styles.card}>
            <div className={clsx(styles.icon, color && styles[color])}>
                <Icon width={32} height={32}/>
            </div>
            <div className={styles.info}>
                <Typography
                    className={styles.title}
                    tag="h5"
                    variant="h5"
                >{title}
                </Typography>
                <Typography
                    className={styles.subtitle}
                    tag="div"
                >
                    {date}
                </Typography>
            </div>
            <div className={styles.info}>
                <Typography
                    className={styles.title}
                    tag="div"
                    variant="h5"
                >
                    {sum}
                </Typography>
                <Typography
                    className={styles.subtitle}
                    tag="div"
                >
                    {paymentType}
                </Typography>
            </div>
        </article>
    )
}