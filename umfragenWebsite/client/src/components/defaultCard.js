import React, { Fragment } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { HighlightOff as Den, CheckCircleOutline as Acc, CallReceived } from '@material-ui/icons';
import { red, green } from '@material-ui/core/colors';

export default ({ title, children, status = 'none' }) => (
    <Fragment>
        <Card>
            <CardContent>
                <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                
                <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                    {title}
                </Typography>

                {children}

                <br/>

                { status === 'den' &&
                    <div style={{ "marginLeft": "calc(100% - 30px)" }}>
                        <Den style={{ color: red[700] }}/>
                    </div>
                }
                { status === 'acc' &&
                    <div style={{ "marginLeft": "calc(100% - 30px)" }}>
                        <Acc style={{ color: green[700] }}/>
                    </div>
                }
            </CardContent>
        </Card>

        <div style={{ "height": "20px" }}/>
    </Fragment>
)
