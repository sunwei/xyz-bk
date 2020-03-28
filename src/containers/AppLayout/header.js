import React, { Component } from 'react';

import { Navbar, Nav, NavDropdown} from 'react-bootstrap';

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">sunwei.xyz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/business-domain">业务领域</Nav.Link>
            <Nav.Link href="/team">团队</Nav.Link>
            <Nav.Link href="/tech">技术</Nav.Link>
            <NavDropdown href="/tool" title="工具" id="basic-nav-dropdown">
              <NavDropdown.Item href="/ddd/concept">DDD概念</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/ddd/projects">DDD项目</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/timely">时机</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/services">服务</Nav.Link>
            <Nav.Link href="/projects">开源项目</Nav.Link>
            <Nav.Link href="/about">关于</Nav.Link>
            <Nav.Link href="/contact">联系我</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
