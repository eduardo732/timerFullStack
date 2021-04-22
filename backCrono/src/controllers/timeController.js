'use strict'

const  timeModel  = require('../models/timeModel');
const controller = {
    addTime: async (req,res) => {
        const params = req.body;
        if((/[0-9]/g).test(params.minute) == false || (/[0-9]/g).test(params.second) == false) return res.status(500).send({message:'Error with the create'});
        const time =  await timeModel.create({minutes: params.minute, seconds: params.second})
                    .then((time) => {
                        return res.status(200).send(time);
                    })
                    .catch((err) => res.status(500).send({message:'Error with the create'}));
    },
    getTimes: async (req,res) =>{
        const allTimes = await timeModel.findAll()
                    .then((times) => {
                        return res.status(200).send(times);
                    })
                    .catch((err) => res.status(500).send({message:'Error with get times'}));
    }
}

module.exports=controller;