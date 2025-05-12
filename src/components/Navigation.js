import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 375px;
  margin: 0 auto;
  padding: 10px 0;
  background: #f5f5f5;
`;

const NavButton = styled(Link)`
  text-decoration: none;
  color: #333;
  padding: 8px 16px;
  border-radius: 4px;
  
  &:hover {
    background: #e0e0e0;
  }
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.disabled ? '#ccc' : '#333'};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  
  &:hover {
    background: ${props => props.disabled ? 'transparent' : '#e0e0e0'};
  }
`;
const availableRoutes = [
  '/',
  '/login',
  '/create-account',
  '/account-settings'
];

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

    const currentIndex = availableRoutes.indexOf(location.pathname);

    const canGoBack = currentIndex > 0;
  const canGoForward = currentIndex < availableRoutes.length - 1;
  const goBack = () => {
    if (canGoBack) {
      navigate(availableRoutes[currentIndex - 1]);
    }
  };
  
  const goForward = () => {
    if (canGoForward) {
      navigate(availableRoutes[currentIndex + 1]);
    }
  };

  return (
    <NavContainer>
      <ArrowButton onClick={goBack} disabled={!canGoBack}>
        <FaArrowLeft size={20} />
      </ArrowButton>
      <NavButton to="/"><FaHome size={20} /></NavButton>
      <NavButton to="/login">Login</NavButton>
      <NavButton to="/create-account">Create Account</NavButton>
      <NavButton to="/account-settings">Account Settings</NavButton>
      <ArrowButton onClick={goForward} disabled={!canGoForward}>
        <FaArrowRight size={20} />
      </ArrowButton>
    </NavContainer>
  );
};

export default Navigation;
