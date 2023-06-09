"use client"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GetSprites from '../utils/getSprites'

function ContainerFluidExample() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <GetSprites />
                </Col>
            </Row>
        </Container>
    );
}

export default ContainerFluidExample;