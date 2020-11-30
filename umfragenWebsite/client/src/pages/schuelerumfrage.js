import React, { Fragment, useState, useEffect } from 'react';
import { Button, Typography, Checkbox, FormControl, FormControlLabel, FormLabel, FormGroup, TextField } from '@material-ui/core';
import Bottom from '../components/bottom';
import axios from 'axios';
import DefaultCard from '../components/defaultCard';
import CheckLabel from '../components/CheckLabel';
import Edit from '../components/Edit';

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

    const [ q100, setq100 ] = useState(false);
    const [ q101, setq101 ] = useState('');

    const [ q110, setq110 ] = useState(false);
    const [ q111, setq111 ] = useState(false);

    const [ q121, setq121 ] = useState('');

    const [ q130, setq130 ] = useState(-1);

    const [ q140, setq140 ] = useState(-1);

    const [ t, sett ] = useState(false);
    const [ submitText, setSubmitText ] = useState('Teilnahme überprüfen...');
    const [ submitEnabled, setSubmitEnabled ] = useState(false);
    const [ serverRes, setServerRes ] = useState('');
    const teilnahmebedingungen = "Die Umfrage findet anonym statt. Bei Teilnahme werden, um mehrfache Abgaben zu verhindern, kurzfristig ipv4- und ipv6-Adressen gespeichert, jedoch ist aus diesen ohne weiteres keine Rückverfolgung möglich. Alle gesammelten Daten sind jederzeit unter https://europe-west1-semi-umfrage.cloudfunctions.net/api/getEntries1 auslesbar.\nDie erhobenen Daten werden ausschließlich schulisch und im Rahmen unserer Seminarfacharbeit verwendet und anschließend gelöscht.\nZur Teilnahme von Minderjährigen ist die Zustimmung der Erziehungsberechtigten erforderlich."
    
    useEffect(() => {
        axios.post('/checkParticipation1', {})
            .then(res => {
                if(res.status == 200) {
                    setSubmitEnabled(true);
                    setSubmitText('umfrage einreichen');
                }
            })
            .catch(e => {
                setSubmitText('umfrage bereits eingereicht'); 
                setServerRes('Vielen Dank für deine Teilnahme!');
            });
    }, []);

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

        q100: q100,
        q101: q101,

        q110: q110,
        q111: q111,

        q121: q121,

        q130: q130,

        q140: q140
    };

    const val = [
        () => !(
            q1 + q1b !== 1 || 
            q2 + q2b !== 1 ||
            q3 + q3b !== 1 ||
            q4 + q4b !== 1 ||
            q5 + q5b !== 1 ||
            q6 + q6b !== 1 ||
            q7 + q7b !== 1
        ),
        () => (q20 || q21.length > 0),
        () => !(q30 + q31 + q32 !== 1),
        () => (q40 || q41.length > 0),
        () => (q50 || q51.length > 0),
        () => !(q80 + q81 !== 1),
        () => !(q90 + q91 !== 1),
        () => !(q100 + (q101.length > 0) !== 1),
		() => !(q110 + q111 !== 1),
		() => q130 > -1,
		() => q140 > -1
    ];

    const validate = () => !((val[0]() + val[1]() + val[2]() + val[3]() + val[4]() + val[5]() + val[6]() + val[7]() + val[8]() + t) < 10);

    const submit = () => {
        setServerRes('');
        setSubmitEnabled(false);
        setSubmitText('loading...');
        
        if(validate()) {
            let status;

            axios.post('/submit', reqBody)
                .then(res => {
                    console.error(res);
                    status = res.status;

                    if(status == 200) {
                        setSubmitText('erfolgreich teilgenommen');
                        setServerRes(`Server response: ${status} OK -- Vielen Dank für deine Teilnahme!`);
                    } else {
                        setSubmitText('fehler');
                        setServerRes(`Server response: Err ${status}`);
                        setSubmitEnabled(true);
                    }
                })
                .catch(e => {
                    console.error(e);
                    setServerRes(`Server response: Err ${status}`);
                    setSubmitText('umfrage einreichen');
                    setSubmitEnabled(true);
                });
        } else {
            setServerRes('Error 400: Wiedersprüchliche Eingabedaten. Bitte überprüfen Sie die Umfrage auf rote Kreuze und darauf, dass die Teilnahmebedingungen akzeptiert wurden.');
            setSubmitText('umfrage einreichen');
            setSubmitEnabled(true);
        }
    };

    const CheckView = ({ checked, onChange }) => {
        return(
            <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "1vh", "flexDirection": "row" }}>                        
                <Checkbox color="primary" style={{ "width": "24px"}} checked={checked[0]} onChange={onChange[0]}/>
                <div style={{ "width": "100%"}}/>
                <Checkbox color="primary" style={{ "width": "24px"}} checked={checked[1]} onChange={onChange[1]}/>
            </div>
        );
    };

    return(
        <Fragment>
            <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "10vh", "flexDirection": "column" }}>
                <Typography variant="h4" color="primary" style={{ "marginBottom": "8vh"}}>
                    Schülerumfrage
                </Typography>
                

                <DefaultCard title="Würden Sie die folgenden Produkte eher Online oder vor Ort kaufen?" status={ val[0]() ? "acc" : "den" }>
                    <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "3vh", "flexDirection": "row" }}>
                        <div style={{ "marginLeft": "auto", "height": "100%" }}>
                            <div style={{ "height": "23px" }}/>
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
                                <CheckView checked={[ q1, q1b ]}
                                    onChange={[
                                        () => { setq1(!q1); setq1b(q1); },
                                        () => { setq1b(!q1b); setq1(q1b); }
                                    ]}/>

                                <CheckView checked={[ q2, q2b ]}
                                    onChange={[
                                        () => { setq2(!q2); setq2b(q2); },
                                        () => { setq2b(!q2b); setq2(q2b); }
                                    ]}/>

                                <CheckView checked={[ q3, q3b ]}
                                    onChange={[
                                        () => { setq3(!q3); setq3b(q3); },
                                        () => { setq3b(!q3b); setq3(q3b); }
                                    ]}/>

                                <CheckView checked={[ q4, q4b ]}
                                    onChange={[
                                        () => { setq4(!q4); setq4b(q4); },
                                        () => { setq4b(!q4b); setq4(q4b); }
                                    ]}/>

                                <CheckView checked={[ q5, q5b ]}
                                    onChange={[
                                        () => { setq5(!q5); setq5b(q5); },
                                        () => { setq5b(!q5b); setq5(q5b); }
                                    ]}/>

                                <CheckView checked={[ q6, q6b ]}
                                    onChange={[
                                        () => { setq6(!q6); setq6b(q6); },
                                        () => { setq6b(!q6b); setq6(q6b); }
                                    ]}/>

                                <CheckView checked={[ q7, q7b ]}
                                    onChange={[
                                        () => { setq7(!q7); setq7b(q7); },
                                        () => { setq7b(!q7b); setq7(q7b); }
                                    ]}/>
                            </FormGroup>
                        </FormControl>
                    </div>
                </DefaultCard>
                
                <DefaultCard title="Haben Sie schon einmal etwas Online bestellt, wenn ja über welche Plattform?" status="neutral">
                    <CheckLabel checked={q10} onChange={() => setq10(!q10) } label="Amazon"/>

                    <CheckLabel checked={q11} onChange={() => setq11(!q11) } label="Ebay"/>
                    
                    <Edit label="Andere, z. B. ..." value={q12} onChange={e => setq12(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Gibt es Artikel, die Sie nicht Online bestellen würden?" status={ val[1]() ? "acc" : "den" }>
                    <CheckLabel checked={q20} onChange={() => setq20(!q20)} label="Nein"/>
                    
                    <Edit label="Ja, z. B. ..." value={q21} onChange={e => setq21(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Wie beschreiben Sie ihre Erfahrungen mit dem Onlinehandel?" status={ val[2]() ? "acc" : "den" }>
                    <CheckLabel checked={q30} onChange={() => { setq30(1); setq31(0); setq32(0); }} label="eher positiv"/>

                    <CheckLabel checked={q31} onChange={() => { setq30(0); setq31(1); setq32(0); }} label="eher negativ"/>

                    <CheckLabel checked={q32} onChange={() => { setq30(0); setq31(0); setq32(1); }} label="neutral"/>
                </DefaultCard>

                <DefaultCard title="Ist das Kaufangebot im schleusinger Umkreis ausreichend?" status={ val[3]() ? "acc" : "den" }>
                    <CheckLabel checked={q40} onChange={() => setq40(!q40)} label="Ja"/>
                    
                    <Edit label="Nein, es fehlt..." value={q41} onChange={e => setq41(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Weichen Sie und ihre Familie beim Einkaufen aufgrund des Angebots auf andere Städte in der Umgebung aus?" status={ val[4]() ? "acc" : "den" }>
                    <CheckLabel checked={q50} onChange={() => setq50(!q50)} label="Nein"/>
                    
                    <Edit label="Ja, z. B. nach ..." style={{ "margin": "0 10px 10px 0" }} value={q51} onChange={e => setq51(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Welche Produkte/ Änderungen im Verkaufsprozess wünschen Sie sich für den Onlinehandel?" status="neutral">
                    <Edit label="" value={q60} onChange={e => setq60(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Welche Produkte/ Änderungen im Verkaufsprozess wünschen Sie sich für den lokalen Handel?" status="neutral">
                    <Edit label="" value={q70} onChange={e => setq70(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Welche Stärken sehen Sie bzgl. des stationären Einzelhandels im ländlichen Bereich?" status="neutral">
                    <Edit label="" value={q121} onChange={e => setq121(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Kaufen Sie und ihre Familie Gebrauchsgegenstände (mehrfach verwendbare, z. B. Autos, Fernseher usw.) größtenteils neu oder gebraucht?" status={ val[5]() ? "acc" : "den" }>
                    <CheckLabel checked={q80} onChange={() => { setq80(!q80); setq81(q80); }} label="meist neu"/>

                    <CheckLabel checked={q81} onChange={() => { setq81(!q81); setq80(q81); }} label="meist gebraucht"/>
                </DefaultCard>

                <DefaultCard title="Was ist für Sie relevanter? Der Onlinehandel oder der Einzelhandel?" status={ val[6]() ? "acc" : "den" }>
                    <CheckLabel checked={q90} onChange={() => { setq90(!q90); setq91(q90); }} label="Onlinehandel"/>

                    <CheckLabel checked={q91} onChange={() => { setq91(!q91); setq90(q91); }} label="Einzelhandel"/>
                </DefaultCard>

                <DefaultCard title="Welche Probleme/ Komplikationen sehen sie beim Kauf von Artikeln Online?" status={ val[7]() ? "acc" : "den" }>
                    <CheckLabel checked={q100} onChange={() => setq100(!q100)} label="keine"/>

                    <Edit label="z. B. ..." value={q101} onChange={e => setq101(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Wie schätzen sie ihre Preissensibilität ein?" status={ val[8]() ? "acc" : "den" }>
                    <CheckLabel checked={q110} onChange={() => { setq110(!q110); setq111(q110); }} label="eher gering"/>

                    <CheckLabel checked={q111} onChange={() => { setq111(!q111); setq110(q111); }} label="eher hoch"/>
                </DefaultCard>

                <DefaultCard title="Haben sich ihre Kaufgewohnheiten während der Corona-Zeit geändert?" status={ val[9]() ? "acc" : "den" }>
                    <CheckLabel checked={q130 === 0} onChange={() => setq130(0)} label="Nein"/>

                    <CheckLabel checked={q130 === 1} onChange={() => setq130(1)} label="Ja, ich kaufe mehr stationär"/>

                    <CheckLabel checked={q130 === 2} onChange={() => setq130(2)} label="Ja, ich kaufe mehr online"/>
                </DefaultCard>

                <DefaultCard title="Wann haben Sie das erste mal etwas online gekauft?" status={ val[10]() ? "acc" : "den" }>
                    <CheckLabel checked={q140 === 0} onChange={() => setq140(0)} label="Noch nie"/>

                    <CheckLabel checked={q140 === 1} onChange={() => setq140(1)} label="Vor 5 oder mehr Jahren"/>

                    <CheckLabel checked={q140 === 2} onChange={() => setq140(2)} label="Vor 1 bis 5 Jahren"/>

                    <CheckLabel checked={q140 === 3} onChange={() => setq140(3)} label="Vor 1 Jahr oder später"/>
                </DefaultCard>


				<CheckLabel checked={t} onChange={() => sett(!t)} label="Ich stimme den Teilnahmebedingungen zu"/>

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

                <div style={{ "height": "2vh" }}/>
                <small>{serverRes}</small>
                <div style={{ "height": "10vh" }}/>
            </div>
            <Bottom/>
        </Fragment>
    );
};