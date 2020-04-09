import React from 'react';
import Navbar from './Navbar';
import Masthead from './Masthead';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function Layout () {

    return (
        <>
        <Navbar/>
        <Masthead /> 
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>

      
                   
       
        </>
    )
}

export default Layout;