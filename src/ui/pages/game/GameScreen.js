import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
// import Page from 'src/components/Page';
import { useLocation } from 'react-router-dom';
// import GameTemplate from 'src/components/GameTemplate';
import GameData from './Data/GameData';
import { useSelector } from 'react-redux';
import ChallengeCardData from './Data/ChallengeCardData';
import ExerciseCardData from './Data/ExerciseCardData';
import {getUserPoint} from "../../../bll/userApi";
import GameTemplate from "./Components/GameTemplate";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFFFFF',
    minHeight: '100%'
  }
}));

const GameScreen = props => {
  const classes = useStyles();
  const location = useLocation();
  const gameValue = location.state.gameValue;
  const userId = useSelector(state => state.user.userId);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getUserPoint({userId: userId, token: props.token})
        .then(function (response) {
      let arr = [];
      arr["exercise"] = [];
      arr["fitbit"] = [];
      arr["skin"] = [];
      arr["face"] = [];
      arr["quiz"] = [];
      arr["compatibility"] = [];
      response.data.map((data) => {
        // arr[data.gameId].push(data);
      })
      let data;
      if (gameValue == 1) {
        data = ({ ...GameData.game1, coinData: arr["exercise"] });
      } else if (gameValue == 2) {
        data = ({ ...GameData.game2, coinData: arr["skin"] });
      } else if (gameValue == 3) {
        data = ({ ...GameData.game3, coinData: arr["face"] })
      } else if (gameValue == 4) {
        data = ({ ...GameData.game4, coinData: arr["quiz"] });
      } else if (gameValue == 5) {
        data = ({ ...GameData.game5, coinData: arr["compatibility"] });
      }
      setData(data);
    }).catch(function (error) {
      console.log(error);
    });
  }, []);
  return (
    <div className={classes.root} title="GameScreen">
      { data && <GameTemplate
        gameData={{ ...data }}
        challengeDate={ChallengeCardData}
        achievementData={ExerciseCardData}
        gameValue={gameValue}
      />}
    </div>
  );
};

export default GameScreen;
