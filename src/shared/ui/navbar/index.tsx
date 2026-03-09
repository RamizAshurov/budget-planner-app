import type { FC, SVGProps } from "react";
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
import { Calendar, Home, Plus, User, Wallet2 } from "@shared/icons";
import clsx from "clsx";
import { RouterPaths } from "@app/router-paths";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <svg className={styles.curve} viewBox="0 0 375 84" preserveAspectRatio="none" fill="none">
                <path d="M248.88 0C296.439 4.4637e-06 355.078 0.33666 375 0.459961V84H0V0.452148C20.5762 0.323657 76.8503 9.09977e-06 121.48 0C151.12 0.000379258 159.96 36.2148 187 36.2148C214.04 36.2148 220.8 0.000102336 248.88 0Z" fill="white"/>
            </svg>
            <div className={styles.innerWrapper}>
                <ul className={styles.menu}>
                    {leftMenu.map((item, idx) => <MenuItem key={idx} {...item} />)}
                </ul>
                <button className={styles.button} type="button">
                    <Plus width={30} height={30} />
                </button>
                <ul className={styles.menu}>
                    {rightMenu.map((item, idx) => <MenuItem key={idx} {...item} />)}
                </ul>
            </div>
        </nav>
    )
}

interface MenuItemProps {
    path?: string
    icon: FC<SVGProps<SVGSVGElement>>
}

const MenuItem = ({ path, icon: Icon }: MenuItemProps) => {
    const icon = <Icon className={styles.menuIcon} width={24} height={24} />
    return (
        <li className={styles.menuItem}>
            {path ? <NavLink to={path} className={({ isActive }) => clsx(styles.menuLink, isActive && styles.active)}>{icon}</NavLink> : icon}
        </li>
    )
}
const leftMenu: {
    path?: string
    icon: FC<SVGProps<SVGSVGElement>>
}[] = [
    { path: RouterPaths.main, icon: Home },
    { icon: Calendar }
]

const rightMenu: {
    path?: string
    icon: FC<SVGProps<SVGSVGElement>>
}[] = [
    { path: RouterPaths.spending, icon: Wallet2 },
    { path: RouterPaths.plan, icon: User }
]