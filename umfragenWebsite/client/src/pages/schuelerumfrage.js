import React, { Fragment, useState } from 'react';
import { Button, Card, Typography, CardContent, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, FormGroup, TextField } from '@material-ui/core';
import Bottom from '../components/bottom';
import axios from 'axios';

export default () => {
    const [ q1, setq1 ] = useState(false);
    const [ q2, setq2 ] = useState(false);
    const [ q3, setq3 ] = useState(false);
    const [ q4, setq4 ] = useState(false);
    const [ q5, setq5 ] = useState(false);
    const [ q6, setq6 ] = useState(false);
    const [ q7, setq7 ] = useState(false);

    const [ q1b, setq1b ] = useState(false);
    const [ q2b, setq2b ] = useState(false);
    const [ q3b, setq3b ] = useState(false);
    const [ q4b, setq4b ] = useState(false);
    const [ q5b, setq5b ] = useState(false);
    const [ q6b, setq6b ] = useState(false);
    const [ q7b, setq7b ] = useState(false);

    const [ q10, setq10 ] = useState(false);
    const [ q11, setq11 ] = useState(false);
    const [ q12, setq12 ] = useState('');

    const [ q20, setq20 ] = useState(false);
    const [ q21, setq21 ] = useState('');

    const [ q30, setq30 ] = useState(false);
    const [ q31, setq31 ] = useState(false);
    const [ q32, setq32 ] = useState(false);

    const [ q40, setq40 ] = useState(false);
    const [ q41, setq41 ] = useState('');

    const [ q50, setq50 ] = useState(false);
    const [ q51, setq51 ] = useState('');

    const [ q60, setq60 ] = useState('');

    const [ q70, setq70 ] = useState('');

    const [ q80, setq80 ] = useState(false);
    const [ q81, setq81 ] = useState(false);

    const [ q90, setq90 ] = useState(false);
    const [ q91, setq91 ] = useState(false);
    const [ q92, setq92 ] = useState('');

    const [ t, sett ] = useState(false);
    const [ submitText, setSubmitText ] = useState('Umfrage einreichen');
    const [ submitEnabled, setSubmitEnabled ] = useState(true);
    const teilnahmebedingungen = "Die Umfrage findet anonym statt. Bei Teilnahme werden, um mehrfache Abgaben zu verhindern, kurzfristig ipv4- und ipv6-Adressen gespeichert, jedoch ist aus diesen nicht ohne einen bedeutend großen Mehraufwand eine Rückverfolgung möglich. Alle gesammelten Daten sind jederzeit unter https://europe-west1-semi-umfrage.cloudfunctions.net/api/getEntries1 auslesbar.\nDie erhobenen Daten werden ausschließlich schulisch und im Rahmen unserer Seminarfacharbeit verwendet und anschließend gelöscht.\nZur Teilnahme von Minderjährigen ist die Zustimmung der Erziehungsberechtigten erforderlich."
    
    const reqBody = {
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,

        q1b: q1b,
        q2b: q2b,
        q3b: q3b,
        q4b: q4b,
        q5b: q5b,
        q6b: q6b,
        q7b: q7b,

        q10: q10,
        q11: q11,
        q12: q12,

        q20: q20,
        q21: q21,

        q30: q30,
        q31: q31,
        q32: q32,

        q40: q40,
        q41: q41,

        q50: q50,
        q51: q51,

        q60: q60,

        q70: q70,

        q80: q80,
        q81: q81,

        q90: q90,
        q91: q91,
        q92: q92
    }

    const submit = () => {
        axios.post('/submit', reqBody)
        .then(res => {
            console.error(res);
            if(res.status == 200) {
                setSubmitText('erfolgreich teilgenommen');
                setSubmitEnabled(false);
            }
            res.status == 200 ? setSubmitText('erfolgreich teilgenommen') : setSubmitText('fehler')
        })
        .catch(e => {
            console.error(e);
        });
    } 

    return (
        <Fragment>
            <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "10vh", "flexDirection": "column" }}>
                <Typography variant="h4" color="primary" style={{ "marginBottom": "8vh"}}>
                    Schülerumfrage
                </Typography>
                
                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Würden Sie die folgenden Produkte eher Online oder vor Ort kaufen?
                        </Typography>
                        <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "3vh", "flexDirection": "row" }}>
                            <div style={{ "marginLeft": "auto", "height": "100%" }}>
                                <div style={{ "height": "4px" }}/>
                                <Typography>Nahrung</Typography>
                                <div style={{ "height": "1vh" }}/>
                                <div style={{ "height": "18px" }}/>
                                <Typography>Technik</Typography>
                                <div style={{ "height": "1vh" }}/>
                                <div style={{ "height": "18px" }}/>
                                <Typography>Bekleidung</Typography>
                                <div style={{ "height": "1vh" }}/>
                                <div style={{ "height": "18px" }}/>
                                <Typography>Möbel</Typography>
                                <div style={{ "height": "1vh" }}/>
                                <div style={{ "height": "18px" }}/>
                                <Typography>Spielwaren</Typography>
                                <div style={{ "height": "1vh" }}/>
                                <div style={{ "height": "18px" }}/>
                                <Typography>Haushaltswaren</Typography>
                                <div style={{ "height": "1vh" }}/>
                                <div style={{ "height": "18px" }}/>
                                <Typography>Tierprodukte</Typography>
                            </div>

                            <div style={{ "margin": "auto" }}/>

                            <FormControl component="fieldset" style={{ "marginRight": "auto" }}>
                                <FormLabel component="legend">eher Online/ vor Ort</FormLabel>
                                <FormGroup>
                                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q1} onChange={() => setq1(!q1)}/>
                                        <div style={{ "width": "100%"}}/>
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q1b} onChange={() => setq1b(!q1b)}/>
                                    </div>
                                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q2} onChange={() => setq2(!q2)}/>
                                        <div style={{ "width": "100%"}}/>
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q2b} onChange={() => setq2b(!q2b)}/>
                                    </div>
                                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q3} onChange={() => setq3(!q3)}/>
                                        <div style={{ "width": "100%"}}/>
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q3b} onChange={() => setq3b(!q3b)}/>
                                    </div>
                                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q4} onChange={() => setq4(!q4)}/>
                                        <div style={{ "width": "100%"}}/>
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q4b} onChange={() => setq4b(!q4b)}/>
                                    </div>
                                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q5} onChange={() => setq5(!q5)}/>
                                        <div style={{ "width": "100%"}}/>
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q5b} onChange={() => setq5b(!q5b)}/>
                                    </div>
                                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q6} onChange={() => setq6(!q6)}/>
                                        <div style={{ "width": "100%"}}/>
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q6b} onChange={() => setq6b(!q6b)}/>
                                    </div>
                                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q7} onChange={() => setq7(!q7)}/>
                                        <div style={{ "width": "100%"}}/>
                                        <Checkbox color="primary" style={{ "width": "24px"}} checked={q7b} onChange={() => setq7b(!q7b)}/>
                                    </div>
                                </FormGroup>
                                <FormHelperText>No Errors detected</FormHelperText>
                            </FormControl>
                        </div>
                    </CardContent>
                </Card>
                
                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Haben Sie schon einmal etwas Online bestellt, wenn ja über welche Plattform?
                        </Typography>

                        <FormControlLabel control={<Checkbox color="primary" checked={q10} onChange={() => setq10(!q10)}/>} 
                            label="Amazon" labelPlacement="end"/>
                        <br/>
                        <FormControlLabel control={<Checkbox color="primary" checked={q11} onChange={() => setq11(!q11)}/>} 
                            label="Ebay" labelPlacement="end"/>
                        <br/><br/>
                        <TextField id="outlined-multiline-static" label="Andere, z. B. ..." multiline rows={4} 
                            variant="outlined" value={q12} onChange={e => setq12(e.target.value)}/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Gibt es Artikel, die Sie nicht Online bestellen würden?
                        </Typography>

                        <FormControlLabel control={<Checkbox color="primary" checked={q20} onChange={() => setq20(!q20)}/>} 
                            label="Nein" labelPlacement="end"/>
                        <br/><br/>
                        <TextField id="outlined-multiline-static" label="Ja, z. B. ..." multiline rows={4} 
                            variant="outlined" value={q21} onChange={e => setq21(e.target.value)}/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Wie beschreiben Sie ihre Erfahrungen mit dem Onlinehandel?
                        </Typography>

                        <FormControlLabel control={<Checkbox color="primary" checked={q30} onChange={() => setq30(!q30)}/>} 
                            label="eher positiv" labelPlacement="end"/>
                        <br/>
                        <FormControlLabel control={<Checkbox color="primary" checked={q31} onChange={() => setq31(!q31)}/>} 
                            label="eher negativ" labelPlacement="end"/>
                            <br/>
                        <FormControlLabel control={<Checkbox color="primary" checked={q32} onChange={() => setq32(!q32)}/>} 
                            label="neutral" labelPlacement="end"/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Ist das Kaufangebot im schleusinger Umkreis ausreichend?
                        </Typography>

                        <FormControlLabel control={<Checkbox color="primary" checked={q40} onChange={() => setq40(!q40)}/>} 
                            label="Ja" labelPlacement="end"/>
                        <br/><br/>
                        <TextField id="outlined-multiline-static" label="Nein, es fehlt..." multiline rows={4} 
                            variant="outlined" value={q41} onChange={e => setq41(e.target.value)}/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Weichen Sie und ihre Familie beim Einkaufen aufgrund des Angebots auf andere Städte in der Umgebung aus?
                        </Typography>

                        <FormControlLabel control={<Checkbox color="primary" checked={q50} onChange={() => setq50(!q50)}/>} 
                            label="Nein" labelPlacement="end"/>
                        <br/><br/>
                        <TextField id="outlined-multiline-static" label="Ja, z. B. ..." multiline rows={4} 
                            variant="outlined" value={q51} onChange={e => setq51(e.target.value)}/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Welche Kaufmöglichkeiten/ Produkte wünschen Sie sich für den Onlinehandel?
                        </Typography>

                        <br/>

                        <TextField id="outlined-multiline-static" label="" multiline rows={4} 
                            variant="outlined" value={q60} onChange={e => setq60(e.target.value)}/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Welche Kaufmöglichkeiten/ Produkte wünschen Sie sich für den lokalen Handel?
                        </Typography>

                        <br/>

                        <TextField id="outlined-multiline-static" label="" multiline rows={4} 
                            variant="outlined" value={q70} onChange={e => setq70(e.target.value)}/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Kaufen Sie und ihre Familie Gebrauchsgegenstände (mehrfach verwendbare, z. B. Autos, Fernseher usw.) größtenteils neu oder gebraucht?
                        </Typography>

                        <FormControlLabel control={<Checkbox color="primary" checked={q80} onChange={() => setq80(!q80)}/>} 
                            label="meist neu" labelPlacement="end"/>
                        <br/>
                        <FormControlLabel control={<Checkbox color="primary" checked={q81} onChange={() => setq81(!q81)}/>} 
                            label="meist gebraucht" labelPlacement="end"/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <Card>
                    <CardContent>
                        <div style={{ "width": "80vw", "maxWidth": "600px"}}/>
                        
                        <Typography variant="h6" style={{ "maxWidth": "600px"}}>
                            Was ist für Sie relevanter? Der Onlinehandel oder der Einzelhandel?
                        </Typography>

                        <FormControlLabel control={<Checkbox color="primary" checked={q90} onChange={() => setq90(!q90)}/>} 
                            label="Onlinehandel" labelPlacement="end"/>
                        <br/>
                        <FormControlLabel control={<Checkbox color="primary" checked={q91} onChange={() => setq91(!q91)}/>} 
                            label="Einzelhandel" labelPlacement="end"/>
                        <br/><br/>
                        <TextField id="outlined-multiline-static" label="Andere, z. B. ..." multiline rows={4} 
                            variant="outlined" value={q92} onChange={e => setq92(e.target.value)}/>
                    </CardContent>
                </Card>

                <div style={{ "height": "20px" }}/>

                <FormControlLabel control={<Checkbox color="primary" checked={t} onChange={() => sett(!t)}/>} 
                    label="Ich stimme den Teilnahmebedingungen zu" labelPlacement="end"/>
                <div style={{ "height": "20px"}}/>
                <TextField label="" multiline rows={4} value={teilnahmebedingungen} disabled/>

                <div style={{ "height": "20px" }}/>

                <div style={{ "height": "3vh" }}/>
                { submitEnabled ? 
                    <Button variant="contained" color="primary" onClick={submit}>
                        {submitText}
                    </Button>
                :
                    <Button variant="contained" color="primary" onClick={submit} disabled>
                        {submitText}
                    </Button>
                }
                <div style={{ "height": "10vh" }}/>
            </div>
            <Bottom/>
        </Fragment>
    );
};