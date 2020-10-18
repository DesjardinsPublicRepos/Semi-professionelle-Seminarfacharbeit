import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Grid, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
class Bottom extends Component {
    render() {
        return (
            <footer>
                <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center" }}>
                    <Button color="primary">
                        Impressum
                    </Button>

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
}

export default Bottom
