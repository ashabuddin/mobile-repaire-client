
import React from 'react';
import Footer from '../Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import MobileRepair from '../MobileRepair/MobileRepair';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';


const Header = () => {
    return (
        <div>
          <Navbar/>
           <HeaderMain/>
           <MobileRepair/>
           <Services/>
           <Testimonials/>
           <Footer/>
        </div>
    );
};

export default Header;