const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors');
const app = require('express')();
app.use(cors());

const getEntries = (collection, req, res) => {
	admin.firestore().collection(collection).get()
		.then(data => {
			let entries = [];
			data.forEach(doc => {
				entries.push(doc.data());
			});
			return res.json(entries);
		})
		.catch(err => console.error(err));
}
/*
exports.getAllEntries1 = functions.https.onRequest((req, res) => {
	getEntries('schuelerumfrage', req, res);
});

exports.getAllEntries2 = functions.https.onRequest((req, res) => {
	getEntries('allgemeineUmfrage', req, res);
});

exports.getIp = functions.https.onRequest((req, res) => { 
	return res.json({ "ip": req.ip, "ips": req.ips });
});
*/

app.post('/submit', (req, res) => {
	const data = {
		ip: req.ip == undefined ? "undefined" : req.ip,
		ips: req.ips == undefined ? "undefined" : req.ips,
		date: admin.firestore.Timestamp.fromDate(new Date()),

		q1: req.body.q1,
		q2: req.body.q2,
		q3: req.body.q1,
		q4: req.body.q3,
		q5: req.body.q4,
		q6: req.body.q5,
		q7: req.body.q6,

        q1b: req.body.q1b,
        q2b: req.body.q2b,
        q3b: req.body.q3b,
        q4b: req.body.q4b,
        q5b: req.body.q5b,
        q6b: req.body.q6b,
        q7b: req.body.q7b,

        q10: req.body.q10,
        q11: req.body.q11,
        q12: req.body.q12,

        q20: req.body.q20,
        q21: req.body.q21,

        q30: req.body.q30,
        q31: req.body.q31,
        q32: req.body.q32,

        q40: req.body.q40,
        q41: req.body.q41,

        q50: req.body.q50,
        q51: req.body.q51,

        q60: req.body.q60,

        q70: req.body.q70,

        q80: req.body.q80,
        q81: req.body.q81,

        q90: req.body.q90,
        q91: req.body.q91,
        q92: req.body.q92
	};

	admin.firestore().collection('schuelerumfrage').add(data)
		.then(doc => {
			res.json({ message: `document ${doc.id} created succesfully. ip:${req.ip} ips ${req.ips}`});
		})
		.catch(err => {
			res.status(500).json({ err: err });
			console.error(err);
		});
})
exports.api = functions.region('europe-west1').https.onRequest(app);
/*
exports.submit = functions.https.onRequest((req, res) => {
	const data = {
		//ip: req.ip,
		//ips: req.ips,
		//date: admin.firestore.Timestamp.fromDate(new Date()),

		q1: req.body.q1,
		q2: req.body.q2,
		q3: req.body.q1,
		q4: req.body.q3,
		q5: req.body.q4,
		q6: req.body.q5,
		q7: req.body.q6,
	};

	admin.firestore().collection('schuelerumfrage').add(data)
		.then(doc => {
			res.json({ message: `document ${doc.id} created succesfully`});
		})
		.catch(err => {
			res.status(500).json({ err: err });
			console.error(err);
		});
});*/