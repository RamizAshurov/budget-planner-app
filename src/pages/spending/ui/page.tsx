import { ArrowBack, More } from "@shared/icons"
import { Header } from "@shared/ui/header"
import { Budget } from "@widgets/budget"
import { Chart } from "@widgets/chart"
import { Link } from "react-router-dom"

import styles from "./styles.module.scss";
import { RouterPaths } from "@app/router-paths"
import { AppContainer } from "@shared/ui/app-container"

export const Page = () => {
    return (
        <div className={styles.page}>
            <AppContainer>
                <Header
                    title="My spending"
                    start={
                        <Link to={RouterPaths.main}>
                            <ArrowBack width={24} height={24}/>
                        </Link>
                    }
                    end={<More width={24} height={24}/>}
                />
                <Chart className={styles.chart}/>
                <Budget />
            </AppContainer>
        </div>

    )
}