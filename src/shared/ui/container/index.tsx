import type { PropsWithChildren } from "react";
import styles from './styles.module.scss'
import clsx from "clsx";

interface Props extends PropsWithChildren {
    className?: string
}

export const Container = ({ className, children }: Props) => {
    return (
        <div className={clsx(styles.container, className)}>{ children }</div>
    )
}