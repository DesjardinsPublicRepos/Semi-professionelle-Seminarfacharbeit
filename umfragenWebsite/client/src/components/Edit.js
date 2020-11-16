import React, { Fragment } from 'react';
import { TextField } from '@material-ui/core';

export default ({ label, value, onChange, style }) => (
    <Fragment>
        <br/>
        
        <TextField id="outlined-multiline-static" label={label} multiline rows={4} 
            variant="outlined" value={value} onChange={onChange} style={style}/>
    </Fragment>
);