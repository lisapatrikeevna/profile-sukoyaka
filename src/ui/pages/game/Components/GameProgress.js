import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Grid,
  Typography,
  makeStyles,
  withStyles,
  Card,
  LinearProgress
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#FFFFFF'
  },
  cardStyle: {
    marginTop: '8px',
    marginRight: '32px',
    backgroundColor: 'rgba(229,233,236,0.2)',
    borderRadius: '10px'
  },
  titleStyle: {
    fontFamily: 'M PLUS 1p',
    fontStyle: 'normal',
    fontWeight: 800,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#2B2A30',
    marginLeft: '14px',
    marginTop: '10px'
  },
  descriptionStyle: {
    fontFamily: 'M PLUS 1p',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '11px',
    lineHeight: '14px',
    color: '#5B5B5B',
    marginLeft: '14px'
  },
  valueStyle: {
    fontFamily: 'Mplus 1p',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '10px',
    lineHeight: '10px',
    letterSpacing: '-0.3px',
    color: '#083525',
    marginLeft: '14px',
    marginBottom: '7px'
  },
  textStyle: {
    margin: '0 0 0 14px',
    wordWrap: 'break-word',
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '14px'
  },
  outer: {
    position: 'relative'
  },
  inner: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 10,
    fontFamily: 'M PLUS 1p',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '11px',
    lineHeight: '14px',
    color: '#FFFFFF'
  }
}));

const withStylesProps = styles => Component => props => {
  const Comp = withStyles(theme => styles({ ...props, theme }))(Component);
  return <Comp {...props} />;
};

const styles = props => ({
  root: {
    height: 12,
    borderRadius: 5
  },
  colorPrimary: {
    backgroundColor:
      props.theme.palette.grey[
        props.theme.palette.type === 'light' ? 200 : 700
      ],
    marginLeft: '14px',
    marginRight: '14px',
    marginTop: '17px',
    marginBottom: '15px'
  },
  bar: {
    borderRadius: 5,
    backgroundColor: `${props.color}`
  }
});

const BorderLinearProgress = withStylesProps(styles)(props => (
  <LinearProgress
    {...props}
    variant="determinate"
    className={[props.classes.root, props.classes.colorPrimary]}
  />
));

const FormatTime = timestamp => {
  var date = new Date(timestamp);
  var YY = date.getFullYear() + '年';
  var MM =
    (date.getMonth() + 1 < 10
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1) + '月';
  var DD = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + '日';
  var hh =
    (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
  var mm = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return YY + MM + DD + ' ' + hh + mm;
};
const Content = (data, classes) => {
  const type = ['顔：', '眉毛：', '目：', '鼻：', '唇：'];

  if (data.gameId == 'skin' && data.gameRecordContent != null) {
    // const gameRecordContent = JSON.stringify(data.gameRecordContent).toString().replace(new RegExp("\\\\\"","gm"),"\"")
    try {
      var gameRecordContent = JSON.parse(data.gameRecordContent);
    } catch (err) {
      console.log(err);
      return;
    }
    return (
      <Typography className={classes.textStyle}>
        肌年齢：{gameRecordContent.age}歳<br />
        健康度：{gameRecordContent.health}%<br />
        シミ：{gameRecordContent.stain}%<br />
        ニキビ：{gameRecordContent.acne}%<br />
        目のクマ：{gameRecordContent.darkCircle}%<br />
        美しさ：{gameRecordContent.facequality}%<br />
        笑顔スコア：{gameRecordContent.smile}%<br />
      </Typography>
    );
  } else if (data.gameId == 'exercise' && data.gameRecordContent != null) {
    try {
      var gameRecordContent = JSON.parse(data.gameRecordContent);
    } catch (err) {
      console.log(err);
      return;
    }
    return (
      <>
        <Typography className={classes.textStyle}>
          {gameRecordContent.fitnessItem == 'squat'
            ? 'スクワット'
            : gameRecordContent.fitnessItem == 'ball_strike'
            ? 'ボールキャッチ'
            : 'ポーズ'}
          ：{gameRecordContent.counts}回<br />
        </Typography>
        <Grid className={classes.outer} item xs={12}>
          <Typography className={classes.inner}>
            {`${gameRecordContent.counts}/${gameRecordContent.total}`}
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={(gameRecordContent.counts / gameRecordContent.total) * 100}
            style={{ alignItems: 'center' }}
            color="#613BFF"
          />
        </Grid>
      </>
    );
  } else if (data.gameId == 'quiz' && data.gameRecordContent != null) {
    try {
      var gameRecordContent = JSON.parse(data.gameRecordContent);
    } catch (err) {
      console.log(err);
      return;
    }
    return (
      <>
        <Typography className={classes.textStyle}>
          {gameRecordContent.ok}問正解
          <br />
        </Typography>
        <Grid className={classes.outer} item xs={12}>
          <Typography className={classes.inner}>
            {`${gameRecordContent.ok}/${gameRecordContent.ng}`}
          </Typography>
          <BorderLinearProgress
            variant="determinate"
            value={(gameRecordContent.ok / gameRecordContent.ng) * 100}
            style={{ alignItems: 'center' }}
            color="#613BFF"
          />
          {gameRecordContent.questions.map((data, index) => (
            <>
              <Typography className={classes.textStyle}>
                {index + 1}. {data.question}
                <br />
                答え：{data.answer[data.apply]}
                <br />
                {data.explanation}
                <br />
                <br />
              </Typography>
            </>
          ))}
        </Grid>
      </>
    );
  }
  if (
    data.gameId == 'face' ||
    (data.contentID == 'compatibility' && data.gameRecordContent != null)
  ) {
    try {
      var gameRecordContent = JSON.parse(data.gameRecordContent);
    } catch (err) {
      console.log(err);
      return;
    }
    return gameRecordContent.map((content, index) => (
      <Typography className={classes.textStyle}>
        {type[index]}
        {content.type}
        <br />
        {content.analysis}
        <br />
        <br />
      </Typography>
    ));
  }
};

const Progress = forwardRef(({ progressDatas, gameValue, ...rest }, ref) => {
  const classes = useStyles();
  const icon1 = process.env.PUBLIC_URL + '/static/images/exercise/icon1.svg';
  const icon2 = process.env.PUBLIC_URL + '/static/images/exercise/icon2.svg';

  return (
    <Box className={classes.root}>
      {progressDatas.map(data => (
        <Card className={classes.cardStyle}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography className={classes.titleStyle}>
                {FormatTime(data.createTime)}
              </Typography>
              {data.description != null ? (
                <Typography className={classes.descriptionStyle}>
                  {data.description}
                </Typography>
              ) : (
                ''
              )}
            </Grid>
            <Grid item xs={12}>
              {Content(data, classes)}
            </Grid>

            <Grid item xs={4}>
              <Typography className={classes.valueStyle}>
                <img src={icon1} /> +{data.coin}コイン
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography className={classes.valueStyle}>
                <img src={icon2} /> +{data.experience}経験値
              </Typography>
            </Grid>
          </Grid>
        </Card>
      ))}
    </Box>
  );
});

Progress.propTypes = {
  progressDatas: PropTypes.array.isRequired
};
export default Progress;
