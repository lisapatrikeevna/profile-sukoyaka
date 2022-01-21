import React, {useEffect, useState} from 'react'
import QRCode from "react-qr-code"
import domtoimage from 'dom-to-image'
import {PATH} from "../../../Routes";
import {Redirect} from "react-router-dom";
import {Button, Dialog, DialogContent, DialogContentText} from "@material-ui/core";

type propsType = {
    login: string
    password: string
    open: boolean;
    onClose: (susses: boolean) => void;
}

const QrPinSave = ({login,password , ...props}: propsType) => {
    // let [QRValue, setQRValue] = useState("")
    let [QRImg, setQRImg] = useState('')
// const currentURL = window.location.origin
// useEffect(() => {
//     currentVehicle && currentVehicleColor && setQRValue(currentURL + '/?car=' + currentVehicle.sceneName + '&color=' + currentVehicleColor.name)
// }, [currentVehicle, currentVehicleColor])
//     useEffect(() => {
//         onImageCownload()
//     }, [])
    const onImageCownload = () => {
        const svg = document.getElementById("QRCode");
        //@ts-ignore
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            //@ts-ignore
            ctx.drawImage(img, 0, 0);
            const pngFile = canvas.toDataURL("image/png");

            setQRImg(pngFile)
        };
        img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
    };
    const saveQrJpg = () => {
        //@ts-ignore
        // domtoimage.toJpeg(document.getElementById('QRImg'), {quality: 0.95,bgcolor:'red'},{style:{background:'red'}})
        //     .then(function (dataUrl) {
        //         const link = document.createElement('a');
        //         link.download = 'QRImg.jpeg';
        //         link.href = dataUrl;
        //         link.click();
        //     });
        //@ts-ignore
        domtoimage.toJpeg(document.getElementById('password'), {quality: 0.95, bgcolor: 'red', height: '100'})
            .then(function (dataUrl) {
                const link = document.createElement('a');
                link.download = 'password.jpeg';
                link.href = dataUrl;
                link.click();
            });
        // setTimeout(()=>{<Redirect to={PATH.START}/>},2000)
        handleClose(!true)
    }
    const handleClose = (susses: boolean) => {
        props.onClose(susses);
    };


    return (
        <Dialog onClose={handleClose} open={props.open}
                // PaperProps={{style: {backgroundColor: 'rgba(255, 255, 255,0.8)'}}
                >
            <DialogContent>
                <DialogContentText><span>アバターとは</span></DialogContentText>
                {/*<img src={QRImg} alt="QRImg" id='QRImg'/>*/}
                {/*<div style={{display: 'none'}}><QRCode value={login} fgColor='#000' size={80} id='QRCode'/></div>*/}
                <QRCode value={login} fgColor='#000' size={80} id='QRCode'/>
                <p id='password' style={{background: '#fff', height: '80px'}}>
                    PIN: {password}
                </p>
                <Button variant={'contained'} color={'primary'} onClick={saveQrJpg}>
                    save
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default QrPinSave;

