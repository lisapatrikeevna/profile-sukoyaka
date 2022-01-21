import React from 'react';
import ArBoxImg from './../../../assets/imagesHome/ARBox.png'
import FeatureImg from './../../../assets/imagesHome/feature.png'
import CoinGameImg from './../../../assets/imagesHome/CoinGame.png'
import cl from './HomePage.module.css'
import {Box} from "@material-ui/core";



const HomePage = () => {
    return (
        <div>
            {/*<Header page="home" />*/}
            <Box className={cl.box} style={{ marginTop: '20px' }} >
                <a href="http://qrco.de/sukoyaka-puzzle ">
                    <img style={{ width: '100%' }} src={FeatureImg} />
                </a>
            </Box>
            <Box className={cl.box}>
                <a href="http://qrco.de/sukoyaka-coin">
                    <img style={{ width: '100%' }} src={CoinGameImg} />
                </a>
            </Box>
            <Box className={cl.box}>
                <a>
                    <img style={{ width: '100%' }} src={ArBoxImg} />
                </a>
            </Box>
        </div>
    );
};

export default HomePage;
