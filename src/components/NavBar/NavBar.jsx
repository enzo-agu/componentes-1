import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
// 👆 COMPONENTES DE BT

export const Texto1 = () => {
    return <h1> Texto1 </h1>
}

export const Texto2 = () => {
    return <h1> Texto2 </h1>
}

// 👆 COMPONENTES QUE RETORNAN UN VALOR, SON EXPORTADOS, PERO NO POR DEFECTO.

// 👇 SOLO UN COMPONENTE POR DEFECTO SE PUEDE EXPORTAR

function NavBar({ texto, numero, valor, sumar, children }) {
    // 👆 RECIBO LAS PROPS EN DESESTRUCTURACION
    // console.log(children.props)
    // console.log(numero, valor,sumar)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <CartWidget>
                {/* <h1 className='soyTexto'>
                    {texto}
                </h1> */}

                {/* <Texto1 />
                <Texto2 /> */}

                {/* 👆 CHILDREN QUE SE ENVÍAN AL COMP. CARTWIDGET  */}
            </CartWidget>



            {/* {children} */}

            {/*👆 CHILDREN QUE RECIBE NAVBAR */}
        </Navbar>
    );
}

export default NavBar;