import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const ComicNav = (props) => {
    const showNewForm = () => {
        props.setNewForm(!props.showNewForm)
        props.setComics(false)
    }
    const showCollection = () => {
        props.setNewForm(false)
        props.setComics(true)

    }


    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Comic World</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" onClick={showCollection}>Collections</Nav.Link>
                        <Nav.Link href="#link" onClick={showNewForm}>Add New Comic</Nav.Link>
                        <Nav.Link href="#link" onClick={showNewForm}>Cart: {props.cart}</Nav.Link>

                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default ComicNav;