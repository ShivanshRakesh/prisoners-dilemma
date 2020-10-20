const router = require('express').Router();
let Response = require('../models/responses.model');

documentId = {
    'names': "5f8eaa98dcfec9687af86623",
    0: "5f8ddd2f453a0800046e658e",      // original case
    1: "5f8de5e6d9ffdbfb4478d636",      // reduced punishment
    2: "5f8de60bd9ffdbfb4478d637",      // increased punishment
    3: "5f8de61cd9ffdbfb4478d638"       // cooperation favoured
}

router.route('/collectName').post((req, res) => {
    if (req.body.name.length > 0 && req.body.name.trim()) {
        console.log("Adding name " + req.body.name + " to the collection...");
        Response.findById(documentId['names'])
            .then(data => {
                data['names'].push(req.body.name);

                Response.findByIdAndUpdate(documentId['names'], data)
                    .then(() => res.status(200).send("success"))
                    .catch(err => res.status(400).send(err));
            })
            .catch(err => res.status(400).send(err));
    } else {
        res.status(200).send("empty input");
    }
})

router.route('/saveResponse').post((req, res) => {

    Response.findById(documentId[Number(req.body.type)])
        .then(data => {
            if (req.body.cooperatesWhenIntelligentAgent) {
                data['cooperationsIntelligent'] += 1;
            } else {
                data['defectionsIntelligent'] += 1;
            }

            if (req.body.cooperatesWhenNotIntelligentAgent) {
                data['cooperationsNotIntelligent'] += 1;
            } else {
                data['defectionsNotIntelligent'] += 1;
            }

            Response.findByIdAndUpdate(documentId[Number(req.body.type)], data)
                .then(() => res.status(200).send("success"))
                .catch(err => res.status(400).send(err));
        })
        .catch(err => res.status(400).send(err));
})

module.exports = router;