import React, { Fragment } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export default ({ title, children }) => (
    <Fragment>
        <Card>
            <CardContent>
                <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                
                <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                    {title}
                </Typography>

                {children}
            </CardContent>
        </Card>

        <div style={{ "height": "20px" }}/>
    </Fragment>
)
