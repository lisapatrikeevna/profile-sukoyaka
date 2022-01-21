import React, {useEffect, useState} from 'react'
import cl from './MainPage.module.css'
import {Container, Grid, Button, Typography, makeStyles, Dialog, DialogContent, DialogContentText} from '@material-ui/core';
import HappyIcon from './../../../assets/imagesUser/happy.svg'
import HelpIcon from './../../../assets/imagesUser/help.svg'
import SadIcon from './../../../assets/imagesUser/sad.svg'
import HelpIcon1 from './../../../assets/imagesUser/help1.svg'
import {setArData, setRecordId} from "../../../bll/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../../Routes";
import {Link} from "react-router-dom";



const MainPage = () => {
    // const cl = useStyles();
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {setOpen(true) };
    const handleClose = () => {setOpen(false) };
    const userId = useSelector<RootStateType,any>(state => state.user.userId);
    const userName = useSelector<RootStateType,any>(state => state.user.userName);
    const token = useSelector<RootStateType,any>(state => state.user.token);

    useEffect(() => {
        console.debug('userId:', userId);
        console.debug('userName:', userName);
        console.debug('token:', token);
        if (userId && userName && token) {
            const url = window.location.search;
            if (url.indexOf('recordId') >= 0) {
                const urlParams = new URLSearchParams(url);
                dispatch(setRecordId(urlParams.get('recordId')));
            } else if (url.indexOf('animalId') >= 0) {
                const urlParams = new URLSearchParams(url);
                const arData = {
                    animalId: urlParams.get('animalId'),
                    foodId: urlParams.get('foodId'),
                    foodCount: urlParams.get('foodCount')
                };
                dispatch(setArData(arData));
            }
            // navigate('./app/dashboard');
            <Redirect to={PATH.DASHBOARD}/>
        }
    }, [userId, userName, token]);

    return (
        <div className={cl.root} title="Login">
            <Grid container justify="center">
                <img src= './static/images/user/NewUser.svg' />
                {/*<img src={process.env.PUBLIC_URL + '/static/images/user/NewUser.svg'} />*/}
            </Grid>
            <Container maxWidth="sm">
                <Link to={PATH.REGISTRATION}>
                <Button className={cl.newUserButton} fullWidth variant="contained"
                    endIcon={<img src={SadIcon} />}
                         // onClick={() => <Link to={PATH.REGISTRATION}/>}
                         // onClick={() => <Redirect to={PATH.REGISTRATION}/>}
                    // onClick={() => {navigate('register', { state: { newUser: true } });}}
                    style={{background: 'linear-gradient(90deg, #613BFF 0%, #3B76FF 100%)'}}
                >
                    <Typography className={cl.buttonText}>アバター作成</Typography>
                </Button>
                </Link>
                <Grid container justify="center">
                    <span className={cl.labelStyle} color="textSecondary" >
                        だいじょうぶ！
                        <br />
                        あなただけのアバターを作りましょう！
                    </span>
                </Grid>
                <Button className={cl.newUserButton}
                    style={{ backgroundColor: 'rgba(97,59,255,0.1)',color: '#613BFF'}}
                    fullWidth variant="contained" endIcon={<img src={HappyIcon} />}
                    onClick={() => <Redirect to={PATH.AUTHORIZATION}/>}
                    // onClick={() => {navigate('login', { state: { newUser: false }});}}
                >
                    <Typography className={cl.buttonText}>ログイン</Typography>
                </Button>
                <Grid container justify="center">
                    <Typography className={cl.labelStyle} color="textSecondary"
                        gutterBottom variant="body2">
                        ここからログインしてね！
                    </Typography>
                </Grid>
                <Typography color="textSecondary" align="center">
                    <img src={HelpIcon} onClick={handleClickOpen} />
                </Typography>

                <Dialog open={open} onClose={handleClose}
                    PaperProps={{style: {backgroundColor: 'rgba(255, 255, 255,0.8)', boxShadow: 'none'} }} >
                    <DialogContent className={cl.dialogWrapStyle}>
                        <DialogContentText className={cl.dialogTitleStyle}>
                            <img src={HelpIcon1} style={{ float: 'left' }} />
                            <span>アバターとは</span>
                            <img src={HelpIcon1} style={{ float: 'right' }} />
                        </DialogContentText>
                        <DialogContentText className={cl.dialogContentWrapStyle}>
                            <Typography className={cl.dialogContentTextStyle}>
                                自分だけのアバターを作って、
                                <br />
                                いろんなコンテンツを遊びましょう！
                            </Typography>
                        </DialogContentText>
                        <DialogContentText className={[cl.dialogContentWrapStyle, cl.dialogContentWrapStyle1].join(' ')} >
                            <Typography className={cl.dialogContentTextStyle}>
                                ゲームでコインをGETして、
                                <br />
                                パワーアップItemをこうにゅう！
                            </Typography>
                        </DialogContentText>
                        <DialogContentText className={[cl.dialogContentWrapStyle, cl.dialogContentWrapStyle2].join(' ')} >
                            <Typography className={cl.dialogContentTextStyle}>
                                かわいい動物達を仲間にして、
                                <br />
                                バーチャルファームを作りましょう！
                            </Typography>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            </Container>
        </div>
    );
};

export default MainPage;
