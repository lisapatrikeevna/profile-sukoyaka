import React, {useEffect, useState} from 'react';
import {
  Box, Modal, Backdrop, makeStyles,
  Fade, IconButton, Badge, Grid, Button
} from '@material-ui/core';
import QuestionIcon from '../../assets/icons/QuestionIcon';
import NoficationIcon from '../../assets/icons/NoficationIcon';
import SettingsIcon from '../../assets/icons/SettingsIcon';
// import ModalHeader from '../components/ModalHeader';
// import ModalBody from '../components/ModalBody';
// import ModalData from '../mockData/ModalData';
import SukoyakaIcon from '../images/sukoyaka.svg';
import BackIcon from '../icons/back.svg';
import { useSelector} from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '300px',
    height: '449px',
    backgroundColor: '#FFFFFF',
    // border: '5px solid #000000',
    borderRadius: '15px',
    boxShadow: '8px 10px 25px 3px rgba(8, 53, 37, 0.05)',
    padding: '0 12px'
  },
  retitle: {
    fontFamily: "'M plus 1p'",
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#2B2A30',
    marginLeft: '-10px'
  }
}));

export default function OnboardHeader(props) {
  const { page, middleChildren, onpress, retitle } = props;
  const { notificationNo } = useSelector(state => state.user);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [type, setType] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = type => {
    if (type == 'setting') {
      setOpen(true);
      setData(ModalData.setting);
      setType(type);
    } else if (type == 'notice') {
      if (location.pathname.endsWith('notifications')) {
        navigate('../dashboard');
      } else {
        navigate('../notifications');
      }
    } else if (type == 'help') {
      setOpen(true);
      setData(ModalData.help);
      setType(type);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cheak = page => {
    if (page == 'aflac' || page == 'AppleTV' || page == 'animal' || page == 'home') {
      return <Box></Box>;
    } else {
      return (
        <div>
          <Button
            className={classes.backButton}
            startIcon={<img src={BackIcon} />}
            onClick={onpress}
          />
          <span className={classes.retitle}>{retitle}</span>
        </div>
      );
    }
  };

  const body = (
    <Box>
      {/*<ModalHeader style={{ padding: '0 4px' }} modalHeaderData={{ ...data }} />*/}
      {/*<ModalBody type={type} />*/}
    </Box>
  );
  return (
    <Box>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs container justify="flex-start">
          {page == 'onboard' ? <img src={SukoyakaIcon} /> : cheak(page)}
        </Grid>
        <Grid item xs container justify="center" alignItems="center">{middleChildren}</Grid>
        <Grid item xs container justify="flex-end" alignItems="center">
          <IconButton
            size="small"
            onClick={() => handleOpen('help')}
            style={{ marginRight: '19px' }}
          >
            <QuestionIcon />
          </IconButton>
          <IconButton
            size="small"
            onClick={() => handleOpen('notice')}
            style={{ marginRight: '19px' }}
          >
            <Badge color="error" badgeContent={notificationNo} showZero>
              <NoficationIcon />
            </Badge>
          </IconButton>
          <IconButton size="small" onClick={() => handleOpen('setting')}>
            <SettingsIcon />
          </IconButton>
        </Grid>
      </Grid>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
          style: { backgroundColor: 'rgba(200,200,200, 0.8)' }
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>{body}</Box>
        </Fade>
      </Modal>
    </Box>
  );
}
