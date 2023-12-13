import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FileUploadComp from "../components/upload/FileUploadComp";
import YoutubeLinkComp from "../components/upload/YoutubeLinkComp";

const Home = () => {
  const apiUrl = process.env.REACT_APP_MIPP_API_URL + "/classify";
  // 탭 선택
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTabSelect = (key) => {
    setActiveTab(key);
  };

  return (
    <Container className="mt-4">
      <Nav variant="tabs" defaultActiveKey="tab1">
        <Nav.Item>
          <Nav.Link eventKey="tab1" onClick={() => handleTabSelect("tab1")}>
            .wav Upload
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="tab2" onClick={() => handleTabSelect("tab2")}>
            Youtube Link
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Row className="mt-2">
        <Col>
          {activeTab === "tab1" ? (
            <FileUploadComp apiUrl={apiUrl} />
          ) : (
            <YoutubeLinkComp apiUrl={apiUrl} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
