import type { PropsWithChildren } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface Props extends PropsWithChildren {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span'
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
    className?: string
}

export const Typography = ({ 
    tag: Tag = "h2",
    variant = "h5",
    className,
    children
}: Props) => {
    return (
        <Tag className={clsx(variantStyles[variant], className)}>{children}</Tag>
    )
}

const variantStyles: Record<NonNullable<Props['variant']>, string> = {
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  h5: styles.h5,
  h6: styles.h6,
  p: styles.p
}