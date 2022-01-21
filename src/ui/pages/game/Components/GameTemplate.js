import React from 'react';
import {
  Container,
  Button,
  Grid,
  makeStyles,
  Box,
  Typography,
  withStyles,
  Badge
} from '@material-ui/core';
// import { useNavigate } from 'react-router-dom';
// import Page from './Page';
import GameProgress from './GameProgress';
// import Card from './ItemCard';
// import SukoyakaCard from './SukoyakaCard';
import BackIcon from '../../../../assets/icons/back.svg';
import Location from '../../../../assets/icons/location .svg';

import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFFFFF',
    minHeight: '100%'
  },
  backButton: {
    top: '9px',
    marginLeft: '10px'
  },
  image: {
    display: 'inline-block',
    maxWidth: '100%',
    width: 900
  },
  sports: {
    display: 'inline-block',
    maxWidth: '100%',
    width: 100
  },
  titleStyle: {
    display: 'inline-block',
    fontFamily: 'Mplus 1p',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '20px',
    lineHeight: '20px',
    color: '#FFFFFF',
    marginTop: '24px'
  },
  description: {
    display: 'inline-block',
    fontFamily: 'M PLUS 1p',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '22.4px',
    color: '#333333'
  },
  generalButton: {
    height: 38,
    width: 'calc(100% - 144px)',
    textAlign: 'center',
    marginTop: 12,
    background: '#613BFF',
    border: '1.198px solid',
    borderRadius: '7px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 12,
    color: '#FFFFFF',
    lineHeight: 18,
    display: 'flex'
  },
  recordText: {
    fontFamily: 'Mplus 1p',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px',
    lineHeight: '100%'
  }
}));

const BadgeCustomize = withStyles(theme => ({
  badge: {
    left: '60px',
    bottom: '5px'
  }
}))(Badge);

const Exercise = (props) => {
  const classes = useStyles();
  // const navigate = useNavigate();
  const { gameData, challengeDate, achievementData, gameValue } = props;
  const gameTemplateData = gameData.gameTemplateData;

  return (
    <div className={classes.root} title="Exercise">
      <Box>
        <BadgeCustomize
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          badgeContent={
            <img src={gameTemplateData.gameIcon} style={{ zIndex: -1 }} />
          }
        >
          <Grid container direction="row" style={{ position: 'absolute' }}>
            <Button
              className={classes.backButton}
              startIcon={<img src={BackIcon} />}
              // onClick={() => navigate('../app/dashboard')}
            />
            <Typography className={classes.titleStyle}>
              {gameTemplateData.gameType}
            </Typography>
          </Grid>
          <img
            className={classes.img}
            alt="complex"
            src={gameTemplateData.gameBgImage}
          />
        </BadgeCustomize>
      </Box>
      <Grid
        container
        direction="column"
        style={{ marginLeft: 16, marginTop: 19 }}
      >
        <Typography className={classes.description}>
          {gameTemplateData.content.content1}
        </Typography>
        {gameTemplateData.content.content2 && (
          <Typography className={classes.description}>
            {gameTemplateData.content.content2}
          </Typography>
        )}
      </Grid>
      <Grid style={{ marginLeft: 16, marginTop: 30 }}>
        <Typography className={classes.recordText}>ゲーム履歴</Typography>
      </Grid>
      {gameValue != 5 ? (
        <Box style={{ marginLeft: 16, marginBottom: 110 }}>
          <GameProgress
            progressDatas={gameData.coinData}
            gameValue={gameValue}
          />
        </Box>
      ) : (
        <Box style={{ marginLeft: 24, marginTop: 40 }}>
          {/*<SukoyakaCard cardDatas={gameData.sukoyakaData} />*/}
        </Box>
      )}
      {/* <Box style={{ marginLeft: 16, marginTop: 40 }}>
        <Card title="チャレンジ" cardDatas={challengeDate} />
      </Box> */}
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ position: 'fixed', bottom: '60px', zIndex: 20 }}
      >
        <Button
          className={classes.generalButton}
          startIcon={<img src={Location}></img>}
          // onClick={() => navigate('../app/dashboard', { state: { index: 0 } })}
        >
          体験できる代理店一覧
        </Button>
      </Grid>
    </div>
  );
};

export default Exercise;
