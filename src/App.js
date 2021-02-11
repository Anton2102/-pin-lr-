import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';
import Home from './containers/Home'
import FirstLab from './containers/FirstLab'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar expand="lg" light bg="light">
          <Navbar.Brand href="/">Главная</Navbar.Brand>
          <Collapse navbar id="navbarNav">
            <Navbar.Nav>
              <Nav.ItemLink href="/firstlab" active>1 лаб</Nav.ItemLink>
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
        <Switch>
          <Route path="/firstLab">
            <FirstLab />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}