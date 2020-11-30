import React, { Fragment } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

export default ({ label, checked, onChange }) => (
    <Fragment>
        <FormControlLabel control={<Checkbox color="primary" checked={checked} onChange={onChange}/>} 
        label={label} labelPlacement="end"/>

        <br/>
    </Fragment>
);