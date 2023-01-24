import Database from "../components/Database";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Databasetypes from "../components/Databasetypes";

const db = () => {
    return (
        <div>
            <Navbar />
            <Database />
            <Databasetypes />
            <Footer />
        </div>
    );
};

export default db;