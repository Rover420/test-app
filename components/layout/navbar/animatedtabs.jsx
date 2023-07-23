'use client'
import styles from './navbar.module.css';
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";


const AnimatedTabs = () => {
    const pathname = usePathname();

    const locale = pathname.split('/')?.[1];

    let tabs = [
        { id: "home", label: "Homepage", url: `/${locale}` },
        { id: "register", label: "Register", url: `/${locale}/register` },
        { id: "signin", label: "Sign In", url: `/${locale}/signin` },
        { id: "profile", label: "Profile", url: `/${locale}/profile` },
    ];

    return (
        <div className={styles.tabs}>
            {tabs.map((tab) => (
                <Link
                    href={tab.url}
                    key={tab.id}
                    className={pathname === tab.url ? "" : styles.hoverTab}>

                    {pathname === tab.url && (
                        <motion.span layoutId="bubble" className={styles.activeTab}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                    )}

                    {tab.label}
                    
                </Link>
            ))}
        </div>
    )
}

export default AnimatedTabs