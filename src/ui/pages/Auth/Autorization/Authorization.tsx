import React from 'react'
import {
    Checkbox,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    TextField,
    Button,
    Grid,
    Container, Box, Typography,
} from '@material-ui/core'
import {Field, useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import {RootStateType} from "../../../../bll/store";
import {loginTC} from "../../../../bll/authReducer";
import cl from './Authorization.module.css'
import BackIcon from '../../../../assets/icons/back.svg';
import RegistBg from '../../../../assets/imagesAuth/user/registerBg.png';
import {Link} from 'react-router-dom'
import {FormikErrorType} from "../Registration/Registration";



const Authorization = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector<RootStateType, boolean>(state => state.auth.isLoggedIn)
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordCopy: '',
        },
        validate: (values) => {
            console.log('email', values.username);
            console.log('password', values.password, typeof +values.password === 'number');
            console.log('passwordCopy', values.passwordCopy);
            const errors: FormikErrorType = {};
            // if (!values.username.trim()) {
            //     errors.email = 'Required';
            // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            //     errors.email = 'Invalid email address';
            // }
            if (!values.password.trim()) {
                errors.password = 'Required';
            } else if (typeof +values.password !== 'number') {
                errors.password = 'Must be number'
            } else if (values.password.trim().length > 4 || values.password.trim().length < 4) {
                errors.password = 'Must be 4 characters or less';
            } else {
                errors.password = ''
            }
            if (!values.passwordCopy) {
                errors.passwordCopy = 'Required';
            } else if (values.password !== values.passwordCopy) {
                errors.passwordCopy = 'Password mismatch'
            } else {
                errors.passwordCopy = ''
            }

            return errors;
        },
        onSubmit: (values) => {
            // alert(JSON.stringify(values));
            dispatch(loginTC(values))
            //211
            // if (response.status == '200') {
            //     dispatch(setUserId(response.data.userId));
            //     dispatch(setUserName(response.data.name));
            //     dispatch(setToken(response.data.token));
            //     navigate(-1);
            // }
            formik.resetForm()
        },
    })

    // if (isLoggedIn) {
    //     return <Redirect to={PATH.DASHBOARD}/>
    // }

    return <div className={cl.root} title="Login">
        <Box
            display="flex"
            flexDirection="column"
            height="100%"
            justifyContent="center"
            style={{background: 'linear-gradient(180deg, #613BFF 0%, #3B76FF 100%)'}}
        >
            <Container>
                <Button
                    className={cl.backButton}
                    startIcon={<img src={BackIcon}/>}
                    // onClick={() => navigate('../')}
                />
            </Container>
            <Box textAlign="center" height="32vh">
                {/*<img className={cl.image} src={newUser ? RegistBg : LoginBg} />*/}
                <img className={cl.image} src={RegistBg}/>
            </Box>
            <Box className={cl.main}>
                <Container maxWidth="sm"
                           style={{paddingLeft: '24px', paddingRight: '24px'}}
                >
                    <Grid container direction="column" justifyContent="center">
                        <Box style={{marginTop: 53}}>
                            <Typography className={
                                // newUser ?
                                cl.newUsertitleStyle
                                // : cl.titleStyle
                            }
                                        color="textSecondary"
                                        gutterBottom
                                        variant="body2"
                            >
                                {/*{newUser ? 'デジタルアバター作成' : 'お帰りなさい'}*/}
                            </Typography>
                        </Box>
                        <Grid container justify="center">
                            <Grid item xs={4}>
                                <form onSubmit={formik.handleSubmit}>
                                    <FormControl>
                                        <FormLabel>
                                            <p>Authorization</p>
                                        </FormLabel>
                                        <FormGroup>
                                            <TextField
                                                label="Email or login"
                                                // margin="normal"
                                                // name="email"
                                                // onChange={formik.handleChange}
                                                // value={formik.values.email}
                                                id={"email"}
                                                autoFocus
                                                variant={'outlined'}
                                                {...formik.getFieldProps('email')}
                                            />
                                            {formik.touched.username && formik.errors.username ?
                                                <div>{formik.errors.username}</div> : null}
                                            <TextField
                                                // type="passwordCopy"
                                                label="Password"
                                                // margin="normal"
                                                // name="password"
                                                // onChange={formik.handleChange}
                                                // value={formik.values.password}
                                                autoFocus
                                                id={"password"}
                                                variant={'filled'}
                                                {...formik.getFieldProps('password')}
                                            />
                                            {formik.touched.password && formik.errors.password ?
                                                <div>{formik.errors.password}</div> : null}
                                            {/*<TextField*/}
                                            {/*    // type="password"*/}
                                            {/*    label="Password copy"*/}
                                            {/*    // margin="normal"*/}
                                            {/*    // name="passwordCopy"*/}
                                            {/*    // onChange={formik.handleChange}*/}
                                            {/*    // value={formik.values.password}*/}
                                            {/*    autoFocus*/}
                                            {/*    id={"passwordCopy"}*/}
                                            {/*    variant={'standard'}*/}
                                            {/*    {...formik.getFieldProps('passwordCopy')}*/}
                                            {/*/>*/}
                                            {/*{formik.touched.password && formik.errors.password ?*/}
                                            {/*    <div>{formik.errors.password}</div> : null}*/}

                                            <Button type={'submit'} variant={'contained'}
                                                    className={cl.registerButton}
                                                // className={newUser ? cl.registerButton : cl.loginButton}
                                                    color={'primary'}>
                                                Login
                                                {/*{newUser ? '作成' : 'ログイン'}*/}
                                            </Button>
                                            <Link to={'somepage'}>
                                                <Button type={'submit'} variant={'contained'}
                                                        className={cl.registerButton}
                                                    // className={newUser ? cl.registerButton : cl.loginButton}
                                                        color={'primary'}>
                                                    forgot password
                                                    {/*{newUser ? '作成' : 'ログイン'}*/}
                                                </Button>
                                            </Link>
                                        </FormGroup>
                                    </FormControl>
                                </form>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>

    </div>
};

export default Authorization





