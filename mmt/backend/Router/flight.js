const {Router} = require('express');
const flightModel = require('../Model/flightmodel')

const flightRouter = Router();

flightRouter.post('/',async(req,res,next)=>{
          const allflight = await flightModel.find({...req.body});

          res.send(allflight);
})


module.exports = flightRouter;