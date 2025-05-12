import React, { useState } from 'react';
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
  overflow-y: auto;
  transform: ${props => `scale(${props.zoom})`};
  transform-origin: top left;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: #333;
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
    color: #333;
  }
  
  &:focus {
    outline: none;
    border-color: #6C25FF;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  margin: 25px 0;
  background: #6C25FF;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #5a1ad9;
  }
`;

const RadioGroupLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #6C25FF;
  margin-bottom: 12px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 10px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const RadioButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${props => props.checked ? '#6C25FF' : '#ddd'};
  margin-right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #6C25FF;
    display: ${props => props.checked ? 'block' : 'none'};
  }
`;

const RadioLabel = styled.span`
  font-size: 16px;
  color: #333;
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

const CreateAccountPage = () => {
  const [zoom, setZoom] = useState(1);
  const [isAgency, setIsAgency] = useState(false);

  return (
    <Container zoom={zoom}>
      <ZoomControls>
        <ZoomButton onClick={() => setZoom(prev => Math.min(prev + 0.1, 1.5))}>+</ZoomButton>
        <ZoomButton onClick={() => setZoom(prev => Math.max(prev - 0.1, 0.7))}>-</ZoomButton>
      </ZoomControls>
      
      <Title>Create your PopX account</Title>
      
      <FormGroup>
        <Label>Full Name *</Label>
        <Input type="text" defaultValue="Marry Doe" />
      </FormGroup>
      
      <FormGroup>
        <Label>Phone Number *</Label>
        <Input type="tel" defaultValue="Marry Doe" />
      </FormGroup>
      
      <FormGroup>
        <Label>Email Address *</Label>
        <Input type="email" defaultValue="Marry Doe" />
      </FormGroup>
      
      <FormGroup>
        <Label>Password *</Label>
        <Input type="password" defaultValue="Marry Doe" />
      </FormGroup>
      
      <FormGroup>
        <Label>Company Name</Label>
        <Input type="text" defaultValue="Marry Doe" />
      </FormGroup>
      
      <FormGroup>
        <RadioGroupLabel>Are you an Agency? *</RadioGroupLabel>
        <RadioGroup>
          <RadioOption onClick={() => setIsAgency(true)}>
            <RadioButton checked={isAgency} />
            <RadioLabel>Yes</RadioLabel>
          </RadioOption>
          <RadioOption onClick={() => setIsAgency(false)}>
            <RadioButton checked={!isAgency} />
            <RadioLabel>No</RadioLabel>
          </RadioOption>
        </RadioGroup>
      </FormGroup>
      
      <Button>Create Account</Button>
      
      <Footer>Made with Adobe XD</Footer>
    </Container>
  );
};

export default CreateAccountPage;
