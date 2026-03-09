import { Typography } from "@shared/ui/typography";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
    className?: string
}

export const Ui = ({ className }: Props) => {
    return (
        <div className={clsx(styles.card, className)}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <Typography 
                        tag="p" 
                        variant="h6"
                        className={styles.title}
                    >Budget for October</Typography>
                    <Typography
                        tag="p"
                        variant="h6"
                        className={styles.subtitle}
                    >Cash Available</Typography>
                </div>
                <Typography 
                    tag="div" 
                    variant="h3"
                    className={styles.budget}
                >$2,478</Typography>
            </div>
        </div>
    )
}