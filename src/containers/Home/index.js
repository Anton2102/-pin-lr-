import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';

const Home = () => {
    return(
    <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="/">Главная</Navbar.Brand>
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Nav.ItemLink href="#" active>1 лаб</Nav.ItemLink>
            <Nav.ItemLink href="#">2 лаб</Nav.ItemLink>
            <Nav.ItemLink href="#">3 лаб</Nav.ItemLink>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Что-то ещё</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Another</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Another</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
    );
}

export default Home