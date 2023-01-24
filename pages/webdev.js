import Navbar from "../components/Navbar";
import Web from "../components/Web";
import Webtypes from "../components/Webtypes";
import Footer from "../components/Footer";


const web = () => {
    return (
        <div>
            <Navbar />
            <Web />
            <Webtypes />
            <Footer />
        </div>
    );
};

export default web;