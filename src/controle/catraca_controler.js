const coletor = require("../models/coletor");

module.exports = {
    async index (req,res){
        const {device_id,object_changes} = req.body;

        const catraca = await coletor.create({device_id, object_changes});

        console.log(req.body);
        return res.json(catraca);
    }
}