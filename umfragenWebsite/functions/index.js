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

app.get('/submit', (req, res) => {
	const data = {
		//ip: req.ip,
		//ips: req.ips,
		date: admin.firestore.Timestamp.fromDate(new Date()),

		/*q1: req.body.q1,
		q2: req.body.q2,
		q3: req.body.q1,
		q4: req.body.q3,
		q5: req.body.q4,
		q6: req.body.q5,
		q7: req.body.q6,*/
	};
	admin.firestore().collection('schuelerumfrage').add(data)
		.then(doc => {
			res.json({ message: `document ${doc.id} created succesfully`});
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