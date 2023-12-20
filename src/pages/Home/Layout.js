import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LoginImageDesktop from './assets/moptro logo@2x.png';
import LoginImageMobile from './assets/moptro logo.png';
import ProfileImageDesktop from './assets/Group 46@2x.png';
import ProfileImageMobile from './assets/Group 46.png';
import './Layout.css';

const Layout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const loginImageSrc = isMobile ? LoginImageMobile : LoginImageDesktop;
  const profileImageSrc = isMobile ? ProfileImageMobile : ProfileImageDesktop;

  return (
    <div className="body-container">
      <div className="profile-container">
        <div>
          <img src={profileImageSrc} alt="Profile Icon" className="profile-icon m-3" />
        </div>
      </div>
      <Container className="mt-2">
        <Row className="justify-content-center m-3">
          <Col xs={12} sm={8} md={6} className="text-center">
            <div className="logo-container">
              <img src={loginImageSrc} alt="Logo" className="logo-image" />
            </div>
          </Col>
        </Row>
      </Container>
      {children}
    </div>
  );
};

export default Layout;
