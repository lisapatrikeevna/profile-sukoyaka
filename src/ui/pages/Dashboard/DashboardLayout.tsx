import React, {useState} from 'react';
import {Redirect, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {PATH} from "../../Routes";
import cl from "./DashboardLayout.module.css";
import {AppBar, Box, Tab, Tabs, Typography} from "@material-ui/core";
import AflacActiveIcon from "../../../assets/icons/AflacActiveIcon";
import AflacIcon from "../../../assets/icons/AflacIcon";
import HomeActiveIcon from "../../../assets/icons/HomeActiveIcon";
import HomeIcon from "../../../assets/icons/HomeIcon";
import AnimalActiveIcon from "../../../assets/icons/AnimalActiveIcon";
import AnimalIcon from "../../../assets/icons/AnimalIcon";
import UserActiveIcon from "../../../assets/icons/UserActiveIcon";
import UserIcon from "../../../assets/icons/UserIcon";
import GameScreen from "../game/GameScreen";


function TabPanel(props:any) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel"
             hidden={value !== index}
             id={`scrollable-prevent-tabpanel-${index}`}
             aria-labelledby={`scrollable-prevent-tab-${index}`}
             {...other}
        >
            {value === index && (
                <Box>
                    <Typography component={'div'} >{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const page = (userId:any,avatar:any,token:any,props:any) =>{
    if(props&&props.page=="game"){
        return(<GameScreen user={userId} token={token} />)
    }
    return (<p>hhhhhhh</p>)
    // return(<Onboard user={userId} avatar={avatar} token={token} {...props} />)
};

const DashboardLayout = (props:any) => {
    const location = useLocation()
    // const navigate = useNavigate()
    const [active, setActive] = useState(false);
    const { userId, avatar } = useSelector<RootStateType,any>(state => state.user);
    // const token = useSelector<RootStateType,any>(state => state.user.token);
    const token = 'ddddddddd'
    //@ts-ignore
    const [value, setValue] = useState((location.state!=null && location.state.index!=null)? (location.state.index):3);

    const handleChange = (event:any, newValue:any) => {
        if(props.page !== "game" && newValue !== 3){
            // newValue != 3 ? ('../../app/dashboard') : '';
            // newValue !== 3 ? <Redirect to={PATH.DASHBOARD}/>:''
            <Redirect to={PATH.DASHBOARD}/>
        }else {
            // navigate('../app/dashboard', { state: { index: newValue} });
            // <Redirect to={{{PATH.DASHBOARD},  state: {index: newValue}}}/>
        }
        setValue(newValue);
    };

    return (
        <div className={cl.root}>
            <AppBar position="static" className={cl.appBar}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="primary"
                    // textColor="primary"
                    aria-label="scrollable prevent tabs example"
                >
                    <Tab tabIndex={0}
                         icon={value === 0 ? <AflacActiveIcon /> : <AflacIcon />}
                    />
                    <Tab tabIndex={1}
                         icon={value === 1 ? <HomeActiveIcon /> : <HomeIcon />}
                    />
                    <Tab tabIndex={2}
                         icon={value === 2 ? <AnimalActiveIcon /> : <AnimalIcon />}
                    />
                    <Tab tabIndex={3}
                         icon={value === 3 ? <UserActiveIcon /> : <UserIcon />}
                    />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {/*<OnAflac />*/}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {/*<Home />*/}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {/*<Animal token={token} fn={setValue}/>*/}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {/*{page(userId,avatar,token,props)}*/}
            </TabPanel>
            <TabPanel value={value} index={4}>
                <GameScreen />
            </TabPanel>
        </div>
    );
};

export default DashboardLayout;
