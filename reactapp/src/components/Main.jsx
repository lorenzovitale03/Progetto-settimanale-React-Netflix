import React from 'react';
import { Container, Row, Col, Dropdown, Button,Carousel } from 'react-bootstrap';
import Library from '../components/Library';



const Main = () => {
  return (
    <main>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 text-white">TV Shows</h2>
          <Dropdown className="ml-4 mt-1">
            <Button
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              style={{ backgroundColor: '#221f1f' }}
            >
              Genres &nbsp;
            </Button>
            <Dropdown.Menu className="bg-dark">
              <Dropdown.Item className="text-white bg-dark" href="#">
                Comedy
              </Dropdown.Item>
              <Dropdown.Item className="text-white bg-dark" href="#">
                Drama
              </Dropdown.Item>
              <Dropdown.Item className="text-white bg-dark" href="#">
                Thriller
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>

      <h4 className="text-white">Trending Now</h4>
      <Container fluid>
                <Row>
                    <Col className="px-0">
                        <div>
                            <Carousel.Item className="d-flex align-items-center justify-content-between h-25">
                                <Library saga="avengers"/>
                            </Carousel.Item>
                            </div>
                    </Col>
                </Row>
            </Container>

      <h4 className="text-white">Watch it Again</h4>
      <Container fluid>
                <Row>
                    <Col className="px-0">
                        <div>
                            <Carousel.Item className="d-flex align-items-center justify-content-between h-25">
                                <Library saga="sword art online"/>
                            </Carousel.Item>
                            </div>
                    </Col>
                </Row>
            </Container>

      <h4 className="text-white">New Releases</h4>
      <Container fluid>
                <Row>
                    <Col className="px-0">
                        <div>
                            <Carousel.Item className="d-flex align-items-center justify-content-between h-25">
                                <Library saga="fast"/>
                            </Carousel.Item>
                            </div>
                    </Col>
                </Row>
            </Container>
    </main>
  );
};

export default Main;