import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

const Blogs = () => {
    return(
      <div>
        
     <Container  className="Option" >
     <ul>
      <li>
        <Link className="option1" to="/blogs/Profile">Profile</Link>
      </li>
      <li>
        <Link className="option1" to="/blogs/Account">Account</Link>
      </li>
      </ul>
     </Container>
      <Outlet />
      </div>
    )
    
  };
  
  export default Blogs;