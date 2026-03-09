import { Container } from "@shared/ui/container";
import styles from "./styles.module.scss";
import { Typography } from "@shared/ui/typography";
import { PlanCard } from "./plan-card";

export const Main = () => {
    return (
        <section className={styles.section}>
            <Container>
                <Typography
                    tag="h1"
                    className={styles.title}
                >
                    Upgrade plan
                </Typography>
                <PlanCard />
                <div className={styles.recommended}>
                    <Typography
                        className={styles.recommendedTitle}
                        tag="div"
                        variant="h6"
                    >
                        Recommended
                    </Typography>
                    <PlanCard theme="dark" />
                </div>
            </Container>
        </section>
    )
}