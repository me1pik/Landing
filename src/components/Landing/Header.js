// src/components/Header.js
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import MelpikLogo from '../../img/Landing/MelpikLogo.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo src={MelpikLogo} alt='Melpik Logo' />
      <RegisterButton onClick={() => navigate('/')}>
        사전등록하기
      </RegisterButton>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
  max-width: 600px;
  margin-top: 41px;
`;

const Logo = styled.img`
  width: 83px;
  height: 35px;
  margin-left: 29px;
`;

const RegisterButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin-right: 29px;
  cursor: pointer;
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: white;
  }
`;
