import { Box, Typography } from '@mui/material';
import React from 'react';
import { styled } from '@mui/system';
import './styles.css';
import logo from '../images/Group 410.png';
import whatsapp from '../images/whatsapp.png';
import telegram from '../images/telegram.png';

export default function Header() {
  return (
    <HeaderBox>
      <div style={{ flexGrow: '1', marginLeft: '15%' }}>
        <img src={logo} alt="logo" />
      </div>
      <Navbar>Главная</Navbar>
      <Navbar>Список проектов</Navbar>
      <Navbar sx={{ flexGrow: '1' }}>Контакты</Navbar>
      <img src={whatsapp} alt="" />
      <img
        style={{ marginRight: '15%', paddingLeft: '15px' }}
        src={telegram}
        alt=""
      />
    </HeaderBox>
  );
}

const HeaderBox = styled(Box)`
  display: flex;
  background: #f6f8f7;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Navbar = styled(Typography)`
  font-size: 20px;
  font-family: 'Gilroy-Medium', sans-serif;
  padding: 0 35px;
`;
