import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import GlobalStyle from './styles/globalStyles';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import AccountSettingsPage from './components/AccountSettingsPage';
import Navigation from './components/Navigation';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px 0;
  background: #f0f0f0;
`;

const MobileFrame = styled.div`
  width: 375px;
  margin: 20px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  overflow: hidden;
  position: relative;
`;

const ZoomControls = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  gap: 5px;
  z-index: 100;
`;

const ZoomButton = styled.button`
  padding: 5px 10px;
  background: #6C25FF;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    background: #5a1ad9;
  }
`;

function App() {
  const [zoom, setZoom] = React.useState(1);

  return (
    <Router>
      <GlobalStyle />
      <ZoomControls>
        <ZoomButton onClick={() => setZoom(zoom + 0.1)}>Zoom In (+)</ZoomButton>
        <ZoomButton onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>Zoom Out (-)</ZoomButton>
      </ZoomControls>
      
      <AppContainer>
        <MobileFrame style={{ transform: `scale(${zoom})`, transformOrigin: 'top center' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-account" element={<CreateAccountPage />} />
            <Route path="/account-settings" element={<AccountSettingsPage />} />
          </Routes>
        </MobileFrame>
        <Navigation />
      </AppContainer>
    </Router>
  );
}

export default App;