const {Router} = require('express');
const { default: mongoose } = require('mongoose');
const flightModel = require('../Model/flightmodel')
const flightbookingModel = require('../Model/flightbooking');

const flightRouter = Router();

flightRouter.post('/',async(req,res,next)=>{
          const allflight = await flightModel.find({...req.body});

          res.send(allflight);
})
// flightRouter.post('/data',async(req,res)=>{
//       const allflight = await flightModel.create(req.body);

//       res.send("done");
// })

flightRouter.post('/get',async(req,res)=>{

    const data = await flightModel.find({...req.body});
    res.send(data);
})


flightRouter.get('/:id',async(req,res)=>{
    const { id} = req.params;
    const data = await flightModel.findOne({_id : mongoose.Types.ObjectId(id)})
    res.send(data);
})
flightRouter.post('/booking',async(req,res)=>{
    const data = await flightbookingModel.create(req.body);
    res.send({
        status : 200,
        massage : true
    })
})

module.exports = flightRouter;