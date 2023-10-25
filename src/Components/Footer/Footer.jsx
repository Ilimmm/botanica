import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import phone from '../images/phone.png';

export default function Footer() {
  return (
    <GlBlock>
      <FooterBl>
        <Contacts>
          <GlText>Контакты</GlText>
          <OsnText>+66 84 153 4555</OsnText>
          <OsnText>botanicaluxuryvillas.com</OsnText>
          <OsnText>ru@botanicaluxuryvilla.com</OsnText>
          <OsnText sx={{ width: '162px', color: '#DFA633' }}>
            Политика обработки персоанальных данных
          </OsnText>
        </Contacts>
        <Projects>
          <GlText>Проекты</GlText>
          <OsnText>Botanica Modern Loft II</OsnText>
          <OsnText>Botanica Forestique</OsnText>
          <OsnText>Botanica Lakeside</OsnText>
          <OsnText>Botanica Four Seasons</OsnText>
          <OsnText>Botanica Sky Valley</OsnText>
        </Projects>
        <Social>
          <GlText>Соц. сети</GlText>
          <OsnText>Instagram</OsnText>
          <OsnText>Facebook</OsnText>
          <OsnText>YouTube</OsnText>
        </Social>
        <Adress>
          <GlText>Адрес</GlText>
          <OsnText sx={{ width: '205px' }}>
            125/397 Moo 5, TungkaRoad Rassada Sub-district, Muang Phuket
            District Phuket Province 83000 Thailand
          </OsnText>
        </Adress>
      </FooterBl>
      <GlInfo>
        <InfoBl>
          <Phone src={phone} alt="" />
          <div>
            <PhoneText>Мы будем рады ответить на ваши вопросы</PhoneText>
            <MiniPhoneText>
              и помочь с подходящим вам выбором виллы!
            </MiniPhoneText>
          </div>
          <CallBtn>Перезвоните мне</CallBtn>
        </InfoBl>
      </GlInfo>
    </GlBlock>
  );
}

const CallBtn = styled(Button)`
  width: 270px;
  height: 50px;
  border-radius: 6px;
  background: #dfa633;
  color: #fff;
  text-align: center;
  font-family: Gilroy;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: none;
  margin-left: 244px;
`;

const MiniPhoneText = styled(Typography)`
  color: #121212;
  font-family: Commissioner;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  margin-left: 60px;
`;

const PhoneText = styled(Typography)`
  color: #dfa633;
  font-family: Gilroy;
  font-size: 24px;
  font-weight: 600;
  margin-left: 60px;
`;

const Phone = styled('img')`
  margin-left: 60px;
`;

const GlInfo = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const InfoBl = styled(Box)`
  width: 1212px;
  height: 100px;
  border-radius: 8px;
  background: #fff;
  display: flex;
  align-items: center;
`;

const Adress = styled(Box)`
  padding-top: 80px;
  padding-left: 100px;
`;

const Social = styled(Box)`
  padding-top: 80px;
  padding-left: 151px;
`;

const Projects = styled(Box)`
  padding-top: 80px;
  padding-left: 170px;
`;

const OsnText = styled(Typography)`
  color: #121212;
  font-family: Commissioner;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  padding-top: 24px;
`;

const GlText = styled(Typography)`
  color: #121212;
  font-family: Gilroy;
  font-size: 24px;
  font-weight: 600;
`;

const Contacts = styled(Box)`
  padding-top: 80px;
`;

const FooterBl = styled(Box)`
  display: flex;
  justify-content: center;
`;

const GlBlock = styled(Box)`
  max-width: auto;
  height: 550px;
  background: #f6f8f7;
  margin-top: 40px;
`;
