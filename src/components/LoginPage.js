import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 375px;
  height: 812px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Rubik', sans-serif;
  background: white;
  position: relative;
  overflow: hidden;
  transform: ${props => `scale(${props.zoom})`};
  transform-origin: top left;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #6C25FF;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  box-sizing: border-box;
  
  &::placeholder {
    color: #aaa;
  }
  
  &:focus {
    outline: none;
    border-color: #6C25FF;
  }
`;

const LoginButton = styled.button`
  background: #6C25FF;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 500;
  padding: 12px 20px;
  width: 100%;
  cursor: pointer;
  margin: 15px 0;
  
  &:hover {
    background: #5a1ad9;
  }
`;

const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 12px;
  color: #999;
`;

const ZoomControls = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 5px;
  z-index: 10;
`;

const ZoomButton = styled.button`
  padding: 5px 10px;
  background: #6C25FF;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
  
  &:hover {
    background: #5a1ad9;
  }
`;

const LoginPage = () => {
  const [zoom, setZoom] = React.useState(1);

  return (
    <Container zoom={zoom}>
      <ZoomControls>
        <ZoomButton onClick={() => setZoom(prev => Math.min(prev + 0.1, 1.5))}>+</ZoomButton>
        <ZoomButton onClick={() => setZoom(prev => Math.max(prev - 0.1, 0.7))}>-</ZoomButton>
      </ZoomControls>
      
      <Title>Signin to your PopX account</Title>
      <Subtitle>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Subtitle>
      
      <FormGroup>
        <Label>Email Address</Label>
        <Input type="email" placeholder="Enter Email Address" />
      </FormGroup>
      
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Enter Password" />
      </FormGroup>
      
      <LoginButton>Login</LoginButton>
      
      <Footer>Made with Adobe XD</Footer>
    </Container>
  );
};

export default LoginPage;
