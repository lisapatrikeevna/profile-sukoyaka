import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import StartPage from "./pages/startPage/startPage";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import MainPage from "./pages/MainPage/MainPage";
import Registration from "./pages/Auth/Registration/Registration";
import Authorization from "./pages/Auth/Autorization/Authorization";
import AuthMainPage from "./pages/Auth/AuthMainPage/AuthMainPage";
import QrPinSave from "./pages/Auth/QrPinSave/QrPinSave";

export const PATH = {
    START: "/StartPage",
    DASHBOARD: "/DashboardLayout",
    // MAIN: "/MainPage",
    AUTH: "/AuthMainPage",
    REGISTRATION: "/Registration",
    AUTHORIZATION: "/Authorization",
    // QRPINSAVE: "/QrPinSave",
}
function Routes() {
    return (
        <Switch>

            {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/}
            <Route path={"/"} exact render={() => <Redirect to={PATH.START}/>}/>

            <Route path={PATH.START} exact render={() => <StartPage/>}/>
            <Route path={PATH.DASHBOARD} exact render={() => <DashboardLayout page='goldtask'/>}/>
            <Route path={PATH.AUTH} exact render={() => <AuthMainPage/>}/>
            <Route path={PATH.REGISTRATION} exact render={() => <Registration/>}/>
            <Route path={PATH.AUTHORIZATION} exact render={() => <Authorization/>}/>
            {/*<Route path={PATH.QRPINSAVE} exact render={() => <QrPinSave/>}/>*/}
        </Switch>
    )
}
export default Routes
