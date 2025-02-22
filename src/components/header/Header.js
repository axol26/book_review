import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookBookmark, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button, Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{"z-index":"10"}}>
        <Container fliud className="">
            <Col xs={4} className="d-flex align-items-center">
                <Navbar.Brand href="/" style={{"color":"gold"}}>
                    <img src="images/logo.png" height="30px" />
                </Navbar.Brand>
                <NavLink className ="nav-link" to="/" style={{"color":"gold"}}>Home</NavLink>
            </Col>
            <Col xs={4} className="d-flex justify-content-center align-items-center">
                <Navbar.Brand href={process.env.REACT_APP_PORTFOLIO} target="_blank" style={{"color":"rgb(124 58 237)"}}>
                    <FontAwesomeIcon icon={faHouse} />
                </Navbar.Brand>
                {/* <Navbar.Brand href={process.env.REACT_APP_GITHUB} target="_blank" style={{"color":"rgb(124 58 237)"}}>
                    <FontAwesomeIcon icon={faGithub} />
                </Navbar.Brand> */}
                <Navbar.Brand href={process.env.REACT_APP_LINKEDIN} target="_blank" style={{"color":"rgb(124 58 237)"}}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </Navbar.Brand>
            </Col>
            <Col xs={4} className="d-flex justify-content-end align-items-center">
                <a href={process.env.REACT_APP_VUE} target="_blank">
                    <Button variant="outline-info" className="me-2">Buy Books</Button>
                </a>
                <a href={process.env.REACT_APP_ASPX} target="_blank">
                    <Button variant="outline-info">Borrow Books</Button>
                </a>
            </Col>
        </Container>
    </Navbar>
  )
}

export default Header
