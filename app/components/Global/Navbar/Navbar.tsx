"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "../Navbar/Navbar.module.css";
import { PlansBtn } from "./PlansBtn";
import { HomeBtn } from "./HomeBtn";
import { LoginBtn } from "./LoginBtn";
import { SignUpBtn } from "./SignUpbtn";
import Cookies from "js-cookie";
import { DashboardBtn } from "./DashboardBtn";
import { useEffect, useState } from "react";
import { NavIcon } from "./NavIcon";
import DropDownBtn from "./DropDown";

function NavMenu(): JSX.Element | null {
  const [token, setToken] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // const token = Cookies.get("token");
    setToken(Cookies.get("token") ?? "");
    // Enable the Navbar component only on the client-side
    setMounted(true);
    console.log("Navbar is mounted");
  }, [token]);

  if (!mounted) {
    console.log("Navbar is not mounted");
    return null;
  }

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
                  <NavIcon />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className={`${styles.nav_section_container}`}>
                  <section>
                    <div>
                      <HomeBtn />
                    </div>
                    <div>
                      <PlansBtn />
                    </div>
                  </section>
                  <section>
                    <div>
                      <DashboardBtn />
                    </div>
                    <div>
                      <DropDownBtn />
                    </div>
                  </section>
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
                <NavIcon />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className={styles.off_canvas_body}>
              <Nav className={`${styles.nav_section_container}`}>
                <section>
                  <div>
                    <HomeBtn />
                  </div>
                  <div>
                    <PlansBtn />
                  </div>
                </section>
                <section>
                  <div>
                    <LoginBtn />
                  </div>
                  <div>
                    <SignUpBtn />
                  </div>
                </section>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
