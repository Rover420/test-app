'use client'
import Navbar from './navbar/navbar'
import PingComponent from './ping'
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";


const variants = {
  out: {
      opacity: 0,
  },
  in: {
      opacity: 1,
      delay: .3
  }
};


const Layout = ({ children }) => {

  const pathname = usePathname();

  return (
    <>
      <Navbar />
        <AnimatePresence initial={false} mode="wait" onExitComplete={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth'})}>
          <motion.div key={pathname} variants={variants} initial={'out'} animate={'in'} exit={'out'}>
            <AnimatePresence initial={true} mode="sync">
              <main id='main'>
                {children}
              </main>
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      <PingComponent />
    </>
  )
}

export default Layout