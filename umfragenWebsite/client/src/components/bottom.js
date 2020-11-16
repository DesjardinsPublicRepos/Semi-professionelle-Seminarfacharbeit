import React, { useState } from 'react';
import { Typography, Button, Dialog,  DialogContent } from '@material-ui/core';
import WrappedButton from './WrappedButton';


export default () => {
    const [ impressumOpen, setImpressumOpen ] = useState(false);

    return (
        <footer>
            <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center" }}>
                <small>made with</small>

                <div style={{ "width": "1%"}}></div>

                <WrappedButton size="30px" onClick={() => window.open('https://firebase.google.com/', '_blank')} title={"Firebase"}>
                    <img src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png" style={{ "width": "100%", "height": "100%" }}/>
                </WrappedButton>

                <WrappedButton size="30px" onClick={() => window.open('https://nodejs.org/en/', '_blank')} title={"Node.js"}>
                    <img src="https://clipartart.com/images/nodejs-icon-clipart-3.png" style={{ "width": "100%", "height": "100%" }}/>
                </WrappedButton>

                <WrappedButton size="25px" onClick={() => window.open('https://reactjs.org', '_blank')} title={"React"}>
                    <img src="https://cdn.worldvectorlogo.com/logos/react.svg" style={{ "width": "100%", "height": "100%" }}/>
                </WrappedButton>

                <WrappedButton size="30px" onClick={() => window.open('https://material-ui.com/', '_blank')} title={"Material-UI"}>
                    <img src="https://material-ui.com/static/logo.png" style={{ "width": "100%", "height": "100%" }}/>
                </WrappedButton>

                <WrappedButton size="30px" onClick={() => window.open('https://redux.js.org/', '_blank')} title={"Redux"}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/redux-283024.png" style={{ "width": "80%", "height": "80%" }}/>
                </WrappedButton>
            </div>
            <div style={{ "height": "1vh"}}/>

            <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center" }}>
                <Button color="primary" onClick={() => setImpressumOpen(true)}>
                    Impressum
                </Button>

                <Dialog open={impressumOpen} onClose={() => setImpressumOpen(false)} fullWidth maxWidth="sm">
                    <DialogContent >
                        <Typography variant="h6">Geile Webseiten GmbH</Typography>
                        <Typography>Kevin Jeremie Pascal Schmidt</Typography>
                        <Typography>Schleusinger Straße 3</Typography>
                        <Typography>98660 Kloster Veßra OT Zollbrück</Typography>
                        <Typography>Kontakt: desjardinslegedz@outlook.de</Typography>
                    </DialogContent>
                </Dialog>

                <div style={{ "width": "10px", "display": "flex",  "justifyContent": "center", "alignItems": "center" }}>
                    <Typography>
                        |
                    </Typography>
                </div>

                <Button color="primary">
                    Kontakt
                </Button>
            </div>        
        </footer>
    )
}