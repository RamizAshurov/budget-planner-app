import { ArrowBack } from "@shared/icons"
import { Header } from "@shared/ui/header"
import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { RouterPaths } from "@app/router-paths"
import { Cover } from "@widgets/cover"
import { Plan } from "@widgets/plan"
import { AppContainer } from "@shared/ui/app-container"

export const Page = () => {
    return (
        <div className={styles.page}>
            <AppContainer>
                <Header
                    title=""
                    start={
                        <Link to={RouterPaths.main}>
                            <ArrowBack width={24} height={24} />
                        </Link>
                    }
                    className={styles.header}
                />
                <Cover />
                <Plan />
            </AppContainer>
        </div>
    )
}