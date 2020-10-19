import React, { Component, Fragment } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
class Bottom extends Component {
    render() {
        return (
            <Fragment>
                <Button color="primary">
                        Impressum
                </Button>
            </Fragment>
        )
    }
}

export default Bottom
