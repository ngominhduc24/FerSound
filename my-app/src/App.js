import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import PlayMusic from './PlayMusic';
function App() {
  return (
    <div>
      <Container>
        <BrowserRouter>
          <Row>
            <Col md={12}>
            </Col>
            <Col>
              <Routes>
                <Route path='/play' element={<PlayMusic />}></Route>
              </Routes>
            </Col>
          </Row>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
