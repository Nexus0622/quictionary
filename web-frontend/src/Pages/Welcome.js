import React, {useState} from "react";
import { Container, Row, Col, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

export default function Welcome()
{
    const [logVis, setLogVis] = useState(false);
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [regVis, setRegVis] = useState(false);
    const [newUser, setNewUser] = useState("");
    const [email, setEmail] = useState("");
    const [desPass, setDesPass] = useState("");
    const [confirm, setConfirm] = useState("");

    function openLogin()
    {
        setLogVis(true);
        console.log("This is working");
    }

    function openRegister()
    {
        setRegVis(true);
        console.log("This is also working");
        console.log(regVis);
    }

    function closeReg()
    {
        setRegVis(false);
        setNewUser("");
        setEmail("");
        setDesPass("");
        setConfirm("");
    }
    function closeLog()
    {
        setLogVis(false);
        setUser("");
        setPass("");
    }

    function logUser(e)
    {
        e.preventDefault();
        console.log(user);
        console.log(pass);
    }

    function registerUser(e)
    {
        console.log("This is working 2.0");
        e.preventDefault();
        console.log(newUser);
        console.log(email);
        console.log(desPass);
        console.log(confirm);
    }

    return(
        <Container fluid style={{borderColor:"black", borderStyle:"solid", borderWidth:"3px", padding:0, height:"100vh"}}>
            <Row style={{height:"10vh", borderColor:"black", borderStyle:"solid", borderWidth:"3px", minHeight:"50px", backgroundColor:"#992D24",}}>
                <Col md={6}style={{borderColor:"blue", borderStyle:"solid", borderWidth:"3px",padding:0}}>
                    <Button onClick={openLogin} style={{marginLeft:"5%"}}>
                        Testing Login
                    </Button>
                    <Button onClick={openRegister} style={{marginLeft:"20px"}}>
                        Testing Register
                    </Button>
                </Col>
            </Row>
            <Modal size="lg" show={logVis} onHide={closeLog}>
                <Modal.Body>
                    <div style={{flexDirection:"row"}}>
                        <form>
                            <input type="text" placeholder="Username"  onChange={(e) => setUser(e.target.value)}/>
                            <br/>
                            <input type="text" placeholder="Password"  onChange={(e) => setPass(e.target.value)}/>
                        </form>
                        <Button onClick={logUser}>
                            Log in
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal size="lg" show={regVis} onHide={closeReg}>
                <Modal.Body>
                    <div>
                        <form>
                            <input type="text" placeholder="Desired Username"  onChange={(e) => setNewUser(e.target.value)}/>
                            <input type="text" placeholder="Email"  onChange={(e) => setEmail(e.target.value)}/>
                            <input type="text" placeholder="Password"  onChange={(e) => setDesPass(e.target.value)}/>
                            <input type="text" placeholder="Confirm Password"  onChange={(e) => setConfirm(e.target.value)}/>
                        </form>
                        <Button onClick={registerUser}>
                            Register
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

const Button = styled.button`
  font-size: 0.8rem;
  background: #779CAB;
  border: none;
  padding: 0.8rem 1.1rem;
  color: #000;
  border-radius: .3rem;
  transition: all 0.3s ease-in-out;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    background: #2b2d42;
    color: white;
  }`