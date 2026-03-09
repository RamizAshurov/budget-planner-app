import { Header } from "@shared/ui/header"
import { Grid } from "@shared/icons"
import { DashboardMain } from "@widgets/dashboard-main"
import { Cash } from "@widgets/cash"

import styles from "./styles.module.scss"
import { Navbar } from "@shared/ui/navbar"
import { AppContainer } from "@shared/ui/app-container"

export const Page = () => {
    return (
        <div className={styles.page}>
            <AppContainer>
                <Header 
                    title="Dashboard"
                    start={<Grid width={24} height={24}/>}
                />
                <DashboardMain />
                <Cash />
                <Navbar />
            </AppContainer>
        </div>
    )
}