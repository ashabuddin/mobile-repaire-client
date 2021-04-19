
import React from 'react';
import FixDevice from '../FixDevice/FixDevice';
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
           <FixDevice/>
           <br/>
           <br/>
           <Footer/>
        </div>
    );
};

export default Header;