import type { ReactNode } from 'react'
import { Typography } from '../typography'
import styles from './styles.module.scss'
import clsx from 'clsx'

interface Props {
    className?: string
    title: string
    start?: ReactNode,
    end?: ReactNode
}

export const Header = ({ className, title, start, end }: Props) => {
    return (
        <header className={clsx(styles.header, className)}>
            {start}
            <Typography tag='h1' className={styles.title}>{title}</Typography>
            {end}
        </header>
    )
}