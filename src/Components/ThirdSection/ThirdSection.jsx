import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import msplan from '../images/msplan.png';
import yellowzoom from '../images/yellowzoom.png';

export default function ThirdSection() {
  return (
    <GlBlock>
      <ThirdBlock>
        <MsPlan>Мастер-план</MsPlan>
        <MsPlanImg src={msplan} alt="" />
        <YellowZoom src={yellowzoom} alt="" />
      </ThirdBlock>
    </GlBlock>
  );
}

const YellowZoom = styled('img')`
  margin-left: 60px;
`;

const MsPlanImg = styled('img')``;

const MsPlan = styled(Typography)`
  color: #121212;
  text-align: center;
  font-family: Gilroy-Medium;
  font-size: 32px;
  font-weight: 600;
  margin-top: 40px;
`;

const GlBlock = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
`;

const ThirdBlock = styled(Box)`
  width: 1212px;
  height: 736px;
  border-radius: 20px;
  background: #f6f8f7;
  position: relative;
`;
