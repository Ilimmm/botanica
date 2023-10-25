import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import villa from '../images/villa.png';
import downArrow from '../images/downarrow.png';
import yellowbg from '../images/yellowphone.png';
import bashnya from '../images/bashnya.png';
import rightArrow from '../images/rightarrow.png';
import secondVilla from '../images/secondvilla.png';

export default function FirstSection() {
  return (
    <FirstBlock>
      <FirstImg>
        <img src={villa} alt="villa" />
        <CatalogVill>
          Каталог вилл <br /> Botanica Luxury Villas
        </CatalogVill>
        <ButtonProject>Выбрать проект</ButtonProject>
        <DownArrow src={downArrow} alt="" />
      </FirstImg>
      <div>
        <SecondImg>
          <img src={yellowbg} alt="" />
          <About>О «Botanica Luxury Villas»</About>
          <Bashnya src={bashnya} alt="" />
          <ScText>
            Компания AAP Architecture Properties & Development, возглавляемая
            известным тайским архитектором Аттаситом Интарачоти, воплощает на
            острове Пхукет уже 22-ю фазу проекта «Botanica Luxury Villas».
          </ScText>
          <RightArrow src={rightArrow} alt="" />
        </SecondImg>
        <ThirdImg>
          <img src={secondVilla} alt="" />
          <NewProject>Новейший проект</NewProject>
          <NewPrText>«Four Seasons»</NewPrText>
          <RightArrow src={rightArrow} alt="" />
        </ThirdImg>
      </div>
    </FirstBlock>
  );
}

const NewProject = styled(Typography)`
  color: #fff;
  text-align: center;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  border-radius: 28px;
  border: 1px solid #fff;
  width: 181px;
  padding: 10px;
  position: absolute;
  top: 8%;
  right: 6%;
`;

const NewPrText = styled(Typography)`
  color: #fff;
  font-family: Gilroy-Medium;
  font-size: 32px;
  font-weight: 700;
  position: absolute;
  right: 6%;
  top: 28%;
`;

const ThirdImg = styled(Box)`
  position: relative;
  max-width: 470px;
  max-height: 265px;
  margin-left: 20px;
  margin-top: 20px;
`;

const RightArrow = styled('img')`
  position: absolute;
  right: 4%;
  bottom: 4%;
`;

const Bashnya = styled('img')`
  position: absolute;
  right: 4%;
  top: 10%;
`;

const ScText = styled(Typography)`
  width: 308px;
  color: #121212;
  font-family: Commissioner;
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  bottom: 6%;
  left: 4%;
`;

const FirstBlock = styled(Box)`
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const FirstImg = styled(Box)`
  position: relative;
  max-width: 722px;
`;

const SecondImg = styled(Box)`
  position: relative;
  margin-left: 20px;
  max-width: 470px;
  max-height: 328px;
`;

const About = styled(Typography)`
  color: #121212;
  font-family: Gilroy;
  font-size: 16px;
  font-weight: 500;
  border-radius: 21px;
  text-align: center;
  border: 1px solid #121212;
  width: 233px;
  position: absolute;
  top: 8%;
  padding: 10px;
  left: 4%;
`;

const CatalogVill = styled(Typography)`
  position: absolute;
  top: 5%;
  left: 4%;
  color: white;
  font-size: 46px;
  font-weight: 700;
  font-family: 'Gilroy-Medium', sans-serif;
`;

const DownArrow = styled('img')`
  position: absolute;
  right: 2%;
  bottom: 2%;
`;

const ButtonProject = styled(Button)`
  top: 25%;
  left: 4%;
  position: absolute;
  background-color: #dfa633;
  border-radius: 6px;
  color: white;
  text-transform: none;
  font-size: 22px;
  font-family: 'Gilroy-Medium', sans-serif;
  margin-top: 15px;
  padding: 10px 25px;
`;
