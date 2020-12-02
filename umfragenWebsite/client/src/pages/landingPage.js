import React, { Fragment, useState, useEffect } from 'react';
import { Button, Card, Typography, CardContent, Dialog,  DialogContent } from '@material-ui/core';
import Bottom from '../components/bottom';
import axios from 'axios';

import pdf from '../media/schuelerumfrage.pdf';
import tex from '../media/schuelerumfrage.tex';

export default () => {

    const [ text1, setText1 ] = useState('teilnahme überprüfen...');
    const [ enabled1, setEnabled1 ] = useState(false);

    const [ text2, setText2 ] = useState('teilnahme überprüfen...');
    const [ enabled2, setEnabled2 ] = useState(false);

    const [ auswertungOpen, setAuswertungOpen ] = useState(false);

    useEffect(() => {
        checkParticipation();
    }, []);

    const checkParticipation = () => {
        axios.post('/checkParticipation1', {})
            .then(res => {
                if(res.status == 200) {
                    setEnabled1(true);
                    setText1('teilnehmen');
                }
            })
            .catch(e => {
                setText1('umfrage bereits eingereicht'); 
            });

        axios.post('/checkParticipation2', {})
            .then(res => {
                if(res.status == 200) {
                    setEnabled2(true);
                    setText2('teilnehmen');
                }
            })
            .catch(e => {
                setText2('umfrage bereits eingereicht'); 
            });
    }

    return (
        <Fragment>
            <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "10vh", "flexDirection": "column" }}>
                <Typography variant="h4">
                    Onlinehandel-Umfragen
                </Typography>

                <div style={{ "height": "10vh" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        <Typography variant="h5">
                            Schülerumfrage
                        </Typography>

                        <Typography>
                            Eine Umfrage für Schüler des Georg-Ernst-Gymnasiums
                        </Typography>

                            <div style={{ "height": "3vh" }}/>

                        {enabled1 ?
                            <Button color="primary" onClick={() => window.location.href = '/schuelerumfrage'}>
                                {text1}
                            </Button>
                        :
                            <Button disabled color="primary" onClick={() => window.location.href = '/schuelerumfrage'}>
                                {text1}
                            </Button>
                        }
                        <br/><br/>
                        <Button color="primary" variant="contained" onClick={() => setAuswertungOpen(true)}>
                            Auswertung
                        </Button>

                        <Dialog open={auswertungOpen} onClose={() => setAuswertungOpen(false)} fullWidth maxWidth="sm">
                            <DialogContent >
                                <Button variant="contained" color="primary" onClick={() => window.location.href = 'https://europe-west1-semi-umfrage.cloudfunctions.net/api/getEntries1'}>Rohdaten</Button>
                                <br/><br/>
                                <Button variant="contained" color="primary" onClick={() => window.open(tex)}>Auswertung.tex</Button>
                                <br/><br/>
                                <Button variant="contained" color="primary" onClick={() => window.open(pdf)}>Auswertung.pdf</Button>
                                <br/><br/>
                            </DialogContent>
                        </Dialog>
                    </CardContent>
                </Card>

                <div style={{ "height": "10vh" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        <Typography variant="h5">
                            Allgemeine Umfrage
                        </Typography>

                        <Typography>
                            An dieser Umfrage kann jeder teilnehmen
                        </Typography>

                            <div style={{ "height": "3vh" }}/>

                        {enabled2 ?
                            <Button variant="contained" color="primary" onClick={() => window.location.href = '/allgemeineUmfrage'}>
                                {text2}
                            </Button>
                        :
                            <Button disabled variant="contained" color="primary" onClick={() => window.location.href = '/allgemeineUmfrage'}>
                                {text2}
                            </Button>
                        }
                    </CardContent>
                </Card>
            </div>
            <div style={{ "height": "15vh" }}/>
            <Bottom/>
        </Fragment>
    );
};