const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();


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

exports.getAllEntries1 = functions.https.onRequest((req, res) => {
	getEntries('schuelerumfrage', req, res);
});

exports.getAllEntries2 = functions.https.onRequest((req, res) => {
	getEntries('allgemeineUmfrage', req, res);
});

//https://ifconfig.co/ip

exports.getIp = functions.https.onRequest((req, res) => { 
	return res.json({ "ip": req.ip, "ips": req.ips });
});

exports.submit = functions.https.onRequest((req, res) => {
	const data = {
		ip: req.ip,
		ips: req.ips,
		date: admin.firestore.Timestamp.fromDate(new Date()),

		q11: req.q11,
		q12: req.q12,
		q13: req.q11,
		q14: req.q13,
		q15: req.q14,
		q16: req.q15,
		q17: req.q16,

		q2: req.q2,
		q2text: req.q2text
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