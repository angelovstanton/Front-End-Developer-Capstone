import Topbar from "../Topbar/Topbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => (
  <>
    <Topbar />
    <main data-testid="main-content">{children}</main>
    <Footer />
  </>
);

export default Layout;
