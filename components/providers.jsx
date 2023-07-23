'use client'

import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
        />
    </ThemeProvider>
  )
}

export default Providers