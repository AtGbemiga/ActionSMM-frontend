"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import Logo from "../../../../public/testLogo.jpg";
import styles from "../Navbar/Navbar.module.css";
import { PlansBtn } from "./PlansBtn";
import { HomeBtn } from "./HomeBtn";
import { LoginBtn } from "./LoginBtn";
import { SignUpBtn } from "./SignUpbtn";
import Cookies from "js-cookie";
import { DashboardBtn } from "./DashboardBtn";
import { useEffect, useState } from "react";
import { NavIcon } from "./NavIcon";

function NavMenu(): JSX.Element {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(Cookies.get("token") ?? "");
  }, [token]);

  if (token) {
    return (
      <>
        <Navbar key="md" expand="md" className={`${styles.navbar}`}>
          <Container fluid>
            <Navbar.Brand>
              <NavIcon />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="top" // Change how the navbar slides in on mobile"
              //
              // remove styles and replace with className styling
              style={{ height: "100vh" }}
              // className={styles.off_canvas_navbar}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={50}
                    height={50}
                    priority
                  />{" "}
                  ActionSMM
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`${styles.nav_section_container}`}>
                  <div>
                    <HomeBtn />
                  </div>
                  <div>
                    <PlansBtn />
                  </div>
                  <div>
                    <DashboardBtn />
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
    );
  }
  return (
    <>
      <Navbar key="md" expand="md" className={`${styles.navbar}`}>
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={Logo} alt="Logo" width={50} height={50} priority />{" "}
            <span className="text-white">ActionSMM</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="top" // Change how the navbar slides in on mobile"
            //
            // remove styles and replace with className styling
            style={{ height: "100vh" }}
            // className={styles.off_canvas_navbar}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Image src={Logo} alt="Logo" width={50} height={50} priority />{" "}
                ActionSMM
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className={`${styles.nav_section_container}`}>
                <div>
                  <HomeBtn />
                </div>
                <div>
                  <PlansBtn />
                </div>
                <div>
                  <LoginBtn />
                </div>
                <div>
                  <SignUpBtn />
                </div>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
