const express = require('express')
const app = express()
const port = 3000;
const axios = require('axios')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('./controllers/customerlogger')
const cron = require('node-cron')
const validator = require('validatorjs')
const jwt = require('jsonwebtoken')
const {persons} = require('./data')
app.use(express.json())

app.use(cors())
app.use(helmet())


// console.log(persons)

// app.use((req,res,next)=>{
//     req.user = {
//         name:'kala',
//         age:29
//     }

// })


// cron.schedule('* * * * *', () => {
//     console.log('running a task every minute');
//   });

cron.schedule('1-5 * * * *', () => {
    console.log('running every minute to 1 from 5');
  });

console.log('first task is intiated')
// axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{

//     console.log(response.data)

//     logger.customerLogger.log('info','successfuly got list of customers',response.data)
// }).catch((err)=>{
//     console.log(err)
//     logger.customerLogger.log('error','error in finding customers')
// })

const result = jwt.sign({id:1},'secret message',{expiresIn:'1d'})

// console.log(result)

const found = jwt.verify(result,'secret message',{expiresIn:'1d'})

console.log(found)



app.post('/data', async(req,res)=>{

  try{

    return res.json({message:req.body})

  }catch(err){
    return res.json({message:err.message})
  }

})




app.listen(port,()=>{
    console.log(`Listening on the port ${port}`)
})
