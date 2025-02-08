import React from 'react';
import Footer from './footer';
import AppNavBar from './appNavBar';
import { Toaster } from 'react-hot-toast';

const Layout = ({children}) => {
    return (
        <>
            <AppNavBar/>
                {children}
                <Toaster position="bottom-center" reverseOrder={false} />
            <Footer/>
        </>
    );
};

export default Layout;