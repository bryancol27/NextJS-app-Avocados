import Navbar from "@components/Navbar";

const Layout = ({ children }) => {

    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
};

export { Layout}