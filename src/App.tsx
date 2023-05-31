import React, {useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import tempLogo from './img/000donut.jpg';
import SearchBar from './SearchBar';

function App() {
    // useEffect(() => {
    //     axios.get('/api/getSnackListAll')
    //         .then(res => console.log(res))
    //         .catch()
    // })

  return (
    <Container className="App">
        <Navbar bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src={tempLogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    이과장
                </Navbar.Brand>
            </Container>
        </Navbar>
        <SearchBar/>
    </Container>
  );
}

export default App;
