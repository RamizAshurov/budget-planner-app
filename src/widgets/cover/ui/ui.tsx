import { Container } from "@shared/ui/container"
import styles from "./styles.module.scss"
import coverImgSrc  from "@public/plan-cover.png"

export const Ui = () => {
    return (
        <section className={styles.section}>
            <Container>
                <figure className={styles.imageContainer}>
                    <img className={styles.image} src={coverImgSrc} alt="investment"/> 
                </figure>
            </Container>
        </section>
    )
}