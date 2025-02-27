// src/components/Landing/Landing.js
import React from 'react';
import styled from 'styled-components';
import LandingPage1 from '../components/Landing/LandingPage1.jsx';
import LandingPage2 from '../components/Landing/LandingPage2.jsx';
import LandingPage3 from '../components/Landing/LandingPage3.jsx';
import LandingPage4 from '../components/Landing/LandingPage4.jsx';
import LandingPage5 from '../components/Landing/LandingPage5.jsx';
import Theme from '../styles/Theme.js';

const Landing = () => {
  return (
    <LandingContainer>
      <LandingPageWrapper style={{ marginBottom: '-20px', zIndex: 1 }}>
        <LandingPage1 />
      </LandingPageWrapper>
      <LandingPageWrapper style={{ marginBottom: '-20px', zIndex: 3 }}>
        <LandingPage2 />
      </LandingPageWrapper>
      <LandingPageWrapper style={{ marginBottom: '-20px', zIndex: 1 }}>
        <LandingPage3 />
      </LandingPageWrapper>
      <LandingPageWrapper style={{ marginBottom: '-20px', zIndex: 3 }}>
        <LandingPage4 />
      </LandingPageWrapper>
      <LandingPageWrapper style={{ marginBottom: '-20px', zIndex: 1 }}>
        <LandingPage5 />
      </LandingPageWrapper>
    </LandingContainer>
  );
};

export default Landing;

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 900px;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
`;

const LandingPageWrapper = styled.div`
  width: 100%;
  position: relative;
`;
