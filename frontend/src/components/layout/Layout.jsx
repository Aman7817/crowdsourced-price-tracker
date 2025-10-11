import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => { // ✅ Change 'Children' to 'children' (small c)
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">   
                {children} {/* ✅ Change 'Children' to 'children' */}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;