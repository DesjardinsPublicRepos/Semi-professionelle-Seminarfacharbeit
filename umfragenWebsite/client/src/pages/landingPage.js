import React, { Fragment } from 'react';
import { Button, Card, Typography, CardContent } from '@material-ui/core';
import Bottom from '../components/bottom';

export default () => {
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

                        <Button variant="contained" color="primary" onClick={() => window.location.href = '/schuelerumfrage'}>
                            Teilehmen
                        </Button>
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

                        <Button variant="contained" color="primary" onClick={() => window.location.href = '/allgemeineUmfrage'}>
                            Teilehmen
                        </Button>
                    </CardContent>
                </Card>
            </div>
            <div style={{ "height": "15vh" }}/>
            <Bottom/>
        </Fragment>
    );
};