const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const app = require('express')().use(require('cors')());

const getEntries = (collection, res) => {
	admin.firestore().collection(collection).get()
		.then(data => {
			let entries = [];
			data.forEach(doc => {
				entries.push(doc.data());
			});
			return res.json(entries);
		})
		.catch(err => console.error(err));
};

app.get('/getIp', (req, res) => {
	return res.json({ "ip": req.ip, "ips": req.ips });
});


app.get('/getEntries1', (req, res) => {
	getEntries('schuelerumfrage', res);
});

app.get('/getEntries2', (req, res) => {
	getEntries('allgemeineUmfrage', res);
});


app.post('/checkParticipation1', (req, res) => {
	admin.firestore().collection('schuelerumfrage').where('ip', '==', require('request-ip').getClientIp(req)).get()
		.then(data => {
			data.forEach(() => {
				return res.status(403).json('already participated');
			});
			return res.status(200).json('participation allowed');
		})
		.catch(err => {
			console.error(err);
			res.status(500).json({ err: err });
		});
});

app.post('/checkParticipation2', (req, res) => {
	admin.firestore().collection('allgemeineUmfrage').where('ip', '==', require('request-ip').getClientIp(req)).get()
		.then(data => {
			data.forEach(() => {
				return res.status(403).json('already participated');
			});
			return res.status(200).json('participation allowed');
		})
		.catch(err => {
			console.error(err);
			res.status(500).json({ err: err });
		});
});


app.post('/getParticipation1', (req, res) => {
	admin.firestore().collection('schuelerumfrage').where('ip', '==', require('request-ip').getClientIp(req)).get()
		.then(data => {
			entries = [];
			let i = 0;
			data.forEach(doc => {
				return res.status(205).json(doc.data());
			});
			return res.status(200).json('participation allowed');
		})
		.catch(err => {
			console.error(err);
			res.status(500).json({ err: err });
		});
});


app.post('/submit', (req, res) => {
	const data = {
		ip: require('request-ip').getClientIp(req),
		date: admin.firestore.Timestamp.fromDate(new Date()),

		q1: req.body.q1,
		q2: req.body.q2,
		q3: req.body.q3,
		q4: req.body.q4,
		q5: req.body.q5,
		q6: req.body.q6,
		q7: req.body.q7,

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
		
		q100: req.body.q100,
		q101: req.body.q101,

		q110: req.body.q110,
		q111: req.body.q111,

		q121: req.body.q121
	};

	admin.firestore().collection('schuelerumfrage').add(data)
		.then(doc => {
			res.json({ message: `document ${doc.id} succesfully pushed to schuelerumfrage. ip:${require('request-ip').getClientIp(req)}`});
		})
		.catch(err => {
			res.status(500).json({ err: err });
			console.error(err);
		});
});

app.post('/submit2', (req, res) => {
	const data = {
		ip: require('request-ip').getClientIp(req),
		date: admin.firestore.Timestamp.fromDate(new Date()),

		upperAge: req.body.upperAge,

		q1: req.body.q1,
        q2: req.body.q2,

        q10: req.body.q10, 
        q11: req.body.q11, 
        q12: req.body.q12,
        q13: req.body.q13,

        q20: req.body.q20, 
        q21: req.body.q21,

        q30: req.body.q30,
        q31: req.body.q31,

        q40: req.body.q40,
        q41: req.body.q41,
        q42: req.body.q42,

        q50: req.body.q50,
        q51: req.body.q51,

        q60: req.body.q60,

        q70: req.body.q70,
        q71: req.body.q71,

        q80: req.body.q80,
        q81: req.body.q81,

        q90: req.body.q90,
        q91: req.body.q91,
        q92: req.body.q92
	};

	admin.firestore().collection('allgemeineUmfrage').add(data)
		.then(doc => {
			res.json({ message: `document ${doc.id} sucessfully pushed to allgemeineUmfrage. ip:${require('request-ip').getClientIp(req)}`});
		})
		.catch(err => {
			res.status(500).json({ err: err });
			console.error(err);
		});
});

exports.api = functions.region('europe-west1').https.onRequest(app);