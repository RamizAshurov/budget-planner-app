import { Typography } from "@shared/ui/typography"
import styles from "./styles.module.scss"
import visaImgSrc from "@public/visa.png";
import clsx from "clsx";

interface Props {
    className?: string
}

export const Ui = ({ className }: Props) => {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.content}>
                <Typography className={styles.title}>Available balance</Typography>
                <Typography className={styles.balance} variant="h2">$3,578</Typography>
                <Typography className={styles.more} variant="h6">See details</Typography>
            </div>
            <img src={visaImgSrc} className={styles.visa} alt="visa"/>
        </div>
    )
}