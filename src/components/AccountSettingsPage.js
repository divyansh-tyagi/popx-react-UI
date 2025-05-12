import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 375px;
  height: 802px;
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

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;

const ProfileImage = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: 15px;
  overflow: hidden;
  background-image: url('https://randomuser.me/api/portraits/women/65.jpg');
  background-size: cover;
  background-position: center;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserName = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #333;
  margin: 0 0 5px;
`;

const UserEmail = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
  line-height: 1.5;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 20px 0;
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

const AccountSettingsPage = () => {
  const [zoom, setZoom] = React.useState(1);

  return (
    <Container zoom={zoom}>
      <ZoomControls>
        <ZoomButton onClick={() => setZoom(prev => Math.min(prev + 0.1, 1.5))}>+</ZoomButton>
        <ZoomButton onClick={() => setZoom(prev => Math.max(prev - 0.1, 0.7))}>-</ZoomButton>
      </ZoomControls>
      
      <Title>Account Settings</Title>
      
      <UserInfoContainer>
        <ProfileImage />
        <UserInfo>
          <UserName>Marry Doe</UserName>
          <UserEmail>Marry@gmail.com</UserEmail>
        </UserInfo>
      </UserInfoContainer>
      
      <Description>
        Lorem ipsum Dolor sit amet, Consectetur adipiscing tatis. Sed diam.Naturum, frimest tempus maidunt ut labore et dolore magna aliquam erat, sed diam.
      </Description>
      <Divider />
      
      <Footer>Made with Adobe XD</Footer>
    </Container>
  );
};

export default AccountSettingsPage;