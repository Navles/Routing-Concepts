import Container from "react-bootstrap/esm/Container";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Container fluid className="navbar">
      {/* <nav> */}
        <ul>
          <li>
            <Link className="nav" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav" to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link  className="nav" to="/contact">Contact</Link>
          </li>
        </ul>
      {/* </nav> */}
      </Container >

      <Outlet />
    </>
  )
};

export default Layout;