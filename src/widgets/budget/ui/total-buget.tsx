import { Container } from "@shared/ui/container"
import styles from "./styles.module.scss"
import { Typography } from "@shared/ui/typography"

export const TotalBudget = () => {
    return (
        <div className={styles.section}>
            <Container>
                <div className={styles.innerWrapper}>
                    <div className={styles.content}>
                        <Typography
                            className={styles.title}
                            tag="h4"
                            variant="h6"
                        >Budger for Octorber</Typography>
                        <Typography
                            className={styles.balance}
                            tag="p"
                            variant="h3"
                        >$ 2,478</Typography>
                    </div>
                    <div className={styles.progress}>
                        <span className={styles.progressBar} />
                    </div>
                </div>
            </Container>
        </div>
    )
}