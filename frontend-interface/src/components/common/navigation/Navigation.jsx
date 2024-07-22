import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Navigation.css";
export default function Navigation() {
  return (
    <>
       <Navbar expand="lg" fixed="top" className="b" style={{ borderRadius: 0, marginTop: '35px' }}>
      <Container className="pt-3 pb-2">
        <Navbar.Brand as={Link} to="/">
          <img src="/images/logo.svg" className="gif-logo img-fluid" alt="Logo" />
          STRATA ONE
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent">
          <span
            className="menu"
            onClick={(e) => {
              e.target.classList.toggle('opened');
              e.target.setAttribute('aria-expanded', e.target.classList.contains('opened'));
            }}
            aria-label="Main Menu"
          >
            <svg width="30" height="30" viewBox="0 0 100 100">
              <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="line line2" d="M 20,50 H 80" />
              <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarSupportedContent">
          <Container>
            <Nav className="mb-2 mb-lg-0">
              <Nav.Item className="ms-lg-auto pe-3 mt-2">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="pe-3 mt-2">
                <Nav.Link as={Link} to="/network">Network</Nav.Link>
              </Nav.Item>
              <Nav.Item className="pe-3 mt-2">
                <Nav.Link as={Link} to="/calculator">Calculator</Nav.Link>
              </Nav.Item>
              <Nav.Item className="pe-3 mt-2">
                <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item className="pe-3 mt-2">
                <Nav.Link href="https://docs.strataone.io">Guide</Nav.Link>
              </Nav.Item>
              
              <Nav.Item>
                <Button
                  as={Link}
                  to="/network"
                  variant="secondary"
                  className="btn-style mt-1 normal-font"
                  style={{ color: '#e7c905', fontWeight: 'normal' }}
                >
                  Stake
                </Button>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
