import type { PropsWithChildren } from "react";
import styles from "./styles.module.scss";

export const AppContainer = ({ children }: PropsWithChildren) => {
    return <div className={styles.root}>{ children }</div>
}