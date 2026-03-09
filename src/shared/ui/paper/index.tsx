import type { PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

interface Props extends PropsWithChildren {
    className?: string
}

export const Paper = ({ className, children }: Props) => {
    return (
        <div className={clsx(styles.paper, className)}>{children}</div>
    )
}