const router = require('express').Router();
let Response = require('../models/responses.model');

router.route('/saveResponse').post((req, res) => {
    console.log(req.body);
    const name = req.body.name;
    const situationType = req.body.situationType;
    const opponentType = req.body.opponentType;
    const doesCooperation = req.body.doesCooperation;
    
    const newResponse = new Response({ name, situationType, opponentType, doesCooperation });

    newResponse.save()
    .then(() => res.status(200).send("success"))
    .catch(err => res.status(400).send(err))
})

module.exports = router;