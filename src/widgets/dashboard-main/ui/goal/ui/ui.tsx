import { Paper } from "@shared/ui/paper"
import { Typography } from "@shared/ui/typography"
import styles from "./styles.module.scss"
import { MoneyBag } from "@shared/icons"

export const Ui = () => {
    return (
        <Paper>
            <div className={styles.content}>
                <div className={styles.text}>
                    <Typography tag="h3" variant="h5" className={styles.title}>Create a Saving goal</Typography>
                    <Typography tag="p" variant="h6" className={styles.subtile}>Lorem ipsum dolor sit amet, consectetur adipisci.</Typography>
                </div>
                <div className={styles.icon}>
                    <MoneyBag width={32} height={32} />
                </div>
            </div>
        </Paper>

    )
}