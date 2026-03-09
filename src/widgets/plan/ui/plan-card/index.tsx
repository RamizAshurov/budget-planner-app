import { Typography } from "@shared/ui/typography";
import styles from "./styles.module.scss";
import { ChevronLeft } from "@shared/icons";
import clsx from "clsx";

interface Props {
    theme?: "dark" | "light"
}

export const PlanCard = ({ theme }: Props) => {
    return (
        <div className={clsx(styles.card, theme === "dark" && styles.dark)}>
            <div className={styles.top}>
                <Typography
                    className={styles.title}
                    tag="p"
                    variant="h6"
                >
                    Basic Plan
                </Typography>
                <Typography
                    className={styles.desc}
                    tag="p"
                    variant="h6"
                >
                    Perfect your starters
                </Typography>
            </div>
            <div className={styles.bottom}>
                <div className={styles.tariff}>
                    <Typography 
                        tag="span"
                        className={styles.price}
                    >$40</Typography>
                    <Typography 
                        tag="span"
                        variant="h6"
                        className={styles.term}
                    >/month</Typography>
                </div>
                <button className={styles.button}>
                    <ChevronLeft width={24} height={24}/>
                </button>
            </div>
        </div>
    )
}