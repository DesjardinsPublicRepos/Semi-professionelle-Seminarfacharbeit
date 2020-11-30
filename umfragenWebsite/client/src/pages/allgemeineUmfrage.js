import React, { Fragment, useState, useEffect } from 'react';
import { Button, Typography, Checkbox, FormControlLabel, TextField } from '@material-ui/core';
import Bottom from '../components/bottom';
import axios from 'axios';
import DefaultCard from '../components/defaultCard';

export default () => {
    const [ q1, setq1 ] = useState(false);
    const [ q2, setq2 ] = useState(false);

    const [ q10, setq10 ] = useState(false);
    const [ q11, setq11 ] = useState(false);
    const [ q12, setq12 ] = useState('');
    const [ q13, setq13 ] = useState('');

    const [ q20, setq20 ] = useState(false);
    const [ q21, setq21 ] = useState(false);

    const [ q30, setq30 ] = useState(false);
    const [ q31, setq31 ] = useState(false);

    const [ q40, setq40 ] = useState(false);
    const [ q41, setq41 ] = useState(false);
    const [ q42, setq42 ] = useState('');

    const [ q50, setq50 ] = useState(false);
    const [ q51, setq51 ] = useState(false);

    const [ q60, setq60 ] = useState('');

    const [ q70, setq70 ] = useState(false);
    const [ q71, setq71 ] = useState(false);

    const [ q80, setq80 ] = useState(false);
    const [ q81, setq81 ] = useState('');

    const [ q90, setq90 ] = useState(false);
    const [ q91, setq91 ] = useState(false);
    const [ q92, setq92 ] = useState('');

    const [ upperAge, setUpperAge ] = useState(0);

    const [ t, sett ] = useState(false);
    const [ submitText, setSubmitText ] = useState('Teilnahme überprüfen...');
    const [ submitEnabled, setSubmitEnabled ] = useState(false);
    const [ serverRes, setServerRes ] = useState('');
    const teilnahmebedingungen = "Die Umfrage findet anonym statt. Bei Teilnahme werden, um mehrfache Abgaben zu verhindern, kurzfristig ipv4- und ipv6-Adressen gespeichert, jedoch ist aus diesen nicht ohne weiteres keine Rückverfolgung möglich. Alle gesammelten Daten sind jederzeit unter https://europe-west1-semi-umfrage.cloudfunctions.net/api/getEntries2 auslesbar.\nDie erhobenen Daten werden ausschließlich schulisch und im Rahmen unserer Seminarfacharbeit verwendet und anschließend gelöscht.\nZur Teilnahme von Minderjährigen ist die Zustimmung der Erziehungsberechtigten erforderlich."
    
    useEffect(() => {
        axios.post('/checkParticipation2', {})
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
        upperAge: upperAge,

        q1: q1,
        q2: q2,

        q10: q10, 
        q11: q11, 
        q12: q12,
        q13: q13,

        q20: q20, 
        q21: q21,

        q30: q30,
        q31: q31,

        q40: q40,
        q41: q41,
        q42: q42,

        q50: q50,
        q51: q51,

        q60: q60,

        q70: q70,
        q71: q71,

        q80: q80,
        q81: q81,

        q90: q90,
        q91: q91,
        q92: q92
    };

    const val = [
        () => upperAge !== 0,
        () => !(q1 + q2 !== 1),
        () => !(q10 + q11 !== 1),
        () => !(q20 + q21 !== 1),
        () => !(q30 + q31 !== 1),
        () => !(q40 + q41 !== 1),
        () => !(q50 + q51 !== 1),
        () => !(q70 + q71 !== 1),
        () => (q80 || q81.length > 0),
        () => !(q90 + q91 !== 1)
    ];
    
    const validate = () =>  !((val[0]() + val[1]() + val[2]() + val[3]() + val[4]() + val[5]() + val[6]() + val[7]() + val[8]() + val[9]() + t) < 11);

    const submit = () => {
        setSubmitEnabled(false);
        setServerRes('');
        setSubmitText('loading...');
        
        if(validate()) {
            let status;

            axios.post('/submit2', reqBody)
                .then(res => {
                    console.error(res);
                    status = res.status;

                    if(status == 200) {
                        setSubmitText('erfolgreich teilgenommen');
                        setServerRes(`Server response: ${status} OK -- Vielen Dank für deine Teilnahme!`);
                    } else { 
                        setSubmitText('fehler');
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

    return(
        <Fragment>
            <div style={{ "display": "flex",  "justifyContent": "center", "alignItems": "center", "marginTop": "10vh", "flexDirection": "column" }}>
                <Typography variant="h4" color="primary" style={{ "marginBottom": "8vh"}}>
                    Allgemeine Umfrage
                </Typography>

                <DefaultCard title="Wie alt sind Sie?" status={ val[0]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={upperAge === 25} onChange={() => setUpperAge(25)}/>} 
                        label="jünger als 25 Jahre" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={upperAge === 45} onChange={() => setUpperAge(45)}/>} 
                        label="25-45 Jahre" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={upperAge === 100} onChange={() => setUpperAge(100)}/>} 
                        label="älter als 45 Jahre" labelPlacement="end"/>
                        <br/><br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={upperAge === 404} onChange={() => setUpperAge(404)}/>} 
                        label="Enthaltung" labelPlacement="end"/>
                </DefaultCard>

                <DefaultCard title="Wählen sie beim Einkaufen erst einen Anbieter und suchen dann ein Produkt oder andersherum?" status={ val[1]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q1} onChange={() => { setq1(!q1); setq2(q1); }}/>} 
                        label="zuerst das Produkt" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q2} onChange={() => { setq2(!q2); setq1(q2); }}/>} 
                        label="zuerst den Anbieter" labelPlacement="end"/>
                        <br/>
                </DefaultCard>

                <DefaultCard title="Kaufen Sie online ein?" status={ val[2]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q10} onChange={() => { setq10(!q10); setq11(q10); }}/>} 
                        label="Ja" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q11} onChange={() => { setq11(!q11); setq10(q11); }}/>} 
                        label="Nein" labelPlacement="end"/>
                        <br/><br/>

                    <TextField id="outlined-multiline-static" label="Wieso?" multiline rows={4} style={{ "margin": "0 10px 10px 0" }} 
                        variant="outlined" value={q12} onChange={e => setq12(e.target.value)}/>

                    <TextField id="outlined-multiline-static" label="Falls ja, welche Produkte und über welche Plattform(en)?" multiline rows={4} 
                        variant="outlined" value={q13} onChange={e => setq13(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Recherchieren sie manchmal vorher im Internet, bevor sie ein Produkt lokal kaufen?" status={ val[3]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q20} onChange={() => { setq20(!q20); setq21(q20); }}/>} 
                        label="Ja" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q21} onChange={() => { setq21(!q21); setq20(q21); }}/>} 
                        label="Nein" labelPlacement="end"/>
                        <br/>
                </DefaultCard>
                
                <DefaultCard title="Kaufen Sie ein Produkt online lieber auf der Website des Herstellers oder auf einem Online-Marktplatz wie Amazon?" status={ val[4]() ? "acc" : "den" }>
                    <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q30} onChange={() => { setq30(!q30); setq31(q30) }}/>} 
                        label="lieber bei Online-Marktplätzen, die vieles anbieten" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q31} onChange={() => { setq31(!q31); setq30(q31) }}/>} 
                        label="lieber bei Herstellern, die sieh auf ihre Produkte spezialisiert haben" labelPlacement="end"/>
                        <br/>
                </DefaultCard>

                <DefaultCard title="Ist das Angebot in Schleusingen ausreichend?" status={ val[5]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q40} onChange={() => { setq40(!q40); setq41(q40); }}/>} 
                        label="Ja" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q41} onChange={() => { setq41(!q41); setq40(q41); }}/>} 
                        label="Nein" labelPlacement="end"/>
                        <br/><br/>

                    <TextField id="outlined-multiline-static" label="Wenn nein, welche Produkte fehlen?" multiline rows={4} 
                        variant="outlined" value={q42} onChange={e => setq42(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Weichen Sie oder Familienmitglieder aufgrund des geringen Angebotes auf andere Städte in der Umgebung aus?" status={ val[6]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q50} onChange={() => { setq50(!q50); setq51(q50); }}/>} 
                        label="Ja" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q51} onChange={() => { setq51(!q51); setq50(q51); }}/>} 
                        label="Nein" labelPlacement="end"/>
                        <br/>
                </DefaultCard>

                <DefaultCard title="Wieso bevorzugen sie Online/ stationären Einzelhandel über dem jeweils anderen?" status="neutral">
                    <br/>
                    <TextField id="outlined-multiline-static" label="" multiline rows={4} 
                        variant="outlined" value={q60} onChange={e => setq60(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Denken Sie, dass der Onlinehandel den lokalen ersetzen kann?" status={ val[7]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q70} onChange={() => { setq70(!q70); setq71(q70); }}/>} 
                        label="Ja" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q71} onChange={() => { setq71(!q71); setq70(q71); }}/>} 
                        label="Nein" labelPlacement="end"/>
                        <br/>
                </DefaultCard>

                <DefaultCard title="Haben sich ihre Kaufgewohnheiten in den letzten Jahren geändert?" status={ val[8]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q80} onChange={() => setq80(!q80)}/>} 
                            label="Nein" labelPlacement="end"/>
                        <br/><br/>
                    <TextField id="outlined-multiline-static" label="Ja, z. B. mehr online/stationär" multiline rows={4} 
                        variant="outlined" value={q81} onChange={e => setq81(e.target.value)}/>
                </DefaultCard>

                <DefaultCard title="Sehen sie Probleme bzgl. des Onlinehandels?" status={ val[9]() ? "acc" : "den" }>
                    <FormControlLabel control={<Checkbox color="primary" checked={q90} onChange={() => { setq90(!q90); setq91(q90); }}/>} 
                        label="Nein" labelPlacement="end"/>
                        <br/>
                    <FormControlLabel control={<Checkbox color="primary" checked={q91} onChange={() => { setq91(!q91); setq90(q91); }}/>} 
                        label="Ja" labelPlacement="end"/>
                        <br/><br/>
                    <TextField id="outlined-multiline-static" label="Ja, z. B. ..." multiline rows={4} 
                        variant="outlined" value={q92} onChange={e => setq92(e.target.value)}/>
                </DefaultCard>

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

                <div style={{ "height": "2vh" }}/>
                <small>{serverRes}</small>
                <div style={{ "height": "10vh" }}/>
            </div>
            <Bottom/>
        </Fragment>
    );
};