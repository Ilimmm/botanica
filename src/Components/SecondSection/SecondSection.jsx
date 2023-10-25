import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import bigvilla from '../images/bigvilla.png';
import zoom from '../images/zoom.png';
import line from '../images/Line.png';
import line2 from '../images/Line2.png';

export default function SecondSection() {
  return (
    <>
      <ProjectBlock>
        <ProjectList>
          <List>Список проектов Botanica:</List>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ListTextBlock style={{ width: '106px' }}>
              <ListText>Grand Avenue</ListText>
              <Hr />
            </ListTextBlock>
            <ListTextBlock style={{ width: '106px' }}>
              <ListText>Modern Loft II</ListText>
              <Hr />
            </ListTextBlock>
            <ListTextBlock style={{ width: '106px' }}>
              <ListText>Forestique</ListText>
              <Hr />
            </ListTextBlock>
            <ListTextBlock style={{ width: '106px' }}>
              <ListText>Lakeside</ListText>
              <Hr />
            </ListTextBlock>
            <ListTextBlock style={{ width: '106px' }}>
              <ListText>Four Seasons</ListText>
              <Hr />
            </ListTextBlock>
            <ListTextBlock style={{ width: '106px' }}>
              <ListText>Sky Valley</ListText>
              <Hr />
            </ListTextBlock>
          </div>
        </ProjectList>
      </ProjectBlock>
      <SecondBox>
        <Block>
          <BigVilla src={bigvilla} alt="" />
          <Zoom src={zoom} alt="" />
        </Block>
        <GrandCard>
          <Div>
            <Line src={line} alt="" sx={{ paddingRight: '10px' }} />
            <BotanicaText>Botanica</BotanicaText>
          </Div>
          <GrandAvenue>Grand Avenue</GrandAvenue>
          <BtnDetail>Смортреть детально</BtnDetail>
        </GrandCard>
      </SecondBox>
      <SecondBox>
        <Card>
          <CardContent sx={{ width: '499px' }}>
            Грандиозный проект, расположенный в самом сердце Лагуны, площадью
            28,5 ГА. 51 великолепная вилла, представленных в современном и
            балийском дизайне с 4-5 спальнями и 5-8 ванными комнатами.
          </CardContent>
          <Line2 src={line2} alt="" />
          <CardContent sx={{ width: '523px', marginTop: '50px' }}>
            Инфраструктура поселка — это широкие дороги, тротуары, прогулочные и
            беговые дорожки с необычным ландшафтом и великолепными деревьями.
          </CardContent>
        </Card>
        <Card
          sx={{
            marginLeft: '20px',
            width: '589px',
          }}
        >
          <Df>
            <MiniCard>
              <MiniCardText>51 вилла</MiniCardText>
            </MiniCard>
            <MiniCard sx={{ width: '210px', marginLeft: '16px' }}>
              <MiniCardText>Клубный дом</MiniCardText>
            </MiniCard>
          </Df>
          <MiniCard sx={{ width: '353px', marginTop: '16px' }}>
            <MiniCardText>Ресторан со звездой Мишлен</MiniCardText>
          </MiniCard>
          <MiniCard sx={{ width: '451px', marginTop: '16px' }}>
            <MiniCardText>Парковки с зарядками для электрокаров</MiniCardText>
          </MiniCard>
          <Df sx={{ marginTop: '16px' }}>
            <MiniCard sx={{ width: '293px' }}>
              <MiniCardText>$1 648 370 — $5 728 160</MiniCardText>
            </MiniCard>
            <MiniCard sx={{ width: '189px', marginLeft: '16px' }}>
              <MiniCardText>Коворкинг</MiniCardText>
            </MiniCard>
          </Df>
          <Df sx={{ marginTop: '16px' }}>
            <MiniCard sx={{ width: '238px' }}>
              <MiniCardText>7 дизайнов вилл</MiniCardText>
            </MiniCard>
            <MiniCard sx={{ width: '184px', marginLeft: '16px' }}>
              <MiniCardText>Oasis Spa</MiniCardText>
            </MiniCard>
          </Df>
          <MiniCard sx={{ width: '302px', marginTop: '16px' }}>
            <MiniCardText>Спортзал и йога студия</MiniCardText>
          </MiniCard>
        </Card>
      </SecondBox>
    </>
  );
}

const Df = styled(Box)`
  display: flex;
`;

const Line2 = styled('img')`
  width: 160px;
  height: 2px;
  margin-top: 50px;
`;

const BtnDetail = styled(Button)`
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
  margin-left: 40px;
  margin-top: 220px;
`;

const GrandAvenue = styled(Typography)`
  color: #121212;
  font-family: Gilroy-Medium;
  font-size: 32px;
  font-weight: 700;
  line-height: 110%;
  margin-left: 40px;
`;

const Div = styled(Box)`
  display: flex;
  align-items: center;
  height: 50px;
  margin-left: 40px;
`;

const BotanicaText = styled(Typography)`
  color: #dfa633;
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const Line = styled('img')`
  width: 60px;
  height: 1px;
`;

const Zoom = styled('img')`
  position: absolute;
  bottom: 4%;
  right: 2%;
`;

const BigVilla = styled('img')`
  position: relative;
`;

const Block = styled(Box)`
  position: relative;
`;

const SecondBox = styled(Box)`
  display: flex;
  margin-top: 20px;
  justify-content: center;
`;

const MiniCardText = styled(Typography)`
  color: #121212;
  text-align: center;
  font-family: Gilroy;
  font-size: 18px;
  font-weight: 500;
  padding-top: 10px;
`;

const MiniCard = styled(Box)`
  width: 171px;
  height: 44px;
  border-radius: 22px;
  background: #fff;
  text-align: center;
`;

const CardContent = styled(Typography)`
  color: #121212;
  font-family: Commissioner;
  font-size: 20px;
  font-weight: 400;
`;

const Card = styled(Box)`
  width: 603px;
  height: 420px;
  border-radius: 20px;
  background: #f6f8f7;
  padding: 50px 0 0 40px;
`;

const ProjectBlock = styled(Box)`
  display: flex;
  justify-content: center;
`;

const ProjectList = styled(Box)`
  width: 1213px;
  height: 205px;
  background-color: #f6f8f7;
  text-align: center;
  margin-top: 20px;
  border-radius: 20px;
`;

const List = styled(Typography)`
  color: #121212;
  font-size: 46px;
  font-family: 'Gilroy-Medium', sans-serif;
  font-weight: 700;
  padding-top: 25px;
`;

const ListText = styled(Typography)``;

const Hr = styled('hr')``;

const ListTextBlock = styled('div')`
  width: 106px;
  padding: 15px 40px;
`;

const GrandCard = styled(Box)`
  width: 350px;
  height: 400px;
  border-radius: 20px;
  background: #f6f8f7;
  margin-left: 20px;
`;
