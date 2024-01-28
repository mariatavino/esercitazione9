import { Navbar, Nav, Button, FormControl} from 'react-bootstrap';
import search from './search';
import logo from '../assets/Spotify_Logo.png'
import { BsFillHouseDoorFill, BsCollectionFill } from "react-icons/bs";

function Sidebar(){
    return (
<div className="col-2">
<Navbar id="sidebar">
  <div className="nav-container">
    <Navbar.Brand>
      <img src={logo} alt="Spotify_Logo" width="131" height="40" id='logo' />
    </Navbar.Brand>
    <Navbar.Collapse id="navbarNavAltMarkup">
      <Nav className="navbar-nav">
        <ul>
          <li>
            <Nav.Link className='links'>
              <BsFillHouseDoorFill/>&nbsp; Home
            </Nav.Link>
          </li>
          <li>
            <Nav.Link className='links'>
              <BsCollectionFill/>&nbsp; Your Library
            </Nav.Link>
          </li>
          <li>
            <div className="input-group mt-3">
              <FormControl
                type="text"
                className="form-control mb-2"
                id="searchField"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append" style={{ marginBottom: '4%' }}>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  type="button"
                  id="button-addon1"
                  onClick={search}
                >
                  GO
                </Button>
              </div>
            </div>
          </li>
        </ul>
      </Nav>
    </Navbar.Collapse>
  </div>
  <div className="nav-btn">
    <Button className="signup-btn" type="button">
      Sign Up
    </Button>
    <Button className="login-btn" type="button">
      Login
    </Button>
    <div>
    <a href="#">Cookie Policy</a>
    <a href="#"> Privacy</a>
    </div>
  </div>
</Navbar>
</div>
); }

export default Sidebar;