import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" >
        {/* <CgCPlusPlus /> */}
        <p style={{fontSize:"1rem",}}>Active Directory Management</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiJavascript1 /> */}
        <p style={{fontSize:"1rem",}}>Group Policy Management</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <TbBrandGolang /> */}
        <p style={{fontSize:"1rem",}}>LDAP and Directory Services</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiNodejs /> */}
        <p style={{fontSize:"1rem",}}>Security and Authentication</p>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiReact /> */}
        <p style={{fontSize:"1rem",}}>DNS and DHCP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <SiSolidity /> */}
        <p style={{fontSize:"1rem",}}>Troubleshooting and Monitoring</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* <DiMongodb /> */}
        <p style={{fontSize:"1rem",}}>Upgrades and Migrations</p>

      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}
    </Row>
  );
}

export default Techstack;
